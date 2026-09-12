"use client"

import { useState } from "react"
import { Lock, Power, KeyRound, Plus, Minus } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { Reveal } from "@/components/reveal"

const pointIcons = [Lock, Power, KeyRound]

export function Security() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <section id="security" className="section-ink">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wide text-gold">
              {t.security.eyebrow}
            </span>
            <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
              {t.security.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-foreground/75 text-pretty">
              {t.security.body}
            </p>

            <div className="mt-8 rounded-2xl border border-ink-foreground/15 bg-ink-foreground/[0.04]">
              <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-expanded={open}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium">{t.security.more}</span>
                {open ? (
                  <Minus className="size-5 shrink-0 text-gold" />
                ) : (
                  <Plus className="size-5 shrink-0 text-gold" />
                )}
              </button>
              {open && (
                <p className="px-5 pb-5 text-sm leading-relaxed text-ink-foreground/70">
                  {t.security.moreBody}
                </p>
              )}
            </div>
          </Reveal>

          <div className="space-y-4">
            {t.security.points.map((point, i) => {
              const Icon = pointIcons[i]
              return (
                <Reveal
                  key={point.title}
                  delay={i * 100}
                  className="flex gap-4 rounded-2xl border border-ink-foreground/12 bg-ink-foreground/[0.04] p-5"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold text-gold-foreground">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">{point.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-foreground/70">
                      {point.body}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
