"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Group1151 from "./Group1151";
import Group1153 from "./Group1153";

interface HeroDashboardAnimationProps {
  baseImgSrc: string;
}

export default function HeroDashboardAnimation({
  baseImgSrc,
}: HeroDashboardAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Status cards (Group1151) animation - slide down from above
  const statusCardsY = useTransform(scrollYProgress, [0.15, 0.4], [-750, 0]);
  const tabCardsY = useTransform(scrollYProgress, [0.15, 0.4], [270, 0]);

  return (
    <div
      ref={containerRef}
      className="absolute h-[734px] left-1/2 rounded-[16px] top-[560px] translate-x-[-50%] w-[1052px]"
      data-name="Group 1171277043 1"
    >
      {/* Base image - always visible */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: tabCardsY,
        }}
      >
        <Image
          alt="Dashboard preview"
          className="max-w-none object-contain pointer-events-none rounded-[16px]"
          src={baseImgSrc}
          fill
          sizes="1052px"
          style={{ objectPosition: "50% 50%" }}
          unoptimized
        />
      </motion.div>

      {/* Title: Real-Time Machine Activity Snapshot */}
      <motion.div
        className="absolute left-[65px] top-[45px] w-[922.144px] overflow-visible z-0"
        style={{
          y: tabCardsY,
        }}
      >
        <p className="absolute  font-semibold leading-[29.587px] left-[269.07px] not-italic text-[21.369px] text-black text-nowrap top-0 tracking-[-0.1068px] whitespace-pre">
          Real-Time Machine Activity Snapshot
        </p>
      </motion.div>

      {/* Status cards animation - appears from above */}
      <motion.div
        className="absolute left-[65px] top-[80px] w-[922.144px] h-[147.936px] overflow-visible z-1"
        style={{
          y: statusCardsY,
        }}
      >
        <Group1151 scrollYProgress={scrollYProgress} />
      </motion.div>

      {/* Title: Live Machine Dashboard */}
      <motion.div
        className="absolute left-[65px] top-[220px] w-[922.144px] overflow-visible z-0"
        style={{
          y: tabCardsY,
        }}
      >
        <p className="absolute  font-normal leading-[29.587px] left-[335.07px] not-italic text-[21.369px] text-black text-nowrap top-0 tracking-[-0.1068px] whitespace-pre">
          Live Machine Dashboard
        </p>
      </motion.div>

      {/* Group1153 - positioned below Group1151 */}
      <div className="absolute left-[65px] top-[420px] w-[922.144px] h-[275.284px] overflow-visible z-1">
        <Group1153 />
      </div>
    </div>
  );
}
