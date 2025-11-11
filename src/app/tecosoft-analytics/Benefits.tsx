"use client";
import { useRef, useState, useEffect } from "react";
import svgPaths from "../../imports/svg-omq1srbluw";
import { motion, useScroll, useTransform } from "framer-motion";

function Background() {
  return (
    <div
      className="absolute inset-[37.87%_21.39%_5.44%_21.39%]"
      data-name="Background"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 206 250"
      >
        <g id="Background">
          <path
            d={svgPaths.p11a8900}
            fill="var(--fill-0, white)"
            id="Path 1"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p19fbdd00}
            fill="url(#paint0_linear_21_1295)"
            fillRule="evenodd"
            id="Path 2"
          />
          <path
            d={svgPaths.p3433ac00}
            fill="var(--fill-0, white)"
            id="Path 3"
          />
          <path
            d={svgPaths.pb533f80}
            fill="url(#paint1_linear_21_1295)"
            id="Path 4"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_21_1295"
            x1="204.983"
            x2="-57.0601"
            y1="1.41148"
            y2="114.082"
          >
            <stop offset="0.0644535" stopColor="#00BCEF" />
            <stop offset="0.95133" stopColor="#002363" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_21_1295"
            x1="188.391"
            x2="-37.607"
            y1="4.47398"
            y2="101.859"
          >
            <stop offset="0.0644535" stopColor="#00BCEF" />
            <stop offset="0.95133" stopColor="#002363" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.87],
    [13, 1],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0.75, 0.87],
    [0, 1],
  );

  return (
    <motion.div
      ref={ref}
      className="absolute h-[441px] left-[180px] overflow-clip rounded-[12px] top-[70px] w-[360px] z-30"
      style={{
        scale,
        background:
          "linear-gradient(242.47deg, #00BCEF 6.45%, #002363 95.13%)",
      }}
    >
      <motion.p
        style={{ opacity }}
        className="absolute font-['Gilroy:Semibold',sans-serif] leading-[32px] left-[34px] not-italic text-[26px] text-nowrap text-white top-[34px] whitespace-pre"
      >
        Connected Factory
      </motion.p>
      <motion.p
        style={{ opacity }}
        className="absolute font-['Gilroy:Medium',sans-serif] leading-[23px] left-[calc(50%-146px)] not-italic text-[#e4e4e4] text-[17px] top-[81px] w-[292px]"
      >
        Reduce total cost of ownership with a single integrated
        platform.
      </motion.p>
      <motion.div style={{ opacity }}>
        <Background />
      </motion.div>
    </motion.div>
  );
}

function Background1() {
  return (
    <div
      className="absolute inset-[40.59%_14.44%_5.44%_14.44%]"
      data-name="Background"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 256 238"
      >
        <g id="Background">
          <path
            d={svgPaths.p584b8f0}
            fill="var(--fill-0, #181818)"
            id="Path 1"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p25d57880}
            fill="var(--fill-0, #FEFEFE)"
            fillRule="evenodd"
            id="Path 2"
          />
          <path
            d={svgPaths.p2f217000}
            fill="var(--fill-0, #181818)"
            id="Path 3"
          />
          <path
            d={svgPaths.p58eb000}
            fill="var(--fill-0, #FEFEFE)"
            id="Path 4"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0.75, 0.87],
    [700, 0],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0.75, 0.87],
    [0, 1],
  );

  useEffect(() => {
    const unsubscribe = opacity.on("change", (latest :any) => {
      if (latest >= 0.99 && !isAnimationComplete) {
        setIsAnimationComplete(true);
      }
    });
    return () => unsubscribe();
  }, [opacity, isAnimationComplete]);

  const handleMouseEnter = () => {
    if (isAnimationComplete) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className={`absolute h-[441px] left-[576px] overflow-clip rounded-[12px] top-[70px] w-[360px] z-10 transition-all duration-300 ${isAnimationComplete ? 'cursor-pointer' : ''}`}
      style={{ 
        x, 
        opacity,
        background: isHovered ? "linear-gradient(242.47deg, #00BCEF 6.45%, #002363 95.13%)" : "white"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className={`absolute font-['Gilroy:Semibold',sans-serif] leading-[32px] left-[34px] not-italic text-[26px] text-nowrap top-[35px] whitespace-pre transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#282828]'}`}>
        AI-Enabled Operations
      </p>
      <p className={`absolute font-['Gilroy:Medium',sans-serif] leading-[23px] left-[calc(50%-146px)] not-italic text-[17px] top-[81px] w-[292px] transition-colors duration-300 ${isHovered ? 'text-[#e4e4e4]' : 'text-[#8e8e8e]'}`}>
        Faster decisions with live data at the edge - eliminate
        manual collection.
      </p>
      <Background1 />
    </motion.div>
  );
}

function Background2() {
  return (
    <div
      className="absolute inset-[40.14%_14.44%_5.44%_14.44%]"
      data-name="Background"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 256 240"
      >
        <g id="Background">
          <path
            d={svgPaths.pd105800}
            fill="var(--fill-0, #181818)"
            id="Path 1"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p267f56a0}
            fill="var(--fill-0, #FEFEFE)"
            fillRule="evenodd"
            id="Path 2"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p1969fc00}
            fill="var(--fill-0, #181818)"
            fillRule="evenodd"
            id="Path 3"
          />
          <path
            d={svgPaths.p3f11ba00}
            fill="var(--fill-0, #FEFEFE)"
            id="Path 4"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0.75, 0.87],
    [700, 0],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0.75, 0.87],
    [0, 1],
  );

  useEffect(() => {
    const unsubscribe = opacity.on("change", (latest:any) => {
      if (latest >= 0.99 && !isAnimationComplete) {
        setIsAnimationComplete(true);
      }
    });
    return () => unsubscribe();
  }, [opacity, isAnimationComplete]);

  const handleMouseEnter = () => {
    if (isAnimationComplete) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      className={`absolute h-[441px] left-[972px] overflow-clip rounded-[12px] top-[70px] w-[360px] z-10 transition-all duration-300 ${isAnimationComplete ? 'cursor-pointer' : ''}`}
      style={{ 
        x, 
        opacity,
        background: isHovered ? "linear-gradient(242.47deg, #00BCEF 6.45%, #002363 95.13%)" : "white"
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p className={`absolute font-['Gilroy:Semibold',sans-serif] leading-[32px] left-[34px] not-italic text-[26px] text-nowrap top-[35px] whitespace-pre transition-colors duration-300 ${isHovered ? 'text-white' : 'text-[#282828]'}`}>
        Digital Twin Experience
      </p>
      <p className={`absolute font-['Gilroy:Medium',sans-serif] leading-[23px] left-[calc(50%-146px)] not-italic text-[17px] top-[81px] w-[292px] transition-colors duration-300 ${isHovered ? 'text-[#e4e4e4]' : 'text-[#8e8e8e]'}`}>
        Less downtime with reliable capture and
        store-and-forward resilience.
      </p>
      <Background2 />
    </motion.div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center not-italic relative shrink-0 w-[700px]">
      <p
        className="bg-clip-text font-['Gilroy:Semibold',sans-serif] leading-[28px] relative shrink-0 text-[22px] text-nowrap whitespace-pre text-transparent"
        style={{
          background:
            "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Solutions for the Next-Gen Industry
      </p>
      <p className="font-['Gilroy:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#636363] text-[16px] w-[min-content]">
        Tecosoft Analytics enables connected factories with
        AI-driven operations and digital twins for smarter
        automation.
      </p>
    </div>
  );
}

function Frame() {
  return (
    <button className="bg-white box-border content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative rounded-[60px] shrink-0 w-[120px] cursor-pointer hover:bg-gray-50 transition-colors">
      <div
        aria-hidden="true"
        className="absolute border border-[#d2d2d2] border-solid inset-0 pointer-events-none rounded-[60px]"
      />
      <p className="font-['Gilroy:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#282828] text-[15px] text-nowrap whitespace-pre">
        Contact us
      </p>
    </button>
  );
}

function Frame4() {
  return (
    <div className="absolute bg-white box-border content-stretch flex items-center justify-between left-[180px] overflow-clip p-[32px] rounded-[20px] top-[545px] w-[1152px]">
      <Frame5 />
      <Frame />
    </div>
  );
}

export default function Benefits() {
  return (
    <section
      className="bg-[#e8f9ff] block relative size-full overflow-hidden"
      data-name="Benefits"
    >
      <Frame1 />
      <Frame2 />
      <Frame3 />
      <Frame4 />
    </section>
  );
}