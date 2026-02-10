"use client";
import React, { useEffect, useRef, useState } from "react";

/* ===================== TYPES ===================== */

interface BulletPoint {
  text: string;
}

interface FeatureCardData {
  icon: "setting" | "tools" | "tick-circle" | "document" | "monitoring";
  title: string;
  description: string;
  bullets: BulletPoint[];
  routeName: string;
  variant: "gradient-first" | "white-first";
}

// Icon Components
function SettingIcon({ isActive }: { isActive?: boolean }) {
  const strokeColor = isActive ? "url(#settingGradient)" : "white";

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="settingGradient"
          x1="22.0727"
          y1="7.92643"
          x2="8.00004"
          y2="20.9255"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#00B7FF" />
          <stop offset="100%" stopColor="#0EB05C" />
        </linearGradient>
      </defs>
      <path
        d="M26.6469 8.92674L26.0299 7.85599C25.5633 7.0462 25.3299 6.64131 24.933 6.47985C24.536 6.3184 24.087 6.4458 23.1891 6.7006L21.6638 7.13022C21.0906 7.26242 20.4891 7.18743 19.9657 6.91849L19.5446 6.67552C19.0957 6.38804 18.7505 5.96417 18.5594 5.46593L18.142 4.2192C17.8675 3.39417 17.7302 2.98166 17.4035 2.74571C17.0768 2.50977 16.6428 2.50977 15.7749 2.50977H14.3814C13.5135 2.50977 13.0795 2.50977 12.7528 2.74571C12.4261 2.98166 12.2888 3.39417 12.0144 4.2192L11.5969 5.46593C11.4058 5.96417 11.0606 6.38804 10.6117 6.67552L10.1906 6.91849C9.66717 7.18743 9.06574 7.26242 8.49248 7.13022L6.96718 6.7006C6.06927 6.4458 5.62031 6.3184 5.22334 6.47985C4.82637 6.64131 4.59306 7.0462 4.12644 7.85599L3.50946 8.92674C3.07207 9.6858 2.85338 10.0653 2.89582 10.4694C2.93827 10.8734 3.23104 11.199 3.81658 11.8501L5.10538 13.291C5.42037 13.6898 5.64401 14.3848 5.64401 15.0096C5.64401 15.6348 5.42045 16.3295 5.10541 16.7284L3.81658 18.1693L3.81657 18.1693C3.23104 18.8205 2.93827 19.146 2.89582 19.5501C2.85338 19.9541 3.07208 20.3336 3.50946 21.0927L4.12642 22.1634L4.12643 22.1634C4.59304 22.9732 4.82637 23.3781 5.22334 23.5396C5.62032 23.701 6.06928 23.5736 6.96721 23.3188L8.49242 22.8891C9.06578 22.7569 9.66733 22.832 10.1908 23.101L10.6119 23.344C11.0606 23.6315 11.4058 24.0553 11.5969 24.5535L12.0144 25.8003C12.2888 26.6254 12.4261 27.0379 12.7528 27.2738C13.0795 27.5098 13.5135 27.5098 14.3814 27.5098H15.7749C16.6428 27.5098 17.0768 27.5098 17.4035 27.2738C17.7302 27.0379 17.8675 26.6254 18.142 25.8003L18.5594 24.5535C18.7505 24.0553 19.0957 23.6315 19.5444 23.344L19.9655 23.101C20.489 22.832 21.0905 22.7569 21.6639 22.8891L23.1891 23.3188C24.087 23.5736 24.536 23.701 24.933 23.5396C25.3299 23.3781 25.5633 22.9732 26.0299 22.1634L26.0299 22.1634L26.6469 21.0927C27.0842 20.3336 27.3029 19.9541 27.2605 19.5501C27.218 19.146 26.9253 18.8205 26.3397 18.1693L25.0509 16.7284C24.7359 16.3295 24.5123 15.6348 24.5123 15.0096C24.5123 14.3848 24.7359 13.6898 25.0509 13.291L26.3397 11.8501C26.9253 11.199 27.218 10.8734 27.2605 10.4694C27.3029 10.0653 27.0842 9.6858 26.6469 8.92674Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinecap="round"
        style={{ transition: "stroke 0.3s" }}
      />
      <path
        d="M19.3984 15C19.3984 17.4162 17.4397 19.375 15.0234 19.375C12.6072 19.375 10.6484 17.4162 10.6484 15C10.6484 12.5838 12.6072 10.625 15.0234 10.625C17.4397 10.625 19.3984 12.5838 19.3984 15Z"
        stroke={strokeColor}
        strokeWidth="2"
        style={{ transition: "stroke 0.3s" }}
      />
    </svg>
  );
}

function ToolsIcon({ isActive }: { isActive?: boolean }) {
  const strokeColor = isActive ? "url(#toolsGradient)" : "white";

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="toolsGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#00B7FF" />
          <stop offset="100%" stopColor="#0EB05C" />
        </linearGradient>
      </defs>
      <path
        d="M16.25 13.75L22.5 7.5"
        stroke={strokeColor}
        strokeWidth="2"
        style={{ transition: "stroke 0.3s" }}
      />
      <path
        d="M23.7515 8.75001L21.2515 6.25001L24.3765 4.37501L25.6265 5.62501L23.7515 8.75001ZM5.03278 11.2188C4.43265 10.6192 4.01978 9.85801 3.84445 9.02798C3.66913 8.19795 3.7389 7.33485 4.04528 6.54376L5.82278 8.32126H8.32278V5.82126L6.54528 4.04376C7.33642 3.73669 8.1998 3.66634 9.03022 3.84128C9.86063 4.01623 10.6222 4.42892 11.2223 5.02907C11.8223 5.62921 12.2348 6.39092 12.4096 7.22137C12.5843 8.05183 12.5138 8.91519 12.2065 9.70626L20.294 17.795C21.0851 17.4878 21.9485 17.4172 22.7789 17.592C23.6094 17.7667 24.3711 18.1793 24.9712 18.7793C25.5714 19.3793 25.9841 20.1409 26.159 20.9713C26.334 21.8017 26.2636 22.6651 25.9565 23.4563L24.1803 21.6788H21.6803V24.1788L23.4578 25.9563C22.6668 26.2633 21.8037 26.3338 20.9734 26.1591C20.1431 25.9843 19.3816 25.5719 18.7815 24.9721C18.1814 24.3723 17.7687 23.6109 17.5936 22.7807C17.4185 21.9505 17.4886 21.0873 17.7953 20.2963L9.70528 12.2063C8.91452 12.5121 8.05193 12.5816 7.22241 12.4063C6.39288 12.231 5.63217 11.8184 5.03278 11.2188Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinejoin="round"
        style={{ transition: "stroke 0.3s" }}
      />
      <path
        d="M15.2541 18.125L8.24914 25.13C8.0924 25.2871 7.90623 25.4117 7.70128 25.4967C7.49634 25.5817 7.27664 25.6254 7.05477 25.6254C6.83289 25.6254 6.61319 25.5817 6.40825 25.4967C6.2033 25.4117 6.01713 25.2871 5.86039 25.13L4.87039 24.14C4.71335 23.9833 4.58877 23.7971 4.50376 23.5922C4.41875 23.3872 4.375 23.1675 4.375 22.9457C4.375 22.7238 4.41875 22.5041 4.50376 22.2991C4.58877 22.0942 4.71335 21.908 4.87039 21.7513L11.8754 14.7463"
        stroke={strokeColor}
        strokeWidth="2"
        strokeLinejoin="round"
        style={{ transition: "stroke 0.3s" }}
      />
    </svg>
  );
}

function TickCircleIcon({ isActive }: { isActive?: boolean }) {
  const strokeColor = isActive ? "url(#tickCircleGradient)" : "white";

  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 30 30"
    >
      <defs>
        <linearGradient
          id="tickCircleGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#00B7FF" />
          <stop offset="100%" stopColor="#0EB05C" />
        </linearGradient>
      </defs>
      <g style={{ transition: "all 0.3s" }}>
        <path
          d="M15 27.5C21.875 27.5 27.5 21.875 27.5 15C27.5 8.125 21.875 2.5 15 2.5C8.125 2.5 2.5 8.125 2.5 15C2.5 21.875 8.125 27.5 15 27.5Z"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          style={{ transition: "stroke 0.3s" }}
        />
        <path
          d="M9.6875 15L13.225 18.5375L20.3125 11.4625"
          stroke={strokeColor}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          style={{ transition: "stroke 0.3s" }}
        />
      </g>
    </svg>
  );
}

function DocumentIcon({ isActive }: { isActive?: boolean }) {
  const strokeColor = isActive ? "url(#documentGradient)" : "white";

  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="documentGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#00B7FF" />
          <stop offset="100%" stopColor="#0EB05C" />
        </linearGradient>
      </defs>
      <path
        d="M26.25 8.75V21.25C26.25 25 24.375 27.5 20 27.5H10C5.625 27.5 3.75 25 3.75 21.25V8.75C3.75 5 5.625 2.5 10 2.5H20C24.375 2.5 26.25 5 26.25 8.75Z"
        stroke={strokeColor}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "stroke 0.3s" }}
      />
      <path
        d="M18.125 5.625V8.125C18.125 9.5 19.25 10.625 20.625 10.625H23.125"
        stroke={strokeColor}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "stroke 0.3s" }}
      />
      <path
        d="M10 16.25H15"
        stroke={strokeColor}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "stroke 0.3s" }}
      />
      <path
        d="M10 21.25H20"
        stroke={strokeColor}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ transition: "stroke 0.3s" }}
      />
    </svg>
  );
}

function MonitoringIcon({ isActive }: { isActive?: boolean }) {
  const strokeColor = isActive ? "url(#monitoringGradient)" : "white";

  return (
    <svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="none"
      viewBox="0 0 30 30"
    >
      <defs>
        <linearGradient
          id="monitoringGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#00B7FF" />
          <stop offset="100%" stopColor="#0EB05C" />
        </linearGradient>
      </defs>
      <g style={{ transition: "all 0.3s" }}>
        <path
          d="M12.5175 2.5C7.79521 2.5 5.43406 2.5 3.96703 3.96447C2.5 5.42893 2.5 7.78596 2.5 12.5C2.5 17.214 2.5 19.5711 3.96703 21.0355C5.43406 22.5 7.79521 22.5 12.5175 22.5H17.5263C22.2486 22.5 24.6097 22.5 26.0767 21.0355C27.0887 20.0253 27.4026 18.5904 27.5 16.25"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          style={{ transition: "stroke 0.3s" }}
        />
        <path
          d="M15 22.5V27.5"
          stroke={strokeColor}
          strokeWidth="2"
          style={{ transition: "stroke 0.3s" }}
        />
        <path
          d="M10 27.5H20"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          style={{ transition: "stroke 0.3s" }}
        />
        <path
          d="M13.75 18.75H16.25"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: "stroke 0.3s" }}
        />
        <path
          d="M22.5 5H20C18.8215 5 18.2322 5 17.8661 5.36612C17.5 5.73223 17.5 6.32149 17.5 7.5V10C17.5 11.1785 17.5 11.7678 17.8661 12.1339C18.2322 12.5 18.8215 12.5 20 12.5H22.5C23.6785 12.5 24.2678 12.5 24.6339 12.1339C25 11.7678 25 11.1785 25 10V7.5C25 6.32149 25 5.73223 24.6339 5.36612C24.2678 5 23.6785 5 22.5 5Z"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: "stroke 0.3s" }}
        />
        <path
          d="M19.375 12.5V15M23.125 12.5V15M19.375 2.5V5M23.125 2.5V5M17.5 6.875H15M17.5 10.625H15M27.5 6.875H25M27.5 10.625H25"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transition: "stroke 0.3s" }}
        />
      </g>
    </svg>
  );
}

function IconBox({
  icon,
  variant,
  isActive,
  isHovered,
}: {
  icon: FeatureCardData["icon"];
  variant: FeatureCardData["variant"];
  isActive?: boolean;
  isHovered?: boolean;
}) {
  // Desktop: show gradient icon when hovered (background becomes white)
  // Mobile: show gradient icon when active (background becomes white)
  const showGradientIcon = isHovered || isActive;

  const iconMap = {
    setting: <SettingIcon isActive={showGradientIcon} />,
    tools: <ToolsIcon isActive={showGradientIcon} />,
    "tick-circle": <TickCircleIcon isActive={showGradientIcon} />,
    document: <DocumentIcon isActive={showGradientIcon} />,
    monitoring: <MonitoringIcon isActive={showGradientIcon} />,
  };

  return (
    <div
      className={`flex items-center justify-center rounded-lg p-3 lg:p-5 size-[50px] lg:size-[70px] shrink-0 [background:linear-gradient(226.55deg,#00B7FF_21.48%,#0EB05C_76.42%)] group-hover:[background:white] transition-all duration-300 ${
        isActive
          ? "lg:[background:linear-gradient(226.55deg,#00B7FF_21.48%,#0EB05C_76.42%)] [background:white]"
          : ""
      }`}
    >
      <div className="size-[25px] lg:size-[30px]">{iconMap[icon]}</div>
    </div>
  );
}

/* ===================== DATA ===================== */

const FEATURES_DATA: FeatureCardData[] = [
  {
    icon: "setting",
    title: "Production Digitization",
    variant: "white-first",

    routeName: "/connected-factories-solutions/production-digitization",
    description:
      "Digitize your production floor with real-time monitoring and analytics.",
    bullets: [
      { text: "Live machine dashboards" },
      { text: "Job progress tracking" },
      { text: "Downtime analytics" },
    ],
  },
  {
    icon: "tools",
    title: "Tool Life Monitoring",
    variant: "white-first",

    routeName:
      "/connected-factories-solutions/tool-life-monitoring-digitization",
    description: "Predict tool wear and prevent unexpected breakdowns.",
    bullets: [
      { text: "Wear alerts" },
      { text: "Predictive replacement" },
      { text: "Usage insights" },
    ],
  },
  {
    icon: "tick-circle",
    title: "Quality Inspection",
    variant: "white-first",

    routeName: "/connected-factories-solutions/inspection-digitization",
    description: "AI-powered inspections and instant defect analysis.",
    bullets: [
      { text: "Digital inspections" },
      { text: "OK / NC classification" },
      { text: "Defect trends" },
    ],
  },
  {
    icon: "document",
    title: "Maintenance Digitization",
    variant: "white-first",

    routeName: "/connected-factories-solutions/maintenance-digitization",
    description: "Move from reactive to predictive maintenance.",
    bullets: [
      { text: "Preventive scheduling" },
      { text: "Health monitoring" },
      { text: "Technician workflows" },
    ],
  },
  {
    icon: "monitoring",
    title: "Condition Monitoring",
    variant: "white-first",

    routeName: "/connected-factories-solutions/condition-monitoring",
    description: "Real-time machine health. Zero surprises.",
    bullets: [
      { text: "Sensor Integration" },
      { text: "Automated Interlocks" },
      { text: "Condition Based Maintenance" },
    ],
  },
];

/* ===================== ARROWS ===================== */

function ArrowDesktop() {
  return (
    <svg className="size-6 rotate-[270deg]" fill="none" viewBox="0 0 24 24">
      <path
        d="M12 4V20M12 20L19 12.4444M12 20L5 12.4444"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowMobile({ active }: { active: boolean }) {
  return (
    <svg className="size-5 rotate-270" fill="none" viewBox="0 0 24 24">
      <path
        d="M12 4V20M12 20L19 12.4444M12 20L5 12.4444"
        stroke={active ? "white" : "#0098D4"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ===================== CARD ===================== */

function FeatureCard({
  data,
  index,
  activeIndex,
}: {
  data: FeatureCardData;
  index: number;
  activeIndex: number | null;
}) {
  const { icon, title, description, bullets, variant, routeName } = data;

  const [isHovered, setIsHovered] = useState(false);
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

  const isActive = isDesktop ? isHovered : activeIndex === index;

  const handleClick = () => {
    window.location.href = data.routeName;
  };

  return (
    <div
      data-card
      onClick={handleClick}
      onMouseEnter={() => isDesktop && setIsHovered(true)}
      onMouseLeave={() => isDesktop && setIsHovered(false)}
      className={`
        snap-center
        group
        cursor-pointer
        rounded-2xl
        transition-all
        duration-300
        ${
          isActive
            ? "bg-gradient-to-br from-[#00B7FF] to-[#0EB05C] scale-[1.03] shadow-2xl"
            : "bg-white"
        }
      `}
    >
      <div className="p-6 flex flex-col gap-6 relative">
        {/* Header */}
        <div className="flex items-center  gap-4">
          {/* Icon + Title + Description */}
          <IconBox
            icon={icon}
            variant={variant}
            isActive={isActive}
            isHovered={isHovered}
          />

          <div className="">
            <h3
              className={`text-lg font-semibold  w-[90%]  ${
                isActive ? "text-white" : "text-[#282828]"
              }`}
            >
              {data.title}
            </h3>
            <p
              className={`text-sm mt-1 ${
                isActive ? "text-white" : "text-[#636363]"
              }`}
            >
              {data.description}
            </p>
          </div>

          <div className="hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity absolute top-3 lg:top-6 right-3 lg:right-6">
            <ArrowDesktop />
          </div>
          <div className="lg:hidden absolute  top-3 lg:top-6 right-3 lg:right-6">
            <ArrowMobile active={isActive} />
          </div>
        </div>

        {/* Bullets */}
        <div className="flex flex-col gap-3">
          {data.bullets.map((b, i) => (
            <p
              key={i}
              className={`text-sm ${
                isActive ? "text-white" : "text-[#0098D4]"
              }`}
            >
              • {b.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===================== GRID ===================== */

function FeaturesGrid() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 1024) return; // ❌ disable scroll logic on desktop

    const onScroll = () => {
      const cards = ref.current?.querySelectorAll("[data-card]");
      if (!cards) return;

      const center = window.innerHeight / 2;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < center && rect.bottom > center) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="
        grid
        grid-cols-1
        lg:grid-cols-4
        gap-6
        snap-y snap-mandatory
        lg:snap-none
      "
    >
      {FEATURES_DATA.map((item, index) => (
        <div
          key={index}
          className={`${
            index === FEATURES_DATA.length - 1
              ? "  lg:col-start-2  lg:col-end-4 "
              : "lg:col-span-2"
          }`}
        >
          <FeatureCard data={item} index={index} activeIndex={activeIndex} />
        </div>
      ))}
    </div>
  );
}

/* ===================== SECTION ===================== */

export default function FeatureSection() {
  return (
    <section
      className="w-full px-6 lg:px-24 py-16"
      style={{
        background: "linear-gradient(242.47deg, #00BCEF 6.45%, #002363 95.13%)",
      }}
    >
      <h2 className="text-white text-3xl font-semibold mb-10">Key Use Cases</h2>
      <FeaturesGrid />
    </section>
  );
}
