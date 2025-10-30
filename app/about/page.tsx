"use client";

import { motion } from "framer-motion";
import { Instagram, Mail } from "lucide-react";
import styles from "./AboutPage.module.css";

export default function AboutPage() {
  const features = [
    {
      icon: "✅",
      title: "Safe Toys",
      description: "All toys are safety-tested and certified",
    },
    {
      icon: "😊",
      title: "Friendly Staff",
      description: "Our team loves helping kids find perfect toys",
    },
    {
      icon: "🎉",
      title: "Fun Environment",
      description: "A magical space designed for play and discovery",
    },
    {
      icon: "💝",
      title: "Quality Guaranteed",
      description: "Only the best toys make it to our shelves",
    },
  ];

  const instagramPosts = [
    { id: 1, img: "https://plus.unsplash.com/premium_photo-1664373233010-7c4abae40f78?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688" },
    { id: 2, img: "https://images.unsplash.com/photo-1558060370-d644479cb6f7?w=400&h=400&fit=crop" },
    { id: 3, img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=400&h=400&fit=crop" },
    { id: 4, img: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400&h=400&fit=crop" },
    { id: 5, img: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" },
  ];

  return (
    <main className={styles.main}>
      {/* About Banner */}
      <section className={styles.bannerSection}>
        <img 
          src="/about.png" 
          alt="About Kidz Dreams" 
          className={styles.bannerImage} 
        />
      </section>

      {/* Our Story */}
      <section className={styles.storySection}>
        <div className={styles.storyGrid}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.storyImageWrapper}>
              <img src="\about_img.png" alt="Kids Dreams Shop" className={styles.storyImage} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.storyText}
          >
            <h2>Our Story</h2>
            <p>
              Kids Dreams was born from a simple dream: to create a magical place where children's imaginations could run wild...
            </p>
            <p>
              Every toy in our shop is handpicked with love, ensuring it meets our high standards for quality, safety, and fun.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionSection}>
        <div className={styles.missionGrid}>
          <motion.div
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={styles.missionCardPink}
          >
            <div className={styles.missionIcon}>🎯</div>
            <h3>Our Mission</h3>
            <p>
              To spark creativity and joy in every child through carefully curated toys that inspire learning and imagination.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -8 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={styles.missionCardOrange}
          >
            <div className={styles.missionIcon}>🌟</div>
            <h3>Our Vision</h3>
            <p>
              To be the happiest toy shop in town, where families create magical memories and children discover the joy of play.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className={styles.whyChooseSection}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Why Choose <span className={styles.gradientText}>Kids Dreams</span>?
        </motion.h2>

        <div className={styles.featureGrid}>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              className={styles.featureCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12 }}
            >
              <div className={styles.featureIcon}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instagram Section */}
      <section className={styles.instagramSection}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.instagramHeader}
        >
          <Instagram className={styles.instagramIcon} />
          <h2>Follow Us on Instagram</h2>
          <p>@kidzdreamsofficial</p>
        </motion.div>

        <div className={styles.instagramGrid}>
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className={styles.instagramCard}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <img src={post.img} alt={`Instagram post ${post.id}`} />
              <div className={styles.instagramOverlay}>
                <Instagram className={styles.overlayIcon} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={styles.newsletterHeader}
        >
          <Mail className={styles.mailIcon} />
          <h2>Stay Ahead with Our Style Predictions</h2>
          <p>Get the latest toy trends, exclusive offers, and magical surprises delivered to your inbox!</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={styles.newsletterForm}
        >
          <input type="email" placeholder="Enter your email here" />
          <button>Subscribe</button>
        </motion.div>
      </section>
    </main>
  );
}
