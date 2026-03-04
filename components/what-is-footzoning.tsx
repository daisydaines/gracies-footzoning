export default function WhatIsFootzoning() {
  return (
    <section id="what-is-footzoning" style={{ backgroundColor: "#E4DDD5" }}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Text */}
        <div className="flex flex-col justify-center px-6 py-12 md:px-14 md:py-16 lg:pl-24 lg:pr-16">
          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              fontSize: "0.6rem",
              fontWeight: 500,
              color: "#A08060",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            What is Footzoning?
          </p>

          <h2
            style={{
              fontFamily: "var(--font-cormorant, serif)",
              fontWeight: 300,
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              lineHeight: 1.1,
              color: "#2a342a",
              marginBottom: "1.25rem",
            }}
          >
            An ancient practice,
            <br />
            <em>modern healing.</em>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              fontSize: "0.875rem",
              fontWeight: 300,
              color: "#6B5A48",
              lineHeight: 1.85,
              marginBottom: "1rem",
            }}
          >
            Footzoning is based on the belief that every cell, organ, and system
            in your body has a corresponding signal point in the foot. A trained
            practitioner works through these points to release blocked energy,
            improve circulation, and support your body&apos;s natural ability to heal.
          </p>

          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              fontSize: "0.875rem",
              fontWeight: 300,
              color: "#6B5A48",
              lineHeight: 1.85,
            }}
          >
            Unlike reflexology alone, footzoning follows a complete anatomical
            map across the foot — addressing the whole body in a single session.
          </p>
        </div>

        {/* Image — above text on mobile */}
        <div className="relative min-h-[260px] md:min-h-0 order-first md:order-last">
          <img
            src="/home_heel.png"
            alt="Foot care treatment"
            className="w-full h-full object-cover"
            loading="lazy"
            style={{ display: "block" }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.28)" }} />
        </div>
      </div>
    </section>
  );
}
