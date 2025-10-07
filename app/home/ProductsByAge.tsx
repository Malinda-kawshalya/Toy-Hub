"use client"

import styles from "./ProductsByAge.module.css"

const ageGroups = [
  {
    title: "0-2 Years",
    description: "Safe and engaging toys for babies and toddlers",
    image: "/plush-toys-and-stuffed-animals-display.jpg"
  },
  {
    title: "3-5 Years",
    description: "Educational and creative toys for preschoolers",
    image: "/kids-playing-with-building-blocks-and-puzzles.jpg"
  },
  {
    title: "6-12 Years",
    description: "Interactive and challenging toys for school age",
    image: "/colorful-toy-display-shelves-with-educational-toys.jpg"
  }
]

export default function ProductsByAge() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Shop by Age</h2>
        <div className={styles.grid}>
          {ageGroups.map((group, index) => (
            <div key={group.title} className={styles.ageCard}>
              <div className={styles.imageWrapper}>
                <img src={group.image} alt={group.title} className={styles.image} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.ageTitle}>{group.title}</h3>
                <p className={styles.description}>{group.description}</p>
                <button className={styles.shopButton}>Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}