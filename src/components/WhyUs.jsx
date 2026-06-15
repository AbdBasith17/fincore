import { CheckCircle2, Award, Users, Zap } from "lucide-react";

const C = {
  navy: "#0B2545",
  gold: "#C9A84C",
  goldPale: "#FDF3DC",
  borderGold: "rgba(201,168,76,0.35)",
  border: "rgba(11,37,69,0.10)",
  textSecondary: "#4A6080",
};

const PILLARS = [
  { icon: <CheckCircle2 size={26} strokeWidth={1.5} color={C.gold}/>, title: "Accurate", desc: "Every figure verified — zero tolerance for errors in any filing or report we handle." },
  { icon: <Award size={26} strokeWidth={1.5} color={C.gold}/>,        title: "Professional", desc: "Qualified professionals with deep expertise across GST, tax, and company law." },
  { icon: <Users size={26} strokeWidth={1.5} color={C.gold}/>,        title: "Dedicated", desc: "A dedicated relationship manager for every client — always one call away." },
  { icon: <Zap size={26} strokeWidth={1.5} color={C.gold}/>,          title: "Growth-Focused", desc: "We go beyond compliance to advise on opportunities that strengthen your business." },
];

const PROCESS = [
  { title: "Initial Consultation", desc: "We understand your business structure, compliance status, and financial goals in a detailed discovery session." },
  { title: "Tailored Service Plan", desc: "We design a customised engagement — selecting services, timelines, and deliverables that match your needs." },
  { title: "Execution & Filing",   desc: "Our team handles all filings, registrations, and documentation with meticulous attention to deadlines." },
  { title: "Ongoing Advisory",     desc: "We stay with you — proactive alerts, strategy updates, and reviews as your business evolves." },
];

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="pad-section"
      style={{ padding: "100px 60px", background: "#fff" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            fontSize: 11, fontWeight: 600, color: C.gold,
            letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 10,
          }}>Why Fincore</div>
          <div style={{ width: 40, height: 3, background: C.gold, borderRadius: 2, margin: "0 auto 20px" }}/>
          <h2 className="albula" style={{
            fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700,
            color: C.navy, lineHeight: 1.15, maxWidth: 520, margin: "0 auto 16px",
          }}>
            Your Growth is<br/>
            <span style={{ color: C.gold }}>Our Responsibility</span>
          </h2>
          <p style={{ fontSize: 16, color: C.textSecondary, lineHeight: 1.7, maxWidth: 500, margin: "0 auto" }}>
            We don't just file returns — we build the financial infrastructure that lets your business thrive.
          </p>
        </div>

        {/* Pillars + Timeline */}
        <div
          className="two-col"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "start" }}
        >
          {/* Pillars */}
          <div className="reveal from-left" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {PILLARS.map(p => (
              <div key={p.title} className="pillar-card">
                <div style={{ marginBottom: 14 }}>{p.icon}</div>
                <div className="albula" style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 8 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.6 }}>{p.desc}</div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="reveal from-right">
            <div style={{
              fontSize: 11, fontWeight: 600, color: C.gold,
              letterSpacing: "2px", textTransform: "uppercase", marginBottom: 28,
            }}>How We Work</div>

            <div style={{ position: "relative", paddingLeft: 28 }}>
              <div style={{
                position: "absolute", left: 0, top: 8, bottom: 8, width: 2,
                background: `linear-gradient(to bottom, ${C.gold}, rgba(201,168,76,0.1))`,
              }}/>
              {PROCESS.map((p, i) => (
                <div key={p.title} style={{ position: "relative", marginBottom: i < PROCESS.length - 1 ? 36 : 0 }}>
                  {/* Dot */}
                  <div style={{
                    position: "absolute", left: -33, top: 4,
                    width: 18, height: 18, borderRadius: "50%",
                    background: C.gold,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <div style={{ width: 7, height: 7, background: "#fff", borderRadius: "50%" }}/>
                  </div>
                  <div className="albula" style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: 14, color: C.textSecondary, lineHeight: 1.7 }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}