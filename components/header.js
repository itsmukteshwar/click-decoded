/* components/header.js — Click Decoded shared nav
   Edit this ONE file to update the header on every page.
   Include with: <div id="cd-header"></div>
                 <script src="components/header.js"></script>
*/
(function(){
  const H = `
<div id="cd-sticky-shell" style="position:sticky;top:0;z-index:200;">
<div class="topbar">
  <div class="topbar-inner">
    <div class="topbar-left">
      <a href="tel:+919407000101" class="topbar-item">📞 +91 94070 00101</a>
      <a href="mailto:hello@clickdecoded.com" class="topbar-item">✉ hello@clickdecoded.com</a>
    </div>
    <div class="topbar-right">
      <a href="tel:+919407000101" class="tb-btn tb-call">📞 Call Now</a>
      <a href="https://wa.me/919407000101" target="_blank" rel="noopener" class="tb-btn tb-wa">💬 WhatsApp</a>
    </div>
  </div>
</div>

<header id="hdr">
  <div class="wrap nav">
    <a href="index.html"><img src="clickdecoded.png" alt="Click Decoded" style="height:44px;width:auto;"></a>
    <ul class="dmenu">
      <li><a href="index.html">Home</a></li>
      <li>
        <a href="#">Services <svg class="dcar" viewBox="0 0 10 10" fill="none"><path d="M2 3.5l3 3 3-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <div class="mega wide">
          <div class="mc">
            <h5>🔍 SEO Services</h5>
            <a href="seo-services.html">SEO Services</a>
            <a href="local-seo.html">Local SEO</a>
            <a href="technical-seo-audit.html">Technical SEO Audit</a>
            <a href="link-building.html">Link Building</a>
            <a href="ecommerce-seo.html">E-Commerce SEO</a>
          </div>
          <div class="mc">
            <h5>📢 Digital Marketing</h5>
            <a href="google-ads.html">Google Ads</a>
            <a href="meta-ads.html">Meta Ads</a>
            <a href="#">Social Media</a>
            <a href="#">Content Marketing</a>
          </div>
          <div class="mc">
            <h5>💻 Web Development</h5>
            <a href="web-development.html">Web Development</a>
            <a href="wordpress-dev.html">WordPress Dev</a>
            <a href="ecommerce-dev.html">E-Commerce Dev</a>
            <a href="landing-pages.html">Landing Pages</a>
          </div>
          <div class="mc">
            <h5>🤖 AI &amp; Automation</h5>
            <a href="ai-automation.html">AI Automation</a>
            <a href="whatsapp-automation.html">WhatsApp Automation</a>
            <a href="n8n-workflows.html">n8n Workflows</a>
            <a href="ai-chatbot-dev.html">AI Chatbot Dev</a>
          </div>
          <div class="mc">
            <h5>🚀 GEO / AI Search</h5>
            <a href="geo-services.html">GEO Services</a>
            <a href="answer-engine-optimization.html">Answer Engine Opt</a>
            <a href="llm-optimization.html">LLM Optimization</a>
            <a href="ai-brand-visibility.html">AI Brand Visibility</a>
          </div>
        </div>
      </li>
      <li>
        <a href="#">White Label <svg class="dcar" viewBox="0 0 10 10" fill="none"><path d="M2 3.5l3 3 3-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <div class="mega slim">
          <a href="whitelabel-seo.html">White Label SEO Services<small>Full SEO, resold under your brand</small></a>
          <a href="whitelabel-ppc.html">White Label PPC<small>Google &amp; Meta Ads reseller</small></a>
          <a href="whitelabel-webdev.html">White Label Web Dev<small>WordPress &amp; WooCommerce</small></a>
          <a href="whitelabel-geo.html">White Label GEO<small>AI-search visibility, resold</small></a>
          <a href="whitelabel-reporting.html">White Label Reporting<small>Branded client reports</small></a>
          <a href="whitelabel-ai.html">White Label AI &amp; Automation<small>n8n, chatbots &amp; workflows</small></a>
        </div>
      </li>
      <li>
        <a href="#">About <svg class="dcar" viewBox="0 0 10 10" fill="none"><path d="M2 3.5l3 3 3-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <div class="mega slim">
          <a href="about.html">Know About Us<small>The team, the story &amp; the mission</small></a>
          <a href="honest.html">The Honest Page<small>No pitch. Just the plain truth.</small></a>
          <a href="clients.html">Brands We've Worked With<small>Industries &amp; companies we've served</small></a>
          <a href="process.html">How We Work<small>Our process, step by step</small></a>
        </div>
      </li>
      <li>
        <a href="#">Contact <svg class="dcar" viewBox="0 0 10 10" fill="none"><path d="M2 3.5l3 3 3-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>
        <div class="mega slim">
          <a href="contact.html">Get in Touch<small>Start a project conversation</small></a>
          <a href="contact.html#free-call">Free Strategy Call<small>30 min, zero obligation</small></a>
          <a href="careers.html">Join Our Team<small>Work at India's AI-first agency</small></a>
          <a href="internship.html">Internship Program<small>Learn, build &amp; grow with us</small></a>
          <a href="whitelabel-seo.html">Become a Partner<small>White label &amp; referral tie-ups</small></a>
        </div>
      </li>
    </ul>
    <div class="navcta">
      <a href="contact.html" class="btn btn-o btn-sm">🚀 Get Free Strategy Call</a>
      <button class="hb" id="hb" aria-label="Open menu"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>
</div><!-- /cd-sticky-shell -->

<div class="mnav" id="mnav">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">
    <a href="index.html"><img src="clickdecoded.png" alt="Click Decoded" style="height:36px;width:auto;"></a>
    <button id="mnav-close" style="background:none;border:none;font-size:24px;cursor:pointer;color:#2A4573;" aria-label="Close menu">✕</button>
  </div>
  <div class="ma"><a href="index.html" style="display:block;padding:15px 0;font-size:15px;font-weight:600;color:var(--n);">Home</a></div>
  <div class="ma"><button>Services <span>+</span></button>
    <div class="ms">
      <h6>SEO</h6>
      <a href="seo-services.html">SEO Services</a>
      <a href="local-seo.html">Local SEO</a>
      <a href="technical-seo-audit.html">Technical SEO Audit</a>
      <a href="link-building.html">Link Building</a>
      <a href="ecommerce-seo.html">E-Commerce SEO</a>
      <h6>Digital Marketing</h6>
      <a href="google-ads.html">Google Ads</a>
      <a href="meta-ads.html">Meta Ads</a>
      <a href="#">Social Media</a>
      <h6>Web Development</h6>
      <a href="web-development.html">Web Development</a>
      <a href="wordpress-dev.html">WordPress Dev</a>
      <a href="ecommerce-dev.html">E-Commerce Dev</a>
      <a href="landing-pages.html">Landing Pages</a>
      <h6>AI &amp; Automation</h6>
      <a href="ai-automation.html">AI Automation</a>
      <a href="whatsapp-automation.html">WhatsApp Automation</a>
      <a href="n8n-workflows.html">n8n Workflows</a>
      <a href="ai-chatbot-dev.html">AI Chatbot Dev</a>
      <h6>GEO / AI Search</h6>
      <a href="geo-services.html">GEO Services</a>
      <a href="answer-engine-optimization.html">Answer Engine Opt</a>
      <a href="llm-optimization.html">LLM Optimization</a>
      <a href="ai-brand-visibility.html">AI Brand Visibility</a>
    </div>
  </div>
  <div class="ma"><button>White Label <span>+</span></button>
    <div class="ms">
      <a href="whitelabel-seo.html">White Label SEO Services</a>
      <a href="whitelabel-ppc.html">White Label PPC</a>
      <a href="whitelabel-webdev.html">White Label Web Dev</a>
      <a href="whitelabel-geo.html">White Label GEO</a>
      <a href="whitelabel-reporting.html">White Label Reporting</a>
      <a href="whitelabel-ai.html">White Label AI &amp; Automation</a>
    </div>
  </div>
  <div class="ma"><button>About <span>+</span></button>
    <div class="ms">
      <a href="about.html">Know About Us</a>
      <a href="honest.html">The Honest Page</a>
      <a href="clients.html">Brands We've Worked With</a>
      <a href="process.html">How We Work</a>
    </div>
  </div>
  <div class="ma"><button>Contact <span>+</span></button>
    <div class="ms">
      <a href="contact.html">Get in Touch</a>
      <a href="contact.html#free-call">Free Strategy Call</a>
      <a href="careers.html">Join Our Team</a>
      <a href="internship.html">Internship Program</a>
      <a href="whitelabel-seo.html">Become a Partner</a>
    </div>
  </div>
  <div style="margin-top:22px;display:flex;flex-direction:column;gap:10px;">
    <a href="contact.html" class="btn btn-o" style="width:100%;justify-content:center;display:flex;">🚀 Get Free Strategy Call</a>
    <div style="display:flex;gap:10px;">
      <a href="tel:+919407000101" class="btn" style="flex:1;justify-content:center;background:#f1f5f9;color:#2A4573;font-size:13px;padding:11px 16px;">📞 Call Now</a>
      <a href="https://wa.me/919407000101" target="_blank" rel="noopener" class="btn btn-wa" style="flex:1;justify-content:center;font-size:13px;padding:11px 16px;">💬 WhatsApp</a>
    </div>
  </div>
</div>
`;

  // Inject HTML
  const el = document.getElementById('cd-header');
  if (el) el.outerHTML = H;

  // Inject responsive topbar CSS (applies to every page via header.js)
  const mobileStyle = document.createElement('style');
  mobileStyle.textContent = `
    @media(max-width:768px){
      .topbar-inner{padding:0 16px;}
      .topbar-left .topbar-item:last-child{display:none;}
      .topbar-left a{font-size:11px;}
      .tb-btn{font-size:10.5px;padding:4px 9px;gap:4px;}
    }
    @media(max-width:560px){
      .topbar-left{display:none;}
      .topbar-inner{justify-content:flex-end;}
      .topbar{height:36px;}
    }
    @media(max-width:400px){
      .topbar{height:34px;}
      .tb-btn{font-size:10px;padding:4px 8px;gap:3px;}
    }
    @media(max-width:900px){
      .hb{display:flex;}
      .dmenu,.navcta .btn-o{display:none;}
    }
  `;
  document.head.appendChild(mobileStyle);

  // Active page highlight
  const page = (window.location.pathname.split('/').pop() || 'index.html');
  const activeLink = document.querySelector('#hdr a[href="' + page + '"]');
  if (activeLink) {
    activeLink.style.color = 'var(--o, #EE7E1A)';
    activeLink.style.fontWeight = '800';
  }

  // Sticky header
  const hdr = document.getElementById('hdr');
  if (hdr) {
    window.addEventListener('scroll', function() {
      hdr.classList.toggle('up', window.scrollY > 40);
    }, { passive: true });
  }

  // Mobile menu open/close
  const hb = document.getElementById('hb');
  const mn = document.getElementById('mnav');
  const mc = document.getElementById('mnav-close');
  function openMnav() { mn.classList.add('on'); document.body.style.overflow = 'hidden'; }
  function closeMnav() { mn.classList.remove('on'); document.body.style.overflow = ''; }
  if (hb) hb.addEventListener('click', openMnav);
  if (mc) mc.addEventListener('click', closeMnav);

  // Mobile accordion
  document.querySelectorAll('.ma > button').forEach(function(b) {
    b.addEventListener('click', function() {
      const item = b.parentElement;
      const isOpen = item.classList.contains('on');
      document.querySelectorAll('.ma').forEach(function(x) { x.classList.remove('on'); });
      if (!isOpen) item.classList.add('on');
    });
  });
})();
