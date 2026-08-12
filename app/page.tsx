import React from "react";

import Hero from "./components/Hero";
import UseCases from "./components/UseCases";
import Ecosystem from "./components/Ecosystem";
import Functionalities from "./components/Functionalities";
import WhyChoose from "./components/WhyChoose";
import Newsletter from "./components/Newsletter";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Hero />
      <UseCases />
      <Ecosystem />
      <Functionalities />
      <WhyChoose />
      <Newsletter />
    </div>
  );
}
