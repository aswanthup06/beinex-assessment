'use client'
import React, { useState } from "react";
import { Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden px-6 md:px-10 py-16 bg-ink-50">
      {/* ambient glow, consistent with Hero/Footer */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[32rem] h-64 rounded-full bg-brand-blue-400/10 blur-3xl" />

      <div className="relative max-w-xl mx-auto text-center">
     
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="ff-dot w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
          <span className="ff-mono text-[11px] tracking-[0.2em] text-[#4B5563] uppercase">
          Stay Updated
          </span>
        </div>

        <h2 className="text-xl md:text-2xl font-bold text-ink-900 mb-3">
          Get to know more about our{" "}
          <span className="text-brand-blue-600">Services</span>
        </h2>
        <p className="text-sm md:text-base text-ink-600 mb-8">
          One email a month. Product updates, governance insights, no spam.
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 rounded-full bg-white border border-brand-blue-200 shadow-sm px-6 py-3.5 text-sm font-medium text-ink-800">
            <CheckCircle2 className="w-4 h-4 text-brand-blue-600" />
            You&apos;re on the list — thanks for subscribing.
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-3 bg-white border border-ink-100 shadow-sm rounded-full p-1.5 pl-5 focus-within:border-brand-blue-400 transition-colors"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 outline-none text-sm text-ink-700 placeholder:text-ink-400 bg-transparent"
            />
            <button
              type="submit"
              className="group inline-flex items-center gap-1.5 rounded-full bg-brand-blue-600 hover:bg-brand-blue-700 transition-colors text-white text-sm font-medium px-6 py-2.5 whitespace-nowrap cursor-pointer"
            >
              Notify Me
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}