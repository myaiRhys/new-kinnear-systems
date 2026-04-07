"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const FAQS = [
  {
    question: "How long does a typical project take?",
    answer: "Most websites take 2-4 weeks. PWAs and custom applications typically take 6-12 weeks depending on complexity. We'll give you a realistic timeline in your quote — no vague estimates.",
  },
  {
    question: "What happens if I need changes after delivery?",
    answer: "Small tweaks within the first two weeks are included. After that, we offer monthly retainers for ongoing support, or you can request ad-hoc changes at our standard hourly rate. You own your code, so you can also make changes yourself or hire someone else.",
  },
  {
    question: "Do you handle hosting?",
    answer: "We can. Most of our projects deploy to Vercel or Firebase, which are cost-effective and highly reliable. We can manage this for you on a retainer, or hand over the keys if you prefer to manage it yourself.",
  },
  {
    question: "Can you work with international clients?",
    answer: "Yes. We work with clients across time zones via async communication. Payments can be made in USD, and we're flexible with meeting times for check-ins and handovers.",
  },
  {
    question: "I'm not sure what I need — can you still help?",
    answer: "Absolutely. Many clients come to us with a problem rather than a specification. We'll ask the right questions, propose a solution, and give you a clear scope before any commitment. The initial consultation is free.",
  },
];

export default function FAQ() {
  useScrollReveal();
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggle = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <section className="py-32 max-w-6xl mx-auto px-6">
      {/* Header */}
      <div className="mb-12" data-reveal>
        <span className="text-[11px] font-mono text-[rgba(26,26,26,0.45)] tracking-widest uppercase">
          Common questions
        </span>
        <h2 className="font-serif text-4xl font-normal mt-3 tracking-tight text-[#1A1A1A]">
          FAQ
        </h2>
      </div>

      {/* Accordion */}
      <div className="max-w-2xl" data-reveal-group>
        {FAQS.map((faq, index) => (
          <div
            key={index}
            className="border-b border-[rgba(26,26,26,0.08)]"
            data-reveal-child
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left py-6 flex items-start justify-between gap-4 group"
            >
              <span className="text-[#1A1A1A] font-medium leading-relaxed group-hover:text-[#C8602A] transition-colors">
                {faq.question}
              </span>
              <span
                className={`text-[rgba(26,26,26,0.4)] text-xl shrink-0 transition-all duration-300 group-hover:text-[#C8602A] ${
                  expanded === index ? "rotate-45 text-[#C8602A]" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                expanded === index ? "max-h-48 pb-6" : "max-h-0"
              }`}
            >
              <p className="text-[rgba(26,26,26,0.6)] leading-relaxed pr-12">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
