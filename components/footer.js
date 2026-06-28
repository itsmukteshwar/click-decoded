/* components/footer.js — Click Decoded shared footer
   Edit this ONE file to update the footer on every page.
   Include with: <div id="cd-footer"></div>
                 <script src="components/footer.js"></script>
*/
(function(){
  const year = new Date().getFullYear();
  const F = `
<footer>
  <div class="wrap">
    <div class="footer-main">
      <div class="fg">
        <div>
          <a href="index.html"><img src="clickdecoded.png" alt="Click Decoded" style="height:38px;width:auto;filter:brightness(0) invert(1);"></a>
          <p class="fb-desc">India's trusted B2B growth partner for SEO, web development, Google Ads, Meta Ads, and AI automation. 12 years. 500+ projects.</p>
          <div class="socials">
            <a href="#" aria-label="LinkedIn" title="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" title="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" aria-label="X (Twitter)" title="X (Twitter)">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.73-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" title="YouTube">
              <svg width="18" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>
        <div>
          <h4>SEO &amp; Paid Ads</h4>
          <div class="fl">
            <a href="seo-services.html">SEO Services</a>
            <a href="local-seo.html">Local SEO</a>
            <a href="programmatic-seo.html">Programmatic SEO</a>
            <a href="google-ads.html">Google Ads</a>
            <a href="meta-ads.html">Meta Ads</a>
            <a href="youtube-ads.html">YouTube Ads</a>
            <a href="linkedin-ads.html">LinkedIn Ads</a>
            <a href="retargeting.html">Retargeting</a>
          </div>
        </div>
        <div>
          <h4>Web &amp; AI</h4>
          <div class="fl">
            <a href="web-development.html">Web Development</a>
            <a href="ecommerce-development.html">E-Commerce Dev</a>
            <a href="ui-ux.html">UI/UX Design</a>
            <a href="landing-pages.html">Landing Pages</a>
            <a href="ai-automation.html">AI Automation</a>
            <a href="whatsapp-automation.html">WhatsApp Auto</a>
            <a href="ai-chatbot-development.html">AI Chatbot Dev</a>
            <a href="ai-ad-creatives.html">AI Ad Creatives</a>
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <div class="fl">
            <a href="about.html">About Us</a>
            <a href="honest.html">The Honest Page</a>
            <a href="how-we-work.html">How We Work</a>
            <a href="blog.html">Blog &amp; Insights</a>
            <a href="pricing.html">Pricing</a>
            <a href="careers.html">Careers</a>
            <a href="sitemap.html">Sitemap</a>
          </div>
        </div>
        <div>
          <h4>Contact</h4>
          <div class="fc">
            <a href="mailto:hello@clickdecoded.com">&#128231; hello@clickdecoded.com</a>
            <a href="tel:+919407000101">&#128222; +91 94070 00101</a>
            <a href="#">&#128205; Bhopal, Madhya Pradesh</a>
          </div>
          <a href="https://wa.me/919407000101?text=Hi%20Click%20Decoded%2C%20I%27d%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener" class="footer-wa-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            Chat on WhatsApp
            <span style="margin-left:auto;font-size:10px;opacity:.65;">Usually replies in 5 min</span>
          </a>
        </div>
      </div>
    </div>
    <div class="footer-areas">
      <b>Areas:</b>
      <a href="service-areas.html#bhopal">Bhopal</a> &middot; <a href="service-areas.html#indore">Indore</a> &middot; <a href="service-areas.html#dewas">Dewas</a> &middot; <a href="service-areas.html#gwalior">Gwalior</a> &middot; <a href="service-areas.html#raipur">Raipur</a> &middot; <a href="service-areas.html#nagpur">Nagpur</a> &middot; <a href="service-areas.html#pune">Pune</a> &middot; <a href="service-areas.html#delhi-ncr">Delhi NCR</a> &middot; <a href="service-areas.html#mumbai">Mumbai</a> &middot; <a href="service-areas.html#bangalore">Bangalore</a>
    </div>
    <div class="footer-bottom">
      <div>&copy; ${year} Click Decoded. All rights reserved. &middot; <a href="privacy.html">Privacy Policy</a> &middot; <a href="terms.html">Terms &amp; Conditions</a> &middot; <a href="cookie-policy.html">Cookie Policy</a></div>
      <div>Click Decoded is a brand of Aharnish Infotech Pvt. Ltd. &copy; 2014&ndash;${year}</div>
    </div>
  </div>
</footer>
`;

  const el = document.getElementById('cd-footer');
  if (el) el.outerHTML = F;

  // Inject footer-wa-btn style once
  if (!document.getElementById('footer-wa-style')) {
    const s = document.createElement('style');
    s.id = 'footer-wa-style';
    s.textContent = `.footer-wa-btn{display:flex;align-items:center;gap:10px;margin-top:16px;padding:12px 16px;background:#25D366;color:#fff;border-radius:12px;font-size:13px;font-weight:700;text-decoration:none;transition:all .18s;line-height:1.2;}.footer-wa-btn:hover{background:#1ebe59;transform:translateY(-2px);box-shadow:0 8px 24px rgba(37,211,102,.3);}.footer-wa-btn svg{flex-shrink:0;}footer .fg{grid-template-columns:1.4fr 1fr 1fr 1fr 1.1fr !important;}@media(max-width:900px){footer .fg{grid-template-columns:1fr 1fr !important;}}@media(max-width:500px){footer .fg{grid-template-columns:1fr !important;}}`;
    document.head.appendChild(s);
  }

  // ── WhatsApp Floating Button ────────────────────────────────────────────
  if (document.getElementById('cd-wa-fab')) return;

  const WA_NUM = '919407000101';
  const OFFERS = [
    { label: 'Free Strategy Call',            icon: '📞', topic: 'a free strategy call' },
    { label: 'Free SEO Audit',                icon: '🔍', topic: 'a free SEO audit for my website' },
    { label: 'Website Design Consultation',   icon: '💻', topic: 'website design & development' },
    { label: 'Ad Budget Strategy Session',    icon: '📈', topic: 'my ad budget strategy' },
  ];

  // Styles
  const ws = document.createElement('style');
  ws.textContent = `
  #cd-wa-fab{position:fixed;bottom:28px;right:28px;z-index:9999;display:flex;flex-direction:column;align-items:flex-end;gap:12px;}
  #cd-wa-card{background:#fff;border-radius:20px;box-shadow:0 8px 40px rgba(0,0,0,.18),0 2px 8px rgba(0,0,0,.08);width:300px;overflow:hidden;transform-origin:bottom right;animation:waCardIn .4s cubic-bezier(.22,1,.36,1) both;}
  @keyframes waCardIn{from{opacity:0;transform:scale(.85) translateY(16px)}to{opacity:1;transform:scale(1) translateY(0)}}
  #cd-wa-card.closing{animation:waCardOut .25s cubic-bezier(.4,0,1,1) both;}
  @keyframes waCardOut{to{opacity:0;transform:scale(.88) translateY(12px)}}
  .wa-card-head{background:linear-gradient(135deg,#075e54,#128c7e);padding:16px 16px 14px;display:flex;align-items:center;gap:10px;position:relative;}
  .wa-avatar{width:42px;height:42px;border-radius:50%;background:#25D366;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;border:2px solid rgba(255,255,255,.3);}
  .wa-head-info{flex:1;}
  .wa-head-name{font-size:14px;font-weight:700;color:#fff;font-family:'Inter',sans-serif;}
  .wa-head-status{font-size:11px;color:rgba(255,255,255,.7);display:flex;align-items:center;gap:5px;margin-top:1px;font-family:'Inter',sans-serif;}
  .wa-online-dot{width:7px;height:7px;border-radius:50%;background:#4ade80;animation:waDotPulse 1.8s ease-in-out infinite;}
  @keyframes waDotPulse{0%,100%{opacity:1}50%{opacity:.4}}
  .wa-close{position:absolute;top:10px;right:12px;background:rgba(255,255,255,.15);border:none;border-radius:50%;width:24px;height:24px;color:#fff;font-size:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:.15s;}
  .wa-close:hover{background:rgba(255,255,255,.3);}

  /* Offers panel */
  .wa-card-body{padding:14px 14px 8px;background:#ece5dd;}
  .wa-intro-bubble{background:#fff;border-radius:0 12px 12px 12px;padding:10px 14px;font-size:13px;color:#1a1a1a;line-height:1.5;margin-bottom:10px;box-shadow:0 1px 2px rgba(0,0,0,.08);font-family:'Inter',sans-serif;}
  .wa-intro-bubble b{color:#075e54;}
  .wa-offers{display:flex;flex-direction:column;gap:7px;}
  .wa-offer-btn{display:flex;align-items:center;gap:10px;padding:10px 14px;background:#fff;border:1.5px solid #e2e8f0;border-radius:12px;cursor:pointer;transition:all .18s;text-decoration:none;font-family:'Inter',sans-serif;}
  .wa-offer-btn:hover{border-color:#25D366;background:#f0fdf4;transform:translateX(3px);}
  .wa-offer-icon{font-size:16px;flex-shrink:0;}
  .wa-offer-text{flex:1;text-align:left;}
  .wa-offer-label{font-size:12px;font-weight:700;color:#075e54;display:block;}
  .wa-offer-sub{font-size:10.5px;color:#64748b;display:block;margin-top:1px;}
  .wa-offer-arr{color:#25D366;font-size:14px;font-weight:700;flex-shrink:0;}
  .wa-offer-btn.highlight{border-color:#25D366;background:#f0fdf4;box-shadow:0 0 0 3px rgba(37,211,102,.15);}

  /* Details form panel */
  #cd-wa-details{padding:14px;background:#ece5dd;display:none;flex-direction:column;gap:10px;}
  .wa-back-btn{display:flex;align-items:center;gap:6px;background:none;border:none;color:#075e54;font-size:12px;font-weight:600;cursor:pointer;padding:0;font-family:'Inter',sans-serif;margin-bottom:2px;}
  .wa-back-btn:hover{color:#128c7e;}
  .wa-back-btn svg{width:14px;height:14px;}
  .wa-selected-bubble{background:#075e54;color:#fff;border-radius:12px 12px 12px 0;padding:8px 12px;font-size:12px;font-weight:600;display:flex;align-items:center;gap:7px;font-family:'Inter',sans-serif;}
  .wa-form-label{font-size:11px;font-weight:700;color:#475569;font-family:'Inter',sans-serif;margin-bottom:2px;display:block;}
  .wa-input{width:100%;padding:9px 12px;border:1.5px solid #e2e8f0;border-radius:10px;font-size:13px;font-family:'Inter',sans-serif;color:#1a1a1a;background:#fff;outline:none;box-sizing:border-box;transition:border-color .15s;}
  .wa-input:focus{border-color:#25D366;}
  .wa-input.error{border-color:#ef4444;}
  .wa-send-btn{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;padding:11px;background:#25D366;color:#fff;border:none;border-radius:12px;font-size:13px;font-weight:700;cursor:pointer;font-family:'Inter',sans-serif;transition:all .18s;margin-top:2px;}
  .wa-send-btn:hover{background:#1ebe59;transform:translateY(-1px);box-shadow:0 6px 20px rgba(37,211,102,.35);}
  .wa-send-btn svg{width:16px;height:16px;}

  /* Card footer */
  .wa-card-foot{padding:8px 14px 14px;background:#ece5dd;display:flex;justify-content:center;}
  .wa-powered{font-size:10px;color:#94a3b8;font-family:'Inter',sans-serif;}
  .wa-powered a{color:#25D366;font-weight:600;}

  /* FAB button */
  #cd-wa-btn{width:60px;height:60px;border-radius:50%;background:#25D366;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 24px rgba(37,211,102,.45);position:relative;transition:transform .2s,box-shadow .2s;flex-shrink:0;}
  #cd-wa-btn:hover{transform:scale(1.1);box-shadow:0 10px 32px rgba(37,211,102,.55);}
  #cd-wa-btn svg{width:32px;height:32px;}
  #cd-wa-btn::before,#cd-wa-btn::after{content:'';position:absolute;inset:-4px;border-radius:50%;border:2px solid rgba(37,211,102,.5);animation:waPing 2.2s ease-out infinite;}
  #cd-wa-btn::after{inset:-10px;border-color:rgba(37,211,102,.25);animation-delay:.6s;}
  @keyframes waPing{0%{transform:scale(1);opacity:.8}100%{transform:scale(1.5);opacity:0}}
  .wa-notif{position:absolute;top:-3px;right:-3px;background:#ef4444;color:#fff;font-size:10px;font-weight:800;width:20px;height:20px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:2px solid #fff;animation:waBounce 2s ease-in-out 3s 4 both;}
  @keyframes waBounce{0%,100%{transform:scale(1)}40%{transform:scale(1.3)}60%{transform:scale(.9)}}
  .wa-tooltip{position:absolute;right:70px;top:50%;transform:translateY(-50%);background:#1e293b;color:#fff;font-size:12px;font-weight:600;padding:7px 12px;border-radius:8px;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .2s;font-family:'Inter',sans-serif;}
  .wa-tooltip::after{content:'';position:absolute;left:100%;top:50%;transform:translateY(-50%);border:5px solid transparent;border-left-color:#1e293b;}
  #cd-wa-btn:hover .wa-tooltip{opacity:1;}
  @media(max-width:600px){#cd-wa-fab{bottom:16px;right:16px;}#cd-wa-card{width:calc(100vw - 32px);}#cd-wa-btn{width:54px;height:54px;}}
  `;
  document.head.appendChild(ws);

  // HTML
  const fab = document.createElement('div');
  fab.id = 'cd-wa-fab';
  fab.innerHTML = `
    <div id="cd-wa-card" style="display:none;">
      <div class="wa-card-head">
        <div class="wa-avatar">&#128172;</div>
        <div class="wa-head-info">
          <div class="wa-head-name">Click Decoded</div>
          <div class="wa-head-status"><span class="wa-online-dot"></span>Typically replies in minutes</div>
        </div>
        <button class="wa-close" id="cd-wa-close" aria-label="Close">&#10005;</button>
      </div>

      <!-- Step 1: Offer selection -->
      <div class="wa-card-body" id="cd-wa-step1">
        <div class="wa-intro-bubble">&#128075; Hi! Ready to grow your business?<br>Pick what you need &mdash; we'll connect on <b>WhatsApp</b>.</div>
        <div class="wa-offers" id="cd-wa-offers"></div>
      </div>

      <!-- Step 2: Name + Email form -->
      <div id="cd-wa-details">
        <button class="wa-back-btn" id="cd-wa-back">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
          Back
        </button>
        <div class="wa-selected-bubble" id="cd-wa-sel-label"></div>
        <div>
          <label class="wa-form-label" for="cd-wa-name">Your Name</label>
          <input class="wa-input" type="text" id="cd-wa-name" placeholder="e.g. Rahul Sharma" autocomplete="name" />
        </div>
        <div>
          <label class="wa-form-label" for="cd-wa-email">Email ID</label>
          <input class="wa-input" type="email" id="cd-wa-email" placeholder="e.g. rahul@company.com" autocomplete="email" />
        </div>
        <button class="wa-send-btn" id="cd-wa-send">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          Open WhatsApp
        </button>
      </div>

      <div class="wa-card-foot"><span class="wa-powered">Powered by <a href="https://wa.me/${WA_NUM}" target="_blank">WhatsApp</a></span></div>
    </div>

    <button id="cd-wa-btn" aria-label="Chat on WhatsApp">
      <span class="wa-notif">1</span>
      <span class="wa-tooltip">Chat with us!</span>
      <svg viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </button>
  `;
  document.body.appendChild(fab);

  // Build offer buttons
  const offersEl = document.getElementById('cd-wa-offers');
  let selectedOffer = null;

  OFFERS.forEach(function(o, i) {
    const btn = document.createElement('button');
    btn.className = 'wa-offer-btn';
    btn.dataset.index = i;
    btn.innerHTML = '<span class="wa-offer-icon">' + o.icon + '</span><span class="wa-offer-text"><span class="wa-offer-label">' + o.label + '</span><span class="wa-offer-sub">Tap to get started &#8250;</span></span><span class="wa-offer-arr">&#8250;</span>';
    btn.addEventListener('click', function() {
      selectedOffer = o;
      showStep2(o);
    });
    offersEl.appendChild(btn);
  });

  // Step navigation
  const step1 = document.getElementById('cd-wa-step1');
  const step2 = document.getElementById('cd-wa-details');
  const selLabel = document.getElementById('cd-wa-sel-label');
  const nameInput = document.getElementById('cd-wa-name');
  const emailInput = document.getElementById('cd-wa-email');
  const sendBtn = document.getElementById('cd-wa-send');
  const backBtn = document.getElementById('cd-wa-back');

  function showStep2(offer) {
    step1.style.display = 'none';
    step2.style.display = 'flex';
    selLabel.innerHTML = offer.icon + ' ' + offer.label;
    nameInput.value = '';
    emailInput.value = '';
    nameInput.classList.remove('error');
    emailInput.classList.remove('error');
    setTimeout(function() { nameInput.focus(); }, 80);
  }

  function showStep1() {
    step2.style.display = 'none';
    step1.style.display = 'block';
  }

  backBtn.addEventListener('click', showStep1);

  sendBtn.addEventListener('click', function() {
    var name = nameInput.value.trim();
    var email = emailInput.value.trim();
    var valid = true;

    nameInput.classList.remove('error');
    emailInput.classList.remove('error');

    if (!name) { nameInput.classList.add('error'); nameInput.focus(); valid = false; }
    if (!email || !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
      emailInput.classList.add('error');
      if (valid) emailInput.focus();
      valid = false;
    }
    if (!valid) return;

    var msg = 'Hi! ' + name + ' this side. I am willing to discuss about ' + selectedOffer.topic + '.\n\nFor future communication, my email ID is ' + email + '.';
    window.open('https://wa.me/' + WA_NUM + '?text=' + encodeURIComponent(msg), '_blank', 'noopener,noreferrer');
  });

  // Allow pressing Enter in email field to submit
  emailInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') sendBtn.click();
  });

  // Card open/close
  const card = document.getElementById('cd-wa-card');
  const btnEl = document.getElementById('cd-wa-btn');
  const closeEl = document.getElementById('cd-wa-close');
  let cardOpen = false;
  let highlightTimer = null;

  function openCard() {
    card.style.display = 'block';
    card.classList.remove('closing');
    cardOpen = true;
    showStep1();
    const notif = fab.querySelector('.wa-notif');
    if (notif) notif.style.display = 'none';
    startHighlightCycle();
  }
  function closeCard() {
    card.classList.add('closing');
    clearInterval(highlightTimer);
    setTimeout(function() { card.style.display = 'none'; cardOpen = false; }, 240);
  }

  btnEl.addEventListener('click', function() { cardOpen ? closeCard() : openCard(); });
  closeEl.addEventListener('click', function(e) { e.stopPropagation(); closeCard(); });

  // Cycle highlight through offer buttons
  let hlIdx = 0;
  function startHighlightCycle() {
    const btns = offersEl.querySelectorAll('.wa-offer-btn');
    function cycle() {
      btns.forEach(function(b) { b.classList.remove('highlight'); });
      btns[hlIdx % btns.length].classList.add('highlight');
      hlIdx++;
    }
    cycle();
    highlightTimer = setInterval(cycle, 2200);
  }

  // Auto-open after 6s (once per session)
  if (!sessionStorage.getItem('wa_opened')) {
    setTimeout(function() {
      if (!cardOpen) { openCard(); sessionStorage.setItem('wa_opened','1'); }
    }, 6000);
  }

  // Hide on scroll down, show on scroll up
  let lastY = 0;
  window.addEventListener('scroll', function() {
    const y = window.scrollY;
    fab.classList.toggle('hidden', y > lastY && y > 300);
    lastY = y;
  }, { passive: true });

})();
