"use client"

import { Check, Smartphone, CreditCard } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { Reveal } from "@/components/reveal"
import { CtaButton } from "@/components/cta-button"
import { cn } from "@/lib/utils"

export function Pricing() {
  const { t } = useLanguage()
  const { trial, premium } = t.pricing

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-gold">
          {t.pricing.eyebrow}
        </span>
        <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
          {t.pricing.title}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          {t.pricing.body}
        </p>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
        {/* Free trial */}
        <Reveal className="flex flex-col rounded-3xl border border-border bg-card p-7">
          <h3 className="font-heading text-xl font-semibold">{trial.name}</h3>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-heading text-4xl font-semibold">{trial.price}</span>
            <span className="text-sm text-muted-foreground">{trial.period}</span>
          </div>
          <ul className="mt-6 flex-1 space-y-3">
            {trial.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-foreground" />
                <span className="text-muted-foreground">{f}</span>
              </li>
            ))}
          </ul>
          <CtaButton href="#" variant="outline" withArrow={false} className="mt-7 w-full">
            {trial.cta}
          </CtaButton>
        </Reveal>

        {/* Premium */}
        <Reveal
          delay={100}
          className="relative flex flex-col overflow-hidden rounded-3xl border border-gold/50 bg-ink p-7 text-ink-foreground shadow-xl shadow-foreground/10"
        >
          <span className="absolute right-5 top-5 rounded-full bg-gold px-3 py-1 text-xs font-semibold text-gold-foreground">
            {premium.tag}
          </span>
          <h3 className="font-heading text-xl font-semibold">{premium.name}</h3>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-heading text-4xl font-semibold">{premium.price}</span>
            <span className="text-sm text-ink-foreground/70">{premium.period}</span>
          </div>
          <p className="mt-1 text-xs text-ink-foreground/60">{premium.priceNote}</p>
          <ul className="mt-6 flex-1 space-y-3">
            {premium.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-gold" />
                <span className="text-ink-foreground/85">{f}</span>
              </li>
            ))}
          </ul>
          <CtaButton href="#" variant="gold" className="mt-7 w-full">
            {premium.cta}
          </CtaButton>
        </Reveal>
      </div>

      <Reveal className="mx-auto mt-10 flex max-w-2xl flex-col items-center gap-4 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground">
          <Smartphone className="size-4 text-foreground" />
          <CreditCard className="size-4 text-foreground" />
          <span>{t.pricing.pay}</span>
        </div>
        <p className={cn("font-heading text-lg italic text-foreground")}>
          “{t.pricing.reassure}”
        </p>
      </Reveal>
    </section>
  )
}
