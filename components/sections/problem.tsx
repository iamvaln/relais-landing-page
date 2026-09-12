"use client"

import { Lock, TrendingDown, ImageOff, FileWarning } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { Reveal } from "@/components/reveal"

const problemIcons = [Lock, TrendingDown, ImageOff, FileWarning]

export function Problem() {
  const { t } = useLanguage()

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="text-sm font-semibold uppercase tracking-wide text-gold">
            {t.problem.eyebrow}
          </span>
          <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
            {t.problem.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
            {t.problem.body}
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {t.problem.items.map((item, i) => {
            const Icon = problemIcons[i]
            return (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="rounded-2xl border border-border bg-card p-5"
              >
                <Icon className="size-6 text-muted-foreground" />
                <h3 className="mt-4 font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
