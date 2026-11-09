"use client"

import { usePathname } from "next/navigation"
import type { ReactNode } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import WhatsAppFloat from "./WhatsAppFloat"

export default function AppShell({ children }: { children: ReactNode }) {
  const path = usePathname()
  if (path === "/admin" || path.startsWith("/admin/")) return children
  return <><Navbar />{children}<div style={{ position: "relative" }}><WhatsAppFloat /><Footer /></div></>
}
