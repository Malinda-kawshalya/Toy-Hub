"use client"

import styles from "./BrandLogos.module.css"

const brands = ["LEGO", "Mattel", "Hasbro", "Fisher-Price", "Playmobil"]

export default function BrandLogos() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Trusted Brands</h2>
        <div className={styles.logoGrid}>
          {brands.map((brand, index) => (
            <div key={brand} className={styles.logoCard}>
              <span className={styles.brandName}>{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}