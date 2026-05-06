import type { Metadata } from "next";
import { Lora, Great_Vibes } from "next/font/google";
import Navbar from "../components/Navbar";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const greatVibes = Great_Vibes({
  weight: "400",
  variable: "--font-great-vibes",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kolkata Christian Fellowship | Mukundapur, Kolkata",
  description: "Join Kolkata Christian Fellowship in Mukundapur, Kolkata. Encountering the Saviour, Equipping the Saints, Encouraging Service. Services at 9:45 AM & 11:00 AM.",
  keywords: ["Church in Kolkata", "Mukundapur Church", "Christian Fellowship", "KCF Kolkata", "Sunday Service Kolkata", "English Service Kolkata"],
  openGraph: {
    title: "Kolkata Christian Fellowship | Mukundapur, Kolkata",
    description: "Encountering the Saviour, Equipping the Saints, Encouraging Service.",
    url: "https://kolkatachristianfellowship.net",
    siteName: "Kolkata Christian Fellowship",
    images: [
      {
        url: "/assets/kcficon.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
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
      className={`${lora.variable} ${greatVibes.variable} h-full antialiased scroll-smooth`}
    >
      <body className="font-sans min-h-full flex flex-col bg-stone-50 text-stone-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
