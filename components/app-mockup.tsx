"use client"

import { Check, Mail, CreditCard, Image as ImageIcon, ShieldCheck } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { RelaisMark } from "@/components/relais-logo"

const copy = {
  en: {
    checkin: "Are you still there?",
    sub: "A gentle check-in. Tap to confirm.",
    here: "I'm here",
    accounts: "Protected accounts",
    contacts: "Trusted contacts",
    statuses: { close: "Close", transfer: "Transfer", keep: "Memorialize" },
    items: [
      { icon: "mail", name: "Email", action: "transfer" },
      { icon: "card", name: "Banking", action: "close" },
      { icon: "image", name: "Photos", action: "keep" },
    ],
    secured: "End-to-end encrypted",
  },
  fr: {
    checkin: "Êtes-vous toujours là ?",
    sub: "Une prise de nouvelles. Appuyez pour confirmer.",
    here: "Je suis là",
    accounts: "Comptes protégés",
    contacts: "Personnes de confiance",
    statuses: { close: "Fermer", transfer: "Transmettre", keep: "Mémorialiser" },
    items: [
      { icon: "mail", name: "E-mail", action: "transfer" },
      { icon: "card", name: "Banque", action: "close" },
      { icon: "image", name: "Photos", action: "keep" },
    ],
    secured: "Chiffré de bout en bout",
  },
} as const

const icons = {
  mail: Mail,
  card: CreditCard,
  image: ImageIcon,
} as const

export function AppMockup() {
  const { lang } = useLanguage()
  const c = copy[lang]

  return (
    <div className="relative mx-auto w-[268px] sm:w-[300px]">
      <div className="rounded-[2.5rem] border border-foreground/10 bg-foreground/[0.04] p-2.5 shadow-2xl shadow-foreground/20">
        <div className="relative overflow-hidden rounded-[2rem] bg-background">
          {/* status bar */}
          <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] font-medium text-muted-foreground">
            <span>9:41</span>
            <RelaisMark className="h-4 w-4 text-foreground" />
            <span>100%</span>
          </div>

          <div className="space-y-3 px-4 pb-5 pt-2">
            {/* check-in card */}
            <div className="rounded-2xl bg-ink p-4 text-ink-foreground">
              <p className="font-heading text-base font-semibold leading-snug text-balance">
                {c.checkin}
              </p>
              <p className="mt-1 text-[11px] text-ink-foreground/70">{c.sub}</p>
              <div className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-gold px-3.5 py-2 text-xs font-semibold text-gold-foreground">
                <Check className="size-3.5" />
                {c.here}
              </div>
            </div>

            {/* accounts */}
            <div>
              <p className="px-1 pb-1.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                {c.accounts}
              </p>
              <div className="space-y-1.5">
                {c.items.map((item) => {
                  const Icon = icons[item.icon as keyof typeof icons]
                  return (
                    <div
                      key={item.name}
                      className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-3 py-2.5"
                    >
                      <span className="flex size-7 items-center justify-center rounded-lg bg-secondary text-foreground">
                        <Icon className="size-3.5" />
                      </span>
                      <span className="flex-1 text-xs font-medium text-foreground">
                        {item.name}
                      </span>
                      <span className="rounded-full bg-accent px-2 py-0.5 text-[10px] font-medium text-accent-foreground">
                        {c.statuses[item.action as keyof typeof c.statuses]}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* contacts */}
            <div className="flex items-center justify-between rounded-xl border border-border bg-card px-3 py-2.5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                  {c.contacts}
                </p>
                <div className="mt-1.5 flex -space-x-1.5">
                  {["A", "H", "R"].map((initial) => (
                    <span
                      key={initial}
                      className="flex size-6 items-center justify-center rounded-full border-2 border-card bg-gold text-[10px] font-semibold text-gold-foreground"
                    >
                      {initial}
                    </span>
                  ))}
                </div>
              </div>
              <span className="flex items-center gap-1 text-[10px] font-medium text-muted-foreground">
                <ShieldCheck className="size-3.5 text-foreground" />
                {c.secured}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
