import "./BrandLogos.css"

const BrandLogos = () => {
  const brands = [
    { id: 1, name: "Brand 1", logo: "/toy-brand-logo-colorful.jpg" },
    { id: 2, name: "Brand 2", logo: "/kids-toy-company-logo.jpg" },
    { id: 3, name: "Brand 3", logo: "/educational-toys-brand-logo.jpg" },
    { id: 4, name: "Brand 4", logo: "/children-toys-brand-logo.jpg" },
    { id: 5, name: "Brand 5", logo: "/playful-toy-brand-logo.jpg" },
  ]

  return (
    <section className="brand-logos section-sm">
      <div className="container">
        <div className="brands-wrapper">
          <div className="brands-scroll">
            {[...brands, ...brands].map((brand, index) => (
              <div key={`${brand.id}-${index}`} className="brand-item">
                <img src={brand.logo || "/placeholder.svg"} alt={brand.name} className="brand-logo" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandLogos
