"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stills = [
  { src: "/stills/still-01.jpg", alt: "Gold gown on mannequin — Pulsraum Berlin" },
  { src: "/stills/still-02.jpg", alt: "Designer's workbench by candlelight" },
  { src: "/stills/still-03.jpg", alt: "Mood board and fashion sketches" },
  { src: "/stills/still-04.jpg", alt: "Rose satin skirt against sketch wall" },
  { src: "/stills/still-05.jpg", alt: "Two mannequins in the studio" },
  { src: "/stills/still-06.jpg", alt: "Ieva drawing at the table" },
  { src: "/stills/still-07.jpg", alt: "Studio light — mannequins and drapes" },
  { src: "/stills/still-08.jpg", alt: "Gold gown full length" },
];

const credits = [
  { role: "Directed by",            name: "Sofia Harper" },
  { role: "Assistant Director",     name: "Tim Hayo" },
  { role: "Played by",              name: "Ieva Šmaižytė" },
  { role: "Director of Photography",name: "Nil Gruner" },
  { role: "Assistant Camera",       name: "Daria Makarenko" },
  { role: "Sound",                  name: "Dylan Rathmann" },
  { role: "Location",               name: "Pulsraum Berlin" },
  { role: "Assistant",              name: "Rita González" },
  { role: "Wardrobe",               name: "Mirela Fischler" },
  { role: "Makeup",                 name: "Selin Köylü" },
  { role: "Colour Grade",           name: "Lena Brandauer" },
  { role: "Music",                  name: "Matias Fröhlich" },
];

const thanks = ["Yuki Tanaka", "Priya Mehta", "Carlos Vega"];

function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 my-10 opacity-40">
      <div className="h-px w-10 bg-[#1a0900]" />
      <div className="w-2 h-2 bg-[#1a0900] rotate-45" />
      <div className="h-px w-10 bg-[#1a0900]" />
    </div>
  );
}

function Rule({ className = "" }: { className?: string }) {
  return (
    <hr
      className={`rule my-0 ${className}`}
      style={{ background: "linear-gradient(to right, transparent, rgba(30,10,2,0.30), transparent)", height: "1px", border: "none" }}
    />
  );
}

export default function Home() {
  const [activeIdx, setActiveIdx] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);

  // auto-cycle hero still every 4s
  useEffect(() => {
    const id = setInterval(() => {
      setActiveIdx((i) => (i + 1) % stills.length);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <main className="min-h-screen" style={{ background: "linear-gradient(160deg, #f2deae 0%, #e8cc8a 40%, #edd69c 70%, #d4b870 100%)" }}>

      {/* ── HERO ── */}
      <section className="relative w-full" style={{ height: "100svh", minHeight: 560 }}>

        {/* stacked hero images */}
        {stills.map((s, i) => (
          <div
            key={s.src}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === activeIdx ? 1 : 0 }}
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* dark + sepia overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,4,0,0.38) 0%, rgba(10,4,0,0.10) 40%, rgba(10,4,0,0.65) 100%)" }} />

        {/* hero text */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-16 text-center px-6">
          <p
            className="text-xs tracking-[0.5em] uppercase mb-3"
            style={{ color: "rgba(240,220,170,0.72)", fontFamily: "Georgia, serif" }}
          >
            A Short Film by
          </p>
          <h1
            className="font-serif italic"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)", color: "#f5e8c8", letterSpacing: "0.02em", lineHeight: 1.05, textShadow: "0 2px 30px rgba(0,0,0,0.5)" }}
          >
            Deb<span style={{ fontStyle: "normal" }}>ú</span>t
          </h1>
          <p
            className="mt-4 text-xs tracking-[0.4em] uppercase"
            style={{ color: "rgba(240,220,170,0.55)", fontFamily: "Georgia, serif" }}
          >
            Berlin, 2026
          </p>
        </div>

        {/* dot nav */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          {stills.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIdx(i)}
              className="transition-all duration-300"
              style={{
                width: i === activeIdx ? 20 : 6,
                height: 6,
                borderRadius: 3,
                background: i === activeIdx ? "rgba(245,232,200,0.85)" : "rgba(245,232,200,0.35)",
                border: "none",
                cursor: "pointer",
              }}
              aria-label={`Still ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── FILM ── */}
      <section className="px-6 py-20 max-w-4xl mx-auto">
        <p className="text-center text-xs tracking-[0.5em] uppercase mb-2" style={{ color: "rgba(30,14,2,0.50)", fontFamily: "Georgia, serif" }}>
          Film
        </p>
        <h2 className="text-center font-serif italic text-3xl mb-10" style={{ color: "#1a0900" }}>
          Watch
        </h2>
        <Rule />
        <div className="mt-10 relative w-full" style={{ paddingTop: "56.25%", borderRadius: 2, overflow: "hidden", boxShadow: "0 8px 40px rgba(10,4,0,0.30)" }}>
          <iframe
            src="https://player.vimeo.com/video/1200964992?badge=0&autopause=0&player_id=0&app_id=58479&color=c8a96e&title=0&byline=0&portrait=0"
            className="absolute inset-0 w-full h-full"
            style={{ border: "none", filter: "sepia(0.12) contrast(0.97)" }}
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            title="Debút — Sofia Harper"
          />
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <p className="text-center text-xs tracking-[0.5em] uppercase mb-2" style={{ color: "rgba(30,14,2,0.50)", fontFamily: "Georgia, serif" }}>
          Stills
        </p>
        <h2 className="text-center font-serif italic text-3xl mb-10" style={{ color: "#1a0900" }}>
          From the Set
        </h2>
        <Rule />

        <div
          ref={galleryRef}
          className="mt-10 grid gap-3"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))" }}
        >
          {stills.map((s, i) => (
            <div
              key={s.src}
              className="relative overflow-hidden"
              style={{
                aspectRatio: "3/4",
                borderRadius: 2,
                boxShadow: "0 4px 24px rgba(10,4,0,0.22)",
              }}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── CREDITS ── */}
      <section className="px-6 py-20 max-w-2xl mx-auto">
        <p className="text-center text-xs tracking-[0.5em] uppercase mb-2" style={{ color: "rgba(30,14,2,0.50)", fontFamily: "Georgia, serif" }}>
          Credits
        </p>
        <h2 className="text-center font-serif italic text-3xl mb-10" style={{ color: "#1a0900" }}>
          The Film
        </h2>
        <Rule />
        <Ornament />

        <div className="space-y-7">
          {credits.map(({ role, name }, i) => (
            <div key={i} className="text-center">
              <p
                className="text-xs uppercase tracking-[0.4em] mb-1"
                style={{ color: "rgba(30,14,2,0.55)", fontFamily: "Georgia, serif" }}
              >
                {role}
              </p>
              <p
                className="font-serif italic"
                style={{ fontSize: "1.35rem", color: "#1a0900", letterSpacing: "0.04em" }}
              >
                {name}
              </p>
              {i < credits.length - 1 && (
                <Rule className="mt-7" />
              )}
            </div>
          ))}
        </div>

        <Ornament />
        <Rule />

        {/* Special thanks */}
        <div className="text-center mt-10">
          <p
            className="text-xs uppercase tracking-[0.4em] mb-4"
            style={{ color: "rgba(30,14,2,0.50)", fontFamily: "Georgia, serif" }}
          >
            Special Thanks
          </p>
          <p
            className="font-serif italic"
            style={{ fontSize: "1.15rem", color: "#1a0900", lineHeight: 2, letterSpacing: "0.03em" }}
          >
            {thanks.join("  ·  ")}
          </p>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section
        className="px-6 py-20 text-center"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(10,4,0,0.08))" }}
      >
        <Rule className="max-w-sm mx-auto mb-16" />
        <p
          className="text-xs uppercase tracking-[0.5em] mb-3"
          style={{ color: "rgba(30,14,2,0.50)", fontFamily: "Georgia, serif" }}
        >
          Contact
        </p>
        <a
          href="mailto:sofiamharper1@gmail.com"
          className="font-serif italic transition-opacity hover:opacity-60"
          style={{ fontSize: "clamp(1.1rem, 3vw, 1.5rem)", color: "#1a0900", letterSpacing: "0.03em" }}
        >
          sofiamharper1@gmail.com
        </a>

        <Ornament />

        <p
          className="text-xs tracking-[0.3em] uppercase"
          style={{ color: "rgba(30,14,2,0.35)", fontFamily: "Georgia, serif" }}
        >
          © 2026 Sofia Harper
        </p>
      </section>

    </main>
  );
}
