# GEO / AEO / AI Search Readiness Findings — clickdecoded.com

**Score: 45/100**

Selling GEO services makes this category matter twice: prospects will check whether Click Decoded is visible in AI answers itself.

## 1. AI crawler access — 8/10

| Bot | robots.txt | Can it see nav/footer/NAP? |
|---|---|---|
| Googlebot / Google-Extended | Allowed | Yes (renders JS) |
| Bingbot (Copilot) | Allowed | Yes (renders JS) |
| GPTBot / OAI-SearchBot / ChatGPT-User | Allowed | **No**. These don't execute JS |
| ClaudeBot / Claude-SearchBot | Allowed | **No** |
| PerplexityBot | Allowed | **No** |
| CCBot (Common Crawl → many LLMs) | Allowed | **No** |

Body content is in the raw HTML (good). The phone number, email, legal entity, city list and the whole site navigation exist only after `footer.js`/`header.js` run.

## 2. llms.txt — 0/10
`/llms.txt` and `/llms-full.txt` return 404. A draft is ready in `../fix-kit/llms.txt`. It lists the entity facts, core services with URLs, pricing, guides and contact.

## 3. Entity clarity — 3/10
- An LLM needs to resolve "Click Decoded" = an agency in Bhopal = Aharnish Infotech = founders X and Y. Today:
  - No `sameAs` to LinkedIn, Facebook, Crunchbase or Clutch
  - No Person entities
  - The CIN doesn't match the MCA, so cross-source verification fails
  - Brand web search (6 Oct 2026): no third-party pages mention "Click Decoded" Bhopal; generic results for "clickdecoded.com"
- **Fixes:** schema graph (`fix-kit`), LinkedIn company page, Crunchbase, Clutch/GoodFirms profiles, and 3–5 earned mentions (local news such as Dainik Bhaskar/Free Press Journal MP, "top agencies in Bhopal" listicles, podcast or guest posts).

## 4. Citability of content — 6/10

| Asset | Citability | Notes |
|---|---|---|
| 3 guides | High | Long, chaptered, FAQ, India-specific. Add named author, dates and sources |
| Pricing page | High | Concrete ₹ figures answer "how much does SEO cost in India" |
| Service pages | Medium | Good FAQs; claims lack sources |
| Homepage AI-mention widget | Negative | Self-referential "AI says we're great" quotes can be read as manipulation |

**Passage-level improvements**
- Open each service page with a 40–60 word **definition + who it's for + price from** paragraph (the "answer capsule"). LLMs lift this verbatim.
- Add comparison tables (e.g. "GEO vs SEO vs AEO", "n8n vs Zapier vs Make"). Tables are cited disproportionately often.
- Add original statistics with methodology ("Across 47 client accounts in FY25-26, median Meta CPL was ₹112"). Original data is the strongest citation magnet.
- Put a "Last updated: <date>" line visibly on every service page.

## 5. AEO (featured snippets / PAA) — 6/10
- 58 pages have FAQPage. Questions are well-phrased ("Which is the best digital marketing agency in Bhopal?").
- Self-promotional answers ("Click Decoded is one of Bhopal's most trusted…") rarely win snippets. Write neutral, helpful answers first and mention the brand second.
- Add `How much does…`, `How long does…` and `What is the difference…` Q&As with concrete numbers.

## 6. Monitoring plan
Track 20 prompts monthly across ChatGPT (search on), Gemini, Perplexity, Copilot and Google AI Overviews:

| Cluster | Example prompts |
|---|---|
| Local | best digital marketing agency in Bhopal · SEO company Indore |
| Service | white label SEO provider India · WhatsApp automation agency India · n8n automation agency India |
| GEO | GEO agency India · how to get my brand cited in ChatGPT |
| Pricing | SEO cost India 2026 · digital marketing retainer price India |

Log: mentioned (Y/N), position, URL cited, competing brands. Target: brand mentioned in ≥5/20 prompts within 90 days.

## Score breakdown
| Factor | Score |
|---|---|
| Crawler access | 8/10 |
| llms.txt / discovery files | 0/10 |
| Entity clarity & sameAs | 3/10 |
| Content citability | 6/10 |
| Brand mentions off-site | 1/10 |
| Structured answers (AEO) | 6/10 |
| Fact consistency | 3/10 |
| **Weighted total** (crawler access and citability count double) | **(16+0+3+12+1+6+3)/90 ≈ 45/100** |
