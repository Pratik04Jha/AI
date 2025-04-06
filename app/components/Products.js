'use client'
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Products = ({ data }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [lastPos, setLastPos] = useState(null);

  useEffect(() => {
    setLastPos({ x: 35, y: 25 });
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCursorPos({ x, y });
    setLastPos({ x, y });
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setHovering(false);
    setCursorPos(lastPos);
  };

  return (
    <Link href={data.productSrc}>
      <div
        className="relative border-1 border-zinc-700/60 h-50 w-70 rounded-lg px-5 cursor-pointer flex items-center flex-col justify-center gap-5 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
        {lastPos && (
          <div
            className="absolute bg-zinc-200 blur-2xl opacity-10 rounded-full transition-all duration-300 ease-out"
            style={{
              top: `${(hovering ? cursorPos.y : lastPos?.y) - 100}px`,
              left: `${(hovering ? cursorPos.x : lastPos?.x) - 100}px`,
              width: "200px",
              height: "200px",
              pointerEvents: "none",
            }}
          />
        )}

        {data.imageIcon}
        <h1 className="font-bold text-2xl text-center leading-7 text-white/90">
          {data.heading}
        </h1>
      </div>
    </Link>
  );
};

export default Products;
