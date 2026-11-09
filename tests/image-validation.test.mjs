import { test } from "node:test"
import assert from "node:assert/strict"
import { validateImageFile, maxImageBytes } from "../lib/image-validation.ts"

test("supported product images pass file validation", () => {
  for (const type of ["image/jpeg", "image/png", "image/webp", "image/gif"]) assert.doesNotThrow(() => validateImageFile({ type, size: 1024 }))
})
test("empty, oversized and unsupported files are rejected", () => {
  for (const file of [{ type: "image/png", size: 0 }, { type: "image/png", size: maxImageBytes + 1 }, { type: "image/svg+xml", size: 100 }, { type: "application/pdf", size: 100 }]) assert.throws(() => validateImageFile(file))
})
