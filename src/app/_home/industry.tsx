"use client";
import React, { useState } from "react";
import Image from "next/image";

interface IndustryCard {
  id: number;
  title: string;
  description: string;
  normalIcon: string;
  hoverIcon: string;
  position: string;
  width: string;
  border: boolean;
  animationDelay: string;
  routeName?: string;
}

interface IndustryContent {
  header: {
    title: string;
    subtitle: string;
  };
  centerImage: string;
  cards: IndustryCard[];
  arrowIcon: string;
  hoverArrowIcon: string;
}

const Industry = () => {
  // Hover state to track which card is being hovered
  const [hover, setHover] = useState<number | null>(null);

  // Content configuration
  const industryContent: IndustryContent = {
    header: {
      title: "Smart Solutions,",
      subtitle: "Built for Your Industry",
    },
    centerImage: "/assets/images/products-center-image.svg",
    cards: [
      {
        id: 1,
        title: "Connected Factory Solutions",
        description:
          "A unified system that delivers real-time production insights, connects every process, and drives smarter, data-powered factory performance for greater efficiency and growth.",
        normalIcon: "/assets/icons/solutions/factory.svg",
        hoverIcon: "/assets/icons/solutions/factory-hover.svg",
        position: "lg:top-[50%] lg:-translate-y-1/2 lg:left-[2%] xl:left-[5%]",
        width: "lg:w-[280px] xl:w-[320px] 2xl:w-[360px]",
        border: false,
        animationDelay: "0s",
        routeName: "/connected-factories-solutions",
      },
      {
        id: 2,
        title: "AI-Enabled Solutions",
        description:
          "We use AI to transform complex data into predictive insights, enabling smarter, faster, and more proactive operations that adapt, evolve, and drive lasting efficiency.",
        normalIcon: "/assets/icons/solutions/ai-enable.svg",
        hoverIcon: "/assets/icons/solutions/ai-enable-hover.svg",
        position: "lg:top-[15%] lg:right-[2%] xl:right-[5%]",
        width: "lg:w-[280px] xl:w-[320px] 2xl:w-[360px]",
        border: false,
        animationDelay: "1s",
        routeName: "/ai-enabled-solutions",
      },
      {
        id: 3,
        title: "Digital Twin Solutions",
        description:
          "A real-time virtual replica that simulates, monitors, and analyzes your operations—delivering insights to optimize performance, boost efficiency, and drive continuous improvement.",
        normalIcon: "/assets/icons/solutions/digital-twin.svg",
        hoverIcon: "/assets/icons/solutions/digital-twin-hover.svg",
        position: "lg:bottom-[15%] lg:right-[2%] xl:right-[5%]",
        width: "lg:w-[280px] xl:w-[320px] 2xl:w-[360px]",
        border: false,
        animationDelay: "2s",
        routeName: "/digital-twin-solutions",
      },
    ],
    arrowIcon: "/assets/icons/solutions/right-arrow.svg",
    hoverArrowIcon: "/assets/icons/solutions/green-right-arrow.svg",
  };

  return (
    <div className="flex flex-col lg:min-h-screen items-center py-8 lg:py-12 px-4 sm:px-6 md:px-8 xl:px-[116px] relative self-stretch w-full overflow-hidden bg-gradient-to-br from-[#00BCEF] via-[#0066B2] to-[#002363]">
      {/* Add keyframes for floating animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-15px);
            }
          }

          @keyframes ripple {
            0% {
              transform: scale(0.8);
              opacity: 1;
            }
            100% {
              transform: scale(2.5);
              opacity: 0;
            }
          }

          /* Only apply floating animation on larger screens for performance */
          @media (min-width: 768px) {
            .float-animation {
              animation: float 3s ease-in-out infinite;
            }
          }

          .ripple-animation {
            animation: ripple 4s ease-out infinite;
          }
        `}
      </style>

      {/* Header */}
      <div className="flex flex-col items-center gap-1.5 sm:gap-2 mb-6 lg:mb-0 z-10 px-4">
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center leading-tight">
          {industryContent.header.title}
        </h2>
        <h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold text-center leading-tight"
          style={{
            background:
              "linear-gradient(231.12deg, #00D7FF 0.05%, #00FF84 88.08%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {industryContent.header.subtitle}
        </h2>
      </div>

      <div className="flex flex-col lg:flex-wrap w-full items-center justify-center gap-5 sm:gap-6 lg:gap-0 relative lg:h-[430px] xl:h-[480px]">
        {/* Center Image with Animated Circle Waves */}
        <div className="hidden lg:flex relative w-full lg:w-[600px] xl:w-[700px] h-[280px] sm:h-[350px] lg:h-[430px] xl:h-[480px] items-center justify-center">
          {/* Animated Circle Waves - 5 Visible Lines */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[250px] lg:h-[250px] xl:w-[280px] xl:h-[280px] rounded-full border-2 border-white/30 ripple-animation"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[250px] lg:h-[250px] xl:w-[280px] xl:h-[280px] rounded-full border-2 border-white/30 ripple-animation"
              style={{ animationDelay: "0.8s" }}
            ></div>
            <div
              className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[250px] lg:h-[250px] xl:w-[280px] xl:h-[280px] rounded-full border-2 border-white/30 ripple-animation"
              style={{ animationDelay: "1.6s" }}
            ></div>
            <div
              className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[250px] lg:h-[250px] xl:w-[280px] xl:h-[280px] rounded-full border-2 border-white/30 ripple-animation"
              style={{ animationDelay: "2.4s" }}
            ></div>
            <div
              className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] lg:w-[250px] lg:h-[250px] xl:w-[280px] xl:h-[280px] rounded-full border-2 border-white/30 ripple-animation"
              style={{ animationDelay: "3.2s" }}
            ></div>
          </div>

          {/* Center Icon */}
          <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[150px] lg:h-[150px] xl:w-[160px] xl:h-[160px] rounded-full bg-white flex items-center justify-center shadow-lg z-10">
            <Image
              className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] lg:w-[150px] lg:h-[150px] xl:w-[160px] xl:h-[160px]"
              alt="Center icon"
              src={industryContent.centerImage}
              width={160}
              height={160}
            />
          </div>
        </div>

        {/* Dynamic Cards */}
        {industryContent.cards.map((card) => (
          <div
            key={card.id}
            onMouseEnter={() => setHover(card.id)}
            onMouseLeave={() => setHover(null)}
            onClick={() => {
              // Handle navigation to product route
              if (card.routeName) {
                window.location.href = card.routeName;
              }
            }}
            className={`group flex w-full max-w-full sm:max-w-[90%] md:max-w-[85%] ${
              card.width
            } items-center gap-3 md:gap-3.5 p-3 md:p-4 lg:absolute ${
              card.position
            } bg-white rounded-xl overflow-hidden ${
              hover === card.id
                ? "border-2 border-[#4fc5db] shadow-[0_4px_24px_rgba(255,255,255,0.4)] hover:shadow-[0_8px_30px_rgba(79,197,219,0.4)]"
                : "shadow-[0_4px_20px_rgba(5,128,173,0.16)] hover:shadow-[0_8px_30px_rgba(5,128,173,0.25)]"
            } transition-all duration-300 ease-in-out lg:hover:scale-105 cursor-pointer relative lg:float-animation`}
            style={{
              animationDelay: card.animationDelay,
            }}
          >
            {/* Arrow icon */}
            <div className="absolute top-3 right-3 w-4 h-4 lg:w-5 lg:h-5">
              <svg
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Initial BLACK arrow */}
                <path
                  d="M1 6.99984L13 6.99984M13 6.99984L7.33333 1.33317M13 6.99984L7.33333 12.6665"
                  stroke="#222222"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                />

                {/* Hover GRADIENT arrow */}
                <path
                  d="M1 6.99984L13 6.99984M13 6.99984L7.33333 1.33317M13 6.99984L7.33333 12.6665"
                  stroke="url(#arrowGradient)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <defs>
                  <linearGradient
                    id="arrowGradient"
                    x1="3.6"
                    y1="3.74766"
                    x2="9.62576"
                    y2="10.4822"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00B7FF" />
                    <stop offset="1" stopColor="#0EB05C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <div className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0">
              {/* Normal Icon - Visible by default, hidden on hover */}
              <Image
                fill
                className="object-contain opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                alt={`${card.title} icon`}
                src={card.normalIcon}
                sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
              />
              {/* Hover Icon - Hidden by default, visible on hover */}
              <Image
                fill
                className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                alt={`${card.title} icon hover`}
                src={card.hoverIcon}
                sizes="(max-width: 640px) 40px, (max-width: 768px) 48px, 56px"
              />
            </div>

            <div className="flex flex-col items-start gap-1 relative flex-1 pr-6 lg:pr-8">
              <div className="flex flex-col items-start gap-0.5 relative self-stretch w-full">
                <h3
                  className={`relative self-stretch font-semibold text-[#222222] ${
                    hover === card.id
                      ? "text-base md:text-lg lg:text-xl leading-snug"
                      : "text-base md:text-lg lg:text-xl leading-snug"
                  } transition-colors duration-300 group-hover:text-[#00B7FF]`}
                >
                  {card.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industry;
