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
  metadataBase: new URL("https://peptidelab.com"),
  title: {
    template: "%s | PeptideLab",
    default: "PeptideLab — Research Peptides from Pantheon Peptides",
  },
  description:
    "The definitive research peptide resource. Browse 60+ peptides from Pantheon Peptides — BPC-157, Tirzepatide, Epithalon, Semax, and more.",
  keywords: [
    "research peptides",
    "BPC-157",
    "Tirzepatide",
    "Epithalon",
    "Semax",
    "Pantheon Peptides",
    "peptide cycles",
    "TB-500",
    "Ipamorelin",
    "GHK-CU",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "PeptideLab",
    title: "PeptideLab — Research Peptides from Pantheon Peptides",
    description:
      "The definitive research peptide resource. Browse 60+ peptides from Pantheon Peptides.",
    url: "https://peptidelab.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
