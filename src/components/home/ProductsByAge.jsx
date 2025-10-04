"use client"

import { useState } from "react"
import ProductCard from "../common/ProductCard"
import "./ProductsByAge.css"

const ProductsByAge = () => {
  const [activeTab, setActiveTab] = useState("all")

  const tabs = [
    { id: "all", label: "All Products" },
    { id: "0-12", label: "0-12 Months" },
    { id: "12-24", label: "12-24 Months" },
    { id: "2-4", label: "2-4 Years" },
    { id: "5-7", label: "5-7 Years" },
  ]

  const products = [
    {
      id: 1,
      name: "Colorful Building Blocks",
      category: "Educational",
      price: 24.99,
      oldPrice: 34.99,
      rating: 4.5,
      reviews: 128,
      image: "/colorful-building-blocks.png",
      badge: "Sale",
      ageGroup: "2-4",
    },
    {
      id: 2,
      name: "Musical Learning Tablet",
      category: "Electronic",
      price: 39.99,
      rating: 4.8,
      reviews: 256,
      image: "/children-musical-learning-tablet.jpg",
      badge: "New",
      ageGroup: "12-24",
    },
    {
      id: 3,
      name: "Soft Plush Teddy Bear",
      category: "Dolls",
      price: 19.99,
      rating: 4.7,
      reviews: 189,
      image: "/soft-plush-teddy-bear-toy.jpg",
      ageGroup: "0-12",
    },
    {
      id: 4,
      name: "Water Play Activity Table",
      category: "Outdoor",
      price: 49.99,
      oldPrice: 69.99,
      rating: 4.6,
      reviews: 94,
      image: "/water-play-activity-table-for-kids.jpg",
      badge: "Hot",
      ageGroup: "2-4",
    },
  ]

  const filteredProducts = activeTab === "all" ? products : products.filter((p) => p.ageGroup === activeTab)

  return (
    <section className="products-by-age section">
      <div className="container">
        <h2 className="section-title text-center">PRODUCTS BY AGE</h2>

        <div className="age-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`age-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filteredProducts.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsByAge
