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

export default Navbar;
