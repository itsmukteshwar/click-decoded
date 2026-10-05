# Schema & Structured Data Findings — clickdecoded.com

**Score: 60/100**

## Inventory (102 pages, all JSON-LD, 0 parse errors)

| Type | Pages | Status |
|---|---|---|
| BreadcrumbList | 92 | ✅ Keep |
| Service | 82 | ✅ Keep. Add `provider: {"@id":"…#org"}`, `areaServed`, `offers` (price from pricing page) |
| FAQPage | 58 | ⚠️ Keep for AEO/LLM parsing. Google has shown FAQ rich results only for gov/health sites since Aug 2023 |
| **HowTo** | **42** | ❌ Remove. Google removed HowTo rich results (desktop and mobile) in 2023, and HowTo describes steps a user performs, not an agency's sales process |
| Organization | ~60 (repeated per page, no `@id`) | ⚠️ Consolidate into one `@id` entity |
| LocalBusiness | 17 | ⚠️ Conflicts (see below) |
| Article | 3 | ⚠️ Author is an Organization; image is the logo |
| WebSite + SearchAction | 1 | ⚠️ `blog.html?s=` is probably not a real search results page |
| JobPosting | 1 | Validate `datePosted`, `validThrough`, `hiringOrganization`, `jobLocation` |
| EducationalOccupationalProgram | 1 | OK |
| Blog, ContactPage, WebPage | various | OK |
| Person | **0** | ❌ Missing |
| Review / AggregateRating | 0 | ✅ Correct to omit until you have first-party on-page reviews |

## Errors and conflicts

### 🔴 Indore LocalBusiness uses the Bhopal address with Indore coordinates
`/digital-marketing-indore.html`:
```json
"address": {"streetAddress": "Amrit Complex, Raisen Road", "addressLocality": "Bhopal", "postalCode": "462023"},
"geo": {"latitude": 22.7196, "longitude": 75.8577}   // ← Indore city centre
```
This creates a single entity with two locations. Replace it on all Indore pages with:
```json
{"@type":"Service","name":"Digital Marketing in Indore","provider":{"@id":"https://www.clickdecoded.com/#org"},
 "areaServed":{"@type":"City","name":"Indore","sameAs":"https://en.wikipedia.org/wiki/Indore"}}
```

### 🟠 Host mismatch
Organization `url` and `logo` use `https://clickdecoded.com`, while the canonical is `https://www.clickdecoded.com`. Logos vary between pages (`logo-color.svg` vs `clickdecoded.png`). Google needs a raster logo of at least 112×112 px; use the PNG.

### 🟠 Entity is not linked
Each page redeclares an anonymous Organization. Use one graph with stable `@id`s:
- `https://www.clickdecoded.com/#org` (Organization + ProfessionalService)
- `https://www.clickdecoded.com/#website`
- `https://www.clickdecoded.com/#founder-mukteshwar`, `#founder-bhagvendra`

Then reference them with `{"@id": "…"}` from Service, Article and WebPage.

### 🟠 Missing entity properties
`legalName`, `alternateName`, `foundingDate` (2014-10-21), `founder`, `identifier` (CIN), `sameAs` (LinkedIn, Facebook, Instagram, YouTube, GBP CID URL, Crunchbase, Clutch), `contactPoint`, `knowsAbout`, `numberOfEmployees`, `slogan`.

### 🟡 Article schema on guides
- `author` → Person (`@id` founder) with `url` to the author page
- `image` → the real cover (`/img/seo-guide-indian-businesses-2026.png`) at 1200×630 or larger
- `wordCount: 4800` but the page has about 5,450 words. Make it accurate or drop it
- Add `about`, `mentions`, `speakable` (optional) and `isPartOf: {"@id":"#website"}`

### 🟡 Service schema enrichment
Add `offers` from the pricing page, for example:
```json
"offers":{"@type":"Offer","priceCurrency":"INR","price":"25000","priceSpecification":{"@type":"UnitPriceSpecification","price":"25000","priceCurrency":"INR","unitText":"MONTH"}}
```

## Ready-to-use replacement
See `../fix-kit/schema-site-graph.jsonld`. It covers the Organization, ProfessionalService, WebSite and 2 Person nodes, with the correct CIN, www host and `@id` linking. Put it in `<head>` on the homepage and About page, and reference the `@id`s elsewhere.

## Validation
After deploying, test the homepage, one service page, one Bhopal page, one Indore page and one guide in:
- https://search.google.com/test/rich-results
- https://validator.schema.org
