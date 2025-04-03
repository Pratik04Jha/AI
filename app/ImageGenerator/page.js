"use client";
import { useState } from "react";
import { MdDownload } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { FaImages } from "react-icons/fa";

export default function Page() {
  const [prompt, setPrompt] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setImageSrc(null);

    try {
      const response = await fetch("/api/imageSave", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const blob = await response.blob();
      const imageUrl = URL.createObjectURL(blob);
      setImageSrc(imageUrl);
    } catch (error) {
      console.error("Error generating image:", error);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents newline when pressing Enter
      generateImage();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen pl-60 pb-15 pt-0">
      {imageSrc === null && !loading && (
        <div className="flex flex-col gap-4 justify-center items-center h-full text-gray-400 pb-15">
          <FaImages color="white" size={50} />
          <h1 className="font-bold text-4xl text-white">
          AI Image Creator
          </h1>
          <p className="text-center text-white/90 w-1/2">
            "🎨 Welcome! I'm your AI-powered image creator—turning imagination
            into stunning visuals. Describe your vision, and I'll bring it to
            life with precision and creativity. Let’s craft something
            extraordinary! 🚀
          </p>
        </div>
      )}

      {loading && (
        <p className="text-white text-xl font-bold">
          Generating image... Please wait.
        </p>
      )}

      {imageSrc && (
        <div className="relative">
          <div className="pb-20 relative">
            <img
              src={imageSrc}
              alt="Generated"
              className="w-[400px] h-[400px] rounded-lg border-1 border-zinc-700"
            />
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-22 right-2 z-1000000 p-[4px] rounded-lg bg-[#111113]"
            >
              <MdDownload color="#B4B4B4" size={30} />
            </a>
          </div>
        </div>
      )}

      <div className="flex fixed bottom-10 left-[50%] -translate-x-1/2">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 h-25 px-6 py-3 pb-10 pr-15 text-white outline-none rounded-[30px] resize-none w-200 bg-zinc-800 ml-60 relative"
          type="text"
          placeholder="Eg: Generate an image of a futuristic city skyline with neon lights"
        />
        <button
          className="bg-white text-black p-2 outline-none flex items-center justify-center rounded-full absolute bottom-3 right-3 cursor-pointer"
          onClick={generateImage}
        >
          <IoSend />
        </button>
      </div>
    </div>
  );
}
