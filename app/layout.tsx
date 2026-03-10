import type { Metadata } from "next"
import { Bebas_Neue, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
})

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://peptidelab.com"),
  title: {
    template: "%s | PeptideLab",
    default: "PeptideLab — Premium Research Peptides",
  },
  description:
    "PeptideLab: the definitive source for research peptide information. Compare, learn, and shop high-purity peptides including BPC-157, TB-500, Ipamorelin, Epithalon, and more.",
  keywords: [
    "research peptides",
    "BPC-157",
    "TB-500",
    "Ipamorelin",
    "CJC-1295",
    "Epithalon",
    "peptide sciences",
    "buy peptides",
    "peptide research",
    "GHK-Cu",
    "Semax",
    "Selank",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PeptideLab",
    title: "PeptideLab — Premium Research Peptides",
    description:
      "The definitive source for research peptide information. High-purity BPC-157, TB-500, Ipamorelin, Epithalon, and 20+ more research compounds.",
    url: "https://peptidelab.com",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PeptideLab — Premium Research Peptides",
    description:
      "The definitive source for research peptide information. High-purity compounds, expert guides, and in-depth research reviews.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${outfit.variable}`}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
