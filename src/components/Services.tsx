"use client";

import { useEffect, useRef } from "react";

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
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-28 max-w-6xl mx-auto px-6">

      {/* Header */}
      <div className="mb-16 reveal">
        <span className="text-xs font-mono text-blue/70 tracking-widest uppercase">
          What we build
        </span>
        <h2 className="font-display text-4xl font-semibold mt-3 mb-4 tracking-tight">
          Services
        </h2>
        <p className="text-off-wht/50 max-w-lg">
          Fixed-price projects with a clear scope. 50% deposit to start, balance on delivery. No surprise invoices.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {SERVICES.map((s) => (
          <div
            key={s.title}
            className={`reveal group relative rounded-xl p-6 border transition-all duration-300 hover:border-blue/40 ${
              s.highlight
                ? "border-blue/40 bg-blue/5"
                : "border-navy-700 bg-navy-800/50 hover:bg-navy-800"
            }`}
          >
            {s.highlight && (
              <span className="absolute top-4 right-4 text-xs font-mono text-blue bg-blue/10 border border-blue/20 px-2 py-0.5 rounded-full">
                Most popular
              </span>
            )}
            <div className="text-blue mb-4">{s.icon}</div>
            <h3 className="font-display text-xl font-semibold mb-2 tracking-tight">{s.title}</h3>
            <p className="text-off-wht/50 text-sm leading-relaxed mb-5">{s.desc}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {s.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono text-off-wht/30 bg-navy-700 px-2.5 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 pt-4 border-t border-navy-700">
              <span className="font-display text-lg font-semibold text-white">{s.price}</span>
              <span className="text-sm text-off-wht/30 font-mono">/ {s.usd}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <p className="mt-8 text-xs text-off-wht/30 font-mono reveal">
        * USD pricing for international clients. Prices exclude VAT. Timeline varies by scope.
        <a href="#contact" className="text-blue/60 hover:text-blue ml-2 underline-hover">Get a custom quote →</a>
      </p>
    </section>
  );
}
