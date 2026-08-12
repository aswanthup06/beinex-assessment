'use client'
import React, { useState } from "react";
import { ShieldCheck, Sparkles, Cpu, Bot, Check } from "lucide-react";

const functionalityTabs = {
  "AI Governance & Ethics": [
    "AI-Driven Automated Decision System (ADAS)",
    "AI-powered Datalake & synthetic corpora",
    "One-place Studio",
    "AI Insights",
  ],
  "Gen-AI": [
    "Prompt orchestration & guardrails",
    "Retrieval-augmented generation pipelines",
    "Content & code generation studio",
    "Model evaluation dashboard",
  ],
  "Machine Learning": [
    "Predictive modeling toolkit",
    "Feature store & pipeline automation",
    "Model monitoring & drift detection",
    "AutoML experimentation",
  ],
  "Agent Platform (BP)": [
    "Multi-agent orchestration",
    "Business process automation",
    "Human-in-the-loop review",
    "Agent performance analytics",
  ],
} as const;

type TabKey = keyof typeof functionalityTabs;

const tabMeta: Record<TabKey, { blurb: string; icon: React.ElementType }> = {
  "AI Governance & Ethics": { blurb: "Oversight, audit trails & policy control", icon: ShieldCheck },
  "Gen-AI": { blurb: "Generation, retrieval & prompt safety", icon: Sparkles },
  "Machine Learning": { blurb: "Modeling, monitoring & automation", icon: Cpu },
  "Agent Platform (BP)": { blurb: "Autonomous workflows, human-checked", icon: Bot },
};

const tabKeys = Object.keys(functionalityTabs) as TabKey[];

export default function Functionalities() {
  const [activeTab, setActiveTab] = useState<TabKey>("AI Governance & Ethics");
  const activeIndex = tabKeys.indexOf(activeTab);

  return (
    <section className="px-6 md:px-10 py-20">
      <style>{`
       
      

        @keyframes ff-rise {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes ff-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.75); }
        }
        .ff-item {
          animation: ff-rise 0.32s cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .ff-dot {
          animation: ff-pulse 2.2s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .ff-item { animation: none; }
          .ff-dot { animation: none; }
          .ff-indicator, .ff-rail-btn { transition: none !important; }
        }
      `}</style>

      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="ff-dot w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
          <span className="ff-mono text-[11px] tracking-[0.2em] text-[#4B5563] uppercase">
            AI Capability Stack
          </span>
        </div>
        <h2 className="ff-display text-2xl md:text-4xl font-semibold text-center mb-12 text-[#10131A] tracking-tight">
          Dive into our <span className="text-[#3654FF]">AI functionalities</span>
        </h2>

        {/* Mobile pill rail */}
        <div className="flex md:hidden gap-2 mb-5 overflow-x-auto pb-1 -mx-1 px-1">
          {tabKeys.map((tab) => {
            const Icon = tabMeta[tab].icon;
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`ff-body flex items-center gap-1.5 shrink-0 rounded-full px-4 py-2 text-xs font-medium transition-colors duration-200 ${
                  isActive
                    ? "bg-[#3654FF] text-white"
                    : "bg-white text-[#4B5563] border border-[#E3E7ED]"
                }`}
              >
                <Icon size={14} />
                {tab}
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-[0_1px_2px_rgba(16,19,26,0.04),0_12px_32px_-16px_rgba(16,19,26,0.12)] border border-[#E3E7ED] overflow-hidden md:grid md:grid-cols-[240px_1px_1fr]">
          {/* Desktop rail */}
          <div className="hidden md:block relative">
            <div
              className="ff-indicator absolute left-0 w-[3px] bg-[#3654FF] rounded-r-full"
              style={{
                height: 64,
                top: activeIndex * 64,
                transition: "top 0.35s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
            {tabKeys.map((tab, i) => {
              const Icon = tabMeta[tab].icon;
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  aria-selected={isActive}
                  role="tab"
                  className={`ff-rail-btn w-full h-16 flex items-center gap-3 pl-6 pr-4 text-left border-b border-[#EEF0F4] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#3654FF] focus-visible:-outline-offset-2 ${
                    isActive
                      ? "bg-[#EEF1FF] text-[#10131A]"
                      : "text-[#4B5563] hover:bg-[#F7F8FA] hover:pl-7"
                  }`}
                >
                  <Icon
                    size={17}
                    strokeWidth={2}
                    className={isActive ? "text-[#3654FF]" : "text-[#9CA3AF]"}
                  />
                  <div className="min-w-0">
                    <div className="ff-body text-sm font-medium leading-tight truncate">
                      {tab}
                    </div>
                    <div className="ff-mono text-[10px] text-[#9CA3AF] mt-0.5 truncate">
                      {tabMeta[tab].blurb}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="hidden md:block bg-[#E3E7ED]" />

          {/* Content panel */}
          <div className="p-6 md:p-8">
            <div className="flex items-center justify-between mb-5">
              <span className="ff-display text-base font-semibold text-[#10131A]">
                {activeTab}
              </span>
              <span className="ff-mono text-[10px] text-[#9CA3AF]">
                {String(activeIndex + 1).padStart(2, "0")} / {String(tabKeys.length).padStart(2, "0")}
              </span>
            </div>

            <ul key={activeTab} className="space-y-1">
              {functionalityTabs[activeTab].map((item, i) => (
                <li
                  key={item}
                  className="ff-item ff-body flex items-start gap-3 text-[#374151] text-sm md:text-[15px] py-2.5 border-b border-[#F3F4F6] last:border-0"
                  style={{ animationDelay: `${i * 45}ms` }}
                >
                  <span className="mt-0.5 shrink-0 w-4 h-4 rounded-[4px] bg-[#EEF1FF] flex items-center justify-center">
                    <Check size={11} strokeWidth={2.5} className="text-[#3654FF]" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}