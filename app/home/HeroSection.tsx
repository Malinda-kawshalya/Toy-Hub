"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import styles from "./HeroSection.module.css"

export default function HeroSection() {
  const floatingToys = ["🧸", "🚂", "🎨", "⚽", "🎮", "🪀", "🎪", "🎯"]

  return (
    <section className={styles.hero}>
      {/* Floating Toys Background */}
      <div className={styles.floatingToys}>
        {floatingToys.map((toy, index) => (
          <motion.div
            key={index}
            className={styles.floatingToy}
            initial={{ y: -100, opacity: 0 }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
              rotate: [0, 360],
            }}
            transition={{
              duration: 3 + index,
              repeat: Number.POSITIVE_INFINITY,
              delay: index * 0.2,
            }}
            style={{
              left: `${10 + index * 12}%`,
              top: `${20 + (index % 3) * 20}%`,
            }}
          >
            {toy}
          </motion.div>
        ))}
      </div>

      <div className={styles.heroContent}>
        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to <span className={styles.gradient}>ToyLand</span>
          <br />
          Where Fun Begins!
        </motion.h1>

        <motion.p
          className={styles.heroSubtext}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Your one-stop shop for fun, learning, and imagination!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/visit">
            <button className={styles.ctaButton}>Visit Us Today! 🎉</button>
          </Link>
        </motion.div>
      </div>

      {/* Decorative Wave */}
      <div className={styles.wave}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  )
}
