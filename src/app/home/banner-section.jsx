// ***************************** Import packages ***********************************************

import React from "react";
import Image from "next/image";

// Z-index constants - Banner should be below navbar (navbar uses 999-1001)
const Z_INDEX = {
  VIDEO_LAYER: 1,       // Video background (bottom layer)
  OVERLAY_LAYER: 2,     // Dark overlay above video
  CONTENT_LAYER: 10,    // Banner content (below navbar)
};

const ClientSlider = () => {
  const clients = [
    { name: "MORFO", logo: "./assets/images/banner-morfo.svg" },
    { name: "flomodai", logo: "./assets/images/banner-flomodai.svg" },
    { name: "Qileo", logo: "./assets/images/banner-qileo.svg" },
    { name: "ramify", logo: "./assets/images/banner-ramify.svg" },
    { name: "WEGLOT", logo: "./assets/images/banner-weglot.svg" },
  ];

  return (
    <div className="relative overflow-hidden pt-8 lg:pt-10 ">
      <div className="flex animate-scroll gap-12 lg:gap-16">
        {/* Duplicate for seamless loop */}
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center min-w-[140px] lg:min-w-[180px]"
          >
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="h-7 lg:h-9 w-auto opacity-80 hover:opacity-100 transition-opacity filter brightness-0 invert"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

const BannerSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: Z_INDEX.VIDEO_LAYER }}
      >
        <source src="./assets/video/banner-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          background:
            'url("/assets/images/banner-black-cover.svg") no-repeat center center',
          backgroundSize: "cover",
          zIndex: Z_INDEX.OVERLAY_LAYER,
        }}
      />

      {/* Content */}
      <div className="relative" style={{ zIndex: Z_INDEX.CONTENT_LAYER }}>
        <div className="max-w-[90%] lg:max-w-7xl mx-auto px-4 lg:px-0">
          <div className="pt-24 pb-12 lg:pt-48 lg:pb-24">
            {/* Hero Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[90px] font-bold text-white leading-tight lg:leading-[1.1] mb-6">
              Building Intelligent Ecosystems for the{" "}
              <span className="text-[#0eb05c] block lg:inline">
                Next-Gen Industries
              </span>
            </h1>

            <div className="relative flex flex-col lg:flex-row lg:items-center mb-4">
              <p className="text-base sm:text-lg lg:text-[22px] font-medium text-white/90 max-w-3xl leading-relaxed mb-6 lg:mb-0">
                With the power of IIoT, AI, and Digital Twins, Tecosoft
                transforms operations <br className="lg:hidden" />
                across industries into intelligent connected ecosystems.
              </p>

              {/* Horizontal Line - Desktop Only (Absolute) */}
              <img
                src="/assets/icons/h-line.svg"
                alt=""
                className="hidden lg:block absolute left-[50%] right-0 bottom-3 -translate-y-1/2 h-auto w-[460px] max-w-full"
              />

              {/* Book a Demo Link - Desktop */}
              <a
                href="#demo"
                className="hidden lg:flex items-center gap-2 text-white font-medium text-lg whitespace-nowrap hover:text-[#0eb05c] transition-colors cursor-pointer ml-auto pt-13 "
              >
                Book a Demo
                <span className="text-xl">
                  <Image
                    src="/assets/icons/white-right-arrow.svg"
                    alt=""
                    width={16}
                    height={20}
                  />
                </span>
              </a>
            </div>
            {/* Book a Demo Button - Mobile */}
            <div className="lg:hidden mb-12">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 bg-[#0eb05c] text-white px-8 py-3 rounded-lg hover:bg-[#0d9d52] transition-colors font-medium text-lg"
              >
                Book a Demo
                <span>
                  <Image
                    src="/assets/icons/white-right-arrow.svg"
                    alt=""
                    width={16}
                    height={20}
                  />
                </span>
              </a>
            </div>

            {/* Client Logos Slider */}
            <ClientSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
