"use client"

import { ShieldCheck } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { CtaButton } from "@/components/cta-button"
import { AppMockup } from "@/components/app-mockup"
import { RelaisMark } from "@/components/relais-logo"

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24">
      {/* soft brand backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 50% at 78% 22%, color-mix(in oklch, var(--gold) 18%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8">
        <div className="reveal is-visible">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <ShieldCheck className="size-3.5 text-foreground" />
            {t.hero.eyebrow}
          </span>
          <h1 className="mt-5 font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <CtaButton href="#pricing" size="lg">
              {t.hero.primary}
            </CtaButton>
            <CtaButton href="#how" size="lg" variant="outline" withArrow={false}>
              {t.hero.secondary}
            </CtaButton>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">{t.hero.note}</p>
        </div>

        <div className="relative">
          <RelaisMark
            mono
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-10 -z-10 h-64 w-64 text-foreground/[0.04] sm:h-80 sm:w-80"
          />
          <AppMockup />
        </div>
      </div>
    </section>
  )
}
