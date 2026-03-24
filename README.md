# Kinnear Systems — Website

Next.js 15 · TypeScript · Tailwind CSS · Firebase Firestore

---

## Stack

| Layer       | Tech                              |
|-------------|-----------------------------------|
| Framework   | Next.js 15 (App Router)           |
| Language    | TypeScript (strict)               |
| Styling     | Tailwind CSS                      |
| Database    | Firebase Firestore                |
| Fonts       | DM Sans, DM Mono, Syne (Google)   |
| Deployment  | Vercel                            |
| CI/CD       | GitHub Actions                    |

---

## Local development

### 1. Clone and install

```bash
git clone https://github.com/your-org/ks-website.git
cd ks-website
npm install
```

### 2. Set up environment variables

```bash
cp .env.example .env.local
```

Open `.env.local` and fill in your Firebase project values.
Find them in: **Firebase Console → Project Settings → Your apps → Web app → SDK setup**.

```env
NEXT_PUBLIC_FIREBASE_API_KEY=...
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=...
NEXT_PUBLIC_FIREBASE_PROJECT_ID=...
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=...
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=...
NEXT_PUBLIC_FIREBASE_APP_ID=...
```

### 3. Run dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Firebase setup

### Firestore

1. Go to **Firebase Console → Firestore Database → Create database**
2. Start in **production mode**
3. Deploy the security rules:

```bash
npm install -g firebase-tools
firebase login
firebase use --add   # select your project
firebase deploy --only firestore:rules
```

The rules allow anyone to **create** an enquiry document but nobody can read, update, or delete. Read submissions directly in the Firebase Console under `enquiries/`.

### Firestore data structure

Each contact form submission creates a document in `/enquiries/`:

```
enquiries/{auto-id}
  name:      string
  email:     string
  service:   string
  budget:    string (optional)
  message:   string
  source:    "website"
  createdAt: timestamp
```

---

## Deployment — Vercel

### First deploy

```bash
npm install -g vercel
vercel login
vercel --prod
```

Follow the prompts. When asked for environment variables, add all `NEXT_PUBLIC_FIREBASE_*` values.

### Custom domain

1. In Vercel dashboard → your project → **Settings → Domains**
2. Add `kinnearsystems.co.za` and `kinnearsystems.com`
3. Add the DNS records Vercel shows you in your registrar (domains.co.za / Namecheap)
4. SSL provisions automatically

### GitHub Actions CI/CD

Add these secrets to your GitHub repo (**Settings → Secrets → Actions**):

| Secret                                   | Where to find it                          |
|------------------------------------------|-------------------------------------------|
| `NEXT_PUBLIC_FIREBASE_API_KEY`           | Firebase Console → Project Settings       |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`       | Firebase Console → Project Settings       |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID`        | Firebase Console → Project Settings       |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`    | Firebase Console → Project Settings       |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase Console → Project Settings     |
| `NEXT_PUBLIC_FIREBASE_APP_ID`            | Firebase Console → Project Settings       |
| `VERCEL_TOKEN`                           | vercel.com → Account Settings → Tokens    |
| `VERCEL_ORG_ID`                          | `vercel env pull` or Vercel project URL   |
| `VERCEL_PROJECT_ID`                      | `vercel env pull` or Vercel project URL   |

Every push to `main` triggers: **type check → lint → build → deploy**.
Pull requests run type check, lint, and build only (no deploy).

---

## Project structure

```
src/
  app/
    layout.tsx        # Root layout, fonts, metadata, SEO
    page.tsx          # Home page — assembles all sections
    globals.css       # Design tokens, Tailwind base, utilities
  components/
    Nav.tsx           # Sticky nav, scroll-aware, mobile menu
    Hero.tsx          # Full-screen hero, parallax grid, CTAs
    Services.tsx      # Service cards with pricing
    Work.tsx          # Case studies — Thibault + Suit Hire
    Contact.tsx       # Quote form → Firebase Firestore
    Footer.tsx        # Simple footer
  lib/
    firebase.ts       # Firebase app init (singleton, SSR-safe)
firestore.rules       # Firestore security rules
vercel.json           # Vercel deployment config
.github/
  workflows/
    deploy.yml        # CI/CD pipeline
```

---

## Updating content

### Add a new case study

Edit `src/components/Work.tsx` — add an object to the `CASES` array:

```ts
{
  name: "Project Name",
  type: "Type of project",
  status: "Live",           // or "In development"
  statusColor: "text-green-400 bg-green-400/10 border-green-400/20",
  client: "Client description",
  problem: "What problem they had...",
  solution: "What you built...",
  stack: ["Next.js", "Firebase"],
  highlight: "Key outcome or quote.",
}
```

### Update pricing

Edit `src/components/Services.tsx` — update `price` and `usd` on each service object.

### Add screenshots to case studies

Replace the placeholder text in `Work.tsx` with `<Image>` components pointing to files in `/public/`.

---

## Extending the site

| Feature              | Where to add              | Notes                                    |
|----------------------|---------------------------|------------------------------------------|
| Blog / insights      | `src/app/blog/`           | MDX works natively in Next.js App Router |
| About page           | `src/app/about/page.tsx`  | Add route, update Nav links              |
| Project detail pages | `src/app/work/[slug]/`    | Dynamic routes, data from Firestore      |
| Email notifications  | API route + Resend/SendGrid | Trigger on new Firestore enquiry doc    |

---

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server locally
npm run lint     # ESLint
npx tsc --noEmit # Type check only
```

---

Built by Kinnear Systems · Cape Town, SA · kinnearsystems.co.za
