import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pantheonpeptides.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
}

export default nextConfig
