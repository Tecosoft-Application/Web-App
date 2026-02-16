"use client";

import Image from "next/image";
import Avatar from "../Avathar";





export default function RelatedBlog({
    bannerImage,
    title,
    summary,
    avatar,
    author,
    readTime,
    onClick,
}: {
    bannerImage: string;
    title: string;
    author: string;
    readTime: string;
    summary: string;
    avatar: string;
    onClick?: () => void;
}) {
    return (

        <div className="flex flex-col gap-4 cursor-pointer group" onClick={onClick}>

            <div className="
        w-full
        h-[140px]
        sm:h-[160px]
        rounded-xl
        overflow-hidden
      ">
                <Image
                    src={bannerImage}
                    width={400}
                    height={160}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                    alt="blog"
                />
            </div>

            <div className="flex flex-col gap-2">
                <h4 className="text-[16px] sm:text-[18px] font-semibold text-[#282828] leading-snug line-clamp-2">
                    {title}
                </h4>
                <p className="text-[14px] sm:text-[16px] text-[#282828] leading-snug line-clamp-2   ">
                    {summary}
                </p>

                <div className="flex items-center justify-between text-[13px] sm:text-[14px]">
                    <div className="flex items-center gap-2">
                        <Avatar src={avatar} name={author} size="w-6 h-6" />
                        <span className="text-[#282828]">{author}</span>
                    </div>

                    <span className="text-[#0098d4]">
                        {readTime} mins read
                    </span>
                </div>
            </div>
        </div>
    );
}

