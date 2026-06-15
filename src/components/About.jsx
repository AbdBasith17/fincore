import { Target, Eye } from "lucide-react";

const C = {
  navy: "#0B2545",
  gold: "#C9A84C",
  goldPale: "#FDF3DC",
  borderGold: "rgba(201,168,76,0.35)",
  border: "rgba(11,37,69,0.10)",
  textSecondary: "#4A6080",
  textMuted: "#8BA3BE",
  bgSection: "#EEF2F7",
};

function SectionEyebrow({ children }) {
  return (
    <>
      <div style={{
        fontSize: 11, fontWeight: 600, color: C.gold,
        letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 10,
      }}>
        {children}
      </div>
      <div style={{
        width: 40, height: 3, background: C.gold,
        borderRadius: 2, marginBottom: 20,
      }}/>
    </>
  );
}

const TAGS = ["GST", "Income Tax", "Company Law", "Accounting", "Audit", "Virtual CFO", "MSME", "Project Finance"];

export default function About() {
  return (
    <section
      id="about"
      className="pad-section"
      style={{ padding: "100px 60px", background: "#fff" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* ── Header ── */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <SectionEyebrow>Who We Are</SectionEyebrow>
          <h2 className="albula" style={{
            fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700,
            color: C.navy, lineHeight: 1.15, maxWidth: 540, margin: "0 auto 16px",
          }}>
            Simplifying Compliance.<br/>
            <span style={{ color: C.gold }}>Empowering Businesses.</span>
          </h2>
        </div>

        {/* ── Two columns ── */}
        <div
          className="two-col"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 72,
            alignItems: "start",
          }}
        >

          {/* ── Left: 3 paragraphs ── */}
          <div className="reveal from-left">
            <p style={{
              fontSize: 15, color: C.textSecondary, lineHeight: 1.85, marginBottom: 28,
              paddingBottom: 28, borderBottom: `1px solid ${C.border}`,
            }}>
              Fincore is a financial advisory and compliance firm built from the ground up with one goal: to be the most reliable partner behind every business decision you make. We understand that navigating India's regulatory landscape can be complex and time-consuming — which is why we've assembled a team of qualified professionals to handle it for you.
            </p>
            <p style={{
              fontSize: 15, color: C.textSecondary, lineHeight: 1.85, marginBottom: 28,
              paddingBottom: 28, borderBottom: `1px solid ${C.border}`,
            }}>
              Whether you're registering a new company, filing GST returns, managing your books, or planning your tax strategy — we bring precision, expertise, and a proactive approach to every engagement. Our work goes beyond compliance; we actively look for opportunities to strengthen your financial position and support your growth.
            </p>
            <p style={{
              fontSize: 15, color: C.textSecondary, lineHeight: 1.85, marginBottom: 32,
            }}>
              Starting fresh, Fincore is committed to building long-term relationships grounded in trust, transparency, and results. Your financial well-being is at the core of everything we do — from the first consultation to ongoing advisory, we are with you every step of the way.
            </p>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {TAGS.map(t => (
                <span key={t} style={{
                  background: C.goldPale,
                  border: `1px solid ${C.borderGold}`,
                  color: "#1a3a5c",
                  padding: "5px 14px", borderRadius: 100,
                  fontSize: 12, fontWeight: 500,
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Mission + Vision cards ── */}
          <div className="reveal from-right" style={{ display: "flex", flexDirection: "column", gap: 24 }}>

            {/* Mission */}
            <div style={{
              background: C.navy,
              borderRadius: 20, padding: 40,
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 0, right: 0,
                width: 180, height: 180,
                background: "radial-gradient(circle, rgba(201,168,76,0.15), transparent 70%)",
                pointerEvents: "none",
              }}/>
              <div style={{
                width: 48, height: 48, borderRadius: 10,
                background: "rgba(201,168,76,0.15)",
                border: "1px solid rgba(201,168,76,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                <Target size={22} color={C.gold} strokeWidth={1.6}/>
              </div>
              <div style={{
                fontSize: 11, fontWeight: 600, color: C.gold,
                letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10,
              }}>
                Our Mission
              </div>
              <h3 className="albula" style={{
                fontSize: 22, fontWeight: 700, color: "#fff",
                marginBottom: 14, lineHeight: 1.3,
              }}>
                Accuracy at Every Step
              </h3>
              <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", lineHeight: 1.75 }}>
                To deliver precise, reliable, and professional financial services that empower businesses to remain compliant, reduce risk, and focus entirely on their growth — with Fincore as their trusted financial backbone.
              </p>
            </div>

            {/* Vision */}
            <div style={{
              background: C.goldPale,
              border: `1.5px solid ${C.borderGold}`,
              borderRadius: 20, padding: 40,
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", bottom: 0, right: 0,
                width: 160, height: 160,
                background: "radial-gradient(circle, rgba(11,37,69,0.06), transparent 70%)",
                pointerEvents: "none",
              }}/>
              <div style={{
                width: 48, height: 48, borderRadius: 10,
                background: "rgba(11,37,69,0.08)",
                border: `1px solid ${C.borderGold}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 20,
              }}>
                <Eye size={22} color={C.navy} strokeWidth={1.6}/>
              </div>
              <div style={{
                fontSize: 11, fontWeight: 600, color: C.navy,
                letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10,
                opacity: 0.6,
              }}>
                Our Vision
              </div>
              <h3 className="albula" style={{
                fontSize: 22, fontWeight: 700, color: C.navy,
                marginBottom: 14, lineHeight: 1.3,
              }}>
                India's Most Trusted Advisory
              </h3>
              <p style={{ fontSize: 14, color: "#4A6080", lineHeight: 1.75 }}>
                To become the most trusted financial advisory partner for businesses across India — known for unwavering integrity, proactive guidance, and the ability to turn financial complexity into clear, actionable opportunity.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}