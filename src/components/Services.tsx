"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

const SERVICES = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
    title: "Websites",
    price: "From R8,000",
    usd: "$450",
    desc: "Custom Next.js websites — fast, SEO-ready, and actually yours. No page builders, no licence fees, no ceiling.",
    tags: ["Next.js", "SEO", "Tailwind"],
    note: "Starter sites from R3,000 for simple single-page builds",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="3"/>
        <path d="M12 18h.01"/>
      </svg>
    ),
    title: "Progressive Web Apps",
    price: "From R40,000",
    usd: "$2,500",
    desc: "Installable, offline-capable apps — without the App Store. Replace your spreadsheets with real software.",
    tags: ["PWA", "Firebase", "TypeScript"],
    highlight: true,
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10"/>
        <path d="M12 6v6l4 2"/>
        <path d="M22 2 16 8M16 2h6v6"/>
      </svg>
    ),
    title: "AI Integrations",
    price: "From R15,000",
    usd: "$850",
    desc: "Claude API, chatbots, automation, and intelligent features baked into your site or app. A genuine differentiator.",
    tags: ["Claude API", "AI", "Automation"],
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
    title: "Monthly Retainers",
    price: "From R5,000/mo",
    usd: "$300/mo",
    desc: "Hosting, updates, support, and ongoing feature development. A dedicated technical partner, not a one-off vendor.",
    tags: ["Hosting", "Support", "Ongoing"],
  },
];

export default function Services() {
  useScrollReveal();

  return (
    <section id="services" className="py-32 max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="mb-16" data-reveal>
        <span className="text-[11px] font-mono text-[rgba(26,26,26,0.45)] tracking-widest uppercase">
          What we build
        </span>
        <h2 className="font-serif text-4xl font-normal mt-3 mb-4 tracking-tight text-[#1A1A1A]">
          Services
        </h2>
        <p className="text-[rgba(26,26,26,0.6)] max-w-lg leading-relaxed">
          Fixed-price projects with a clear scope. 50% deposit to start, balance on delivery. No surprise invoices.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-5" data-reveal-group>
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className="group relative p-8 bg-white border border-[rgba(26,26,26,0.08)] border-l-2 border-l-transparent hover:border-l-[#C8602A] hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-300"
            data-reveal-child
          >
            {s.highlight && (
              <span className="absolute top-4 right-4 text-[11px] font-mono text-[#C8602A] bg-[rgba(200,96,42,0.08)] border border-[rgba(200,96,42,0.2)] px-2 py-0.5">
                Most popular
              </span>
            )}
            <div className="text-[rgba(26,26,26,0.4)] mb-4">{s.icon}</div>
            <h3 className="font-serif text-xl font-normal mb-2 tracking-tight text-[#1A1A1A]">{s.title}</h3>
            <p className="text-[rgba(26,26,26,0.6)] leading-relaxed mb-5">{s.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[11px] font-mono text-[rgba(26,26,26,0.6)] bg-[rgba(200,96,42,0.08)] px-2.5 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 pt-4 border-t border-[rgba(26,26,26,0.08)]">
              <span className="font-serif text-lg text-[#C8602A]">{s.price}</span>
              <span className="text-sm text-[rgba(26,26,26,0.4)] font-mono">/ {s.usd}</span>
            </div>

            {/* Optional note for starter tier */}
            {s.note && (
              <p className="mt-3 text-[11px] font-mono text-[rgba(26,26,26,0.45)]">
                {s.note}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-8 text-[11px] text-[rgba(26,26,26,0.4)] font-mono" data-reveal>
        * USD pricing for international clients. Prices exclude VAT. Timeline varies by scope.
        <a
          href="#contact"
          className="text-[rgba(26,26,26,0.6)] hover:text-[#C8602A] ml-2 underline-hover"
        >
          Get a custom quote →
        </a>
      </p>
    </section>
  );
}
