"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import { INDUSTRIES_DATA } from "@/constants/industries";

// =============================================================================
// TYPES
// =============================================================================

interface IndustryData {
  id: string | number;
  title: string;
  description: string;
  image: string;
  useCases: string[];
  outcomes: string[];
}

interface ArrowButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  size?: "sm" | "md";
}

// =============================================================================
// COLORS
// =============================================================================

const COLORS = {
  primary: "#007aaa",
  primaryLight: "#0098d4",
  textDark: "#181818",
  textMuted: "#8e8e8e",
  textGray: "#9a9a9a",
  textBody: "#2b2b2b",
  border: "#d2d2d2",
  bgGray: "#F8F8F8",
  success: "#0EB05C",
  successBg: "#e8f8f1",
  error: "#d92d20",
  errorBg: "#fdeaea",
  infoBg: "#e6f6ff",
} as const;

// =============================================================================
// ICONS
// =============================================================================

function TickIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 20 20"
      className="shrink-0"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="tickGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00B7FF" />
          <stop offset="100%" stopColor={COLORS.success} />
        </linearGradient>
      </defs>
      <path
        fill="url(#tickGradient)"
        d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zm-1.2 14.2L4.6 10l1.4-1.4 2.8 2.8 5.6-5.6L15.8 7l-7 7.2z"
      />
    </svg>
  );
}

function ArrowButton({ direction, onClick, size = "md" }: ArrowButtonProps) {
  const sizeClasses = size === "sm" ? "h-9 w-9 p-2" : "h-11 w-11 p-3";
  const iconSize = size === "sm" ? 18 : 22;

  return (
    <button
      onClick={onClick}
      className={`
        bg-white border border-[${COLORS.border}] rounded-lg cursor-pointer
        flex items-center justify-center
        hover:bg-gray-50 active:bg-gray-100
        transition-colors duration-150
        ${sizeClasses}
      `}
      aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
    >
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 22 22"
        className={direction === "next" ? "rotate-180" : ""}
        aria-hidden="true"
      >
        <path
          d="M18.7031 11H3.30313M3.30313 11L10.5753 3.29995M3.30313 11L10.5753 18.7"
          stroke={COLORS.primary}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    </button>
  );
}

// =============================================================================
// CARD COMPONENTS
// =============================================================================

function CardImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className="
        w-full
        h-[240px]
        sm:h-[300px]
        md:h-[360px]
        lg:h-[480px]
        
        lg:w-1/2
        rounded-xl
        sm:rounded-2xl
        overflow-hidden
        shrink-0
      "
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

function CardTitle({ title }: { title: string }) {
  return (
    <h3
      className={`
        text-[${COLORS.primary}] font-semibold
        text-[20px]
        sm:text-[24px]
        xl:text-[28px]
      `}
    >
      {title}
    </h3>
  );
}

function CardDescription({ text }: { text: string }) {
  return (
    <p
      className={`
        text-[${COLORS.textGray}]
        mt-2 sm:mt-2
        max-w-[640px]
        text-[14px] leading-[22px]
        sm:text-[15px] sm:leading-[24px]
        xl:text-[17px] xl:leading-[26px]
      `}
    >
      {text}
    </p>
  );
}

function UseCaseItem({ text }: { text: string }) {
  return (
    <div className="flex items-start sm:items-center gap-3">
      <div className="mt-0.5 sm:mt-0">
        <TickIcon />
      </div>
      <span
        className={`
          text-[#282828]
          text-[14px]
          sm:text-[15px]
          lg:text-[16px]
        `}
      >
        {text}
      </span>
    </div>
  );
}

function UseCasesBox({ useCases }: { useCases: string[] }) {
  return (
    <div
      className={`
        bg-[${COLORS.bgGray}]
        rounded-xl sm:rounded-2xl
        p-3 sm:p-3.5
        shadow-sm
      `}
    >
      <p
        className={`
          text-[${COLORS.primaryLight}] font-semibold
          mb-3
          text-[16px]
        `}
      >
        Use cases:
      </p>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          gap-y-2 gap-x-3
          sm:gap-y-4 sm:gap-x-6
          lg:gap-y-4 lg:gap-x-6
        "
      >
        {useCases.map((item) => (
          <UseCaseItem key={item} text={item} />
        ))}
      </div>
    </div>
  );
}

function OutcomeBadge({ outcome }: { outcome: string }) {
  const isUp = outcome.includes("↑");
  const isDown = outcome.includes("↓");

  const arrow = isUp ? "↑" : isDown ? "↓" : "";
  const text = outcome.replace("↑", "").replace("↓", "").trim();

  return (
    <span
      className="
        bg-teal-100
        px-1 py-1
        sm:px-2 sm:py-0.5
        rounded-full
        text-[14px]
        sm:text-[15px]
        font-medium
      "
    >
      <span
        className={`
          font-normal text-[16px] 
          ${isUp ? "text-green-600" : ""}
          ${isDown ? "text-red-600" : ""}
        `}
      >
        {arrow}
      </span>

      <span className="text-[#007AAA] ml-1">
        {text}
      </span>
    </span>
  );
}


function OutcomesList({ outcomes }: { outcomes: string[] }) {
  return (
    <div className="pt-4 xl:pt-6">
      <div className="flex flex-wrap gap-2 sm:gap-3">

        <div className="w-full xl:mb-3">
          <p
            className={`
            text-[${COLORS.textDark}] font-semibold
            text-[16px] sm:text-[17px] xl:text-[18px]
          `}
          >
            Expected Outcomes:
          </p>
        </div>
        {outcomes.map((outcome) => (
          <OutcomeBadge key={outcome} outcome={outcome} />
        ))}
      </div>
    </div>
  );
}

function IndustryCard({ data }: { data: IndustryData }) {
  return (
    <div
      className="
        flex flex-col lg:flex-row
        gap-5 sm:gap-6 md:gap-6 lg:gap-7 xl:gap-10
        items-stretch
      "
    >
      {/* Image Section */}
      <CardImage src={data.image} alt={data.title} />

      {/* Content Section */}
      <div className="w-full lg:w-1/2 flex flex-col ">
        {/* Top Content */}
        <div className="space-y-3  xl:space-y-6">
          <div>
            <CardTitle title={data.title} />
            <CardDescription text={data.description} />
          </div>
          <UseCasesBox useCases={data.useCases} />
        </div>

        {/* Bottom Outcomes */}
        <OutcomesList outcomes={data.outcomes} />
      </div>
    </div>
  );
}

// =============================================================================
// SECTION HEADER
// =============================================================================

interface SectionHeaderProps {
  onPrev: () => void;
  onNext: () => void;
}

function SectionHeader({ onPrev, onNext }: SectionHeaderProps) {
  return (
    <div
      className="
        flex flex-col sm:flex-row
        justify-between items-start sm:items-center
        gap-4 sm:gap-6
        mb-6 sm:mb-8 lg:mb-10
      "
    >
      {/* Title and Description */}
      <div className="flex-1">
        <h2
          className={`
            text-[${COLORS.textDark}] font-semibold
            text-[22px]
            sm:text-[26px]
            md:text-[30px]
            lg:text-[34px]
            xl:text-[36px]
          `}
        >
          Industries & Use Cases
        </h2>
        <p
          className={`
            text-[${COLORS.textMuted}]
            mt-1.5 sm:mt-2
            max-w-[700px]
            text-[13px]
            sm:text-[14px]
            lg:text-[15px]
          `}
        >
          Browse our comprehensive list of industries to explore tailored use
          cases and discover outcomes we've delivered.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-3 sm:gap-4 items-center shrink-0">
        <ArrowButton direction="prev" onClick={onPrev} size="sm" />
        <ArrowButton direction="next" onClick={onNext} size="sm" />
      </div>
    </div>
  );
}

// =============================================================================
// MAIN SECTION
// =============================================================================

export default function IndustriesSection({ moveToNextSection }: { moveToNextSection: any }) {
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div ref={moveToNextSection}>
      <section
        className="
        bg-white w-full
        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20
        py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16
      "
        aria-label="Industries and use cases"
        ref={moveToNextSection}
      >
        {/* Container with max-width for large screens */}
        <div className="max-w-[1600px] mx-auto">
          <SectionHeader onPrev={handlePrev} onNext={handleNext} />

          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={24}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true} breakpoints={{
              640: { spaceBetween: 30 },
              1024: { spaceBetween: 40 },
            }}
          >
            {INDUSTRIES_DATA.map((item) => (
              <SwiperSlide key={item.id}>
                <IndustryCard data={item as IndustryData} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>

  );
}
