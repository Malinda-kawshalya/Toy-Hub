"use client"

import { useState } from "react"
import Link from "next/link"
import "../../../src/pages/ProductDetail.css"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
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
      rating: 4.8,
      image: "/children-musical-learning-tablet.jpg",
    },
    {
      id: 3,
      name: "Rainbow Building Blocks",
      price: 29.99,
      rating: 4.8,
      image: "/rainbow-colorful-building-blocks.jpg",
    },
    {
      id: 4,
      name: "Water Play Activity Table",
      price: 49.99,
      rating: 4.6,
      image: "/water-play-activity-table-for-kids.jpg",
    },
  ]

  const handleQuantityChange = (delta: number) => {
    setQuantity(Math.max(1, quantity + delta))
  }

  const handleAddToCart = () => {
    // Add to cart logic
    console.log(`Added ${quantity} of product ${id} to cart`)
  }

  return (
    <div className="product-detail-page">
      <div className="container">
        <nav className="breadcrumb">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/products">Products</Link>
          <span>/</span>
          <span>{product.name}</span>
        </nav>

        <div className="product-detail-content">
          <div className="product-images">
            <div className="main-image">
              <img src={product.images[selectedImage] || "/placeholder.svg"} alt={product.name} />
            </div>
            <div className="image-thumbnails">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`thumbnail ${selectedImage === index ? "active" : ""}`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img src={image || "/placeholder.svg"} alt={`${product.name} ${index + 1}`} />
                </button>
              ))}
            </div>
          </div>

          <div className="product-info">
            <div className="product-badges">
              {product.oldPrice && <span className="badge sale">Sale</span>}
              {product.inStock && <span className="badge in-stock">In Stock</span>}
            </div>

            <h1 className="product-title">{product.name}</h1>

            <div className="product-rating">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`star ${i < Math.floor(product.rating) ? "filled" : ""}`}>
                    ★
                  </span>
                ))}
              </div>
              <span className="rating-text">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="product-price">
              <span className="current-price">${product.price}</span>
              {product.oldPrice && <span className="old-price">${product.oldPrice}</span>}
            </div>

            <p className="product-description">{product.description}</p>

            <div className="product-meta">
              <p>
                <strong>SKU:</strong> {product.sku}
              </p>
              <p>
                <strong>Category:</strong> {product.category}
              </p>
            </div>

            <div className="product-actions">
              <div className="quantity-selector">
                <button onClick={() => handleQuantityChange(-1)} disabled={quantity <= 1}>
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => handleQuantityChange(1)}>+</button>
              </div>

              <button className="btn btn-primary add-to-cart" onClick={handleAddToCart}>
                Add to Cart
              </button>

              <button className="btn btn-secondary add-to-wishlist">
                ♡ Add to Wishlist
              </button>
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
  )
}
