"use client";

import { useState } from "react";

interface AvatarProps {
  src?: string;
  name?: string;
  size?: string;
}

export default function Avatar({
  src,
  name = "",
  size = "w-10 h-10",
}: AvatarProps) {
  const [imgError, setImgError] = useState(false);

  const firstLetter = name.charAt(0).toUpperCase() || "?";

  return (
    <>
      {src && !imgError ? (
        <img
          src={src}
          alt={name}
          onError={() => setImgError(true)}
          className={`${size} rounded-full object-cover`}
        />
      ) : (
        <div
          className={`${size} rounded-full bg-[#0098d4] flex items-center justify-center text-white font-semibold`}
        >
          {firstLetter}
        </div>
      )}
    </>
  );
}
