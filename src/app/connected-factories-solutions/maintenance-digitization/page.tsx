// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import React from "react";
import ProductionDigitization from "./maintenance-digitization";

export const metadata: Metadata = {
  title: "Tecosoft - Maintenance Digitization",
  description: "Tecosoft Maintenance Digitization Solution Page",
};

export default function page() {
  return (
    <>
      <ProductionDigitization />
    </>
  );
}
