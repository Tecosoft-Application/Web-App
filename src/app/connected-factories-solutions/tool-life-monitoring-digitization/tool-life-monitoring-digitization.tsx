"use client";
import React from "react";

import { HeroSection } from "../../../components/Solutions/BannerSection/HeroSection";
import { FeaturesSection } from "../../../components/Solutions/FeatureSection/FeaturesSection";
import { WhyUsSection } from "@/components/Solutions/WhyUsSection/WhyUsSection";
import { WorkflowSection } from "@/components/Solutions/WorkflowSection/WorkflowSection";

import {
  heroContent,
  featuresContent,
  whyDigitizeContent,
  workflowContent,
  statsContent
} from "@/constants/connected-factories/tool-life-monitoring-digitization";
import { StatsSection } from "@/components/Solutions/StatsSection/StatsSection";

const ToolLiftMonitoringDigitizationPage = () => {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <HeroSection content={heroContent} />
      <FeaturesSection content={featuresContent} />
      <WorkflowSection content={workflowContent} />
      <WhyUsSection content={whyDigitizeContent} />
      <StatsSection content={statsContent} />
    </div>
  );
};

export default ToolLiftMonitoringDigitizationPage;
