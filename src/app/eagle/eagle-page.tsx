"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import svgPaths from "../../imports/svg-uk9fn56ilf";
import svgPathsFeatures from "../../imports/svg-ssflelrdzm";
import svgPathsHardware from "../../imports/svg-pycttavgg8";
import CapabilitiesSection from "../../components/CapabilitiesSection";
import BenefitsSection from "../../components/BenefitsSection";

// Image paths from public folder
const imgLogo2 = "/assets/platform/eagle/logo-black.png";
const imgRectangle = "/assets/platform/eagle/bg-green.png";
const img = "/assets/platform/eagle/banner-full.png";
const imgRectangle34Features = "/assets/platform/eagle/gray-blur.png";
const imgFrame1171277136Features = "/assets/platform/eagle/data-process.png";
const imgFrame1171277140Features =
  "/assets/platform/eagle/one-box-solution.png";
const imgFrame1171277142Features =
  "/assets/platform/eagle/operator-dashboard.png";
const imgFrame1171277145Features =
  "/assets/platform/eagle/operator-dashboard.png";
const img1 = "/assets/platform/eagle/img1.png";
const img2 = "/assets/platform/eagle/img2.png";
const imgStaticHeroMobile = "/assets/platform/eagle/5.svg";
// const imgTecosoftAiHiResLogoWhite1 = "/assets/platform/eagle/d82897defa1640fa802c61d738f15516e26fef5f.png";

// Animation variants
const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const fadeIn : any= {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainer : any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const scaleIn: any= {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.34, 1.56, 0.64, 1] },
  },
};

const cardAnimation : any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: 30,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

function Group() {
  return (
    <div className="h-[22.465px] relative shrink-0 w-[107px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 107 23"
      >
        <g id="Group 1">
          <path
            d={svgPaths.p1512000}
            fill="var(--fill-0, #777777)"
            id="Vector"
          />
          <path
            d={svgPaths.p2d6e9500}
            fill="var(--fill-0, #777777)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p308e4780}
            fill="var(--fill-0, #777777)"
            id="Vector_3"
          />
          <path
            d={svgPaths.pe18f000}
            fill="var(--fill-0, #777777)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p2c4ad000}
            fill="var(--fill-0, #777777)"
            id="Vector_5"
          />
          <path
            d={svgPaths.p30670680}
            fill="var(--fill-0, #777777)"
            id="Vector_6"
          />
          <path
            d={svgPaths.p19fdc840}
            fill="var(--fill-0, #777777)"
            id="Vector_7"
          />
          <path
            d={svgPaths.p3b3a3000}
            fill="var(--fill-0, #777777)"
            id="Vector_8"
          />
          <path
            d={svgPaths.p19204700}
            fill="var(--fill-0, #777777)"
            id="Vector_9"
          />
          <path
            d={svgPaths.p30d40b80}
            fill="var(--fill-0, #777777)"
            id="Vector_10"
          />
          <path
            d={svgPaths.pc1e3540}
            fill="var(--fill-0, #777777)"
            id="Vector_11"
          />
          <path
            d={svgPaths.p15912900}
            fill="var(--fill-0, #777777)"
            id="Vector_12"
          />
          <path
            d={svgPaths.p3b5f2a70}
            fill="var(--fill-0, #777777)"
            id="Vector_13"
          />
          <path
            d={svgPaths.pf5fb680}
            fill="var(--fill-0, #777777)"
            id="Vector_14"
          />
          <path
            d={svgPaths.pcbc3000}
            fill="var(--fill-0, #777777)"
            id="Vector_15"
          />
          <path
            d={svgPaths.p2b4c2000}
            fill="var(--fill-0, #777777)"
            id="Vector_16"
          />
          <path
            d={svgPaths.p1a9a1a00}
            fill="var(--fill-0, #777777)"
            id="Vector_17"
          />
          <path
            d={svgPaths.p1f6ce680}
            fill="var(--fill-0, #777777)"
            id="Vector_18"
          />
          <path
            d={svgPaths.p1319e400}
            fill="var(--fill-0, #777777)"
            id="Vector_19"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <motion.div
      className="content-stretch flex gap-[2px] items-center relative shrink-0"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="h-[36px] relative shrink-0 w-[30px]" data-name="logo 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            alt=""
            className="absolute h-full left-[-0.11%] max-w-none top-0 w-[476.88%]"
            src={imgLogo2}
          />
        </div>
      </div>
      <Group />
    </motion.div>
  );
}

function IconoirArrowDown() {
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
    <motion.div
      className="bg-[#07af40] box-border content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative shrink-0 cursor-pointer"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 4px 20px rgba(7, 175, 64, 0.3)",
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
      whileTap={{ scale: 0.95, transition: { duration: 0.15 } }}
    >
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre">
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
          <IconoirArrowDown />
        </div>
      </div>
    </motion.div>
  );
}

function IconoirArrowDown1() {
  return (
    <div
      className="relative shrink-0 size-[12px]"
      data-name="iconoir:arrow-down"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="iconoir:arrow-down">
          <path
            d={svgPaths.p1bf4c500}
            id="Vector"
            stroke="var(--stroke-0, #4F4F4F)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.35"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame6() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center pb-[7px] pt-0 px-0 relative shrink-0">
      <IconoirArrowDown1 />
    </div>
  );
}

function Frame10() {
  return (
    <motion.div
      className="content-stretch flex gap-[6px] items-end relative shrink-0 cursor-pointer"
      whileHover={{
        y: -2,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
    >
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4f4f4f] text-[16px] text-nowrap whitespace-pre">
        Platform
      </p>
      <Frame6 />
    </motion.div>
  );
}

function Frame11() {
  return (
    <motion.div
      className="content-stretch flex gap-[6px] items-end relative shrink-0 cursor-pointer"
      whileHover={{
        y: -2,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
    >
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4f4f4f] text-[16px] text-nowrap whitespace-pre">
        Solutions
      </p>
      <Frame6 />
    </motion.div>
  );
}

function Frame12() {
  return (
    <motion.div
      className="content-stretch flex gap-[6px] items-end relative shrink-0 cursor-pointer"
      whileHover={{
        y: -2,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
    >
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4f4f4f] text-[16px] text-nowrap whitespace-pre">
        Industries
      </p>
      <Frame6 />
    </motion.div>
  );
}

function Frame13() {
  return (
    <motion.div
      className="content-stretch flex gap-[6px] items-end relative shrink-0 cursor-pointer"
      whileHover={{
        y: -2,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
    >
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4f4f4f] text-[16px] text-nowrap whitespace-pre">
        Company
      </p>
      <Frame6 />
    </motion.div>
  );
}

function Frame4() {
  return (
    <motion.div
      className="absolute content-stretch flex gap-[42px] items-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <Frame10 />
      <Frame11 />
      <Frame12 />
      <Frame13 />
      <motion.p
        className="font-['Gilroy:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#4f4f4f] text-[16px] text-nowrap whitespace-pre cursor-pointer"
        whileHover={{
          y: -2,
          transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
        }}
      >
        Why TecoSoft
      </motion.p>
    </motion.div>
  );
}

function Frame() {
  return (
    <motion.div
      className="absolute bg-white box-border content-stretch flex items-center justify-between left-0 overflow-clip px-[100px] py-[20px] shadow-[0px_4px_50px_0px_rgba(0,0,0,0.08)] top-0 w-[1512px]"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 25,
        mass: 0.8,
      }}
    >
      <Frame1 />
      <Frame2 />
      <Frame4 />
    </motion.div>
  );
}

function Frame26() {
  return (
    <motion.div
      className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[6px] relative rounded-[60px] shrink-0 max-lg:px-[10px] max-lg:py-[5px]"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        delay: 0.5,
        type: "spring",
        stiffness: 180,
        damping: 20,
        mass: 0.8,
      }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#07af40] border-solid inset-0 pointer-events-none rounded-[60px]"
      />
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#636363] text-[13.5px] text-nowrap whitespace-pre max-lg:text-[12px] max-lg:leading-[16px]">
        Connected Ecosystem
      </p>
    </motion.div>
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

function Frame3() {
  return (
    <motion.div
      className="bg-[#07af40] box-border content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative shrink-0 cursor-pointer max-lg:px-[12px] max-lg:py-[8px]"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
      whileTap={{ scale: 0.95, transition: { duration: 0.15 } }}
    >
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[15px] text-nowrap text-white whitespace-pre max-lg:text-[13px] max-lg:leading-[18px]">
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
    </motion.div>
  );
}

function Frame24() {
  return (
    <motion.div
      className="box-border content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative shrink-0 w-[144px] cursor-pointer max-lg:px-[12px] max-lg:py-[8px] max-lg:w-auto"
      whileHover={{
        scale: 1.05,
        borderColor: "#07af40",
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
      whileTap={{ scale: 0.95, transition: { duration: 0.15 } }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none"
      />
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#4f4f4f] text-[15px] text-nowrap whitespace-pre max-lg:text-[13px] max-lg:leading-[18px]">
        See Capabilities
      </p>
    </motion.div>
  );
}

function Frame25() {
  return (
    <motion.div
      className="content-stretch flex gap-[16px] items-center relative shrink-0 max-lg:gap-[12px]"
      variants={fadeInUp}
    >
      <Frame3 />
      <Frame24 />
    </motion.div>
  );
}

function Frame40() {
  return (
    <motion.div
      className="absolute content-stretch flex flex-col gap-[16px] items-center left-[281px] top-[140px] w-[950px] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:top-[40px] max-lg:w-[90%] max-lg:max-w-[700px] max-lg:gap-[12px]"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <Frame26 />
      <motion.p
        className="font-['Gilroy:Semibold',sans-serif] leading-[76px] min-w-full not-italic relative shrink-0 text-[#282828] text-[0px] text-[60px] text-center tracking-[-0.9px] w-[min-content] max-lg:text-[32px] max-lg:leading-[40px]"
        variants={fadeInUp}
      >
        <span className="text-[#07af40]">EAGLE:</span>
        <span>{` The Edge Platform Powering Every Connected Factory`}</span>
      </motion.p>
      <motion.p
        className="font-['Gilroy:Medium',sans-serif] leading-[23px] not-italic opacity-75 relative shrink-0 text-[#636363] text-[16px] text-center w-[820px] max-lg:w-full max-lg:text-[13px] max-lg:leading-[18px]"
        variants={fadeInUp}
      >
        EAGLE transforms disconnected machines and assets into a connected
        ecosystem, enabling real-time insights and smarter, faster operations.
      </motion.p>
      <Frame25 />
    </motion.div>
  );
}

function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const productContainerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the entire hero section
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // All products animate simultaneously with same timing
  const animationStart = 0.3;
  const animationEnd = 0.7;
  const opacityStart = 0.3;
  const opacityEnd = 0.5;

  // Label opacity timing (starts at 50% of product animation)
  const labelOpacityStart = 0.5;
  const labelOpacityEnd = 0.65;

  // Left side products - move from center to left (all at same time)
  const leftProduct1X = useSpring(
    useTransform(scrollYProgress, [animationStart, animationEnd], [500, 80]),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const leftProduct1Y = useSpring(
    useTransform(scrollYProgress, [animationStart, animationEnd], [240, 30]),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const leftProduct1Opacity = useSpring(
    useTransform(scrollYProgress, [opacityStart, opacityEnd], [0, 1]),
    { stiffness: 120, damping: 35 }
  );

  const leftProduct2X = useSpring(
    useTransform(scrollYProgress, [animationStart, animationEnd], [500, 80]),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const leftProduct2Y = useSpring(
    useTransform(scrollYProgress, [animationStart, animationEnd], [240, 224]),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const leftProduct2Opacity = useSpring(
    useTransform(scrollYProgress, [opacityStart, opacityEnd], [0, 1]),
    { stiffness: 120, damping: 35 }
  );

  const leftProduct3X = useSpring(
    useTransform(scrollYProgress, [animationStart, animationEnd], [500, 80]),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const leftProduct3Y = useSpring(
    useTransform(scrollYProgress, [animationStart, animationEnd], [240, 426]),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const leftProduct3Opacity = useSpring(
    useTransform(scrollYProgress, [opacityStart, opacityEnd], [0, 1]),
    { stiffness: 120, damping: 35 }
  );

  // Right side products - move from center to right (all at same time)
  const rightProduct1X = useSpring(
    useTransform(scrollYProgress, [animationStart, animationEnd], [500, 922]),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const rightProduct1Y = useSpring(
    useTransform(scrollYProgress, [animationStart, animationEnd], [240, 30]),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const rightProduct1Opacity = useSpring(
    useTransform(scrollYProgress, [opacityStart, opacityEnd], [0, 1]),
    { stiffness: 120, damping: 35 }
  );

  const rightProduct2X = useSpring(
    useTransform(scrollYProgress, [animationStart, animationEnd], [500, 922]),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const rightProduct2Y = useSpring(
    useTransform(scrollYProgress, [animationStart, animationEnd], [240, 228]),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const rightProduct2Opacity = useSpring(
    useTransform(scrollYProgress, [opacityStart, opacityEnd], [0, 1]),
    { stiffness: 120, damping: 35 }
  );

  const rightProduct3X = useSpring(
    useTransform(scrollYProgress, [animationStart, animationEnd], [500, 922]),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const rightProduct3Y = useSpring(
    useTransform(scrollYProgress, [animationStart, animationEnd], [240, 426]),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const rightProduct3Opacity = useSpring(
    useTransform(scrollYProgress, [opacityStart, opacityEnd], [0, 1]),
    { stiffness: 120, damping: 35 }
  );

  // Labels opacity only (positions are fixed)
  const labelOpacity = useSpring(
    useTransform(scrollYProgress, [labelOpacityStart, labelOpacityEnd], [0, 1]),
    { stiffness: 120, damping: 35 }
  );

  // Center product - subtle scale effect
  const centerScale = useSpring(
    useTransform(scrollYProgress, [animationStart, animationEnd], [1.15, 1]),
    { stiffness: 120, damping: 35 }
  );

  return (
    <div
      ref={heroRef}
      className="bg-white relative shrink-0 w-full"
      data-name="Hero section"
    >
      {/* Background elements */}
      <div
        className="absolute h-[680px] left-0 top-0 w-[1512px] pointer-events-none max-lg:w-full max-lg:h-[400px]"
        data-name="Rectangle"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
        >
          <img
            alt=""
            className="absolute max-w-none object-50%-50% object-cover opacity-40 size-full"
            src={imgRectangle}
          />
          <div className="absolute bg-gradient-to-b from-[rgba(255,255,255,0.25)] inset-0 to-[#ffffff]" />
        </div>
      </div>
      <div
        className="absolute h-[649.752px] left-0 top-[70.25px] w-[1512.25px] pointer-events-none max-lg:hidden"
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
            fill="url(#paint0_radial_1_1901)"
            id="Union"
          />
          <defs>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(756.129 0.106396) rotate(90) scale(649.576 2819.33)"
              gradientUnits="userSpaceOnUse"
              id="paint0_radial_1_1901"
              r="1"
            >
              <stop stopColor="white" />
              <stop offset="0.943178" stopColor="white" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Header - scrolls normally */}
      {/* <Frame /> */}

      {/* Hero content - scrolls normally */}
      <div className="relative h-[420px] max-lg:h-[250px] max-lg:mt-[70px]">
        <Frame40 />
      </div>

      {/* Sticky product section - pins while animation plays */}
      <div className="h-[1800px] relative w-full max-lg:h-auto max-lg:pb-[40px]">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center max-lg:static max-lg:h-auto max-lg:pt-[90px]">
          {/* Static SVG Image for Mobile */}
          <div className="hidden max-lg:flex max-lg:justify-center w-full px-4">
            <img
              src={imgStaticHeroMobile}
              alt="Eagle Platform Connected Factory"
              className="w-full max-w-[550px] h-auto"
            />
          </div>

          {/* Animated Product Section for Desktop */}
          <motion.div
            ref={productContainerRef}
            className="relative h-[630px] w-[1152px] max-lg:hidden"
            data-name="1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              className="absolute h-[630px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1152px]"
              data-name="Subtract"
            >
              <div className="absolute inset-[-0.79%_-0.43%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 1162 640"
                >
                  <g filter="url(#filter0_f_1_1805)" id="Subtract">
                    <path
                      d={svgPaths.p15490800}
                      fill="url(#paint0_radial_1_1805)"
                      fillOpacity="0.8"
                    />
                  </g>
                  <defs>
                    <filter
                      colorInterpolationFilters="sRGB"
                      filterUnits="userSpaceOnUse"
                      height="640"
                      id="filter0_f_1_1805"
                      width="1162"
                      x="0"
                      y="0"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        mode="normal"
                        result="shape"
                      />
                      <feGaussianBlur
                        result="effect1_foregroundBlur_1_1805"
                        stdDeviation="2.5"
                      />
                    </filter>
                    <radialGradient
                      cx="0"
                      cy="0"
                      gradientTransform="translate(581 288.053) rotate(90) scale(283.053 576)"
                      gradientUnits="userSpaceOnUse"
                      id="paint0_radial_1_1805"
                      r="1"
                    >
                      <stop stopColor="#00B7FF" stopOpacity="0.12" />
                      <stop offset="1" stopColor="#10B981" stopOpacity="0.12" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Right side products with parallax */}
            <motion.div
              className="absolute rounded-[12px] size-[150px] z-10 max-lg:!left-[calc(100%-40px)] max-lg:!top-[20px] max-lg:!opacity-100 max-lg:w-[100px] max-lg:h-[100px] max-lg:translate-x-[-100%]"
              style={{
                left: rightProduct1X,
                top: rightProduct1Y,
                opacity: rightProduct1Opacity,
              }}
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                <img
                  alt="Manual Machine"
                  className="absolute h-[478.67%] left-[-397.24%] max-w-none top-[-92.39%] w-[564.39%]"
                  src={img}
                />
              </div>
            </motion.div>
            <motion.p
              className="absolute font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic text-[#007aaa] text-[16px] text-center text-nowrap translate-x-[-50%] whitespace-pre z-10 max-lg:!left-[calc(100%-90px)] max-lg:!top-[125px] max-lg:!opacity-100 max-lg:text-[12px]"
              style={{
                left: 997,
                top: 184,
                opacity: labelOpacity,
              }}
            >
              Manual Machine
            </motion.p>

            <motion.div
              className="absolute rounded-[12px] size-[150px] z-10 max-lg:!left-[calc(100%-40px)] max-lg:!top-[50%] max-lg:!opacity-100 max-lg:w-[100px] max-lg:h-[100px] max-lg:translate-x-[-100%] max-lg:translate-y-[-50%]"
              style={{
                left: rightProduct2X,
                top: rightProduct2Y,
                opacity: rightProduct2Opacity,
              }}
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                <img
                  alt="Press Break"
                  className="absolute h-[399.69%] left-[-328.88%] max-w-none top-[-161.47%] w-[472.96%]"
                  src={img}
                />
              </div>
            </motion.div>
            <motion.p
              className="absolute font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic text-[#007aaa] text-[16px] text-center text-nowrap translate-x-[-50%] whitespace-pre z-10 max-lg:!left-[calc(100%-50px)] max-lg:!top-[50%] max-lg:!opacity-100 max-lg:text-[12px]"
              style={{
                left: 997,
                top: 382,
                opacity: labelOpacity,
              }}
            >
              Press Break
            </motion.p>

            <motion.div
              className="absolute rounded-[12px] size-[150px] z-10 max-lg:!left-[calc(100%-40px)] max-lg:!bottom-[20px] max-lg:!top-auto max-lg:!opacity-100 max-lg:w-[100px] max-lg:h-[100px] max-lg:translate-x-[-100%]"
              style={{
                left: rightProduct3X,
                top: rightProduct3Y,
                opacity: rightProduct3Opacity,
              }}
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                <img
                  alt="Laser Cutting"
                  className="absolute h-[438.07%] left-[-368.09%] max-w-none top-[-288.75%] w-[516.52%]"
                  src={img}
                />
              </div>
            </motion.div>
            <motion.p
              className="absolute font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic text-[#007aaa] text-[16px] text-center text-nowrap translate-x-[-50%] whitespace-pre z-10 max-lg:!left-[calc(100%-50px)] max-lg:!bottom-[-5px] max-lg:!top-auto max-lg:!opacity-100 max-lg:text-[12px]"
              style={{
                left: 997,
                top: 580,
                opacity: labelOpacity,
              }}
            >
              Laser Cutting
            </motion.p>

            {/* Left side products with parallax */}
            <motion.div
              className="absolute rounded-[12px] size-[150px] z-10 max-lg:!left-[40px] max-lg:!top-[20px] max-lg:!opacity-100 max-lg:w-[100px] max-lg:h-[100px]"
              style={{
                left: leftProduct1X,
                top: leftProduct1Y,
                opacity: leftProduct1Opacity,
              }}
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                <img
                  alt="CNC Machine"
                  className="absolute h-[505.98%] left-[-104.33%] max-w-none top-[-23.11%] w-[596.59%]"
                  src={img}
                />
              </div>
            </motion.div>
            <motion.p
              className="absolute font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic text-[#007aaa] text-[16px] text-center text-nowrap translate-x-[-50%] whitespace-pre z-10 max-lg:!left-[90px] max-lg:!top-[125px] max-lg:!opacity-100 max-lg:text-[12px]"
              style={{
                left: 155,
                top: 184,
                opacity: labelOpacity,
              }}
            >
              CNC Machine
            </motion.p>

            <motion.div
              className="absolute rounded-[12px] size-[150px] z-10 max-lg:!left-[40px] max-lg:!top-[50%] max-lg:!opacity-100 max-lg:w-[100px] max-lg:h-[100px] max-lg:translate-y-[-50%]"
              style={{
                left: leftProduct2X,
                top: leftProduct2Y,
                opacity: leftProduct2Opacity,
              }}
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                <img
                  alt="VMC Machine"
                  className="absolute h-[436.44%] left-[-182.11%] max-w-none top-[-17.57%] w-[516.45%]"
                  src={img}
                />
              </div>
            </motion.div>
            <motion.p
              className="absolute font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic text-[#007aaa] text-[16px] text-center text-nowrap translate-x-[-50%] whitespace-pre z-10 max-lg:!left-[50px] max-lg:!top-[50%] max-lg:!opacity-100 max-lg:text-[12px]"
              style={{
                left: 155,
                top: 378,
                opacity: labelOpacity,
              }}
            >
              VMC Machine
            </motion.p>

            <motion.div
              className="absolute rounded-[12px] size-[150px] z-10 max-lg:!left-[40px] max-lg:!bottom-[20px] max-lg:!top-auto max-lg:!opacity-100 max-lg:w-[100px] max-lg:h-[100px]"
              style={{
                left: leftProduct3X,
                top: leftProduct3Y,
                opacity: leftProduct3Opacity,
              }}
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[12px]">
                <img
                  alt="HMC Machine"
                  className="absolute h-[533.58%] left-[-352.75%] max-w-none top-[-25.99%] w-[629.13%]"
                  src={img}
                />
              </div>
            </motion.div>
            <motion.p
              className="absolute font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic text-[#007aaa] text-[16px] text-center text-nowrap translate-x-[-50%] whitespace-pre z-10 max-lg:!left-[50px] max-lg:!bottom-[-5px] max-lg:!top-auto max-lg:!opacity-100 max-lg:text-[12px]"
              style={{
                left: 155,
                top: 580,
                opacity: labelOpacity,
              }}
            >
              HMC Machine
            </motion.p>

            {/* Center product - always visible with subtle scale */}
            <motion.div
              className="absolute rounded-[16px] h-[391px] left-[313px] top-[103.5px] w-[526px] z-20 max-lg:!scale-100 max-lg:h-[280px] max-lg:w-[380px] max-lg:left-[50%] max-lg:top-[50%] max-lg:translate-x-[-50%] max-lg:translate-y-[-50%]"
              style={{ scale: centerScale }}
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
                <img
                  alt="Industrial Display HMI Panel"
                  className="absolute h-[182.85%] left-[-13.89%] max-w-none top-[-47.23%] w-[160.2%]"
                  src={img}
                />
              </div>
            </motion.div>
            <p className="absolute font-['Gilroy:Semibold',sans-serif] leading-[24px] left-[576.5px] not-italic text-[#007aaa] text-[20px] text-center text-nowrap top-[494.88px] translate-x-[-50%] whitespace-pre z-20 max-lg:left-[50%] max-lg:bottom-[-30px] max-lg:top-auto max-lg:text-[14px]">
              Industrial Display/HMI Panel
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function Features() {
  return (
    <div
      className="relative shrink-0 w-full flex items-center justify-center py-[100px]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 184, 219, 0.1) 0%, rgba(0, 184, 219, 0.1) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%))",
      }}
    >
      <div className="relative h-[840px] w-[1512px]" data-name="Features">
        <div className="absolute bottom-0 flex h-[150px] items-center justify-center left-0 w-[1512px]">
          <div className="flex-none scale-y-[-100%]">
            <div className="h-[150px] relative w-[1512px]">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={imgRectangle34Features}
              />
            </div>
          </div>
        </div>
        <div className="absolute h-[150px] left-0 top-0 w-[1512px]">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src={imgRectangle34Features}
          />
        </div>

        {/* Card 1: Data Acquisition & Preprocessing */}
        <motion.div
          className="group absolute box-border content-stretch cursor-pointer flex flex-col gap-[12px] items-start justify-end left-[180px] overflow-clip p-[16px] rounded-[12px] size-[220px] top-[127px]"
          custom={0}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={cardAnimation}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[12px] grayscale group-hover:grayscale-0 transition-[filter] duration-500 ease-in-out"
          >
            <img
              alt=""
              className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full"
              src={imgFrame1171277136Features}
            />
            <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-75% to-[rgba(0,0,0,0.6)]" />
          </div>
          <div
            className="overflow-clip relative shrink-0 size-[30px]"
            data-name="floppy-disk"
          >
            <div className="absolute inset-[8.33%_12.5%]" data-name="elements">
              <div className="absolute inset-[-3.75%_-4.17%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 20 22"
                >
                  <g id="elements">
                    <path
                      d={svgPathsFeatures.p38be83d0}
                      id="Vector"
                      className="stroke-white group-hover:stroke-[#00FF84] transition-[stroke] duration-500 ease-in-out"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M7.75 5.75002H11.75"
                      id="Vector_2"
                      className="stroke-white group-hover:stroke-[#00FF84] transition-[stroke] duration-500 ease-in-out"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d={svgPathsFeatures.p37eac880}
                      id="Vector_3"
                      className="stroke-white group-hover:stroke-[#00FF84] transition-[stroke] duration-500 ease-in-out"
                      strokeWidth="1.5"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[18px] text-white w-full">{`Data Acquisition & Preprocessing`}</p>
          </div>
        </motion.div>

        {/* Card 2: Integrates to MES/ERP/Cloud */}
        <motion.div
          className="group absolute bg-white box-border content-stretch cursor-pointer flex gap-[16px] h-[98px] items-center left-[424px] p-[16px] rounded-[12px] top-[127px] w-[620px]"
          custom={1}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={cardAnimation}
        >
          <div
            aria-hidden="true"
            className="absolute border-[#dddddd] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]"
          />
          <div
            className="aspect-[66/66] box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center overflow-clip px-[28px] py-[29px] relative rounded-[12px] shrink-0"
            style={{
              background:
                "linear-gradient(227deg, #85868B 21.48%, #444 76.42%)",
            }}
          >
            <div
              className="absolute inset-0 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div
              className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 z-10"
              data-name="vuesax/linear/refresh-square-2"
            >
              <div
                className="[grid-area:1_/_1] aspect-[40/40] h-[30px] ml-0 mt-0 relative"
                data-name="refresh-square-2"
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 30 30"
                >
                  <g id="refresh-square-2">
                    <path
                      d={svgPathsFeatures.p3aa73c00}
                      id="Vector"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <g id="Group">
                      <path
                        d={svgPathsFeatures.p2b7284e8}
                        id="Vector_2"
                        stroke="white"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      />
                    </g>
                    <path
                      d="M29 1V29H1V1H29Z"
                      id="Vector_3"
                      opacity="0"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[22px] relative shrink-0 text-[#282828] text-[18px] text-nowrap whitespace-pre">
              Integrates to MES/ERP/Cloud
            </p>
            <p className="-webkit-box font-['Gilroy:Regular',sans-serif] leading-[20px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#8e8e8e] text-[15px] w-[min-content]">
              Seamlessly forward data to MES, ERP, and cloud systems through
              built-in APIs.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Flexible Edge Intelligence */}
        <motion.div
          className="group absolute bg-white box-border content-stretch cursor-pointer flex gap-[16px] h-[98px] items-center left-[424px] p-[16px] rounded-[12px] top-[249px] w-[620px]"
          custom={2}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={cardAnimation}
        >
          <div
            aria-hidden="true"
            className="absolute border-[#dddddd] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]"
          />
          <div
            className="aspect-[66/66] box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center overflow-clip px-[28px] py-[29px] relative rounded-[12px] shrink-0"
            style={{
              background:
                "linear-gradient(227deg, #85868B 21.48%, #444 76.42%)",
            }}
          >
            <div
              className="absolute inset-0 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div
              className="relative shrink-0 size-[30px] z-10"
              data-name="vuesax/linear/cpu"
            >
              <div
                className="absolute contents inset-0"
                data-name="vuesax/linear/cpu"
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <g id="cpu">
                    <path
                      d={svgPathsFeatures.p4025b00}
                      id="Vector"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d={svgPathsFeatures.p2a720700}
                      id="Vector_2"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8.01 4V2"
                      id="Vector_3"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12 4V2"
                      id="Vector_4"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M16 4V2"
                      id="Vector_5"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M20 8H22"
                      id="Vector_6"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M20 12H22"
                      id="Vector_7"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M20 16H22"
                      id="Vector_8"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M16 20V22"
                      id="Vector_9"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M12.01 20V22"
                      id="Vector_10"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8.01 20V22"
                      id="Vector_11"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2 8H4"
                      id="Vector_12"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2 12H4"
                      id="Vector_13"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M2 16H4"
                      id="Vector_14"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <g id="Vector_15" opacity="0"></g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[22px] relative shrink-0 text-[#282828] text-[18px] text-nowrap whitespace-pre">
              Flexible Edge Intelligence
            </p>
            <p className="-webkit-box font-['Gilroy:Regular',sans-serif] leading-[20px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#8e8e8e] text-[15px] w-[min-content]">
              Smart edge logic enables faster decisions and lighter upstream
              data processing.
            </p>
          </div>
        </motion.div>

        {/* Card 4: One-box Solution */}
        <motion.div
          className="group absolute box-border content-stretch cursor-pointer flex flex-col gap-[12px] h-[220px] items-start justify-end left-[180px] overflow-clip p-[16px] rounded-[12px] top-[371px] w-[440px]"
          custom={3}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={cardAnimation}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[12px] grayscale group-hover:grayscale-0 transition-[filter] duration-500 ease-in-out"
          >
            <img
              alt=""
              className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full"
              src={imgFrame1171277140Features}
            />
            <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-75% to-[rgba(0,0,0,0.6)]" />
          </div>
          <div
            className="relative shrink-0 size-[30px]"
            data-name="vuesax/linear/3d-square"
          >
            <div
              className="absolute contents inset-0"
              data-name="vuesax/linear/3d-square"
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
              >
                <g id="3d-square">
                  <path
                    d={svgPathsFeatures.pcd9f0c0}
                    id="Vector"
                    className="stroke-white group-hover:stroke-[#00FF84] transition-[stroke] duration-500 ease-in-out"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <g id="Group">
                    <g id="Group_2">
                      <path
                        d={svgPathsFeatures.p219db680}
                        id="Vector_2"
                        className="stroke-white group-hover:stroke-[#00FF84] transition-[stroke] duration-500 ease-in-out"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12 17.77V12.32"
                        id="Vector_3"
                        className="stroke-white group-hover:stroke-[#00FF84] transition-[stroke] duration-500 ease-in-out"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </g>
                    <path
                      d={svgPathsFeatures.p26c92500}
                      id="Vector_4"
                      className="stroke-white group-hover:stroke-[#00FF84] transition-[stroke] duration-500 ease-in-out"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </g>
                  <g id="Vector_5" opacity="0"></g>
                </g>
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[18px] text-white w-full">
              One-box Solution
            </p>
          </div>
        </motion.div>

        {/* Card 5: Real-time KPIs */}
        <motion.div
          className="group absolute bg-white box-border content-stretch cursor-pointer flex gap-[16px] h-[98px] items-center left-[180px] p-[16px] rounded-[12px] top-[615px] w-[440px]"
          custom={4}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={cardAnimation}
        >
          <div
            aria-hidden="true"
            className="absolute border-[#dddddd] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]"
          />
          <div
            className="aspect-[66/66] box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center overflow-clip px-[28px] py-[29px] relative rounded-[12px] shrink-0"
            style={{
              background:
                "linear-gradient(227deg, #85868B 21.48%, #444 76.42%)",
            }}
          >
            <div
              className="absolute inset-0 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div
              className="relative shrink-0 size-[30px] z-10"
              data-name="vuesax/linear/cloud"
            >
              <div
                className="absolute contents inset-0"
                data-name="vuesax/linear/cloud"
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <g id="cloud">
                    <path
                      d={svgPathsFeatures.p4ad57a0}
                      id="Vector"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                    />
                    <path
                      d={svgPathsFeatures.p118e600}
                      id="Vector_2"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeMiterlimit="10"
                      strokeWidth="1.5"
                    />
                    <g id="Vector_3" opacity="0"></g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[22px] relative shrink-0 text-[#282828] text-[18px] text-nowrap whitespace-pre">
              Real-time KPIs
            </p>
            <p className="-webkit-box font-['Gilroy:Regular',sans-serif] leading-[20px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#8e8e8e] text-[15px] w-[min-content]">
              Edge metrics reveal instant performance insights with minimal
              latency.
            </p>
          </div>
        </motion.div>

        {/* Card 6: Connect • Collect • Control */}
        <motion.div
          className="group absolute bg-white box-border content-stretch cursor-pointer flex gap-[16px] h-[120px] items-center left-[644px] p-[16px] rounded-[12px] top-[371px] w-[400px]"
          custom={5}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={cardAnimation}
        >
          <div
            aria-hidden="true"
            className="absolute border-[#dddddd] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]"
          />
          <div
            className="aspect-[66/66] box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center overflow-clip px-[28px] py-[29px] relative rounded-[12px] shrink-0"
            style={{
              background:
                "linear-gradient(227deg, #85868B 21.48%, #444 76.42%)",
            }}
          >
            <div
              className="absolute inset-0 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div
              className="relative shrink-0 size-[30px] z-10"
              data-name="vuesax/linear/link"
            >
              <div
                className="absolute contents inset-0"
                data-name="vuesax/linear/link"
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <g id="link">
                    <path
                      d={svgPathsFeatures.p1bd44780}
                      id="Vector"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d={svgPathsFeatures.p11ecf400}
                      id="Vector_2"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <g id="Vector_3" opacity="0"></g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[22px] relative shrink-0 text-[#282828] text-[18px] text-nowrap whitespace-pre">
              Connect • Collect • Control
            </p>
            <p className="font-['Gilroy:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#8e8e8e] text-[15px] w-[min-content]">
              Connect devices, gather telemetry, and control machines from the
              edge platform.
            </p>
          </div>
        </motion.div>

        {/* Card 7: Closed-loop System */}
        <motion.div
          className="group absolute box-border content-stretch cursor-pointer flex flex-col gap-[12px] h-[198px] items-start justify-end left-[644px] overflow-clip p-[16px] rounded-[12px] top-[515px] w-[400px]"
          custom={6}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={cardAnimation}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[12px] grayscale group-hover:grayscale-0 transition-[filter] duration-500 ease-in-out"
          >
            <img
              alt=""
              className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full"
              src={imgFrame1171277142Features}
            />
            <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-75% to-[rgba(0,0,0,0.6)]" />
          </div>
          <div
            className="relative shrink-0 size-[30px]"
            data-name="vuesax/linear/grid-lock"
          >
            <div
              className="absolute contents inset-0"
              data-name="vuesax/linear/grid-lock"
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
              >
                <g id="grid-lock">
                  <g id="Group">
                    <path
                      d={svgPathsFeatures.p2c3f66b4}
                      id="Vector"
                      className="stroke-white group-hover:stroke-[#00FF84] transition-[stroke] duration-500 ease-in-out"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <g id="Group_2">
                      <path
                        d="M2.03 8.5H22"
                        id="Vector_2"
                        className="stroke-white group-hover:stroke-[#00FF84] transition-[stroke] duration-500 ease-in-out"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M2.03 15.5H12"
                        id="Vector_3"
                        className="stroke-white group-hover:stroke-[#00FF84] transition-[stroke] duration-500 ease-in-out"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </g>
                    <g id="Group_3">
                      <path
                        d="M8.51001 21.99V2.01001"
                        id="Vector_4"
                        className="stroke-white group-hover:stroke-[#00FF84] transition-[stroke] duration-500 ease-in-out"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M15.51 11.99V2.01001"
                        id="Vector_5"
                        className="stroke-white group-hover:stroke-[#00FF84] transition-[stroke] duration-500 ease-in-out"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </g>
                  </g>
                  <g id="Group_4">
                    <path
                      d={svgPathsFeatures.p3fbc6340}
                      id="Vector_6"
                      className="stroke-white group-hover:stroke-[#00FF84] transition-[stroke] duration-500 ease-in-out"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d={svgPathsFeatures.p2f453700}
                      id="Vector_7"
                      className="stroke-white group-hover:stroke-[#00FF84] transition-[stroke] duration-500 ease-in-out"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </g>
                  <g id="Vector_8" opacity="0"></g>
                </g>
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[18px] text-white w-full">
              Closed-loop System
            </p>
          </div>
        </motion.div>

        {/* Card 8: Operator Dashboard */}
        <motion.div
          className="group absolute box-border content-stretch cursor-pointer flex flex-col gap-[12px] h-[364px] items-start justify-end left-[1068px] overflow-clip p-[16px] rounded-[12px] top-[127px] w-[264px]"
          custom={7}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={cardAnimation}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[12px] grayscale group-hover:grayscale-0 transition-[filter] duration-500 ease-in-out"
          >
            <img
              alt=""
              className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full"
              src={imgFrame1171277145Features}
            />
            <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-75% to-[rgba(0,0,0,0.6)]" />
          </div>
          <div
            className="relative shrink-0 size-[30px]"
            data-name="vuesax/linear/3d-square"
          >
            <div
              className="absolute contents inset-0"
              data-name="vuesax/linear/3d-square"
            >
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
              >
                <g id="3d-square">
                  <path
                    d={svgPathsFeatures.pcd9f0c0}
                    id="Vector"
                    className="stroke-white group-hover:stroke-[#00FF84] transition-[stroke] duration-500 ease-in-out"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                  <g id="Group">
                    <g id="Group_2">
                      <path
                        d={svgPathsFeatures.p219db680}
                        id="Vector_2"
                        className="stroke-white group-hover:stroke-[#00FF84] transition-[stroke] duration-500 ease-in-out"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12 17.77V12.32"
                        id="Vector_3"
                        className="stroke-white group-hover:stroke-[#00FF84] transition-[stroke] duration-500 ease-in-out"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </g>
                    <path
                      d={svgPathsFeatures.p26c92500}
                      id="Vector_4"
                      className="stroke-white group-hover:stroke-[#00FF84] transition-[stroke] duration-500 ease-in-out"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </g>
                  <g id="Vector_5" opacity="0"></g>
                </g>
              </svg>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[18px] text-white w-full">
              Operator Dashboard
            </p>
          </div>
        </motion.div>

        {/* Card 9: Store & Forward */}
        <motion.div
          className="group absolute bg-white box-border content-stretch cursor-pointer flex flex-col gap-[12px] h-[198px] items-start left-[1068px] p-[16px] rounded-[12px] top-[515px] w-[264px]"
          custom={8}
          initial="hidden"
          whileInView="visible"
          exit="exit"
          viewport={{ once: false, amount: 0.3 }}
          variants={cardAnimation}
        >
          <div
            aria-hidden="true"
            className="absolute border-[#dddddd] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]"
          />
          <div
            className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[28px] py-[29px] relative rounded-[12px] shrink-0 size-[66px]"
            style={{
              background:
                "linear-gradient(227deg, #85868B 21.48%, #444 76.42%)",
            }}
          >
            <div
              className="absolute inset-0 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div
              className="relative shrink-0 size-[30px] z-10"
              data-name="vuesax/linear/driver"
            >
              <div
                className="absolute contents inset-0"
                data-name="vuesax/linear/driver"
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 24 24"
                >
                  <g id="driver">
                    <path
                      d={svgPathsFeatures.p3589d200}
                      id="Vector"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d={svgPathsFeatures.p8084070}
                      id="Vector_2"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6 5V7"
                      id="Vector_3"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M10 5V7"
                      id="Vector_4"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M6 17V19"
                      id="Vector_5"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M10 17V19"
                      id="Vector_6"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M14 6H18"
                      id="Vector_7"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M14 18H18"
                      id="Vector_8"
                      stroke="white"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                    <g id="Vector_9" opacity="0"></g>
                  </g>
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[22px] relative shrink-0 text-[#282828] text-[18px] text-nowrap whitespace-pre">{`Store & Forward`}</p>
            <p className="font-['Gilroy:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#8e8e8e] text-[15px] w-[min-content]">
              Local buffering prevents data loss and ensures delivery after
              reconnection.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function HardwareSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  const hardwareData = [
    {
      title: "Industrial Display/HMI Panel",
      image: img,
      features: [
        "High-resolution touchscreen interface for intuitive operator control and real-time monitoring.",
        "Ruggedized design with IP65 rating protects against dust, water, and harsh industrial environments.",
        "Multi-protocol support enables seamless integration with PLCs, SCADA systems, and industrial networks.",
      ],
    },
    {
      title: "CNC/VMC",
      image: img1,
      features: [
        "High-precision machining capabilities with advanced motion control for complex manufacturing operations.",
        "Multi-axis configuration supports diverse cutting operations with exceptional accuracy and repeatability.",
        "Integrated tool management system optimizes production efficiency and reduces setup time.",
      ],
    },
    {
      title: "8/16 GB RAM",
      image: img1,
      features: [
        "High-speed performance for smooth multitasking across demanding applications.",
        "Energy-efficient design delivers reliable, high-speed performance with minimal power consumption across workloads.",
        "Low-latency data access ensures faster load times and system responsiveness.",
      ],
    },
    {
      title: "Digital Counter/Display Unit",
      image: img2,
      features: [
        "Large LED display provides clear visibility of count values in any lighting condition.",
        "Programmable presets and alarms enable automated process control and quality assurance.",
        "Universal input compatibility supports various sensor types for versatile counting applications.",
      ],
    },
    {
      title: "Industrial Sensors",
      image: img,
      features: [
        "Precision sensing technology for accurate measurement in harsh environments.",
        "Wide range of sensor types supporting temperature, pressure, and proximity detection.",
        "Industrial-grade construction ensures long-term reliability and minimal maintenance.",
      ],
    },
    {
      title: "Motor Controllers",
      image: img2,
      features: [
        "Advanced motor control algorithms optimize performance and energy efficiency.",
        "Real-time feedback systems ensure precise speed and torque management.",
        "Integrated safety features protect equipment and prevent operational hazards.",
      ],
    },
    {
      title: "Data Acquisition Systems",
      image: img1,
      features: [
        "Multi-channel data collection supports comprehensive system monitoring.",
        "High-resolution analog-to-digital conversion ensures measurement accuracy.",
        "Flexible configuration options adapt to diverse industrial requirements.",
      ],
    },
    {
      title: "Power Supply Units",
      image: img,
      features: [
        "Regulated power output maintains stable voltage across varying loads.",
        "Built-in protection circuits safeguard connected equipment from power surges.",
        "Compact design optimizes space utilization in control panels.",
      ],
    },
  ];

  // Auto-slide functionality when section is visible
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hardwareData.length);
      setHasAnimated(false);
    }, 5000);

    return () => clearInterval(interval);
  }, [isInView, hardwareData.length]);

  // Trigger animation when slide changes
  useEffect(() => {
    if (isInView) {
      setTimeout(() => setHasAnimated(true), 100);
    }
  }, [currentSlide, isInView]);

  const currentHardware = hardwareData[currentSlide];

  return (
    <motion.div
      className="bg-white relative shrink-0 w-[1512px] h-[720px]"
      data-name="Hardware features"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      onViewportEnter={() => {
        setIsInView(true);
        setHasAnimated(false);
        setTimeout(() => setHasAnimated(true), 100);
      }}
      onViewportLeave={() => setIsInView(false)}
      variants={fadeIn}
    >
      {/* Header */}
      <motion.div
        className="absolute content-stretch flex gap-[32px] items-start justify-center left-[581px] top-[50px]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="h-[84px] relative shrink-0 w-[78px]">
          <div className="absolute inset-[-21.43%_-25.64%_-26.19%_-25.64%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 118 124"
            >
              <g filter="url(#filter0_di_2021_278)" id="Group 73">
                <path
                  clipRule="evenodd"
                  d={svgPathsHardware.p27690cf0}
                  fill="#02F1DF"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d={svgPathsHardware.pf045400}
                  fill="#58B9C1"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d={svgPathsHardware.pbc8b500}
                  fill="#009EE3"
                  fillRule="evenodd"
                />
                <path
                  clipRule="evenodd"
                  d={svgPathsHardware.p200b900}
                  fill="#0031A6"
                  fillRule="evenodd"
                />
              </g>
              <defs>
                <filter
                  colorInterpolationFilters="sRGB"
                  filterUnits="userSpaceOnUse"
                  height="124"
                  id="filter0_di_2021_278"
                  width="118"
                  x="8.34465e-07"
                  y="-2.81901e-10"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="10" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                  />
                  <feBlend
                    in2="BackgroundImageFix"
                    mode="normal"
                    result="effect1_dropShadow_2021_278"
                  />
                  <feBlend
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2021_278"
                    mode="normal"
                    result="shape"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    result="hardAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feComposite
                    in2="hardAlpha"
                    k2="-1"
                    k3="1"
                    operator="arithmetic"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0"
                  />
                  <feBlend
                    in2="shape"
                    mode="normal"
                    result="effect2_innerShadow_2021_278"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <p className="font-['Gilroy:Semibold',sans-serif] leading-[42px] not-italic relative shrink-0 text-[#0098d4] text-[33px] w-[240px]">
          Edge Hardware Highlights
        </p>
      </motion.div>

      {/* Main Content Container */}
      <div className="absolute left-[49.7px] top-[75.89px] w-[1412px] h-[590px]">
        {/* Background Box for Image */}
        <motion.div
          className="absolute left-[130px] top-[118px] rounded-[16px] size-[386px] bg-gradient-to-br from-[#E8F4F8] to-[#F0F9FB] z-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Hardware Image - Rotated */}
        <motion.div
          key={`image-${currentSlide}`}
          className="absolute left-[80px] top-[150px] w-[524.757px] h-[370.991px] z-1"
          style={{ transformOrigin: "center" }}
          initial={{ opacity: 0, scale: 0.8, rotate: 328 }}
          animate={
            hasAnimated
              ? { opacity: 1, scale: 1, rotate: 328 }
              : { opacity: 0, scale: 0.8, rotate: 328 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-full h-full overflow-hidden pointer-events-none">
            <img
              alt={currentHardware.title}
              className="absolute h-[107.89%] left-[-19.7%] max-w-none top-[-7.89%] w-[139.86%]"
              src={currentHardware.image}
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.p
          key={`title-${currentSlide}`}
          className="absolute font-['Gilroy:Bold',sans-serif] font-bold leading-[24px] left-[426px] not-italic text-[#282828] text-[20px] text-center top-[408px] whitespace-pre z-20 w-[180px]"
          initial={{ opacity: 0, y: 10 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          {currentHardware.title}
        </motion.p>

        {/* Feature Texts */}
        <motion.p
          key={`feature1-${currentSlide}`}
          className="absolute font-['Gilroy:Medium',sans-serif] leading-[23px] left-[910px] not-italic text-[#636363] text-[18px] top-[136px] w-[350px] z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          {currentHardware.features[0]}
        </motion.p>
        <motion.p
          key={`feature2-${currentSlide}`}
          className="absolute font-['Gilroy:Medium',sans-serif] leading-[23px] left-[824px] not-italic text-[#636363] text-[18px] top-[295px] w-[458px] z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
        >
          {currentHardware.features[1]}
        </motion.p>
        <motion.p
          key={`feature3-${currentSlide}`}
          className="absolute font-['Gilroy:Medium',sans-serif] leading-[23px] left-[968px] not-italic text-[#636363] text-[18px] top-[439px] w-[314px] z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
        >
          {currentHardware.features[2]}
        </motion.p>

        {/* Connector Line 1 - Top */}
        <div className="absolute h-[115px] left-[452px] top-[144px] w-[430px] z-20">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 431 116"
          >
            <motion.path
              key={`line1-${currentSlide}`}
              d={svgPathsHardware.p2b8a9a00}
              stroke="#069235"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            />
          </svg>
        </div>

        {/* Green Dot 1 */}
        <motion.div
          key={`dot1-${currentSlide}`}
          className="absolute left-[882px] size-[16px] top-[136px] z-20"
          initial={{ scale: 0 }}
          animate={hasAnimated ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: 1.2, ease: "backOut" }}
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 16 16"
          >
            <circle
              cx="8"
              cy="8"
              fill="#069235"
              r="7"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        {/* Connector Line 2 - Middle */}
        <div className="absolute h-[53px] left-[348px] top-[250px] w-[448.003px] z-20">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 449 54"
          >
            <motion.path
              key={`line2-${currentSlide}`}
              d={svgPathsHardware.p197cc800}
              stroke="#069235"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.8, delay: 0.65, ease: "easeOut" }}
            />
          </svg>
        </div>

        {/* Green Dot 2 */}
        <motion.div
          key={`dot2-${currentSlide}`}
          className="absolute left-[796px] size-[16px] top-[295px] z-20"
          initial={{ scale: 0 }}
          animate={hasAnimated ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: 1.35, ease: "backOut" }}
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 16 16"
          >
            <circle
              cx="8.00003"
              cy="8.00003"
              fill="#069235"
              r="7.00003"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </motion.div>

        {/* Connector Line 3 - Bottom */}
        <div className="absolute h-[40px] left-[268px] top-[407px] w-[672.005px] z-20">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 673 41"
          >
            <motion.path
              key={`line3-${currentSlide}`}
              d={svgPathsHardware.p33762600}
              stroke="#069235"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={hasAnimated ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            />
          </svg>
        </div>

        {/* Green Dot 3 */}
        <motion.div
          key={`dot3-${currentSlide}`}
          className="absolute left-[940px] size-[16px] top-[439px] z-20"
          initial={{ scale: 0 }}
          animate={hasAnimated ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.3, delay: 1.5, ease: "backOut" }}
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 16 16"
          >
            <circle
              cx="8.00003"
              cy="8.00003"
              fill="#069235"
              r="7.00003"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      </div>

      {/* Pagination Dots */}
      <div className="absolute h-[14px] left-[652px] top-[644px] w-[208px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 208 14"
        >
          <g id="Frame 1171277137">
            {hardwareData.map((_, index) => (
              <motion.circle
                key={index}
                cx={25 + index * 22}
                cy="7"
                fill={index === currentSlide ? "#07AF40" : "#DFDFDF"}
                r={index === currentSlide ? 7 : 5}
                onClick={() => {
                  setCurrentSlide(index);
                  setHasAnimated(false);
                  setTimeout(() => setHasAnimated(true), 100);
                }}
                className="cursor-pointer"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </g>
        </svg>
      </div>
    </motion.div>
  );
}

export default function App() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative size-full"
      data-name="Eagle"
    >
      <HeroSection />
      {/* <Features />
      <HardwareSlider />
      <CapabilitiesSection />
      <BenefitsSection /> */}
    </div>
  );
}
