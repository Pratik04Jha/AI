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
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const page = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    {
      imageIcon: <GiSlowBlob color="#D1D1D1" size={70} />,
      productSrc: "/",
      heading: "ChatBOT",
    },
    {
      imageIcon: <FaImages color="#D1D1D1" size={70} />,
      productSrc: "/ImageGenerator",
      heading: "Image generator",
    },
    {
      imageIcon: <MdOutlineSelfImprovement color="#D1D1D1" size={80} />,
      productSrc: "/ImageEnhancer",
      heading: "Image enhancer",
    },
    {
      imageIcon: <BsFillChatQuoteFill color="#D1D1D1" size={70} />,
      productSrc: "/QuoteGenerator",
      heading: "Quotes generator",
    },
    {
      imageIcon: <TbBackground color="#D1D1D1" size={70} />,
      productSrc: "/BackgroundRemover",
      heading: "Background remover",
    },
    {
      imageIcon: <FaPhotoVideo color="#D1D1D1" size={70} />,
      productSrc: "/VideoGenerator",
      heading: "Video generator",
    },
  ];

  const filteredData = data.filter((item) =>
    item.heading.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center min-h-screen sm:pl-60 pt-20 sm:pt-15 text-white">
      <motion.div
        className="w-full sm:px-60 px-6 flex flex-col items-center text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <h1 className="text-4xl sm:text-7xl font-bold py-5 mt-4">Explore</h1>
        <p className="sm:w-[70%] text-sm sm:text-base text-white/90">
          Step into the ever-evolving, mind-blowing world of AI tools crafted
          specifically for creators like you — a realm where imagination meets
          innovation, and with just a few effortless clicks, you can build
          powerful digital experiences, enhance your creative projects to pro
          levels, and breathe life into ideas that once only lived in your
          wildest dreams.
        </p>
      </motion.div>

      {/* Search Input */}
      <motion.div
        className="w-full sm:px-60 px-6 py-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        custom={2}
      >
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-10 w-full sm:w-[100%] px-4 sm:px-6 py-2 rounded-lg border border-white/50 outline-none bg-transparent text-white placeholder-white/50"
          placeholder="Search the products here"
        />
      </motion.div>

      {/* Products Grid */}
      <div className="w-full sm:px-20 px-4 flex flex-wrap justify-center gap-6 sm:gap-8 py-10 pb-40">
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              custom={index + 3}
            >
              <Products data={item} />
            </motion.div>
          ))
        ) : (
          <p className="text-white/70 w-1/2 text-center text-lg">
            No result found...
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default page;
