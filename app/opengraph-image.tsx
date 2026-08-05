import { ImageResponse } from "next/og"

export const alt = "Lucimeire Xavier Advocacia — Direito Tributário em São Bernardo do Campo"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

/** Shared OG preview for the site (WhatsApp, LinkedIn, Facebook, etc.). */
export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "linear-gradient(145deg, #111721 0%, #1A212B 48%, #151b24 100%)",
        color: "#FEFBD7",
        padding: "56px 64px",
        fontFamily: "Georgia, 'Times New Roman', serif",
        position: "relative",
      }}
    >
      {/* Grid-like dots */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.12,
          backgroundImage:
            "linear-gradient(rgba(206,167,133,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(206,167,133,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Bronze orb */}
      <div
        style={{
          position: "absolute",
          right: -80,
          top: -60,
          width: 380,
          height: 380,
          borderRadius: 9999,
          background: "radial-gradient(circle, rgba(206,167,133,0.35) 0%, rgba(206,167,133,0) 70%)",
        }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 28, position: "relative" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "10px 18px",
            borderRadius: 9999,
            border: "1px solid rgba(206,167,133,0.35)",
            background: "rgba(206,167,133,0.12)",
            color: "#CEA785",
            fontSize: 22,
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            width: "fit-content",
            fontWeight: 600,
          }}
        >
          Advocacia tributária estratégica
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            maxWidth: 920,
          }}
        >
          <div
            style={{
              fontSize: 64,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#FEFBD7",
              fontWeight: 600,
            }}
          >
            Lucimeire Xavier Advocacia
          </div>
          <div
            style={{
              fontSize: 32,
              lineHeight: 1.35,
              color: "rgba(206,167,133,0.95)",
              fontFamily: "system-ui, sans-serif",
              fontWeight: 400,
              maxWidth: 880,
            }}
          >
            Direito tributário para empresas e clínicas — com clareza, prevenção e segurança
            jurídica.
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          position: "relative",
          borderTop: "1px solid rgba(206,167,133,0.25)",
          paddingTop: 28,
        }}
      >
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {["São Bernardo do Campo", "ABC", "Brasil"].map((label) => (
            <div
              key={label}
              style={{
                padding: "10px 18px",
                borderRadius: 9999,
                border: "1px solid rgba(206,167,133,0.3)",
                background: "rgba(0,0,0,0.25)",
                color: "#FEFBD7",
                fontSize: 20,
                fontFamily: "system-ui, sans-serif",
              }}
            >
              {label}
            </div>
          ))}
        </div>
        <div
          style={{
            color: "#CEA785",
            fontSize: 22,
            fontFamily: "system-ui, sans-serif",
            letterSpacing: "0.04em",
          }}
        >
          lucimeirexavieradvocacia.adv.br
        </div>
      </div>
    </div>,
    { ...size }
  )
}
