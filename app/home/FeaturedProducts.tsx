"use client";

import styles from "./FeaturedProducts.module.css";
import Image from "next/image";

const featuredProducts = [
  {
    id: 1,
    name: "Deer Doll",
    price: "Rs. 352.00",
    image: "/deer-doll.png",
  },
  {
    id: 2,
    name: "Cuddly Monkey",
    price: "Rs. 657.00",
    image: "/cuddly-monkey.png",
  },
  {
    id: 3,
    name: "Brown Teddy",
    price: "Rs. 521.00",
    image: "/brown-teddy.png",
  },
  {
    id: 4,
    name: "Bear Soft Toy",
    price: "Rs. 450.00",
    image: "/bear-soft-toy.png",
  },
  {
    id: 5,
    name: "Baby Rabbit",
    price: "Rs. 105.00",
    image: "/baby-rabbit.png",
  },
  {
    id: 6,
    name: "Baby Owl",
    price: "Rs. 540.00",
    image: "/baby-owl.png",
  },
];

export default function FeaturedProducts() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>New Arrivals</h2>
        <p className={styles.subtitle}>
          Cras Dictum Metus In Uam Vulpu Commodo.
        </p>

        <div className={styles.slider}>
          <div className={styles.sliderTrack}>
            {[...featuredProducts, ...featuredProducts].map((product, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className={styles.image}
                  />
                </div>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.price}>{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
