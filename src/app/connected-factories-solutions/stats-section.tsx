"use client";

import { useEffect, useRef, useState } from "react";

// Types
interface StatCardProps {
  value: string;
  description: string;
}

// Constants
const GRADIENT_STYLE = {
  WebkitTextFillColor: "transparent",
  backgroundImage: "linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%)",
} as const;

const STATS_DATA: StatCardProps[] = [
  {
    value: "+25%",
    description: "Improved Production Efficiency",
  },
  {
    value: "-30%",
    description: "Reduction in Tool Downtime",
  },
  {
    value: "+20%",
    description: "Higher Quality Accuracy",
  },
  {
    value: "-40%",
    description: "Reduction in Unplanned Maintenance",
  },
];

// Custom Hook for Intersection Observer
function useInView() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Set isInView based on whether element is intersecting
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return { ref, isInView };
}

// Custom Hook for Number Animation
function useCountAnimation(
  end: number,
  duration: number = 2000,
  shouldStart: boolean = false
) {
  const [count, setCount] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset count when animation should stop
    if (!shouldStart) {
      setCount(0);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      return;
    }

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = startValue + (end - startValue) * easeOutQuart;

      setCount(Math.floor(currentCount));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
        animationRef.current = null;
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [end, duration, shouldStart]);

  return count;
}

// Components
function StatsHeader() {
  return (
    <div className="flex flex-col gap-3 items-center w-full max-w-[680px] px-4">
      <h2 className="font-Bold text-[#1a1a1a] text-center text-3xl sm:text-4xl lg:text-[42px] leading-tight sm:leading-[50px]">
        Impact That Drives Results
      </h2>
      <p className="font-medium text-[#666666] text-center text-base sm:text-[17px] leading-relaxed">
        Turning Data into Decisions - Real, Measurable Impact Across Every Layer
        of Your Factory.
      </p>
    </div>
  );
}

function AnimatedValue({
  value,
  isInView,
}: {
  value: string;
  isInView: boolean;
}) {
  // Parse the value to extract prefix, number, and suffix
  const match = value.match(/^([+-]?)(\d+)(%?)$/);

  if (!match) {
    // If pattern doesn't match, return the original value
    return <>{value}</>;
  }

  const [, prefix, numberStr, suffix] = match;
  const targetNumber = parseInt(numberStr, 10);

  const animatedCount = useCountAnimation(targetNumber, 2000, isInView);

  return (
    <>
      {prefix}
      {animatedCount}
      {suffix}
    </>
  );
}

function StatCard({
  value,
  description,
  isInView,
}: StatCardProps & { isInView: boolean }) {
  return (
    <div className="flex flex-col gap-5 items-center rounded-[20px] p-6 sm:p-8 w-full">
      <p
        className="font-bold leading-none text-5xl sm:text-6xl lg:text-[72px] tracking-[-2px] bg-clip-text"
        style={GRADIENT_STYLE}
      >
        <AnimatedValue value={value} isInView={isInView} />
      </p>
      <p className="font-medium text-[#333333] text-center text-base sm:text-[17px] leading-normal">
        {description}
      </p>
    </div>
  );
}

function StatsGrid() {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full"
    >
      {STATS_DATA.map((stat, index) => (
        <StatCard
          key={index}
          value={stat.value}
          description={stat.description}
          isInView={isInView}
        />
      ))}
    </div>
  );
}

function Stats() {
  return (
    <div
      className="flex flex-col gap-12 lg:gap-16 items-center overflow-hidden px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 py-12 sm:py-16 lg:py-20 relative w-full bg-no-repeat bg-center bg-cover"
      data-name="Stats"
      style={{
        backgroundImage: "url('/assets/union.svg')",
      }}
    >
      <StatsHeader />
      <StatsGrid />
    </div>
  );
}

export default Stats;
