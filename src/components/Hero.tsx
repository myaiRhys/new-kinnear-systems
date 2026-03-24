"use client";

import { useEffect, useRef } from "react";

const STACK = ["Next.js", "TypeScript", "Firebase", "PWA", "GitHub Actions"];

export default function Hero() {
  const gridRef = useRef<HTMLDivElement>(null);

  // Subtle parallax on the grid bg
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const x = (e.clientX / window.innerWidth  - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      gridRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Background grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={gridRef}
          className="absolute inset-[-10%] transition-transform duration-700 ease-out"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37,99,235,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37,99,235,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">

        {/* Eyebrow */}
        <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <span className="inline-flex items-center gap-2 text-xs font-mono text-blue/80 tracking-widest uppercase mb-8">
            <span className="w-8 h-px bg-blue/50" />
            Cape Town · South Africa
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-semibold leading-[1.05] tracking-tight mb-8 animate-fade-up opacity-0"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          We build software
          <br />
          <span className="text-blue">that works.</span>
        </h1>

        {/* Subheading */}
        <p
          className="text-off-wht/60 max-w-xl leading-relaxed mb-12 animate-fade-up opacity-0"
          style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", animationDelay: "0.35s", animationFillMode: "forwards" }}
        >
          Not templates that limit you. Custom Next.js websites, Progressive Web Apps,
          and Firebase backends — built to grow with your business.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-wrap gap-4 mb-20 animate-fade-up opacity-0"
          style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-blue hover:bg-blue-dim text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
          >
            Get a free quote
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 text-off-wht/70 hover:text-white border border-navy-600 hover:border-navy-600/80 px-6 py-3 rounded-lg transition-colors duration-200 text-sm"
          >
            See our work
          </a>
        </div>

        {/* Stack pills */}
        <div
          className="animate-fade-up opacity-0"
          style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
        >
          <p className="text-xs text-off-wht/30 uppercase tracking-widest font-mono mb-3">Stack</p>
          <div className="flex flex-wrap gap-2">
            {STACK.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-blue/80 border border-blue/20 bg-blue/5 px-3 py-1.5 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0"
        style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
      >
        <span className="text-xs text-off-wht/30 font-mono tracking-widest">scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-off-wht/20 to-transparent" />
      </div>
    </section>
  );
}
