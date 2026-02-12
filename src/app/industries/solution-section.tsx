"use client";
import svgPaths from "../../imports/svg-wzyskd72fo";

// =============================================================================
// SECTION TITLE
// =============================================================================

function SectionHeader() {
  return (
    <div className="max-w-[520px] flex flex-col gap-4">
      <h2
        className="
           font-semibold
          text-[24px] leading-[32px]
          sm:text-[28px] sm:leading-[36px]
          md:text-[32px] md:leading-[40px]
          lg:text-[36px] lg:leading-[45px]
          text-[#282828]
        "
      >
        Comprehensive{" "}
        <span className="text-[#07af40]">Operational Solutions</span>
      </h2>

      <p className="text-[#8e8e8e] text-[14px] sm:text-[15px] leading-[23px]">
        Tecosoft provides operational visibility, from edge control to data
        governance, enabling real-time, cloud-ready decisions.
      </p>
    </div>
  );
}

// =============================================================================
// CONNECTOR (hidden on mobile)
// =============================================================================

function Connector() {
  return (
    <div
      className="
        hidden lg:flex
        relative shrink-0
        w-[180px] xl:w-[198px]
        h-[300px]
        items-center justify-center
      "
      aria-hidden
    >
      <svg
        width="199"
        height="325"
        viewBox="0 0 199 325"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="max-w-full max-h-full"
      >
        <style>{`
          @keyframes dashMove {
            from { stroke-dashoffset: 0; }
            to { stroke-dashoffset: -24; }
          }

          @keyframes dashVerticalDown {
            from { stroke-dashoffset: 0; }
            to { stroke-dashoffset: -24; }
          }

          @keyframes dashVerticalUp {
            from { stroke-dashoffset: 0; }
            to { stroke-dashoffset: 24; }
          }

          .dash-move {
            animation: dashMove 1.2s linear infinite;
          }

          .dash-move-blue {
            animation: dashMove 1.2s linear infinite;
          }

          .dash-vertical-down {
            animation: dashVerticalDown 1.4s linear infinite;
          }

          .dash-vertical-up {
            animation: dashVerticalUp 1.4s linear infinite;
          }
        `}</style>

        {/* LEFT BLACK ARROW */}
        <path d="M0 162.33L7.5 166.66V158L0 162.33Z" fill="#282828" />
        <path
          d="M7.5 162.33H110"
          stroke="#282828"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="dash-move"
        />

        {/* RIGHT BLUE ARROW */}
        <path
          d="M198.031 162.33L190.531 166.66V158L198.031 162.33Z"
          fill="#0098D4"
        />
        <path
          d="M110 162.33H190.531"
          stroke="#0098D4"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="dash-move-blue"
        />

        {/* TOP BLUE ARROW */}
        <path
          d="M198.031 4.33014L190.531 8.66027V0L198.031 4.33014Z"
          fill="#0098D4"
        />
        <path
          d="M110 4.33014H190.531"
          stroke="#0098D4"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="dash-move-blue"
        />

        {/* BOTTOM BLUE ARROW */}
        <path
          d="M198.031 320.33L190.531 324.66V316L198.031 320.33Z"
          fill="#0098D4"
        />
        <path
          d="M110 320.33H190.531"
          stroke="#0098D4"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="dash-move-blue"
        />

        {/* VERTICAL DOWN */}
        <path
          d="M110 162.33V320.33"
          stroke="#0098D4"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="dash-vertical-down"
        />

        {/* VERTICAL UP */}
        <path
          d="M110 4.33V162.33"
          stroke="#0098D4"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          className="dash-vertical-up"
        />
      </svg>
    </div>
  );
}


// =============================================================================
// CARD
// =============================================================================

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

function SolutionCard({ title, description, icon }: CardProps) {
  return (
    <div className="bg-white rounded-[20px] p-4 flex gap-4 items-start">
      <div className="bg-[rgba(204,241,255,0.5)] p-4 rounded-xl shrink-0">
        {icon}
      </div>

      <div className="flex flex-col gap-2">
        <h3 className=" font-semibold text-[18px] sm:text-[20px] text-[#282828]">
          {title}
        </h3>
        <p className="text-[#777] text-[14px] leading-[21px]">
          {description}
        </p>
      </div>
    </div>
  );
}

// =============================================================================
// ICONS
// =============================================================================

const MonitorIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
    <path d={svgPaths.p275aa980} stroke="#07AF40" strokeWidth="2" />
    <path d="M16 23V29" stroke="#07AF40" strokeWidth="2" />
    <path d="M3 17H29" stroke="#07AF40" strokeWidth="2" />
  </svg>
);

const AnalyticsIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 32 32">
    <path d={svgPaths.pa9fb740} stroke="#07AF40" strokeWidth="2" />
    <path d={svgPaths.p20901f80} stroke="#07AF40" strokeWidth="2" />
  </svg>
);

const DataIcon = () => (
  <svg width="32" height="32" fill="none" viewBox="0 0 26 26">
    <path d={svgPaths.pf37c600} stroke="#07AF40" strokeWidth="1.75" />
    <path d={svgPaths.p18fd8480} stroke="#07AF40" strokeWidth="1.75" />
  </svg>
);

// =============================================================================
// CARDS COLUMN
// =============================================================================

function SolutionsList() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-[520px]">
      <SolutionCard
        title="EAGLE Edge"
        description="On-prem edge control for low-latency decisions, ensuring operational efficiency and data security."
        icon={<MonitorIcon />}
      />

      <SolutionCard
        title="Tecosoft Analytics"
        description="Visualize, analyze, and optimize with dashboards, alerts, monitoring, digital twins & AI."
        icon={<AnalyticsIcon />}
      />

      <SolutionCard
        title="Data Control"
        description="End-to-end data governance, role-based views, and audit-ready data lineage."
        icon={<DataIcon />}

      />

    </div>
  );
}

// =============================================================================
// MAIN SECTION
// =============================================================================

export default function Solutions() {
  return (
    <section className="bg-[#e0f6fa] w-full">
      <div
        className="
          max-w-[1400px] mx-auto
          px-4 sm:px-8 lg:px-24
          py-12 lg:py-16
          flex flex-col lg:flex-row
          gap-10 lg:gap-16
          items-start lg:items-center
        "
      >
        <SectionHeader />
        <Connector />
        <SolutionsList />

      </div>

    </section>
  );
}
