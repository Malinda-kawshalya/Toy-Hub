"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import styles from "./Footer.module.css"

export default function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Toys", href: "/toys" },
    { name: "Contact", href: "/contact" },
  ]

  const socialIcons = [
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "YouTube", icon: "📺", href: "#" },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Brand Section */}
          <div className={styles.footerSection}>
            <h3 className={styles.footerLogo}>🧸 ToyLand</h3>
            <p className={styles.footerText}>Where fun begins! Making childhood magical through play.</p>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Quick Links</h4>
            <ul className={styles.footerLinks}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className={styles.footerLink}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Visit Us</h4>
            <p className={styles.footerText}>
              123 Toy Street
              <br />
              Fun City, FC 12345
              <br />
              Phone: (555) 123-4567
              <br />
              Email: hello@toyland.com
            </p>
          </div>

          {/* Social Media */}
          <div className={styles.footerSection}>
            <h4 className={styles.footerTitle}>Follow Us</h4>
            <div className={styles.socialIcons}>
              {socialIcons.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={styles.socialIcon}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© 2025 ToyLand. All rights reserved. Made with ❤️ for kids everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
