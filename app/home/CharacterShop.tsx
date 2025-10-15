"use client";

import Image from "next/image";
import styles from "./UniqueAppeal.module.css";
import { FaBaby, FaCube, FaGift } from "react-icons/fa";

export default function UniqueAppeal() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/girl-toy.jpg"
            alt="Girl with toy"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
      </div>

      <div className={styles.contentSection}>
        <h2 className={styles.title}>
          The Unique Appeal Of Toy Time <br /> Toys & Games
        </h2>

        <div className={styles.features}>
          <div className={styles.featureBox}>
            <div className={styles.iconContainer}>
              <FaBaby className={styles.icon} />
            </div>
            <div>
              <h3 className={styles.featureTitle}>Exclusive Toy Collections</h3>
              <p className={styles.featureText}>
                Enim diam vulputate ut pharetra. Adipiscing elit pellentesque
                habitant morbi tristique.
              </p>
            </div>
          </div>

          <div className={styles.featureBox}>
            <div className={styles.iconContainer}>
              <FaCube className={styles.icon} />
            </div>
            <div>
              <h3 className={styles.featureTitle}>Extensive Toy Assortment</h3>
              <p className={styles.featureText}>
                Viverra maecenas accumsan lacus vel. Sed viverra ipsum nunc
                aliquet bibendum enim.
              </p>
            </div>
          </div>

          <div className={styles.featureBox}>
            <div className={styles.iconContainer}>
              <FaGift className={styles.icon} />
            </div>
            <div>
              <h3 className={styles.featureTitle}>Complimentary Shipping</h3>
              <p className={styles.featureText}>
                Nibh praesent tristique magna sit amet. Lorem ipsum is simply
                dummy text printing typesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
