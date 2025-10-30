"use client";

import { motion } from "framer-motion";
import styles from "./NewArrivals.module.css";
import Image from "next/image";
import { useState } from "react";

const newArrivals = [
  {
    id: 1,
    name: "Scrabble Original",
    image: "/new arrivals/3.png",
    bgColor: "transparent"
  },
  {
    id: 2,
    name: "Soft Elephant",
    image: "/new arrivals/5.png",
    bgColor: "transparent"
  },
  {
    id: 3,
    name: "RC Thunder Cruiser",
    image: "/new arrivals/9.png",
    bgColor: "transparent"
  },
  {
    id: 4,
    name: "Magnetic Activity Board",
    image: "/new arrivals/19.png",
    bgColor: "transparent"
  },
  {
    id: 5,
    name: "Off-Road Jeep",
    image: "/new arrivals/33.png",
    bgColor: "transparent"
  },
  {
    id: 6,
    name: "Model Sports Car",
    image: "/new arrivals/66.png",
    bgColor: "transparent"
  }
];

// Duplicate the array to create seamless loop
const duplicatedArrivals = [...newArrivals, ...newArrivals];

export default function NewArrivals() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section 
      className={styles.section}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          New Arrivals
        </motion.h2>
        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Check out our latest toy collection
        </motion.p>

        {/* Scrolling Container */}
        <div className={styles.scrollContainer}>
          <motion.div 
            className={styles.scrollingWrapper}
            animate={{ 
              x: isHovered ? undefined : [0, -50 + "%"] 
            }}
            transition={{
              x: {
                repeat: isHovered ? 0 : Infinity,
                repeatType: "loop",
                duration: 35,
                ease: "linear"
              }
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {duplicatedArrivals.map((product, index) => (
              <motion.div 
                key={`${product.id}-${index}`} 
                className={styles.card}
                style={{ borderColor: (index % newArrivals.length) === 0 ? "#FF4E8D" : "#ddd" }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.7, 
                  delay: (index % newArrivals.length) * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className={styles.imageWrapper}
                  style={{ backgroundColor: product.bgColor }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={280}
                    height={280}
                    className={styles.image}
                    priority={index < 3}
                  />
                </motion.div>
                <motion.div className={styles.productInfo}>
                  <motion.h3 
                    className={styles.productName}
                    style={{ color: (index % newArrivals.length) === 0 ? "#0075FF" : "#333" }}
                  >
                    {product.name}
                  </motion.h3>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}