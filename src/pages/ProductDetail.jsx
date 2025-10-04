"use client"

import { useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import "./ProductDetail.css"

const ProductDetail = () => {
  const params = useParams()
  const id = params?.id

  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)

  // Mock product data - in real app, fetch based on id
  const product = {
    id: 1,
    name: "Colorful Building Blocks Set",
    category: "Educational",
    price: 24.99,
    oldPrice: 34.99,
    rating: 4.5,
    reviews: 128,
    inStock: true,
    sku: "TOY-BB-001",
    description:
      "Spark creativity and learning with our premium building blocks set. Perfect for developing fine motor skills, spatial awareness, and imagination. Made from safe, non-toxic materials with smooth edges for little hands.",
    features: [
      "100+ colorful pieces in various shapes",
      "Made from BPA-free, non-toxic plastic",
      "Smooth edges safe for children 2+",
      "Includes storage container",
      "Compatible with major building block brands",
      "Encourages STEM learning",
    ],
    specifications: {
      "Age Range": "2-7 years",
      Material: "BPA-free Plastic",
      "Piece Count": "100+",
      Dimensions: "12 x 8 x 6 inches",
      Weight: "2.5 lbs",
    },
    images: [
      "/colorful-building-blocks.png",
      "/rainbow-colorful-building-blocks.jpg",
      "/placeholder.svg?height=500&width=500",
      "/placeholder.svg?height=500&width=500",
    ],
  }

  const relatedProducts = [
    {
      id: 2,
      name: "Musical Learning Tablet",
      price: 39.99,
      image: "/children-musical-learning-tablet.jpg",
      rating: 4.8,
    },
    {
      id: 3,
      name: "Soft Plush Teddy Bear",
      price: 19.99,
      image: "/soft-plush-teddy-bear-toy.jpg",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Water Play Activity Table",
      price: 49.99,
      image: "/water-play-activity-table-for-kids.jpg",
      rating: 4.6,
    },
  ]

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart!`)
  }

  return (
    <>
      <Header />
      <div className="product-detail-page">
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/products">Products</Link>
            <span>/</span>
            <span>{product.name}</span>
          </div>

          <div className="product-detail-grid">
            <div className="product-images">
              <div className="main-image">
                <img src={product.images[selectedImage] || "/placeholder.svg"} alt={product.name} />
                {product.oldPrice && (
                  <span className="discount-badge">
                    -{Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}%
                  </span>
                )}
              </div>
              <div className="image-thumbnails">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`thumbnail ${selectedImage === index ? "active" : ""}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image || "/placeholder.svg"} alt={`${product.name} view ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            <div className="product-info">
              <div className="product-header">
                <span className="product-category">{product.category}</span>
                <h1 className="product-title">{product.name}</h1>

                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill={index < Math.floor(product.rating) ? "currentColor" : "none"}
                        stroke="currentColor"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                  <span className="rating-text">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="product-pricing">
                <div className="price-group">
                  <span className="current-price">${product.price}</span>
                  {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
                </div>
                <span className={`stock-status ${product.inStock ? "in-stock" : "out-of-stock"}`}>
                  {product.inStock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              <p className="product-description">{product.description}</p>

              <div className="product-actions">
                <div className="quantity-selector">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="qty-btn">
                    -
                  </button>
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number.parseInt(e.target.value) || 1))}
                    className="qty-input"
                  />
                  <button onClick={() => setQuantity(quantity + 1)} className="qty-btn">
                    +
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="btn btn-primary btn-lg add-to-cart-btn"
                  disabled={!product.inStock}
                >
                  Add to Cart
                </button>

                <button className="btn btn-outline wishlist-btn" aria-label="Add to wishlist">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path
                      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="product-meta">
                <p>
                  <strong>SKU:</strong> {product.sku}
                </p>
                <p>
                  <strong>Category:</strong> {product.category}
                </p>
              </div>
            </div>
          </div>

          <div className="product-details-tabs">
            <div className="tab-content">
              <div className="tab-panel">
                <h2 className="tab-panel-title">Features</h2>
                <ul className="features-list">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="tab-panel">
                <h2 className="tab-panel-title">Specifications</h2>
                <table className="specs-table">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <td className="spec-label">{key}</td>
                        <td className="spec-value">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="related-products-section">
            <h2 className="section-title">You May Also Like</h2>
            <div className="related-products-grid">
              {relatedProducts.map((relatedProduct) => (
                <Link href={`/products/${relatedProduct.id}`} key={relatedProduct.id} className="related-product-card">
                  <div className="related-product-image">
                    <img src={relatedProduct.image || "/placeholder.svg"} alt={relatedProduct.name} />
                  </div>
                  <div className="related-product-info">
                    <h3 className="related-product-name">{relatedProduct.name}</h3>
                    <div className="related-product-rating">
                      <span className="rating-stars">★</span>
                      <span>{relatedProduct.rating}</span>
                    </div>
                    <p className="related-product-price">${relatedProduct.price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductDetail
