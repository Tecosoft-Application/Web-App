"use client";
import React, { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";
import Image from "next/image";
import { statsSection, stats } from "@/constants/home/banner";

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
    const currentValueRef = useRef(0);
    const isInView = useInView(ref, { once: false, margin: "-50px" });

    const number = parseInt(String(to).replace(/,/g, "").replace("+", ""));
    const suffix = String(to).includes("+") ? "+" : "";

    useEffect(() => {
      if (ref.current) {
        const targetValue = isInView ? number : 0;

        animate(currentValueRef.current, targetValue, {
          duration: 1.5,
          ease: "easeOut",
          onUpdate(value) {
            currentValueRef.current = value;
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

  const StatCard: React.FC<StatCardProps> = ({
    icon,
    alt,
    number,
    unit,
    description,
  }) => (
    <div className="flex flex-col items-start gap-3 lg:gap-6 p-3 md:p-5 relative w-full md:flex-1 bg-white rounded-2xl overflow-hidden border-[1.5px] border-solid border-[#cccccc] hover:border-[#00b7ff]">
      <Image
        className="relative w-8 h-8 md:w-[48px] md:h-[48px]"
        alt={alt}
        src={icon}
        width={48}
        height={48}
      />
      <div className="flex flex-col items-start gap-1 relative w-full">
        <div className="inline-flex items-baseline gap-2 md:gap-2.5 relative flex-wrap">
          <div className="relative w-fit font-semibold text-[#222222] text-3xl md:text-[36px] tracking-[0] leading-tight md:leading-[36px]">
            <AnimatedStat to={number} />
          </div>
          {unit && (
            <div className="relative w-fit  font-medium text-[#888888] text-md md:text-lg tracking-[0] leading-4">
              {unit}
            </div>
          )}
        </div>
        <div className="relative w-fit font-medium text-[#333333] text-md md:text-lg tracking-[0] leading-5 md:leading-[22px]">
          {description}
        </div>
      </div>
    </div>
  );

  const StatsRow: React.FC<StatsRowProps> = ({
    items,
    alignment = "start",
  }) => (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 flex-col md:flex-row items-start gap-5 md:gap-6 lg:gap-[32px] relative w-full`}
    >
      {items.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );

  const firstRowStats = stats.slice(0, 6);
  // const secondRowStats = stats.slice(3, 6);

  return (
    <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-[48px] px-4 sm:px-6 md:px-8 lg:px-0 py-10 md:py-12 lg:py-14 relative w-full bg-white">
      <div className="flex flex-col w-full max-w-[90%] items-center gap-4 md:gap-6 relative z-10">
        <div className="inline-flex flex-col items-center gap-1.5 relative">
          <div className="relative w-full text-center px-2 font-medium text-[#333333] text-3xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-[0] leading-tight lg:leading-[48px]">
            {statsSection.titleFirstLine}
          </div>
          <div className="relative w-full text-center px-2 bg-[linear-gradient(227deg,rgba(0,183,255,1)_0%,rgba(14,176,92,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-semibold text-3xl sm:text-3xl md:text-4xl lg:text-[48px] tracking-[0] leading-tight lg:leading-[48px]">
            {statsSection.titleSecondLine}
          </div>
        </div>
        <p className="relative w-full font-normal text-[#333333] text-sm sm:text-base md:text-lg text-center tracking-[0] leading-6 md:leading-7 px-2">
          {statsSection.subtitle}
        </p>
      </div>
      <div className="w-full sm:max-w-[90%] relative z-10">
        <StatsRow items={firstRowStats} alignment="start" />
      </div>
    </div>
  );
};

export default StatsSection;
