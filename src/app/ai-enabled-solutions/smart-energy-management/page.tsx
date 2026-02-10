// ***************************** Import packages ***********************************************
import type { Metadata } from "next";
import EneryManagement from "./energy-management";
export const metadata: Metadata = {
  title: "Tecosoft - Smart Energy Management",
  description: "Tecosoft Smart Energy Management Solutions",
};

export default function Home() {
  return (
    <>
      <EneryManagement />
    </>
  );
}
