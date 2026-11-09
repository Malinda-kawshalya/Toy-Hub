import { test, expect } from "@playwright/test"
import { initializeTestEnvironment } from "@firebase/rules-unit-testing"
import { doc, setDoc } from "firebase/firestore"
import { readFileSync } from "node:fs"

let environment
const email = `images-${Date.now()}@example.test`
const password = "Image-Test-123!"
const productName = `Uploaded Toy ${Date.now()}`

test.beforeAll(async () => {
  environment = await initializeTestEnvironment({ projectId: "demo-toy-hub", firestore: { host: "127.0.0.1", port: 8080, rules: readFileSync("firestore.rules", "utf8") } })
  const response = await fetch("http://127.0.0.1:9099/identitytoolkit.googleapis.com/v1/accounts:signUp?key=demo-api-key", {
    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password, returnSecureToken: true }),
  })
  const account = await response.json()
  if (!response.ok) throw new Error(JSON.stringify(account))
  await environment.withSecurityRulesDisabled(context => setDoc(doc(context.firestore(), "admins", account.localId), { enabled: true }))
})
test.afterAll(async () => { await environment?.cleanup() })

test("local image upload, product view, quantity, stock filters and sorting", async ({ page, context }) => {
  await page.goto("/admin")
  await page.getByLabel("Email", { exact: true }).fill(email)
  await page.getByLabel("Password", { exact: true }).fill(password)
  await page.getByRole("button", { name: "Sign in", exact: true }).click()
  await page.getByRole("button", { name: "Add product", exact: true }).click()
  await page.getByLabel("Product name", { exact: true }).fill(productName)
  await page.getByLabel("Category", { exact: true }).selectOption("educational-toys")
  await page.getByLabel("Price (LKR)").fill("2500")
  await page.getByLabel("Description", { exact: true }).fill("A toy uploaded from the local file system.")
  const chooser = page.getByLabel("Choose image from computer", { exact: false })
  await chooser.setInputFiles({ name: "invalid.svg", mimeType: "image/svg+xml", buffer: Buffer.from("<svg />") })
  await expect(page.getByRole("alert").filter({ hasText: "Choose a JPG" })).toBeVisible()
  await chooser.setInputFiles("public/colorful-building-blocks.png")
  await expect(page.getByRole("img", { name: "Product preview" })).toBeVisible()
  await page.getByRole("button", { name: "Remove selected image" }).click()
  await expect(page.getByRole("img", { name: "Product preview" })).toHaveCount(0)
  await chooser.setInputFiles("public/colorful-building-blocks.png")
  await expect(page.getByRole("button", { name: "Save product" })).toBeEnabled()
  await page.getByRole("button", { name: "Save product" }).click()
  await expect(page.getByRole("status")).toContainText("Product saved", { timeout: 20000 })
  await page.getByRole("textbox", { name: "Search products" }).fill(productName)
  const view = page.getByRole("link", { name: `View ${productName}`, exact: true })
  const productUrl = await view.getAttribute("href")
  const store = await context.newPage()
  await store.goto(productUrl)
  await expect(store.getByRole("heading", { name: productName, exact: true })).toBeVisible()
  const image = store.getByRole("img", { name: productName, exact: true })
  await expect(image).toHaveAttribute("src", /127\.0\.0\.1:9199/)
  await expect.poll(() => image.evaluate(element => element.naturalWidth)).toBeGreaterThan(0)
  await store.getByLabel("Quantity", { exact: true }).fill("3")
  await expect(store.getByText("LKR 7,500.00", { exact: true })).toBeVisible()
  const message = new URL(await store.getByRole("link", { name: "Order on WhatsApp", exact: true }).first().getAttribute("href")).searchParams.get("text")
  expect(message).toContain("Quantity: 3")
  expect(message).toContain("Estimated total: LKR 7500.00")
  expect(message).toContain("/product/?id=")
  await store.getByLabel("Quantity", { exact: true }).fill("0")
  await expect(store.getByRole("button", { name: "Order on WhatsApp", exact: true })).toBeDisabled()
  await store.getByLabel("Quantity", { exact: true }).fill("1")
  await store.setViewportSize({ width: 390, height: 844 })
  expect(await store.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
  await store.screenshot({ path: "test-results/product-mobile.png", fullPage: true })
  await page.getByLabel("Filter by stock").selectOption("out")
  await expect(view).toHaveCount(0)
  await page.getByLabel("Filter by stock").selectOption("in")
  await expect(view).toBeVisible()
  await page.getByLabel("Sort products").selectOption("price-desc")
  await expect(view).toBeVisible()
  page.once("dialog", dialog => dialog.accept())
  await page.getByRole("button", { name: `Delete ${productName}`, exact: true }).click()
  await expect(page.getByRole("status")).toContainText("Product deleted")
  await expect(store.getByRole("heading", { name: "Product unavailable", exact: true })).toBeVisible()
})

test("missing product links show an unavailable message", async ({ page }) => {
  await page.goto("/product/?id=does-not-exist")
  await expect(page.getByRole("heading", { name: "Product unavailable" })).toBeVisible()
  await expect(page.getByRole("link", { name: "Browse all toys" })).toBeVisible()
})
