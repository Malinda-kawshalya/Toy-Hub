"use client"

import ToyCard from "./ToyCard"
import { useProducts } from "./ProductsProvider"
import styles from "./ProductCollection.module.css"

export default function ProductCollection({ category, placement, limit }: {
  category?: string; placement?: "featured" | "newArrival" | "bestSeller"; limit?: number
}) {
  const { products, loading, error } = useProducts()
  if (loading) return <p className={styles.message} role="status">Loading products…</p>
  if (error) return <p className={styles.message} role="alert">{error}</p>
  const filtered = products.filter(product => (!category || product.category === category) && (!placement || product[placement]))
  const visible = limit ? filtered.slice(0, limit) : filtered
  if (!visible.length) return <p className={styles.message}>No products available here yet. Please check back soon.</p>
  return <div className={styles.grid}>{visible.map(product => <ToyCard key={product.id} {...product} />)}</div>
}
