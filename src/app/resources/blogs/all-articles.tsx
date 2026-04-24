"use client";

import { getBlogAll } from "@/api/list";
import ArticleCard from "@/components/Blogs/ArticalCards";
import { stat } from "fs";
import { useState, useEffect, useCallback, useRef } from "react";

const INITIAL_LIMIT = 6;
const LOAD_MORE_COUNT = 6;

/* =========================================================
   SEARCH ICON
========================================================= */

function SearchIcon() {
  return (
    <div className="relative w-5 h-5">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.58073 17.5C13.953 17.5 17.4974 13.9555 17.4974 9.58329C17.4974 5.21104 13.953 1.66663 9.58073 1.66663C5.20847 1.66663 1.66406 5.21104 1.66406 9.58329C1.66406 13.9555 5.20847 17.5 9.58073 17.5Z" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.3307 18.3333L16.6641 16.6666" stroke="#282828" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>

    </div>
  );
}

/* =========================================================
   ARROW ICON
========================================================= */

function ArrowDownIcon() {
  return (
    <div className="w-[14px] h-[14px]">
      <svg className="w-full h-full" fill="none" viewBox="0 0 14 14">
        <path
          d="M7 1.75V12.25M7 12.25L11.9583 7.29167M7 12.25L2.04167 7.29167"
          stroke="white"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}


/* =========================================================
   BLOG INTERFACE
========================================================= */

interface Blog {
  _id: string;
  title: string;
  description: string;
  image: string;
  author: string;
  authorImage: string;
  readTime: string;
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AllArticles() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const isFirstRender = useRef(true);

  // Fetch blogs function
  const fetchBlogs = useCallback(async (searchTerm: string, skip: number, isLoadMore: boolean = false) => {

    if (isLoadMore) {
      //likely a load more action, set loading more state
      setLoadingMore(true);
    } else {
      //initial load or new search, reset hasMore and set loading state
      setLoading(true);
    }

    try {
      const params = {
        search: searchTerm,
        pageLimit: LOAD_MORE_COUNT,
        status: "published",
        skip: skip,
      };

      const response = await getBlogAll(params);

      if (response && response.detail.data) {

        const newBlogs = response.detail.data || [];
        const total = response.detail.total_count || 0;

        if (isLoadMore) {
          setBlogs((prev) => [...prev, ...newBlogs]);
        } else {
          setBlogs(newBlogs);
        }

        setTotalCount(total);
        console.log("Total Blogs:", skip, newBlogs.length, total);
        setHasMore(skip + newBlogs.length < total);
      }
    } catch (error) {
      console.error("Error fetching blogs:", error);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  }, []);

  // Initial load
  useEffect(() => {
    fetchBlogs("", 0, false);
  }, []);

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
  };

  // Debounced search effect
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const debounceTimer = setTimeout(() => {
      fetchBlogs(search, 0, false);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [search]);

  // Handle load more
  const handleLoadMore = () => {

    if (!loadingMore && hasMore) {
      fetchBlogs(search, blogs.length, true);
    }
  };




  return (
    <section className="w-full bg-[#f5f5f5] py-12 px-4 sm:px-8 lg:px-16 xl:px-24">

      {/* Header */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-12">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#282828]">
          All Articles
        </h2>

        <div className="w-full sm:w-[420px]">
          <div className="bg-white rounded-lg border border-[#d2d2d2] px-4 py-3 flex items-center justify-between">
            <input
              type="text"
              placeholder="Search Blogs"
              value={search}
              onChange={handleSearch}
              className="w-full text-sm text-[#282828] placeholder:text-[#bbb] outline-none bg-transparent"
            />
            <SearchIcon />
          </div>
        </div>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr animate-pulse">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm h-full flex flex-col">
              <div className="h-[200px] w-full rounded-xl bg-gray-200" />
              <div className="p-5 flex flex-col gap-4 flex-1">
                <div className="space-y-2">
                  <div className="h-5 bg-gray-200 rounded w-full" />
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-full mt-2" />
                  <div className="h-4 bg-gray-200 rounded w-2/3" />
                </div>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gray-200" />
                    <div className="h-4 bg-gray-200 rounded w-20" />
                  </div>
                  <div className="h-4 bg-gray-200 rounded w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <>
          {/* Articles Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {blogs.length > 0 ? (
              blogs.map((blog: any, index: number) => (

                <div key={index}>
                  <ArticleCard
                    image={blog.cover_image_url}
                    title={blog.title}
                    description={blog.summary}
                    author={blog.author_name}
                    avatar={blog.author_image}
                    readTime={blog.read_time}
                    onClick={() => {
                      window.location.href = `/resources/blogs/${blog?.slug}`
                    }}
                  />
                </div>


              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-[#777] text-lg">No articles found</p>
              </div>
            )}
          </div>

          {/* Load More */}
          {hasMore && totalCount > 0 && (
            <div className="flex justify-center mt-14">
              <button
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="bg-[#07af40] flex items-center gap-2 px-6 py-3 text-white rounded-md hover:opacity-90 transition disabled:opacity-50 cursor-pointer"
              >
                {loadingMore ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Loading...
                  </>
                ) : (
                  <>
                    Load more
                    <ArrowDownIcon />
                  </>
                )}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
