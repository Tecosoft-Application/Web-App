"use client";
import { useState, useEffect } from "react";
import { motion, useIsomorphicLayoutEffect } from "framer-motion";
import svgPathsFeatures from "../../imports/svg-ssflelrdzm";

// Image paths from public folder
const imgRectangle34Features = "/assets/platform/eagle/gray-blur.png";
const imgFrame1171277136Features = "/assets/platform/eagle/data-process.png";
const imgFrame1171277140Features =
  "/assets/platform/eagle/one-box-solution.png";
const imgFrame1171277142Features =
  "/assets/platform/eagle/operator-dashboard.png";
const imgFrame1171277145Features =
  "/assets/platform/eagle/operator-dashboard.png";

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

function FeatureSection() {
  const isMobile = useIsMobile();

  return (
    <div
      className="relative shrink-0 w-full flex items-center justify-center py-[100px] max-lg:py-[60px]"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(0, 184, 219, 0.1) 0%, rgba(0, 184, 219, 0.1) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%))",
      }}
    >
      <div
        className="relative lg:h-[840px] lg:w-[1512px] w-full px-4 lg:px-0 grid grid-cols-1 lg:block gap-4"
        data-name="Features"
      >
        <div className="absolute bottom-0 flex h-[150px] items-center justify-center left-0 w-full lg:w-[1512px] max-lg:hidden">
          <div className="flex-none scale-y-[-100%]">
            <div className="h-[150px] relative w-full lg:w-[1512px]">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
                src={imgRectangle34Features}
              />
            </div>
          </div>
        </div>
        <div className="absolute h-[150px] left-0 top-0 w-full lg:w-[1512px] max-lg:hidden">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full"
            src={imgRectangle34Features}
          />
        </div>

        {/* Card 1: Data Acquisition & Preprocessing */}
        <motion.div
          className="group lg:absolute box-border content-stretch cursor-pointer flex flex-col gap-[12px] items-start justify-end lg:left-[180px] overflow-clip p-[16px] rounded-[12px] lg:size-[220px] lg:top-[127px] h-[220px] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 max-lg:!opacity-100"
          custom={isMobile ? undefined : 0}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          exit={isMobile ? undefined : "exit"}
          viewport={isMobile ? undefined : { once: false, amount: 0.3 }}
          variants={isMobile ? undefined : cardAnimation}
          role="button"
          tabIndex={0}
          aria-label="Data Acquisition & Preprocessing. EAGLE connects to any machine, sensor, or system to collect and preprocess data at the source."
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.currentTarget.click();
            }
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[12px] grayscale group-hover:grayscale-0 transition-[filter] duration-500 ease-in-out"
          >
            <img
              alt=""
              className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full"
              src={imgFrame1171277136Features}
            />
            <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-75% to-[rgba(0,0,0,0.6)]" />
          </div>
          <div
            className="overflow-clip relative shrink-0 size-[30px]"
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
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[21px] not-italic relative shrink-0 text-[18px] text-white w-full">{`Data Acquisition & Preprocessing`}</p>
          </div>
        </motion.div>

        {/* Card 2: Integrates to MES/ERP/Cloud */}
        <motion.div
          className="group lg:absolute bg-white box-border content-stretch cursor-pointer flex gap-[16px] lg:h-[98px] items-center lg:left-[424px] p-[16px] rounded-[12px] lg:top-[127px] lg:w-[620px] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 max-lg:!opacity-100"
          custom={isMobile ? undefined : 1}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          exit={isMobile ? undefined : "exit"}
          viewport={isMobile ? undefined : { once: false, amount: 0.3 }}
          variants={isMobile ? undefined : cardAnimation}
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
              className="absolute inset-0 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
                className="[grid-area:1_/_1] aspect-[40/40] h-[30px] ml-0 mt-0 relative"
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
          <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[22px] relative shrink-0 text-[#282828] text-[18px] text-nowrap whitespace-pre">
              Integrates to MES/ERP/Cloud
            </p>
            <p className="-webkit-box font-['Gilroy:Regular',sans-serif] leading-[20px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#8e8e8e] text-[15px] w-[min-content]">
              Seamlessly forward data to MES, ERP, and cloud systems through
              built-in APIs.
            </p>
          </div>
        </motion.div>

        {/* Card 3: Flexible Edge Intelligence */}
        <motion.div
          className="group lg:absolute bg-white box-border content-stretch cursor-pointer flex gap-[16px] lg:h-[98px] items-center lg:left-[424px] p-[16px] rounded-[12px] lg:top-[249px] lg:w-[620px] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 max-lg:!opacity-100"
          custom={isMobile ? undefined : 2}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          exit={isMobile ? undefined : "exit"}
          viewport={isMobile ? undefined : { once: false, amount: 0.3 }}
          variants={isMobile ? undefined : cardAnimation}
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
              className="absolute inset-0 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div
              aria-hidden="true"
              className="relative shrink-0 size-[30px] z-10"
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
          <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[22px] relative shrink-0 text-[#282828] text-[18px] text-nowrap whitespace-pre">
              Flexible Edge Intelligence
            </p>
            <p className="-webkit-box font-['Gilroy:Regular',sans-serif] leading-[20px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#8e8e8e] text-[15px] w-[min-content]">
              Smart edge logic enables faster decisions and lighter upstream
              data processing.
            </p>
          </div>
        </motion.div>

        {/* Card 4: One-box Solution */}
        <motion.div
          className="group lg:absolute box-border content-stretch cursor-pointer flex flex-col gap-[12px] h-[220px] items-start justify-end lg:left-[180px] overflow-clip p-[16px] rounded-[12px] lg:top-[371px] lg:w-[440px] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 max-lg:!opacity-100"
          custom={isMobile ? undefined : 3}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          exit={isMobile ? undefined : "exit"}
          viewport={isMobile ? undefined : { once: false, amount: 0.3 }}
          variants={isMobile ? undefined : cardAnimation}
          role="button"
          tabIndex={0}
          aria-label="One-box Solution. A single, ruggedized device for data acquisition, processing, and control."
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.currentTarget.click();
            }
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[12px] grayscale group-hover:grayscale-0 transition-[filter] duration-500 ease-in-out"
          >
            <img
              alt=""
              className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full"
              src={imgFrame1171277140Features}
            />
            <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-75% to-[rgba(0,0,0,0.6)]" />
          </div>
          <div
            className="relative shrink-0 size-[30px]"
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
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[18px] text-white w-full">
              One-box Solution
            </p>
          </div>
        </motion.div>

        {/* Card 5: Real-time KPIs */}
        <motion.div
          className="group lg:absolute bg-white box-border content-stretch cursor-pointer flex gap-[16px] lg:h-[98px] items-center lg:left-[180px] p-[16px] rounded-[12px] lg:top-[615px] lg:w-[440px] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 max-lg:!opacity-100"
          custom={isMobile ? undefined : 4}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          exit={isMobile ? undefined : "exit"}
          viewport={isMobile ? undefined : { once: false, amount: 0.3 }}
          variants={isMobile ? undefined : cardAnimation}
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
            className="aspect-[66/66] box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center overflow-clip px-[28px] py-[29px] relative rounded-[12px] shrink-0"
            style={{
              background:
                "linear-gradient(227deg, #85868B 21.48%, #444 76.42%)",
            }}
          >
            <div
              className="absolute inset-0 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div
              aria-hidden="true"
              className="relative shrink-0 size-[30px] z-10"
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
          </div>
          <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[22px] relative shrink-0 text-[#282828] text-[18px] text-nowrap whitespace-pre">
              Real-time KPIs
            </p>
            <p className="-webkit-box font-['Gilroy:Regular',sans-serif] leading-[20px] min-w-full overflow-ellipsis overflow-hidden relative shrink-0 text-[#8e8e8e] text-[15px] w-[min-content]">
              Edge metrics reveal instant performance insights with minimal
              latency.
            </p>
          </div>
        </motion.div>

        {/* Card 6: Connect • Collect • Control */}
        <motion.div
          className="group lg:absolute bg-white box-border content-stretch cursor-pointer flex gap-[16px] lg:h-[120px] items-center lg:left-[644px] p-[16px] rounded-[12px] lg:top-[371px] lg:w-[400px] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 max-lg:!opacity-100"
          custom={isMobile ? undefined : 5}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          exit={isMobile ? undefined : "exit"}
          viewport={isMobile ? undefined : { once: false, amount: 0.3 }}
          variants={isMobile ? undefined : cardAnimation}
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
            className="aspect-[66/66] box-border content-stretch flex flex-col gap-[10px] h-full items-center justify-center overflow-clip px-[28px] py-[29px] relative rounded-[12px] shrink-0"
            style={{
              background:
                "linear-gradient(227deg, #85868B 21.48%, #444 76.42%)",
            }}
          >
            <div
              className="absolute inset-0 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div
              aria-hidden="true"
              className="relative shrink-0 size-[30px] z-10"
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
                  viewBox="0 0 24 24"
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
          <div className="basis-0 content-stretch flex flex-col gap-[6px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[22px] relative shrink-0 text-[#282828] text-[18px] text-nowrap whitespace-pre">
              Connect • Collect • Control
            </p>
            <p className="font-['Gilroy:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#8e8e8e] text-[15px] w-[min-content]">
              Connect devices, gather telemetry, and control machines from the
              edge platform.
            </p>
          </div>
        </motion.div>

        {/* Card 7: Closed-loop System */}
        <motion.div
          className="group lg:absolute box-border content-stretch cursor-pointer flex flex-col gap-[12px] h-[198px] items-start justify-end lg:left-[644px] overflow-clip p-[16px] rounded-[12px] lg:top-[515px] lg:w-[400px] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 max-lg:!opacity-100"
          custom={isMobile ? undefined : 6}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          exit={isMobile ? undefined : "exit"}
          viewport={isMobile ? undefined : { once: false, amount: 0.3 }}
          variants={isMobile ? undefined : cardAnimation}
          role="button"
          tabIndex={0}
          aria-label="Closed-loop System. Enables automated adjustments and optimizations based on real-time data."
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.currentTarget.click();
            }
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[12px] grayscale group-hover:grayscale-0 transition-[filter] duration-500 ease-in-out"
          >
            <img
              alt=""
              className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full"
              src={imgFrame1171277142Features}
            />
            <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-75% to-[rgba(0,0,0,0.6)]" />
          </div>
          <div
            className="relative shrink-0 size-[30px]"
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
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[18px] text-white w-full">
              Closed-loop System
            </p>
          </div>
        </motion.div>

        {/* Card 8: Operator Dashboard */}
        <motion.div
          className="group lg:absolute box-border content-stretch cursor-pointer flex flex-col gap-[12px] h-[220px] lg:h-[364px] items-start justify-end lg:left-[1068px] overflow-clip p-[16px] rounded-[12px] lg:top-[127px] lg:w-[264px] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 max-lg:!opacity-100"
          custom={isMobile ? undefined : 7}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          exit={isMobile ? undefined : "exit"}
          viewport={isMobile ? undefined : { once: false, amount: 0.3 }}
          variants={isMobile ? undefined : cardAnimation}
          role="button"
          tabIndex={0}
          aria-label="Operator Dashboard. Intuitive interface for real-time monitoring and control."
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.currentTarget.click();
            }
          }}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none rounded-[12px] grayscale group-hover:grayscale-0 transition-[filter] duration-500 ease-in-out"
          >
            <img
              alt=""
              className="absolute max-w-none object-50%-50% object-cover rounded-[12px] size-full"
              src={imgFrame1171277145Features}
            />
            <div className="absolute bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[12px] to-75% to-[rgba(0,0,0,0.6)]" />
          </div>
          <div
            className="relative shrink-0 size-[30px]"
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
          <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[23px] not-italic relative shrink-0 text-[18px] text-white w-full">
              Operator Dashboard
            </p>
          </div>
        </motion.div>

        {/* Card 9: Store & Forward */}
        <motion.div
          className="group lg:absolute bg-white box-border content-stretch cursor-pointer flex flex-col gap-[12px] h-[198px] items-start lg:left-[1068px] p-[16px] rounded-[12px] lg:top-[515px] lg:w-[264px] w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 max-lg:!opacity-100"
          custom={isMobile ? undefined : 8}
          initial={isMobile ? "visible" : "hidden"}
          whileInView={isMobile ? undefined : "visible"}
          exit={isMobile ? undefined : "exit"}
          viewport={isMobile ? undefined : { once: false, amount: 0.3 }}
          variants={isMobile ? undefined : cardAnimation}
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
            className="absolute border-[#dddddd] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]"
          />
          <div
            className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center overflow-clip px-[28px] py-[29px] relative rounded-[12px] shrink-0 size-[66px]"
            style={{
              background:
                "linear-gradient(227deg, #85868B 21.48%, #444 76.42%)",
            }}
          >
            <div
              className="absolute inset-0 rounded-[12px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background:
                  "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              }}
            />
            <div
              aria-hidden="true"
              className="relative shrink-0 size-[30px] z-10"
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
          <div className="content-stretch flex flex-col gap-[6px] items-start not-italic relative shrink-0 w-full">
            <p className="font-['Gilroy:Semibold',sans-serif] leading-[22px] relative shrink-0 text-[#282828] text-[18px] text-nowrap whitespace-pre">{`Store & Forward`}</p>
            <p className="font-['Gilroy:Regular',sans-serif] leading-[20px] min-w-full relative shrink-0 text-[#8e8e8e] text-[15px] w-[min-content]">
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
