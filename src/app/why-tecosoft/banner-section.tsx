"use client";

import React from "react";

/* =============================================================================
   CONSTANTS
============================================================================= */

const FEATURES = [
  { title: "Edge + Cloud", desc: "Hybrid by default" },
  { title: "Composable", desc: "Start small, scale wide" },
  { title: "Interoperable", desc: "Apps - APIs - Data" },
  { title: "Resilient", desc: "Low connectivity ready" },
];

const BULLETS = [
  "On-ground enablement & hands-on training",
  "Proven playbooks and best practices",
  "Continuous improvement with real support",
];

/* =============================================================================
   ICONS
============================================================================= */

function GradientDot() {
  return (
    <div className="h-[17px] w-[12px] shrink-0">
      <svg viewBox="0 0 12 17" className="size-full" fill="none">
        <circle cx="6" cy="11" r="6" fill="url(#dotGradient)" />
        <defs>
          <linearGradient id="dotGradient" x1="12" y1="5" x2="-2.35" y2="12.48">
            <stop offset="0.0644535" stopColor="#00BCEF" />
            <stop offset="0.95133" stopColor="#002363" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* =============================================================================
   SMALL UI PIECES
============================================================================= */

function BulletItem({ text }: { text: string }) {
  return (
    <div className="flex gap-[10px] items-start">
      <GradientDot />
      <p className="text-[16px] leading-[24px] text-[#4f4f4f] font-medium">
        {text}
      </p>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="bg-[#e0f6fa] rounded-[8px] p-[12px] w-full">
      <p className="text-[18px] font-semibold text-[#0098d4] leading-[22px]">
        {title}
      </p>
      <p className="text-[16px] text-[#777] leading-[20px]">{desc}</p>
    </div>
  );
}

/* =============================================================================
   LEFT CONTENT
============================================================================= */

function BannerContent() {
  return (
    <div className="flex flex-col gap-[36px] w-full">
      <h2 className="text-[36px] leading-[44px] font-semibold text-[#282828] max-w-[550px]">
        More Than a Vendor –{" "}
        <span className="text-[#07af40]">Your Digital Ops Partner</span>
      </h2>

      <p className="text-[16px] leading-[24px] text-[#8e8e8e]">
        Turn slow, manual processes into intelligent, self-improving workflows —
        spot issues sooner, maintain audit-ready trails, and let AI automate the
        heavy lifting across your operations.
      </p>

      <div className="flex flex-col gap-[14px]">
        {BULLETS.map((item) => (
          <BulletItem key={item} text={item} />
        ))}
      </div>
    </div>
  );
}

/* =============================================================================
   RIGHT PANEL (DESKTOP ONLY)
============================================================================= */

function FeaturePanel() {
  return (
    <div>
      <div className="relative  bg-[#007aaa] rounded-tl-[24px] rounded-tr-[24px]  max-w-[450px]">
        <div className="p-[12px]">
          <div className="bg-white rounded-tl-[15px] rounded-tr-[15px] p-[16px] flex flex-col gap-[16px]">
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} {...f} />
            ))}
          </div>
        </div>

        <div
          aria-hidden
          className="absolute inset-0 rounded-tl-[24px] rounded-tr-[24px] border border-[#ccf1ff]
          shadow-[-8px_8px_20px_rgba(0,0,0,0.08),8px_8px_20px_rgba(0,0,0,0.08)]"
        />
      </div>
    </div>
  );
}

/* =============================================================================
   MAIN BANNER
============================================================================= */

export function Banner() {
  return (
    <section className="bg-white w-full">
      <div
        className="
          relative mx-auto
          grid grid-cols-1 xl:grid-cols-[60fr_40fr]
          gap-[40px] xl:gap-[80px]
          items-start
          px-6 sm:px-10 md:px-16 xl:px-[100px]
          pt-[40px] xl:pt-[60px]
          max-w-[1576px]
        "
      >
        <BannerContent />

        <div className="relative">
          <FeaturePanel />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-[90px] bg-gradient-to-b from-transparent to-white pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
