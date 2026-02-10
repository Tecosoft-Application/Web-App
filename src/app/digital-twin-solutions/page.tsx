import DigitalTwinPlatform from "./digital-twin-platform";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tecosoft - Digital Twin Solutions",
  description: "Tecosoft Digital Twin Solutions Page",
};

export default function Page() {
  return (
    <>
      <DigitalTwinPlatform />
    </>
  );
}
