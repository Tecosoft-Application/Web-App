"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    { name: "Platform", href: "/" },
    { name: "Solutions", href: "/" },
    { name: "Industries", href: "/" },
    { name: "Company", href: "/" },
    { name: "Why TecoSoft", href: "/" },
  ];

  return (
    <header className={`${styles.header} fixed top-0 w-full z-50`}>
      <nav className="max-w-7xl mx-auto  flex items-center justify-between py-4">
        <Image
          src="/assets/tecosoft-logo.svg"
          alt="Logo"
          width={159}
          height={36}
        />

        {/* Hamburger / Close Button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            // Close Icon
            <svg width="32" height="32" fill="none">
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M6 6L26 26M26 6L6 26"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg width="32" height="32" fill="none">
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M6 10h20M6 16h20M6 22h20"
              />
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-lg text-[#ffffff] hover:text-blue-700"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/demo"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Book a Demo
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-40 pt-24 px-8 bg-white">
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-xl text-gray-800"
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/demo"
                className="bg-green-500 text-white px-4 py-2 rounded block text-center mt-6"
                onClick={() => setOpen(false)}
              >
                Book a Demo
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
