"use client";
import React from "react";
import CapabilitiesSection from "../../components/CapabilitiesSection";
import BenefitsSection from "../../components/BenefitsSection";
import FeatureSection from "./feature-section";
import HeroSection from "./hero-setion";
import HardwareSection from "./hardware-section";

export default function EagePage() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative size-full"
      data-name="Eagle"
    >
      <HeroSection />
      <FeatureSection />
      <HardwareSection />
      <CapabilitiesSection />
      <BenefitsSection />
    </div>
  );
}
