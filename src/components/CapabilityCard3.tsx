"use client";

import Image from "next/image";

export default function CapabilityCard3() {
  const protocols = [
    {
      name: "ethernet",
      logo: "/assets/platform/eagle/capability/ethernet.png",
    },
    { name: "wifi", logo: "/assets/platform/eagle/capability/wifi.png" },
    { name: "GSM", logo: "/assets/platform/eagle/capability/gsm.png" },
  ];

  return (
    <div className="bg-[#005b80] box-border content-stretch flex flex-col gap-3 sm:gap-4 md:gap-5 lg:gap-[30px] xl:gap-[36px] items-start overflow-hidden p-4 sm:p-5 md:p-6 lg:p-[40px] xl:p-[48px] rounded-lg sm:rounded-xl md:rounded-2xl w-full relative shadow-lg sm:shadow-xl md:shadow-2xl">
      <p className="font-semibold leading-tight sm:leading-snug md:leading-normal lg:leading-[36px] xl:leading-[40px] not-italic relative shrink-0 text-white text-base sm:text-lg md:text-xl lg:text-[31px] xl:text-[34px]">{`Internet & Network Connectivity`}</p>

      <div className="relative overflow-hidden w-full">
        <div
          className="flex animate-scroll gap-6 sm:gap-8 md:gap-10 lg:gap-[60px] xl:gap-[70px]"
          style={{ width: "max-content" }}
        >
          {/* Duplicate multiple times for seamless loop */}
          {[...protocols, ...protocols, ...protocols].map((protocol, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex items-center justify-center h-14 sm:h-16 md:h-20 lg:h-[138px] xl:h-[156px] w-20 sm:w-24 md:w-28 lg:min-w-[200px] xl:min-w-[240px]"
            >
              <Image
                src={protocol.logo}
                alt={`${protocol.name} connectivity logo`}
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
          animation: scroll 15s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
}
