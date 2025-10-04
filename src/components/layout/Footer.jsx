"use client"

import Link from "next/link"
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,0 C300,80 600,80 900,40 C1050,20 1150,0 1200,0 L1200,120 L0,120 Z"
            fill="var(--color-secondary)"
          ></path>
        </svg>
      </div>

      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column">
              <Link href="/" className="footer-logo">
                <span className="footer-logo-text">Pippo</span>
              </Link>
              <p className="footer-description">
                Providing the best educational toys for kids to learn, grow, and have fun. Quality products for happy
                childhoods.
              </p>
              <div className="footer-contact">
                <p>
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
                <p>
                  <strong>Email:</strong> hello@pippo.com
                </p>
              </div>
            </div>

            {/* My Account */}
            <div className="footer-column">
              <h4 className="footer-title">My Account</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/account">My Account</Link>
                </li>
                <li>
                  <Link href="/orders">Order History</Link>
                </li>
                <li>
                  <Link href="/wishlist">Wishlist</Link>
                </li>
                <li>
                  <Link href="/newsletter">Newsletter</Link>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div className="footer-column">
              <h4 className="footer-title">Policies</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/shipping">Shipping Policy</Link>
                </li>
                <li>
                  <Link href="/returns">Return Policy</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms & Conditions</Link>
                </li>
              </ul>
            </div>

            {/* Our Services */}
            <div className="footer-column">
              <h4 className="footer-title">Our Services</h4>
              <ul className="footer-links">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/support">Customer Support</Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="footer-column">
              <h4 className="footer-title">Newsletter</h4>
              <p className="footer-newsletter-text">Subscribe to get special offers, free giveaways, and updates.</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Enter your email" className="newsletter-input" required />
                <button type="submit" className="newsletter-btn">
                  Subscribe
                </button>
              </form>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913a4.936 4.936 0 01-2.212.085 4.996 4.996 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="payment-methods">
              <img src="/visa-application-process.png" alt="Visa" />
              <img src="/mastercard-logo-abstract.png" alt="Mastercard" />
              <img src="/paypal-digital-payment.png" alt="PayPal" />
              <img src="/abstract-american-express.png" alt="American Express" />
            </div>
            <p className="copyright">© {currentYear} Pippo. All rights reserved. Made with love for kids.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
