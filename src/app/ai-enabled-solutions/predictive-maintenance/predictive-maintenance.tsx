"use client";

import { HeroSection } from "@/components/Solutions/BannerSection/HeroSection";
import { FeaturesSection } from "@/components/Solutions/FeatureSection/FeaturesSection";
import { AnalyticsSection } from "@/components/Solutions/AnalyticsSection/analyticsSection";
import {
  heroContent,
  featuresContent,
  analyticsContent,
  coreFeaturesContent,
} from "@/constants/ai-enabled-service/predictive-maintenance";
import React from "react";
import CoreFeatures from "@/components/Solutions/CoreFeatures/CoreFeaturesSection";

export default function ConnectedFactories1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative size-full"
      data-name="AI Enabled Services"
    >
      <HeroSection content={heroContent} />
      <FeaturesSection content={featuresContent} />
      <CoreFeatures content={coreFeaturesContent} />
      <AnalyticsSection content={analyticsContent} />
    </div>
  );
}
