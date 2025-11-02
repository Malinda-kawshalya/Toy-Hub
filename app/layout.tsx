import type React from "react"
import type { Metadata } from "next"
import { Quicksand } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import WhatsAppFloat from "@/components/layout/WhatsAppFloat"
import { WebVitals } from "@/components/WebVitals"

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: 'swap', // Optimize font loading
  preload: true,
  fallback: ['system-ui', 'arial'],
})

export const metadata: Metadata = {
  title: "Kids Dreams - Where Fun Begins!",
  description: "Your one-stop shop for fun, learning, and imagination. Discover amazing toys for kids of all ages.",
  generator: 'v0.app',
  icons: {
    icon: '/Kidz Dreams Logo png.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={quicksand.variable} style={{ overflowX: 'hidden' }}>
      <body style={{ overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
        <WebVitals />
        <Navbar />
        {children}
        <div style={{ position: 'relative' }}>
          <WhatsAppFloat />
          <Footer />
        </div>
      </body>
    </html>
  )
}
