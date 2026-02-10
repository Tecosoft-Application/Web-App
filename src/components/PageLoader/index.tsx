"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";

interface PageLoaderProps {
  onLoadComplete?: () => void;
  assetsToLoad?: string[];
}

export default function PageLoader({
  onLoadComplete,
  assetsToLoad = [],
}: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadAssets = async () => {
      // Default minimum loading time
      const minimumLoadTime = 1500;
      const startTime = Date.now();

      if (assetsToLoad.length === 0) {
        // If no assets specified, just use minimum load time
        await new Promise((resolve) => setTimeout(resolve, minimumLoadTime));
        setProgress(100);
        setIsLoading(false);
        onLoadComplete?.();
        return;
      }

      // Preload all assets
      const loadPromises = assetsToLoad.map((src, index) => {
        return new Promise<void>((resolve) => {
          const img = new window.Image();
          img.onload = () => {
            setProgress(((index + 1) / assetsToLoad.length) * 100);
            resolve();
          };
          img.onerror = () => {
            console.warn(`Failed to load asset : ${src}`);
            resolve(); // Continue even if asset fails
          };
          img.src = src;
        });
      });

      // Wait for all assets to load
      await Promise.all(loadPromises);

      // Ensure minimum load time
      const elapsed = Date.now() - startTime;
      if (elapsed < minimumLoadTime) {
        await new Promise((resolve) =>
          setTimeout(resolve, minimumLoadTime - elapsed)
        );
      }

      setProgress(100);
      setIsLoading(false);
      onLoadComplete?.();
    };

    loadAssets();
  }, [onLoadComplete, assetsToLoad]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00B8DB]/10 via-white to-[#0098d4]/10 " />

      {/* Loader content */}
      <div className="relative flex flex-col items-center justify-center gap-6 z-10">
        {/* GIF Loader */}
        <div className="relative animate-pulse w-[70px] h-[70px] ">
          <Image
            src="/assets/loader/loader.svg"
            alt="Loading..."
            fill
            className="object-contain loader-rotate w-[70px] h-[70px] "
            priority
            unoptimized
          />
        </div>

        {/* Progress bar */}
        {/* <div className="w-[200px] sm:w-[250px] md:w-[300px] h-1 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#00B8DB] to-[#0098d4] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div> */}
      </div>
    </div>
  );
}
