import  logo from "../assets/logo.png";
import logoname from "../assets/logoname.png"

const LINKS = [
  { label: "About",    href: "#about"    },
  { label: "Services", href: "#services" },
  { label: "Why Us",   href: "#why-us"   },
  { label: "Contact",  href: "#contact"  },
];

export default function Footer() {
  return (
    <footer style={{
      background: "#0B2545",
      borderTop: "2px solid #C9A84C",
    }}>
      {/* Main footer row */}
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        padding: "48px 60px 32px",
        display: "grid",
        gridTemplateColumns: "1fr auto 1fr",
        gap: 40,
        alignItems: "start",
      }}
        className="footer-grid"
      >
        {/* Logo + tagline */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
            <img
              src={logo}
              alt="Fincore"
              style={{ height: 38, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
            />
            <img
              src={logoname}
              alt="FINCORE"
              style={{ height: 22, width: "auto", objectFit: "contain", filter: "brightness(0) invert(1)" }}
            />
          </div>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: 280 }}>
            At the core of every decision. Your trusted partner in financial compliance and growth.
          </p>
        </div>

        {/* Nav links */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#C9A84C", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 16 }}>
            Navigation
          </div>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
            {LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} style={{
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  fontSize: 14,
                  transition: "color 0.2s",
                }}
                  onMouseEnter={e => e.target.style.color = "#C9A84C"}
                  onMouseLeave={e => e.target.style.color = "rgba(255,255,255,0.6)"}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, color: "#C9A84C", letterSpacing: "2px", textTransform: "uppercase", marginBottom: 16 }}>
            Contact
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              ["📧", "fincorehq@gmail.com"],
              ["📞", "+91 7025 8815 92"],
              ["🕐", "Mon – Sat, 9 AM – 7 PM IST"],
            ].map(([icon, val]) => (
              <div key={val} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "rgba(255,255,255,0.6)" }}>
                <span>{icon}</span> {val}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "20px 60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
        maxWidth: "100%",
      }}>
        <span style={{ fontSize: 12, color: "rgba(255,255,255,0.35)" }}>
          © 2026 Fincore Financial Advisory & Compliance. All rights reserved.
        </span>
        <span style={{
          fontFamily: "'Albula Pro', 'Inter', sans-serif",
          fontSize: 13,
          color: "rgba(201,168,76,0.65)",
          fontStyle: "italic",
        }}>
          Simplifying Compliance. Empowering Businesses.
        </span>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            padding: 40px 24px 28px !important;
          }
        }
      `}</style>
    </footer>
  );
}