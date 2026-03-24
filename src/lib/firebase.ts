// src/lib/firebase.ts
// ─────────────────────────────────────────────────────────────
// Replace the placeholder values below with your actual Firebase
// project config. Find it in Firebase Console → Project Settings
// → Your apps → Web app → SDK setup and configuration.
//
// NEVER commit real credentials to Git.
// Use .env.local for all values (see .env.example).
// ─────────────────────────────────────────────────────────────

import { initializeApp, getApps } from "firebase/app";
import { getFirestore }           from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey:            process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain:        process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId:         process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket:     process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId:             process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Prevent duplicate app initialisation in Next.js dev (hot reload)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const db = getFirestore(app);

// Analytics is browser-only — guard against SSR
export const getAnalyticsInstance = async () => {
  if (await isSupported()) return getAnalytics(app);
  return null;
};

export default app;
