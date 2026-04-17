import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ChevronRight, Award } from "lucide-react"
import { PageLayout } from "@/components/peptide-hub/page-layout"
import { AUTHORS, authorPersonSchema } from "@/lib/authors"
import { getAllBlogPosts, getAllGuides } from "@/lib/peptide-data"

export const dynamic = "force-static"

export function generateStaticParams() {
  return Object.keys(AUTHORS).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const author = AUTHORS[slug]
  if (!author) return {}
  return {
    title: { absolute: `${author.name} — ${author.jobTitle} | PeptidesMaxxing` },
    description: author.shortBio,
    alternates: { canonical: `https://www.peptidesmaxxing.com/authors/${slug}` },
    openGraph: {
      title: `${author.name} — ${author.jobTitle}`,
      description: author.shortBio,
      url: `https://www.peptidesmaxxing.com/authors/${slug}`,
      type: "profile",
    },
  }
}

export default async function AuthorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const author = AUTHORS[slug]
  if (!author) notFound()

  const [posts, guides] = await Promise.all([getAllBlogPosts(), getAllGuides()])

  const personSchema = {
    "@context": "https://schema.org",
    ...authorPersonSchema(author),
  }

  return (
    <PageLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-8">
        <nav className="flex items-center gap-2 text-xs text-slate-400" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link href="/about" className="hover:text-slate-700 transition-colors">About</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-slate-700">{author.name}</span>
        </nav>
      </div>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-20 h-20 rounded-2xl bg-slate-900 flex items-center justify-center flex-shrink-0">
            <Award className="w-10 h-10 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-slate-900">{author.name}</h1>
            <p className="text-slate-500 mt-1">{author.jobTitle}</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 mb-8">
          <h2 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-3">Credentials</h2>
          <ul className="space-y-1.5">
            {author.credentials.map((c) => (
              <li key={c} className="text-sm text-slate-600">• {c}</li>
            ))}
          </ul>
        </div>

        <div className="prose-peptide text-slate-600 leading-relaxed space-y-4 mb-10">
          <p>{author.bio}</p>
          <p className="text-sm text-slate-500">
            Read the full <Link href="/editorial-standards" className="text-blue-600 hover:text-blue-800 underline underline-offset-2">editorial standards</Link> that govern every article published on PeptidesMaxxing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Blog articles</h3>
            <div className="space-y-2">
              {posts.slice(0, 8).map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  {p.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-4">Research guides</h3>
            <div className="space-y-2">
              {guides.map((g) => (
                <Link key={g.slug} href={`/guides/${g.slug}`} className="block text-sm text-slate-600 hover:text-blue-600 transition-colors">
                  {g.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
