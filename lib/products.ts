import { z } from "zod"
import { collection, doc, onSnapshot, orderBy, query, runTransaction, serverTimestamp, setDoc, deleteDoc } from "firebase/firestore"
import { getFirebase } from "./firebase"

export const categories = {
  "baby-toys": "Baby Toys", "educational-toys": "Educational Toys",
  "model-cars": "Model Cars", "outdoor-toys": "Outdoor Toys", puzzles: "Puzzles",
  "rc-items": "RC Items", teddys: "Teddys", others: "Others",
} as const

export const productSchema = z.object({
  name: z.string().trim().min(1, "Enter a product name.").max(120),
  description: z.string().trim().max(2000),
  category: z.enum(Object.keys(categories) as [keyof typeof categories, ...Array<keyof typeof categories>]),
  image: z.string().trim().min(1, "Add an image URL or local image path.").max(2048)
    .refine(value => /^\/(?!\/)/.test(value) || /^https:\/\/[^\s]+$/i.test(value)
      || (process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === "true" && /^http:\/\/127\.0\.0\.1:9199\/[^\s]+$/.test(value)), "Use an HTTPS image URL or a path starting with /.") ,
  price: z.number().finite().min(0).max(10000000).nullable(),
  inStock: z.boolean(), featured: z.boolean(), newArrival: z.boolean(), bestSeller: z.boolean(),
})
export type ProductInput = z.infer<typeof productSchema>
export type Product = ProductInput & { id: string }

export function subscribeProducts(next: (products: Product[]) => void, error: (error: Error) => void) {
  return onSnapshot(query(collection(getFirebase().db, "products"), orderBy("name")), snapshot => {
    try {
      const products = snapshot.docs.map(document => ({ id: document.id, ...productSchema.parse(document.data()) }))
      next(products)
    } catch {
      error(new Error("The product catalog contains invalid data."))
    }
  }, error)
}

export async function saveProduct(input: ProductInput, id?: string) {
  const data = productSchema.parse(input)
  const reference = id ? doc(getFirebase().db, "products", id) : doc(collection(getFirebase().db, "products"))
  await setDoc(reference, { ...data, updatedAt: serverTimestamp() })
}

export async function deleteProduct(id: string) {
  await deleteDoc(doc(getFirebase().db, "products", id))
}

export async function importExistingProducts() {
  const seeds = (await import("./seed-products.json")).default
  const db = getFirebase().db
  // Read before writing; retries and concurrent imports never overwrite existing edits.
  return runTransaction(db, async transaction => {
    const references = seeds.map(seed => doc(db, "products", seed.id))
    const snapshots = await Promise.all(references.map(reference => transaction.get(reference)))
    let added = 0
    snapshots.forEach((snapshot, index) => {
      if (!snapshot.exists()) {
        transaction.set(references[index], { ...productSchema.parse(seeds[index]), updatedAt: serverTimestamp() })
        added++
      }
    })
    return added
  })
}

export function formatPrice(price: number | null) {
  return price === null ? "Ask for price" : new Intl.NumberFormat("en-LK", { style: "currency", currency: "LKR" }).format(price)
}
