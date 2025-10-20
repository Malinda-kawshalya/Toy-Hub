"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import styles from "./HeroSection.module.css"
import { useEffect, useState } from "react"
import useResponsiveLayout from "@/hooks/useResponsiveLayout"

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { isMobile, isTablet, isDesktop } = useResponsiveLayout()
  
  const heroImages = [
    '/home/hero1.png',
    '/home/hero2.png',
    '/home/hero3.png'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.hero} style={{
      padding: isMobile ? '4rem 1rem' : isTablet ? '5rem 2rem' : '6rem 3.5rem',
      justifyContent: isMobile ? 'center' : 'flex-start'
    }}>
      {/* Rotating Background Images */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={styles.heroBackground}
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0
          }}
        />
      ))}
      
      <motion.div 
        className={styles.heroContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{
          maxWidth: isMobile ? '95%' : isTablet ? '90%' : '600px',
          padding: isMobile ? '1.5rem 2rem' : isTablet ? '2rem 2.5rem' : '2.5rem 3.5rem',
          margin: isMobile ? '0 auto' : isTablet ? '0 0 0 40px' : '0 0 0 80px'
        }}
      >
        <motion.h1
          className={styles.heroTitle}
          initial={{ opacity: 0, y: isMobile ? 40 : 80, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ 
            duration: isMobile ? 0.8 : 1.2, 
            ease: "easeOut",
            delay: 0.3
          }}
          style={{
            fontSize: isMobile ? '2rem' : '3.5rem'
          }}
        >
          <motion.div className={styles.textLine}>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Welcome to
            </motion.span>
          </motion.div>

          <motion.div className={styles.textLine}>
            <motion.span 
              className={styles.gradient}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "backOut" }}
              style={{ 
                fontSize: isMobile ? '2.2rem' : isTablet ? '3.2rem' : '3.8rem',
              }}
            >
              Kids Dreams
            </motion.span>
          </motion.div>

          <motion.div className={styles.textLine}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              style={{ 
                fontSize: isMobile ? '1.8rem' : isTablet ? '2.5rem' : '3.5rem',
              }}
            >
              Where Fun
            </motion.span>
          </motion.div>

          <motion.div className={styles.textLine}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              style={{ 
                fontSize: isMobile ? '1.8rem' : isTablet ? '2.5rem' : '3.5rem',
              }}
            >
              Begins..!
            </motion.span>
          </motion.div>
        </motion.h1>

        <motion.p
          className={styles.heroSubtext}
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
        >
          Your one-stop shop for fun, learning, and imagination
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 2, ease: "backOut" }}
          whileHover={{ 
            scale: 1.05,
            transition: { duration: 0.2 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/visit">
            <motion.button 
              className={styles.ctaButton}
              whileHover={{ 
                boxShadow: "0 10px 30px rgba(0, 170, 255, 0.4)" 
              }}
            >
              Visit Us Today
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
