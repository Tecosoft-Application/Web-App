"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  HOW_IT_WORKS_SECTION,
  HOW_IT_WORKS_STEPS,
} from "../../constants/digial-twin-platform/digital-twin-platform.js";

// ===========================
// Types
// ===========================

interface TimelineNodeProps {
  position: "top" | "bottom";
  className?: string;
}

// ===========================
// Components
// ===========================

/**
 * Section Header Component
 * Displays the title and description for the "How it Works" section
 */
function SectionHeader() {
  return (
    <div className="flex flex-col gap-4 md:gap-5 items-center text-center max-w-full px-6 md:px-8 lg:px-0 lg:max-w-[980px]">
      <h2 className="font-semibold text-2xl md:text-3xl lg:text-[42px] leading-tight lg:leading-[46px] text-white">
        {HOW_IT_WORKS_SECTION.title}
      </h2>
      <p className="font-normal text-sm md:text-base lg:text-lg leading-relaxed lg:leading-[25px] text-[#e4e4e4] max-w-full lg:max-w-[980px]">
        {HOW_IT_WORKS_SECTION.description}
      </p>
    </div>
  );
}

/**
 * Timeline Node Component
 * Displays a vertical line with a dot indicator
 * Position determines if dot is at top or bottom
 */
function TimelineNode({ position, className = "" }: TimelineNodeProps) {
  const isTopPosition = position === "top";

  return (
    <div className={`h-[200px] w-[18px] ${className}`}>
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 18 200"
        aria-hidden="true"
      >
        <g>
          {/* Vertical line */}
          <path
            d="M9 0L9 200"
            fill="none"
            stroke="white"
            strokeOpacity="0.36"
            strokeDasharray="4 4"
            strokeWidth="2"
          />
          {/* Indicator dot */}
          <circle
            cx="9"
            cy={isTopPosition ? "191" : "9"}
            fill="#2AC3FF"
            r="9"
          />
        </g>
      </svg>
    </div>
  );
}

/**
 * Step Card Component
 * Displays individual step information with number, title, and description
 */
interface StepCardProps {
  step: number;
  title: string;
  description: string;
  opacity: any; // framer-motion MotionValue
  className?: string;
}

function StepCard({
  step,
  title,
  description,
  opacity,
  className = "",
}: StepCardProps) {
  return (
    <motion.div
      style={{ opacity }}
      className={`flex flex-col gap-2 max-w-[280px] ${className}`}
    >
      <h3 className="font-semibold text-2xl md:text-[28px] lg:text-[24px] lg:text-[28px] leading-8 text-[#2ac3ff]">
        {step}. {title}
      </h3>
      <p className="font-normal text-sm md:text-base lg:text-[14px] xl:text-[16px] leading-relaxed md:leading-[22px] text-white">
        {description}
      </p>
    </motion.div>
  );
}

/**
 * Animated Timeline Component
 * Displays the horizontal timeline with animated line and step indicators
 * Animates based on scroll position
 */
function AnimatedTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through this component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["30% 80%", "80% 30%"],
  });

  // Animate the horizontal line length based on scroll
  const lineLength = useTransform(scrollYProgress, [0, 1], [1, 1575]);

  // Fade in each step as user scrolls through the timeline
  const step1Opacity = useTransform(scrollYProgress, [0, 0.15], [0.4, 1]);
  const step2Opacity = useTransform(scrollYProgress, [0.15, 0.35], [0.4, 1]);
  const step3Opacity = useTransform(scrollYProgress, [0.35, 0.55], [0.4, 1]);
  const step4Opacity = useTransform(scrollYProgress, [0.5, 0.7], [0.4, 1]);

  return (
    <div className="relative w-full hidden lg:block px-4 xl:px-8">
      {/* Timeline grid layout - horizontal for all lg+ screens */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 grid-rows-1 relative w-full min-h-[480px]"
      >
        {/* Horizontal animated line */}
        <div className="row-start-1 col-start-1 h-0 relative mt-[192px] w-full">
          <div className="absolute bottom-0 left-0 right-5 ">
            <svg
              className="block w-full h-[2px]"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1576 2"
            >
              {/* Background line */}
              <line
                stroke="#FFFFFF3D"
                strokeLinecap="round"
                strokeWidth="2"
                x1="1"
                x2="1575"
                y1="1"
                y2="1"
              />
              {/* Animated foreground line that fills on scroll */}
              <motion.line
                stroke="white"
                strokeLinecap="round"
                strokeWidth="2"
                x1="1"
                x2={lineLength}
                y1="1"
                y2="1"
              />
            </svg>
          </div>
        </div>

        {/* Step 1: Connect (top-left) */}
        <TimelineNode
          position="top"
          className="row-start-1 col-start-1 left-[8%] mt-0 absolute"
        />
        <StepCard
          step={1}
          title={HOW_IT_WORKS_STEPS[0].title}
          description={HOW_IT_WORKS_STEPS[0].description}
          opacity={step1Opacity}
          className="row-start-1 col-start-1 left-[10%] mt-0 absolute"
        />

        {/* Step 2: Model (bottom-left) */}
        <TimelineNode
          position="bottom"
          className="row-start-1 col-start-1 left-[26%] mt-[184px] absolute"
        />
        <StepCard
          step={2}
          title={HOW_IT_WORKS_STEPS[1].title}
          description={HOW_IT_WORKS_STEPS[1].description}
          opacity={step2Opacity}
          className="row-start-1 col-start-1 left-[28%] mt-[278px] absolute"
        />

        {/* Step 3: Simulate (top-right) */}
        <TimelineNode
          position="top"
          className="row-start-1 col-start-1 left-[47%] mt-0 absolute"
        />
        <StepCard
          step={3}
          title={HOW_IT_WORKS_STEPS[2].title}
          description={HOW_IT_WORKS_STEPS[2].description}
          opacity={step3Opacity}
          className="row-start-1 col-start-1 left-[49%] mt-0 absolute"
        />

        {/* Step 4: Optimize (bottom-right) */}
        <TimelineNode
          position="bottom"
          className="row-start-1 col-start-1 left-[68%] lg:left-[72%] mt-[184px] absolute"
        />
        <StepCard
          step={4}
          title={HOW_IT_WORKS_STEPS[3].title}
          description={HOW_IT_WORKS_STEPS[3].description}
          opacity={step4Opacity}
          className="row-start-1 col-start-1 left-[70%] lg:left-[74%] mt-[278px] absolute"
        />
      </div>
    </div>
  );
}

/**
 * Vertical Timeline Dot Component
 * Displays a cyan dot on the vertical timeline
 */
interface VerticalTimelineDotProps {
  className?: string;
}

function VerticalTimelineDot({ className = "" }: VerticalTimelineDotProps) {
  return (
    <div
      className={`absolute left-1/2 -translate-x-1/2 w-[12px] h-[12px] rounded-full bg-[#2AC3FF] z-10 ${className}`}
    />
  );
}

/**
 * Horizontal Dotted Line Component
 * Displays dotted line extending from center
 */
interface DottedLineProps {
  direction: "left" | "right";
  className?: string;
}

function DottedLine({ direction, className = "" }: DottedLineProps) {
  const isLeft = direction === "left";

  return (
    <div
      className={`absolute top-1/2 -translate-y-1/2 h-[2px] ${
        isLeft ? "right-1/2 left-5 mr-[6px]" : "left-1/2 right-5 ml-[6px]"
      } ${className}`}
    >
      <svg className="w-full h-full" fill="none" preserveAspectRatio="none">
        <line
          x1="0"
          y1="1"
          x2="100%"
          y2="1"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="3"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
}

/**
 * Vertical Step Card Component
 * Displays step info for vertical timeline
 */
interface VerticalStepCardProps {
  step: number;
  title: string;
  description: string;
  opacity: any;
  position: "left" | "right";
  className?: string;
}

function VerticalStepCard({
  step,
  title,
  description,
  opacity,
  position,
  className = "",
}: VerticalStepCardProps) {
  const isLeft = position === "left";

  return (
    <motion.div
      style={{ opacity }}
      className={`flex flex-col gap-2 ${
        isLeft ? "text-right items-end pr-4" : "text-left items-start pl-4"
      } ${className}`}
    >
      <h3 className="font-semibold text-base md:text-lg leading-6 text-[#2ac3ff]">
        {step}. {title}
      </h3>
      <p className="font-normal text-xs md:text-sm leading-relaxed text-white/90">
        {description}
      </p>
    </motion.div>
  );
}

/**
 * Vertical Animated Timeline Component
 * Displays vertical timeline for screens below 1024px
 * Animates based on scroll position
 */
function VerticalTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress through this component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["20% 70%", "70% 20%"],
  });

  // Animate the vertical line height based on scroll
  const lineHeightPercent = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  // Fade in each step as user scrolls through the timeline
  const step1Opacity = useTransform(scrollYProgress, [0, 0.2], [0.4, 1]);
  const step2Opacity = useTransform(scrollYProgress, [0.2, 0.4], [0.4, 1]);
  const step3Opacity = useTransform(scrollYProgress, [0.4, 0.6], [0.4, 1]);
  const step4Opacity = useTransform(scrollYProgress, [0.6, 0.85], [0.4, 1]);

  return (
    <div className="relative w-full lg:hidden px-6 py-8">
      {/* Vertical timeline container */}
      <div ref={containerRef} className="relative">
        {/* Center vertical line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/20">
          {/* Animated vertical line */}
          <motion.div
            style={{ height: lineHeightPercent }}
            className="w-full bg-[#2AC3FF]"
          />
        </div>

        {/* Steps Container */}
        <div className="relative space-y-24">
          {/* Step 1: Connect (right side) */}
          <div className="relative grid grid-cols-2 gap-4 items-center min-h-[120px]">
            <div className="col-start-1" />
            <motion.div
              style={{ opacity: step1Opacity }}
              className="col-start-2"
            >
              <VerticalStepCard
                step={1}
                title={HOW_IT_WORKS_STEPS[0].title}
                description={HOW_IT_WORKS_STEPS[0].description}
                opacity={step1Opacity}
                position="right"
              />
            </motion.div>
            <VerticalTimelineDot className="top-5" />
            <DottedLine direction="left" className="top-6" />
          </div>

          {/* Step 2: Model (left side) */}
          <div className="relative grid grid-cols-2 gap-4 items-center min-h-[120px]">
            <motion.div
              style={{ opacity: step2Opacity }}
              className="col-start-1"
            >
              <VerticalStepCard
                step={2}
                title={HOW_IT_WORKS_STEPS[1].title}
                description={HOW_IT_WORKS_STEPS[1].description}
                opacity={step2Opacity}
                position="left"
              />
            </motion.div>
            <div className="col-start-2" />
            <VerticalTimelineDot className="top-5" />
            <DottedLine direction="right" className="top-6" />
          </div>

          {/* Step 3: Simulate (right side) */}
          <div className="relative grid grid-cols-2 gap-4 items-center min-h-[120px]">
            <div className="col-start-1" />
            <motion.div
              style={{ opacity: step3Opacity }}
              className="col-start-2"
            >
              <VerticalStepCard
                step={3}
                title={HOW_IT_WORKS_STEPS[2].title}
                description={HOW_IT_WORKS_STEPS[2].description}
                opacity={step3Opacity}
                position="right"
              />
            </motion.div>
            <VerticalTimelineDot className="top-5" />
            <DottedLine direction="left" className="top-6" />
          </div>

          {/* Step 4: Optimize (left side) */}
          <div className="relative grid grid-cols-2 gap-4 items-center min-h-[100px]">
            <motion.div
              style={{ opacity: step4Opacity }}
              className="col-start-1"
            >
              <VerticalStepCard
                step={4}
                title={HOW_IT_WORKS_STEPS[3].title}
                description={HOW_IT_WORKS_STEPS[3].description}
                opacity={step4Opacity}
                position="left"
              />
            </motion.div>
            <div className="col-start-2" />
            <VerticalTimelineDot className="top-5" />
            <DottedLine direction="right" className="top-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Main How It Works Section
 * Displays the complete "How it Works" section with header and timeline
 */
function HowItWorks() {
  return (
    <section
      className="flex flex-col gap-8 md:gap-12 lg:gap-8 xl:gap-20 items-center overflow-clip py-12 md:py-16 lg:pb-[20px] xl:pb-[40px] lg:pt-[60px] w-full mx-auto"
      data-name="How it works"
      style={{
        background: "linear-gradient(257.57deg, #003D55 0%, #055778 100%)",
      }}
    >
      <SectionHeader />
      <AnimatedTimeline />
      <VerticalTimeline />
    </section>
  );
}

export default HowItWorks;
