"use client"

import { useLanguage } from "@/lib/i18n"
import { Reveal } from "@/components/reveal"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function Faq() {
  const { t } = useLanguage()

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
      <Reveal className="text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-gold">
          {t.faq.eyebrow}
        </span>
        <h2 className="mt-3 font-heading text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl">
          {t.faq.title}
        </h2>
      </Reveal>

      <Reveal className="mt-10">
        <Accordion className="rounded-2xl border border-border bg-card px-5">
          {t.faq.items.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="py-5 text-base font-medium hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  )
}
