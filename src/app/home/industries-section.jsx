import React, { useState } from "react";

const IndustriesSection = () => {
  const [selectedIndustry, setSelectedIndustry] = useState("manufacturing");

  const industries = [
    {
      name: "Manufacturing",
      description:
        "Complete visibility into production, quality, tools and maintenance, enabling data-driven decisions and optimized workflows to maximize OEE.",
      image: "./assets/images/industry/manufacturing.svg",
      seletct: "manufacturing"
    },
    {
      name: "Energy & Utilities",
      description:
        "Intelligent monitoring and predictive analytics for equipment and energy usage, supporting proactive maintenance and optimized operations.",
      image: "./assets/images/industry/energy.svg",
      seletct: "energy"
    },
    {
      name: "Oil & Gas",
      description:
        "Virtual modeling and predictive monitoring of assets to ensure safe, efficient, and uninterrupted operations.",
      image: "./assets/images/industry/oil.svg",
      seletct: "oil"
    },
    {
      name: "Healthcare",
      description:
        "AI-enabled digital twins and analytics to enhance diagnostics, streamline workflows, and provide real-time operational insights.",
      image: "./assets/images/industry/health-care.svg",
      seletct: "healthcare"
    },
    {
      name: "Logistics & Warehousing",
      description:
        "Data-driven oversight of supply chains, fleet, and warehouse operations to improve efficiency and anticipate operational bottlenecks.",
      image: "./assets/images/industry/ware-house.svg",
      seletct: "logistics"
    },
    {
      name: "Smart City",
      description:
        "Connected monitoring and analytics for infrastructure, utilities, and citizen services, supporting sustainable, intelligent urban operations.",
      image: "./assets/images/industry/smart-city.svg",
      seletct: "smart-city"
    },
  ];

  // Get the selected industry object
  const selectedIndustryObj = industries.find(
    (industry) => industry.seletct === selectedIndustry
  );

  return (
    <div className="flex flex-col items-start gap-10 md:gap-[60px] px-4 sm:px-8 md:px-12 lg:px-[100px] py-12 md:py-20 relative self-stretch w-full flex-[0_0_auto] bg-white">
      <div className="flex flex-col items-start gap-1.5 relative self-stretch w-full flex-[0_0_auto]">
        <p className="relative w-full mt-[-1.00px] font-medium text-[#111111] text-2xl sm:text-3xl md:text-4xl lg:text-[56px] tracking-[0] leading-tight md:leading-[60px]">
          The Future of Industries Runs on Intelligence
        </p>

        <div className="relative w-fit bg-gradient-to-r from-[#00B7FF] to-[#0EB05C] bg-clip-text text-transparent font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[56px] tracking-[0] leading-tight md:leading-[60px]">
          Are You Ready?
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 md:gap-[60px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-full lg:w-[572px] items-start gap-6 md:gap-[30px] relative">
          {industries.map((industry, index) => (
            <React.Fragment key={industry.seletct}>
              <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <button
                  onClick={() => setSelectedIndustry(industry.seletct)}
                  className={`relative self-stretch mt-[-1.00px] font-semibold text-xl md:text-2xl lg:text-[26px] tracking-[0] leading-[normal] text-left transition-all duration-300 ${
                    selectedIndustry === industry.seletct
                      ? "text-[#111111]"
                      : "text-[#999999] hover:text-[#111111]"
                  }`}
                >
                  {industry.name}
                </button>

                {/* Show description only for selected industry */}
                {selectedIndustry === industry.seletct && (
                  <p className="relative self-stretch font-normal text-base md:text-lg lg:text-xl tracking-[0] leading-relaxed md:leading-[26px] text-[#666666] transition-all duration-300">
                    {industry.description}
                  </p>
                )}
              </div>

              <div
                className={`relative self-stretch h-px transition-all duration-300 ${
                  selectedIndustry === industry.seletct
                    ? "bg-gradient-to-r from-[#00B7FF] to-[#0EB05C]"
                    : "bg-[#E5E5E5]"
                }`}
              />
            </React.Fragment>
          ))}
        </div>

        <div className="relative w-full lg:w-[600px] max-w-full">
          {/* Image with grayscale filter that transitions to color */}
          <img
            className="relative w-full transition-all duration-700 ease-in-out"
            alt="Industry visualization"
            src={selectedIndustryObj?.image || "./assets/images/industry/manufacturing.svg"}
            style={{
              filter: selectedIndustry ? 'grayscale(0%)' : 'grayscale(100%)',
            }}
          />
          
          {/* Gradient overlay that fades in when industry is selected */}
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-700"
            style={{ 
              background: "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
              mixBlendMode: "overlay",
              opacity: selectedIndustry ? 1 : 0
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;
