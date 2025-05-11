'use client'
import Link from "next/link";
import React, { useState } from "react";

const SocialIcons = ({ data }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex flex-col items-center justify-center group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <div
  className={`absolute -top-10 sm:-top-12 bg-zinc-800 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-md 
    shadow-lg z-10 transition-all duration-300 ease-out transform 
    ${hovered ? "opacity-100 scale-100" : "opacity-0 scale-90"} 
    animate-bounce-in`}
>
  {data.title}
  <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-zinc-800" />
</div>


      {/* Actual Icon Link */}
      <Link
        href={data.src}
        target="_blank"
        className="text-2xl text-white hover:scale-110 transition-transform duration-300 ease-in-out"
      >
        {data.icon}
      </Link>
    </div>
  );
};

export default SocialIcons;