"use client";

import HeroSection from "@/components/Blogs/hero-section";
import { whitePapersHeroContent } from "@/constants/white-papers/white-papers";

export default function WhitePapersHeroSection() {
  return (
    <HeroSection
      badge={whitePapersHeroContent?.badge}
      title={whitePapersHeroContent?.title}
      description={whitePapersHeroContent?.description}
    />
  );
}
