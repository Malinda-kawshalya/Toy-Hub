"use client"

import { useEffect, useRef, useState } from "react"
import { Upload, X } from "lucide-react"
import { validateImageFile } from "@/lib/image-validation"
import styles from "./ProductImagePicker.module.css"

export default function ProductImagePicker({ image, file, disabled, onImageChange, onFileChange, onError, onReadingChange }: {
  image: string; file: File | null; disabled: boolean
  onImageChange: (value: string) => void; onFileChange: (file: File | null) => void
  onError: (message: string) => void; onReadingChange: (reading: boolean) => void
}) {
  const [preview, setPreview] = useState("")
  const selection = useRef(0)
  useEffect(() => {
    if (!file) { setPreview(""); return }
    const url = URL.createObjectURL(file)
    setPreview(url)
    return () => URL.revokeObjectURL(url)
  }, [file])
  useEffect(() => () => { selection.current++ }, [])

  async function select(file: File | undefined) {
    if (!file) return
    const current = ++selection.current
    onReadingChange(true)
    try {
      validateImageFile(file)
      const bitmap = await createImageBitmap(file)
      bitmap.close()
      if (current === selection.current) { onFileChange(file); onError("") }
    } catch (error) {
      if (current === selection.current) onError(error instanceof Error && error.message.startsWith("Choose") ? error.message : "This image could not be opened. Choose a valid JPG, PNG, WebP, or GIF.")
    } finally { if (current === selection.current) onReadingChange(false) }
  }

  return <div className={styles.picker}>
    <label className={styles.upload}><Upload size={22} /><span>Choose image from computer</span>
      <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" disabled={disabled} onChange={event => {
        void select(event.target.files?.[0]); event.target.value = ""
      }} />
      <small>JPG, PNG, WebP, or GIF · up to 5 MB</small>
    </label>
    {file && <div className={styles.selected}><span>{file.name} · {(file.size / 1024).toFixed(0)} KB</span>
      <button type="button" disabled={disabled} aria-label="Remove selected image" onClick={() => onFileChange(null)}><X size={16} /> Remove</button>
    </div>}
    <label>Image URL or local path<input required={!file} disabled={disabled || !!file} maxLength={2048} placeholder="https://… or /product images/…" value={image} onChange={event => onImageChange(event.target.value)} />
      <small>{file ? "Your selected file will upload when you save the product." : "Or paste an HTTPS image URL or an existing image path."}</small>
    </label>
    {(preview || image) && <img className={styles.preview} src={preview || image} alt="Product preview" />}
  </div>
}
