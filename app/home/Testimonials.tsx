"use client"

import { motion } from "framer-motion";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Sarah Johnson",
    text: "Amazing quality toys! My kids love everything we've bought here.",
    rating: 5
  },
  {
    name: "Mike Chen", 
    text: "Great selection and fast shipping. Highly recommended!",
    rating: 5
  },
  {
    name: "Emma Davis",
    text: "The best toy store online. Safe, fun, and educational toys.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>What Parents Say</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={styles.testimonialCard}
              initial={{ opacity: 0, rotateY: -30, y: 50 }}
              whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.08, rotateY: 5, rotateX: 3 }}
            >
              <motion.div
                className={styles.floatingCircle}
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: index * 0.3
                }}
              />
              <div className={styles.rating}>
                {"★".repeat(testimonial.rating)}
              </div>
              <p className={styles.text}>"{testimonial.text}"</p>
              <h4 className={styles.name}>- {testimonial.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
