// src/app/page.tsx
import type { Metadata } from 'next'
import { SEO_DEFAULTS }        from '@/lib/constants'
import { HeroSection }         from '@/components/sections/HeroSection'
import { ServicesSection }     from '@/components/sections/ServicesSection'
import { WorkingStrip, ResultsStrip, ToolsStrip } from '@/components/sections/TickerStrips'
import { StatsSection }        from '@/components/sections/StatsSection'
import { AutomationSection }   from '@/components/sections/AutomationSection'
import { GeoSection }          from '@/components/sections/GeoSection'
import { CasesSection }        from '@/components/sections/CasesSection'
import { WhyUsSection }        from '@/components/sections/WhyUsSection'
import { TabsSection }         from '@/components/sections/TabsSection'
import { ProofStrip }          from '@/components/sections/ProofStrip'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { BlogSection }         from '@/components/sections/BlogSection'
import { CtaSection }          from '@/components/sections/CtaSection'

export const metadata: Metadata = {
  title:       SEO_DEFAULTS.defaultTitle,
  description: SEO_DEFAULTS.description,
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WorkingStrip />
      <ToolsStrip />
      <StatsSection />
      <ResultsStrip />
      <AutomationSection />
      <GeoSection />
      <CasesSection />
      <WhyUsSection />
      <TabsSection />
      <ProofStrip />
      <TestimonialsSection />
      <BlogSection />
      <CtaSection />
    </main>
  )
}
