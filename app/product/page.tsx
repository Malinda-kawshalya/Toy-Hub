import { Suspense } from "react"
import type { Metadata } from "next"
import ProductDetails from "./ProductDetails"

export const metadata: Metadata = { title: "Product | Kids Dreams" }

export default function ProductPage() {
  return <Suspense fallback={<main style={{ padding: "160px 24px" }}><p role="status">Loading product…</p></main>}><ProductDetails /></Suspense>
}
