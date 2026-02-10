"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination, Navigation, Mousewheel } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import the card components
// import IoTEdgeCard from '../imports/Cards';
import svgPaths from "../imports/svg-7ytr0tambm";
import svgPathsAI from "../imports/svg-p3l7ldnjf";
import svgPathsEnterprise from "../imports/svg-n40401f847";

// Card data for each technology
const cardData = [
  {
    id: "iot-edge",
    title: "IoT & Edge",
    description:
      "Connect machines seamlessly using OPC-UA and MQTT gateways to enable secure, real-time data exchange between devices, sensors, and systems. Enhance interoperability, reduce communication delays, and ensure reliable machine connectivity across industrial environments.",
    metric1: { value: "40%", label: "Faster data exchange" },
    metric2: { value: "30%", label: "Reduction in downtime" },
    svgPaths: svgPaths,
  },
  {
    id: "ai-ml",
    title: "AI & ML Engine",
    description:
      "Uses AI and machine learning to transform raw operational data into actionable predictive intelligence, optimization of manufacturing processes. This engine ensures equipment health, boosts throughput, and drives significant operational savings by making operations smarter, not just faster.",
    metric1: { value: "20%", label: "Increase in Throughput" },
    metric2: { value: "40%", label: "Reduction in Unplanned Downtime" },
    svgPaths: svgPathsAI,
  },
  {
    id: "enterprise",
    title: "Enterprise Integration",
    description:
      "Seamlessly connects your diverse business systems – from ERP and MES to CRM and PLM – creating a unified data ecosystem. This integration enhances data consistency, streamlines workflows, and provides a single source of truth for critical operational and business insights across your entire organization.",
    metric1: { value: "25%", label: "Improvement in Data Accuracy" },
    metric2: { value: "15%", label: "Reduction in Manual Data Entry" },
    svgPaths: svgPathsEnterprise,
  },
  {
    id: "deployment",
    title: "Deployment Flexibility",
    description:
      "Deploy on-premises, in the cloud, or in hybrid environments with full control over your infrastructure. Our flexible architecture adapts to your security requirements, compliance needs, and operational preferences, ensuring seamless integration regardless of your deployment strategy.",
    metric1: { value: "50%", label: "Faster deployment time" },
    metric2: { value: "35%", label: "Cost reduction" },
    svgPaths: svgPaths,
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
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 316 268"
      >
        <g id="Group 1171277044">
          <path
            d={svgPaths.p474a700}
            fill="url(#paint0_linear_8_260)"
            id="Path 1"
          />
          <path
            d={svgPaths.p24d0b0f0}
            fill="var(--fill-0, white)"
            id="Path 2"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p15575000}
            fill="url(#paint1_linear_8_260)"
            fillRule="evenodd"
            id="Path 3"
          />
          <path
            d={svgPaths.p12165380}
            fill="url(#paint2_linear_8_260)"
            id="Path 4"
          />
          <path
            d={svgPaths.p3d10d700}
            fill="var(--fill-0, white)"
            id="Path 5"
          />
          <path
            d={svgPaths.p3f774d70}
            fill="url(#paint3_linear_8_260)"
            id="Path 6"
          />
        </g>
        <defs>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint0_linear_8_260"
            x1="248.678"
            x2="98.2665"
            y1="58.0667"
            y2="226.088"
          >
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint1_linear_8_260"
            x1="230.147"
            x2="116.488"
            y1="68.423"
            y2="207.425"
          >
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint2_linear_8_260"
            x1="165.722"
            x2="84.2061"
            y1="64.2912"
            y2="124.682"
          >
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
          <linearGradient
            gradientUnits="userSpaceOnUse"
            id="paint3_linear_8_260"
            x1="159.142"
            x2="97.005"
            y1="79.8557"
            y2="129.31"
          >
            <stop stopColor="#00B7FF" />
            <stop offset="1" stopColor="#0EB05C" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function TechnologyCardsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const handleButtonClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  return (
    <div
      className="block h-[766px] overflow-clip relative shrink-0 w-full"
      data-name="Cards"
      style={{
        background: "linear-gradient(242.47deg, #00BCEF 6.45%, #002363 95.13%)",
      }}
    >
      {/* Header Content */}
      <div className="absolute content-stretch flex gap-[250px] h-[90px] items-center left-[180px] not-italic text-white top-[70px] w-[1152px]">
        <p className="font-semibold leading-[45px] relative shrink-0 text-[36px] w-[260px]">{`Technology & Integrations`}</p>
        <p className="basis-0 font-medium grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[16px]">
          Built on a robust, scalable, and secure architecture - Tecosoft
          Analytics seamlessly integrates with your enterprise ecosystem,
          combining IoT connectivity, AI analytics, and open APIs to deliver
          intelligent insights instantly.
        </p>
      </div>

      {/* Swiper Container */}
      <div className="absolute left-1/2 top-[220px] translate-x-[-50%] w-[1152px] h-[368px]">
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
              <div className="bg-white h-[368px] relative rounded-[24px] w-full">
                <div className="absolute inset-0 pointer-events-none shadow-[4px_4px_12px_0px_inset_rgba(0,0,0,0.12)] rounded-[24px]" />

                {/* Card Content */}
                <p className="absolute font-semibold leading-[28px] left-[50px] not-italic text-[#0098d4] text-[28px] text-nowrap top-[50px] whitespace-pre">
                  {card.title}
                </p>
                <p className="absolute font-normal leading-[25px] left-[50px] not-italic text-[#636363] text-[18px] top-[114px] w-[650px]">
                  {card.description}
                </p>

                {/* Metrics */}
                <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[50px] not-italic top-[250px]">
                  <p className="font-semibold leading-[44px] min-w-full relative shrink-0 text-[#282828] text-[42px] w-[min-content]">
                    {card.metric1.value}
                  </p>
                  <p className="font-normal leading-[20px] relative shrink-0 text-[#636363] text-[16px] text-nowrap whitespace-pre">
                    {card.metric1.label}
                  </p>
                </div>

                <div className="absolute content-stretch flex flex-col gap-[4px] items-start left-[273px] not-italic top-[250px]">
                  <p className="font-semibold leading-[44px] min-w-full relative shrink-0 text-[#282828] text-[42px] w-[min-content]">
                    {card.metric2.value}
                  </p>
                  <p className="font-normal leading-[20px] relative shrink-0 text-[#636363] text-[16px] text-nowrap whitespace-pre">
                    {card.metric2.label}
                  </p>
                </div>

                {/* SVG Graphic - Right Side */}
                <div className="absolute right-[55px] top-[50px] pointer-events-none">
                  <GroupSVG svgPaths={card.svgPaths} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom Pagination Buttons */}
      <div className="absolute content-stretch flex gap-[16px] items-center left-[240px] top-[648px] w-[1032px]">
        {cardData.map((card, index) => (
          <button
            key={card.id}
            onClick={() => handleButtonClick(index)}
            className={`basis-0 grow min-h-px min-w-px relative rounded-[60px] shrink-0 transition-all duration-300 ${
              activeIndex === index ? "bg-white" : "bg-[rgba(255,255,255,0.16)]"
            }`}
          >
            <div className="flex flex-row items-center justify-center size-full">
              <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[24px] py-[10px] relative w-full">
                <p
                  className={`font-[${
                    activeIndex === index ? "semibold" : "medium"
                  }] leading-[28px] not-italic relative shrink-0 text-[18px] text-nowrap whitespace-pre ${
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
    </div>
  );
}
