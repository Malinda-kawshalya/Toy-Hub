import { after, before, test } from "node:test"
import { readFileSync } from "node:fs"
import { initializeTestEnvironment, assertFails, assertSucceeds } from "@firebase/rules-unit-testing"
import { doc, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getBytes, deleteObject, listAll } from "firebase/storage"

let environment
const bytes = new Uint8Array([137, 80, 78, 71])
const runId = Date.now()
const path = name => `products/admin/${runId}-${name}`
before(async () => {
  environment = await initializeTestEnvironment({ projectId: "demo-toy-hub", firestore: { rules: readFileSync("firestore.rules", "utf8") }, storage: { rules: readFileSync("storage.rules", "utf8") } })
  await environment.withSecurityRulesDisabled(async context => {
    await setDoc(doc(context.firestore(), "admins", "admin"), { enabled: true })
    await setDoc(doc(context.firestore(), "admins", "disabled"), { enabled: false })
  })
})
after(async () => { await environment?.cleanup() })

test("approved admin uploads an image and visitors can download it", async () => {
  const storage = environment.authenticatedContext("admin").storage()
  await assertSucceeds(uploadBytes(ref(storage, path("readable.png")), bytes, { contentType: "image/png" }))
  await assertSucceeds(getBytes(ref(environment.unauthenticatedContext().storage(), path("readable.png"))))
})
for (const role of [null, "customer", "disabled"]) {
  test(`${role ?? "anonymous"} cannot upload product images`, async () => {
    const storage = role ? environment.authenticatedContext(role).storage() : environment.unauthenticatedContext().storage()
    await assertFails(uploadBytes(ref(storage, `products/${role || "visitor"}/denied.png`), bytes, { contentType: "image/png" }))
  })
}
test("storage rejects unsupported content, oversized images and another uploader's path", async () => {
  const storage = environment.authenticatedContext("admin").storage()
  await assertFails(uploadBytes(ref(storage, "products/admin/file.svg"), bytes, { contentType: "image/svg+xml" }))
  await assertFails(uploadBytes(ref(storage, "products/admin/large.png"), new Uint8Array(5 * 1024 * 1024 + 1), { contentType: "image/png" }))
  await assertFails(uploadBytes(ref(storage, "products/someone-else/wrong.png"), bytes, { contentType: "image/png" }))
})
test("images cannot be overwritten or listed; only admins can delete", async () => {
  const storage = environment.authenticatedContext("admin").storage()
  const image = ref(storage, path("unique.png"))
  await assertSucceeds(uploadBytes(image, bytes, { contentType: "image/png" }))
  await assertFails(uploadBytes(image, bytes, { contentType: "image/png" }))
  await assertFails(listAll(ref(storage, "products/admin")))
  await assertFails(deleteObject(ref(environment.authenticatedContext("customer").storage(), image.fullPath)))
  await assertSucceeds(deleteObject(image))
})
