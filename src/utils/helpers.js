// Format currency
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount)
}

// Format date
export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString("en-US", options)
}

// Truncate text
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + "..."
}

// Generate star rating
export const generateStars = (rating) => {
  return Array.from({ length: 5 }, (_, index) => index < rating)
}

// Scroll to top smoothly
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Debounce function
export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Validate email
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Filter products
export const filterProducts = (products, filters) => {
  let filtered = [...products]

  if (filters.category && filters.category !== "all") {
    filtered = filtered.filter((p) => p.category === filters.category)
  }

  if (filters.ageRange && filters.ageRange !== "all") {
    filtered = filtered.filter((p) => p.ageRange === filters.ageRange)
  }

  if (filters.priceRange) {
    filtered = filtered.filter((p) => p.price >= filters.priceRange.min && p.price <= filters.priceRange.max)
  }

  if (filters.inStock) {
    filtered = filtered.filter((p) => p.inStock)
  }

  if (filters.search) {
    const searchLower = filters.search.toLowerCase()
    filtered = filtered.filter(
      (p) => p.name.toLowerCase().includes(searchLower) || p.description.toLowerCase().includes(searchLower),
    )
  }

  return filtered
}

// Sort products
export const sortProducts = (products, sortBy) => {
  const sorted = [...products]

  switch (sortBy) {
    case "price-low":
      return sorted.sort((a, b) => a.price - b.price)
    case "price-high":
      return sorted.sort((a, b) => b.price - a.price)
    case "name-asc":
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case "name-desc":
      return sorted.sort((a, b) => b.name.localeCompare(a.name))
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating)
    case "newest":
      return sorted.sort((a, b) => b.id - a.id)
    default:
      return sorted
  }
}
