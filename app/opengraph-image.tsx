import { ImageResponse } from "next/og"

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b0c10",
          color: "#ffffff",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, rgba(234,109,31,0.18), transparent 38%), radial-gradient(circle at bottom right, rgba(234,109,31,0.12), transparent 32%)",
          }}
        />
        <div
          style={{
            width: 780,
            height: 220,
            borderRadius: 40,
            border: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(15,17,22,0.9)",
            display: "flex",
            alignItems: "center",
            padding: "0 42px",
            boxShadow: "0 24px 80px rgba(0,0,0,0.4)",
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: 28,
              background: "rgba(234,109,31,0.12)",
              border: "1px solid rgba(234,109,31,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ea6d1f",
              fontSize: 52,
              fontWeight: 700,
              marginRight: 34,
            }}
          >
            EM
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 18,
                fontSize: 86,
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              <span>Exact</span>
              <span style={{ color: "#ea6d1f" }}>Method</span>
            </div>
            <div
              style={{
                marginTop: 18,
                fontSize: 30,
                color: "rgba(255,255,255,0.72)",
              }}
            >
              Online Coaching in Los Angeles
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  )
}
