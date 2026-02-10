"use client";

import BookDemoButton from "@/components/BookDemoButton";

// =============================================================================
// CONSTANTS
// =============================================================================

const BANNER_CONTENT = {
  title: "The result?",
  description:
    "One operating rhythm—where every handoff, every workflow, every resource moves in sync with clarity, confidence, and purpose.",
  ctaText: "See it in action",
} as const;

const SVG_PATHS = {
  arrowDown: "M7 1.75V12.25M7 12.25L11.9583 7.29167M7 12.25L2.04167 7.29167",
} as const;

// =============================================================================
// ICON
// =============================================================================

function ArrowRightIcon() {
  return (
    <svg
      className="size-[14px]"
      fill="none"
      viewBox="0 0 14 14"
      aria-hidden="true"
    >
      <path
        d={SVG_PATHS.arrowDown}
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.35"
      />
    </svg>
  );
}

// =============================================================================
// CTA BUTTON
// =============================================================================

function CTAButton() {
  return (
    <BookDemoButton
      className="
        bg-[#07af40]
        flex items-center gap-2
        px-4 py-2.5
        rounded-md
        text-white font-semibold text-[15px]
        hover:opacity-90 transition
        whitespace-nowrap
        max-w-[180px]
      "
    >
      {BANNER_CONTENT.ctaText}
      <span className="rotate-[-90deg]">
        <ArrowRightIcon />
      </span>
    </BookDemoButton>
  );
}

// =============================================================================
// CONTENT ROW
// =============================================================================

function ContentRow() {
  return (
    <div
      className="
        flex flex-col gap-6
        lg:flex-row lg:items-center lg:justify-between
        w-full
      "
    >
      <p
        className="
          text-[#4f4f4f]
          text-[16px] leading-[26px]
          md:text-[17px]
          lg:text-[18px]
          max-w-full
          lg:max-w-[840px]
        "
      >
        {BANNER_CONTENT.description}
      </p>

      <CTAButton />
    </div>
  );
}

// =============================================================================
// MAIN
// =============================================================================

export function BannerIntro() {
  return (
    <section aria-label="Banner introduction" className="w-full bg-white">
      <div
        className="
          mx-auto
          max-w-[1536px]
          px-4 sm:px-6 md:px-10 lg:px-20
          py-10 sm:py-12 md:py-14 lg:py-[60px]
        "
      >
        <div className="flex flex-col gap-4">
          <h2
            className="
              text-[#282828]
              font-semibold
              text-[28px]
              sm:text-[32px]
              md:text-[36px]
              lg:text-[40px]
              leading-tight
            "
          >
            {BANNER_CONTENT.title}
          </h2>

          <ContentRow />
        </div>
      </div>
    </section>
  );
}
