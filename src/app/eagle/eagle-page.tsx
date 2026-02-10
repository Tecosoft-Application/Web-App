"use client";
import React, { useRef, useState } from "react";
import CapabilitiesSection from "../../components/CapabilitiesSection";
// import BenefitsSection from "../../components/BenefitsSection";
import BenefitsSection from "./benefits-section";
import FeatureSection from "./feature-section";
import HeroSection from "./hero-setion";
import HardwareSection from "./hardware-section";

export default function EagePage() {

  const moveToNextSection = useRef<HTMLDivElement>(null);

 const onboardClick = () => {
    if (moveToNextSection.current) {
      window.scrollTo({
        top:
          moveToNextSection.current.offsetTop -
          (document.querySelector("header")?.clientHeight || 0),
        behavior: "smooth",
      });
    }
  }



  return (
    <div
      className="content-stretch flex flex-col items-start relative size-full"
      data-name="Eagle"
    >
      <HeroSection onboardClick={onboardClick} />
      <FeatureSection  />
      <HardwareSection />
      <CapabilitiesSection moveToNextSection={moveToNextSection} />
      <BenefitsSection />
    </div>
  );
}
