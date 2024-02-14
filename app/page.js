"use client";

import HeroSection from "./components/home/HeroSection";
import LogoSection from "./components/home/LogoSection";

export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <LogoSection />
    </div>
  );
}
