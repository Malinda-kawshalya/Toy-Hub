"use client"

import styles from "./Testimonials.module.css"

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
]

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>What Parents Say</h2>
        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <div className={styles.rating}>
                {"★".repeat(testimonial.rating)}
              </div>
              <p className={styles.text}>"{testimonial.text}"</p>
              <h4 className={styles.name}>- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}