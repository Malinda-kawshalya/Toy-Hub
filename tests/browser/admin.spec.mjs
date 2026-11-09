import { test, expect } from "@playwright/test"
import { initializeTestEnvironment } from "@firebase/rules-unit-testing"
import { doc, setDoc } from "firebase/firestore"
import { readFileSync } from "node:fs"

let environment
const password = "Local-test-only-123!"
const email = `admin-${Date.now()}@example.test`
const customer = `customer-${Date.now()}@example.test`

test.beforeAll(async () => {
  environment = await initializeTestEnvironment({ projectId: "demo-toy-hub", firestore: { rules: readFileSync("firestore.rules", "utf8") } })
  await environment.clearFirestore()
  for (const account of [email, customer]) {
    const response = await fetch("http://127.0.0.1:9099/identitytoolkit.googleapis.com/v1/accounts:signUp?key=demo-api-key", {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: account, password, returnSecureToken: true }),
    })
    const data = await response.json()
    if (!response.ok) throw new Error(JSON.stringify(data))
    if (account === email) await environment.withSecurityRulesDisabled(context => setDoc(doc(context.firestore(), "admins", data.localId), { enabled: true }))
  }
})
test.afterAll(async () => { await environment?.cleanup() })

async function login(page, account = email) {
  await page.goto("/admin")
  await page.getByLabel("Email", { exact: true }).fill(account)
  await page.getByLabel("Password", { exact: true }).fill(password)
  await page.getByRole("button", { name: "Sign in", exact: true }).click()
}

test("admin creates, edits and deletes a product reflected in the storefront", async ({ page, context }) => {
  await login(page)
  await expect(page.getByRole("heading", { name: "Products", exact: true })).toBeVisible()
  await page.getByRole("button", { name: "Add product", exact: true }).click()
  await page.getByLabel("Product name", { exact: true }).fill("Browser Test Rainbow Blocks")
  await page.getByLabel("Category", { exact: true }).selectOption("educational-toys")
  await page.getByLabel("Price (LKR)").fill("2500")
  await page.getByLabel("Description", { exact: true }).fill("Colorful blocks for creative play.")
  await page.getByLabel("Image URL or local path").fill("/colorful-building-blocks.png")
  await page.getByLabel("New arrival", { exact: true }).check()
  await page.getByRole("button", { name: "Save product" }).click()
  await expect(page.getByText("Product saved.", { exact: false })).toBeVisible()
  const store = await context.newPage()
  await store.goto("/toys/educational-toys")
  const card = store.getByRole("heading", { name: "Browser Test Rainbow Blocks", exact: true }).locator("..")
  await expect(card).toContainText("2,500.00")
  const order = card.getByRole("link", { name: "Order on WhatsApp" })
  const url = new URL(await order.getAttribute("href"))
  expect(url.hostname).toBe("wa.me")
  expect(url.searchParams.get("text")).toContain("Browser Test Rainbow Blocks")
  expect(url.searchParams.get("text")).toContain("LKR 2500.00")
  await store.goto("/")
  await expect(store.getByRole("heading", { name: "Browser Test Rainbow Blocks", exact: true })).toBeVisible()
  await page.getByRole("button", { name: "Edit Browser Test Rainbow Blocks", exact: true }).click()
  await page.getByLabel("Price (LKR)").fill("3000")
  await page.getByLabel("In stock", { exact: true }).uncheck()
  await page.getByRole("button", { name: "Save product" }).click()
  await expect(page.getByText("Product saved.", { exact: false })).toBeVisible()
  await store.goto("/toys/educational-toys")
  await expect(card).toContainText("3,000.00")
  await expect(card).toContainText("Out of stock")
  await expect(card.getByRole("link", { name: "Order on WhatsApp" })).toHaveCount(0)
  page.once("dialog", dialog => dialog.accept())
  await page.getByRole("button", { name: "Delete Browser Test Rainbow Blocks", exact: true }).click()
  await expect(page.getByText("Product deleted.", { exact: true })).toBeVisible()
  await expect(store.getByRole("heading", { name: "Browser Test Rainbow Blocks", exact: true })).toHaveCount(0)
  await page.getByRole("button", { name: "Sign out", exact: true }).click()
  await expect(page.getByRole("heading", { name: "Admin sign in" })).toBeVisible()
})

test("ordinary accounts cannot enter the admin panel", async ({ page }) => {
  await login(page, customer)
  await expect(page.getByRole("heading", { name: "Admin access required" })).toBeVisible()
  await expect(page.getByRole("button", { name: "Add product", exact: true })).toHaveCount(0)
})

test("admin login and dashboard fit a mobile viewport", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await login(page)
  await expect(page.getByRole("heading", { name: "Products", exact: true })).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
  await page.screenshot({ path: "test-results/admin-mobile.png", fullPage: true })
})
