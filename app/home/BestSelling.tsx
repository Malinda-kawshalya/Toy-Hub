"use client"

import ProductCollection from "@/components/ProductCollection"
import styles from "./BestSelling.module.css"

export default function BestSelling() {
  return <section className={styles.section}><div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
    <h2 className={styles.title}>Best Selling Toys</h2>
    <p className={styles.subtitle}>Discover our most popular toys</p>
    <ProductCollection placement="bestSeller" limit={6} />
  </div></section>
}
