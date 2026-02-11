"use client";

import React from "react";
import svgPaths from "@/imports/svg-9v3kh9sdih";
import BookDemoButton from "@/components/BookDemoButton";
import { on } from "events";

// =============================================================================
// SVG PATH CONSTANTS (Simple inline paths)
// =============================================================================

const SVG_PATHS = {
  arrowDown: "M7 1.75V12.25M7 12.25L11.9583 7.29167M7 12.25L2.04167 7.29167",
} as const;

const OUTCOMES_DATA = {
  hero: {
    title: "Outcomes that Matter",
    description:
      "Turn slow, manual processes into intelligent, self-improving workflows — spot issues sooner, maintain audit-ready trails, and let AI automate the heavy lifting across your operations.",
    buttons: [
      { text: "Talk to an expert", type: "primary" },
      { text: "Explore Platforms", type: "secondary" },
    ],
  },
  cards: [
    {
      id: 1,
      title: "Unbreakable Reliability",
      description:
        "Spot issues early, guide fixes, and keep work humming with fewer surprises.",
      iconComponent: "Background",
    },
    {
      id: 2,
      title: "Smarter Resource Use",
      description:
        "Cut waste and optimize consumption with demand‑aware insights and controls.",
      iconComponent: "Group4",
    },
    {
      id: 3,
      title: "Fast, Aligned Decisions",
      description:
        "A shared, real‑time picture for ops, service, and leadership so choices are clear and quick.",
      iconComponent: "Group5",
    },
    {
      id: 4,
      title: "Scale Without Friction",
      description:
        "Plug into what you already have, roll out in phases, expand across teams and locations smoothly.",
      iconComponent: "Component8Icon",
    },
  ],
};

/** Arrow icon component */
function ArrowIcon({ color = "white" }: { color?: string }) {
  return (
    <div className="relative size-[14px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 14 14"
        aria-hidden="true"
      >
        <path
          d={SVG_PATHS.arrowDown}
          stroke={`var(--stroke-0, ${color})`}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.35"
        />
      </svg>
    </div>
  );
}

/** CTA Button component */
function CTAButton({
  text,
  variant = "primary",
}: {
  text: string;
  variant?: "primary" | "secondary";
}) {
  const isPrimary = variant === "primary";

  return (
    <BookDemoButton
      className={`${isPrimary ? "bg-[#07af40] text-white" : "bg-white text-[#07af40]"} content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative shrink-0 w-full sm:w-[172px] cursor-pointer hover:opacity-90 transition-opacity`}
    // type="button"
    >
      <span className="font-semibold leading-[20px] not-italic relative shrink-0 text-[15px]">
        {text}
      </span>
      <div
        className="flex items-center justify-center relative shrink-0 size-[14px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "2196",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[-90deg]">
          <ArrowIcon color={isPrimary ? "white" : "#07AF40"} />
        </div>
      </div>
    </BookDemoButton>
  );
}


/** CTA Button component */
function CTAButtonRoute({
  text,
  variant = "primary",
  onClick,
}: {
  text: string;
  variant?: "primary" | "secondary";
  onClick: () => void;
}) {
  const isPrimary = variant === "primary";

  return (
    <button
      className={`${isPrimary ? "bg-[#07af40] text-white" : "bg-white text-[#07af40]"} content-stretch flex gap-[8px] items-center justify-center px-[14px] py-[10px] relative shrink-0 w-full sm:w-[172px] cursor-pointer hover:opacity-90 transition-opacity`}
      // type="button"
      onClick={onClick}
    >
      <span className="font-semibold leading-[20px] not-italic relative shrink-0 text-[15px]">
        {text}
      </span>
      <div
        className="flex items-center justify-center relative shrink-0 size-[14px]"
        style={
          {
            "--transform-inner-width": "0",
            "--transform-inner-height": "2196",
          } as React.CSSProperties
        }
      >
        <div className="flex-none rotate-[-90deg]">
          <ArrowIcon color={isPrimary ? "white" : "#07AF40"} />
        </div>
      </div>
    </button>
  );
}


/** CTA Buttons Row */
function CTAButtonsRow() {
  return (
    <div className="content-stretch flex flex-col sm:flex-row gap-[12px] sm:gap-[16px] items-stretch sm:items-start relative shrink-0 w-full sm:w-auto">
      <CTAButton text={OUTCOMES_DATA.hero.buttons[0].text} variant="primary" />
      <CTAButtonRoute
        text={OUTCOMES_DATA.hero.buttons[1].text}
        variant="secondary"
        onClick={() => {
          window.location.href = "/eagle";
        }}
      />
    </div>
  );
}

/** Hero section with title, description, and CTA buttons */
function HeroSection() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0 w-full max-w-[800px] px-4">
      <h2 className="font-semibold leading-[32px] sm:leading-[44px] not-italic relative shrink-0 text-[28px] sm:text-[36px] text-center text-white">
        {OUTCOMES_DATA.hero.title}
      </h2>
      <p className="font-medium leading-[21px] sm:leading-[23px] not-italic relative shrink-0 text-[#e4e4e4] text-[14px] sm:text-[16px] text-center w-full">
        {OUTCOMES_DATA.hero.description}
      </p>
      <CTAButtonsRow />
    </div>
  );
}

/** Card content component for card 1 */
function CardContent1() {
  const card = OUTCOMES_DATA.cards[0];
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 w-full">
      <p className="css-ew64yg  font-semibold leading-[24px] relative shrink-0 text-[#282828] text-[20px] text-center">
        {card.title}
      </p>
      <p className="css-4hzbpn  font-normal leading-[22px] relative shrink-0 text-[#777] text-[16px] text-center">
        {card.description}
      </p>
    </div>
  );
}

function Background() {
  return (
    <div
      className="h-[80px] sm:h-[100px] relative shrink-0 w-[73.17px] sm:w-[91.464px]"
      data-name="Background"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 91.4643 100"
      >
        <defs>
          <linearGradient
            id="iconGradient1"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="21.48%" stopColor="#4CCCFF" />
            <stop offset="76.42%" stopColor="#00FF84" />
          </linearGradient>
        </defs>
        <g id="Background">
          <path
            d="M42.5661 1.14192C40.9672 1.86486 38.0015 2.91497 35.9699 3.47432C33.9383 4.03368 30.7352 4.64052 28.846 4.83049C26.9569 5.02046 25.2999 5.35291 25.1522 5.56927C25.0044 5.7909 24.9147 10.9201 24.9464 16.9674C24.9939 25.8749 25.1839 28.5239 25.9279 30.8722C26.4398 32.4711 27.3896 34.8457 28.044 36.1491C28.7036 37.4525 30.5136 39.9115 32.0755 41.616C33.6375 43.3152 36.3973 45.6265 38.2126 46.761C40.0279 47.8903 42.5186 49.199 43.7534 49.6739C45.8589 50.476 46.128 50.4707 48.1069 49.5631C49.2678 49.0354 51.521 47.7953 53.1199 46.8032C54.7189 45.8164 56.9457 44.1436 58.0697 43.0883C59.1937 42.0276 61.0459 39.7374 62.1857 37.996C63.3203 36.2546 64.7503 33.289 65.3572 31.3999C66.3123 28.4501 66.4864 26.4606 66.6025 17.1521C66.6764 11.1998 66.6394 6.03891 66.5234 5.6748C66.4073 5.31069 65.4838 5.01519 64.4653 5.01519C63.4469 5.01519 60.7768 4.64052 58.5288 4.17615C56.2808 3.71706 52.6556 2.63529 50.4815 1.77515C48.3021 0.909732 46.2863 0.118192 45.9961 0.0126532C45.7058 -0.0876086 44.165 0.418977 42.5661 1.14192ZM14.9783 47.8639C14.5508 48.5341 10.9625 54.5973 7.01009 61.3465C3.05767 68.0957 -0.0979371 73.9108 0.00232466 74.2749C0.102586 74.6391 2.06033 76.0585 4.35579 77.4306C6.65126 78.8026 9.18419 79.9318 9.98101 79.9371C10.7778 79.9424 11.849 79.5097 12.3556 78.9767C12.8622 78.4437 13.5324 77.5519 13.8437 76.9978C14.3925 76.0216 14.4664 76.0322 16.2183 77.2617C17.2157 77.9582 18.7829 79.2669 19.7117 80.164C21.1048 81.5202 21.2948 81.974 20.8357 82.85C20.5349 83.4304 20.4293 84.5597 20.6088 85.3565C20.8233 86.3239 21.5498 87.1155 22.7881 87.7311C23.8699 88.2694 24.6403 89.0398 24.6351 89.5781C24.6298 90.0846 25.2155 91.0978 25.9437 91.8208C26.6667 92.549 27.7959 93.1505 28.4503 93.1611C29.1996 93.1716 30.0281 93.8049 30.6983 94.8761C31.5478 96.2323 32.16 96.5964 33.7325 96.7019C35.1098 96.7916 36.1863 97.314 37.2891 98.4169C38.1598 99.2876 39.3471 100 39.9276 100C40.5081 100 41.6373 99.4354 42.4342 98.7441L43.8853 97.4829C48.376 100.026 49.0409 100.174 50.2757 99.7362C51.0936 99.4459 52.0118 98.7283 52.3126 98.1425C52.6081 97.5568 53.273 97.1399 53.7796 97.2191C54.2861 97.2982 55.4312 96.6491 56.3283 95.7785C57.2201 94.9078 58.4074 94.1954 58.9668 94.1954C59.5209 94.1954 60.4549 93.6044 61.0353 92.8761C61.6158 92.1532 62.5076 91.5569 63.0142 91.5622C63.5208 91.5622 64.4706 91.2086 65.125 90.7706C65.7793 90.3327 66.4284 89.2614 66.5761 88.3907C66.752 87.3354 67.1478 86.8094 67.7634 86.8129C68.27 86.8129 69.2199 86.4594 69.8742 86.0214C70.7977 85.3987 71.0562 84.7286 71.0457 82.9819C71.0404 81.3091 71.3412 80.4595 72.233 79.6363C72.8979 79.0347 74.2488 77.9635 75.2461 77.2617C76.9981 76.0322 77.0719 76.0216 77.6207 76.9978C77.9321 77.5519 78.6023 78.4437 79.1088 78.9767C79.6154 79.5097 80.6866 79.9424 81.4835 79.9371C82.2803 79.9318 84.8132 78.8026 87.1087 77.4306C89.4041 76.0585 91.3619 74.6391 91.4621 74.2749C91.5624 73.9108 88.1799 67.7368 83.9478 60.5549C79.7157 53.373 76.0904 47.3204 75.9005 47.104C75.7052 46.8877 73.7686 47.8058 71.5892 49.1409C69.4151 50.476 67.0774 52.0802 66.402 52.6976C65.4996 53.526 65.22 54.2754 65.3466 55.5154C65.4996 57.0035 65.2938 57.3149 63.6738 58.0853C62.1066 58.8294 61.3889 58.8716 58.9246 58.365C57.3257 58.0325 54.5447 57.4837 52.7347 57.146C50.2757 56.6816 48.9459 56.6764 47.4578 57.1249C45.9803 57.5629 44.7877 57.5682 42.8299 57.1249C40.5556 56.613 39.611 56.6869 35.9699 57.6737C33.6481 58.3069 31.2154 58.8294 30.561 58.8294C29.9067 58.8346 28.6033 58.4652 27.6587 58.0062C26.1865 57.2938 25.9648 56.9402 26.1073 55.4996C26.197 54.5814 25.9596 53.4891 25.5796 53.0775C25.1997 52.6712 23.701 51.5841 22.2499 50.6712C20.7987 49.753 18.746 48.476 17.6853 47.8322L15.7592 46.6502L14.9783 47.8639Z"
            fill="#777777"
            id="Path 1"
            className="transition-all duration-300 ease-in-out"
          />
          <path
            clipRule="evenodd"
            d="M45.5996 1.89124C45.9637 1.87014 47.2091 2.32395 48.37 2.90441C49.5309 3.48488 52.2011 4.43472 54.3066 5.01519C56.412 5.59565 59.5571 6.24999 64.4646 6.86739L64.6071 16.3606C64.6968 22.2074 64.5121 26.9778 64.1322 28.7614C63.7892 30.3603 62.7391 33.2098 61.7892 35.0937C60.6758 37.3259 58.9028 39.6319 56.7287 41.7004C54.887 43.4471 51.8369 45.6476 49.9531 46.5921C48.0692 47.5367 46.0481 48.2966 45.4677 48.2808C44.8872 48.2649 42.9928 47.4892 41.262 46.5552C39.5259 45.6212 36.5972 43.4313 34.7502 41.6899C32.5392 39.6055 30.8031 37.3522 29.6738 35.0937C28.724 33.2098 27.6739 30.3603 27.3309 28.7614C26.9509 26.9778 26.7662 22.2074 26.9984 6.86739L29.9007 6.50856C31.4996 6.31331 34.3492 5.75396 36.2331 5.2632C38.1169 4.77245 40.8504 3.8226 42.3015 3.15243C43.7527 2.48226 45.2355 1.91763 45.5996 1.89124ZM16.6451 49.447C16.8245 49.5367 18.5131 50.4707 20.4023 51.5314C22.2861 52.592 24.017 53.8954 24.2386 54.4337C24.5394 55.1566 23.2623 57.7159 19.2624 64.3807C16.3021 69.3146 13.3312 74.3594 12.6557 75.5942C11.9803 76.829 10.9565 77.953 10.3761 78.1007C9.71646 78.2643 7.98035 77.5466 5.75876 76.1905C3.80102 74.9979 2.13878 73.9267 2.06491 73.8159C1.99103 73.705 4.33926 69.5204 7.27852 64.5126C10.2178 59.5048 13.4525 54.0326 14.471 52.3493C15.4894 50.6659 16.4657 49.3625 16.6451 49.447ZM74.9341 49.4945C75.1768 49.5525 78.5646 55.0089 82.4537 61.6103C86.3481 68.2117 89.472 73.705 89.3982 73.8159C89.3243 73.9267 87.6621 74.9979 85.7043 76.1905C83.7466 77.3883 81.7255 78.259 81.2189 78.1324C80.6859 78.0005 77.4459 73.0824 73.5674 66.5231C69.0714 58.9191 66.9712 54.8875 67.235 54.3598C67.4514 53.9271 69.177 52.6342 71.0608 51.4786C72.9447 50.3229 74.6913 49.4311 74.9341 49.4945ZM51.5362 58.6658C52.5546 58.8188 54.5704 59.2779 56.0216 59.6895C57.4727 60.0958 59.7312 60.423 61.0346 60.4072C62.338 60.3966 64.0056 60.0483 64.7285 59.6315C65.4567 59.2146 66.2271 58.8663 66.4435 58.861C66.6599 58.8505 68.95 62.3438 76.2322 74.4069L73.8207 76.2538C72.4961 77.2722 70.9764 78.3962 70.4434 78.7603C69.5938 79.3408 68.2535 78.5334 49.1615 64.7395L46.7869 65.5152C45.4835 65.9427 43.5838 66.9822 42.5654 67.8213C41.5469 68.6656 39.8266 69.5996 38.7396 69.9004C37.3729 70.2803 36.3122 70.2803 33.8584 69.3568L37.8161 65.3833C39.9955 63.1987 42.6023 61.0404 43.6208 60.5866C44.6392 60.138 46.4175 59.4573 47.5785 59.0774C48.7394 58.6974 50.5177 58.5127 51.5362 58.6658ZM25.046 58.861C25.2518 58.8663 26.0116 59.2146 26.7346 59.6315C27.4628 60.0483 29.125 60.3966 30.4284 60.4124C31.7318 60.423 33.9904 60.08 35.4415 59.642C36.8927 59.2093 39.1512 58.8557 40.4546 58.861C42.4651 58.8716 42.6656 58.9613 41.7738 59.4468C41.1934 59.7634 38.8768 61.8372 36.6235 64.0482C34.3756 66.2646 32.5339 68.4914 32.5339 68.998C32.5392 69.5046 33.1935 70.407 33.9904 70.9927C34.7872 71.5837 36.2119 72.0586 37.1565 72.0481C38.1011 72.0428 39.642 71.6418 40.5865 71.1668C41.5311 70.6919 42.9559 69.7421 43.7527 69.0561C44.5495 68.3701 46.0956 67.5891 47.1827 67.3147C48.8608 66.8978 49.4096 66.9981 50.7763 67.9743C51.6628 68.6128 56.2379 71.9795 60.9449 75.4623C67.0398 79.974 69.4988 82.0954 69.4988 82.85C69.4936 83.4304 69.2086 84.2009 68.8551 84.565C68.5015 84.9291 67.8419 85.2299 67.3933 85.2351C66.9448 85.2457 64.5596 83.8209 62.09 82.069C59.6204 80.3223 57.3091 78.8923 56.945 78.8923C56.5809 78.8923 56.2854 79.1878 56.2907 79.5519C56.2907 79.916 58.1904 81.5149 60.5069 83.1138C64.0372 85.5465 64.7179 86.2483 64.7232 87.4673C64.7285 88.3116 64.3433 89.1242 63.805 89.4092C63.1982 89.7364 62.47 89.6889 61.689 89.2773C61.0346 88.9343 58.8289 87.4673 56.7814 86.0161C54.3013 84.2536 52.8853 83.55 52.5335 83.9054C52.1747 84.2571 52.5071 84.8728 53.5308 85.7523C54.3752 86.4752 56.1693 87.8419 57.5202 88.7865C58.8711 89.7311 59.8948 90.797 59.7946 91.1611C59.689 91.5252 59.2721 92.0371 58.8711 92.301C58.3487 92.6387 56.9397 91.9421 54.0374 89.9263C50.8713 87.7153 49.7948 87.2087 49.2882 87.6889C48.7763 88.1691 49.3832 88.8446 52.0639 90.7759C53.9477 92.1374 55.4939 93.6413 55.4939 94.1162C55.4939 94.6281 55.0031 95.0397 54.3066 95.1188C53.6258 95.1927 51.7631 94.3484 49.9531 93.14C48.2117 91.9791 46.5495 91.1453 46.2592 91.2931C45.969 91.4355 45.7315 91.7944 45.7315 92.0846C45.7315 92.3748 46.9188 93.3247 48.37 94.1954C49.8212 95.0661 51.0085 96.1373 51.0085 96.57C51.0085 97.0027 50.5916 97.5779 50.085 97.8417C49.4465 98.1742 48.5547 98.0106 47.1827 97.314C45.4993 96.4539 45.2355 96.0898 45.4149 94.855C45.5363 94.0582 45.2988 92.7495 44.8872 91.9527C44.4809 91.1559 43.6735 90.3801 43.0931 90.2377C42.2962 90.0371 42.1116 89.6836 42.3437 88.7865C42.5179 88.1322 42.4018 87.0029 42.0957 86.28C41.7897 85.5518 40.882 84.6388 40.0747 84.2431C39.2673 83.8526 38.3122 83.6732 37.9481 83.8473C37.5734 84.032 37.2884 83.8315 37.2884 83.3777C37.2884 82.9449 36.6974 81.9898 35.9692 81.2669C35.146 80.4437 34.0537 79.9477 33.0669 79.9477C32.1962 79.9477 31.3677 80.1851 31.22 80.4753C31.0775 80.7656 30.2437 80.2907 29.373 79.42C28.5023 78.5493 27.257 77.8263 26.6026 77.821C25.9483 77.8105 24.761 78.2854 22.513 79.9477L15.2731 74.4069L19.9748 66.6234C22.5605 62.3438 24.8454 58.8505 25.046 58.861ZM26.4391 79.4358C26.7451 79.4411 27.4206 79.8579 27.9377 80.3593C28.4549 80.8553 28.8717 81.5624 28.8612 81.9265C28.8506 82.2906 28.133 83.4146 27.2623 84.433C26.2385 85.6309 25.2148 86.28 24.36 86.28C23.6317 86.28 22.8349 85.8684 22.5869 85.3565C22.3336 84.8499 22.2439 84.0742 22.3864 83.6415C22.5289 83.2088 23.3732 82.0795 24.265 81.135C25.1515 80.1904 26.133 79.4252 26.4391 79.4358ZM33.278 81.5307C33.7423 81.5307 34.4653 82.0637 34.8822 82.718C35.299 83.3724 35.489 84.2642 35.3096 84.6969C35.1355 85.1296 33.7846 86.8604 32.3123 88.5385C30.84 90.2218 29.22 91.5833 28.7134 91.5727C28.2068 91.5675 27.4417 91.0239 27.0195 90.3696C26.3388 89.3248 26.3441 89.024 27.0459 87.8631C27.4839 87.1348 28.877 85.4146 30.1382 84.0373C31.3994 82.66 32.8083 81.5307 33.278 81.5307ZM38.5813 85.8578C39.948 85.995 40.2119 86.2536 40.3174 87.5992C40.4177 88.8551 39.8689 89.8261 37.6789 92.2851C35.2463 95.0186 34.7397 95.351 33.4627 95.0555C32.3123 94.7917 32.0115 94.4223 32.0115 93.2719C32.0168 92.3326 32.8875 90.7443 34.4969 88.7601C36.6552 86.1006 37.1882 85.7206 38.5813 85.8578ZM41.2039 91.5569C41.3728 91.5569 41.9849 91.7944 42.5654 92.0846C43.1458 92.3748 43.626 93.1453 43.6313 93.7996C43.6366 94.4539 42.9875 95.6518 42.1802 96.4645C41.1986 97.4565 40.2857 97.8892 39.3992 97.7837C38.3913 97.6623 38.0483 97.2824 37.9481 96.1742C37.8583 95.1663 38.2858 94.2376 39.357 93.14C40.2066 92.2693 41.0403 91.5569 41.2039 91.5569Z"
            fill="white"
            fillRule="evenodd"
            id="Path 2"
            className="transition-all duration-300 ease-in-out"
          />
          <path
            d="M49.419 22.1495L42.3004 29.2786C38.6171 25.6164 37.1343 24.5505 36.6277 24.5452C36.1211 24.5452 35.5248 24.9093 35.3084 25.3579C35.0235 25.9489 35.8731 27.1362 38.3427 29.5847C40.2265 31.458 42.0101 32.9936 42.3004 32.9883C42.5906 32.9883 46.3478 29.4844 50.6538 25.1995C56.3845 19.4952 58.4267 17.1364 58.2948 16.3607C58.1945 15.7802 57.7618 15.242 57.3291 15.1628C56.8964 15.0837 53.3397 18.2234 49.419 22.1495Z"
            fill="#777777"
            id="Path 3"
            className="transition-all duration-300 ease-in-out"
          />
        </g>
      </svg>
      <style>{`
        .group:hover #Background path#Path\\ 1,
        .group:hover #Background path#Path\\ 3 {
          fill: url(#iconGradient1);
        }
      `}</style>
    </div>
  );
}

/** Reliability outcome card */
function ReliabilityCard() {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[30px] sm:gap-[46px] items-center p-[24px] sm:p-[36px] relative rounded-[12px] shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[310px] group cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-[#00B7FF] hover:to-[#0EB05C]"
      style={{ backgroundImage: "none" }}
    >
      <CardContent1 />
      <Background />
    </div>
  );
}

/** Card content component for card 2 */
function CardContent2() {
  const card = OUTCOMES_DATA.cards[1];
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 w-full">
      <p className="css-ew64yg  font-semibold leading-[24px] relative shrink-0 text-[#282828] text-[20px] text-center">
        {card.title}
      </p>
      <p className="css-4hzbpn  font-normal leading-[22px] relative shrink-0 text-[#777] text-[15px] text-center">
        {card.description}
      </p>
    </div>
  );
}

function Group4() {
  return (
    <div className="h-[80px] sm:h-[100px] relative shrink-0 w-[79.78px] sm:w-[99.729px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 99.7292 100"
      >
        <defs>
          <linearGradient
            id="iconGradient2"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="21.48%" stopColor="#4CCCFF" />
            <stop offset="76.42%" stopColor="#00FF84" />
          </linearGradient>
        </defs>
        <g id="Group 1171277053">
          <path
            d={svgPaths.p1ccdae80}
            fill="#777777"
            id="Path 1"
            className="transition-all duration-300 ease-in-out"
          />
          <path
            d={svgPaths.p880c00}
            fill="white"
            id="Path 2"
            className="transition-all duration-300 ease-in-out"
          />
          <path
            d={svgPaths.p2f52d600}
            fill="#777777"
            id="Path 3"
            className="transition-all duration-300 ease-in-out"
          />
          <path
            d={svgPaths.p363e5300}
            fill="white"
            id="Path 4"
            className="transition-all duration-300 ease-in-out"
          />
          <path
            d={svgPaths.p21559b00}
            fill="#777777"
            id="Path 5"
            className="transition-all duration-300 ease-in-out"
          />
          <path
            d={svgPaths.peea8500}
            fill="white"
            id="Path 6"
            className="transition-all duration-300 ease-in-out"
          />
        </g>
      </svg>
      <style>{`
        .group:hover #Group\\ 1171277053 path#Path\\ 1,
        .group:hover #Group\\ 1171277053 path#Path\\ 3,
        .group:hover #Group\\ 1171277053 path#Path\\ 5 {
          fill: url(#iconGradient2);
        }
      `}</style>
    </div>
  );
}

/** Resource optimization outcome card */
function ResourceCard() {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[30px] sm:gap-[46px] items-center p-[24px] sm:p-[36px] relative rounded-[12px] shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[310px] group cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-[#00B7FF] hover:to-[#0EB05C]"
      style={{ backgroundImage: "none" }}
    >
      <CardContent2 />
      <Group4 />
    </div>
  );
}

/** Card content component for card 3 */
function CardContent3() {
  const card = OUTCOMES_DATA.cards[2];
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 w-full">
      <p className="css-ew64yg  font-semibold leading-[24px] relative shrink-0 text-[#282828] text-[20px] text-center">
        {card.title}
      </p>
      <p className="css-4hzbpn  font-normal leading-[22px] relative shrink-0 text-[#777] text-[15px] text-center">
        {card.description}
      </p>
    </div>
  );
}

function Group5() {
  return (
    <div className="h-[80px] sm:h-[100px] relative shrink-0 w-[95.17px] sm:w-[118.958px]">
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 118.958 100"
      >
        <defs>
          <linearGradient
            id="iconGradient3"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="21.48%" stopColor="#4CCCFF" />
            <stop offset="76.42%" stopColor="#00FF84" />
          </linearGradient>
        </defs>
        <g id="Group 1171277054">
          <path
            d={svgPaths.p122fd300}
            fill="#777777"
            id="Path 1"
            className="transition-all duration-300 ease-in-out"
          />
          <path
            clipRule="evenodd"
            d={svgPaths.p162c7ab0}
            fill="white"
            fillRule="evenodd"
            id="Path 2"
            className="transition-all duration-300 ease-in-out"
          />
        </g>
      </svg>
      <style>{`
        .group:hover #Group\\ 1171277054 path#Path\\ 1 {
          fill: url(#iconGradient3);
        }
      `}</style>
    </div>
  );
}

/** Fast decisions outcome card */
function DecisionsCard() {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[30px] sm:gap-[46px] items-center p-[24px] sm:p-[36px] relative rounded-[12px] shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[310px] group cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-[#00B7FF] hover:to-[#0EB05C]"
      style={{ backgroundImage: "none" }}
    >
      <CardContent3 />
      <Group5 />
    </div>
  );
}

/** Card content component for card 4 */
function CardContent4() {
  const card = OUTCOMES_DATA.cards[3];
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center not-italic relative shrink-0 w-full">
      <p className="css-ew64yg  font-semibold leading-[24px] relative shrink-0 text-[#282828] text-[20px] text-center">
        {card.title}
      </p>
      <p className="css-4hzbpn  font-normal leading-[22px] relative shrink-0 text-[#777] text-[15px] text-center">
        {card.description}
      </p>
    </div>
  );
}

/** Scale outcome card */
function ScaleCard() {
  return (
    <div
      className="bg-white content-stretch flex flex-col gap-[30px] sm:gap-[46px] items-center p-[24px] sm:p-[36px] relative rounded-[12px] shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[310px] group cursor-pointer transition-all duration-300 ease-in-out hover:bg-gradient-to-br hover:from-[#00B7FF] hover:to-[#0EB05C]"
      style={{ backgroundImage: "none" }}
    >
      <CardContent4 />
      <div className="h-[80px] sm:h-[100px] relative shrink-0 w-[76px] sm:w-[95px]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 95 100"
        >
          <defs>
            <linearGradient
              id="iconGradient4"
              x1="100%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop offset="21.48%" stopColor="#4CCCFF" />
              <stop offset="76.42%" stopColor="#00FF84" />
            </linearGradient>
          </defs>
          <path
            d={svgPaths.p3b61d600}
            fill="#777777"
            id="Path 1"
            className="transition-all duration-300 ease-in-out"
          />
        </svg>
        <style>{`
          .group:hover path#Path\\ 1 {
            fill: url(#iconGradient4);
          }
        `}</style>
      </div>
    </div>
  );
}

/** Row of outcome cards */
function OutcomeCardsRow() {
  return (
    <div className="content-stretch flex flex-wrap gap-[24px] items-center justify-center relative shrink-0 w-full">
      <ReliabilityCard />
      <ResourceCard />
      <DecisionsCard />
      <ScaleCard />
    </div>
  );
}

/** Outcomes That Matter section */
export function OutcomesThatMatter() {
  return (
    <div style={{
      backgroundImage:
        "linear-gradient(219.604deg, rgb(0, 188, 239) 6.4454%, rgb(0, 35, 99) 95.133%)",
    }}>
      <section
        className="content-stretch flex flex-col gap-[40px] sm:gap-[50px] items-center overflow-clip px-[20px] sm:px-[40px] lg:px-[100px] py-[40px] sm:py-[60px] relative shrink-0 w-full max-w-[1567px] mx-auto"
        aria-label="Outcomes that matter"

      >
        <HeroSection />
        <OutcomeCardsRow />
      </section>
    </div>
  );
}
