"use client";
import React, { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  SOLUTIONS_SECTION,
  SOLUTIONS_DATA,
} from "../../constants/ai-enabled-service/ai-enable-service.js";
import svgPaths from "../../imports/svg-txc4khmm90";

// ===========================
// Constants
// ===========================

const CAROUSEL_INTERVAL_MS = 4000;

// ===========================
// TypeScript Interfaces
// ===========================

interface FeatureCardProps {
  icon: string;
  label: string;
  bgColor: string;
  iconColor: string;
}

interface ImageCarouselProps {
  images: string[];
}

interface SolutionCardProps {
  title: string;
  description: string;
  features: FeatureCardProps[];
  images: string[];
  imagePosition?: "left" | "right";
  routeName: string;
}

// ===========================
// Icon Components
// ===========================

const iconComponents: Record<string, React.FC<{ color: string }>> = {
  thunder: ({ color }) => (
    <svg className="size-full" fill="none" viewBox="0 0 24 24">
      <path
        d={svgPaths.p45a2780}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  cpu: ({ color }) => (
    <svg className="size-full" fill="none" viewBox="0 0 21 21">
      <path d={svgPaths.p19c9e740} stroke={color} strokeWidth="1.5" />
      <path d={svgPaths.pcbd100} stroke={color} strokeWidth="1.5" />
      <path
        d={svgPaths.p3404db00}
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  battery: ({ color }) => (
    <svg className="size-full" fill="none" viewBox="0 0 24 24">
      <path
        d={svgPaths.p3e6ef80}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  brain: ({ color }) => (
    <svg className="size-full" fill="none" viewBox="0 0 21 21">
      <path
        d={svgPaths.p2c9a82ac}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.p16b8ec00}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.p124cf200}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.pcfd6f80}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  "dashboard-add": ({ color }) => (
    <svg className="size-full" fill="none" viewBox="0 0 22 22">
      <circle cx="5" cy="5" r="4.25" stroke={color} strokeWidth="1.5" />
      <circle cx="16.5" cy="16.5" r="4.25" stroke={color} strokeWidth="1.5" />
      <circle cx="5" cy="16.5" r="4.25" stroke={color} strokeWidth="1.5" />
      <path
        d={svgPaths.p2be34700}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  star: ({ color }) => (
    <svg className="size-full" fill="none" viewBox="0 0 24 24">
      <path
        d={svgPaths.p31b92700}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  server: ({ color }) => (
    <svg className="size-full" fill="none" viewBox="0 0 23 22">
      <path d={svgPaths.p3fa69480} stroke={color} strokeWidth="1.5" />
      <path
        d={svgPaths.p3fea0180}
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
  dashboard: ({ color }) => (
    <svg className="size-full" fill="none" viewBox="0 0 22 19">
      <path
        d={svgPaths.p13657ee0}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
      <path
        d={svgPaths.p323e2780}
        stroke={color}
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M10.75 10.75V7.11362"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  ),
};

// ===========================
// Reusable Components
// ===========================

const ArrowIcon: React.FC<{ isInView?: boolean }> = ({ isInView = false }) => (
  <svg className="size-full" fill="none" viewBox="0 0 28 28">
    <defs>
      <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="21.48%" stopColor="#00B7FF" />
        <stop offset="76.42%" stopColor="#0EB05C" />
      </linearGradient>
    </defs>

    <path
      d={svgPaths.p22ee4d80}
      stroke="url(#arrowGradient)"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.25"
      className={`
        transition-opacity duration-300
        opacity-0 group-hover:opacity-100
        ${isInView ? "max-lg:opacity-100" : ""}
      `}
    />

    {/* Default arrow (normal state) */}
    <path
      d={svgPaths.p22ee4d80}
      stroke="#181818"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.25"
      className={`
        transition-opacity duration-300
        opacity-100 group-hover:opacity-0
        ${isInView ? "max-lg:opacity-0" : ""}
      `}
    />
  </svg>
);

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  label,
  bgColor,
  iconColor,
}) => {
  const IconComponent = iconComponents[icon];

  return (
    <div
      className="backdrop-blur-[10px] backdrop-filter rounded-xl md:rounded-[12px] w-full transition-transform hover:scale-105"
      style={{ backgroundColor: bgColor }}
      role="article"
      aria-label={label}
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="flex flex-col gap-3 md:gap-[14px] items-start p-3 sm:p-4 md:p-[14px] w-full">
          <div
            className="flex-shrink-0 w-5 h-5 md:w-6 md:h-6"
            aria-hidden="true"
          >
            {IconComponent ? (
              <IconComponent color={iconColor} />
            ) : (
              <div className="w-full h-full bg-gray-300 rounded" />
            )}
          </div>
          <p className="text-sm md:text-base font-medium leading-snug md:leading-[20px] text-[#282828]">
            {label}
          </p>
        </div>
      </div>
    </div>
  );
};

const CarouselIndicator: React.FC<{
  total: number;
  activeIndex: number;
  onDotClick: (index: number) => void;
}> = ({ total, activeIndex, onDotClick }) => {
  if (total <= 1) return null;

  return (
    <div
      className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-10"
      role="tablist"
      aria-label="Carousel navigation"
    >
      <div className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg">
        {Array.from({ length: total }).map((_, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={index}
              className={`rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-white w-2.5 h-2.5"
                  : "bg-white/60 w-2 h-2 hover:bg-white/80"
              }`}
              onClick={() => onDotClick(index)}
              role="tab"
              aria-selected={isActive}
              aria-label={`Go to slide ${index + 1} of ${total}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onDotClick(index);
                }
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, CAROUSEL_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [images.length, activeIndex]);

  const handleDotClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  if (images.length === 0) return null;

  return (
    <div
      className="relative w-full h-full min-h-[400px] md:min-h-[450px] rounded-2xl md:rounded-[16px] overflow-hidden"
      role="region"
      aria-label="Image carousel"
      aria-live="polite"
    >
      {images.map((img, index) => (
        <Image
          key={index}
          alt={`Solution slide ${index + 1} of ${images.length}`}
          className={`object-cover transition-opacity duration-700 ${
            activeIndex === index ? "opacity-100" : "opacity-0"
          }`}
          src={img}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          aria-hidden={activeIndex !== index}
          priority={index === 0}
        />
      ))}
      <CarouselIndicator
        total={images.length}
        activeIndex={activeIndex}
        onDotClick={handleDotClick}
      />
    </div>
  );
};

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  features,
  images,
  imagePosition = "right",
  routeName,
}) => {
  const [isInView, setIsInView] = useState(false);
  const cardRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
        }
      },
      {
        threshold: 0.3,
        rootMargin: "-50px",
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const ContentSection = (
    <div
      className={`
      group bg-white rounded-2xl md:rounded-[16px]
      p-5 sm:p-6 md:p-8 lg:p-10
      flex flex-col justify-between h-full
      min-h-[400px] md:min-h-[450px]
      transition-transform duration-700 ease-out
      ${isInView ? "max-lg:scale-101" : "max-lg:scale-98"}
    `}
    >
      {/* Title and Arrow */}
      <div className="flex flex-col gap-4 md:gap-5 items-start w-full">
        <div className="flex items-start justify-between gap-4 w-full">
          <h3
            className={`
    text-xl sm:text-2xl md:text-[26px] lg:text-[30px]
    font-semibold leading-tight
    text-[#181818]
    transition-all duration-300

    group-hover:text-transparent
    group-hover:bg-[linear-gradient(226.55deg,#00B7FF_21.48%,#0EB05C_76.42%)]
    bg-clip-text

    ${
      isInView
        ? "max-lg:text-transparent max-lg:bg-[linear-gradient(226.55deg,#00B7FF_21.48%,#0EB05C_76.42%)]"
        : ""
    }
  `}
          >
            {title}
          </h3>

          <Link
            href={routeName}
            className={`
            flex items-center justify-center flex-shrink-0
            w-6 h-6 md:w-7 md:h-7
            -rotate-90
            transition-transform duration-300
            group-hover:scale-105
            ${isInView ? "max-lg:scale-105" : ""}
          `}
            aria-label={`Learn more about ${title}`}
          >
            <ArrowIcon isInView={isInView} />
          </Link>
        </div>

        <p className="text-sm sm:text-base font-medium leading-relaxed text-[#8e8e8e]">
          {description}
        </p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-6 md:mt-8 w-full">
        {features.slice(0, 4).map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </div>
    </div>
  );

  const ImageSection = <ImageCarousel images={images} />;

  return (
    <article
      ref={cardRef}
      className="bg-white/10 backdrop-blur-sm rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-5 lg:p-6 w-full border border-white/20 shadow-lg"
    >
      <div className="rounded-[inherit] size-full max-lg:overflow-visible lg:overflow-clip">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-5 lg:gap-6 w-full items-stretch">
          {imagePosition === "left" ? (
            <>
              <div className="order-1 lg:order-1 h-full">{ImageSection}</div>
              <div className="order-2 lg:order-2 h-full">{ContentSection}</div>
            </>
          ) : (
            <>
              <div className="order-2 lg:order-1 h-full">{ContentSection}</div>
              <div className="order-1 lg:order-2 h-full">{ImageSection}</div>
            </>
          )}
        </div>
      </div>
    </article>
  );
};

// ===========================
// Main Component
// ===========================

const Solutions: React.FC = () => {
  return (
    <section
      className="relative w-full"
      data-name="Solutions"
      aria-labelledby="solutions-title"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div
          className="flex flex-col gap-8 md:gap-12 lg:gap-16 items-start px-4 sm:px-6 md:px-12 lg:px-16 xl:px-24 2xl:px-32 py-8 sm:py-12 md:py-16 lg:py-20 w-full"
          style={{
            background:
              "linear-gradient(242.47deg, #00BCEF 6.45%, #002363 95.13%)",
          }}
        >
          {/* Section Header */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 md:gap-8 lg:gap-12 text-white w-full max-w-[1400px] mx-auto">
            <h2
              id="solutions-title"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[42px] font-semibold leading-tight"
            >
              {SOLUTIONS_SECTION.title}
            </h2>
            <p className="text-sm sm:text-base font-normal leading-relaxed w-full lg:w-[650px]">
              {SOLUTIONS_SECTION.description}
            </p>
          </div>

          {/* Solution Cards */}
          <div className="flex flex-col gap-6 md:gap-8 lg:gap-10 items-start w-full max-w-[1400px] mx-auto">
            {SOLUTIONS_DATA.map((solution, index) => (
              <SolutionCard
                key={solution.id}
                title={solution.title}
                description={solution.description}
                features={solution.features}
                images={solution.images}
                imagePosition={index % 2 === 0 ? "right" : "left"}
                routeName={solution.routeName}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
