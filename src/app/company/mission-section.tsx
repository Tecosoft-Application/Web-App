"use client";
// ***************************** Import packages ***********************************************
import React from "react";
import { companyMissionSection } from "@/constants/company/company";

function ArrowDownIcon() {
  return (
    <div className="size-[14px]">
      <svg
        className="block size-full"
        fill="none"
        viewBox="0 0 14 14"
        aria-hidden="true"
      >
        <path
          d="M7 1.75V12.25M7 12.25L11.9583 7.29167M7 12.25L2.04167 7.29167"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.35"
        />
      </svg>
    </div>
  );
}

type CTAButtonProps = {
  text: string;
};

function CTAButton({ text }: CTAButtonProps) {
  return (
    <button className="bg-[#07af40] hover:bg-[#06993a] transition-colors flex gap-2 items-center justify-center px-3.5 py-2.5 rounded-sm">
      <span className="font-semibold leading-5 text-[15px] text-white whitespace-nowrap">
        {text}
      </span>
      <div className="flex items-center justify-center rotate-[270deg]">
        <ArrowDownIcon />
      </div>
    </button>
  );
}

export default function MissionSection() {
  return (
    <section className="w-full bg-[#e0f6fa]">
      <div className="w-full overflow-clip max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[150px] items-start px-4 sm:px-8 md:px-12 lg:px-[100px] py-8 sm:py-10 md:py-12 lg:py-[60px] w-full">
          {/* Heading Section */}
          <div className="w-full lg:w-[320px] lg:shrink-0">
            <h2 className="font-semibold leading-tight text-3xl sm:text-4xl lg:text-[40px] lg:leading-[44px] text-[#282828]">
              <span className="block">
                {companyMissionSection.heading.line1}
              </span>
              <span className="block text-[#0098d4]">
                {companyMissionSection.heading.line2}
              </span>
            </h2>
          </div>

          {/* Description and CTA Section */}
          <div className="flex-1 flex flex-col gap-8 md:gap-10 lg:gap-[46px] items-start w-full">
            <p className="font-normal leading-relaxed text-base sm:text-lg lg:text-[20px] lg:leading-[29px] text-[#4f4f4f] w-full">
              {companyMissionSection.description}
            </p>
            <CTAButton text={companyMissionSection.ctaButton.text} />
          </div>
        </div>
      </div>
    </section>
  );
}
