"use client";
import HeroDashboardAnimation from "../../components/analytics/HeroDashboardAnimation";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

import svgPaths from "../../imports/svg-xkva4n8i2f";
import BookDemoButton from "@/components/BookDemoButton";

const imgRectangle =
  "/assets/platform/analytics/ce7eda35d16cd944d375e0f181ad39674cb881d2.png";
const imgNewDesign =
  "/assets/platform/analytics/69a3380a0e6cd0907fa958de697793571b4f3ffe.png";
const imgDashboardStatic = "/assets/platform/analytics/dashboard.png";

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

function Frame3() {
  return (
    <BookDemoButton className="bg-[#07af40] box-border content-stretch flex gap-[8px] max-[767px]:gap-[6px] items-center justify-center px-[14px] max-[767px]:px-[12px] py-[10px] max-[767px]:py-[8px] relative shrink-0">
      <p className="font-semibold leading-[20px] max-[767px]:leading-[18px] not-italic relative shrink-0 text-[15px] max-[767px]:text-[13px] text-nowrap text-white whitespace-pre">
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

function Frame24() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[14px] max-[767px]:px-[12px] py-[10px] max-[767px]:py-[8px] relative shrink-0 w-[144px] max-[767px]:w-[130px]">
      <div
        aria-hidden="true"
        className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none"
      />
      <p className="font-semibold leading-[20px] max-[767px]:leading-[18px] not-italic relative shrink-0 text-[#4f4f4f] text-[15px] max-[767px]:text-[13px] text-nowrap whitespace-pre">
        See Capabilities
      </p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] max-[767px]:gap-[8px] items-center justify-center px-[12px] max-[767px]:px-[10px] py-[6px] max-[767px]:py-[5px] relative rounded-[60px] shrink-0">
      <div
        aria-hidden="true"
        className="absolute border border-[#07af40] border-solid inset-0 pointer-events-none rounded-[60px]"
      />
      <p className="font-semibold leading-[18px] max-[767px]:leading-[16px] not-italic relative shrink-0 text-[#636363] text-[13.5px] max-[767px]:text-[12px] text-nowrap whitespace-pre">
        Unified Platform Efficiency
      </p>
    </div>
  );
}

function Frame40({ handleScroll }: { handleScroll: () => void }) {
  return (
    <div className="absolute min-[1024px]:left-1/2 min-[1024px]:top-[140px] min-[1024px]:translate-x-[-50%] min-[1024px]:w-[950px] max-[1023px]:static  pt-[85px] min-[768px]:max-[1023px]:pt-[100px] max-[1023px]:mx-auto max-[1023px]:w-[95%] max-[1023px]:px-4 content-stretch flex flex-col gap-[16px] max-[767px]:gap-[12px] items-center">
      <div onClick={handleScroll} className="cursor-pointer">
        <Frame27 />
      </div>
      <p className="font-semibold leading-[76px] min-[768px]:max-[1023px]:leading-[52px] max-[767px]:leading-[40px] min-w-full not-italic relative shrink-0 text-[#07af40] text-[60px] min-[768px]:max-[1023px]:text-[40px] max-[767px]:text-[28px] text-center tracking-[-0.9px] min-[768px]:max-[1023px]:tracking-[-0.6px] max-[767px]:tracking-[-0.4px] w-[min-content]">
        <span>{`Tecosoft Analytics - `}</span>
        <span className="text-[#282828]">The Software Intelligence Hub</span>
      </p>
      <p className="font-medium leading-[23px] min-[768px]:max-[1023px]:leading-[21px] max-[767px]:leading-[19px] not-italic opacity-75 relative shrink-0 text-[#636363] text-[16px] min-[768px]:max-[1023px]:text-[15px] max-[767px]:text-[13px] text-center w-[900px] max-[1023px]:w-full">
        A centralized analytics platform that unifies visualizations, reporting,
        KPIs, AI-driven intelligence, and virtual operations views - all in one
        place. Empower teams across any industry to monitor, analyze, and act on
        data in real time.
      </p>
      <div className="content-stretch flex gap-[16px] max-[767px]:gap-[12px] items-center relative shrink-0">
        <Frame3 />
        <button onClick={handleScroll} className="cursor-pointer">
          <Frame24 />
        </button>
      </div>
    </div>
  );
}

export default function HeroSection({
  handleScroll,
}: {
  handleScroll: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const tabCardsY = useTransform(scrollYProgress, [0.15, 0.4], [120, 0]);

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isSmallScreen = windowWidth <= 1023.5;

  return (
    <div
      className="bg-white h-[1320px] max-[1023px]:h-auto min-[768px]:max-[1023px]:min-h-[900px] max-[767px]:min-h-[680px] overflow-clip relative shrink-0 w-full"
      data-name="Hero section"
      ref={containerRef}
    >
      <div
        className="absolute h-[680px] left-0 top-0 w-full"
        data-name="Rectangle"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <Image
            alt=""
            fill
            className="max-w-none object-cover opacity-40"
            src={imgRectangle}
            sizes="100vw"
            priority
          />
          <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.25)] inset-0 to-[#ffffff]" />
        </div>
      </div>
      <div
        className="absolute h-[639.752px] left-0 top-[70.25px] w-full hidden"
        data-name="Union"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1513 650"
        >
          <path
            d={svgPaths.p11d7b180}
            fill="url(#paint0_radial_1_901)"
            id="Union"
          />
          <defs>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(756.129 0.106396) rotate(90) scale(649.576 2819.33)"
              gradientUnits="userSpaceOnUse"
              id="paint0_radial_1_901"
              r="1"
            >
              <stop stopColor="white" />
              <stop offset="0.943178" stopColor="white" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      {/* <Frame /> */}
      <motion.div
        className=""
        style={{
          y: isSmallScreen ? 0 : tabCardsY,
        }}
      >
        <Frame40 handleScroll={handleScroll} />
      </motion.div>
      {/* Conditional rendering based on screen size */}
      {isSmallScreen ? (
        <div className="relative mt-[40px] min-[768px]:max-[1023px]:mt-[32px]  mx-auto w-[95%] max-w-[1052px] pb-[20px] min-[768px]:max-[1023px]:pb-[50px]  z-1">
          <Image
            alt="Dashboard"
            width={1052}
            height={700}
            className="w-full h-auto rounded-[16px] max-[767px]:rounded-[12px]"
            src={imgDashboardStatic}
            priority
          />
        </div>
      ) : (
        <HeroDashboardAnimation baseImgSrc={imgNewDesign} />
      )}
    </div>
  );
}
