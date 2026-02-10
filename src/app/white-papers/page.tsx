import { Metadata } from "next";
import WhitePapersList from "./white-papers";


export const metadata: Metadata = {
  title: "Tecosoft - White Papers",
  description: "Tecsoft White Papers",
};

export default function page() {
  return (
    <div>
      <WhitePapersList />
    </div>
  );
}