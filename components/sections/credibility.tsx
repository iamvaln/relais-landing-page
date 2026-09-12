"use client"

import { useLanguage } from "@/lib/i18n"
import { Reveal } from "@/components/reveal"

export function Credibility() {
  const { t } = useLanguage()

  return (
    <section className="border-y border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold">
            {t.credibility.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            {t.credibility.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.credibility.body}
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {t.credibility.stats.map((s, i) => (
            <Reveal
              key={s.value}
              delay={i * 80}
              className="rounded-2xl border border-border bg-background p-6 text-center"
            >
              <p className="font-heading text-2xl font-semibold text-foreground">{s.value}</p>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
