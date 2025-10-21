"use client";

import { motion } from "framer-motion";
import styles from "./NewArrivals.module.css";
import Image from "next/image";

const newArrivals = [
  {
    id: 1,
    name: "Deer Doll",
    price: "Rs. 352.00",
    image: "/deer-doll.jpg",
    bgColor: "#f0f5fe"
  },
  {
    id: 2,
    name: "Cuddly Monkey",
    price: "Rs. 657.00",
    image: "/cuddly-monkey.jpg",
    bgColor: "#f0f5fe"
  },
  {
    id: 3,
    name: "Brown Teddy",
    price: "Rs. 521.00",
    image: "/brown-teddy.jpg",
    bgColor: "#f0f5fe"
  },
  {
    id: 4,
    name: "Bear Soft Toy",
    price: "Rs. 450.00",
    image: "/bear-soft-toy.jpg",
    bgColor: "#f0f5fe"
  },
  {
    id: 5,
    name: "Baby Rabbit",
    price: "Rs. 105.00",
    image: "/baby-rabbit.jpg",
    bgColor: "#f0f5fe"
  }
];

export default function NewArrivals() {
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

        <motion.div 
          className={styles.productsGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {newArrivals.map((product, index) => (
            <motion.div 
              key={product.id} 
              className={styles.card}
              style={{ borderColor: index === 0 ? "#FF4E8D" : "#ddd" }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.7, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                y: -8,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className={styles.imageWrapper}
                style={{ backgroundColor: product.bgColor }}
                whileHover={{ scale: 1.03 }}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={280}
                  height={280}
                  className={styles.image}
                />
              </motion.div>
              <motion.div className={styles.productInfo}>
                <motion.h3 
                  className={styles.productName}
                  style={{ color: index === 0 ? "#0075FF" : "#333" }}
                >
                  {product.name}
                </motion.h3>
                <motion.p 
                  className={styles.price}
                  style={{ color: index === 0 ? "#FF4E8D" : "#FF4E8D" }}
                >
                  {product.price}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.button 
          className={styles.viewAllButton}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "#0062cc"
          }}
          whileTap={{ scale: 0.95 }}
        >
          View All Products
        </motion.button>
      </div>
    </motion.section>
  );
}