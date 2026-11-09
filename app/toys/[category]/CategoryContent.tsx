"use client"

import ProductCollection from "@/components/ProductCollection"
import styles from "./category.module.css"

export default function CategoryContent({ category, categoryTitle }: { category: string; categoryTitle: string }) {
  return <main className={styles.main}>
    <section className={styles.header}><div className={styles.headerContent}><h1 className={styles.title}>{categoryTitle}</h1></div></section>
    <section className={styles.toysSection}><ProductCollection category={category} /></section>
  </main>
}
