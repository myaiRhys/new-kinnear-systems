import type { Metadata, Viewport } from "next";
import { DM_Sans, DM_Mono, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kinnear Systems — Web & App Development",
  description:
    "We build software that works — not templates that limit you. Custom Next.js websites, Progressive Web Apps, and Firebase backends. Cape Town, South Africa.",
  keywords: [
    "web development Cape Town",
    "Next.js developer South Africa",
    "Firebase PWA development",
    "custom web app Cape Town",
    "progressive web app developer",
  ],
  authors: [{ name: "Kinnear Systems" }],
  openGraph: {
    title: "Kinnear Systems — Web & App Development",
    description: "Custom Next.js websites, PWAs, and Firebase backends. Cape Town, SA.",
    url: "https://kinnearsystems.co.za",
    siteName: "Kinnear Systems",
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kinnear Systems",
    description: "Custom Next.js websites, PWAs, and Firebase backends.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0D1B2A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmMono.variable} ${syne.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
