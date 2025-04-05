"use client";
import React from "react";
import { useState, useEffect } from "react";

const Supportbutton = ({ support }) => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);
  const [lastPos, setLastPos] = useState(null);

  // Set the initial position to the center of the div
  useEffect(() => {
    setLastPos({ x: 35, y: 25 }); // Adjust based on div size
  }, []);

  // Track cursor movement inside the div
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
    <button className=" py-2 px-10 rounded-[30px] text-white text-2xl">
      <div
        className="relative h-30 w-80 rounded-lg px-5 cursor-pointer flex items-center flex-col justify-center gap-2 overflow-hidden"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
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
        {support.title}
      </div>
    </button>
  );
};

export default Supportbutton;
