"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import styles from "./contact.module.css"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We'll get back to you soon! 🎉")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>
            Get in <span className={styles.gradient}>Touch</span>
          </h1>
          <p className={styles.heroSubtext}>We'd love to hear from you! Send us a message.</p>
        </motion.div>
      </section>

      <section className={styles.section}>
        <div className={styles.contactGrid}>
          <motion.div
            className={styles.formContainer}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.formTitle}>Send Us a Message</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  placeholder="Tell us what's on your mind..."
                />
              </div>

              <motion.button
                type="submit"
                className={styles.submitBtn}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message 🚀
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            className={styles.infoContainer}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className={styles.infoTitle}>Contact Information</h2>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📍</div>
              <div>
                <h4>Visit Us</h4>
                <p>123 Toy Street, Fun City, FC 12345</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📞</div>
              <div>
                <h4>Call Us</h4>
                <p>(555) 123-4567</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📧</div>
              <div>
                <h4>Email Us</h4>
                <p>hello@toyland.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>🕐</div>
              <div>
                <h4>Store Hours</h4>
                <p>
                  Mon-Fri: 9 AM - 7 PM
                  <br />
                  Sat: 10 AM - 8 PM
                  <br />
                  Sun: 11 AM - 6 PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
