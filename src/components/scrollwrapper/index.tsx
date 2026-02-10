"use client";
import React from "react";
import { ReactLenis } from "../../../libs/react-lenis";

const ScrollWrapperSection = ({ children }: { children: any }) => {
  return (
    <ReactLenis
      root
      options={{
        smoothWheel: true,
        // wheelMultiplier: 1,
        duration: 2,
        lerp: 0.035,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default ScrollWrapperSection;
