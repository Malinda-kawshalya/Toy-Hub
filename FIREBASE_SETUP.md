# Firebase admin panel and WhatsApp ordering

The storefront and `/admin` use Firebase Authentication, Cloud Firestore, and Firebase Storage. The existing Firebase project is `kids-dreams-ce4d9`. Products update live without another site build.

## First-time setup

1. Open [the Firebase project](https://console.firebase.google.com/project/kids-dreams-ce4d9/overview).
2. In **Authentication > Sign-in method**, enable **Email/Password**. In **Users**, add the administrator account and copy its UID. There is no public registration page.
3. In **Firestore Database**, create the default database. Choose the appropriate region and use production mode.
4. In Firestore, create an `admins` collection. Create a document whose ID is the administrator's Authentication UID and add `enabled` as a **boolean** set to `true`. Do not use an email address as the document ID. Removing this document or setting `enabled` to false revokes write access. Browser clients cannot create or edit admin roles.
5. In **Storage**, create the default bucket and note its bucket name. Firebase currently requires the **Blaze** billing plan for live Storage; the local emulator needs no billing. See [Firebase Storage setup](https://firebase.google.com/docs/storage/web/start). If prompted when deploying rules, allow Storage rules to access Firestore so they can check the approved admin record. Deploy both rule sets before using the panel:

   ```powershell
   npm.cmd ci
   npx.cmd firebase login
   npx.cmd firebase deploy --only "firestore:rules,storage" --project kids-dreams-ce4d9
   ```

6. Start the app with `npm.cmd run dev`, visit `http://localhost:3000/admin`, and sign in. Click **Import original products** to populate the existing collection before deploying the updated storefront. The import contains 134 products, including the existing homepage arrivals. Unknown prices remain blank and display **Ask for price**. Existing document IDs are kept; repeated imports add missing original products and can restore previously deleted originals.
7. Set the real prices and stock status, then deploy:

   ```powershell
   npm.cmd run deploy
   ```

   This builds the static site and deploys Firestore rules, Storage rules, and Hosting. The current GitHub Actions workflows deploy Hosting only; publish changed rules separately with the rule deployment command above.

The admin URL after deployment is `https://kids-dreams-ce4d9.web.app/admin`. Firebase Hosting uses clean URLs so direct visits to exported category and admin routes work. Unknown routes return the site's 404 page.

## Managing products

Admins can create, edit, delete, search, and filter products. Each product has a name, category, description, optional LKR price, image URL or existing local public path, stock status, and homepage placement flags. Choose an image from your computer, preview it, and save the product to upload it to Firebase Storage. JPG, PNG, WebP, and GIF files up to 5 MB are accepted; empty files and images that cannot be opened are rejected. Upload progress is displayed, and failed product saves attempt to remove the newly uploaded image. You can also paste an HTTPS URL or an existing path such as `/product images/Baby Toys/1.png`. Canceling before save does not upload the file. Old uploaded files are retained when a product is replaced or deleted, since other products may share their URLs; unused files can be removed through the Storage console.

**New arrival** and **Best seller** control the corresponding homepage sections. The collection page shows all products, and category pages filter by category. Stock status is shown to customers; out-of-stock products have no order link. Deletions also disappear from homepage sections because those sections use the same Firestore collection.

**Order on WhatsApp** opens a prefilled message containing the product name, ID, price (or price inquiry), quantity, and category page URL. The customer sends the message in WhatsApp to place the order; this app does not record or confirm an order automatically. The existing shop number is `94716207888`.

Each product has a shareable `/product/?id=PRODUCT_ID` page. This works for newly created products on static Firebase Hosting without a rebuild. Product cards and the admin View action open this page. Customers can select 1–99 units, see an estimated total, and include the chosen quantity in their WhatsApp message. Related toys from the same category appear below. Invalid or deleted product IDs display an unavailable message.

The admin list also supports stock filters and name/price sorting. Products with no listed price sort last in either price direction.

## Configuration

The code defaults to the public web configuration of the repository's existing Firebase project. To use another project, copy `.env.example` to `.env.local`, fill all five Firebase values (including the Storage bucket) from that project's web-app settings, and rebuild. Never put a service-account private key in a `NEXT_PUBLIC_` variable. Firestore rules enforce authorization independently of the admin UI.

Set `NEXT_PUBLIC_WHATSAPP_NUMBER` to change the order destination. Use country code plus number, without spaces or a leading local zero. Environment changes require a new build. Add your deployed domain in Firebase Authentication's authorized domains if necessary.

References: [Firebase web setup](https://firebase.google.com/docs/web/setup), [Authentication setup](https://firebase.google.com/docs/auth/web/start).

## Verification

```powershell
npm.cmd run typecheck
npm.cmd test
npm.cmd run build
npm.cmd run test:rules
npm.cmd run test:e2e
```

The emulator tests need Java 21 or newer on PATH. Browser tests use installed Microsoft Edge, port 3100, the Auth emulator on port 9099, Firestore on port 8080, and Storage on port 9199. The emulator suites use isolated `demo-toy-hub` and `demo-toy-hub-rules` projects and do not write production data. The browser suite explicitly enables `NEXT_PUBLIC_USE_FIREBASE_EMULATORS=true` for its own dev server; leave this unset for normal development and deployment.

Rule tests cover public reads, approved admin writes, denied customer/disabled account writes, malformed product data, original catalog validation, and role escalation denial. Browser tests cover login, product creation/editing/deletion, live storefront updates, homepage placement, WhatsApp message contents, stock restrictions, non-admin rejection, logout, and mobile layout.

Firebase CLI authentication, first admin provisioning, live Firestore setup, and live deployment require access to the Firebase project. Passing emulator tests does not verify those live services.

Image upload rules enforce the approved admin role, uploader path, content type, and 5 MB size limit. Visitors can read product images; customers cannot upload or delete them. The Storage emulator is included in the rule and browser test commands. Keep `NEXT_PUBLIC_USE_FIREBASE_EMULATORS` unset in production; localhost Storage URLs are accepted by Firestore rules only for the demo project token audience.
