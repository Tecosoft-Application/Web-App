// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import React from "react";
import Analytics from "./tecosoft-analytics";

export const metadata: Metadata = {
  title: "Tecosoft - The Tecosoft Analytics",
  description: "Tecosoft The Tecosoft Analytics Page",
};

export default function page() {
  return (
    <>
      <Analytics />
    </>
  );
}
