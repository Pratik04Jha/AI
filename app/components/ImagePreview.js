"use client";
import SkeletonLoader from "./SkeletonLoader";
import { useState } from "react";
import { MdDownload } from "react-icons/md";
import { motion } from "framer-motion";

const ImagePreview = (props) => {
  const [cursorPos1, setCursorPos1] = useState({ x: 0, y: 0 });
  const [cursorPos2, setCursorPos2] = useState({ x: 0, y: 0 });
  const [hovering1, setHovering1] = useState(false);
  const [hovering2, setHovering2] = useState(false);

  const handleMouseMove1 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos1({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseMove2 = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPos2({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const renderImageBox = ({
    src,
    hovering,
    cursorPos,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
    label,
    delay = 0,
    loading = false,
  }) => (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="h-[45%] md:h-[100%] w-full bg-zinc-800 rounded-lg overflow-hidden relative"
      onMouseMove={onMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Shiny blob */}
      <div
        className="absolute bg-zinc-200 blur-[200px] opacity-10 rounded-full transition-all duration-50"
        style={{
          top: `${cursorPos.y - 250}px`,
          left: `${cursorPos.x - 250}px`,
          width: "500px",
          height: "500px",
          pointerEvents: "none",
        }}
      />

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: delay + 0.2, duration: 0.5 }}
        className="w-full h-[10%] flex items-center justify-center"
      >
        <h1>{label}</h1>
      </motion.div>

      {/* Image / Loader / Message */}
      <div className="h-[90%] w-full flex justify-center items-center relative">
        {loading ? (
          <SkeletonLoader />
        ) : src ? (
          <>
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src={src}
              alt=""
              className="max-h-full max-w-full object-contain"
            />
            {hovering && (
              <motion.a
                href={src}
                download
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-4 right-4 z-10 p-[6px] rounded-lg bg-[#111113]/80 hover:bg-[#1a1a1d]"
              >
                <MdDownload color="#B4B4B4" size={24} />
              </motion.a>
            )}
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.3, duration: 0.4 }}
            className="text-gray-400"
          >
            No Image Selected
          </motion.div>
        )}
      </div>
    </motion.div>
  );

  return (
    <div className="flex justify-center h-screen pb-15 text-white w-full">
      <div className="h-[75%] mt-15 w-full flex flex-col md:flex-row justify-center items-center gap-5">
        {/* Uploaded Image */}
        {renderImageBox({
          src: props.uploaded,
          hovering: hovering1,
          cursorPos: cursorPos1,
          onMouseMove: handleMouseMove1,
          onMouseEnter: () => setHovering1(true),
          onMouseLeave: () => setHovering1(false),
          label: "Uploaded image",
          delay: 0.2,
          loading: false,
        })}

        {/* Enhanced Image */}
        {renderImageBox({
          src: props.enhanced,
          hovering: hovering2,
          cursorPos: cursorPos2,
          onMouseMove: handleMouseMove2,
          onMouseEnter: () => setHovering2(true),
          onMouseLeave: () => setHovering2(false),
          label: "Enhanced image",
          delay: 0.4,
          loading: props.loading,
        })}
      </div>
    </div>
  );
};

export default ImagePreview;
