"use client"

import styles from "./FeaturedProducts.module.css"

const featuredProducts = [
  {
    id: 1,
    name: "Educational Building Blocks",
    price: "$29.99",
    image: "/colorful-building-blocks.png",
    rating: 5
  },
  {
    id: 2,
    name: "Cute Teddy Bear",
    price: "$19.99", 
    image: "/cute-teddy-bear-plush-toy.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Space Astronaut Figure",
    price: "$24.99",
    image: "/space-astronaut-action-figure-toy.jpg",
    rating: 4
  }
]

export default function FeaturedProducts() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Featured Products
        </h2>
        <div className={styles.grid}>
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className={styles.productCard}
            >
              <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.name} className={styles.image} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.price}>{product.price}</p>
                <div className={styles.rating}>
                  {"★".repeat(product.rating)}
                </div>
                <button className={styles.addToCart}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}