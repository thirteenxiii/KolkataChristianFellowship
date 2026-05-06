import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Required in Next.js 16: restrict allowed qualities
    qualities: [25, 50, 75, 100],
    // Optimize local assets from /public/assets
    localPatterns: [
      {
        pathname: "/assets/**",
        search: "",
      },
    ],
    // Allow YouTube thumbnails and Unsplash for hero fallbacks
    remotePatterns: [
      new URL("https://images.unsplash.com/**"),
      new URL("https://yt3.ggpht.com/**"),
    ],
    // Modern formats for better compression
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
