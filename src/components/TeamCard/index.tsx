"use client";
import React from "react";
import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  image?: string;
  description: string;
  isActive?: boolean;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  image,
  description,
  isActive = false,
}) => {
  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
  const shouldShowContent = isDesktop ? false : isActive; // Desktop uses hover, mobile uses active state

  return (
    <div
      className={`group relative h-[200px] w-full overflow-hidden rounded-2xl lg:cursor-pointer cursor-default transition-all duration-300 pointer-events-none lg:pointer-events-auto border border-black ${
        shouldShowContent ? "scale-[1.02]" : ""
      }`}
    >
      {/* IMAGE OR NAME FALLBACK */}
      {image ? (
        <Image
          src={image}
          alt={name}
          className={`object-cover grayscale transition-all duration-400 ease-out group-hover:scale-100 group-hover:grayscale-100 ${
            shouldShowContent ? "scale-100 grayscale-100" : ""
          }`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br">
          <span
            className={`block text-center text-4xl lg:text-4xl font-bold opacity-90 group-hover:opacity-0 ${
              shouldShowContent ? "opacity-0" : ""
            }`}
          >
            {/* Name – Gradient */}
            <span
              style={{
                backgroundImage: "linear-gradient(45deg, #07af40, #0098d4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {name}
            </span>

            <br />

            {/* Role – Black */}
            <span className="block text-sm lg:text-[18px] font-medium text-black mt-1">
              {role}
            </span>
          </span>
        </div>
      )}

      {/* BLACK GRADIENT (DEFAULT) - Only at bottom */}
      {/* <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, transparent 50%, rgba(0,0,0,0.6) 100%)",
        }}
      /> */}

      {/* GREEN / BLUE OVERLAY (HOVER/ACTIVE) - Bottom to Top Fade */}
      <div
        className={`absolute inset-0 z-20 pointer-events-none transition-transform duration-400 ease-out ${
          shouldShowContent ? "translate-y-0" : "translate-y-full"
        } group-hover:translate-y-0`}
        style={{
          background:
            "linear-gradient(226.55deg, rgba(0,183,255,0.85) 21.48%, rgba(14,176,92,0.85) 76.42%)",
        }}
      />

      {/* ALWAYS VISIBLE FOOTER (NAME + ROLE) */}
      {/* <div
        className={`absolute bottom-0 left-0 z-30 w-full p-6 text-white transition-all duration-400 ${
          shouldShowContent ? "opacity-0 translate-y-4" : ""
        } group-hover:opacity-0 group-hover:translate-y-4`}
      >
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm opacity-90">{role}</p>
      </div> */}

      {/* HOVER/ACTIVE CONTENT (DESCRIPTION) - Slides up from bottom */}
      <div
        className={`absolute z-40 w-full p-6  top-[30px] text-white transition-all duration-400 ease-out  flex  justify-center items-center text-center ${
          shouldShowContent
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        } group-hover:translate-y-0 group-hover:opacity-100`}
      >
        <p className="text-[14px] lg:text-[16px] leading-relaxed ">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TeamCard;
