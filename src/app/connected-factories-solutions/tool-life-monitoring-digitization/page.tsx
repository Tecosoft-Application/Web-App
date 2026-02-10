// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import React from "react";
import ProductionDigitization from "./tool-life-monitoring-digitization";

export const metadata: Metadata = {
  title: "Tecosoft  - Tool Life Monitoring Digitization",
  description: "Tecosoft Tool Life Monitoring Digitization Solution Page",
};

export default function page() {
  return (
    <>
      <ProductionDigitization />
    </>
  );
}
