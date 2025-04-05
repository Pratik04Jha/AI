import React from "react";
import Products from "../components/Products";
import { GiSlowBlob } from "react-icons/gi";
import { FaPhotoVideo, FaImages } from "react-icons/fa";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { MdOutlineVideoSettings } from "react-icons/md";
import Footer from "../components/Footer";
import { TbBackground } from "react-icons/tb";

const page = () => {
  const data = [
    {
        imageIcon: <GiSlowBlob color="#D1D1D1" className="" size={70} />, 
        productSrc: "/",
        heading: "ChatBOT",
      },
      {
        imageIcon: <FaImages color="#D1D1D1" className="" size={70} />, 
        productSrc: "/ImageGenerator",
        heading: "Image generator",
      },
      {
        imageIcon: <MdOutlineSelfImprovement color="#D1D1D1" className="" size={80}/>, 
        productSrc: "/",
        heading: "Image enhancer",
      },
      {
        imageIcon: <BsFillChatQuoteFill color="#D1D1D1" className="" size={70}/>, 
        productSrc: "/QuoteGenerator",
        heading: "Quotes generator",
      },
      {
        imageIcon: <TbBackground color="#D1D1D1" className="" size={70}/>, 
        productSrc: "/",
        heading: "Background remover",
      },
      {
        imageIcon: <FaPhotoVideo color="#D1D1D1" className="" size={70} />, 
        productSrc: "/",
        heading: "Video generator",
      },
  ];

  return (
    <div className="flex flex-col items-center h-screen pl-60 pb-15 pt-15 text-white">
      <div className="px-60 flex flex-col items-center">
        <h1 className="text-7xl font-bold py-5 mt-4">Explore</h1>
        <p className="w-[70%] text-white/90 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          reiciendis inventore facilis labore, cupiditate minima.{" "}
        </p>
      </div>
      <div className="px-60 py-5">
        <input
          type="text"
          className="h-10 w-160 px-6 py-6 mt-3 rounded-lg border-1 border-white/50 outline-none"
          placeholder="Search the products here"
        />
      </div>
      <div className="flex h-full flex-wrap w-full px-20 justify-center gap-8 py-10 pb-50">
        {data.map((item, index) => (
          // Make sure to return the component inside the map function
          <Products key={index} data={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default page;
