// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import React from "react";
import InspectionDigitizationHomePage from "./inspection-digitization";

export const metadata: Metadata = {
  title: "Tecosoft - Inspection Digitization",
  description: "Tecosoft Inspection Digitization Solution Page",
};

export default function page() {
  return (
    <>
      <InspectionDigitizationHomePage />
    </>
  );
}
