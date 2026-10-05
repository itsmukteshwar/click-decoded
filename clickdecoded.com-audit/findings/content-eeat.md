# Content Quality & E-E-A-T Findings — clickdecoded.com

**Score: 58/100**

| E-E-A-T pillar | Score | Main gap |
|---|---|---|
| Experience | 5/10 | Every case study is anonymous; there's no visual proof |
| Expertise | 5/10 | No named team, authors, credentials or Person schema |
| Authoritativeness | 4/10 | No third-party brand mentions found; unverified DA claims |
| Trustworthiness | 6/10 | Legal entity disclosed (good), but the CIN is wrong and figures contradict each other |

## 🔴 Trust-breaking inconsistencies (fix this week)

| Claim | Location A | Location B | Fix |
|---|---|---|---|
| CIN | `U72900MP2014PTC032149` (about.html) | MCA registry: **U72200MP2014PTC033341** | Use the MCA value everywhere |
| Client retention | **98%** (homepage) | **95%** (about.html) | Pick one figure you can defend and say how it's measured |
| Minimum price | Chatbot demo: "SEO plans starting at ₹15,000/mo" (homepage) | Pricing: "Minimum engagement ₹25,000/month — no exceptions" | Change the demo to ₹25,000 |
| Budget options | Contact form: "Under ₹10,000/month" | Pricing minimum ₹25K | Remove the sub-₹25K option or label it "Not a fit yet" |
| Blog count | "All 9" filter | Only 3 guides published | Count published posts only |
| Founding | "12+ years", "© 2014–" | MCA: incorporated 21 Oct 2014 → 11 years 11 months | Fine; say "Since 2014" rather than "12+ years" until Oct 2026 has passed |

## 🟠 Unverifiable claims (Quality Rater risk)

- **Homepage "Organic Rankings Dashboard — Live · Updated daily"** shows "b2b seo agency india #1", "DA 54", "Backlinks 2.4k". These look like live data but are static HTML. If they aren't your own verified numbers, remove them; if they are, add a dated screenshot and a source.
- **"Live AI mentions — our clients"** quotes ChatGPT and Gemini saying "Click Decoded is widely recommended…". The brand itself appears in the quote, and a web search for "Click Decoded" Bhopal returns no third-party coverage. Show real screenshots with dates, or remove.
- **"0 Google penalties across 500+ projects"** and **"0 client contact in 12+ years"** are absolute claims. Soften them or add proof.
- "Currently Working On" ticker: good concept for showing experience, but it's static text that never changes. Date the entries or rotate them monthly.

## 🟠 Missing expertise signals
1. **No people.** The About page says "a team of strategists, developers, and AI engineers" but names no one. The MCA directors are Mukteshwar Sharma and Bhagvendra Pratap Singh. Add:
   - Founder cards: photo, role, years, certifications (Google Ads Search, GA4, Meta Certified, HubSpot), LinkedIn link
   - A `/team.html` or a founder section on `/about.html`
   - `Person` schema with `sameAs` → LinkedIn, `worksFor` → `#org`
2. **Guides:** the blog card shows "MK Mukteshwar Sharma", but the guide pages have no visible byline element and Article `author` is the Organization. Add a byline, a bio box, "Reviewed by" and "Last updated" to each guide.
3. **Case studies:** "Client names are kept confidential by default." That's fine for white-label work, but you need 2–3 named, permission-based case studies with GSC, Ads or GA4 screenshots for direct clients.
4. **Third-party proof:** embed Google reviews (count and rating) and Clutch/GoodFirms badges once the profiles exist.

## 🟡 Thin or under-developed pages

| Group | Pages | Avg words | Recommendation |
|---|---|---|---|
| Industry pages | 11 | ~800 (609–1,404) | Expand to 1,200+: industry pain points, compliance notes (e.g. NBFC/RBI ad rules, healthcare ad restrictions), channel mix, a 90-day plan, KPIs, a mini case, FAQs |
| Indore location pages | 14 | ~720 | Bring up to Bhopal parity: Indore localities (Vijay Nagar, Palasia, Super Corridor), local market context, an Indore client example, and how Indore clients are served (remote or visits) |
| Contact | 1 | 650 | OK for a contact page; add the address in text, a map embed and office hours |
| White label | 6 | ~820 | Add a partner onboarding process, sample report PDF, SLA table and pricing bands |

**Duplicate-content check:** 5-gram Jaccard similarity (city names masked), using 12 page pairs:

| Pair | Similarity |
|---|---|
| seo-services-bhopal vs seo-services-indore | 20% |
| local-seo-bhopal vs local-seo-indore | 4% |
| google-ads-bhopal vs google-ads-indore | 2% |
| industry-legal vs industry-finance | 13% |
| industry-automotive vs industry-restaurants | 12% |
| GEO vs AEO vs LLM-optimisation pages | 0% |

✅ No doorway-page risk. The programmatic pages are hand-differentiated, which is good.

## 🟡 Cannibalisation watch
These pages chase overlapping intents:
- `/generative-engine-optimization.html`, `/answer-engine-optimization.html`, `/ai-search-optimization.html` (LLM optimisation), `/ai-brand-visibility.html` and `/whitelabel-geo.html`
- `/gmb-marketing.html`, `/local-seo.html` and `/local-seo-bhopal.html`
- `/ai-automation.html` and `/workflow-automation.html`

Their content is distinct today. Make sure each has a unique primary keyword, and cross-link them with clear "which one do I need?" copy.

## ✅ Content strengths
- The 3 guides (5,451 / 5,835 / 6,481 words) have chapters, FAQs, an India-specific angle and 2026 freshness. These are the site's best E-E-A-T and AI-citation assets.
- `/honest.html` ("The Honest Page") is a strong trust differentiator. Link it from the homepage hero and pricing.
- Pricing is published (₹25K / ₹55K / ₹1.2L), which is rare among Indian agencies and good for trust and AI answers.
- The legal entity is disclosed on About and in the footer.

## Content plan — next 6 months (2 posts/month)

| Month | Post 1 (pillar support) | Post 2 (AI/GEO authority) |
|---|---|---|
| 1 | Google & Meta Ads for Indian Businesses 2026 (already "coming next") | How to Get Cited in ChatGPT: India Case Study (with your own data) |
| 2 | Local SEO Bhopal: Map Pack Checklist | WhatsApp Business API Pricing in India 2026 (explained) |
| 3 | White Label SEO: How Indian Agencies Scale (partner guide) | n8n vs Zapier vs Make for Indian SMBs |
| 4 | SEO Cost in India 2026: What You Should Pay | GEO vs SEO vs AEO: The Practical Difference |
| 5 | Healthcare Digital Marketing India: Compliance + Growth | Programmatic SEO with Next.js: A Build Walkthrough |
| 6 | Real Estate Lead Gen in MP: Google vs Meta Data | State of AI Search in India (original survey/research) |

Each post needs a named author, original data or screenshots, an FAQ block, a "Last updated" date, and 3+ internal links to service pages.
