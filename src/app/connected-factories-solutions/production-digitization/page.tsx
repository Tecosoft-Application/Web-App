// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import React from "react";
import ProductionDigitization from "./production-digitization";

export const metadata: Metadata = {
  title: "Tecosoft - Production Digitization",
  description: "Tecosoft Production Digitization Solution Page",
};

export default function page() {
  return (
    <>
      <ProductionDigitization />
    </>
  );
}
