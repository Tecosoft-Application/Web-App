// ***************************** Import packages ***********************************************
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Platform", href: "#" },
    { name: "Solutions", href: "#" },
    { name: "Industries", href: "#" },
    { name: "Company", href: "#" },
    { name: "Why TecoSoft", href: "#" },
  ];

  const logoSrc = isScrolled
    ? "./assets/tecosoft-black.svg"
    : "./assets/tecosoft-logo.svg";

  const navTextColor = isScrolled
    ? "text-black/90 hover:text-black"
    : "text-white/90 hover:text-white";

  const hamburgerColor = isScrolled
    ? "text-black hover:bg-black/10"
    : "text-white hover:bg-white/10";

  const navBg = isScrolled ? "bg-white shadow-md" : "bg-transparent";

  return (
    <header className={`fixed top-0 w-full z-50 ${navBg}`}>
      <nav className="max-w-[90%] lg:max-w-7xl mx-auto flex items-center justify-between py-4 px-4 lg:px-0">
        {/* Logo - Changes based on menu state */}
        <div className="relative z-50">
          <img
            src={open ? "./assets/tecosoft-logo.svg" : logoSrc}
            alt="Tecosoft Logo"
            className="h-8 lg:h-9 w-auto"
          />
        </div>

        {/* Desktop Menu - Hidden on Mobile */}
        <ul className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`text-[16px] font-semibold transition-colors flex items-center gap-1 ${navTextColor}`}
              >
                {item.name}
                <ArrowDown size={16} className={navTextColor} />
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side: Hamburger (Mobile) / CTA Button (Desktop) */}
        <div className="flex items-center relative z-50">
          {/* Hamburger Button - Mobile Only with conditional color */}
          <button
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              open ? "text-white hover:bg-white/10" : hamburgerColor
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* CTA Button - Desktop Only */}
          <a
            href="#demo"
            className="hidden lg:flex bg-[#0eb05c] text-white px-6 py-2 rounded-lg hover:bg-[#0d9d52] transition-colors font-semibold items-center gap-2"
          >
            Book a Demo
            <span>→</span>
          </a>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#1a4d8f] transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ zIndex: 25 }}
      >
        {/* Menu content */}
        <div className="pt-20 px-8 h-full overflow-y-auto">
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-xl font-medium block py-2 hover:text-[#0eb05c] transition-colors text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li className="mt-5 mb-3">
              <a
                href="#demo"
                className="bg-[#0eb05c] text-white px-6 py-3 rounded-lg hover:bg-[#0d9d52] transition-colors font-medium flex items-center justify-center gap-2"
                onClick={() => setOpen(false)}
              >
                Book a Demo
                <span>→</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

const ClientSlider = () => {
  const clients = [
    { name: "MORFO", logo: "./assets/images/banner-morfo.svg" },
    { name: "flomodai", logo: "./assets/images/banner-flomodai.svg" },
    { name: "Qileo", logo: "./assets/images/banner-qileo.svg" },
    { name: "ramify", logo: "./assets/images/banner-ramify.svg" },
    { name: "WEGLOT", logo: "./assets/images/banner-weglot.svg" },
  ];

  return (
    <div className="relative overflow-hidden pt-8 lg:pt-10 ">
      <div className="flex animate-scroll gap-12 lg:gap-16">
        {/* Duplicate for seamless loop */}
        {[...clients, ...clients].map((client, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center min-w-[140px] lg:min-w-[180px]"
          >
            <img
              src={client.logo}
              alt={`${client.name} logo`}
              className="h-7 lg:h-9 w-auto opacity-80 hover:opacity-100 transition-opacity filter brightness-0 invert"
            />
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

const HeaderSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="./assets/video/banner-video.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          background:
            'url("/assets/images/banner-black-cover.svg") no-repeat center center',
          backgroundSize: "cover",
        }}
      />

      {/* Content */}
      <div className="relative z-100">
        <Navbar />
        <div className="max-w-[90%] lg:max-w-7xl mx-auto px-4 lg:px-0">
          <div className="pt-30 pb-15 lg:pt-48 lg:pb-24">
            {/* Hero Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[90px] font-bold text-white leading-tight lg:leading-[1.1] mb-6">
              Building Intelligent Ecosystems for the{" "}
              <span className="text-[#0eb05c] block lg:inline">
                Next-Gen Industries
              </span>
            </h1>

            <div className="relative flex flex-col lg:flex-row lg:items-center mb-4">
              <p className="text-base sm:text-lg lg:text-[22px] font-medium text-white/90 max-w-3xl leading-relaxed mb-6 lg:mb-0">
                With the power of IIoT, AI, and Digital Twins, Tecosoft
                transforms operations <br className="lg:hidden" />
                across industries into intelligent connected ecosystems.
              </p>

              {/* Horizontal Line - Desktop Only (Absolute) */}
              <img
                src="/assets/icons/h-line.svg"
                alt=""
                className="hidden lg:block absolute left-[50%] right-0 bottom-3 -translate-y-1/2 h-auto w-[460px] max-w-full"
              />

              {/* Book a Demo Link - Desktop */}
              <a
                href="#demo"
                className="hidden lg:flex items-center gap-2 text-white font-medium text-lg whitespace-nowrap hover:text-[#0eb05c] transition-colors cursor-pointer ml-auto pt-13 "
              >
                Book a Demo
                <span className="text-xl">→</span>
              </a>
            </div>
            {/* Book a Demo Button - Mobile */}
            <div className="lg:hidden mb-12">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 bg-[#0eb05c] text-white px-8 py-3 rounded-lg hover:bg-[#0d9d52] transition-colors font-medium text-lg"
              >
                Book a Demo
                <span>→</span>
              </a>
            </div>

            {/* Client Logos Slider */}
            <ClientSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
