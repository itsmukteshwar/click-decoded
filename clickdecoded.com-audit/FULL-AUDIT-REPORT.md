# Full SEO Audit Report — clickdecoded.com

**Audit date:** 6 October 2026
**Scope:** 102 URLs crawled (97 in XML sitemaps + 5 discovered via internal links), plus 18 support URLs (llms.txt, favicon, 404 behaviour, OG images, thank-you page, city pages)
**Host:** Vercel (edge region `bom1`), static `.html` site, header/footer injected by JavaScript (`/components/header.js`, `/components/footer.js`)
**Method:** Raw-HTML crawl of every page, rendered check of the homepage, schema extraction, 5-gram near-duplicate testing, MCA registry cross-check, brand-presence web search
**Limits:** No Google Search Console, GA4, CrUX field data or backlink API was connected. Performance numbers are lab-only from a single load. Rankings were not checked.

---

## Executive Summary

### SEO Health Score: **65 / 100** (Needs work — solid foundation, trust and entity gaps)

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 68 | 15.0 |
| Content Quality & E-E-A-T | 23% | 58 | 13.3 |
| On-Page SEO | 20% | 74 | 14.8 |
| Schema / Structured Data | 10% | 60 | 6.0 |
| Performance (lab) | 10% | 85 | 8.5 |
| AI Search Readiness (GEO/AEO) | 10% | 45 | 4.5 |
| Images | 5% | 55 | 2.8 |
| **Total** | | | **64.9 → 65** |

Supplementary (not in the weighted score): **Local SEO 55 / 100**.

**Business type detected:** B2B digital marketing agency, hybrid (service-area business with a Bhopal office). Serves clients across India, plus white-label work for other agencies. Legal entity: Aharnish Infotech Pvt. Ltd.

### What's working

- All 102 crawled pages return 200. Every page has a self-referencing canonical, exactly one H1, a unique title and a unique meta description (apart from the `/index.html` duplicate of `/`).
- Fast static hosting: lab TTFB 78 ms, homepage LCP about 0.5 s, CLS 0.
- Location and service content is unique. Bhopal and Indore pages share only 2–20% of their 5-word phrases, so they are not doorway clones.
- 100% of pages have JSON-LD and all of it parses.
- The three long guides (5,400–6,500 words) are strong pieces that AI tools can cite.
- robots.txt allows every crawler, including GPTBot, ClaudeBot and PerplexityBot.
- All images have alt attributes.

### Top 5 critical issues

1. **The lead form sends every visitor to a 404.** The homepage form posts to formsubmit.co with `_next=https://clickdecoded.com/thank-you.html`, and `/thank-you.html` returns 404. Every conversion lands on Vercel's plain "NOT_FOUND" page, and no thank-you conversion can be tracked. `_captcha=false` also leaves the form open to spam.
2. **The legal identity on the site doesn't match government records.** `/about.html` gives the CIN as **U72900MP2014PTC032149**, but the MCA record for Aharnish Infotech Pvt. Ltd. is **U72200MP2014PTC033341** (incorporated 21 Oct 2014). This undermines the main trust signal the site relies on.
3. **Navigation and footer exist only after JavaScript runs.** The menu (62 links) and footer (42 links, plus phone, email and address) are injected by JS. AI crawlers that don't render JS see no navigation and no contact details. In raw HTML, 23 pages (including all 11 industry pages and 5 white-label pages) have only 1–2 inbound links.
4. **Internal links point to `/index.html` instead of `/`.** 100 pages link to `/index.html` (a 200 page whose canonical is `/`), while `/` gets 0 raw-HTML internal links. This splits link signals and sends Google mixed signals about which URL is the homepage.
5. **There are 9 broken internal links.** `/service-areas.html` links to 8 city pages that return 404 (Dewas, Gwalior, Raipur, Nagpur, Pune, Delhi NCR, Mumbai, Bangalore). `/ui-ux.html` links to `/ecommerce-dev.html` (404). The footer also lists those 8 cities as service areas.

### Top 5 quick wins (under 1 hour each)

1. Create `/thank-you.html` and point `_next` to the `www` version. Fire a GA4 `generate_lead` event on it.
2. Correct the CIN on `/about.html` and in every schema block.
3. Do a global find-and-replace: `href="index.html"` → `href="/"`. Add a 301 from `/index.html` to `/` in `vercel.json`.
4. Add the 3 guides to `sitemap-blog.xml` with their real `lastmod` dates (ready-made file in `fix-kit/`).
5. Publish `/llms.txt` (draft in `fix-kit/llms.txt`) and add one OG image per template (97 of 102 pages have no `og:image`).

---

## 1. Technical SEO — 68/100

Full detail: `findings/technical.md`

| Check | Result |
|---|---|
| HTTPS / host canonicalisation | ✅ `clickdecoded.com` → `https://www.clickdecoded.com` |
| robots.txt | ✅ Allows all; blocks `/index.php` and `?product` spam patterns; declares sitemap |
| XML sitemaps | ⚠️ Index plus 6 child sitemaps, 97 URLs. The 3 guides are missing. All `lastmod` = 2026-06-29. `blog.html` is the only URL in the blog sitemap |
| Canonicals | ✅ Self-referencing on 102/102. `/index.html` → `/` |
| Status codes | ✅ 102/102 return 200. ❌ 9 internal links return 404 |
| Custom 404 | ❌ Vercel's default plain-text "NOT_FOUND" page, with no navigation or recovery links |
| JS dependency | ❌ Header and footer injected client-side |
| Security headers | ⚠️ Has X-Frame-Options, nosniff, Referrer-Policy and Permissions-Policy. No Content-Security-Policy. Strict-Transport-Security was not seen in the response |
| Favicon | ⚠️ SVG and PNG icons declared. `/favicon.ico` and `/apple-touch-icon.png` return 404. No web manifest |
| Semantic HTML | ❌ `<main>` is missing on 99/102 pages (only the 3 guides have it) |
| hreflang | n/a (single language, `lang="en"`). The guides use `inLanguage: en-IN`; consider `lang="en-IN"` site-wide |
| Caching | ✅ `max-age=0, must-revalidate` with ETag and Vercel edge cache HIT |

## 2. Content Quality & E-E-A-T — 58/100

Full detail: `findings/content-eeat.md`

- **Experience:** Results are claimed everywhere (+340% traffic, ₹18 CPL, 6.2× ROAS) but every case study is anonymous ("Client names are kept confidential by default"). There are no screenshots, named testimonials, video or third-party reviews.
- **Expertise:** No team page, no named authors on service pages, and no Person schema. The blog card shows "Mukteshwar Sharma", but the Article schema credits the Organization.
- **Authoritativeness:** A brand search finds no third-party coverage of "Click Decoded" (directories, listicles, news). The homepage "DA 54 / 2.4k backlinks" widget is unverified.
- **Trustworthiness:** The CIN mismatch, plus figures that contradict each other: client retention is **98%** on the homepage but **95%** on About. The homepage chatbot demo says SEO "starting at ₹15,000/mo", while Pricing says "Minimum engagement ₹25,000/month — no exceptions", and the contact form offers "Under ₹10,000/month". The homepage also shows "Live AI mentions — our clients" quotes from ChatGPT and Gemini that name Click Decoded itself and can't be verified.
- **Thin-ish pages:** The 11 industry pages average about 800 words (manufacturing 609, e-commerce 618, finance 630). The Indore pages are 665–832 words versus 751–1,444 for Bhopal.
- **Content velocity:** The blog has 3 guides ("57+ Articles Planned"), and the category filter shows "All 9" when only 3 exist.

## 3. On-Page SEO — 74/100

Full detail: `findings/on-page.md`

- Titles: 22 of 102 are over 60 characters (the guides run 67–87). `/pricing.html` (23 chars) and `/service-areas.html` (29) are under-optimised.
- The homepage title "Click Decoded — SEO · Marketing · AI Automation" doesn't include "agency", "India" or "B2B".
- The H1 is unique on every page. Several H1s are split with `<br>` and no space, so text extraction reads "We Handlethe Digital." Search engines usually cope; LLM extractors often don't.
- Meta descriptions: all 70–160 characters and unique.
- Internal linking: in raw HTML, industry pages get 1–2 links, `google-trusted-photography` 1, `/pricing.html` 1 and `/sitemap.html` 0.

## 4. Schema & Structured Data — 60/100

Full detail: `findings/schema.md`

- Coverage: Service (82 pages), BreadcrumbList (92), FAQPage (58), **HowTo (42)**, LocalBusiness (17), Article (3), JobPosting, EducationalOccupationalProgram, Blog, WebSite.
- HowTo rich results were retired by Google in 2023, and putting HowTo on sales pages misuses the type. Remove it.
- FAQPage rich results now show only for authoritative government and health sites. Keep it for AI/answer-engine parsing, but don't expect SERP gains.
- The Organization schema uses `https://clickdecoded.com` (non-www) for `url` and `logo`, but the canonical host is `www`. There's no `@id` graph, no `sameAs` (LinkedIn, Facebook, Crunchbase) and no `founder`, `legalName` or `taxID`.
- **The Indore LocalBusiness block uses the Bhopal street address with Indore coordinates (22.7196, 75.8577).** This is a data conflict. Use a ProfessionalService with `areaServed: Indore` that references the Bhopal entity instead.
- Article `author` is an Organization. Change it to a Person with `sameAs` links. The `image` is the logo; use the actual guide cover.
- WebSite `SearchAction` points to `blog.html?s=`. Remove it unless that URL returns real search results.

## 5. Performance — 85/100 (lab only)

| Metric | Homepage (single lab load) | Threshold |
|---|---|---|
| TTFB | 78 ms | < 800 ms ✅ |
| LCP | 516 ms (element: `H1.sh-h1`) | < 2.5 s ✅ |
| CLS | 0.000 | < 0.1 ✅ |
| DOM nodes | 1,231 | < 1,500 ✅ |
| HTML size | 110 KB (55 KB inline CSS) | ⚠️ heavy |

- The roughly 55 KB of inline CSS is repeated on every page and can't be cached across pages. Move the shared CSS into one cached stylesheet and keep only critical CSS inline.
- Google Fonts Inter loads 6 weights (400–900). Self-host 3 weights and subset them.
- There are 2 infinite marquee animations. Check INP on mid-range Android phones and respect `prefers-reduced-motion`.
- INP can't be measured without field data. Connect Search Console's CrUX report.

## 6. Images — 55/100

- 18 `<img>` tags site-wide (93 pages have none). Alt text is present on all of them ✅.
- 14 images have no width/height attributes (CLS risk on slow connections).
- **97 of 102 pages have no `og:image`**, so links shared on WhatsApp, LinkedIn and X show no preview. That hurts a B2B agency that relies on WhatsApp sharing.
- `og-healthcare.jpg` and `og-education.jpg` are referenced but return 404, and they use the non-www host.
- Service pages are entirely icons and emoji, with no real proof imagery (dashboards, team, office, reports).

## 7. AI Search Readiness (GEO / AEO) — 45/100

Full detail: `findings/geo-aeo-ai-search.md`

- ✅ AI crawlers are allowed, the content is server-rendered, the guides contain FAQs and the pages are quotable.
- ❌ No `/llms.txt`. NAP and navigation are invisible to non-JS crawlers. Entity signals are weak: no `sameAs`, no Wikidata, no LinkedIn company link, no off-site mentions found.
- ❌ The CIN error and conflicting statistics make the brand a poor citation source, because LLMs cross-check facts across sources.
- ⚠️ The "Click Decoded is widely recommended…" AI-quote widget on the homepage describes a claimed result as if it already exists. Replace it with real, dated screenshots or remove it.

## 8. Local SEO — 55/100 (supplementary)

Full detail: `findings/local-seo.md`

- The NAP in schema (Amrit Complex, Raisen Road, Bhopal 462023, +91 94070 00101) is not visible on the page as text. The footer only says "Bhopal, Madhya Pradesh".
- The MCA registered office is S-3, Aala Apartments, Bag Dilkusha, Bhopal 462023. That's fine as a legal address, but use one public NAP everywhere.
- A GBP link is present (maps.app.goo.gl). Reviews aren't embedded anywhere.
- 8 promised city pages return 404, and the Indore schema conflict is described above.

---

## Scoring method

Weights follow the audit skill's model (Technical 22, Content 23, On-Page 20, Schema 10, Performance 10, AI Readiness 10, Images 5). Each category score starts at 100 and loses points for findings by severity: Critical −15, High −8, Medium −4, Low −1, with credit for strengths. Local SEO is reported separately because the business is a hybrid SAB.

## Files in this audit

| File | Purpose |
|---|---|
| `FULL-AUDIT-REPORT.md` | This report |
| `ACTION-PLAN.md` | Prioritised fixes with effort, owner and timeline |
| `findings/technical.md` | Crawlability, indexability, sitemaps, headers, JS |
| `findings/on-page.md` | Titles, H1s, metas, internal links per page |
| `findings/content-eeat.md` | E-E-A-T, consistency, thin content, content plan |
| `findings/schema.md` | Schema inventory, errors, replacement JSON-LD |
| `findings/local-seo.md` | NAP, GBP, location pages, citations |
| `findings/geo-aeo-ai-search.md` | AI crawler access, llms.txt, citability, entity |
| `findings/performance-images.md` | CWV lab data, assets, images, OG |
| `crawl-data.csv` | Per-URL raw data (102 rows) |
| `audit-data.json` | Structured envelope for PDF/dashboard generation |
| `fix-kit/` | Ready-to-deploy fixes (llms.txt, JSON-LD, vercel.json, sitemap, thank-you, 404) |
