"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import svgPaths from "../../imports/svg-wnzeyhu3eg";
import clsx from "clsx";
import { EVENTS_SECTION, EVENTS_LIST } from "../../constants/company/company";

type ArrowIconProps = {
  className?: string;
};

function ArrowIcon({ className = "" }: ArrowIconProps) {
  return (
    <div
      className={clsx("flex items-center justify-center shrink-0", className)}
      style={
        {
          "--transform-inner-width": "0",
          "--transform-inner-height": "0",
        } as React.CSSProperties
      }
    >
      <div className="flex-none rotate-[270deg]">
        <div className="relative size-3.5">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 14 14"
          >
            <g>
              <path
                d={svgPaths.p1feb4d00}
                stroke="url(#paint0_linear_event_arrow)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.35"
              />
            </g>
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_event_arrow"
                x1="11.9583"
                x2="-0.184638"
                y1="1.75"
                y2="7.72701"
              >
                <stop offset="0.0644535" stopColor="#00BCEF" />
                <stop offset="0.95133" stopColor="#002363" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

type StatusBadgeProps = {
  status: string;
};

function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <div
      className="absolute flex items-center justify-center px-3 py-1.5 right-4 sm:right-5 rounded-full top-4 sm:top-5 z-10"
      style={{
        backgroundImage:
          "linear-gradient(198.224deg, rgb(0, 183, 255) 21.481%, rgb(14, 176, 92) 76.423%)",
      }}
    >
      <p className="font-semibold text-base sm:text-lg text-white whitespace-nowrap">
        {status}
      </p>
    </div>
  );
}

type ViewMoreButtonProps = {
  onClick?: () => void;
};

function ViewMoreButton({ onClick }: ViewMoreButtonProps) {
  return (
    <button
      onClick={onClick}
      className="flex gap-1.5 items-center hover:opacity-80 transition-opacity"
      aria-label="View event details"
    >
      <p
        className="bg-clip-text font-medium text-base sm:text-lg whitespace-nowrap"
        style={{
          WebkitTextFillColor: "transparent",
          backgroundImage:
            "linear-gradient(206.144deg, rgb(0, 188, 239) 6.4454%, rgb(0, 35, 99) 95.133%)",
        }}
      >
        View more
      </p>
      <ArrowIcon className="size-3.5" />
    </button>
  );
}

type EventCardProps = {
  title: string;
  description: string;
  date: {
    startDate: string;
    endDate: string;
    month: string;
    year: string;
  };
  image: string;
  status?: string | null;
  isActive?: boolean;
};

function EventCard({
  title,
  description,
  date,
  image,
  status,
  isActive = false,
}: EventCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col overflow-hidden rounded-xl w-full transition-all duration-300",
        "md:hover:shadow-xl",
        isActive
          ? "shadow-2xl scale-[1.02] md:scale-100"
          : "shadow-md md:shadow-none scale-100"
      )}
    >
      {/* Image Section */}
      <div className="relative h-44 sm:h-52  overflow-hidden">
        <Image
          alt={title}
          className=" pointer-events-none"
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {status && <StatusBadge status={status} />}
      </div>

      {/* Content Section */}
      <div className="bg-[#f5f5f5] flex flex-col gap-5 sm:gap-6 p-5 sm:p-6 w-full">
        <div className="flex flex-col gap-3">
          <h3 className="font-semibold text-lg sm:text-xl lg:text-[20px] text-[#282828] leading-snug">
            {title}
          </h3>
          <p className="font-normal text-sm sm:text-base text-[#8e8e8e] leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex font-medium gap-1 lg:gap-2 items-baseline">
            <p className="text-[18px] sm:text-[24px] lg:text-[28px] text-[#282828] leading-4">
              {date.startDate} - {date.endDate}
            </p>
            <p className="text-base sm:text-lg text-[#636363] whitespace-nowrap">
              {date.month}, {date.year}
            </p>
          </div>
          <ViewMoreButton />
        </div>
      </div>
    </div>
  );
}

export default function EventsSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 768) return; // Disable scroll tracking on desktop

    const onScroll = () => {
      const cards = scrollRef.current?.querySelectorAll("[data-event-card]");
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
    <section
      className="bg-white flex flex-col gap-12 sm:gap-16 lg:gap-20 overflow-hidden px-4 sm:px-8 lg:px-16 xl:px-24 2xl:px-28 py-12 sm:py-16 lg:py-20 w-full max-w-[1600px] mx-auto"
      aria-labelledby="events-heading"
    >
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 w-full">
        <h2
          id="events-heading"
          className="font-semibold text-3xl sm:text-4xl lg:text-[42px] text-[#0098d4] leading-tight lg:max-w-md"
        >
          {EVENTS_SECTION.heading}
        </h2>
        <p className="font-normal text-sm sm:text-base text-[#636363] leading-relaxed lg:max-w-2xl">
          {EVENTS_SECTION.description}
        </p>
      </div>

      {/* Events Grid */}
      <div
        ref={scrollRef}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 w-full snap-y snap-mandatory md:snap-none"
      >
        {EVENTS_LIST.map((event, index) => (
          <div key={event.id} data-event-card className="snap-center">
            <EventCard
              title={event.title}
              description={event.description}
              date={event.date}
              image={event.image}
              status={event.status}
              isActive={activeIndex === index}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
