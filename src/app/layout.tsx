import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
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
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="font-sans min-h-full flex flex-col bg-gray-50 text-gray-900">{children}</body>
    </html>
  );
}
