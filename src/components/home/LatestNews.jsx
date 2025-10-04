import Link from "next/link"
import "./LatestNews.css"

const LatestNews = () => {
  const newsItems = [
    {
      id: 1,
      title: "Top Safety Tips for Choosing the Right Playtime Toys",
      date: "December 15, 2024",
      category: "Safety Tips",
      image: "/placeholder.svg?height=300&width=400",
      excerpt: "Learn essential safety guidelines for selecting age-appropriate toys for your children.",
      link: "/blog/safety-tips",
    },
    {
      id: 2,
      title: "The Top 10 Guide to Educational Toys",
      date: "December 10, 2024",
      category: "Education",
      image: "/placeholder.svg?height=300&width=400",
      excerpt: "Discover the best educational toys that combine learning with fun for different age groups.",
      link: "/blog/educational-guide",
    },
    {
      id: 3,
      title: "5 Benefits of Play for Kids Development",
      date: "December 5, 2024",
      category: "Development",
      image: "/placeholder.svg?height=300&width=400",
      excerpt: "Explore how play contributes to cognitive, social, and emotional development in children.",
      link: "/blog/play-benefits",
    },
    {
      id: 4,
      title: "Why Creativity is Important for Kids",
      date: "December 1, 2024",
      category: "Creativity",
      image: "/placeholder.svg?height=300&width=400",
      excerpt: "Understanding the role of creative play in fostering imagination and problem-solving skills.",
      link: "/blog/creativity-importance",
    },
  ]

  return (
    <section className="latest-news section">
      <div className="container">
        <h2 className="section-title text-center">LATEST NEWS</h2>

        <div className="news-grid">
          {newsItems.map((item, index) => (
            <article key={item.id} className="news-card" style={{ animationDelay: `${index * 0.1}s` }}>
              <Link href={item.link} className="news-link">
                <div className="news-image-wrapper">
                  <img src={item.image || "/placeholder.svg"} alt={item.title} className="news-image" />
                  <span className="news-category">{item.category}</span>
                </div>

                <div className="news-content">
                  <time className="news-date">{item.date}</time>
                  <h3 className="news-title">{item.title}</h3>
                  <p className="news-excerpt">{item.excerpt}</p>
                  <span className="news-read-more">
                    Read More
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestNews
