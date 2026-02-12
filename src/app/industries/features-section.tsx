"use client";

import React, { useEffect, useRef } from "react";

import { FEATURES } from "@/constants/industries";

/* ------------------------------------------------------------------ */
/* FEATURE CARD */
/* ------------------------------------------------------------------ */

function FeatureCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) {
  return (
    <div className="bg-white rounded-[10px] shadow-[0_0_16px_rgba(0,0,0,0.06)]">
      <div className="flex gap-[14px] p-[14px] sm:p-[16px]">
        <div className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] shrink-0">
          <img src={icon} alt={title} className="w-full h-full object-contain" />
        </div>

        <div className="flex flex-col gap-[4px]">
          <p className="text-[15px] sm:text-[17px] font-medium text-[#181818] leading-[22px] sm:leading-[24px]">
            {title}
          </p>
          <p className="text-[13px] sm:text-[14px] text-[#8e8e8e] leading-[18px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* VERTICAL AUTO SCROLL */
/* ------------------------------------------------------------------ */

function VerticalAutoScroll({
  children,
  speed = 0.4,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    let y = 0;
    let raf: number;
    const halfHeight = content.scrollHeight / 2;

    const animate = () => {
      y += speed;
      if (y >= halfHeight) y = 0;

      content.style.transform = `translateY(-${y}px)`;
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [speed]);

  return (
    <div className="h-full overflow-hidden">
      <div
        ref={contentRef}
        className="flex flex-col gap-[20px] sm:gap-[24px] will-change-transform"
      >
        {children}
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* MAIN SECTION */
/* ------------------------------------------------------------------ */

export default function FeaturesSection() {
  return (
    <section className="bg-[#f5f5f5] w-full overflow-hidden py-[30px] sm:py-[60px]">
      <div
        className="
          max-w-[1800px]
          mx-auto
          px-[16px]
          sm:px-[32px]
          lg:px-[80px]
          xl:px-[120px]
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            items-center
            lg:items-center
 justify-center
            lg:justify-between
            gap-[40px]
            lg:gap-[80px]
          "
        >
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-[600px] space-y-[20px] sm:space-y-[24px]">
            <div className="inline-flex px-[12px] py-[6px] rounded-full border border-[#07af40] text-[13px] sm:text-[14px] text-[#0098d4]">
              Solutions in Action
            </div>

            <h2 className="text-[26px] sm:text-[32px] xl:text-[36px] font-semibold leading-[34px] sm:leading-[40px] xl:leading-[44px] text-[#282828]">
              Explore Use Cases Across{" "}
              <span className="text-[#07af40]">Industries</span>
            </h2>

            <p className="text-[14px] sm:text-[16px] text-[#8e8e8e] leading-[22px] sm:leading-[24px]">
              Our advanced platforms and solutions power a range of use cases,
              transforming sectors like healthcare, finance, and manufacturing.
            </p>
          </div>

          {/* RIGHT AUTO SCROLL */}
          <div className="relative w-full sm:w-[420px] lg:w-[480px] xl:w-[520px] h-[420px] sm:h-[520px] lg:h-[600px]">
            <VerticalAutoScroll>
              {FEATURES.map((item) => (
                <FeatureCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                />
              ))}
            </VerticalAutoScroll>

            {/* FADE MASKS */}
            <div className="absolute top-0 left-0 w-full h-[50px] bg-gradient-to-b from-[#f5f5f5] to-transparent z-10" />
            <div className="absolute bottom-0 left-0 w-full h-[50px] bg-gradient-to-t from-[#f5f5f5] to-transparent z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
