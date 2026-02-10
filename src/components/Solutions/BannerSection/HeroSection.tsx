
"use client";
import React from "react";
import Image from "next/image";

// Types
interface HeroContentProps {
  title: string;
  highlight: string;
  description: string;
  video?: string;
  image: string;
  imageAlt: string;
  imagepath: string;
}

// Constants
const BRAND_COLOR = "#00ff84";
const GRADIENT_OVERLAY =
  "linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%), linear-gradient(205.185deg, rgba(6, 86, 217, 0.3) 0%, rgba(55, 188, 255, 0.3) 100%)";

// Sub-components
interface BackgroundVideoProps {
  videoPath: string;
}

function BackgroundVideo({ videoPath }: BackgroundVideoProps) {
  return (
    <video
      autoPlay
      className="absolute inset-0 w-full h-full object-cover"
      controlsList="nodownload"
      loop
      muted
      playsInline
      aria-label="Production digitization background video"
    >
      <source src={videoPath} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

interface BackgroundImageProps {
  imagePath: string ;
  imageAlt: string;
}

function BackgroundImage({ imagePath, imageAlt }: BackgroundImageProps) {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Image
        alt={imageAlt}
        className="w-full h-full object-cover"
        src={imagePath}
        fill
        sizes="100vw"
        priority
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

function GradientOverlay() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <div className="w-full h-full rotate-180 scale-y-[-100%]">
        <div
          className="w-full h-full"
          style={{ backgroundImage: GRADIENT_OVERLAY }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

interface TextContentProps {
  title: string;
  highlight: string;
  description: string;
}

function TextContent({ title, highlight, description }: TextContentProps) {
  return (
    <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 text-white text-center w-full max-w-[900px]">
      <h1 className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[64px] leading-tight">
        <div>
          {title}

          <span
            className="text-[var(--brand-color)] ml-2"
            style={{ "--brand-color": BRAND_COLOR } as React.CSSProperties}
          >
            {highlight}
          </span>
        </div>
      </h1>
      <p className="font-normal text-sm sm:text-base md:text-lg lg:text-[19px] leading-relaxed opacity-90 max-w-[800px] mx-auto px-4">
        {description}
      </p>
    </div>
  );
}

interface HeroContentComponentProps extends HeroContentProps {}

function HeroContent({
  title,
  highlight,
  description,
  image,
  imageAlt,
  imagepath,
}: HeroContentComponentProps) {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
      <TextContent
        title={title}
        highlight={highlight}
        description={description}
      />
    </div>
  );
}

// Main component
interface HeroSectionProps {
  content?: HeroContentProps;
}

export function HeroSection({ content }: HeroSectionProps) {
  if (!content) {
    return null;
  }

  return (
    <section
      className="relative w-full h-[450px] sm:h-[500px] md:h-[550px] lg:h-[600px] overflow-hidden"
      data-name="Hero section"
      aria-label="Production Digitization Hero Section"
    >
      {content?.video ? (
        <BackgroundVideo videoPath={content.video} />
      ) : (
        <BackgroundImage
          imagePath={content.imagepath}
          imageAlt={content.imageAlt}
        />
      )}
      <GradientOverlay />
      <HeroContent {...content} />
    </section>
  );
}
