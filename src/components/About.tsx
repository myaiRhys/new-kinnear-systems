"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function About() {
  useScrollReveal();

  return (
    <section className="py-32 max-w-6xl mx-auto px-6">
      <div className="max-w-2xl border-l-2 border-[#C8602A] pl-8" data-reveal>
        <p className="text-[rgba(26,26,26,0.7)] leading-relaxed text-lg mb-6">
          Kinnear Systems is a Cape Town-based development studio. We build custom web applications and progressive web apps for businesses that need software that actually works — not templates, not page builders, but real code you own.
        </p>
        <p className="text-[rgba(26,26,26,0.55)] leading-relaxed">
          We work directly with founders, operators, and small teams who know their problem well but need a technical partner to build the solution. No middlemen, no account managers — just clear communication and working software.
        </p>
      </div>
    </section>
  );
}
