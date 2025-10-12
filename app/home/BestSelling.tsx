"use client"

import Image from "next/image"
import styles from "./BestSelling.module.css"

const bestSellers = [
  { 
    name: "Building Blocks Set", 
    price: "$34.99", 
    sales: "1,234 sold",
    image: "/colorful-building-blocks.png",
    alt: "Building Blocks Set"
  },
  { 
    name: "Teddy Bear Collection", 
    price: "$22.99", 
    sales: "987 sold",
    image: "/cute-teddy-bear-plush-toy.jpg",
    alt: "Teddy Bear Collection"
  },
  { 
    name: "Puzzle Adventure", 
    price: "$18.99", 
    sales: "756 sold",
    image: "/kids-playing-with-building-blocks-and-puzzles.jpg",
    alt: "Puzzle Adventure"
  }
]

export default function BestSelling() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Best Selling Toys</h2>
        <p className={styles.subtitle}>Our most popular toys loved by children everywhere</p>
        
        <div className={styles.productGrid}>
          {bestSellers.map((product, index) => (
            <div key={product.name} className={styles.productCard}>
              <div className={styles.badge}>#{index + 1} Best Seller</div>
              
              <div className={styles.imageContainer}>
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={280}
                  height={200}
                  className={styles.productImage}
                />
              </div>
              
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.price}>{product.price}</p>
                <p className={styles.sales}>{product.sales}</p>
                <button className={styles.buyButton}>Buy Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}