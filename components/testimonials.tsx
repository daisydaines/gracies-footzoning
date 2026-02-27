const testimonials = [
  {
    quote:
      "I came in with chronic tension I'd carried for years. After two sessions I slept through the night for the first time in months. Gracie has a real gift.",
    name: "Sarah M.",
    location: "Lehi, UT",
  },
  {
    quote:
      "I was skeptical at first — but I could feel a difference immediately. It's deeply calming and surprisingly powerful. I leave every session feeling like myself again.",
    name: "Jessica T.",
    location: "American Fork, UT",
  },
  {
    quote:
      "Gracie is incredibly intuitive. She picked up on things I hadn't even mentioned. I can't recommend her enough.",
    name: "Amanda K.",
    location: "Provo, UT",
  },
];

export default function Testimonials() {
  return (
    <section style={{ backgroundColor: "#E4DDD5" }}>
      <div className="max-w-7xl mx-auto px-6 py-14 md:px-16 md:py-20 lg:px-24">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between" style={{ marginBottom: "3rem" }}>
          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              fontSize: "0.6rem",
              fontWeight: 500,
              color: "#A08060",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            Client stories
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant, serif)",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--text-dark)",
              lineHeight: 1.1,
            }}
          >
            What clients say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(160,128,96,0.15)" }}>
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col justify-between p-8 md:p-10"
              style={{ backgroundColor: "#E4DDD5" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-cormorant, serif)",
                  fontWeight: 300,
                  fontStyle: "italic",
                  fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
                  color: "var(--text-dark)",
                  lineHeight: 1.55,
                  marginBottom: "2rem",
                }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              <div>
                <p
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                    fontSize: "0.7rem",
                    fontWeight: 500,
                    color: "var(--text-dark)",
                    letterSpacing: "0.08em",
                  }}
                >
                  {t.name}
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                    fontSize: "0.6rem",
                    fontWeight: 300,
                    color: "#A08060",
                    letterSpacing: "0.12em",
                    marginTop: "0.2rem",
                  }}
                >
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
