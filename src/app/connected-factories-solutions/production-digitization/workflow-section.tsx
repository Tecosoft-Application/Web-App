"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import svgPathsSettings from "../../../imports/svg-9h0ezj771j";

function IconoirArrowDown() {
  return (
    <div className="relative size-[18px] lg:size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g>
          <path
            d={svgPathsSettings.p124ac900}
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.35"
          />
        </g>
      </svg>
    </div>
  );
}

function IconoirArrowDownBlue() {
  return (
    <div className="relative shrink-0 size-[18px] lg:size-[20px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 20 20"
      >
        <g>
          <path
            d={svgPathsSettings.p124ac900}
            stroke="#0098D4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.35"
          />
        </g>
      </svg>
    </div>
  );
}

export function WorkflowSection({ content }: any) {
  const workflowSteps = content.steps;

  const [currentStep, setCurrentStep] = useState(0);
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1024,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextStep = () => {
    // Loop back to first card when reaching the end
    setCurrentStep((prev) => (prev + 1) % workflowSteps.length);
  };

  const prevStep = () => {
    // Only go back if not at the first card
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const activeStep = workflowSteps[currentStep];

  // Calculate the offset for sliding animation
  const containerOffset = 10;

  // Get previous steps (to show on the left)
  const previousSteps = workflowSteps.slice(0, currentStep);

  // Get future steps (to show on the right)
  const futureSteps = workflowSteps.slice(currentStep + 1);

  // Responsive sizing configurations
  const getResponsiveValues = () => {
    const width = screenSize.width;

    if (width < 1024) {
      // Mobile & Tablet (320px - 1023px) - Centered vertical layout
      return {
        isMobile: true,
        activeLeft: width < 400 ? 30 : width < 640 ? 40 : width < 768 ? 50 : 60,
        activeTop: 180,
        pastLeft: [-500, -800, -1100], // Hide completely off-screen
        futureLeft: [500, 800, 1100, 1400, 1750], // Hide completely off-screen
        pastTop: 180,
        futureTop: 180,
        activeTitleSize:
          width < 400 ? 24 : width < 640 ? 26 : width < 768 ? 28 : 32,
        passiveTitleSize: 0, // Hide passive steps
        descriptionSize: width < 640 ? 14 : width < 768 ? 15 : 16,
        activeIconSize: width < 640 ? 70 : width < 768 ? 80 : 90,
        stepWidth:
          width < 400 ? 290 : width < 640 ? 340 : width < 768 ? 440 : 540,
        timelineTop: width < 640 ? 284 : width < 768 ? 300 : 320,
        showPastSteps: false,
        showFutureSteps: false,
      };
    } else {
      // Desktop (1024px+)
      return {
        isMobile: false,
        activeLeft: 100,
        activeTop: 200,
        pastLeft: [-350, -800, -1250],
        futureLeft: [950, 1400, 1850, 2300, 2750],
        pastTop: 365,
        futureTop: 365,
        activeTitleSize: 56,
        passiveTitleSize: 24,
        descriptionSize: 20,
        activeIconSize: 140,
        stepWidth: 700,
        timelineTop: 423,
        showPastSteps: true,
        showFutureSteps: true,
      };
    }
  };

  const responsiveValues = getResponsiveValues();

  return (
    <div
      className="bg-[linear-gradient(242.47deg,#00BCEF_6.45%,#002363_95.13%)] relative w-full h-[510px] lg:h-[630px] overflow-hidden"
      data-name="Workflow Section"
    >
      {/* Header */}
      <div className="absolute content-stretch flex flex-col gap-[10px] lg:gap-[16px] items-center left-1/2 -translate-x-1/2 not-italic text-white top-[20px] lg:top-[60px] px-5 w-full max-w-[95%] lg:max-w-none">
        <p className=" font-semibold  leading-[1.3] lg:leading-normal relative shrink-0 text-[22px] sm:text-[26px] md:text-[32px] lg:text-[42px] text-center">
          {/* <span className="not-italic text-white">Workflow:</span> */}
          <span className="block sm:inline">{` Workflow: A Connected Inspection Journey`}</span>
        </p>
        <p className=" font-normal leading-[1.4] lg:leading-[24px] relative shrink-0 text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-center w-full max-w-[90%] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[500px]">
          A simple, connected flow from setup to continuous improvement - short,
          clear steps for shopfloor adoption.
        </p>
      </div>

      {/* Animated Container */}
      <motion.div
        className="absolute inset-0"
        animate={{ x: containerOffset }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <div className="relative size-full">
          {/* Timeline Line */}
          <div
            className="absolute h-0 left-0 w-[3000px]"
            style={{ top: `${responsiveValues.timelineTop}px` }}
          >
            <div className="absolute bottom-[-1px] left-0 right-0 top-[-1px]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 3000 2"
              >
                <path
                  d="M0 1H3000"
                  stroke="white"
                  strokeOpacity="0.24"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>

          {/* Render all steps with animations */}
          {workflowSteps.map((step: any, index: number) => {
            const isActive = index === currentStep;
            const isPast = index < currentStep;
            const isFuture = index > currentStep;

            // On mobile, only render the active step
            if (responsiveValues.isMobile && !isActive) {
              return null;
            }

            // Calculate position based on state using responsive values
            let left = responsiveValues.activeLeft;
            let top = responsiveValues.activeTop;
            let opacity = 1;
            let titleSize = responsiveValues.activeTitleSize;
            let descriptionSize = responsiveValues.descriptionSize;
            let iconSize = responsiveValues.activeIconSize;
            let showDescription = true;

            if (isPast) {
              // Past steps - small on the left
              if (!responsiveValues.showPastSteps) return null;
              const pastIndex = currentStep - index;
              left =
                responsiveValues.pastLeft[pastIndex - 1] ||
                responsiveValues.pastLeft[2];
              top = responsiveValues.pastTop;
              opacity = 0.5;
              titleSize = responsiveValues.passiveTitleSize;
              showDescription = false;
              iconSize = 0; // hide icon
            } else if (isFuture) {
              // Future steps - small on the right
              if (!responsiveValues.showFutureSteps) return null;
              const futureIndex = index - currentStep;
              left = responsiveValues.futureLeft[futureIndex - 1] || 3000;
              top = responsiveValues.futureTop;
              opacity = 0.5;
              titleSize = responsiveValues.passiveTitleSize;
              showDescription = false;
              iconSize = 0; // hide icon
            }

            return (
              <motion.div
                key={step.id}
                className="absolute content-stretch flex flex-col items-start"
                style={{ width: `${responsiveValues.stepWidth}px` }}
                initial={{
                  left: `${left}px`,
                  top: `${top}px`,
                  opacity: 0,
                  x: responsiveValues.isMobile ? 50 : 0,
                }}
                animate={{
                  left: `${left}px`,
                  top: `${top}px`,
                  opacity: opacity,
                  x: 0,
                }}
                transition={{
                  duration: responsiveValues.isMobile ? 0.5 : 0.6,
                  ease: "easeInOut",
                }}
              >
                <div
                  className={`content-stretch flex gap-[16px] lg:gap-[36px] items-start relative shrink-0 ${
                    responsiveValues.isMobile ? "items-center" : ""
                  }`}
                >
                  <motion.div
                    className={`${
                      responsiveValues.isMobile
                        ? "bg-[#1E4A7A]"
                        : "bg-[rgba(255,255,255,0.2)]"
                    } box-border content-stretch flex gap-[10px] items-center justify-center px-0 py-[7px] relative rounded-[10px] lg:rounded-[12px] shrink-0 shadow-2xl overflow-hidden`}
                    animate={{
                      width: iconSize,
                      height: iconSize,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                  >
                    {isActive && step.iconPath && (
                      <div className="relative shrink-0 size-[40px] sm:size-[50px] md:size-[55px] lg:size-[70px]">
                        <Image
                          src={step.iconPath}
                          alt={step.title}
                          className="block size-full object-contain"
                          fill
                          sizes="(max-width: 640px) 40px, (max-width: 768px) 50px, (max-width: 1024px) 55px, 70px"
                          style={{ objectFit: "contain" }}
                        />
                      </div>
                    )}
                  </motion.div>
                  <motion.p
                    className={` font-semibold  leading-tight lg:leading-[normal] not-italic relative ${
                      responsiveValues.isMobile ? "flex-1" : "flex-1"
                    } ${isActive ? "text-[#00ff84]" : "text-white"} ${
                      !isActive ? " font-medium " : ""
                    }`}
                    animate={{ fontSize: `${titleSize}px` }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  >
                    {step.title}
                  </motion.p>
                </div>

                <motion.div
                  className="relative shrink-0 size-[6px] lg:size-[10px]"
                  animate={{
                    marginTop: isActive
                      ? screenSize.width < 650
                        ? "30px"
                        : screenSize.width < 750
                        ? "36px"
                        : screenSize.width < 1024
                        ? "45px"
                        : "78px"
                      : screenSize.width < 1024
                      ? "15px"
                      : "25px",
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  <svg
                    className="block size-full"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 10 10"
                  >
                    <circle cx="5" cy="5" fill="white" r="5" />
                  </svg>
                </motion.div>

                {showDescription && (
                  <motion.p
                    className={` font-normal leading-[1.5] lg:leading-[25px] min-w-full not-italic relative shrink-0 text-white ${
                      screenSize.width < 1024 ? "w-full" : "w-[min-content]"
                    }`}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      fontSize: `${descriptionSize}px`,
                      marginTop: screenSize.width < 1024 ? "20px" : "50px",
                    }}
                    transition={{
                      duration: 0.6,
                      ease: "easeInOut",
                    }}
                  >
                    {step.description}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Navigation Buttons - Responsive Position */}
      <div
        className={`absolute content-stretch flex gap-[10px] lg:gap-[12px] items-center z-10 ${
          screenSize.width < 1024
            ? "left-1/2 -translate-x-1/2 bottom-[60px]"
            : "right-[100px] top-[486px]"
        }`}
      >
        {/* Previous Button */}
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`box-border content-stretch flex gap-[10px] items-center p-[8px] lg:p-[10px] relative rounded-[7px] lg:rounded-[8px] shrink-0 transition-opacity ${
            currentStep === 0
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer hover:opacity-80"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute border border-solid border-white inset-0 pointer-events-none rounded-[7px] lg:rounded-[8px]"
          />
          <div className="flex items-center justify-center relative shrink-0">
            <div className="flex-none rotate-[180deg] scale-y-[-100%]">
              <IconoirArrowDown />
            </div>
          </div>
        </button>

        {/* Next Button */}
        <button
          onClick={nextStep}
          className="bg-white box-border content-stretch flex gap-[10px] items-center p-[8px] lg:p-[10px] relative rounded-[7px] lg:rounded-[8px] shrink-0 opacity-100 cursor-pointer hover:opacity-80 transition-opacity"
        >
          <IconoirArrowDownBlue />
        </button>
      </div>
    </div>
  );
}
