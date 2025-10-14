"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import Image from "next/image"
import { Instagram, Heart } from "lucide-react"
import styles from "./gallery.module.css"

export default function GalleryPage() {
  const [activeImage, setActiveImage] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [modalImage, setModalImage] = useState<{ src: string; alt: string } | null>(null)
  const [formData, setFormData] = useState({ name: "", email: "", drawing: null as File | null })
  const [likedPosts, setLikedPosts] = useState<{ [key: number]: { liked: boolean; count: number } }>({
    1: { liked: false, count: 120 },
    2: { liked: false, count: 85 },
    3: { liked: false, count: 200 },
    4: { liked: false, count: 95 },
    5: { liked: false, count: 150 },
    6: { liked: false, count: 110 },
  })
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const calendarRef = useRef<FullCalendar>(null)
  const carouselRef = useRef<HTMLDivElement>(null)

  const galleryImages = [
    { id: 1, src: "/happy-children-playing-with-colorful-toys-in-toy-s.jpg", alt: "Children playing with toys", category: "Shop Photos" },
    { id: 2, src: "/cute-plush-teddy-bears-on-display-shelf.jpg", alt: "Plush toys display", category: "Shop Photos" },
    { id: 3, src: "/child-building-with-colorful-blocks-and-educationa.jpg", alt: "Educational toys", category: "Kids' Drawings" },
    { id: 4, src: "/colorful-toy-cars-and-vehicles-collection.jpg", alt: "Toy vehicles", category: "Shop Photos" },
    { id: 5, src: "/kids-birthday-party-with-toys-and-decorations.jpg", alt: "Birthday celebration", category: "Events" },
    { id: 6, src: "/wooden-educational-toys-and-puzzles-display.jpg", alt: "Wooden toys", category: "Shop Photos" },
    { id: 7, src: "/children-laughing-and-playing-in-toy-store.jpg", alt: "Happy kids", category: "Shop Photos" },
    { id: 8, src: "/colorful-stuffed-animals-and-plush-toys.jpg", alt: "Stuffed animals", category: "Shop Photos" },
    { id: 9, src: "/toy-store-interior-with-colorful-displays.jpg", alt: "Store interior", category: "Shop Photos" },
  ]

  const kidsDrawings = [
    { id: 1, src: "/child-drawing-rocket.jpg", alt: "Child's rocket drawing", artist: "Amara, Age 6" },
    { id: 2, src: "/child-drawing-unicorn.jpg", alt: "Child's unicorn drawing", artist: "Liam, Age 5" },
    { id: 3, src: "/child-drawing-castle.jpg", alt: "Child's castle drawing", artist: "Sophie, Age 7" },
    { id: 4, src: "/child-drawing-robot.jpg", alt: "Child's robot drawing", artist: "Noah, Age 8" },
  ]

  const events = [
    {
      title: "Halloween Toy Workshop",
      start: "2025-10-25T14:00:00",
      end: "2025-10-25T17:00:00",
      extendedProps: { description: "Create your own spooky toy crafts!", type: "workshop" },
    },
    {
      title: "Storytime Saturday",
      start: "2025-10-18T10:00:00",
      end: "2025-10-18T12:00:00",
      extendedProps: { description: "Join us for magical story readings", type: "storytime" },
    },
    {
      title: "New Arrival Preview Party",
      start: "2025-11-02T11:00:00",
      end: "2025-11-02T13:00:00",
      extendedProps: { description: "Be the first to see our latest toys!", type: "party" },
    },
    {
      title: "Toy Safety Seminar",
      start: "2025-10-12T15:00:00",
      end: "2025-10-12T16:00:00",
      extendedProps: { description: "Learn about safe play practices", type: "seminar" },
    },
    {
      title: "Family Game Night",
      start: "2025-10-30T18:00:00",
      end: "2025-10-30T20:00:00",
      extendedProps: { description: "Board games and fun for all ages", type: "game-night" },
    },
  ]

  const categories = ["All", "Shop Photos", "Events", "Kids' Drawings"]

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const handleImageClick = (index: number) => {
    setActiveImage(index)
  }

  const handleModalOpen = (image: { src: string; alt: string }) => {
    setModalImage(image)
    setIsAutoPlaying(false)
  }

  const handleModalClose = () => {
    setModalImage(null)
    setIsAutoPlaying(true)
  }

  const handlePrevImage = () => {
    setActiveImage((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setActiveImage((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1))
  }

  const handleLike = (postId: number) => {
    setLikedPosts((prev) => ({
      ...prev,
      [postId]: {
        liked: !prev[postId].liked,
        count: prev[postId].liked ? prev[postId].count - 1 : prev[postId].count + 1,
      },
    }))
  }

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Thank you for submitting your child's drawing! We'll review it soon! 🎨")
    setFormData({ name: "", email: "", drawing: null })
  }

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, filteredImages.length])

  // Swipe gesture handling
  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    let startX: number
    let isDragging = false

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
      isDragging = true
      setIsAutoPlaying(false)
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      const currentX = e.touches[0].clientX
      const diffX = startX - currentX
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) handleNextImage()
        else handlePrevImage()
        isDragging = false
      }
    }

    const handleTouchEnd = () => {
      isDragging = false
      setIsAutoPlaying(true)
    }

    carousel.addEventListener("touchstart", handleTouchStart)
    carousel.addEventListener("touchmove", handleTouchMove)
    carousel.addEventListener("touchend", handleTouchEnd)

    return () => {
      carousel.removeEventListener("touchstart", handleTouchStart)
      carousel.removeEventListener("touchmove", handleTouchMove)
      carousel.removeEventListener("touchend", handleTouchEnd)
    }
  }, [])

  useEffect(() => {
    const link = document.createElement("link")
    link.href = "https://cdn.jsdelivr.net/npm/fullcalendar@6.1.15/main.min.css"
    link.rel = "stylesheet"
    document.head.appendChild(link)
    return () => {
      document.head.removeChild(link)
    }
  }, [])

  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className={styles.heroTitle}>
            Kids' <span className={styles.gradient}>Corner</span>
          </h1>
          <p className={styles.heroSubtext}>Explore moments of joy, laughter, and imagination from our toy wonderland.</p>
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className={styles.decorativeCircleTop}
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className={styles.decorativeCircleBottom}
        />
      </section>

      <section className={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.galleryContainer}
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <h2 className={styles.sectionTitle}>Photo Gallery</h2>
          <div className={styles.filterButtons}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category)
                  setActiveImage(0)
                }}
                className={`${styles.filterButton} ${selectedCategory === category ? styles.activeFilter : ""}`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className={styles.carouselContainer} ref={carouselRef}>
            <motion.button
              className={styles.carouselButton}
              onClick={handlePrevImage}
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              ‹
            </motion.button>
            <div className={styles.carousel}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeImage}
                  initial={{ opacity: 0, x: 100, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className={styles.carouselItem}
                  onClick={() => handleModalOpen(filteredImages[activeImage])}
                >
                  <Image
                    src={filteredImages[activeImage].src}
                    alt={filteredImages[activeImage].alt}
                    fill
                    className={styles.carouselImage}
                    loading={activeImage === 0 ? "eager" : "lazy"}
                    priority={activeImage === 0}
                  />
                  <div className={styles.imageOverlay}>
                    <p className={styles.imageCaption}>{filteredImages[activeImage].alt}</p>
                    <span className={styles.imageCategory}>{filteredImages[activeImage].category}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <motion.button
              className={styles.carouselButton}
              onClick={handleNextImage}
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              ›
            </motion.button>
          </div>
          <div className={styles.thumbnails}>
            {filteredImages.map((image, index) => (
              <motion.img
                key={image.id}
                src={image.src}
                alt={image.alt}
                className={`${styles.thumbnail} ${activeImage === index ? styles.activeThumbnail : ""}`}
                onClick={() => handleImageClick(index)}
                loading="lazy"
                initial={{ opacity: 0.7, scale: 0.9 }}
                animate={{ opacity: activeImage === index ? 1 : 0.7, scale: activeImage === index ? 1 : 0.9 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
          <div className={styles.progressDots}>
            {filteredImages.map((_, index) => (
              <motion.div
                key={index}
                className={`${styles.progressDot} ${activeImage === index ? styles.activeDot : ""}`}
                animate={{ scale: activeImage === index ? 1.2 : 1 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles.modal}
            onClick={handleModalClose}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <Image src={modalImage.src} alt={modalImage.alt} fill className={styles.modalImage} />
              <motion.button
                className={styles.modalClose}
                onClick={handleModalClose}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                ✕
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.eventsContainer}
        >
          <h2 className={styles.sectionTitle}>Join Our Fun Activities Soon!</h2>
          <div className={styles.calendarContainer}>
            <FullCalendar
              ref={calendarRef}
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              events={events}
              eventContent={(eventInfo) => (
                <div className={`${styles.eventBadge} ${styles[`eventType${eventInfo.event.extendedProps.type.replace('-', 'Type')}`]}`}>
                  {eventInfo.event.title}
                </div>
              )}
              eventMouseEnter={(eventInfo) => {
                const el = eventInfo.el
                const tooltip = document.createElement("div")
                tooltip.className = styles.eventTooltip
                tooltip.innerHTML = `
                  <h5>${eventInfo.event.title}</h5>
                  <p><strong>Time:</strong> ${eventInfo.event.start?.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })} - ${eventInfo.event.end?.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })}</p>
                  <p>${eventInfo.event.extendedProps.description}</p>
                  <a href="/register?event=${encodeURIComponent(eventInfo.event.title)}" class="${styles.eventRegisterButton}">Register Now</a>
                `
                document.body.appendChild(tooltip)
                const rect = el.getBoundingClientRect()
                tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`
                tooltip.style.left = `${rect.left + window.scrollX}px`
              }}
              eventMouseLeave={() => {
                const tooltip = document.querySelector(`.${styles.eventTooltip}`)
                if (tooltip) tooltip.remove()
              }}
              height="auto"
            />
          </div>
        </motion.div>
      </section>

      <section className={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.artistsContainer}
        >
          <h2 className={styles.sectionTitle}>Our Little Artists</h2>
          <p className={styles.sectionSubtext}>Showcasing the creative masterpieces from our young visitors!</p>
          <div className={styles.artistsGrid}>
            {kidsDrawings.map((drawing, index) => (
              <motion.div
                key={drawing.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className={styles.artistItem}
              >
                <Image
                  src={drawing.src}
                  alt={drawing.alt}
                  fill
                  className={styles.artistImage}
                  onClick={() => handleModalOpen(drawing)}
                  loading="lazy"
                />
                <div className={styles.imageOverlay}>
                  <p className={styles.imageCaption}>{drawing.alt}</p>
                  <span className={styles.imageCategory}>{drawing.artist}</span>
                </div>
              </motion.div>
            ))}
          </div>
          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Submit Your Child's Drawing</h3>
            <form onSubmit={handleFormSubmit} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Parent's Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  placeholder="Enter your name"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  placeholder="your@email.com"
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="drawing">Upload Drawing</label>
                <input
                  type="file"
                  id="drawing"
                  accept="image/*"
                  onChange={(e) => setFormData({ ...formData, drawing: e.target.files ? e.target.files[0] : null })}
                  required
                />
              </div>
              <motion.button
                type="submit"
                className={styles.submitButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit Drawing 🎨
              </motion.button>
            </form>
          </div>
        </motion.div>
      </section>

      <section className={styles.section}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={styles.instagramContainer}
        >
          <div className={styles.instagramHeader}>
            <Instagram className={styles.instagramIcon} />
            <h2 className={styles.sectionTitle}>
              Follow Us on <span className={styles.gradient}>Instagram</span>
            </h2>
          </div>
          <p className={styles.sectionSubtext}>Join our community and share your toy adventures with #ToyShopMagic</p>
          <div className={styles.instagramGrid}>
            {galleryImages.slice(0, 6).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={styles.instagramPost}
              >
                <Image
                  src={post.src}
                  alt={post.alt}
                  fill
                  className={styles.instagramImage}
                  loading="lazy"
                />
                <div className={styles.instagramOverlay}>
                  <Instagram className={styles.overlayIcon} />
                  <button
                    className={styles.likeButton}
                    onClick={() => handleLike(post.id)}
                  >
                    <Heart
                      className={`${styles.likeIcon} ${likedPosts[post.id].liked ? styles.liked : ""}`}
                    />
                    <span>{likedPosts[post.id].count}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          <a
            href="https://instagram.com/kidzdreams"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.instagramButton}
          >
            <Instagram className={styles.buttonIcon} />
            Follow @KidzDreams
          </a>
        </motion.div>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>© {new Date().getFullYear()} Kidz Dreams. All rights reserved.</p>
        <div className={styles.footerLinks}>
          <a href="/privacy" className={styles.footerLink}>Privacy Policy</a>
          <span> | </span>
          <a href="/terms" className={styles.footerLink}>Terms of Service</a>
          <span> | </span>
          <a href="/contact" className={styles.footerLink}>Contact Us</a>
        </div>
      </footer>
    </main>
  )
}