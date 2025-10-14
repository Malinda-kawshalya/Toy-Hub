"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroSection from "./home/HeroSection"
import CategoriesSection from "./home/CategoriesSection"
import FeaturedProducts from "./home/FeaturedProducts"
import CharacterShop from "./home/CharacterShop"
import BrandLogos from "./home/BrandLogos"
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
      y: 100,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  }

  const staggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const slideVariants = {
    hidden: {
      opacity: 0,
      x: -100,
      rotateY: -15
    },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0
    }
  }

  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 60
    },
    visible: {
      opacity: 1,
      y: 0
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
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <CategoriesSection />
        </motion.div>

        <motion.div 
          variants={slideVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <FeaturedProducts />
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <CharacterShop />
        </motion.div>

        <motion.div 
          variants={slideVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <BrandLogos />
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <BestSelling />
        </motion.div>

        <motion.div 
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <ImageGallery />
        </motion.div>

        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <LatestNews />
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
