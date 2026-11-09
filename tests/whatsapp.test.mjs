import { test } from "node:test"
import assert from "node:assert/strict"
import { productOrderLink, whatsappLink } from "../lib/whatsapp.ts"

test("orders include the product reference, quantity, price and product URL", () => {
  const url = new URL(productOrderLink({ id: "blocks-1", name: "Blocks & Fun 🎁", category: "educational-toys", price: 1250 }))
  assert.equal(url.hostname, "wa.me")
  assert.equal(url.pathname, "/94716207888")
  const message = url.searchParams.get("text")
  for (const text of ["Blocks & Fun 🎁", "blocks-1", "LKR 1250.00", "Quantity: 1", "/product/?id=blocks-1"]) assert.ok(message.includes(text))
})
test("unpriced products ask the shop to confirm the price", () => {
  assert.ok(new URL(productOrderLink({ id: "1", name: "Bear", category: "teddys", price: null })).searchParams.get("text").includes("Please confirm the price."))
})
test("messages are encoded without adding URL parameters", () => {
  const url = new URL(whatsappLink("Toys & gifts? #1 + 2"))
  assert.deepEqual([...url.searchParams], [["text", "Toys & gifts? #1 + 2"]])
})

test("chosen quantity and estimated total appear in the message", () => {
  const message = new URL(productOrderLink({ id: "toy & gift", name: "Bear", category: "teddys", price: 1500 }, 3)).searchParams.get("text")
  assert.ok(message.includes("Quantity: 3"))
  assert.ok(message.includes("Estimated total: LKR 4500.00"))
  assert.ok(message.includes("/product/?id=toy%20%26%20gift"))
})

test("invalid quantities never produce invalid order totals", () => {
  for (const quantity of [0, -2, NaN, Infinity]) {
    assert.ok(new URL(productOrderLink({ id: "1", name: "Bear", category: "teddys", price: 10 }, quantity)).searchParams.get("text").includes("Quantity: 1"))
  }
})
