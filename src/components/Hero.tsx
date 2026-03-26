"use client";

import { useEffect, useRef, useState } from "react";

const STACK = ["Next.js", "TypeScript", "React", "Firebase", "Tailwind CSS", "PWA", "Claude API", "Node.js", "REST APIs", "Vercel", "GitHub Actions", "Offline-first"];

type EyebrowStyle = "line" | "tag" | "plain";
type Layout = "left" | "centered" | "split-reverse" | "stacked";
type BgStyle = "grid" | "dots" | "rings" | "geometry" | "plain";
type CtaShape = "rounded" | "pill" | "sharp";

interface Variant {
  accent: string;
  eyebrow: string;
  eyebrowStyle: EyebrowStyle;
  headline: React.ReactNode;
  sub: string;
  layout: Layout;
  bg: BgStyle;
  ctaShape: CtaShape;
  showPills: boolean;
}

const variants: Variant[] = [
  {
    accent: "#2563EB",
    eyebrow: "Cape Town · South Africa",
    eyebrowStyle: "line",
    headline: (
      <>
        We build software
        <br />
        <span style={{ color: "#2563EB" }}>that works.</span>
      </>
    ),
    sub: "Not templates that limit you. Custom Next.js websites, Progressive Web Apps, and Firebase backends — built to grow with your business.",
    layout: "left",
    bg: "grid",
    ctaShape: "rounded",
    showPills: true,
  },
  {
    accent: "#0EA5E9",
    eyebrow: "web dev",
    eyebrowStyle: "tag",
    headline: (
      <>
        Real software.
        <br />
        <span style={{ color: "#0EA5E9" }}>Zero compromise.</span>
      </>
    ),
    sub: "We don't do WordPress themes. We build production-grade apps with modern tools that scale as you grow.",
    layout: "centered",
    bg: "rings",
    ctaShape: "pill",
    showPills: true,
  },
  {
    accent: "#F59E0B",
    eyebrow: "Kinnear Systems",
    eyebrowStyle: "plain",
    headline: (
      <>
        We build things
        <br />
        <span style={{ color: "#F59E0B" }}>on the internet.</span>
      </>
    ),
    sub: "Websites, web apps, PWAs, backends. If it runs in a browser or on a server, we make it.",
    layout: "stacked",
    bg: "plain",
    ctaShape: "sharp",
    showPills: true,
  },
  {
    accent: "#A78BFA",
    eyebrow: "software studio",
    eyebrowStyle: "tag",
    headline: (
      <>
        <span style={{ color: "#A78BFA" }}>Custom.</span> Fast.
        <br />
        Maintainable.
      </>
    ),
    sub: "Code that's built to last. No spaghetti, no tech debt — just clean architecture you can actually maintain.",
    layout: "left",
    bg: "dots",
    ctaShape: "rounded",
    showPills: true,
  },
  {
    accent: "#10B981",
    eyebrow: "Cape Town dev studio",
    eyebrowStyle: "line",
    headline: (
      <>
        Your idea. Our code.
        <br />
        <span style={{ color: "#10B981" }}>Shipped.</span>
      </>
    ),
    sub: "From concept to production. We handle the technical complexity so you can focus on your business.",
    layout: "split-reverse",
    bg: "rings",
    ctaShape: "pill",
    showPills: true,
  },
  {
    accent: "#F43F5E",
    eyebrow: "Kinnear Systems",
    eyebrowStyle: "plain",
    headline: (
      <>
        Not templates.
        <br />
        <span style={{ color: "#F43F5E" }}>Real software.</span>
      </>
    ),
    sub: "Every line of code written for you. No page builders, no plugins, no compromises.",
    layout: "centered",
    bg: "geometry",
    ctaShape: "sharp",
    showPills: true,
  },
  {
    accent: "#6366F1",
    eyebrow: "dev shop",
    eyebrowStyle: "tag",
    headline: (
      <>
        We write code
        <br />
        that actually
        <br />
        <span style={{ color: "#6366F1" }}>ships.</span>
      </>
    ),
    sub: "No endless meetings, no scope creep. Clear milestones, working software, on time.",
    layout: "stacked",
    bg: "grid",
    ctaShape: "pill",
    showPills: true,
  },
  {
    accent: "#06B6D4",
    eyebrow: "South Africa",
    eyebrowStyle: "line",
    headline: (
      <>
        Cape Town built.
        <br />
        <span style={{ color: "#06B6D4" }}>World ready.</span>
      </>
    ),
    sub: "Local expertise, global standards. We build software that works anywhere in the world.",
    layout: "left",
    bg: "dots",
    ctaShape: "rounded",
    showPills: true,
  },
];

function getCtaBorderRadius(shape: CtaShape): string {
  switch (shape) {
    case "pill": return "9999px";
    case "sharp": return "2px";
    case "rounded": default: return "8px";
  }
}

export default function Hero() {
  const [variantIndex, setVariantIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Pick random variant on mount (client-side only)
  useEffect(() => {
    setVariantIndex(Math.floor(Math.random() * variants.length));
  }, []);

  // Subtle parallax on the background
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!gridRef.current) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 12;
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      gridRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // Loading state before hydration
  if (variantIndex === null) {
    return (
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-900">
        <div className="absolute inset-0 bg-navy-900" />
      </section>
    );
  }

  const v = variants[variantIndex];

  // Background rendering
  const renderBackground = () => {
    const accentRgb = hexToRgb(v.accent);

    switch (v.bg) {
      case "grid":
        return (
          <>
            <div
              ref={gridRef}
              className="absolute inset-[-10%] transition-transform duration-700 ease-out"
              style={{
                backgroundImage: `
                  linear-gradient(${v.accent}15 1px, transparent 1px),
                  linear-gradient(90deg, ${v.accent}15 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
            <div
              className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{ background: `radial-gradient(circle, ${v.accent}20 0%, transparent 70%)` }}
            />
          </>
        );
      case "dots":
        return (
          <>
            <div
              ref={gridRef}
              className="absolute inset-[-10%] transition-transform duration-700 ease-out"
              style={{
                backgroundImage: `radial-gradient(${v.accent}30 1px, transparent 1px)`,
                backgroundSize: "30px 30px",
              }}
            />
            <div
              className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
              style={{ background: `radial-gradient(circle, ${v.accent}15 0%, transparent 60%)` }}
            />
          </>
        );
      case "rings":
        return (
          <>
            <div ref={gridRef} className="absolute inset-[-10%] transition-transform duration-700 ease-out">
              {[300, 450, 600, 750].map((size, i) => (
                <div
                  key={size}
                  className="absolute rounded-full border"
                  style={{
                    width: size,
                    height: size,
                    top: -size / 3,
                    right: -size / 3,
                    borderColor: `${v.accent}${15 - i * 3}`,
                  }}
                />
              ))}
            </div>
            <div
              className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full"
              style={{ background: `radial-gradient(circle, ${v.accent}10 0%, transparent 70%)` }}
            />
          </>
        );
      case "geometry":
        return (
          <>
            <div ref={gridRef} className="absolute inset-[-10%] transition-transform duration-700 ease-out">
              <div
                className="absolute top-20 left-10 w-32 h-32 rotate-45"
                style={{ border: `1px solid ${v.accent}20` }}
              />
              <div
                className="absolute bottom-40 right-20 w-24 h-24 rotate-12"
                style={{ border: `1px solid ${v.accent}15` }}
              />
              <div
                className="absolute top-1/3 right-1/4 w-16 h-16 rotate-[30deg]"
                style={{ background: `${v.accent}08` }}
              />
              <div
                className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full"
                style={{ border: `1px solid ${v.accent}12` }}
              />
            </div>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
              style={{ background: `radial-gradient(circle, ${v.accent}08 0%, transparent 60%)` }}
            />
          </>
        );
      case "plain":
      default:
        return (
          <div
            className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{ background: `radial-gradient(circle, ${v.accent}06 0%, transparent 50%)` }}
          />
        );
    }
  };

  // Eyebrow rendering
  const renderEyebrow = () => {
    switch (v.eyebrowStyle) {
      case "line":
        return (
          <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase mb-8" style={{ color: `${v.accent}cc` }}>
            <span className="w-8 h-px" style={{ background: `${v.accent}80` }} />
            {v.eyebrow}
          </span>
        );
      case "tag":
        return (
          <span className="inline-flex items-center text-xs font-mono tracking-widest mb-8" style={{ color: `${v.accent}cc` }}>
            &lt; {v.eyebrow} /&gt;
          </span>
        );
      case "plain":
      default:
        return (
          <span className="inline-flex items-center text-xs font-mono tracking-widest uppercase mb-8" style={{ color: `${v.accent}cc` }}>
            {v.eyebrow}
          </span>
        );
    }
  };

  // Layout-specific content wrapper classes
  const getLayoutClasses = () => {
    switch (v.layout) {
      case "centered":
        return "text-center items-center mx-auto";
      case "stacked":
        return "text-left max-w-4xl";
      case "split-reverse":
      case "left":
      default:
        return "text-left";
    }
  };

  const getHeadlineSize = () => {
    if (v.layout === "stacked") {
      return "clamp(3rem, 8vw, 6rem)";
    }
    return "clamp(2.8rem, 7vw, 5.5rem)";
  };

  const ctaRadius = getCtaBorderRadius(v.ctaShape);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {renderBackground()}
      </div>

      <div className={`relative max-w-6xl mx-auto px-6 pt-32 pb-24 w-full ${v.layout === "split-reverse" ? "flex flex-col-reverse md:flex-row md:items-center md:gap-12" : ""}`}>

        {/* For split-reverse, add a graphic placeholder on the left */}
        {v.layout === "split-reverse" && (
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div
              className="w-64 h-64 rounded-2xl opacity-20"
              style={{
                background: `linear-gradient(135deg, ${v.accent}40 0%, ${v.accent}10 100%)`,
                border: `1px solid ${v.accent}30`
              }}
            />
          </div>
        )}

        <div className={`${v.layout === "split-reverse" ? "flex-1" : ""} ${getLayoutClasses()}`}>
          {/* Eyebrow */}
          <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            {renderEyebrow()}
          </div>

          {/* Headline */}
          <h1
            className={`font-display font-semibold leading-[1.05] tracking-tight mb-8 animate-fade-up opacity-0 ${v.layout === "centered" ? "max-w-3xl" : ""}`}
            style={{ fontSize: getHeadlineSize(), animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            {v.headline}
          </h1>

          {/* Subheading */}
          <p
            className={`text-off-wht/60 leading-relaxed mb-12 animate-fade-up opacity-0 ${v.layout === "centered" ? "max-w-xl mx-auto" : "max-w-xl"}`}
            style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            {v.sub}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-wrap gap-4 mb-20 animate-fade-up opacity-0 ${v.layout === "centered" ? "justify-center" : ""}`}
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-white font-medium px-6 py-3 transition-all duration-200 text-sm hover:opacity-90"
              style={{ background: v.accent, borderRadius: ctaRadius }}
            >
              Get a free quote
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 text-off-wht/70 hover:text-white border border-navy-600 hover:border-navy-500 px-6 py-3 transition-colors duration-200 text-sm"
              style={{ borderRadius: ctaRadius }}
            >
              See our work
            </a>
          </div>

          {/* Stack pills */}
          {v.showPills && (
            <div
              className={`animate-fade-up opacity-0 ${v.layout === "centered" ? "flex flex-col items-center" : ""}`}
              style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}
            >
              <p className="text-xs text-off-wht/30 uppercase tracking-widest font-mono mb-3">Stack</p>
              <div className={`flex flex-wrap gap-2 ${v.layout === "centered" ? "justify-center" : ""}`}>
                {STACK.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-3 py-1.5 rounded-full"
                    style={{
                      color: `${v.accent}cc`,
                      border: `1px solid ${v.accent}33`,
                      background: `${v.accent}0a`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* For left layout, add a subtle graphic on the right */}
        {v.layout === "left" && (
          <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 opacity-30">
            <div
              className="w-48 h-48 rounded-full"
              style={{
                background: `radial-gradient(circle, ${v.accent}20 0%, transparent 70%)`
              }}
            />
          </div>
        )}
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

// Helper to convert hex to rgb for rgba usage
function hexToRgb(hex: string): string {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return "37, 99, 235";
  return `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`;
}
