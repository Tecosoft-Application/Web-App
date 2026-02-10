"use client";

import Image from "next/image";
import svgPaths from "../../../imports/svg-plhzsxyavn";
import { ComponentType, useEffect, useRef, useState } from "react";

// Types
interface Feature {
  icon: string;
  title: string;
}

interface AnalyticsSectionProps {
  content: {
    title: string;
    titleHighlight: string;
    img: string;
    imgWidth: number;
    imgHeight: number;
    description: string;
    features: Feature[];
  };
}

// Icon Components
function Analytics() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[28px]"
      data-name="sidebar-left"
    >
      <div
        className="absolute inset-[12.5%_8.34%_12.5%_8.33%]"
        data-name="elements"
      >
        <div className="absolute inset-[-4.17%_-3.76%_-4.17%_-3.74%]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.125 17.7917L6.125 13.125"
              stroke="url(#paint0_linear_981_2450)"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M11.957 17.7917L11.957 6.125"
              stroke="url(#paint1_linear_981_2450)"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M17.7891 17.7917L17.7891 10.7917"
              stroke="url(#paint2_linear_981_2450)"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M0.875 11.9583C0.875 6.7336 0.875 4.12123 2.49812 2.49812C4.12123 0.875 6.7336 0.875 11.9583 0.875C17.1831 0.875 19.7954 0.875 21.4185 2.49812C23.0417 4.12123 23.0417 6.7336 23.0417 11.9583C23.0417 17.1831 23.0417 19.7954 21.4185 21.4185C19.7954 23.0417 17.1831 23.0417 11.9583 23.0417C6.7336 23.0417 4.12123 23.0417 2.49812 21.4185C0.875 19.7954 0.875 17.1831 0.875 11.9583Z"
              stroke="url(#paint3_linear_981_2450)"
              strokeWidth="1.75"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <defs>
              <linearGradient
                id="paint0_linear_981_2450"
                x1="6.91196"
                y1="14.1361"
                x2="5.88436"
                y2="14.3447"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_981_2450"
                x1="12.744"
                y1="8.65278"
                x2="11.681"
                y2="8.73909"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_981_2450"
                x1="18.576"
                y1="12.3084"
                x2="17.5253"
                y2="12.4506"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_981_2450"
                x1="18.3192"
                y1="5.67778"
                x2="5.82036"
                y2="17.5191"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function ChartBreakout() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[28px]"
      data-name="dashboard-speed-01"
    >
      <div
        className="absolute inset-[10.42%_10.41%_10.42%_10.42%]"
        data-name="elements"
      >
        <div className="absolute inset-[-3.95%_-3.94%_-3.95%_-3.95%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
          >
            <g>
              <path
                d={svgPaths.p3d858300}
                id="Vector"
                stroke="url(#paint0_linear_1_538)"
                strokeLinecap="round"
                strokeWidth="1.75"
                className="group-hover:stroke-white transition-all duration-300"
              />
              <path
                d={svgPaths.p14edd540}
                id="Vector_2"
                stroke="url(#paint1_linear_1_538)"
                strokeLinecap="round"
                strokeWidth="1.75"
                className="group-hover:stroke-white transition-all duration-300"
              />
              <path
                d={svgPaths.p3cddcc00}
                id="Vector_3"
                stroke="url(#paint2_linear_1_538)"
                strokeWidth="1.75"
                className="group-hover:stroke-white transition-all duration-300"
              />
            </g>
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_1_538"
                x1="16.0517"
                x2="10.8728"
                y1="10.4805"
                y2="14.7737"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint1_linear_1_538"
                x1="13.2213"
                x2="9.50066"
                y1="6.47493"
                y2="11.7623"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint2_linear_1_538"
                x1="18.3192"
                x2="5.82036"
                y1="5.67778"
                y2="17.5191"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function InboxDownload() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[28px]"
      data-name="notification-square"
    >
      <div className="absolute inset-[8.33%]" data-name="elements">
        <div className="absolute inset-[-3.75%_-3.75%_-3.75%_-3.74%]">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.16797 2.91663C6.52611 3.10955 5.39628 3.51731 4.54109 4.3792C2.91797 6.015 2.91797 8.64778 2.91797 13.9133C2.91797 19.1789 2.91797 21.8117 4.54109 23.4475C6.1642 25.0833 8.77657 25.0833 14.0013 25.0833C19.226 25.0833 21.8384 25.0833 23.4615 23.4475C25.0846 21.8117 25.0846 19.1789 25.0846 13.9133C25.0846 8.64778 25.0846 6.015 23.4615 4.3792C22.6063 3.51731 21.4765 3.10955 19.8346 2.91663"
              stroke="url(#paint0_linear_913_3212)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M11.082 9.33333C11.6555 9.92332 13.1818 12.25 13.9987 12.25M16.9154 9.33333C16.3419 9.92332 14.8156 12.25 13.9987 12.25M13.9987 12.25L13.9987 2.91667"
              stroke="url(#paint1_linear_913_3212)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M25.0846 15.75H19.338C18.3556 15.75 17.5836 16.5709 17.1507 17.4384C16.6803 18.381 15.7383 19.25 14.0013 19.25C12.2643 19.25 11.3223 18.381 10.8519 17.4384C10.419 16.5709 9.64703 15.75 8.66457 15.75H2.91797"
              stroke="url(#paint2_linear_913_3212)"
              strokeWidth="1.75"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <defs>
              <linearGradient
                id="paint0_linear_913_3212"
                x1="20.3622"
                y1="7.7194"
                x2="7.86332"
                y2="19.5607"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_913_3212"
                x1="15.6726"
                y1="10.2278"
                x2="11.0514"
                y2="7.49149"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_913_3212"
                x1="20.3622"
                y1="16.5083"
                x2="19.7212"
                y2="20.3543"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function BatteriesEnergy() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[28px]"
      data-name="notification-square"
    >
      <div className="absolute inset-[8.33%]" data-name="elements">
        <div className="absolute inset-[-3.75%_-3.75%_-3.75%_-3.74%]">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5846 2.33337L11.668 7.00004H16.3346L13.418 11.6667"
              stroke="url(#paint0_linear_913_3216)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M19.832 7C20.932 7 21.4819 7 21.8237 7.34171C22.1654 7.68342 22.1654 8.23339 22.1654 9.33333V12.25M8.16536 7C7.06542 7 6.51545 7 6.17374 7.34171C5.83203 7.68342 5.83203 8.23339 5.83203 9.33333L5.83203 12.25"
              stroke="url(#paint1_linear_913_3216)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M23.3346 15.1666H21.0013C19.9014 15.1666 19.3514 15.1666 19.0097 15.5083C18.668 15.85 18.668 16.4 18.668 17.5V23.3333C18.668 24.4332 18.668 24.9832 19.0097 25.3249C19.3514 25.6666 19.9014 25.6666 21.0013 25.6666H23.3346C24.4346 25.6666 24.9846 25.6666 25.3263 25.3249C25.668 24.9832 25.668 24.4332 25.668 23.3333V17.5C25.668 16.4 25.668 15.85 25.3263 15.5083C24.9846 15.1666 24.4346 15.1666 23.3346 15.1666Z"
              stroke="url(#paint2_linear_913_3216)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M18.668 22.1666H25.668"
              stroke="url(#paint3_linear_913_3216)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M18.668 18.6666H25.668"
              stroke="url(#paint4_linear_913_3216)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M6.9987 15.1666H4.66536C3.56542 15.1666 3.01545 15.1666 2.67374 15.5083C2.33203 15.85 2.33203 16.4 2.33203 17.5V23.3333C2.33203 24.4332 2.33203 24.9832 2.67374 25.3249C3.01545 25.6666 3.56542 25.6666 4.66536 25.6666H6.9987C8.09864 25.6666 8.64861 25.6666 8.99032 25.3249C9.33203 24.9832 9.33203 24.4332 9.33203 23.3333V17.5C9.33203 16.4 9.33203 15.85 8.99032 15.5083C8.64861 15.1666 8.09864 15.1666 6.9987 15.1666Z"
              stroke="url(#paint5_linear_913_3216)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M2.33203 22.1666H9.33203"
              stroke="url(#paint6_linear_913_3216)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M2.33203 18.6666H9.33203"
              stroke="url(#paint7_linear_913_3216)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <defs>
              <linearGradient
                id="paint0_linear_913_3216"
                x1="15.3404"
                y1="4.3556"
                x2="11.2624"
                y2="6.28735"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_913_3216"
                x1="18.6857"
                y1="8.1375"
                x2="16.8817"
                y2="13.4546"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_913_3216"
                x1="24.1767"
                y1="17.4416"
                x2="18.8228"
                y2="20.8231"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_913_3216"
                x1="24.1767"
                y1="22.3833"
                x2="24.0102"
                y2="23.4875"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_913_3216"
                x1="24.1767"
                y1="18.8833"
                x2="24.0102"
                y2="19.9875"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_913_3216"
                x1="7.84073"
                y1="17.4416"
                x2="2.48682"
                y2="20.8231"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_913_3216"
                x1="7.84073"
                y1="22.3833"
                x2="7.67422"
                y2="23.4875"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint7_linear_913_3216"
                x1="7.84073"
                y1="18.8833"
                x2="7.67422"
                y2="19.9875"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function CrowdFunding() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[28px]"
      data-name="notification-square"
    >
      <div className="absolute inset-[8.33%]" data-name="elements">
        <div className="absolute inset-[-3.75%_-3.75%_-3.75%_-3.74%]">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="14"
              cy="5.83337"
              r="3.5"
              stroke="url(#paint0_linear_913_3221)"
              strokeWidth="1.75"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <circle
              cx="14.0013"
              cy="23.3333"
              r="2.33333"
              stroke="url(#paint1_linear_913_3221)"
              strokeWidth="1.75"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <circle
              cx="23.3333"
              cy="23.3333"
              r="2.33333"
              stroke="url(#paint2_linear_913_3221)"
              strokeWidth="1.75"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <circle
              cx="4.66536"
              cy="23.3333"
              r="2.33333"
              stroke="url(#paint3_linear_913_3221)"
              strokeWidth="1.75"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M23.3346 17.5C23.3346 16.2113 22.0288 15.1666 20.418 15.1666H7.58464C5.9738 15.1666 4.66797 16.2113 4.66797 17.5"
              stroke="url(#paint4_linear_913_3221)"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M14 12.8334L14 17.5"
              stroke="url(#paint5_linear_913_3221)"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <defs>
              <linearGradient
                id="paint0_linear_913_3221"
                x1="16.0087"
                y1="3.85004"
                x2="12.0617"
                y2="7.5894"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_913_3221"
                x1="15.3404"
                y1="22.0111"
                x2="12.7091"
                y2="24.504"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_913_3221"
                x1="24.6725"
                y1="22.0111"
                x2="22.0411"
                y2="24.504"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_913_3221"
                x1="6.00449"
                y1="22.0111"
                x2="3.37316"
                y2="24.504"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_913_3221"
                x1="19.3578"
                y1="15.6722"
                x2="19.0161"
                y2="18.2623"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_913_3221"
                x1="14.787"
                y1="13.8445"
                x2="13.7594"
                y2="14.0531"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Unlink() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[28px]"
      data-name="notification-square"
    >
      <div className="absolute inset-[8.33%]" data-name="elements">
        <div className="absolute inset-[-3.75%_-3.75%_-3.75%_-3.74%]">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.654 17.0445L22.6985 14C25.1005 11.598 25.1005 7.70354 22.6985 5.30151C20.2965 2.89949 16.402 2.8995 14 5.30151L10.9555 8.34598M17.0445 19.654L14 22.6985C11.598 25.1005 7.70354 25.1005 5.30152 22.6985C2.89949 20.2965 2.89949 16.402 5.30152 14L8.34598 10.9555"
              stroke="url(#paint0_linear_913_3225)"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M25.6654 19.8334H23.24M19.832 25.6667L19.832 23.2413"
              stroke="url(#paint1_linear_913_3225)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M2.33203 8.16671H4.7574M8.16536 2.33337L8.16536 4.75875"
              stroke="url(#paint2_linear_913_3225)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <defs>
              <linearGradient
                id="paint0_linear_913_3225"
                x1="20.0261"
                y1="8.05"
                x2="8.18507"
                y2="19.2681"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_913_3225"
                x1="24.4226"
                y1="21.0973"
                x2="21.1334"
                y2="24.2134"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_913_3225"
                x1="6.92261"
                y1="3.59726"
                x2="3.63344"
                y2="6.7134"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function HouseSolarPanel() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[28px]"
      data-name="notification-square"
    >
      <div className="absolute inset-[8.33%]" data-name="elements">
        <div className="absolute inset-[-3.75%_-3.75%_-3.75%_-3.74%]">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.62684 6.76372L5.33069 5.12943C5.91499 3.77272 6.20714 3.09436 6.77994 2.71381C7.35274 2.33325 8.08163 2.33325 9.53941 2.33325H18.4606C19.9184 2.33325 20.6473 2.33325 21.2201 2.71381C21.7929 3.09436 22.085 3.77272 22.6693 5.12943L23.3732 6.76372C24.326 8.97611 24.8024 10.0823 24.2924 10.8744C23.7824 11.6666 22.5938 11.6666 20.2166 11.6666H7.78338C5.40618 11.6666 4.21758 11.6666 3.70759 10.8744C3.1976 10.0823 3.67401 8.97611 4.62684 6.76372Z"
              stroke="url(#paint0_linear_913_3230)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M5.25 11.6667V17.5001C5.25 19.7 5.25 20.7999 5.93342 21.4833C6.48355 22.0335 7.30359 22.1408 8.75 22.1617M22.75 11.6667V17.5001C22.75 19.7 22.75 20.7999 22.0666 21.4833C21.5165 22.0335 20.6964 22.1408 19.25 22.1617"
              stroke="url(#paint1_linear_913_3230)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M15.168 16.3333L12.1414 19.9116C11.7719 20.3907 11.5872 20.6302 11.7016 20.8151C11.8161 20.9999 12.1491 20.9999 12.8152 20.9999H15.1875C15.8535 20.9999 16.1865 20.9999 16.301 21.1848C16.4154 21.3696 16.2307 21.6092 15.8612 22.0882L12.8152 25.6666"
              stroke="url(#paint2_linear_913_3230)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M11.6667 2.33325L10.5 11.6666M16.3333 2.33325L17.5 11.6666"
              stroke="url(#paint3_linear_913_3230)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M4.66797 7L23.3346 7"
              stroke="url(#paint4_linear_913_3230)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <defs>
              <linearGradient
                id="paint0_linear_913_3230"
                x1="20.0261"
                y1="4.35547"
                x2="15.9731"
                y2="12.9949"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_913_3230"
                x1="19.0217"
                y1="13.9406"
                x2="13.6653"
                y2="22.4025"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_913_3230"
                x1="15.3404"
                y1="18.3555"
                x2="11.2624"
                y2="20.2872"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_913_3230"
                x1="16.0087"
                y1="4.35547"
                x2="11.0318"
                y2="7.8918"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_913_3230"
                x1="19.3578"
                y1="7.21667"
                x2="19.2942"
                y2="8.34243"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function EcoPower() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[28px]"
      data-name="notification-square"
    >
      <div className="absolute inset-[8.33%]" data-name="elements">
        <div className="absolute inset-[-3.75%_-3.75%_-3.75%_-3.74%]">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 23.3333C6.10044 22.3204 3.5 18.29 3.5 14.5952C3.5 10.2018 7.43185 5.86028 10.1916 3.35409C11.6904 1.99297 13.9763 1.99297 15.4751 3.35409C17.233 4.95053 19.3374 7.29169 20.7097 9.91659"
              stroke="url(#paint0_linear_913_3234)"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d="M19.832 18.0833C18.082 19.2499 15.1654 21.5833 12.832 25.6666M15.1654 22.1666C12.0575 15.3307 18.4726 13.108 23.2444 12.8517C23.8202 12.8207 24.1082 12.8053 24.315 13.0047C24.5218 13.2041 24.5098 13.4885 24.486 14.0571C24.288 18.7853 22.1592 25.2079 15.1654 22.1666Z"
              stroke="url(#paint1_linear_913_3234)"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <defs>
              <linearGradient
                id="paint0_linear_913_3234"
                x1="17.0433"
                y1="6.88325"
                x2="5.55486"
                y2="15.8028"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_913_3234"
                x1="22.0132"
                y1="15.6138"
                x2="14.8465"
                y2="21.7862"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function SidebarLeft() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[28px]"
      data-name="sidebar-left"
    >
      <div
        className="absolute inset-[12.5%_8.34%_12.5%_8.33%]"
        data-name="elements"
      >
        <div className="absolute inset-[-4.17%_-3.76%_-4.17%_-3.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 26 23"
          >
            <g>
              <path
                d={svgPaths.p109d8400}
                id="Vector"
                stroke="url(#paint0_linear_1_455)"
                strokeWidth="1.75"
                className="group-hover:stroke-white transition-all duration-300"
              />
              <path
                d="M9.625 0.875001L9.625 21.875"
                id="Vector_2"
                stroke="url(#paint1_linear_1_455)"
                strokeLinejoin="round"
                strokeWidth="1.75"
                className="group-hover:stroke-white transition-all duration-300"
              />
              <path
                d={svgPaths.pf6eed00}
                id="Vector_3"
                stroke="url(#paint2_linear_1_455)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
                className="group-hover:stroke-white transition-all duration-300"
              />
            </g>
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_1_455"
                x1="19.2373"
                x2="7.39461"
                y1="5.425"
                y2="17.8913"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint1_linear_1_455"
                x1="10.412"
                x2="9.34418"
                y1="5.425"
                y2="5.47317"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint2_linear_1_455"
                x1="5.29312"
                x2="4.15804"
                y1="6.3"
                y2="6.65846"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function DashboardSpeed() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[28px]"
      data-name="dashboard-speed-01"
    >
      <div
        className="absolute inset-[10.42%_10.41%_10.42%_10.42%]"
        data-name="elements"
      >
        <div className="absolute inset-[-3.95%_-3.94%_-3.95%_-3.95%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 24 24"
          >
            <g>
              <path
                d={svgPaths.p3d858300}
                id="Vector"
                stroke="url(#paint0_linear_1_538)"
                strokeLinecap="round"
                strokeWidth="1.75"
                className="group-hover:stroke-white transition-all duration-300"
              />
              <path
                d={svgPaths.p14edd540}
                id="Vector_2"
                stroke="url(#paint1_linear_1_538)"
                strokeLinecap="round"
                strokeWidth="1.75"
                className="group-hover:stroke-white transition-all duration-300"
              />
              <path
                d={svgPaths.p3cddcc00}
                id="Vector_3"
                stroke="url(#paint2_linear_1_538)"
                strokeWidth="1.75"
                className="group-hover:stroke-white transition-all duration-300"
              />
            </g>
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_1_538"
                x1="16.0517"
                x2="10.8728"
                y1="10.4805"
                y2="14.7737"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint1_linear_1_538"
                x1="13.2213"
                x2="9.50066"
                y1="6.47493"
                y2="11.7623"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint2_linear_1_538"
                x1="18.3192"
                x2="5.82036"
                y1="5.67778"
                y2="17.5191"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function NotificationSquare() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[28px]"
      data-name="notification-square"
    >
      <div className="absolute inset-[8.33%]" data-name="elements">
        <div className="absolute inset-[-3.75%_-3.75%_-3.75%_-3.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 26 26"
          >
            <g>
              <path
                d={svgPaths.p2597e280}
                id="Vector"
                stroke="url(#paint0_linear_1_441)"
                strokeLinecap="round"
                strokeWidth="1.75"
                className="group-hover:stroke-white transition-all duration-300"
              />
              <path
                d={svgPaths.p1c4bca70}
                id="Vector_2"
                stroke="url(#paint1_linear_1_441)"
                strokeWidth="1.75"
                className="group-hover:stroke-white transition-all duration-300"
              />
              <path
                d="M6.70833 11.375H11.375"
                id="Vector_3"
                stroke="url(#paint2_linear_1_441)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
                className="group-hover:stroke-white transition-all duration-300"
              />
              <path
                d="M6.70833 17.2083H16.0417"
                id="Vector_4"
                stroke="url(#paint3_linear_1_441)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
                className="group-hover:stroke-white transition-all duration-300"
              />
            </g>
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_1_441"
                x1="18.3192"
                x2="5.82036"
                y1="6.84444"
                y2="18.6858"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint1_linear_1_441"
                x1="22.4685"
                x2="17.8636"
                y1="2.64444"
                y2="7.00704"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint2_linear_1_441"
                x1="10.3808"
                x2="10.1378"
                y1="11.5917"
                y2="12.6661"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint3_linear_1_441"
                x1="14.0533"
                x2="13.9272"
                y1="17.425"
                y2="18.5401"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function Alert() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[28px]"
      data-name="alert-01"
    >
      <div
        className="absolute inset-[10.42%_8.34%_10.42%_8.33%]"
        data-name="elements"
      >
        <div className="absolute inset-[-3.95%_-3.76%_-3.95%_-3.74%]">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 26 24"
          >
            <g>
              <path
                d={svgPaths.p2ffbed80}
                id="Vector"
                stroke="url(#paint0_linear_1_509)"
                strokeWidth="1.75"
                className="group-hover:stroke-white transition-all duration-300"
              />
              <path
                d={svgPaths.p4b08c00}
                id="Vector_2"
                stroke="url(#paint1_linear_1_509)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
                className="group-hover:stroke-white transition-all duration-300"
              />
              <path
                d="M12.5323 8.45833H12.5428"
                id="Vector_3"
                stroke="url(#paint2_linear_1_509)"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
                className="group-hover:stroke-white transition-all duration-300"
              />
            </g>
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_1_509"
                x1="19.2373"
                x2="6.72027"
                y1="5.67778"
                y2="18.1605"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint1_linear_1_509"
                x1="12.5757"
                x2="11.3707"
                y1="13.2222"
                y2="13.4505"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint2_linear_1_509"
                x1="12.5408"
                x2="12.5296"
                y1="8.71111"
                y2="8.71121"
              >
                <stop stopColor="#00B7FF" />
                <stop offset="1" stopColor="#0EB05C" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function DatabaseSync() {
  return (
    <div
      className="overflow-clip relative shrink-0 size-[28px]"
      data-name="database-sync"
    >
      <div className="absolute flex inset-[8.33%] items-center justify-center">
        <div className="flex-none h-[23.334px] scale-y-[-100%] w-[23.336px]">
          <div className="relative size-full" data-name="elements">
            <div className="absolute inset-[-3.75%_-3.74%]">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 26 26"
              >
                <g>
                  <ellipse
                    cx="9.33333"
                    cy="3.5"
                    id="Ellipse 1578"
                    rx="9.33333"
                    ry="3.5"
                    stroke="url(#paint0_linear_1_447)"
                    strokeWidth="1.75"
                    transform="matrix(1 0 0 -1 0.875 24.2088)"
                    className="group-hover:stroke-white transition-all duration-300"
                  />
                  <path
                    d={svgPaths.p35fb80}
                    id="Vector"
                    stroke="url(#paint1_linear_1_447)"
                    strokeLinecap="round"
                    strokeWidth="1.75"
                    className="group-hover:stroke-white transition-all duration-300"
                  />
                  <path
                    d={svgPaths.p1a084e00}
                    id="Vector_2"
                    stroke="url(#paint2_linear_1_447)"
                    strokeLinecap="round"
                    strokeWidth="1.75"
                    className="group-hover:stroke-white transition-all duration-300"
                  />
                  <path
                    d={svgPaths.p15363440}
                    id="Vector_3"
                    stroke="url(#paint3_linear_1_447)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    className="group-hover:stroke-white transition-all duration-300"
                  />
                  <path
                    d={svgPaths.p2f240e00}
                    id="Vector_4"
                    stroke="url(#paint4_linear_1_447)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.75"
                    className="group-hover:stroke-white transition-all duration-300"
                  />
                  <path
                    d={svgPaths.p1def2c0}
                    id="Vector_5"
                    stroke="url(#paint5_linear_1_447)"
                    strokeLinecap="round"
                    strokeWidth="1.75"
                    className="group-hover:stroke-white transition-all duration-300"
                  />
                </g>
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_1_447"
                    x1="14.6899"
                    x2="11.9845"
                    y1="1.51667"
                    y2="8.35137"
                  >
                    <stop stopColor="#00B7FF" />
                    <stop offset="1" stopColor="#0EB05C" />
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint1_linear_1_447"
                    x1="6.21123"
                    x2="6.08354"
                    y1="13.7819"
                    y2="13.2319"
                  >
                    <stop stopColor="#00B7FF" />
                    <stop offset="1" stopColor="#0EB05C" />
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint2_linear_1_447"
                    x1="6.21123"
                    x2="6.08354"
                    y1="5.61519"
                    y2="5.0652"
                  >
                    <stop stopColor="#00B7FF" />
                    <stop offset="1" stopColor="#0EB05C" />
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint3_linear_1_447"
                    x1="15.0272"
                    x2="20.2231"
                    y1="8.18632"
                    y2="2.03313"
                  >
                    <stop stopColor="#00B7FF" />
                    <stop offset="1" stopColor="#0EB05C" />
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint4_linear_1_447"
                    x1="15.5649"
                    x2="4.43857"
                    y1="16.4115"
                    y2="6.49064"
                  >
                    <stop stopColor="#00B7FF" />
                    <stop offset="1" stopColor="#0EB05C" />
                  </linearGradient>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint5_linear_1_447"
                    x1="7.30181"
                    x2="5.81746"
                    y1="11.7838"
                    y2="8.50248"
                  >
                    <stop stopColor="#00B7FF" />
                    <stop offset="1" stopColor="#0EB05C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Kanban() {
  return (
    <div
      className="relative shrink-0 size-[28px]"
      data-name="vuesax/linear/kanban"
    >
      <div
        className="absolute contents inset-0"
        data-name="vuesax/linear/kanban"
      >
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 28 28"
        >
          <g id="kanban">
            <path
              d={svgPaths.pab5700}
              id="Vector"
              stroke="url(#paint0_linear_1_436)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <path
              d={svgPaths.p246bcf0}
              id="Vector_2"
              stroke="url(#paint1_linear_1_436)"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.75"
              className="group-hover:stroke-white transition-all duration-300"
            />
            <g id="Vector_3" opacity="0"></g>
          </g>
          <defs>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint0_linear_1_436"
              x1="10.1373"
              x2="1.00717"
              y1="7.38889"
              y2="11.0651"
            >
              <stop stopColor="#00B7FF" />
              <stop offset="1" stopColor="#0EB05C" />
            </linearGradient>
            <linearGradient
              gradientUnits="userSpaceOnUse"
              id="paint1_linear_1_436"
              x1="23.554"
              x2="15.886"
              y1="5.61944"
              y2="10.3694"
            >
              <stop stopColor="#00B7FF" />
              <stop offset="1" stopColor="#0EB05C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

const ICON_COMPONENTS: Record<string, ComponentType> = {
  // Energy Management Icons
  analytics: Analytics,
  "chart-breakout": ChartBreakout,
  "indbox-download": InboxDownload,
  "batteries-energy": BatteriesEnergy,
  "crowd-funding": CrowdFunding,
  "unlink-02": Unlink,
  "house-solar-panel": HouseSolarPanel,
  "eco-power": EcoPower,
  // Predictive Maintenance Icons
  "sidebar-left": SidebarLeft,
  "dashboard-speed": DashboardSpeed,
  "notification-square": NotificationSquare,
  alert: Alert,
  "database-sync": DatabaseSync,
  kanban: Kanban,
};

// Shared class names
const ICON_WRAPPER_BASE_CLASS =
  "bg-[#f0f0f0] box-border content-stretch flex gap-[10px] items-center overflow-clip relative rounded-[12px] shrink-0 group transition-all duration-300";
const ICON_WRAPPER_DEFAULT_CLASS = `${ICON_WRAPPER_BASE_CLASS} justify-center p-3 sm:p-4 xl:p-[18px] size-[56px] sm:size-[60px] xl:size-[66px]`;

// Feature Item Component
interface AnalyticsFeatureItemProps {
  icon: string;
  title: string;
  index: number;
  activeIndex: number | null;
}

function AnalyticsFeatureItem({
  icon,
  title,
  index,
  activeIndex,
}: AnalyticsFeatureItemProps) {
  const IconComponent = ICON_COMPONENTS[icon];
  const isActive = activeIndex === index;

  return (
    <div
      data-analytics-card
      className="flex gap-4 sm:gap-5 items-center w-full"
    >
      <div
        className={`${ICON_WRAPPER_DEFAULT_CLASS} icon-wrapper ${
          isActive ? "active" : ""
        }`}
        data-active={isActive}
      >
        <IconComponent />
      </div>
      <p className="font-medium leading-[22px] sm:leading-[26px] text-[#282828] text-[16px] sm:text-[18px] xl:text-[20px] flex-1">
        {title}
      </p>
    </div>
  );
}

// Header Section Component
function AnalyticsHeader({
  content,
}: {
  content: AnalyticsSectionProps["content"];
}) {
  return (
    <div className="content-stretch flex flex-col items-center sm:items-center xl:items-start justify-start not-italic relative self-stretch shrink-0 w-full xl:w-[500px] xl:max-w-[500px] sm:text-center gap-5 sm:gap-6">
      <div className="flex justify-center  w-full">
        <Image
          src={content.img}
          alt="Analytics"
          className="object-contain"
          width={content.imgWidth}
          height={content.imgHeight}
        />
      </div>
      <p className="font-semibold leading-[32px] sm:leading-[40px] xl:leading-[45px] relative shrink-0 text-[#282828] text-[26px] sm:text-[30px] xl:text-[34px] w-full">
        <span>{content.title}</span>
        <span className="text-[#0098d4]">{content.titleHighlight}</span>
      </p>
      <p className="font-medium leading-[20px] sm:leading-[22px] relative shrink-0 text-[#8e8e8e] text-[13px] sm:text-[14px] xl:text-[15px] w-full sm:max-w-[600px] xl:max-w-none">
        {content.description}
      </p>
    </div>
  );
}

// Features Grid Component
function AnalyticsGrid({
  features,
  activeIndex,
}: {
  features: Feature[];
  activeIndex: number | null;
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10 xl:gap-12 w-full xl:w-auto">
      {features.map((feature, index) => (
        <AnalyticsFeatureItem
          key={index}
          icon={feature.icon}
          title={feature.title}
          index={index}
          activeIndex={activeIndex}
        />
      ))}
    </div>
  );
}

// Main Component
export function AnalyticsSection({ content }: AnalyticsSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 640) return; // ❌ disable scroll logic on desktop

    const onScroll = () => {
      const cards = containerRef.current?.querySelectorAll(
        "[data-analytics-card]"
      );
      if (!cards) return;

      const viewportCenter = window.innerHeight / 2;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        // Check if card intersects the vertical center of viewport
        if (rect.top < viewportCenter && rect.bottom > viewportCenter) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <style>
        {`
        @media (min-width: 1024px) {
          .icon-wrapper:hover {
            cursor: pointer;
            background: linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%) !important;
          }
        }
        @media (max-width: 1023px) {
          .icon-wrapper.active {
            cursor: pointer;
            background: linear-gradient(226.55deg, #00B7FF 21.48%, #0EB05C 76.42%) !important;
          }
          .icon-wrapper.active svg path {
            stroke: white !important;
          }
          .icon-wrapper.active svg ellipse {
            stroke: white !important;
          }
          .icon-wrapper.active svg circle {
            stroke: white !important;
          }
        }
      `}
      </style>
      <div
        ref={containerRef}
        className="bg-white box-border content-stretch flex flex-col xl:flex-row items-center xl:items-start justify-between overflow-clip px-5 sm:px-10 lg:px-16 xl:px-[100px] py-8 sm:py-12 lg:py-[60px] relative shrink-0 w-full max-w-[1512px] mx-auto gap-10 sm:gap-12 xl:gap-16"
        data-name="Analytics - Features"
      >
        <AnalyticsHeader content={content} />
        <AnalyticsGrid features={content.features} activeIndex={activeIndex} />
      </div>
    </>
  );
}
