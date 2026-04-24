import { Metadata } from "next";
import WhitePapersList from "./white-papers";


export const metadata: Metadata = {
  title: "Tecosoft - Case studies & Whitepapers",
  description: "Tecsoft Case studies & Whitepapers",
};

export default function page() {
  return (
    <div>
      <WhitePapersList />
    </div>
  );
}