const services = [
  {
    name: "Basic Reflexology",
    duration: "30 min",
    description:
      "A focused session covering the primary signal points of the foot — a gentle introduction, ideal for first-timers or those seeking a lighter touch.",
    details: ["One-on-one session", "Full foot coverage", "Lehi, UT studio"],
    bg: "#EDEBE6",
  },
  {
    name: "Extended Reflexology",
    duration: "60 min",
    description:
      "A complete session working through the full anatomical map of the foot — deeper, slower, and more thorough for a full-body restoration.",
    details: ["One-on-one session", "Full body energy mapping", "Lehi, UT studio"],
    bg: "#E4DDD5",
  },
];

export default function Services() {
  return (
    <section id="services" style={{ backgroundColor: "#EDEBE6" }}>
      <div className="max-w-7xl mx-auto px-6 py-12 md:px-16 md:py-16 lg:px-24">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between"
          style={{ marginBottom: "2.5rem" }}
        >
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
            Services
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant, serif)",
              fontWeight: 300,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#1A2822",
              lineHeight: 1.1,
            }}
          >
            Choose your session
          </h2>
        </div>

        {/* Cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ backgroundColor: "rgba(160,128,96,0.2)" }}
        >
          {services.map((service) => (
            <div
              key={service.name}
              className="p-8 md:p-12 flex flex-col"
              style={{ backgroundColor: service.bg }}
            >
              <div
                className="flex items-start justify-between"
                style={{ marginBottom: "1rem" }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-cormorant, serif)",
                    fontWeight: 400,
                    fontSize: "1.75rem",
                    color: "#1A2822",
                    lineHeight: 1.1,
                  }}
                >
                  {service.name}
                </h3>
                <span
                  style={{
                    fontFamily: "var(--font-inter, sans-serif)",
                    fontSize: "0.7rem",
                    color: "#A08060",
                    letterSpacing: "0.1em",
                    marginTop: "0.3rem",
                    marginLeft: "1rem",
                    whiteSpace: "nowrap",
                  }}
                >
                  {service.duration}
                </span>
              </div>

              {/* Fixed min-height keeps both cards aligned */}
              <p
                style={{
                  fontFamily: "var(--font-inter, sans-serif)",
                  fontSize: "0.875rem",
                  fontWeight: 300,
                  color: "#6B5A48",
                  lineHeight: 1.8,
                  marginBottom: "1.75rem",
                  minHeight: "4.5em",
                }}
              >
                {service.description}
              </p>

              <ul style={{ listStyle: "none", marginBottom: "2rem" }}>
                {service.details.map((d) => (
                  <li
                    key={d}
                    style={{
                      fontFamily: "var(--font-inter, sans-serif)",
                      fontSize: "0.75rem",
                      color: "#A08060",
                      letterSpacing: "0.05em",
                      paddingBottom: "0.5rem",
                      borderBottom: "1px solid rgba(160,128,96,0.2)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {d}
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/graciehux5"
                target="_blank"
                rel="noopener noreferrer"
                className="service-card-btn"
              >
                Book this session
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
