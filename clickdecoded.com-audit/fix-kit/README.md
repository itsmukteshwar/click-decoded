# Fix Kit — ready-to-deploy files

| File | Deploy to | Fixes | Note |
|---|---|---|---|
| `thank-you.html` | `/thank-you.html` | Form success 404 plus conversion tracking | Then change every form's `_next` to `https://www.clickdecoded.com/thank-you.html` |
| `404.html` | `/404.html` (repo root) | Vercel default plain-text 404 | Vercel serves it automatically with status 404 |
| `llms.txt` | `/llms.txt` | Missing AI discovery file | Check the pricing and founder facts before publishing |
| `sitemap-blog.xml` | replace `/sitemap-blog.xml` | 3 guides missing from the sitemap | Then resubmit the sitemap index in GSC and Bing |
| `vercel.json` | merge into the existing `vercel.json` | index.html 301, broken link 301, HSTS, CSP (report-only), asset caching | **Merge, don't overwrite.** Keep any existing rewrites |
| `schema-site-graph.jsonld` | `<head>` of `index.html`, `about.html`; examples for service and guide pages | Entity graph, correct CIN, www host, founders, Indore conflict | Replace every `REPLACE_` value. Remove `sameAs` entries for profiles that don't exist yet |

## Find/replace jobs (run across the repo)

| Find | Replace | Scope |
|---|---|---|
| `href="index.html"` and `href="/index.html"` | `href="/"` | all `.html`, `components/*.js` |
| `U72900MP2014PTC032149` | `U72200MP2014PTC033341` | all files |
| `"url": "https://clickdecoded.com"` | `"url": "https://www.clickdecoded.com/"` | JSON-LD |
| `https://clickdecoded.com/og-` | `https://www.clickdecoded.com/og/og-` | after creating the OG images |
| `"@type": "HowTo"` block | delete the whole node | 42 service pages |
| `/ecommerce-dev.html` | `/ecommerce-development.html` | `ui-ux.html` |
| `starting at ₹15,000/mo` | `starting at ₹25,000/mo` | `index.html` |

## Long-term: Next.js migration (project standard)

Moving to Next.js App Router fixes the JS header/footer problem at the root:
```
app/
  layout.tsx            ← <Header/> + <Footer/> as Server Components (static HTML)
  page.tsx
  [service]/page.tsx    ← generateStaticParams from data/services.json
  [service]-[city]/...  ← programmatic location pages from data/locations.json
  blog/[slug]/page.tsx  ← MDX guides
  sitemap.ts            ← real lastModified from content files
  robots.ts
lib/schema.ts           ← one @id graph generator
```
Keep the URLs as they are with `.html` paths (rewrites) or 301-map them to clean URLs in one go. Don't change URLs twice.
