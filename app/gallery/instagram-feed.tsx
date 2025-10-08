"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import Image from "next/image"

const instagramPosts = [
  {
    id: 1,
    image: "/cute-toy-post-for-instagram.jpg",
  },
  {
    id: 2,
    image: "/happy-child-with-toy-instagram-post.jpg",
  },
  {
    id: 3,
    image: "/colorful-toys-flat-lay-instagram.jpg",
  },
  {
    id: 4,
    image: "/toy-store-display-instagram-post.jpg",
  },
  {
    id: 5,
    image: "/plush-toys-collection-instagram.jpg",
  },
  {
    id: 6,
    image: "/kids-playing-with-toys-instagram-post.jpg",
  },
]

export function InstagramFeed() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#E3F2FD] to-[#FCE4EC]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="w-10 h-10 text-[#FF008E]" />
            <h2 className="text-4xl sm:text-5xl font-bold text-balance">
              Follow Us on{" "}
              <span className="bg-gradient-to-r from-[#00A0FF] to-[#FF008E] bg-clip-text text-transparent">
                Instagram
              </span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join our community and share your toy adventures with #ToyShopMagic
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#FF008E]/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram className="w-12 h-12 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#00A0FF] to-[#FF008E] text-white font-bold rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Instagram className="w-5 h-5" />
            Follow @ToyShop
          </a>
        </motion.div>
      </div>
    </section>
  )
}
