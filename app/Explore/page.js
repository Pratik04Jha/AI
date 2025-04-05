import React from "react";
import Products from "../components/Products";
import { GiSlowBlob } from "react-icons/gi";
import { FaPhotoVideo, FaImages } from "react-icons/fa";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { MdOutlineSelfImprovement } from "react-icons/md";
import Footer from "../components/Footer";
import { TbBackground } from "react-icons/tb";

const page = () => {
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
      productSrc: "/",
      heading: "Image enhancer",
    },
    {
      imageIcon: <BsFillChatQuoteFill color="#D1D1D1" size={70} />,
      productSrc: "/QuoteGenerator",
      heading: "Quotes generator",
    },
    {
      imageIcon: <TbBackground color="#D1D1D1" size={70} />,
      productSrc: "/",
      heading: "Background remover",
    },
    {
      imageIcon: <FaPhotoVideo color="#D1D1D1" size={70} />,
      productSrc: "/",
      heading: "Video generator",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen sm:pl-60 pt-20 sm:pt-15 text-white">
      
      {/* Header Section */}
      <div className="w-full sm:px-60 px-6 flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-7xl font-bold py-5 mt-4">Explore</h1>
        <p className="sm:w-[70%] text-sm sm:text-base text-white/90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          reiciendis inventore facilis labore, cupiditate minima.
        </p>
      </div>

      {/* Search Input */}
      <div className="w-full sm:px-60 px-6 py-5">
        <input
          type="text"
          className="h-10 w-full sm:w-[100%] px-4 sm:px-6 py-2 rounded-lg border border-white/50 outline-none bg-transparent text-white placeholder-white/50"
          placeholder="Search the products here"
        />
      </div>

      {/* Products Grid */}
      <div className="w-full sm:px-20 px-4 flex flex-wrap justify-center gap-6 sm:gap-8 py-10">
        {data.map((item, index) => (
          <Products key={index} data={item} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default page;
