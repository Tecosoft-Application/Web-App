"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import svgPathsMain from "../../imports/svg-x0cup0okny";
import svgPaths1 from "../../imports/svg-7ik4vedwaz";
import svgPaths2 from "../../imports/svg-35jlzosdzv";
import svgPaths3 from "../../imports/svg-mj0ljhjbb1";
import svgPaths4 from "../../imports/svg-aalqly4fu";
import svgPaths5 from "../../imports/svg-7ntpg8ioqz";
import svgPaths6 from "../../imports/svg-ozwdohwk36";

const slides = [
  {
    id: 1,
    arcSvgPaths: svgPaths1, // Dollar → svg-7ik4vedwaz
    centerTitle: "Unified Platform Efficiency",
    centerTop: "350px",
    title1: "Unified Platform Efficiency",
    description1:
      "Connect all your machines, data, and teams within a single integrated system to create a seamless flow of information and eliminate fragmentation across operations.",
    title2: "Operational Efficiency",
    description2:
      "Simplify workflows, automate routine processes, and remove redundant systems to boost productivity and ensure smoother, more reliable performance across facilities.",
    arcPosition: "inset-[-0.63%_3.93%_61.94%_49.38%]",
    arcPath: "p27de4c80",
    arcWidth: "187",
    arcHeight: "155",
    arcViewBox: "0 0 187 155",
    icon: "dollar",
    iconPosition: { left: "452px", top: "237px" },
  },
  {
    id: 2,
    arcSvgPaths: svgPaths2, // Diagram → svg-35jlzosdzv
    centerTitle: "Actionable Performance Insights",
    centerTop: "350px",
    title1: "Real-Time Visibility",
    description1:
      "Track machine efficiency, performance deviations, and production losses instantly to identify bottlenecks before they escalate into costly issues and unplanned downtime.",
    title2: "Data-Driven Clarity",
    description2:
      "Gain clear, accurate insights into utilization, idle times, and operational trends, helping teams make smarter, faster, and more confident decisions every single day.",
    arcPosition: "inset-[22.32%_-0.63%_22.37%_74.46%]",
    arcPath: "p1cad49f0",
    arcWidth: "105",
    arcHeight: "222",
    arcViewBox: "0 0 105 222",
    icon: "diagram",
    iconPosition: { left: "528px", top: "369px" },
  },
  {
    id: 3,
    arcSvgPaths: svgPaths3, // Setting → svg-mj0ljhjbb1
    centerTitle: "Effortless Scalability",
    centerTop: "350px",
    title1: "Modular Expansion",
    description1:
      "Add new machines, stations, or entire plants without disrupting existing workflows, ensuring seamless integration, faster operational growth, and continuous system optimization across networks.",
    title2: "Centralized Control",
    description2:
      "Manage multiple facilities from a single dashboard, streamlining monitoring, updates, and analytics across all sites with enhanced real-time collaboration and unified data visibility.",
    arcPosition: "inset-[61.85%_3.85%_-0.63%_49.48%]",
    arcPath: "p6053880",
    arcWidth: "187",
    arcHeight: "156",
    arcViewBox: "0 0 187 156",
    icon: "setting",
    iconPosition: { left: "460px", top: "501px" },
  },
  {
    id: 4,
    arcSvgPaths: svgPaths4, // Search → svg-aalqly4fu
    centerTitle: "Flexible Deployment Options",
    centerTop: "350px",
    title1: "Cloud-Ready Integration",
    description1:
      "Deploy seamlessly in the cloud for remote accessibility, centralized monitoring, and effortless scalability—ideal for distributed operations, real-time analytics, and global visibility.",
    title2: "On-Premise Control",
    description2:
      "Maintain full data ownership and robust security with local deployment, perfect for industries needing strict compliance, faster response, and uninterrupted performance.",
    arcPosition: "inset-[61.94%_49.38%_-0.63%_3.93%]",
    arcPath: "p1638f300",
    arcWidth: "187",
    arcHeight: "155",
    arcViewBox: "0 0 187 155",
    icon: "search",
    iconPosition: { left: "274px", top: "501px" },
  },
  {
    id: 5,
    arcSvgPaths: svgPaths5, // Cloud → svg-7ntpg8ioqz
    centerTitle: "Continuous Uptime Assurance",
    centerTop: "350px",
    title1: "Reliable Data Capture",
    description1:
      "Ensure zero data loss with store-and-forward technology that securely captures machine data even during network disruptions, maintaining reliability and process continuity.",
    title2: "Store-and-Forward Technology",
    description2:
      "Reduce downtime by safeguarding data transmission between machines and servers, guaranteeing consistent performance and uninterrupted flow of critical production insights.",
    arcPosition: "inset-[21.85%_74.28%_22.84%_-0.63%]",
    arcPath: "p34980d80",
    arcWidth: "106",
    arcHeight: "222",
    arcViewBox: "0 0 106 222",
    icon: "cloud",
    iconPosition: { left: "208px", top: "369px" },
  },
  {
    id: 6,
    arcSvgPaths: svgPaths6, // Arrow → svg-ozwdohwk36
    centerTitle: "Real-Time Edge Intelligence",
    centerTop: "350px",
    title1: "Instant Insights",
    description1:
      "Get live, actionable data directly from your machines at the edge - enabling faster, smarter decisions and minimizing costly downtime caused by delayed reporting or human error.",
    title2: "Automation Advantage",
    description2:
      "Replace slow, manual data collection with intelligent, edge - based automation that ensures accuracy, consistency, and continuous real-time visibility across your entire production line.",
    arcPosition: "inset-[-0.63%_49.48%_61.85%_3.85%]",
    arcPath: "p149ea6f0",
    arcWidth: "187",
    arcHeight: "156",
    arcViewBox: "0 0 187 156",
    icon: "arrow",
    iconPosition: { left: "274px", top: "237px" },
  },
];

export default function BenefitsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slide: any = slides[currentSlide];

  return (
    <motion.div
      className="relative h-auto min-h-[650px] min-[630px]:min-h-[750px]  min-[1023px]:min-h-[800px] min-[1280px]:min-h-[650px]  w-full overflow-hidden py-8 md:py-8 lg:py-8 xl:py-0"
      style={{ backgroundColor: "rgba(232, 249, 255, 1)" }}
      data-name="Benefits"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div
        className="absolute h-full left-0 top-0 w-full"
        style={{ backgroundColor: "rgba(232, 249, 255, 1)" }}
        data-name="Union"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 1513 650"
        >
          <path
            d={svgPathsMain.p11d7b180}
            fill="var(--fill-0, white)"
            fillOpacity="0.8"
            id="Union"
          />
        </svg>
      </div>

      <motion.p
        className="absolute font-semibold leading-[24px] sm:leading-[32px] md:leading-[40px] lg:leading-[48px] left-[50%] not-italic text-[#181818] text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] text-center top-[15px] sm:top-[20px] md:top-[35px] lg:top-[50px] translate-x-[-50%] md:px-0 whitespace-normal lg:whitespace-nowrap max-w-[85%] sm:max-w-[80%] md:max-w-[85%] lg:max-w-none z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Smarter operations with connected machine insights.
      </motion.p>
      <motion.p
        className="absolute font-medium leading-[18px] sm:leading-[20px] md:leading-[21px] lg:leading-[22px] left-[50%] not-italic text-[#8e8e8e] text-[12px] sm:text-[13px] md:text-[15px] lg:text-[16px] text-center top-[105px] sm:top-[100px] md:top-[108px] lg:top-[114px] translate-x-[-50%] w-[90%] sm:w-[85%] md:w-[500px] lg:w-[450px] md:px-0 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Optimize operations with real-time machine insights to cut costs, boost
        uptime, and scale efficiently.
      </motion.p>

      {/* Left Side - Circle with Icons - Wrapper */}
      <motion.div
        id="pie_chart"
        className="absolute left-[23%] min-[400px]:left-[30%] translate-x-1/2 sm:left-[30%] sm:translate-x-[-50%] md:left-[30%] md:translate-x-[-50%] lg:left-[35%] lg:translate-x-[-50%] xl:left-[180px] xl:translate-x-0 top-[165px] sm:top-[170px] md:top-[185px] lg:top-[205px] scale-[0.5] sm:scale-[0.65] md:scale-[0.8] lg:scale-[0.9] xl:scale-100"
        initial={{ opacity: 0, scale: 0.8, x: -20 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Circle Background */}
        <div className="absolute left-0 size-[400px] top-[-20px]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 400 400"
          >
            <g
              filter={`url(#filter0_i_benefits_circle_${slide.id})`}
              id="Ellipse 15"
            >
              <path d={svgPathsMain.p42c4780} fill="var(--fill-0, #005B80)" />
            </g>
            <defs>
              <filter
                colorInterpolationFilters="sRGB"
                filterUnits="userSpaceOnUse"
                height="400"
                id={`filter0_i_benefits_circle_${slide.id}`}
                width="400"
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
                <feColorMatrix
                  in="SourceAlpha"
                  result="hardAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feMorphology
                  in="SourceAlpha"
                  operator="erode"
                  radius="1"
                  result={`effect1_innerShadow_benefits_circle_${slide.id}`}
                />
                <feOffset />
                <feGaussianBlur stdDeviation="10" />
                <feComposite
                  in2="hardAlpha"
                  k2="-1"
                  k3="1"
                  operator="arithmetic"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                />
                <feBlend
                  in2="shape"
                  mode="normal"
                  result={`effect1_innerShadow_benefits_circle_${slide.id}`}
                />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Center Text */}
        <AnimatePresence mode="wait">
          <motion.p
            key={`title-${slide.id}`}
            className="absolute font-semibold leading-[32px] left-[200px] not-italic text-[#069235] text-[24px] text-center top-[145px] translate-x-[-50%] w-[179px]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {slide.centerTitle}
          </motion.p>
        </AnimatePresence>

        {/* Arc */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`arc-${slide.id}`}
            className="absolute left-0 size-[400px] top-[-20px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className={`absolute ${slide.arcPosition}`}>
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox={slide.arcViewBox}
              >
                <g id="Ellipse 15">
                  <g filter={`url(#filter0_i_benefits_arc_${slide.id})`}>
                    <path
                      d={slide.arcSvgPaths[slide.arcPath]}
                      fill="var(--fill-0, #069235)"
                    />
                  </g>
                  <path
                    d={slide.arcSvgPaths[slide.arcPath]}
                    stroke="var(--stroke-0, white)"
                    strokeWidth="5"
                  />
                </g>
                <defs>
                  <filter
                    colorInterpolationFilters="sRGB"
                    filterUnits="userSpaceOnUse"
                    height={slide.arcHeight}
                    id={`filter0_i_benefits_arc_${slide.id}`}
                    width={slide.arcWidth}
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
                    <feColorMatrix
                      in="SourceAlpha"
                      result="hardAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    />
                    <feMorphology
                      in="SourceAlpha"
                      operator="erode"
                      radius="1"
                      result={`effect1_innerShadow_benefits_arc_${slide.id}`}
                    />
                    <feOffset />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite
                      in2="hardAlpha"
                      k2="-1"
                      k3="1"
                      operator="arithmetic"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.3 0"
                    />
                    <feBlend
                      in2="shape"
                      mode="normal"
                      result={`effect1_innerShadow_benefits_arc_${slide.id}`}
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Icons - Hoverable */}
        {/* Dollar Icon - Slide 1 (Position 1 - Top Right) */}
        <motion.button
          className=" absolute block cursor-pointer left-[252px] overflow-visible p-[20px] top-[12px]"
          data-name="vuesax/bold/dollar-square"
          onMouseEnter={() => setCurrentSlide(0)}
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div
            className="relative size-[26px]"
            data-name="vuesax/bold/dollar-square"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <g id="dollar-square">
                <path
                  d={svgPathsMain.p157c49c0}
                  fill="var(--fill-0, white)"
                  id="Vector"
                />
                <path
                  d={svgPathsMain.p13f4e700}
                  fill="var(--fill-0, white)"
                  id="Vector_2"
                />
                <path
                  d={svgPathsMain.p1bfc7c80}
                  fill="var(--fill-0, white)"
                  id="Vector_3"
                />
                <g id="Vector_4" opacity="0"></g>
              </g>
            </svg>
          </div>
        </motion.button>

        {/* Arrow Icon - Slide 6 (Position 6 - Top Left) */}
        <motion.button
          className="absolute cursor-pointer flex items-center justify-center left-[74px] p-[20px] top-[12px]"
          onMouseEnter={() => setCurrentSlide(5)}
          whileHover={{ scale: 1.15, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="flex-none scale-y-[-100%]">
            <div
              className="overflow-clip relative size-[26px]"
              data-name="square-arrow-up-left-sharp"
            >
              <div className="absolute inset-[10.417%]" data-name="elements">
                <div className="absolute inset-[-3.947%]">
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 21 21"
                  >
                    <g id="elements">
                      <path
                        d={svgPathsMain.p39b62240}
                        id="Vector"
                        stroke="var(--stroke-0, white)"
                        strokeWidth="1.5"
                      />
                      <path
                        d={svgPathsMain.p3f31f680}
                        id="Vector_2"
                        stroke="var(--stroke-0, white)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.button>

        {/* Cloud Icon - Slide 5 (Position 5 - Left Center) */}
        <motion.button
          className="absolute block cursor-pointer left-[8px] overflow-clip p-[20px] top-[144px]"
          data-name="cloud"
          onMouseEnter={() => setCurrentSlide(4)}
          whileHover={{ scale: 1.15, y: -3 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="relative size-[26px]" data-name="cloud-inner">
            <div
              className="absolute inset-[16.67%_8.33%_20.83%_8.33%]"
              data-name="elements"
            >
              <div className="absolute inset-[-5%_-3.75%]">
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 22 17"
                >
                  <g id="elements">
                    <path
                      d={svgPathsMain.p24d76d80}
                      id="Vector"
                      stroke="var(--stroke-0, white)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </motion.button>

        {/* Diagram Icon - Slide 2 (Position 2 - Right Center) */}
        <motion.button
          className="absolute block cursor-pointer left-[328px] overflow-visible p-[20px] top-[144px]"
          data-name="vuesax/linear/diagram"
          onMouseEnter={() => setCurrentSlide(1)}
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div
            className="relative size-[24px]"
            data-name="vuesax/linear/diagram"
          >
            <div className="absolute inset-[3.846%]" data-name="diagram">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 23 23"
              >
                <g id="diagram">
                  <path
                    d={svgPathsMain.p98fde00}
                    id="Vector"
                    stroke="var(--stroke-0, white)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <path
                    d={svgPathsMain.p21658480}
                    id="Vector_2"
                    stroke="var(--stroke-0, white)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  />
                  <g id="Vector_3" opacity="0"></g>
                </g>
              </svg>
            </div>
          </div>
        </motion.button>

        {/* Search Icon - Slide 4 (Position 4 - Bottom Left) */}
        <motion.button
          className="absolute block cursor-pointer left-[74px] overflow-visible p-[20px] top-[276px]"
          data-name="vuesax/linear/search-normal"
          onMouseEnter={() => setCurrentSlide(3)}
          whileHover={{ scale: 1.15, rotate: -5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div
            className="relative size-[26px]"
            data-name="vuesax/linear/search-normal"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <g id="search-normal">
                <path
                  d={svgPathsMain.p36d6e800}
                  id="Vector"
                  stroke="var(--stroke-0, white)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d={svgPathsMain.p3577ac20}
                  id="Vector_2"
                  stroke="var(--stroke-0, white)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </motion.button>

        {/* Setting Icon - Slide 3 (Position 3 - Bottom Right) */}
        <motion.button
          className="absolute block cursor-pointer left-[260px] overflow-visible p-[20px] top-[276px]"
          data-name="vuesax/linear/setting"
          onMouseEnter={() => setCurrentSlide(2)}
          whileHover={{ scale: 1.15, rotate: 90 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div
            className="relative size-[26px]"
            data-name="vuesax/linear/setting"
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <g id="setting">
                <path
                  d={svgPathsMain.p23bb5ff0}
                  id="Vector"
                  stroke="var(--stroke-0, white)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <path
                  d={svgPathsMain.p3cccb600}
                  id="Vector_2"
                  stroke="var(--stroke-0, white)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
                <g id="Vector_3" opacity="0"></g>
              </g>
            </svg>
          </div>
        </motion.button>
      </motion.div>

      {/* Right Side - Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`content-${slide.id}`}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="px-4 sm:px-6 md:px-0"
        >
          <motion.p
            className="absolute font-semibold leading-[20px] sm:leading-[22px] md:leading-[26px] lg:leading-[28px] xl:leading-[30px] left-[5%] sm:left-[50%] sm:translate-x-[-50%] md:left-[50%] md:translate-x-[-50%] lg:left-[50%] lg:translate-x-[-50%] xl:left-[50%] xl:translate-x-0 not-italic text-[#282828] text-center sm:text-center md:text-center lg:text-center xl:text-left text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] top-[385px] sm:top-[470px] md:top-[530px] lg:top-[560px] xl:top-[246px] w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[40%] z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {slide.title1}
          </motion.p>
          <motion.p
            className="absolute font-normal leading-[18px] sm:leading-[19px] md:leading-[21px] lg:leading-[24px] xl:leading-[26px] left-[5%] sm:left-[50%] sm:translate-x-[-50%] md:left-[50%] md:translate-x-[-50%] lg:left-[50%] lg:translate-x-[-50%] xl:left-[50%] xl:translate-x-0 not-italic text-[#777777] text-center sm:text-center md:text-center lg:text-center xl:text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] top-[407px] sm:top-[495px] md:top-[558px] lg:top-[590px] xl:top-[286px] w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[40%] z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {slide.description1}
          </motion.p>
          <motion.p
            className="absolute font-semibold leading-[20px] sm:leading-[22px] md:leading-[26px] lg:leading-[28px] xl:leading-[30px] left-[5%] sm:left-[50%] sm:translate-x-[-50%] md:left-[50%] md:translate-x-[-50%] lg:left-[50%] lg:translate-x-[-50%] xl:left-[50%] xl:translate-x-0 not-italic text-[#282828] text-center sm:text-center md:text-center lg:text-center xl:text-left text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] top-[495px] sm:top-[585px] md:top-[645px] lg:top-[680px] xl:top-[410px] w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[40%] z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {slide.title2}
          </motion.p>
          <motion.p
            className="absolute font-normal leading-[18px] sm:leading-[19px] md:leading-[21px] lg:leading-[24px] xl:leading-[26px] left-[5%] sm:left-[50%] sm:translate-x-[-50%] md:left-[50%] md:translate-x-[-50%] lg:left-[50%] lg:translate-x-[-50%] xl:left-[50%] xl:translate-x-0 not-italic text-[#777777] text-center sm:text-center md:text-center lg:text-center xl:text-left text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] xl:text-[18px] top-[517px] sm:top-[610px] md:top-[673px] lg:top-[710px] xl:top-[450px] w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] xl:w-[45%] z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {slide.description2}
          </motion.p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="hidden xl:block absolute bg-white cursor-pointer left-[50%] translate-x-[-50%] sm:left-[15px] sm:translate-x-0 md:left-[20px] lg:left-[25px] xl:right-[50px] xl:left-auto rounded-[60px] top-[615px] sm:top-[820px] md:top-[900px] lg:top-[940px] xl:top-[260px] w-[40px] md:w-[45px] lg:w-[50px] z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(249, 250, 251, 1)" }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[12px] md:p-[15px] relative rounded-[inherit] w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none xl:scale-y-[-100%] rotate-90 xl:rotate-0">
              <div
                className="relative size-[16px] md:size-[20px]"
                data-name="iconoir:arrow-down"
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 20 20"
                >
                  <g
                    id="iconoir:arrow-down"
                    opacity={currentSlide === 0 ? "0.3" : "1"}
                  >
                    <path
                      d={svgPathsMain.p1c8af000}
                      id="Vector"
                      stroke="var(--stroke-0, #4F4F4F)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border-[#d2d2d2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[60px]"
        />
      </motion.button>

      <motion.button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="hidden xl:block absolute bg-white cursor-pointer right-[50%] translate-x-[50%] sm:right-[15px] sm:translate-x-0 md:right-[20px] lg:right-[25px] xl:right-[50px] rounded-[60px] top-[665px] sm:top-[820px] md:top-[900px] lg:top-[940px] xl:top-[322px] w-[40px] md:w-[45px] lg:w-[50px] z-20"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        whileHover={{ scale: 1.1, backgroundColor: "rgba(249, 250, 251, 1)" }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip p-[12px] md:p-[15px] relative rounded-[inherit] w-full">
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none -rotate-90 xl:rotate-0">
              <div
                className="relative size-[16px] md:size-[20px]"
                data-name="iconoir:arrow-down"
              >
                <svg
                  className="block size-full"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 20 20"
                >
                  <g
                    id="iconoir:arrow-down"
                    opacity={currentSlide === slides.length - 1 ? "0.3" : "1"}
                  >
                    <path
                      d={svgPathsMain.p1c8af000}
                      id="Vector"
                      stroke="var(--stroke-0, #4F4F4F)"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute border-[#d2d2d2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[60px]"
        />
      </motion.button>
    </motion.div>
  );
}
