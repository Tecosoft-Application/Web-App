"use client";

import React from "react";

// =============================================================================
// CONSTANTS
// =============================================================================

const ASSETS = {
  heroImage:
    "/assets/pages/why-tecosoft/banner.png",
} as const;

const SECTION_CONTENT = {
  title: {
    main: "Why Tecosoft ",
    highlight: "Stands Apart",
  },
  description:
    "We don't just ship features - we shape outcomes. From architecture to adoption, our approach makes transformation feel simple and stick for the long run.",
} as const;

const GRADIENT_BG_STYLE = {
  backgroundImage:
    "linear-gradient(226.547deg, rgb(0, 183, 255) 21.481%, rgb(14, 176, 92) 76.423%)",
} as const;

// =============================================================================
// TYPES
// =============================================================================

interface FeatureCardData {
  id: string;
  title: string;
  description: string;
  callout: string;
  icon: React.ComponentType;
}

// =============================================================================
// ICONS
// =============================================================================

function AnalyticsIcon() {
  return (
    <svg viewBox="0 0 21 21" className="size-full" fill="none">
      <path
        d="M5.5 15.5V11.5"
        stroke="white"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M10.5 15.5V5.5"
        stroke="white"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M15.5 15.5V9.5"
        stroke="white"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <rect
        x="1"
        y="1"
        width="19"
        height="19"
        rx="4"
        stroke="white"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function DataIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-full" fill="none">
      <path
        d="M6 12H18"
        stroke="white"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M18 4H14C12 4 11 5 11 7V17C11 19 12 20 14 20H18"
        stroke="white"
        strokeWidth="1.75"
      />
      <circle cx="4" cy="12" r="2" stroke="white" strokeWidth="1.75" />
      <circle cx="20" cy="4" r="2" stroke="white" strokeWidth="1.75" />
      <circle cx="20" cy="12" r="2" stroke="white" strokeWidth="1.75" />
      <circle cx="20" cy="20" r="2" stroke="white" strokeWidth="1.75" />
    </svg>
  );
}

function UserOctagonIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-full" fill="none">
      <path
        d="M21 8.6V15.4c0 1.1-.6 2.2-1.6 2.8l-5.8 3.4c-1 .6-2.2.6-3.2 0l-5.8-3.4c-1-.6-1.6-1.7-1.6-2.8V8.6c0-1.1.6-2.2 1.6-2.8l5.8-3.4c1-.6 2.2-.6 3.2 0l5.8 3.4c1 .6 1.6 1.7 1.6 2.8Z"
        stroke="white"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="9" r="2.3" stroke="white" strokeWidth="1.75" />
      <path
        d="M8 16.5c0-1.8 1.8-3.1 4-3.1s4 1.3 4 3.1"
        stroke="white"
        strokeWidth="1.75"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 16 16" className="size-4 rotate-[-90deg]" fill="none">
      <path
        d="M8 2v10"
        stroke="#0098D4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 8l4 4 4-4"
        stroke="#0098D4"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// =============================================================================
// DATA
// =============================================================================

const FEATURES_DATA: FeatureCardData[] = [
  {
    id: "impact-first",
    title: "Impact-First",
    description:
      "Start with business goals: reliability, efficiency, sustainability, responsiveness. Tech follows strategy - not the other way around.",
    callout: "Built for decisions, not just dashboards.",
    icon: AnalyticsIcon,
  },
  {
    id: "unified-by-design",
    title: "Unified by Design",
    description:
      "A single data + intelligence layer ties apps and workflows together. Keep what works; extend what doesn't—without lock-in.",
    callout: "No rip-and-replace. Zero dead-ends.",
    icon: DataIcon,
  },
  {
    id: "adoption-that-lasts",
    title: "Adoption that Lasts",
    description:
      "We co-create with your teams so change is embraced, not imposed. Your people gain confidence and real ownership.",
    callout: "You can run it. We help you scale.",
    icon: UserOctagonIcon,
  },
];

// =============================================================================
// UI COMPONENTS
// =============================================================================

function IconContainer({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={GRADIENT_BG_STYLE}
      className="flex items-center justify-center size-[46px] rounded-md p-3"
    >
      {children}
    </div>
  );
}

function FeatureCard({ data }: { data: FeatureCardData }) {
  const Icon = data.icon;

  return (
    <div className="bg-white rounded-lg p-4 flex flex-col gap-3 hover:shadow-md transition">
      <IconContainer>
        <Icon />
      </IconContainer>

      <h3 className="text-[18px] font-semibold text-black">{data.title}</h3>

      <p className="text-[15px] leading-[20px] text-[#777]">
        {data.description}
      </p>

      <div className="flex items-center gap-2 text-[#0098d4] text-[14px] font-medium">
        <ArrowRightIcon />
        {data.callout}
      </div>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[28px] sm:text-[32px] md:text-[36px] xl:text-[40px] font-semibold text-[#282828]">
        {SECTION_CONTENT.title.main}
        <span className="text-[#0098d4]">
          {SECTION_CONTENT.title.highlight}
        </span>
      </h2>

      <p className="text-[#8e8e8e] text-[14px] sm:text-[15px] md:text-[16px] max-w-[520px]">
        {SECTION_CONTENT.description}
      </p>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="w-full h-[220px] sm:h-[260px] md:h-[300px] rounded-xl overflow-hidden">
      <img
        src={ASSETS.heroImage}
        alt="Tecosoft team collaboration"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

// =============================================================================
// MAIN
// =============================================================================

export function WhyUs() {
  return (
    <section className="bg-[#e0f6fa] w-full">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-[100px] py-10 md:py-14 lg:py-[60px]">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-[60px] items-start">
          {/* Left */}
          <div className="w-full xl:max-w-[580px] flex flex-col gap-10">
            <SectionHeader />
            <div className="xl:pt-40">
              <HeroImage />
            </div>
          </div>

          {/* Right */}
          <div className="w-full flex flex-col gap-6">
            {FEATURES_DATA.map((item) => (
              <FeatureCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
