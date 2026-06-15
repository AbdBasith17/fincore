import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import  logo from "../assets/logo.png";
import logoname from "../assets/logoname.png"

const LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Services", href: "#services" },
  { label: "Why Us",   href: "#why-us"   },
  { label: "Contact",  href: "#contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navBg = scrolled
    ? "rgba(246,244,240,0.96)"
    : "transparent";

  return (
    <>
      <nav
        className="pad-nav"
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          display: "flex", alignItems: "center", justifyContent: "space-between",
          padding: "14px 60px",
          background: navBg,
          backdropFilter: scrolled ? "blur(14px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(11,37,69,0.08)" : "1px solid transparent",
          transition: "all 0.3s",
        }}
      >
        {/* ── Logo ── */}
        <a
          href="#"
          style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none" }}
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
        >
          {/* <img
            src={logo}
            alt="Fincore icon"
            style={{ height: 42, width: "auto", objectFit: "contain" }}
          /> */}
          <img
            src={logoname}
            alt="FINCORE"
            style={{ height: 26, width: "auto", objectFit: "contain" }}
          />
        </a>

        {/* ── Desktop links ── */}
        <ul
          className="hide-mobile"
          style={{ display: "flex", gap: 36, listStyle: "none", alignItems: "center" }}
        >
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a className="nav-link" href={href}>{label}</a>
            </li>
          ))}
        </ul>

        {/* ── CTA ── */}
        <a
          className="btn-gold hide-mobile"
          href="#contact"
          style={{ padding: "10px 22px", fontSize: 14 }}
        >
          Get Started
        </a>

        {/* ── Hamburger ── */}
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "none", background: "none", border: "none",
            cursor: "pointer", color: "var(--navy)", padding: 4,
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        style={{
          position: "fixed", top: 68, left: 0, right: 0, zIndex: 99,
          background: "#fff",
          borderBottom: "1px solid var(--border)",
          padding: open ? "20px 24px" : "0 24px",
          maxHeight: open ? 320 : 0,
          overflow: "hidden",
          transition: "all 0.3s ease",
          boxShadow: open ? "var(--shadow-md)" : "none",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              className="nav-link"
              href={href}
              style={{ fontSize: 16 }}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            className="btn-gold"
            href="#contact"
            style={{ textAlign: "center", marginTop: 4 }}
            onClick={() => setOpen(false)}
          >
            Get Started
          </a>
        </div>
      </div>

      {/* Responsive show-mobile */}
      <style>{`
        @media (max-width: 900px) {
          .show-mobile { display: flex !important; }
          .hide-mobile { display: none !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}