"use client"

import { useEffect, useState, type FormEvent } from "react"
import Link from "next/link"
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, type User } from "firebase/auth"
import { doc, onSnapshot } from "firebase/firestore"
import { LayoutDashboard, Package, Plus, LogOut, Pencil, Trash2, Search, ArrowLeft, Eye } from "lucide-react"
import { getFirebase } from "@/lib/firebase"
import { categories, deleteProduct, formatPrice, importExistingProducts, productSchema, saveProduct, type Product, type ProductInput } from "@/lib/products"
import { useProducts } from "@/components/ProductsProvider"
import styles from "./admin.module.css"
import ProductImagePicker from "@/components/admin/ProductImagePicker"
import { uploadProductImage, discardUploadedImage } from "@/lib/product-images"
import { productPath } from "@/lib/whatsapp"

const blank: ProductInput = { name: "", description: "", category: "baby-toys", image: "", price: null, inStock: true, featured: false, newArrival: false, bestSeller: false }

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null)
  const [checking, setChecking] = useState(true)
  const [admin, setAdmin] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState("")
  const [notice, setNotice] = useState("")
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("")
  const [stock, setStock] = useState("")
  const [sort, setSort] = useState("name")
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imageReading, setImageReading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState<number | null>(null)
  const [editing, setEditing] = useState<string | null | undefined>(undefined)
  const [form, setForm] = useState<ProductInput>(blank)
  const { products, loading, error: catalogError } = useProducts()

  useEffect(() => {
    const { auth, db } = getFirebase()
    let stopRole: (() => void) | undefined
    const stopAuth = onAuthStateChanged(auth, current => {
      stopRole?.()
      setUser(current)
      setAdmin(false)
      setChecking(!!current)
      setEditing(undefined)
      if (current) stopRole = onSnapshot(doc(db, "admins", current.uid), snapshot => {
        setAdmin(snapshot.exists() && snapshot.data().enabled === true)
        setChecking(false)
      }, () => {
        setChecking(false)
        setError("Unable to verify admin access. Check your connection and Firebase setup.")
      })
    }, () => { setChecking(false); setError("Unable to connect to authentication. Please reload.") })
    return () => { stopAuth(); stopRole?.() }
  }, [])

  async function login(event: FormEvent) {
    event.preventDefault()
    setBusy(true); setError(""); setNotice("")
    try {
      await signInWithEmailAndPassword(getFirebase().auth, email.trim(), password)
      setPassword("")
    } catch {
      setError("Sign-in failed. Check your email and password, and ensure Email/Password sign-in is enabled in Firebase.")
    } finally { setBusy(false) }
  }

  async function logout() {
    setBusy(true); setError(""); setNotice("")
    try { await signOut(getFirebase().auth) } catch { setError("Unable to sign out. Please try again.") }
    finally { setBusy(false) }
  }

  async function save(event: FormEvent) {
    event.preventDefault()
    if (imageReading) return
    const result = productSchema.safeParse({ ...form, image: imageFile ? "/pending-upload" : form.image })
    if (!result.success) { setError(result.error.issues[0].message); return }
    setBusy(true); setError(""); setNotice("")
    let uploadedPath: string | undefined
    try {
      const data = { ...result.data }
      if (imageFile) {
        setUploadProgress(0)
        const uploaded = await uploadProductImage(imageFile, setUploadProgress)
        uploadedPath = uploaded.path
        data.image = uploaded.url
        setUploadProgress(null)
      }
      await saveProduct(data, editing || undefined)
      setEditing(undefined)
      setImageFile(null)
      setNotice("Product saved. The storefront will update automatically.")
    } catch {
      if (uploadedPath) await discardUploadedImage(uploadedPath).catch(() => {})
      setError("Product could not be saved. Check your connection and admin permissions. For file uploads, ensure Firebase Storage is enabled and its rules are deployed.")
    } finally { setBusy(false); setUploadProgress(null) }
  }

  async function remove(product: Product) {
    if (!window.confirm(`Delete “${product.name}”? This permanently removes the product from the storefront.`)) return
    setBusy(true); setError(""); setNotice("")
    try { await deleteProduct(product.id); setNotice("Product deleted.") }
    catch { setError("Product could not be deleted. Please try again.") }
    finally { setBusy(false) }
  }

  async function importProducts() {
    if (!window.confirm("Import the original catalog? Existing products will be kept. Previously deleted original products will be restored.")) return
    setBusy(true); setError(""); setNotice("")
    try { const added = await importExistingProducts(); setNotice(`Imported ${added} products. Existing products were kept.`) }
    catch { setError("Import failed. Check your connection, Firestore setup, and admin permissions. You can safely retry.") }
    finally { setBusy(false) }
  }

  function edit(product?: Product) {
    setImageFile(null)
    setImageReading(false)
    setForm(product ? { ...product } : { ...blank })
    setEditing(product?.id || null)
    setError(""); setNotice("")
  }

  const alerts = <>{error && <p role="alert" className={styles.error}>{error}</p>}{notice && <p role="status" className={styles.success}>{notice}</p>}</>
  if (checking) return <main className={styles.center}><p role="status">Checking admin access…</p></main>
  if (!user) return <main className={styles.center}>
    <section className={styles.login}>
      <div className={styles.logo}><Package size={28} /> Kids Dreams</div>
      <h1>Admin sign in</h1><p>Manage your products and keep your toy collection up to date.</p>
      {alerts}
      <form onSubmit={login} className={styles.form}>
        <label>Email<input type="email" autoComplete="username" required value={email} onChange={event => setEmail(event.target.value)} disabled={busy} /></label>
        <label>Password<input type="password" autoComplete="current-password" required value={password} onChange={event => setPassword(event.target.value)} disabled={busy} /></label>
        <button className={styles.primary} disabled={busy}>{busy ? "Signing in…" : "Sign in"}</button>
      </form>
      <Link className={styles.back} href="/"><ArrowLeft size={16} /> Back to store</Link>
    </section>
  </main>
  if (!admin) return <main className={styles.center}><section className={styles.login}>
    <h1>Admin access required</h1><p>This account is signed in but has no approved admin access. Ask the Firebase project owner to enable your account.</p>
    {alerts}<button className={styles.primary} onClick={logout} disabled={busy}>Sign out</button>
    <Link className={styles.back} href="/">Back to store</Link>
  </section></main>

  const visible = products.filter(product => (!category || product.category === category)
    && (!stock || (stock === "in" ? product.inStock : !product.inStock))
    && `${product.name} ${product.id}`.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => sort === "price-asc" || sort === "price-desc"
      ? a.price === null ? (b.price === null ? a.name.localeCompare(b.name) : 1) : b.price === null ? -1 : (sort === "price-asc" ? a.price - b.price : b.price - a.price) || a.name.localeCompare(b.name)
      : sort === "name-desc" ? b.name.localeCompare(a.name) : a.name.localeCompare(b.name))
  return <div className={styles.dashboard}>
    <aside className={styles.sidebar}>
      <Link href="/" className={styles.logo}><Package size={28} /> Kids Dreams</Link>
      <span className={styles.eyebrow}>STORE MANAGEMENT</span>
      <div className={styles.activeNav}><LayoutDashboard size={19} /> Products</div>
      <Link href="/toys/" className={styles.back}><ArrowLeft size={17} /> View storefront</Link>
      <div className={styles.account}><span>{user.email}</span><button onClick={logout} disabled={busy}><LogOut size={17} /> Sign out</button></div>
    </aside>
    <main className={styles.main}>
      <header className={styles.header}><div><span className={styles.eyebrow}>YOUR CATALOG</span><h1>Products</h1><p>Add a little more joy to your store.</p></div>
        <button className={styles.primary} onClick={() => edit()} disabled={busy || editing !== undefined}><Plus size={18} /> Add product</button>
      </header>
      <div className={styles.stats}><div><Package /><strong>{products.length}</strong><span>Total products</span></div><div><strong>{products.filter(product => product.inStock).length}</strong><span>In stock</span></div><div><strong>{products.filter(product => !product.inStock).length}</strong><span>Out of stock</span></div></div>
      {alerts}{catalogError && <p role="alert" className={styles.error}>{catalogError}</p>}
      {editing !== undefined ? <section className={styles.panel}>
        <h2>{editing ? "Edit product" : "Add product"}</h2>
        <form onSubmit={save} className={styles.form}>
          <fieldset disabled={busy} className={styles.fields}>
            <label>Product name<input required maxLength={120} value={form.name} onChange={event => setForm({ ...form, name: event.target.value })} /></label>
            <div className={styles.row}><label>Category<select aria-label="Category" value={form.category} onChange={event => setForm({ ...form, category: event.target.value as ProductInput["category"] })}>{Object.entries(categories).map(([key, title]) => <option key={key} value={key}>{title}</option>)}</select></label>
              <label>Price (LKR)<input type="number" min="0" max="10000000" step="0.01" placeholder="Leave blank for Ask for price" value={form.price ?? ""} onChange={event => setForm({ ...form, price: event.target.value === "" ? null : Number(event.target.value) })} /></label></div>
            <label>Description<textarea rows={4} maxLength={2000} value={form.description} onChange={event => setForm({ ...form, description: event.target.value })} /></label>
            <ProductImagePicker image={form.image} file={imageFile} disabled={busy} onImageChange={image => setForm({ ...form, image })} onFileChange={setImageFile} onError={setError} onReadingChange={setImageReading} />
            <div className={styles.checks}>{([["inStock", "In stock"], ["featured", "Featured favorite"], ["newArrival", "New arrival"], ["bestSeller", "Best seller"]] as const).map(([key, title]) => <label key={key}><input type="checkbox" checked={form[key]} onChange={event => setForm({ ...form, [key]: event.target.checked })} />{title}</label>)}</div>
          </fieldset>
          {uploadProgress !== null && <label>Uploading image: {uploadProgress}%<progress value={uploadProgress} max={100} aria-label="Image upload progress" /></label>}
          <div className={styles.actions}><button className={styles.primary} disabled={busy || imageReading}>{imageReading ? "Checking image…" : busy ? "Saving…" : "Save product"}</button><button type="button" className={styles.secondary} disabled={busy} onClick={() => { setEditing(undefined); setImageFile(null); setError("") }}>Cancel</button></div>
        </form>
      </section> : <section className={styles.panel}>
        <div className={styles.toolbar}><label className={styles.search}><Search size={18} /><input aria-label="Search products" placeholder="Search products…" value={search} onChange={event => setSearch(event.target.value)} /></label>
          <select aria-label="Filter by category" value={category} onChange={event => setCategory(event.target.value)}><option value="">All categories</option>{Object.entries(categories).map(([key, title]) => <option key={key} value={key}>{title}</option>)}</select>
          <select aria-label="Filter by stock" value={stock} onChange={event => setStock(event.target.value)}><option value="">All stock</option><option value="in">In stock</option><option value="out">Out of stock</option></select>
          <select aria-label="Sort products" value={sort} onChange={event => setSort(event.target.value)}><option value="name">Name: A–Z</option><option value="name-desc">Name: Z–A</option><option value="price-asc">Price: low to high</option><option value="price-desc">Price: high to low</option></select>
        </div>
        {!loading && <p className={styles.resultCount}>{visible.length} of {products.length} products</p>}
        {loading ? <p role="status">Loading catalog…</p> : <div className={styles.tableWrap}><table className={styles.table}>
          <thead><tr><th>Product</th><th>Category</th><th>Price</th><th>Status</th><th>Actions</th></tr></thead>
          <tbody>{visible.map(product => <tr key={product.id}>
            <td><div className={styles.product}><img src={product.image} alt="" /><span><strong>{product.name}</strong><small>{product.id}</small></span></div></td>
            <td>{categories[product.category]}</td><td>{formatPrice(product.price)}</td>
            <td><span className={product.inStock ? styles.inStock : styles.outOfStock}>{product.inStock ? "In stock" : "Out of stock"}</span></td>
            <td><div className={styles.actions}><Link aria-label={`View ${product.name}`} title="View product" className={styles.iconButton} href={productPath(product.id)} target="_blank" rel="noopener noreferrer"><Eye size={17} /></Link><button aria-label={`Edit ${product.name}`} className={styles.iconButton} disabled={busy} onClick={() => edit(product)}><Pencil size={17} /></button><button aria-label={`Delete ${product.name}`} className={styles.delete} disabled={busy} onClick={() => remove(product)}><Trash2 size={17} /></button></div></td>
          </tr>)}</tbody>
        </table>{!visible.length && <p className={styles.empty}>{products.length ? "No products match your search." : "Your catalog is empty. Add a product or import the original collection below."}</p>}</div>}
        <div className={styles.import}><div><strong>Original store collection</strong><p>Import the existing toy catalog, then set prices and update the details.</p></div><button className={styles.secondary} onClick={importProducts} disabled={busy || loading || !!catalogError}>{busy ? "Working…" : "Import original products"}</button></div>
      </section>}
    </main>
  </div>
}
