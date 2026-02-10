"use client";

import Image from "next/image";

export default function CapabilityCard2() {
  const protocols = [
    { name: "CNC", logo: "/assets/platform/eagle/CNC.png" },
    { name: "VMC", logo: "/assets/platform/eagle/VMC.png" },
    { name: "HMC", logo: "/assets/platform/eagle/HMC.png" },
    {
      name: "Molding Machine",
      logo: "/assets/platform/eagle/molding.png",
    },
  ];

  return (
    <div className="bg-white box-border content-stretch flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[30px] xl:gap-[36px] items-start overflow-hidden p-4 sm:p-5 md:p-6 lg:p-[40px] xl:p-[48px] rounded-lg sm:rounded-xl md:rounded-2xl w-full relative shadow-lg sm:shadow-xl md:shadow-2xl">
      <p className="font-semibold leading-tight sm:leading-snug md:leading-normal lg:leading-[36px] xl:leading-[40px] not-italic relative shrink-0 text-[#005b80] text-base sm:text-lg md:text-xl lg:text-[31px] xl:text-[34px]">{`Universal Asset Connectivity`}</p>

      <div className="relative overflow-hidden w-full">
        <div className="flex animate-scroll gap-6 sm:gap-8 md:gap-10 lg:gap-[80px] xl:gap-[100px]" style={{ width: 'max-content' }}>
          {/* Duplicate multiple times for seamless loop */}
          {[...protocols, ...protocols, ...protocols].map((protocol, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-14 sm:h-16 md:h-20 lg:h-[138px] xl:h-[156px] w-20 sm:w-24 md:w-28 lg:min-w-[200px] xl:min-w-[240px]"
            >
              <Image
                src={protocol.logo}
                alt={`${protocol.name} machine logo`}
                width={200}
                height={140}
                className="object-contain w-full h-full"
                sizes="(max-width: 640px) 80px, (max-width: 768px) 96px, (max-width: 1024px) 112px, (max-width: 1280px) 200px, 240px"
                quality={90}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
