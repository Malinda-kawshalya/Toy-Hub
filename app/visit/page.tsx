"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import styles from "./visit.module.css"

export default function VisitPage() {
  const [activeImage, setActiveImage] = useState(0)

  const galleryImages = [
    "/store-interior-toys.jpg",
    "/store-play-area.jpg",
    "/store-display-shelf.jpg",
    "/store-front-entrance.jpg",
  ]

  const handleImageClick = (index: number) => {
    setActiveImage(index)
  }

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>
            Come <span className={styles.gradient}>Visit Us</span>!
          </h1>
          <p className={styles.heroSubtext}>Find us easily and experience the magic of play.</p>
        </motion.div>
      </section>

      <section className={styles.section}>
        <motion.div
          className={styles.mapContainer}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.123456789!2d79.957123456789!3d6.914123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNo.%20746%2F2%2C%20Thalahena%20Rd%2C%20Malabe!5e0!3m2!1sen!2slk!4v1697051234567!5m2!1sen!2slk"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kidz Dreams Store Location"
          ></iframe>
        </motion.div>

        <div className={styles.infoGrid}>
          <motion.div
            className={styles.infoCard}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className={styles.icon}>📍</div>
            <h3 className={styles.cardTitle}>Our Address</h3>
            <p className={styles.cardText}>
              No. 746/2, Thalahena Rd, Malabe
              <br />
              <strong>Landmarks:</strong> Near Malabe Junction, opposite the SLIIT campus
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
            <h3 className={styles.cardTitle}>Opening Hours</h3>
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
            <h3 className={styles.cardTitle}>Contact Us</h3>
            <p className={styles.cardText}>
              (+94) 112 075 995
              <br />
              (+94) 716 207 888
              <br />
              kidzdreamsofficial@gmail.com
              <br />
              <a href="https://facebook.com/kidzdreams" className={styles.socialLink}>Facebook</a> |{" "}
              <a href="https://instagram.com/kidzdreams" className={styles.socialLink}>Instagram</a>
            </p>
          </motion.div>
        </div>

        <motion.div
          className={styles.parkingInfo}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <h3 className={styles.cardTitle}>Parking & Accessibility</h3>
          <p className={styles.cardText}>
            <strong>Parking:</strong> Ample parking available in front of the store and nearby streets.
            <br />
            <strong>Accessibility:</strong> Wheelchair-accessible entrance and restrooms. Elevators available for multi-level access.
          </p>
        </motion.div>

        <motion.div
          className={styles.galleryContainer}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <h3 className={styles.cardTitle}>Explore Our Store</h3>
          <div className={styles.gallery}>
            <div className={styles.mainImage}>
              <img src={galleryImages[activeImage]} alt={`Store interior ${activeImage + 1}`} />
            </div>
            <div className={styles.thumbnails}>
              {galleryImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className={`${styles.thumbnail} ${activeImage === index ? styles.activeThumbnail : ""}`}
                  onClick={() => handleImageClick(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>© {new Date().getFullYear()} Kidz Dreams. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
          <span> | </span>
          <a href="/terms" className={styles.footerLink}>Terms of Service</a>
          <span> | </span>
          <a href="/contact" className={styles.footerLink}>Contact Us</a>
        </div>
      </footer>
    </main>
  )
}