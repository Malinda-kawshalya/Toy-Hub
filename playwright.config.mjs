import { defineConfig } from "@playwright/test"
const existingServer = process.env.TOY_HUB_TEST_EXISTING_SERVER === "true"

export default defineConfig({
  testDir: "./tests/browser",
  workers: 1,
  timeout: 60000,
  use: { baseURL: existingServer ? "http://localhost:3000" : "http://127.0.0.1:3100", channel: "msedge", trace: "retain-on-failure" },
  webServer: existingServer ? undefined : {
    command: "node node_modules/next/dist/bin/next dev --port 3100",
    url: "http://127.0.0.1:3100/admin",
    timeout: 120000,
    env: {
      NEXT_PUBLIC_USE_FIREBASE_EMULATORS: "true",
      NEXT_PUBLIC_FIREBASE_PROJECT_ID: "demo-toy-hub",
      NEXT_PUBLIC_FIREBASE_API_KEY: "demo-api-key",
      NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: "demo-toy-hub.firebaseapp.com",
      NEXT_PUBLIC_FIREBASE_APP_ID: "demo-app-id",
      NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: "demo-toy-hub.appspot.com",
    },
  },
})
