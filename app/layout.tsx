import type React from "react"
import { CartProvider } from "../src/context/CartContext"
import Header from "../src/components/layout/Header"
import Footer from "../src/components/layout/Footer"
import ScrollToTop from "../src/components/common/ScrollToTop"
import "../src/styles/globals.css"
import "../src/styles/animations.css"

export const metadata = {
  title: "Pippo - Best Education for Kids",
  description: "Educational toys and games for children of all ages",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <div className="app">
            <Header />
            <main>
              {children}
            </main>
            <Footer />
            <ScrollToTop />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
