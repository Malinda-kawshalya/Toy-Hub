"use client"

import ProductCollection from "@/components/ProductCollection"
import styles from "./NewArrivals.module.css"

export default function NewArrivals() {
  return <section className={styles.section}><div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
    <h2 className={styles.title}>New Arrivals</h2>
    <p className={styles.subtitle}>Check out our latest toy collection</p>
    <ProductCollection placement="newArrival" limit={6} />
  </div></section>
}
