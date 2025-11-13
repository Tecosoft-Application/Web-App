"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

import svgPathsHardware from "../../imports/svg-pycttavgg8";

// Image paths from public folder

const img = "/assets/platform/eagle/banner-full.png";
const img1 = "/assets/platform/eagle/img1.png";
const img2 = "/assets/platform/eagle/img2.png";

const fadeIn: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

function HardwareSection() {
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
      className="bg-white relative shrink-0 w-full lg:w-[1512px] h-auto lg:h-[720px] py-[60px] lg:py-0"
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
        className="lg:absolute relative content-stretch flex gap-[32px] max-lg:gap-[16px] items-center max-lg:items-center justify-center lg:left-[581px] lg:top-[50px] max-lg:mb-[40px]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="h-[84px] max-lg:h-[60px] relative shrink-0 w-[78px] max-lg:w-[56px]">
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
          className="lg:absolute relative font-['Gilroy:Bold',sans-serif] font-bold leading-[24px] max-lg:leading-[22px] lg:left-[426px] not-italic text-[#282828] text-[20px] max-lg:text-[18px] text-center lg:top-[408px] max-lg:whitespace-normal whitespace-pre z-20 w-[180px] max-lg:w-full max-lg:mb-[20px]"
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
        <div className="absolute h-[53px] left-[348px] top-[250px] w-[448.003px] z-20 max-lg:hidden">
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
      <div className="lg:absolute relative h-[14px] lg:left-[652px] lg:top-[644px] w-[208px] max-lg:mx-auto max-lg:mt-[20px]">
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

export default HardwareSection;
