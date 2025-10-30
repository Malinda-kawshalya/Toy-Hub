"use client"

import styles from "./LatestNews.module.css"
import Link from "next/link"

const newsItems = [
  {
    imageSrc: "/news/news01.webp",
    author: "Kidz Dreams Team",
    date: "30 Oct 2025",
    title: "Join Our Team - We're Hiring!",
    excerpt: "We're looking for passionate and dedicated individuals to join our growing team. If you love working with children and toys, we have exciting opportunities for you!",
    linkTo: "/contact",
  },
  {
    imageSrc: "/news/news02.webp",
    author: "Kidz Dreams Team",
    date: "01 Oct 2025",
    title: "Children's Day Special Sale!",
    excerpt: "Celebrate Children's Day with amazing discounts on your favorite toys! Don't miss our special sale with incredible offers on toys, games, and more.",
    linkTo: "#",
  },
  {
    imageSrc: "/news/news03.webp",
    author: "Kidz Dreams Team",
    date: "15 Oct 2025",
    title: "New RC Items Just Arrived!",
    excerpt: "Exciting new remote control toys are now in stock! From cars to drones, explore our latest collection of RC items that will bring endless fun and excitement.",
    linkTo: "#",
  }
]

export default function LatestNews() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Latest News</h2>
          <p className={styles.subtitle}>Stay updated with our latest announcements, events, and exciting new arrivals</p>
        </div>
        <div className={styles.newsGrid}>
          {newsItems.map((item, index) => (
            // The news card in the image has a white background with rounded corners on the image and card.
            <div key={index} className={styles.newsCard}>
              {/* Image with rounded top corners */}
              <div className={styles.imageWrapper}>
                <img src={item.imageSrc} alt={item.title} className={styles.newsImage} />
              </div>

              {/* Text content section */}
              <div className={styles.content}>
                <div className={styles.meta}>
                  <span className={styles.author}>{item.author}</span>
                  <span className={styles.separator}>|</span>
                  <span className={styles.date}>{item.date}</span>
                </div>
                
                <h3 className={styles.newsTitle}>{item.title}</h3>
                
                <p className={styles.excerpt}>{item.excerpt}</p>
                
                {/* The 'Read More' button is styled to match the pink button in the image */}
                {index === 0 ? (
                  <Link href={item.linkTo}>
                    <button className={styles.readMore}>Contact Us</button>
                  </Link>
                ) : (
                  <button className={styles.readMore}>Read More</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}