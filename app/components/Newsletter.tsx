'use client'
import React, { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");

  return (
    <section className="px-6 md:px-10 py-16 text-center">
      <h2 className="text-xl md:text-2xl font-bold mb-6">
        Get to know more about our{" "}
        <span className="text-blue-600">Services</span>
      </h2>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="max-w-xl mx-auto flex items-center gap-3 border border-slate-200 rounded-full p-1.5 pl-5"
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 outline-none text-sm text-slate-700 placeholder:text-slate-400 bg-transparent"
        />
        <button
          type="submit"
          className="rounded-full bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm font-medium px-6 py-2.5 whitespace-nowrap"
        >
          Notify Me
        </button>
      </form>
    </section>
  );
}
