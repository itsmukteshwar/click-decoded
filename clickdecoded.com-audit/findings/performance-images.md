# Performance & Images Findings — clickdecoded.com

**Performance: 85/100 (lab only) · Images: 55/100**

> Lab measurement: one homepage load in an embedded Chromium pane (desktop-class CPU, edge cache HIT). Field data (CrUX) was not available. Connect Search Console → Core Web Vitals for real-user INP/LCP/CLS.

## Core Web Vitals (lab)
| Metric | Value | Rating |
|---|---|---|
| TTFB | 78 ms | Good |
| LCP | 516 ms (H1 text `.sh-h1`) | Good |
| CLS | 0.000 | Good |
| INP | not measurable in lab | Check in the field. Two infinite marquees plus a rotating hero carousel are the main risk on low-end Android |
| DOM nodes | 1,231 | OK |

## Page weight
| Page | HTML size |
|---|---|
| `/` | 110 KB (≈55 KB inline CSS, 5 KB inline JS) |
| business-website-guide | 100 KB |
| ai-automation-guide | 95 KB |
| seo-guide | 93 KB |
| seo-services | 77 KB |

**Recommendations**
1. 🟡 Move the shared design-token CSS into `/assets/site.css` with `Cache-Control: public, max-age=31536000, immutable` and a hashed filename. Inline only critical above-the-fold CSS (target under 14 KB). This saves about 40 KB per page view after the first.
2. 🟡 Fonts: Inter 400/500/600/700/800/900 is 6 weights. Use a variable font or 3 weights, self-host as WOFF2 with `font-display: swap`, and preload the main weight. This removes 2 third-party origins.
3. 🟢 Add `defer` to `header.js` and `footer.js` (or remove them once static).
4. 🟢 Respect `@media (prefers-reduced-motion: reduce)` on marquees, the ticker and the hero carousel.
5. 🟢 GA4 `gtag.js` loads async (fine). If you add more tags, consider Partytown or GTM server-side.

## Images
| Check | Result |
|---|---|
| `<img>` tags site-wide | 18 (93 pages have none) |
| Missing `alt` | 0 ✅ |
| Missing width/height | 14 ❌ (homepage 4, blog 3, careers, contact, sitemap) |
| `loading="lazy"` | 9 |
| Formats | PNG (logo, guide covers). Convert to WebP/AVIF |
| `og:image` present | **5 / 102 pages** ❌ |
| Broken OG images | `og-healthcare.jpg`, `og-education.jpg` (404, non-www URL) |
| Favicon | SVG + PNG ✅; `/favicon.ico` 404 |

**Recommendations**
1. 🟠 OG images: create 9 templates at 1200×630 (Home, SEO, Ads, Web, AI, GEO, White Label, City, Industry). Use WebP or JPG under 200 KB, and set `og:image`, `og:image:width/height`, `og:image:alt`, `twitter:card=summary_large_image`. WhatsApp and LinkedIn previews drive B2B referrals.
2. 🟠 Add width/height to all 14 images.
3. 🟡 Add real imagery to service pages: dashboard screenshots, report samples, team at work. These are E-E-A-T proof and image-search entry points. Use descriptive filenames (`whatsapp-automation-flow-n8n.webp`).
4. 🟢 Convert `clickdecoded.png`, `clickdecodedround.png` and guide covers to WebP. Keep the PNG logo for schema.
