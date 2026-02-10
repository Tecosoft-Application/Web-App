"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import svgPaths from "../../imports/svg-0dlgmqgi5c";
import { FactoryDiagram } from "@/components/FactoryDiagram/FactoryDiagram";
import BookDemoButton from "@/components/BookDemoButton";

gsap.registerPlugin(ScrollTrigger);

function Frame25() {
  return (
    <div
      className="bg-white box-border content-stretch flex gap-[6px] sm:gap-[8px] md:gap-[10px] items-center justify-center 
      px-[8px] py-[4px] 
      min-[375px]:px-[9px] min-[375px]:py-[4.5px]
      min-[480px]:px-[10px] min-[480px]:py-[5px]
      sm:px-[11px] sm:py-[5.5px]
      md:px-[12px] md:py-[6px]
      relative rounded-[60px] shrink-0"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#07af40] border-solid inset-0 pointer-events-none rounded-[60px]"
      />
      <p
        className=" font-semibold not-italic relative shrink-0 text-[#0098d4] text-nowrap whitespace-pre
        text-[10px] leading-[14px]
        min-[375px]:text-[11px] min-[375px]:leading-[15px]
        min-[480px]:text-[11.5px] min-[480px]:leading-[16px]
        sm:text-[12px] sm:leading-[16.5px]
        md:text-[12.5px] md:leading-[17px]
        lg:text-[13.5px] lg:leading-[18px]"
      >
        Connected Factories
      </p>
    </div>
  );
}

function IconoirArrowDown5() {
  return (
    <div className="relative size-[14px]" data-name="iconoir:arrow-down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
      >
        <g id="iconoir:arrow-down">
          <path
            d={svgPaths.p1feb4d00}
            id="Vector"
            stroke="var(--stroke-0, white)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.35"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <BookDemoButton
      className="bg-[#07af40] box-border content-stretch flex gap-[6px] sm:gap-[7px] md:gap-[8px] items-center justify-center 
      px-[10px] py-[7px]
      min-[375px]:px-[11px] min-[375px]:py-[7.5px]
      min-[480px]:px-[12px] min-[480px]:py-[8px]
      sm:px-[13px] sm:py-[9px]
      md:px-[14px] md:py-[10px]
      relative shrink-0"
    >
      <p
        className=" font-semibold not-italic relative shrink-0 text-nowrap text-white whitespace-pre
        text-[12px] leading-[16px]
        min-[375px]:text-[12.5px] min-[375px]:leading-[17px]
        min-[480px]:text-[13px] min-[480px]:leading-[18px]
        sm:text-[13.5px] sm:leading-[18.5px]
        md:text-[14px] md:leading-[19px]
        lg:text-[15px] lg:leading-[20px]"
      >
        Book a Demo
      </p>
      <div
        className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]"
        style={
          {
            "--transform-inner-width": "14",
            "--transform-inner-height": "14",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[270deg]">
          <IconoirArrowDown5 />
        </div>
      </div>
    </BookDemoButton>
  );
}

function Frame23() {
  return (
    <div
      className="bg-white box-border content-stretch flex gap-[6px] sm:gap-[7px] md:gap-[8px] items-center justify-center 
      px-[10px] py-[7px]
      min-[375px]:px-[11px] min-[375px]:py-[7.5px]
      min-[480px]:px-[12px] min-[480px]:py-[8px]
      sm:px-[13px] sm:py-[9px]
      md:px-[14px] md:py-[10px]
      relative shrink-0 
      w-[110px] min-[375px]:w-[120px] min-[480px]:w-[125px] sm:w-[135px] md:w-[144px]"
    >
      <p
        className=" font-semibold not-italic relative shrink-0 text-[#4f4f4f] text-nowrap whitespace-pre
        text-[12px] leading-[16px]
        min-[375px]:text-[12.5px] min-[375px]:leading-[17px]
        min-[480px]:text-[13px] min-[480px]:leading-[18px]
        sm:text-[13.5px] sm:leading-[18.5px]
        md:text-[14px] md:leading-[19px]
        lg:text-[15px] lg:leading-[20px]"
      >
        See Capabilities
      </p>
    </div>
  );
}

function Frame24() {
  return (
    <div
      className="content-stretch flex 
      gap-[10px] min-[375px]:gap-[12px] min-[480px]:gap-[13px] sm:gap-[14px] md:gap-[15px] lg:gap-[16px]
      items-center relative shrink-0"
    >
      <Frame2 />
      {/* <Frame23 /> */}
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] min-[375px]:gap-[24px] min-[480px]:gap-[28px] sm:gap-[32px] md:gap-[36px] lg:gap-[40px] items-center lg:items-start ">
      <Frame25 />
      <p
        className=" font-semibold not-italic relative shrink-0 text-[#282828] tracking-[-0.9px] text-center lg:text-left
        text-[28px] leading-[34px]
        min-[375px]:text-[32px] min-[375px]:leading-[38px]
        min-[480px]:text-[36px] min-[480px]:leading-[42px]
        sm:text-[40px] sm:leading-[48px]
        md:text-[44px] md:leading-[52px]
        lg:text-[48px] lg:leading-[56px]
        xl:text-[52px] xl:leading-[60px]
        2xl:text-[60px] 2xl:leading-[72px]"
      >
        Experience the Power of Connected Factories
      </p>
      <p
        className=" font-medium not-italic opacity-75 relative shrink-0 text-[#4f4f4f]   text-center lg:text-left
        text-[12px] leading-[18px]
        min-[375px]:text-[13px] min-[375px]:leading-[19px]
        min-[480px]:text-[13.5px] min-[480px]:leading-[20px]
        sm:text-[14px] sm:leading-[21px]
        md:text-[14.5px] md:leading-[22px]
        lg:text-[14px] lg:leading-[20px]
        xl:text-[15px] xl:leading-[22px]
        2xl:text-[16px] 2xl:leading-[24px]"
      >
        Connected Factory Solutions connect machines, processes, and workflows -
        turning real-time data from production, quality, and maintenance into
        insights for flexible, scalable, and smarter operational decisions.
      </p>
      <Frame24 />
    </div>
  );
}



function ConnectedFactories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const container1Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current || !container1Ref.current)
      return;

    const section = sectionRef.current;
    const container = containerRef.current;
    const container1 = container1Ref.current;

    // Media query check for screens 1024px and above
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const setupAnimation = () => {
      // Only create animation for screens 1024px and above
      if (mediaQuery.matches) {
        // Create the ScrollTrigger animation
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "+=700", // Scroll distance for the animation (one scroll action)
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // Calculate responsive x-offset based on screen width with granular breakpoints
        const screenWidth = window.innerWidth;
        let xOffset = -830;

        if (screenWidth >= 1024 && screenWidth < 1088) {
          xOffset = -650;
        } else if (screenWidth >= 1088 && screenWidth < 1280) {
          xOffset = -630;
        } else if (screenWidth >= 1280 && screenWidth < 1408) {
          xOffset = -730;
        } else if (screenWidth >= 1408 && screenWidth < 1536) {
          xOffset = -760;
        } else if (screenWidth >= 1536) {
          xOffset = -850;
        }

        // Animate the container to translate on X-axis with smooth easing
        tl.to(
          container,
          {
            x: xOffset,
            ease: "ease",
          },
          0
        ).to(
          container1,
          {
            x: xOffset,
            ease: "ease",
          },
          0
        );
      } else {
        // Clear any existing ScrollTriggers for smaller screens
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars.trigger === section) {
            trigger.kill();
          }
        });

        // Reset positions for smaller screens
        gsap.set([container, container1], { x: 0 });
      }
    };

    // Initial setup
    setupAnimation();

    // Listen for screen size changes
    const handleResize = () => {
      setupAnimation();
    };

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      // Cleanup ScrollTrigger on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="overflow-clip relative shrink-0 lg:min-h-screen"
      data-name="Connected Factories"
      style={{
        background:
          "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
      }}
    >
      <div
        className="w-full h-full"
        style={{
          background:
            "linear-gradient(270deg, rgba(255, 255, 255, 0.85) 10%, rgba(255, 255, 255, 0.40) 100%)",
        }}
      >
        <div className="max-w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2 pl-4  pr-4 md:pr-0 md:pl-8 lg:pl-12 xl:pl-20 2xl:pl-36 py-2 lg:py-4 items-center lg:gap-4 xl:gap-6 2xl:gap-8">
          <div
            className="col-span-1 lg:pr-4 xl:pr-6 2xl:pr-8 mt-14 md:mt-20 lg:mt-0"
            ref={container1Ref}
          >
            <Frame28 />
          </div>
          <div
            className="relative w-full col-span-1 pt-[18px]"
            ref={containerRef}
          >
            <FactoryDiagram />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConnectedFactories;
