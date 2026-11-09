import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from "firebase/storage"
import { getFirebase } from "./firebase"
import { imageTypes, validateImageFile } from "./image-validation"

export async function uploadProductImage(file: File, progress: (percent: number) => void) {
  validateImageFile(file)
  const { auth, storage } = getFirebase()
  if (!auth.currentUser) throw new Error("Sign in before uploading an image.")
  const imageRef = ref(storage, `products/${auth.currentUser.uid}/${crypto.randomUUID()}.${imageTypes[file.type]}`)
  const upload = uploadBytesResumable(imageRef, file, { contentType: file.type })
  await new Promise<void>((resolve, reject) => upload.on("state_changed", snapshot => {
    progress(Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100))
  }, reject, () => resolve()))
  try {
    return { url: await getDownloadURL(imageRef), path: imageRef.fullPath }
  } catch (error) {
    await deleteObject(imageRef).catch(() => {})
    throw error
  }
}

export async function discardUploadedImage(path: string) {
  await deleteObject(ref(getFirebase().storage, path))
}
