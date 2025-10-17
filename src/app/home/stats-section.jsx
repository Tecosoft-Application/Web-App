import React from "react";

const StatsSection = () => {
  
  const titleFirstLine = "Turning Operational Data into";
  const titleSecondLine = "Actionable Intelligence";
  const subtitle = "Tecosoft turns operational and asset data into actionable intelligence with AI and Digital Twin technology - enabling predictive insights, optimized workflows, and reliable, efficient, data-driven decision making";

  const stats = [
    {
      icon: "./assets/icons/stats/machine.svg",
      alt: "Ix machine a filled",
      number: "500+",
      description: "Machines/Assets Connected",
    },
    {
      icon: "./assets/icons/stats/redo-alt.svg",
      alt: "Solid redo alt",
      number: "5,00,000+",
      unit: "Cycles",
      description: "Production Cycles Tracked",
    },
    {
      icon: "./assets/icons/stats/time-fill.svg",
      alt: "Mingcute time fill",
      number: "20,000+",
      unit: "Hours",
      description: "Downtime Monitored",
    },
    {
      icon: "./assets/icons/stats/bxs-data.svg",
      alt: "Bxs data",
      number: "2,00,000+",
      unit: "Daily",
      description: "Data Points Analyzed",
    },
    {
      icon: "./assets/icons/stats/mdi-report-box.svg",
      alt: "Mdi report box",
      number: "50+",
      unit: "Daily",
      description: "Digital Reports Generated",
    },
    {
      icon: "./assets/icons/stats/settings-rounded.svg",
      alt: "Material symbols",
      number: "5000+",
      unit: "Daily",
      description: "Tools Monitored",
    },
  ];

  const StatCard = ({ icon, alt, number, unit, description }) => (
    <div className="flex flex-col items-start gap-6 md:gap-8 lg:gap-10 p-6 md:p-8 relative w-full md:flex-1 bg-white rounded-2xl overflow-hidden border-[1.5px] border-solid border-[#cccccc] hover:border-[#00b7ff]">
      <img className="relative w-12 h-12 md:w-[60px] md:h-[60px]" alt={alt} src={icon} />
      <div className="flex flex-col items-start gap-2 relative w-full">
        <div className="inline-flex items-baseline gap-2 md:gap-2.5 relative flex-wrap">
          <div className="relative w-fit [font-family:'Gilroy-Semibold',Helvetica] font-normal text-[#222222] text-4xl md:text-[50px] tracking-[0] leading-tight md:leading-[50px]">
            {number}
          </div>
          {unit && (
            <div className="relative w-fit [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#888888] text-lg md:text-xl tracking-[0] leading-6">
              {unit}
            </div>
          )}
        </div>
        <div className="relative w-fit [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#333333] text-lg md:text-xl tracking-[0] leading-6 md:leading-[26px]">
          {description}
        </div>
      </div>
    </div>
  );

  const StatsRow = ({ items, alignment = "start" }) => (
    <div className={`flex flex-col md:flex-row ${alignment === "center" ? "items-center" : "items-start"} gap-6 md:gap-8 lg:gap-[46px] relative w-full`}>
      {items.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );

  const firstRowStats = stats.slice(0, 3);
  const secondRowStats = stats.slice(3, 6);

  return (
    <div className="flex flex-col items-center gap-12 md:gap-16 lg:gap-[70px] px-4 sm:px-6 md:px-8 lg:px-0 py-12 md:py-16 lg:py-20 relative w-full bg-white">
      <div className="flex flex-col w-full max-w-[90%] md:max-w-[700px] lg:max-w-[1112px] items-center gap-6 md:gap-8 relative z-10">
        <div className="inline-flex flex-col items-center gap-1.5 relative">
          <div className="relative w-full text-center px-2 font-medium text-[#333333] text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-[0] leading-tight lg:leading-[60px]">
            {titleFirstLine}
          </div>
          <div className="relative w-full text-center px-2 bg-[linear-gradient(227deg,rgba(0,183,255,1)_0%,rgba(14,176,92,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] tracking-[0] leading-tight lg:leading-[60px]">
            {titleSecondLine}
          </div>
        </div>
        <p className="relative w-full opacity-75 [font-family:'Gilroy-Regular',Helvetica] font-normal text-[#333333] text-sm sm:text-base md:text-lg text-center tracking-[0] leading-6 md:leading-7 px-2">
          {subtitle}
        </p>
      </div>
      <div className="flex flex-col w-full max-w-[90%] md:max-w-[95%] lg:max-w-[1312px] items-start gap-6 md:gap-8 lg:gap-[46px] relative z-10">
        <StatsRow items={firstRowStats} alignment="start" />
        <StatsRow items={secondRowStats} alignment="center" />
      </div>
    </div>
  );
};

export default StatsSection;