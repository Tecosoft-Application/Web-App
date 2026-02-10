"use client";
import React from "react";
import { BenefitsSection } from "./benefits-section";
import { FeaturesSection } from "../../../components/Solutions/FeatureSection/FeaturesSection";
import { HeroSection } from "../../../components/Solutions/BannerSection/HeroSection";
import { StatsSection } from "../../../components/Solutions/StatsSection/StatsSection";
import { WorkflowSection } from "@/components/Solutions/WorkflowSection/WorkflowSection";
import {
  heroContent,
  featuresContent,
  workflowContent,
  statsContent,
} from "@/constants/connected-factories/production-digitization";

const ProductionDigitizationHomePage = () => {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <HeroSection content={heroContent} />
      <FeaturesSection content={featuresContent} />
      <WorkflowSection content={workflowContent} />
      <BenefitsSection />
      <StatsSection content={statsContent} />
    </div>
  );
};

export default ProductionDigitizationHomePage;
