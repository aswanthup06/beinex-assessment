'use client'
import React, { useState } from "react";

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
};

type TabKey = keyof typeof functionalityTabs;

export default function Functionalities() {
  const [activeTab, setActiveTab] = useState<TabKey>("AI Governance & Ethics");

  return (
    <section className="bg-indigo-50/30 px-6 md:px-10 py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Dive into our <span className="text-blue-600">AI functionalities</span>
      </h2>
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8">
        <div className="flex flex-wrap gap-2 mb-6">
          {(Object.keys(functionalityTabs) as TabKey[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 py-2 text-xs md:text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <ul className="space-y-3">
          {functionalityTabs[activeTab].map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-slate-700 text-sm md:text-base"
            >
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
