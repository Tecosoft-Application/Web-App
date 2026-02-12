"use client";

import { useRef } from "react";
import FeaturesSection from "./features-section";
import HeroSection from "./hero-section";
import IndustriesSection from "./industries-section";
// import { IndustriesSection } from "./industries-section";
import Solutions from "./solution-section";
import { TecosoftDashboardSection } from "./tecosoft-dashboard";

export default function Industries() {

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
    <div className="w-full" data-name="Industries">
      <HeroSection onboardClick={onboardClick} />
      <Solutions  />
      <IndustriesSection moveToNextSection={moveToNextSection} />
      <TecosoftDashboardSection />
      <FeaturesSection />
    </div>
  );
}
