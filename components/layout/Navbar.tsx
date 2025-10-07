"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import styles from "./Navbar.module.css"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Toys", href: "/toys" },
    { name: "Gallery", href: "/gallery" },
    { name: "Visit Us", href: "/visit" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.nav
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.navContainer}>
        {/* Left Links */}
        <ul className={styles.navLinksLeft}>
          {navLinks.slice(0, Math.ceil(navLinks.length / 2)).map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={link.href} className={styles.navLink}>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Center Logo */}
        <div className={styles.logoWrapper}>
            <Link href="/" className={styles.logo}>
            <motion.img
              src="/Kidz Dreams Logo png.png"
              alt="Kidz Dreams Logo"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            </Link>
        </div>

        {/* Right Links */}
        <ul className={styles.navLinksRight}>
          {navLinks.slice(Math.ceil(navLinks.length / 2)).map((link, index) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={link.href} className={styles.navLink}>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={styles.mobileMenuBtn}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className={styles.mobileMenu}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          {navLinks.map((link) => (
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
      )}
    </motion.nav>
  )
}
