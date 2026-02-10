"use client";

import React from "react";
import HowItWorks from "./how-it-works";
import WhyAiEnabledServices from "./why-section";
import HeroSection from "./banner-section";
import Solutions from "./solutions-section";

export default function Aienabled() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative size-full"
      data-name="AI Enabled Services"
    >
      <HeroSection />
      <WhyAiEnabledServices />
      <Solutions />
      <HowItWorks />
    </div>
  );
}
