"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import svgPathsMain from "../imports/svg-x0cup0okny";
import svgPaths1 from "../imports/svg-7ik4vedwaz";
import svgPaths2 from "../imports/svg-35jlzosdzv";
import svgPaths3 from "../imports/svg-mj0ljhjbb1";
import svgPaths4 from "../imports/svg-aalqly4fu";
import svgPaths5 from "../imports/svg-7ntpg8ioqz";
import svgPaths6 from "../imports/svg-ozwdohwk36";

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
    <div
      className="relative w-full overflow-hidden"
      style={
        {
          backgroundColor: "rgba(232, 249, 255, 1)",
          height: "clamp(420px, 41.2vw, 650px)", // Scales from 1024px to 1576px
          "--scale-factor": "clamp(0.65, 0.0635 * 100vw - 0.0046, 1)",
        } as React.CSSProperties
      }
      data-name="Benefits"
    >
      <div
        className="absolute left-0 top-0"
        style={{
          backgroundColor: "rgba(232, 249, 255, 1)",
          height: "calc(649.752px * var(--scale-factor))",
          width: "calc(1512.25px * var(--scale-factor))",
        }}
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

      <p
        className="absolute font-semibold not-italic text-[#181818] text-center text-nowrap translate-x-[-50%] whitespace-pre"
        style={{
          fontSize: "clamp(26px, 2.54vw, 40px)",
          lineHeight: "clamp(31px, 3.05vw, 48px)",
          left: "calc(756px * var(--scale-factor))",
          top: "calc(50px * var(--scale-factor))",
        }}
      >
        Smarter operations with connected machine insights.
      </p>
      <p
        className="absolute font-medium not-italic text-[#8e8e8e] text-center translate-x-[-50%]"
        style={{
          fontSize: "clamp(14px, 1.02vw, 16px)",
          lineHeight: "clamp(18px, 1.4vw, 22px)",
          left: "calc(756px * var(--scale-factor))",
          top: "calc(114px * var(--scale-factor))",
          width: "clamp(300px, 28.5vw, 450px)",
        }}
      >
        Optimize operations with real-time machine insights to cut costs, boost
        uptime, and scale efficiently.
      </p>

      {/* Left Side - Circle with Icons - Wrapper */}
      <div
        className="absolute"
        style={{
          left: "calc(180px * var(--scale-factor))",
          top: "calc(205px * var(--scale-factor))",
        }}
      >
        {/* Circle Background */}
        <div
          className="absolute left-0"
          style={{
            width: "calc(400px * var(--scale-factor))",
            height: "calc(400px * var(--scale-factor))",
            top: "calc(-20px * var(--scale-factor))",
          }}
        >
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
            className="absolute font-semibold not-italic text-[#069235] text-center translate-x-[-50%]"
            style={{
              fontSize: "clamp(16px, 1.52vw, 24px)",
              lineHeight: "clamp(21px, 2.03vw, 32px)",
              left: "calc(200px * var(--scale-factor))",
              top: "calc(145px * var(--scale-factor))",
              width: "clamp(120px, 11.36vw, 179px)",
            }}
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
            className="absolute left-0"
            style={{
              width: "calc(400px * var(--scale-factor))",
              height: "calc(400px * var(--scale-factor))",
              top: "calc(-20px * var(--scale-factor))",
            }}
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
        <button
          className="absolute block cursor-pointer overflow-visible transition-transform hover:scale-110"
          style={{
            left: "calc(252px * var(--scale-factor))",
            top: "calc(12px * var(--scale-factor))",
            padding: "calc(20px * var(--scale-factor))",
          }}
          data-name="vuesax/bold/dollar-square"
          onMouseEnter={() => setCurrentSlide(0)}
        >
          <div
            className="relative"
            style={{
              width: "calc(26px * var(--scale-factor))",
              height: "calc(26px * var(--scale-factor))",
            }}
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
        </button>

        {/* Arrow Icon - Slide 6 (Position 6 - Top Left) */}
        <button
          className="absolute cursor-pointer flex items-center justify-center transition-transform hover:scale-110"
          style={{
            left: "calc(74px * var(--scale-factor))",
            top: "calc(12px * var(--scale-factor))",
            padding: "calc(20px * var(--scale-factor))",
          }}
          onMouseEnter={() => setCurrentSlide(5)}
        >
          <div className="flex-none scale-y-[-100%]">
            <div
              className="overflow-clip relative"
              style={{
                width: "calc(26px * var(--scale-factor))",
                height: "calc(26px * var(--scale-factor))",
              }}
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
        </button>

        {/* Cloud Icon - Slide 5 (Position 5 - Left Center) */}
        <button
          className="absolute block cursor-pointer overflow-clip transition-transform hover:scale-110"
          style={{
            left: "calc(8px * var(--scale-factor))",
            top: "calc(144px * var(--scale-factor))",
            padding: "calc(20px * var(--scale-factor))",
          }}
          data-name="cloud"
          onMouseEnter={() => setCurrentSlide(4)}
        >
          <div
            className="relative"
            style={{
              width: "calc(26px * var(--scale-factor))",
              height: "calc(26px * var(--scale-factor))",
            }}
            data-name="cloud-inner"
          >
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
        </button>

        {/* Diagram Icon - Slide 2 (Position 2 - Right Center) */}
        <button
          className="absolute block cursor-pointer overflow-visible transition-transform hover:scale-110"
          style={{
            left: "calc(328px * var(--scale-factor))",
            top: "calc(144px * var(--scale-factor))",
            padding: "calc(20px * var(--scale-factor))",
          }}
          data-name="vuesax/linear/diagram"
          onMouseEnter={() => setCurrentSlide(1)}
        >
          <div
            className="relative"
            style={{
              width: "calc(24px * var(--scale-factor))",
              height: "calc(24px * var(--scale-factor))",
            }}
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
        </button>

        {/* Search Icon - Slide 4 (Position 4 - Bottom Left) */}
        <button
          className="absolute block cursor-pointer overflow-visible transition-transform hover:scale-110"
          style={{
            left: "calc(74px * var(--scale-factor))",
            top: "calc(276px * var(--scale-factor))",
            padding: "calc(20px * var(--scale-factor))",
          }}
          data-name="vuesax/linear/search-normal"
          onMouseEnter={() => setCurrentSlide(3)}
        >
          <div
            className="relative"
            style={{
              width: "calc(26px * var(--scale-factor))",
              height: "calc(26px * var(--scale-factor))",
            }}
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
        </button>

        {/* Setting Icon - Slide 3 (Position 3 - Bottom Right) */}
        <button
          className="absolute block cursor-pointer overflow-visible transition-transform hover:scale-110"
          style={{
            left: "calc(260px * var(--scale-factor))",
            top: "calc(276px * var(--scale-factor))",
            padding: "calc(20px * var(--scale-factor))",
          }}
          data-name="vuesax/linear/setting"
          onMouseEnter={() => setCurrentSlide(2)}
        >
          <div
            className="relative"
            style={{
              width: "calc(26px * var(--scale-factor))",
              height: "calc(26px * var(--scale-factor))",
            }}
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
        </button>
      </div>

      {/* Right Side - Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`content-${slide.id}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <p
            className="absolute font-semibold not-italic text-[#282828]"
            style={{
              fontSize: "clamp(16px, 1.52vw, 24px)",
              lineHeight: "clamp(20px, 1.9vw, 30px)",
              left: "calc(660px * var(--scale-factor))",
              top: "calc(246px * var(--scale-factor))",
              width: "clamp(440px, 42.64vw, 672px)",
            }}
          >
            {slide.title1}
          </p>
          <p
            className="absolute font-normal not-italic text-[#777777]"
            style={{
              fontSize: "clamp(14px, 1.14vw, 18px)",
              lineHeight: "clamp(18px, 1.65vw, 26px)",
              left: "calc(660px * var(--scale-factor))",
              top: "calc(286px * var(--scale-factor))",
              width: "clamp(440px, 42.64vw, 672px)",
            }}
          >
            {slide.description1}
          </p>
          <p
            className="absolute font-semibold not-italic text-[#282828]"
            style={{
              fontSize: "clamp(16px, 1.52vw, 24px)",
              lineHeight: "clamp(20px, 1.9vw, 30px)",
              left: "calc(660px * var(--scale-factor))",
              top: "calc(410px * var(--scale-factor))",
              width: "clamp(440px, 42.64vw, 672px)",
            }}
          >
            {slide.title2}
          </p>
          <p
            className="absolute font-normal not-italic text-[#777777]"
            style={{
              fontSize: "clamp(14px, 1.14vw, 18px)",
              lineHeight: "clamp(18px, 1.65vw, 26px)",
              left: "calc(660px * var(--scale-factor))",
              top: "calc(450px * var(--scale-factor))",
              width: "clamp(400px, 42.64vw, 672px)",
            }}
          >
            {slide.description2}
          </p>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute bg-white cursor-pointer rounded-[60px] transition-all hover:bg-gray-50"
        style={{
          left: "calc(1412px * var(--scale-factor))",
          top: "calc(260px * var(--scale-factor))",
          width: "clamp(35px, 3.17vw, 50px)",
        }}
      >
        <div
          className="box-border content-stretch flex items-center overflow-clip relative rounded-[inherit]"
          style={{
            gap: "calc(10px * var(--scale-factor))",
            padding: "calc(15px * var(--scale-factor))",
            width: "clamp(35px, 3.17vw, 50px)",
          }}
        >
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none scale-y-[-100%]">
              <div
                className="relative"
                style={{
                  width: "clamp(14px, 1.27vw, 20px)",
                  height: "clamp(14px, 1.27vw, 20px)",
                }}
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
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute bg-white cursor-pointer rounded-[60px] transition-all hover:bg-gray-50"
        style={{
          left: "calc(1412px * var(--scale-factor))",
          top: "calc(322px * var(--scale-factor))",
          width: "clamp(35px, 3.17vw, 50px)",
        }}
      >
        <div
          className="box-border content-stretch flex items-center overflow-clip relative rounded-[inherit]"
          style={{
            gap: "calc(10px * var(--scale-factor))",
            padding: "calc(15px * var(--scale-factor))",
            width: "clamp(35px, 3.17vw, 50px)",
          }}
        >
          <div
            className="relative shrink-0"
            style={{
              width: "clamp(14px, 1.27vw, 20px)",
              height: "clamp(14px, 1.27vw, 20px)",
            }}
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
        <div
          aria-hidden="true"
          className="absolute border-[#d2d2d2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[60px]"
        />
      </button>
    </div>
  );
}
