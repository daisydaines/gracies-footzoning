export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "88svh", minHeight: 560 }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1800&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />

      {/* Mobile overlay */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ backgroundColor: "rgba(237,235,230,0.74)" }}
      />
      {/* Desktop directional overlay */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            "linear-gradient(to right, rgba(237,235,230,0.90) 0%, rgba(237,235,230,0.58) 50%, rgba(237,235,230,0.12) 100%)",
        }}
      />

      <div className="relative h-full max-w-7xl mx-auto px-6 md:px-16 flex flex-col justify-center">
        <p
          style={{
            fontFamily: "var(--font-inter, sans-serif)",
            fontSize: "0.6rem",
            fontWeight: 500,
            color: "#A08060",
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            marginBottom: "1.25rem",
          }}
        >
          Holistic Wellness · Lehi, UT
        </p>

        <h1
          style={{
            fontFamily: "var(--font-cormorant, serif)",
            fontWeight: 300,
            fontSize: "clamp(3.4rem, 10vw, 7rem)",
            lineHeight: 1.0,
            color: "#1A2822",
            marginBottom: "1.25rem",
          }}
        >
          Restore.
          <br />
          Rebalance.
          <br />
          Renew.
        </h1>

        <p
          style={{
            fontFamily: "var(--font-inter, sans-serif)",
            fontSize: "0.875rem",
            fontWeight: 300,
            color: "#6B5A48",
            lineHeight: 1.8,
            maxWidth: 360,
            marginBottom: "1.75rem",
          }}
        >
          A deeply restorative therapy that works through your body&apos;s energy
          systems — helping you heal from the inside out.
        </p>

        <a
          href="https://calendly.com/graciehux5"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-dark"
        >
          Book a Session
        </a>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        style={{ opacity: 0.3 }}
      >
        <div style={{ width: 1, height: 40, backgroundColor: "#A08060" }} />
      </div>
    </section>
  );
}
