'use client'
import React, { useState } from "react";
import { Minus, Plus, Sparkles } from "lucide-react";

const whyChoose = [
  {
    title: "Seamless Solutions: Integrate with AgentFabric",
    body: "Plug directly into your existing stack and connect AgentFabric in minutes, not months.",
  },
  {
    title: "Global AI with Governance Frameworks",
    body: "Built-in compliance and governance frameworks that scale across regions and regulations.",
  },
  {
    title: "Multilingual Capabilities & Native AI Expert",
    body: "Native-level language support backed by domain experts across every major market.",
  },
  {
    title: "End-to-End AI Vision: From Automation to Strategy",
    body: "From day-one automation to long-term strategy, one partner covers the full journey.",
  },
];

export default function WhyChoose() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-6 md:px-10 py-16">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">
        Why Choose <span className="text-indigo-600">Beinex.ai</span>
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="flex items-center justify-center">
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <div className="absolute inset-0 grid grid-cols-3 gap-1 place-items-center opacity-30">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="w-10 h-10 md:w-14 md:h-14 bg-indigo-200"
                  style={{
                    clipPath:
                      "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                  }}
                />
              ))}
            </div>
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg"
              style={{
                clipPath:
                  "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              }}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {whyChoose.map((item, i) => {
            const open = openIndex === i;
            return (
              <div
                key={item.title}
                className="border border-slate-100 rounded-xl bg-white shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="text-sm md:text-base font-medium text-slate-800">
                    {item.title}
                  </span>
                  {open ? (
                    <Minus className="w-4 h-4 text-blue-600 shrink-0" />
                  ) : (
                    <Plus className="w-4 h-4 text-blue-600 shrink-0" />
                  )}
                </button>
                {open && (
                  <p className="px-5 pb-4 text-sm text-slate-500 leading-relaxed">
                    {item.body}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
