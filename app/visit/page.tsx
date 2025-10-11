"use client"

import { motion } from "framer-motion"
import styles from "./visit.module.css"

export default function VisitPage() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>
            Come <span className={styles.gradient}>Visit Us</span>!
          </h1>
          <p className={styles.heroSubtext}>We can't wait to see you and your little ones!</p>
        </motion.div>
      </section>

      <section className={styles.section}>
        <div className={styles.infoGrid}>
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className={styles.icon}>📍</div>
            <h3 className={styles.cardTitle}>Location</h3>
            <p className={styles.cardText}>
              No. 746/2
              <br />
              Thalahena Rd
              <br />
              Malabe
            </p>
          </motion.div>

          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className={styles.icon}>🕐</div>
            <h3 className={styles.cardTitle}>Hours</h3>
            <p className={styles.cardText}>
              Monday - Friday: 9 AM - 7 PM
              <br />
              Saturday: 10 AM - 8 PM
              <br />
              Sunday: 10 AM - 8 PM
            </p>
          </motion.div>

          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className={styles.icon}>📞</div>
            <h3 className={styles.cardTitle}>Contact</h3>
            <p className={styles.cardText}>
              0112 075 995 
              <br />
              0716 207 888
              <br />
              kidzdreamsofficial@gmail.com
              <br />
              Follow us on social media!
            </p>
          </motion.div>
        </div>

        <motion.div
          className={styles.mapPlaceholder}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <img src="/colorful-map-location-pin-for-toy-store.jpg" alt="Store location map" />
        </motion.div>
      </section>
    </main>
  )
}
