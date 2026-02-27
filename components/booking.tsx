export default function Booking() {
  return (
    <section
      className="px-6 py-16 md:px-16 md:py-24 text-center"
      style={{ backgroundColor: "#5c6a57" }}
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
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
          Ready to begin?
        </p>

        <h2
          style={{
            fontFamily: "var(--font-cormorant, serif)",
            fontWeight: 300,
            fontSize: "clamp(2.6rem, 6vw, 4.5rem)",
            color: "#EDEBE6",
            lineHeight: 1.05,
          }}
        >
          Your first step toward
          <br />
          <em>feeling whole.</em>
        </h2>

        <p
          style={{
            fontFamily: "var(--font-inter, sans-serif)",
            fontSize: "0.875rem",
            fontWeight: 300,
            color: "#C4A882",
            lineHeight: 1.8,
            maxWidth: 440,
          }}
        >
          Sessions are held in the comfort of your own home. Choose a
          time that works for you and Gracie will take care of the rest.
        </p>

        <a
          href="https://calendly.com/graciehux5"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-light"
        >
          Schedule here
        </a>
      </div>
    </section>
  );
}
