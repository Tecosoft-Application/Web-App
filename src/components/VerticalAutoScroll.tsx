import { useEffect, useRef } from 'react';
import 'swiper/css';

interface VerticalAutoScrollProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export function VerticalAutoScroll({ children, speed = 30, className = '' }: VerticalAutoScrollProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    const content = contentRef.current;
    
    if (!scrollContainer || !content) return;

    // Clone the content for infinite scroll
    const clone = content.cloneNode(true) as HTMLDivElement;
    scrollContainer.appendChild(clone);

    let scrollPosition = 0;
    const contentHeight = content.offsetHeight;

    const scroll = () => {
      scrollPosition += 1;
      
      // Reset position when first set of content is fully scrolled
      if (scrollPosition >= contentHeight) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollTop = scrollPosition;
    };

    const intervalId = setInterval(scroll, speed);

    return () => {
      clearInterval(intervalId);
      if (clone.parentNode) {
        clone.parentNode.removeChild(clone);
      }
    };
  }, [speed]);

  return (
    <div
      ref={scrollRef}
      className={`overflow-hidden ${className}`}
      style={{ height: '100%', position: 'relative' }}
    >
      <div ref={contentRef} className="flex flex-col gap-[24px]">
        {children}
      </div>
    </div>
  );
}
