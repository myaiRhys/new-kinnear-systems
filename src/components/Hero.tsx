"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll("[data-hero-animate]");

    gsap.set(elements, { opacity: 0, y: 40 });

    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.12,
      delay: 0.2,
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      <div ref={containerRef} className="relative max-w-6xl mx-auto px-6 pb-16 w-full">
        {/* Scroll hint */}
        <div data-hero-animate className="mb-12">
          <span className="text-[11px] font-mono text-[rgba(26,26,26,0.4)] tracking-widest">
            ↓ Scroll to explore
          </span>
        </div>

        {/* Main headline */}
        <h1
          data-hero-animate
          className="font-serif font-normal leading-[1.05] tracking-tight mb-8 text-[#1A1A1A]"
          style={{ fontSize: "clamp(3.5rem, 8vw, 7.5rem)" }}
        >
          Web & App
          <br />
          Development,
          <br />
          Built for the
          <br />
          <em className="text-[rgba(26,26,26,0.45)] not-italic">Real World</em>
        </h1>

        {/* Subline */}
        <p
          data-hero-animate
          className="text-[12px] font-mono uppercase tracking-widest text-[rgba(26,26,26,0.4)]"
        >
          Cape Town · South Africa
        </p>
      </div>
    </section>
  );
}
