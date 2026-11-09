import { readFileSync } from "node:fs"
import { after, before, beforeEach, test } from "node:test"
import assert from "node:assert/strict"
import { initializeTestEnvironment, assertFails, assertSucceeds } from "@firebase/rules-unit-testing"
import { collection, deleteDoc, doc, getDoc, getDocs, serverTimestamp, setDoc, updateDoc, writeBatch } from "firebase/firestore"

let environment
const product = () => ({ name: "Rainbow Blocks", description: "A colorful set", category: "educational-toys", image: "/colorful-building-blocks.png", price: 1500, inStock: true, featured: false, newArrival: true, bestSeller: false, updatedAt: serverTimestamp() })
const ref = db => doc(db, "products", "blocks")
before(async () => {
  environment = await initializeTestEnvironment({ projectId: "demo-toy-hub-rules", firestore: { host: "127.0.0.1", port: 8080, rules: readFileSync(new URL("../firestore.rules", import.meta.url), "utf8") } })
})
beforeEach(async () => {
  await environment.clearFirestore()
  await environment.withSecurityRulesDisabled(async context => {
    const db = context.firestore()
    await setDoc(doc(db, "admins", "admin"), { enabled: true })
    await setDoc(doc(db, "admins", "disabled"), { enabled: false })
    await setDoc(ref(db), product())
  })
})
after(async () => { await environment?.cleanup() })

test("visitors can read and list products", async () => {
  const db = environment.unauthenticatedContext().firestore()
  assert.equal((await assertSucceeds(getDoc(ref(db)))).data().name, "Rainbow Blocks")
  assert.equal((await assertSucceeds(getDocs(collection(db, "products")))).size, 1)
})
for (const role of [null, "customer", "disabled"]) {
  test(`${role ?? "anonymous"} cannot create, update or delete products`, async () => {
    const db = role ? environment.authenticatedContext(role).firestore() : environment.unauthenticatedContext().firestore()
    await assertFails(setDoc(doc(db, "products", "new"), product()))
    await assertFails(updateDoc(ref(db), { name: "Tampered", updatedAt: serverTimestamp() }))
    await assertFails(deleteDoc(ref(db)))
  })
}
test("approved admin can create, update and delete products", async () => {
  const db = environment.authenticatedContext("admin").firestore()
  await assertSucceeds(setDoc(doc(db, "products", "new"), product()))
  await assertSucceeds(updateDoc(ref(db), { name: "Edited Blocks", price: null, updatedAt: serverTimestamp() }))
  assert.equal((await getDoc(ref(db))).data().price, null)
  await assertSucceeds(deleteDoc(ref(db)))
})
for (const [field, value] of [["price", -1], ["price", "1500"], ["category", "unknown"], ["image", "javascript:alert(1)"], ["image", "//external.test/image.png"], ["inStock", "yes"], ["name", ""], ["unexpected", true], ["updatedAt", new Date(0)]]) {
  test(`rules reject invalid ${field}: ${String(value)}`, async () => {
    const db = environment.authenticatedContext("admin").firestore()
    await assertFails(setDoc(ref(db), { ...product(), [field]: value }))
  })
}
test("all original products satisfy the deployed schema", async () => {
  const db = environment.authenticatedContext("admin").firestore()
  const seeds = JSON.parse(readFileSync(new URL("../lib/seed-products.json", import.meta.url)))
  const batch = writeBatch(db)
  for (const { id, ...input } of seeds) batch.set(doc(db, "products", id), { ...input, updatedAt: serverTimestamp() })
  await assertSucceeds(batch.commit())
  assert.equal(new Set(seeds.map(seed => seed.id)).size, seeds.length)
})
test("accounts can inspect only their own admin record and cannot grant roles", async () => {
  const db = environment.authenticatedContext("customer").firestore()
  await assertSucceeds(getDoc(doc(db, "admins", "customer")))
  await assertFails(getDoc(doc(db, "admins", "admin")))
  await assertFails(getDocs(collection(db, "admins")))
  await assertFails(setDoc(doc(db, "admins", "customer"), { enabled: true }))
  await assertFails(deleteDoc(doc(environment.authenticatedContext("admin").firestore(), "admins", "admin")))
})
test("unknown collections are private", async () => {
  const db = environment.authenticatedContext("admin").firestore()
  await assertFails(setDoc(doc(db, "private", "record"), { value: "test" }))
  await assertFails(getDoc(doc(db, "private", "record")))
})
