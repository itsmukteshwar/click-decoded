# Local SEO Findings — clickdecoded.com

**Score: 55/100**. Business model: hybrid service-area business. Office in Bhopal; serves Indore, MP and pan-India remotely.

## NAP audit

| Source | Name | Address | Phone |
|---|---|---|---|
| Schema (Bhopal pages, contact) | Click Decoded | Amrit Complex, Raisen Road, Bhopal, MP 462023 | +91-94070-00101 |
| Footer (JS-rendered) | Click Decoded | "Bhopal, Madhya Pradesh" (no street) | +91 94070 00101 |
| Contact page text | — | "📍 Bhopal Office" (no street) | +91 94070 00101 |
| MCA registry | Aharnish Infotech Pvt. Ltd. | S-3, Aala Apartments, Lala Lajpat Rai Colony, Bag Dilkusha, Bhopal 462023 | — |
| Schema `sameAs` | GBP short link `maps.app.goo.gl/rA663kbDQhtpiwo26` | — | — |

**Issues**
1. 🔴 The full street address appears **only in JSON-LD**. Add it as visible text on `/contact.html`, in the footer (static HTML) and on `/digital-marketing-bhopal.html`.
2. 🟠 The phone format varies (`+91-94070-00101` vs `+91 94070 00101`). Pick one format.
3. 🟠 The geo coordinates (23.2529, 77.4381) should match the GBP pin exactly. Check this in GBP.
4. 🟡 The registered office differs from the operating office. That's fine, but keep the registered office only in legal pages, never in citations.

## Google Business Profile (manual checks; GBP API not connected)
- [ ] Primary category **"Internet marketing service"**; secondary: "Marketing agency", "Website designer", "Search engine optimization service"(if available), "Software company"
- [ ] Business name exactly "Click Decoded" (no keyword stuffing)
- [ ] Website URL → `https://www.clickdecoded.com/digital-marketing-bhopal.html` (or the homepage) with UTM `?utm_source=gbp`
- [ ] Hours match schema (Mon–Fri 10–19, Sat 10–17)
- [ ] 10+ real photos (office, team, workshops); weekly posts; products/services filled with prices
- [ ] Q&A seeded with real FAQs
- [ ] Review velocity: aim for 4+ new reviews/month. Reply to all of them within 48 h
- [ ] Use the full `https://www.google.com/maps?cid=…` URL in schema `sameAs`, not the short link

## Location pages

| City | Pages | Status |
|---|---|---|
| Bhopal | 14 | ✅ Good depth (751–1,444 words), LocalBusiness schema |
| Indore | 14 | ⚠️ Thinner (665–832 words). Schema conflict (Bhopal address + Indore geo). Indore pages after `digital-marketing-indore` use Organization only |
| Dewas, Gwalior, Raipur, Nagpur, Pune, Delhi NCR, Mumbai, Bangalore | 0 | ❌ Linked from `/service-areas.html` and listed in the footer, but **404** |

**Recommendation for the 8 missing cities:** don't mass-produce 8 × 14 = 112 thin pages. Build **one strong hub per city** (`/digital-marketing-pune.html` etc.) only where you have a real client or case to show. Until then, unlink them and present the cities as plain text.

## Citations to build (India B2B agency set)
Priority: Justdial, Sulekha, IndiaMART, Clutch, GoodFirms, DesignRush, Sortlist, Semrush Agency Partners, TopDevelopers, LinkedIn Company Page, Facebook Page, Crunchbase, Apple Business Connect, Bing Places.
Use identical NAP everywhere, with the category "Digital Marketing Agency".

## Reviews
- No review widget or count appears anywhere on the site.
- No AggregateRating schema (correct, because self-serving reviews aren't eligible for stars on LocalBusiness/Organization).
- Add: a "4.x★ from N Google reviews" badge linking to GBP, plus 3–5 named testimonials with photo and company on the Bhopal hub.

## Local content ideas
- "Digital marketing in Bhopal: 2026 cost guide" (pricing transparency plus local intent)
- A Bhopal client spotlight series (manufacturing in Govindpura, real estate on Hoshangabad Road)
- MP government / MSME scheme explainers for digital adoption (local and topical authority)
