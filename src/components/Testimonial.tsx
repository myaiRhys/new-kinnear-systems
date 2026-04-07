"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Testimonial() {
  useScrollReveal();

  return (
    <section className="py-32 max-w-6xl mx-auto px-6">
      <div className="max-w-3xl mx-auto text-center" data-reveal>
        {/* Quotation mark */}
        <span className="text-6xl font-serif text-[#C8602A] opacity-30 leading-none block mb-6">
          &ldquo;
        </span>

        {/* Quote */}
        <blockquote className="font-serif text-2xl md:text-3xl font-normal leading-relaxed text-[#1A1A1A] tracking-tight mb-8">
          Rhys understood exactly what we needed and delivered something that actually made our day-to-day easier. No fluff, no unnecessary features — just a tool that works.
        </blockquote>

        {/* Attribution */}
        <div className="space-y-1">
          <p className="text-[#1A1A1A] font-medium">
            Client Name
          </p>
          <p className="text-[11px] font-mono text-[rgba(26,26,26,0.45)] uppercase tracking-widest">
            Company Name · Cape Town
          </p>
        </div>
      </div>
    </section>
  );
}
