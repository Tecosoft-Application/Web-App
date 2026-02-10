"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface ProductCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  delay?: number;
  route?: string;
  gifPath?: string;
  videoPath?: string;
  onHoverChange?: (isHovered: boolean) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  gifPath,
  videoPath,
  title,
  subtitle,
  description,
  delay = 0,
  route,
  onHoverChange,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    // Disable click event for screen sizes below 1024px
    if (window.innerWidth < 1024) {
      return;
    }
    setIsHovered(true);
    onHoverChange?.(true);
  };

  const handleMouseLeave = () => {
    // Disable click event for screen sizes below 1024px
    if (window.innerWidth < 1024) {
      return;
    }
    setIsHovered(false);
    onHoverChange?.(false);
  };

  return (
    <div
      className="flex flex-col items-center justify-between p-6 md:p-8 lg:p-10 relative flex-1 rounded-xl transition-all duration-500 group "
      style={{
        position: "relative",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        // transform: isHovered ? "translateY(-10px)" : "translateY(0)",
        boxShadow: isHovered
          ? "0 20px 40px rgba(54,212,255,0.3)"
          : "0 4px 15px rgba(0,0,0,0.2)",
      }}
    >
      {/* Gradient Border using pseudo-element */}
      <div
        style={{
          content: '""',
          position: "absolute",
          inset: 0,
          borderRadius: "10px",
          padding: "1.5px",
          background: isHovered
            ? "linear-gradient(90deg, #3198DF 0%, #36D4FF 49%, #00FF84 100%)"
            : "linear-gradient(90deg, rgba(49,152,223,0.5) 0%, rgba(54,212,255,0.5) 49%, rgba(0,255,132,0.5) 100%)",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
          WebkitMaskComposite: "destination-out",
          pointerEvents: "none",
        }}
      />

      {/* Product Image */}
      <div
        className="w-full h-40 md:h-48 lg:h-48 flex items-center justify-center mb-6 md:mb-8 relative overflow-visible cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {isHovered && videoPath ? (
          <div className="w-full max-w-[400px] h-48 rounded-[10px] flex items-center justify-center">
            <video
              src={videoPath}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-contain transition-transform duration-500 rounded-[10px]"
              style={{
                transform: isHovered ? "scale(1.3)" : "scale(1)",
              }}
            />
          </div>
        ) : (
          <div className="w-full max-w-[400px] h-48 rounded-[10px] flex items-center justify-center">
            <Image
              src={isHovered && gifPath ? gifPath : image}
              alt={title}
              width={400}
              height={192}
              className="w-full h-full object-contain transition-transform duration-500 rounded-[10px]"
              style={{
                transform: isHovered ? "scale(1.3)" : "scale(1)",
              }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col items-center gap-4 md:gap-6 w-full">
        {/* Title and Subtitle */}
        <div className="flex flex-col items-center gap-0.5 md:gap-1">
          <h3 className="text-white text-2xl md:text-3xl lg:text-[34px] font-semibold tracking-tight text-center">
            {title}
          </h3>
          <p className="text-[#00b7ff] text-lg md:text-xl lg:text-[22px] font-medium text-center">
            {subtitle}
          </p>
        </div>

        {/* Description */}
        <p
          className="text-white/75 text-sm md:text-base lg:text-lg font-medium text-center leading-relaxed transition-all duration-700"
          style={{
            transitionDelay: `${delay + 300}ms`,
            textShadow: isHovered ? "0 2px 10px rgba(0,0,0,0.8)" : "none",
          }}
        >
          {description}
        </p>

        {/* Explore Link */}
        <button
          className="inline-flex items-center gap-2 transition-all duration-300 cursor-pointer"
          style={{
            transform: isHovered ? "translateX(5px)" : "translateX(0)",
          }}
          onClick={() => {
            // Handle navigation to product route
            if (route) {
              window.location.href = route;
            }
          }}
        >
          <span className="text-lg md:text-xl lg:text-[22px] font-semibold bg-gradient-to-r from-[#36d4ff] via-[#36d4ff] to-[#00ff84] bg-clip-text text-transparent">
            Explore
          </span>
          <ArrowRight
            className="text-[#36d4ff]"
            size={20}
            style={{
              transform: isHovered ? "translateX(5px)" : "translateX(0)",
              transition: "transform 0.3s ease",
            }}
          />
        </button>
      </div>
    </div>
  );
};

const Products = ({ products, hoveredProduct, setHoveredProduct }: any) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a0e27] py-12 md:py-16 lg:py-20">
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes overlayFadeIn {
          from {
            backdrop-filter: blur(0px);
          }
          to {
            backdrop-filter: blur(12px);
          }
        }

        @keyframes scaleIn {
          from {
            transform: scale(0.85) translateY(20px);
          }
          to {
            transform: scale(1) translateY(0);
          }
        }

        @keyframes borderGlow {
          from {
            filter: brightness(0.5);
          }
          to {
            filter: brightness(1.2);
          }
        }

        @keyframes imageReveal {
          from {
            filter: brightness(0.7) contrast(0.8);
          }
          to {
            filter: brightness(1) contrast(1);
          }
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={"/assets/images/platform-bg.png"}
          alt="Background"
          fill
          className="object-cover opacity-80"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#3b83f129] backdrop-blur-2xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 md:gap-6 mb-10 md:mb-12 lg:mb-16">
          <div className="flex flex-col items-center gap-1 md:gap-1.5">
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-medium text-center leading-tight">
              Our Platforms
            </h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-semibold text-center leading-tight bg-gradient-to-r from-[#00b7ff] to-[#0eb05c] bg-clip-text text-transparent">
              From Edge to Insights
            </h3>
          </div>

          <p className="text-white/75 text-base md:text-lg font-normal text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-4xl leading-relaxed px-4">
            Whether it's a factory, utility, or city — our platforms turn data
            into intelligence and intelligence into impact.
          </p>
        </div>

        {/* Product Cards Section - Relative container for overlay */}
        <div className="relative">
          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 max-w-7xl mx-auto">
            {products.map((product: any) => (
              <ProductCard
                key={product.title}
                image={product.image}
                title={product.title}
                subtitle={product.subtitle}
                description={product.description}
                delay={product.delay}
                route={product.route}
                gifPath={product.gifPath}
                videoPath={product.videoPath}
                onHoverChange={(isHovered: any) => {
                  setHoveredProduct(isHovered ? product.title : null);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
