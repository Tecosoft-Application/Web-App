"use client";
import React from "react";
import svgPaths from "../../imports/svg-6sw94kd16o";
import svgPaths2 from "../../imports/svg-qz3jjgq236";
import svgPaths3 from "../../imports/svg-lhtxf25f0z";
interface IconProps {
  isHovered: boolean;
}

export function SettingsIcon({ isHovered }: IconProps) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawStroke {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        .settings-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .settings-path-1.animate {
          animation: drawStroke 1.2s ease-in-out infinite;
        }
        .settings-path-2 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .settings-path-2.animate {
          animation: drawStroke 1.2s ease-in-out 0.2s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g id="setting-2">
            <path
              d={svgPaths.p34392700}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`settings-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.pad9dd00}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`settings-path-2 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function RefreshIcon({ isHovered }: IconProps) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawStrokeRefresh1 {
          0% { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeRefresh2 {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        .refresh-path-1 {
          stroke-dasharray: 120;
          stroke-dashoffset: 0;
        }
        .refresh-path-1.animate {
          animation: drawStrokeRefresh1 1.2s ease-in-out infinite;
        }
        .refresh-path-2 {
          stroke-dasharray: 80;
          stroke-dashoffset: 0;
        }
        .refresh-path-2.animate {
          animation: drawStrokeRefresh2 1.2s ease-in-out 0.2s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g id="refresh-square-2">
            <path
              d={svgPaths.p20901f80}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`refresh-path-1 ${isHovered ? "animate" : ""}`}
            />
            <g>
              <path
                d={svgPaths.p3cd4a700}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`refresh-path-2 ${isHovered ? "animate" : ""}`}
              />
            </g>
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function TargetIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawStrokeTarget1 {
          0% { stroke-dashoffset: 90; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeTarget2 {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        .target-path-1 {
          stroke-dasharray: 90;
          stroke-dashoffset: 0;
        }
        .target-path-1.animate {
          animation: drawStrokeTarget1 1.2s ease-in-out infinite;
        }
        .target-path-2 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .target-path-2.animate {
          animation: drawStrokeTarget2 1.2s ease-in-out 0.2s infinite;
        }
      `}</style>
      <div className="absolute inset-[8.33%]">
        <div className="absolute inset-[-3.75%_-3.74%_-3.75%_-3.75%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 29 29"
          >
            <g>
              <path
                d={svgPaths.p3da63c00}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeWidth="2"
                className={`target-path-1 ${isHovered ? "animate" : ""}`}
              />
              <path
                d={svgPaths.p334d6880}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeWidth="2"
                className={`target-path-2 ${isHovered ? "animate" : ""}`}
              />
              <path d={svgPaths.pebe53b0} fill="#07AF40" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function ChartIcon({ isHovered }: IconProps) {
  return (
    <div className="relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawStrokeChart1 {
          0% { stroke-dashoffset: 24; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeChart2 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        .chart-path-1 {
          stroke-dasharray: 24;
          stroke-dashoffset: 0;
        }
        .chart-path-1.animate {
          animation: drawStrokeChart1 1.2s ease-in-out infinite;
        }
        .chart-path-2 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .chart-path-2.animate {
          animation: drawStrokeChart2 1.2s ease-in-out 0.15s infinite;
        }
        .chart-path-3.animate {
          animation: drawStrokeChart2 1.2s ease-in-out 0.25s infinite;
        }
        .chart-path-4.animate {
          animation: drawStrokeChart2 1.2s ease-in-out 0.35s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d="M4 29.3333H28"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`chart-path-1 ${isHovered ? "animate" : ""}`}
            />
            <g>
              <path
                d={svgPaths.p1445600}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`chart-path-2 ${isHovered ? "animate" : ""}`}
              />
              <path
                d={svgPaths.pf9ac4f0}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`chart-path-2 chart-path-3 ${
                  isHovered ? "animate" : ""
                }`}
              />
              <path
                d={svgPaths.p15994780}
                stroke="#07AF40"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className={`chart-path-2 chart-path-4 ${
                  isHovered ? "animate" : ""
                }`}
              />
            </g>
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function MessageIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawStrokeTrendUp1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeTrendUp2 {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeTrendUp3 {
          0% { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: 0; }
        }
        .trend-up-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .trend-up-path-1.animate {
          animation: drawStrokeTrendUp1 1.2s ease-in-out infinite;
        }
        .trend-up-path-2 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .trend-up-path-2.animate {
          animation: drawStrokeTrendUp2 1.2s ease-in-out 0.2s infinite;
        }
        .trend-up-path-3 {
          stroke-dasharray: 120;
          stroke-dashoffset: 0;
        }
        .trend-up-path-3.animate {
          animation: drawStrokeTrendUp3 1.2s ease-in-out 0.35s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d="M22 12.6666L16.4 18.2666L14.2667 15.0666L10 19.3333"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`trend-up-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M19.332 12.6666H21.9987V15.3333"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`trend-up-path-2 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M12.0013 29.3333H20.0013C26.668 29.3333 29.3346 26.6666 29.3346 20V12C29.3346 5.33329 26.668 2.66663 20.0013 2.66663H12.0013C5.33464 2.66663 2.66797 5.33329 2.66797 12V20C2.66797 26.6666 5.33464 29.3333 12.0013 29.3333Z"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`trend-up-path-3 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function ArchiveIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawStrokeLink1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawStrokeLink2 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        .link-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .link-path-1.animate {
          animation: drawStrokeLink1 1s ease-in-out infinite;
        }
        .link-path-2 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .link-path-2.animate {
          animation: drawStrokeLink2 1s ease-in-out 0.2s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d="M13.332 17.6387C13.5209 17.9479 13.7449 18.2406 14.0042 18.5105C15.6143 20.1861 18.0683 20.448 19.9421 19.2963C20.2893 19.0829 20.6166 18.8209 20.9149 18.5105L25.2341 14.0153C27.1424 12.0292 27.1424 8.80905 25.2341 6.82295C23.3258 4.83685 20.2318 4.83685 18.3234 6.82295L17.3721 7.81308"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeWidth="2"
              className={`link-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M14.6258 24.1866L13.6741 25.1771C11.7657 27.1632 8.67165 27.1632 6.7633 25.1771C4.85494 23.191 4.85494 19.9709 6.7633 17.9848L11.0825 13.4896C12.9909 11.5035 16.0849 11.5035 17.9933 13.4896C18.2525 13.7594 18.4766 14.052 18.6654 14.3611"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeWidth="2"
              className={`link-path-2 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

interface IconProps {
  isHovered: boolean;
}

export function BoxIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawBox1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawBox2 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        .box-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .box-path-1.animate {
          animation: drawBox1 0.8s ease-in-out infinite;
        }
        .box-path-2 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .box-path-2.animate {
          animation: drawBox2 0.8s ease-in-out 0.2s infinite;
        }
        .box-path-3 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .box-path-3.animate {
          animation: drawBox1 0.8s ease-in-out 0.4s infinite;
        }
        .box-path-4 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .box-path-4.animate {
          animation: drawBox1 0.8s ease-in-out 0.6s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d={svgPaths.p3e82ea40}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`box-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M16 28.8133V16.72"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`box-path-2 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p24e9ab00}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`box-path-3 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p1b2a6c80}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`box-path-4 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function ChartsIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawChart1 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawChart2 {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawChart3 {
          0% { stroke-dashoffset: 70; }
          100% { stroke-dashoffset: 0; }
        }
        .chart-path-1 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .chart-path-1.animate {
          animation: drawChart1 0.8s ease-in-out infinite;
        }
        .chart-path-2 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .chart-path-2.animate {
          animation: drawChart2 0.8s ease-in-out 0.2s infinite;
        }
        .chart-path-3 {
          stroke-dasharray: 70;
          stroke-dashoffset: 0;
        }
        .chart-path-3.animate {
          animation: drawChart3 0.8s ease-in-out 0.4s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d={svgPaths.p20901f80}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`chart-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p27d1c80}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`chart-path-2 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p2eede80}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`chart-path-3 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function HierarchyIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawHier1 {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawHier2 {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawHier3 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        .hier-path-1 {
          stroke-dasharray: 20;
          stroke-dashoffset: 0;
        }
        .hier-path-1.animate {
          animation: drawHier1 0.8s ease-in-out infinite;
        }
        .hier-path-2 {
          stroke-dasharray: 40;
          stroke-dashoffset: 0;
        }
        .hier-path-2.animate {
          animation: drawHier2 0.8s ease-in-out 0.2s infinite;
        }
        .hier-path-3 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .hier-path-3.animate {
          animation: drawHier3 0.8s ease-in-out 0.4s infinite;
        }
        .hier-path-4 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .hier-path-4.animate {
          animation: drawHier3 0.8s ease-in-out 0.6s infinite;
        }
        .hier-path-5 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .hier-path-5.animate {
          animation: drawHier3 0.8s ease-in-out 0.8s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d="M6.66667 20V10.6667"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`hier-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p18fdab80}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`hier-path-2 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p32306a80}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`hier-path-3 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.pde99c00}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`hier-path-4 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p104aa700}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`hier-path-5 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function PresentationChartIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawPresent1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawPresent2 {
          0% { stroke-dashoffset: 30; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawPresent3 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawPresent4 {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawPresent5 {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        .present-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .present-path-1.animate {
          animation: drawPresent1 0.8s ease-in-out infinite;
        }
        .present-path-2 {
          stroke-dasharray: 30;
          stroke-dashoffset: 0;
        }
        .present-path-2.animate {
          animation: drawPresent2 0.8s ease-in-out 0.2s infinite;
        }
        .present-path-3 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .present-path-3.animate {
          animation: drawPresent3 0.8s ease-in-out 0.4s infinite;
        }
        .present-path-4 {
          stroke-dasharray: 20;
          stroke-dashoffset: 0;
        }
        .present-path-4.animate {
          animation: drawPresent4 0.8s ease-in-out 0.6s infinite;
        }
        .present-path-5 {
          stroke-dasharray: 40;
          stroke-dashoffset: 0;
        }
        .present-path-5.animate {
          animation: drawPresent5 0.8s ease-in-out 0.8s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d={svgPaths.pea5b4f0}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`present-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M2.66667 2.66667H29.3333"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`present-path-2 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p26e393c0}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`present-path-3 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M21.3333 29.3333L16 26.6667"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`present-path-4 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths.p24f546c0}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`present-path-5 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function PeopleIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawPeople1 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawPeople2 {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        .people-path-1 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .people-path-1.animate {
          animation: drawPeople1 0.8s ease-in-out infinite;
        }
        .people-path-2 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .people-path-2.animate {
          animation: drawPeople2 0.8s ease-in-out 0.15s infinite;
        }
        .people-path-3 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .people-path-3.animate {
          animation: drawPeople1 0.8s ease-in-out 0.3s infinite;
        }
        .people-path-4 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .people-path-4.animate {
          animation: drawPeople2 0.8s ease-in-out 0.45s infinite;
        }
        .people-path-5 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .people-path-5.animate {
          animation: drawPeople1 0.8s ease-in-out 0.6s infinite;
        }
        .people-path-6 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .people-path-6.animate {
          animation: drawPeople2 0.8s ease-in-out 0.75s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d={svgPaths2.p334b9d00}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`people-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths2.p3e147b10}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`people-path-2 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths2.p13fbb800}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`people-path-3 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths2.p16e49200}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`people-path-4 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths2.p18942380}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`people-path-5 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths2.p246a400}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`people-path-6 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function RulerIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawRuler1 {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawRuler2 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        .ruler-path-1 {
          stroke-dasharray: 80;
          stroke-dashoffset: 0;
        }
        .ruler-path-1.animate {
          animation: drawRuler1 0.8s ease-in-out infinite;
        }
        .ruler-path-2 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .ruler-path-2.animate {
          animation: drawRuler2 0.8s ease-in-out 0.3s infinite;
        }
      `}</style>
      <div className="overflow-clip relative shrink-0 size-[32px]">
        <div className="absolute inset-[8.33%_8.34%_8.33%_8.33%]">
          <div className="absolute inset-[-3.75%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 29 29"
            >
              <g>
                <path
                  d={svgPaths2.p2c079100}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeWidth="2"
                  className={`ruler-path-1 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d={svgPaths2.p297e7880}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`ruler-path-2 ${isHovered ? "animate" : ""}`}
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FolderIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawFolder1 {
          0% { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawFolder2 {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        .folder-path-1 {
          stroke-dasharray: 120;
          stroke-dashoffset: 0;
        }
        .folder-path-1.animate {
          animation: drawFolder1 0.8s ease-in-out infinite;
        }
        .folder-path-2 {
          stroke-dasharray: 80;
          stroke-dashoffset: 0;
        }
        .folder-path-2.animate {
          animation: drawFolder2 0.8s ease-in-out 0.3s infinite;
        }
      `}</style>
      <div className="overflow-clip relative shrink-0 size-[32px]">
        <div className="absolute inset-[8.33%_8.34%_12.5%_8.33%]">
          <div className="absolute inset-[-3.95%_-3.75%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 29 28"
            >
              <g>
                <path
                  d={svgPaths2.p274bf600}
                  stroke="#07AF40"
                  strokeWidth="2"
                  className={`folder-path-1 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d={svgPaths2.pbdaae00}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeWidth="2"
                  className={`folder-path-2 ${isHovered ? "animate" : ""}`}
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function SearchIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawSearch1 {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawSearch2 {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        .search-path-1 {
          stroke-dasharray: 80;
          stroke-dashoffset: 0;
        }
        .search-path-1.animate {
          animation: drawSearch1 0.8s ease-in-out infinite;
        }
        .search-path-2 {
          stroke-dasharray: 20;
          stroke-dashoffset: 0;
        }
        .search-path-2.animate {
          animation: drawSearch2 0.8s ease-in-out 0.4s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d={svgPaths2.pf43b200}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`search-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths2.p384d7300}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`search-path-2 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function ReceiptIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawReceipt1 {
          0% { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawReceipt2 {
          0% { stroke-dashoffset: 30; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawReceipt3 {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        .receipt-path-1 {
          stroke-dasharray: 120;
          stroke-dashoffset: 0;
        }
        .receipt-path-1.animate {
          animation: drawReceipt1 0.8s ease-in-out infinite;
        }
        .receipt-path-2 {
          stroke-dasharray: 30;
          stroke-dashoffset: 0;
        }
        .receipt-path-2.animate {
          animation: drawReceipt2 0.8s ease-in-out 0.3s infinite;
        }
        .receipt-path-3 {
          stroke-dasharray: 20;
          stroke-dashoffset: 0;
        }
        .receipt-path-3.animate {
          animation: drawReceipt3 0.8s ease-in-out 0.5s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d={svgPaths3.p3d902680}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`receipt-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M10.6667 9.33333H21.3333"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`receipt-path-2 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M12 14.6667H20"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`receipt-path-3 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function SettingIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawSetting1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawSetting2 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        .setting-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .setting-path-1.animate {
          animation: drawSetting1 0.8s ease-in-out infinite;
        }
        .setting-path-2 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .setting-path-2.animate {
          animation: drawSetting2 0.8s ease-in-out 0.3s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d={svgPaths3.p3ab7000}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`setting-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths3.p34392700}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`setting-path-2 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export function CalendarIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawCalendar1 {
          0% { stroke-dashoffset: 10; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawCalendar2 {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawCalendar3 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawCalendar4 {
          0% { stroke-dashoffset: 5; }
          100% { stroke-dashoffset: 0; }
        }
        .calendar-path-1 {
          stroke-dasharray: 10;
          stroke-dashoffset: 0;
        }
        .calendar-path-1.animate {
          animation: drawCalendar1 0.8s ease-in-out infinite;
        }
        .calendar-path-2 {
          stroke-dasharray: 10;
          stroke-dashoffset: 0;
        }
        .calendar-path-2.animate {
          animation: drawCalendar1 0.8s ease-in-out 0.1s infinite;
        }
        .calendar-path-3 {
          stroke-dasharray: 40;
          stroke-dashoffset: 0;
        }
        .calendar-path-3.animate {
          animation: drawCalendar2 0.8s ease-in-out 0.2s infinite;
        }
        .calendar-path-4 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .calendar-path-4.animate {
          animation: drawCalendar3 0.8s ease-in-out 0.4s infinite;
        }
        .calendar-path-5 {
          stroke-dasharray: 5;
          stroke-dashoffset: 0;
        }
        .calendar-path-5.animate {
          animation: drawCalendar4 0.8s ease-in-out 0.6s infinite;
        }
        .calendar-path-6 {
          stroke-dasharray: 5;
          stroke-dashoffset: 0;
        }
        .calendar-path-6.animate {
          animation: drawCalendar4 0.8s ease-in-out 0.7s infinite;
        }
        .calendar-path-7 {
          stroke-dasharray: 5;
          stroke-dashoffset: 0;
        }
        .calendar-path-7.animate {
          animation: drawCalendar4 0.8s ease-in-out 0.8s infinite;
        }
      `}</style>
      <div className="absolute contents inset-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 32 32"
        >
          <g>
            <path
              d="M10.6667 2.66667V6.66667"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`calendar-path-1 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M21.3333 2.66667V6.66667"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`calendar-path-2 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M4.66667 12.12H27.3333"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`calendar-path-3 ${isHovered ? "animate" : ""}`}
            />
            <path
              d={svgPaths3.p3fd72b00}
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="10"
              strokeWidth="2"
              className={`calendar-path-4 ${isHovered ? "animate" : ""}`}
            />
            <g opacity="0"></g>
            <path
              d="M15.994 18.2667H16.006"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`calendar-path-5 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M11.0591 18.2667H11.0711"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`calendar-path-6 ${isHovered ? "animate" : ""}`}
            />
            <path
              d="M11.0591 22.2667H11.0711"
              stroke="#07AF40"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className={`calendar-path-7 ${isHovered ? "animate" : ""}`}
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function DashboardIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawDashboard1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawDashboard2 {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawDashboard3 {
          0% { stroke-dashoffset: 5; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawDashboard4 {
          0% { stroke-dashoffset: 30; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawDashboard5 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        .dashboard-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .dashboard-path-1.animate {
          animation: drawDashboard1 0.8s ease-in-out infinite;
        }
        .dashboard-path-2 {
          stroke-dasharray: 40;
          stroke-dashoffset: 0;
        }
        .dashboard-path-2.animate {
          animation: drawDashboard2 0.8s ease-in-out 0.2s infinite;
        }
        .dashboard-path-3 {
          stroke-dasharray: 5;
          stroke-dashoffset: 0;
        }
        .dashboard-path-3.animate {
          animation: drawDashboard3 0.8s ease-in-out 0.3s infinite;
        }
        .dashboard-path-4 {
          stroke-dasharray: 5;
          stroke-dashoffset: 0;
        }
        .dashboard-path-4.animate {
          animation: drawDashboard3 0.8s ease-in-out 0.4s infinite;
        }
        .dashboard-path-5 {
          stroke-dasharray: 30;
          stroke-dashoffset: 0;
        }
        .dashboard-path-5.animate {
          animation: drawDashboard4 0.8s ease-in-out 0.5s infinite;
        }
        .dashboard-path-6 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .dashboard-path-6.animate {
          animation: drawDashboard5 0.8s ease-in-out 0.7s infinite;
        }
      `}</style>
      <div className="overflow-clip relative shrink-0 size-[32px]">
        <div className="absolute inset-[10.42%_10.41%_10.42%_10.42%]">
          <div className="absolute inset-[-3.95%_-3.94%_-3.95%_-3.95%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 28 28"
            >
              <g>
                <path
                  d={svgPaths3.pbf17200}
                  stroke="#07AF40"
                  strokeWidth="2"
                  className={`dashboard-path-1 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d="M1 9.66667H26.3333"
                  stroke="#07AF40"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`dashboard-path-2 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d="M6.99974 5.66667H7.01172"
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`dashboard-path-3 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d="M12.3331 5.66667H12.3451"
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`dashboard-path-4 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d={svgPaths3.p22c5c580}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeWidth="2"
                  className={`dashboard-path-5 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d={svgPaths3.p30ca5f80}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`dashboard-path-6 ${isHovered ? "animate" : ""}`}
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AiIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawAi1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawAi2 {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawAi3 {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        .ai-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .ai-path-1.animate {
          animation: drawAi1 0.8s ease-in-out infinite;
        }
        .ai-path-2 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .ai-path-2.animate {
          animation: drawAi1 0.8s ease-in-out 0.15s infinite;
        }
        .ai-path-3 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .ai-path-3.animate {
          animation: drawAi2 0.8s ease-in-out 0.3s infinite;
        }
        .ai-path-4 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .ai-path-4.animate {
          animation: drawAi2 0.8s ease-in-out 0.45s infinite;
        }
        .ai-path-5 {
          stroke-dasharray: 20;
          stroke-dashoffset: 0;
        }
        .ai-path-5.animate {
          animation: drawAi3 0.8s ease-in-out 0.6s infinite;
        }
      `}</style>
      <div className="overflow-clip relative shrink-0 size-[32px]">
        <div className="absolute inset-[8.33%_12.5%]">
          <div className="absolute inset-[-3.75%_-4.17%]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 26 29"
            >
              <g>
                <path
                  d={svgPaths3.p21faf780}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeWidth="2"
                  className={`ai-path-1 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d={svgPaths3.p31521100}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeWidth="2"
                  className={`ai-path-2 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d={svgPaths3.p2bf80a00}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`ai-path-3 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d={svgPaths3.p3ef800}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`ai-path-4 ${isHovered ? "animate" : ""}`}
                />
                <path
                  d={svgPaths3.p3affee80}
                  stroke="#07AF40"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className={`ai-path-5 ${isHovered ? "animate" : ""}`}
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TimeManagementIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawTimeManagement1 {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawTimeManagement2 {
          0% { stroke-dashoffset: 70; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawTimeManagement3 {
          0% { stroke-dashoffset: 60; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawTimeManagement4 {
          0% { stroke-dashoffset: 90; }
          100% { stroke-dashoffset: 0; }
        }
        .timemanagement-path-1 {
          stroke-dasharray: 80;
          stroke-dashoffset: 0;
        }
        .timemanagement-path-1.animate {
          animation: drawTimeManagement1 0.8s ease-in-out infinite;
        }
        .timemanagement-path-2 {
          stroke-dasharray: 70;
          stroke-dashoffset: 0;
        }
        .timemanagement-path-2.animate {
          animation: drawTimeManagement2 0.8s ease-in-out 0.2s infinite;
        }
        .timemanagement-path-3 {
          stroke-dasharray: 60;
          stroke-dashoffset: 0;
        }
        .timemanagement-path-3.animate {
          animation: drawTimeManagement3 0.8s ease-in-out 0.4s infinite;
        }
        .timemanagement-path-4 {
          stroke-dasharray: 90;
          stroke-dashoffset: 0;
        }
        .timemanagement-path-4.animate {
          animation: drawTimeManagement4 0.8s ease-in-out 0.6s infinite;
        }
      `}</style>
      <div className="overflow-clip relative shrink-0 size-[32px]">
        <div className="absolute inset-[8.33%_12.5%]">
          <div className="absolute inset-[-3.75%_-4.17%]">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 24.3333C1 22.762 1 21.9763 1.58579 21.4882C2.17157 21 3.11438 21 5 21C6.88562 21 7.82843 21 8.41421 21.4882C9 21.9763 9 22.762 9 24.3333C9 25.9047 9 26.6904 8.41421 27.1785C7.82843 27.6667 6.88562 27.6667 5 27.6667C3.11438 27.6667 2.17157 27.6667 1.58579 27.1785C1 26.6904 1 25.9047 1 24.3333Z"
                stroke="#07AF40"
                strokeWidth="2"
                className={`timemanagement-path-1 ${
                  isHovered ? "animate" : ""
                }`}
              />
              <path
                d="M19.6641 24.3333C19.6641 22.762 19.6641 21.9763 20.2498 21.4882C20.8356 21 21.7784 21 23.6641 21C25.5497 21 26.4925 21 27.0783 21.4882C27.6641 21.9763 27.6641 22.762 27.6641 24.3333C27.6641 25.9047 27.6641 26.6904 27.0783 27.1785C26.4925 27.6667 25.5497 27.6667 23.6641 27.6667C21.7784 27.6667 20.8356 27.6667 20.2498 27.1785C19.6641 26.6904 19.6641 25.9047 19.6641 24.3333Z"
                stroke="#07AF40"
                strokeWidth="2"
                className={`timemanagement-path-2 ${
                  isHovered ? "animate" : ""
                }`}
              />
              <path
                d="M23.6667 21C23.6667 17.6907 22.6749 17 17.9231 17H10.7436C5.99173 17 5 17.6907 5 21"
                stroke="#07AF40"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`timemanagement-path-3 ${
                  isHovered ? "animate" : ""
                }`}
              />
              <path
                d="M14.332 7L15.6654 5M20.332 7C20.332 10.3137 17.6457 13 14.332 13C11.0183 13 8.33203 10.3137 8.33203 7C8.33203 3.68629 11.0183 1 14.332 1C17.6457 1 20.332 3.68629 20.332 7Z"
                stroke="#07AF40"
                strokeWidth="2"
                strokeLinecap="round"
                className={`timemanagement-path-4 ${
                  isHovered ? "animate" : ""
                }`}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function BatteryIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawBattery1 {
          0% { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawBattery2 {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawBattery3 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        .battery-path-1 {
          stroke-dasharray: 120;
          stroke-dashoffset: 0;
        }
        .battery-path-1.animate {
          animation: drawBattery1 0.8s ease-in-out infinite;
        }
        .battery-path-2 {
          stroke-dasharray: 80;
          stroke-dashoffset: 0;
        }
        .battery-path-2.animate {
          animation: drawBattery2 0.8s ease-in-out 0.2s infinite;
        }
        .battery-path-3 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .battery-path-3.animate {
          animation: drawBattery3 0.8s ease-in-out 0.4s infinite;
        }
      `}</style>
      <div className="overflow-clip relative shrink-0 size-[32px]">
        <div className="absolute inset-[8.33%_12.5%]">
          <div className="absolute inset-[-3.75%_-4.17%]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.668 25.3333H17.3346C21.1059 25.3333 22.9915 25.3333 24.1631 24.1617C25.3346 22.9901 25.3346 21.1045 25.3346 17.3333C25.3346 14.8488 25.3346 13.1827 24.9996 12M7.33464 9.3844C5.65743 9.4785 4.59861 9.74576 3.83954 10.5048C2.66797 11.6764 2.66797 13.562 2.66797 17.3333C2.66797 20.325 2.66797 22.13 3.25285 23.3333"
                stroke="#07AF40"
                strokeWidth="2"
                strokeLinecap="round"
                className={`battery-path-1 ${isHovered ? "animate" : ""}`}
              />
              <path
                d="M25.332 13.9999L26.7016 14.2282C27.61 14.3796 28.0642 14.4553 28.4088 14.6755C28.7478 14.8921 29.0136 15.2058 29.1715 15.5758C29.332 15.9519 29.332 16.4124 29.332 17.3333C29.332 18.2542 29.332 18.7146 29.1715 19.0908C29.0136 19.4607 28.7478 19.7745 28.4088 19.9911C28.0642 20.2112 27.61 20.2869 26.7016 20.4383L25.332 20.6666"
                stroke="#07AF40"
                strokeWidth="2"
                strokeLinecap="round"
                className={`battery-path-2 ${isHovered ? "animate" : ""}`}
              />
              <path
                d="M6.70962 26.6666C6.05872 19.4666 11.9991 18 14.6657 14.6666M14.7106 21.1137C18.1036 20.1658 20.2797 17.8966 21.087 14.4644C22.0014 10.5774 20.362 5.28433 16.1355 5.33366C16.1355 5.33366 16.5658 7.01279 16.1894 7.83518C14.8016 10.8674 9.99903 10.6568 8.44203 14.5025C7.51484 16.6544 8.07556 19.0584 9.82025 20.4372C10.9165 21.3037 13.0813 21.5689 14.7106 21.1137Z"
                stroke="#07AF40"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`battery-path-3 ${isHovered ? "animate" : ""}`}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TextLinkIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawTextLink1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawTextLink2 {
          0% { stroke-dashoffset: 10; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawTextLink3 {
          0% { stroke-dashoffset: 20; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawTextLink4 {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        .textlink-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .textlink-path-1.animate {
          animation: drawTextLink1 0.8s ease-in-out infinite;
        }
        .textlink-path-2 {
          stroke-dasharray: 10;
          stroke-dashoffset: 0;
        }
        .textlink-path-2.animate {
          animation: drawTextLink2 0.8s ease-in-out 0.2s infinite;
        }
        .textlink-path-3 {
          stroke-dasharray: 20;
          stroke-dashoffset: 0;
        }
        .textlink-path-3.animate {
          animation: drawTextLink3 0.8s ease-in-out 0.3s infinite;
        }
        .textlink-path-4 {
          stroke-dasharray: 80;
          stroke-dashoffset: 0;
        }
        .textlink-path-4.animate {
          animation: drawTextLink4 0.8s ease-in-out 0.5s infinite;
        }
      `}</style>
      <div className="overflow-clip relative shrink-0 size-[32px]">
        <div className="absolute inset-[8.33%_12.5%]">
          <div className="absolute inset-[-3.75%_-4.17%]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28 28H13.3333C8.93356 28 6.73367 28 5.36683 26.6332C4 25.2663 4 23.0664 4 18.6667V4"
                stroke="#07AF40"
                strokeWidth="2"
                strokeLinecap="round"
                className={`textlink-path-1 ${isHovered ? "animate" : ""}`}
              />
              <path
                d="M9.33464 5.33331H10.668"
                stroke="#07AF40"
                strokeWidth="2"
                strokeLinecap="round"
                className={`textlink-path-2 ${isHovered ? "animate" : ""}`}
              />
              <path
                d="M9.33464 9.33331H14.668"
                stroke="#07AF40"
                strokeWidth="2"
                strokeLinecap="round"
                className={`textlink-path-3 ${isHovered ? "animate" : ""}`}
              />
              <path
                d="M6.66797 26.6666C8.09588 24.0707 10.0317 17.3585 13.743 17.3585C16.3081 17.3585 16.9724 20.6289 19.4861 20.6289C23.8109 20.6289 23.184 13.3333 28.0013 13.3333"
                stroke="#07AF40"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`textlink-path-4 ${isHovered ? "animate" : ""}`}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}


export function SearchIcon2({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawSearchIcon1 {
          0% { stroke-dashoffset: 120; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawSearchIcon2 {
          0% { stroke-dashoffset: 30; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawSearchIcon3 {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes fadeInSearch {
          0% { opacity: 0; }
          50% { opacity: 0; }
          100% { opacity: 1; }
        }
        .searchicon-path-1 {
          stroke-dasharray: 120;
          stroke-dashoffset: 0;
        }
        .searchicon-path-1.animate {
          animation: drawSearchIcon1 0.8s ease-in-out infinite;
        }
        .searchicon-path-2 {
          stroke-dasharray: 30;
          stroke-dashoffset: 0;
        }
        .searchicon-path-2.animate {
          animation: drawSearchIcon2 0.8s ease-in-out 0.2s infinite;
        }
        .searchicon-path-3 {
          stroke-dasharray: 40;
          stroke-dashoffset: 0;
        }
        .searchicon-path-3.animate {
          animation: drawSearchIcon3 0.8s ease-in-out 0.4s infinite;
        }
        .searchicon-path-4 {
          opacity: 1;
        }
        .searchicon-path-4.animate {
          animation: fadeInSearch 0.8s ease-in-out 0.6s infinite;
        }
      `}</style>
      <div className="overflow-clip relative shrink-0 size-[32px]">
        <div className="absolute inset-[8.33%_12.5%]">
          <div className="absolute inset-[-3.75%_-4.17%]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3346 28C9.36351 28 6.37795 28 4.52296 26.145C2.66797 24.29 2.66797 21.3045 2.66797 15.3334C2.66797 9.36223 2.66797 6.37667 4.52296 4.52168C6.37795 2.66669 9.36351 2.66669 15.3346 2.66669C21.3058 2.66669 24.2913 2.66669 26.1463 4.52168C28.0013 6.37667 28.0013 9.36223 28.0013 15.3334"
                stroke="#07AF40"
                strokeWidth="1.75"
                strokeLinecap="round"
                className={`searchicon-path-1 ${isHovered ? "animate" : ""}`}
              />
              <path
                d="M2.66797 9.33331L28.0013 9.33331"
                stroke="#07AF40"
                strokeWidth="1.75"
                strokeLinejoin="round"
                className={`searchicon-path-2 ${isHovered ? "animate" : ""}`}
              />
              <path
                d="M13.3333 21.3333H14.6667M8 21.3333H9.33333M13.3333 16H18.6667M8 16H9.33333"
                stroke="#07AF40"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`searchicon-path-3 ${isHovered ? "animate" : ""}`}
              />
              <path
                d="M28.7154 29.9515C29.0568 30.2935 29.6108 30.294 29.9528 29.9526C30.2948 29.6112 30.2953 29.0572 29.9539 28.7152L29.3346 29.3334L28.7154 29.9515ZM27.0686 27.0634L26.4493 27.6815L28.7154 29.9515L29.3346 29.3334L29.9539 28.7152L27.6878 26.4452L27.0686 27.0634ZM28.268 23.4667H29.143C29.143 20.3325 26.6022 17.7917 23.468 17.7917V18.6667V19.5417C25.6357 19.5417 27.393 21.299 27.393 23.4667H28.268ZM23.468 18.6667V17.7917C20.3338 17.7917 17.793 20.3325 17.793 23.4667H18.668H19.543C19.543 21.299 21.3003 19.5417 23.468 19.5417V18.6667ZM18.668 23.4667H17.793C17.793 26.6009 20.3338 29.1417 23.468 29.1417V28.2667V27.3917C21.3003 27.3917 19.543 25.6344 19.543 23.4667H18.668ZM23.468 28.2667V29.1417C26.6022 29.1417 29.143 26.6009 29.143 23.4667H28.268H27.393C27.393 25.6344 25.6357 27.3917 23.468 27.3917V28.2667Z"
                fill="#07AF40"
                className={`searchicon-path-4 ${isHovered ? "animate" : ""}`}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export function ServiceIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawService1 {
          0% { stroke-dashoffset: 50; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawService2 {
          0% { stroke-dashoffset: 150; }
          100% { stroke-dashoffset: 0; }
        }
        .service-path-1 {
          stroke-dasharray: 50;
          stroke-dashoffset: 0;
        }
        .service-path-1.animate {
          animation: drawService1 0.8s ease-in-out infinite;
        }
        .service-path-2 {
          stroke-dasharray: 150;
          stroke-dashoffset: 0;
        }
        .service-path-2.animate {
          animation: drawService2 0.8s ease-in-out 0.3s infinite;
        }
      `}</style>
      <div className="overflow-clip relative shrink-0 size-[32px]">
        <div className="absolute inset-[8.33%_12.5%]">
          <div className="absolute inset-[-3.75%_-4.17%]">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6654 10.6666L13.332 15.9999H18.6654L15.332 21.3332"
                stroke="#07AF40"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`service-path-1 ${isHovered ? "animate" : ""}`}
              />
              <path
                d="M28.0159 18.8521C28.7118 18.6606 29.0598 18.5648 29.1972 18.3817C29.3346 18.1987 29.3346 17.9042 29.3346 17.3152V14.6847C29.3346 14.0957 29.3346 13.8012 29.1972 13.6182C29.0598 13.4351 28.7118 13.3394 28.0159 13.1479C25.4154 12.4323 23.7879 9.65834 24.459 7.02234C24.6436 6.2974 24.7359 5.93493 24.6477 5.72234C24.5596 5.50976 24.3067 5.36326 23.801 5.07026L21.5014 3.73809C21.0051 3.45058 20.7569 3.30682 20.5342 3.33744C20.3114 3.36805 20.0602 3.62381 19.5576 4.13534C17.612 6.11577 14.3927 6.11569 12.4471 4.13521C11.9445 3.62368 11.6933 3.36792 11.4705 3.3373C11.2478 3.30669 10.9997 3.45045 10.5033 3.73796L8.20375 5.07013C7.698 5.36311 7.44513 5.5096 7.357 5.72216C7.26888 5.93472 7.36113 6.29723 7.54563 7.02224C8.21646 9.65832 6.58759 12.4324 3.98666 13.1479C3.2908 13.3394 2.94286 13.4351 2.80542 13.6181C2.66797 13.8012 2.66797 14.0957 2.66797 14.6847V17.3152C2.66797 17.9042 2.66797 18.1987 2.8054 18.3818C2.94284 18.5648 3.29078 18.6606 3.98666 18.8521C6.58716 19.5676 8.21475 22.3416 7.5436 24.9776C7.35902 25.7026 7.26673 26.065 7.35485 26.2776C7.44298 26.4902 7.69586 26.6367 8.20164 26.9297L10.5012 28.2619C10.9976 28.5494 11.2458 28.6932 11.4685 28.6625C11.6913 28.6319 11.9425 28.3761 12.4449 27.8646C14.3916 25.8825 17.6131 25.8824 19.5598 27.8644C20.0622 28.376 20.3135 28.6318 20.5362 28.6624C20.759 28.693 21.0071 28.5493 21.5035 28.2617L23.8031 26.9296C24.3089 26.6366 24.5618 26.49 24.6499 26.2774C24.738 26.0648 24.6457 25.7024 24.461 24.9775C23.7896 22.3416 25.4159 19.5677 28.0159 18.8521Z"
                stroke="#07AF40"
                strokeWidth="1.75"
                strokeLinecap="round"
                className={`service-path-2 ${isHovered ? "animate" : ""}`}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ChartHistogramIcon({ isHovered }: IconProps) {
  return (
    <div className="overflow-clip relative shrink-0 size-[32px]">
      <style>{`
        @keyframes drawHistogram1 {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawHistogram2 {
          0% { stroke-dashoffset: 40; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawHistogram3 {
          0% { stroke-dashoffset: 30; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawHistogram4 {
          0% { stroke-dashoffset: 25; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes drawHistogram5 {
          0% { stroke-dashoffset: 80; }
          100% { stroke-dashoffset: 0; }
        }
        .histogram-path-1 {
          stroke-dasharray: 100;
          stroke-dashoffset: 0;
        }
        .histogram-path-1.animate {
          animation: drawHistogram1 0.8s ease-in-out infinite;
        }
        .histogram-path-2 {
          stroke-dasharray: 40;
          stroke-dashoffset: 0;
        }
        .histogram-path-2.animate {
          animation: drawHistogram2 0.8s ease-in-out 0.2s infinite;
        }
        .histogram-path-3 {
          stroke-dasharray: 30;
          stroke-dashoffset: 0;
        }
        .histogram-path-3.animate {
          animation: drawHistogram3 0.8s ease-in-out 0.3s infinite;
        }
        .histogram-path-4 {
          stroke-dasharray: 25;
          stroke-dashoffset: 0;
        }
        .histogram-path-4.animate {
          animation: drawHistogram4 0.8s ease-in-out 0.4s infinite;
        }
        .histogram-path-5 {
          stroke-dasharray: 80;
          stroke-dashoffset: 0;
        }
        .histogram-path-5.animate {
          animation: drawHistogram5 0.8s ease-in-out 0.5s infinite;
        }
      `}</style>
      <div className="overflow-clip relative shrink-0 size-[32px]">
        <div className="absolute inset-[8.33%_12.5%]">
          <div className="absolute inset-[-3.75%_-4.17%]">
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.875 24.875H10.2083C5.80856 24.875 3.60867 24.875 2.24183 23.5082C0.875 22.1413 0.875 19.9414 0.875 15.5417V0.875"
                stroke="#07AF40"
                strokeWidth="1.75"
                strokeLinecap="round"
                className={`histogram-path-1 ${isHovered ? "animate" : ""}`}
              />
              <path
                d="M14.207 10.2083L14.207 24.875"
                stroke="#07AF40"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`histogram-path-2 ${isHovered ? "animate" : ""}`}
              />
              <path
                d="M20.875 14.2083L20.875 24.875"
                stroke="#07AF40"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`histogram-path-3 ${isHovered ? "animate" : ""}`}
              />
              <path
                d="M7.54297 14.2083L7.54297 23.5416"
                stroke="#07AF40"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`histogram-path-4 ${isHovered ? "animate" : ""}`}
              />
              <path
                d="M24.875 7.52426C22.4216 7.52426 19.7979 7.86505 18.0444 5.53297C16.048 2.87793 12.3686 2.87793 10.3723 5.53297C8.61876 7.86505 5.99503 7.52426 3.54167 7.52426H0.875"
                stroke="#07AF40"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`histogram-path-5 ${isHovered ? "animate" : ""}`}
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export const iconMap = {
  settings: SettingsIcon,
  refresh: RefreshIcon,
  target: TargetIcon,
  chart: ChartIcon,
  box: BoxIcon,
  hierarchy: HierarchyIcon,
  message: MessageIcon,
  archive: ArchiveIcon,
  presentationChart: PresentationChartIcon,
  people: PeopleIcon,
  folder: FolderIcon,
  ruler: RulerIcon,
  search: SearchIcon,

  receipt: ReceiptIcon,
  setting: SettingIcon,
  calendar: CalendarIcon,
  dashboard: DashboardIcon,
  ai: AiIcon,

  "time-management": TimeManagementIcon,
  battery: BatteryIcon,
  "text-link": TextLinkIcon,

  "search-2" : SearchIcon2,
  service : ServiceIcon,
  "chart-histogram" : ChartHistogramIcon,
};

export type IconType = keyof typeof iconMap;
