import Link from "next/link"
import "./NewArrivals.css"

const NewArrivals = () => {
  const newProducts = [
    {
      id: 1,
      name: "Smart Learning Robot",
      price: 89.99,
      originalPrice: 109.99,
      image: "/placeholder.svg?height=300&width=300",
      badge: "New",
      category: "Electronic Toys",
      rating: 4.9,
      reviews: 124,
      description: "Interactive AI-powered learning companion for kids",
    },
    {
      id: 2,
      name: "Wooden Building Blocks Set",
      price: 34.99,
      originalPrice: 44.99,
      image: "/colorful-building-blocks.png",
      badge: "New",
      category: "Educational",
      rating: 4.8,
      reviews: 89,
      description: "Premium wooden blocks for creative construction",
    },
    {
      id: 3,
      name: "Musical Learning Piano",
      price: 45.99,
      originalPrice: 59.99,
      image: "/musical-toy-piano-for-kids.jpg",
      badge: "Hot",
      category: "Musical",
      rating: 4.7,
      reviews: 156,
      description: "Interactive piano with light-up keys and songs",
    },
    {
      id: 4,
      name: "Adventure Teddy Bear",
      price: 28.99,
      originalPrice: 35.99,
      image: "/teddy-bear-with-christmas-decorations.jpg",
      badge: "New",
      category: "Plush Toys",
      rating: 4.9,
      reviews: 203,
      description: "Soft cuddly bear with adventure accessories",
    },
    {
      id: 5,
      name: "Racing Car Set",
      price: 52.99,
      originalPrice: 69.99,
      image: "/colorful-toy-car-with-children-playing.jpg",
      badge: "Sale",
      category: "Transport",
      rating: 4.6,
      reviews: 97,
      description: "High-speed racing cars with tracks and accessories",
    },
    {
      id: 6,
      name: "Art Supply Kit",
      price: 24.99,
      originalPrice: 32.99,
      image: "/placeholder.svg?height=300&width=300",
      badge: "New",
      category: "Arts & Crafts",
      rating: 4.8,
      reviews: 78,
      description: "Complete art kit with paints, brushes, and canvas",
    },
  ]

  return (
    <section className="new-arrivals section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">NEW ARRIVALS</h2>
          <p className="section-subtitle">
            Discover the latest additions to our toy collection - fresh, exciting, and ready to inspire
          </p>
        </div>

        <div className="products-grid">
          {newProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="product-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="product-image-wrapper">
                <img 
                  src={product.image || "/placeholder.svg"} 
                  alt={product.name}
                  className="product-image"
                />
                <div className={`product-badge ${product.badge.toLowerCase()}`}>
                  {product.badge}
                </div>
                <div className="product-overlay">
                  <Link href={`/products/${product.id}`} className="quick-view-btn">
                    Quick View
                  </Link>
                  <button className="add-to-cart-btn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-category">{product.category}</div>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-rating">
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className={`star ${i < Math.floor(product.rating) ? 'filled' : ''}`} width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={i < Math.floor(product.rating) ? '#fbbf24' : '#e5e7eb'} />
                      </svg>
                    ))}
                  </div>
                  <span className="rating-text">({product.reviews})</span>
                </div>
                <div className="product-pricing">
                  <span className="current-price">${product.price}</span>
                  {product.originalPrice && (
                    <span className="original-price">${product.originalPrice}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-all-container">
          <Link href="/products?filter=new" className="view-all-btn">
            View All New Arrivals
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewArrivals