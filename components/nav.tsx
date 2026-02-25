"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "What is Footzoning", href: "#what-is-footzoning" },
  { label: "Services", href: "#services" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor:
            scrolled || menuOpen ? "rgba(237,235,230,0.97)" : "transparent",
          backdropFilter: scrolled || menuOpen ? "blur(8px)" : "none",
          borderBottom:
            scrolled || menuOpen
              ? "1px solid rgba(160,128,96,0.15)"
              : "none",
        }}
      >
        <div
          className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between"
          style={{ height: 72 }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "var(--font-cormorant, serif)",
              fontSize: "1.15rem",
              fontWeight: 500,
              color: "#1E1610",
              letterSpacing: "0.04em",
              textDecoration: "none",
            }}
          >
            Gracie&apos;s Footzoning
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map(({ label, href }) => (
              <a key={label} href={href} className="nav-link">
                {label}
              </a>
            ))}
            <a
              href="https://calendly.com/graciehux5"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
              style={{ padding: "10px 24px", fontSize: "0.65rem" }}
            >
              Book
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] p-2"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: "block",
                width: 22,
                height: 1,
                backgroundColor: "#1E1610",
                transition: "transform 0.3s, opacity 0.3s",
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 1,
                backgroundColor: "#1E1610",
                transition: "opacity 0.3s",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 22,
                height: 1,
                backgroundColor: "#1E1610",
                transition: "transform 0.3s, opacity 0.3s",
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-400"
          style={{
            maxHeight: menuOpen ? 360 : 0,
            backgroundColor: "rgba(237,235,230,0.97)",
          }}
        >
          <div
            className="flex flex-col px-6 pb-8 gap-6"
            style={{ paddingTop: "1.5rem" }}
          >
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="nav-link"
                style={{ fontSize: "0.75rem" }}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              href="https://calendly.com/graciehux5"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark"
              style={{ padding: "13px 28px", fontSize: "0.65rem", textAlign: "center" }}
              onClick={() => setMenuOpen(false)}
            >
              Book a Session
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
