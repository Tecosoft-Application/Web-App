"use client";
import React, { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

interface AnimatedStatProps {
  to: string;
}

interface StatCardProps {
  icon: string;
  alt: string;
  number: string;
  unit?: string;
  description: string;
}

interface StatsRowProps {
  items: StatCardProps[];
  alignment?: "start" | "center";
}

const StatsSection = () => {
  const AnimatedStat: React.FC<AnimatedStatProps> = ({ to }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const number = parseInt(String(to).replace(/,/g, "").replace("+", ""));
    const suffix = String(to).includes("+") ? "+" : "";

    useEffect(() => {
      if (isInView && ref.current) {
        animate(0, number, {
          duration: 2,
          onUpdate(value) {
            if (ref.current) {
              ref.current.textContent =
                Math.round(value).toLocaleString("en-IN") + suffix;
            }
          },
        });
      }
    }, [isInView, number, suffix]);

    return <span ref={ref}>0{suffix}</span>;
  };
  const titleFirstLine = "Turning Operational Data into";
  const titleSecondLine = "Actionable Intelligence";
  const subtitle =
    "Tecosoft turns operational and asset data into actionable intelligence with AI and Digital Twin technology - enabling predictive insights, optimized workflows, and reliable, efficient, data-driven decision making";

  const stats = [
    {
      icon: "./assets/icons/stats/machine.svg",
      alt: "Ix machine a filled",
      number: "500+",
      description: "Machines/Assets Connected",
    },
    {
      icon: "./assets/icons/stats/redo-alt.svg",
      alt: "Solid redo alt",
      number: "5,00,000+",
      unit: "Cycles",
      description: "Production Cycles Tracked",
    },
    {
      icon: "./assets/icons/stats/time-fill.svg",
      alt: "Mingcute time fill",
      number: "20,000+",
      unit: "Hours",
      description: "Downtime Monitored",
    },
    {
      icon: "./assets/icons/stats/bxs-data.svg",
      alt: "Bxs data",
      number: "2,00,000+",
      unit: "Daily",
      description: "Data Points Analyzed",
    },
    {
      icon: "./assets/icons/stats/mdi-report-box.svg",
      alt: "Mdi report box",
      number: "50+",
      unit: "Daily",
      description: "Digital Reports Generated",
    },
    {
      icon: "./assets/icons/stats/settings-rounded.svg",
      alt: "Material symbols",
      number: "5000+",
      unit: "Daily",
      description: "Tools Monitored",
    },
  ];

  const StatCard: React.FC<StatCardProps> = ({ icon, alt, number, unit, description }) => (
    <div className="flex flex-col items-start gap-3 lg:gap-6 p-3 md:p-5 relative w-full md:flex-1 bg-white rounded-2xl overflow-hidden border-[1.5px] border-solid border-[#cccccc] hover:border-[#00b7ff]">
      <img
        className="relative w-8 h-8 md:w-[48px] md:h-[48px]"
        alt={alt}
        src={icon}
      />
      <div className="flex flex-col items-start gap-1 relative w-full">
        <div className="inline-flex items-baseline gap-2 md:gap-2.5 relative flex-wrap">
          <div className="relative w-fit font-semibold text-[#222222] text-3xl md:text-[36px] tracking-[0] leading-tight md:leading-[36px]">
            <AnimatedStat to={number} />
          </div>
          {unit && (
            <div className="relative w-fit [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#888888] text-md md:text-lg tracking-[0] leading-4">
              {unit}
            </div>
          )}
        </div>
        <div className="relative w-fit [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#333333] text-md md:text-lg tracking-[0] leading-5 md:leading-[22px]">
          {description}
        </div>
      </div>
    </div>
  );

  const StatsRow: React.FC<StatsRowProps> = ({ items, alignment = "start" }) => (
    <div
      className={`flex flex-col md:flex-row ${
        alignment === "center" ? "items-center" : "items-start"
      } gap-5 md:gap-6 lg:gap-[32px] relative w-full`}
    >
      {items.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );

  const firstRowStats = stats.slice(0, 3);
  const secondRowStats = stats.slice(3, 6);

  return (
    <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-[48px] px-4 sm:px-6 md:px-8 lg:px-0 py-10 md:py-12 lg:py-14 relative w-full bg-white">
      <div className="flex flex-col w-full max-w-[90%] md:max-w-[700px] lg:max-w-[1112px] items-center gap-4 md:gap-6 relative z-10">
        <div className="inline-flex flex-col items-center gap-1.5 relative">
          <div className="relative w-full text-center px-2 font-medium text-[#333333] text-3xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-[0] leading-tight lg:leading-[48px]">
            {titleFirstLine}
          </div>
          <div className="relative w-full text-center px-2 bg-[linear-gradient(227deg,rgba(0,183,255,1)_0%,rgba(14,176,92,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-semibold text-3xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-[0] leading-tight lg:leading-[48px]">
            {titleSecondLine}
          </div>
        </div>
        <p className="relative w-full   font-normal text-[#333333] text-sm sm:text-base md:text-lg text-center tracking-[0] leading-6 md:leading-7 px-2">
          {subtitle}
        </p>
      </div>
      <div className="flex flex-col w-full max-w-[90%] md:max-w-[95%] lg:max-w-[1312px] items-start gap-6 md:gap-8 lg:gap-[46px] relative z-10">
        <StatsRow items={firstRowStats} alignment="start" />
        <StatsRow items={secondRowStats} alignment="center" />
      </div>
    </div>
  );
};

export default StatsSection;
