"use client"

import { useState } from "react"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import ProductCard from "../components/common/ProductCard"
import "./Products.css"

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [priceRange, setPriceRange] = useState([0, 100])

  const categories = [
    { id: "all", name: "All Products" },
    { id: "preschool", name: "Pre-School" },
    { id: "electronic", name: "Electronic" },
    { id: "dolls", name: "Dolls" },
    { id: "puzzles", name: "Puzzles" },
    { id: "transport", name: "Transport" },
    { id: "educational", name: "Educational" },
    { id: "outdoor", name: "Outdoor" },
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
      categoryId: "educational",
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
      categoryId: "electronic",
    },
    {
      id: 3,
      name: "Soft Plush Teddy Bear",
      category: "Dolls",
      price: 19.99,
      rating: 4.7,
      reviews: 189,
      image: "/soft-plush-teddy-bear-toy.jpg",
      categoryId: "dolls",
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
      categoryId: "outdoor",
    },
    {
      id: 5,
      name: "Space Adventure Toy Set",
      category: "Action Figures",
      price: 34.99,
      rating: 4.9,
      reviews: 342,
      image: "/space-adventure-toy-astronaut.jpg",
      badge: "Hot",
      categoryId: "preschool",
    },
    {
      id: 6,
      name: "Rainbow Building Blocks",
      category: "Educational",
      price: 29.99,
      oldPrice: 39.99,
      rating: 4.8,
      reviews: 567,
      image: "/rainbow-colorful-building-blocks.jpg",
      badge: "Sale",
      categoryId: "educational",
    },
    {
      id: 7,
      name: "Fire Truck Rescue Vehicle",
      category: "Transport",
      price: 44.99,
      rating: 4.7,
      reviews: 234,
      image: "/red-fire-truck-toy-vehicle.jpg",
      badge: "New",
      categoryId: "transport",
    },
    {
      id: 8,
      name: "Musical Activity Cube",
      category: "Electronic",
      price: 39.99,
      rating: 4.6,
      reviews: 189,
      image: "/colorful-musical-activity-cube-toy.jpg",
      categoryId: "electronic",
    },
    {
      id: 9,
      name: "Wooden Puzzle Set",
      category: "Puzzles",
      price: 16.99,
      rating: 4.5,
      reviews: 145,
      image: "/placeholder.svg?height=300&width=300",
      categoryId: "puzzles",
    },
    {
      id: 10,
      name: "Baby Doll with Accessories",
      category: "Dolls",
      price: 32.99,
      rating: 4.7,
      reviews: 203,
      image: "/placeholder.svg?height=300&width=300",
      badge: "New",
      categoryId: "dolls",
    },
    {
      id: 11,
      name: "Remote Control Car",
      category: "Transport",
      price: 54.99,
      rating: 4.8,
      reviews: 312,
      image: "/colorful-toy-car-with-children-playing.jpg",
      badge: "Hot",
      categoryId: "transport",
    },
    {
      id: 12,
      name: "Learning Clock Toy",
      category: "Educational",
      price: 21.99,
      rating: 4.4,
      reviews: 87,
      image: "/placeholder.svg?height=300&width=300",
      categoryId: "educational",
    },
  ]

  const filteredProducts = products
    .filter((product) => selectedCategory === "all" || product.categoryId === selectedCategory)
    .filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price
      if (sortBy === "price-high") return b.price - a.price
      if (sortBy === "rating") return b.rating - a.rating
      return 0
    })

  return (
    <>
      <Header />
      <div className="products-page">
        <div className="products-hero">
          <div className="container">
            <h1 className="products-hero-title">Our Products</h1>
            <p className="products-hero-subtitle">Discover amazing toys for every age and interest</p>
          </div>
        </div>

        <div className="container">
          <div className="products-layout">
            <aside className="products-sidebar">
              <div className="filter-section">
                <h3 className="filter-title">Categories</h3>
                <div className="category-filters">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      className={`category-filter-btn ${selectedCategory === category.id ? "active" : ""}`}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="filter-section">
                <h3 className="filter-title">Price Range</h3>
                <div className="price-range-display">
                  ${priceRange[0]} - ${priceRange[1]}
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, Number.parseInt(e.target.value)])}
                  className="price-slider"
                />
              </div>

              <div className="filter-section">
                <h3 className="filter-title">Sort By</h3>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sort-select">
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </aside>

            <main className="products-main">
              <div className="products-header">
                <p className="products-count">{filteredProducts.length} Products Found</p>
              </div>

              <div className="products-grid">
                {filteredProducts.map((product, index) => (
                  <div key={product.id} style={{ animationDelay: `${index * 0.05}s` }}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="no-products">
                  <p>No products found matching your criteria.</p>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Products
