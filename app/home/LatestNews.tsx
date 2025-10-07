"use client"

import styles from "./LatestNews.module.css"

const newsItems = [
  {
    title: "New Educational Toy Line Launched",
    date: "October 5, 2025",
    excerpt: "Discover our latest collection of STEM-focused toys designed to inspire young minds."
  },
  {
    title: "Holiday Sale Starting Soon", 
    date: "October 3, 2025",
    excerpt: "Get ready for amazing discounts on all your favorite toys this holiday season."
  },
  {
    title: "Toy Safety Guidelines Updated",
    date: "October 1, 2025", 
    excerpt: "Learn about our enhanced safety measures to ensure the best for your children."
  }
]

export default function LatestNews() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Latest News</h2>
        <div className={styles.newsGrid}>
          {newsItems.map((item, index) => (
            <div key={index} className={styles.newsCard}>
              <div className={styles.date}>{item.date}</div>
              <h3 className={styles.newsTitle}>{item.title}</h3>
              <p className={styles.excerpt}>{item.excerpt}</p>
              <button className={styles.readMore}>Read More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}