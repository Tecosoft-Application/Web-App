"use client";

import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 👇 Import all your images directly from the public folder
// import Morfo from "../../../public/assets/images/banner-morfo.svg";
// import Flomodai from "../../../public/assets/images/banner-flomodai.svg";
// import Qileo from "../../../public/assets/images/banner-qileo.svg";
// import Ramify from "../../../public/assets/images/banner-ramify.svg";
// import Weglot from "../../../public/assets/images/banner-weglot.svg";

// 👇 Dynamically import react-slick to avoid SSR issues
const Slider = dynamic(() => import("react-slick"), { ssr: false });

const ClientContent = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 0,
    infinite: true,
    speed: 5000,
    cssEase: "linear", // makes smooth continuous scroll
    arrows: false,
    pauseOnHover: false,
    slidesToShow: 4,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
    dots: false,
  };

  return (
    <div>
      <Slider {...settings} className="gap-8">
        <div className="flex items-center justify-center h-24">
          <Image
            src="/assets/images/banner-morfo.svg"
            alt="Morfo logo"
            width={120}
            height={48}
            className="h-12 w-auto max-w-[120px] mx-auto"
          />
        </div>

        <div className="flex items-center justify-center h-24">
          <Image
            src="/assets/images/banner-flomodai.svg"
            alt="Flomodai logo"
            width={120}
            height={48}
            className="h-12 w-auto max-w-[120px] mx-auto"
          />
        </div>

        <div className="flex items-center justify-center h-24">
          <Image
            src="/assets/images/banner-qileo.svg"
            alt="Qileo logo"
            width={120}
            height={48}
            className="h-12 w-auto max-w-[120px] mx-auto"
          />
        </div>

        <div className="flex items-center justify-center h-24">
          <Image
            src="/assets/images/banner-ramify.svg"
            alt="Ramify logo"
            width={120}
            height={48}
            className="h-12 w-auto max-w-[120px] mx-auto"
          />
        </div>

        <div className="flex items-center justify-center h-24">
          <Image
            src="/assets/images/banner-weglot.svg"
            alt="Weglot logo"
            width={120}
            height={48}
            className="h-12 w-auto max-w-[120px] mx-auto"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ClientContent;
