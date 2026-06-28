// src/app/sitemap.ts
import type { MetadataRoute } from 'next'
import { COMPANY, NAV } from '@/lib/constants'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = COMPANY.siteUrl

  const allNavLinks = [
    ...NAV.seo, ...NAV.paidAds, ...NAV.ai, ...NAV.content,
    ...NAV.web, ...NAV.geo, ...NAV.industries, ...NAV.company,
  ]

  const posts = getAllPosts().map(p => ({
    url:          `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    ...allNavLinks.map(l => ({
      url:          `${base}${l.href}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    ...posts,
  ]
}
