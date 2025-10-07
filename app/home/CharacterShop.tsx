"use client"

import styles from "./CharacterShop.module.css"

export default function CharacterShop() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Shop by Character</h2>
        <p className={styles.subtitle}>Find toys featuring your favorite characters</p>
        <div className={styles.characterGrid}>
          <div className={styles.characterCard}>
            <div className={styles.icon}>🦸‍♂️</div>
            <h3>Superheroes</h3>
          </div>
          <div className={styles.characterCard}>
            <div className={styles.icon}>🧚‍♀️</div>
            <h3>Fantasy</h3>
          </div>
          <div className={styles.characterCard}>
            <div className={styles.icon}>🚗</div>
            <h3>Vehicles</h3>
          </div>
          <div className={styles.characterCard}>
            <div className={styles.icon}>🦖</div>
            <h3>Dinosaurs</h3>
          </div>
        </div>
      </div>
    </section>
  )
}