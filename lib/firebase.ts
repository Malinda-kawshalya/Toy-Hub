import { getApp, getApps, initializeApp } from "firebase/app"
import { connectAuthEmulator, getAuth } from "firebase/auth"
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore"
import { connectStorageEmulator, getStorage } from "firebase/storage"

// Firebase web configuration is public. Authorization is enforced by firestore.rules.
// Defaults refer to this repository's existing Firebase Hosting project.
export function getFirebase() {
  const existing = getApps().length > 0
  const app = existing ? getApp() : initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAFBaq_5V3uWzLf0l5C7799yXN_Vb9toYo",
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "kids-dreams-ce4d9.firebaseapp.com",
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "kids-dreams-ce4d9",
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:551653351907:web:3f4ba6daeb4ac6bb1400d6",
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "kids-dreams-ce4d9.firebasestorage.app",
  })
  const auth = getAuth(app)
  const db = getFirestore(app)
  const storage = getStorage(app)
  // Explicit opt-in used by local end-to-end tests. Never enabled by default.
  if (!existing && process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATORS === "true") {
    connectAuthEmulator(auth, "http://127.0.0.1:9099", { disableWarnings: true })
    connectFirestoreEmulator(db, "127.0.0.1", 8080)
    connectStorageEmulator(storage, "127.0.0.1", 9199)
  }
  return { auth, db, storage }
}
