"use client";
import React, { useEffect, useRef, useState } from "react";
import TeamCard from "../../components/TeamCard";
import { TEAM_MEMBERS } from "@/constants/company/company";

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 640) return; // Disable scroll tracking on desktop

    const onScroll = () => {
      const cards = scrollRef.current?.querySelectorAll("[data-team-card]");
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
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-20">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-[#181818] sm:text-4xl">
          Meet our team
        </h2>
        <p className="mt-4 text-base text-[#8e8e8e]">
          We bring together design, engineering, and strategy to build
          intelligent digital platforms and solutions through collaboration and
          clear, outcome-focused thinking.
        </p>
      </div>

      {/* Snap Scroll Container (Mobile/Tablet) / Grid (Desktop) */}
      <div ref={scrollRef} className="mx-auto mt-14 max-w-7xl space-y-8">
        {/* ROW 1 → 3 cards */}
        <div
          className="
      grid grid-cols-1  lg:grid-cols-3
      gap-8
      snap-y snap-mandatory sm:snap-none
    "
        >
          {TEAM_MEMBERS.slice(0, 3).map((member, index) => (
            <div key={member.id} data-team-card className="snap-center">
              <TeamCard
                name={member.name}
                role={member.role}
                description={member.description}
                isActive={activeIndex === index}
              />
            </div>
          ))}
        </div>

        {/* ROW 2 → 2 centered cards */}
        <div
          className="
       grid grid-cols-1  
      gap-8 lg:flex lg:justify-center lg:gap-8
      snap-y snap-mandatory sm:snap-none
    "
        >
          {TEAM_MEMBERS.slice(3, 5).map((member, index) => (
            <div
              key={member.id}
              data-team-card
              className="snap-center  lg:w-full lg:max-w-[360px] "
            >
              <TeamCard
                name={member.name}
                role={member.role}
                description={member.description}
                isActive={activeIndex === index + 3}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
