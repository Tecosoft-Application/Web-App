// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import IndustriesPage from "./industries-page";

// ***************************** Page Metadata ***********************************************
export const metadata: Metadata = {
  title: "Tecosoft - Industries Page",
  description: "Tecosoft - Industries Page",
};

export default function Industries() {
  return (
    <>
      <IndustriesPage />
    </>
  );
}
