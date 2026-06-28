// src/app/blog/page.tsx
import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title:       'Blog & Insights',
  description: 'SEO, Google Ads, AI automation, and digital marketing guides from Click Decoded.',
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <section className="section-pad">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Blog & <em className="gradient-text not-italic">Insights</em>
          </h1>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            Actionable guides on SEO, Ads, AI automation, and B2B growth.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-neutral-500">No posts yet — check back soon.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}`}
                className="card-dark p-6 hover:border-blue-500/50 transition-all hover:-translate-y-1 group">
                <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">{post.category}</span>
                <h2 className="text-lg font-bold mt-2 mb-3 group-hover:text-blue-400 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-neutral-400 line-clamp-2 mb-4">{post.description}</p>
                <div className="flex items-center justify-between text-xs text-neutral-500">
                  <span>{new Date(post.date).toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' })}</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
