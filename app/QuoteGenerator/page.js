"use client";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

export default function QuoteGenerator() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [cursorPos, setCursorPos] = useState({ x: 100, y: 100 });
  const [buttonHover, setButtonHover] = useState({ x: 50, y: 15, isHovering: true });
  const [clicked, setClicked] = useState(false);

  const fetchQuote = async () => {
    setLoading(true);
    setClicked(true);
    setTimeout(() => setClicked(false), 500); // Reset click effect after animation

    try {
      const res = await fetch(
        `https://api.allorigins.win/raw?url=https://zenquotes.io/api/random&_=${new Date().getTime()}`
      );
      const data = await res.json();
      setQuote(data[0].q);
      setAuthor(data[0].a);
    } catch (error) {
      console.error("Error fetching quote:", error);
      setQuote("Failed to load quote. Please try again.");
      setAuthor("");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  // Track cursor movement inside the quote box
  const handleQuoteHover = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  // Track cursor movement inside the button
  const handleButtonHover = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setButtonHover({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovering: true,
    });
  };

  return (
    <div className="flex flex-col items-center mt-10 h-screen pl-60 pb-15 pt-15">
      <div className="text-white p-6 rounded-lg w-[60%] text-center">
        {loading ? (
          <p>Loading quote...</p>
        ) : (
          <>
            {/* QUOTE BOX */}
            <div
              className="bg-zinc-800 relative py-2 px-6 rounded-2xl min-h-40 items-center justify-center flex overflow-hidden"
              onMouseMove={handleQuoteHover}
            >
              {/* QUOTE BOX Hover Glow Effect (Always Visible) */}
              <div
                className="absolute bg-zinc-200 blur-[100px] opacity-20 rounded-full transition-all duration-75"
                style={{
                  top: `${cursorPos.y - 100}px`,
                  left: `${cursorPos.x - 100}px`,
                  width: "200px",
                  height: "200px",
                  pointerEvents: "none",
                }}
              />

              <FaQuoteLeft className="absolute top-5 left-10" size={30} />
              <FaQuoteRight className="absolute bottom-5 right-10" size={30} />
              <p className="text-lg italic w-full">"{quote}"</p>
            </div>

            <p className="mt-2 font-bold text-right pr-4">- {author}</p>
          </>
        )}

        {/* INSANE BUTTON WITH HOVER + CLICK EFFECTS */}
        <div className="relative mt-6">
          {/* Click Effect: Shockwave */}
          {clicked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-zinc-700 to-zinc-400 opacity-40 animate-ping"></div>
            </div>
          )}

          {/* The BUTTON itself */}
          <button
            onClick={fetchQuote}
            onMouseMove={handleButtonHover}
            className="relative z-10 bg-zinc-700 text-white px-10 py-2 rounded-lg cursor-pointer 
            transition-transform transform active:scale-95 border-transparent hover:border-zinc-500 
            overflow-hidden"
          >
            {/* Button Hover Glow Effect (Always Visible) */}
            <div
              className="absolute rounded-full bg-zinc-200 opacity-20 blur-[50px] transition-all duration-75"
              style={{
                top: `${buttonHover.y - 50}px`,
                left: `${buttonHover.x - 50}px`,
                width: "100px",
                height: "100px",
                pointerEvents: "none",
              }}
            />

            Generate new quote
          </button>
        </div>
      </div>
    </div>
  );
}
