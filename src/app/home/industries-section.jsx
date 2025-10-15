import React from "react";

const IndustriesSection = () => {
  return (
    <div className="flex flex-col items-start gap-10 md:gap-[60px] px-4 sm:px-8 md:px-12 lg:px-[100px] py-12 md:py-20 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
        <p className="relative w-full mt-[-1.00px] [font-family:'Gilroy-Medium',Helvetica] font-medium text-[#111111] text-2xl sm:text-3xl md:text-4xl lg:text-[56px] tracking-[0] leading-tight md:leading-[60px]">
          The Future of Industries Runs on Intelligence
        </p>

        <div className="relative w-fit bg-[linear-gradient(227deg,rgba(0,183,255,1)_0%,rgba(14,176,92,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Gilroy-Semibold',Helvetica] font-normal text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-[56px] tracking-[0] leading-tight md:leading-[60px]">
          Are You Ready?
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-[60px] relative self-stretch w-full flex-[0_0_  auto]">
        <div className="flex flex-col w-full lg:w-[572px] items-start gap-6 md:gap-[30px] relative">
          <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] [font-family:'Gilroy-Semibold',Helvetica] font-normal text-[#111111] text-xl md:text-2xl lg:text-[26px] tracking-[0] leading-[normal]">
              Manufacturing
            </div>

            <p className="relative self-stretch [font-family:'Gilroy-Regular',Helvetica] font-normal text-[#666666] text-base md:text-lg lg:text-xl tracking-[0] leading-relaxed md:leading-[26px]">
              Complete visibility into production, quality, tools and
              maintenance, enabling data-driven decisions and optimized
              workflows to maximize OEE.
            </p>
          </div>

          <img
            className="relative self-stretch w-full h-[1.25px]"
            alt="Line"
            src="https://c.animaapp.com/mgrw22tcoYU1ig/img/line-2-4.svg"
          />

          <div className="relative self-stretch [font-family:'Gilroy-Regular',Helvetica] font-normal text-[#111111] text-lg md:text-xl lg:text-[26px] tracking-[-0.26px] leading-[30px]">
            Energy &amp; Utilities
          </div>

          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/mgrw22tcoYU1ig/img/line-2.svg"
          />

          <div className="relative self-stretch [font-family:'Gilroy-Regular',Helvetica] font-normal text-[#111111] text-lg md:text-xl lg:text-[26px] tracking-[-0.26px] leading-[30px]">
            Oil &amp; Gas
          </div>

          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/mgrw22tcoYU1ig/img/line-2.svg"
          />

          <div className="relative self-stretch [font-family:'Gilroy-Regular',Helvetica] font-normal text-[#111111] text-lg md:text-xl lg:text-[26px] tracking-[-0.26px] leading-[30px]">
            Healthcare
          </div>

          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/mgrw22tcoYU1ig/img/line-2.svg"
          />

          <div className="relative self-stretch [font-family:'Gilroy-Regular',Helvetica] font-normal text-[#111111] text-lg md:text-xl lg:text-[26px] tracking-[-0.26px] leading-[30px]">
            Logistics &amp; Warehousing
          </div>

          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/mgrw22tcoYU1ig/img/line-2.svg"
          />

          <div className="relative self-stretch [font-family:'Gilroy-Regular',Helvetica] font-normal text-[#111111] text-lg md:text-xl lg:text-[26px] tracking-[-0.26px] leading-[30px]">
            Smart City
          </div>

          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src="https://c.animaapp.com/mgrw22tcoYU1ig/img/line-2.svg"
          />
        </div>

        <img
          className="relative w-full lg:w-[680px] max-w-full"
          alt="Frame"
          src="https://c.animaapp.com/mgrw22tcoYU1ig/img/frame-145.svg"
        />
      </div>
    </div>
  );
};

export default IndustriesSection;
