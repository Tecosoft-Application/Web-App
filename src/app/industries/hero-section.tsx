"use client";

import svgPaths from "../../imports/svg-wzyskd72fo";

/** Background video path */
const BANNER_VIDEO_PATH = "/assets/video/industry-banner-bg.mp4";

/** Z-index layers */
const Z_INDEX = {
  VIDEO_LAYER: 1,
  OVERLAY_LAYER: 2,
  CONTENT_LAYER: 10,
} as const;

/** Color palette */
const COLORS = {
  PRIMARY_GREEN: "#07af40",
  ACCENT_GREEN: "#00ff84",
  WHITE: "white",
  TRANSPARENT: "rgba(255,255,255,0)",
} as const;

/** Common text styles */
const TEXT_STYLES = {
  gilroySemibold: " font-semibold",
  gilroyMedium: " font-medium",
} as const;

// =============================================================================
// TYPES
// =============================================================================

interface ArrowIconProps {
  size?: 12 | 14;
  direction?: "down" | "right";
  color?: any
}

interface ButtonProps {
  label: string;
  variant: "primary" | "outline" | "secondary";
  showArrow?: boolean;

}

// =============================================================================
// ICONS
// =============================================================================

function ArrowIcon({ size = 14, direction = "down", color }: ArrowIconProps) {
  const svgPath = size === 12 ? svgPaths.p1bf4c500 : svgPaths.p1feb4d00;
  const rotationClass = direction === "right" ? "rotate-[-90deg]" : "";

  return (
    <div
      className={`relative shrink-0 size-[${size}px] ${rotationClass}`}
      aria-hidden
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox={`0 0 ${size} ${size}`}
      >
        <path
          d={svgPath}
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.35"
        />
      </svg>
    </div>
  );
}

// =============================================================================
// BUTTON
// =============================================================================

function CTAButton({ label, variant, showArrow = true, onClick }: ButtonProps & { onClick?: () => void }) {
  const base =
    "flex items-center justify-center gap-2 px-4 py-3 relative  cursor-pointer";

  const variantClass =
    variant === "primary"
      ? `bg-[${COLORS.PRIMARY_GREEN}]  text-white`
      : `bg-white text-[#07af40]`;

  return (
    <div
      className={`${base} ${variantClass} w-full sm:w-auto`}
      onClick={onClick}
      role="button"
    >
      <span className={`${TEXT_STYLES.gilroySemibold} text-[15px]`}>
        {label}
      </span>

      {showArrow && (
        <div className="rotate-[-90deg]">
          <ArrowIcon size={14} color={variant === "primary" ? "white" : "#07AF40"} />
        </div>
      )}
    </div>
  );
}

// =============================================================================
// HERO TEXT
// =============================================================================

function HeroHeadline() {
  return (
    <h1
      className="
        font-semibold text-white text-center
        text-[28px] leading-[36px]
        sm:text-[36px] sm:leading-[44px]
        md:text-[48px] md:leading-[58px]
        lg:text-[64px] lg:leading-[76px]
        xl:text-[80px] xl:leading-[94px]
      "
    >
      <div>
        From Factory Floors to City Blocks –  <span className={` text-[${COLORS.ACCENT_GREEN}]`}>
          Tecosoft Powers Real Operations
        </span>
      </div>

    </h1>
  );
}

function HeroSubtitle() {
  return (
    <p
      className={`
        ${TEXT_STYLES.gilroyMedium}
        text-white text-center
        text-[14px] leading-[22px]
        sm:text-[16px] sm:leading-[24px]
        md:text-[18px] md:leading-[26px]
        lg:text-[21px] lg:leading-[29px]
        max-w-[900px]
      `}
    >
      Deploy connected operations with EAGLE at the Edge and Tecosoft Analytics
      in the Cloud. We bring dashboards, alerts, monitoring, digital twins and
      AI to every industry.
    </p>
  );
}

// =============================================================================
// CTA GROUP
// =============================================================================

function HeroCTAButtons({ onboardClick }: { onboardClick: () => void }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
      <CTAButton label="Explore Industries" variant="primary" onClick={onboardClick} />
      <CTAButton label="Why Tecosoft" variant="secondary"
        onClick={() => window.location.href = "/why-tecosoft/"} />
    </div>
  );
}

// =============================================================================
// CONTENT WRAPPER
// =============================================================================

function HeroContent({ onboardClick }: { onboardClick: () => void }) {
  return (
    <div
      className="
        absolute left-1/2 top-[56%] lg:top-[50%] -translate-x-1/2 -translate-y-1/2
        flex flex-col items-center gap-6 sm:gap-8 lg:gap-9
        w-full max-w-[1200px]
        px-4 sm:px-6 md:px-10
        text-center
      "
      style={{ zIndex: Z_INDEX.CONTENT_LAYER }}
    >
      <HeroHeadline />
      <HeroSubtitle />
      <HeroCTAButtons onboardClick={onboardClick} />
    </div>
  );
}

// =============================================================================
// BACKGROUND
// =============================================================================

function VideoBackground() {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover"
      style={{ zIndex: Z_INDEX.VIDEO_LAYER }}
    >
      <source src={BANNER_VIDEO_PATH} type="video/mp4" />
    </video>
  );
}

function GradientOverlay() {
  const gradient =
    "linear-gradient(90deg, rgba(0,0,0,.7) 0%, rgba(0,0,0,.7) 100%), linear-gradient(205deg, rgba(6,86,217,.3) 0%, rgba(55,188,255,.3) 100%)";

  return (
    <div
      className="absolute inset-0"
      style={{ zIndex: Z_INDEX.OVERLAY_LAYER, backgroundImage: gradient }}
      aria-hidden
    />
  );
}

// =============================================================================
// HERO SECTION
// =============================================================================

export default function HeroSection({ onboardClick }: { onboardClick: () => void }) {
  return (
    <section
      className="
        relative w-full overflow-hidden
        h-[520px]
        sm:h-[600px]
        md:h-[640px]
        lg:h-[692px]
        xl:h-[760px]
      "
      aria-label="Industries Hero"
    >
      <VideoBackground />
      <GradientOverlay />
      <HeroContent onboardClick={onboardClick} />
    </section>
  );
}
