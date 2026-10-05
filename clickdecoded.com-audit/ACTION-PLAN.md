# SEO Action Plan — clickdecoded.com

Current score **65/100** → target **82+/100** within 90 days.
Effort: S = under 1 hour · M = half a day · L = 1–3 days · XL = ongoing

---

## Phase 1 — Critical fixes (Week 1)

| # | Priority | Task | Effort | Files / where | Done when |
|---|---|---|---|---|---|
| 1 | 🔴 Critical | Create `/thank-you.html` (template in `fix-kit/thank-you.html`). Change the form `_next` to `https://www.clickdecoded.com/thank-you.html` on every form. Turn `_captcha` on or add a honeypot `_honey` field | S | `index.html`, every page with `#lead-form` | Test submission lands on a 200 page and GA4 records `generate_lead` |
| 2 | 🔴 Critical | Correct the CIN to **U72200MP2014PTC033341** on `/about.html`, footer, privacy and terms, and add `legalName` + `identifier` to Organization schema | S | `about.html`, `components/footer.js`, legal pages | Matches the MCA record |
| 3 | 🔴 Critical | Replace every `href="index.html"` / `/index.html` with `/`. Add a 301 from `/index.html` to `/` | S | all HTML, `components/header.js`, `vercel.json` (see `fix-kit/vercel.json`) | Raw-HTML crawl shows 0 links to `/index.html` |
| 4 | 🔴 Critical | Fix 9 broken internal links: either build Dewas, Gwalior, Raipur, Nagpur, Pune, Delhi NCR, Mumbai and Bangalore pages, or unlink them and show plain text. Fix `/ui-ux.html` → `/ecommerce-development.html` | S (unlink) / L (build) | `service-areas.html`, `ui-ux.html`, `footer.js` | 0 internal 404s |
| 5 | 🔴 Critical | Move the header nav and footer (including NAP) into static HTML. Either build-time include via a static generator / Next.js layout, or at minimum add the footer NAP and main nav links as static HTML in every page and progressively enhance with JS | M–L | `components/*.js` → build step | `curl` of any page shows nav links and the phone number |

## Phase 2 — High-impact improvements (Weeks 2–3)

| # | Priority | Task | Effort | Notes |
|---|---|---|---|---|
| 6 | 🟠 High | Add the 3 guides to `sitemap-blog.xml` and use real `lastmod` dates per URL (stop stamping 2026-06-29 on everything) | S | `fix-kit/sitemap-blog.xml` |
| 7 | 🟠 High | Replace Organization/LocalBusiness schema with one `@id`-linked graph (Organization + ProfessionalService + WebSite + founder Persons) using the www host | M | `fix-kit/schema-site-graph.jsonld` |
| 8 | 🟠 High | Remove `HowTo` schema from 42 service pages. Keep FAQPage | S | Global find/replace |
| 9 | 🟠 High | Indore LocalBusiness: remove the Bhopal address + Indore geo combination. Use `Service` with `areaServed: Indore` and `provider: {"@id": org}` | S | 15 Indore pages |
| 10 | 🟠 High | Publish `/llms.txt` | S | `fix-kit/llms.txt` |
| 11 | 🟠 High | Add `og:image`, `og:url` and `twitter:card` to every page. Make one 1200×630 image per section (SEO, Ads, Web, AI, GEO, White Label, City, Industry, Guide) | M | 9 images, fixes 97 pages |
| 12 | 🟠 High | Make the numbers consistent: pick one retention %, one minimum price, and align the chatbot demo, pricing page and contact budget options | S | `index.html`, `about.html`, `contact.html` |
| 13 | 🟠 High | Remove or substantiate the "Live AI mentions" quotes and the "DA 54 / 2.4k backlinks" widget. Replace them with dated, real screenshots | S | `index.html` |
| 14 | 🟠 High | Create a custom `404.html` with nav, search and top service links | S | `fix-kit/404.html` |
| 15 | 🟠 High | Add a **Team** section or page with named founders (Mukteshwar Sharma, Bhagvendra Pratap Singh), photos, LinkedIn profiles, years of experience and certifications (Google Ads, GA4, Meta Blueprint). Add Person schema | M | `about.html` or new `team.html` |
| 16 | 🟠 High | Put the author byline (Mukteshwar Sharma) with a bio box on the 3 guides, and set Article `author` to Person | S | 3 guide pages |

## Phase 3 — Content & authority (Month 2)

| # | Priority | Task | Effort |
|---|---|---|---|
| 17 | 🟡 Medium | Wrap page content in `<main>` on 99 pages. Use `<article>` on guides and `<section>` per block | S (template) |
| 18 | 🟡 Medium | Rewrite 22 titles over 60 characters. Strengthen the homepage title: "B2B Digital Marketing, SEO & AI Automation Agency India \| Click Decoded" | S |
| 19 | 🟡 Medium | Expand the 11 industry pages from about 650 to 1,200+ words: industry-specific problems, a sample 90-day plan, KPIs, one anonymised mini case with numbers, and FAQs | L |
| 20 | 🟡 Medium | Expand the Indore pages to parity with Bhopal (+250–400 words each with Indore-specific proof: localities served, local competitors, Indore client example) | L |
| 21 | 🟡 Medium | Publish 2 case studies with named clients and permission (logo, quote, before/after GSC or Ads screenshots). Add Review schema only for first-party testimonials shown on the page | L |
| 22 | 🟡 Medium | Increase internal links to orphan-ish pages: link each industry page from 3+ relevant service pages, add an "Industries" mega-menu block to the static nav, and link white-label pages from `/whitelabel-seo.html` hub | M |
| 23 | 🟡 Medium | Blog cadence: 2 posts/month for 6 months (see content plan in `findings/content-eeat.md`). Fix the "All 9" counter | XL |
| 24 | 🟡 Medium | Entity building: LinkedIn company page, Crunchbase, Clutch, GoodFirms, DesignRush, Sortlist, Semrush Agency Partners, Justdial, IndiaMART, Sulekha. All with identical NAP and a link back | M |
| 25 | 🟡 Medium | Move about 55 KB of shared inline CSS to a cached `/assets/site.css`. Self-host Inter in 3 weights | M |

## Phase 4 — Monitoring & iteration (Ongoing)

| # | Priority | Task | Cadence |
|---|---|---|---|
| 26 | 🟢 Low | Add an HSTS header and a basic CSP in `vercel.json` | Once |
| 27 | 🟢 Low | Add `/favicon.ico`, `/apple-touch-icon.png` and `site.webmanifest` | Once |
| 28 | 🟢 Low | Add spaces or `display:block` spans to H1 `<br>` splits so text reads "We Handle the Digital." | Once |
| 29 | 🟢 Low | Connect Google Search Console + Bing Webmaster Tools. Submit the sitemap index. Enable IndexNow on Vercel deploys | Once |
| 30 | 🟢 Low | Track AI citations monthly: the same 20 prompts in ChatGPT, Gemini, Perplexity and AI Overviews ("best B2B SEO agency India", "white label SEO India", "digital marketing agency Bhopal" …) | Monthly |
| 31 | 🟢 Low | Re-crawl monthly. Watch for new 404s, missing OG, schema drift | Monthly |
| 32 | 🟢 Low | Respect `prefers-reduced-motion` on the marquees | Once |

---

## Expected score lift

| After phase | Technical | Content | On-Page | Schema | Perf | AI | Images | **Overall** |
|---|---|---|---|---|---|---|---|---|
| Today | 68 | 58 | 74 | 60 | 85 | 45 | 55 | **65** |
| Phase 1 | 84 | 63 | 78 | 60 | 85 | 55 | 55 | **71** |
| Phase 2 | 88 | 72 | 80 | 85 | 85 | 72 | 80 | **80** |
| Phase 3 | 92 | 82 | 88 | 88 | 90 | 80 | 85 | **87** |

These projections are directional estimates. Ranking impact depends on competition and on off-site authority work.
