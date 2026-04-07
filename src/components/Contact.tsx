"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type FormData = {
  name: string;
  email: string;
  service: string;
  budget: string;
  message: string;
};

const SERVICES = [
  "Starter website",
  "Full business website",
  "Progressive Web App (PWA)",
  "AI integration",
  "Monthly retainer",
  "CI/CD pipeline",
  "Not sure yet",
];

const BUDGETS = [
  "Under R10,000",
  "R10,000 – R30,000",
  "R30,000 – R80,000",
  "R80,000+",
  "International (USD)",
];

export default function Contact() {
  useScrollReveal();

  const [form, setForm] = useState<FormData>({ name: "", email: "", service: "", budget: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});

  function validate(): boolean {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.service) e.service = "Please select a service";
    if (!form.message.trim()) e.message = "Tell us a bit about what you need";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");
    try {
      await addDoc(collection(db, "enquiries"), {
        ...form,
        createdAt: serverTimestamp(),
        source: "website",
      });
      setStatus("sent");
      setForm({ name: "", email: "", service: "", budget: "", message: "" });
    } catch (err) {
      console.error("Firestore submission error:", err);
      setStatus("error");
    }
  }

  function field(key: keyof FormData) {
    return {
      value: form[key],
      onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
        setForm((f) => ({ ...f, [key]: e.target.value })),
    };
  }

  const inputCls = (key: keyof FormData) =>
    `w-full bg-[rgba(232,228,220,0.04)] border px-4 py-3 text-sm text-[#e8e4dc] placeholder-[rgba(232,228,220,0.2)] focus:outline-none transition-all ${
      errors[key]
        ? "border-red-500/60 focus:border-red-500/80"
        : "border-[rgba(232,228,220,0.12)] focus:border-[rgba(232,228,220,0.3)]"
    }`;

  return (
    <section id="contact" className="py-28 max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left — copy */}
        <div>
          <div data-reveal>
            <span className="text-[11px] font-mono text-[rgba(232,228,220,0.4)] tracking-widest uppercase">
              Let&apos;s work together
            </span>
            <h2 className="font-serif text-4xl font-normal mt-3 mb-6 tracking-tight">
              Get a quote
            </h2>
          </div>

          <div className="space-y-6" data-reveal-group>
            {[
              { step: "01", title: "Tell us what you need", desc: "Describe your project — even a rough idea is fine. We'll ask the right questions." },
              { step: "02", title: "Get a fixed-price quote", desc: "We'll scope it and send a clear quote within 24 hours. No vague estimates." },
              { step: "03", title: "50% deposit, then we start", desc: "50% upfront, balance on delivery. No surprise invoices, ever." },
            ].map((s) => (
              <div key={s.step} className="flex gap-4" data-reveal-child>
                <span className="font-mono text-[11px] text-[rgba(232,228,220,0.25)] mt-1 w-8 shrink-0">{s.step}</span>
                <div>
                  <p className="text-sm font-medium text-[#e8e4dc] mb-1">{s.title}</p>
                  <p className="text-sm text-[rgba(232,228,220,0.4)] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-[rgba(232,228,220,0.08)]" data-reveal>
            <p className="text-[11px] text-[rgba(232,228,220,0.3)] font-mono mb-2">Or email us directly</p>
            <a
              href="mailto:rhys@kinnearsystems.co.za"
              className="text-[rgba(232,228,220,0.6)] hover:text-[#e8e4dc] text-sm underline-hover transition-colors"
            >
              rhys@kinnearsystems.co.za
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div data-reveal>
          {status === "sent" ? (
            <div className="border border-green-500/30 bg-green-500/5 p-8 text-center">
              <div className="text-green-400 mb-3">
                <svg className="mx-auto" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="font-serif text-xl font-normal mb-2">Message received</h3>
              <p className="text-[rgba(232,228,220,0.5)] text-sm">We&apos;ll get back to you within 24 hours.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-[11px] text-[rgba(232,228,220,0.5)] hover:text-[#e8e4dc] underline-hover uppercase tracking-widest font-mono"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] text-[rgba(232,228,220,0.35)] font-mono mb-1.5 uppercase tracking-widest">Name *</label>
                  <input type="text" placeholder="Your name" className={inputCls("name")} {...field("name")} />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-[11px] text-[rgba(232,228,220,0.35)] font-mono mb-1.5 uppercase tracking-widest">Email *</label>
                  <input type="email" placeholder="you@company.com" className={inputCls("email")} {...field("email")} />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-[11px] text-[rgba(232,228,220,0.35)] font-mono mb-1.5 uppercase tracking-widest">Service *</label>
                <select className={inputCls("service")} {...field("service")}>
                  <option value="">Select a service...</option>
                  {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.service && <p className="text-xs text-red-400 mt-1">{errors.service}</p>}
              </div>

              {/* Budget */}
              <div>
                <label className="block text-[11px] text-[rgba(232,228,220,0.35)] font-mono mb-1.5 uppercase tracking-widest">Budget range</label>
                <select className={inputCls("budget")} {...field("budget")}>
                  <option value="">Select a budget (optional)...</option>
                  {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] text-[rgba(232,228,220,0.35)] font-mono mb-1.5 uppercase tracking-widest">Tell us about your project *</label>
                <textarea
                  rows={4}
                  placeholder="Describe what you need — rough ideas are fine. What problem are you trying to solve?"
                  className={inputCls("message") + " resize-none"}
                  {...field("message")}
                />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              {status === "error" && (
                <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 px-4 py-3">
                  Something went wrong. Please email us directly at rhys@kinnearsystems.co.za
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-[#e8e4dc] hover:opacity-80 disabled:opacity-50 disabled:cursor-not-allowed text-[#0a0a0a] font-mono text-[11px] uppercase tracking-widest py-3 transition-opacity duration-200 flex items-center justify-center gap-2"
              >
                {status === "sending" ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send enquiry
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                    </svg>
                  </>
                )}
              </button>

              <p className="text-[11px] text-[rgba(232,228,220,0.2)] text-center font-mono">
                We respond within 24 hours · No spam · No sales pressure
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
