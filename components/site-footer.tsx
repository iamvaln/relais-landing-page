"use client"

import { useLanguage } from "@/lib/i18n"
import { RelaisLogo } from "@/components/relais-logo"
import { LanguageToggle } from "@/components/language-toggle"

export function SiteFooter() {
  const { t } = useLanguage()
  const l = t.footer.links

  const columns = [
    {
      title: t.footer.product,
      links: [
        { label: l.how, href: "#how" },
        { label: l.security, href: "#security" },
        { label: l.pricing, href: "#pricing" },
        { label: l.faq, href: "#faq" },
      ],
    },
    {
      title: t.footer.company,
      links: [
        { label: l.about, href: "#" },
        { label: l.contact, href: "#" },
      ],
    },
    {
      title: t.footer.legal,
      links: [
        { label: l.privacy, href: "#" },
        { label: l.terms, href: "#" },
      ],
    },
  ]

  return (
    <footer className="section-ink">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <span className="text-ink-foreground">
              <RelaisLogo />
            </span>
            <p className="mt-4 max-w-xs font-heading text-lg italic text-ink-foreground/70">
              {t.footer.tagline}
            </p>
            <div className="mt-5">
              <LanguageToggle onInk />
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ink-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-foreground/65 transition-colors hover:text-ink-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-ink-foreground/15 pt-6 text-sm text-ink-foreground/55">
          © {new Date().getFullYear()} Relais. {t.footer.rights}
        </div>
      </div>
    </footer>
  )
}
