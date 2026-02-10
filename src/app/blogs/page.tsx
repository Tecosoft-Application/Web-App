
import { Metadata } from "next";
import BlogsList from "./blogs-list";

export const metadata: Metadata = {
  title: "Tecosoft - Blogs",
  description: "Tecsoft Blogs",
};


export default function page() {
  return (
    <div>
      <BlogsList />
    </div>
  );
}