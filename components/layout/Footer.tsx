"use client"

import Link from "next/link"
import Image from "next/image" // Import Next.js Image component
import styles from "./Footer.module.css"

export default function Footer() {
  // Define social icons with actual Font Awesome classes for better rendering if you link the library
  const socialIcons = [
    { name: "Facebook", iconClass: "fab fa-facebook-f", href: "#" },
    { name: "Instagram", iconClass: "fab fa-instagram", href: "#" },
    { name: "Twitter", iconClass: "fab fa-twitter", href: "#" },
    { name: "YouTube", iconClass: "fab fa-youtube", href: "#" },
  ];

  // Restructure footer columns
  const footerColumns = [
    {
      title: "QUICK LINKS",
      links: [
        { name: "Home", href: "/" },
        { name: "Our Toys", href: "/toys" },
        { name: "New Arrivals", href: "/toys/new" },
        { name: "Sale Items", href: "/sale" },
      ],
    },
    {
      title: "ABOUT US",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Contact Us", href: "/contact" },
        { name: "Blog", href: "/blog" },
        { name: "FAQs", href: "/faq" },
      ],
    },
    {
      title: "LEGAL & SUPPORT",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Shipping Info", href: "/shipping" },
        { name: "Returns", href: "/returns" },
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
              {socialIcons.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className={styles.socialIcon}
                  aria-label={social.name}
                  // If using Font Awesome, directly render the icon class
                >
                  <i className={social.iconClass}></i> 
                  {/* If not using Font Awesome, use emojis: {social.icon} */}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}