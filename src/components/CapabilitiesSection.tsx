"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CapabilityCard1 from "./CapabilityCard1";
import CapabilityCard2 from "./CapabilityCard2";
import CapabilityCard3 from "./CapabilityCard3";
import CapabilityCard4 from "./CapabilityCard4";

export default function CapabilitiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Card 1 animations - moves up first (0 to 0.25)
  const card1Y = useTransform(scrollYProgress, [0, 0.25], [0, -400]);
  const card1Opacity = useTransform(scrollYProgress, [0.2, 0.25], [1, 0]);
  
  // Card 2 animations - moves up second (0.25 to 0.5)
  const card2Y = useTransform(scrollYProgress, [0, 0.25, 0.5], [92, 0, -400]);
  const card2Scale = useTransform(scrollYProgress, [0, 0.25], [0.913, 1]);
  const card2Blur = useTransform(scrollYProgress, [0, 0.25], [2.21, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.45, 0.5], [1, 0]);
  
  // Card 3 animations - moves up third (0.5 to 0.75)
  const card3Y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75], [158, 118, 0, -400]);
  const card3Scale = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.826, 0.869, 1]);
  const card3Blur = useTransform(scrollYProgress, [0, 0.5], [2, 0]);
  const card3Opacity = useTransform(scrollYProgress, [0.7, 0.75], [1, 0]);
  
  // Card 4 animations - moves up last (0.75 to 1)
  const card4Y = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75], [199, 159, 82, 0]);
  const card4Scale = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75], [0.739, 0.782, 0.869, 1]);
  const card4Blur = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <div className="relative w-full bg-gradient-to-b from-[#005b80] via-[#006b99] to-[#007bb3] py-[140px]">
      <div className="relative w-full" data-name="Capabilities">
        {/* Cards Container - Stacked with depth effect */}
        <div ref={containerRef} className="relative mx-auto w-full flex items-start justify-center min-h-[1600px]">
          <div className="sticky top-[150px] w-[1152px] h-[400px]">
            {/* Header - Moves with Card 1 */}
            <motion.div 
              className="content-stretch flex h-[46px] items-center justify-between mx-auto not-italic text-white mb-[60px] w-[1152px] absolute top-[-110px] left-0"
              style={{
                y: card1Y,
                opacity: card1Opacity,
                zIndex: 50,
              }}
            >
              <p className="font-['Gilroy:Semibold',sans-serif] leading-[38px] relative shrink-0 text-[33px] text-nowrap whitespace-pre">Capabilities</p>
              <p className="font-['Gilroy:Medium',sans-serif] leading-[23px] relative shrink-0 text-[18px] w-[500px]">Seamlessly connect, monitor, and manage CNC, VMC, HMC, Molding, and laser systems in real time.</p>
            </motion.div>

            {/* Card 4 - Bottom layer with cyan background */}
            <motion.div
              className="absolute top-0 left-0 w-full origin-center"
              style={{
                y: card4Y,
                scale: card4Scale,
                filter: useTransform(card4Blur, (v) => `blur(${v}px)`),
                zIndex: 10,
              }}
            >
              <CapabilityCard4 />
            </motion.div>

            {/* Card 3 - Third layer with dark blue background */}
            <motion.div
              className="absolute top-0 left-0 w-full origin-center"
              style={{
                y: card3Y,
                scale: card3Scale,
                filter: useTransform(card3Blur, (v) => `blur(${v}px)`),
                opacity: card3Opacity,
                zIndex: 20,
              }}
            >
              <CapabilityCard3 />
            </motion.div>

            {/* Card 2 - Second layer with white background */}
            <motion.div
              className="absolute top-0 left-0 w-full origin-center"
              style={{
                y: card2Y,
                scale: card2Scale,
                filter: useTransform(card2Blur, (v) => `blur(${v}px)`),
                opacity: card2Opacity,
                zIndex: 30,
              }}
            >
              <CapabilityCard2 />
            </motion.div>

            {/* Card 1 - Top layer with light blue background */}
            <motion.div
              className="absolute top-0 left-0 w-full origin-center"
              style={{
                y: card1Y,
                opacity: card1Opacity,
                zIndex: 40,
              }}
            >
              <CapabilityCard1 />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}