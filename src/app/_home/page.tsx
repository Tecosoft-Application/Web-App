// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import React from "react";
import HomePage from "./home-page";

export const metadata: Metadata = {
  title: "Tecosoft - Home",
  description: "Tecosoft",
};

export default function page() {
  return (
    <>
      <HomePage />
    </>
  );
}
