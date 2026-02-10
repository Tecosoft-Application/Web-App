"use client";
import { useState, useEffect } from "react";
import { motion, useIsomorphicLayoutEffect } from "framer-motion";
import Image from "next/image";
import svgPathsFeatures from "../../imports/svg-ssflelrdzm";

// Image paths from public folder
const imgRectangle34Features = "/assets/platform/eagle/gray-blur.png";

// Animated GIF versions
const imgFrame1171277136Features =
  "/assets/platform/eagle/feature/data-processing.gif";
const imgFrame1171277140Features = "/assets/platform/eagle/feature/one-box.gif";
const imgFrame1171277142Features = "/assets/platform/eagle/feature/kpis.gif";
const imgFrame1171277145Features =
  "/assets/platform/eagle/feature/flex-edge.gif";

// Static image versions (first frame of GIFs)
const imgFrame1171277136Static =
  "/assets/platform/eagle/feature/data-proccess.png";
const imgFrame1171277140Static = "/assets/platform/eagle/feature/one-data.png";
const imgFrame1171277142Static = "/assets/platform/eagle/feature/kpi.png";
const imgFrame1171277145Static = "/assets/platform/eagle/feature/edge.png";

const cardAnimation: any = {
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

// Enhanced animation variants with smoother transitions
const cardAnimationEnhanced: any = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.15,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: 40,
    scale: 0.95,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

function FeatureSection() {
  const isMobile = useIsMobile();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div
      className="relative shrink-0 w-full flex items-center justify-center pt-[80px] max-lg:pt-[60px] pb-[40px] lg:pb-[5px]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 184, 219, 0.1) 0%, rgba(0, 184, 219, 0.1) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%))",
      }}
    >
      <div
        className="relative w-full max-w-[95vw] lg:max-w-[1512px] xl:max-w-[1400px] 2xl:max-w-[1600px] px-4 lg:px-0 grid grid-cols-1 lg:block gap-4 mx-auto lg:h-[700px] xl:h-[800px] 2xl:h-[840px] transition-all duration-300"
        data-name="Features"
        style={{
          aspectRatio: "1512/840",
        }}
      >
        <div className="absolute bottom-0 flex h-[120px] xl:h-[140px] 2xl:h-[150px] items-center justify-center left-0 w-full max-lg:hidden">
          <div className="flex-none scale-y-[-100%]">
            <div className="h-[120px] xl:h-[140px] 2xl:h-[150px] relative w-full">
              <Image
                alt=""
                fill
                className="max-w-none object-cover pointer-events-none"
                src={imgRectangle34Features}
                sizes="100vw"
              />
            </div>
          </div>
        </div>
        <div className="absolute h-[120px] xl:h-[140px] 2xl:h-[150px] left-0 top-0 w-full max-lg:hidden">
          <Image
            alt=""
            fill
            className="max-w-none object-cover pointer-events-none"
            src={imgRectangle34Features}
            sizes="100vw"
          />
        </div>

        {/* Section Title */}
        <div className="absolute top-0 left-0 right-0 flex justify-center items-center  md:py-[15px_20px] lg:py-[20px_25px] xl:py-[25px_30px] 2xl:py-[25px_50px] max-lg:relative max-lg:mb-8 px-4">
          <p className="font-semibold leading-[30px] sm:leading-[34px] md:leading-[38px] lg:leading-[40px] xl:leading-[44px] 2xl:leading-[48px] not-italic relative text-center text-[#0098d4] text-[22px] sm:text-[25px] md:text-[28px] lg:text-[30px] xl:text-[33px] 2xl:text-[36px]">
            Gateway to Connected Manufacturing
          </p>
        </div>

        {/* Card 1: Data Acquisition & Preprocessing */}
        <motion.div
          className="group lg:absolute box-border content-stretch cursor-pointer flex flex-col gap-[10px] xl:gap-[12px] items-start justify-end lg:left-[11.9%] overflow-clip p-[14px] xl:p-[16px] rounded-[10px] xl:rounded-[12px] lg:w-[14.55%] lg:h-[26.19%] lg:top-[15.12%] h-[200px] xl:h-[220px] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 max-lg:!opacity-100 hover:scale-105 transition-transform duration-500 ease-out"
          custom={isMobile ? undefined : 0}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          exit={isMobile ? undefined : "exit"}
          viewport={isMobile ? undefined : { once: false, amount: 0.3 }}
          variants={isMobile ? undefined : cardAnimationEnhanced}
          role="button"
          tabIndex={0}
          aria-label="Data Acquisition & Preprocessing. EAGLE connects to any machine, sensor, or system to collect and preprocess data at the source."
          onMouseEnter={() => setHoveredCard(0)}
          onMouseLeave={() => setHoveredCard(null)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.currentTarget.click();
            }
          }}
        >
          <div
            aria-hidden="true"
            className={`absolute inset-0 pointer-events-none rounded-[12px] ${
              isMobile ? "" : "grayscale group-hover:grayscale-0"
            } transition-[filter] duration-500 ease-in-out flex items-center justify-center`}
          >
            <Image
              alt=""
              fill
              className="object-cover"
              src={
                isMobile || hoveredCard === 0
                  ? imgFrame1171277136Features
                  : imgFrame1171277136Static
              }
              sizes="(max-width: 1024px) 100vw, 15vw"
              unoptimized
            />
            <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-75% to-[rgba(0,0,0,0.6)]" />
          </div>
          <div
            className="overflow-clip relative shrink-0 size-[26px] xl:size-[30px]"
            data-name="floppy-disk"
            aria-hidden="true"
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
          <div className="content-stretch flex flex-col gap-[4px] xl:gap-[6px] items-start relative shrink-0 w-full">
            <p className="font-semibold leading-[19px] xl:leading-[21px] not-italic relative shrink-0 text-[16px] xl:text-[18px] text-white w-full">{`Data Acquisition & Preprocessing`}</p>
          </div>
        </motion.div>

        {/* Card 2: Integrates to MES/ERP/Cloud */}
        <motion.div
          className="group lg:absolute bg-white box-border content-stretch cursor-pointer flex gap-[14px] xl:gap-[16px] lg:h-[11.67%] items-center lg:left-[28%] p-[14px] xl:p-[16px] rounded-[10px] xl:rounded-[12px] lg:top-[15.12%] lg:w-[41%] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 max-lg:!opacity-100 hover:scale-[1.02] transition-transform duration-500 ease-out"
          custom={isMobile ? undefined : 1}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          exit={isMobile ? undefined : "exit"}
          viewport={isMobile ? undefined : { once: false, amount: 0.3 }}
          variants={isMobile ? undefined : cardAnimationEnhanced}
          role="button"
          tabIndex={0}
          aria-label="Integrates to MES/ERP/Cloud. Seamlessly forward data to MES, ERP, and cloud systems through built-in APIs."
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.currentTarget.click();
            }
          }}
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
              className="absolute inset-0 rounded-[12px] opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div
              aria-hidden="true"
              className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0 z-10"
              data-name="vuesax/linear/refresh-square-2"
            >
              <div
                className="[grid-area:1_/_1] aspect-[40/40] h-[26px] xl:h-[30px] ml-0 mt-0 relative"
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
          <div className="basis-0 content-stretch flex flex-col gap-[4px] xl:gap-[6px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
            <p className="font-semibold leading-[20px] xl:leading-[22px] relative text-[#282828] text-[16px] xl:text-[18px]">
              Integrates to MES/ERP/Cloud
            </p>
            <p className="font-normal leading-[18px] xl:leading-[20px] relative text-[#8e8e8e] text-[13px] xl:text-[15px] line-clamp-2">
              Seamlessly forward data to MES, ERP, and cloud systems through
              built-in APIs.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Flexible Edge Intelligence */}
        <motion.div
          className="group lg:absolute bg-white box-border content-stretch cursor-pointer flex gap-[14px] xl:gap-[16px] lg:h-[11.67%] items-center lg:left-[28%] p-[14px] xl:p-[16px] rounded-[10px] xl:rounded-[12px] lg:top-[29.64%] lg:w-[41%] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 max-lg:!opacity-100 hover:scale-[1.02] transition-transform duration-500 ease-out"
          custom={isMobile ? undefined : 2}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          exit={isMobile ? undefined : "exit"}
          viewport={isMobile ? undefined : { once: false, amount: 0.3 }}
          variants={isMobile ? undefined : cardAnimationEnhanced}
          role="button"
          tabIndex={0}
          aria-label="Flexible Edge Intelligence. Smart edge logic enables faster decisions and lighter upstream data processing."
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.currentTarget.click();
            }
          }}
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
              className="absolute inset-0 rounded-[12px] opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div
              aria-hidden="true"
              className="relative shrink-0 size-[26px] xl:size-[30px] z-10"
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
          <div className="basis-0 content-stretch flex flex-col gap-[4px] xl:gap-[6px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
            <p className="font-semibold leading-[20px] xl:leading-[22px] relative text-[#282828] text-[16px] xl:text-[18px]">
              Operator Dashboard
            </p>
            <p className="font-normal leading-[18px] xl:leading-[20px] relative text-[#8e8e8e] text-[13px] xl:text-[15px] line-clamp-2">
              Touch UI lets operators input data, view alerts, and control
              workflows easily.
            </p>
          </div>
        </motion.div>

        {/* Card 4: One-box Solution */}
        <motion.div
          className="group lg:absolute box-border content-stretch cursor-pointer flex flex-col gap-[10px] xl:gap-[12px] h-[200px] xl:h-[220px] items-start justify-end lg:left-[11.9%] overflow-clip p-[14px] xl:p-[16px] rounded-[10px] xl:rounded-[12px] lg:top-[44.17%] lg:w-[29.1%] lg:h-[26.19%] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 max-lg:!opacity-100 hover:scale-[1.03] transition-transform duration-500 ease-out"
          custom={isMobile ? undefined : 3}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          exit={isMobile ? undefined : "exit"}
          viewport={isMobile ? undefined : { once: false, amount: 0.3 }}
          variants={isMobile ? undefined : cardAnimationEnhanced}
          role="button"
          tabIndex={0}
          aria-label="One-box Solution. A single, ruggedized device for data acquisition, processing, and control."
          onMouseEnter={() => setHoveredCard(3)}
          onMouseLeave={() => setHoveredCard(null)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.currentTarget.click();
            }
          }}
        >
          <div
            aria-hidden="true"
            className={`absolute inset-0 pointer-events-none rounded-[12px] ${
              isMobile ? "" : "grayscale group-hover:grayscale-0"
            } transition-[filter] duration-500 ease-in-out flex items-center justify-center`}
          >
            <Image
              alt=""
              fill
              className="object-cover"
              src={
                isMobile || hoveredCard === 3
                  ? imgFrame1171277140Features
                  : imgFrame1171277140Static
              }
              sizes="(max-width: 1024px) 100vw, 30vw"
              unoptimized
            />
            <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-75% to-[rgba(0,0,0,0.6)]" />
          </div>
          <div
            className="relative shrink-0 size-[26px] xl:size-[30px]"
            data-name="vuesax/linear/3d-square"
            aria-hidden="true"
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
          <div className="content-stretch flex flex-col gap-[4px] xl:gap-[6px] items-start relative shrink-0 w-full">
            <p className="font-semibold leading-[20px] xl:leading-[23px] not-italic relative shrink-0 text-[16px] xl:text-[18px] text-white w-full">
              One-box Solution
            </p>
          </div>
        </motion.div>

        {/* Card 5: Closed-loop System */}
        <motion.div
          className="group lg:absolute bg-white box-border content-stretch cursor-pointer flex gap-[14px] xl:gap-[16px] lg:h-[12.67%] items-center lg:left-[11.9%] p-[14px] xl:p-[16px] rounded-[10px] xl:rounded-[12px] lg:top-[73.21%] lg:w-[29.1%] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 max-lg:!opacity-100 hover:scale-[1.02] transition-transform duration-500 ease-out"
          custom={isMobile ? undefined : 4}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          exit={isMobile ? undefined : "exit"}
          viewport={isMobile ? undefined : { once: false, amount: 0.3 }}
          variants={isMobile ? undefined : cardAnimationEnhanced}
          role="button"
          tabIndex={0}
          aria-label="Real-time KPIs. Edge metrics reveal instant performance insights with minimal latency."
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.currentTarget.click();
            }
          }}
        >
          <div
            aria-hidden="true"
            className="absolute border-[#dddddd] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]"
          />
          <div
            className="aspect-[66/66] box-border content-stretch flex flex-col gap-[8px] h-full items-center justify-center overflow-clip px-[15px] py-[15px] relative rounded-[12px] shrink-0"
            style={{
              background:
                "linear-gradient(227deg, #85868B 21.48%, #444 76.42%)",
            }}
          >
            <div
              className="absolute inset-0 rounded-[12px] opacity-100 lg:opacity-0  group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div
              aria-hidden="true"
              className="relative shrink-0 size-[26px] xl:size-[26px] z-10"
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
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[4px] xl:gap-[6px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
            <p className="font-semibold leading-[18px] xl:leading-[22px] relative text-[#282828] text-[15px] xl:text-[18px]">
              Closed-loop System
            </p>
            <p className="font-normal leading-[18px] xl:leading-[18px] relative text-[#8e8e8e] text-[12px] xl:text-[14px] line-clamp-3">
              Machine feedback enables safe, automated control and real-time
              edge response.
            </p>
          </div>
        </motion.div>

        {/* Card 6: Connect • Collect • Control */}
        <motion.div
          className="group lg:absolute bg-white box-border content-stretch cursor-pointer flex gap-[14px] xl:gap-[16px] lg:h-[14.29%] items-center lg:left-[42.6%] p-[14px] xl:p-[16px] rounded-[10px] xl:rounded-[12px] lg:top-[44.17%] lg:w-[26.5%] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 max-lg:!opacity-100 hover:scale-[1.02] transition-transform duration-500 ease-out"
          custom={isMobile ? undefined : 5}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          exit={isMobile ? undefined : "exit"}
          viewport={isMobile ? undefined : { once: false, amount: 0.3 }}
          variants={isMobile ? undefined : cardAnimationEnhanced}
          role="button"
          tabIndex={0}
          aria-label="Connect, Collect, Control. Connect devices, gather telemetry, and control machines from the edge platform."
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.currentTarget.click();
            }
          }}
        >
          <div
            aria-hidden="true"
            className="absolute border-[#dddddd] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]"
          />
          <div
            className="aspect-[66/66] box-border content-stretch flex flex-col gap-[10px]  items-center justify-center overflow-clip px-[15px] py-[15px] relative rounded-[12px] shrink-0"
            style={{
              background:
                "linear-gradient(227deg, #85868B 21.48%, #444 76.42%)",
            }}
          >
            <div
              className="absolute inset-0 rounded-[12px] opacity-100 lg:opacity-0  group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div
              aria-hidden="true"
              className="relative shrink-0 size-[20px] lg:size-[22px] xl:size-[22px] z-10"
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
                  viewBox="0 0 22 22"
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
          <div className="basis-0 content-stretch flex flex-col gap-[4px] xl:gap-[6px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
            <p className="font-semibold leading-[18px] xl:leading-[22px] relative text-[#282828] text-[15px] xl:text-[18px]">
              Connect • Collect • Control
            </p>
            <p className="font-normal leading-[16px] xl:leading-[18px] relative text-[#8e8e8e] text-[12px] xl:text-[14px] line-clamp-3">
              Connect devices, gather telemetry, and control machines from the
              edge platform.
            </p>
          </div>
        </motion.div>

        {/* Card 7: Closed-loop System */}
        <motion.div
          className="group lg:absolute box-border content-stretch cursor-pointer flex flex-col gap-[10px] xl:gap-[12px] h-[180px] xl:h-[198px] items-start justify-end lg:left-[42.6%] overflow-clip p-[14px] xl:p-[16px] rounded-[10px] xl:rounded-[12px] lg:top-[61.31%] lg:w-[26.5%] lg:h-[23.57%] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 max-lg:!opacity-100 hover:scale-[1.03] transition-transform duration-500 ease-out"
          custom={isMobile ? undefined : 6}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          exit={isMobile ? undefined : "exit"}
          viewport={isMobile ? undefined : { once: false, amount: 0.3 }}
          variants={isMobile ? undefined : cardAnimationEnhanced}
          role="button"
          tabIndex={0}
          aria-label="Closed-loop System. Enables automated adjustments and optimizations based on real-time data."
          onMouseEnter={() => setHoveredCard(6)}
          onMouseLeave={() => setHoveredCard(null)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.currentTarget.click();
            }
          }}
        >
          <div
            aria-hidden="true"
            className={`absolute inset-0 pointer-events-none rounded-[12px] ${
              isMobile ? "" : "grayscale group-hover:grayscale-0"
            } transition-[filter] duration-500 ease-in-out flex items-center justify-center`}
          >
            <Image
              alt=""
              fill
              className="object-cover"
              src={
                isMobile || hoveredCard === 6
                  ? imgFrame1171277142Features
                  : imgFrame1171277142Static
              }
              sizes="(max-width: 1024px) 100vw, 27vw"
              unoptimized
            />
            <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-75% to-[rgba(0,0,0,0.6)]" />
          </div>
          <div
            className="relative shrink-0 size-[26px]  lg:size-[28px] xl:size-[30px]"
            data-name="vuesax/linear/grid-lock"
            aria-hidden="true"
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
          <div className="content-stretch flex flex-col gap-[4px] xl:gap-[6px] items-start relative shrink-0 w-full">
            <p className="font-semibold leading-[20px] xl:leading-[23px] not-italic relative shrink-0 text-[16px] xl:text-[18px] text-white w-full">
              Real-time KPIs
            </p>
          </div>
        </motion.div>

        {/* Card 8: Operator Dashboard */}
        <motion.div
          className={`group lg:absolute ${
            isMobile ? "bg-[#243D70]" : ""
          }   lg:hover:bg-[#243D70] box-border content-stretch cursor-pointer flex flex-col gap-[10px] xl:gap-[12px] h-[220px] lg:h-[43.33%] items-start justify-end lg:left-[70.63%] overflow-clip p-[14px] xl:p-[16px] rounded-[10px] xl:rounded-[12px] lg:top-[15.12%] lg:w-[17.46%] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 max-lg:!opacity-100 hover:scale-105 transition-transform duration-500 ease-out`}
          custom={isMobile ? undefined : 7}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          exit={isMobile ? undefined : "exit"}
          viewport={isMobile ? undefined : { once: false, amount: 0.3 }}
          variants={isMobile ? undefined : cardAnimationEnhanced}
          role="button"
          tabIndex={0}
          aria-label="Operator Dashboard. Intuitive interface for real-time monitoring and control."
          onMouseEnter={() => setHoveredCard(7)}
          onMouseLeave={() => setHoveredCard(null)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.currentTarget.click();
            }
          }}
        >
          <div
            aria-hidden="true"
            className={`absolute inset-0 pointer-events-none rounded-[12px] ${
              isMobile ? "" : "grayscale group-hover:grayscale-0"
            } transition-[filter] duration-500 ease-in-out flex items-center justify-center`}
          >
            <Image
              alt=""
              fill
              className="object-cover rounded-[12px]"
              src={
                isMobile || hoveredCard === 7
                  ? imgFrame1171277145Features
                  : imgFrame1171277145Static
              }
              sizes="(max-width: 1024px) 100vw, 18vw"
              unoptimized
            />
            <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-75% to-[rgba(0,0,0,0.6)]" />
          </div>
          <div
            className="relative shrink-0 size-[26px] xl:size-[30px]"
            data-name="vuesax/linear/3d-square"
            aria-hidden="true"
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
          <div className="content-stretch flex flex-col gap-[4px] xl:gap-[6px] items-start relative shrink-0 w-full">
            <p className="font-semibold leading-[20px] xl:leading-[23px] not-italic relative shrink-0 text-[16px] xl:text-[18px] text-white w-full">
              Flexible Edge Intelligence
            </p>
          </div>
        </motion.div>

        {/* Card 9: Store & Forward */}
        <motion.div
          className="group lg:absolute bg-white box-border content-stretch cursor-pointer flex flex-col gap-[10px] xl:gap-[12px] h-[185px] xl:h-[198px] items-start lg:left-[70.63%] p-[14px] xl:p-[16px] rounded-[10px] xl:rounded-[12px] lg:top-[61.31%] lg:w-[17.46%] lg:h-[23.57%] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 max-lg:!opacity-100 hover:scale-[1.03] transition-transform duration-500 ease-out"
          custom={isMobile ? undefined : 8}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          exit={isMobile ? undefined : "exit"}
          viewport={isMobile ? undefined : { once: false, amount: 0.3 }}
          variants={isMobile ? undefined : cardAnimationEnhanced}
          role="button"
          tabIndex={0}
          aria-label="Store & Forward. Local buffering prevents data loss and ensures delivery after reconnection."
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.currentTarget.click();
            }
          }}
        >
          <div
            aria-hidden="true"
            className=" absolute border-[#dddddd] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]"
          />
          <div
            className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[18px] py-[18px] relative rounded-[12px] shrink-0 size-[60px] lg:size-[55px] xl:size-[70px]"
            style={{
              background:
                "linear-gradient(227deg, #85868B 21.48%, #444 76.42%)",
            }}
          >
            <div
              className="absolute inset-0 rounded-[12px] opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div
              aria-hidden="true"
              className="relative shrink-0 size-[24px] xl:size-[30px] z-10"
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
          <div className="content-stretch flex flex-col gap-[4px] xl:gap-[6px] items-start not-italic relative shrink-0 w-full">
            <p className="font-semibold leading-[18px] xl:leading-[22px] relative shrink-0 text-[#282828] text-[15px] xl:text-[18px] text-nowrap whitespace-pre">{`Store & Forward`}</p>
            <p className="font-normal leading-[18px] xl:leading-[20px] min-w-full relative shrink-0 text-[#8e8e8e] text-[13px] xl:text-[15px] w-[min-content] line-clamp-3">
              Local buffering prevents data loss and ensures delivery after
              reconnection.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default FeatureSection;
