"use client";
import React from "react";
import Image from "next/image";
import { BANNER_SECTION } from "@/constants/ai-enabled-service/ai-enable-service";
import BookDemoButton from "@/components/BookDemoButton";

function ArrowIcon() {
  return (
    <div className="relative size-[14px]" aria-hidden="true">
      <svg
        className="block size-full"
        fill="white"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g>
          <path
            d="M7 1.75V12.25M7 12.25L11.9583 7.29167M7 12.25L2.04167 7.29167"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.35"
          />
        </g>
      </svg>
    </div>
  );
}

function RequestDemoButton() {
  return (
    <BookDemoButton
      className="bg-[#07af40] hover:bg-[#06a038] transition-colors duration-200 flex gap-2 items-center justify-center px-4 py-2.5 rounded shadow-lg hover:shadow-xl"
      aria-label="Request Demo"
    >
      <span className="font-semibold text-sm md:text-[15px] leading-5 text-white whitespace-nowrap">
        {BANNER_SECTION.buttonText}
      </span>
      <div className="flex items-center justify-center size-[14px] -rotate-90">
        <ArrowIcon />
      </div>
    </BookDemoButton>
  );
}

function HeroContent() {
  return (
    <div className="flex flex-col gap-6 md:gap-8 lg:gap-9 items-start w-full max-w-full  px-4 md:px-8 lg:px-0">
      <h1 className="font-semibold text-[24px] sm:text-[32px] md:text-[42px] lg:text-[56px] xl:text-[68px] leading-tight md:leading-[1.2] lg:leading-[80px] text-white">
        {BANNER_SECTION.title}
        <span className="text-[#00FF84]">{BANNER_SECTION.highlightText}</span>{" "}
      </h1>
      <p className="font-medium text-base md:text-lg leading-relaxed md:leading-[26px] text-white max-w-2xl">
        {BANNER_SECTION.description}
      </p>
      <RequestDemoButton />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative w-full min-h-[500px] md:min-h-[600px] lg:h-[700px] overflow-hidden pt-[40px] lg:pt-0">
      {/* Background Image */}
      <Image
        alt="Digital Twin Platform Hero Background"
        className="object-cover object-center"
        src={BANNER_SECTION.heroImage}
        fill
        priority
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 backdrop-blur-[10px]"
        style={{
          backgroundImage: BANNER_SECTION.gradientStyle,
        }}
      />

      {/* Content Container */}
      <div className="relative h-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-12 md:py-16 lg:py-0 w-[90%] mx-auto">
        {/* Hero Text Content */}
        <div className="flex items-center lg:items-start justify-center lg:justify-start   w-[95%] mx-auto lg:flex-1">
          <HeroContent />
        </div>

        {/* Digital Twin Image */}
        <div className="relative w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[500px]  xl:max-w-[580px] aspect-[580/460] lg:flex-shrink-0">
          <Image
            alt="Building Digital Twin Visualization"
            className="object-contain object-center"
            src={BANNER_SECTION.aiEnabledImage}
            fill
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
