"use client";
import React, { useState } from "react";
import Products from "../components/Products";
import { GiSlowBlob } from "react-icons/gi";
import { FaPhotoVideo, FaImages } from "react-icons/fa";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { MdOutlineSelfImprovement } from "react-icons/md";
import Footer from "../components/Footer";
import { TbBackground } from "react-icons/tb";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    {
      imageIcon: <GiSlowBlob color="#D1D1D1" size={70} />,
      productSrc: "/",
      heading: "ChatBOT",
      description: "Talk with an intelligent AI that answers like your genius bro.",
    },
    {
      imageIcon: <FaImages color="#D1D1D1" size={70} />,
      productSrc: "/ImageGenerator",
      heading: "Image generator",
      description: "Turn words into beautiful images using AI magic. Literally.",
    },
    {
      imageIcon: <MdOutlineSelfImprovement color="#D1D1D1" size={80} />,
      productSrc: "/ImageEnhancer",
      heading: "Image enhancer",
      description: "Sharpen, upscale, and HD-ify your images with one click.",
    },
    {
      imageIcon: <BsFillChatQuoteFill color="#D1D1D1" size={70} />,
      productSrc: "/QuoteGenerator",
      heading: "Quotes generator",
      description: "Generate deep, inspirational, or funny quotes in seconds.",
    },
    {
      imageIcon: <TbBackground color="#D1D1D1" size={70} />,
      productSrc: "/BackgroundRemover",
      heading: "Background remover",
      description: "Remove any image background instantly, clean and crisp.",
    },
    {
      imageIcon: <FaPhotoVideo color="#D1D1D1" size={70} />,
      productSrc: "/VideoGenerator",
      heading: "Video generator",
      description: "Create AI-powered videos from text, images, or your imagination.",
    },
  ];

  const filteredData = data.filter((item) =>
    item.heading.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex w-full flex-col items-center min-h-screen sm:pl-60 pt-24 px-4 text-white bg-black transition-all duration-300 ease-in-out">
      {/* 🚀 BIG BADASS HEADING */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-4xl sm:text-6xl font-extrabold text-center mb-12 text-white drop-shadow-xl tracking-tight"
      >
        Explore Tools
      </motion.h1>

      {/* 🔍 Search Input */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full sm:w-1/2 mb-10"
      >
        <input
          type="text"
          placeholder="Search your tool..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-3 px-6 rounded-xl bg-zinc-900/30 border border-zinc-800 text-white placeholder-white/60 focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700 shadow-xl transition-all duration-300"
        />
      </motion.div>

      {/* 🧩 Products Grid */}
      <div className="w-full sm:px-20 flex flex-wrap justify-center gap-6 pb-40">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              custom={index + 3}
              className="hover:scale-105 transition-transform duration-300 ease-out"
            >
              <Products data={item} />
            </motion.div>
          ))
        ) : (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white/70 w-full text-center text-lg mt-20"
          >
            No result found... 🫠 Try another word!
          </motion.p>
        )}
      </div>

      {/* 🦶 Footer */}
      <Footer />
    </div>
  );
};

export default Page;
