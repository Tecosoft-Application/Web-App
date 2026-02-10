"use client";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import type { SwiperOptions } from "swiper/types";
import "swiper/css";
import { gsap } from "gsap";
import Image from "next/image";
import svgPaths from "../../imports/svg-zvmjtzwbe4";

const industries = [
  {
    id: 0,
    title: "Manufacturing Digital Twin",
    subtitle: "Smart Energy Management",
    description:
      "Mirror your shop floor real-time from machines and tools to lines and utilities to predict ,simulate and optimize production.",
    image:
      "/assets/pages/digital-twin-platform/5d4f19825559777cc57fee70478564d07d866ce7.png",
    tags: [
      "OEE & Throughput",
      "Quality & Traceability",
      "Energy & Utilities",
      "What-If Simulation",
    ],
  },
  {
    id: 1,
    title: "Energy & Utilities",
    subtitle: "Energy & Utilities",
    description:
      "Build a grid-aware twin for plants, microgrids, and utilities to forecast demand, orchestrate loads, and integrate renewables.",
    image:
      "/assets/pages/digital-twin-platform/1d9ecc089142280cfa9db0f3c0f1abce5029dd66.png",
    tags: [
      "Load Forecasting",
      "DER Orchestration",
      "Carbon Tracking",
      "Tariff Optimization",
    ],
  },
  {
    id: 2,
    title: "Oil & Gas",
    subtitle: "Oil & Gas",
    description:
      "From reservoirs and wells to pipelines and plants—unify models to optimize throughput, integrity, and safety.",
    image:
      "/assets/pages/digital-twin-platform/9309dccf64f1303adcc012f237f719382b3c67ca.png",
    tags: [
      "Well & Flow Assurance",
      "Predictive Integrity",
      "Production Optimization",
      "Emissions",
    ],
  },
  {
    id: 3,
    title: "Healthcare",
    subtitle: "Healthcare",
    description:
      "Model hospitals, equipment, and patient flows to elevate outcomes, utilization, and compliance - securely and ethically.",
    image:
      "/assets/pages/digital-twin-platform/f6058f802ce72f17fabed2207bcc69a51d093449.png",
    tags: [
      "Patient Flow",
      "Equipment Tracking",
      "Resource Planning",
      "Facility Management",
    ],
  },
  {
    id: 4,
    title: "Logistics & Warehousing",
    subtitle: "Logistics & Warehousing",
    description:
      "Simulate and control end-to-end flow - yards, docks, inventory, and fleets—for speed and cost efficiency.",
    image:
      "/assets/pages/digital-twin-platform/56ea414f0372a5f85e31c9ca107c2b1c3d5f9df3.png",
    tags: [
      "Logistics & Warehousing",
      "Yard & Dock",
      "Fleet Health",
      "ETA & SLA",
    ],
  },
  {
    id: 5,
    title: "Smart Cities",
    subtitle: "Smart Cities",
    description:
      "Urban-scale twins for mobility, utilities, resilience, and sustainability - built on open standards.",
    image:
      "/assets/pages/digital-twin-platform/27b1cb6fffa72b17039db1871a1f519745ca5b1f.png",
    tags: [
      "Mobility & Traffic",
      "Energy & Water",
      "Air & Emissions",
      "Urban Resilience",
    ],
  },
];

function Frame42() {
  return (
    <div className="content-stretch flex flex-col md:flex-row items-start md:items-center justify-between not-italic relative shrink-0 w-full gap-4 md:gap-6">
      <p className=" font-semibold  leading-[38px] md:leading-[48px] lg:leading-[54px] text-[#0098d4] text-[28px] md:text-[36px] lg:text-[42px] w-full md:w-auto md:max-w-[411px] m-0">
        Digital Twins for Your Industry
      </p>
      <p className=" font-normal  leading-[22px] md:leading-[24px] lg:leading-[26px] text-[#636363] text-[14px] md:text-[16px] lg:text-[18px] w-full md:max-w-[648px] m-0">
        Built to adapt across industries, our AI-driven platform reduces errors,
        strengthens decision-making, and streamlines execution for operations of
        every size and complexity.
      </p>
    </div>
  );
}

function IconoirArrowDown() {
  return (
    <div className="relative size-[22px]" data-name="iconoir:arrow-down">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 22 22"
      >
        <g id="iconoir:arrow-down">
          <path
            d={svgPaths.p14bd7580}
            id="Vector"
            stroke="var(--stroke-0, #007AAA)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </g>
      </svg>
    </div>
  );
}

interface IndustryCardProps {
  industry: (typeof industries)[0];
  isActive: boolean;
  onClick: () => void;
}

function IndustryCard({ industry, isActive, onClick }: IndustryCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getResponsiveWidth = () => {
    if (typeof window === "undefined") return isActive ? 582 : 130;

    const width = window.innerWidth;

    // Below 425px: single card view
    if (width < 425) {
      return "100%";
    }

    if (isActive) {
      // Below 600px: single active card display (full width)
      if (width < 450) return width - 40; // Small mobile (425-449px) - full width minus padding
      if (width < 500) return width - 40; // Small mobile (450-499px) - full width minus padding
      if (width < 576) return width - 40; // Small mobile (500-575px) - full width minus padding
      if (width < 600) return width - 40; // Medium mobile (576-599px) - full width minus padding
      // 600px+: multi-card display
      if (width < 650) return 360; // Medium mobile (600-649px)
      if (width < 768) return 380; // Large mobile (650-767px)
      if (width < 800) return 430; // Small tablets (768-799px) - optimized for better fit
      if (width < 992) return 450; // Small tablets (800-991px)
      if (width < 1024) return 480; // Tablets (992-1023px)
      // 1024px+ range: already optimized
      if (width < 1200) return 500; // Small laptops (1024-1199px)
      if (width < 1400) return 550; // Medium desktops (1200-1399px)
      return 582; // Large desktops (1400px+, optimized for 1576px)
    } else {
      // Below 600px: hide inactive cards (single active card display)
      if (width < 450) return 0; // Hidden - single card view
      if (width < 500) return 0; // Hidden - single card view
      if (width < 576) return 0; // Hidden - single card view
      if (width < 600) return 0; // Hidden - single card view
      // 600px+: multi-card display
      if (width < 650) return 80; // Medium mobile (600-649px)
      if (width < 768) return 85; // Large mobile (650-767px)
      if (width < 800) return 85; // Small tablets (768-799px) - optimized for better fit
      if (width < 992) return 100; // Small tablets (800-991px)
      if (width < 1024) return 110; // Tablets (992-1023px)
      // 1024px+ range: inactive cards
      if (width < 1200) return 120; // Small laptops (1024-1199px)
      if (width < 1400) return 125; // Medium desktops (1200-1399px)
      return 130; // Large desktops (1400px+, optimized for 1576px)
    }
  };

  useEffect(() => {
    if (cardRef.current && isMounted) {
      if (isActive) {
        gsap.to(cardRef.current, {
          width: getResponsiveWidth(),
          duration: 0.2,
          ease: "power2.out",
        });

        // Fade in content after card expands
        if (contentRef.current) {
          gsap.fromTo(
            contentRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.2, delay: 0, ease: "power2.out" }
          );
        }
      } else {
        // Fade out content before card collapses
        if (contentRef.current) {
          gsap.to(contentRef.current, {
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
          });
        }

        gsap.to(cardRef.current, {
          width: getResponsiveWidth(),
          duration: 0.2,
          ease: "power2.out",
          delay: 0,
        });
      }
    }
  }, [isActive, isMounted]);

  // Handle window resize
  useEffect(() => {
    if (!isMounted) return;

    const handleResize = () => {
      if (cardRef.current) {
        gsap.set(cardRef.current, {
          width: getResponsiveWidth(),
        });
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isActive, isMounted]);

  return (
    <div
      ref={cardRef}
      onClick={!isActive ? onClick : undefined}
      className={`w-full sm:w-auto overflow-clip relative rounded-[12px] shrink-0 transition-all ${
        !isActive ? "cursor-pointer hover:scale-105" : ""
      }`}
      style={{
        width: isMounted ? getResponsiveWidth() : isActive ? "100%" : "130px",
        minWidth:
          isMounted && typeof window !== "undefined" && window.innerWidth < 425
            ? "100%"
            : "auto",
        height:
          typeof window !== "undefined"
            ? window.innerWidth < 425
              ? "420px"
              : window.innerWidth < 500
              ? "435px"
              : window.innerWidth < 600
              ? "445px"
              : window.innerWidth < 650
              ? "450px"
              : window.innerWidth < 768
              ? "460px"
              : window.innerWidth < 800
              ? "475px"
              : window.innerWidth < 992
              ? "480px"
              : window.innerWidth < 1024
              ? "500px"
              : window.innerWidth < 1200
              ? "510px"
              : "520px"
            : "520px",
      }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none rounded-[12px] overflow-hidden"
      >
        <Image
          alt={`${industry.title} background`}
          className="object-cover object-center rounded-[12px]"
          src={industry.image}
          fill
        />
        {isActive ? (
          <div className="absolute bg-gradient-to-b from-[rgba(17,17,17,0)] inset-0 rounded-[12px] to-90% to-[#111111]" />
        ) : (
          <div className="absolute backdrop-blur-[1.5px] backdrop-filter bg-gradient-to-b from-[rgba(0,0,0,0)] inset-0 rounded-[16px] to-[rgba(0,0,0,0.8)]" />
        )}
      </div>

      {isActive ? (
        <div
          ref={contentRef}
          className="absolute bottom-[20px] sm:bottom-[25px] lg:bottom-[30px] left-[20px] sm:left-[25px] lg:left-[30px] right-[20px] sm:right-[25px] lg:right-[30px] flex flex-col gap-[20px] sm:gap-[25px] lg:gap-[30px] z-10"
        >
          <div className="content-stretch flex flex-col gap-[10px] sm:gap-[12px] lg:gap-[14px] items-start not-italic">
            <p className="font-semibold leading-[28px] sm:leading-[32px] lg:leading-[36px] text-[#00ff84] text-[24px] sm:text-[28px] lg:text-[32px] m-0 break-words">
              {industry.title}
            </p>
            <div className="font-medium leading-[18px] sm:leading-[20px] lg:leading-[22px] text-[#d2d2d2] text-[13px] sm:text-[14px] lg:text-[16px]">
              <p className="mb-0">{industry.description}</p>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[12px] sm:gap-[14px] lg:gap-[16px] items-start w-full">
            <div className="flex gap-[12px] sm:gap-[14px] lg:gap-[16px] items-stretch w-full">
              <div className="backdrop-blur-[10px] backdrop-filter flex-1 bg-[rgba(255,255,255,0.24)] rounded-[6px] sm:rounded-[7px] lg:rounded-[8px] min-w-0">
                <div className="flex items-center justify-center px-[8px] sm:px-[10px] lg:px-[12px] py-[8px] sm:py-[10px] lg:py-[12px] h-full">
                  <p className="font-medium leading-[16px] sm:leading-[18px] lg:leading-[20px] text-[11px] sm:text-[12px] lg:text-[14px] text-center text-white m-0 break-words">
                    {industry.tags[0]}
                  </p>
                </div>
              </div>
              <div className="backdrop-blur-[10px] backdrop-filter flex-1 bg-[rgba(255,255,255,0.24)] rounded-[6px] sm:rounded-[7px] lg:rounded-[8px] min-w-0">
                <div className="flex items-center justify-center px-[8px] sm:px-[10px] lg:px-[12px] py-[8px] sm:py-[10px] lg:py-[12px] h-full">
                  <p className="font-medium leading-[16px] sm:leading-[18px] lg:leading-[20px] text-[11px] sm:text-[12px] lg:text-[14px] text-center text-white m-0 break-words">
                    {industry.tags[1]}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex gap-[12px] sm:gap-[14px] lg:gap-[16px] items-stretch w-full">
              <div className="backdrop-blur-[10px] backdrop-filter flex-1 bg-[rgba(255,255,255,0.24)] rounded-[6px] sm:rounded-[7px] lg:rounded-[8px] min-w-0">
                <div className="flex items-center justify-center px-[8px] sm:px-[10px] lg:px-[12px] py-[8px] sm:py-[10px] lg:py-[12px] h-full">
                  <p className="font-medium leading-[16px] sm:leading-[18px] lg:leading-[20px] text-[11px] sm:text-[12px] lg:text-[14px] text-center text-white m-0 break-words">
                    {industry.tags[2]}
                  </p>
                </div>
              </div>
              <div className="backdrop-blur-[10px] backdrop-filter flex-1 bg-[rgba(255,255,255,0.24)] rounded-[6px] sm:rounded-[7px] lg:rounded-[8px] min-w-0">
                <div className="flex items-center justify-center px-[8px] sm:px-[10px] lg:px-[12px] py-[8px] sm:py-[10px] lg:py-[12px] h-full">
                  <p className="font-medium leading-[16px] sm:leading-[18px] lg:leading-[20px] text-[11px] sm:text-[12px] lg:text-[14px] text-center text-white m-0 break-words">
                    {industry.tags[3]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="absolute flex items-center justify-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[42px]">
          <div className="flex-none rotate-[270deg]">
            <p className=" font-semibold  leading-[32px] sm:leading-[36px] lg:leading-[42px] not-italic text-[22px] sm:text-[24px] lg:text-[28px] text-nowrap text-white whitespace-pre m-0">
              {industry.subtitle}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

interface CustomArrowProps {
  onClick?: () => void;
  direction: "prev" | "next";
}

function CustomArrow({ onClick, direction }: CustomArrowProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white content-stretch flex items-center justify-center p-[10px] sm:p-[12px] relative rounded-[6px] sm:rounded-[8px] shrink-0 hover:bg-gray-50 active:scale-95 transition-all hover:cursor-pointer"
      aria-label={direction === "prev" ? "Previous industry" : "Next industry"}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#aae7ff] border-solid inset-0 pointer-events-none rounded-[6px] sm:rounded-[8px]"
      />
      <div className="flex items-center justify-center relative shrink-0">
        <div
          className={
            direction === "prev"
              ? "flex-none rotate-[180deg] scale-y-[-100%]"
              : ""
          }
        >
          <IconoirArrowDown />
        </div>
      </div>
    </button>
  );
}

function IndustriesCarousel() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const swiperRef = useRef<SwiperClass | null>(null);
  const programmaticSlide = useRef(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const swiperOptions: SwiperOptions = {
    slidesPerView: "auto",
    spaceBetween: 16,
    loop: false,
    speed: 600,
    centeredSlides: false,
    allowTouchMove: true,
    observer: true,
    observeParents: true,
    watchSlidesProgress: true,
    initialSlide: 0,
    centerInsufficientSlides: true,
    breakpoints: {
      // Below 425px: single card view
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: false,
      },
      // Small mobile (425-599px): single active card display
      425: {
        slidesPerView: 1,
        spaceBetween: 10,
        centeredSlides: true,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },
      // Medium mobile (600-649px): multi-card display
      600: {
        slidesPerView: "auto",
        spaceBetween: 12,
        centeredSlides: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },
      // Large mobile (650-767px): multi-card display
      650: {
        slidesPerView: "auto",
        spaceBetween: 12,
        centeredSlides: false,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
      },
      // Small tablets (768-799px): optimized for 1576px UI
      768: {
        slidesPerView: "auto",
        spaceBetween: 13,
        centeredSlides: false,
      },
      // Small tablets (800-991px): optimized for 1576px UI
      800: {
        slidesPerView: "auto",
        spaceBetween: 13,
        centeredSlides: false,
      },
      // Tablets (992-1023px): optimized for 1576px UI
      992: {
        slidesPerView: "auto",
        spaceBetween: 14,
        centeredSlides: false,
      },
      // Small laptops (1024-1199px): optimized for no cropping
      1024: {
        slidesPerView: "auto",
        spaceBetween: 16,
        centeredSlides: false,
      },
      // Medium desktops (1200-1399px): optimized for no cropping
      1200: {
        slidesPerView: "auto",
        spaceBetween: 16,
        centeredSlides: false,
      },
      // Large desktops (1400px+): optimized for 1576px UI
      1400: {
        slidesPerView: "auto",
        spaceBetween: 16,
        centeredSlides: false,
      },
    },
  };

  const handleSwiper = (swiper: SwiperClass) => {
    swiperRef.current = swiper;
  };

  const handleSlideChange = (swiper: SwiperClass) => {
    // Only update active slide for manual swipes (not programmatic slides)
    if (!programmaticSlide.current && !isTransitioning) {
      setIsTransitioning(true);
      setActiveSlide(swiper.activeIndex);
      setIsTransitioning(false);
    }
    programmaticSlide.current = false;
  };

  const slideToIndex = (index: number) => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current;
    const width = window.innerWidth;

    // Below 425px: single card view - simple slide to index
    if (width < 425) {
      swiper.slideTo(index);
      return;
    }

    // Get responsive widths based on breakpoint (425px - 1576px UI optimized)
    let slideWidth = 582;
    let inactiveWidth = 130;
    let spaceBetween = 16;

    // Below 600px: single active card display (match getResponsiveWidth exactly)
    if (width < 450) {
      slideWidth = width - 40;
      inactiveWidth = 0;
      spaceBetween = 10;
    } else if (width < 500) {
      slideWidth = width - 40;
      inactiveWidth = 0;
      spaceBetween = 10;
    } else if (width < 576) {
      slideWidth = width - 40;
      inactiveWidth = 0;
      spaceBetween = 10;
    } else if (width < 600) {
      slideWidth = width - 40;
      inactiveWidth = 0;
      spaceBetween = 10;
    }
    // 600px+: multi-card display (match getResponsiveWidth exactly)
    else if (width < 650) {
      slideWidth = 360;
      inactiveWidth = 80;
      spaceBetween = 12;
    } else if (width < 768) {
      slideWidth = 380;
      inactiveWidth = 85;
      spaceBetween = 12;
    } else if (width < 800) {
      slideWidth = 430;
      inactiveWidth = 85;
      spaceBetween = 13;
    } else if (width < 992) {
      slideWidth = 450;
      inactiveWidth = 100;
      spaceBetween = 13;
    } else if (width < 1024) {
      slideWidth = 480;
      inactiveWidth = 110;
      spaceBetween = 14;
    }
    // 1024px+ range: already optimized
    else if (width < 1200) {
      slideWidth = 500;
      inactiveWidth = 120;
      spaceBetween = 16;
    } else if (width < 1400) {
      slideWidth = 550;
      inactiveWidth = 125;
      spaceBetween = 16;
    }

    const containerWidth = swiper.width;

    // Below 600px: single card view - just slide to the index
    if (width < 600) {
      swiper.slideTo(index);
      return;
    }

    // 600px+: calculate optimal position to prevent cropping
    if (width >= 600) {
      // Calculate total width of cards before the active one
      const widthBeforeActive = index * (inactiveWidth + spaceBetween);

      // Add margin buffer (optimized for different screen sizes)
      const marginBuffer =
        width >= 600 && width < 650
          ? 15
          : width >= 650 && width < 768
          ? 18
          : width >= 768 && width < 800
          ? 25
          : width >= 800 && width < 992
          ? 35
          : 30;

      // If the active card would be cropped, adjust the slide position
      if (widthBeforeActive + slideWidth + marginBuffer > containerWidth) {
        // Calculate how many inactive cards can fit before the active card
        const availableWidth = containerWidth - slideWidth - marginBuffer;
        const singleCardWidth = inactiveWidth + spaceBetween;
        const cardsBeforeThatFit = Math.max(
          0,
          Math.floor(availableWidth / singleCardWidth)
        );

        // Calculate optimal slide position
        let slidePosition = Math.max(0, index - cardsBeforeThatFit);

        // Ensure we're not overshooting - for smaller screens, be more aggressive
        if (width >= 600 && width < 768) {
          // For 600-767px range, ensure active card is always fully visible
          const estimatedTotalWidth =
            widthBeforeActive + slideWidth + marginBuffer;
          if (
            estimatedTotalWidth > containerWidth &&
            slidePosition === 0 &&
            index > 0
          ) {
            // Force slide to at least position 1 if card 2+ is active
            slidePosition = Math.min(index, Math.max(1, index - 1));
          }
        }

        swiper.slideTo(slidePosition);
      } else {
        swiper.slideTo(0); // If everything fits, stay at the beginning
      }
    }
  };

  const handleCardClick = (index: number) => {
    if (activeSlide !== index && !isTransitioning && swiperRef.current) {
      programmaticSlide.current = true;
      setIsTransitioning(true);
      setActiveSlide(index);
      slideToIndex(index);
      setIsTransitioning(false);
    }
  };

  const handlePrevious = () => {
    if (swiperRef.current && !isTransitioning) {
      programmaticSlide.current = true;
      setIsTransitioning(true);
      const newIndex =
        activeSlide > 0 ? activeSlide - 1 : industries.length - 1;
      setActiveSlide(newIndex);
      slideToIndex(newIndex);
      setIsTransitioning(false);
    }
  };

  const handleNext = () => {
    if (swiperRef.current && !isTransitioning) {
      programmaticSlide.current = true;
      setIsTransitioning(true);
      const newIndex =
        activeSlide < industries.length - 1 ? activeSlide + 1 : 0;
      setActiveSlide(newIndex);
      slideToIndex(newIndex);
      setIsTransitioning(false);
    }
  };

  // Update swiper when active slide changes
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  }, [activeSlide]);

  // Handle resize to update swiper
  useEffect(() => {
    const onResize = () => {
      if (swiperRef.current) {
        swiperRef.current.update();
      }
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="w-full bg-[#e0f6fa]">
      <div
        className=" content-stretch flex flex-col gap-[30px] md:gap-[40px] lg:gap-[50px] items-center overflow-x-hidden px-4 sm:px-6 md:px-12 lg:px-16 xl:px-[80px] 2xl:px-[100px] py-[40px] md:py-[50px] lg:py-[60px] relative shrink-0 w-full max-w-[1576px] mx-auto"
        data-name="Industries"
      >
        <Frame42 />

        <div className="content-stretch relative shrink-0 w-full min-h-[420px] min-[500px]:min-h-[435px] min-[600px]:min-h-[445px] min-[650px]:min-h-[450px] md:min-h-[475px] lg:min-h-[500px] xl:min-h-[520px]">
          <style jsx global>{`
            .industries-slider {
              overflow: visible !important;
            }
            .industries-slider .swiper-wrapper {
              display: flex !important;
              align-items: center !important;
              transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
            }
            .industries-slider .swiper-slide {
              width: auto !important;
              transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
              height: auto !important;
              flex-shrink: 0 !important;
            }
            .industries-slider .swiper-slide > div {
              pointer-events: auto;
            }
            /* Below 600px: single active card display */
            @media (max-width: 599px) {
              .industries-slider .swiper-slide {
                width: 100% !important;
              }
              .industries-slider {
                padding: 0 0;
              }
            }
            /* 600px - 649px: multi-card display */
            @media (min-width: 600px) and (max-width: 649px) {
              .industries-slider {
                padding: 0 12px;
              }
            }
            /* 650px - 767px: multi-card display */
            @media (min-width: 650px) and (max-width: 767px) {
              .industries-slider {
                padding: 0 12px;
              }
            }
            /* 768px - 799px: optimized for better fit */
            @media (min-width: 768px) and (max-width: 799px) {
              .industries-slider {
                padding: 0 10px;
              }
            }
            /* 800px - 1023px: optimized for 1576px UI */
            @media (min-width: 800px) and (max-width: 1023px) {
              .industries-slider {
                padding: 0 8px;
              }
            }
            /* 1024px+: optimized for no cropping */
            @media (min-width: 1024px) {
              .industries-slider {
                padding: 0 10px;
              }
            }
            .industries-slider .swiper-slide-active {
              z-index: 10;
            }
          `}</style>
          {isClient ? (
            <Swiper
              {...swiperOptions}
              onSwiper={handleSwiper}
              onSlideChange={handleSlideChange}
              className="industries-slider !overflow-visible"
            >
              {industries.map((industry, index) => (
                <SwiperSlide key={industry.id}>
                  <IndustryCard
                    industry={industry}
                    isActive={index === activeSlide}
                    onClick={() => handleCardClick(index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="flex items-center justify-center w-full min-h-[420px] min-[500px]:min-h-[435px] min-[600px]:min-h-[445px] min-[650px]:min-h-[450px] md:min-h-[475px] lg:min-h-[500px] xl:min-h-[520px]">
              <div className="text-[#0098d4] text-lg">Loading...</div>
            </div>
          )}
        </div>

        <div className="content-stretch flex gap-[8px] sm:gap-[10px] items-center justify-center relative shrink-0 w-full sm:w-auto">
          <CustomArrow onClick={handlePrevious} direction="prev" />
          <CustomArrow onClick={handleNext} direction="next" />
        </div>
      </div>
    </div>
  );
}

export default IndustriesCarousel;
