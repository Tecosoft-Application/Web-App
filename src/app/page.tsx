// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import Homepage from "./_home/page";

export const metadata: Metadata = {
  title: "Tecosoft - Building Intelligent Ecosystems for the Next-Gen Industries",
  description: "With the power of IIoT, AI, and Digital Twins, Tecosoft transforms operations across industries into intelligent connected ecosystems.",
};

export default function Home() {
  return (
    <>
      <main>
        <Homepage />
      </main>
    </>
  );
}
