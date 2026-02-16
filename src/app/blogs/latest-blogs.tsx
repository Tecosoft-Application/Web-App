"use client";

import { getBlogLatest } from "@/api/list";
import Image from "next/image";
import { useEffect, useState } from "react";



export default function LatestBlogs() {

  const [latestBlogs, setLatestBlogs] = useState([]) as any;
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetchLatestBlogs();

  }
    , []);


  const fetchLatestBlogs = async () => {
    try {
      setLoading(true);
      await getBlogLatest({ pageLimit: 5 }).then((data: any) => {
        const blogListData = data.detail.data || [];
        blogListData.sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        setLatestBlogs(blogListData);
      });
    } catch (error) {
      console.error("Error fetching latest blogs:", error);
    } finally {
      setLoading(false);
    }
  }




  return (
    <section className="w-full bg-white">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-16 py-12 lg:py-20">

        {/* Section Title */}
        <h2 className="text-[#0098d4] text-2xl sm:text-3xl lg:text-4xl font-semibold mb-10">
          Latest Blogs
        </h2>

        {/* Layout */}
        {loading ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 animate-pulse">
            {/* Left Featured Skeleton */}
            <div className="lg:col-span-8">
              <div className="rounded-2xl overflow-hidden bg-gray-200 h-[280px] sm:h-[400px] lg:h-[520px]" />
            </div>

            {/* Right Side Skeleton */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <div className="h-6 w-40 bg-gray-200 rounded mb-6" />
              <div className="flex flex-col divide-y divide-gray-200">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="flex items-center gap-4 py-5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg bg-gray-200 shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-full" />
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : latestBlogs.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 lg:py-28">
            <svg
              className="w-16 h-16 text-gray-300 mb-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
              />
            </svg>
            <p className="text-lg font-semibold text-gray-400">
              No blogs found
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Check back later for new content.
            </p>
          </div>) :




          (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

              {/* Left Featured Blog */}
              <div className="lg:col-span-8 cursor-pointer" onClick={() => {
                window.location.href = `/blogs/${latestBlogs[0]?.slug}`;
              }}>
                <div className="relative rounded-2xl overflow-hidden group">

                  {/* Image */}
                  <Image
                    src={latestBlogs[0]?.cover_image_url}
                    alt="Featured Blog"
                    width={800}
                    height={520}
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
                  Other Latest Posts
                </h4>

                <div className="flex flex-col divide-y divide-gray-200">
                  {latestBlogs?.slice(1, 5).map((data: any, index: number) => (
                    <div
                      key={data?.id || index}
                      className="flex items-center gap-4 py-5 group cursor-pointer"
                      onClick={() => {
                        window.location.href = `/blogs/${data?.slug}`;
                      }}
                    >
                      <Image
                        src={data?.cover_image_url}
                        alt={data?.title}
                        width={80}
                        height={80}
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
          )}
      </div>
    </section>
  );
}
