// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import SolutionPage from "./connected-factories";

export const metadata: Metadata = {
  title: "Tecosoft - Connected Factories",
  description: "Tecosoft",
};

export default function Home() {
  return (
    <>
      <main>
        <SolutionPage />
      </main>
    </>
  );
}
