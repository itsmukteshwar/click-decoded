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
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="X">𝕏</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>
        <div>
          <h4>Web Development</h4>
          <div class="fl">
            <a href="web-development.html">Web Development</a>
            <a href="wordpress-dev.html">WordPress Dev</a>
            <a href="ecommerce-dev.html">E-Commerce Dev</a>
            <a href="landing-pages.html">Landing Pages</a>
          </div>
        </div>
        <div>
          <h4>SEO &amp; Marketing</h4>
          <div class="fl">
            <a href="seo-services.html">SEO Services</a>
            <a href="local-seo.html">Local SEO</a>
            <a href="google-ads.html">Google Ads</a>
            <a href="meta-ads.html">Meta Ads</a>
            <a href="ecommerce-seo.html">E-Commerce SEO</a>
            <a href="whatsapp-automation.html">WhatsApp Automation</a>
          </div>
        </div>
        <div>
          <h4>Company</h4>
          <div class="fl">
            <a href="about.html">Know About Us</a>
            <a href="honest.html">The Honest Page</a>
            <a href="clients.html">Our Work</a>
            <a href="process.html">How We Work</a>
            <a href="#">Blog / Insights</a>
            <a href="careers.html">Careers</a>
            <a href="internship.html">Internship</a>
          </div>
        </div>
        <div>
          <h4>Contact</h4>
          <div class="fc">
            <a href="mailto:hello@clickdecoded.com">📧 hello@clickdecoded.com</a>
            <a href="tel:+919407000101">📞 +91 94070 00101</a>
            <a href="#">📍 Bhopal, Madhya Pradesh</a>
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
      <a href="service-areas.html#bhopal">Bhopal</a> · <a href="service-areas.html#indore">Indore</a> · <a href="service-areas.html#dewas">Dewas</a> · <a href="service-areas.html#gwalior">Gwalior</a> · <a href="service-areas.html#raipur">Raipur</a> · <a href="service-areas.html#nagpur">Nagpur</a> · <a href="service-areas.html#pune">Pune</a> · <a href="service-areas.html#delhi-ncr">Delhi NCR</a> · <a href="service-areas.html#mumbai">Mumbai</a> · <a href="service-areas.html#bangalore">Bangalore</a>
    </div>
    <div class="footer-bottom">
      <div>© ${year} Click Decoded. All rights reserved. · <a href="privacy.html">Privacy Policy</a> · <a href="terms.html">Terms & Conditions</a> · <a href="cookie-policy.html">Cookie Policy</a></div>
      <div>Click Decoded is a brand of Aharnish Infotech Pvt. Ltd. © 2014–${year}</div>
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
})();
