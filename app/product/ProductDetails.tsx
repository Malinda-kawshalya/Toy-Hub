"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, MessageCircle, PackageCheck, PackageX } from "lucide-react"
import { useProducts } from "@/components/ProductsProvider"
import ToyCard from "@/components/ToyCard"
import { categories, formatPrice } from "@/lib/products"
import { productOrderLink } from "@/lib/whatsapp"
import styles from "./product.module.css"

export default function ProductDetails() {
  const id = useSearchParams().get("id")
  const { products, loading, error } = useProducts()
  const [quantity, setQuantity] = useState("1")
  useEffect(() => setQuantity("1"), [id])
  const product = products.find(item => item.id === id)
  if (loading) return <main className={styles.main}><p role="status">Loading product…</p></main>
  if (error) return <main className={styles.main}><p role="alert">{error}</p><Link href="/toys/">Back to toys</Link></main>
  if (!product) return <main className={styles.main}><h1>Product unavailable</h1><p>This product may have been removed. Explore our collection for more toys.</p><Link className={styles.back} href="/toys/"><ArrowLeft size={18} /> Browse all toys</Link></main>
  const count = Number(quantity)
  const validQuantity = Number.isInteger(count) && count >= 1 && count <= 99
  const related = products.filter(item => item.category === product.category && item.id !== product.id).slice(0, 4)

  return <main className={styles.main}>
    <Link className={styles.back} href={`/toys/${product.category}/`}><ArrowLeft size={18} /> {categories[product.category]}</Link>
    <section className={styles.detail}>
      <div className={styles.imagePanel}><img src={product.image} alt={product.name} className={styles.image} /></div>
      <div className={styles.content}>
        <span className={styles.category}>{categories[product.category]}</span>
        <h1>{product.name}</h1>
        <p className={styles.reference}>Product ID: {product.id}</p>
        <p className={styles.price}>{formatPrice(product.price)}</p>
        <span className={product.inStock ? styles.inStock : styles.outOfStock}>{product.inStock ? <PackageCheck size={18} /> : <PackageX size={18} />}{product.inStock ? "In stock" : "Out of stock"}</span>
        <p className={styles.description}>{product.description || "Interested in this toy? Contact our team on WhatsApp for more details."}</p>
        {product.inStock && <div className={styles.orderPanel}>
          <label className={styles.quantity}>Quantity<input type="number" min="1" max="99" step="1" value={quantity} onChange={event => setQuantity(event.target.value)} aria-describedby={!validQuantity ? "quantity-error" : undefined} aria-invalid={!validQuantity} /></label>
          {!validQuantity && <p id="quantity-error" role="alert" className={styles.error}>Choose a whole number from 1 to 99.</p>}
          {validQuantity && product.price !== null && <p className={styles.total}>Estimated total <strong>{formatPrice(product.price * count)}</strong></p>}
          {validQuantity ? <a className={styles.order} href={productOrderLink(product, count)} target="_blank" rel="noopener noreferrer"><MessageCircle size={20} /> Order on WhatsApp</a> : <button className={styles.order} disabled>Order on WhatsApp</button>}
          <small>Confirm availability, delivery charges, and payment with our team on WhatsApp.</small>
        </div>}
      </div>
    </section>
    {related.length > 0 && <section className={styles.related}><h2>You might also like</h2><div className={styles.grid}>{related.map(item => <ToyCard key={item.id} {...item} />)}</div></section>}
  </main>
}
