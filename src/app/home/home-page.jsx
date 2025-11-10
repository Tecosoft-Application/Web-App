// ***************************** Import packages ***********************************************
"use client";
import React from "react";
import StatsSection from "./stats-section";
import IndustriesSection from "./industries-section";
import Industry from "./industry";
import Products from "./products-section";
import BannerSection from "./banner-section";

const HomePage = () => {
  return (
    <>
      <BannerSection />
      <StatsSection />
      <Industry />
      <Products />
      <IndustriesSection />
    </>
  );
};

export default HomePage;
