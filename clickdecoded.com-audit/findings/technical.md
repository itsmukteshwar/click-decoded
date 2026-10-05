# Technical SEO Findings — clickdecoded.com

**Score: 68/100**

## Crawl summary

| Metric | Value |
|---|---|
| URLs in sitemaps | 97 |
| URLs discovered outside sitemaps | 5 (`/index.html`, `/sitemap.html`, 3 guides) |
| Total crawled | 102, all HTTP 200 |
| Internal links returning 404 | 9 unique targets |
| Pages with `noindex` | 3 (privacy, terms, cookie policy, which is correct) |
| Avg server response (edge, cached) | ~94 ms |
| Server | Vercel, region `bom1` (Mumbai) |

## Findings

### 🔴 CRITICAL — Form success redirect is a 404
- **Evidence:** `<form id="lead-form" action="https://formsubmit.co/hello@clickdecoded.com">` with `<input name="_next" value="https://clickdecoded.com/thank-you.html">`. `GET /thank-you.html` → **404**.
- **Impact:** Every lead sees an error page, you can't track conversions in GA4 or Ads, and it hurts trust at the moment of conversion. `_captcha=false` also invites spam.
- **Fix:** Deploy `fix-kit/thank-you.html` (noindex). Set `_next` to the `www` URL. Add `<input type="text" name="_honey" style="display:none">`. Fire `gtag('event','generate_lead')` on the thank-you page.

### 🔴 CRITICAL — Navigation and footer are injected by JavaScript
- **Evidence:** Raw HTML contains `<div id="cd-footer">` placeholders. `/components/header.js?v=2` (16 KB, 62 links) and `/components/footer.js` (25 KB, 42 links, phone, email, city list, legal entity) build them with `outerHTML` at runtime.
- **Impact:**
  - Googlebot renders JS, but link discovery is delayed to the render queue.
  - GPTBot, ClaudeBot, PerplexityBot, CCBot and most SEO tools **do not execute JS**, so they see pages with no nav, no footer, no phone or email, and no legal entity.
  - In raw HTML, 23 pages have only 1–2 inbound internal links (all 11 industry pages, 5 white-label pages, pricing, careers, internship, how-we-work, ui-ux, ai-video and google-trusted-photography).
- **Fix:** Render header and footer at build time. Because the project standard is Next.js, a shared `app/layout.tsx` with `<Header/>` and `<Footer/>` server components solves it. Interim option: inline the static footer HTML in each file with a find/replace script and keep JS only for the WhatsApp FAB.

### 🔴 CRITICAL — Internal links point to `/index.html`
- **Evidence:** 100 pages link to `/index.html`. `/` receives 0 raw-HTML internal links. `/index.html` returns 200 with canonical `/`.
- **Fix:** Replace links with `/`. Add a 301 in `vercel.json` (`/index.html` → `/`), plus `"cleanUrls"` if you want extensionless URLs later. Redirect old `.html` URLs if you switch.

### 🔴 CRITICAL — Broken internal links (9)
| Broken URL | Linked from |
|---|---|
| `/dewas.html` | `/service-areas.html` |
| `/gwalior.html` | `/service-areas.html` |
| `/raipur.html` | `/service-areas.html` |
| `/nagpur.html` | `/service-areas.html` |
| `/pune.html` | `/service-areas.html` |
| `/delhi-ncr.html` | `/service-areas.html` |
| `/mumbai.html` | `/service-areas.html` |
| `/bangalore.html` | `/service-areas.html` |
| `/ecommerce-dev.html` | `/ui-ux.html` (should be `/ecommerce-development.html`) |

### 🟠 HIGH — Sitemap gaps and stale `lastmod`
- The 3 guides (the strongest content on the site) are **not in any sitemap**. `sitemap-blog.xml` lists only `/blog.html`.
- All 97 URLs share `lastmod 2026-06-29`, which tells Google the dates aren't trustworthy, so it ignores them.
- `changefreq` and `priority` are ignored by Google, so they're harmless but pointless.
- **Fix:** `fix-kit/sitemap-blog.xml`. Generate `lastmod` from the file's git commit date.

### 🟠 HIGH — No custom 404
- Missing URLs return Vercel's 79-byte plain-text "The page could not be found NOT_FOUND". Add `/404.html` (Vercel serves it automatically with a 404 status).

### 🟡 MEDIUM — Semantic structure
- `<main>` is present only on the 3 guides. The other 99 pages wrap content in `<div>`/`<section>`. Add `<main id="main">` and a "Skip to content" link (accessibility plus clearer content extraction for AI and agents).

### 🟡 MEDIUM — Security headers
| Header | Status |
|---|---|
| X-Frame-Options | ✅ SAMEORIGIN |
| X-Content-Type-Options | ✅ nosniff |
| Referrer-Policy | ✅ strict-origin-when-cross-origin |
| Permissions-Policy | ✅ camera/mic/geo off |
| Strict-Transport-Security | ⚠️ not observed. Add `max-age=63072000; includeSubDomains; preload` |
| Content-Security-Policy | ❌ missing. Start with `Content-Security-Policy-Report-Only` |
| Access-Control-Allow-Origin | ⚠️ `*` on HTML. Not needed; remove |

### 🟢 LOW
- `/favicon.ico`, `/apple-touch-icon.png` and `/site.webmanifest` return 404. Browsers and Google's favicon fetcher still request `/favicon.ico`.
- `/sitemap.html` gets 0 raw-HTML links (it's only in the JS footer). That's fine once the footer is static.
- WebSite `SearchAction` → `blog.html?s=`. Remove it unless it returns real results.
- `robots.txt`: consider adding `Disallow: /components/` (those JS files have no SEO value).

## What's good
- Single canonical host (www, HTTPS), clean redirects.
- 100% self-canonical, 0 non-200 pages in the sitemaps, legal pages correctly `noindex, follow`.
- No JS framework hydration cost; content is in the initial HTML.
- robots.txt blocks the `?product` / `index.php` spam-injection patterns. Good hygiene after a past spam attack.
