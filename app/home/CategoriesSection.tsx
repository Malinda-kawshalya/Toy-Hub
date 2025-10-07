"use client"

import ToyCategoryCard from "../../components/ToyCategoryCard"
import styles from "./CategoriesSection.module.css"

const categories = [
  {
    icon: "🧸",
    title: "Plush Toys",
    description: "Soft and cuddly companions for all ages",
    color: "#FFB6C1"
  },
  {
    icon: "🚗",
    title: "Vehicles",
    description: "Cars, trucks, and planes for adventure",
    color: "#87CEEB"
  },
  {
    icon: "🧩",
    title: "Puzzles",
    description: "Brain teasers and educational games",
    color: "#98FB98"
  },
  {
    icon: "🎨",
    title: "Arts & Crafts",
    description: "Creative supplies for artistic minds",
    color: "#DDA0DD"
  }
]

export default function CategoriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Shop by Category
        </h2>
        <div className={styles.grid}>
          {categories.map((category, index) => (
            <div key={category.title}>
              <ToyCategoryCard {...category} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}