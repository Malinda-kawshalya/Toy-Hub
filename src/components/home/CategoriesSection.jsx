import Link from "next/link"
import "./CategoriesSection.css"

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name: "Pre-School Toys",
      icon: "🧸",
      link: "/category/preschool",
    },
    {
      id: 2,
      name: "Electronic Toys",
      icon: "🎮",
      link: "/category/electronic",
    },
    {
      id: 3,
      name: "Dolls",
      icon: "👶",
      link: "/category/dolls",
    },
    {
      id: 4,
      name: "Puzzles",
      icon: "🧩",
      link: "/category/puzzles",
    },
    {
      id: 5,
      name: "Transport Toys",
      icon: "🚗",
      link: "/category/transport",
    },
  ]

  return (
    <section className="categories-section section">
      <div className="container">
        <h2 className="section-title text-center">CATEGORIES YOU'LL LOVE</h2>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link
              href={category.link}
              key={category.id}
              className="category-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-name">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection
