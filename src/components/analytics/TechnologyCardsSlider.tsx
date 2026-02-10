"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Navigation, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import the card components
import svgPaths from "../../imports/svg-7ytr0tambm";
import svgPathsAI from "../../imports/svg-p3l7ldnjf";
import svgPathsEnterprise from "../../imports/svg-n40401f847";

const imgIoTEdge = "/assets/platform/analytics/iot_img.png";
const imgAIML = "/assets/platform/analytics/ai_img.png";
const imgEnterprise = "/assets/platform/analytics/enterprise_img.png";
const imgDeployment = "/assets/platform/analytics/flexibility_img.png";

// Card data for each technology
const cardData = [
  {
    id: "iot-edge",
    title: "IoT & Edge",
    description:
      "Connect machines seamlessly using OPC-UA and MQTT gateways to enable secure, real-time data exchange between devices, sensors, and systems. Enhance interoperability, reduce communication delays, and ensure reliable machine connectivity across industrial environments.",
    metric1: { value: "40%", label: "Faster data exchange" },
    metric2: { value: "30%", label: "Reduction in downtime" },
    svgPaths: imgIoTEdge,
  },
  {
    id: "ai-ml",
    title: "AI & ML Engine",
    description:
      "Uses AI and machine learning to transform raw operational data into actionable predictive intelligence, optimization of manufacturing processes. This engine ensures equipment health, boosts throughput, and drives significant operational savings by making operations smarter, not just faster.",
    metric1: { value: "20%", label: "Increase in Throughput" },
    metric2: { value: "40%", label: "Reduction in Unplanned Downtime" },
    svgPaths: imgAIML,
  },
  {
    id: "enterprise",
    title: "Enterprise Integration",
    description:
      "Seamlessly connects your diverse business systems – from ERP and MES to CRM and PLM – creating a unified data ecosystem. This integration enhances data consistency, streamlines workflows, and provides a single source of truth for critical operational and business insights across your entire organization.",
    metric1: { value: "25%", label: "Improvement in Data Accuracy" },
    metric2: { value: "15%", label: "Reduction in Manual Data Entry" },
    svgPaths: imgEnterprise,
  },
  {
    id: "deployment",
    title: "Deployment Flexibility",
    description:
      "Deploy on-premises, in the cloud, or in hybrid environments with full control over your infrastructure. Our flexible architecture adapts to your security requirements, compliance needs, and operational preferences, ensuring seamless integration regardless of your deployment strategy.",
    metric1: { value: "50%", label: "Faster deployment time" },
    metric2: { value: "35%", label: "Cost reduction" },
    svgPaths: imgDeployment,
  },
];

function Frame39() {
  return (
    <div className="absolute content-stretch flex gap-[250px] h-[90px] items-center left-[180px] not-italic text-white top-[70px] w-[1152px]">
      <p className="font-semibold leading-[45px] relative shrink-0 text-[36px] w-[260px]">{`Technology & Integrations`}</p>
      <p className="basis-0 font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px]">
        Built on a robust, scalable, and secure architecture - Tecosoft
        Analytics seamlessly integrates with your enterprise ecosystem,
        combining IoT connectivity, AI analytics, and open APIs to deliver
        intelligent insights instantly.
      </p>
    </div>
  );
}

function GroupSVG({ svgPaths }: { svgPaths: any }) {
  return (
    <div className="relative w-[316px] h-[268px]">
      {/* <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 316 268">
        <g id="Group 1171277044">
          <path d={svgPaths.p474a700} fill="url(#paint0_linear_8_260)" id="Path 1" />
          <path d={svgPaths.p24d0b0f0} fill="var(--fill-0, white)" id="Path 2" />
          <path clipRule="evenodd" d={svgPaths.p15575000} fill="url(#paint1_linear_8_260)" fillRule="evenodd" id="Path 3" />
          <path d={svgPaths.p12165380} fill="url(#paint2_linear_8_260)" id="Path 4" />
          <path d={svgPaths.p3d10d700} fill="var(--fill-0, white)" id="Path 5" />
          <path d={svgPaths.p3f774d70} fill="url(#paint3_linear_8_260)" id="Path 6" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_8_260" x1="248.678" x2="98.2665" y1="58.0667" y2="226.088">
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_8_260" x1="230.147" x2="116.488" y1="68.423" y2="207.425">
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_8_260" x1="165.722" x2="84.2061" y1="64.2912" y2="124.682">
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_8_260" x1="159.142" x2="97.005" y1="79.8557" y2="129.31">
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
        </defs>
      </svg> */}
      <Image
        alt=""
        fill
        className="max-w-none object-contain pointer-events-none"
        src={svgPaths}
        style={{ objectPosition: "50% 50%" }}
      />
    </div>
  );
}

export default function TechnologyCardsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const [isMidRange, setIsMidRange] = useState(false);
  const [flippedCard, setFlippedCard] = useState<number | null>(null);
  const [isMouseInSwiper, setIsMouseInSwiper] = useState(false);
  const swiperRef = useRef<SwiperType | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperContainerRef = useRef<HTMLDivElement>(null);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsLargeScreen(width >= 1024);
      setIsMidRange(width >= 1280 && width <= 1420);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleButtonClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  // Handle swiper mouse enter - enable flip functionality
  const handleSwiperMouseEnter = () => {
    if (isLargeScreen) {
      setIsMouseInSwiper(true);
    }
  };

  // Handle swiper mouse leave - disable flip and reset
  const handleSwiperMouseLeave = () => {
    setIsMouseInSwiper(false);
    setFlippedCard(null);
  };

  // Handle individual card mouse enter (only when mouse is in swiper)
  const handleCardMouseEnter = (index: number) => {
    if (isLargeScreen && isMouseInSwiper && index === activeIndex) {
      setFlippedCard(index);
    }
  };

  // Handle individual card mouse leave
  const handleCardMouseLeave = () => {
    if (isMouseInSwiper) {
      setFlippedCard(null);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`block ${
        isLargeScreen
          ? "min-h-[766px] lg:min-h-[680px] xl:min-h-[766px]"
          : "min-h-auto"
      } overflow-clip relative shrink-0 w-full transition-all duration-500`}
      data-name="Cards"
      style={{
        background: "linear-gradient(242.47deg, #00BCEF 6.45%, #002363 95.13%)",
      }}
    >
      {/* Header Content */}
      <div
        className={`${
          isLargeScreen ? "absolute" : "relative"
        } content-stretch flex ${
          isLargeScreen
            ? "gap-[250px] lg:gap-[120px] xl:gap-[250px]"
            : "flex-col gap-[16px]"
        } ${
          isLargeScreen ? "h-[90px] lg:h-[80px] xl:h-[90px]" : "h-auto"
        } items-${isLargeScreen ? "center" : "start"} ${
          isLargeScreen
            ? isMidRange
              ? "left-1/2 -translate-x-1/2"
              : "left-[8%] lg:left-[6%] xl:left-[180px]"
            : "px-[5%]"
        } not-italic text-white ${
          isLargeScreen ? "top-[70px] lg:top-[50px] xl:top-[70px]" : "pt-[50px]"
        } ${
          isLargeScreen
            ? isMidRange
              ? "w-[1150px] min-[140px]:max-w-[1512px]"
              : "w-[84%] lg:w-[88%] xl:w-[1152px]"
            : "w-full"
        } opacity-0 animate-[headerSlideIn_0.8s_ease-out_0.2s_forwards]`}
      >
        <p
          className={`font-semibold ${
            isLargeScreen
              ? "leading-[45px] lg:leading-[38px] xl:leading-[45px]"
              : "leading-[32px]"
          } relative ${isLargeScreen ? "shrink-0" : ""} ${
            isLargeScreen
              ? "text-[36px] lg:text-[28px] xl:text-[36px]"
              : "text-[28px]"
          } ${
            isLargeScreen ? "w-[260px] lg:w-[220px] xl:w-[260px]" : "w-full"
          }`}
        >{`Technology & Integrations`}</p>
        <p
          className={`${isLargeScreen ? "basis-0" : ""} font-medium ${
            isLargeScreen ? "grow" : ""
          } ${
            isLargeScreen
              ? "leading-[24px] lg:leading-[20px] xl:leading-[24px]"
              : "leading-[20px]"
          } ${isLargeScreen ? "min-h-px min-w-px" : ""} relative ${
            isLargeScreen ? "shrink-0" : ""
          } ${
            isLargeScreen
              ? "text-[16px] lg:text-[14px] xl:text-[16px]"
              : "text-[14px]"
          }`}
        >
          Built on a robust, scalable, and secure architecture - Tecosoft
          Analytics seamlessly integrates with your enterprise ecosystem,
          combining IoT connectivity, AI analytics, and open APIs to deliver
          intelligent insights instantly.
        </p>
      </div>

      {/* Conditional rendering based on screen size */}
      {isLargeScreen ? (
        <>
          {/* Swiper Container - For large screens (>= 1024px) */}
          <div
            ref={swiperContainerRef}
            className={`absolute left-1/2 top-[220px] lg:top-[180px] xl:top-[220px] translate-x-[-50%] ${
              isMidRange
                ? "w-[1150px] min-[1400px]:max-w-[1512px]"
                : "w-[90%] lg:w-[88%] xl:w-[1152px]"
            } h-[368px] lg:h-[320px] xl:h-[368px] opacity-0 animate-[cardFadeIn_1s_ease-out_0.6s_forwards]`}
            onMouseEnter={handleSwiperMouseEnter}
            onMouseLeave={handleSwiperMouseLeave}
          >
            <Swiper
              effect="cube"
              grabCursor={true}
              modules={[EffectCube, Navigation, Mousewheel]}
              className="h-full"
              direction="vertical"
              mousewheel={{
                forceToAxis: true,
                sensitivity: 1,
                releaseOnEdges: true,
              }}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              onSlideChange={(swiper) => {
                setActiveIndex(swiper.activeIndex);
              }}
            >
              {cardData.map((card, index) => (
                <SwiperSlide key={card.id}>
                  <div
                    className="flip-card h-[368px] lg:h-[320px] xl:h-[368px] w-full"
                    onMouseEnter={() => handleCardMouseEnter(index)}
                    onMouseLeave={handleCardMouseLeave}
                    style={{ perspective: "1000px" }}
                  >
                    <div
                      className={`flip-card-inner relative w-full h-full transition-transform duration-700 ${
                        flippedCard === index ? "flipped" : ""
                      }`}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      {/* Front Side */}
                      <div
                        className="flip-card-front absolute w-full h-full"
                        style={{ backfaceVisibility: "hidden" }}
                      >
                        <div className="bg-white h-full relative rounded-[24px] lg:rounded-[20px] xl:rounded-[24px] w-full transition-all duration-300 hover:shadow-2xl">
                          <div className="absolute inset-0 pointer-events-none shadow-[4px_4px_12px_0px_inset_rgba(0,0,0,0.12)] rounded-[24px] lg:rounded-[20px] xl:rounded-[24px]" />

                          {/* Card Content */}
                          <p className="absolute font-semibold leading-[28px] lg:leading-[24px] xl:leading-[28px] left-[50px] lg:left-[40px] xl:left-[50px] not-italic text-[#0098d4] text-[28px] lg:text-[24px] xl:text-[28px] text-nowrap top-[50px] lg:top-[40px] xl:top-[50px] whitespace-pre">
                            {card.title}
                          </p>
                          <p className="absolute font-normal leading-[25px] lg:leading-[22px] xl:leading-[25px] left-[50px] lg:left-[40px] xl:left-[50px] not-italic text-[#636363] text-[18px] lg:text-[15px] xl:text-[18px] top-[114px] lg:top-[95px] xl:top-[114px] w-[650px] lg:w-[50%] xl:w-[650px]">
                            {card.description}
                          </p>

                          {/* Metrics */}
                          <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[50px] lg:left-[40px] xl:left-[50px] not-italic top-[250px] lg:top-[210px] xl:top-[250px]">
                            <p className="font-semibold leading-[44px] lg:leading-[38px] xl:leading-[44px] min-w-full relative shrink-0 text-[#282828] text-[42px] lg:text-[36px] xl:text-[42px] w-[min-content]">
                              {card.metric1.value}
                            </p>
                            <p className="font-normal leading-[20px] lg:leading-[18px] xl:leading-[20px] relative shrink-0 text-[#636363] text-[16px] lg:text-[14px] xl:text-[16px] text-nowrap whitespace-pre">
                              {card.metric1.label}
                            </p>
                          </div>

                          <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[273px] lg:left-[260px] xl:left-[300px] not-italic top-[250px] lg:top-[210px] xl:top-[250px]">
                            <p className="font-semibold leading-[44px] lg:leading-[38px] xl:leading-[44px] min-w-full relative shrink-0 text-[#282828] text-[42px] lg:text-[36px] xl:text-[42px] w-[min-content]">
                              {card.metric2.value}
                            </p>
                            <p className="font-normal leading-[20px] lg:leading-[18px] xl:leading-[20px] relative shrink-0 text-[#636363] text-[16px] lg:text-[14px] xl:text-[16px] text-nowrap whitespace-pre">
                              {card.metric2.label}
                            </p>
                          </div>

                          {/* SVG Graphic - Right Side */}
                          <div className="absolute right-[55px] lg:right-[40px] xl:right-[55px] top-[50px] lg:top-[40px] xl:top-[50px] pointer-events-none scale-100 lg:scale-90 xl:scale-100 transition-transform duration-300">
                            <GroupSVG svgPaths={card.svgPaths} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Custom Pagination Buttons - For large screens */}
          <div
            className={`absolute content-stretch flex gap-[16px] lg:gap-[12px] xl:gap-[16px] items-center left-1/2 -translate-x-1/2 top-[648px] lg:top-[560px] xl:top-[648px] ${
              isMidRange
                ? "w-[1150px] min-[1400px]:max-w-[1512px]"
                : "w-[84%] lg:w-[88%] xl:w-[1032px]"
            } opacity-0 animate-[buttonsSlideUp_0.8s_ease-out_1s_forwards]`}
          >
            {cardData.map((card, index) => (
              <button
                key={card.id}
                onClick={() => handleButtonClick(index)}
                className={`basis-0 grow min-h-px min-w-px relative rounded-[60px] shrink-0 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  activeIndex === index
                    ? "bg-white"
                    : "bg-[rgba(255,255,255,0.16)]"
                }`}
              >
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] lg:px-[18px] xl:px-[24px] py-[10px] lg:py-[8px] xl:py-[10px] relative w-full">
                    <p
                      className={`font-[${
                        activeIndex === index ? "semibold" : "medium"
                      }] leading-[28px] lg:leading-[24px] xl:leading-[28px] not-italic relative shrink-0 text-[18px] lg:text-[15px] xl:text-[18px] text-nowrap whitespace-pre ${
                        activeIndex === index ? "text-[#0098d4]" : "text-white"
                      }`}
                    >
                      {card.title}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Stacked Cards - For small screens (300px - 1023px) */}
          <div className="relative w-full px-[5%] py-[40px] pb-[60px] flex flex-col gap-[24px] opacity-0 animate-[cardFadeIn_1s_ease-out_0.6s_forwards]">
            {cardData.map((card, index) => (
              <div
                key={card.id}
                className="bg-white relative rounded-[20px] w-full transition-all duration-300 hover:shadow-2xl p-[30px] pb-[40px]"
              >
                <div className="absolute inset-0 pointer-events-none shadow-[4px_4px_12px_0px_inset_rgba(0,0,0,0.12)] rounded-[20px]" />

                {/* Card Content */}
                <div className="relative flex flex-col gap-[16px]">
                  <p className="font-semibold leading-[28px] not-italic text-[#0098d4] text-[24px]">
                    {card.title}
                  </p>

                  {/* SVG Graphic - Centered below title */}
                  <div className="flex justify-center my-[20px]">
                    <div className="relative w-[250px] h-[212px]">
                      <Image
                        alt=""
                        fill
                        className="object-contain"
                        src={card.svgPaths}
                      />
                    </div>
                  </div>

                  <p className="font-normal leading-[22px] not-italic text-[#636363] text-[16px]">
                    {card.description}
                  </p>

                  {/* Metrics - Side by side */}
                  <div className="flex gap-[40px] mt-[16px]">
                    <div className="flex flex-col gap-[4px]">
                      <p className="font-semibold leading-[40px] text-[#282828] text-[38px]">
                        {card.metric1.value}
                      </p>
                      <p className="font-normal leading-[18px] text-[#636363] text-[14px]">
                        {card.metric1.label}
                      </p>
                    </div>

                    <div className="flex flex-col gap-[4px]">
                      <p className="font-semibold leading-[40px] text-[#282828] text-[38px]">
                        {card.metric2.value}
                      </p>
                      <p className="font-normal leading-[18px] text-[#636363] text-[14px]">
                        {card.metric2.label}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-slide {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @keyframes headerSlideIn {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes cardFadeIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes buttonsSlideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `,
        }}
      ></style>
    </div>
  );
}
