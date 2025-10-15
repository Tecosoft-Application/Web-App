import Image from "next/image";
import React from "react";
import Link from "next/link";
import FooterCss from "./footer.module.css";
import { FooterContent } from "@/constants/footer/footer";

export const FooterSection = () => {
  return (
    <footer className={`${FooterCss.footerBackground}`}>
      {/* Hero Section */}
      <div className="container mx-auto px-[100px] py-[50px]">
        <div className="border border-white/20 rounded-3xl px-[60px] py-[80px] md:p-12 mb-12">
          <div className="flex flex-col  md:flex-row justify-between items-center">
            <div>
              <h2 className="text-[40px] md:text-[45px] lg:text-[50px] font-medium mb-2 text-[#ffffff]">
                {FooterContent.title1}
              </h2>
              <p className="text-[40px] md:text-[45px] lg:text-[50px]  font-semibold mb-4 text-green-400">
                {FooterContent.title2}
              </p>
            </div>
            <div>
              <Link
                href="#"
                className={`text-[#222222] px-8 py-3 rounded-lg font-semibold  transition-colors flex items-center gap-2 whitespace-nowrap ${FooterCss.buttonTalk}`}
              >
                Talk to an Expert
                <span>
                  <Image
                    src={FooterContent.arrowIcon}
                    alt="arrow"
                    width={20}
                    height={20}
                  />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12"> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="">
                <Image
                  src={"./assets/tecosoft-logo.svg"}
                  alt="Logo"
                  width={220}
                  height={41}
                />
              </div>
            </div>
            <p className="text-[#ffffff] text-[20px] font-medium pt-[42px]">
              Your Webflow Partner for building high-performance, scalable
              Websites.
            </p>
          </div>

          <div className="col-span-8">
            {/* Newsletter */}
            <div className="bg-blue-800/30 border border-white/10 rounded-xl p-4 mb-6  ">
              <div className="flex justify-between items-center">
                {/* <input
                  type="email"
                  placeholder="Join Our Digital Twin Innovation Updates"
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder-blue-300"
                /> */}

                <div className="px-[36px] py-[56px] text-[#ffffff] font-medium text-[22px]">
                  Join Our Digital Twin Innovation Updates
                </div>

                <div className="px-[36px]">
                  <button
                    className={`text-[#222222] px-8 py-3 rounded-lg font-semibold  transition-colors flex items-center gap-2 whitespace-nowrap ${FooterCss.buttonTalk}`}
                  >
                    {" "}
                    Subscribe
                    <span>
                      <Image
                        src={FooterContent.arrowIcon}
                        alt="arrow"
                        width={20}
                        height={20}
                      />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          <div className="col-span-4">
            {/* Contact Info */}
            <div className="space-y-3">
              <div>
                <h3 className="text-green-400 font-semibold mb-1">
                  Contact Us
                </h3>
              </div>
              <div>
                <h3 className="text-green-400 font-semibold mb-1">Email</h3>
                <a
                  href="mailto:info@tecosoft.ai.com"
                  className="text-blue-200 hover:text-white"
                >
                  info@tecosoft.ai.com
                </a>
              </div>
              <div>
                <h3 className="text-green-400 font-semibold mb-1">Phone</h3>
                <a
                  href="tel:+919876543210"
                  className="text-blue-200 hover:text-white"
                >
                  +91 9876543210
                </a>
              </div>
              <div>
                <h3 className="text-green-400 font-semibold mb-1">Address</h3>
                <p className="text-blue-200">
                  1158 rue De La Souveraine Québec,
                  <br />
                  QC, G2L 2L9 Canada
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-8">
            <div className="grid grid-cols-3 gap-8">
              {/* Navigate */}
              <div className="">
                <h3 className="text-xl font-bold mb-4">Navigate</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/platform"
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      Platform
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/solutions"
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      Solutions
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries"
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      Industries
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/company"
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      Company
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/why-tecosoft"
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      Why Tecosoft?
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/resources"
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      Resources
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Industries */}
              <div className="">
                <h3 className="text-xl font-bold mb-4">Industries</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/industries/manufacturing"
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      Manufacturing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/energy-utilities"
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      Energy & Utilities
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/oil-gas"
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      Oil & Gas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/healthcare"
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      Healthcare
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/logistics-warehousing"
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      Logistics & Warehousing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/industries/smart-city"
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      Smart City
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div className="">
                <h3 className="text-xl font-bold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      href="/terms"
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="text-blue-200 hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-blue-200">
            <p>Copyright © 2025 Tecosoft®. All Rights Reserved.</p>
            <p>
              Made with <span className="text-pink-400">LOVE</span> by{" "}
              <a
                href="https://www.applogia.org"
                className="hover:text-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.applogia.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
