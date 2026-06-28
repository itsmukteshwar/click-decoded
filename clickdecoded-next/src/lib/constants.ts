// ─────────────────────────────────────────────────────────────
// constants.ts — ALL site-wide constants live here.
// Never hardcode strings in components; import from here.
// ─────────────────────────────────────────────────────────────

// ── Company ──────────────────────────────────────────────────
export const COMPANY = {
  name:        'Click Decoded',
  legalName:   'Aharnish Infotech Pvt. Ltd.',
  tagline:     'India\'s #1 B2B Digital Growth Agency',
  founded:     2014,
  email:       'hello@clickdecoded.com',
  phone:       '+91 94070 00101',
  phoneRaw:    '+919407000101',
  whatsapp:    process.env.NEXT_PUBLIC_WA_NUMBER ?? '919407000101',
  address:     'Bhopal, Madhya Pradesh, India',
  siteUrl:     process.env.NEXT_PUBLIC_SITE_URL ?? 'https://clickdecoded.com',
} as const

// ── Social Links ─────────────────────────────────────────────
export const SOCIAL = {
  linkedin:  'https://linkedin.com/company/clickdecoded',
  instagram: 'https://instagram.com/clickdecoded',
  twitter:   'https://twitter.com/clickdecoded',
  youtube:   'https://youtube.com/@clickdecoded',
} as const

// ── Pricing (minimum floors) ──────────────────────────────────
export const PRICING = {
  retainerMin:    25000,   // ₹/month
  webDevMin:      25000,   // ₹ one-time
  currency:       'INR',
  currencySymbol: '₹',
} as const

// ── Stats ─────────────────────────────────────────────────────
export const STATS = [
  { value: '500+',  label: 'Projects Delivered' },
  { value: '12+',   label: 'Years Experience'   },
  { value: '98%',   label: 'Client Retention'   },
  { value: '₹50Cr', label: 'Ad Spend Managed'   },
] as const

// ── Service Areas ─────────────────────────────────────────────
export const SERVICE_AREAS = [
  'Bhopal', 'Indore', 'Dewas', 'Gwalior',
  'Raipur', 'Nagpur', 'Pune', 'Delhi NCR',
  'Mumbai', 'Bangalore',
] as const

// ── WhatsApp Offer Popups ─────────────────────────────────────
export const WA_OFFERS = [
  { label: 'Free Strategy Call',            icon: '📞', topic: 'a free strategy call'                     },
  { label: 'Free SEO Audit',                icon: '🔍', topic: 'a free SEO audit for my website'          },
  { label: 'Website Design Consultation',   icon: '💻', topic: 'website design & development'             },
  { label: 'Ad Budget Strategy Session',    icon: '📈', topic: 'my ad budget strategy'                    },
] as const

// ── Navigation ────────────────────────────────────────────────
export const NAV = {
  seo: [
    { label: 'SEO Services',       href: '/seo-services'       },
    { label: 'Local SEO',          href: '/local-seo'          },
    { label: 'Technical SEO Audit',href: '/technical-seo-audit'},
    { label: 'E-Commerce SEO',     href: '/ecommerce-seo'      },
    { label: 'Link Building',      href: '/link-building'      },
    { label: 'Programmatic SEO',   href: '/programmatic-seo'   },
    { label: 'Google My Business', href: '/gmb-marketing'      },
  ],
  paidAds: [
    { label: 'Google Ads',    href: '/google-ads'    },
    { label: 'Meta Ads',      href: '/meta-ads'      },
    { label: 'YouTube Ads',   href: '/youtube-ads'   },
    { label: 'LinkedIn Ads',  href: '/linkedin-ads'  },
    { label: 'Shopping Ads',  href: '/shopping-ads'  },
    { label: 'Retargeting',   href: '/retargeting'   },
  ],
  ai: [
    { label: 'AI Automation',      href: '/ai-automation'          },
    { label: 'WhatsApp Automation',href: '/whatsapp-automation'    },
    { label: 'n8n Workflows',      href: '/workflow-automation'    },
    { label: 'AI Chatbot Dev',     href: '/ai-chatbot-development' },
    { label: 'AI Ad Creatives',    href: '/ai-ad-creatives'        },
    { label: 'AI Content Gen',     href: '/ai-content'             },
  ],
  content: [
    { label: 'Virtual Tour',       href: '/virtual-tour'         },
    { label: 'HD Photography',     href: '/hd-photography'       },
    { label: 'Product Photography',href: '/product-photography'  },
    { label: 'Drone Video',        href: '/drone-video'          },
    { label: 'Email Marketing',    href: '/email-marketing'      },
    { label: 'WhatsApp Marketing', href: '/whatsapp-marketing'   },
    { label: 'Blogging & Content', href: '/blogging'             },
  ],
  web: [
    { label: 'Web Development',   href: '/web-development'      },
    { label: 'WordPress Dev',     href: '/wordpress-development' },
    { label: 'E-Commerce Dev',    href: '/ecommerce-development' },
    { label: 'Landing Pages',     href: '/landing-pages'        },
    { label: 'UI/UX Design',      href: '/ui-ux'                },
  ],
  geo: [
    { label: 'GEO Services',      href: '/generative-engine-optimization' },
    { label: 'Answer Engine Opt', href: '/answer-engine-optimization'     },
    { label: 'LLM Optimization',  href: '/ai-search-optimization'         },
    { label: 'AI Brand Visibility',href: '/ai-brand-visibility'           },
  ],
  industries: [
    { label: 'Real Estate & Builders',      href: '/industry-real-estate'   },
    { label: 'Healthcare & Clinics',        href: '/industry-healthcare'    },
    { label: 'Education & EdTech',          href: '/industry-education'     },
    { label: 'E-Commerce & Retail',         href: '/industry-ecommerce'     },
    { label: 'Manufacturing & Industrial',  href: '/industry-manufacturing' },
    { label: 'IT Services & SaaS',          href: '/industry-it-saas'       },
    { label: 'Legal & CA Firms',            href: '/industry-legal'         },
    { label: 'Hospitality & Travel',        href: '/industry-hospitality'   },
  ],
  company: [
    { label: 'About Us',          href: '/about'       },
    { label: 'The Honest Page',   href: '/honest'      },
    { label: 'How We Work',       href: '/how-we-work' },
    { label: 'Blog & Insights',   href: '/blog'        },
    { label: 'Pricing',           href: '/pricing'     },
    { label: 'Careers',           href: '/careers'     },
    { label: 'Contact Us',        href: '/contact'     },
  ],
} as const

// ── SEO Defaults ──────────────────────────────────────────────
export const SEO_DEFAULTS = {
  titleTemplate: '%s | Click Decoded',
  defaultTitle:  'Click Decoded — B2B Digital Marketing Agency India',
  description:   'India\'s trusted B2B growth partner. SEO, Google Ads, Web Development, AI Automation. 12 years. 500+ projects. Bhopal-based, pan-India.',
  ogImage:       '/images/og-default.jpg',
  twitterHandle: '@clickdecoded',
} as const
