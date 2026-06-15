import { useEffect, useRef, useState } from "react";
import {
  FileText,
  Calculator,
  Building2,
  TrendingUp,
  ShieldCheck,
  UserCog,
  Target,
  FolderKanban,
  BarChart3,
  ClipboardList,
  BookOpen,
  Mail,
  Phone,
  Clock,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Zap,
  Menu,
  X,
} from "lucide-react";

/* ─── DESIGN TOKENS ──────────────────────────────────────────── */
const C = {
  navy: "#0B2545",
  navyMid: "#1a3a5c",
  gold: "#C9A84C",
  goldLight: "#E8C875",
  goldPale: "#FDF3DC",
  bg: "#F6F4F0",          // warm off-white
  bgCard: "#FFFFFF",
  bgSection: "#EEF2F7",   // very light blue-grey
  textPrimary: "#0B2545",
  textSecondary: "#4A6080",
  textMuted: "#8BA3BE",
  border: "rgba(11,37,69,0.10)",
  borderGold: "rgba(201,168,76,0.35)",
};

/* ─── GLOBAL STYLES (injected once) ─────────────────────────── */
const globalCSS = `
  @import url('https://api.fontshare.com/v2/css?f[]=albula-pro@400,500,600,700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body {
    font-family: 'Inter', sans-serif;
    background: ${C.bg};
    color: ${C.textPrimary};
    overflow-x: hidden;
    line-height: 1.6;
  }
  .albula { font-family: 'Albula Pro', 'Inter', sans-serif; }
  ::selection { background: ${C.goldPale}; color: ${C.navy}; }
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: ${C.bg}; }
  ::-webkit-scrollbar-thumb { background: ${C.gold}; border-radius: 3px; }

  /* scroll reveal */
  .reveal {
    opacity: 0;
    transform: translateY(28px);
    transition: opacity 0.65s ease, transform 0.65s ease;
  }
  .reveal.from-left  { transform: translateX(-28px); }
  .reveal.from-right { transform: translateX(28px); }
  .reveal.visible {
    opacity: 1;
    transform: translate(0);
  }
  .d1 { transition-delay: 0.05s; }
  .d2 { transition-delay: 0.12s; }
  .d3 { transition-delay: 0.19s; }
  .d4 { transition-delay: 0.26s; }
  .d5 { transition-delay: 0.33s; }
  .d6 { transition-delay: 0.40s; }
  .d7 { transition-delay: 0.47s; }
  .d8 { transition-delay: 0.54s; }
  .d9 { transition-delay: 0.61s; }
  .d10 { transition-delay: 0.68s; }
  .d11 { transition-delay: 0.75s; }

  /* ticker */
  @keyframes ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  .ticker-track { animation: ticker 32s linear infinite; }

  /* scroll line */
  @keyframes scrollLine {
    0%   { transform: scaleY(0); transform-origin: top;    }
    50%  { transform: scaleY(1); transform-origin: top;    }
    100% { transform: scaleY(0); transform-origin: bottom; }
  }
  .scroll-line { animation: scrollLine 2s ease-in-out infinite; }

  /* pulse dot */
  @keyframes pulseDot {
    0%, 100% { opacity:1; transform:scale(1); }
    50%       { opacity:0.5; transform:scale(1.5); }
  }
  .pulse { animation: pulseDot 2s infinite; }

  /* counter */
  @keyframes fadeUp {
    from { opacity:0; transform:translateY(16px); }
    to   { opacity:1; transform:translateY(0); }
  }

  /* nav links */
  .nav-link {
    color: ${C.textSecondary};
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.3px;
    transition: color 0.2s;
    position: relative;
  }
  .nav-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 2px;
    background: ${C.gold};
    transform: scaleX(0);
    transition: transform 0.2s;
  }
  .nav-link:hover { color: ${C.navy}; }
  .nav-link:hover::after { transform: scaleX(1); }

  /* service card hover */
  .svc-card {
    background: #fff;
    border: 1px solid ${C.border};
    border-radius: 14px;
    padding: 32px 28px;
    position: relative;
    overflow: hidden;
    cursor: default;
    transition: box-shadow 0.3s, transform 0.3s, border-color 0.3s;
  }
  .svc-card:hover {
    box-shadow: 0 16px 48px rgba(11,37,69,0.10);
    transform: translateY(-4px);
    border-color: ${C.gold};
  }
  .svc-card::before {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, ${C.gold}, ${C.goldLight});
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
  }
  .svc-card:hover::before { transform: scaleX(1); }

  /* pillar card */
  .pillar-card {
    background: #fff;
    border: 1px solid ${C.border};
    border-radius: 14px;
    padding: 32px 24px;
    text-align: center;
    transition: box-shadow 0.3s, border-color 0.3s;
  }
  .pillar-card:hover {
    box-shadow: 0 8px 32px rgba(201,168,76,0.15);
    border-color: ${C.gold};
  }

  /* value item */
  .value-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 20px 24px;
    background: #fff;
    border: 1px solid ${C.border};
    border-radius: 12px;
    transition: border-color 0.25s, box-shadow 0.25s;
  }
  .value-item:hover {
    border-color: ${C.gold};
    box-shadow: 0 4px 16px rgba(201,168,76,0.12);
  }

  /* btn */
  .btn-primary {
    display: inline-block;
    background: ${C.navy};
    color: #fff;
    padding: 14px 32px;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 600;
    text-decoration: none;
    letter-spacing: 0.3px;
    transition: background 0.2s, transform 0.2s;
    border: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }
  .btn-primary:hover { background: ${C.navyMid}; transform: translateY(-2px); }

  .btn-gold {
    display: inline-block;
    background: ${C.gold};
    color: ${C.navy};
    padding: 14px 32px;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
    letter-spacing: 0.3px;
    transition: background 0.2s, transform 0.2s;
    border: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }
  .btn-gold:hover { background: ${C.goldLight}; transform: translateY(-2px); }

  .btn-outline {
    display: inline-block;
    background: transparent;
    color: ${C.navy};
    padding: 13px 32px;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.3px;
    transition: all 0.2s;
    border: 1.5px solid ${C.navy};
    cursor: pointer;
    font-family: 'Inter', sans-serif;
  }
  .btn-outline:hover { background: ${C.navy}; color: #fff; }

  input, select, textarea {
    width: 100%;
    background: ${C.bg};
    border: 1.5px solid ${C.border};
    border-radius: 8px;
    padding: 12px 16px;
    color: ${C.textPrimary};
    font-size: 14px;
    font-family: 'Inter', sans-serif;
    outline: none;
    transition: border-color 0.2s;
    resize: none;
  }
  input:focus, select:focus, textarea:focus {
    border-color: ${C.gold};
    background: #fff;
  }
  select option { background: #fff; color: ${C.textPrimary}; }

  /* timeline */
  .tl-dot {
    position: absolute;
    left: -33px;
    top: 4px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: ${C.gold};
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .tl-dot::after {
    content: '';
    width: 7px;
    height: 7px;
    background: #fff;
    border-radius: 50%;
  }
`;

/* ─── HOOK: scroll reveal ────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        }),
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── HOOK: animated counter ────────────────────────────────── */
function useCounter(target, suffix = "", duration = 1800) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const steps = 60;
          const inc = target / steps;
          let cur = 0;
          const t = setInterval(() => {
            cur = Math.min(cur + inc, target);
            setVal(Math.round(cur));
            if (cur >= target) clearInterval(t);
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [target, duration]);
  return { ref, display: val + suffix };
}

/* ─── SERVICES DATA ──────────────────────────────────────────── */
const SERVICES = [
  {
    icon: <FileText size={24} strokeWidth={1.6} />,
    name: "GST Registration & Filing",
    desc: "Complete GST compliance — registration, monthly/quarterly returns, reconciliation, and input tax credit advisory.",
    badge: "Popular",
  },
  {
    icon: <ClipboardList size={24} strokeWidth={1.6} />,
    name: "Tax Filing",
    desc: "ITR, TDS, and TCS filing with precision — for individuals, firms, and corporates. Timely, accurate, stress-free.",
    sub: "(ITR, TDS, TCS)",
  },
  {
    icon: <BookOpen size={24} strokeWidth={1.6} />,
    name: "Accounting & Bookkeeping",
    desc: "Systematic financial recordkeeping and reporting that gives you a clear picture of your business health.",
  },
  {
    icon: <Building2 size={24} strokeWidth={1.6} />,
    name: "Business Registration",
    desc: "Company, LLP, and MSME registration handled end-to-end. Start your business on solid legal ground.",
    sub: "(Company / LLP / MSME)",
  },
  {
    icon: <TrendingUp size={24} strokeWidth={1.6} />,
    name: "Financial Advisory",
    desc: "Strategic financial guidance to improve profitability, manage cash flow, and plan for sustainable growth.",
  },
  {
    icon: <ShieldCheck size={24} strokeWidth={1.6} />,
    name: "Internal Audit",
    desc: "Identify risks, improve processes, and ensure internal controls are robust and compliance-ready.",
  },
  {
    icon: <UserCog size={24} strokeWidth={1.6} />,
    name: "Virtual CFO",
    desc: "Get the financial leadership of a CFO without the full-time cost — budgeting, forecasting, and investor reporting.",
  },
  {
    icon: <Target size={24} strokeWidth={1.6} />,
    name: "Tax Planning",
    desc: "Proactive, legal tax optimisation strategies to minimise your liability and maximise your business returns.",
  },
  {
    icon: <FolderKanban size={24} strokeWidth={1.6} />,
    name: "Project Finance Management",
    desc: "End-to-end finance management for projects — funding, disbursement tracking, and compliance reporting.",
  },
  {
    icon: <BarChart3 size={24} strokeWidth={1.6} />,
    name: "Reports",
    desc: "Detailed financial reports and MIS statements that give management the clarity needed for confident decisions.",
  },
];

/* ─── PILLARS DATA ───────────────────────────────────────────── */
const PILLARS = [
  {
    icon: <CheckCircle2 size={28} strokeWidth={1.5} color={C.gold} />,
    title: "Accurate",
    desc: "Every filing, every figure verified — zero tolerance for errors.",
  },
  {
    icon: <Award size={28} strokeWidth={1.5} color={C.gold} />,
    title: "Reliable",
    desc: "Trusted by 500+ businesses. Our track record speaks for itself.",
  },
  {
    icon: <Users size={28} strokeWidth={1.5} color={C.gold} />,
    title: "Professional",
    desc: "Qualified professionals committed to the highest service standards.",
  },
  {
    icon: <Zap size={28} strokeWidth={1.5} color={C.gold} />,
    title: "Growth-Focused",
    desc: "We go beyond compliance to advise on your next growth phase.",
  },
];

/* ─── PROCESS ────────────────────────────────────────────────── */
const PROCESS = [
  {
    title: "Initial Consultation",
    desc: "We understand your business structure, current compliance status, and financial goals in a detailed discovery session.",
  },
  {
    title: "Tailored Service Plan",
    desc: "We design a customised engagement — selecting services, timelines, and deliverables that match your specific needs.",
  },
  {
    title: "Execution & Filing",
    desc: "Our team handles all filings, registrations, and documentation with meticulous attention to deadlines and accuracy.",
  },
  {
    title: "Ongoing Advisory",
    desc: "We stay with you — providing proactive alerts, strategy updates, and annual reviews as your business evolves.",
  },
];

/* ─── TICKER ITEMS ───────────────────────────────────────────── */
const TICKER = [
  "GST Registration & Filing",
  "Income Tax Returns",
  "Company Registration",
  "LLP & MSME Setup",
  "Virtual CFO Services",
  "Internal Audit",
  "Tax Planning",
  "Project Finance Management",
  "TDS & TCS Compliance",
  "Financial Reports",
];

/* ─── STAT COUNTER WIDGET ────────────────────────────────────── */
function StatCounter({ target, suffix, label }) {
  const { ref, display } = useCounter(target, suffix);
  return (
    <div ref={ref} style={{ minWidth: 120 }}>
      <div
        className="albula"
        style={{ fontSize: 40, fontWeight: 700, color: C.navy, lineHeight: 1 }}
      >
        {display}
      </div>
      <div style={{ fontSize: 13, color: C.textMuted, marginTop: 6, letterSpacing: "0.3px" }}>
        {label}
      </div>
    </div>
  );
}

/* ─── SECTION HEADER ─────────────────────────────────────────── */
function SectionHeader({ eyebrow, title, sub, center = false }) {
  return (
    <div className="reveal" style={{ textAlign: center ? "center" : "left", marginBottom: 52 }}>
      <div
        style={{
          fontSize: 11,
          fontWeight: 600,
          color: C.gold,
          letterSpacing: "2.5px",
          textTransform: "uppercase",
          marginBottom: 12,
        }}
      >
        {eyebrow}
      </div>
      <div
        style={{
          width: 40,
          height: 3,
          background: C.gold,
          borderRadius: 2,
          margin: center ? "0 auto 20px" : "0 0 20px",
        }}
      />
      <h2
        className="albula"
        style={{
          fontSize: "clamp(28px, 3.5vw, 44px)",
          fontWeight: 700,
          color: C.navy,
          lineHeight: 1.15,
          marginBottom: sub ? 16 : 0,
          maxWidth: center ? 540 : "none",
          margin: center ? "0 auto" : undefined,
        }}
      >
        {title}
      </h2>
      {sub && (
        <p
          style={{
            fontSize: 16,
            color: C.textSecondary,
            lineHeight: 1.7,
            maxWidth: 520,
            marginTop: 16,
            margin: center ? "16px auto 0" : "16px 0 0",
          }}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

/* ─── NAVBAR ─────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = ["About", "Services", "Why Us", "Contact"];
  return (
    <nav
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "16px 60px",
        background: scrolled ? "rgba(246,244,240,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? `1px solid ${C.border}` : "1px solid transparent",
        transition: "all 0.3s",
      }}
    >
      {/* Logo */}
      <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
        <div
          style={{
            width: 36,
            height: 36,
            background: C.navy,
            clipPath: "polygon(20% 0%,100% 0%,80% 100%,0% 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 15, color: C.gold, fontFamily: "Inter,sans-serif",
          }}
        >
          F
        </div>
        <span className="albula" style={{ fontSize: 20, fontWeight: 700, color: C.navy, letterSpacing: "2.5px" }}>
          FINCORE
        </span>
      </a>

      {/* Desktop links */}
      <ul style={{ display: "flex", gap: 36, listStyle: "none" }} className="desktop-nav">
        {links.map((l) => (
          <li key={l}>
            <a className="nav-link" href={`#${l.toLowerCase().replace(" ", "-")}`}>
              {l}
            </a>
          </li>
        ))}
      </ul>

      <a className="btn-gold" href="#contact" style={{ padding: "10px 24px", fontSize: 14, borderRadius: 6 }}>
        Get Started
      </a>

      <button
        onClick={() => setOpen(!open)}
        style={{ display: "none", background: "none", border: "none", cursor: "pointer", color: C.navy }}
        className="menu-btn"
      >
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {open && (
        <div
          style={{
            position: "fixed", top: 64, left: 0, right: 0,
            background: "#fff", padding: "20px 32px",
            borderBottom: `1px solid ${C.border}`,
            display: "flex", flexDirection: "column", gap: 16,
          }}
        >
          {links.map((l) => (
            <a
              key={l}
              className="nav-link"
              href={`#${l.toLowerCase().replace(" ", "-")}`}
              onClick={() => setOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

/* ─── HERO ───────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 60px 80px",
        background: `linear-gradient(135deg, #EEF2F7 0%, ${C.bg} 55%, ${C.goldPale} 100%)`,
      }}
    >
      {/* Grid overlay */}
      <div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(${C.border} 1px, transparent 1px), linear-gradient(90deg, ${C.border} 1px, transparent 1px)`,
          backgroundSize: "72px 72px",
        }}
      />

      {/* City silhouette right */}
      <div style={{ position: "absolute", bottom: 0, right: 0, width: "50%", opacity: 0.06, pointerEvents: "none" }}>
        <svg viewBox="0 0 900 500" xmlns="http://www.w3.org/2000/svg" fill={C.navy}>
          <rect x="30" y="180" width="60" height="320" />
          <rect x="100" y="120" width="45" height="380" />
          <rect x="155" y="200" width="35" height="300" />
          <rect x="200" y="80" width="70" height="420" />
          <rect x="200" y="60" width="20" height="30" />
          <rect x="280" y="150" width="55" height="350" />
          <rect x="345" y="100" width="80" height="400" />
          <rect x="345" y="70" width="15" height="40" />
          <rect x="435" y="180" width="40" height="320" />
          <rect x="485" y="50" width="90" height="450" />
          <rect x="485" y="10" width="10" height="50" />
          <rect x="585" y="140" width="60" height="360" />
          <rect x="655" y="90" width="75" height="410" />
          <rect x="740" y="160" width="50" height="340" />
          <rect x="800" y="200" width="40" height="300" />
          <rect x="850" y="230" width="50" height="270" />
        </svg>
      </div>

      {/* Gold accent circle */}
      <div
        style={{
          position: "absolute", top: "15%", right: "8%",
          width: 320, height: 320,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${C.goldPale} 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 680 }}>
        {/* Eyebrow */}
        <div
          className="reveal"
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            background: "rgba(201,168,76,0.12)",
            border: `1px solid rgba(201,168,76,0.4)`,
            padding: "8px 18px", borderRadius: 100,
            fontSize: 12, fontWeight: 600, color: C.gold,
            letterSpacing: "1.5px", textTransform: "uppercase",
            marginBottom: 28,
          }}
        >
          <span className="pulse" style={{ width: 6, height: 6, background: C.gold, borderRadius: "50%", display: "inline-block" }} />
          Financial Advisory & Compliance
        </div>

        <h1
          className="albula reveal d1"
          style={{
            fontSize: "clamp(40px, 5.5vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.08,
            marginBottom: 24,
            color: C.navy,
          }}
        >
          At the{" "}
          <span style={{ color: C.gold, fontStyle: "italic" }}>Core</span>
          <br />
          of Every Decision.
        </h1>

        <p
          className="reveal d2"
          style={{ fontSize: 18, color: C.textSecondary, maxWidth: 520, lineHeight: 1.75, marginBottom: 44, fontWeight: 300 }}
        >
          We simplify compliance and empower businesses with precise financial advisory, tax planning, and regulatory support — tailored for India's dynamic market.
        </p>

        <div className="reveal d3" style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          <a className="btn-primary" href="#services" style={{ display: "flex", alignItems: "center", gap: 8 }}>
            Explore Services <ArrowRight size={16} />
          </a>
          <a className="btn-outline" href="#contact">
            Schedule a Call
          </a>
        </div>

        {/* Stats */}
        <div
          className="reveal d4"
          style={{
            display: "flex", gap: 48, flexWrap: "wrap",
            marginTop: 60, paddingTop: 48,
            borderTop: `1px solid ${C.borderGold}`,
          }}
        >
          <StatCounter target={500} suffix="+" label="Clients Served" />
          <StatCounter target={10} suffix="+" label="Years Experience" />
          <StatCounter target={99} suffix="%" label="Accuracy Rate" />
        </div>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          color: C.textMuted, fontSize: 11, letterSpacing: "2px",
        }}
      >
        <span>SCROLL</span>
        <div
          className="scroll-line"
          style={{ width: 1, height: 40, background: `linear-gradient(to bottom, ${C.gold}, transparent)` }}
        />
        <ChevronDown size={14} color={C.textMuted} />
      </div>
    </section>
  );
}

/* ─── TICKER ─────────────────────────────────────────────────── */
function Ticker() {
  const doubled = [...TICKER, ...TICKER];
  return (
    <div
      style={{
        overflow: "hidden",
        background: C.navy,
        borderTop: `2px solid ${C.gold}`,
        borderBottom: `2px solid ${C.gold}`,
        padding: "14px 0",
      }}
    >
      <div className="ticker-track" style={{ display: "flex", gap: 56, width: "max-content" }}>
        {doubled.map((t, i) => (
          <span
            key={i}
            style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13, color: "rgba(255,255,255,0.75)", whiteSpace: "nowrap" }}
          >
            <span style={{ width: 5, height: 5, background: C.gold, borderRadius: "50%", display: "inline-block" }} />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── ABOUT ──────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" style={{ padding: "100px 60px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "center",
          }}
        >
          {/* Left */}
          <div className="reveal from-left">
            <SectionHeader
              eyebrow="Who We Are"
              title={<>Simplifying Compliance.<br /><span style={{ color: C.gold }}>Empowering Businesses.</span></>}
              sub="Fincore is a dedicated financial advisory and compliance firm committed to being the trusted partner behind your business decisions. We combine regulatory expertise with strategic insight to help businesses grow with confidence."
            />
            <div style={{ display: "grid", gap: 14 }}>
              {[
                { icon: <Target size={20} strokeWidth={1.6} color={C.gold} />, title: "Accurate & Precise", desc: "Every filing, every figure — we ensure accuracy that protects your business from regulatory risk." },
                { icon: <Users size={20} strokeWidth={1.6} color={C.gold} />, title: "Reliable Partnership", desc: "You can trust our expertise. We treat your growth as our own responsibility." },
                { icon: <Award size={20} strokeWidth={1.6} color={C.gold} />, title: "Professional Standards", desc: "Committed to quality in every engagement, from startup registration to CFO services." },
              ].map((v) => (
                <div key={v.title} className="value-item">
                  <div
                    style={{
                      width: 42, height: 42, borderRadius: 8, flexShrink: 0,
                      background: C.goldPale, display: "flex", alignItems: "center", justifyContent: "center",
                    }}
                  >
                    {v.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: C.navy, marginBottom: 4 }}>{v.title}</div>
                    <div style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.6 }}>{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right card */}
          <div className="reveal from-right">
            <div
              style={{
                background: C.bgSection,
                border: `1px solid ${C.borderGold}`,
                borderRadius: 20,
                padding: 44,
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute", top: 0, right: 0,
                  width: 200, height: 200,
                  background: `radial-gradient(circle, rgba(201,168,76,0.12), transparent 70%)`,
                  pointerEvents: "none",
                }}
              />
              <div style={{ fontSize: 11, fontWeight: 600, color: C.gold, letterSpacing: "2px", textTransform: "uppercase", marginBottom: 8 }}>
                Our Expertise Covers
              </div>
              <h3 className="albula" style={{ fontSize: 26, fontWeight: 700, color: C.navy, marginBottom: 14 }}>
                End-to-End Financial Services
              </h3>
              <p style={{ fontSize: 14, color: C.textSecondary, lineHeight: 1.7, marginBottom: 28 }}>
                From GST registration on day one to Virtual CFO services as you scale — Fincore is built to grow with your business at every stage.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 28 }}>
                {[["500+", "Happy Clients"], ["10+", "Years in Practice"], ["11", "Services Offered"], ["99%", "Accuracy Rate"]].map(([n, l]) => (
                  <div key={l} style={{ textAlign: "center", padding: "20px 12px", background: "#fff", borderRadius: 10, border: `1px solid ${C.border}` }}>
                    <div className="albula" style={{ fontSize: 26, fontWeight: 700, color: C.navy }}>{n}</div>
                    <div style={{ fontSize: 12, color: C.textMuted, marginTop: 4 }}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["GST", "Income Tax", "Company Law", "Accounting", "Audit", "Virtual CFO", "MSME", "Project Finance"].map((t) => (
                  <span
                    key={t}
                    style={{
                      background: C.goldPale, border: `1px solid ${C.borderGold}`,
                      color: C.navyMid, padding: "5px 14px", borderRadius: 100,
                      fontSize: 12, fontWeight: 500,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ───────────────────────────────────────────────── */
function Services() {
  return (
    <section id="services" style={{ padding: "100px 60px", background: C.bgSection }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
          <div className="reveal">
            <div style={{ fontSize: 11, fontWeight: 600, color: C.gold, letterSpacing: "2.5px", textTransform: "uppercase", marginBottom: 12 }}>
              What We Offer
            </div>
            <div style={{ width: 40, height: 3, background: C.gold, borderRadius: 2, marginBottom: 20 }} />
            <h2 className="albula" style={{ fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, color: C.navy, lineHeight: 1.15 }}>
              Our Services
            </h2>
          </div>
          <p className="reveal" style={{ fontSize: 15, color: C.textSecondary, lineHeight: 1.7, maxWidth: 420 }}>
            Comprehensive financial and compliance services designed to keep your business protected and growing.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: 20,
          }}
        >
          {SERVICES.map((s, i) => (
            <div key={s.name} className={`svc-card reveal d${Math.min(i + 1, 11)}`}>
              {s.badge && (
                <div
                  style={{
                    position: "absolute", top: 16, right: 16,
                    fontSize: 10, fontWeight: 700, letterSpacing: "1px",
                    color: C.navy, background: C.goldPale,
                    border: `1px solid ${C.borderGold}`,
                    padding: "3px 8px", borderRadius: 4, textTransform: "uppercase",
                  }}
                >
                  {s.badge}
                </div>
              )}
              <div
                style={{
                  width: 52, height: 52, borderRadius: 10,
                  background: C.goldPale, border: `1px solid ${C.borderGold}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: C.navy, marginBottom: 20,
                }}
              >
                {s.icon}
              </div>
              <div className="albula" style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 4 }}>
                {s.name}
              </div>
              {s.sub && (
                <div style={{ fontSize: 12, color: C.gold, marginBottom: 8, fontWeight: 500 }}>{s.sub}</div>
              )}
              <div style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.65 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── WHY US ─────────────────────────────────────────────────── */
function WhyUs() {
  return (
    <section id="why-us" style={{ padding: "100px 60px", background: "#fff" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Why Fincore"
          title={<>Your Growth is<br /><span style={{ color: C.gold }}>Our Responsibility</span></>}
          sub="We don't just file returns — we build the financial infrastructure that helps businesses thrive."
          center
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
          {/* Pillars */}
          <div
            className="reveal from-left"
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}
          >
            {PILLARS.map((p) => (
              <div key={p.title} className="pillar-card">
                <div style={{ marginBottom: 12 }}>{p.icon}</div>
                <div className="albula" style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 8 }}>{p.title}</div>
                <div style={{ fontSize: 13, color: C.textSecondary, lineHeight: 1.55 }}>{p.desc}</div>
              </div>
            ))}
          </div>

          {/* Process timeline */}
          <div className="reveal from-right">
            <div
              style={{
                fontSize: 11, fontWeight: 600, color: C.gold,
                letterSpacing: "2px", textTransform: "uppercase", marginBottom: 24,
              }}
            >
              How We Work
            </div>
            <div style={{ position: "relative", paddingLeft: 28 }}>
              <div
                style={{
                  position: "absolute", left: 0, top: 8, bottom: 8,
                  width: 2,
                  background: `linear-gradient(to bottom, ${C.gold}, rgba(201,168,76,0.1))`,
                }}
              />
              {PROCESS.map((p, i) => (
                <div key={p.title} style={{ position: "relative", marginBottom: i < PROCESS.length - 1 ? 36 : 0 }}>
                  <div className="tl-dot" />
                  <div className="albula" style={{ fontSize: 16, fontWeight: 700, color: C.navy, marginBottom: 6 }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: 14, color: C.textSecondary, lineHeight: 1.65 }}>{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT ────────────────────────────────────────────────── */
function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" style={{ padding: "100px 60px", background: C.bgSection }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <SectionHeader
          eyebrow="Get In Touch"
          title={<>Start Your Journey<br /><span style={{ color: C.gold }}>with Fincore</span></>}
          sub="Ready to simplify your compliance? Reach out — the first consultation is on us."
          center
        />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start" }}>
          {/* Form */}
          <div
            className="reveal from-left"
            style={{
              background: "#fff", border: `1px solid ${C.border}`,
              borderRadius: 20, padding: 44,
              boxShadow: "0 4px 40px rgba(11,37,69,0.06)",
            }}
          >
            <h3 className="albula" style={{ fontSize: 20, fontWeight: 700, color: C.navy, marginBottom: 6 }}>
              Send Us a Message
            </h3>
            <p style={{ fontSize: 14, color: C.textMuted, marginBottom: 28 }}>We'll get back to you within 24 hours.</p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: C.textSecondary, marginBottom: 6, letterSpacing: "0.3px" }}>
                  Full Name
                </label>
                <input type="text" placeholder="Rahul Sharma" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: C.textSecondary, marginBottom: 6, letterSpacing: "0.3px" }}>
                  Phone Number
                </label>
                <input type="tel" placeholder="+91 98765 43210" />
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: C.textSecondary, marginBottom: 6 }}>
                Email Address
              </label>
              <input type="email" placeholder="you@company.com" />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: C.textSecondary, marginBottom: 6 }}>
                Service Needed
              </label>
              <select>
                <option value="">Select a service…</option>
                {SERVICES.map((s) => (
                  <option key={s.name}>{s.name}</option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{ display: "block", fontSize: 13, fontWeight: 500, color: C.textSecondary, marginBottom: 6 }}>
                Message
              </label>
              <textarea rows={4} placeholder="Tell us about your business and what you need help with…" />
            </div>

            <button
              className="btn-gold"
              style={{ width: "100%", fontSize: 15, padding: 14 }}
              onClick={() => { setSent(true); setTimeout(() => setSent(false), 3000); }}
            >
              {sent ? "✓ Message Sent!" : "Send Message →"}
            </button>
          </div>

          {/* Contact Info */}
          <div className="reveal from-right">
            <h3
              className="albula"
              style={{ fontSize: 30, fontWeight: 700, color: C.navy, marginBottom: 12, lineHeight: 1.2 }}
            >
              Let's talk about<br />
              <span style={{ color: C.gold }}>your finances.</span>
            </h3>
            <p style={{ fontSize: 15, color: C.textSecondary, lineHeight: 1.7, marginBottom: 40 }}>
              Whether you're just starting out or scaling rapidly, we have the expertise and dedication to support every financial milestone.
            </p>

            {[
              { icon: <Mail size={20} strokeWidth={1.6} color={C.gold} />, label: "EMAIL US", value: "fincorehq@gmail.com" },
              { icon: <Phone size={20} strokeWidth={1.6} color={C.gold} />, label: "CALL US", value: "+91 7025 8815 92" },
              { icon: <Clock size={20} strokeWidth={1.6} color={C.gold} />, label: "WORKING HOURS", value: "Mon – Sat, 9 AM – 7 PM IST" },
            ].map((d) => (
              <div key={d.label} style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
                <div
                  style={{
                    width: 46, height: 46, borderRadius: 10, flexShrink: 0,
                    background: C.goldPale, border: `1px solid ${C.borderGold}`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  {d.icon}
                </div>
                <div>
                  <div style={{ fontSize: 11, color: C.textMuted, letterSpacing: "1px", marginBottom: 3 }}>{d.label}</div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: C.navy }}>{d.value}</div>
                </div>
              </div>
            ))}

            <div
              style={{
                marginTop: 20, padding: 28,
                background: C.goldPale,
                border: `1px solid ${C.borderGold}`,
                borderRadius: 14,
              }}
            >
              <div
                className="albula"
                style={{ fontSize: 18, fontWeight: 600, color: C.navy, fontStyle: "italic", marginBottom: 8, lineHeight: 1.5 }}
              >
                "Simplifying Compliance.<br />Empowering Businesses."
              </div>
              <div style={{ fontSize: 13, color: C.textMuted }}>— Fincore Financial Advisory & Compliance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer
      style={{
        background: C.navy,
        borderTop: `2px solid ${C.gold}`,
        padding: "36px 60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 20,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div
          style={{
            width: 30, height: 30,
            background: C.gold,
            clipPath: "polygon(20% 0%,100% 0%,80% 100%,0% 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 700, fontSize: 13, color: C.navy,
          }}
        >
          F
        </div>
        <span className="albula" style={{ fontSize: 17, fontWeight: 700, color: "#fff", letterSpacing: "2.5px" }}>
          FINCORE
        </span>
      </div>
      <span style={{ fontFamily: "'Albula Pro', serif", fontSize: 14, color: "rgba(201,168,76,0.8)", fontStyle: "italic" }}>
        Simplifying Compliance. Empowering Businesses.
      </span>
      <span style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>
        © 2026 Fincore. All rights reserved.
      </span>
    </footer>
  );
}

/* ─── ROOT APP ───────────────────────────────────────────────── */
export default function FincoreWebsite() {
  useReveal();

  return (
    <>
      <style>{globalCSS}</style>
      <Navbar />
      <Hero />
      <Ticker />
      <About />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </>
  );
}