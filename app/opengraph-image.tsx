import { ImageResponse } from "next/og"

export const alt = "Relais — Pass the Relais, not the chaos."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="200" height="200" fill="none">
  <path d="M28 76 V22 A14 14 0 0 1 28 50" stroke="#C4A882" stroke-width="7" stroke-linejoin="round"/>
  <path d="M28 50 Q40 60 50 70" stroke="#C4A882" stroke-width="7" stroke-linecap="round"/>
  <path d="M72 76 V22 A14 14 0 0 0 72 50" stroke="#8B5C2A" stroke-width="7" stroke-linejoin="round"/>
  <path d="M72 50 Q60 60 50 70" stroke="#8B5C2A" stroke-width="7" stroke-linecap="round"/>
  <circle cx="50" cy="70" r="8" fill="#F4A335"/>
</svg>`

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#FAF8F5",
        padding: 80,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        width={200}
        height={200}
        alt="Relais"
        src={`data:image/svg+xml;base64,${Buffer.from(mark).toString("base64")}`}
      />
      <div
        style={{
          marginTop: 28,
          fontSize: 40,
          letterSpacing: 16,
          fontWeight: 600,
          color: "#3a2a18",
        }}
      >
        RELAIS
      </div>
      <div
        style={{
          marginTop: 24,
          fontSize: 56,
          fontWeight: 600,
          color: "#2a1f12",
          textAlign: "center",
          maxWidth: 880,
          lineHeight: 1.15,
        }}
      >
        Pass the Relais, not the chaos.
      </div>
      <div
        style={{
          marginTop: 20,
          fontSize: 26,
          color: "#7a6a55",
          textAlign: "center",
          maxWidth: 760,
          lineHeight: 1.4,
        }}
      >
        Securely hand off your digital accounts to the people you trust — exactly as you decided.
      </div>
    </div>,
    size,
  )
}
