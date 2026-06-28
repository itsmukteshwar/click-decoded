import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // .html → clean URL redirects (SEO-safe migration from old HTML site)
  async redirects() {
    return [
      { source: '/:path*.html', destination: '/:path*', permanent: true },
    ]
  },
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

export default nextConfig
