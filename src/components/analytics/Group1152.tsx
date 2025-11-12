"use client";

import {
  motion,
  useTransform,
  MotionValue,
} from "framer-motion";
// import imgImage21 from "figma:asset/8209fb37e793be7b255e4b9190044d860bf35063.png";
// import imgImage20 from "figma:asset/0169493d03ede39eb0bb8f0a90c480b799669382.png";
// import imgImage19 from "figma:asset/2395b8aed787903458f6456a8121cc7f57504d23.png";
// import imgImage18 from "figma:asset/bf6956c4c57cb688b3a478eb490132753a29e59a.png";

const imgImage21 = "/assets/platform/analytics/8209fb37e793be7b255e4b9190044d860bf35063.png";
const imgImage20 = "/assets/platform/analytics/0169493d03ede39eb0bb8f0a90c480b799669382.png";
const imgImage19 = "/assets/platform/analytics/2395b8aed787903458f6456a8121cc7f57504d23.png";
const imgImage18 = "/assets/platform/analytics/bf6956c4c57cb688b3a478eb490132753a29e59a.png";



interface GroupProps {
  scrollYProgress: MotionValue<number>;
}

export default function Group({ scrollYProgress }: GroupProps) {
  // Cards 1 & 2 - animate from top-left
  const topLeftX = useTransform(
    scrollYProgress,
    [0.15, 0.35],
    [-400, 0],
  );
  const topLeftY = useTransform(
    scrollYProgress,
    [0.15, 0.35],
    [0, 0],
  );

  // Cards 3 & 4 - animate from top-right
  const topRightX = useTransform(
    scrollYProgress,
    [0.15, 0.35],
    [400, 0],
  );
  const topRightY = useTransform(
    scrollYProgress,
    [0.15, 0.35],
    [0, 0],
  );

  // Rotation animation for all cards
  const rotation = useTransform(
    scrollYProgress,
    [0.15, 0.35],
    [60, 0],
  );

  return (
    <div className="relative size-full">
      {/* Card 1 - from top-left */}
      <motion.div
        className="absolute h-[134.788px] left-0 pointer-events-none rounded-[16.438px] top-0 w-[212.044px]"
        data-name="image 21"
        style={{
          x: topLeftX,
          y: topLeftY,
          rotate: useTransform(rotation, (value) => -value),
        }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[16.438px] size-full"
          src={imgImage21}
        />
        <div
          aria-hidden="true"
          className="absolute border-[#d2d2d2] border-[0.616px] border-solid inset-0 rounded-[16.438px]"
        />
      </motion.div>

      {/* Card 2 - from top-left */}
      <motion.div
        className="absolute h-[134.788px] left-[236.7px] pointer-events-none rounded-[16.438px] top-0 w-[212.044px]"
        data-name="image 20"
        style={{
          x: topLeftX,
          y: topLeftY,
          rotate: useTransform(rotation, (value) => -value),
        }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[16.438px] size-full"
          src={imgImage20}
        />
        <div
          aria-hidden="true"
          className="absolute border-[#d2d2d2] border-[0.616px] border-solid inset-0 rounded-[16.438px]"
        />
      </motion.div>

      {/* Card 3 - from top-right */}
      <motion.div
        className="absolute h-[134.788px] left-[473.4px] pointer-events-none rounded-[16.438px] top-0 w-[212.044px]"
        data-name="image 19"
        style={{
          x: topRightX,
          y: topRightY,
          rotate: rotation,
        }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[16.438px] size-full"
          src={imgImage19}
        />
        <div
          aria-hidden="true"
          className="absolute border-[#d2d2d2] border-[0.616px] border-solid inset-0 rounded-[16.438px]"
        />
      </motion.div>

      {/* Card 4 - from top-right */}
      <motion.div
        className="absolute h-[134.788px] left-[710.1px] pointer-events-none rounded-[16.438px] top-0 w-[212.044px]"
        data-name="image 18"
        style={{
          x: topRightX,
          y: topRightY,
          rotate: rotation,
        }}
      >
        <img
          alt=""
          className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[16.438px] size-full"
          src={imgImage18}
        />
        <div
          aria-hidden="true"
          className="absolute border-[#d2d2d2] border-[0.616px] border-solid inset-0 rounded-[16.438px]"
        />
      </motion.div>
    </div>
  );
}