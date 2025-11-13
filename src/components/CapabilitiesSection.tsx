"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CapabilityCard1 from "./CapabilityCard1";
import CapabilityCard2 from "./CapabilityCard2";
import CapabilityCard3 from "./CapabilityCard3";

export default function CapabilitiesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Card 1 animations - moves up first (0 to 0.33)
  const card1Y = useTransform(scrollYProgress, [0, 0.33], [0, -500]);
  const card1Opacity = useTransform(scrollYProgress, [0.28, 0.33], [1, 0]);

  // Card 2 animations - moves up second (0.33 to 0.66)
  const card2Y = useTransform(scrollYProgress, [0, 0.33, 0.66], [92, 0, -500]);
  const card2Scale = useTransform(scrollYProgress, [0, 0.33], [0.913, 1]);
  const card2Blur = useTransform(scrollYProgress, [0, 0.33], [2.21, 0]);
  const card2Opacity = useTransform(scrollYProgress, [0.61, 0.66], [1, 0]);

  // Card 3 animations - moves up last (0.66 to 1)
  const card3Y = useTransform(scrollYProgress, [0, 0.33, 0.66], [158, 118, 0]);
  const card3Scale = useTransform(scrollYProgress, [0, 0.33, 0.66], [0.826, 0.869, 1]);
  const card3Blur = useTransform(scrollYProgress, [0, 0.66], [2, 0]);

  return (
    <div className="relative w-full bg-gradient-to-b from-[#005b80] via-[#006b99] to-[#007bb3] py-[60px] sm:py-[80px] md:py-[100px] lg:py-[120px] xl:py-[150px]">
      <div className="relative w-full" data-name="Capabilities">
        {/* Cards Container - Stacked with depth effect */}
        <div ref={containerRef} className="relative mx-auto w-full flex items-start justify-center min-h-[800px] sm:min-h-[900px] md:min-h-[1000px] lg:min-h-[1100px] xl:min-h-[1200px] px-4 sm:px-6 md:px-8 lg:px-8 xl:px-0">
          <div className="sticky top-[80px] sm:top-[90px] md:top-[100px] lg:top-[120px] xl:top-[130px] w-full max-w-[300px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1000px] xl:max-w-[1152px] h-[280px] sm:h-[320px] md:h-[350px] lg:h-[380px] xl:h-[400px]">
            {/* Header - Moves with Card 1 */}
            <motion.div
              className="content-stretch flex flex-col lg:flex-row h-auto lg:h-[46px] items-start lg:items-center justify-between mx-auto not-italic text-white mb-[30px] sm:mb-[35px] md:mb-[40px] lg:mb-[50px] xl:mb-[60px] w-full absolute top-[-60px] sm:top-[-70px] md:top-[-80px] lg:top-[-95px] xl:top-[-110px] left-0 gap-3 sm:gap-3.5 md:gap-4 lg:gap-0"
              style={{
                y: card1Y,
                opacity: card1Opacity,
                zIndex: 50,
              }}
            >
              <p className="font-['Gilroy:Semibold',sans-serif] leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[36px] xl:leading-[38px] relative shrink-0 text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] xl:text-[33px] whitespace-nowrap">Capabilities</p>
              <p className="font-['Gilroy:Medium',sans-serif] leading-[18px] sm:leading-[19px] md:leading-[20px] lg:leading-[22px] xl:leading-[23px] relative shrink-0 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] w-full lg:w-[420px] xl:w-[500px]">Seamlessly connect, monitor, and manage CNC, VMC, HMC, Molding, and laser systems in real time.</p>
            </motion.div>

            {/* Card 3 - Bottom layer */}
            <motion.div
              className="absolute top-[40px] sm:top-[35px] md:top-[30px] lg:top-0 left-0 w-full origin-center"
              style={{
                y: card3Y,
                scale: card3Scale,
                filter: useTransform(card3Blur, (v) => `blur(${v}px)`),
                zIndex: 10,
              }}
            >
              <CapabilityCard3 />
            </motion.div>

            {/* Card 2 - Middle layer */}
            <motion.div
              className="absolute top-[40px] sm:top-[35px] md:top-[30px] lg:top-0 left-0 w-full origin-center"
              style={{
                y: card2Y,
                scale: card2Scale,
                filter: useTransform(card2Blur, (v) => `blur(${v}px)`),
                opacity: card2Opacity,
                zIndex: 20,
              }}
            >
              <CapabilityCard2 />
            </motion.div>

            {/* Card 1 - Top layer */}
            <motion.div
              className="absolute top-[40px] sm:top-[35px] md:top-[30px] lg:top-0 left-0 w-full origin-center"
              style={{
                y: card1Y,
                opacity: card1Opacity,
                zIndex: 30,
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