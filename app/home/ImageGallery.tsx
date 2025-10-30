"use client";
import styles from "./ImageGallery.module.css";

const shopImages = [
  "/shop/shop1.webp",
  "/shop/shop2.webp",
  "/shop/shop3.webp",
  "/shop/shop5.webp",
  "/shop/shop4.webp",
];

export default function ImageGallery() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Visit Our Amazing Store</h2>
        <p className={styles.subtitle}>
          Step into a world of fun and imagination at our colorful toy shop, where every corner is filled with joy and excitement
        </p>
        <div className={styles.gallery}>
          {shopImages.map((img, index) => (
            <div
              key={index}
              className={`${styles.imageCard} ${styles[`pos${index + 1}`]}`}
            >
              <img src={img} alt={`Shop interior ${index + 1}`} className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
