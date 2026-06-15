import { useMemo } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import  logo from "../assets/logo.png";
import logoname from "../assets/logoname.png";

const C = {
  navy:          "#0B2545",
  gold:          "#C9A84C",
  goldPale:      "#FDF3DC",
  borderGold:    "rgba(201,168,76,0.35)",
  textSecondary: "#4A6080",
  textMuted:     "#8BA3BE",
};

/* ─────────────────────────────────────────────────
   Animated grid background
   · Light navy grid lines
   · Glowing lines that come and go along the tracks
───────────────────────────────────────────────── */
function GridBackground() {
  const lines = useMemo(() => {
    const STEP = 48; // grid cell size in px
    const out = [];

    // Vertical animated lines
    [2, 6, 11, 15, 20, 24].forEach((col, i) => {
      out.push({
        type: "v",
        left: col * STEP,
        delay: `${(i * 0.43).toFixed(2)}s`,
        dur: `${(3 + (i % 3) * 0.5).toFixed(1)}s`,
      });
    });

    // Horizontal animated lines
    [3, 7, 10, 14].forEach((row, i) => {
      out.push({
        type: "h",
        top: row * STEP,
        delay: `${(i * 0.57).toFixed(2)}s`,
        dur: `${(3.5 + (i % 2) * 0.5).toFixed(1)}s`,
      });
    });

    return out;
  }, []);

  return (
    <>
      <style>{`
        /* Lines coming and going animation */
        @keyframes _pulseLineV {
          0%, 100% { opacity: 0; transform: scaleY(0); }
          50% { opacity: 0.6; transform: scaleY(1); }
        }
        @keyframes _pulseLineH {
          0%, 100% { opacity: 0; transform: scaleX(0); }
          50% { opacity: 0.6; transform: scaleX(1); }
        }

        /* Subtle overall grid pulse */
        @keyframes _gridPulse {
          0%, 100% { opacity: 1;   }
          50%      { opacity: 0.6; }
        }
      `}</style>

      {/* ① Base Grid lines */}
      {/* <div
        aria-hidden="true"
        style={{
          position:  "absolute",
          inset:     0,
          zIndex:    0,
          pointerEvents: "none",
          backgroundImage: [
            "linear-gradient(rgba(11,37,69,0.055) 1px, transparent 1px)",
            "linear-gradient(90deg, rgba(11,37,69,0.055) 1px, transparent 1px)",
          ].join(", "),
          backgroundSize: "48px 48px",
          animation: "_gridPulse 7s ease-in-out infinite",
        }}
      /> */}

      {/* ② Animated travelling/blinking grid lines */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset:    0,
          zIndex:   0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        {lines.map((l, i) => {
          const isV = l.type === "v";
          return (
            <div
              key={i}
              style={{
                position: "absolute",
                left: isV ? l.left : 0,
                top: isV ? 0 : l.top,
                width: isV ? 1 : "100%",
                height: isV ? "100%" : 1,
                background: isV
                  ? `linear-gradient(to bottom, transparent, ${C.gold}, transparent)`
                  : `linear-gradient(to right, transparent, ${C.gold}, transparent)`,
                opacity: 0,
                transformOrigin: isV ? "center top" : "left center",
                animation: `${isV ? "_pulseLineV" : "_pulseLineH"} ${l.dur} ease-in-out ${l.delay} infinite`,
              }}
            />
          );
        })}
      </div>
    </>
  );
}

/* ─────────────────────────────────────────────────
   Hero
───────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section id="hero" className="hero-container">
      
      {/* ── Responsive CSS ── */}
      <style>{`
        .hero-container {
          min-height: 100vh;
          min-height: 100dvh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding: 80px 60px 60px;
          background: linear-gradient(135deg, #EEF2F7 0%, #F6F4F0 60%, #FDF3DC 100%);
        }

        .hero-grid {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        .hero-left-col {
          margin-top: 70px;
        }

        .hero-right-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 16px;
          position: relative;
        }

        /* Default Desktop Logo Sizes */
        .hero-logo-icon {
          width: min(160px, 30vw);
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 12px 36px rgba(11,37,69,0.22));
          position: relative;
          z-index: 3;
        }
        
        .hero-logo-name {
          width: min(240px, 42vw);
          height: auto;
          object-fit: contain;
          position: relative;
          z-index: 3;
        }

        /* ── Mobile Layout Overrides ── */
        @media (max-width: 850px) {
          .hero-container {
            padding: 100px 20px 80px; /* Reduced side padding to prevent cutoff */
          }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          
          /* Force Logos to the Top */
          .hero-right-col {
            order: 1; 
            margin-bottom: 24px;
          }
          
          /* Force Text to the Bottom */
          .hero-left-col {
            order: 2; 
            margin-top: 0px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          /* Center alignment for buttons and badges */
          .hero-actions, .hero-badges {
            justify-content: center;
          }

          /* Allow heading text to wrap naturally on narrow screens */
          .hero-title-segment {
            white-space: normal !important;
          }

          /* Reduce Logo sizes significantly for small screens */
          .hero-logo-icon {
            width: 100px;
          }
          .hero-logo-name {
            width: 160px;
          }
        }
      `}</style>

      {/* ── Animated grid background (lowest layer) ── */}
      <GridBackground />

      {/* ── City silhouette ── */}
      <div 
        style={{ 
          position: "absolute", 
          bottom: 0, 
          right: 0, 
          width: "50%", 
          opacity: 0.06, 
          pointerEvents: "none",
          zIndex: 1 
        }}
      >
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

      {/* ── Gold accent blob top-right ── */}
      <div
        style={{
          position:     "absolute",
          top:          "6%",
          right:        "6%",
          width:         340,
          height:        340,
          borderRadius: "50%",
          background:   "radial-gradient(circle, rgba(201,168,76,0.09) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex:        0,
        }}
      />

      {/* ── Main content grid ── */}
      <div className="hero-grid">
        {/* ── LEFT: Text ── */}
        <div className="hero-left-col">
          <h1
            className="albula reveal"
            style={{
              fontSize:     "clamp(26px, 3.5vw, 44px)", 
              fontWeight:    700,
              lineHeight:    1.2,
              marginBottom:  20,
              color:         C.navy,
            }}
          >
            {/* Added hero-title-segment to allow natural wrapping on mobile */}
            <span className="hero-title-segment" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
              Your Finances,{" "}
              <span style={{ color: C.gold, fontStyle: "italic" }}>Simplified.</span>
            </span>
            <br />
            <span className="hero-title-segment" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
              Your Growth,{" "}
              <span style={{ color: C.navy }}>Amplified.</span>
            </span>
          </h1>

          <p
            className="reveal d2"
            style={{
              fontSize:     17,
              color:        C.textSecondary,
              maxWidth:     460,
              lineHeight:   1.78,
              marginBottom: 36,
              fontWeight:   300,
            }}
          >
            Expert financial advisory and compliance services that let you
            focus on building your business — while we handle the rest.
          </p>

          <div
            className="hero-actions reveal d3"
            style={{ display: "flex", gap: 14, flexWrap: "wrap" }}
          >
            <a className="btn-primary" href="#services">
              Explore Services <ArrowRight size={16} />
            </a>
            <a className="btn-outline" href="#contact">
              Free Consultation
            </a>
          </div>

          {/* Trust badges */}
          <div
            className="hero-badges reveal d4"
            style={{
              display:       "flex",
              gap:           14,
              flexWrap:      "wrap",
              marginTop:     36,
              paddingTop:    32,
              borderTop:    `1px solid ${C.borderGold}`,
            }}
          >
            {[
              "Qualified Professionals",
              "Free First Consultation",
              "100% Compliance",
              "Pan-India Service",
            ].map((b) => (
              <div
                key={b}
                style={{ display: "flex", alignItems: "center", gap: 7 }}
              >
                <span
                  style={{
                    width:          17,
                    height:         17,
                    borderRadius:   "50%",
                    background:     C.goldPale,
                    border:        `1px solid ${C.borderGold}`,
                    display:        "flex",
                    alignItems:     "center",
                    justifyContent: "center",
                    fontSize:       9,
                    fontWeight:     700,
                    color:          C.gold,
                    flexShrink:     0,
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    fontSize:   12.5,
                    color:      C.textSecondary,
                    fontWeight: 500,
                  }}
                >
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Logo overlaid on the silhouette ── */}
        <div className="hero-right-col reveal from-right d1">
          <img
            src={logo}
            alt="Fincore"
            className="hero-logo-icon"
          />
          <img
            src={logoname}
            alt="FINCORE"
            className="hero-logo-name"
          />
        </div>
      </div>

      {/* ── Scroll hint ── */}
      <div
        style={{
          position:        "absolute",
          bottom:          20,
          left:            "50%",
          transform:       "translateX(-50%)",
          display:         "flex",
          flexDirection:   "column",
          alignItems:      "center",
          gap:             5,
          color:           C.textMuted,
          fontSize:        10,
          letterSpacing:   "2px",
          zIndex:          3,
        }}
      >
        <span>SCROLL</span>
        <div
          className="scroll-line"
          style={{
            width:      1,
            height:     32,
            background: `linear-gradient(to bottom, ${C.gold}, transparent)`,
          }}
        />
        <ChevronDown size={12} color={C.textMuted} />
      </div>
    </section>
  );
}