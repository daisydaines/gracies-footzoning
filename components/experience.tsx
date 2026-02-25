"use client";

import { useState } from "react";

const panels = [
  {
    num: "01",
    title: "To Arrive",
    body: "Come as you are. Wear comfortable clothing, arrive a few minutes early, and leave the outside world at the door. No preparation needed.",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80",
  },
  {
    num: "02",
    title: "To Release",
    body: "Sink into the session. Your practitioner will work methodically through each signal point, gently guiding your body toward balance and ease.",
    img: "https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=800&q=80",
  },
  {
    num: "03",
    title: "To Renew",
    body: "Leave feeling lighter. Many clients notice improved sleep, clearer energy, and a deep sense of calm — continuing to unfold in the days after.",
    img: "https://images.unsplash.com/photo-1536623975707-c4b3b2af565d?w=800&q=80",
  },
];

export default function Experience() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: "#1E3028" }}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 flex items-end justify-between pt-12 pb-8 md:pt-14 md:pb-10">
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

      {/* Panels */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {panels.map((panel, i) => (
          <div
            key={i}
            className="relative overflow-hidden"
            style={{
              borderTop: "1px solid rgba(160,128,96,0.15)",
              borderRight:
                i < panels.length - 1
                  ? "1px solid rgba(160,128,96,0.12)"
                  : "none",
              cursor: "default",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className="absolute inset-0 transition-opacity duration-700"
              style={{
                backgroundImage: `url('${panel.img}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                opacity: hovered === i ? 0.28 : 0.1,
              }}
            />

            <div
              className="relative flex flex-col justify-end"
              style={{
                padding: "2rem 2rem 2.5rem",
                minHeight: "clamp(200px, 28vw, 380px)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cormorant, serif)",
                  fontSize: "0.7rem",
                  color: "#A08060",
                  letterSpacing: "0.2em",
                  marginBottom: "0.75rem",
                }}
              >
                {panel.num}
              </p>

              <h3
                style={{
                  fontFamily: "var(--font-cormorant, serif)",
                  fontWeight: 300,
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#EDEBE6",
                  lineHeight: 1.05,
                  marginBottom: "0.75rem",
                  transition: "transform 0.4s",
                  transform: hovered === i ? "translateY(-3px)" : "translateY(0)",
                }}
              >
                {panel.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                  fontSize: "0.8rem",
                  fontWeight: 300,
                  color: "#C4A882",
                  lineHeight: 1.7,
                  maxWidth: 280,
                  transition: "opacity 0.4s",
                  opacity: hovered === i ? 1 : 0.65,
                }}
              >
                {panel.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
