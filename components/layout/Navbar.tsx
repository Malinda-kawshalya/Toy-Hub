"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [toysDropdownOpen, setToysDropdownOpen] = useState(false)
  const [navVisible, setNavVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Update scrolled state
      setScrolled(currentScrollY > 50)
      
      // Handle navbar visibility based on scroll direction
      if (currentScrollY < 10) {
        // Always show navbar at the top
        setNavVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold - hide navbar
        setNavVisible(false)
        setMobileMenuOpen(false) // Close mobile menu when hiding
        setToysDropdownOpen(false) // Close dropdown when hiding
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setNavVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const navLinksBeforeToys = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
  ]

  const navLinksAfterToys = [
    { name: "Gallery", href: "/gallery" },
    { name: "Visit Us", href: "/visit" },
    { name: "Contact", href: "/contact" },
  ]

  const toyCategories = [
    { name: "Educational Toys", href: "/toys/educational-toys", icon: "🧩" },
    { name: "Dolls & Plush", href: "/toys/dolls-plush", icon: "🧸" },
    { name: "Action Figures", href: "/toys/action-figures", icon: "🦸" },
    { name: "Outdoor Toys", href: "/toys/outdoor-toys", icon: "⚽" },
    { name: "Creative Kits", href: "/toys/creative-kits", icon: "🎨" },
    { name: "Games & Puzzles", href: "/toys/games-puzzles", icon: "🎮" },
  ]

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${!navVisible ? styles.hidden : ""}`}
      initial={{ y: -100 }}
      animate={{ 
        y: navVisible ? 0 : -100,
        opacity: navVisible ? 1 : 0 
      }}
      transition={{ 
        duration: 0.4, 
        ease: [0.4, 0, 0.2, 1] 
      }}
    >
      <div className={styles.navContainer}>
        {/* Logo - Always visible, positioned left on mobile, center on desktop */}
        <div className={styles.logoWrapper}>
          <Link href="/" className={styles.logo}>
            <motion.img
              src="/Kidz Dreams Logo wb.png"
              alt="Kidz Dreams Logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
          </Link>
        </div>

        {/* Desktop Navigation Links - All on the right side */}
        <ul className={styles.navLinks}>
          {/* Links before Our Toys */}
          {navLinksBeforeToys.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={link.href} className={styles.navLink}>
                {link.name}
              </Link>
            </motion.li>
          ))}
          
          {/* Our Toys Dropdown */}
          <motion.li
            className={styles.dropdown}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navLinksBeforeToys.length * 0.1 }}
            onMouseEnter={() => setToysDropdownOpen(true)}
            onMouseLeave={() => setToysDropdownOpen(false)}
          >
            <Link href="/toys" className={styles.navLink}>
              Our Toys
              <span className={styles.dropdownArrow}>▼</span>
            </Link>
            
            {/* Dropdown Menu */}
            <motion.div
              className={styles.dropdownMenu}
              initial={{ opacity: 0, y: -10 }}
              animate={{ 
                opacity: toysDropdownOpen ? 1 : 0,
                y: toysDropdownOpen ? 0 : -10,
                scale: toysDropdownOpen ? 1 : 0.95
              }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              style={{ 
                visibility: toysDropdownOpen ? 'visible' : 'hidden',
                pointerEvents: toysDropdownOpen ? 'auto' : 'none'
              }}
            >
              {toyCategories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: toysDropdownOpen ? 1 : 0,
                    x: toysDropdownOpen ? 0 : -10
                  }}
                  transition={{ delay: index * 0.05, duration: 0.2 }}
                >
                  <Link href={category.href} className={styles.dropdownItem}>
                    <span className={styles.categoryIcon}>{category.icon}</span>
                    {category.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.li>

          {/* Links after Our Toys */}
          {navLinksAfterToys.map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (navLinksBeforeToys.length + 1 + index) * 0.1 }}
            >
              <Link href={link.href} className={styles.navLink}>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Keep old structure hidden for backward compatibility */}
        <ul className={styles.navLinksLeft} style={{ display: 'none' }}></ul>
        <ul className={styles.navLinksRight} style={{ display: 'none' }}></ul>

        {/* Mobile Menu Button - Visible on mobile/tablet, hidden on desktop */}
        <button
          className={`${styles.mobileMenuBtn} ${mobileMenuOpen ? styles.active : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.active : ""}`}
        initial={{ opacity: 0, transform: "translateY(-100%)" }}
        animate={{ 
          opacity: mobileMenuOpen ? 1 : 0, 
          transform: mobileMenuOpen ? "translateY(0)" : "translateY(-100%)" 
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
      >
          {/* Links before Our Toys */}
          {navLinksBeforeToys.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Mobile Our Toys Section */}
          <div className={styles.mobileToysSection}>
            <Link
              href="/toys"
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Toys - All Categories
            </Link>
            <div className={styles.mobileToysGrid}>
              {toyCategories.map((category) => (
                <Link
                  key={category.name}
                  href={category.href}
                  className={styles.mobileCategoryItem}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className={styles.mobileCategoryIcon}>{category.icon}</span>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Links after Our Toys */}
          {navLinksAfterToys.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
    </motion.nav>
  )
}
