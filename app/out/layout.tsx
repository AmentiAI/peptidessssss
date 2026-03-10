export const metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: { index: false, follow: false },
  },
}

export default function OutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
