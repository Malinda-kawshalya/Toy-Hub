import ProductCard from "../common/ProductCard"
import "./BestSelling.css"

const BestSelling = () => {
  const bestSellers = [
    {
      id: 1,
      name: "Space Adventure Toy Set",
      category: "Action Figures",
      price: 34.99,
      rating: 4.9,
      reviews: 342,
      image: "/space-adventure-toy-astronaut.jpg",
      badge: "Hot",
    },
    {
      id: 2,
      name: "Rainbow Building Blocks",
      category: "Educational",
      price: 29.99,
      oldPrice: 39.99,
      rating: 4.8,
      reviews: 567,
      image: "/rainbow-colorful-building-blocks.jpg",
      badge: "Sale",
    },
    {
      id: 3,
      name: "Fire Truck Rescue Vehicle",
      category: "Transport",
      price: 44.99,
      rating: 4.7,
      reviews: 234,
      image: "/red-fire-truck-toy-vehicle.jpg",
      badge: "New",
    },
    {
      id: 4,
      name: "Musical Activity Cube",
      category: "Electronic",
      price: 39.99,
      rating: 4.6,
      reviews: 189,
      image: "/colorful-musical-activity-cube-toy.jpg",
    },
  ]

  return (
    <section className="best-selling section">
      <div className="container">
        <h2 className="section-title text-center">BEST SELLING</h2>

        <div className="products-grid">
          {bestSellers.map((product, index) => (
            <div key={product.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSelling
