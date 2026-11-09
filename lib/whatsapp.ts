export const whatsappNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "94716207888").replace(/\D/g, "")

export function whatsappLink(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function productPath(id: string) {
  return `/product/?id=${encodeURIComponent(id)}`
}

export function productOrderLink(product: { id: string; name: string; category: string; price?: number | null }, quantity = 1) {
  const count = Number.isFinite(quantity) ? Math.min(99, Math.max(1, Math.floor(quantity))) : 1
  const price = product.price == null ? "Please confirm the price." : `Listed price: LKR ${product.price.toFixed(2)}`
  const origin = typeof window === "undefined" ? "" : window.location.origin
  const total = product.price == null ? "" : `\nEstimated total: LKR ${(product.price * count).toFixed(2)}`
  return whatsappLink(`Hello! I'd like to order:\n${product.name}\nProduct ID: ${product.id}\n${price}\nQuantity: ${count}${total}\n${origin}${productPath(product.id)}\nPlease confirm availability and delivery details.`)
}
