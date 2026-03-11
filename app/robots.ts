export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/out/", "/api/", "/_next/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/out/", "/api/"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
    ],
    sitemap: "https://www.peptidesmaxxing.com/sitemap.xml",
    host: "https://www.peptidesmaxxing.com",
  }
}
