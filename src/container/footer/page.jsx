import React from "react";

const FooterSection = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0c4a8a] via-[#1565b8] to-[#0d5aa7] overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-20 left-32 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-40 left-20 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-60 right-40 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-2 h-2 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-8 md:py-12 lg:py-16 relative z-10">
        {/* Hero CTA Section */}
        <div className="border border-white/20 rounded-2xl lg:rounded-3xl px-6 sm:px-8 md:px-10 lg:px-12 py-8 md:py-10 lg:py-12 mb-8 md:mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8">
            <div className="flex-1">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-2 text-white leading-tight">
                Next-Gen Industry is Here
              </h2>
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#13F495] leading-tight">
                Are You Ready to Lead?
              </p>
            </div>
            <div className="w-full md:w-auto">
              <button className="w-full md:w-auto bg-gradient-to-r from-[#4ACEFF] to-[#13F495] text-[#222222] px-6 lg:px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                Talk to an Expert
                <span>→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <div className="mb-6">
              <img
                src="./assets/tecosoft-logo.svg"
                alt="Tecosoft Logo"
                className="h-8 md:h-10 w-auto"
              />
            </div>
            <p className="text-white text-base md:text-lg lg:text-xl font-medium leading-relaxed">
              Your Webflow Partner for building high-performance, scalable
              Websites.
            </p>
          </div>

          <div className="lg:col-span-8">
            {/* Newsletter */}
            <div className="bg-blue-800/30 border border-white/10 rounded-xl p-6 md:p-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="text-white font-medium text-lg md:text-xl lg:text-[22px] flex-1">
                  Join Our Digital Twin Innovation Updates
                </div>
                <div className="w-full md:w-auto">
                  <button className="w-full md:w-auto bg-gradient-to-r from-[#4ACEFF] to-[#13F495] text-[#222222] px-6 lg:px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                    Subscribe
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 md:mb-12">
          <div className="lg:col-span-4">
            {/* Contact Info */}
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-bold mb-3 text-xl md:text-[22px]">
                  Connect with Us
                </h3>
              </div>
              <div>
                <h4 className="text-[#13F495] font-semibold mb-1 text-base md:text-lg">
                  Email
                </h4>
                <a
                  href="mailto:info@tecosoft.ai.com"
                  className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                >
                  info@tecosoft.ai.com
                </a>
              </div>
              <div>
                <h4 className="text-[#13F495] font-semibold mb-1 text-base md:text-lg">
                  Phone
                </h4>
                <a
                  href="tel:+919876543210"
                  className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                >
                  +91 9876543210
                </a>
              </div>
              <div>
                <h4 className="text-[#13F495] font-semibold mb-1 text-base md:text-lg">
                  Address
                </h4>
                <p className="text-[#4ACEFF] text-sm md:text-base leading-relaxed">
                  1158 rue De La Souveraine Québec,
                  <br />
                  QC, G2L 2L9 Canada
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {/* Navigate */}
              <div>
                <h3 className="text-white font-bold mb-4 text-xl md:text-[22px]">
                  Navigate
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href="#platform"
                      className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                    >
                      Platform
                    </a>
                  </li>
                  <li>
                    <a
                      href="#solutions"
                      className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                    >
                      Solutions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#industries"
                      className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                    >
                      Industries
                    </a>
                  </li>
                  <li>
                    <a
                      href="#company"
                      className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                    >
                      Company
                    </a>
                  </li>
                  <li>
                    <a
                      href="#why-tecosoft"
                      className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                    >
                      Why Tecosoft?
                    </a>
                  </li>
                  <li>
                    <a
                      href="#resources"
                      className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                    >
                      Resources
                    </a>
                  </li>
                </ul>
              </div>

              {/* Industries */}
              <div>
                <h3 className="text-white font-bold mb-4 text-xl md:text-[22px]">
                  Industries
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href="#manufacturing"
                      className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                    >
                      Manufacturing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#energy"
                      className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                    >
                      Energy & Utilities
                    </a>
                  </li>
                  <li>
                    <a
                      href="#oil-gas"
                      className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                    >
                      Oil & Gas
                    </a>
                  </li>
                  <li>
                    <a
                      href="#healthcare"
                      className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                    >
                      Healthcare
                    </a>
                  </li>
                  <li>
                    <a
                      href="#logistics"
                      className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                    >
                      Logistics & Warehousing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#smart-city"
                      className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                    >
                      Smart City
                    </a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div>
                <h3 className="text-white font-bold mb-4 text-xl md:text-[22px]">
                  Legal
                </h3>
                <ul className="space-y-2.5">
                  <li>
                    <a
                      href="#terms"
                      className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                    >
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a
                      href="#privacy"
                      className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-1 border-[#FFFFFF] pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm md:text-base text-[#4ACEFF]">
            <p className="text-center sm:text-left">
              Copyright © 2025 Tecosoft®. All Rights Reserved.
            </p>
            <p className="text-center sm:text-right">
              Made with{" "}
              <span className="text-[#13F495] font-semibold">LOVE</span> by{" "}
              <a
                href="https://www.applogiq.org"
                className="hover:text-white transition-colors underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.applogiq.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
