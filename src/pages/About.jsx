"use client"

import Link from "next/link"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import "./About.css"

const About = () => {
  const values = [
    {
      id: 1,
      icon: "🎯",
      title: "Quality First",
      description: "We carefully select every toy to ensure it meets the highest safety and quality standards.",
    },
    {
      id: 2,
      icon: "🧠",
      title: "Educational Value",
      description: "Our toys are designed to inspire learning, creativity, and cognitive development.",
    },
    {
      id: 3,
      icon: "💚",
      title: "Safe & Eco-Friendly",
      description: "All products are made from non-toxic, sustainable materials safe for children and the planet.",
    },
    {
      id: 4,
      icon: "🌟",
      title: "Customer Satisfaction",
      description: "Your happiness is our priority. We're committed to providing exceptional service and support.",
    },
  ]

  const team = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Passionate about early childhood education with 15+ years of experience.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Product Director",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Expert in toy safety standards and sustainable manufacturing practices.",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Education Specialist",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former teacher dedicated to creating meaningful learning experiences.",
    },
  ]

  const stats = [
    { id: 1, number: "10,000+", label: "Happy Families" },
    { id: 2, number: "500+", label: "Quality Products" },
    { id: 3, number: "15+", label: "Years Experience" },
    { id: 4, number: "98%", label: "Satisfaction Rate" },
  ]

  return (
    <>
      <Header />
      <div className="about-page">
        <div className="about-hero">
          <div className="container">
            <h1 className="about-hero-title">About Pippo</h1>
            <p className="about-hero-subtitle">Inspiring Young Minds Through Play</p>
          </div>
        </div>

        <section className="about-story section">
          <div className="container">
            <div className="story-grid">
              <div className="story-image">
                <img
                  src="/happy-child-playing-with-colorful-character-toys.jpg"
                  alt="Children playing with toys"
                  className="story-img"
                />
              </div>
              <div className="story-content">
                <h2 className="section-title">Our Story</h2>
                <p className="story-text">
                  Founded in 2009, Pippo began with a simple mission: to provide children with toys that spark
                  imagination, encourage learning, and bring joy to families around the world.
                </p>
                <p className="story-text">
                  What started as a small family business has grown into a trusted name in educational toys. We believe
                  that play is essential to childhood development, and every product we offer is carefully selected to
                  support cognitive, social, and emotional growth.
                </p>
                <p className="story-text">
                  Today, we're proud to serve thousands of families, schools, and childcare centers with high-quality,
                  safe, and engaging toys that make learning fun.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-values section">
          <div className="container">
            <h2 className="section-title text-center">Our Values</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={value.id} className="value-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="value-icon">{value.icon}</div>
                  <h3 className="value-title">{value.title}</h3>
                  <p className="value-description">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-stats section-sm">
          <div className="container">
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={stat.id} className="stat-card" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-team section">
          <div className="container">
            <h2 className="section-title text-center">Meet Our Team</h2>
            <div className="team-grid">
              {team.map((member, index) => (
                <div key={member.id} className="team-card" style={{ animationDelay: `${index * 0.15}s` }}>
                  <div className="team-image">
                    <img src={member.image || "/placeholder.svg"} alt={member.name} />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-bio">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="about-cta section">
          <div className="container">
            <div className="cta-box">
              <h2 className="cta-title">Ready to Explore?</h2>
              <p className="cta-text">Discover our collection of educational toys designed to inspire and delight.</p>
              <Link href="/products" className="btn btn-primary btn-lg">
                Shop Now
              </Link>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default About
