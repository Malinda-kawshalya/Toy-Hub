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

      <motion.div 
        className={styles.heroContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: 80, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: 1.2, 
            ease: "easeOut",
            delay: 0.3
          }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Welcome to{" "}
          </motion.span>
          <motion.span 
            className={styles.gradient}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8, ease: "backOut" }}
          >
            Kids Dreams
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            Where Fun Begins!
          </motion.span>
        </motion.h1>

        <motion.p
          className={styles.heroSubtext}
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          Your one-stop shop for fun, learning, and imagination
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 2, ease: "backOut" }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/visit">
            <motion.button 
              className={styles.ctaButton}
              whileHover={{ 
                boxShadow: "0 10px 30px rgba(0, 170, 255, 0.4)" 
              }}
            >
              Visit Us Today
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

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
