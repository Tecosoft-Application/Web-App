"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import svgPathsHardware from "../../imports/svg-pycttavgg8";

// Image paths from public folder

const img = "/assets/platform/eagle/hardware/display.png";
const img1 = "/assets/platform/eagle/hardware/wifi.png";
const img2 = "/assets/platform/eagle/hardware/digital.png";
const img3 = "/assets/platform/eagle/hardware/inputs.png";
const img4 = "/assets/platform/eagle/hardware/rs232.png";
const img5 = "/assets/platform/eagle/hardware/rest-api.png";
const img6 = "/assets/platform/eagle/hardware/secure.png";

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
      title: '10" Touch Display',
      image: img,
      features: [
        "Sleek 10″ monitor designed for tight spaces, offering flexible mounting options and easy portability.",
        "Delivers full HD visuals with rich colors, sharp contrast, and wide viewing angles for clear, vibrant displays.",
        "Equipped with HDMI, VGA, and USB inputs, ensuring smooth compatibility across various modern devices.",
      ],
    },

    {
      title: "Wi‑Fi/Ethernet/GSM",
      image: img1,
      features: [
        "High-speed wired connectivity ensures stable data transfer for critical operations.",
        "Seamless wireless performance enables flexible device connections and smooth communication across dynamic environments.",
        "Wide network coverage enables secure, consistent remote connectivity.",
      ],
    },
    {
      title: "Digital I/O",
      image: img2,
      features: [
        "Enables seamless communication between sensors and devices for real-time signal input and output control.",
        "Supports multiple digital standards, ensuring smooth integration with PLCs, controllers, and automation systems",
        "Delivers precise signal detection and transmission for consistent, low-latency industrial operations.",
      ],
    },
    {
      title: "Analog Inputs",
      image: img3,
      features: [
        "Measures continuous voltage or current inputs with high precision for detailed real-time data monitoring.",
        "Supports multiple voltage and current levels, ensuring compatibility with diverse industrial sensors and devices.",
        "Delivers smooth, noise-free readings for consistent and reliable analog data processing in any environment.",
      ],
    },
    {
      title: "RS485 / RS232",
      image: img4,
      features: [
        "Ensures stable, long-distance serial data transfer between devices in industrial and automation networks.",
        "RS485 allows multiple nodes on a single bus, enabling efficient and scalable system communication.",
        "Compatible with various serial protocols, offering seamless integration with legacy and modern equipment.",
      ],
    },
    {
      title: "REST APIs",
      image: img5,
      features: [
        "Connects systems effortlessly, enabling smooth data exchange across web, cloud, and mobile applications.",
        "Built on stateless design principles for fast, secure, and easily scalable system communication.",
        "Uses standard HTTP methods and JSON formatting, making integration quick, consistent, and easy to maintain.",
      ],
    },
    {
      title: "Secure Edge",
      image: img6,
      features: [
        "Implements industrial-grade encryption to secure every data transaction and prevent unauthorized access.",
        "Protects hardware and software layers against breaches, ensuring consistent and trusted system performance.",
        "Validates and monitors data flow in real time to maintain accuracy, reliability, and operational confidence.",
      ],
    },
  ];

  // Auto-slide functionality when section is visible
  useEffect(() => {
    if (!isInView) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % hardwareData.length);
      setHasAnimated(false);
    }, 3000);

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
      setCurrentSlide(
        (prev) => (prev - 1 + hardwareData.length) % hardwareData.length
      );
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
        className="lg:absolute relative content-stretch flex gap-[16px] sm:gap-[20px] lg:gap-[24px] xl:gap-[32px] items-center justify-center lg:left-[38.4%] lg:top-[6.94%] max-lg:mb-[32px] sm:max-lg:mb-[36px] md:max-lg:mb-[40px] px-4 sm:px-0"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="h-[50px] sm:h-[56px] md:h-[60px] lg:h-[70px] xl:h-[84px] relative shrink-0 w-[46px] sm:w-[52px] md:w-[56px] lg:w-[65px] xl:w-[78px]">
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
        <p className="font-semibold leading-[36px] xl:leading-[42px] not-italic relative shrink-0 text-[#0098d4] text-[28px] xl:text-[33px] w-[200px] xl:w-[240px]">
          Edge Hardware Highlights
        </p>
      </motion.div>

      {/* Mobile Content - Visible only on mobile */}
      <div className="lg:hidden flex flex-col items-center px-4 sm:px-6 space-y-6 relative">
        {/* Navigation Arrows for Mobile */}
        <div className=" hidden absolute left-0 right-0 top-[140px] sm:top-[160px]  justify-between px-2 z-10 pointer-events-none">
          <motion.button
            onClick={() => {
              setCurrentSlide(
                (prev) => (prev - 1 + hardwareData.length) % hardwareData.length
              );
              setHasAnimated(false);
              setTimeout(() => setHasAnimated(true), 100);
            }}
            className="pointer-events-auto bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg hover:bg-white transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label="Previous slide"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="sm:w-6 sm:h-6"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#0098d4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
          <motion.button
            onClick={() => {
              setCurrentSlide((prev) => (prev + 1) % hardwareData.length);
              setHasAnimated(false);
              setTimeout(() => setHasAnimated(true), 100);
            }}
            className="pointer-events-auto bg-white/90 backdrop-blur-sm rounded-full p-2 sm:p-3 shadow-lg hover:bg-white transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label="Next slide"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="sm:w-6 sm:h-6"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#0098d4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </div>

        {/* Hardware Image for Mobile */}
        <motion.div
          key={`mobile-image-${currentSlide}`}
          className="relative w-full max-w-[400px] h-[280px] sm:h-[320px] md:h-[360px] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            hasAnimated ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#E8F4F8] to-[#F0F9FB] rounded-[16px]" />
          <div className="relative w-[80%] h-[80%] sm:w-[85%] sm:h-[85%] flex items-center justify-center">
            <Image
              alt={currentHardware.title}
              fill
              className="object-contain"
              src={currentHardware.image}
              sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 324px"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <div className="flex items-center gap-2">
          <motion.h3
            key={`mobile-title-${currentSlide}`}
            className="font-bold  text-[20px] sm:text-[22px] text-[#282828] text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            {currentHardware.title}
          </motion.h3>
        </div>

        {/* Progress Indicator */}
        <div className="  hidden items-center gap-2 text-[14px] sm:text-[15px] text-[#8e8e8e] font-medium">
          <span>{currentSlide + 1}</span>
          <span>/</span>
          <span>{hardwareData.length}</span>
        </div>

        {/* Features for Mobile */}
        <div className="w-full max-w-[500px] space-y-3 sm:space-y-4 pb-4">
          {currentHardware.features.map((feature, index) => (
            <motion.div
              key={`mobile-feature-${currentSlide}-${index}`}
              className="flex items-start gap-3 p-3 sm:p-4 bg-white rounded-[12px] shadow-sm border border-gray-100"
              initial={{ opacity: 0, x: -20 }}
              animate={
                hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
              }
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.15,
                ease: "easeOut",
              }}
            >
              <div className="flex-shrink-0 mt-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    fill="#069235"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <p className="font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px] text-[#636363]">
                {feature}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Swipe Hint - Animated */}
        <motion.div
          className="flex items-center gap-2 text-[12px] sm:text-[13px] text-[#b0b0b0] font-normal pb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: 2, repeatDelay: 2 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 19L8 12L15 5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>Swipe to explore more</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 5L16 12L9 19"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
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
          className="absolute left-[9.2%] top-[20%] w-[27.35%] h-[65.42%] z-10 flex items-center justify-center"
          style={{ transformOrigin: "center" }}
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={
            hasAnimated
              ? { opacity: 1, scale: 1, rotate: 0 }
              : { opacity: 0, scale: 0.8, rotate: 0 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-[85%] h-[85%] flex items-center justify-center pointer-events-none">
            <Image
              alt={currentHardware.title}
              fill
              className="object-contain"
              src={currentHardware.image}
              sizes="27vw"
              style={{ mixBlendMode: "multiply" }}
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.p
          key={`title-${currentSlide}`}
          className="lg:absolute relative font-bold leading-[22px] xl:leading-[24px] max-lg:leading-[22px] lg:left-[15.18%] not-italic text-[#282828] text-[18px] xl:text-[20px] max-lg:text-[18px] text-center lg:top-[90.15%] max-lg:whitespace-normal whitespace-pre z-20 w-[150px] xl:w-[180px] max-lg:w-full max-lg:mb-[20px]"
          initial={{ opacity: 0, y: 10 }}
          animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          {currentHardware.title}
        </motion.p>

        {/* Feature Texts */}
        <motion.p
          key={`feature1-${currentSlide}`}
          className="absolute font-medium leading-[20px] xl:leading-[23px] left-[64.45%] not-italic text-[#636363] text-[16px] xl:text-[18px] top-[23.05%] w-[24.79%] z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          {currentHardware.features[0]}
        </motion.p>
        <motion.p
          key={`feature2-${currentSlide}`}
          className="absolute font-medium leading-[20px] xl:leading-[23px] left-[58.36%] not-italic text-[#636363] text-[16px] xl:text-[18px] top-[50%] w-[32.44%] z-20"
          initial={{ opacity: 0, x: 20 }}
          animate={hasAnimated ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
          transition={{ duration: 0.6, delay: 0.75, ease: "easeOut" }}
        >
          {currentHardware.features[1]}
        </motion.p>
        <motion.p
          key={`feature3-${currentSlide}`}
          className="absolute font-medium leading-[20px] xl:leading-[23px] left-[68.56%] not-italic text-[#636363] text-[16px] xl:text-[18px] top-[74.41%] w-[22.24%] z-20"
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
