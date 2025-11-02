"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import styles from "./BestSelling.module.css"

const bestSellers = [
  { 
    name: "Building Blocks Set", 
    sales: "1,234 sold",
    image: "/colorful-building-blocks.png",
    alt: "Building Blocks Set"
  },
  { 
    name: "Teddy Bear Collection", 
    sales: "987 sold",
    image: "/cute-teddy-bear-plush-toy.jpg",
    alt: "Teddy Bear Collection"
  },
  { 
    name: "Puzzle Adventure", 
    sales: "756 sold",
    image: "/kids-playing-with-building-blocks-and-puzzles.jpg",
    alt: "Puzzle Adventure"
  }
]

export default function BestSelling() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Best Selling Toys
        </motion.h2>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our most popular toys loved by children everywhere
        </motion.p>
        
        <motion.div 
          className={styles.productGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {bestSellers.map((product, index) => (
            <motion.div 
              key={product.name} 
              className={styles.productCard}
              initial={{ opacity: 0, y: 80, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -15,
                scale: 1.03,
                rotateX: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className={styles.badge}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.5, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                #{index + 1} Best Seller
              </motion.div>
              
              <motion.div 
                className={styles.imageContainer}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={product.image}
                  alt={product.alt}
                  width={280}
                  height={200}
                  className={styles.productImage}
                  style={{ width: 'auto', height: 'auto' }}
                />
              </motion.div>
              
              <motion.div 
                className={styles.productInfo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.7, duration: 0.6 }}
              >
                <motion.h3 
                  className={styles.productName}
                  whileHover={{ color: "#4299e1" }}
                  transition={{ duration: 0.2 }}
                >
                  {product.name}
                </motion.h3>
                <p className={styles.sales}>{product.sales}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}