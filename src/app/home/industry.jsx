import React from "react";

const Industry = () => {
  return (
    <>
      <style jsx global>{`
        @keyframes wave {
          0%,
          100% {
            transform: scale(0.9);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.1;
          }
        }
      `}</style>

      <div className="flex flex-col min-h-[600px] md:min-h-[900px] items-center pt-12 md:pt-[60px] pb-0 px-4 sm:px-8 md:px-12 lg:px-[116px] relative self-stretch w-full overflow-hidden bg-[linear-gradient(225deg,rgba(0,188,239,1)_6%,rgba(0,35,99,1)_95%)]">
        <div className="flex flex-col md:flex-wrap w-full max-w-[1276px] items-center justify-center gap-6 md:gap-[0px_-192px] relative flex-[0_0_auto]">
          {/* Center Image with Animated Circle Waves */}
          <div className="relative w-full max-w-[400px] md:max-w-[600px] lg:w-[780px] h-auto md:h-[737px] flex items-center justify-center">
            {/* Animated Circle Waves */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Wave 1 */}
              <div
                className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-full border-2 border-white/20"
                style={{ animation: "wave 4s ease-in-out infinite" }}
              ></div>

              {/* Wave 2 */}
              <div
                className="absolute w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full border-2 border-white/15"
                style={{ animation: "wave 4s ease-in-out 1s infinite" }}
              ></div>

              {/* Wave 3 */}
              <div
                className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border-2 border-white/10"
                style={{ animation: "wave 4s ease-in-out 2s infinite" }}
              ></div>

              {/* Wave 4 */}
              <div
                className="absolute w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full border-2 border-white/5"
                style={{ animation: "wave 4s ease-in-out 3s infinite" }}
              ></div>
            </div>

            {/* Center Image
            <img
              className="relative z-10 w-full max-w-[400px] md:max-w-[600px] lg:w-[780px] h-auto object-contain"
              alt="Group"
              src="https://c.animaapp.com/mgrw22tcoYU1ig/img/group-43.png"
            /> */}
          </div>

          <div className="flex w-full md:w-[480px] items-start gap-3 md:gap-4 p-4 md:p-5 md:absolute md:top-[194px] md:left-2 bg-white rounded-2xl overflow-hidden shadow-[inset_4px_4px_20px_#0580ad29]">
            <img
              className="relative w-12 h-12 md:w-[68px] md:h-[68px] flex-shrink-0"
              alt="Streamline ultimate"
              src="https://c.animaapp.com/mgrw22tcoYU1ig/img/streamline-ultimate-factory-industrial-robot-arm-1-bold.svg"
            />

            <div className="flex flex-col items-start gap-3 md:gap-4 relative flex-1 grow">
              <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Gilroy-Semibold',Helvetica] font-normal text-[#222222] text-lg md:text-xl tracking-[0] leading-6">
                  Connected Factory Solutions
                </div>

                <p className="relative self-stretch [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#888888] text-xs md:text-sm tracking-[0] leading-relaxed md:leading-[19px]">
                  A unified system for real-time production insights and smarter
                  factory performance.
                </p>
              </div>
            </div>
          </div>

          <div className="flex w-full md:w-[550px] items-start gap-4 md:gap-[18.33px] p-5 md:p-[22.4px] md:absolute md:top-[76px] md:left-[711px] bg-white rounded-2xl md:rounded-[18.44px] overflow-hidden border md:border-[1.02px] border-solid border-[#4fc5db] shadow-[inset_4.61px_4.61px_23.05px_#0580ad29,0px_0px_24.44px_#ffffff66]">
            <img
              className="relative flex-[0_0_auto] w-12 h-12 md:w-auto md:h-auto"
              alt="Frame"
              src="https://c.animaapp.com/mgrw22tcoYU1ig/img/frame-140.svg"
            />

            <div className="flex flex-col items-start gap-4 md:gap-[18px] relative flex-1 grow">
              <div className="flex flex-col items-start gap-2 relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Gilroy-Semibold',Helvetica] font-normal text-[#222222] text-lg md:text-[22px] tracking-[0] leading-7">
                  AI-Enabled Solutions
                </div>

                <p className="relative self-stretch [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#888888] text-sm md:text-base tracking-[0] leading-relaxed md:leading-[22px]">
                  We use AI to turn data into predictive insights, empowering
                  intelligent and proactive operations.
                </p>
              </div>
            </div>
          </div>

          {/* <div className="flex w-full md:w-[480px] items-start gap-3 md:gap-4 p-4 md:p-5 md:absolute md:top-[540px] md:left-[648px] bg-white rounded-2xl overflow-hidden shadow-[inset_4px_4px_20px_#0580ad29]">
          <img
            className="relative w-12 h-12 md:w-[68px] md:h-[68px] flex-shrink-0"
            alt="Frame"
            src="https://c.animaapp.com/mgrw22tcoYU1ig/img/frame-139.svg"
          />

          <div className="flex flex-col items-start gap-3 md:gap-4 relative flex-1 grow">
            <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Gilroy-Semibold',Helvetica] font-normal text-[#222222] text-lg md:text-xl tracking-[0] leading-6">
                Digital Twin Solution
              </div>

              <p className="relative self-stretch [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#888888] text-xs md:text-sm tracking-[0] leading-relaxed md:leading-[19px]">
                A real-time virtual replica that simulates, analyzes, and
                enhances your operations for continuous improvement.
              </p>
            </div>
          </div>
        </div> */}

          <div className="group flex w-full md:w-[480px] items-start gap-3 md:gap-4 p-4 md:p-5 md:absolute md:top-[540px] md:left-[648px] bg-white rounded-2xl overflow-hidden shadow-[inset_4px_4px_20px_#0580ad29] transition-all duration-700 ease-in-out hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,183,255,0.25)] cursor-pointer">
            {/* Icon with gradient background - fastest transition */}
            <div className="relative w-12 h-12 md:w-[68px] md:h-[68px] flex-shrink-0 rounded-xl bg-gray-100 flex items-center justify-center transition-all duration-500 ease-in-out delay-75 group-hover:bg-gradient-to-br group-hover:from-[#00B7FF] group-hover:to-[#0EB05C]">
              <img
                className="relative w-8 h-8 md:w-12 md:h-12 transition-all duration-500 ease-in-out group-hover:brightness-0 group-hover:invert"
                alt="Frame"
                src="https://c.animaapp.com/mgrw22tcoYU1ig/img/frame-139.svg"
              />
            </div>

            <div className="flex flex-col items-start gap-3 md:gap-4 relative flex-1 grow">
              <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
                {/* Title - medium transition with slight delay */}
                <div className="relative self-stretch mt-[-1.00px] [font-family:'Gilroy-Semibold',Helvetica] font-normal text-[#222222] text-lg md:text-xl tracking-[0] leading-6 transition-colors duration-600 ease-in-out delay-100 group-hover:text-[#00B7FF]">
                  Digital Twin Solution
                </div>

                {/* Description - slowest transition with more delay */}
                <p className="relative self-stretch [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#888888] text-xs md:text-sm tracking-[0] leading-relaxed md:leading-[19px] transition-colors duration-700 ease-in-out delay-150 group-hover:text-[#666666]">
                  A real-time virtual replica that simulates, analyzes, and
                  enhances your operations for continuous improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Industry;
