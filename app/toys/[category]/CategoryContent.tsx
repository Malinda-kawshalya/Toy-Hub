"use client"

import { motion } from "framer-motion"
import ToyCard from "@/components/ToyCard"
import styles from "./category.module.css"

interface Toy {
  id: string
  name: string
  image: string
  category: string
}

interface CategoryContentProps {
  toys: Toy[]
  categoryTitle: string
}

export default function CategoryContent({ toys, categoryTitle }: CategoryContentProps) {
  return (
    <main className={styles.main}>
      {/* Header */}
      <section className={styles.header}>
        <motion.div
          className={styles.headerContent}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className={styles.title}>{categoryTitle}</h1>
        </motion.div>
      </section>

      {/* Toys Grid */}
      <section className={styles.toysSection}>
        <div className={styles.toysGrid}>
          {toys.map((toy, index) => (
            <motion.div
              key={toy.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <ToyCard {...toy} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}