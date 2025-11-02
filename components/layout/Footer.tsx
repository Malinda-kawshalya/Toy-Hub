"use client"

import Link from "next/link"
import Image from "next/image" // Import Next.js Image component
import { Facebook, Instagram } from "lucide-react"
import styles from "./Footer.module.css"

export default function Footer() {
  // Define social icons with links
  const socialIcons = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/kidzdreamsofficial" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/kidzdreamsofficial" },
  ];

  // Restructure footer columns
  const footerColumns = [
    {
      title: "QUICK LINKS",
      links: [
        { name: "Home", href: "/" },
        { name: "Our Toys", href: "/toys" },
        { name: "New Arrivals", href: "/#new-arrivals" },
        { name: "Category Items", href: "/#categories" },
      ],
    },
    {
      title: "ABOUT US",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Blog", href: "/" },
        { name: "FAQs", href: "/" },
      ],
    },
    {
      title: "LEGAL & SUPPORT",
      links: [
        { name: "Privacy Policy", href: "/" },
        { name: "Terms of Service", href: "/" },
        { name: "Shipping Info", href: "/" },
      
      ],
    },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerGrid}>
          {/* Brand Section - Leftmost Column with Logo and Tagline */}
          <div className={`${styles.footerColumn} ${styles.brandColumn}`}>
            <div className={styles.logoWrapper}>
              <Image
                src="/Kidz Dreams Logo png.png"
                alt="Kidz Dreams Logo"
                width={150} // Adjust size as needed
                height={60} // Adjust size as needed
                className={styles.footerLogoImage}
                priority
                style={{ width: 'auto', height: 'auto' }}
              />
              <p className={styles.tagline}>Where every dream begins to play!</p>
            </div>
          </div>

          {/* Remaining Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.title} className={styles.footerColumn}>
              <h4 className={styles.footerTitle}>{column.title}</h4>
              <ul className={styles.footerLinks}>
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section with Copyright, Language, and Social Icons */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © 2025 Kidz Dreams. All rights reserved.
          </p>
          
          <div className={styles.footerRight}>
            {/* Language Selector Area */}
            <div className={styles.languageSelect}>
              <span className={styles.languageIcon}>🇬🇧</span>
              English
            </div>
            
            {/* Social Icons */}
            <div className={styles.socialIcons}>
              {socialIcons.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className={styles.socialIcon}
                    aria-label={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent size={20} />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}