import React from "react";

const StatsSection = () => {
    return (
    <div className="flex flex-col items-center gap-12 md:gap-16 lg:gap-[70px] px-4 sm:px-6 md:px-8 lg:px-0 py-12 md:py-16 lg:py-20 relative w-full bg-white">
      <img
        className="h-full md:h-[800px] lg:h-[986px] absolute top-0 left-0 w-full object-cover opacity-50 md:opacity-100"
        alt="Rectangle"
        src="https://c.animaapp.com/mgrw22tcoYU1ig/img/rectangle.png"
      />

      <div className="flex flex-col w-full max-w-[90%] md:max-w-[700px] lg:max-w-[1112px] items-center gap-6 md:gap-8 relative z-10">
        <div className="inline-flex flex-col items-center gap-1.5 relative">
          <div className="relative w-full text-center px-2  font-medium text-[#333333] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-[0] leading-tight lg:leading-[60px]">
            Turning Operational Data into
          </div>

          <div className="relative w-full text-center px-2 bg-[linear-gradient(227deg,rgba(0,183,255,1)_0%,rgba(14,176,92,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]  font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-[0] leading-tight lg:leading-[60px]">
            Actionable Intelligence
          </div>
        </div>

        <p className="relative w-full opacity-75 [font-family:'Gilroy-Regular',Helvetica] font-normal text-[#333333] text-sm sm:text-base md:text-lg text-center tracking-[0] leading-6 md:leading-7 px-2">
          Tecosoft turns operational and asset data into actionable intelligence
          with AI and Digital Twin technology - enabling predictive insights,
          optimized workflows, and reliable, efficient, data-driven decision
          making
        </p>
      </div>

      <div className="flex flex-col w-full max-w-[90%] md:max-w-[95%] lg:max-w-[1312px] items-start gap-6 md:gap-8 lg:gap-[46px] relative z-10">
        <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8 lg:gap-[46px] relative w-full">
          <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-10 p-6 md:p-8 relative w-full md:flex-1 bg-white rounded-2xl overflow-hidden border-2 border-solid border-[#00b7ff]">
            <img
              className="relative w-12 h-12 md:w-[60px] md:h-[60px]"
              alt="Ix machine a filled"
              src="https://c.animaapp.com/mgrw22tcoYU1ig/img/ix-machine-a-filled.svg"
            />

            <div className="flex flex-col items-start gap-2 relative w-full">
              <div className="relative w-fit [font-family:'Gilroy-Semibold',Helvetica] font-normal text-[#222222] text-4xl md:text-[50px] tracking-[0] leading-tight md:leading-[50px]">
                500+
              </div>

              <div className="relative w-fit [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#333333] text-lg md:text-xl tracking-[0] leading-6 md:leading-[26px]">
                Machines/Assets Connected
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-10 p-6 md:p-8 relative w-full md:flex-1 bg-white rounded-2xl overflow-hidden border border-solid border-[#cccccc]">
            <img
              className="relative w-12 h-12 md:w-[60px] md:h-[60px]"
              alt="Solid redo alt"
              src="https://c.animaapp.com/mgrw22tcoYU1ig/img/fa7-solid-redo-alt.svg"
            />

            <div className="flex flex-col items-start gap-2 relative w-full">
              <div className="inline-flex items-baseline gap-2 md:gap-2.5 relative flex-wrap">
                <div className="relative w-fit [font-family:'Gilroy-Semibold',Helvetica] font-normal text-[#222222] text-4xl md:text-[50px] tracking-[0] leading-tight md:leading-[50px]">
                  5,00,000+
                </div>

                <div className="relative w-fit [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#888888] text-lg md:text-xl tracking-[0] leading-6">
                  Cycles
                </div>
              </div>

              <div className="relative w-fit [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#333333] text-lg md:text-xl tracking-[0] leading-6 md:leading-[26px]">
                Production Cycles Tracked
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-10 p-6 md:p-8 relative w-full md:flex-1 bg-white rounded-2xl overflow-hidden border border-solid border-[#cccccc]">
            <img
              className="relative w-12 h-12 md:w-[60px] md:h-[60px]"
              alt="Mingcute time fill"
              src="https://c.animaapp.com/mgrw22tcoYU1ig/img/mingcute-time-fill.svg"
            />

            <div className="inline-flex flex-col items-start gap-2 relative">
              <div className="inline-flex items-baseline gap-2 md:gap-2.5 relative flex-wrap">
                <div className="relative w-fit [font-family:'Gilroy-Semibold',Helvetica] font-normal text-[#222222] text-4xl md:text-[50px] tracking-[0] leading-tight md:leading-[50px]">
                  20,000+
                </div>

                <div className="relative w-fit [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#888888] text-lg md:text-xl tracking-[0] leading-6">
                  Hours
                </div>
              </div>

              <div className="relative w-fit [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#333333] text-lg md:text-xl tracking-[0] leading-6 md:leading-[26px]">
                Downtime Monitored
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-[46px] relative w-full">
          <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-10 p-6 md:p-8 relative w-full md:flex-1 bg-white rounded-2xl overflow-hidden border border-solid border-[#cccccc]">
            <img
              className="relative w-12 h-12 md:w-[60px] md:h-[60px]"
              alt="Bxs data"
              src="https://c.animaapp.com/mgrw22tcoYU1ig/img/bxs-data.svg"
            />

            <div className="inline-flex flex-col items-start gap-2 relative">
              <div className="inline-flex items-baseline gap-2 md:gap-2.5 relative flex-wrap">
                <div className="relative w-fit [font-family:'Gilroy-Semibold',Helvetica] font-normal text-[#222222] text-4xl md:text-[50px] tracking-[0] leading-tight md:leading-[50px]">
                  2,00,000+
                </div>

                <div className="relative w-fit [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#888888] text-lg md:text-xl tracking-[0] leading-6">
                  Daily
                </div>
              </div>

              <div className="relative w-fit [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#333333] text-lg md:text-xl tracking-[0] leading-6 md:leading-[26px]">
                Data Points Analyzed
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-10 p-6 md:p-8 relative w-full md:flex-1 bg-white rounded-2xl overflow-hidden border border-solid border-[#cccccc]">
            <img
              className="relative w-12 h-12 md:w-[60px] md:h-[60px]"
              alt="Mdi report box"
              src="https://c.animaapp.com/mgrw22tcoYU1ig/img/mdi-report-box.svg"
            />

            <div className="inline-flex flex-col items-start gap-2 relative">
              <div className="inline-flex items-baseline gap-2 md:gap-2.5 relative flex-wrap">
                <div className="relative w-fit [font-family:'Gilroy-Semibold',Helvetica] font-normal text-[#222222] text-4xl md:text-[50px] tracking-[0] leading-tight md:leading-[50px]">
                  50+
                </div>

                <div className="relative w-fit [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#888888] text-lg md:text-xl tracking-[0] leading-6">
                  Daily
                </div>
              </div>

              <div className="relative w-fit [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#333333] text-lg md:text-xl tracking-[0] leading-6 md:leading-[26px]">
                Digital Reports Generated
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-10 p-6 md:p-8 relative w-full md:flex-1 bg-white rounded-2xl overflow-hidden border border-solid border-[#cccccc]">
            <img
              className="relative w-12 h-12 md:w-[60px] md:h-[60px]"
              alt="Material symbols"
              src="https://c.animaapp.com/mgrw22tcoYU1ig/img/material-symbols-settings-rounded.svg"
            />

            <div className="inline-flex flex-col items-start gap-2 relative">
              <div className="inline-flex items-baseline gap-2 md:gap-2.5 relative flex-wrap">
                <div className="relative w-fit [font-family:'Gilroy-Semibold',Helvetica] font-normal text-[#222222] text-4xl md:text-[50px] tracking-[0] leading-tight md:leading-[50px]">
                  5000+
                </div>

                <div className="relative w-fit [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#888888] text-lg md:text-xl tracking-[0] leading-6">
                  Daily
                </div>
              </div>

              <div className="relative w-fit [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#333333] text-lg md:text-xl tracking-[0] leading-6 md:leading-[26px]">
                Tools Monitored
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;