"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"
import styles from "./contact.module.css"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for your message! We'll get back to you soon! 🎉")
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqItems = [
    {
      question: "Do you take pre-orders?",
      answer: "Yes, we accept pre-orders for select items. Contact us to check availability and place your order.",
    },
    {
      question: "Are all toys safe for toddlers?",
      answer: "All our toys meet strict safety standards and are labeled with age recommendations for toddler safety.",
    },
    {
      question: "Do you offer gift wrapping?",
      answer: "Absolutely! We provide gift wrapping services for a small fee. Let us know during checkout.",
    },
  ]

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>
            Get in <span className={styles.gradient}>Touch</span>
          </h1>
          <p className={styles.heroSubtext}>We’d love to hear from you!</p>
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
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  placeholder="What's this about?"
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
                <p>No. 746/2, Thalahena Rd, Malabe</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📞</div>
              <div>
                <h4>Call Us</h4>
                <p>(+94) 112 075 995 <br /> 
                   (+94) 716 207 888</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📧</div>
              <div>
                <h4>Email Us</h4>
                <p>kidzdreamsofficial@gmail.com</p>
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
                  Sun: 10 AM - 8 PM
                </p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>🌐</div>
              <div>
                <h4>Follow Us</h4>
                <p className={styles.socialLinks}>
                  <a href="https://facebook.com/kidzdreams" target="_blank" rel="noopener noreferrer">Facebook</a>
                  <span> | </span>
                  <a href="https://instagram.com/kidzdreams" target="_blank" rel="noopener noreferrer">Instagram</a>
                  <span> | </span>
                  <a href="https://twitter.com/kidzdreams" target="_blank" rel="noopener noreferrer">Twitter</a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className={styles.section}>
        <motion.div
          className={styles.faqContainer}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.formTitle}>Frequently Asked Questions</h2>
          {faqItems.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span>{item.question}</span>
                <span className={styles.faqToggle}>{openFaq === index ? "−" : "+"}</span>
              </button>
              <motion.div
                id={`faq-answer-${index}`}
                className={styles.faqAnswer}
                initial={{ height: 0, opacity: 0 }}
                animate={{ 
                  height: openFaq === index ? "auto" : 0, 
                  opacity: openFaq === index ? 1 : 0 
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <p>{item.answer}</p>
              </motion.div>
            </div>
          ))}
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