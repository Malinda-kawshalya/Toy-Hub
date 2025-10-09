"use client"

import { motion } from "framer-motion"
import styles from "./ToyCard.module.css"

interface ToyCardProps {
  id: string
  name: string
  price: number
  image: string
  category?: string
}

export default function ToyCard({ id, name, price, image, category }: ToyCardProps) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      
      <div className={styles.imageWrapper}>
        <img 
          src={image || "/placeholder.svg"} 
          alt={name}
          className={styles.image}
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>${price.toFixed(2)}</p>
      </div>
    </motion.div>
  )
}