// CategoriesSection.jsx
"use client"
import styles from './CategoriesSection.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name: 'Melody Mates',
      image: '/images/drum.jpg',
      bgColor: '#E8E8E8'
    },
    {
      id: 2,
      name: 'Travel Treasures',
      image: '/images/train.jpg',
      bgColor: '#FFE5E0'
    },
    {
      id: 3,
      name: 'Wooden Wonders',
      image: '/images/horse.jpg',
      bgColor: '#E8E8E8'
    },
    {
      id: 4,
      name: 'Pull Toys',
      image: '/images/dog.jpg',
      bgColor: '#E5E5F0'
    },
    {
      id: 5,
      name: 'Squeaky Toys',
      image: '/images/dinosaur.jpg',
      bgColor: '#E5F5E8'
    }
    ,
    {
      id: 6,
      name: 'Squeaky Toys',
      image: '/images/dinosaur.jpg',
      bgColor: '#E5F5E8'
    }
  ];

  const promos = [
    {
      id: 1,
      title: 'Wood toys for your kids',
      description: 'Get 20% flate your first purchase',
      image: '/images/promo1.jpg',
      bgColor: '#FFD4C4'
    },
    {
      id: 2,
      title: 'Early black friday specials',
      description: 'Big discount 50% off on all order',
      image: '/images/promo2.jpg',
      bgColor: '#D4D4E8'
    },
    {
      id: 3,
      title: 'The best thing for kids',
      description: 'Special offer gift voucher',
      image: '/images/promo3.jpg',
      bgColor: '#D4E8D4'
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
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              whileHover={{ 
                scale: 1.01,
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
                transition={{ delay: index * 0.2 + 0.6, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 2,
                  transition: { duration: 0.3 }
                }}
              >
                <Image 
                  src={promo.image} 
                  alt={promo.title}
                  width={300}
                  height={300}
                  className={styles.image}
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