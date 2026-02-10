"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface BenefitCardProps {
  iconPath: string | undefined;
  title: string;
  description: string;
  bgColor: string;
  isActive?: boolean;
}

function BenefitCard({
  iconPath,
  title,
  description,
  bgColor,
  isActive = false,
}: BenefitCardProps) {
  return (
    <div
      className={`w-full h-full relative rounded-[20px] transition-transform duration-300 ease-in-out sm:hover:scale-105 cursor-pointer ${
        isActive ? "scale-[1.05]" : ""
      }`}
      style={{ backgroundColor: bgColor }}
    >
      <div className="flex flex-col h-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] lg:gap-[18px] 2xl:gap-[24px] items-start p-[16px] lg:p-[18px] 2xl:p-[24px] relative w-full h-full">
          <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center overflow-hidden p-[16px] lg:p-[18px] 2xl:p-[20px] relative rounded-[12px] shrink-0">
            {iconPath ? (
              <div className="w-[32px] h-[32px] flex items-center justify-center">
                <Image
                  src={iconPath}
                  alt={title}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
            ) : (
              <div className="w-[32px] h-[32px]" />
            )}
          </div>

          <div className="content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 w-full">
            <p className=" font-semibold  leading-[22px] lg:leading-[24px] 2xl:leading-[26px] relative shrink-0 text-[#181818] text-[18px] lg:text-[19px] 2xl:text-[20px] w-full">
              {title}
            </p>
            <p className=" font-normal leading-[19px] lg:leading-[20px] 2xl:leading-[21px] relative shrink-0 text-[#777777] text-[14px] lg:text-[15px] 2xl:text-[16px] w-full">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function WhyUsSection({
  content: whyDigitizeContent,
}: {
  content?: any;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 640) return; // Disable scroll tracking on desktop

    const onScroll = () => {
      const cards = scrollRef.current?.querySelectorAll("[data-benefit-card]");
      if (!cards) return;

      const viewportCenter = window.innerHeight / 2;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        // Check if card is centered in viewport
        if (rect.top < viewportCenter && rect.bottom > viewportCenter) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Initial check

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="bg-white relative w-full">
      <div className="flex flex-col items-center w-full">
        <div className="box-border content-stretch flex flex-col gap-[40px] md:gap-[60px] items-center pb-[60px] md:pb-[90px] pt-[40px] md:pt-[60px] px-[20px] sm:px-[40px] lg:px-[60px] 2xl:px-[100px] relative w-full">
          {/* Header */}
          <div className="content-stretch flex flex-col gap-[12px] md:gap-[16px] items-center not-italic relative shrink-0 text-center w-full max-w-[800px]">
            <p className=" font-semibold  leading-[32px] sm:leading-[38px] md:leading-[44px] relative shrink-0 text-[#282828] text-[28px] sm:text-[32px] md:text-[36px] whitespace-normal lg:whitespace-pre">
              {whyDigitizeContent.sectionTitle}
            </p>
            <p className=" font-medium  leading-[20px] md:leading-[23px] w-full relative shrink-0 text-[#8e8e8e] text-[14px] md:text-[16px]">
              {whyDigitizeContent.sectionDescription}
            </p>
          </div>

          {/* Content */}
          <div className="content-stretch flex flex-col lg:flex-row gap-[40px] lg:gap-[50px] 2xl:gap-[80px] items-center relative shrink-0 w-full">
            {/* Image */}
            <div className="content-stretch flex h-[300px] sm:h-[400px] lg:h-[380px] 2xl:h-[476px] items-center relative shrink-0 w-full sm:w-[300px] lg:w-[280px] 2xl:w-[350px] mx-auto lg:mx-0 ">
              <div className="absolute bg-[#00b8db] h-[300px] sm:h-[400px] lg:h-[380px] 2xl:h-[476px] right-[-12px] sm:right-[-20px] lg:right-[-16px] rounded-[12px] top-[12px] sm:top-[20px] lg:top-[16px] w-full sm:w-[300px] lg:w-[280px] 2xl:w-[350px]" />
              <div className="basis-0 grow h-full min-h-px min-w-px relative rounded-[12px] shrink-0 z-10">
                <Image
                  alt={whyDigitizeContent.imageAlt}
                  className="absolute inset-0 max-w-none object-center object-cover pointer-events-none rounded-[12px] w-full h-full"
                  src={whyDigitizeContent.image}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 300px, (max-width: 1536px) 280px, 350px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            </div>

            {/* Benefits Grid */}

            {whyDigitizeContent.benefits.length === 6 ? (
              <div
                ref={scrollRef}
                className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] lg:gap-[24px] 2xl:gap-[36px] w-full lg:flex-1 auto-rows-fr snap-y snap-mandatory sm:snap-none"
              >
                {whyDigitizeContent.benefits?.map((item: any, index: number) => (
                  <div key={item.id} data-benefit-card className="h-full snap-center">
                    <BenefitCard
                      iconPath={item.icon}
                      title={item.title}
                      description={item.description}
                      bgColor={item.bgColor}
                      isActive={activeIndex === index}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div
                ref={scrollRef}
                className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] lg:gap-[24px] 2xl:gap-[36px] w-full lg:flex-1 auto-rows-fr snap-y snap-mandatory sm:snap-none"
              >
                {whyDigitizeContent.benefits?.map((item: any, index: number) => (
                  <div key={item.id} data-benefit-card className="h-full snap-center">
                    <BenefitCard
                      iconPath={item.icon}
                      title={item.title}
                      description={item.description}
                      bgColor={item.bgColor}
                      isActive={activeIndex === index}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
