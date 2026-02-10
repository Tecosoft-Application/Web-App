"use client";
import React from "react";
import Image from "next/image";
import BookDemoButton from "@/components/BookDemoButton";

const HERO_IMAGE =
  "/assets/pages/digital-twin-platform/4c1dc57c1e7b64d3e936b9fbfff3dec05024ba0b.png";
const DIGITAL_TWIN_IMAGE =
  "/assets/pages/digital-twin-platform/10ef3b80e732e618d4a20651618c6ba1cf14cb41.png";

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
        Request Demo
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
        Smarter Operations: Digital Twins for the Future
      </h1>
      <p className="font-medium text-base md:text-lg leading-relaxed md:leading-[26px] text-white max-w-2xl">
        Mirror your physical operations in software to predict, simulate, and
        optimize performance. Connect once, model fast, automate everywhere.
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
        src={HERO_IMAGE}
        fill
        priority
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 backdrop-blur-[10px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), linear-gradient(202.813deg, rgba(6, 86, 217, 0.3) 0%, rgba(55, 188, 255, 0.3) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative h-full flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-12 md:py-16 lg:py-0 w-[90%] mx-auto">
        {/* Hero Text Content */}
        <div className="flex items-center lg:items-start justify-center lg:justify-start w-full lg:w-auto lg:flex-1">
          <HeroContent />
        </div>

        {/* Digital Twin Image */}
        <div className="relative w-full max-w-[400px] sm:max-w-[450px] lg:max-w-[530px]  xl:max-w-[580px] aspect-[580/460] lg:flex-shrink-0">
          <Image
            alt="Building Digital Twin Visualization"
            className="object-contain object-center"
            src={DIGITAL_TWIN_IMAGE}
            fill
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
