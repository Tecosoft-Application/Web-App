
"use client";

import Avatar from "../Avathar";

export default function ArticleCard({
    image,
    title,
    description,
    author,
    avatar,
    readTime,
    onClick,
}: {
    image: string;
    title: string;
    description: string;
    author: string;
    avatar: string;
    readTime: string;
    onClick?: () => void;
}) {
    return (
        <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition h-full flex flex-col cursor-pointer" onClick={onClick}>
            {/* Image */}
            <div className="relative h-[200px] w-full rounded-xl overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col gap-4 flex-1">
                <div className="flex flex-col gap-2">
                    <h3 className="text-[20px] font-semibold text-[#282828] leading-[26px] line-clamp-2">
                        {title}
                    </h3>

                    <p className="text-[14px] text-[#777] leading-[20px] line-clamp-2 line-clamp-2" >
                        {description}
                    </p>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                        <Avatar
                            src={avatar}
                            name={author}
                            size="w-6 h-6"
                        />
                        <span className="text-[16px] text-[#282828] font-medium">
                            {author}
                        </span>
                    </div>

                    <span className="text-[16px] text-[#0098d4] font-medium">
                        {readTime} mins read
                    </span>
                </div>
            </div>
        </div>
    );
}