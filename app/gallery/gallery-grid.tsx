"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

const galleryImages = [
  {
    id: 1,
    src: "/happy-children-playing-with-colorful-toys-in-toy-s.jpg",
    alt: "Children playing with toys",
    category: "Store",
  },
  {
    id: 2,
    src: "/cute-plush-teddy-bears-on-display-shelf.jpg",
    alt: "Plush toys display",
    category: "Products",
  },
  {
    id: 3,
    src: "/child-building-with-colorful-blocks-and-educationa.jpg",
    alt: "Educational toys",
    category: "Play",
  },
  {
    id: 4,
    src: "/colorful-toy-cars-and-vehicles-collection.jpg",
    alt: "Toy vehicles",
    category: "Products",
  },
  {
    id: 5,
    src: "/kids-birthday-party-with-toys-and-decorations.jpg",
    alt: "Birthday celebration",
    category: "Events",
  },
  {
    id: 6,
    src: "/wooden-educational-toys-and-puzzles-display.jpg",
    alt: "Wooden toys",
    category: "Products",
  },
  {
    id: 7,
    src: "/children-laughing-and-playing-in-toy-store.jpg",
    alt: "Happy kids",
    category: "Store",
  },
  {
    id: 8,
    src: "/colorful-stuffed-animals-and-plush-toys.jpg",
    alt: "Stuffed animals",
    category: "Products",
  },
  {
    id: 9,
    src: "/toy-store-interior-with-colorful-displays.jpg",
    alt: "Store interior",
    category: "Store",
  },
]

const categories = ["All", "Store", "Products", "Play", "Events"]

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-[#00A0FF] to-[#FF008E] text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-lg">{image.alt}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
