"use client";
import React, { useState } from "react";

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
}

interface IndustryContent {
  header: {
    title: string;
    subtitle: string;
  };
  centerImage: string;
  cards: IndustryCard[];
  arrowIcon: string;
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
    centerImage: "./assets/images/products-center-image.svg",
    cards: [
      {
        id: 1,
        title: "Connected Factory Solutions",
        description:
          "A unified system that delivers real-time production insights, connects every process, and drives smarter, data-powered factory performance for greater efficiency and growth.",
        normalIcon: "./assets/icons/solutions/factory.svg",
        hoverIcon: "./assets/icons/solutions/factory-hover.svg",
        position: "md:top-[194px] md:left-2",
        width: "md:w-[480px]",
        border: false,
        animationDelay: "0s",
      },
      {
        id: 2,
        title: "AI-Enabled Solutions",
        description:
          "We use AI to transform complex data into predictive insights, enabling smarter, faster, and more proactive operations that adapt, evolve, and drive lasting efficiency.",
        normalIcon: "./assets/icons/solutions/ai-enable.svg",
        hoverIcon: "./assets/icons/solutions/ai-enable-hover.svg",
        position: "md:top-[76px] md:left-[711px]",
        width: "md:w-[550px]",
        border: false,
        animationDelay: "1s",
      },
      {
        id: 3,
        title: "Digital Twin Solution",
        description:
          "A real-time virtual replica that simulates, monitors, and analyzes your operations—delivering insights to optimize performance, boost efficiency, and drive continuous improvement.",
        normalIcon: "./assets/icons/solutions/digital-twin.svg",
        hoverIcon: "./assets/icons/solutions/digital-twin-hover.svg",
        position: "md:top-[540px] md:left-[648px]",
        width: "md:w-[480px]",
        border: false,
        animationDelay: "2s",
      },
    ],
    arrowIcon: "./assets/icons/solutions/right-arrow.svg",
  };

  return (
    <div className="flex flex-col min-h-[700px] md:min-h-[900px] lg:min-h-[1000px] items-center pt-6 sm:pt-8 md:pt-10 lg:pt-12 pb-4 sm:pb-6 md:pb-8 lg:pb-10 xl:pb-12 px-4 sm:px-6 md:px-8 lg:px-[116px] relative self-stretch w-full overflow-hidden bg-gradient-to-br from-[#00BCEF] via-[#0066B2] to-[#002363]">
      {/* Add keyframes for floating animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
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
      <div className="flex flex-col items-center gap-1.5 sm:gap-2 mb-4 sm:mb-8 md:mb-10 lg:mb-12 z-10 px-4">
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

      <div className="flex flex-col lg:flex-wrap w-full max-w-[1276px] items-center justify-center gap-5 sm:gap-6 md:gap-0 relative pt-6 lg:pt-0 ">
        {/* Center Image with Animated Circle Waves */}
        <div className="  hidden lg:flex relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[500px] lg:w-[780px] h-[280px] sm:h-[350px] md:h-[500px] lg:h-[737px]  items-center justify-center my-4 md:my-6 lg:my-0">
          {/* Animated Circle Waves - 5 Visible Lines */}
          <div className=" absolute inset-0 flex items-center justify-center">
            <div
              className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] rounded-full border-2 border-white/30 ripple-animation"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] rounded-full border-2 border-white/30 ripple-animation"
              style={{ animationDelay: "0.8s" }}
            ></div>
            <div
              className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] rounded-full border-2 border-white/30 ripple-animation"
              style={{ animationDelay: "1.6s" }}
            ></div>
            <div
              className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] rounded-full border-2 border-white/30 ripple-animation"
              style={{ animationDelay: "2.4s" }}
            ></div>
            <div
              className="absolute w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] rounded-full border-2 border-white/30 ripple-animation"
              style={{ animationDelay: "3.2s" }}
            ></div>
          </div>

          {/* Center Icon */}
          <div className="relative w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] rounded-full bg-white flex items-center justify-center shadow-lg z-10">
            <img
              className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px]"
              alt="Center icon"
              src={industryContent.centerImage}
            />
          </div>
        </div>

        {/* Dynamic Cards */}
        {industryContent.cards.map((card) => (
          <div
            key={card.id}
            onMouseEnter={() => setHover(card.id)}
            onMouseLeave={() => setHover(null)}
            className={`group flex w-full max-w-full sm:max-w-[90%] md:max-w-[85%] ${
              card.width
            } items-start gap-3 sm:gap-3.5 md:gap-4 p-3.5 sm:p-4 md:p-5 lg:absolute ${
              card.position
            } bg-white rounded-xl sm:rounded-2xl overflow-hidden ${
              hover === card.id
                ? "border-2 border-[#4fc5db] shadow-[0_4px_24px_rgba(255,255,255,0.4)] hover:shadow-[0_8px_30px_rgba(79,197,219,0.4)]"
                : "shadow-[0_4px_20px_rgba(5,128,173,0.16)] hover:shadow-[0_8px_30px_rgba(5,128,173,0.25)]"
            } transition-all duration-300 ease-in-out md:hover:scale-105 cursor-pointer relative float-animation`}
            style={{
              animationDelay: card.animationDelay,
            }}
          >
            {/* Arrow Icon - Hidden by default, visible on hover (desktop only) */}
            <div className="absolute top-3 right-3 sm:top-4 sm:right-4 md:top-5 md:right-5 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
              <img
                src={industryContent.arrowIcon}
                alt="Arrow"
                className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
              />
            </div>

            <div className="relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[68px] lg:h-[68px] flex-shrink-0">
              {/* Normal Icon - Visible by default, hidden on hover */}
              <img
                className="absolute inset-0 w-full h-full opacity-100 group-hover:opacity-0 transition-opacity duration-300"
                alt={`${card.title} icon`}
                src={card.normalIcon}
              />
              {/* Hover Icon - Hidden by default, visible on hover */}
              <img
                className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                alt={`${card.title} icon hover`}
                src={card.hoverIcon}
              />
            </div>

            <div className="flex flex-col items-start gap-2 sm:gap-2.5 md:gap-3 lg:gap-4 relative flex-1 pr-6 sm:pr-8 md:pr-10">
              <div className="flex flex-col items-start gap-1 sm:gap-1.5 relative self-stretch w-full">
                <h3
                  className={`relative self-stretch font-semibold text-[#222222] ${
                    hover ===  card.id
                      ? "text-base sm:text-lg md:text-xl lg:text-[22px] leading-snug md:leading-7"
                      : "text-base sm:text-lg md:text-xl leading-snug md:leading-6"
                  } transition-colors duration-300 group-hover:text-[#00B7FF]`}
                >
                  {card.title}
                </h3>
                <p
                  className={`relative self-stretch font-medium text-[#888888] ${
                    hover ===  card.id
                      ? "text-xs sm:text-sm md:text-base leading-relaxed md:leading-[22px]"
                      : "text-xs sm:text-xs md:text-sm leading-relaxed md:leading-[19px]"
                  } transition-colors duration-300 group-hover:text-[#666666]`}
                >
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industry;
