"use client";
import { useState } from "react";
import { MdDownload } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Page() {
  const [prompt, setPrompt] = useState("");
  const [imageSrcs, setImageSrcs] = useState([null, null, null, null]);
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setImageSrcs([null, null, null, null]);

    try {
      const imagePromises = Array.from({ length: 4 }, () =>
        fetch("/api/imageSave", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt }),
        }).then((res) => res.blob())
      );

      const blobs = await Promise.all(imagePromises);
      const imageUrls = blobs.map((blob) => URL.createObjectURL(blob));
      setImageSrcs(imageUrls);
    } catch (error) {
      console.error("Error generating images:", error);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      generateImage();
    }
  };

  const renderSkeleton = () => (
    <div className="animate-pulse bg-zinc-800 w-full h-full rounded-xl border border-zinc-700" />
  );

  const renderImageBox = (src, index) => (
    <div
      key={index}
      className="relative group w-full h-full rounded-xl overflow-hidden border border-zinc-700 bg-black"
    >
      {loading ? (
        renderSkeleton()
      ) : src ? (
        <>
          <img
            src={src}
            alt="Generated"
            className="w-full h-full object-cover rounded-xl fade-in"
          />
          <a
            href={src}
            download={`generated-image-${index + 1}.png`}
            className="absolute bottom-2 right-2 z-10 p-[4px] rounded-lg bg-[#111113]/80 hover:bg-[#1a1a1d] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <MdDownload color="#B4B4B4" size={24} />
          </a>
        </>
      ) : null}
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center pt-24 min-h-screen bg-black lg:pl-60 px-4 justify-center sm:pb-35 pb-40"
    >
      <div className="flex flex-col lg:flex-row gap-4 mb-10 items-center justify-center w-full max-w-[900px]">
        <div className="imagebox w-full max-w-[400px] h-[410px]">
          {renderImageBox(imageSrcs[1], 1)}
        </div>

        <div className="flex flex-col gap-4 w-full max-w-[400px]">
          <div className="flex gap-4 flex-col sm:flex-row w-full">
            <div className="imagebox w-full sm:w-[50%] h-[200px]">
              {renderImageBox(imageSrcs[0], 0)}
            </div>
            <div className="imagebox w-full sm:w-[50%] h-[200px]">
              {renderImageBox(imageSrcs[2], 2)}
            </div>
          </div>
          <div className="imagebox w-full h-[200px]">
            {renderImageBox(imageSrcs[3], 3)}
          </div>
        </div>
      </div>

      {/* Textarea */}
      <div className="fixed bottom-10 w-full max-w-[850px] px-4">
        <div className="relative w-full">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 h-30 min-w-full px-5 py-3 pb-10 pr-14 outline-none rounded-[10px] resize-none bg-[#050505] border-1 border-zinc-700 text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-zinc-600/30 focus:ring-offset-0 focus:ring-offset-[#050505]"
            placeholder="Eg: Generate an image of a futuristic city skyline with neon lights"
          />
          <button
            className="bg-white text-black p-2 flex items-center justify-center rounded-[10px] absolute bottom-4 right-3"
            onClick={generateImage}
          >
            <IoSend />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
