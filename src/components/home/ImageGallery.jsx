import "./ImageGallery.css"

const ImageGallery = () => {
  const images = [
    { id: 1, src: "/placeholder.svg?height=400&width=400", alt: "Toy blocks" },
    { id: 2, src: "/placeholder.svg?height=400&width=400", alt: "Kids playing" },
    {
      id: 3,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Action figures",
    },
    { id: 4, src: "/placeholder.svg?height=400&width=400", alt: "Learning toys" },
    { id: 5, src: "/placeholder.svg?height=400&width=400", alt: "Toy cars" },
  ]

  return (
    <section className="image-gallery section-sm">
      <div className="container-fluid">
        <div className="gallery-grid">
          {images.map((image, index) => (
            <div key={image.id} className="gallery-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <img src={image.src || "/placeholder.svg"} alt={image.alt} className="gallery-image" />
              <div className="gallery-overlay">
                <button className="gallery-btn" aria-label="View image">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="11" cy="11" r="8" strokeWidth="2" />
                    <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImageGallery
