"use client";

import BookDemoButton from "@/components/BookDemoButton";
import svgPaths from "../../imports/svg-9v3kh9sdih";
import { motion, type Variants } from "framer-motion";
import React from "react";

// =============================================================================
// CONSTANTS & CONFIGURATION
// =============================================================================

const ASSETS = {
  logo: "/assets/pages/why-tecosoft/7237d837fb840eb1fdf3472a3a5d42c920a312a7.png",
  heroBackground:
    "/assets/pages/why-tecosoft/e54110e1697ad6aa53311cf3395acde3b0aeda4d.png",
} as const;

const HERO_CONTENT = {
  tagline: "Where Operations Meet Intelligence",
  headline: {
    main: "Connect. Sense. Predict. ",
    highlight: "Elevate.",
  },
  description:
    "Turn scattered processes into a living, learning system. Tecosoft brings your people, tools, and data together so work flows — and results grow.",
  ctaText: "Give demo",
} as const;

const COLORS = {
  accentGreen: "#00ff84",
  primaryGreen: "#07af40",
  primaryBlue: "#0098d4",
  textDark: "#282828",
} as const;

// Animation config for floating cards
const floatingCardAnimation: Variants = {

  animate: {
    // x: [0, -1.2, 1.2, -1.2, 1.2, 0],
    // y: [0, -1.2, 1.2, -1.2, 1.2, 0],
    y: [0, -10, 0],

  },
};

const floatingCardTransition = {
  duration: 4,
  repeat: Infinity,
} as const;

// =============================================================================
// TYPES
// =============================================================================

interface FloatingCardData {
  id: string;
  label: string;
  position: {
    // Percentage-based positions for responsiveness
    left: string;
    top: string;
  };
  icon: React.ComponentType;
}

interface GradientIconProps {
  svgPath: string;
  gradientId: string;
  viewBox?: string;
  gradientConfig: {
    x1: string;
    x2: string;
    y1: string;
    y2: string;
  };
  fillRule?: "evenodd";
}

// =============================================================================
// ICON COMPONENTS
// =============================================================================

function GradientIcon({
  svgPath,
  gradientId,
  viewBox = "0 0 20 20",
  gradientConfig,
  fillRule,
}: GradientIconProps) {
  return (
    <div className="relative shrink-0 w-4 h-4 sm:w-5 sm:h-5">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox={viewBox}
        aria-hidden="true"
      >
        <path
          d={svgPath}
          fill={`url(#${gradientId})`}
          {...(fillRule && { clipRule: "evenodd", fillRule: "evenodd" })}
        />
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id={gradientId}
            x1={gradientConfig.x1}
            x2={gradientConfig.x2}
            y1={gradientConfig.y1}
            y2={gradientConfig.y2}
          >
            <stop offset="0.0644535" stopColor="#00BCEF" />
            <stop offset="0.95133" stopColor="#002363" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ArrowIcon() {
  return (
    <div className="relative size-3.5">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
        aria-hidden="true"
      >
        <path
          d={svgPaths.p1feb4d00}
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.35"
        />
      </svg>
    </div>
  );
}

function LocationIcon() {
  return (
    <GradientIcon
      svgPath={svgPaths.pe041600}
      gradientId="gradient_location"
      gradientConfig={{
        x1: "18.3333",
        x2: "-1.92311",
        y1: "1.66667",
        y2: "12.2238",
      }}
    />
  );
}

function OperationsIcon() {
  return (
    <GradientIcon
      svgPath={svgPaths.p2aa8aa80}
      gradientId="gradient_operations"
      gradientConfig={{ x1: "18", x2: "-1.13995", y1: "2", y2: "11.9752" }}
      fillRule="evenodd"
    />
  );
}

function TickIcon() {
  return (
    <GradientIcon
      svgPath={svgPaths.p3fb5f100}
      gradientId="gradient_tick"
      gradientConfig={{ x1: "19", x2: "-2.53244", y1: "1", y2: "12.2221" }}
    />
  );
}

function ScaleIcon() {
  return (
    <div className="overflow-clip relative shrink-0 w-4 h-4 sm:w-5 sm:h-5">
      <div className="absolute inset-[10%_10%_0.78%_10%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 16 17.845"
          aria-hidden="true"
        >
          <path d={svgPaths.pab1b780} fill="url(#gradient_scale)" />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="gradient_scale"
              x1="16"
              x2="-3.13995"
              y1="0"
              y2="9.97524"
            >
              <stop offset="0.0644535" stopColor="#00BCEF" />
              <stop offset="0.95133" stopColor="#002363" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

// =============================================================================
// FLOATING CARDS DATA - Using percentage-based positioning
// =============================================================================

const FLOATING_CARDS_DATA: FloatingCardData[] = [
  {
    id: "one-place",
    label: "One place.",
    position: { left: "65%", top: "8%" },
    icon: LocationIcon,
  },
  {
    id: "unified-operations",
    label: "Unified operations.",
    position: { left: "0%", top: "75%" },
    icon: OperationsIcon,
  },
  {
    id: "ready-today",
    label: "Ready today.",
    position: { left: "62%", top: "60%" },
    icon: TickIcon,
  },
  {
    id: "built-to-scale",
    label: "Built to scale.",
    position: { left: "2%", top: "18%" },
    icon: ScaleIcon,
  },
];

// =============================================================================
// HERO CONTENT COMPONENTS
// =============================================================================

function TaglineBadge() {
  return (
    <div
      className={`
        bg-white relative inline-flex items-center justify-center
        px-2.5 py-1 sm:px-3 sm:py-1.5
        rounded-full
        border border-[${COLORS.primaryGreen}]
        max-w-fit
      `}
    >
      <span
        className={`
          font-semibold text-[${COLORS.primaryBlue}]
          text-[11px] sm:text-[12px] lg:text-[13.5px]
          leading-tight
          

        `}
      >
        {HERO_CONTENT.tagline}
      </span>
    </div>
  );
}

function HeroHeadline() {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8 " >
      <div className="flex justify-center lg:justify-start w-full">
        <TaglineBadge />
      </div>      <h1
        className="
          font-semibold text-white
          text-[28px] leading-[36px]
          sm:text-[36px] sm:leading-[44px]
          md:text-[44px] md:leading-[52px]
          lg:text-[56px] lg:leading-[66px]
          xl:text-[68px] xl:leading-[80px]
          2xl:text-[80px] 2xl:leading-[94px]

        "
      >
        <span>{HERO_CONTENT.headline.main}</span>
        <span className={`text-[${COLORS.accentGreen}]`}>
          {HERO_CONTENT.headline.highlight}
        </span>
      </h1>
    </div>
  );
}

function HeroDescription() {
  return (
    <p
      className="
        font-medium text-white
        text-[14px] leading-[22px]
        sm:text-[16px] sm:leading-[24px]
        md:text-[18px] md:leading-[26px]
        lg:text-[20px] lg:leading-[28px]
        xl:text-[21px] xl:leading-[29px]
        max-w-[95%]
      "
    >
      {HERO_CONTENT.description}
    </p>
  );
}

function DemoButton() {
  return (
    <BookDemoButton
      className={`
        bg-[${COLORS.primaryGreen}]
        flex items-center justify-center gap-2
        px-3.5 py-2.5 sm:px-4 sm:py-3
        border-none cursor-pointer
        hover:opacity-90 transition-opacity
      `}
    >
      <span className="font-semibold text-white text-[14px] sm:text-[15px]">
        {HERO_CONTENT.ctaText}
      </span>
      <div className="rotate-[-90deg]">
        <ArrowIcon />
      </div>
    </BookDemoButton>
  );
}

// =============================================================================
// LOGO & DECORATIVE COMPONENTS
// =============================================================================

function LogoContainer() {
  return (
    <div
      className="
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
        backdrop-blur-[2px] bg-[rgba(255,255,255,0.9)]
        flex items-center justify-center
        rounded-full overflow-clip
        shadow-[0px_0px_36px_5px_rgba(255,255,255,0.16)]
        w-[100px] h-[100px]
        sm:w-[120px] sm:h-[120px]
        lg:w-[140px] lg:h-[140px]
        xl:w-[160px] xl:h-[160px]
      "
    >
      <div
        className="
          relative
          w-[60px] h-[72px]
          sm:w-[70px] sm:h-[84px]
          lg:w-[85px] lg:h-[102px]
          xl:w-[100px] xl:h-[120px]
        "
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt="Tecosoft Logo"
            className="absolute h-full left-[-0.11%] max-w-none top-0 w-[476.88%]"
            src={ASSETS.logo}
          />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-full shadow-[inset_3px_3px_20px_0px_rgba(5,128,173,0.36)]" />
    </div>
  );
}

function GradientCircles() {
  return (
    <>
      {/* Outer circle */}
      <div
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[260px] h-[260px]
          sm:w-[300px] sm:h-[300px]
          lg:w-[360px] lg:h-[360px]
          xl:w-[400px] xl:h-[400px]
        "
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 400 400"
          aria-hidden="true"
        >
          <path
            d={svgPaths.p32ded680}
            fill="url(#gradient_circle_outer)"
            fillOpacity="0.8"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="gradient_circle_outer"
              x1="314.783"
              x2="89.2395"
              y1="86.6667"
              y2="300.345"
            >
              <stop stopColor="#00B7FF" />
              <stop offset="1" stopColor="#0EB05C" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Inner circle */}
      <div
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          w-[140px] h-[140px]
          sm:w-[165px] sm:h-[165px]
          lg:w-[195px] lg:h-[195px]
          xl:w-[220px] xl:h-[220px]
        "
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 220 220"
          aria-hidden="true"
        >
          <circle
            cx="110"
            cy="110"
            fill="url(#gradient_circle_inner)"
            fillOpacity="0.8"
            r="110"
          />
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="gradient_circle_inner"
              x1="173.13"
              x2="49.0817"
              y1="47.6667"
              y2="165.19"
            >
              <stop stopColor="#00B7FF" />
              <stop offset="1" stopColor="#0EB05C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}

// =============================================================================
// FLOATING CARDS
// =============================================================================

function FloatingCard({ data }: { data: FloatingCardData }) {
  const IconComponent = data.icon;
  const [shouldAnimate, setShouldAnimate] = React.useState(false);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    setShouldAnimate(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setShouldAnimate(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <motion.div
      className="
        absolute bg-white
        flex items-center gap-1.5 sm:gap-2
        px-2 py-1.5
        sm:px-2.5 sm:py-2
        lg:px-3 lg:py-2.5
        rounded-md sm:rounded-lg
        shadow-md
      "
      style={{ left: data.position.left, top: data.position.top }}
      variants={floatingCardAnimation}
      animate={shouldAnimate ? "animate" : undefined}
      transition={floatingCardTransition}
    >
      <IconComponent />
      <span
        className={`
          font-medium text-[#282828]
          text-[14px]
          sm:text-[15px]
          lg:text-[17px]
          xl:text-[18px]
          whitespace-nowrap
          leading-[18px]
        `}
      >
        {data.label}
      </span>
    </motion.div>
  );
}

function FloatingCardsContainer() {
  return (
    <div
      className="
        relative
        w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[450px] xl:max-w-[500px]
        h-[320px] sm:h-[380px] lg:h-[450px] xl:h-[500px]
        mx-auto
      "
    >
      <GradientCircles />
      <LogoContainer />
      {FLOATING_CARDS_DATA.map((cardData) => (
        <FloatingCard key={cardData.id} data={cardData} />
      ))}
    </div>
  );
}

// =============================================================================
// BACKGROUND COMPONENTS
// =============================================================================

function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <img
        alt=""
        className="absolute h-[140%] left-0 max-w-none top-[-0.03%] w-full object-cover"
        src={ASSETS.heroBackground}
      />
    </div>
  );
}

function GradientOverlay() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), linear-gradient(204.592deg, rgba(6, 86, 217, 0.3) 0%, rgba(55, 188, 255, 0.3) 100%)",
      }}
      aria-hidden="true"
    />
  );
}

// =============================================================================
// MAIN EXPORT
// =============================================================================

export function HeroSection() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        min-h-[580px]
        sm:min-h-[600px]
        md:min-h-[630px]
        lg:min-h-[650px]
        xl:min-h-[680px]
      "
      aria-label="Hero section"
    >
      <HeroBackground />
      <GradientOverlay />

      {/* Content Container */}
      <div
        className="
          relative z-10 w-full h-full
          max-w-[1600px] mx-auto
          px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
          py-14 sm:py-16 md:py-18 lg:py-20 xl:py-24
        "
      >
        <div
          className="
            grid grid-cols-1 lg:grid-cols-[60fr_40fr]
            gap-10 sm:gap-12 lg:gap-8 xl:gap-12
            items-center
            h-full  pt-10
          "
        >
          {/* Left Column - Text Content */}
          <div
            className="
              flex flex-col
              gap-5 sm:gap-6 lg:gap-8
              order-1 lg:order-1
              text-center lg:text-left
              items-center lg:items-start
            "
          >
            <HeroHeadline />
            <HeroDescription />
            <DemoButton />
          </div>

          {/* Right Column - Floating Cards */}
          <div
            className="
              order-2 lg:order-2
              flex items-center justify-center
            "
          >
            <FloatingCardsContainer />
          </div>
        </div>
      </div>
    </section>
  );
}
