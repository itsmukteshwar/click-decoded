# Click Decoded — Next.js Website

B2B digital marketing agency website. Built with Next.js 15, TypeScript, Tailwind CSS v4, shadcn/ui.

## Stack

| Tool | Purpose |
|------|---------|
| Next.js 15 (App Router) | Framework |
| TypeScript (strict) | Type safety |
| Tailwind CSS v4 | Styling |
| shadcn/ui + Radix UI | Components |
| Framer Motion | Animations |
| Resend | Contact form emails |
| MDX | Blog posts |
| Vercel | Hosting + auto-deploy |

## Getting Started

### 1. Prerequisites
- Node.js 20+ — download from [nodejs.org](https://nodejs.org)

### 2. Install
```bash
npm install
```

### 3. Environment variables
```bash
cp .env.example .env.local
# Fill in your values in .env.local
```

### 4. Run locally
```bash
npm run dev
# Open http://localhost:3000
```

### 5. Build for production
```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── layout.tsx        # Root layout (Header + Footer + WhatsApp)
│   ├── page.tsx          # Homepage
│   ├── blog/             # Blog listing + individual posts
│   ├── api/contact/      # Contact form API (Resend)
│   ├── sitemap.ts        # Auto-generated sitemap
│   └── robots.ts         # robots.txt
├── components/
│   ├── layout/           # Header, Footer
│   ├── sections/         # Reusable page sections
│   ├── ui/               # shadcn/ui primitives
│   └── whatsapp/         # WhatsApp floating button
├── content/blog/         # MDX blog posts (*.mdx)
├── lib/
│   ├── constants.ts      # ALL site-wide constants (edit here first)
│   ├── utils.ts          # cn(), formatINR(), waUrl(), buildWaMessage()
│   └── blog.ts           # MDX blog helpers
└── types/index.ts        # Global TypeScript types
```

## Key Conventions

- **All constants** → `src/lib/constants.ts` — never hardcode strings in components
- **All secrets** → `.env.local` — never commit this file
- **Styling** → Tailwind utility classes only; use `cn()` from `src/lib/utils.ts`
- **New page** → create `src/app/[route]/page.tsx`, export `metadata` and default component
- **New blog post** → add `src/content/blog/your-post.mdx` with frontmatter (see example)

## Adding a Blog Post

Create `src/content/blog/your-slug.mdx`:

```mdx
---
title: "Your Post Title"
description: "Short description for SEO"
date: "2025-07-01"
author: "Click Decoded"
category: "SEO"
tags: ["seo", "growth"]
published: true
---

## Your content here
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | From [resend.com](https://resend.com) |
| `CONTACT_TO_EMAIL` | Yes | Where form leads go |
| `NEXT_PUBLIC_SITE_URL` | Yes | Full site URL (no trailing slash) |
| `NEXT_PUBLIC_WA_NUMBER` | Yes | WhatsApp number (no + or spaces) |

## Deployment (Vercel)

1. Push to GitHub
2. Import repo in [vercel.com](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Every `git push origin main` auto-deploys

## SEO — .html → Clean URL Redirects

Old HTML site used `/page.html`. Next.js uses `/page`. The redirect is handled automatically in `next.config.ts`:

```ts
{ source: '/:path*.html', destination: '/:path*', permanent: true }
```

No manual redirects needed — all old indexed URLs 301 to clean URLs automatically.
