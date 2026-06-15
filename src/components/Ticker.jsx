const ITEMS = [
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

export default function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div style={{
      overflow: "hidden",
      background: "var(--navy)",
      borderTop: "2px solid var(--gold)",
      borderBottom: "2px solid var(--gold)",
      padding: "13px 0",
    }}>
      <div className="ticker-track" style={{ display: "flex", gap: 56, width: "max-content" }}>
        {doubled.map((t, i) => (
          <span key={i} style={{
            display: "flex", alignItems: "center", gap: 10,
            fontSize: 13, color: "rgba(255,255,255,0.75)", whiteSpace: "nowrap",
          }}>
            <span style={{ width: 5, height: 5, background: "var(--gold)", borderRadius: "50%", display: "inline-block" }}/>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}