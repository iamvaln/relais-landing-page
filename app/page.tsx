import { LanguageProvider } from "@/lib/i18n"
import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/sections/hero"
import { Pillars } from "@/components/sections/pillars"
import { Problem } from "@/components/sections/problem"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Security } from "@/components/sections/security"
import { Pricing } from "@/components/sections/pricing"
import { Credibility } from "@/components/sections/credibility"
import { Faq } from "@/components/sections/faq"
import { FinalCta } from "@/components/sections/final-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <LanguageProvider>
      <SiteHeader />
      <main>
        <Hero />
        <Pillars />
        <Problem />
        <HowItWorks />
        <Security />
        <Pricing />
        <Credibility />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </LanguageProvider>
  )
}
