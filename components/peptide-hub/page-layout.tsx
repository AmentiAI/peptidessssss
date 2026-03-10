import { Navigation } from "./navigation"
import { Footer } from "./footer"

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen" style={{ background: "var(--background)" }}>
      {/* Grid dot background */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(0,212,255,0.04) 1px, transparent 0)",
          backgroundSize: "40px 40px",
          zIndex: 0,
        }}
      />
      {/* Ambient glow blobs */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,212,255,0.03) 0%, transparent 70%)", zIndex: 0 }} />
      <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 70%)", zIndex: 0 }} />

      <Navigation />
      <main className="relative z-10 pt-16">{children}</main>
      <Footer />
    </div>
  )
}
