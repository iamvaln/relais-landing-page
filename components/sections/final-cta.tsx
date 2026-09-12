"use client"

import { useLanguage } from "@/lib/i18n"
import { Reveal } from "@/components/reveal"
import { CtaButton } from "@/components/cta-button"
import { RelaisMark } from "@/components/relais-logo"

export function FinalCta() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-16 text-center text-ink-foreground sm:px-12 sm:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-0"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 0%, color-mix(in oklch, var(--gold) 22%, transparent), transparent 70%)",
          }}
        />
        <div className="relative">
          <RelaisMark mono goldDot className="mx-auto h-16 w-16 text-ink-foreground" />
          <h2 className="mx-auto mt-6 max-w-2xl font-heading text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            {t.finalCta.title}
          </h2>
          <p className="mt-4 font-heading text-lg italic text-ink-foreground/75">
            {t.finalCta.subtitle}
          </p>
          <div className="mt-8 flex justify-center">
            <CtaButton href="#" size="lg">
              {t.finalCta.primary}
            </CtaButton>
          </div>
          <p className="mt-5 text-sm text-ink-foreground/60">{t.finalCta.note}</p>
        </div>
      </Reveal>
    </section>
  )
}
