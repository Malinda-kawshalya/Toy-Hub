// ShopByAgeSection.tsx

import React from 'react';
import styles from './ProductsByAge.module.css'; 

// Define the structure for an age group card
interface AgeGroup {
  id: number;
  ageRange: string;
  link: string;
  colorClass: keyof typeof styles; 
  timeUnit: string;
}

const ageGroups: AgeGroup[] = [
  { id: 1, ageRange: '0 - 12', link: '/shop/age/0-12m', colorClass: 'card1', timeUnit: 'months' },
  { id: 2, ageRange: '1 - 2', link: '/shop/age/1-2y', colorClass: 'card2', timeUnit: 'years' },
  { id: 3, ageRange: '3+', link: '/shop/age/3plus', colorClass: 'card3', timeUnit: 'years' },
  { id: 4, ageRange: '5+', link: '/shop/age/5plus', colorClass: 'card4', timeUnit: 'years' },
];

const ShopByAgeSection: React.FC = () => {
  return (
    <section className={styles.shopByAgeSection}>
      <h2 className={styles.sectionTitle}>Shop By Age</h2>
      <div className={styles.ageCardsContainer}>
        {ageGroups.map((group) => (
          <a
            key={group.id}
            href={group.link}
            className={`${styles.ageCardLink} ${styles[group.colorClass]}`}
          >
            <div className={styles.ageCardContent}>
              <span className={styles.ageNumber}>{group.ageRange}</span>
              <span className={styles.ageText}>{group.timeUnit}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ShopByAgeSection;