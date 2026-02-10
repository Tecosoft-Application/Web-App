"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import FooterCard from "@/components/FooterCard";
import { getFooterCardConfig } from "@/components/FooterCard/footerCardConfig";
import { FooterLinks } from "@/constants/footer/footer";
import BookDemoButton from "@/components/BookDemoButton";

const FooterSection = () => {
  const pathname = usePathname();
  const footerCardConfig = getFooterCardConfig(pathname);

  return (
    <>
      <footer className="relative bg-gradient-to-br from-[#0c4a8a] via-[#1565b8] to-[#0d5aa7] overflow-hidden  pt-3">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-24 py-4 md:py-5 lg:py-6 pt-2 relative z-10">
          {/* Hero CTA Section */}
          <FooterCard {...footerCardConfig} />
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 md:mb-12">
            {/* Company Info */}
            <div className="lg:col-span-4">
              <div className="mb-6">
                <Image
                  src="/assets/tecosoft-logo.svg"
                  alt="Tecosoft Logo"
                  width={150}
                  height={40}
                  className="h-8 md:h-10 w-auto"
                />
              </div>
              <p className="text-white text-base md:text-lg lg:text-xl font-medium leading-relaxed">
                Your Trusted Partner in Industry-Ready Digital Transformation.
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
                    <BookDemoButton className="w-full md:w-auto bg-gradient-to-r from-[#4ACEFF] to-[#13F495] text-[#222222] px-6 lg:px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer">
                      Subscribe
                      <span>→</span>
                    </BookDemoButton>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 md:mb-12 max-sm:text-center">
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
                    href="mailto:sales@tecosoft.ai"
                    className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                  >
                    sales@tecosoft.ai
                  </a>
                </div>
                <div>
                  <h4 className="text-[#13F495] font-semibold mb-1 text-base md:text-lg">
                    Phone
                  </h4>
                  <a
                    href="tel:+919591054135"
                    className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                  >
                    +91 9591054135
                  </a>
                </div>
                <div>
                  <h4 className="text-[#13F495] font-semibold mb-1 text-base md:text-lg">
                    Address
                  </h4>
                  <p className="text-[#4ACEFF] text-sm md:text-base leading-relaxed">
                    <span className="text-white font-bold">USA</span> <br />
                    Tecosoft Digital Solutions INC
                    <br />
                    800 N King Street Suite 304 3432 Wilmington,
                    <br /> DE 19801 United States
                    <br />
                    <span className="text-white font-bold">INDIA</span>
                    <br />
                    Tecosoft Digital Solutions Pvt Ltd
                    <br />
                    #119, 2nd Floor, 1st cross, <br />
                    Gangodnahalli Main Road, Chandra Layout,
                    <br /> Bengaluru, Karnataka 560040
                    {/* 1158 rue De La Souveraine Québec,
                  <br />
                  QC, G2L 2L9 Canada */}
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols- gap-8">
                {Object.values(FooterLinks).map((section, index) => (
                  <div key={index}>
                    <h3 className="text-white font-bold mb-4 text-xl md:text-[22px]">
                      {section.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {section.links.map((link, linkIndex) => (
                        <li key={linkIndex}>
                          {link.name === "Book a Demo" ? (
                            <BookDemoButton className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base">
                              {link.name}
                            </BookDemoButton>
                          ) : (
                            <a
                              href={link.href}
                              className="text-[#4ACEFF] hover:text-white transition-colors text-sm md:text-base"
                            >
                              {link.name}
                            </a>
                          )}
                        </li>

                      ))}
                    </ul>
                  </div>
                ))}
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
    </>
  );
};

export default FooterSection;
