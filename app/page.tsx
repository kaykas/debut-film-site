"use client";

import Image from "next/image";

const stills = [
  { src: "/stills/still-01.jpg", alt: "Designer's workbench by candlelight" },
  { src: "/stills/still-02.jpg", alt: "Mood board and fashion sketches" },
  { src: "/stills/still-03.jpg", alt: "Rose satin skirt against sketch wall" },
  { src: "/stills/still-04.jpg", alt: "Ieva drawing at the table" },
  { src: "/stills/still-05.jpg", alt: "Studio light — mannequins and drapes" },
  { src: "/stills/still-06.jpg", alt: "Gold gown full length" },
  { src: "/stills/still-07.jpg", alt: "Studio with mannequin and ladder" },
  { src: "/stills/still-08.jpg", alt: "Sewing machine and candles" },
  { src: "/stills/still-09.jpg", alt: "Pink and lace garments on ladder" },
  { src: "/stills/still-10.jpg", alt: "Garments draped on ladder" },
];

const credits = [
  { role: "A short film by",         name: "Sofia Harper" },
  { role: "Played by",               name: "Ieva Šmaižytė" },
  { role: "Director of Photography", name: "Nil Gruner" },
  { role: "Assistant Camera",        name: "Daria Makarenko" },
  { role: "Sound",                   name: "Dylan Rathmann" },
  { role: "Location",                name: "Pulsraum Berlin" },
  { role: "Designs by",              name: "Lilith Kunst" },
];

function Ornament() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, margin: "40px 0", opacity: 0.4 }}>
      <div style={{ height: 1, width: 40, background: "#1a0900" }} />
      <div style={{ width: 8, height: 8, background: "#1a0900", transform: "rotate(45deg)" }} />
      <div style={{ height: 1, width: 40, background: "#1a0900" }} />
    </div>
  );
}

function Rule({ style = {} }: { style?: React.CSSProperties }) {
  return (
    <hr style={{
      border: "none",
      height: 1,
      background: "linear-gradient(to right, transparent, rgba(30,10,2,0.28), transparent)",
      margin: 0,
      ...style,
    }} />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{
      textAlign: "center",
      fontSize: "0.7rem",
      letterSpacing: "0.5em",
      textTransform: "uppercase",
      color: "rgba(30,14,2,0.45)",
      fontFamily: "Georgia, serif",
      marginBottom: 8,
    }}>
      {children}
    </p>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 style={{
      textAlign: "center",
      fontFamily: "'Palatino Linotype', Palatino, 'Book Antiqua', Georgia, serif",
      fontStyle: "italic",
      fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
      color: "#1a0900",
      marginBottom: 48,
    }}>
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main style={{ background: "linear-gradient(160deg, #f2deae 0%, #e8cc8a 40%, #edd69c 70%, #d4b870 100%)", minHeight: "100vh" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 300,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 40px",
        background: "rgba(6,2,0,0.80)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(180,140,60,0.15)",
      }}>
        <span className="nav-logo" style={{
          fontFamily: "'Palatino Linotype', Palatino, Georgia, serif",
          fontStyle: "italic",
          fontSize: "1rem",
          color: "rgba(240,220,170,0.92)",
          letterSpacing: "0.05em",
          whiteSpace: "nowrap",
          flexShrink: 0,
          marginRight: 48,
        }}>
          <span style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <span>Début</span>
            <span style={{ fontStyle: "normal", fontWeight: 400, fontSize: "0.55rem", letterSpacing: "0.28em", textTransform: "uppercase", opacity: 0.5 }}>an experimental film by Sofia Harper</span>
          </span>
        </span>
        <div className="nav-links" style={{ display: "flex", gap: 32, flexShrink: 0 }}>
          {["Watch", "Stills", "Credits", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "0.6rem",
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                color: "rgba(220,195,140,0.55)",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: "relative", width: "100%", height: "100vh", minHeight: 640, background: "#000" }}>
        <video
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
          src="/debut-hero.mp4"
          autoPlay loop muted playsInline
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.38)" }} />
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <video
            src="/debut-title.mp4"
            autoPlay loop muted playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover", mixBlendMode: "screen" }}
          />
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(10,4,0,0.6) 100%)" }} />
      </section>

      {/* ── WATCH ── */}
      <section id="watch" style={{ padding: "100px 48px", maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionLabel>Film</SectionLabel>
        <SectionHeading>Watch</SectionHeading>
        <Rule />
        <div style={{ marginTop: 48, position: "relative", width: "100%", paddingTop: "56.25%", borderRadius: 2, overflow: "hidden", boxShadow: "0 8px 48px rgba(10,4,0,0.28)" }}>
          <iframe
            src="https://player.vimeo.com/video/1200964992?badge=0&autopause=0&player_id=0&app_id=58479&color=c8a96e&title=0&byline=0&portrait=0"
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", filter: "sepia(0.10) contrast(0.97)" }}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="Début — Sofia Harper"
          />
        </div>
      </section>

      {/* ── STILLS ── */}
      <section id="stills" style={{ padding: "100px 48px", maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionLabel>Stills</SectionLabel>
        <SectionHeading>From the Set</SectionHeading>
        <Rule />
        <div style={{
          marginTop: 48,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: 16,
        }}>
          {stills.map((s, i) => (
            <div
              key={s.src}
              style={{
                position: "relative",
                aspectRatio: "3/4",
                overflow: "hidden",
                borderRadius: 2,
                boxShadow: "0 4px 20px rgba(10,4,0,0.20)",
              }}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                style={{ objectFit: "cover", transition: "transform 0.6s ease", filter: "sepia(0.15) contrast(0.95) brightness(0.97)" }}
                onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")}
                onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = "")}
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── CREDITS ── */}
      <section id="credits" style={{ padding: "100px 48px", maxWidth: 760, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionLabel>Credits</SectionLabel>
        <SectionHeading>The Film</SectionHeading>
        <Rule />
        <Ornament />

        {/* desktop: 2-col grid for credits */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "32px 48px",
        }}>
          {credits.map(({ role, name }, i) => (
            <div key={i} style={{ textAlign: "center", padding: "16px 0", borderBottom: "1px solid rgba(30,10,2,0.10)" }}>
              <p style={{ fontSize: "0.65rem", letterSpacing: "0.4em", textTransform: "uppercase", color: "rgba(30,14,2,0.50)", fontFamily: "Georgia, serif", marginBottom: 6 }}>
                {role}
              </p>
              <p style={{ fontFamily: "'Palatino Linotype', Palatino, Georgia, serif", fontStyle: "italic", fontSize: "1.2rem", color: "#1a0900", letterSpacing: "0.04em" }}>
                {name}
              </p>
            </div>
          ))}
        </div>

        <Ornament />
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "80px 48px 120px", textAlign: "center", background: "linear-gradient(to bottom, transparent, rgba(10,4,0,0.07))", position: "relative", zIndex: 1 }}>
        <Rule style={{ maxWidth: 320, margin: "0 auto 64px" }} />
        <p style={{ fontSize: "0.7rem", letterSpacing: "0.5em", textTransform: "uppercase", color: "rgba(30,14,2,0.45)", fontFamily: "Georgia, serif", marginBottom: 12 }}>
          Contact
        </p>
        <a
          href="mailto:sofiamharper1@gmail.com"
          style={{ fontFamily: "'Palatino Linotype', Palatino, Georgia, serif", fontStyle: "italic", fontSize: "clamp(1rem, 1.8vw, 1.4rem)", color: "#1a0900", letterSpacing: "0.03em", textDecoration: "none", display: "block", marginBottom: 16 }}
        >
          sofiamharper1@gmail.com
        </a>
        <a
          href="https://www.instagram.com/debutshortfilm"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontFamily: "'Palatino Linotype', Palatino, Georgia, serif", fontStyle: "italic", fontSize: "clamp(0.9rem, 1.5vw, 1.15rem)", color: "#1a0900", letterSpacing: "0.03em", textDecoration: "none", opacity: 0.65, display: "block" }}
        >
          @debutshortfilm
        </a>

        <Ornament />

        <p style={{ fontSize: "0.65rem", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(30,14,2,0.30)", fontFamily: "Georgia, serif" }}>
          © 2026 Sofia Harper
        </p>
      </section>

    </main>
  );
}
