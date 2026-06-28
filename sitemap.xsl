<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:si="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sm si">

<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

<xsl:template match="/">
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>XML Sitemap — Click Decoded</title>
  <style>
    :root {
      --n:    #2A4573;
      --n2:   #1e3460;
      --dark: #0f1e38;
      --o:    #EE7E1A;
      --bg:   #F4F7FC;
      --bdr:  #E2E8F0;
      --m:    #475569;
      --s:    #64748b;
      --w:    #fff;
    }
    * { margin:0; padding:0; box-sizing:border-box; }
    body {
      font-family: -apple-system, 'Inter', system-ui, sans-serif;
      background: var(--bg);
      color: #1E293B;
      -webkit-font-smoothing: antialiased;
    }

    /* ── Top bar ── */
    .topbar {
      background: var(--dark);
      padding: 0 40px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .topbar-brand {
      display: flex;
      align-items: center;
      gap: 10px;
      color: #fff;
      font-weight: 800;
      font-size: 15px;
      letter-spacing: -.02em;
    }
    .topbar-brand span { color: var(--o); }
    .topbar-link {
      font-size: 12px;
      color: rgba(255,255,255,.55);
      text-decoration: none;
    }
    .topbar-link:hover { color: var(--o); }

    /* ── Hero banner ── */
    .hero {
      background: linear-gradient(135deg, var(--n) 0%, #162d52 60%, var(--dark) 100%);
      padding: 48px 40px 40px;
      position: relative;
      overflow: hidden;
    }
    .hero::before {
      content: '';
      position: absolute;
      width: 400px; height: 400px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(238,126,26,.15), transparent 65%);
      top: -100px; right: -80px;
    }
    .hero::after {
      content: '';
      position: absolute;
      width: 300px; height: 300px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(99,102,241,.1), transparent 65%);
      bottom: -80px; left: 10%;
    }
    .hero-inner { position: relative; z-index: 1; max-width: 1100px; margin: 0 auto; }
    .hero-tag {
      display: inline-flex; align-items: center; gap: 6px;
      background: rgba(238,126,26,.15);
      border: 1px solid rgba(238,126,26,.25);
      color: var(--o);
      padding: 4px 12px; border-radius: 99px;
      font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: .1em;
      margin-bottom: 14px;
    }
    .hero h1 {
      font-size: 32px; font-weight: 900; color: #fff;
      letter-spacing: -.03em; line-height: 1.1;
      margin-bottom: 8px;
    }
    .hero h1 em { color: var(--o); font-style: normal; }
    .hero p { color: rgba(255,255,255,.5); font-size: 13.5px; margin-bottom: 24px; }
    .stats-bar {
      display: flex; gap: 0;
      background: rgba(255,255,255,.06);
      border: 1px solid rgba(255,255,255,.1);
      border-radius: 14px;
      overflow: hidden;
      width: fit-content;
    }
    .stat {
      padding: 14px 28px;
      border-right: 1px solid rgba(255,255,255,.1);
      text-align: center;
    }
    .stat:last-child { border-right: none; }
    .stat-n { font-size: 22px; font-weight: 900; color: var(--o); }
    .stat-l { font-size: 11px; color: rgba(255,255,255,.4); text-transform: uppercase; letter-spacing: .08em; margin-top: 2px; }

    /* ── Main content ── */
    .wrap { max-width: 1100px; margin: 0 auto; padding: 40px 40px; }

    /* ── Sitemap index cards (for sitemap index) ── */
    .index-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 16px;
      margin-top: 0;
    }
    .index-card {
      background: var(--w);
      border: 1px solid var(--bdr);
      border-radius: 16px;
      padding: 22px 24px;
      transition: box-shadow .18s, border-color .18s;
      position: relative;
      overflow: hidden;
    }
    .index-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--n), var(--o));
    }
    .index-card:hover { box-shadow: 0 8px 32px rgba(42,69,115,.12); border-color: rgba(42,69,115,.2); }
    .ic-icon { font-size: 26px; margin-bottom: 10px; }
    .ic-name { font-size: 15px; font-weight: 800; color: var(--n); margin-bottom: 4px; }
    .ic-url  { font-size: 11.5px; color: var(--s); word-break: break-all; margin-bottom: 10px; }
    .ic-url a { color: var(--n); text-decoration: none; }
    .ic-url a:hover { color: var(--o); }
    .ic-meta { font-size: 11px; color: var(--s); display: flex; gap: 12px; }
    .ic-date { color: var(--m); }
    .ic-arrow {
      position: absolute; top: 20px; right: 20px;
      width: 28px; height: 28px; border-radius: 50%;
      background: var(--bg);
      display: flex; align-items: center; justify-content: center;
      color: var(--n); font-size: 12px; text-decoration: none;
    }
    .ic-arrow:hover { background: var(--o); color: #fff; }

    /* ── URL table (for child sitemaps) ── */
    .section-head {
      display: flex; align-items: center; justify-content: space-between;
      margin-bottom: 16px;
    }
    .section-title {
      font-size: 17px; font-weight: 800; color: var(--n);
      display: flex; align-items: center; gap: 8px;
    }
    .count-badge {
      background: rgba(42,69,115,.1); color: var(--n);
      padding: 3px 10px; border-radius: 99px;
      font-size: 11px; font-weight: 700;
    }
    .url-table {
      width: 100%; border-collapse: separate; border-spacing: 0;
      background: var(--w);
      border: 1px solid var(--bdr);
      border-radius: 16px;
      overflow: hidden;
      font-size: 13px;
    }
    .url-table thead tr {
      background: linear-gradient(90deg, var(--n), #1e3460);
    }
    .url-table thead th {
      padding: 13px 18px;
      text-align: left;
      font-size: 10.5px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .08em;
      color: rgba(255,255,255,.7);
      border-bottom: 1px solid rgba(255,255,255,.1);
    }
    .url-table tbody tr { transition: background .12s; }
    .url-table tbody tr:hover { background: rgba(42,69,115,.03); }
    .url-table tbody tr:nth-child(even) { background: rgba(244,247,252,.6); }
    .url-table tbody tr:nth-child(even):hover { background: rgba(42,69,115,.04); }
    .url-table td {
      padding: 12px 18px;
      border-bottom: 1px solid var(--bdr);
      vertical-align: middle;
    }
    .url-table tbody tr:last-child td { border-bottom: none; }
    .url-link {
      color: var(--n); text-decoration: none;
      font-weight: 500; font-size: 13px;
      display: flex; align-items: center; gap: 6px;
    }
    .url-link:hover { color: var(--o); }
    .url-link::before {
      content: "🔗";
      font-size: 11px;
      opacity: .5;
    }
    .td-date { color: var(--s); font-size: 12px; white-space: nowrap; }
    .freq-badge {
      display: inline-flex; align-items: center; gap: 4px;
      padding: 3px 10px; border-radius: 99px;
      font-size: 10.5px; font-weight: 700;
    }
    .freq-daily    { background: rgba(16,185,129,.1);  color: #059669; }
    .freq-weekly   { background: rgba(99,102,241,.1);  color: #4f46e5; }
    .freq-monthly  { background: rgba(238,126,26,.1);  color: var(--o); }
    .freq-yearly   { background: rgba(100,116,139,.1); color: var(--s); }
    .prio-bar-wrap { display: flex; align-items: center; gap: 8px; }
    .prio-bar {
      height: 6px; border-radius: 3px;
      background: linear-gradient(90deg, var(--o), #f59e0b);
    }
    .prio-num { font-size: 11px; font-weight: 700; color: var(--m); min-width: 28px; }

    /* ── Footer ── */
    .page-footer {
      background: var(--dark);
      padding: 20px 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 40px;
    }
    .pf-text { font-size: 12px; color: rgba(255,255,255,.3); }
    .pf-text a { color: var(--o); text-decoration: none; }

    @media(max-width:700px) {
      .hero { padding: 32px 20px; }
      .wrap { padding: 24px 16px; }
      .stats-bar { flex-wrap: wrap; }
      .url-table thead th:nth-child(3),
      .url-table td:nth-child(3) { display: none; }
    }
  </style>
</head>
<body>

<!-- Top bar -->
<div class="topbar">
  <div class="topbar-brand">
    ⚡ CLICK <span>DECODED</span>
  </div>
  <a class="topbar-link" href="https://clickdecoded.com">↗ clickdecoded.com</a>
</div>

<!-- Hero -->
<div class="hero">
  <div class="hero-inner">
    <div class="hero-tag">📄 XML Sitemap</div>
    <h1>Site Structure — <em>Click Decoded</em></h1>
    <p>Machine-readable sitemap for search engine crawlers. Last updated: <xsl:value-of select="substring((/sm:sitemapindex/sm:sitemap/sm:lastmod | /sm:urlset/sm:url/sm:lastmod)[1], 1, 10)"/></p>

    <!-- Stats for sitemap index -->
    <xsl:if test="sm:sitemapindex">
      <div class="stats-bar">
        <div class="stat">
          <div class="stat-n"><xsl:value-of select="count(sm:sitemapindex/sm:sitemap)"/></div>
          <div class="stat-l">Sitemap Files</div>
        </div>
        <div class="stat">
          <div class="stat-n">96+</div>
          <div class="stat-l">Total URLs</div>
        </div>
        <div class="stat">
          <div class="stat-n">6</div>
          <div class="stat-l">Categories</div>
        </div>
      </div>
    </xsl:if>

    <!-- Stats for url sets -->
    <xsl:if test="sm:urlset">
      <div class="stats-bar">
        <div class="stat">
          <div class="stat-n"><xsl:value-of select="count(sm:urlset/sm:url)"/></div>
          <div class="stat-l">URLs Indexed</div>
        </div>
        <div class="stat">
          <div class="stat-n"><xsl:value-of select="substring(sm:urlset/sm:url[1]/sm:lastmod, 1, 10)"/></div>
          <div class="stat-l">Last Modified</div>
        </div>
      </div>
    </xsl:if>
  </div>
</div>

<div class="wrap">

  <!-- ── Sitemap Index View ── -->
  <xsl:if test="sm:sitemapindex">
    <div class="section-head">
      <div class="section-title">
        🗂 Sitemap Index
        <span class="count-badge"><xsl:value-of select="count(sm:sitemapindex/sm:sitemap)"/> files</span>
      </div>
    </div>
    <div class="index-grid">
      <xsl:for-each select="sm:sitemapindex/sm:sitemap">
        <xsl:variable name="loc" select="sm:loc"/>
        <xsl:variable name="name" select="substring-before(substring-after($loc, 'clickdecoded.com/'), '.xml')"/>
        <div class="index-card">
          <xsl:choose>
            <xsl:when test="contains($name,'core')">        <div class="ic-icon">🏠</div> </xsl:when>
            <xsl:when test="contains($name,'services')">    <div class="ic-icon">⚙️</div> </xsl:when>
            <xsl:when test="contains($name,'location')">    <div class="ic-icon">📍</div> </xsl:when>
            <xsl:when test="contains($name,'industr')">     <div class="ic-icon">🏭</div> </xsl:when>
            <xsl:when test="contains($name,'whitelabel')">  <div class="ic-icon">🤝</div> </xsl:when>
            <xsl:when test="contains($name,'blog')">        <div class="ic-icon">✍️</div> </xsl:when>
            <xsl:otherwise>                                 <div class="ic-icon">📄</div> </xsl:otherwise>
          </xsl:choose>
          <div class="ic-name">
            <xsl:choose>
              <xsl:when test="contains($name,'core')">Core Pages</xsl:when>
              <xsl:when test="contains($name,'services')">Services</xsl:when>
              <xsl:when test="contains($name,'location')">Location Pages</xsl:when>
              <xsl:when test="contains($name,'industr')">Industries</xsl:when>
              <xsl:when test="contains($name,'whitelabel')">White Label</xsl:when>
              <xsl:when test="contains($name,'blog')">Blog</xsl:when>
              <xsl:otherwise><xsl:value-of select="$name"/></xsl:otherwise>
            </xsl:choose>
          </div>
          <div class="ic-url"><a href="{$loc}"><xsl:value-of select="$loc"/></a></div>
          <div class="ic-meta">
            <span class="ic-date">Updated: <xsl:value-of select="substring(sm:lastmod,1,10)"/></span>
          </div>
          <a class="ic-arrow" href="{$loc}">↗</a>
        </div>
      </xsl:for-each>
    </div>
  </xsl:if>

  <!-- ── URL Set View ── -->
  <xsl:if test="sm:urlset">
    <div class="section-head">
      <div class="section-title">
        🔗 Indexed URLs
        <span class="count-badge"><xsl:value-of select="count(sm:urlset/sm:url)"/> pages</span>
      </div>
      <a href="/sitemap.xml" style="font-size:12px;color:var(--n);text-decoration:none;">← Back to Sitemap Index</a>
    </div>
    <table class="url-table">
      <thead>
        <tr>
          <th>#</th>
          <th>URL</th>
          <th>Last Modified</th>
          <th>Change Freq</th>
          <th>Priority</th>
        </tr>
      </thead>
      <tbody>
        <xsl:for-each select="sm:urlset/sm:url">
          <tr>
            <td style="color:var(--s);font-size:11px;width:40px;"><xsl:value-of select="position()"/></td>
            <td>
              <a class="url-link" href="{sm:loc}"><xsl:value-of select="sm:loc"/></a>
            </td>
            <td class="td-date"><xsl:value-of select="substring(sm:lastmod,1,10)"/></td>
            <td>
              <span>
                <xsl:attribute name="class">
                  freq-badge
                  <xsl:choose>
                    <xsl:when test="sm:changefreq='daily'">freq-daily</xsl:when>
                    <xsl:when test="sm:changefreq='weekly'">freq-weekly</xsl:when>
                    <xsl:when test="sm:changefreq='monthly'">freq-monthly</xsl:when>
                    <xsl:otherwise>freq-yearly</xsl:otherwise>
                  </xsl:choose>
                </xsl:attribute>
                <xsl:value-of select="sm:changefreq"/>
              </span>
            </td>
            <td>
              <div class="prio-bar-wrap">
                <div class="prio-bar">
                  <xsl:attribute name="style">width:<xsl:value-of select="number(sm:priority)*60"/>px</xsl:attribute>
                </div>
                <span class="prio-num"><xsl:value-of select="sm:priority"/></span>
              </div>
            </td>
          </tr>
        </xsl:for-each>
      </tbody>
    </table>
  </xsl:if>

</div>

<!-- Footer -->
<div class="page-footer">
  <div class="pf-text">
    © 2026 <a href="https://clickdecoded.com">Click Decoded</a> (Aharnish Infotech Pvt. Ltd.) — Bhopal, India
  </div>
  <div class="pf-text">Submit to Search Console: <a href="https://search.google.com/search-console">Google</a> · <a href="https://www.bing.com/webmasters">Bing</a></div>
</div>

</body>
</html>
</xsl:template>
</xsl:stylesheet>