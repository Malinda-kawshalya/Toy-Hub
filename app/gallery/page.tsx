"use client"

import { motion } from "framer-motion"
import styles from "./gallery.module.css"

export default function GalleryPage() {
  const images = [
    { src: "/happy-children-playing-with-toys-in-colorful-toy-s.jpg", alt: "Kids playing" },
    { src: "/colorful-toy-display-shelves-with-educational-toys.jpg", alt: "Toy displays" },
    { src: "/child-birthday-party-in-toy-store-with-balloons.jpg", alt: "Birthday party" },
    { src: "/toy-shop-storefront-with-bright-colors-and-balloon.jpg", alt: "Store front" },
    { src: "/kids-playing-with-building-blocks-and-puzzles.jpg", alt: "Building blocks" },
    { src: "/plush-toys-and-stuffed-animals-display.jpg", alt: "Plush toys" },
  ]

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>
            Our <span className={styles.gradient}>Gallery</span>
          </h1>
          <p className={styles.heroSubtext}>See the magic and joy we create every day!</p>
        </motion.div>
      </section>

      <section className={styles.section}>
        <div className={styles.gallery}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={styles.galleryItem}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.alt} />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
