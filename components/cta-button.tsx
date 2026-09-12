import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Variant = "gold" | "outline" | "ink-outline"
type Size = "md" | "lg"

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-px"

const variants: Record<Variant, string> = {
  gold: "bg-gold text-gold-foreground shadow-sm hover:brightness-105 hover:shadow-md",
  outline:
    "border border-border bg-card text-foreground hover:bg-secondary",
  "ink-outline":
    "border border-ink-foreground/30 text-ink-foreground hover:bg-ink-foreground/10",
}

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
}

export function CtaButton({
  children,
  href = "#pricing",
  variant = "gold",
  size = "md",
  withArrow = true,
  className,
}: {
  children: React.ReactNode
  href?: string
  variant?: Variant
  size?: Size
  withArrow?: boolean
  className?: string
}) {
  return (
    <Link
      href={href}
      className={cn(base, variants[variant], sizes[size], className)}
    >
      {children}
      {withArrow && (
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
      )}
    </Link>
  )
}
