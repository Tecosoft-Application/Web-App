"use client";
import { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import svgPaths from "../../imports/svg-uk9fn56ilf";

const imgRectangle = "/assets/platform/eagle/bg-green.png";
const img = "/assets/platform/eagle/banner-full.png";
const imgStaticHeroMobile = "/assets/platform/eagle/5.svg";

// Animation variants
const fadeInUp: any = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const staggerContainer: any = {
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

const useHasMounted = () => {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  return hasMounted;
};

const useIsMobile = () => {
  const hasMounted = useHasMounted();
  const [isMobile, setIsMobile] = useState(false);

  useIsomorphicLayoutEffect(() => {
    if (!hasMounted) return;
    const checkIsMobile = () => setIsMobile(window.innerWidth < 1024);
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);
    return () => window.removeEventListener("resize", checkIsMobile);
  }, [hasMounted]);

  return hasMounted ? isMobile : false; // Return a consistent value on the server
};

// Custom hook to get responsive values based on screen width (1024px - 1800px)
const useResponsiveValues = () => {
  const hasMounted = useHasMounted();
  const [scale, setScale] = useState(1);

  useIsomorphicLayoutEffect(() => {
    if (!hasMounted) return;

    const calculateScale = () => {
      const width = window.innerWidth;
      // Reference width is 1536px (where the design works perfectly)
      const referenceWidth = 1536;

      // For screens between 1024px and 1800px, calculate a scale factor
      if (width >= 1024 && width <= 1800) {
        // Calculate scale relative to reference width
        // At 1536px: scale = 1.0 (perfect)
        // At 1024px: scale = 0.667
        // At 1800px: scale = 1.172
        const scaleFactor = width / referenceWidth;
        setScale(scaleFactor);
      } else if (width < 1024) {
        setScale(1024 / referenceWidth);
      } else {
        setScale(1800 / referenceWidth);
      }
    };

    calculateScale();
    window.addEventListener("resize", calculateScale);
    return () => window.removeEventListener("resize", calculateScale);
  }, [hasMounted]);

  return hasMounted ? scale : 1;
};

function Frame26() {
  const responsiveScale = useResponsiveValues();
  const isMobile = useIsMobile();

  const badgePaddingX = !isMobile ? 12 * responsiveScale : undefined;
  const badgePaddingY = !isMobile ? 6 * responsiveScale : undefined;
  const badgeFontSize = !isMobile ? 13.5 * responsiveScale : undefined;
  const badgeLineHeight = !isMobile ? 18 * responsiveScale : undefined;
  const badgeGap = !isMobile ? 10 * responsiveScale : undefined;

  return (
    <motion.div
      className="bg-white box-border content-stretch flex items-center justify-center relative rounded-[60px] shrink-0 transition-all duration-300 ease-out
        lg:px-0 lg:py-0
        max-lg:px-[12px] max-lg:py-[5px]
        max-md:px-[11px] max-md:py-[4px]
        max-sm:px-[10px] max-sm:py-[4px]
        max-[375px]:px-[9px] max-[375px]:py-[3px]
        max-[320px]:px-[8px] max-[320px]:py-[3px]"
      style={{
        paddingLeft: badgePaddingX,
        paddingRight: badgePaddingX,
        paddingTop: badgePaddingY,
        paddingBottom: badgePaddingY,
        gap: badgeGap,
      }}
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
      <p
        className="font-['Gilroy:Semibold',sans-serif] not-italic relative shrink-0 text-[#636363] text-nowrap whitespace-pre transition-all duration-300 ease-out
          max-lg:text-[12px] max-lg:leading-[16px]
          max-md:text-[11px] max-md:leading-[15px]
          max-sm:text-[10.5px] max-sm:leading-[14px]
          max-[375px]:text-[10px] max-[375px]:leading-[13px]
          max-[320px]:text-[9px] max-[320px]:leading-[12px]"
        style={{
          fontSize: badgeFontSize,
          lineHeight: `${badgeLineHeight}px`,
        }}
      >
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
  const responsiveScale = useResponsiveValues();
  const isMobile = useIsMobile();

  const buttonPaddingX = !isMobile ? 14 * responsiveScale : undefined;
  const buttonPaddingY = !isMobile ? 10 * responsiveScale : undefined;
  const buttonFontSize = !isMobile ? 15 * responsiveScale : undefined;
  const buttonLineHeight = !isMobile ? 20 * responsiveScale : undefined;
  const buttonGap = !isMobile ? 8 * responsiveScale : undefined;

  return (
    <motion.div
      className="bg-[#07af40] box-border content-stretch flex items-center justify-center relative shrink-0 cursor-pointer transition-all duration-300 ease-out rounded-sm
        lg:px-0 lg:py-0
        max-lg:px-[14px] max-lg:py-[9px]
        max-md:px-[13px] max-md:py-[8px]
        max-sm:px-[12px] max-sm:py-[7px] max-sm:w-full
        max-[375px]:px-[11px] max-[375px]:py-[6px]
        max-[320px]:px-[10px] max-[320px]:py-[5px]"
      style={{
        paddingLeft: buttonPaddingX,
        paddingRight: buttonPaddingX,
        paddingTop: buttonPaddingY,
        paddingBottom: buttonPaddingY,
        gap: buttonGap,
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
      whileTap={{ scale: 0.95, transition: { duration: 0.15 } }}
    >
      <p
        className="font-['Gilroy:Semibold',sans-serif] not-italic relative shrink-0 text-nowrap text-white whitespace-pre transition-all duration-300 ease-out
          max-lg:text-[14px] max-lg:leading-[18px]
          max-md:text-[13px] max-md:leading-[17px]
          max-sm:text-[12px] max-sm:leading-[16px]
          max-[375px]:text-[11.5px] max-[375px]:leading-[15px]
          max-[320px]:text-[11px] max-[320px]:leading-[14px]"
        style={{
          fontSize: buttonFontSize,
          lineHeight: `${buttonLineHeight}px`,
        }}
      >
        Book a Demo
      </p>
      <div
        className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]
          max-sm:h-[12px] max-sm:w-[12px]
          max-[375px]:h-[11px] max-[375px]:w-[11px]
          max-[320px]:h-[10px] max-[320px]:w-[10px]"
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
  const responsiveScale = useResponsiveValues();
  const isMobile = useIsMobile();

  const buttonPaddingX = !isMobile ? 14 * responsiveScale : undefined;
  const buttonPaddingY = !isMobile ? 10 * responsiveScale : undefined;
  const buttonFontSize = !isMobile ? 15 * responsiveScale : undefined;
  const buttonLineHeight = !isMobile ? 20 * responsiveScale : undefined;
  const buttonGap = !isMobile ? 8 * responsiveScale : undefined;
  const buttonWidth = !isMobile ? 144 * responsiveScale : undefined;

  return (
    <motion.div
      className="box-border content-stretch flex items-center justify-center relative shrink-0 cursor-pointer transition-all duration-300 ease-out rounded-sm
        lg:px-0 lg:py-0 lg:w-auto
        max-lg:px-[14px] max-lg:py-[9px] max-lg:w-auto
        max-md:px-[13px] max-md:py-[8px]
        max-sm:px-[12px] max-sm:py-[7px] max-sm:w-full
        max-[375px]:px-[11px] max-[375px]:py-[6px]
        max-[320px]:px-[10px] max-[320px]:py-[5px]"
      style={{
        paddingLeft: buttonPaddingX,
        paddingRight: buttonPaddingX,
        paddingTop: buttonPaddingY,
        paddingBottom: buttonPaddingY,
        gap: buttonGap,
        width: buttonWidth,
      }}
      whileHover={{
        scale: 1.05,
        borderColor: "#07af40",
        transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
      }}
      whileTap={{ scale: 0.95, transition: { duration: 0.15 } }}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-sm"
      />
      <p
        className="font-['Gilroy:Semibold',sans-serif] not-italic relative shrink-0 text-[#4f4f4f] text-nowrap whitespace-pre transition-all duration-300 ease-out
          max-lg:text-[14px] max-lg:leading-[18px]
          max-md:text-[13px] max-md:leading-[17px]
          max-sm:text-[12px] max-sm:leading-[16px]
          max-[375px]:text-[11.5px] max-[375px]:leading-[15px]
          max-[320px]:text-[11px] max-[320px]:leading-[14px]"
        style={{
          fontSize: buttonFontSize,
          lineHeight: `${buttonLineHeight}px`,
        }}
      >
        See Capabilities
      </p>
    </motion.div>
  );
}

function Frame25() {
  const responsiveScale = useResponsiveValues();
  const isMobile = useIsMobile();
  const buttonGroupGap = !isMobile ? 16 * responsiveScale : undefined;

  return (
    <motion.div
      className="content-stretch flex items-center relative shrink-0 transition-all duration-300 ease-out
        lg:gap-0
        max-lg:gap-[12px]
        max-md:gap-[10px]
        max-sm:gap-[8px] max-sm:flex-col max-sm:w-full
        max-[375px]:gap-[7px]
        max-[320px]:gap-[6px]"
      style={{
        gap: buttonGroupGap,
      }}
      variants={fadeInUp}
    >
      <Frame3 />
      <Frame24 />
    </motion.div>
  );
}

function Frame40() {
  const responsiveScale = useResponsiveValues();
  const isMobile = useIsMobile();

  // Base values at 1536px reference width
  const baseLeft = 281;
  const baseWidth = 950;
  const baseTop = 140;
  const baseTitleSize = 60;
  const baseTitleLineHeight = 68;
  const baseDescSize = 16;
  const baseDescLineHeight = 18;
  const baseDescWidth = 820;
  const baseGap = 16;

  // Scaled values (only for desktop >= 1024px)
  const scaledLeft = !isMobile ? baseLeft * responsiveScale : undefined;
  const scaledWidth = !isMobile ? baseWidth * responsiveScale : undefined;
  const scaledTop = !isMobile ? baseTop * responsiveScale : undefined;
  const scaledTitleSize = !isMobile
    ? baseTitleSize * responsiveScale
    : undefined;
  const scaledTitleLineHeight = !isMobile
    ? baseTitleLineHeight * responsiveScale
    : undefined;
  const scaledDescSize = !isMobile ? baseDescSize * responsiveScale : undefined;
  const scaledDescLineHeight = !isMobile
    ? baseDescLineHeight * responsiveScale
    : undefined;
  const scaledDescWidth = !isMobile
    ? baseDescWidth * responsiveScale
    : undefined;
  const scaledGap = !isMobile ? baseGap * responsiveScale : undefined;

  return (
    <motion.div
      className="absolute content-stretch flex flex-col items-center transition-all duration-300 ease-out
        max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:top-[52px] max-lg:w-[92%] max-lg:max-w-[700px] max-lg:gap-[12px] max-lg:px-5
        max-md:top-[47px] max-md:gap-[10px] max-md:px-4
        max-sm:top-[42px] max-sm:gap-[8px] max-sm:px-3
        max-[375px]:top-[37px] max-[375px]:gap-[6px] max-[375px]:px-2
        max-[320px]:top-[35px]"
      style={
        !isMobile
          ? {
              left: scaledLeft,
              top: scaledTop,
              width: scaledWidth,
              gap: scaledGap,
            }
          : undefined
      }
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <Frame26 />
      <motion.p
        className="font-['Gilroy:Semibold',sans-serif] not-italic relative shrink-0 text-[#282828] text-center transition-all duration-300 ease-out
          lg:w-[min-content] lg:min-w-full
          max-lg:w-full max-lg:text-[clamp(32px,4.5vw,42px)] max-lg:leading-[clamp(40px,5.5vw,52px)] max-lg:tracking-[-0.2px]
          max-md:text-[clamp(26px,4.8vw,34px)] max-md:leading-[clamp(34px,6vw,42px)]
          max-sm:text-[clamp(22px,5.2vw,28px)] max-sm:leading-[clamp(28px,6.5vw,36px)]
          max-[375px]:text-[21px] max-[375px]:leading-[27px]
          max-[320px]:text-[19px] max-[320px]:leading-[25px]"
        style={
          !isMobile
            ? {
                fontSize: scaledTitleSize,
                lineHeight: `${scaledTitleLineHeight}px`,
                letterSpacing: -0.9 * responsiveScale,
              }
            : undefined
        }
        variants={fadeInUp}
      >
        <span className="text-[#07af40]">EAGLE:</span>
        <span>{` The Edge Platform Powering Every Connected Factory`}</span>
      </motion.p>
      <motion.p
        className="font-['Gilroy:Medium',sans-serif] not-italic opacity-75 relative shrink-0 text-[#636363] text-center transition-all duration-300 ease-out
          max-lg:w-full max-lg:text-[14px] max-lg:leading-[20px]
          max-md:text-[13px] max-md:leading-[19px]
          max-sm:text-[12px] max-sm:leading-[17px]
          max-[375px]:text-[11.5px] max-[375px]:leading-[16px]
          max-[320px]:text-[11px] max-[320px]:leading-[15px]"
        style={
          !isMobile
            ? {
                fontSize: scaledDescSize,
                lineHeight: `${scaledDescLineHeight}px`,
                width: scaledDescWidth,
              }
            : undefined
        }
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
  const responsiveScale = useResponsiveValues();
  const isMobile = useIsMobile();

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

  // Responsive positions based on screen size
  // Base values at 1536px reference width (where the design works perfectly)
  const centerX = 500;
  const leftEndX = 80;
  const rightEndX = 922;
  const startY = 240;

  // Scale positions based on screen width
  const scaledCenterX = centerX * responsiveScale;
  const scaledLeftEndX = leftEndX * responsiveScale;
  const scaledRightEndX = rightEndX * responsiveScale;
  const scaledStartY = startY * responsiveScale;

  // Left side products - move from center to left (all at same time)
  const leftProduct1X = useSpring(
    useTransform(
      scrollYProgress,
      [animationStart, animationEnd],
      [scaledCenterX, scaledLeftEndX]
    ),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const leftProduct1Y = useSpring(
    useTransform(
      scrollYProgress,
      [animationStart, animationEnd],
      [scaledStartY, 30 * responsiveScale]
    ),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const leftProduct1Opacity = useSpring(
    useTransform(scrollYProgress, [opacityStart, opacityEnd], [0, 1]),
    { stiffness: 120, damping: 35 }
  );

  const leftProduct2X = useSpring(
    useTransform(
      scrollYProgress,
      [animationStart, animationEnd],
      [scaledCenterX, scaledLeftEndX]
    ),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const leftProduct2Y = useSpring(
    useTransform(
      scrollYProgress,
      [animationStart, animationEnd],
      [scaledStartY, 224 * responsiveScale]
    ),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const leftProduct2Opacity = useSpring(
    useTransform(scrollYProgress, [opacityStart, opacityEnd], [0, 1]),
    { stiffness: 120, damping: 35 }
  );

  const leftProduct3X = useSpring(
    useTransform(
      scrollYProgress,
      [animationStart, animationEnd],
      [scaledCenterX, scaledLeftEndX]
    ),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const leftProduct3Y = useSpring(
    useTransform(
      scrollYProgress,
      [animationStart, animationEnd],
      [scaledStartY, 426 * responsiveScale]
    ),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const leftProduct3Opacity = useSpring(
    useTransform(scrollYProgress, [opacityStart, opacityEnd], [0, 1]),
    { stiffness: 120, damping: 35 }
  );

  // Right side products - move from center to right (all at same time)
  const rightProduct1X = useSpring(
    useTransform(
      scrollYProgress,
      [animationStart, animationEnd],
      [scaledCenterX, scaledRightEndX]
    ),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const rightProduct1Y = useSpring(
    useTransform(
      scrollYProgress,
      [animationStart, animationEnd],
      [scaledStartY, 30 * responsiveScale]
    ),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const rightProduct1Opacity = useSpring(
    useTransform(scrollYProgress, [opacityStart, opacityEnd], [0, 1]),
    { stiffness: 120, damping: 35 }
  );

  const rightProduct2X = useSpring(
    useTransform(
      scrollYProgress,
      [animationStart, animationEnd],
      [scaledCenterX, scaledRightEndX]
    ),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const rightProduct2Y = useSpring(
    useTransform(
      scrollYProgress,
      [animationStart, animationEnd],
      [scaledStartY, 228 * responsiveScale]
    ),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const rightProduct2Opacity = useSpring(
    useTransform(scrollYProgress, [opacityStart, opacityEnd], [0, 1]),
    { stiffness: 120, damping: 35 }
  );

  const rightProduct3X = useSpring(
    useTransform(
      scrollYProgress,
      [animationStart, animationEnd],
      [scaledCenterX, scaledRightEndX]
    ),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const rightProduct3Y = useSpring(
    useTransform(
      scrollYProgress,
      [animationStart, animationEnd],
      [scaledStartY, 426 * responsiveScale]
    ),
    { stiffness: 120, damping: 35, mass: 0.6 }
  );
  const rightProduct3Opacity = useSpring(
    useTransform(scrollYProgress, [opacityStart, opacityEnd], [0, 1]),
    { stiffness: 120, damping: 35 }
  );

  // Labels opacity only (positions are fixed but scaled)
  const labelOpacity = useSpring(
    useTransform(scrollYProgress, [labelOpacityStart, labelOpacityEnd], [0, 1]),
    { stiffness: 120, damping: 35 }
  );

  // Responsive label positions
  const rightLabelX = 997 * responsiveScale;
  const leftLabelX = 155 * responsiveScale;
  const labelY1 = 184 * responsiveScale;
  const labelY2 = 378 * responsiveScale;
  const labelY3 = 580 * responsiveScale;
  const centerLabelX = 576.5 * responsiveScale;
  const centerLabelY = 494.88 * responsiveScale;

  // Responsive container dimensions
  const containerWidth = 1152 * responsiveScale;
  const containerHeight = 630 * responsiveScale;

  // Responsive product sizes
  const productSize = 150 * responsiveScale;
  const centerProductWidth = 526 * responsiveScale;
  const centerProductHeight = 391 * responsiveScale;
  const centerProductLeft = 313 * responsiveScale;
  const centerProductTop = 103.5 * responsiveScale;

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
      {/* <div
        className="absolute left-0 top-0 pointer-events-none transition-all duration-300 ease-out
          max-lg:w-full max-lg:h-[520px]
          max-md:h-[470px]
          max-sm:h-[420px]
          max-[375px]:h-[380px]
          max-[320px]:h-[360px]"
        style={
          !isMobile
            ? {
                height: 680 * responsiveScale,
                width: 1512 * responsiveScale,
              }
            : undefined
        }
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
      </div> */}
      <div
        className="absolute left-0 pointer-events-none max-lg:hidden transition-all duration-300 ease-out"
        style={
          !isMobile
            ? {
                height: 649.752 * responsiveScale,
                top: 70.25 * responsiveScale,
                width: 1512.25 * responsiveScale,
              }
            : undefined
        }
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
      <div
        className="relative transition-all duration-300 ease-out
          max-lg:h-[310px] max-lg:mt-[85px]
          max-md:h-[285px] max-md:mt-[75px]
          max-sm:h-[265px] max-sm:mt-[65px]
          max-[375px]:h-[245px] max-[375px]:mt-[55px]
          max-[320px]:h-[235px] max-[320px]:mt-[50px]"
        style={
          !isMobile
            ? {
                height: 420 * responsiveScale,
              }
            : undefined
        }
      >
        <Frame40 />
      </div>

      {/* Sticky product section - pins while animation plays */}
      <div
        className="h-[1800px] relative w-full
        lg:h-[1800px]
        max-lg:h-auto max-lg:pb-[50px]
        max-md:pb-[40px]
        max-sm:pb-[30px]
        max-[375px]:pb-[25px]
        max-[320px]:pb-[20px]"
      >
        <div
          className="sticky top-0 h-screen w-full flex items-center justify-center
          lg:sticky lg:top-0 lg:h-screen
          max-lg:static max-lg:h-auto max-lg:pt-[100px]
          max-md:pt-[80px]
          max-sm:pt-[60px]
          max-[375px]:pt-[50px]
          max-[320px]:pt-[40px]"
        >
          {/* Static SVG Image for Mobile */}
          <div
            className="hidden max-lg:flex max-lg:justify-center w-full
            max-lg:px-5
            max-md:px-4
            max-sm:px-3
            max-[375px]:px-2"
          >
            <motion.img
              src={imgStaticHeroMobile}
              alt="Eagle Platform Connected Factory"
              className="w-full h-auto
                max-lg:max-w-[600px]
                max-md:max-w-[520px]
                max-sm:max-w-[420px]
                max-[375px]:max-w-[360px]
                max-[320px]:max-w-[300px]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          </div>

          {/* Animated Product Section for Desktop */}
          <motion.div
            ref={productContainerRef}
            className="relative max-lg:hidden transition-all duration-300 ease-out"
            style={{
              width: containerWidth,
              height: containerHeight,
            }}
            data-name="1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out"
              style={{
                width: containerWidth,
                height: containerHeight,
              }}
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
              className="absolute rounded-[12px] z-10 max-lg:!left-[calc(100%-40px)] max-lg:!top-[20px] max-lg:!opacity-100 max-lg:w-[100px] max-lg:h-[100px] max-lg:translate-x-[-100%] transition-all duration-300 ease-out"
              style={{
                left: rightProduct1X,
                top: rightProduct1Y,
                opacity: rightProduct1Opacity,
                width: productSize,
                height: productSize,
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
              className="absolute font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic text-[#007aaa] text-center text-nowrap translate-x-[-50%] whitespace-pre z-10 max-lg:!left-[calc(100%-90px)] max-lg:!top-[125px] max-lg:!opacity-100 max-lg:text-[12px] transition-all duration-300 ease-out"
              style={{
                left: rightLabelX,
                top: labelY1,
                opacity: labelOpacity,
                fontSize: 16 * responsiveScale,
              }}
            >
              Manual Machine
            </motion.p>

            <motion.div
              className="absolute rounded-[12px] z-10 max-lg:!left-[calc(100%-40px)] max-lg:!top-[50%] max-lg:!opacity-100 max-lg:w-[100px] max-lg:h-[100px] max-lg:translate-x-[-100%] max-lg:translate-y-[-50%] transition-all duration-300 ease-out"
              style={{
                left: rightProduct2X,
                top: rightProduct2Y,
                opacity: rightProduct2Opacity,
                width: productSize,
                height: productSize,
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
              className="absolute font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic text-[#007aaa] text-center text-nowrap translate-x-[-50%] whitespace-pre z-10 max-lg:!left-[calc(100%-50px)] max-lg:!top-[50%] max-lg:!opacity-100 max-lg:text-[12px] transition-all duration-300 ease-out"
              style={{
                left: rightLabelX,
                top: labelY2,
                opacity: labelOpacity,
                fontSize: 16 * responsiveScale,
              }}
            >
              Press Break
            </motion.p>

            <motion.div
              className="absolute rounded-[12px] z-10 max-lg:!left-[calc(100%-40px)] max-lg:!bottom-[20px] max-lg:!top-auto max-lg:!opacity-100 max-lg:w-[100px] max-lg:h-[100px] max-lg:translate-x-[-100%] transition-all duration-300 ease-out"
              style={{
                left: rightProduct3X,
                top: rightProduct3Y,
                opacity: rightProduct3Opacity,
                width: productSize,
                height: productSize,
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
              className="absolute font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic text-[#007aaa] text-center text-nowrap translate-x-[-50%] whitespace-pre z-10 max-lg:!left-[calc(100%-50px)] max-lg:!bottom-[-5px] max-lg:!top-auto max-lg:!opacity-100 max-lg:text-[12px] transition-all duration-300 ease-out"
              style={{
                left: rightLabelX,
                top: labelY3,
                opacity: labelOpacity,
                fontSize: 16 * responsiveScale,
              }}
            >
              Laser Cutting
            </motion.p>

            {/* Left side products with parallax */}
            <motion.div
              className="absolute rounded-[12px] z-10 max-lg:!left-[40px] max-lg:!top-[20px] max-lg:!opacity-100 max-lg:w-[100px] max-lg:h-[100px] transition-all duration-300 ease-out"
              style={{
                left: leftProduct1X,
                top: leftProduct1Y,
                opacity: leftProduct1Opacity,
                width: productSize,
                height: productSize,
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
              className="absolute font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic text-[#007aaa] text-center text-nowrap translate-x-[-50%] whitespace-pre z-10 max-lg:!left-[90px] max-lg:!top-[125px] max-lg:!opacity-100 max-lg:text-[12px] transition-all duration-300 ease-out"
              style={{
                left: leftLabelX,
                top: labelY1,
                opacity: labelOpacity,
                fontSize: 16 * responsiveScale,
              }}
            >
              CNC Machine
            </motion.p>

            <motion.div
              className="absolute rounded-[12px] z-10 max-lg:!left-[40px] max-lg:!top-[50%] max-lg:!opacity-100 max-lg:w-[100px] max-lg:h-[100px] max-lg:translate-y-[-50%] transition-all duration-300 ease-out"
              style={{
                left: leftProduct2X,
                top: leftProduct2Y,
                opacity: leftProduct2Opacity,
                width: productSize,
                height: productSize,
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
              className="absolute font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic text-[#007aaa] text-center text-nowrap translate-x-[-50%] whitespace-pre z-10 max-lg:!left-[50px] max-lg:!top-[50%] max-lg:!opacity-100 max-lg:text-[12px] transition-all duration-300 ease-out"
              style={{
                left: leftLabelX,
                top: labelY2,
                opacity: labelOpacity,
                fontSize: 16 * responsiveScale,
              }}
            >
              VMC Machine
            </motion.p>

            <motion.div
              className="absolute rounded-[12px] z-10 max-lg:!left-[40px] max-lg:!bottom-[20px] max-lg:!top-auto max-lg:!opacity-100 max-lg:w-[100px] max-lg:h-[100px] transition-all duration-300 ease-out"
              style={{
                left: leftProduct3X,
                top: leftProduct3Y,
                opacity: leftProduct3Opacity,
                width: productSize,
                height: productSize,
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
              className="absolute font-['Gilroy:Medium',sans-serif] leading-[20px] not-italic text-[#007aaa] text-center text-nowrap translate-x-[-50%] whitespace-pre z-10 max-lg:!left-[50px] max-lg:!bottom-[-5px] max-lg:!top-auto max-lg:!opacity-100 max-lg:text-[12px] transition-all duration-300 ease-out"
              style={{
                left: leftLabelX,
                top: labelY3,
                opacity: labelOpacity,
                fontSize: 16 * responsiveScale,
              }}
            >
              HMC Machine
            </motion.p>

            {/* Center product - always visible with subtle scale */}
            <motion.div
              className="absolute rounded-[16px] z-20 max-lg:!scale-100 max-lg:h-[280px] max-lg:w-[380px] max-lg:left-[50%] max-lg:top-[50%] max-lg:translate-x-[-50%] max-lg:translate-y-[-50%] transition-all duration-300 ease-out"
              style={{
                scale: centerScale,
                width: centerProductWidth,
                height: centerProductHeight,
                left: centerProductLeft,
                top: centerProductTop,
              }}
            >
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[16px]">
                <img
                  alt="Industrial Display HMI Panel"
                  className="absolute h-[182.85%] left-[-13.89%] max-w-none top-[-47.23%] w-[160.2%]"
                  src={img}
                />
              </div>
            </motion.div>
            <p
              className="absolute font-['Gilroy:Semibold',sans-serif] leading-[24px] not-italic text-[#007aaa] text-center text-nowrap translate-x-[-50%] whitespace-pre z-20 max-lg:left-[50%] max-lg:bottom-[-30px] max-lg:top-auto max-lg:text-[14px] transition-all duration-300 ease-out"
              style={{
                left: centerLabelX,
                top: centerLabelY,
                fontSize: 20 * responsiveScale,
              }}
            >
              Industrial Display/HMI Panel
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
