"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Mail, Heart } from "lucide-react";
import styles from "./CustomToast.module.css";

interface CustomToastProps {
  isVisible: boolean;
  onClose: () => void;
  type: "success" | "subscribe";
  message: string;
  subtitle?: string;
  position?: "center" | "top";
}

export default function CustomToast({ isVisible, onClose, type, message, subtitle, position = "center" }: CustomToastProps) {
  const isTopPosition = position === "top";
  
  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Toast */}
          <motion.div
            className={`${styles.toast} ${isTopPosition ? styles.toastTop : styles.toastCenter} ${type === "subscribe" ? styles.toastSubscribe : styles.toastSuccess}`}
            initial={{ 
              opacity: 0, 
              scale: 0.5, 
              y: isTopPosition ? -100 : -20 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0 
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.5, 
              y: isTopPosition ? -100 : -20 
            }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
          >
            <button className={styles.closeButton} onClick={onClose}>
              <X size={20} />
            </button>

            <div className={styles.content}>
              <motion.div
                className={styles.iconWrapper}
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              >
                {type === "subscribe" ? (
                  <Mail className={styles.icon} size={40} />
                ) : (
                  <CheckCircle className={styles.icon} size={40} />
                )}
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={styles.title}
              >
                {message}
              </motion.h3>

              {subtitle && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className={styles.subtitle}
                >
                  {subtitle}
                </motion.p>
              )}

              <motion.div
                className={styles.decorations}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <span className={styles.emoji}>🎉</span>
                <span className={styles.emoji}>✨</span>
                <span className={styles.emoji}>🎈</span>
              </motion.div>

              <motion.button
                className={styles.okButton}
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Awesome! <Heart size={16} fill="currentColor" />
              </motion.button>
            </div>

            {/* Confetti effect */}
            <div className={styles.confetti}>
              {[...Array(10)].map((_, i) => (
                <motion.div
                  key={i}
                  className={styles.confettiPiece}
                  initial={{ 
                    opacity: 1, 
                    y: 0, 
                    x: 0,
                    scale: 1 
                  }}
                  animate={{ 
                    opacity: 0, 
                    y: [0, -100, -200],
                    x: [0, (Math.random() - 0.5) * 200],
                    rotate: [0, 360],
                    scale: [1, 0.5, 0]
                  }}
                  transition={{ 
                    duration: 2, 
                    delay: i * 0.1,
                    ease: "easeOut"
                  }}
                  style={{
                    left: `${20 + i * 8}%`,
                    backgroundColor: ['#FF6B9D', '#FFA06B', '#667eea', '#764ba2', '#FFD700'][i % 5]
                  }}
                />
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
