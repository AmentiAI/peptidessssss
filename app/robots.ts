export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/out/"],
      },
    ],
    sitemap: "https://peptidelab.com/sitemap.xml",
  }
}
