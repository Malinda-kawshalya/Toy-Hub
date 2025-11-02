"use client"

import { useEffect, useRef, Suspense, lazy } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroSection from "./home/HeroSection"
import styles from "./page.module.css"

// Lazy load heavy components that are below the fold
const CategoriesSection = lazy(() => import("./home/CategoriesSection"))
const NewArrivals = lazy(() => import("./home/NewArrivals"))
const CharacterShop = lazy(() => import("./home/CharacterShop"))
const BestSelling = lazy(() => import("./home/BestSelling"))
const ImageGallery = lazy(() => import("./home/ImageGallery"))
const Testimonials = lazy(() => import("./home/Testimonials"))
const LatestNews = lazy(() => import("./home/LatestNews"))

// Loading placeholder component
const SectionLoader = () => (
  <div style={{ 
    minHeight: '400px', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    padding: '2rem'
  }}>
    <div className="animate-pulse" style={{
      width: '40px',
      height: '40px',
      border: '3px solid #f3f4f6',
      borderTop: '3px solid #3b82f6',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }}/>
  </div>
)

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Parallax effect for background elements
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [1, 0.8, 0.8, 0.3])

  // Animation variants for sections
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  return (
    <motion.div 
      ref={containerRef}
      className={styles.homePage}
      variants={staggerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Parallax Effect */}
      <motion.div 
        className={styles.parallaxBackground}
        style={{ y, opacity }}
      />
      
      {/* Hero Section - Special entrance animation */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <HeroSection />
      </motion.div>

      {/* Animated Sections Container */}
      <motion.div variants={staggerVariants}>
        <Suspense fallback={<SectionLoader />}>
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <CategoriesSection />
          </motion.div>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <NewArrivals />
          </motion.div>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <CharacterShop />
          </motion.div>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <BestSelling />
          </motion.div>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <ImageGallery />
          </motion.div>
        </Suspense>

        <Suspense fallback={<SectionLoader />}>
          <motion.div 
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <LatestNews />
          </motion.div>
        </Suspense>
      </motion.div>
    </motion.div>
  )
}
