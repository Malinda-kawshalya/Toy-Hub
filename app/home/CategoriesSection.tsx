// CategoriesSection.jsx
"use client"
import styles from './CategoriesSection.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name: 'Educational Toys',
      image: '/Category/edu.png',
      bgColor: '#f5e4d3'
    },
    {
      id: 2,
      name: 'Dolls & Plush ',
      image: '/Category/doll.png',
      bgColor: '#fce4e0'
    },
    {
      id: 3,
      name: 'Action Figures',
      image: '/Category/action.png',
      bgColor: '#d4e6f1'
    },
    {
      id: 4,
      name: 'Outdoor Toys',
      image: '/Category/outdoor.png',
      bgColor: '#e5eef7'
    },
    {
      id: 5,
      name: 'Creative Kits',
      image: '/Category/creative.png',
      bgColor: '#e0f0e3'
    },
    {
      id: 6,
      name: 'Games & Puzzles',
      image: '/Category/puzzel.png',
      bgColor: '#f9eac2'
    }
  ];

  const promos = [
    {
      id: 1,
      title: 'Wood toys for your kids',
      description: 'Get 20% off your first purchase',
      image: '/home/wooden-toys.jpg',
      bgColor: '#fce4e0'
    },
    {
      id: 2,
      title: 'Early black friday specials',
      description: 'Big discount 50% off on all order',
      image: '/home/plush-toy.jpg',
      bgColor: '#e5eef7'
    },
    {
      id: 3,
      title: 'The best thing for kids',
      description: 'Special offer gift voucher',
      image: '/home/toy-ball.jpg',
      bgColor: '#e0f0e3'
    }
  ];

  return (
    <section className={styles.categoriesSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Shop By Category
        </motion.h2>
        
        <motion.div 
          className={styles.categoriesGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category, index) => (
            <motion.div 
              key={category.id} 
              className={styles.categoryCard}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className={styles.categoryImage}
                style={{ backgroundColor: category.bgColor }}
                whileHover={{ 
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <Image 
                  src={category.image} 
                  alt={category.name}
                  width={200}
                  height={200}
                  className={styles.image}
                />
              </motion.div>
              <motion.h3 
                className={styles.categoryName}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                {category.name}
              </motion.h3>
            </motion.div>
          ))}
        </motion.div>

        <div className={styles.dotsIndicator}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={`${styles.dot} ${styles.active}`}></span>
          <span className={styles.dot}></span>
        </div>

        <motion.div 
          className={styles.promosGrid}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {promos.map((promo, index) => (
            <motion.div 
              key={promo.id} 
              className={styles.promoCard}
              style={{ backgroundColor: promo.bgColor }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className={styles.promoContent}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
              >
                <h3 className={styles.promoTitle}>{promo.title}</h3>
                <p className={styles.promoDescription}>{promo.description}</p>
                <motion.button 
                  className={styles.shopButton}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "#ff6b6b"
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  Shop now
                </motion.button>
              </motion.div>
              <motion.div 
                className={styles.promoImage}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <Image 
                  src={promo.image} 
                  alt={promo.title}
                  width={200}
                  height={200}
                  className={styles.image}
                  priority
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;