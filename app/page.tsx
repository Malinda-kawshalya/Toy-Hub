"use client"

import { useEffect, useRef } from "react"
import HeroSection from "../src/components/home/HeroSection"
import CategoriesSection from "../src/components/home/CategoriesSection"
import FeaturedProducts from "../src/components/home/FeaturedProducts"
import ProductsByAge from "../src/components/home/ProductsByAge"
import CharacterShop from "../src/components/home/CharacterShop"
import BrandLogos from "../src/components/home/BrandLogos"
import BestSelling from "../src/components/home/BestSelling"
import ImageGallery from "../src/components/home/ImageGallery"
import Testimonials from "../src/components/home/Testimonials"
import LatestNews from "../src/components/home/LatestNews"
import "../src/pages/Home.css"

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
    <div className="home-page">
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
