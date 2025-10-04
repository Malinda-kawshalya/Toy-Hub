"use client"

import { useEffect, useRef } from "react"
import HeroSection from "../components/home/HeroSection"
import CategoriesSection from "../components/home/CategoriesSection"
import FeaturedProducts from "../components/home/FeaturedProducts"
import ProductsByAge from "../components/home/ProductsByAge"
import CharacterShop from "../components/home/CharacterShop"
import BrandLogos from "../components/home/BrandLogos"
import BestSelling from "../components/home/BestSelling"
import ImageGallery from "../components/home/ImageGallery"
import Testimonials from "../components/home/Testimonials"
import LatestNews from "../components/home/LatestNews"
import "./Home.css"

const Home = () => {
  const sectionsRef = useRef([])

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
      <div ref={(el) => (sectionsRef.current[0] = el)}>
        <CategoriesSection />
      </div>
      <div ref={(el) => (sectionsRef.current[1] = el)}>
        <FeaturedProducts />
      </div>
      <div ref={(el) => (sectionsRef.current[2] = el)}>
        <ProductsByAge />
      </div>
      <div ref={(el) => (sectionsRef.current[3] = el)}>
        <CharacterShop />
      </div>
      <div ref={(el) => (sectionsRef.current[4] = el)}>
        <BrandLogos />
      </div>
      <div ref={(el) => (sectionsRef.current[5] = el)}>
        <BestSelling />
      </div>
      <div ref={(el) => (sectionsRef.current[6] = el)}>
        <ImageGallery />
      </div>
      <div ref={(el) => (sectionsRef.current[7] = el)}>
        <Testimonials />
      </div>
      <div ref={(el) => (sectionsRef.current[8] = el)}>
        <LatestNews />
      </div>
    </div>
  )
}

export default Home
