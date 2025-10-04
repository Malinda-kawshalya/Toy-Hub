"use client"

import ProductCard from "../../../src/components/common/ProductCard"
import "../../../src/pages/Category.css"

export default function CategoryPage({ params }: { params: { name: string } }) {
  const category = params?.name

  const categoryData = {
    preschool: {
      name: "Pre-School Toys",
      description: "Safe and engaging toys designed for the youngest learners",
      icon: "🧸",
    },
    electronic: {
      name: "Electronic Toys",
      description: "Interactive tech toys that make learning fun",
      icon: "🎮",
    },
    dolls: {
      name: "Dolls & Plush",
      description: "Soft companions for imaginative play",
      icon: "👶",
    },
    puzzles: {
      name: "Puzzles",
      description: "Brain-teasing challenges for problem solvers",
      icon: "🧩",
    },
    transport: {
      name: "Transport Toys",
      description: "Cars, trucks, and vehicles for adventure",
      icon: "🚗",
    },
    educational: {
      name: "Educational Toys",
      description: "Learning through play with STEM-focused toys",
      icon: "📚",
    },
  }

  const currentCategory = categoryData[category?.toLowerCase() as keyof typeof categoryData] || categoryData.preschool

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
    },
    {
      id: 3,
      name: "Soft Plush Teddy Bear",
      category: "Dolls",
      price: 19.99,
      rating: 4.7,
      reviews: 189,
      image: "/soft-plush-teddy-bear-toy.jpg",
    },
  ]

  return (
    <div className="category-page">
      <div className="category-hero">
        <div className="container">
          <div className="category-hero-content">
            <span className="category-icon">{currentCategory.icon}</span>
            <h1 className="category-title">{currentCategory.name}</h1>
            <p className="category-description">{currentCategory.description}</p>
          </div>
        </div>
      </div>

      <div className="container">
        <section className="category-products section">
          <div className="products-grid">
            {products.map((product, index) => (
              <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
