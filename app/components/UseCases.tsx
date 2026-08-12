import React from "react";
import { ShieldCheck, Workflow, Headset, ArrowUpRight } from "lucide-react";

const useCases = [
  {
    title: "Data Governance",
    desc: "Modernize and automate your data lifecycle for compliance and trust.",
    icon: ShieldCheck,
    gradient: "from-brand-blue-500 to-accent-indigo-600",
  },
  {
    title: "Safe Process Management",
    desc: "Streamline processes and automate critical workflows securely.",
    icon: Workflow,
    gradient: "from-accent-indigo-500 to-accent-purple-600",
  },
  {
    title: "Customer Support & Tech Troubleshooting",
    desc: "Empower support with AI agents for rapid, efficient solutions.",
    icon: Headset,
    gradient: "from-brand-blue-500 to-accent-purple-500",
  },
];

export default function UseCases() {
  return (
    <section className="bg-ink-50 px-6 md:px-10 py-16">
      <div className="max-w-2xl mx-auto text-center mb-10">
        <span className="inline-block rounded-full bg-white border border-ink-100 px-4 py-1.5 text-xs font-medium text-brand-blue-600 shadow-sm mb-4">
          Use Cases
        </span>
        <h2 className="text-2xl md:text-3xl font-bold text-ink-900">
          Built for how enterprises actually work
        </h2>
        <p className="mt-3 text-ink-600 text-sm md:text-base">
          Three ways teams put Beinex to work today — from compliance to
          day-to-day support.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {useCases.map((uc) => {
          const Icon = uc.icon;
          return (
            <div
              key={uc.title}
              className="group relative bg-white rounded-xl p-6 shadow-sm border border-ink-100 hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer"
            >
              <div
                className={`w-11 h-11 rounded-lg bg-gradient-to-br ${uc.gradient} flex items-center justify-center shadow-sm mb-4`}
              >
                <Icon className="w-5 h-5 text-white" />
              </div>

              <h3 className="text-ink-900 font-semibold text-lg mb-2 pr-6">
                {uc.title}
              </h3>
              <p className="text-ink-600 text-sm leading-relaxed">
                {uc.desc}
              </p>

              <ArrowUpRight className="absolute top-6 right-6 w-4 h-4 text-ink-400 opacity-0 group-hover:opacity-100 group-hover:text-brand-blue-600 transition-all" />
            </div>
          );
        })}
      </div>
    </section>
  );
}