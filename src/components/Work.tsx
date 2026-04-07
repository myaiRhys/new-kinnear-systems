"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const CASES = [
  {
    name: "Thibault",
    type: "Household management PWA",
    problem: "A busy family needed a way to coordinate household tasks, shopping lists, and schedules without endless WhatsApp threads.",
    solution: "Built an installable PWA with shared task boards, recurring reminders, and offline support. Now used daily by the whole household.",
    tags: ["PWA", "Firebase", "React"],
  },
  {
    name: "Suit Hire Manager",
    type: "In-store inventory & booking PWA",
    problem: "A suit hire business was tracking inventory on paper and losing bookings due to double-bookings and missed returns.",
    solution: "Replaced their paper system with a real-time inventory tracker, calendar booking system, and automated SMS reminders for pickups and returns.",
    tags: ["PWA", "Firestore", "SMS API"],
  },
  {
    name: "FieldTrack",
    type: "Job management PWA for tradespeople",
    problem: "Field service teams were juggling job cards, invoices, and client communication across multiple apps and spreadsheets.",
    solution: "Created a mobile-first job management system with scheduling, on-site photo capture, digital signatures, and automatic invoice generation.",
    tags: ["PWA", "TypeScript", "PDF Generation"],
  },
];

export default function Work() {
  useScrollReveal();
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggleExpand = (name: string) => {
    setExpanded(expanded === name ? null : name);
  };

  return (
    <section id="work" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16" data-reveal>
          <span className="text-[11px] font-mono text-[rgba(26,26,26,0.45)] tracking-widest uppercase">
            Case studies
          </span>
          <h2 className="font-serif text-4xl font-normal mt-3 mb-4 tracking-tight text-[#1A1A1A]">
            Our work
          </h2>
          <p className="text-[rgba(26,26,26,0.6)] max-w-lg leading-relaxed">
            Three real projects built on our stack. All are production applications, not mockups.
          </p>
        </div>

        {/* Grid wrapper */}
        <div
          className="grid md:grid-cols-2 gap-5"
          data-reveal-group
        >
          {CASES.map((c, index) => (
            <div
              key={c.name}
              className="work-item group bg-white border border-[rgba(26,26,26,0.08)] hover:border-[rgba(26,26,26,0.2)] transition-all duration-300"
              data-reveal-child
            >
              {/* Main card content */}
              <button
                onClick={() => toggleExpand(c.name)}
                className="w-full text-left p-8 relative"
              >
                {/* Project number */}
                <span className="text-[11px] font-mono text-[rgba(26,26,26,0.3)] tracking-widest mb-4 block">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Title */}
                <h3
                  className="font-serif font-normal tracking-tight mb-2 text-[#1A1A1A]"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
                >
                  {c.name}
                </h3>

                {/* Type */}
                <p className="text-[11px] font-mono uppercase tracking-widest text-[rgba(26,26,26,0.45)]">
                  {c.type}
                </p>

                {/* Expand indicator */}
                <div className="absolute bottom-8 right-8 w-8 h-8 rounded-full border border-[rgba(26,26,26,0.15)] flex items-center justify-center transition-all duration-300">
                  <span className={`text-[#1A1A1A] text-sm transition-transform duration-300 ${expanded === c.name ? "rotate-45" : ""}`}>
                    +
                  </span>
                </div>
              </button>

              {/* Expandable content */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  expanded === c.name ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-8 pb-8 pt-0 border-t border-[rgba(26,26,26,0.08)]">
                  {/* Screenshot placeholder */}
                  <div className="bg-[rgba(26,26,26,0.04)] border border-[rgba(26,26,26,0.08)] aspect-video mb-6 mt-6 flex items-center justify-center">
                    <span className="text-[11px] font-mono text-[rgba(26,26,26,0.3)] uppercase tracking-widest">
                      Screenshot available on request
                    </span>
                  </div>

                  {/* Problem */}
                  <div className="mb-4">
                    <span className="text-[11px] font-mono text-[rgba(26,26,26,0.45)] uppercase tracking-widest block mb-2">
                      The problem
                    </span>
                    <p className="text-[rgba(26,26,26,0.7)] leading-relaxed">
                      {c.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-5">
                    <span className="text-[11px] font-mono text-[rgba(26,26,26,0.45)] uppercase tracking-widest block mb-2">
                      What we built
                    </span>
                    <p className="text-[rgba(26,26,26,0.7)] leading-relaxed">
                      {c.solution}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {c.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-mono text-[rgba(26,26,26,0.55)] bg-[rgba(26,26,26,0.06)] px-2.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Fourth cell - CTA */}
          <div
            className="work-item group bg-white border border-[rgba(26,26,26,0.08)] hover:border-[rgba(26,26,26,0.2)] p-8 transition-all duration-300 flex flex-col justify-center"
            data-reveal-child
          >
            <span className="text-[11px] font-mono text-[rgba(26,26,26,0.3)] tracking-widest mb-4 block">
              04
            </span>
            <h3
              className="font-serif font-normal tracking-tight mb-2 text-[#1A1A1A]"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
            >
              Your project?
            </h3>
            <p className="text-[11px] font-mono uppercase tracking-widest text-[rgba(26,26,26,0.45)]">
              Let&apos;s build something
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
