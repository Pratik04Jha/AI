"use client";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { motion } from "framer-motion";

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
    setTimeout(() => setClicked(false), 500);

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

  const handleQuoteHover = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleButtonHover = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setButtonHover({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      isHovering: true,
    });
  };

  return (
    <motion.div
      className="flex flex-col items-center mt-10 h-screen md:pl-60 md:pt-15 md:pb-15 px-4 justify-center bg-black"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="text-white p-4 md:p-6 rounded-lg w-[90%] md:w-[60%] text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
      >
        {loading ? (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="min-h-48 flex items-center justify-center"
          >
            <p className="text-center">Loading quote...</p>
          </motion.p>
        ) : (
          <>
            <motion.div
              className="bg-zinc-900/20 relative py-4 px-4 rounded-2xl min-h-40 items-center justify-center flex overflow-hidden"
              onMouseMove={handleQuoteHover}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            >
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
              <FaQuoteLeft className="absolute top-3 left-4 md:top-5 md:left-10" size={20} />
              <FaQuoteRight className="absolute bottom-3 right-4 md:bottom-5 md:right-10" size={20} />
              <p className="text-base md:text-lg italic w-full">"{quote}"</p>
            </motion.div>
            <motion.p
              className="mt-2 font-bold text-right pr-4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              - {author}
            </motion.p>
          </>
        )}

        <div className="relative mt-6">
          {clicked && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-24 h-24 rounded-full bg-gradient-to-r from-zinc-700 to-zinc-400 opacity-40 animate-ping"></div>
            </div>
          )}

          <motion.button
            onClick={fetchQuote}
            onMouseMove={handleButtonHover}
            className="relative z-10 bg-zinc-900 text-white px-8 py-2 rounded-lg cursor-pointer 
            transition-transform transform active:scale-95 border-transparent hover:border-zinc-800 
            overflow-hidden text-sm md:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className="absolute rounded-full bg-zinc-900 opacity-20 blur-[50px] transition-all duration-75"
              style={{
                top: `${buttonHover.y - 50}px`,
                left: `${buttonHover.x - 50}px`,
                width: "100px",
                height: "100px",
                pointerEvents: "none",
              }}
            />
            Generate new quote
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}