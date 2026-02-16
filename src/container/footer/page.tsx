"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import FooterCard from "@/components/FooterCard";
import { getFooterCardConfig } from "@/components/FooterCard/footerCardConfig";
import { FooterLinks } from "@/constants/footer/footer";
import BookDemoButton from "@/components/BookDemoButton";
import { subscribeNewsletter } from "@/api/create";
import { toast } from "react-toastify";
import { allowOnlyLetters, preventLeadingSpace, preventSpaces } from "@/utills/form-validation";

interface NewsletterValues {
  name: string;
  email: string;
}

const newsletterSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .max(40, "Maximum 40 characters allowed")
    .matches(/^[A-Za-z\s]+$/, "Only letters are allowed"),
  email: Yup.string()
    .required("Email is required")
    .test("no-spaces", "Email cannot contain spaces", (value) => {
      if (!value) return true;
      return !/\s/.test(value);
    })
    .email("Invalid email format"),
});

const FooterSection = () => {
  const pathname = usePathname();
  const footerCardConfig = getFooterCardConfig(pathname);

  const handleSubscribe = async (
    values: NewsletterValues,
    { setSubmitting, resetForm }: FormikHelpers<NewsletterValues>
  ) => {
    try {
      const response = await subscribeNewsletter({
        name: values.name.trim(),
        email: values.email.trim(),
      });
      console.log(response, "0998898");

      if (response.detail.success) {
        toast.success("Subscribed successfully!");
        resetForm();
      } else {
        toast.error(response.detail.message || "Subscription failed. Please try again.");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

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
              <div className="bg-blue-800/30 border border-white/10 rounded-xl p-6 ">
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-white font-medium text-lg md:text-xl lg:text-[22px]">
                      Join Our Digital Twin Innovation Updates
                    </h3>
                  </div>
                  <Formik
                    initialValues={{ name: "", email: "" }}
                    validationSchema={newsletterSchema}
                    onSubmit={handleSubscribe}
                    validateOnChange={true}
                    validateOnBlur={true}
                  >
                    {({ errors, touched, isSubmitting }) => (
                      <Form className="flex flex-col sm:flex-row sm:items-start gap-3">
                        <div className="w-full sm:w-[40%]">
                          <Field
                            name="name"
                            type="text"
                            maxLength={30}
                            placeholder="Enter your name"
                            onKeyPress={allowOnlyLetters}
                            onKeyDown={preventLeadingSpace}
                            className={`w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-white/40 text-sm md:text-base outline-none focus:ring-2 focus:ring-[#4ACEFF] transition-all ${errors.name && touched.name
                              ? "border-red-400 focus:ring-red-400"
                              : "border-white/20 focus:border-[#4ACEFF]"
                              }`}
                          />
                          <div className="h-4 mt-0.5">
                            <ErrorMessage
                              name="name"
                              component="p"
                              className="text-red-400 text-xs"
                            />
                          </div>
                        </div>
                        <div className="w-full sm:w-[60%]">
                          <Field
                            name="email"
                            type="text"
                            placeholder="Enter your email address"
                            onKeyDown={preventSpaces}
                            className={`w-full px-4 py-3 rounded-lg bg-white/10 border text-white placeholder-white/40 text-sm md:text-base outline-none focus:ring-2 focus:ring-[#4ACEFF] transition-all ${errors.email && touched.email
                              ? "border-red-400 focus:ring-red-400"
                              : "border-white/20 focus:border-[#4ACEFF]"
                              }`}
                          />
                          <div className="h-4 mt-0.5">
                            <ErrorMessage
                              name="email"
                              component="p"
                              className="text-red-400 text-xs"
                            />
                          </div>
                        </div>
                        <div className="sm:shrink-0">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-gradient-to-r from-[#4ACEFF] to-[#13F495] text-[#222222] px-6 lg:px-8 py-3 h-[46px] w-[150px] rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                          >
                            {isSubmitting ? (
                              <svg
                                className="animate-spin h-5 w-5 text-[#222222]"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                            ) : (
                              <>
                                Subscribe
                                <span>→</span>
                              </>
                            )}
                          </button>
                          <div className="h-4 mt-0.5 hidden sm:block" />
                        </div>
                      </Form>
                    )}
                  </Formik>
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
