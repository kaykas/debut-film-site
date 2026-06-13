"use client";

import Image from "next/image";
import { useRef } from "react";

const stills = [
  { src: "/stills/still-01.jpg", alt: "Gold gown on mannequin — Pulsraum Berlin" },
  { src: "/stills/still-02.jpg", alt: "Designer's workbench by candlelight" },
  { src: "/stills/still-03.jpg", alt: "Mood board and fashion sketches" },
  { src: "/stills/still-04.jpg", alt: "Rose satin skirt against sketch wall" },
  { src: "/stills/still-05.jpg", alt: "Two mannequins in the studio" },
  { src: "/stills/still-06.jpg", alt: "Ieva drawing at the table" },
  { src: "/stills/still-07.jpg", alt: "Studio light — mannequins and drapes" },
  { src: "/stills/still-08.jpg", alt: "Gold gown full length" },
  { src: "/stills/still-09.jpg", alt: "Studio with mannequin and ladder" },
  { src: "/stills/still-10.jpg", alt: "Sewing machine and candles" },
  { src: "/stills/still-11.jpg", alt: "Pink and lace garments on ladder" },
  { src: "/stills/still-12.jpg", alt: "Garments draped on ladder" },
];



const credits = [
  { role: "A short film by",        name: "Sofia Harper" },
  { role: "Played by",              name: "Ieva Šmaižytė" },
  { role: "Director of Photography",name: "Nil Gruner" },
  { role: "Assistant Camera",       name: "Daria Makarenko" },
  { role: "Sound",                  name: "Dylan Rathmann" },
  { role: "Location",               name: "Pulsraum Berlin" },
  { role: "Designs by",             name: "Lilith Kunst" },
];



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
  const galleryRef = useRef<HTMLDivElement>(null);

  return (
    <main className="min-h-screen" style={{ background: "linear-gradient(160deg, #f2deae 0%, #e8cc8a 40%, #edd69c 70%, #d4b870 100%)" }}>

      {/* ── HERO ── */}
      <section className="relative w-full" style={{ height: "100svh", minHeight: 560, background: "#000" }}>

        {/* looping title clip */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/debut-title.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* subtle bottom fade into page background */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(10,4,0,0.5) 100%)" }} />
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
            title="Début — Sofia Harper"
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

        <div className="mt-8">
          <a
            href="https://www.instagram.com/debutshortfilm"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif italic transition-opacity hover:opacity-60"
            style={{ fontSize: "clamp(1rem, 2.5vw, 1.25rem)", color: "#1a0900", letterSpacing: "0.03em", opacity: 0.75 }}
          >
            @debutshortfilm
          </a>
        </div>

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
