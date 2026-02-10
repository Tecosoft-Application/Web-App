
"use client";
import React from "react";
import FeatureGridSection from "../../components/FeatureGridSection";
import {
  WHY_AI_SECTION,
  WHY_AI_FEATURES,
} from "../../constants/ai-enabled-service/ai-enable-service.js";

function WhyAiEnabledServices() {
  return (
    <FeatureGridSection
      title={WHY_AI_SECTION.title}
      description={WHY_AI_SECTION.description}
      features={WHY_AI_FEATURES}
      sectionName="Why AI Enabled Services"
    />
  );
}

export default WhyAiEnabledServices;
