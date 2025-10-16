import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const ProductCard = ({ image, title, subtitle, description, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="  flex flex-col items-center justify-between p-6 md:p-8 lg:p-10 relative flex-1 rounded-xl transition-all duration-500 group cursor-pointer "
      style={{
        background: "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(10px)",
        border: "1.5px solid transparent",
        // backgroundImage: isHovered
        //   ? "linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05)), linear-gradient(90deg, rgba(49,152,223,1) 0%, rgba(54,212,255,1) 49%, rgba(0,255,132,1) 100%)"
        //   : "linear-gradient(rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.03)), linear-gradient(90deg, rgba(49,152,223,0.5) 0%, rgba(54,212,255,0.5) 49%, rgba(0,255,132,0.5) 100%)",
        // backgroundImage:
        // "linear-gradient(rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.03)), linear-gradient(90deg, rgba(49,152,223,0.5) 0%, rgba(54,212,255,0.5) 49%, rgba(0,255,132,0.5) 100%)",
        backgroundOrigin: "border-box",
        backgroundClip: "padding-box, border-box",
        transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 20px 40px rgba(54,212,255,0.3)"
          : "0 4px 15px rgba(0,0,0,0.2)",
        borderBottom: "1.25px solid",
        borderImageSource: "linear-gradient(90deg, #36D4FE 0%, #00FF84 100%)",
        borderImageSlice: 1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="w-full h-40 md:h-48 lg:h-44 flex items-center justify-center mb-6 md:mb-8 relative overflow-hidden ">
        <img
          src={image}
          alt={title}
          className="max-w-full max-h-full object-contain transition-transform duration-500 rounded-[10px]"
          style={{
            transform: isHovered ? "scale(1.1) " : "scale(1)",
          }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-4 md:gap-6 w-full">
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center gap-0.5 md:gap-1">
          <h3 className="text-white text-2xl md:text-3xl lg:text-[34px] font-semibold tracking-tight text-center">
            {title}
          </h3>
          <p className="text-[#00b7ff] text-lg md:text-xl lg:text-[22px] font-medium text-center">
            {subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-white/75 text-sm md:text-base lg:text-lg font-medium text-center leading-relaxed">
          {description}
        </p>

        {/* Explore Link */}
        <button
          className="inline-flex items-center gap-2 transition-all duration-300"
          style={{
            transform: isHovered ? "translateX(5px)" : "translateX(0)",
          }}
        >
          <span className="text-lg md:text-xl lg:text-[22px] font-semibold bg-gradient-to-r from-[#36d4ff] via-[#36d4ff] to-[#00ff84] bg-clip-text text-transparent">
            Explore
          </span>
          <ArrowRight
            className="text-[#36d4ff]"
            size={20}
            style={{
              transform: isHovered ? "translateX(5px)" : "translateX(0)",
              transition: "transform 0.3s ease",
            }}
          />
        </button>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0e27] py-12 md:py-16 lg:py-20">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="./assets/images/platform-bg.png"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[#3b83f129] backdrop-blur-2xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 md:gap-6 mb-10 md:mb-12 lg:mb-16">
          <div className="flex flex-col items-center gap-1 md:gap-1.5">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-center leading-tight">
              Our Platforms
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-center leading-tight bg-gradient-to-r from-[#00b7ff] to-[#0eb05c] bg-clip-text text-transparent">
              From Edge to Insights
            </h3>
          </div>

          <p className="text-white/75 text-base md:text-lg font-normal text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl leading-relaxed px-4">
            Whether it's a factory, utility, or city — our platforms turn data
            into intelligence and intelligence into impact.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">
          <ProductCard
            image="./assets/images/eagle.png"
            title="Eagle"
            subtitle="IOT Gateway Platform"
            description="EAGLE is an advanced edge computing IoT gateway that connects machines, sensors, meters, and other industrial assets, acting as the backbone for digital transformation. It enables real-time data acquisition, monitoring, and control, providing seamless, reliable, and intelligent connectivity across operations."
            delay={0}
          />

          <ProductCard
            image="./assets/images/analytics.png"
            title="Tecosoft Analytics"
            subtitle="IOT Cloud Platform"
            description="Tecosoft Analytics is an intelligent enterprise analytics platform that transforms operational data into actionable insights. With embedded AI and Digital Twin capabilities, it delivers dashboards, reports, and predictive intelligence to enable smarter decisions and connected operations."
            delay={200}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
