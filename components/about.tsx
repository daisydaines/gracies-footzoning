export default function About() {
  return (
    <section id="about" style={{ backgroundColor: "#D8D0C6" }}>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative min-h-[260px] md:min-h-0 order-last md:order-first">
          <img
            src="/home_single.png"
            alt="Gracie - Footzone practitioner"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            style={{ display: "block" }}
          />
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.28)" }} />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-6 py-12 md:px-12 md:py-16 lg:px-16">
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
            About Gracie
          </p>

          <h2
            style={{
              fontFamily: "var(--font-cormorant, serif)",
              fontWeight: 300,
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              lineHeight: 1.15,
              color: "#2a342a",
              marginBottom: "1.25rem",
            }}
          >
            A healing touch,
            <br />
            <em>rooted in intention.</em>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              fontSize: "0.875rem",
              fontWeight: 300,
              color: "#6B5A48",
              lineHeight: 1.85,
              maxWidth: 420,
              marginBottom: "1rem",
            }}
          >
            Hi, I&apos;m Gracie. I&apos;m a certified footzone practitioner based in Lehi,
            Utah. I came to footzoning after experiencing its profound effects
            firsthand — and I&apos;ve since dedicated my practice to helping others
            find that same relief, clarity, and deep restoration.
          </p>

          <p
            style={{
              fontFamily: "var(--font-inter, sans-serif)",
              fontSize: "0.875rem",
              fontWeight: 300,
              color: "#6B5A48",
              lineHeight: 1.85,
              maxWidth: 420,
              marginBottom: "2rem",
            }}
          >
            Every session is one-on-one, unhurried, and tailored entirely to
            you. You&apos;ll never feel rushed or like a number here.
          </p>

          <a
            href="https://calendly.com/graciehux5"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-dark"
          >
            Book with Gracie
          </a>
        </div>
      </div>
    </section>
  );
}
