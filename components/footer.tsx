export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#131D18" }}>
      <div style={{ height: 1, backgroundColor: "rgba(160,128,96,0.2)" }} />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 px-6 py-8 md:px-16 md:py-10">
        {/* Brand */}
        <div className="flex flex-col gap-1.5">
          <span
            style={{
              fontFamily: "var(--font-cormorant, serif)",
              fontSize: "1.1rem",
              fontWeight: 500,
              color: "#EDEBE6",
              letterSpacing: "0.04em",
            }}
          >
            Gracie&apos;s Footzoning
          </span>
          <span
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              fontSize: "0.65rem",
              fontWeight: 300,
              color: "#7A6A50",
              letterSpacing: "0.1em",
            }}
          >
            Holistic wellness · Lehi, UT
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap gap-8">
          {[
            { label: "About", href: "#about" },
            { label: "What is Footzoning", href: "#what-is-footzoning" },
            { label: "Services", href: "#services" },
            { label: "Instagram", href: "https://instagram.com/graciehux5" },
          ].map(({ label, href }) => (
            <a key={label} href={href} className="footer-link">
              {label}
            </a>
          ))}
        </nav>

        {/* Contact */}
        <a href="mailto:graciehux5@gmail.com" className="footer-link">
          graciehux5@gmail.com
        </a>
      </div>

      <div
        className="px-6 py-4 md:px-16 text-center"
        style={{ borderTop: "1px solid rgba(160,128,96,0.1)" }}
      >
        <p
          style={{
            fontFamily: "var(--font-inter, sans-serif)",
            fontSize: "0.6rem",
            fontWeight: 300,
            color: "#3A5448",
            letterSpacing: "0.08em",
          }}
        >
          © {new Date().getFullYear()} Gracie&apos;s Footzoning. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
