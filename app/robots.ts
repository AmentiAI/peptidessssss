export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/out/", "/api/"],
      },
    ],
    sitemap: "https://www.peptidesmaxxing.com/sitemap.xml",
  }
}
