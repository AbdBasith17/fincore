import { useState } from "react";
import { Mail, Phone, Clock } from "lucide-react";

const C = {
  navy: "#0B2545",
  gold: "#C9A84C",
  goldLight: "#E8C875",
  goldPale: "#FDF3DC",
  borderGold: "rgba(201,168,76,0.35)",
  border: "rgba(11,37,69,0.10)",
  textSecondary: "#4A6080",
  textMuted: "#8BA3BE",
  bgSection: "#EEF2F7",
};

const SERVICES_LIST = [
  "GST Registration & Filing",
  "Tax Filing (ITR / TDS / TCS)",
  "Accounting & Bookkeeping",
  "Business Registration",
  "Financial Advisory",
  "Internal Audit",
  "Virtual CFO",
  "Tax Planning",
  "Project Finance Management",
  "Reports & MIS",
];

const CONTACT_DETAILS = [
  { icon: <Mail size={20} strokeWidth={1.6} color={C.gold}/>,  label: "EMAIL US",      value: "fincorehq@gmail.com" },
  { icon: <Phone size={20} strokeWidth={1.6} color={C.gold}/>, label: "CALL US",       value: "+91 7025 8815 92" },
  { icon: <Clock size={20} strokeWidth={1.6} color={C.gold}/>, label: "WORKING HOURS", value: "Mon – Sat, 9 AM – 7 PM IST" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit() {
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  }

  return (
    <section
      id="contact"
      className="pad-section"
      style={{ padding: "100px 60px", background: C.bgSection }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            fontSize: 11, fontWeight: 600, color: C.gold,
            letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 10,
          }}>Get In Touch</div>
          <div style={{ width: 40, height: 3, background: C.gold, borderRadius: 2, margin: "0 auto 20px" }}/>
          <h2 className="albula" style={{
            fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700,
            color: C.navy, lineHeight: 1.15, maxWidth: 540, margin: "0 auto 16px",
          }}>
            Start Your Journey<br/>
            <span style={{ color: C.gold }}>with Fincore</span>
          </h2>
          <p style={{ fontSize: 16, color: C.textSecondary, lineHeight: 1.7, maxWidth: 460, margin: "0 auto" }}>
            Ready to simplify your compliance? The first consultation is free — let's talk.
          </p>
        </div>

        <div
          className="two-col"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "start" }}
        >

          {/* ── Form ── */}
          <div
            className="reveal from-left"
            style={{
              background: "#fff", border: `1px solid ${C.border}`,
              borderRadius: 20, padding: "44px 40px",
              boxShadow: "0 4px 40px rgba(11,37,69,0.06)",
            }}
          >
            <h3 className="albula" style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 6 }}>
              Send Us a Message
            </h3>
            <p style={{ fontSize: 14, color: C.textMuted, marginBottom: 28 }}>
              We'll get back to you within 24 hours.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: C.textSecondary, marginBottom: 6 }}>Full Name</label>
                <input className="fc-input" type="text" placeholder="Rahul Sharma"/>
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: C.textSecondary, marginBottom: 6 }}>Phone Number</label>
                <input className="fc-input" type="tel" placeholder="+91 98765 43210"/>
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: C.textSecondary, marginBottom: 6 }}>Email Address</label>
              <input className="fc-input" type="email" placeholder="you@company.com"/>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: C.textSecondary, marginBottom: 6 }}>Service Needed</label>
              <select className="fc-input">
                <option value="">Select a service…</option>
                {SERVICES_LIST.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div style={{ marginBottom: 24 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: C.textSecondary, marginBottom: 6 }}>Message</label>
              <textarea className="fc-input" rows={4} placeholder="Tell us about your business and what you need help with…"/>
            </div>

            <button
              className="btn-gold"
              style={{ width: "100%", justifyContent: "center", fontSize: 15, padding: "14px" }}
              onClick={handleSubmit}
            >
              {sent ? "✓ Message Sent!" : "Send Message →"}
            </button>
          </div>

          {/* ── Info ── */}
          <div className="reveal from-right">
            <h3 className="albula" style={{
              fontSize: 30, fontWeight: 700, color: C.navy, marginBottom: 12, lineHeight: 1.25,
            }}>
              Let's talk about<br/>
              <span style={{ color: C.gold }}>your finances.</span>
            </h3>
            <p style={{ fontSize: 15, color: C.textSecondary, lineHeight: 1.78, marginBottom: 40 }}>
              Whether you're just starting out or scaling fast, we have the expertise and dedication to support every financial milestone.
            </p>

            {CONTACT_DETAILS.map(d => (
              <div key={d.label} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 10, flexShrink: 0,
                  background: C.goldPale, border: `1px solid ${C.borderGold}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {d.icon}
                </div>
                <div>
                  <div style={{ fontSize: 11, color: C.textMuted, letterSpacing: "1px", marginBottom: 3 }}>{d.label}</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: C.navy }}>{d.value}</div>
                </div>
              </div>
            ))}

            {/* Quote */}
            <div style={{
              marginTop: 16, padding: "28px 32px",
              background: C.goldPale, border: `1px solid ${C.borderGold}`,
              borderRadius: 14,
            }}>
              <div className="albula" style={{
                fontSize: 17, fontWeight: 600, color: C.navy,
                fontStyle: "italic", lineHeight: 1.6, marginBottom: 8,
              }}>
                "Simplifying Compliance.<br/>Empowering Businesses."
              </div>
              <div style={{ fontSize: 12, color: C.textMuted }}>
                — Fincore Financial Advisory & Compliance
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}