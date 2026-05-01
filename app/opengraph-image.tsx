import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "PeptidesMaxxing — Buy Peptides Online"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Logo image */}
        <img
          src="https://www.peptidesmaxxing.com/images/site-logo.png"
          width={120}
          height={120}
          style={{ borderRadius: 24, marginBottom: 28 }}
        />

        {/* Brand name */}
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            color: "#f8fafc",
            letterSpacing: "-2px",
            marginBottom: 16,
          }}
        >
          Peptides
          <span style={{ color: "#3b82f6" }}>Maxxing</span>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 26,
            color: "#94a3b8",
            fontWeight: 400,
            textAlign: "center",
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          Buy Peptides Online — High Purity, COA Verified, Fast Shipping
        </div>

        {/* Bottom badge */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            display: "flex",
            alignItems: "center",
            gap: 12,
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: 999,
            padding: "10px 24px",
          }}
        >
          <div style={{ width: 8, height: 8, borderRadius: 999, background: "#22c55e" }} />
          <span style={{ color: "#cbd5e1", fontSize: 16, fontWeight: 600 }}>
            62+ Peptides for Sale • High Purity • COA Verified
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
