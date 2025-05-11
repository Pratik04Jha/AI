"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const PromoteButtons = ({ data }) => {
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

  const handleMouseLeave = () => {
    setHovering(false);
    setCursorPos(lastPos);
  };

  return (
    <Link href={data.src}>
      <div
        className="relative rounded-lg px-5 py-6 cursor-pointer flex flex-col justify-center gap-4 overflow-hidden 
        w-full sm:w-[90%] md:w-[80%] lg:w-[30rem] h-auto 
        bg-white/5 transition-all duration-300 ease-in-out"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glowing effect */}
        {lastPos && (
          <div
            className="absolute bg-zinc-200 blur-[100px] opacity-20 rounded-full transition-all duration-300 ease-out"
            style={{
              top: `${(hovering ? cursorPos.y : lastPos?.y) - 100}px`,
              left: `${(hovering ? cursorPos.x : lastPos?.x) - 100}px`,
              width: "200px",
              height: "200px",
              pointerEvents: "none",
            }}
          />
        )}

        {/* Icon and Title */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 w-full">
          {data.icon}
          <h1 className="font-bold text-xl sm:text-2xl md:text-3xl text-white/90">
            {data.title}
          </h1>
        </div>

        {/* Description */}
        <p className="text-sm sm:text-base text-white/70">{data.des}</p>
      </div>
    </Link>
  );
};

export default PromoteButtons;
