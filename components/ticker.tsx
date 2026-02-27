const SEP = "\u00A0\u00A0\u00A0\u00A0\u00A0·\u00A0\u00A0\u00A0\u00A0\u00A0";

const row1Items = ["Release", "Restore", "Renew", "Breathe", "Begin again", "Heal from within"];
const row2Items = ["every signal point", "every system", "every session", "entirely yours", "one breath at a time"];

const strip1 = (row1Items.join(SEP) + SEP).repeat(4);
const strip2 = (row2Items.join(SEP) + SEP).repeat(4);

export default function Ticker() {
  return (
    <>
      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>

      <section
        style={{
          backgroundColor: "var(--cream)",
          overflow: "hidden",
          paddingTop: "1.4rem",
          paddingBottom: "1.4rem",
          borderTop: "1px solid rgba(160,128,96,0.12)",
          borderBottom: "1px solid rgba(160,128,96,0.12)",
        }}
      >
        {/* Row 1 — Cormorant, sage green */}
        <div style={{ overflow: "hidden", marginBottom: "0.55rem" }}>
          <div
            style={{
              display: "flex",
              width: "max-content",
              animationName: "ticker",
              animationDuration: "150s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          >
            <span style={{ fontFamily: "var(--font-cormorant, serif)", fontWeight: 300, fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)", color: "var(--green)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>{strip1}</span>
            <span style={{ fontFamily: "var(--font-cormorant, serif)", fontWeight: 300, fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)", color: "var(--green)", letterSpacing: "0.04em", whiteSpace: "nowrap" }}>{strip1}</span>
          </div>
        </div>

        {/* Row 2 — Inter uppercase, tan */}
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              width: "max-content",
              animationName: "ticker",
              animationDuration: "200s",
              animationTimingFunction: "linear",
              animationIterationCount: "infinite",
            }}
          >
            <span style={{ fontFamily: "var(--font-inter, sans-serif)", fontWeight: 300, fontSize: "clamp(0.5rem, 0.8vw, 0.65rem)", color: "#A08060", letterSpacing: "0.28em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{strip2}</span>
            <span style={{ fontFamily: "var(--font-inter, sans-serif)", fontWeight: 300, fontSize: "clamp(0.5rem, 0.8vw, 0.65rem)", color: "#A08060", letterSpacing: "0.28em", textTransform: "uppercase", whiteSpace: "nowrap" }}>{strip2}</span>
          </div>
        </div>
      </section>
    </>
  );
}
