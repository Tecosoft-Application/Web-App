"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import PageLoader from "@/components/PageLoader";
import preloadAssets from "@/utills/preload-assets";
import { usePathname } from "next/navigation";
import { useLenis } from "../../libs/react-lenis";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [isLoading, setIsLoading] = useState(true);
  const lenis = useLenis();

  const pathname: any = usePathname();

  useLayoutEffect(() => {
    setIsLoading(true);
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Scroll to top using Lenis for smooth scroll library compatibility
    if (lenis) {
      lenis.scrollTo(0, {
        immediate: true,
        force: true,
      });
    }

    // Preload all assets on the page
    preloadAssets().then(() => {
      setIsLoading(false);
    });
  }, [pathname, lenis]);

  return (
    <>
      {isLoading && <PageLoader />}
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
