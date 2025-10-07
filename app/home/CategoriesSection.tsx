// CategoriesSection.jsx
import styles from './CategoriesSection.module.css';
import Image from 'next/image';

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
        <h2 className={styles.sectionTitle}>Shop By Category</h2>
        
        <div className={styles.categoriesGrid}>
          {categories.map((category) => (
            <div key={category.id} className={styles.categoryCard}>
              <div 
                className={styles.categoryImage}
                style={{ backgroundColor: category.bgColor }}
              >
                <Image 
                  src={category.image} 
                  alt={category.name}
                  width={200}
                  height={200}
                  className={styles.image}
                />
              </div>
              <h3 className={styles.categoryName}>{category.name}</h3>
            </div>
          ))}
        </div>

        <div className={styles.dotsIndicator}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={`${styles.dot} ${styles.active}`}></span>
          <span className={styles.dot}></span>
        </div>

        <div className={styles.promosGrid}>
          {promos.map((promo) => (
            <div 
              key={promo.id} 
              className={styles.promoCard}
              style={{ backgroundColor: promo.bgColor }}
            >
              <div className={styles.promoContent}>
                <h3 className={styles.promoTitle}>{promo.title}</h3>
                <p className={styles.promoDescription}>{promo.description}</p>
                <button className={styles.shopButton}>Shop now</button>
              </div>
              <div className={styles.promoImage}>
                <Image 
                  src={promo.image} 
                  alt={promo.title}
                  width={300}
                  height={300}
                  className={styles.image}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;