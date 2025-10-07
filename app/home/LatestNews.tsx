"use client"

import styles from "./LatestNews.module.css"

// A simple SVG placeholder for the news images
const ImagePlaceholder = ({ width = "100%", height = "200px", index }) => (
  <svg
    className={styles.newsImage}
    width={width}
    height={height}
    viewBox="0 0 300 200"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* A simple background color change based on index for variety */}
    <rect width="100%" height="100%" fill={index % 3 === 0 ? "#E0F7FA" : index % 3 === 1 ? "#FFFDE7" : "#FCE4EC"} />
    <text
      x="50%"
      y="50%"
      dominantBaseline="middle"
      textAnchor="middle"
      fontSize="20"
      fontWeight="bold"
      fill={index % 3 === 0 ? "#00ACC1" : index % 3 === 1 ? "#FFB300" : "#D81B60"}
    >
      Image {index + 1} Placeholder
    </text>
  </svg>
)

const newsItems = [
  {
    imageSrc: "/path/to/image1.jpg",
    author: "John Matthew",
    date: "14 Feb 2024",
    title: "Cherishing Your Kids Special Day With Their Ultimate Faves",
    excerpt: "Ac turpis egestas sod turpis urna et pharetra. Ultrices tincidunt arcu non sodales. Lacus vestibulum...",
  },
  {
    imageSrc: "/path/to/image2.jpg",
    author: "John Matthew",
    date: "14 Feb 2024",
    title: "What Are the Best Toys for Child Development",
    excerpt: "Aliquet risus feugiat in ante. Est pellentesque elit ullamcorper dignissim. Egestas integer eget aliquet nibh...",
  },
  {
    imageSrc: "/path/to/image3.jpg",
    author: "John Matthew",
    date: "14 Feb 2024",
    title: "How Do Toys Impact a Child's Learning",
    excerpt: "Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque. Tristique senectus et netus et malesuada...",
  }
]

export default function LatestNews() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Latest News</h2>
          <p className={styles.subtitle}>Erat Velit Scelerisque in Dictum</p>
        </div>
        <div className={styles.newsGrid}>
          {newsItems.map((item, index) => (
            // The news card in the image has a white background with rounded corners on the image and card.
            <div key={index} className={styles.newsCard}>
              {/* Image with rounded top corners */}
              <div className={styles.imageWrapper}>
                 <ImagePlaceholder index={index} />
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
                <button className={styles.readMore}>Read More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}