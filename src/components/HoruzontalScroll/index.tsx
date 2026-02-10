'use client';

import { useEffect, useRef, useState } from "react";

interface HorizontalScrollSectionProps {
  children: React.ReactNode;
  scrollDistance?: number;
}

export function HorizontalScrollSection({
  children,
  scrollDistance = 1650
}: HorizontalScrollSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scale, setScale] = useState(1);
  const [dynamicScrollDistance, setDynamicScrollDistance] = useState(0);

  // Calculate responsive scale and dynamic scroll distance based on screen width
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      let newScale = 1;

      // Responsive scale calculation for 1024px to 1800px
      if (width >= 1800) {
        newScale = 1; // Full scale at 1800px+
      } else if (width >= 1440) {
        // Scale between 0.85 and 1 for 1440-1800px
        const ratio = (width - 1440) / (1800 - 1440);
        newScale = 0.85 + ratio * 0.15;
      } else if (width >= 1024) {
        // Scale between 0.7 and 0.85 for 1024-1440px
        const ratio = (width - 1024) / (1440 - 1024);
        newScale = 0.7 + ratio * 0.15;
      } else {
        newScale = 0.7; // Minimum scale
      }

      setScale(newScale);

      // Calculate dynamic scroll distance based on content width and scale
      if (contentRef.current) {
        const contentWidth = contentRef.current.scrollWidth;
        const scaledContentWidth = contentWidth * newScale;
        const viewportWidth = width;
        // Calculate how much we need to scroll to see all content
        const distance = Math.max(0, scaledContentWidth - viewportWidth);
        setDynamicScrollDistance(distance);
      } else {
        // Fallback to provided scrollDistance with scale adjustment
        setDynamicScrollDistance(scrollDistance * newScale);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Re-calculate after content loads
    const timeout = setTimeout(updateDimensions, 100);

    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timeout);
    };
  }, [scrollDistance]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;

      // Calculate if section is in viewport
      if (rect.top <= 0 && rect.bottom >= windowHeight) {
        // Section is active - calculate progress
        const scrolled = Math.abs(rect.top);
        const maxScroll = sectionHeight - windowHeight;
        const progress = Math.min(Math.max(scrolled / maxScroll, 0), 1);
        setScrollProgress(progress);
      } else if (rect.bottom < windowHeight) {
        // Section has passed
        setScrollProgress(1);
      } else {
        // Section not reached yet
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate horizontal translation based on scroll progress
  const horizontalOffset = scrollProgress * dynamicScrollDistance;

  return (
    <div
      ref={sectionRef}
      className="relative"
      style={{
        height: '300vh', // Extra height to allow scrolling through horizontal content
      }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div
          ref={contentRef}
          className="h-full origin-left"
          style={{
            transform: `translateX(-${horizontalOffset}px) scale(${scale})`,
            transition: 'none',
            willChange: 'transform',
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
