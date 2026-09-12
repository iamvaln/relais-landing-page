import { cn } from "@/lib/utils"

/**
 * Relais mark — two mirrored R's, back to back, drawn as strokes.
 * Stems sit on the outer edges (the bodies), the bowls reach inward
 * (the shoulders), and the curved legs (the outstretched arms)
 * converge on a single gold dot — the moment of handoff.
 *
 * Double reading: two R letters at first glance, two figures reaching
 * toward each other on a closer look.
 */
export function RelaisMark({
  className,
  mono = false,
  goldDot = false,
}: {
  className?: string
  /** Use currentColor for the whole mark (for dark sections / watermarks). */
  mono?: boolean
  /** Keep the gold junction dot even in mono mode (focal accent on dark). */
  goldDot?: boolean
}) {
  const left = mono ? "currentColor" : "#C4A882" // warm sand beige — the one giving
  const right = mono ? "currentColor" : "#8B5C2A" // deep warm brown — the one receiving
  const dot = mono && !goldDot ? "currentColor" : "#F4A335" // soft gold — the transmission point

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={cn("h-8 w-8", className)}
    >
      {/* Left R — stem + bowl as one continuous stroke */}
      <path
        d="M28 76 V22 A14 14 0 0 1 28 50"
        stroke={left}
        strokeWidth="7"
        strokeLinecap="butt"
        strokeLinejoin="round"
      />
      {/* Left leg — the outstretched arm, curved for momentum */}
      <path
        d="M28 50 Q40 60 50 70"
        stroke={left}
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Right R — exact horizontal mirror */}
      <path
        d="M72 76 V22 A14 14 0 0 0 72 50"
        stroke={right}
        strokeWidth="7"
        strokeLinecap="butt"
        strokeLinejoin="round"
      />
      <path
        d="M72 50 Q60 60 50 70"
        stroke={right}
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* The handoff — gold junction dot */}
      <circle cx="50" cy="70" r="8" fill={dot} />
    </svg>
  )
}

export function RelaisLogo({
  className,
  markClassName,
  mono = false,
  stacked = false,
}: {
  className?: string
  markClassName?: string
  mono?: boolean
  /** Stack the wordmark centered beneath the icon. */
  stacked?: boolean
}) {
  if (stacked) {
    return (
      <span className={cn("inline-flex flex-col items-center gap-2", className)}>
        <RelaisMark className={markClassName} mono={mono} />
        <span className="font-heading text-lg font-medium tracking-[0.2em] uppercase">
          Relais
        </span>
      </span>
    )
  }

  return (
    <span className={cn("flex items-center gap-2", className)}>
      <RelaisMark className={markClassName} mono={mono} />
      <span className="font-heading text-xl font-semibold tracking-[0.12em]">
        Relais
      </span>
    </span>
  )
}
