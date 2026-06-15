import { useState } from "react";
import {
  FileText, ClipboardList, BookOpen, Building2,
  TrendingUp, ShieldCheck, UserCog, Target,
  FolderKanban, BarChart3, ArrowRight, ChevronDown, ChevronUp,
  MessageCircle,
} from "lucide-react";

const C = {
  navy: "#0B2545",
  navyMid: "#1a3a5c",
  gold: "#C9A84C",
  goldLight: "#E8C875",
  goldPale: "#FDF3DC",
  borderGold: "rgba(201,168,76,0.35)",
  border: "rgba(11,37,69,0.10)",
  textSecondary: "#4A6080",
  textMuted: "#8BA3BE",
  bgSection: "#EEF2F7",
};

const MAJOR = [
  {
    icon: <FileText size={28} strokeWidth={1.5}/>,
    name: "GST Registration & Filing",
    sub: "GST · IGST · Input Tax Credit",
    desc: "Complete GST lifecycle management — from registration to monthly/quarterly returns, reconciliation, and ITC advisory. Never miss a deadline again.",
    badge: "Most Popular",
    accent: C.gold,
  },
  {
    icon: <ClipboardList size={28} strokeWidth={1.5}/>,
    name: "Tax Filing",
    sub: "ITR · TDS · TCS",
    desc: "Accurate and timely income tax, TDS, and TCS filings for individuals, firms, and corporates. We optimise your returns while keeping you fully compliant.",
    accent: C.navy,
  },
  {
    icon: <BookOpen size={28} strokeWidth={1.5}/>,
    name: "Accounting & Bookkeeping",
    sub: "P&L · Balance Sheet · MIS",
    desc: "Systematic, real-time financial recordkeeping and reporting that gives you a crystal-clear picture of your business health — anytime you need it.",
    accent: C.gold,
  },
  {
    icon: <Building2 size={28} strokeWidth={1.5}/>,
    name: "Business Registration",
    sub: "Company · LLP · MSME",
    desc: "From choosing the right structure to filing every document — we handle end-to-end business registration so you can start operating with confidence.",
    accent: C.navy,
  },
  {
    icon: <TrendingUp size={28} strokeWidth={1.5}/>,
    name: "Financial Advisory",
    sub: "Strategy · Planning · Analysis",
    desc: "Strategic financial guidance tailored to your business — cash flow management, profitability planning, and investment decisions that drive sustainable growth.",
    accent: C.gold,
  },
];

const OTHER = [
  { icon: <ShieldCheck size={20} strokeWidth={1.5}/>, name: "Internal Audit", desc: "Risk identification, process improvement, and controls verification." },
  { icon: <UserCog size={20} strokeWidth={1.5}/>,    name: "Virtual CFO",    desc: "CFO-level financial leadership without the full-time cost." },
  { icon: <Target size={20} strokeWidth={1.5}/>,     name: "Tax Planning",   desc: "Legal, proactive strategies to minimise your tax liability." },
  { icon: <FolderKanban size={20} strokeWidth={1.5}/>, name: "Project Finance Management", desc: "Funding, disbursement tracking, and compliance for projects." },
  { icon: <BarChart3 size={20} strokeWidth={1.5}/>,  name: "Reports & MIS",  desc: "Detailed financial reports and management information statements." },
];

/* ── Asymmetric 5-card grid layout ── */
function MajorGrid() {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "auto auto",
      gap: 20,
    }}
      className="svc-major-grid"
    >
      {/* Card 1 — tall, spans 2 rows */}
      <div
        className="svc-card reveal d1"
        style={{ gridRow: "1 / 3", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: 420 }}
      >
        <div>
          {MAJOR[0].badge && (
            <div style={{
              display: "inline-block",
              fontSize: 10, fontWeight: 700, letterSpacing: "1px",
              color: C.navy, background: C.goldPale,
              border: `1px solid ${C.borderGold}`,
              padding: "3px 10px", borderRadius: 4,
              textTransform: "uppercase", marginBottom: 24,
            }}>
              {MAJOR[0].badge}
            </div>
          )}
          <div style={{
            width: 56, height: 56, borderRadius: 12,
            background: C.goldPale, border: `1px solid ${C.borderGold}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: C.navy, marginBottom: 22,
          }}>
            {MAJOR[0].icon}
          </div>
          <div className="albula" style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 8, lineHeight: 1.25 }}>
            {MAJOR[0].name}
          </div>
          <div style={{ fontSize: 12, color: C.gold, fontWeight: 600, letterSpacing: "0.5px", marginBottom: 16 }}>
            {MAJOR[0].sub}
          </div>
          <p style={{ fontSize: 14, color: C.textSecondary, lineHeight: 1.75 }}>
            {MAJOR[0].desc}
          </p>
        </div>
        <a href="#contact" style={{
          display: "flex", alignItems: "center", gap: 6,
          fontSize: 13, fontWeight: 600, color: C.gold,
          textDecoration: "none", marginTop: 28,
        }}>
          Learn more <ArrowRight size={14}/>
        </a>
      </div>

      {/* Cards 2–5 — normal */}
      {MAJOR.slice(1).map((s, i) => (
        <div key={s.name} className={`svc-card reveal d${i + 2}`}>
          <div style={{
            width: 52, height: 52, borderRadius: 10,
            background: i % 2 === 0 ? C.navy : C.goldPale,
            border: i % 2 === 0 ? "none" : `1px solid ${C.borderGold}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            color: i % 2 === 0 ? "#fff" : C.navy,
            marginBottom: 18,
          }}>
            {s.icon}
          </div>
          <div className="albula" style={{ fontSize: 17, fontWeight: 700, color: C.navy, marginBottom: 6, lineHeight: 1.25 }}>
            {s.name}
          </div>
          <div style={{ fontSize: 11, color: C.gold, fontWeight: 600, letterSpacing: "0.5px", marginBottom: 12 }}>
            {s.sub}
          </div>
          <p style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.7 }}>
            {s.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ── Other Services expandable ── */
function OtherServices() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ marginTop: 48 }}>
      {/* Toggle button */}
      <div style={{ textAlign: "center", marginBottom: open ? 32 : 0 }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "transparent",
            border: `1.5px solid ${C.borderGold}`,
            borderRadius: 8, padding: "12px 28px",
            fontSize: 14, fontWeight: 600, color: C.navy,
            cursor: "pointer", fontFamily: "Inter,sans-serif",
            transition: "all 0.25s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = C.goldPale; e.currentTarget.style.borderColor = C.gold; }}
          onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = C.borderGold; }}
        >
          {open ? <ChevronUp size={16}/> : <ChevronDown size={16}/>}
          {open ? "Hide Other Services" : "View Other Services"}
        </button>
      </div>

      {/* Expandable grid */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 16,
        maxHeight: open ? 600 : 0,
        overflow: "hidden",
        transition: "max-height 0.5s ease",
      }}>
        {OTHER.map((s, i) => (
          <div
            key={s.name}
            className="other-svc-card"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(12px)",
              transition: `all 0.4s ease ${i * 0.07}s`,
            }}
          >
            <div style={{
              width: 42, height: 42, borderRadius: 8, flexShrink: 0,
              background: C.goldPale, border: `1px solid ${C.borderGold}`,
              display: "flex", alignItems: "center", justifyContent: "center",
              color: C.navy,
            }}>
              {s.icon}
            </div>
            <div>
              <div className="albula" style={{ fontSize: 14, fontWeight: 700, color: C.navy, marginBottom: 4 }}>
                {s.name}
              </div>
              <div style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.6 }}>
                {s.desc}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Help CTA */}
      <div style={{
        marginTop: 48,
        background: `linear-gradient(135deg, ${C.navy} 0%, #1a3a5c 100%)`,
        borderRadius: 20, padding: "40px 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        flexWrap: "wrap", gap: 24,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", right: 0, top: 0,
          width: 240, height: 240,
          background: "radial-gradient(circle, rgba(201,168,76,0.12), transparent 70%)",
          pointerEvents: "none",
        }}/>
        <div>
          <div style={{ fontSize: 11, color: C.gold, fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 10 }}>
            Not Sure Where to Start?
          </div>
          <h3 className="albula" style={{ fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 8, lineHeight: 1.3 }}>
            Need help choosing the right service?
          </h3>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, maxWidth: 440 }}>
            Every business is different. Our experts will analyse your situation and recommend exactly what you need — at no cost.
          </p>
        </div>
        <a
          className="btn-gold"
          href="#contact"
          style={{ fontSize: 15, padding: "14px 32px", whiteSpace: "nowrap" }}
        >
          <MessageCircle size={17}/>
          Talk to an Expert
        </a>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="pad-section"
      style={{ padding: "100px 60px", background: "var(--bg-section)" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 52 }}>
          <div className="reveal">
            <div style={{
              fontSize: 11, fontWeight: 600, color: C.gold,
              letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 10,
            }}>
              What We Offer
            </div>
            <div style={{ width: 40, height: 3, background: C.gold, borderRadius: 2, marginBottom: 18 }}/>
            <h2 className="albula" style={{
              fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700,
              color: C.navy, lineHeight: 1.15,
            }}>
              Our Services
            </h2>
          </div>
          <p className="reveal" style={{
            fontSize: 15, color: C.textSecondary, lineHeight: 1.75, maxWidth: 400,
          }}>
            Comprehensive financial and compliance services designed to protect and grow your business at every stage.
          </p>
        </div>

        <MajorGrid/>
        <OtherServices/>
      </div>

      {/* Responsive grid */}
      <style>{`
        @media (max-width: 900px) {
          .svc-major-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .svc-major-grid > div:first-child {
            grid-row: auto !important;
          }
        }
        @media (max-width: 600px) {
          .svc-major-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}