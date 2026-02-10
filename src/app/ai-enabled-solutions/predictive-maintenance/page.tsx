// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import Aienabled from "./predictive-maintenance";
export const metadata: Metadata = {
  title: "Tecosoft - Predictive Maintenance",
  description: "Tecosoft Predictive Maintenance Solutions",
};

export default function Home() {
  return (
    <>
      <Aienabled />
    </>
  );
}
