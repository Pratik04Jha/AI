"use client";
import React from "react";
import PromoteButtons from "../components/PromoteButtons";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import Footer from "../components/Footer";
import FadeInWhenVisible from "../components/FadeInWhenVisible"; // ← new

const page = () => {
  const data = [
    {
      icon: <MdOutlineExplore color="#D1D1D1" size={50} />,
      title: "Explore",
      src: "/Explore",
      des: "Dive into the world of AI tools made for creators. Discover what you can build, enhance, and imagine with just a few clicks.",
    },
    {
      icon: <IoMdInformationCircleOutline color="#D1D1D1" size={50} />,
      title: "About",
      src: "/About",
      des: "Learn the story behind this AI world — built by a 16-year-old with a passion for code, creativity, and endless possibilities. Read how I made this",
    },
  ];

  return (
    <div
      className="flex flex-col items-center text-white
      h-auto min-h-screen
      pl-0 pt-20 px-4
      lg:pl-60 lg:pt-25 lg:px-0 lg:h-screen lg:pb-15"
    >
      <FadeInWhenVisible>
        <h1 className="masked text-4xl lg:text-7xl font-bold pb-6 lg:pb-10 text-center">
          Zenius
        </h1>
      </FadeInWhenVisible>

      <FadeInWhenVisible delay={0.2}>
        <div className="w-full flex justify-center">
          <p className="w-full lg:w-1/2 text-center text-sm lg:text-base">
            <span className="font-semibold">
              Where imagination meets machine intelligence.
            </span>
            <br />
            From chatting with AI to creating stunning images, enhancing
            quality, and more — our smart tools help you work quicker, think
            sharper, and create better. No noise, just pure AI magic. Ready to
            begin? Let’s roll!
          </p>
        </div>
      </FadeInWhenVisible>

      <div
        className="flex flex-col lg:flex-row lg:flex-wrap justify-center items-center
        w-full gap-6 lg:gap-8 pt-10 lg:pt-20 px-2 lg:px-20 pb-20 lg:pb-50"
      >
        {data.map((item, index) => (
          <FadeInWhenVisible key={index} delay={0.3 + index * 0.2}>
            <PromoteButtons data={item} />
          </FadeInWhenVisible>
        ))}
      </div>

      <FadeInWhenVisible delay={0.6}>
        <div className="flex flex-col md:flex-row w-full justify-center gap-5 items-center pb-40 ">
          <h1 className="text-lg sm:text-xl md:text-2xl text-center md:text-left">
            Github repository –
          </h1>

          <button className="changed relative overflow-hidden text-base sm:text-lg md:text-2xl py-5 px-18 sm:py-4 sm:px-40 md:py-10 md:px-32 cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out bg-amber-50 text-black rounded-[100px] flex items-center justify-center">
            <span className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 text-white mix-blend-difference whitespace-nowrap">
              View code
            </span>
          </button>
        </div>
      </FadeInWhenVisible>

      <Footer />
    </div>
  );
};

export default page;
