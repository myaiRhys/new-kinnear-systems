"use client";

import { useEffect, useRef } from "react";

const CASES = [
  {
    name: "Thibault",
    type: "Household management PWA",
    status: "Live",
    statusColor: "text-green-400 bg-green-400/10 border-green-400/20",
    client: "Cape Town private client",
    problem:
      "A household using a generic task app that couldn't separate shared family lists from private personal ones. Everything was visible to everyone, or nothing was shared.",
    solution:
      "A custom PWA with shared household lists (shopping, chores) and private per-member task lists — all in real time. Installable on iOS and Android without an app store.",
    stack: ["Next.js", "TypeScript", "Firebase Firestore", "Firebase Auth", "PWA", "GitHub Actions"],
    highlight: "Adopted immediately. Used daily as the household's primary management tool.",
  },
  {
    name: "Suit Hire Manager",
    type: "In-store inventory & booking PWA",
    status: "In development",
    statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    client: "Hire industry",
    problem:
      "Suit and equipment hire businesses managing bookings, inventory, and client records across spreadsheets and paper — errors at handover, double-bookings, no availability view.",
    solution:
      "A tablet-first PWA for in-store use: catalogue every item, visualise the booking calendar, track returns and damage, store client measurements and history.",
    stack: ["Next.js", "TypeScript", "Firebase Firestore", "Firebase Auth", "PWA"],
    highlight: "Full working demo available. Contact us if you run a hire business.",
  },
  {
    name: "FieldTrack",
    type: "Job management PWA for tradespeople",
    status: "Live",
    statusColor: "text-green-400 bg-green-400/10 border-green-400/20",
    client: "Spec project — built to demonstrate KS capability",
    problem:
      "Plumbers, electricians and aircon techs in Cape Town manage jobs, quotes and client communication through WhatsApp and paper job cards. No visibility on job status, no quote history, no record of what was done.",
    solution:
      "A full PWA installable on any phone without an app store. Manages jobs, clients, photo evidence, quotes with PDF export, a communication log per job, and a scheduling calendar. Works offline.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "PWA", "react-hook-form", "jspdf"],
    highlight: "Fully working demo — load the app, hit 'Load demo data', and explore a live Cape Town plumbing business in your browser.",
  },
];

export default function Work() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
    <section id="work" ref={sectionRef} className="py-28 bg-navy-800/30 border-y border-navy-700">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16 reveal">
          <span className="text-xs font-mono text-blue/70 tracking-widest uppercase">
            Case studies
          </span>
          <h2 className="font-display text-4xl font-semibold mt-3 mb-4 tracking-tight">
            Our work
          </h2>
          <p className="text-off-wht/50 max-w-lg">
            Three real projects built on our stack. All are production applications, not mockups.
          </p>
        </div>

        {/* Cases */}
        <div className="flex flex-col gap-6">
          {CASES.map((c) => (
            <div
              key={c.name}
              className="reveal rounded-xl border border-navy-700 bg-navy-800/50 overflow-hidden"
            >
              {/* Card header */}
              <div className="flex flex-wrap items-start justify-between gap-4 p-6 pb-0">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-display text-2xl font-semibold tracking-tight">{c.name}</h3>
                    <span className={`text-xs font-mono border px-2 py-0.5 rounded-full ${c.statusColor}`}>
                      {c.status}
                    </span>
                  </div>
                  <p className="text-blue/70 text-sm font-mono">{c.type}</p>
                </div>
                <span className="text-xs text-off-wht/30 font-mono mt-1">{c.client}</span>
              </div>

              {/* Card body */}
              <div className="grid md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-navy-700 mt-6">
                <div className="p-6">
                  <p className="text-xs font-mono text-off-wht/30 uppercase tracking-widest mb-2">Problem</p>
                  <p className="text-off-wht/60 text-sm leading-relaxed">{c.problem}</p>
                </div>
                <div className="p-6">
                  <p className="text-xs font-mono text-off-wht/30 uppercase tracking-widest mb-2">Solution</p>
                  <p className="text-off-wht/60 text-sm leading-relaxed">{c.solution}</p>
                </div>
              </div>

              {/* Card footer */}
              <div className="px-6 py-4 border-t border-navy-700 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {c.stack.map((t) => (
                    <span key={t} className="text-xs font-mono text-off-wht/30 bg-navy-700 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-blue/70 italic">{c.highlight}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Screenshots note */}
        <p className="mt-8 text-xs text-off-wht/30 font-mono reveal">
          Screenshots and live demos available on request.
          <a href="#contact" className="text-blue/60 hover:text-blue ml-2 underline-hover">
            Get in touch →
          </a>
        </p>
      </div>
    </section>
  );
}
