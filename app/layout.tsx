import type { Metadata } from "next"
import { Inter, Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.peptidesmaxxing.com"),
  title: {
    template: "%s | PeptidesMaxxing",
    default:
      "PeptidesMaxxing — BPC-157, Tirzepatide, Epithalon & 60+ Peptides",
  },
  description:
    "BPC-157, Tirzepatide, Epithalon, Semax, GHK-Cu, Ipamorelin, CJC-1295, TB-500 — browse 62+ research-grade peptides. Muscle growth, fat loss, anti-aging, cognitive, and longevity stacks.",
  keywords: [
    "peptidesmaxxing",
    "peptides maxxing",
    "research peptides 2026",
    "BPC-157 research",
    "Tirzepatide peptide",
    "Epithalon anti-aging",
    "peptide stacks",
    "looksmaxxing peptides",
    "Wolverine Cycle peptides",
    "Phiogen peptides review",
  ],
  authors: [{ name: "PeptidesMaxxing Research Team", url: "https://www.peptidesmaxxing.com" }],
  creator: "PeptidesMaxxing",
  publisher: "PeptidesMaxxing",
  category: "Research & Science",
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
  openGraph: {
    type: "website",
    siteName: "PeptidesMaxxing",
    title:
      "PeptidesMaxxing — BPC-157, Tirzepatide, Epithalon & 60+ Peptides",
    description:
      "The definitive peptide resource. 62+ research-grade peptides including BPC-157, Tirzepatide, Epithalon, complete cycles, and expert guides.",
    url: "https://www.peptidesmaxxing.com",
    locale: "en_US",
    images: [
      {
        url: "https://www.peptidesmaxxing.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PeptidesMaxxing — Research Peptides & Cycles",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@peptidesmaxxing",
    creator: "@peptidesmaxxing",
    title:
      "PeptidesMaxxing — Research Peptides & Cycles",
    description:
      "62+ peptides, pre-built cycles, and expert science guides. BPC-157, Tirzepatide, Epithalon, Semax & more.",
    images: ["https://www.peptidesmaxxing.com/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/apple-icon.png" sizes="180x180" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://phiogen.is" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-0YQPTV1LG9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0YQPTV1LG9');
          `}
        </Script>
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-slate-900 focus:text-white focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
