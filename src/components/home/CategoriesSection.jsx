import Link from "next/link"
import "./CategoriesSection.css"

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      name: "Pre-School Toys",
      icon: "🧸",
      description: "Safe toys for early learning",
      color: "#FFE4B5",
      gradient: "linear-gradient(135deg, #FFE4B5 0%, #FFD700 100%)",
      link: "/category/preschool",
    },
    {
      id: 2,
      name: "Electronic Toys",
      icon: "🎮",
      description: "Interactive digital play",
      color: "#E6E6FA",
      gradient: "linear-gradient(135deg, #E6E6FA 0%, #9370DB 100%)",
      link: "/category/electronic",
    },
    {
      id: 3,
      name: "Dolls",
      icon: "👶",
      description: "Soft companions for kids",
      color: "#FFB6C1",
      gradient: "linear-gradient(135deg, #FFB6C1 0%, #FF69B4 100%)",
      link: "/category/dolls",
    },
    {
      id: 4,
      name: "Puzzles",
      icon: "🧩",
      description: "Brain-building challenges",
      color: "#98FB98",
      gradient: "linear-gradient(135deg, #98FB98 0%, #32CD32 100%)",
      link: "/category/puzzles",
    },
    {
      id: 5,
      name: "Transport Toys",
      icon: "🚗",
      description: "Cars, trucks & adventures",
      color: "#87CEEB",
      gradient: "linear-gradient(135deg, #87CEEB 0%, #4169E1 100%)",
      link: "/category/transport",
    },
    {
      id: 6,
      name: "Arts & Crafts",
      icon: "🎨",
      description: "Creative expression & fun",
      color: "#FFE4E1",
      gradient: "linear-gradient(135deg, #FFE4E1 0%, #FFA07A 100%)",
      link: "/category/arts-crafts",
    },
  ]

  return (
    <section className="categories-section section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title text-center">CATEGORIES YOU'LL LOVE</h2>
          <p className="section-subtitle">Discover our carefully curated collection of toys for every age and interest</p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link
              href={category.link}
              key={category.id}
              className="category-card"
              style={{ 
                animationDelay: `${index * 0.15}s`,
                '--card-gradient': category.gradient,
                '--card-color': category.color
              }}
            >
              <div className="category-card-inner">
                <div className="category-background"></div>
                <div className="category-content">
                  <div className="category-icon-wrapper">
                    <div className="category-icon">{category.icon}</div>
                  </div>
                  <div className="category-info">
                    <h3 className="category-name">{category.name}</h3>
                    <p className="category-description">{category.description}</p>
                  </div>
                  <div className="category-arrow">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection
