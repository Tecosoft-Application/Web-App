import HeroSection from "./banner-section";
import HowItWorks from "./how-It-works";
import IndustriesCarousel from "./industries-carousel";
import WhyDigitalTwinPlatform from "./why-section";

const DigitalTwinPlatform = () => {
  return (
    <div data-name="Digital twin Platform" className="">
      <HeroSection />
      <WhyDigitalTwinPlatform />
      <IndustriesCarousel />
      <HowItWorks />
    </div>
  );
};

export default DigitalTwinPlatform;
