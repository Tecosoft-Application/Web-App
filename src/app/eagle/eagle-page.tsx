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
      className="content-stretch flex flex-col items-start relative size-full eagle-page-master-container"
      data-name="Eagle"
    >
      <style>{`
        @media (min-width: 1024px) and (max-width: 1199px) {
          .eagle-page-master-container {
            align-items: center !important;
          }
          .eagle-page-master-container > div {
            width: 100% !important;
            max-width: 1200px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
        }
      `}</style>
      <HeroSection onboardClick={onboardClick} />
      <FeatureSection  />
      <HardwareSection />
      <CapabilitiesSection moveToNextSection={moveToNextSection} />
      <BenefitsSection />
    </div>
  );
}
