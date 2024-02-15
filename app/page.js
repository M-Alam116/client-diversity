"use client";

import HeroSection from "./components/home/HeroSection";
import LogoSection from "./components/home/LogoSection";
import ClientDistribution from "./components/home/ClientDistribution";
import ClientDiversity from "./components/home/ClientDiversity";

export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <LogoSection />
      <ClientDistribution />
      <ClientDiversity />
    </div>
  );
}
