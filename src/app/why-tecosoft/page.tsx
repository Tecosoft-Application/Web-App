// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import React from "react";
import WhyTecosoft from "./why-tecosoft";

export const metadata: Metadata = {
  title: "Tecosoft - Why Tecosoft Page",
  description: "Tecosoft - Why Tecosoft Page",
};

export default function page() {
  return (
    <>
      <WhyTecosoft />
    </>
  );
}
