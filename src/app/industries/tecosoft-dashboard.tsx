"use client";

import svgPaths from "../../imports/svg-wzyskd72fo";

// =============================================================================
// CONSTANTS
// =============================================================================

const COLORS = {
  accentGreen: "#00FF84",
  primaryBlue: "#0098d4",
  borderGreen: "#07af40",
  textDark: "#282828",
  textMuted: "#777",
  textLight: "#e4e4e4",
  cardBg: "rgba(255,255,255,0.16)",
  capabilitiesBg: "#ccf1ff",
} as const;

const TEXT_STYLES = {
  gilroySemibold: " font-semibold",
  gilroyMedium: " font-medium",
  gilroyRegular: " font-normal",
} as const;

const GRADIENT_BG =
  "linear-gradient(225.824deg, rgb(0, 188, 239) 6.4454%, rgb(0, 35, 99) 95.133%)";

// =============================================================================
// TYPES
// =============================================================================

interface FeatureCardData {
  id: string;
  title: string;
  icon: React.ReactNode;
}

// =============================================================================
// ICONS - Consolidated reusable icon components
// =============================================================================

function LiveDataIcon() {
  return (
    <svg
      className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9"
      viewBox="0 0 32.25 30.75"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={svgPaths.p3aacb00}
        stroke={COLORS.accentGreen}
        strokeWidth="2.25"
      />
      <path
        d="M30.375 19.875L1.875 19.875"
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      />
      <path
        d={svgPaths.p90f1c00}
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      />
      <path
        d={svgPaths.p1946e80}
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      />
    </svg>
  );
}

function AnomalyIcon() {
  return (
    <svg
      className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9"
      viewBox="0 0 30.75 30.75"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={svgPaths.p32a155f0}
        stroke={COLORS.accentGreen}
        strokeWidth="2.25"
      />
      <path
        d="M1.125 10.875H29.625"
        stroke={COLORS.accentGreen}
        strokeLinejoin="round"
        strokeWidth="2.25"
      />
      <path
        d="M7.87471 6.37501H7.88818"
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      />
      <path
        d="M13.8747 6.37501H13.8882"
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      />
      <path
        d={svgPaths.p26ab5e80}
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeWidth="2.25"
      />
      <path
        d={svgPaths.p21207d60}
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      />
    </svg>
  );
}

function DrilldownIcon() {
  return (
    <svg
      className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9"
      viewBox="0 0 32.25 32.25"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={svgPaths.p3be2400}
        stroke={COLORS.accentGreen}
        strokeWidth="2.25"
      />
      <path
        d={svgPaths.p3ce27970}
        stroke={COLORS.accentGreen}
        strokeWidth="2.25"
      />
      <path
        d={svgPaths.p8158500}
        stroke={COLORS.accentGreen}
        strokeWidth="2.25"
      />
      <path
        d="M16.125 13.125L16.125 23.625"
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      />
      <path
        d="M12.375 10.875L7.875 15.375"
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      />
      <path
        d="M19.875 10.875L24.375 15.375"
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      />
      <path
        d={svgPaths.pdce6280}
        stroke={COLORS.accentGreen}
        strokeWidth="2.25"
      />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg
      className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9"
      viewBox="0 0 29.25 29.25"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={svgPaths.p3b598200}
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeWidth="2.25"
      />
      <path
        d="M7.125 2.625H8.625"
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeWidth="2.25"
      />
      <path
        d="M7.125 7.125H13.125"
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeWidth="2.25"
      />
      <path
        d={svgPaths.p3c099900}
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      />
    </svg>
  );
}

function LayoutIcon() {
  return (
    <svg
      className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9"
      viewBox="0 0 36 36"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={svgPaths.p14b4eff0}
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      />
      <path
        d={svgPaths.p3ce5eb00}
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      />
      <path
        d={svgPaths.p3095e700}
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      />
    </svg>
  );
}

function MaintenanceIcon() {
  return (
    <svg
      className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9"
      viewBox="0 0 30.7502 30.7502"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={svgPaths.p180de00}
        stroke={COLORS.accentGreen}
        strokeWidth="2.25"
      />
      <path
        d={svgPaths.p1174f900}
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeWidth="2.25"
      />
      <path
        d="M5.63844 25.1252H5.625"
        stroke={COLORS.accentGreen}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.25"
      />
    </svg>
  );
}

// =============================================================================
// SECTION HEADER
// =============================================================================

function SectionHeader() {
  return (
    <div className="flex flex-col gap-3 sm:gap-4 items-center text-center px-4">
      <h2
        className={`
          ${TEXT_STYLES.gilroySemibold} text-white
          text-[24px] leading-[32px]
          sm:text-[28px] sm:leading-[36px]
          md:text-[32px] md:leading-[40px]
          lg:text-[36px] lg:leading-[44px]
          max-w-[450px]
        `}
      >
        What you see in Tecosoft Dashboards
      </h2>
      <p
        className={`
          ${TEXT_STYLES.gilroyMedium} text-[${COLORS.textLight}]
          text-[14px] leading-[20px]
          sm:text-[15px] sm:leading-[22px]
          lg:text-[16px] lg:leading-[23px]
          max-w-[600px]
        `}
      >
        Clear data, smart layouts, and actionable insights designed to help you
        understand, decide, and move faster.
      </p>
    </div>
  );
}

// =============================================================================
// FEATURE CARD
// =============================================================================

function FeatureCard({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div
      className="
        flex flex-col gap-4 sm:gap-5 lg:gap-6
        items-center sm:items-start
        text-center sm:text-left
        w-full
      "
    >
      {/* Icon Container */}
      <div
        className={`
          bg-[${COLORS.cardBg}]
          flex items-center justify-center
          p-2.5 sm:p-3
          rounded-lg sm:rounded-xl
        `}
      >
        {icon}
      </div>

      {/* Title */}
      <p
        className={`
          ${TEXT_STYLES.gilroyMedium} text-white
          text-[16px] leading-[22px]
          sm:text-[17px] sm:leading-[24px]
          lg:text-[18px] lg:leading-[25px]
          xl:text-[20px] xl:leading-[26px]
        `}
      >
        {title}
      </p>
    </div>
  );
}

// =============================================================================
// FEATURES GRID
// =============================================================================

function FeaturesGrid() {
  const features: FeatureCardData[] = [
    {
      id: "live-data",
      title: "Up-to-the-Minute KPIs & Live Data",
      icon: <LiveDataIcon />,
    },
    {
      id: "anomaly",
      title: "Anomaly & Threshold Indicators",
      icon: <AnomalyIcon />,
    },
    {
      id: "drilldown",
      title: "Multi-Level Drilldowns (Org → Line → Asset)",
      icon: <DrilldownIcon />,
    },
    {
      id: "trend",
      title: "Trend, Pareto, Heatmap & Timeline Views",
      icon: <TrendIcon />,
    },
    {
      id: "layout",
      title: "Personalized Layouts and Themes",
      icon: <LayoutIcon />,
    },
    {
      id: "maintenance",
      title: "Maintenance, Quality & Energy Panels",
      icon: <MaintenanceIcon />,
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-2
        sm:grid-cols-2
        lg:grid-cols-3
        gap-6 sm:gap-8 lg:gap-6 xl:gap-8
        w-full
      "
    >
      {features.map((feature) => (
        <FeatureCard key={feature.id} title={feature.title} icon={feature.icon} />
      ))}
    </div>
  );
}

// =============================================================================
// CAPABILITY TAG
// =============================================================================

function CapabilityTag({ label }: { label: string }) {
  return (
    <span
      className={`
        bg-white relative
        flex items-center justify-center
        px-2.5 py-1.5
        sm:px-3 sm:py-1.5
        rounded-full
        border border-[${COLORS.borderGreen}]
        ${TEXT_STYLES.gilroySemibold}
        text-[${COLORS.primaryBlue}]
        text-[12px]
        sm:text-[13px]
        lg:text-[13.5px]
        whitespace-nowrap
      `}
    >
      {label}
    </span>
  );
}

// =============================================================================
// CAPABILITIES CARD
// =============================================================================

function CapabilitiesCard() {
  const capabilities = [
    "Dashboards",
    "Integrations",
    "Monitoring",
    "Reports",
    "AI Intelligence",
    "Virtual Operations",
    "Alerts",
    "Cloud Ready",
    "Data Control",
  ];

  return (
    <div
      className={`
        bg-[${COLORS.capabilitiesBg}]
        flex flex-col lg:flex-row
        items-start lg:items-center
        justify-between
        gap-5 sm:gap-6 lg:gap-8 xl:gap-14
        p-4 sm:p-5 lg:p-6
        rounded-xl sm:rounded-2xl
        w-full
        max-w-[1400px]
      `}
    >
      {/* Left: Title and Description */}
      <div className="flex flex-col gap-1.5 sm:gap-2 flex-shrink-0 lg:max-w-[450px] xl:max-w-[550px]">
        <h3
          className={`
            ${TEXT_STYLES.gilroySemibold}
            text-[${COLORS.textDark}]
            text-[16px] sm:text-[18px] lg:text-[20px]
            leading-[22px] sm:leading-[24px]
          `}
        >
          Built-in Capabilities
        </h3>
        <p
          className={`
            ${TEXT_STYLES.gilroyRegular}
            text-[${COLORS.textMuted}]
            text-[13px] sm:text-[14px]
            leading-[18px] sm:leading-[20px]
          `}
        >
          EAGLE at the edge + Tecosoft Analytics in the cloud gives you
          low-latency control with enterprise-scale intelligence.
        </p>
      </div>

      {/* Right: Capability Tags */}
      <div
        className="
          flex flex-wrap
          gap-2 sm:gap-2.5
          justify-start lg:justify-end
          w-full lg:w-auto
        "
      >
        {capabilities.map((capability) => (
          <CapabilityTag key={capability} label={capability} />
        ))}
      </div>
    </div>
  );
}

// =============================================================================
// MAIN SECTION
// =============================================================================

export function TecosoftDashboardSection() {
  return (
    <section
      className="
        w-full overflow-hidden
        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
        py-10 sm:py-12 md:py-14 lg:py-16
      "
      style={{ backgroundImage: GRADIENT_BG }}
      aria-label="Tecosoft Dashboard Features"
    >
      {/* Container with max-width for large screens */}
      <div
        className="
          max-w-[1600px] mx-auto
          flex flex-col items-center
          gap-8 sm:gap-10 md:gap-12 lg:gap-14
        "
      >
        <SectionHeader />
        <FeaturesGrid />
        <CapabilitiesCard />
      </div>
    </section>
  );
}
