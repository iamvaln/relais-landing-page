"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/lib/i18n"
import { cn } from "@/lib/utils"

/**
 * Bouton soleil / lune. Le thème du système s'applique tant que l'on n'a pas
 * cliqué ; le premier clic fixe l'autre thème, mémorisé dans le navigateur.
 * Les deux icônes sont dans le DOM et c'est la classe `dark` qui choisit,
 * donc rien ne diffère entre le rendu serveur et le premier rendu client.
 */
export function ThemeToggle({ onInk = false }: { onInk?: boolean }) {
  const { resolvedTheme, setTheme } = useTheme()
  const { t } = useLanguage()

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={t.nav.theme}
      title={t.nav.theme}
      data-testid="theme-toggle"
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-full border transition-colors",
        onInk
          ? "border-ink-foreground/25 text-ink-foreground/70 hover:text-ink-foreground"
          : "border-border bg-card text-muted-foreground hover:text-foreground",
      )}
    >
      <Sun className="size-4 dark:hidden" aria-hidden="true" />
      <Moon className="hidden size-4 dark:block" aria-hidden="true" />
    </button>
  )
}
