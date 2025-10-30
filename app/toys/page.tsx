"use client"

import { motion } from "framer-motion"
import ToyCategoryCard from "@/components/ToyCategoryCard"
import styles from "./toys.module.css"

export default function ToysPage() {
  const categories = [
    {
      icon: "👶",
      title: "Baby Toys",
      description: "Safe and soft toys perfect for infants and toddlers",
      color: "linear-gradient(135deg, #FFB6C1 0%, #FF69B4 100%)",
    },
    {
      icon: "�",
      title: "Educational Toys",
      description: "STEM toys, puzzles, and learning games that make education fun",
      color: "linear-gradient(135deg, #FFF176 0%, #FFD54F 100%)",
    },
    {
      icon: "🏎️",
      title: "Model Cars",
      description: "Die-cast cars, racing sets, and collectible vehicle models",
      color: "linear-gradient(135deg, #00A0FF 0%, #0080CC 100%)",
    },
    {
      icon: "⚽",
      title: "Outdoor Toys",
      description: "Sports equipment, bikes, and active play essentials",
      color: "linear-gradient(135deg, #4CAF50 0%, #388E3C 100%)",
    },
    {
      icon: "🧩",
      title: "Puzzles",
      description: "Brain teasers, jigsaw puzzles, and logic games",
      color: "linear-gradient(135deg, #FF5722 0%, #E64A19 100%)",
    },
    {
      icon: "🎮",
      title: "RC Items",
      description: "Remote control cars, drones, and helicopters for endless fun",
      color: "linear-gradient(135deg, #9C27B0 0%, #7B1FA2 100%)",
    },
    {
      icon: "🧸",
      title: "Teddys",
      description: "Cuddly teddy bears and soft plush companions",
      color: "linear-gradient(135deg, #FF008E 0%, #CC006F 100%)",
    },
  ]

  const featuredToys = [
    {
      name: "Rainbow Building Blocks",
      category: "Educational",
      image: "/colorful-building-blocks.png",
    },
    {
      name: "Cuddly Bear Collection",
      category: "Plush",
      image: "/cute-teddy-bear-plush-toy.jpg",
    },
    {
      name: "Space Explorer Set",
      category: "Action Figures",
      image: "/space-astronaut-action-figure-toy.jpg",
    },
  ]

  return (
    <main className={styles.main}>
      {/* Banner Section */}
      <section className={styles.bannerSection}>
        <img 
          src="/toy collec.png" 
          alt="Our Amazing Toy Collection" 
          className={styles.bannerImage} 
        />
      </section>



      {/* Categories */}
      <section className={styles.section}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Browse by Category
        </motion.h2>

        <div className={styles.categoryGrid}>
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ToyCategoryCard {...category} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Toys */}
      <section className={`${styles.section} ${styles.featuredSection}`}>
        <motion.h2
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Featured <span className={styles.gradient}>Favorites</span>
        </motion.h2>

        <div className={styles.featuredGrid}>
          {featuredToys.map((toy, index) => (
            <motion.div
              key={toy.name}
              className={styles.featuredCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              <div className={styles.featuredImage}>
                <img src={toy.image || "/placeholder.svg"} alt={toy.name} />
              </div>
              <div className={styles.featuredContent}>
                <span className={styles.featuredCategory}>{toy.category}</span>
                <h3 className={styles.featuredName}>{toy.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Safety Section */}
      <section className={styles.section}>
        <motion.div
          className={styles.safetyBanner}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className={styles.safetyIcon}>🛡️</div>
          <h2 className={styles.safetyTitle}>Safety & Quality First</h2>
          <p className={styles.safetyText}>
            All our toys are made with love, care, and safety-tested materials. We ensure every product meets the
            highest safety standards so you can shop with confidence.
          </p>
          <div className={styles.safetyBadges}>
            <span className={styles.badge}>✓ Safety Tested</span>
            <span className={styles.badge}>✓ Non-Toxic</span>
            <span className={styles.badge}>✓ Age Appropriate</span>
            <span className={styles.badge}>✓ Quality Guaranteed</span>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
