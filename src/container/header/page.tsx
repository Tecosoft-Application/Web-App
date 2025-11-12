// ***************************** Import packages ***********************************************
"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, ArrowDown } from "lucide-react";

// Z-index layer constants for consistent stacking
const Z_INDEX = {
  HEADER: 1000, // Main header layer
  MOBILE_MENU: 999, // Mobile menu behind header
  INTERACTIVE: 1001, // Logo and hamburger above all for interaction
  DROPDOWN: 1002, // Dropdown above header
};

interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { name: string; href: string }[];
}

interface MobileNavbarProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

// Mobile Navigation Component - Separated for better maintainability
const MobileNavbar: React.FC<MobileNavbarProps> = ({ isOpen, onClose, navItems }) => {
  const router = useRouter();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const handleNavigation = (href: string) => {
    if (href !== "#") {
      router.push(href);
      onClose();
    }
  };

  const toggleExpand = (itemName: string) => {
    setExpandedItem(expandedItem === itemName ? null : itemName);
  };

  return (
    <div
      className={`lg:hidden fixed inset-0 bg-[#1a4d8f] transition-transform duration-300 h-[550px] ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      style={{ zIndex: Z_INDEX.MOBILE_MENU }}
    >
      {/* Menu content */}
      <div className="pt-20 px-8 h-full overflow-y-auto">
        <ul className="flex flex-col gap-6">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.hasDropdown ? (
                <div>
                  <button
                    onClick={() => toggleExpand(item.name)}
                    className="text-xl font-medium block py-2 hover:text-[#0eb05c] transition-colors text-white w-full text-left flex items-center justify-between"
                  >
                    {item.name}
                    <ArrowDown
                      size={18}
                      className={`transition-transform ${
                        expandedItem === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {expandedItem === item.name && item.dropdownItems && (
                    <ul className="mt-2 ml-4 flex flex-col gap-3">
                      {item.dropdownItems.map((dropdownItem) => (
                        <li key={dropdownItem.name}>
                          <button
                            onClick={() => handleNavigation(dropdownItem.href)}
                            className="text-lg font-normal block py-1 hover:text-[#0eb05c] transition-colors text-white/90"
                          >
                            {dropdownItem.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <a
                  href={item.href}
                  className="text-xl font-medium block py-2 hover:text-[#0eb05c] transition-colors text-white"
                  onClick={onClose}
                >
                  {item.name}
                </a>
              )}
            </li>
          ))}
          <li className="mt-5 mb-3">
            <a
              href="#demo"
              className="bg-[#0eb05c] text-white px-6 py-3 rounded-lg hover:bg-[#0d9d52] transition-colors font-medium flex items-center justify-center gap-2"
              onClick={onClose}
            >
              Book a Demo
              <span>→</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  console.log(open, isScrolled);

  useEffect(() => {
    const isHomePage = pathname === "/";

    if (isHomePage) {
      const handleScroll = () => {
        const scrollThreshold = window.innerWidth < 500 ? 60 : 150; // sm screen (≤640px) → 90, others → 150
        setIsScrolled(window.scrollY > scrollThreshold);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Set initial state on mount

      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      // On other pages, the header is always in the "scrolled" state.
      setIsScrolled(true);
    }
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownClick = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  const handleDropdownItemClick = (href: string) => {
    router.push(href);
    setOpenDropdown(null);
  };

  const navItems = [
    {
      name: "Platform",
      href: "#",
      hasDropdown: true,
      dropdownItems: [
        { name: "Eagle", href: "/eagle" },
        { name: "Tecosoft Analytics", href: "/tecosoft-analytics" },
      ],
    },
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

  const navBg = isScrolled
    ? open
      ? ""
      : "bg-white shadow-md"
    : "bg-transparent";

  return (
    <>
      <header
        className={`fixed top-0 w-full ${navBg}`}
        style={{ zIndex: Z_INDEX.HEADER }}
      >
        <nav className="max-w-[90%] lg:max-w-7xl mx-auto flex items-center justify-between py-4 px-4 lg:px-0">
          {/* Logo - Changes based on menu state */}
          <div className="relative" style={{ zIndex: Z_INDEX.INTERACTIVE }}>
            <img
              src={open ? "./assets/tecosoft-logo.svg" : logoSrc}
              alt="Tecosoft Logo"
              className="h-8 lg:h-9 w-auto"
            />
          </div>

          {/* Desktop Menu - Hidden on Mobile */}
          <ul className="hidden lg:flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div ref={item.name === "Platform" ? dropdownRef : null}>
                    <button
                      onClick={() => handleDropdownClick(item.name)}
                      className={`text-[16px] font-semibold transition-colors flex items-center gap-1 ${navTextColor}`}
                    >
                      {item.name}
                      <ArrowDown
                        size={16}
                        className={`transition-transform ${
                          openDropdown === item.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openDropdown === item.name && item.dropdownItems && (
                      <div
                        className="absolute top-full mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[220px] border border-gray-100"
                        style={{ zIndex: Z_INDEX.DROPDOWN }}
                      >
                        {item.dropdownItems.map((dropdownItem) => (
                          <button
                            key={dropdownItem.name}
                            onClick={() => handleDropdownItemClick(dropdownItem.href)}
                            className="w-full text-left px-4 py-3 text-[15px] font-medium text-gray-700 hover:bg-[#0eb05c]/10 hover:text-[#0eb05c] transition-colors"
                          >
                            {dropdownItem.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`text-[16px] font-semibold transition-colors flex items-center gap-1 ${navTextColor}`}
                  >
                    {item.name}
                    <ArrowDown size={16} className={navTextColor} />
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Right Side: Hamburger (Mobile) / CTA Button (Desktop) */}
          <div
            className="flex items-center relative"
            style={{ zIndex: Z_INDEX.INTERACTIVE }}
          >
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
      </header>

      {/* Mobile Navigation - Separated component */}
      <MobileNavbar
        isOpen={open}
        onClose={() => setOpen(false)}
        navItems={navItems}
      />
    </>
  );
};

const HeaderSection = () => {
  return <Navbar />;
};

export default HeaderSection;
