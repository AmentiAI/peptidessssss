import { Navigation } from "./navigation"
import { Footer } from "./footer"

export function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main id="main-content" className="pt-16">{children}</main>
      <Footer />
    </div>
  )
}
