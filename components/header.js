/* components/header.js — Click Decoded shared nav v5
   Services mega menu: 6 columns (SEO | Paid Ads | AI & Auto | Content | Web & Design | GEO/AI)
   Separate: Industries | White Label | Company
   v5: self-contained JS init (hamburger, close, accordion, scroll shadow)
*/
(function(){
  var CAR = '<svg class="dcar" viewBox="0 0 10 10" fill="none"><path d="M2 3.5l3 3 3-3" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var H = '<div id="cd-sticky-shell" style="position:sticky;top:0;z-index:200;">'
    + '<div class="topbar">'
    +   '<div class="topbar-inner">'
    +     '<div class="topbar-left">'
    +       '<a href="tel:+919407000101" class="topbar-item">📞 +91 94070 00101</a>'
    +       '<a href="mailto:hello@clickdecoded.com" class="topbar-item">✉ hello@clickdecoded.com</a>'
    +     '</div>'
    +     '<div class="topbar-right">'
    +       '<a href="tel:+919407000101" class="tb-btn tb-call">📞 Call Now</a>'
    +       '<a href="https://wa.me/919407000101" target="_blank" rel="noopener" class="tb-btn tb-wa">💬 WhatsApp</a>'
    +     '</div>'
    +   '</div>'
    + '</div>'
    + '<header id="hdr">'
    +   '<div class="wrap nav">'
    +     '<a href="index.html" style="flex-shrink:0;"><img src="clickdecoded.png" alt="Click Decoded" style="height:44px;width:auto;"></a>'
    +     '<ul class="dmenu">'
    +       '<li><a href="index.html">Home</a></li>'
    +       '<li>'
    +         '<a href="#">Services ' + CAR + '</a>'
    +         '<div class="mega wide mega-services">'
    +           '<div class="mc"><h5>🔍 SEO</h5>'
    +             '<a href="seo-services.html">SEO Services</a>'
    +             '<a href="local-seo.html">Local SEO</a>'
    +             '<a href="technical-seo-audit.html">Technical SEO Audit</a>'
    +             '<a href="ecommerce-seo.html">E-Commerce SEO</a>'
    +             '<a href="link-building.html">Link Building</a>'
    +             '<a href="programmatic-seo.html">Programmatic SEO</a>'
    +             '<a href="gmb-marketing.html">Google My Business</a>'
    +           '</div>'
    +           '<div class="mc"><h5>💰 Paid Ads</h5>'
    +             '<a href="google-ads.html">Google Ads</a>'
    +             '<a href="meta-ads.html">Meta Ads (FB + IG)</a>'
    +             '<a href="youtube-ads.html">YouTube Ads</a>'
    +             '<a href="linkedin-ads.html">LinkedIn Ads</a>'
    +             '<a href="shopping-ads.html">Shopping Ads</a>'
    +             '<a href="retargeting.html">Retargeting</a>'
    +           '</div>'
    +           '<div class="mc"><h5>🤖 AI &amp; Auto</h5>'
    +             '<a href="ai-automation.html">AI Automation</a>'
    +             '<a href="whatsapp-automation.html">WhatsApp Automation</a>'
    +             '<a href="workflow-automation.html">n8n Workflows</a>'
    +             '<a href="ai-chatbot-development.html">AI Chatbot Dev</a>'
    +             '<a href="ai-ad-creatives.html">AI Ad Creatives</a>'
    +             '<a href="ai-content.html">AI Content Gen</a>'
    +           '</div>'
    +           '<div class="mc"><h5>🎬 Content</h5>'
    +             '<a href="virtual-tour.html">Virtual Tour</a>'
    +             '<a href="hd-photography.html">HD Photography</a>'
    +             '<a href="product-photography.html">Product Photography</a>'
    +             '<a href="drone-video.html">Drone Video</a>'
    +             '<a href="influencer-video.html">Influencer Video</a>'
    +             '<a href="email-marketing.html">Email Marketing</a>'
    +             '<a href="whatsapp-marketing.html">WhatsApp Marketing</a>'
    +             '<a href="blogging.html">Blogging &amp; Content</a>'
    +           '</div>'
    +           '<div class="mc"><h5>💻 Web &amp; Design</h5>'
    +             '<a href="web-development.html">Web Development</a>'
    +             '<a href="wordpress-development.html">WordPress Dev</a>'
    +             '<a href="ecommerce-development.html">E-Commerce Dev</a>'
    +             '<a href="landing-pages.html">Landing Pages</a>'
    +             '<a href="ui-ux.html">UI/UX Design</a>'
    +           '</div>'
    +           '<div class="mc"><h5>🚀 GEO / AI</h5>'
    +             '<a href="generative-engine-optimization.html">GEO Services</a>'
    +             '<a href="answer-engine-optimization.html">Answer Engine Opt</a>'
    +             '<a href="ai-search-optimization.html">LLM Optimization</a>'
    +             '<a href="ai-brand-visibility.html">AI Brand Visibility</a>'
    +           '</div>'
    +         '</div>'
    +       '</li>'
    +       '<li>'
    +         '<a href="#">Industries ' + CAR + '</a>'
    +         '<div class="mega slim">'
    +           '<a href="industry-real-estate.html">Real Estate &amp; Builders<small>Property, developers &amp; brokers</small></a>'
    +           '<a href="industry-healthcare.html">Healthcare &amp; Clinics<small>Hospitals, doctors &amp; wellness</small></a>'
    +           '<a href="industry-education.html">Education &amp; EdTech<small>Coaching, schools &amp; courses</small></a>'
    +           '<a href="industry-ecommerce.html">E-Commerce &amp; Retail<small>Online stores &amp; D2C brands</small></a>'
    +           '<a href="industry-manufacturing.html">Manufacturing &amp; Industrial<small>B2B &amp; factory businesses</small></a>'
    +           '<a href="industry-it-saas.html">IT Services &amp; SaaS<small>Tech companies &amp; startups</small></a>'
    +           '<a href="industry-legal.html">Legal &amp; CA Firms<small>Lawyers, CAs &amp; consultants</small></a>'
    +           '<a href="industry-hospitality.html">Hospitality &amp; Travel<small>Hotels, resorts &amp; agencies</small></a>'
    +         '</div>'
    +       '</li>'
    +       '<li>'
    +         '<a href="#">White Label ' + CAR + '</a>'
    +         '<div class="mega slim">'
    +           '<a href="whitelabel-seo.html">White Label SEO<small>Full SEO under your brand</small></a>'
    +           '<a href="whitelabel-ppc.html">White Label PPC<small>Google &amp; Meta Ads reseller</small></a>'
    +           '<a href="whitelabel-web-development.html">White Label Web Dev<small>WordPress &amp; WooCommerce</small></a>'
    +           '<a href="whitelabel-geo.html">White Label GEO<small>AI-search visibility, resold</small></a>'
    +           '<a href="whitelabel-reporting.html">White Label Reporting<small>Branded client reports</small></a>'
    +           '<a href="whitelabel-ai.html">White Label AI &amp; Auto<small>n8n, chatbots &amp; workflows</small></a>'
    +         '</div>'
    +       '</li>'
    +       '<li>'
    +         '<a href="#">Company ' + CAR + '</a>'
    +         '<div class="mega slim">'
    +           '<a href="about.html">About Us<small>Team, story &amp; mission</small></a>'
    +           '<a href="honest.html">The Honest Page<small>No pitch. Just the plain truth.</small></a>'
    +           '<a href="how-we-work.html">How We Work<small>Our process, step by step</small></a>'
    +           '<a href="blog.html">Blog &amp; Insights<small>SEO, AI &amp; growth guides</small></a>'
    +           '<a href="pricing.html">Pricing &amp; How We Engage<small>Transparent quotes</small></a>'
    +           '<a href="careers.html">Careers<small>Join India\'s AI-first agency</small></a>'
    +           '<a href="contact.html">Contact Us<small>Start a project conversation</small></a>'
    +         '</div>'
    +       '</li>'
    +     '</ul>'
    +     '<div class="navcta">'
    +       '<a href="contact.html" class="btn btn-o btn-sm">🚀 Get Free Strategy Call</a>'
    +       '<button class="hb" id="hb" aria-label="Open menu"><span></span><span></span><span></span></button>'
    +     '</div>'
    +   '</div>'
    + '</header>'
    + '</div>'
    + '<div class="mnav" id="mnav">'
    +   '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;">'
    +     '<a href="index.html"><img src="clickdecoded.png" alt="Click Decoded" style="height:36px;width:auto;"></a>'
    +     '<button id="mnav-close" style="background:none;border:none;font-size:24px;cursor:pointer;color:#2A4573;" aria-label="Close menu">✕</button>'
    +   '</div>'
    +   '<div class="ma"><a href="index.html" style="display:block;padding:15px 0;font-size:15px;font-weight:600;color:var(--n);">Home</a></div>'
    +   '<div class="ma"><button>Services <span>+</span></button><div class="ms">'
    +     '<h6>🔍 SEO</h6>'
    +     '<a href="seo-services.html">SEO Services</a>'
    +     '<a href="local-seo.html">Local SEO</a>'
    +     '<a href="technical-seo-audit.html">Technical SEO Audit</a>'
    +     '<a href="ecommerce-seo.html">E-Commerce SEO</a>'
    +     '<a href="link-building.html">Link Building</a>'
    +     '<a href="programmatic-seo.html">Programmatic SEO</a>'
    +     '<a href="gmb-marketing.html">Google My Business</a>'
    +     '<h6>💰 Paid Ads</h6>'
    +     '<a href="google-ads.html">Google Ads</a>'
    +     '<a href="meta-ads.html">Meta Ads (FB + IG)</a>'
    +     '<a href="youtube-ads.html">YouTube Ads</a>'
    +     '<a href="linkedin-ads.html">LinkedIn Ads</a>'
    +     '<a href="shopping-ads.html">Shopping Ads</a>'
    +     '<a href="retargeting.html">Retargeting</a>'
    +     '<h6>🤖 AI &amp; Automation</h6>'
    +     '<a href="ai-automation.html">AI Automation</a>'
    +     '<a href="whatsapp-automation.html">WhatsApp Automation</a>'
    +     '<a href="workflow-automation.html">n8n Workflows</a>'
    +     '<a href="ai-chatbot-development.html">AI Chatbot Dev</a>'
    +     '<a href="ai-ad-creatives.html">AI Ad Creatives</a>'
    +     '<a href="ai-content.html">AI Content Gen</a>'
    +     '<h6>🎬 Content</h6>'
    +     '<a href="virtual-tour.html">Virtual Tour</a>'
    +     '<a href="hd-photography.html">HD Photography</a>'
    +     '<a href="drone-video.html">Drone Video</a>'
    +     '<a href="influencer-video.html">Influencer Video</a>'
    +     '<a href="email-marketing.html">Email Marketing</a>'
    +     '<a href="whatsapp-marketing.html">WhatsApp Marketing</a>'
    +     '<a href="blogging.html">Blogging &amp; Content</a>'
    +     '<h6>💻 Web &amp; Design</h6>'
    +     '<a href="web-development.html">Web Development</a>'
    +     '<a href="wordpress-development.html">WordPress Dev</a>'
    +     '<a href="ecommerce-development.html">E-Commerce Dev</a>'
    +     '<a href="landing-pages.html">Landing Pages</a>'
    +     '<a href="ui-ux.html">UI/UX Design</a>'
    +     '<h6>🚀 GEO / AI Search</h6>'
    +     '<a href="generative-engine-optimization.html">GEO Services</a>'
    +     '<a href="answer-engine-optimization.html">Answer Engine Opt</a>'
    +     '<a href="ai-search-optimization.html">LLM Optimization</a>'
    +     '<a href="ai-brand-visibility.html">AI Brand Visibility</a>'
    +   '</div></div>'
    +   '<div class="ma"><button>Industries <span>+</span></button><div class="ms">'
    +     '<a href="industry-real-estate.html">Real Estate &amp; Builders</a>'
    +     '<a href="industry-healthcare.html">Healthcare &amp; Clinics</a>'
    +     '<a href="industry-education.html">Education &amp; EdTech</a>'
    +     '<a href="industry-ecommerce.html">E-Commerce &amp; Retail</a>'
    +     '<a href="industry-manufacturing.html">Manufacturing &amp; Industrial</a>'
    +     '<a href="industry-it-saas.html">IT Services &amp; SaaS</a>'
    +     '<a href="industry-legal.html">Legal &amp; CA Firms</a>'
    +     '<a href="industry-hospitality.html">Hospitality &amp; Travel</a>'
    +   '</div></div>'
    +   '<div class="ma"><button>White Label <span>+</span></button><div class="ms">'
    +     '<a href="whitelabel-seo.html">White Label SEO</a>'
    +     '<a href="whitelabel-ppc.html">White Label PPC</a>'
    +     '<a href="whitelabel-web-development.html">White Label Web Dev</a>'
    +     '<a href="whitelabel-geo.html">White Label GEO</a>'
    +     '<a href="whitelabel-reporting.html">White Label Reporting</a>'
    +     '<a href="whitelabel-ai.html">White Label AI &amp; Auto</a>'
    +   '</div></div>'
    +   '<div class="ma"><button>Company <span>+</span></button><div class="ms">'
    +     '<a href="about.html">About Us</a>'
    +     '<a href="honest.html">The Honest Page</a>'
    +     '<a href="how-we-work.html">How We Work</a>'
    +     '<a href="blog.html">Blog &amp; Insights</a>'
    +     '<a href="pricing.html">Pricing</a>'
    +     '<a href="careers.html">Careers</a>'
    +     '<a href="contact.html">Contact Us</a>'
    +   '</div></div>'
    +   '<div style="margin-top:22px;display:flex;flex-direction:column;gap:10px;">'
    +     '<a href="contact.html" class="btn btn-o" style="width:100%;justify-content:center;display:flex;">🚀 Get Free Strategy Call</a>'
    +     '<div style="display:flex;gap:10px;">'
    +       '<a href="tel:+919407000101" class="btn" style="flex:1;justify-content:center;background:#f1f5f9;color:#2A4573;font-size:13px;padding:11px 16px;">📞 Call Now</a>'
    +       '<a href="https://wa.me/919407000101" target="_blank" rel="noopener" class="btn btn-wa" style="flex:1;justify-content:center;font-size:13px;padding:11px 16px;">💬 WhatsApp</a>'
    +     '</div>'
    +   '</div>'
    + '</div>';

  // Inject HTML
  var el = document.getElementById('cd-header');
  if (el) el.outerHTML = H;

  // ── Mobile CSS overrides ───────────────────────────────────
  var s = document.createElement('style');
  s.textContent = [
    /* Prevent horizontal scroll on all pages */
    'html{overflow-x:clip;}body{overflow-x:clip;max-width:100%;position:relative;}',
    /* Mobile nav — must sit above sticky shell (z-index:200) */
    '.mnav{position:fixed !important;inset:0 !important;z-index:9999 !important;}',
    '.mega-services{width:1100px !important;grid-template-columns:repeat(6,1fr) !important;gap:18px !important;}',
    '@media(max-width:1200px){.mega-services{width:calc(100vw - 40px) !important;left:20px !important;transform:none !important;}}',
    '@media(max-width:960px){.hb{display:flex !important;}.dmenu,.navcta .btn-o{display:none !important;}.mega{display:none !important;}}',
    '@media(max-width:768px){.topbar-inner{padding:0 16px;}.topbar-left .topbar-item:last-child{display:none;}.topbar-left a{font-size:11px;}.tb-btn{font-size:10.5px;padding:4px 9px;gap:4px;}}',
    '@media(max-width:560px){.topbar-left{display:none;}.topbar-inner{justify-content:flex-end;}.topbar{height:36px;}}',
    '@media(max-width:400px){.topbar{height:34px;}.tb-btn{font-size:10px;padding:4px 8px;}}'
  ].join('');
  document.head.appendChild(s);

  // ── JS: Nav interactions (self-contained) ─────────────────
  function initNav() {
    // Scroll shadow
    var hdr = document.getElementById('hdr');
    if (hdr) {
      window.addEventListener('scroll', function() {
        hdr.classList.toggle('up', window.scrollY > 40);
      }, { passive: true });
    }

    // Hamburger open
    var hb  = document.getElementById('hb');
    var mn  = document.getElementById('mnav');
    var mc  = document.getElementById('mnav-close');

    if (hb && mn) {
      hb.addEventListener('click', function() {
        // Move to body root to escape sticky-shell stacking context
        if (mn.parentNode !== document.body) document.body.appendChild(mn);
        mn.classList.add('on');
        document.body.style.overflow = 'hidden';
      });
    }
    if (mc && mn) {
      mc.addEventListener('click', function() {
        mn.classList.remove('on');
        document.body.style.overflow = '';
      });
    }
    // Tap outside to close
    if (mn) {
      mn.addEventListener('click', function(e) {
        if (e.target === mn) {
          mn.classList.remove('on');
          document.body.style.overflow = '';
        }
      });
    }

    // Mobile accordion
    document.querySelectorAll('.ma > button').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var p = btn.parentElement;
        var open = p.classList.contains('on');
        document.querySelectorAll('.ma').forEach(function(x) { x.classList.remove('on'); });
        if (!open) p.classList.add('on');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }

})();
