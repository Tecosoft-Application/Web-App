// ***************************** Import packages ***********************************************
"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, ArrowDown } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 250);
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
        {/* Logo */}
        <img src={logoSrc} alt="Tecosoft Logo" className="h-8 lg:h-10 w-auto" />

        {/* Hamburger Button - Mobile */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${hamburgerColor}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className={`text-base font-medium transition-colors flex items-center gap-1 ${navTextColor}`}
              >
                {item.name}
                <ArrowDown size={16} className={` ${navTextColor}`} />
              </a>
            </li>
          ))}
          <li className="ml-20">
            <a
              href="#demo"
              className="bg-[#0eb05c] text-white px-6 py-2.5 rounded-lg hover:bg-[#0d9d52] transition-colors font-medium flex items-center gap-2"
            >
              Book a Demo
              <span>→</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-[#1a4d8f] z-40 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="absolute top-6 left-6">
          <img
            src={logoSrc}
            alt="Tecosoft Logo"
            className="h-8 lg:h-10 w-auto"
          />
        </div>

        {/* Close Button in Mobile Menu */}
        <div className="absolute top-6 right-6">
          <button
            onClick={() => setOpen(false)}
            className={`p-2 rounded-lg transition-colors ${hamburgerColor}`}
            aria-label="Close menu"
          >
            <X size={32} />
          </button>
        </div>

        <div className="pt-24 px-8 bg-[#1a4d8f]">
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
    <div className="relative overflow-hidden pb-12">
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

            {/* Subheading */}
            <p className="text-base sm:text-lg lg:text-[22px] font-medium text-white/90 max-w-3xl mb-8 leading-relaxed">
              With IIoT, AI, and Digital Twins, Tecosoft transforms operations
              across industries into intelligent connected ecosystems.
            </p>

            {/* CTA Button - Mobile */}
            <div className="lg:hidden mb-12">
              <a
                href="#demo"
                className="inline-flex items-center gap-2 bg-[#0eb05c] text-white px-8 py-3 rounded-lg hover:bg-[#0d9d52] transition-colors font-medium text-lg"
              >
                Book a Demo
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Client Logos Slider */}
          <ClientSlider />
        </div>
      </div>
    </section>
  );
};

export default HeaderSection;
