import FeatureGridSection from "../../components/FeatureGridSection";
import {
  WHY_DIGITAL_TWIN_SECTION,
  WHY_DIGITAL_TWIN_FEATURES,
} from "../../constants/digial-twin-platform/digital-twin-platform.js";

function WhyDigitalTwinPlatform() {
  return (
    <FeatureGridSection
      title={WHY_DIGITAL_TWIN_SECTION.title}
      description={WHY_DIGITAL_TWIN_SECTION.description}
      features={WHY_DIGITAL_TWIN_FEATURES}
      sectionName="Why Digital Twin Platform"
    />
  );
}

export default WhyDigitalTwinPlatform;
