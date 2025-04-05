"use client";
import { useState } from "react";
import { MdDownload } from "react-icons/md";
import { IoSend } from "react-icons/io5";

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
      className="relative w-full h-full rounded-xl overflow-hidden border border-zinc-700 bg-zinc-900"
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
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 z-10 p-[4px] rounded-lg bg-[#111113]/80 hover:bg-[#1a1a1d]"
          >
            <MdDownload color="#B4B4B4" size={24} />
          </a>
        </>
      ) : null}
    </div>
  );

  return (
    <div className="flex flex-col items-center pt-24 min-h-screen bg-zinc-900 lg:pl-60 px-4 justify-center sm:pb-35">
      <div className="flex flex-col lg:flex-row gap-4 mb-10 items-center justify-center w-full max-w-[900px]">
        <div className="w-full max-w-[400px] h-[410px]">
          {renderImageBox(imageSrcs[1], 1)}
        </div>

        <div className="flex flex-col gap-4 w-full max-w-[400px]">
          <div className="flex gap-4 flex-col sm:flex-row w-full">
            <div className="w-full sm:w-[50%] h-[200px]">
              {renderImageBox(imageSrcs[0], 0)}
            </div>
            <div className="w-full sm:w-[50%] h-[200px]">
              {renderImageBox(imageSrcs[2], 2)}
            </div>
          </div>
          <div className="w-full h-[200px]">
            {renderImageBox(imageSrcs[3], 3)}
          </div>
        </div>
      </div>

      {/* Textarea */}
      <div className="fixed bottom-10  w-full max-w-[800px] px-4">
        <div className="relative w-full">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full h-24 px-6 py-4 pr-14 text-white outline-none rounded-[30px] resize-none bg-zinc-800"
            placeholder="Eg: Generate an image of a futuristic city skyline with neon lights"
          />
          <button
            className="bg-white text-black p-2 flex items-center justify-center rounded-full absolute bottom-3 right-3"
            onClick={generateImage}
          >
            <IoSend />
          </button>
        </div>
      </div>
    </div>
  );
}
