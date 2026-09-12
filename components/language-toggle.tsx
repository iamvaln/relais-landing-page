"use client"

import { useLanguage, type Lang } from "@/lib/i18n"
import { cn } from "@/lib/utils"

export function LanguageToggle({ onInk = false }: { onInk?: boolean }) {
  const { lang, setLang } = useLanguage()
  const options: Lang[] = ["en", "fr"]

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border p-0.5 text-xs font-semibold",
        onInk ? "border-ink-foreground/25" : "border-border bg-card",
      )}
      role="group"
      aria-label="Language"
    >
      {options.map((opt) => {
        const active = lang === opt
        return (
          <button
            key={opt}
            type="button"
            onClick={() => setLang(opt)}
            aria-pressed={active}
            className={cn(
              "rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors",
              active
                ? "bg-gold text-gold-foreground"
                : onInk
                  ? "text-ink-foreground/70 hover:text-ink-foreground"
                  : "text-muted-foreground hover:text-foreground",
            )}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}
