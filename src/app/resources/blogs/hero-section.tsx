"use client";

import HeroSection from "@/components/Blogs/hero-section";
import { blogsHeroContent } from "@/constants/blogs/blogs";

export default function BlogsHeroSection() {
  return (
    <HeroSection
      badge={blogsHeroContent.badge}
      title={blogsHeroContent.title}
      description={blogsHeroContent.description}
    />
  );
}
