import React from "react";

const navLinks = ["Use Cases", "Ecosystem", "Features", "Services"];

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 md:px-10 py-4 bg-white">
      <div className="flex items-center gap-1">
        <img className="h-8" src="./beinex-logo.svg" alt="Beinex" />
      </div>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm font-medium text-ink-600 hover:text-brand-blue-600 transition-colors"
          >
            {link}
          </a>
        ))}
      </nav>

      <button className="rounded-full bg-brand-blue-600 hover:bg-brand-blue-700 transition-colors text-white text-xs font-medium px-6 py-2.5 cursor-pointer">
        Contact Us
      </button>
    </header>
  );
}