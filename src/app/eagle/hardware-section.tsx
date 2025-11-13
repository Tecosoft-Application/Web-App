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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

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

  // Swipe handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      // Swipe left - next slide
      setCurrentSlide((prev) => (prev + 1) % hardwareData.length);
      setHasAnimated(false);
      setTimeout(() => setHasAnimated(true), 100);
    }

    if (isRightSwipe) {
      // Swipe right - previous slide
      setCurrentSlide((prev) => (prev - 1 + hardwareData.length) % hardwareData.length);
      setHasAnimated(false);
      setTimeout(() => setHasAnimated(true), 100);
    }

    // Reset touch values
    setTouchStart(0);
    setTouchEnd(0);
  };

  const currentHardware = hardwareData[currentSlide];

  return (
    <motion.div
      className="bg-white relative shrink-0 w-full max-w-[95vw] lg:max-w-[1512px] xl:max-w-[1400px] 2xl:max-w-[1600px] mx-auto h-auto lg:h-[600px] xl:h-[680px] 2xl:h-[720px] py-[60px] lg:py-0 transition-all duration-300"
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
        className="lg:absolute relative content-stretch flex gap-[24px] xl:gap-[32px] max-lg:gap-[16px] items-center max-lg:items-center justify-center lg:left-[38.4%] lg:top-[6.94%] max-lg:mb-[40px]"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="h-[70px] xl:h-[84px] max-lg:h-[60px] relative shrink-0 w-[65px] xl:w-[78px] max-lg:w-[56px]">
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
        <p className="font-['Gilroy:Semibold',sans-serif] leading-[36px] xl:leading-[42px] not-italic relative shrink-0 text-[#0098d4] text-[28px] xl:text-[33px] w-[200px] xl:w-[240px]">
          Edge Hardware Highlights
        </p>
      </motion.div>

      {/* Mobile Content - Visible only on mobile */}
      <div
        className="lg:hidden flex flex-col items-center px-4 space-y-6 relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation Arrows for Mobile */}
        <div className="absolute left-0 right-0 top-[140px] flex justify-between px-2 z-10 pointer-events-none">
          <motion.button
            onClick={() => {
              setCurrentSlide((prev) => (prev - 1 + hardwareData.length) % hardwareData.length);
              setHasAnimated(false);
              setTimeout(() => setHasAnimated(true), 100);
            }}
            className="pointer-events-auto bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label="Previous slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="#0098d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
          <motion.button
            onClick={() => {
              setCurrentSlide((prev) => (prev + 1) % hardwareData.length);
              setHasAnimated(false);
              setTimeout(() => setHasAnimated(true), 100);
            }}
            className="pointer-events-auto bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label="Next slide"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="#0098d4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.button>
        </div>

        {/* Hardware Image for Mobile */}
        <motion.div
          key={`mobile-image-${currentSlide}`}
          className="relative w-full max-w-[400px] h-[280px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4F8] to-[#F0F9FB] rounded-[16px]" />
          <div className="relative w-[90%] h-[90%]">
            <img
              alt={currentHardware.title}
              className="w-full h-full object-contain"
              src={currentHardware.image}
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </motion.div>

        {/* Slide Counter for Mobile */}
        <div className="flex items-center gap-2">
          <motion.h3
            key={`mobile-title-${currentSlide}`}
            className="font-['Gilroy:Bold',sans-serif] font-bold text-[20px] text-[#282828] text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {currentHardware.title}
          </motion.h3>
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center gap-2 text-[14px] text-[#8e8e8e] font-['Gilroy:Medium',sans-serif]">
          <span>{currentSlide + 1}</span>
          <span>/</span>
          <span>{hardwareData.length}</span>
        </div>

        {/* Features for Mobile */}
        <div className="w-full max-w-[500px] space-y-4 pb-4">
          {currentHardware.features.map((feature, index) => (
            <motion.div
              key={`mobile-feature-${currentSlide}-${index}`}
              className="flex items-start gap-3 p-4 bg-white rounded-[12px] shadow-sm border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.15, ease: "easeOut" }}
            >
              <div className="flex-shrink-0 mt-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="7" fill="#069235" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              <p className="font-['Gilroy:Medium',sans-serif] text-[15px] leading-[22px] text-[#636363]">
                {feature}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Swipe Hint - Animated */}
        <motion.div
          className="flex items-center gap-2 text-[13px] text-[#b0b0b0] font-['Gilroy:Regular',sans-serif] pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: 2, repeatDelay: 2 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Swipe to explore more</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>
      </div>

      {/* Desktop Content Container - Hidden on mobile */}
      <div className="max-lg:hidden absolute left-[3.3%] top-[10.54%] w-[93.4%] h-[81.94%]">
        {/* Background Box for Image */}
        <motion.div
          className="absolute left-[9.2%] top-[20%] rounded-[12px] xl:rounded-[16px] w-[27.35%] h-[65.42%] bg-gradient-to-br from-[#E8F4F8] to-[#F0F9FB] z-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Hardware Image - Rotated */}
        <motion.div
          key={`image-${currentSlide}`}
          className="absolute left-[5.67%] top-[25.42%] w-[37.17%] h-[62.88%] z-1"
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
          className="lg:absolute relative font-['Gilroy:Bold',sans-serif] font-bold leading-[22px] xl:leading-[24px] max-lg:leading-[22px] lg:left-[30.18%] not-italic text-[#282828] text-[18px] xl:text-[20px] max-lg:text-[18px] text-center lg:top-[69.15%] max-lg:whitespace-normal whitespace-pre z-20 w-[150px] xl:w-[180px] max-lg:w-full max-lg:mb-[20px]"
          initial={{ opacity: 0, y: 10 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          {currentHardware.title}
        </motion.p>

        {/* Feature Texts */}
        <motion.p
          key={`feature1-${currentSlide}`}
          className="absolute font-['Gilroy:Medium',sans-serif] leading-[20px] xl:leading-[23px] left-[64.45%] not-italic text-[#636363] text-[16px] xl:text-[18px] top-[23.05%] w-[24.79%] z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          {currentHardware.features[0]}
        </motion.p>
        <motion.p
          key={`feature2-${currentSlide}`}
          className="absolute font-['Gilroy:Medium',sans-serif] leading-[20px] xl:leading-[23px] left-[58.36%] not-italic text-[#636363] text-[16px] xl:text-[18px] top-[50%] w-[32.44%] z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
        >
          {currentHardware.features[1]}
        </motion.p>
        <motion.p
          key={`feature3-${currentSlide}`}
          className="absolute font-['Gilroy:Medium',sans-serif] leading-[20px] xl:leading-[23px] left-[68.56%] not-italic text-[#636363] text-[16px] xl:text-[18px] top-[74.41%] w-[22.24%] z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
        >
          {currentHardware.features[2]}
        </motion.p>

        {/* Connector Line 1 - Top */}
        <div className="absolute h-[19.49%] left-[32.01%] top-[24.41%] w-[30.45%] z-20">
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
          className="absolute left-[62.47%] w-[1.13%] h-[2.71%] top-[23.05%] z-20"
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
        <div className="absolute h-[8.98%] left-[24.65%] top-[42.37%] w-[31.72%] z-20 max-lg:hidden">
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
          className="absolute left-[56.37%] w-[1.13%] h-[2.71%] top-[50%] z-20"
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
        <div className="absolute h-[6.78%] left-[18.98%] top-[68.98%] w-[47.59%] z-20">
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
          className="absolute left-[66.57%] w-[1.13%] h-[2.71%] top-[74.41%] z-20"
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
      <div className="lg:absolute relative h-[12px] xl:h-[14px] lg:left-[43.12%] lg:top-[89.44%] w-[180px] xl:w-[208px] max-lg:mx-auto max-lg:mt-[20px]">
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
                className="cursor-pointer hover:opacity-80 transition-opacity"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            ))}
          </g>
        </svg>
      </div>
    </motion.div>
  );
}

export default HardwareSection;
