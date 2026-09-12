"use client"

import { Infinity as InfinityIcon, SlidersHorizontal, EyeOff, Network } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { Reveal } from "@/components/reveal"

const pillarIcons = [InfinityIcon, SlidersHorizontal, EyeOff, Network]

export function Pillars() {
  const { t } = useLanguage()

  return (
    <section className="border-y border-border bg-card/60">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="text-center font-heading text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          {t.pillars.title}
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {t.pillars.items.map((item, i) => {
            const Icon = pillarIcons[i]
            return (
              <Reveal
                key={item.title}
                delay={i * 80}
                className="rounded-2xl border border-border bg-background p-5"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-foreground">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold">{item.title}</h3>
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
