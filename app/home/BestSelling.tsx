"use client"

import styles from "./BestSelling.module.css"

const bestSellers = [
  { name: "Building Blocks Set", price: "$34.99", sales: "1,234 sold" },
  { name: "Teddy Bear Collection", price: "$22.99", sales: "987 sold" },
  { name: "Puzzle Adventure", price: "$18.99", sales: "756 sold" }
]

export default function BestSelling() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Best Selling Toys</h2>
        <div className={styles.productGrid}>
          {bestSellers.map((product, index) => (
            <div key={product.name} className={styles.productCard}>
              <div className={styles.badge}>#{index + 1} Best Seller</div>
              <h3 className={styles.productName}>{product.name}</h3>
              <p className={styles.price}>{product.price}</p>
              <p className={styles.sales}>{product.sales}</p>
              <button className={styles.buyButton}>Buy Now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}