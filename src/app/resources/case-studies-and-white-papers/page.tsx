import { Metadata } from "next";
import WhitePapersList from "./white-papers";


export const metadata: Metadata = {
  title: "Tecosoft - Case studies & White Papers",
  description: "Tecsoft Case studies & White Papers",
};

export default function page() {
  return (
    <div>
      <WhitePapersList />
    </div>
  );
}