"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import styles from "./WhatsAppFloat.module.css"

export default function WhatsAppFloat() {
  const whatsappNumber = "94716207888" // (+94) 716 207 888
  const message = "Hello! I'm interested in your toys." // Default message
  const [position, setPosition] = useState<'fixed' | 'absolute'>('fixed')
  
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('footer')
      if (footer) {
        const footerRect = footer.getBoundingClientRect()
        const windowHeight = window.innerHeight
        
        // When footer is about to enter viewport, switch to absolute positioning
        if (footerRect.top <= windowHeight) {
          setPosition('absolute')
        } else {
          setPosition('fixed')
        }
      }
    }

    handleScroll() // Check on mount
    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])
  
  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <motion.div
      className={`${styles.whatsappFloat} ${position === 'absolute' ? styles.absolute : ''}`}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <button
        onClick={handleWhatsAppClick}
        className={styles.whatsappButton}
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 32 32"
          className={styles.whatsappIcon}
          fill="currentColor"
        >
          <path d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-5.215 1.397 1.393-5.179-0.322-0.532c-1.407-2.309-2.145-4.964-2.145-7.658 0-7.983 6.417-14.4 14.4-14.4s14.4 6.417 14.4 14.4-6.417 14.4-14.4 14.4zM21.45 18.5c-0.397-0.199-2.35-1.16-2.713-1.293-0.363-0.132-0.627-0.199-0.891 0.199s-1.025 1.293-1.257 1.557-0.463 0.298-0.86 0.099c-0.397-0.199-1.677-0.618-3.193-1.972-1.18-1.053-1.977-2.353-2.208-2.75s-0.025-0.612 0.174-0.811c0.179-0.178 0.397-0.463 0.596-0.695 0.198-0.232 0.264-0.397 0.397-0.662 0.132-0.264 0.066-0.496-0.033-0.695s-0.891-2.146-1.222-2.938c-0.322-0.771-0.649-0.667-0.891-0.679-0.231-0.012-0.496-0.015-0.76-0.015s-0.694 0.099-1.057 0.496c-0.363 0.397-1.388 1.357-1.388 3.309s1.421 3.838 1.62 4.102c0.198 0.264 2.798 4.269 6.777 5.985 0.947 0.409 1.687 0.653 2.264 0.836 0.955 0.303 1.824 0.26 2.511 0.158 0.766-0.114 2.35-0.96 2.681-1.888s0.331-1.723 0.232-1.888c-0.099-0.165-0.363-0.264-0.76-0.463z" />
        </svg>
      </button>
    </motion.div>
  )
}
