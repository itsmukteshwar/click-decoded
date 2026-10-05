# On-Page SEO Findings — clickdecoded.com

**Score: 74/100**

## Summary

| Check | Result |
|---|---|
| Unique titles | 101/102 (`/index.html` duplicates `/`) |
| Titles > 60 chars | 22 |
| Titles < 30 chars | 2 (`/pricing.html` 23, `/service-areas.html` 29) |
| Meta descriptions 70–160 chars | 102/102 ✅ |
| Exactly one H1 | 102/102 ✅ |
| H1 `<br>` concatenation in text extraction | widespread (e.g. "We Handlethe Digital.", "Rank #1 on Google.Grow Revenue.") |
| Pages with 0 H2s | `/service-areas.html`, `/sitemap.html` |

## Title rewrites (priority pages)

| URL | Current (chars) | Recommended |
|---|---|---|
| `/` | Click Decoded — SEO · Marketing · AI Automation (47) | B2B Digital Marketing, SEO & AI Automation Agency India \| Click Decoded (≈70; front-loads keywords; trim "B2B" if you want ≤60) |
| `/pricing.html` | Pricing \| Click Decoded (23) | SEO & Digital Marketing Pricing India — Plans from ₹25K \| Click Decoded |
| `/service-areas.html` | Areas We Work \| Click Decoded (29) | Digital Marketing Agency Serving Bhopal, Indore & India \| Click Decoded |
| `/seo-guide-indian-businesses-2026.html` | (67) | SEO Guide for Indian Businesses (2026) — 14 Chapters |
| `/ai-automation-guide-indian-businesses-2026.html` | (81) | AI Automation Guide for Indian SMBs (2026) |
| `/business-website-guide-india-2026.html` | (87) | Business Website Guide India 2026: Build for Leads |
| `/technical-seo-audit-indore.html` | (65) | Technical SEO Audit in Indore \| Click Decoded |
| `/industry-finance.html` | "…NBFCs India \| Click" (62, truncated brand) | Digital Marketing for NBFCs & Financial Services India |
| `/industry-ecommerce.html` | "…D2C Brands India \| Click" (59, truncated brand) | E-Commerce & D2C Digital Marketing India \| Click Decoded |
| `/industry-it-saas.html` | "…SaaS Startups India \| Click" (64) | SaaS & IT Digital Marketing Agency India \| Click Decoded |

Three industry titles end in "| Click" because a truncation script cut "Decoded". Fix those first.

## H1 text extraction
Many H1s are built like `We Handle<br>the Digital.` with no trailing space. Browsers display them correctly, but text extractors (and some LLM pipelines) read "Handlethe". Add a space before each `<br>` or use `<span class="block">` spans.

## Keyword targeting gaps
- The homepage has no H1/H2 containing "digital marketing agency", "SEO agency India" or "white label SEO". Add one H2 per core money term.
- The `/seo-services-bhopal.html` title contains "#1 SEO Agency Bhopal". A superlative claim without proof is a trust risk; use "Top-rated" only if you can back it with reviews.
- There's no dedicated page for "B2B SEO agency India", even though it's shown as a #1 ranking claim on the homepage dashboard. Create `/b2b-seo-agency-india.html` or retarget `/seo-services.html`.

## Internal linking — weakest pages (raw HTML inlinks)
| Page | Inlinks |
|---|---|
| `/` (links go to `/index.html`) | 0 |
| `/sitemap.html` | 0 |
| `/pricing.html`, `/careers.html`, `/internship.html`, `/google-trusted-photography.html` | 1 |
| `/industry-healthcare`, `-education`, `-real-estate`, `-manufacturing`, `-restaurants`, `-automotive`, `-it-saas` | 1 |
| `/whitelabel-ai`, `/whitelabel-geo`, `/whitelabel-reporting` | 1 |
| `/industry-legal`, `-finance`, `-hospitality`, `-ecommerce`, `/whitelabel-web-development`, `/whitelabel-ppc`, `/ui-ux`, `/ai-video`, `/how-we-work` | 2 |

**Fix:** Add a contextual "Industries we serve" block on each core service page linking to 3–4 relevant industry pages. Add a "White label" hub section on `/whitelabel-seo.html` linking to the other 5. Link `/pricing.html` from every service page CTA area.

## Anchor text
The CTAs "Explore SEO" and "All Services" are generic, and several "All Services" buttons all point to `/seo-services.html`. Point "All Services" to a real services hub, or rename it to "SEO Services".

## Full per-URL data
See `../crawl-data.csv`.
