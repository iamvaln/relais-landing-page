"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/lib/i18n"
import { RelaisLogo } from "@/components/relais-logo"
import { CtaButton } from "@/components/cta-button"
import { LanguageToggle } from "@/components/language-toggle"
import { cn } from "@/lib/utils"

export function SiteHeader() {
  const { t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const links = [
    { href: "#how", label: t.nav.how },
    { href: "#security", label: t.nav.security },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#faq", label: t.nav.faq },
  ]

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-md"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="text-foreground" aria-label="Relais — home">
          <RelaisLogo />
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <CtaButton href="#pricing" withArrow={false} className="hidden sm:inline-flex">
            {t.nav.cta}
          </CtaButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full text-foreground md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background/95 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4" aria-label="Mobile">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-base text-foreground hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <CtaButton href="#pricing" withArrow={false} className="mt-2 w-full">
              {t.nav.cta}
            </CtaButton>
          </nav>
        </div>
      )}
    </header>
  )
}
