// CategoriesSection.jsx
"use client"
import styles from './CategoriesSection.module.css';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

const CategoriesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);

  const categories = [
    {
      id: 1,
      name: 'Baby Toys',
      image: '/Category/baby toy.png',
      bgColor: '#FFE5E5',
      href: '/toys/baby-toys'
    },
    {
      id: 2,
      name: 'Educational Toys',
      image: '/Category/edu.png',
      bgColor: '#FFF4E0',
      href: '/toys/educational-toys'
    },
    {
      id: 3,
      name: 'Model Cars',
      image: '/Category/model car.png',
      bgColor: '#E3F2FD',
      href: '/toys/model-cars'
    },
    {
      id: 4,
      name: 'Outdoor Toys',
      image: '/Category/outdoor.png',
      bgColor: '#F0F4FF',
      href: '/toys/outdoor-toys'
    },
    {
      id: 5,
      name: 'Puzzles',
      image: '/Category/puzzel.png',
      bgColor: '#FFF9E0',
      href: '/toys/puzzles'
    },
    {
      id: 6,
      name: 'RC Items',
      image: '/Category/rc car.png',
      bgColor: '#E8F5E9',
      href: '/toys/rc-items'
    },
    {
      id: 7,
      name: 'Teddys',
      image: '/Category/teddy.png',
      bgColor: '#FCE4EC',
      href: '/toys/teddys'
    }
  ];

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const scrollPercentage = scrollLeft / maxScroll;
      const index = Math.round(scrollPercentage * (categories.length - 1));
      setCurrentIndex(index);
    }
  };

  const scrollToCategory = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 220; // Width of each card
      const gap = 40; // Gap between cards
      const scrollPosition = index * (cardWidth + gap);
      
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(index);
    }
  };

  return (
    <section className={styles.categoriesSection}>
      <div className={styles.container}>
        <motion.h2 
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Shop By Category
        </motion.h2>
        
        <div className={styles.carouselWrapper}>
          <motion.div 
            ref={scrollContainerRef}
            className={styles.categoriesGrid}
            onScroll={handleScroll}
            drag="x"
            dragConstraints={scrollContainerRef}
            dragElastic={0.1}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={() => setIsDragging(false)}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <Link href={category.href} key={category.id} style={{ pointerEvents: isDragging ? 'none' : 'auto' }}>
                <motion.div 
                  className={styles.categoryCard}
                  initial={{ opacity: 0, scale: 0.8, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.08,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -12,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div 
                    className={styles.categoryCircle}
                    style={{ backgroundColor: category.bgColor }}
                    whileHover={{ 
                      rotate: [0, -8, 8, 0],
                      transition: { duration: 0.6 }
                    }}
                  >
                    <div className={styles.imageWrapper}>
                      <Image 
                        src={category.image} 
                        alt={category.name}
                        width={160}
                        height={160}
                        className={styles.categoryIcon}
                        draggable={false}
                      />
                    </div>
                  </motion.div>
                  <h3 className={styles.categoryName}>
                    {category.name}
                  </h3>
                </motion.div>
              </Link>
            ))}
          </motion.div>
          
          {/* Modern Progress Indicators */}
          <div className={styles.indicators}>
            {categories.map((_, index) => (
              <motion.button
                key={index}
                className={`${styles.indicator} ${currentIndex === index ? styles.indicatorActive : ''}`}
                onClick={() => scrollToCategory(index)}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`Go to ${categories[index].name}`}
              >
                <motion.div 
                  className={styles.indicatorProgress}
                  initial={false}
                  animate={{
                    width: currentIndex === index ? '100%' : '0%'
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Gradient Overlays for Modern Effect */}
          <div className={styles.gradientLeft} />
          <div className={styles.gradientRight} />
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;