"use client";

import { motion } from "framer-motion";
import styles from "./FeaturedProducts.module.css";
import Image from "next/image";

const featuredProducts = [
  {
    id: 1,
    name: "Deer Doll",
    image: "/deer-doll.png",
  },
  {
    id: 2,
    name: "Cuddly Monkey",
    image: "/cuddly-monkey.png",
  },
  {
    id: 3,
    name: "Brown Teddy",
    image: "/brown-teddy.png",
  },
  {
    id: 4,
    name: "Bear Soft Toy",
    image: "/bear-soft-toy.png",
  },
  {
    id: 5,
    name: "Baby Rabbit",
    image: "/baby-rabbit.png",
  },
  {
    id: 6,
    name: "Baby Owl",
    image: "/baby-owl.png",
  },
];

export default function FeaturedProducts() {
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
          Cras Dictum Metus In Uam Vulpu Commodo.
        </motion.p>

        <motion.div 
          className={styles.slider}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          <motion.div 
            className={styles.sliderTrack}
            initial={{ x: -50 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            {[...featuredProducts, ...featuredProducts].map((product, index) => (
              <motion.div 
                key={index} 
                className={styles.card}
                initial={{ opacity: 0, y: 60, rotateY: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.8, 
                  delay: (index % featuredProducts.length) * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  y: -12,
                  scale: 1.03,
                  rotateY: 0,
                  rotateX: 5,
                  boxShadow: "0 25px 50px rgba(0,160,255,0.15), 0 15px 30px rgba(0,0,0,0.1)",
                  transition: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div 
                  className={styles.imageWrapper}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: 1,
                    background: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)"
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 400,
                    damping: 25
                  }}
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className={styles.image}
                  />
                </motion.div>
                <motion.h3 
                  className={styles.productName}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % featuredProducts.length) * 0.1 + 0.5, duration: 0.5 }}
                  whileHover={{ 
                    color: "#0066cc", 
                    y: -2,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                >
                  {product.name}
                </motion.h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
