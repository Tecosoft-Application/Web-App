// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import React from "react";
import CompanyInfo from "./company-page";

export const metadata: Metadata = {
  title: "Tecosoft - Company",
  description: "Tecosoft Company  Page",
};

export default function page() {
  return (
    <>
      <CompanyInfo />
    </>
  );
}
