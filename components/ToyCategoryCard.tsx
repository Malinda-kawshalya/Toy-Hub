"use client"

import { motion } from "framer-motion"
import styles from "./ToyCategoryCard.module.css"

interface ToyCategoryCardProps {
  icon: string
  title: string
  description: string
  color: string
}

export default function ToyCategoryCard({ icon, title, description, color }: ToyCategoryCardProps) {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.iconWrapper} style={{ background: color }}>
        <span className={styles.icon}>{icon}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <motion.button className={styles.button} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        Explore More →
      </motion.button>
    </motion.div>
  )
}
