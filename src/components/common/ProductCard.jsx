"use client"

import { useState } from "react"
import Link from "next/link"
import "./ProductCard.css"

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false)

  const handleAddToCart = (e) => {
    e.preventDefault()
    // Add to cart logic
    console.log("Added to cart:", product.name)
  }

  const handleWishlist = (e) => {
    e.preventDefault()
    setIsWishlisted(!isWishlisted)
  }

  return (
    <div className="product-card">
      <Link href={`/product/${product.id}`} className="product-card-link">
        <div className="product-image-wrapper">
          <img src={product.image || "/placeholder.svg"} alt={product.name} className="product-image" />
          {product.badge && <span className={`product-badge ${product.badge.toLowerCase()}`}>{product.badge}</span>}
          <button
            className={`wishlist-btn ${isWishlisted ? "wishlisted" : ""}`}
            onClick={handleWishlist}
            aria-label="Add to wishlist"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill={isWishlisted ? "currentColor" : "none"}
              stroke="currentColor"
            >
              <path
                d="M10 18.35l-1.45-1.32C3.4 12.36 0 9.28 0 5.5 0 2.42 2.42 0 5.5 0 7.24 0 8.91.81 10 2.09 11.09.81 12.76 0 14.5 0 17.58 0 20 2.42 20 5.5c0 3.78-3.4 6.86-8.55 11.54L10 18.35z"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>

        <div className="product-info">
          {product.category && <span className="product-category">{product.category}</span>}
          <h3 className="product-name">{product.name}</h3>

          {product.rating && (
            <div className="product-rating">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  width="14"
                  height="14"
                  viewBox="0 0 20 20"
                  fill={index < Math.floor(product.rating) ? "currentColor" : "none"}
                  stroke="currentColor"
                >
                  <path
                    d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"
                    strokeWidth="1"
                  />
                </svg>
              ))}
              <span className="rating-count">({product.reviews})</span>
            </div>
          )}

          <div className="product-price-row">
            <div className="product-prices">
              {product.oldPrice && <span className="product-old-price">${product.oldPrice}</span>}
              <span className="product-price">${product.price}</span>
            </div>
          </div>
        </div>
      </Link>

      <button className="add-to-cart-btn" onClick={handleAddToCart}>
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor">
          <path
            d="M1 1h3l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L22 6H6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
