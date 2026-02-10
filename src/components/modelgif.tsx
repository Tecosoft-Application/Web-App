"use client";
import React from "react";
import Image from "next/image";

export default function ModelGif({ currentProduct, hoveredProduct }: any) {
  return (
    <div
      className={`hidden lg:flex fixed top-[80px] left-0 right-0 bottom-0 z-[100] ${
        hoveredProduct && currentProduct
          ? " w-full h-full opacity-100 duration-500"
          : "opacity-0 w-[20%] h-[20%] duration-300"
      } m-auto items-center justify-center pointer-events-none transition-all ease-out overflow-hidden bg-[#3b83f129] backdrop-blur-3xl modalgif`}
      style={{
        animation: "overlayFadeIn 0.9s ease-out forwards",
      }}
    >
      {/* <div className="w-full max-h-[90%] flex flex-col items-center justify-center overflow-hidden"> */}
      {/* <div className="relative w-full max-w-full flex-1 flex items-center justify-center h-full"> */}
      {hoveredProduct && currentProduct && (
        <div className="max-w-[90%] md:max-w-[80%] max-h-[90%] lg:max-h-[80%]  m-auto object-contain rounded-2xl overflow-hidden flex items-center justify-center">
          {currentProduct.type === "video" ? (
            <video
              src={currentProduct?.gifPath}
              autoPlay
              loop
              muted
              className="max-w-[600px] max-h-[600px] lg:max-w-[900px] lg:max-h-[900px] object-contain"
              style={{
                animation: "imageReveal 0.7s ease-out forwards",
              }}
            />
          ) : (
            <Image
              src={currentProduct?.gifPath}
              alt={`${currentProduct?.title} animation`}
              className="max-w-[600px] max-h-[600px] lg:max-w-[900px] lg:max-h-[900px] object-contain"
              width={900}
              height={900}
              style={{
                animation: "imageReveal 0.7s ease-out forwards",
                objectFit: "contain",
              }}
            />
          )}
        </div>
      )}
      {/* </div>
            </div> */}
    </div>
  );
}
