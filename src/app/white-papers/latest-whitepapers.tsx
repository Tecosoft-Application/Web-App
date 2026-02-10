"use client";

import { getWhitePapersAll } from "@/api/list";
import ToggleTabs from "@/components/ToggleButton";
import { useEffect, useState } from "react";



export default function LatestWhitepapers() {

  const [latestBlogs, setLatestBlogs] = useState([]) as any;

  useEffect(() => {

    fetchLatestWhitepapers();

  }
    , []);


  const fetchLatestWhitepapers = async () => {
    try {
      await getWhitePapersAll({ pageLimit: 5 }).then((data: any) => {
        console.log("Latest White Papers Data:", data);
        const blogListData = data.detail.data || [];

        blogListData.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        console.log("Sorted Latest White Papers:", blogListData);

        setLatestBlogs(blogListData);
      });

    }

    catch (error) {
      console.error("Error fetching latest white papers:", error);
    }
  }


  const fetchfilterWhitepapers = async (categoryValue: any) => {

    console.log("categoryValue:", categoryValue);

    try {
      let categorytype = categoryValue;
      if (categoryValue === "all") {
        categorytype = "";
      } else if (categoryValue === "casestudy") {
        categorytype = "casestudy";
      } else if (categoryValue === "whitepaper") {
        categorytype = "whitepaper";
      }
      await getWhitePapersAll({ pageLimit: 5, type: categorytype }).then((data: any) => {
        console.log("Latest White Papers Data:", data);
        const blogListData = data.detail.data || [];

        blogListData.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        console.log("Sorted Latest White Papers:", blogListData);

        setLatestBlogs(blogListData);
      });

    }

    catch (error) {
      console.error("Error fetching latest white papers:", error);
    }
  }


  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 py-12 lg:py-18">

        <div className="flex justify-between  items-center">
          <div> {/* Section Title */}
            <h2 className="text-[#0098d4] text-2xl sm:text-3xl lg:text-4xl font-semibold mb-10">
              Latest Whitepapers
            </h2> </div>
          <div>       <ToggleTabs
            tabs={[
              { label: "Whitepapers", value: "whitepaper" },
              { label: "Case Studies", value: "casestudy" },
            ]}
            defaultValue="whitepaper"
            onChange={fetchfilterWhitepapers}
          />
          </div>
        </div>


        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10  pt-8 lg:pt-12">

          {/* Left Featured Blog */}
          <div className="lg:col-span-8 cursor-pointer" onClick={() => {
            window.location.href = `/white-papers/${latestBlogs[0]?.id}`;
          }}>
            <div className="relative rounded-2xl overflow-hidden group">

              {/* Image */}
              <img
                src={latestBlogs[0]?.banner_url}
                alt="Featured Blog"
                className="w-full h-[280px] sm:h-[400px] lg:h-[520px] object-cover transition duration-500 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent " />

              {/* Content */}
              <div className="absolute bottom-0 w-full p-6 sm:p-8 text-white
                bg-black/30 backdrop-blur-[8px]">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold leading-tight mb-3 line-clamp-1">
                  {latestBlogs[0]?.title}
                </h3>
                <p className="text-sm sm:text-base text-white/85 max-w-[600px] line-clamp-2">
                  {latestBlogs[0]?.summary}
                </p>
              </div>

            </div>
          </div>

          {/* Right Side Posts */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h4 className="text-xl font-semibold text-[#181818] mb-6">
              Other Whitepapers
            </h4>

            <div className="flex flex-col divide-y divide-gray-200">
              {latestBlogs?.slice(1, 5).map((data: any, index: number) => (
                <div
                  key={data?.id || index}
                  className="flex items-center gap-4 py-5 group cursor-pointer"
                  onClick={() => {
                    window.location.href = `/white-papers/${data?.id}`;
                  }}
                >
                  <img
                    src={data?.banner_url}
                    alt={data?.title}
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover shrink-0"
                  />

                  <p className="text-sm sm:text-base lg:text-lg font-semibold text-[#4f4f4f] group-hover:text-[#0098d4] transition line-clamp-2 ">
                    {data?.title}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
