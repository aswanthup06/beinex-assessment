"use client";

import React, { useEffect, useState } from "react";
import {
  Cpu,
  Sparkles,
  Bot,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

type NodePos = {
  x: number;
  y: number;
  anchor: string;
};

type EcosystemNode = {
  label: string;
  icon: React.ElementType;
  pos: NodePos;
  cta?: boolean;
};

const ecosystemNodes: EcosystemNode[] = [
  {
    label: "Machine Learning",
    icon: Cpu,
    pos: {
      x: 50,
      y: 6,
      anchor: "-translate-x-1/2 -translate-y-1/2",
    },
  },
  {
    label: "Generative AI",
    icon: Sparkles,
    pos: {
      x: 6,
      y: 50,
      anchor: "-translate-x-1/2 -translate-y-1/2",
    },
  },
  {
    label: "Agentforce (SF)",
    icon: Bot,
    pos: {
      x: 94,
      y: 50,
      anchor: "-translate-x-1/2 -translate-y-1/2",
    },
  },
  {
    label: "AI Governance & Ethics",
    icon: ShieldCheck,
    pos: {
      x: 20,
      y: 94,
      anchor: "-translate-x-1/2 -translate-y-1/2",
    },
  },
  {
    label: "Connect with us",
    icon: ArrowUpRight,
    pos: {
      x: 80,
      y: 94,
      anchor: "-translate-x-1/2 -translate-y-1/2",
    },
    cta: true,
  },
];

export default function Ecosystem() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = requestAnimationFrame(() => setMounted(true));

    return () => cancelAnimationFrame(t);
  }, []);

  return (
    <section className="bg-[#F4F6F9] px-6 py-20 text-center md:px-10">
      <style>{`
        @keyframes eco-ring {
          0% {
            transform: scale(0.9);
            opacity: 0.5;
          }

          100% {
            transform: scale(1.9);
            opacity: 0;
          }
        }

        .eco-ring {
          animation: eco-ring 2.6s cubic-bezier(0.22, 1, 0.36, 1) infinite;
        }

        .eco-ring-delay {
          animation-delay: 1.3s;
        }

        .eco-line {
          transition: stroke-dashoffset 0.9s
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .eco-node {
          transition:
            opacity 0.5s ease,
            transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        @media (prefers-reduced-motion: reduce) {
          .eco-ring {
            animation: none;
          }

          .eco-line,
          .eco-node {
            transition: none !important;
          }
        }
      `}</style>

      {/* Heading */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="ff-dot w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
          <span className="ff-mono text-[11px] tracking-[0.2em] text-[#4B5563] uppercase">
          AI Ecosystem
          </span>
        </div>
      <h2 className="font-sans text-2xl font-bold text-[#10131A] md:text-3xl">
        The Beinex{" "}
        <span className="bg-gradient-to-r from-[#3654FF] to-[#7C3AED] bg-clip-text text-transparent">
          AI Ecosystem
        </span>
      </h2>

      {/* Description */}
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-slate-600 md:text-base">
        Step into a future powered by advanced AI technologies and
        thoughtful ethics. Experience seamless automation, predictive
        models, and strategic innovation. Join the journey to elevate your
        business to new heights.
      </p>

      {/* Ecosystem */}
      <div className="relative mx-auto mt-16 h-80 w-full max-w-xl md:h-[26rem]">
        {/* Connecting lines */}
        <svg
          className="absolute inset-0 h-full w-full overflow-visible"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {ecosystemNodes.map((node, index) => (
            <line
              key={node.label}
              x1={50}
              y1={50}
              x2={node.pos.x}
              y2={node.pos.y}
              pathLength={1}
              stroke={node.cta ? "#3654FF" : "#C7CEDB"}
              strokeWidth={node.cta ? 0.6 : 0.4}
              strokeDasharray={1}
              strokeDashoffset={mounted ? 0 : 1}
              className="eco-line"
              style={{
                transitionDelay: `${150 + index * 90}ms`,
              }}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>

        {/* Central hub */}
        <div
          className="
            absolute left-1/2 top-1/2
            h-32 w-32
            -translate-x-1/2 -translate-y-1/2
            md:h-36 md:w-36
          "
        >
          {/* Animated rings */}
          <span className="eco-ring absolute inset-0 rounded-full border border-[#3654FF]/40" />

          <span className="eco-ring eco-ring-delay absolute inset-0 rounded-full border border-[#14B8A6]/40" />

          {/* Main circle */}
          <div
            className="
              relative flex h-full w-full
              items-center justify-center
              rounded-full
              bg-gradient-to-br
              from-[#3654FF]
              via-[#5B6EF5]
              to-[#7C3AED]
              shadow-[0_20px_45px_-15px_rgba(54,84,255,0.55)]
            "
          >
            <div
              className="
                flex h-14 w-14
                items-center justify-center
                rounded-xl
                border border-white/25
                bg-white/15
                text-xl font-bold
                text-white
                backdrop-blur-sm
              "
            >
              B
            </div>
          </div>
        </div>

        {/* Ecosystem nodes */}
        {ecosystemNodes.map((node, index) => {
          const Icon = node.icon;

          return (
            <button
              key={node.label}
              type="button"
              aria-label={node.label}
              className={`
                eco-node
                absolute
                ${node.pos.anchor}

                flex
                h-10
                items-center
                justify-center
                gap-1.5

                rounded-full
                px-4

                whitespace-nowrap
                text-xs
                font-medium

                md:text-sm

                ${
                  node.cta
                    ? `
                      bg-[#3654FF]
                      text-white
                      shadow-[0_10px_25px_-8px_rgba(54,84,255,0.6)]
                      hover:bg-[#2A44E0]
                    `
                    : `
                      border
                      border-[#E3E7ED]
                      bg-white
                      text-[#334155]
                      shadow-sm
                      hover:-translate-y-0.5
                      hover:border-[#3654FF]/40
                    `
                }
              `}
              style={{
                left: `${node.pos.x}%`,
                top: `${node.pos.y}%`,
                opacity: mounted ? 1 : 0,
                transitionDelay: `${250 + index * 90}ms`,
              }}
            >
              <Icon
                size={14}
                strokeWidth={2}
                className={
                  node.cta ? "text-white" : "text-[#3654FF]"
                }
                aria-hidden="true"
              />

              <span>{node.label}</span>
            </button>
          );
        })}
      </div>

      {/* Footer text */}
      <p className="mt-8 font-mono text-[11px] uppercase tracking-widest text-[#9CA3AF]">
        5 connected domains · one platform
      </p>
    </section>
  );
}