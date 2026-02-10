"use client";
import { useState, useEffect } from "react";
import {
  benefitsIconMap,
  type BenefitsIconType,
} from "../../../components/icons/BenefitsIcons";
import { benefitsContent } from "../../../constants/connected-factories/production-digitization";

interface BenefitCardProps {
  icon: BenefitsIconType;
  title: string;
  bgColor: string;
  iconColor: string;
}

function BenefitCard({ icon, title, bgColor, iconColor }: BenefitCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const IconComponent = benefitsIconMap[icon];

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const handleMouseEnter = () => {
    if (isDesktop) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    if (isDesktop) {
      setIsHovered(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 md:gap-7 items-center w-full max-w-[200px]">
      <div
        className={`flex items-center justify-center p-5 md:p-6 rounded-xl transition-colors duration-300 ${
          isDesktop ? "cursor-pointer hover:shadow-md" : ""
        }`}
        style={{ backgroundColor: isHovered ? iconColor : bgColor }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <IconComponent color={isHovered ? "#FFFFFF" : iconColor} />
      </div>
      <p className=" font-medium leading-relaxed text-sm md:text-base text-black text-center">
        {title}
      </p>
    </div>
  );
}

function SectionHeader() {
  return (
    <div className="flex flex-col gap-3 md:gap-4 items-center text-center w-full max-w-4xl px-4">
      <p className=" font-semibold  leading-tight text-[#282828] text-2xl md:text-3xl lg:text-4xl">
        {benefitsContent.sectionTitle}
      </p>
      <p className=" font-medium leading-relaxed text-[#8e8e8e] text-sm md:text-base">
        {benefitsContent.sectionDescription}
      </p>
    </div>
  );
}

export function BenefitsSection() {
  return (
    <div className="bg-white flex flex-col gap-12 md:gap-16 lg:gap-[60px] items-center overflow-clip px-6 md:px-12 lg:px-24 py-12 md:py-16 lg:py-[60px] w-full">
      <SectionHeader />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 lg:gap-12 xl:gap-[60px] w-full max-w-[1400px] justify-items-center">
        {benefitsContent.benefits.map((benefit) => (
          <BenefitCard
            key={benefit.id}
            icon={benefit.icon as BenefitsIconType}
            title={benefit.title}
            bgColor={benefit.bgColor}
            iconColor={benefit.iconColor}
          />
        ))}
      </div>
    </div>
  );
}
