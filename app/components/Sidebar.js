import React from "react";
import { TbSquareToggle } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { GiSlowBlob } from "react-icons/gi";
import { MdOutlineExplore } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import Link from "next/link";
import Links from "./Links";
import { TbMessageChatbot } from "react-icons/tb";
import { FaImages } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import { MdOutlineSelfImprovement } from "react-icons/md";
import { TbBackground } from "react-icons/tb";

const Sidebar = () => {
  const LinksData = [
    {
      icon: <TbMessageChatbot />,
      title: "ChatBot",
      src: "/"
    },
    {
      icon: <FaImages />,
      title: "Image generator",
      src: "/ImageGenerator"
    },
    {
      icon: <FaQuoteLeft />,
      title: "Quote generator",
      src: "/QuoteGenerator"
    },
    {
      icon: <MdOutlineSelfImprovement />,
      title: "Image enhancer",
      src: "/ImageEnhancer"
    },
    {
      icon: <TbBackground />,
      title: "Background remover",
      src: "/"
    }
  ]
  return (
    <aside className="w-60 h-screen fixed top-0 left-0 bg-zinc-950/50 border-r-1 border-white/10">
      <div className="flex justify-between pt-5 items-center px-3">
        <div className="p-2 rounded-lg hover:bg-zinc-800 flex justify-center item-center">
          <TbSquareToggle
            color="#D1D1D1"
            size={25}
            className="cursor-pointer "
          />
        </div>
        <div className="flex gap-3 ">
          <div className="p-2 rounded-lg hover:bg-zinc-800 flex justify-center item-center">
            <IoSearch color="#D1D1D1" size={25} className="cursor-pointer" />
          </div>
          <div className="p-2 rounded-lg hover:bg-zinc-800 flex justify-center item-center">
            <FaRegEdit color="#D1D1D1" size={25} className="cursor-pointer" />
          </div>
        </div>
      </div>

      <button className="py-2 w-full text-[#D1D1D1] text-left rounded-lg mt-5 cursor-pointer flex gap-2 px-4 items-center hover:bg-zinc-800">
        <GiSlowBlob color="#D1D1D1" /> Broke AI
      </button>
      <Link href="/Explore">
        <button className="py-2 w-full text-[#D1D1D1] text-left rounded-lg cursor-pointer flex gap-2 px-4 items-center hover:bg-zinc-800">
          <MdOutlineExplore color="#D1D1D1" />
          Explore
        </button>
      </Link>

      <p className="text-white text-[15px] font-semibold pl-5 mt-2 ">
        Products
      </p>
      <div className="px-2 mt-2">
        {LinksData.map((items, index) => (
          <Links key={index} LinksData={items} />
        ))}
      </div>

      <button className="absolute bottom-0 py-3 w-full text-[#c3c2c2] text-left mt-5 cursor-pointer flex gap-2 px-4 items-center hover:bg-zinc-900/100">
        <IoMdSettings color="#c3c2c2" />
        Settings
      </button>
    </aside>
  );
};

export default Sidebar;
