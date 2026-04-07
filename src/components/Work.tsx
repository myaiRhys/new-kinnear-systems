"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const CASES = [
  {
    name: "Thibault",
    type: "Household management PWA",
  },
  {
    name: "Suit Hire Manager",
    type: "In-store inventory & booking PWA",
  },
  {
    name: "FieldTrack",
    type: "Job management PWA for tradespeople",
  },
];

export default function Work() {
  useScrollReveal();

  return (
    <section id="work" className="py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16" data-reveal>
          <span className="text-[11px] font-mono text-[rgba(232,228,220,0.4)] tracking-widest uppercase">
            Case studies
          </span>
          <h2 className="font-serif text-4xl font-normal mt-3 mb-4 tracking-tight">
            Our work
          </h2>
          <p className="text-[rgba(232,228,220,0.5)] max-w-lg text-sm">
            Three real projects built on our stack. All are production applications, not mockups.
          </p>
        </div>

        {/* Grid wrapper with 1px gaps */}
        <div
          className="grid md:grid-cols-2 gap-px"
          style={{ backgroundColor: "rgba(232,228,220,0.08)" }}
          data-reveal-group
        >
          {CASES.map((c, index) => (
            <div
              key={c.name}
              className="work-item group bg-[#0a0a0a] hover:bg-[#111] p-12 transition-colors duration-300 relative"
              data-reveal-child
            >
              {/* Project number */}
              <span className="text-[11px] font-mono text-[rgba(232,228,220,0.25)] tracking-widest mb-4 block">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3
                className="font-serif font-normal tracking-tight mb-2"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
              >
                {c.name}
              </h3>

              {/* Type */}
              <p className="text-[11px] font-mono uppercase tracking-widest text-[rgba(232,228,220,0.4)]">
                {c.type}
              </p>

              {/* Arrow */}
              <div className="absolute bottom-12 right-12 w-10 h-10 rounded-full border border-[rgba(232,228,220,0.2)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45">
                <span className="text-[#e8e4dc] text-lg">↗</span>
              </div>
            </div>
          ))}

          {/* Fourth cell - CTA */}
          <div
            className="work-item group bg-[#0a0a0a] hover:bg-[#111] p-12 transition-colors duration-300 flex flex-col justify-center"
            data-reveal-child
          >
            <span className="text-[11px] font-mono text-[rgba(232,228,220,0.25)] tracking-widest mb-4 block">
              04
            </span>
            <h3
              className="font-serif font-normal tracking-tight mb-2"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
            >
              Your project?
            </h3>
            <p className="text-[11px] font-mono uppercase tracking-widest text-[rgba(232,228,220,0.4)]">
              Let&apos;s build something
            </p>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-8 text-[11px] text-[rgba(232,228,220,0.3)] font-mono" data-reveal>
          Screenshots and live demos available on request.
          <a
            href="#contact"
            className="text-[rgba(232,228,220,0.5)] hover:text-[#e8e4dc] ml-2 underline-hover"
          >
            Get in touch →
          </a>
        </p>
      </div>
    </section>
  );
}
