"use client";

import HeroSection from "./components/home/HeroSection";
import LogoSection from "./components/home/LogoSection";
import ClientDistribution from "./components/home/ClientDistribution";
import ClientDiversity from "./components/home/ClientDiversity";
import ClientResources from "./components/home/ClientResources";
import SwitchClients from "./components/home/SwitchClients";
import Resources from "./components/home/Resources";

export default function Home() {
  return (
    <div className="container">
      <HeroSection />
      <LogoSection />
      <ClientDistribution />
      <ClientDiversity />
      <ClientResources />
      <SwitchClients />
      <Resources />
    </div>
  );
}
