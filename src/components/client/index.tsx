"use client";
import React from "react";

import Image from "next/image";

const ClientSlider = () => {
  const clients = [
    { name: "Ennar", logo: "/assets/pages/home/client/ennar.png", width: 140, height: 80 },
    {
      name: "Fasteners India",
      logo: "/assets/pages/home/client/fasteners-india.png",
      width: 140,
      height: 80,
    },
    { name: "Fujitec", logo: "/assets/pages/home/client/fujitec.png", width: 140, height: 90 },
    { name: "Gaha", logo: "/assets/pages/home/client/gaha.png", width: 140, height: 60 },
    { name: "Greaves", logo: "/assets/pages/home/client/greaves.png", width: 140, height: 80 },
    // { name: "MacPro", logo: "/assets/pages/home/client/mac-pro.png", width: 140, height: 80 },
    { name: "Matalsa", logo: "/assets/pages/home/client/matalsa.png", width: 140, height: 80 },
    { name: "Neolite", logo: "/assets/pages/home/client/neolite.png", width: 160, height: 90 },
    // { name: "Netalkar", logo: "/assets/pages/home/client/netalkar.png", width: 140, height: 70 },
    { name: "Paras Wires", logo: "/assets/pages/home/client/paras-wires.png", width: 140, height: 60 },
    { name: "Raj Auto", logo: "/assets/pages/home/client/raj-auto.png", width: 140, height: 60 },
    { name: "Skipper", logo: "/assets/pages/home/client/skipper.png", width: 140, height: 70 },
    { name: "Wheels India", logo: "/assets/pages/home/client/wheels.png", width: 140, height: 70 },
  ];

  return (
    <div className="relative overflow-hidden pt-8 lg:pt-10">
      <div className="flex animate-scroll gap-11 lg:gap-14" style={{ width: 'max-content' }}>
        {/* Duplicate multiple times for seamless loop */}
        {[...clients, ...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center min-w-[140px] lg:min-w-[180px]"
          >
            <Image
              src={client.logo}
              alt={`${client.name} logo`}
              width={client.width}
              height={client.height}
              className="object-contain"
              style={{
                filter: "brightness(0) invert(1)",
                width: `${client.width}px`,
                height: `${client.height}px`,
              }}
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
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll {
          animation: scroll 36s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default ClientSlider;
