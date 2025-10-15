"use client";
import styles from "./ImageGallery.module.css";

const galleryImages = [
  "/happy-children-playing-with-toys-in-colorful-toy-s.jpg",
  "/child-birthday-party-in-toy-store-with-balloons.jpg",
  "/colorful-toy-shop-interior-with-happy-children-pla.jpg",
  "/toy-shop-storefront-with-bright-colors-and-balloon.jpg",
  "/happy-children-playing-with-toys-in-colorful-toy-s.jpg",
];

export default function ImageGallery() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Happy Customers</h2>
        <p className={styles.subtitle}>
          See the joy and excitement on our customers’ faces as they discover amazing toys
        </p>
        <div className={styles.gallery}>
          {galleryImages.map((img, index) => (
            <div
              key={index}
              className={`${styles.imageCard} ${styles[`pos${index + 1}`]}`}
            >
              <img src={img} alt={`Gallery image ${index + 1}`} className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
