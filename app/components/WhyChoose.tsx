'use client'
import React, { useState } from "react";
import {
  Plus,
  Sparkles,
  Plug,
  ShieldCheck,
  Languages,
  Compass,
} from "lucide-react";

const whyChoose = [
  {
    title: "Seamless Solutions: Integrate with AgentFabric",
    body: "Plug directly into your existing stack and connect AgentFabric in minutes, not months.",
    icon: Plug,
  },
  {
    title: "Global AI with Governance Frameworks",
    body: "Built-in compliance and governance frameworks that scale across regions and regulations.",
    icon: ShieldCheck,
  },
  {
    title: "Multilingual Capabilities & Native AI Expert",
    body: "Native-level language support backed by domain experts across every major market.",
    icon: Languages,
  },
  {
    title: "End-to-End AI Vision: From Automation to Strategy",
    body: "From day-one automation to long-term strategy, one partner covers the full journey.",
    icon: Compass,
  },
];

export default function WhyChoose() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 md:px-10 py-16 bg-white">
      <div className="max-w-2xl mx-auto text-center mb-10">
       
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="ff-dot w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
          <span className="ff-mono text-[11px] tracking-[0.2em] text-[#4B5563] uppercase">
            Why Beinex
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-ink-900">
          Why Choose <span className="text-accent-indigo-600">Beinex.ai</span>
        </h2>
        <p className="mt-3 text-ink-600 text-sm md:text-base">
          One platform, four reasons enterprise teams choose to build their
          AI strategy here.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left box: hex visual */}
        <div className="relative flex items-center justify-center py-6">
          {/* ambient glow behind visual */}
          <div className="pointer-events-none absolute w-72 h-72 rounded-full bg-accent-indigo-400/10 blur-3xl" />
          <div className="pointer-events-none absolute w-56 h-56 rounded-full bg-accent-purple-400/10 blur-3xl translate-x-8 translate-y-8" />

          <div className="relative w-56 h-56 md:w-72 md:h-72">
            {/* slow rotating dashed ring */}
            <svg
              className="absolute inset-0 w-full h-full animate-[spin_24s_linear_infinite]"
              viewBox="0 0 288 288"
              fill="none"
            >
              <circle
                cx="144"
                cy="144"
                r="132"
                stroke="url(#ringGrad)"
                strokeWidth="1"
                strokeDasharray="2 8"
              />
              <defs>
                <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#A855F7" stopOpacity="0.1" />
                </linearGradient>
              </defs>
            </svg>

            {/* static outer ring for definition */}
            <div className="absolute inset-3 rounded-full border border-ink-100" />

            <div className="absolute inset-0 grid grid-cols-3 gap-2 place-items-center">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="w-11 h-11 md:w-16 md:h-16 bg-accent-indigo-100 transition-transform duration-500 hover:scale-105"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                />
              ))}
            </div>

            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-brand-blue-500 to-accent-indigo-600 flex items-center justify-center shadow-xl"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            >
              <Sparkles className="w-7 h-7 text-white" />
            </div>

            {/* floating mini badges, echoing Hero */}
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white shadow-md border border-ink-100 flex items-center justify-center">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-blue-600" />
            </div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 rounded-full bg-white shadow-md border border-ink-100 flex items-center justify-center">
              <Languages className="w-3.5 h-3.5 text-accent-purple-600" />
            </div>

            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white border border-ink-100 shadow-sm px-3 py-1 text-xs font-medium text-ink-600">
              Unified AI Core
            </span>
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {whyChoose.map((item, i) => {
            const open = openIndex === i;
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`rounded-xl bg-white shadow-sm overflow-hidden border transition-colors duration-300 ${
                  open ? "border-brand-blue-200" : "border-ink-100"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left cursor-pointer hover:bg-ink-50/60 transition-colors duration-300"
                >
                  <span
                    className={`w-9 h-9 shrink-0 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                      open
                        ? "bg-brand-blue-600 text-white"
                        : "bg-ink-50 text-brand-blue-600"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </span>
                  <span className="flex-1 text-sm md:text-base font-medium text-ink-800">
                    {item.title}
                  </span>
                  <Plus
                    className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                      open
                        ? "rotate-45 text-brand-blue-600"
                        : "rotate-0 text-ink-400"
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pl-[4.25rem] pr-5 pb-4 text-sm text-ink-500 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}