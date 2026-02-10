"use client";
import React from "react";
import svgPaths from "../../imports/svg-6sw94kd16o";

interface IconProps {
  color: string;
}

export function CubeScanIcon({ color }: IconProps) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg className="block size-full transition-all duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path d={svgPaths.p37330f80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <path d={svgPaths.p28009480} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <g>
              <path d={svgPaths.p204bc700} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d="M16 23.6934V16.4267" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
            <path d={svgPaths.p349e9000} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function ChartSquareIcon({ color }: IconProps) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg className="block size-full transition-all duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <circle cx="16.0013" cy="16.0001" r="13.3333" stroke={color} strokeWidth="2" />
            <path d="M16 10.6667V16.0001L18.6667 18.6667" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function GraphIcon({ color }: IconProps) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg className="block size-full transition-all duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path d={svgPaths.p115a1300} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <path d={svgPaths.pcd3db80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function DocumentTextIcon({ color }: IconProps) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg className="block size-full transition-all duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path d={svgPaths.pdae4200} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <path d={svgPaths.p1d5624c0} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <path d="M10.6667 17.3333H16" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <path d="M10.6667 22.6667H21.3333" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function UserTagIcon({ color }: IconProps) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg className="block size-full transition-all duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path d={svgPaths.p34478800} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" />
            <g>
              <path d={svgPaths.p201248a0} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
              <path d={svgPaths.p30f5bc80} stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </g>
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function LinkSquareIcon({ color }: IconProps) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <div className="absolute contents inset-0">
        <svg className="block size-full transition-all duration-300" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
          <g>
            <path d="M29.3346 14.6667V22.6667C29.3346 28.0001 28.0013 29.3334 22.668 29.3334H9.33464C4.0013 29.3334 2.66797 28.0001 2.66797 22.6667V9.33341C2.66797 4.00008 4.0013 2.66675 9.33464 2.66675H11.3346C13.3346 2.66675 13.7746 3.25341 14.5346 4.26675L16.5346 6.93341C17.0413 7.60008 17.3346 8.00008 18.668 8.00008H22.668C28.0013 8.00008 29.3346 9.33341 29.3346 14.6667Z" stroke={color} strokeWidth="2" strokeMiterlimit="10" />
            <path d="M10.668 2.66675H22.668C25.3346 2.66675 26.668 4.00008 26.668 6.66675V8.50675" stroke={color} strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export const benefitsIconMap = {
  cubeScan: CubeScanIcon,
  chartSquare: ChartSquareIcon,
  graph: GraphIcon,
  documentText: DocumentTextIcon,
  userTag: UserTagIcon,
  linkSquare: LinkSquareIcon,
};

export type BenefitsIconType = keyof typeof benefitsIconMap;
