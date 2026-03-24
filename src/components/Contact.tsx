"use client";

import { useState, useEffect, useRef } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

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
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm]       = useState<FormData>({ name: "", email: "", service: "", budget: "", message: "" });
  const [status, setStatus]   = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors]   = useState<Partial<FormData>>({});

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

  function validate(): boolean {
    const e: Partial<FormData> = {};
    if (!form.name.trim())    e.name    = "Name is required";
    if (!form.email.trim())   e.email   = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.service)        e.service = "Please select a service";
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
    `w-full bg-navy-800 border rounded-lg px-4 py-3 text-sm text-white placeholder-off-wht/20 focus:outline-none focus:ring-2 focus:ring-blue/50 transition-all ${
      errors[key] ? "border-red-500/60" : "border-navy-700 focus:border-blue/40"
    }`;

  return (
    <section id="contact" ref={sectionRef} className="py-28 max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16 items-start">

        {/* Left — copy */}
        <div>
          <div className="reveal">
            <span className="text-xs font-mono text-blue/70 tracking-widest uppercase">
              Let's work together
            </span>
            <h2 className="font-display text-4xl font-semibold mt-3 mb-6 tracking-tight">
              Get a quote
            </h2>
          </div>

          <div className="space-y-6">
            {[
              { step: "01", title: "Tell us what you need", desc: "Describe your project — even a rough idea is fine. We'll ask the right questions." },
              { step: "02", title: "Get a fixed-price quote", desc: "We'll scope it and send a clear quote within 24 hours. No vague estimates." },
              { step: "03", title: "50% deposit, then we start", desc: "50% upfront, balance on delivery. No surprise invoices, ever." },
            ].map((s) => (
              <div key={s.step} className="reveal flex gap-4">
                <span className="font-mono text-xs text-blue/40 mt-1 w-8 shrink-0">{s.step}</span>
                <div>
                  <p className="text-sm font-medium text-white mb-1">{s.title}</p>
                  <p className="text-sm text-off-wht/40 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="reveal mt-10 pt-8 border-t border-navy-700">
            <p className="text-xs text-off-wht/30 font-mono mb-2">Or email us directly</p>
            <a
              href="mailto:rhys@kinnearsystems.co.za"
              className="text-blue/80 hover:text-blue text-sm underline-hover transition-colors"
            >
              rhys@kinnearsystems.co.za
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div className="reveal">
          {status === "sent" ? (
            <div className="rounded-xl border border-green-500/30 bg-green-500/5 p-8 text-center">
              <div className="text-green-400 mb-3">
                <svg className="mx-auto" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">Message received</h3>
              <p className="text-off-wht/50 text-sm">We'll get back to you within 24 hours.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-xs text-blue/60 hover:text-blue underline-hover"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Name + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-off-wht/40 font-mono mb-1.5">Name *</label>
                  <input type="text" placeholder="Your name" className={inputCls("name")} {...field("name")} />
                  {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-xs text-off-wht/40 font-mono mb-1.5">Email *</label>
                  <input type="email" placeholder="you@company.com" className={inputCls("email")} {...field("email")} />
                  {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-xs text-off-wht/40 font-mono mb-1.5">Service *</label>
                <select className={inputCls("service")} {...field("service")}>
                  <option value="">Select a service...</option>
                  {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                {errors.service && <p className="text-xs text-red-400 mt-1">{errors.service}</p>}
              </div>

              {/* Budget */}
              <div>
                <label className="block text-xs text-off-wht/40 font-mono mb-1.5">Budget range</label>
                <select className={inputCls("budget")} {...field("budget")}>
                  <option value="">Select a budget (optional)...</option>
                  {BUDGETS.map((b) => <option key={b} value={b}>{b}</option>)}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs text-off-wht/40 font-mono mb-1.5">Tell us about your project *</label>
                <textarea
                  rows={4}
                  placeholder="Describe what you need — rough ideas are fine. What problem are you trying to solve?"
                  className={inputCls("message") + " resize-none"}
                  {...field("message")}
                />
                {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
              </div>

              {status === "error" && (
                <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                  Something went wrong. Please email us directly at rhys@kinnearsystems.co.za
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-blue hover:bg-blue-dim disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg transition-colors duration-200 text-sm flex items-center justify-center gap-2"
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

              <p className="text-xs text-off-wht/20 text-center font-mono">
                We respond within 24 hours · No spam · No sales pressure
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
