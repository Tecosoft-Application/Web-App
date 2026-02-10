"use client";
import React from "react";
import HeroSection from "./hero-section";
import Features from "./features";
import TechnologyCardsSlider from "../../components/analytics/TechnologyCardsSlider";
import Benefits from "./Benefits";

export default function TecosoftAnalytics() {
  const scrollTrigger = React.useRef<HTMLDivElement>(null);

  const handleScroll = () => {

    if (scrollTrigger.current) {
      const headerHeight = document.querySelector("header")?.clientHeight || 0;
      const targetTop = scrollTrigger.current.offsetTop - headerHeight;

      console.log("headerHeight:", headerHeight);
      console.log("targetTop:", targetTop);
      console.log("current scroll position:", window.scrollY);

      window.scrollTo({
        top: targetTop,
        behavior: "smooth",
      });
    } else {
      console.log("scrollTrigger.current is null!");
    }
  };
  return (
    <div
      className="content-stretch flex flex-col items-start relative size-full"
      data-name="Tecosoft Analytics"
    >
      <HeroSection handleScroll={handleScroll} />
      <Features />
      <div ref={scrollTrigger} />
      <TechnologyCardsSlider />

      <div className="min-[1023.5px]:h-[753px] w-full">
        <Benefits />
      </div>
    </div>
  );
}
