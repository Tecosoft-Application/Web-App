"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HOW_IT_WORKS_DATA } from "@/constants/ai-enabled-service/ai-enable-service";

// ===========================
// TypeScript Interfaces
// ===========================

interface Step {
  id: number;
  title: string;
  description: string;
}

interface StepCardProps {
  step: Step;
  index: number;
  isActive?: boolean;
}

interface SectionHeaderProps {
  title: string;
  description: string;
}

// ===========================
// Constants & Data
// ===========================

const HERO_IMAGE =
  "/assets/pages/ai-enabled/f3618873d8cb715764fc03e465951335b8a8705c.png";

// ===========================
// Reusable Components
// ===========================

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <div className="flex flex-col gap-[16px] sm:gap-[18px] md:gap-[20px] items-start w-full max-w-[980px]">
      <h2 className="font-semibold leading-[32px] sm:leading-[38px] md:leading-[42px] lg:leading-[46px] text-[#282828] text-[28px] sm:text-[34px] md:text-[38px] lg:text-[42px]">
        {title}
      </h2>
      <p className="font-normal leading-[22px] sm:leading-[23px] md:leading-[24px] lg:leading-[25px] text-[#777777] text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]">
        {description}
      </p>
    </div>
  );
};

/**
 * StepNumber
 *
 * - Uses two stacked number layers (top + bottom).
 * - Container has fixed width & height so there is NO layout shift.
 * - A `perspective` wrapper gives a cube-like rotateX effect.
 * - Animations rely on `group-hover:` from the parent StepCard (which has `group`) or active state.
 */
const StepNumber: React.FC<{ number: number; isActive?: boolean }> = ({
  number,
  isActive = false,
}) => {
  const gradientStyle = "bg-gradient-to-br from-[#00B7FF] to-[#0EB05C]";

  return (
    // IMPORTANT: fixed size container prevents layout shifts across breakpoints.
    <div
      className="relative w-[80px] sm:w-[90px] md:w-[100px] lg:w-[106px] h-[120px] sm:h-[130px] md:h-[150px] lg:h-[170px] overflow-hidden select-none"
      aria-hidden="true"
    >
      {/* Perspective wrapper for 3D cube rotate */}
      <div className="perspective-3d relative w-full h-full">
        {/* Top number — visible by default, slides up & rotates out on hover/active */}
        <div
          className={`
            absolute inset-0 flex justify-center items-center
            text-[100px] sm:text-[120px] md:text-[140px] lg:text-[160px]
            ${gradientStyle} bg-clip-text text-transparent font-medium leading-none
            transform transition-all duration-700
            [transition-timing-function:cubic-bezier(0.65,0,-0.15,1.5)]
            ${
              isActive
                ? "-translate-y-full opacity-0 rotate-x-90"
                : "-translate-y-0 opacity-100 rotate-x-0"
            }
            group-hover:-translate-y-full group-hover:opacity-0 group-hover:rotate-x-90
          `}
        >
          {number}
        </div>

        {/* Bottom number — positioned below, slides up & rotates in on hover/active */}
        <div
          className={`
            absolute inset-0 flex justify-center items-center
            text-[100px] sm:text-[120px] md:text-[140px] lg:text-[160px]
            ${gradientStyle} bg-clip-text text-transparent font-medium leading-none
            transform transition-all duration-700
            [transition-timing-function:cubic-bezier(0.65,0,-0.15,1.5)]
            ${
              isActive
                ? "translate-y-0 opacity-100 rotate-x-0"
                : "translate-y-full opacity-0 rotate-x-90"
            }
            group-hover:translate-y-0 group-hover:opacity-100 group-hover:rotate-x-0
          `}
        >
          {number}
        </div>
      </div>
    </div>
  );
};

const StepCard: React.FC<StepCardProps> = ({
  step,
  index,
  isActive = false,
}) => {
  return (
    // `group` enables child group-hover states.
    <div
      data-step-card
      className={`relative bg-[rgba(204,241,255,0.36)] backdrop-blur-sm rounded-[14px] sm:rounded-[15px] md:rounded-[16px] w-full border border-[#55cfff] transition-all duration-300 group hover:cursor-pointer
        ${isActive ? "shadow-lg bg-[rgba(204,241,255,0.45)] scale-[1.02]" : ""}
        hover:shadow-lg hover:bg-[rgba(204,241,255,0.45)]
      `}
      role="article"
      tabIndex={index}
      aria-labelledby={`step-title-${step.id}`}
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="relative h-[145px] sm:h-[140px] md:h-[150px] w-full px-[18px] sm:px-[25px] md:px-[32px] py-[20px] sm:py-[25px] md:py-[30px]">
          {/* Positioning the number with absolute so text area flow is unaffected */}
          <div className="absolute left-[45px] sm:left-[55px] md:left-[75px] top-2/3 -translate-y-1/2 -translate-x-1/2">
            <StepNumber number={step.id} isActive={isActive} />
          </div>

          <div className="ml-[100px] sm:ml-[140px] md:ml-[160px] flex flex-col gap-[10px] sm:gap-[12px]">
            <h3
              id={`step-title-${step.id}`}
              className="font-semibold leading-[24px] sm:leading-[26px] md:leading-[28px] text-[#282828] text-[20px] sm:text-[22px] md:text-[24px]"
            >
              {step.title}
            </h3>
            <p className="font-normal leading-[18px] sm:leading-[23px] md:leading-[24px] text-[#8e8e8e] text-[12px] sm:text-[16px] md:text-[16px]">
              {step.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroImage: React.FC = () => {
  return (
    <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[660px] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] shrink-0 w-full lg:w-[320px] xl:w-[392px] overflow-hidden shadow-lg group">
      <Image
        alt="How it works visualization"
        className="object-cover rounded-[inherit] transition-transform duration-500 group-hover:scale-105"
        src={HERO_IMAGE}
        fill
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

const StepsList: React.FC<{
  activeIndex: number | null;
  scrollRef: React.RefObject<HTMLDivElement | null> | null;
}> = ({ activeIndex, scrollRef }) => {
  return (
    <div
      ref={scrollRef}
      className="flex-1 flex flex-col gap-[16px] sm:gap-[18px] md:gap-[20px] w-full snap-y snap-mandatory lg:snap-none  lg:overflow-visible"
    >
      {HOW_IT_WORKS_DATA.map((step, index) => (
        <div key={step.id} className="snap-center">
          <StepCard
            step={step}
            index={index}
            isActive={activeIndex === index}
          />
        </div>
      ))}
    </div>
  );
};

// ===========================
// Main Component
// ===========================

const HowItWorks: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.innerWidth >= 1024) return; // Disable scroll tracking on desktop

    const onScroll = () => {
      const cards = scrollRef.current?.querySelectorAll("[data-step-card]");
      if (!cards) return;

      const viewportCenter = window.innerHeight / 2;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        // Check if card is centered in viewport
        if (rect.top < viewportCenter && rect.bottom > viewportCenter) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Initial check

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative w-full bg-white"
      data-name="How it works"
      aria-labelledby="how-it-works-title"
    >
      <div className="w-full">
        <div className="flex flex-col gap-[40px] sm:gap-[44px] md:gap-[48px] lg:gap-[50px] items-start px-[16px] sm:px-[32px] md:px-[48px] lg:px-[70px] xl:px-[100px] py-[40px] sm:py-[48px] md:py-[56px] lg:py-[60px] w-full max-w-[1440px] mx-auto">
          {/* Section Header */}
          <SectionHeader
            title="How it works"
            description="Our AI-powered system captures data, analyzes patterns, automates workflows, and guides smarter actions—reducing errors, improving decisions, and streamlining execution across your entire operation."
          />

          {/* Main Content: Image + Steps */}
          <div className="flex flex-col lg:flex-row gap-[24px] sm:gap-[20px] items-start w-full">
            {/* Hero Image */}
            <div className="w-full lg:w-auto order-1 lg:order-1">
              <HeroImage />
            </div>

            {/* Steps List */}
            <div className="w-full lg:flex-1 order-2 lg:order-2">
              <StepsList activeIndex={activeIndex} scrollRef={scrollRef} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
