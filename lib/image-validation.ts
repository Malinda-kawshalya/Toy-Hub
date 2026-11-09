export const maxImageBytes = 5 * 1024 * 1024
export const imageTypes: Record<string, string> = {
  "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "image/gif": "gif",
}

export function validateImageFile(file: { size: number; type: string }) {
  if (!imageTypes[file.type]) throw new Error("Choose a JPG, PNG, WebP, or GIF image.")
  if (!file.size) throw new Error("This file is empty. Choose another image.")
  if (file.size > maxImageBytes) throw new Error("Choose an image smaller than 5 MB.")
}
