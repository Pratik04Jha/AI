"use client";
import React from "react";
import PromoteButtons from "../components/PromoteButtons";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import Footer from "../components/Footer";
const page = () => {
  const data = [
    {
      icon: <MdOutlineExplore color="#D1D1D1" className="" size={50} />,
      title: "Explore",
      src: "/Explore",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis inventore facilis labore, cupiditate minima.",
    },
    {
      icon: (
        <IoMdInformationCircleOutline color="#D1D1D1" className="" size={50} />
      ),
      title: "About",
      src: "/About",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis inventore facilis labore, cupiditate minima.",
    },
  ];

  return (
    <div className="flex flex-col items-center h-screen pl-60 pb-15 pt-25 text-white">
      <h1 className="masked text-7xl font-bold pb-10">Broke AI</h1>
      <p className="w-1/2 text-center">
        <span className="font-semibold">
          Welcome to Broke AI – Where AI Works for You! 🚀
        </span>
        <br />
        From chatbots to image generation, background removal, and more—our AI
        tools make your life easier, faster, and smarter. No fluff, just
        powerful AI at your fingertips. Ready to level up? Let’s go! 💡✨
      </p>
      <div className="flex h-full flex-wrap w-full px-20 justify-center gap-8 pt-20 pb-50">
        {data.map((item, index) => (
          <PromoteButtons key={index} data={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default page;
