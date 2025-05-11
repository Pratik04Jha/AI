"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Products = ({ data }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [lastPos, setLastPos] = useState(null);

  useEffect(() => {
    setLastPos({ x: 100, y: 80 });
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({ x, y });
    setLastPos({ x, y });
  };

  const handleMouseLeave = () => {
    setHovering(false);
    setCursorPos(lastPos);
  };

  return (
    <Link href={data.productSrc} className="group">
      <div
        className="relative h-[300px] w-72 sm:w-80 rounded-3xl cursor-pointer flex flex-col items-center justify-center px-6 py-8 gap-4 transition-all duration-500 ease-out border border-white/10 backdrop-blur-xl  hover:shadow-xl hover:border-white/20 hover:scale-[1.03] overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glowing Cursor Blob */}
        {lastPos && (
          <div
            className="absolute bg-zinc-400 blur-[100px] opacity-20 rounded-full transition-all duration-500 ease-out pointer-events-none"
            style={{
              top: `${(hovering ? cursorPos.y : lastPos?.y) - 100}px`,
              left: `${(hovering ? cursorPos.x : lastPos?.x) - 100}px`,
              width: "200px",
              height: "200px",
            }}
          />
        )}



        {/* Icon */}
        <div className="z-10 scale-100 group-hover:scale-110 transition-transform duration-300">
          {data.imageIcon}
        </div>

        {/* Heading */}
        <h1 className="font-semibold text-xl sm:text-2xl text-center text-white drop-shadow-sm z-10">
          {data.heading}
        </h1>

        {/* Description */}
        <p className="text-sm text-center text-white/70 leading-relaxed z-10 max-w-xs tracking-wide">
          {data.description}
        </p>
      </div>
    </Link>
  );
};

export default Products;
