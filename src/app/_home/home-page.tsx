// ***************************** Import packages ***********************************************
"use client";
import React, { useState } from "react";
import StatsSection from "./stats-section";
import IndustriesSection from "./industries-section";
import Industry from "./industry";
import Products from "./products-section";
import BannerSection from "./banner-section";
import ModelGif from "@/components/modelgif";

const HomePage = () => {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  const products = [
    {
      image: "/assets/platform/eagle/banner/pro.png",
      title: "Eagle",
      subtitle: "IOT Gateway Platform",
      description:
        "EAGLE is an advanced edge computing IoT gateway that connects machines, sensors, meters, and other industrial assets, acting as the backbone for digital transformation. It enables real-time data acquisition, monitoring, and control, providing seamless, reliable, and intelligent connectivity across operations.",
      delay: 0,
      route: "/eagle",
      type: "gif",
      gifPath: "/assets/video/eagle.gif",
    },
    {
      image: "/assets/pages/home/products/analytics.png",
      title: "Tecosoft Analytics",
      subtitle: "IOT Cloud Platform",
      description:
        "Tecosoft Analytics is an intelligent enterprise analytics platform that transforms operational data into actionable insights. With embedded AI and Digital Twin capabilities, it delivers dashboards, reports, and predictive intelligence to enable smarter decisions and connected operations.",
      delay: 0,
      route: "/analytics",
      type: "video",
      videoPath: "/assets/video/analytics-compress.mp4",
    },
  ];

  const currentProduct = products.find((p) => p.title === hoveredProduct);
  return (
    <>
      <BannerSection />
      <StatsSection />
      <Industry />
      <Products
        products={products}
        hoveredProduct={hoveredProduct}
        setHoveredProduct={setHoveredProduct}
      />
      <IndustriesSection />
      {/* <ModelGif
        currentProduct={currentProduct}
        hoveredProduct={hoveredProduct}
      /> */}
    </>
  );
};

export default HomePage;
