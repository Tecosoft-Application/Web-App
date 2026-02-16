"use client";
import { getBlogDetails, getBlogLatest } from "@/api/list";
import Image from "next/image";
import Avatar from "@/components/Avathar";
import RelatedBlog from "@/components/Blogs/RelatedCards";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";



export default function BlogDetailsContent({ slug }: { slug: string }) {

    const [blogData, setBlogData] = useState([]) as any;
    const [relatedBlogs, setRelatedBlogs] = useState([]) as any;
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        fetchBlogDetails();

    }
        , []);


    const fetchBlogDetails = async () => {
        try {
            setLoading(true);
            // Fetch blog details using the slug
            const data = await getBlogDetails(slug);
            console.log("Blog Details:", data);

            setBlogData(data?.detail?.data || null);

            //related blogs
            const getRelatedBlogs = await getBlogLatest();

            const relatedBlogsData = getRelatedBlogs?.detail?.data || [];
            console.log("Related Blogs:", relatedBlogsData);

            const filteredRelatedBlogs = relatedBlogsData.filter((blog: any) => blog.id !== blogData?.id);
            console.log("Filtered Related Blogs:", filteredRelatedBlogs);
            setRelatedBlogs(filteredRelatedBlogs);

        } catch (error) {
            console.error("Error fetching blog:", error);
        } finally {
            setLoading(false);
        }
    };

    console.log(blogData, "te");



    if (!loading && !blogData) {
        return (
            <div className="bg-white w-full">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-14">
                    <BackButton />
                    <div className="flex flex-col items-center justify-center py-24 lg:py-32">
                        <svg
                            className="w-20 h-20 text-gray-300 mb-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={1.2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5"
                            />
                        </svg>
                        <p className="text-xl font-semibold text-gray-400">Blog not found</p>
                        <p className="text-sm text-gray-400 mt-2">
                            The blog you&apos;re looking for doesn&apos;t exist or has been removed.
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    if (loading) {
        return (
            <div className="bg-white w-full">
                <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-14 animate-pulse">

                    {/* Back button skeleton */}
                    <div className="flex items-center gap-3 mb-8">
                        <div className="w-5 h-5 bg-gray-200 rounded" />
                        <div className="h-4 bg-gray-200 rounded w-28" />
                    </div>

                    {/* Meta skeleton */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="h-4 bg-gray-200 rounded w-24" />
                        <div className="h-4 bg-gray-200 rounded w-1" />
                        <div className="w-6 h-6 bg-gray-200 rounded-full" />
                        <div className="h-4 bg-gray-200 rounded w-28" />
                    </div>

                    {/* Title skeleton */}
                    <div className="space-y-3 mb-4">
                        <div className="h-8 sm:h-10 bg-gray-200 rounded w-full" />
                        <div className="h-8 sm:h-10 bg-gray-200 rounded w-3/4" />
                    </div>

                    {/* Summary skeleton */}
                    <div className="space-y-2 mb-6">
                        <div className="h-4 bg-gray-200 rounded w-full" />
                        <div className="h-4 bg-gray-200 rounded w-full" />
                        <div className="h-4 bg-gray-200 rounded w-2/3" />
                    </div>

                    {/* Banner skeleton */}
                    <div className="w-full h-[220px] sm:h-[320px] md:h-[400px] lg:h-[520px] rounded-xl bg-gray-200 mb-10" />

                    {/* Main layout skeleton */}
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                        {/* Left content skeleton */}
                        <div className="flex-1 max-w-[896px] space-y-4">
                            {[...Array(8)].map((_, i) => (
                                <div key={i} className="h-4 bg-gray-200 rounded" style={{ width: `${85 + Math.random() * 15}%` }} />
                            ))}
                            <div className="h-4 bg-gray-200 rounded w-1/2 mt-6" />
                            {[...Array(6)].map((_, i) => (
                                <div key={`p2-${i}`} className="h-4 bg-gray-200 rounded" style={{ width: `${80 + Math.random() * 20}%` }} />
                            ))}
                        </div>

                        {/* Right sidebar skeleton */}
                        <div className="w-full lg:w-[366px] flex-shrink-0 space-y-6">
                            <div className="h-6 bg-gray-200 rounded w-36" />
                            <div className="border-t border-gray-200" />
                            {[...Array(2)].map((_, i) => (
                                <div key={i} className="space-y-3">
                                    <div className="h-[180px] bg-gray-200 rounded-xl" />
                                    <div className="h-5 bg-gray-200 rounded w-full" />
                                    <div className="h-4 bg-gray-200 rounded w-3/4" />
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div className="w-6 h-6 bg-gray-200 rounded-full" />
                                            <div className="h-4 bg-gray-200 rounded w-20" />
                                        </div>
                                        <div className="h-4 bg-gray-200 rounded w-24" />
                                    </div>
                                    {i === 0 && <div className="border-t border-gray-200 mt-3" />}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white w-full">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-10 sm:py-14">

                <BackButton />

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 text-sm sm:text-[16px] mb-4">
                    <span className="text-[#0098d4] font-semibold">
                        {blogData?.created_at ? new Date(blogData.created_at).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        }) : ""}
                    </span>

                    <span className="hidden sm:block text-gray-300">|</span>

                    <div className="flex items-center gap-2">
                        <span className="text-[#282828]">by</span>

                        <Avatar src={blogData?.author_image_url} name={blogData?.author_name} size="w-6 h-6" />

                        <span className="text-[#282828] font-medium text-capitalize">
                            {blogData?.author_name}
                        </span>
                    </div>
                </div>

                {/* Title */}
                <h1 className="
          text-[22px]
          sm:text-[28px]
          md:text-[32px]
          lg:text-[38px]
          leading-tight
          font-semibold
          text-[#282828]
          mb-4
        ">
                    {blogData?.title}
                </h1>

                {/* Intro */}
                <p className="text-[#777] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[26px] mb-6">
                    {blogData?.summary}
                </p>

                {/* Main Banner */}
                <div className="
          relative
          w-full
          h-[220px]
          sm:h-[320px]
          md:h-[400px]
          lg:h-[520px]
          rounded-xl
          overflow-hidden
          mb-10
        ">
                    <Image
                        src={blogData?.cover_image_url}
                        fill
                        className="w-full h-full object-cover"
                        alt="banner"
                    />
                </div>

                {/* MAIN LAYOUT */}
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

                    {/* ================= LEFT CONTENT ================= */}
                    <div className="flex-1 max-w-[896px] flex flex-col gap-8">



                        <div dangerouslySetInnerHTML={{ __html: blogData?.content || "" }} className="blog-content" />


                    </div>
                    <div className="
            w-full
            lg:w-[366px]
            flex-shrink-0
            flex
            flex-col
            gap-6
            lg:sticky
            lg:top-18
            h-fit
          ">

                        <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#282828]">
                            Recent Blogs
                        </h3>

                        <div className="border-t border-[#D2D2D2]" />

                        {relatedBlogs.length > 0 ? (
                            relatedBlogs.slice(0, 2).map((blog: any, index: number) => (
                                <div key={index}>
                                    <RelatedBlog
                                        bannerImage={blog.cover_image_url}
                                        title={blog.title}
                                        summary={blog.summary}
                                        author={blog.author_name}
                                        avatar={blog.author_image_url}
                                        readTime={blog.read_time}
                                        onClick={() => {
                                            window.location.href = `/blogs/${blog?.slug}`
                                        }}
                                    />
                                    {index === 0 && <div className="border-t border-[#D2D2D2] mt-6 pt-3" />}
                                </div>
                            ))
                        ) : (
                            <div className="flex flex-col items-center justify-center py-10">
                                <svg
                                    className="w-16 h-16 text-gray-300 mb-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={1.2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5"
                                    />
                                </svg>
                                <p className="text-base font-semibold text-gray-400">No related articles found</p>
                                <p className="text-sm text-gray-400 mt-1 text-center">
                                    Check back later for more articles.
                                </p>
                            </div>
                        )}


                    </div>
                </div>
            </div>
        </div>
    );
}



//back button

function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="flex items-center gap-3 mb-8 group cursor-pointer"
        >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.75 9H2.25M2.25 9L8.625 2.625M2.25 9L8.625 15.375" stroke="#4F4F4F" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round" />
            </svg>


            <span className="text-[15px] sm:text-[18px]  text-[#4f4f4f] font-medium leading-5">
                Back to Blogs
            </span>
        </button>
    );
}
