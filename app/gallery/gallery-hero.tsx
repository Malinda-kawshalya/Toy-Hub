"use client"

import { motion } from "framer-motion"

export function GalleryHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#E3F2FD] via-white to-[#FCE4EC] overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            Our{" "}
            <span className="bg-gradient-to-r from-[#00A0FF] to-[#FF008E] bg-clip-text text-transparent">Gallery</span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore moments of joy, laughter, and imagination from our toy wonderland
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-[#FFF176] rounded-full opacity-30 blur-xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-32 h-32 bg-[#FF008E] rounded-full opacity-20 blur-xl"
      />
    </section>
  )
}
