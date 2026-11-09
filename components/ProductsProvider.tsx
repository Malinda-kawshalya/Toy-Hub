"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { subscribeProducts, type Product } from "@/lib/products"

type Catalog = { products: Product[]; loading: boolean; error: string }
const ProductsContext = createContext<Catalog>({ products: [], loading: true, error: "" })

export function ProductsProvider({ children }: { children: ReactNode }) {
  const [catalog, setCatalog] = useState<Catalog>({ products: [], loading: true, error: "" })
  useEffect(() => subscribeProducts(
    products => setCatalog({ products, loading: false, error: "" }),
    () => setCatalog({ products: [], loading: false, error: "Products are temporarily unavailable. Please try again later or contact us on WhatsApp." }),
  ), [])
  return <ProductsContext.Provider value={catalog}>{children}</ProductsContext.Provider>
}

export const useProducts = () => useContext(ProductsContext)
