"use client"

import { useState } from "react"
import "./Testimonials.css"

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Mother of 2",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Absolutely love the quality of toys from Pippo! My kids are learning and having so much fun. The educational value is outstanding and the toys are built to last.",
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Father of 3",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Best toy store ever! Fast shipping, great customer service, and my children can't get enough of their new toys. Highly recommend to all parents!",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Teacher",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "As an educator, I appreciate toys that combine fun with learning. Pippo's selection is perfect for classroom activities and home learning.",
    },
  ]

  return (
    <section className="testimonials section">
      <div className="container">
        <h2 className="section-title text-center">WHAT OUR CUSTOMERS SAY</h2>

        <div className="testimonials-wrapper">
          <div className="testimonials-images">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-avatar ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              >
                <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
              </div>
            ))}
          </div>

          <div className="testimonial-content">
            <div className="testimonial-rating">
              {[...Array(testimonials[activeIndex].rating)].map((_, index) => (
                <svg key={index} width="24" height="24" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>

            <p className="testimonial-text">"{testimonials[activeIndex].text}"</p>

            <div className="testimonial-author">
              <h4 className="author-name">{testimonials[activeIndex].name}</h4>
              <p className="author-role">{testimonials[activeIndex].role}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
