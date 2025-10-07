"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import styles from "./CountdownBanner.module.css"

export default function CountdownBanner() {
  const targetDate = new Date("2025-12-31T10:00:00").getTime()
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = targetDate - now

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return (
    <motion.section
      className={styles.banner}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>🎉 Grand Opening Coming Soon!</h2>
        <p className={styles.subtitle}>Join us for the biggest toy celebration!</p>

        <div className={styles.countdown}>
          {Object.entries(timeLeft).map(([unit, value]) => (
            <motion.div
              key={unit}
              className={styles.timeBox}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={styles.timeValue}>{value}</div>
              <div className={styles.timeLabel}>{unit}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
