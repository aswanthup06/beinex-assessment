import React from "react";

const ecosystemNodes = [
  { label: "Machine Learning", pos: "top" },
  { label: "Generative AI", pos: "left" },
  { label: "Agentforce (SF)", pos: "right" },
  { label: "AI Governance & Ethics", pos: "bottomLeft" },
  { label: "Connect with us", pos: "bottomRight" },
];

const posClasses: Record<string, string> = {
  top: "left-1/2 -translate-x-1/2 -top-4",
  left: "left-0 top-1/2 -translate-y-1/2",
  right: "right-0 top-1/2 -translate-y-1/2",
  bottomLeft: "left-6 bottom-0",
  bottomRight: "right-6 bottom-0",
};

export default function Ecosystem() {
  return (
    <section className="bg-indigo-50/60 px-6 md:px-10 py-20 text-center">
      <h2 className="text-2xl md:text-3xl font-bold">
        The Beinex{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          AI Ecosystem
        </span>
      </h2>
      <p className="mt-4 max-w-2xl mx-auto text-slate-600 text-sm md:text-base">
        Step into a future powered by advanced AI technologies and
        thoughtful ethics. Experience seamless automation, predictive
        models, and strategic innovation. Join the journey to elevate your
        business to new heights.
      </p>

      <div className="relative mx-auto mt-14 w-full max-w-xl h-72 md:h-80">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-br from-blue-400 via-indigo-400 to-purple-400 shadow-2xl flex items-center justify-center">
          <div className="w-14 h-14 rounded-lg bg-white/30 backdrop-blur flex items-center justify-center text-white font-bold text-xl">
            B
          </div>
        </div>
        {ecosystemNodes.map((n) => (
          <button
            key={n.label}
            className={`absolute ${posClasses[n.pos]} bg-white shadow-md rounded-full px-4 py-2 text-xs md:text-sm font-medium text-blue-700 border border-blue-100 hover:border-blue-300 transition-colors whitespace-nowrap`}
          >
            {n.label}
          </button>
        ))}
      </div>
    </section>
  );
}
