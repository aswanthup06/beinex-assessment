import React from "react";
import { Diamond, Sparkles, ArrowRight, PlayCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ink-50 via-indigo-50 to-purple-100 px-6 md:px-10 py-16 md:py-24">
      {/* ambient background glow */}
      <div className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 rounded-full bg-accent-indigo-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-10 w-72 h-72 rounded-full bg-accent-purple-400/20 blur-3xl" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-white px-4 py-1.5 text-xs font-medium text-brand-blue-600 shadow-sm mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            Enterprise AI, Governed by Design
          </span>

          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-ink-900">
            Step Into the Future with{" "}
            <span className="bg-gradient-to-r from-brand-blue-600 to-accent-indigo-500 bg-clip-text text-transparent">
              AI-Driven Excellence
            </span>
          </h1>

          <p className="mt-5 text-ink-600 text-base md:text-lg max-w-md">
            Dive into the AI-driven revolution. Innovate, govern and scale
            with intelligent solutions tailored to your enterprise.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="group inline-flex items-center gap-2 rounded-full bg-brand-blue-600 hover:bg-brand-blue-700 transition-colors text-white text-sm font-medium px-6 py-3 cursor-pointer">
              Get Started
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur border border-ink-100 hover:border-brand-blue-300 transition-colors text-ink-700 text-sm font-medium px-6 py-3 cursor-pointer">
              <PlayCircle className="w-4 h-4 text-brand-blue-600" />
              Watch Demo
            </button>
          </div>

          <div className="mt-10 flex items-center gap-8">
            <div>
              <div className="text-xl font-bold text-ink-900">98%</div>
              <div className="text-xs text-ink-500">Compliance accuracy</div>
            </div>
            <div className="w-px h-8 bg-ink-100" />
            <div>
              <div className="text-xl font-bold text-ink-900">3.5x</div>
              <div className="text-xs text-ink-500">Faster automation</div>
            </div>
            <div className="w-px h-8 bg-ink-100" />
            <div>
              <div className="text-xl font-bold text-ink-900">24/7</div>
              <div className="text-xs text-ink-500">AI governance</div>
            </div>
          </div>
        </div>

        <div className="relative h-64 md:h-80 flex items-center justify-center">
          {/* connector lines */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 320 320"
            fill="none"
          >
            <path
              d="M 230 60 L 180 120"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M 90 250 L 140 190"
              stroke="url(#lineGradient)"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>
            </defs>
          </svg>

          <div className="w-56 h-32 md:w-72 md:h-40 bg-white/60 backdrop-blur rounded-2xl rotate-12 shadow-xl flex items-end gap-2 p-6">
            {[40, 70, 55, 90, 65, 100, 75].map((h, i) => (
              <div
                key={i}
                className="w-4 rounded-md bg-gradient-to-t from-brand-blue-400 to-brand-blue-200"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          <div className="absolute top-2 right-6 w-14 h-14 rounded-full bg-gradient-to-br from-brand-blue-500 to-accent-indigo-600 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <Diamond className="w-6 h-6 text-white" />
          </div>
          <div className="absolute bottom-2 left-10 w-14 h-14 rounded-full bg-gradient-to-br from-accent-indigo-500 to-accent-purple-600 flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}