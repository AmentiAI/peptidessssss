import type { NextConfig } from "next"
import { PRODUCT_REDIRECTS } from "./lib/product-redirects"

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
  { key: "X-DNS-Prefetch-Control", value: "on" },
]

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "phiogen.is",
        pathname: "/images/products/**",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        source: "/out/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ]
  },
  async redirects() {
    const productRedirects = Object.entries(PRODUCT_REDIRECTS).map(
      ([from, to]) => ({
        source: `/products/${from}`,
        destination: `/products/${to}`,
        permanent: true,
      }),
    )
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "peptidesmaxxing.com" }],
        destination: "https://www.peptidesmaxxing.com/:path*",
        permanent: true,
      },
      ...productRedirects,
    ]
  },
}

export default nextConfig
