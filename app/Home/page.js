"use client";
import React from "react";
import PromoteButtons from "../components/PromoteButtons";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import Footer from "../components/Footer";

const page = () => {
  const data = [
    {
      icon: <MdOutlineExplore color="#D1D1D1" size={50} />,
      title: "Explore",
      src: "/Explore",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis inventore facilis labore, cupiditate minima.",
    },
    {
      icon: (
        <IoMdInformationCircleOutline color="#D1D1D1" size={50} />
      ),
      title: "About",
      src: "/About",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit reiciendis inventore facilis labore, cupiditate minima.",
    },
  ];

  return (
    <div className="flex flex-col items-center text-white
      h-auto min-h-screen
      pl-0 pt-20 px-4
      lg:pl-60 lg:pt-25 lg:px-0 lg:h-screen lg:pb-15">
      
      <h1 className="masked text-4xl lg:text-7xl font-bold pb-6 lg:pb-10 text-center">
        Broke AI
      </h1>

      <p className="w-full lg:w-1/2 text-center text-sm lg:text-base">
        <span className="font-semibold">
          Welcome to Broke AI – Where AI Works for You! 🚀
        </span>
        <br />
        From chatbots to image generation, background removal, and more—our AI
        tools make your life easier, faster, and smarter. No fluff, just
        powerful AI at your fingertips. Ready to level up? Let’s go! 💡✨
      </p>

      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center
        w-full gap-6 lg:gap-8 pt-10 lg:pt-20 px-2 lg:px-20 pb-20 lg:pb-50">
        {data.map((item, index) => (
          <PromoteButtons key={index} data={item} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default page;
