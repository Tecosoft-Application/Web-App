"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Feature {
  id: string;
  title: string;
  description: string;
  iconPath: string;
  bgColor: string;
  iconColor: string;
}

interface FeatureGridSectionProps {
  title: string;
  description: string;
  features: Feature[];
  sectionName?: string;
  containerClassName?: string;
  gridClassName?: string;
}

interface FeatureCardProps {
  title: string;
  description: string;
  iconPath: string;
  bgColor: string;
  iconColor: string;
  index: number;
  activeIndex: number | null;
}

function FeatureCard({
  title,
  description,
  iconPath,
  bgColor,
  index,
  activeIndex,
}: FeatureCardProps) {
  const isActive = activeIndex === index;

  return (
    <div
      data-card
      className={`
        w-full
        h-full min-h-[200px] relative rounded-2xl md:rounded-[20px] overflow-hidden
        transition-all duration-300 ease-in-out
        cursor-pointer
        lg:hover:scale-[1.05]
        ${isActive ? "scale-[1.02] lg:scale-100" : "scale-96"}
      `}
      style={{ backgroundColor: bgColor }}
    >
      <div className="size-full rounded-[inherit]">
        <div className="flex flex-col items-start justify-between p-4 md:p-5 lg:p-6 size-full gap-8 md:gap-20">
          {/* Icon Container */}
          <div className="bg-white flex items-center justify-center p-3 md:p-4 lg:p-5 rounded-lg md:rounded-xl shrink-0">
            <div className="relative shrink-0 size-6 md:size-7 lg:size-8">
              <Image
                src={iconPath}
                alt={title}
                className="object-contain"
                fill
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2 md:gap-2.5 items-start w-full">
            <h3 className="font-semibold leading-relaxed md:leading-[30px] text-[#282828] text-lg md:text-xl lg:text-[22px] w-full break-words">
              {title}
            </h3>
            <p className="font-normal leading-5 md:leading-[22px] text-[#8e8e8e] text-sm md:text-[15px] lg:text-base w-full break-words">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureGridSection({
  title,
  description,
  features,
  sectionName,
  containerClassName = "",
  gridClassName = "",
}: FeatureGridSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 1024) return; // ❌ disable scroll logic on desktop

    const onScroll = () => {
      const cards = containerRef.current?.querySelectorAll("[data-card]");
      if (!cards) return;

      const viewportCenter = window.innerHeight / 2;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        // Check if card intersects the vertical center of viewport
        if (rect.top < viewportCenter && rect.bottom > viewportCenter) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className={`bg-white relative w-full ${containerClassName}`}
      data-name={sectionName}
    >
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-[50px] items-center px-5 sm:px-10 md:px-[60px] lg:px-20 xl:px-[100px] py-10 md:py-[50px] lg:py-[60px] w-full">
          {/* Header Section */}
          <div className="flex flex-col gap-3 md:gap-4 items-center text-center w-full max-w-xs sm:max-w-md md:max-w-[650px] lg:max-w-[800px]">
            <h2 className="font-semibold leading-8 md:leading-[38px] lg:leading-[44px] text-[#282828] text-2xl sm:text-[28px] md:text-[32px] lg:text-4xl">
              {title}
            </h2>
            <p className="font-medium leading-5 md:leading-[22px] lg:leading-[23px] text-[#8e8e8e] text-sm md:text-[15px] lg:text-base w-full">
              {description}
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div
            ref={containerRef}
            className={`
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
              gap-4 md:gap-6 lg:gap-7 xl:gap-8
              w-full auto-rows-fr
              ${gridClassName}
            `}
          >
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                title={feature.title}
                description={feature.description}
                iconPath={feature.iconPath}
                bgColor={feature.bgColor}
                iconColor={feature.iconColor}
                index={index}
                activeIndex={activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
