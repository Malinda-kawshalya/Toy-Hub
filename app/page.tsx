"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroSection from "./home/HeroSection"
import CategoriesSection from "./home/CategoriesSection"
import NewArrivals from "./home/NewArrivals"
import CharacterShop from "./home/CharacterShop"
import BestSelling from "./home/BestSelling"
import ImageGallery from "./home/ImageGallery"
import Testimonials from "./home/Testimonials"
import LatestNews from "./home/LatestNews"
import styles from "./page.module.css"

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
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <CategoriesSection />
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <NewArrivals />
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <CharacterShop />
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <BestSelling />
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ImageGallery />
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <LatestNews />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
