

// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import React from "react";
import Analytics from "./tecosoft-analytics";

export const metadata: Metadata = {
  title: "home page tech soft",
  description: "home page tech soft",
};

export default function page() {
  return (
    <>
      <Analytics />
    </>
  );
}
