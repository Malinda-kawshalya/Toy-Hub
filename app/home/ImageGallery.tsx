"use client"

import styles from "./ImageGallery.module.css"

const galleryImages = [
  "/happy-children-playing-with-toys-in-colorful-toy-s.jpg",
  "/child-birthday-party-in-toy-store-with-balloons.jpg",
  "/colorful-toy-shop-interior-with-happy-children-pla.jpg",
  "/toy-shop-storefront-with-bright-colors-and-balloon.jpg"
]

export default function ImageGallery() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Happy Customers</h2>
        <div className={styles.gallery}>
          {galleryImages.map((image, index) => (
            <div key={index} className={styles.imageCard}>
              <img src={image} alt={`Gallery image ${index + 1}`} className={styles.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}