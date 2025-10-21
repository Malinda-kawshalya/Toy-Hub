# Firebase Hosting Setup Instructions

This document provides step-by-step instructions to set up Firebase Hosting for your Next.js project using GitHub Actions.

## Prerequisites

1. Firebase account with a project created
2. GitHub repository with your Next.js project
3. Firebase CLI installed globally (`npm install -g firebase-tools`)

## Steps to Deploy

### 1. Generate Firebase Service Account Key

1. Go to the [Firebase Console](https://console.firebase.google.com/)
2. Select your project (toy-hub-webapp)
3. Navigate to Project Settings > Service accounts
4. Click on "Generate new private key"
5. Save the JSON file securely

### 2. Add GitHub Repository Secrets

1. Go to your GitHub repository
2. Navigate to Settings > Secrets and variables > Actions
3. Add a new repository secret:
   - Name: `FIREBASE_SERVICE_ACCOUNT_TOY_HUB_WEBAPP`
   - Value: *Paste the entire content of the JSON file downloaded in step 1*

### 3. Initial Manual Deployment (Optional)

You can do an initial manual deployment to verify everything works:

```bash
# Build your Next.js app
npm run build

# Deploy to Firebase
npm run firebase:deploy
```

### 4. Push to GitHub and Automatic Deployment

Once the GitHub Actions workflow is set up:
1. Push changes to the `main` branch
2. GitHub Actions will automatically build and deploy your project to Firebase Hosting
3. You can monitor the deployment in the Actions tab of your GitHub repository

### 5. Testing Locally

To test Firebase hosting locally:

```bash
# Build your Next.js app
npm run build

# Start Firebase emulators
npm run firebase:emulate
```

## Troubleshooting

If you encounter issues with the deployment:

1. Check the GitHub Actions logs for error messages
2. Ensure your Firebase project ID in `.firebaserc` matches your actual Firebase project
3. Verify that the service account JSON is correctly added as a GitHub secret