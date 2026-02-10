"use client";
import { getBlogDetails, getBlogLatest, getWhitePaperDetails, getWhitePapersAll } from "@/api/list";
import Avatar from "@/components/Avathar";
import RelatedBlog from "@/components/Blogs/RelatedCards";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function WhitepapersDetails({ slug }: { slug: string }) {

    const [blogData, setBlogData] = useState([]) as any;
    const [relatedBlogs, setRelatedBlogs] = useState([]) as any;

    useEffect(() => {

        fetchBlogDetails();

    }
        , []);


    const fetchBlogDetails = async () => {
        try {
            // Fetch blog details using the slug
            const data = await getWhitePaperDetails(slug);
            console.log("Blog Details:", data);

            setBlogData(data?.detail?.data || null);

            //related blogs
            const getRelatedBlogs = await getWhitePapersAll({ limit: 5 });

            const relatedBlogsData = getRelatedBlogs?.detail?.data || [];
            console.log("Related Blogs:", relatedBlogsData);

            const filteredRelatedBlogs = relatedBlogsData.filter((blog: any) => blog.id !== blogData?.id);
            console.log("Filtered Related Blogs:", filteredRelatedBlogs);
            setRelatedBlogs(filteredRelatedBlogs);

        } catch (error) {
            console.error("Error fetching blog:", error);
        }
    };

    console.log(blogData, "te");



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

                        <Avatar src={blogData?.banner_url} name={blogData?.author} size="w-6 h-6" />

                        <span className="text-[#282828] font-medium text-capitalize">
                            {blogData?.author}
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
          w-full
          h-[220px]
          sm:h-[320px]
          md:h-[400px]
          lg:h-[520px]
          rounded-xl
          overflow-hidden
          mb-10
        ">
                    <img
                        src={blogData?.banner_url}
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

                    {/* ================= RIGHT SIDEBAR ================= */}
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
                            Recent White Papers
                        </h3>

                        <div className="border-t border-[#D2D2D2]" />

                        {relatedBlogs.slice(0, 2).map((blog: any, index: number) => (
                            <>
                                <div key={index}>

                                    <RelatedBlog
                                        bannerImage={blog.banner_url}
                                        title={blog.title}
                                        summary={blog.summary}
                                        author={blog.author}
                                        avatar={blog.author_image_url}
                                        readTime={blog.read_time}
                                        onClick={() => {
                                            window.location.href = `/white-papers/${blog?.id}`
                                        }}
                                    />




                                </div>
                                {index === 0 && <div className="border-t border-[#D2D2D2] pt-3" />}
                            </>
                        ))
                        }


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


            <span className="text-[15px] sm:text-[16px] text-[#4f4f4f] font-normal leading-5">
                Back to White Papers
            </span>
        </button>
    );
}
