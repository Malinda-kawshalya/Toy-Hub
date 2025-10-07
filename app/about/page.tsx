"use client"

import { motion } from "framer-motion"
import styles from "./about.module.css"

export default function AboutPage() {
  const features = [
    {
      icon: "✅",
      title: "Safe Toys",
      description: "All toys are safety-tested and certified",
    },
    {
      icon: "😊",
      title: "Friendly Staff",
      description: "Our team loves helping kids find perfect toys",
    },
    {
      icon: "🎉",
      title: "Fun Environment",
      description: "A magical space designed for play and discovery",
    },
    {
      icon: "💝",
      title: "Quality Guaranteed",
      description: "Only the best toys make it to our shelves",
    },
  ]

  return (
    <main className={styles.main}>
      {/* Hero Banner */}
      <section className={styles.hero}>
        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={styles.heroTitle}>
            About <span className={styles.gradient}>ToyLand</span>
          </h1>
          <p className={styles.heroSubtext}>Where every toy tells a story and every child finds magic</p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className={styles.section}>
        <div className={styles.storyGrid}>
          <motion.div
            className={styles.storyImage}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.imagePlaceholder}>
              <img src="/colorful-toy-shop-interior-with-happy-children-pla.jpg" alt="ToyLand Shop" />
            </div>
          </motion.div>

          <motion.div
            className={styles.storyContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={styles.sectionTitle}>Our Story</h2>
            <p className={styles.text}>
              ToyLand was born from a simple dream: to create a magical place where children's imaginations could run
              wild. Founded in 2020 by parents who understood the power of play, we've grown into a beloved community
              hub.
            </p>
            <p className={styles.text}>
              Every toy in our shop is handpicked with love, ensuring it meets our high standards for quality, safety,
              and fun. We believe that the right toy can spark creativity, build confidence, and create memories that
              last a lifetime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.section}>
        <div className={styles.missionVision}>
          <motion.div
            className={styles.missionCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <div className={styles.cardIcon}>🎯</div>
            <h3 className={styles.cardTitle}>Our Mission</h3>
            <p className={styles.cardText}>
              To spark creativity and joy in every child through carefully curated toys that inspire learning,
              imagination, and endless fun.
            </p>
          </motion.div>

          <motion.div
            className={styles.visionCard}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className={styles.cardIcon}>🌟</div>
            <h3 className={styles.cardTitle}>Our Vision</h3>
            <p className={styles.cardText}>
              To be the happiest toy shop in town, where families create magical memories and children discover the joy
              of play.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.section}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose <span className={styles.gradient}>ToyLand</span>?
        </motion.h2>

        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={styles.featureCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureText}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
