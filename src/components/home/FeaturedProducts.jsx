import Link from "next/link"
import "./FeaturedProducts.css"

const FeaturedProducts = () => {
  const featuredItems = [
    {
      id: 1,
      title: "TOYS CAN BE A SAFE FACTORY",
      image: "/teddy-bear-with-christmas-decorations.jpg",
      link: "/category/safe-toys",
    },
    {
      id: 2,
      title: "NEW IN CHILDREN EDUCATIONAL TOYS",
      image: "/colorful-toy-car-with-children-playing.jpg",
      link: "/category/educational",
    },
  ]

  return (
    <section className="featured-products section-sm">
      <div className="container">
        <div className="featured-grid">
          {featuredItems.map((item, index) => (
            <div key={item.id} className="featured-card" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="featured-image-wrapper">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="featured-image" />
                <div className="featured-overlay"></div>
              </div>
              <div className="featured-content">
                <h3 className="featured-title">{item.title}</h3>
                <Link href={item.link} className="btn btn-primary">
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
