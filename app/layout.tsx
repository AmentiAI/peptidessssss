import type { Metadata } from "next"
import { Inter, Syne } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
  metadataBase: new URL("https://peptidesmaxxing.com"),
  title: {
    template: "%s | PeptidesMaxxing",
    default:
      "PeptidesMaxxing — Research Peptides, Cycles & Science from Pantheon Peptides",
  },
  description:
    "The definitive research peptide resource. Browse 62+ research-grade peptides from Pantheon Peptides — BPC-157, Tirzepatide, Retatrutide, Epithalon, Semax, GHK-Cu, and complete peptide cycles.",
  keywords: [
    "research peptides",
    "BPC-157",
    "TB-500",
    "Tirzepatide",
    "Retatrutide",
    "Epithalon",
    "Semax",
    "Selank",
    "GHK-Cu",
    "Ipamorelin",
    "CJC-1295",
    "Thymosin Alpha-1",
    "AOD9604",
    "PT-141",
    "Kisspeptin",
    "Cerebrolysin",
    "MOTS-C",
    "peptide cycles",
    "Wolverine Cycle",
    "Glow Plus Cycle",
    "Nova Mind Cycle",
    "Pantheon Peptides",
    "peptide stacks",
    "research peptide supplier",
    "looksmaxxing peptides",
    "anti-aging peptides",
    "weight loss peptides",
    "muscle growth peptides",
    "cognitive peptides",
  ],
  authors: [{ name: "PeptidesMaxxing Research Team", url: "https://peptidesmaxxing.com" }],
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
      "PeptidesMaxxing — Research Peptides, Cycles & Science from Pantheon Peptides",
    description:
      "The definitive research peptide resource. 62+ peptides from Pantheon Peptides including BPC-157, Tirzepatide, Epithalon, complete cycles, and expert research guides.",
    url: "https://peptidesmaxxing.com",
    locale: "en_US",
    images: [
      {
        url: "https://peptidesmaxxing.com/opengraph-image",
        width: 1200,
        height: 630,
        alt: "PeptidesMaxxing — Research Peptides & Cycles from Pantheon Peptides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@peptidesmaxxing",
    creator: "@peptidesmaxxing",
    title:
      "PeptidesMaxxing — Research Peptides & Cycles from Pantheon Peptides",
    description:
      "62+ research-grade peptides, pre-built cycles, and expert science guides. BPC-157, Tirzepatide, Epithalon, Semax & more.",
    images: ["https://peptidesmaxxing.com/opengraph-image"],
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
  },
  alternates: {
    canonical: "https://peptidesmaxxing.com",
  },
  verification: {
    google: "",
  },
  other: {
    "msvalidate.01": "",
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
        <link rel="icon" href="/images/site-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/images/site-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/site-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://pantheonpeptides.com" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
