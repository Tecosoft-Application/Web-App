// ***************************** Import packages ***********************************************
"use client";
import React from "react";
import StatsSection from "./stats-section";
import IndustriesSection from "./industries-section";
import Industry from "./industry";
import Products from "./products-section";
import HeaderSection from "@/container/header/page";

const HomePage = () => {
  return (
    <>
      <HeaderSection />
      <StatsSection />
      <Industry />
      <Products />
      <IndustriesSection />
    </>
  );
};

export default HomePage;
