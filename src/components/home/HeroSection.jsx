"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import "./HeroSection.css"

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-decorations">
        <div className="hero-wave hero-wave-1"></div>
        <div className="hero-wave hero-wave-2"></div>
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className={`hero-text ${isLoaded ? "hero-text-loaded" : ""}`}>
            <h1 className="hero-title">
              <span className="hero-title-line">BEST EDUCATION</span>
              <span className="hero-title-line">FOR KIDS</span>
            </h1>
            <p className="hero-description">
              Discover amazing educational toys that inspire creativity, learning, and endless fun for your little ones.
            </p>
            <Link href="/products" className="btn btn-primary btn-lg hero-cta">
              Learn More
            </Link>
          </div>

          <div className={`hero-image ${isLoaded ? "hero-image-loaded" : ""}`}>
            {/* <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-behance-net-gallery-233642997-BABY-TOYS-WEBSITE-SHOPIFY-2025-10-04-10_51_51.png-Oytvwx0NavZyDRUZsVD9jwCpdgMeJ3.jpeg"
              alt="Kids playing with educational toys"
              className="hero-main-image"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
