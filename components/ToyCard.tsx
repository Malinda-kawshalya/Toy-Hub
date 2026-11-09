"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import styles from "./ToyCard.module.css"
import { formatPrice } from "@/lib/products"
import { productOrderLink, productPath } from "@/lib/whatsapp"

interface ToyCardProps {
  id: string
  name: string
  image: string
  category?: string
  description?: string
  price?: number | null
  inStock?: boolean
}

export default function ToyCard({ id, name, image, category = "others", description, price = null, inStock = true }: ToyCardProps) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
    >
      
      <Link href={productPath(id)} className={styles.imageWrapper} aria-label={`View ${name}`}>
        <img 
          src={image || "/placeholder.svg"} 
          alt={name}
          className={styles.image}
        />
      </Link>
      
      <div className={styles.content}>
        <h3 className={styles.name}><Link href={productPath(id)}>{name}</Link></h3>
        {description && <p className={styles.description}>{description}</p>}
        <p className={styles.price}>{formatPrice(price)}</p>
        <Link href={productPath(id)} className={styles.details}>View details</Link>
        {inStock ? <a className={styles.order} href={productOrderLink({ id, name, category, price })} target="_blank" rel="noopener noreferrer">Order on WhatsApp</a> : <span className={styles.unavailable}>Out of stock</span>}
      </div>
    </motion.div>
  )
}
