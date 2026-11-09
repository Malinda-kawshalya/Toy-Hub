import { notFound } from "next/navigation"
import { categories } from "@/lib/products"
import CategoryContent from "./CategoryContent"

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  if (!(category in categories)) notFound()
  return <CategoryContent category={category} categoryTitle={categories[category as keyof typeof categories]} />
}

export function generateStaticParams() {
  return Object.keys(categories).map(category => ({ category }))
}
