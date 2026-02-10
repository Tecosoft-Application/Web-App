"use client"

import ExploreArticles from "./explore-articles";
import WhitePapersHeroSection from "./hero-section";
import LatestWhitepapers from "./latest-whitepapers";





const WhitePapersList = () => {
  return (
    <div className="pt-16">
      <WhitePapersHeroSection />
      <LatestWhitepapers />
      <ExploreArticles />
    </div>
  );
}

export default WhitePapersList;