"use client"

import { useEffect, useRef } from "react"
import HeroSection from "./home/HeroSection"
import CategoriesSection from "./home/CategoriesSection"
import FeaturedProducts from "./home/FeaturedProducts"
import ProductsByAge from "./home/ProductsByAge"
import CharacterShop from "./home/CharacterShop"
import BrandLogos from "./home/BrandLogos"
import BestSelling from "./home/BestSelling"
import ImageGallery from "./home/ImageGallery"
import Testimonials from "./home/Testimonials"
import LatestNews from "./home/LatestNews"
import styles from "./page.module.css"

export default function HomePage() {
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in")
        }
      })
    }, observerOptions)

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.homePage}>
      <HeroSection />
      <div ref={(el) => { sectionsRef.current[0] = el }}>
        <CategoriesSection />
      </div>
      <div ref={(el) => { sectionsRef.current[1] = el }}>
        <FeaturedProducts />
      </div>
      <div ref={(el) => { sectionsRef.current[2] = el }}>
        <ProductsByAge />
      </div>
      <div ref={(el) => { sectionsRef.current[3] = el }}>
        <CharacterShop />
      </div>
      <div ref={(el) => { sectionsRef.current[4] = el }}>
        <BrandLogos />
      </div>
      <div ref={(el) => { sectionsRef.current[5] = el }}>
        <BestSelling />
      </div>
      <div ref={(el) => { sectionsRef.current[6] = el }}>
        <ImageGallery />
      </div>
      <div ref={(el) => { sectionsRef.current[7] = el }}>
        <Testimonials />
      </div>
      <div ref={(el) => { sectionsRef.current[8] = el }}>
        <LatestNews />
      </div>
    </div>
  )
}
