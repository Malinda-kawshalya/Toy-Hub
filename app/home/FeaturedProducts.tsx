"use client"

import ProductCollection from "@/components/ProductCollection"
import styles from "./FeaturedProducts.module.css"

export default function FeaturedProducts() {
  return <section className={styles.section}><div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
    <h2 className={styles.title}>Featured Favorites</h2>
    <p className={styles.subtitle}>Find a new favorite for your little one</p>
    <ProductCollection placement="featured" limit={6} />
  </div></section>
}
