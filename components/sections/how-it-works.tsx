"use client"

import { ListChecks, UsersRound, Radio } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { Reveal } from "@/components/reveal"

const stepIcons = [ListChecks, UsersRound, Radio]

export function HowItWorks() {
  const { t } = useLanguage()

  return (
    <section id="how" className="border-y border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-gold">
            {t.how.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            {t.how.title}
          </h2>
        </Reveal>

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          {/* connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-9 hidden h-px bg-border md:block"
          />
          {t.how.steps.map((step, i) => {
            const Icon = stepIcons[i]
            return (
              <Reveal
                key={step.num}
                delay={i * 120}
                className="relative rounded-2xl border border-border bg-background p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-ink text-ink-foreground">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-heading text-4xl font-semibold text-border">
                    {step.num}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-xl font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
