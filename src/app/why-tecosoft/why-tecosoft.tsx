"use client";
import React from "react";
import { HeroSection } from "./hero-section";
import { WhyUs } from "./why-us";
import { BannerIntro } from "./banner-intro";
import { OutcomesThatMatter } from "./outcomes-that-matter";
import { Banner } from "./banner-section";

export default function WhyTecosoft() {
  return (
    <div className="w-full" data-name="Why Tecosoft">
      <HeroSection />
      <WhyUs />
      <BannerIntro />
      <OutcomesThatMatter />
      <Banner />
    </div>
  );
}
