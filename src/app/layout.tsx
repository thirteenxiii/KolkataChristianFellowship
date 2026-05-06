import type { Metadata } from "next";
import { Crimson_Text, Great_Vibes } from "next/font/google";
import Navbar from "../components/Navbar";
import MobileBottomNav from "../components/layout/MobileBottomNav";
import "./globals.css";

const crimsonText = Crimson_Text({
  weight: ["400", "600", "700"],
  variable: "--font-crimson-text",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kolkata Christian Fellowship | Mukundapur, Kolkata",
    template: "%s | Kolkata Christian Fellowship",
  },
  description:
    "Join Kolkata Christian Fellowship in Mukundapur, Kolkata. Encountering the Saviour, Equipping the Saints, Encouraging Service. Sunday Services at 9:45 AM & 11:00 AM.",
  keywords: [
    "Church in Kolkata",
    "Mukundapur Church",
    "Christian Fellowship Kolkata",
    "KCF Kolkata",
    "Sunday Service Kolkata",
    "English Service Kolkata",
    "Bengali Church Kolkata",
    "Hindi Service Kolkata",
    "Church in Mukundapur",
    "Kolkata church near me",
    "Christian church East Kolkata",
  ],
  authors: [{ name: "Kolkata Christian Fellowship" }],
  creator: "Kolkata Christian Fellowship",
  publisher: "Kolkata Christian Fellowship",
  metadataBase: new URL("https://kolkatachristianfellowship.net"),
  openGraph: {
    title: "Kolkata Christian Fellowship | Mukundapur, Kolkata",
    description:
      "Encountering the Saviour, Equipping the Saints, Encouraging Service. Join us for worship at 9:45 AM & 11:00 AM.",
    url: "https://kolkatachristianfellowship.net",
    siteName: "Kolkata Christian Fellowship",
    images: [
      {
        url: "/assets/kcficon.png",
        width: 800,
        height: 600,
        alt: "Kolkata Christian Fellowship Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kolkata Christian Fellowship | Mukundapur, Kolkata",
    description:
      "Encountering the Saviour, Equipping the Saints, Encouraging Service.",
    images: ["/assets/kcficon.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Placeholder — replace with actual code
  },
  alternates: {
    languages: {
      "en-IN": "/",
      bn: "/bn",
      hi: "/hi",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${crimsonText.variable} ${greatVibes.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Preconnect to Google Fonts for Crimson Text */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="font-sans min-h-full flex flex-col bg-warm-white text-deep-charcoal selection:bg-liturgical-gold selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        {/* Sticky Bottom Navigation — visible only on mobile */}
        <MobileBottomNav />
      </body>
    </html>
  );
}
