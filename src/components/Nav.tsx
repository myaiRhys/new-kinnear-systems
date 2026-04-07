"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Get a quote", isCta: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F4F0]/92 backdrop-blur-[12px] border-b border-[rgba(26,26,26,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="flex items-baseline gap-0 group">
          <span className="font-serif text-xl font-normal text-[#1A1A1A] tracking-tight">
            Kinnear
          </span>
          <span className="font-serif text-xl font-normal text-[#1A1A1A] tracking-tight">
            Systems
          </span>
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              {l.isCta ? (
                <a
                  href={l.href}
                  className="text-[11px] font-mono uppercase tracking-widest bg-[#C8602A] text-white px-4 py-2 transition-all duration-200 hover:bg-[#B5552A]"
                >
                  {l.label}
                </a>
              ) : (
                <a
                  href={l.href}
                  className="text-sm text-[rgba(26,26,26,0.6)] hover:text-[#C8602A] transition-colors duration-200 underline-hover"
                >
                  {l.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
