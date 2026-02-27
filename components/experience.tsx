"use client";

const panels = [
  {
    num: "01",
    title: "To Arrive",
    body: "Come as you are. Wear comfortable clothing, arrive a few minutes early, and leave the outside world at the door. No preparation needed.",
    img: "https://plus.unsplash.com/premium_photo-1723532450234-b1ab127c0cba?w=800&q=80",
  },
  {
    num: "02",
    title: "To Release",
    body: "Sink into the session. Your practitioner will work methodically through each signal point, gently guiding your body toward balance and ease.",
    img: "https://plus.unsplash.com/premium_photo-1661767920769-0397d5c02c33?w=800&q=80",
  },
  {
    num: "03",
    title: "To Renew",
    body: "Leave feeling lighter. Many clients notice improved sleep, clearer energy, and a deep sense of calm — continuing to unfold in the days after.",
    img: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=800&q=80",
  },
];

export default function Experience() {
  return (
    <section>
      {/* Sage green header bar */}
      <div style={{ backgroundColor: "#5c6a57" }}>
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex items-end justify-between pt-12 pb-10 md:pt-14 md:pb-12">
          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              fontSize: "0.6rem",
              fontWeight: 500,
              color: "#A08060",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            The Experience
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant, serif)",
              fontWeight: 300,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "#EDEBE6",
              lineHeight: 1.1,
              textAlign: "right",
            }}
          >
            What to expect
          </h2>
        </div>
      </div>

      {/* Oval cards on cream */}
      <div style={{ backgroundColor: "var(--cream)" }} className="px-6 py-16 md:px-16 md:py-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {panels.map((panel, i) => (
            <div key={i} className="flex flex-col items-center gap-7">
              {/* Pill oval image */}
              <div
                style={{
                  width: "100%",
                  maxWidth: 300,
                  aspectRatio: "3 / 4",
                  borderRadius: 9999,
                  overflow: "hidden",
                  flexShrink: 0,
                }}
              >
                <img
                  src={panel.img}
                  alt={panel.title}
                  loading="lazy"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>

              {/* Text below */}
              <div className="flex flex-col items-center gap-3 text-center">
                <p
                  style={{
                    fontFamily: "var(--font-cormorant, serif)",
                    fontSize: "0.7rem",
                    color: "#A08060",
                    letterSpacing: "0.2em",
                  }}
                >
                  {panel.num}
                </p>
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant, serif)",
                    fontWeight: 300,
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    color: "var(--text-dark)",
                    lineHeight: 1.1,
                  }}
                >
                  {panel.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                    fontSize: "0.8rem",
                    fontWeight: 300,
                    color: "var(--text-body)",
                    lineHeight: 1.7,
                    maxWidth: 220,
                  }}
                >
                  {panel.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
