import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import UseCases from "./components/UseCases";
import Ecosystem from "./components/Ecosystem";
import Functionalities from "./components/Functionalities";
import WhyChoose from "./components/WhyChoose";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function BeinexLanding() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Header />
      <Hero />
      <UseCases />
      <Ecosystem />
      <Functionalities />
      <WhyChoose />
      <Newsletter />
      <Footer />
    </div>
  );
}
