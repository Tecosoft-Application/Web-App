import React from "react";

const Industry = () => {
  // Content configuration
  const industryContent = {
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
        border: true,
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
      },
    ],
    arrowIcon: "./assets/icons/solutions/right-arrow.svg",
  };

  return (
    <div className="flex flex-col min-h-[600px] md:min-h-[900px] items-center pt-12 md:pt-[60px] pb-12 px-4 sm:px-8 md:px-12 lg:px-[116px] relative self-stretch w-full overflow-hidden bg-gradient-to-br from-[#00BCEF] via-[#0066B2] to-[#002363]">
      {/* Header */}
      <div className="flex flex-col items-center gap-2 mb-12 md:mb-16 z-10">
        <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold text-center">
          {industryContent.header.title}
        </h2>
        <h2 className="text-[#0EB05C] text-2xl md:text-4xl lg:text-5xl font-semibold text-center">
          {industryContent.header.subtitle}
        </h2>
      </div>

      <div className="flex flex-col md:flex-wrap w-full max-w-[1276px] items-center justify-center gap-6 md:gap-0 relative">
        {/* Center Image with Static Circle Waves */}
        <div className="relative w-full max-w-[400px] md:max-w-[600px] lg:w-[780px] h-auto md:h-[737px] flex items-center justify-center">
          {/* Static Circle Waves */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border-2 border-white/20"></div>
            <div className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full border-2 border-white/15"></div>
            <div className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border-2 border-white/10"></div>
            <div className="absolute w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full border-2 border-white/5"></div>
          </div>

          {/* Center Icon */}
          <div className="relative w-[150px] h-[150px] md:w-[180px] md:h-[180px] rounded-full bg-white flex items-center justify-center shadow-lg">
            <img
              className="w-20 h-20 md:w-24 md:h-24"
              alt="Center icon"
              src={industryContent.centerImage}
            />
          </div>
        </div>

        {/* Dynamic Cards */}
        {industryContent.cards.map((card) => (
          <div
            key={card.id}
            className={`group flex w-full ${
              card.width
            } items-start gap-3 md:gap-4 p-4 md:p-5 md:absolute ${
              card.position
            } bg-white rounded-2xl overflow-hidden ${
              card.border
                ? "border-2 border-[#4fc5db] shadow-[0_4px_24px_rgba(255,255,255,0.4)] hover:shadow-[0_8px_30px_rgba(79,197,219,0.4)]"
                : "shadow-[0_4px_20px_rgba(5,128,173,0.16)] hover:shadow-[0_8px_30px_rgba(5,128,173,0.25)]"
            } transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer relative`}
          >
            {/* Arrow Icon - Hidden by default, visible on hover */}
            <div className="absolute top-4 right-4 md:top-5 md:right-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <img
                src={industryContent.arrowIcon}
                alt="Arrow"
                className="w-6 h-6 md:w-7 md:h-7"
              />
            </div>

            <div className="relative w-12 h-12 md:w-[68px] md:h-[68px] flex-shrink-0">
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

            <div className="flex flex-col items-start gap-3 md:gap-4 relative flex-1">
              <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full">
                <h3
                  className={`relative self-stretch font-semibold text-[#222222] ${
                    card.id === 2
                      ? "text-lg md:text-[22px] leading-7"
                      : "text-lg md:text-xl leading-6"
                  } transition-colors duration-300 group-hover:text-[#00B7FF]`}
                >
                  {card.title}
                </h3>
                <p
                  className={`relative self-stretch font-medium text-[#888888] ${
                    card.id === 2
                      ? "text-sm md:text-base leading-relaxed md:leading-[22px]"
                      : "text-xs md:text-sm leading-relaxed md:leading-[19px]"
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
