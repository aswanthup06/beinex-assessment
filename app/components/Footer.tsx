'use client'
import React from "react";
import { ArrowRight } from "lucide-react";

const navLinks = ["Use Cases", "Ecosystem", "Features", "Services"];

/**
 * Brand/social icons are hand-drawn inline SVGs rather than imported from
 * lucide-react. Lucide deprecated (and is progressively removing) all
 * brand/logo icons — LinkedIn, GitHub, YouTube, X/Twitter, Facebook,
 * Instagram — so importing them can throw depending on the installed
 * version. Keeping these local avoids that breakage entirely.
 */
function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.83v1.64h.05c.53-1 1.84-2.06 3.79-2.06C21.5 8.58 22 11.2 22 14.5V21h-4v-5.75c0-1.37-.02-3.13-1.9-3.13-1.91 0-2.2 1.5-2.2 3.03V21h-4V9Z" />
    </svg>
  );
}

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2H21.5l-7.51 8.59L23 22h-6.917l-5.414-6.62L4.46 22H1.2l8.03-9.19L1 2h7.08l4.897 6.05L18.244 2Zm-1.213 18h1.833L7.05 3.9H5.08L17.03 20Z" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.61-3.37-1.2-3.37-1.2-.46-1.18-1.11-1.5-1.11-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.55 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.36-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.72 0 0 .84-.27 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.02 10.02 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.2s-.21-1.5-.87-2.16c-.83-.87-1.76-.87-2.19-.92C15.44 4 12 4 12 4h-.01s-3.43 0-6.53.12c-.43.05-1.36.05-2.19.92-.66.66-.87 2.16-.87 2.16S2.18 8.94 2.18 10.68v1.65c0 1.74.22 3.48.22 3.48s.21 1.5.87 2.16c.83.87 1.92.84 2.4.93 1.74.17 7.33.22 7.33.22s3.44-.01 6.54-.13c.43-.05 1.36-.05 2.19-.92.66-.66.87-2.16.87-2.16s.22-1.74.22-3.48v-1.65c0-1.74-.22-3.48-.22-3.48ZM9.94 14.98V8.98l5.75 3-5.75 3Z" />
    </svg>
  );
}

const socialLinks = [
  { icon: LinkedinIcon, label: "LinkedIn", href: "#" },
  { icon: XIcon, label: "X (Twitter)", href: "#" },
  { icon: GithubIcon, label: "GitHub", href: "#" },
  { icon: YoutubeIcon, label: "YouTube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-r from-white via-blue-50 to-brand-blue-100 text-ink-600 px-6 md:px-10 pt-14 pb-8">
      {/* texture: faint dot grid */}
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full opacity-[0.05]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="footerDots"
            width="22"
            height="22"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="1.5" cy="1.5" r="1.5" fill="#2563EB" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#footerDots)" />
      </svg>

      <div className="relative max-w-6xl mx-auto">
        {/* Top: brand + newsletter */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-ink-900/10">
          <div className="max-w-sm">
            <img className="h-8 mb-3" src="./beinex-logo.svg" alt="Beinex" />
            <p className="text-sm text-ink-600 leading-relaxed">
              Enterprise AI, governed and scaled with intelligent solutions
              built for trust.
            </p>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2 w-full lg:w-auto"
          >
            <input
              type="email"
              placeholder="Stay in the loop"
              className="flex-1 lg:w-64 rounded-full px-4 py-2.5 text-sm bg-white border border-ink-900/10 text-ink-900 placeholder:text-ink-400 outline-none focus:border-brand-blue-500 transition-colors"
            />
            <button className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue-600 hover:bg-brand-blue-700 transition-colors text-white text-sm font-medium px-5 py-2.5 whitespace-nowrap cursor-pointer">
              Subscribe
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* Bottom: nav + social + legal */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
          <nav className="flex flex-wrap justify-center gap-6 text-sm order-2 md:order-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-ink-600 hover:text-brand-blue-600 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3 order-1 md:order-2">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white border border-ink-900/10 hover:bg-brand-blue-600 hover:border-brand-blue-600 flex items-center justify-center text-ink-500 hover:text-white transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-ink-900/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-500">
          <span>© {new Date().getFullYear()} Beinex. All rights reserved.</span>
          <div className="flex gap-5">
            <a href="#" className="hover:text-brand-blue-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-blue-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}