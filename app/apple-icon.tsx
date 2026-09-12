import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

const mark = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="120" height="120" fill="none">
  <path d="M28 76 V22 A14 14 0 0 1 28 50" stroke="#C4A882" stroke-width="7" stroke-linejoin="round"/>
  <path d="M28 50 Q40 60 50 70" stroke="#C4A882" stroke-width="7" stroke-linecap="round"/>
  <path d="M72 76 V22 A14 14 0 0 0 72 50" stroke="#8B5C2A" stroke-width="7" stroke-linejoin="round"/>
  <path d="M72 50 Q60 60 50 70" stroke="#8B5C2A" stroke-width="7" stroke-linecap="round"/>
  <circle cx="50" cy="70" r="8" fill="#F4A335"/>
</svg>`

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#FAF8F5",
        borderRadius: 40,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        width={120}
        height={120}
        alt="Relais"
        src={`data:image/svg+xml;base64,${Buffer.from(mark).toString("base64")}`}
      />
    </div>,
    size,
  )
}
