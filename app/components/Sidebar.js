"use client";
import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { TbMessageChatbot, TbBackground } from "react-icons/tb";
import {
  IoMdInformationCircleOutline,
  IoMdClose,
} from "react-icons/io";
import { FaRegEdit, FaImages, FaPhotoVideo } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";
import { GiSlowBlob } from "react-icons/gi";
import { MdOutlineExplore, MdOutlineSelfImprovement } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import Link from "next/link";
import { GrUpgrade } from "react-icons/gr";

const Sidebar = () => {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const dropdownRef = useRef(null);

  const LinksData = [
    { icon: <TbMessageChatbot />, title: "ChatBot", src: "/" },
    { icon: <FaImages />, title: "Image generator", src: "/ImageGenerator" },
    { icon: <FaQuoteLeft />, title: "Quote generator", src: "/QuoteGenerator" },
    {
      icon: <MdOutlineSelfImprovement />,
      title: "Image enhancer",
      src: "/ImageEnhancer",
    },
    {
      icon: <TbBackground />,
      title: "Background remover",
      src: "/BackgroundRemover",
    },
    {
      icon: <FaPhotoVideo />,
      title: "Video generator",
      src: "/VideoGenerator",
    },
  ];

  const filteredLinks = LinksData.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="md:hidden fixed top-2 left-4 z-[100000000]">
        <button
          className="text-white bg-zinc-800 p-2 rounded-md px-4"
          onClick={() => setIsSidebarOpen(true)}
        >
          ☰
        </button>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[9999999] md:hidden w-[320px] h-screen"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen bg-[#111113] border-r border-white/10 z-[100000000]
          transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:w-60 w-[75%] sm:w-[60%]`}
      >
        <div className="flex justify-between pt-5 items-center px-3 relative">
          {!isSearching && (
            <Link href="/Home">
              <div className="p-2 rounded-lg hover:bg-zinc-800 flex items-center transition-all cursor-pointer">
                <GiSlowBlob color="#D1D1D1" size={25} />
              </div>
            </Link>
          )}

          <div className="flex gap-2 items-center">
            {!isSearching && (
              <>
                <div
                  className="p-2 rounded-lg hover:bg-zinc-800 transition-all cursor-pointer"
                  onClick={() => setIsSearching(true)}
                >
                  <IoSearch color="#D1D1D1" size={25} />
                </div>

                <div className="relative" ref={dropdownRef}>
                  <div
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="p-2 rounded-lg hover:bg-zinc-800 cursor-pointer mr-4 sm:mr-0 md:mr-0"
                  >
                    <FaRegEdit color="#D1D1D1" size={25} />
                  </div>

                  <div
                    className={`absolute right-0 top-12 bg-[#1c1c1f] border border-zinc-800 rounded-lg shadow-xl overflow-hidden transition-all duration-300 z-50
                    ${
                      showDropdown
                        ? "opacity-100 scale-100 w-40"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  >
                    {[
                      { title: "Chat with AI", href: "/" },
                      { title: "Generate Images", href: "/ImageGenerator" },
                      { title: "Enhance Images", href: "/ImageEnhancer" },
                      { title: "Remove BG", href: "/" },
                      { title: "Generate Quotes", href: "/QuoteGenerator" },
                    ].map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        className="block text-white text-sm px-4 py-2 hover:bg-zinc-700 transition-all"
                        onClick={() => setShowDropdown(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </>
            )}

            {isSearching && (
              <div
                className="p-2 rounded-lg hover:bg-zinc-800 cursor-pointer"
                onClick={() => {
                  setIsSearching(false);
                  setSearch("");
                }}
              >
                <IoMdClose color="#D1D1D1" size={22} />
              </div>
            )}

            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={`bg-zinc-800 text-white px-3 py-1 text-sm rounded transition-all duration-300 ease-in-out outline-none
                ${
                  isSearching
                    ? "w-36 opacity-100"
                    : "w-0 opacity-0 pointer-events-none"
                }`}
            />
          </div>

          <div className="md:hidden absolute top-5 bg-zinc-800 p-2 rounded-lg right-2">
            <IoMdClose
              className="text-white cursor-pointer"
              size={24}
              onClick={() => setIsSidebarOpen(false)}
            />
          </div>
        </div>

        <Link href="/Home">
          <button
            className={`cursor-pointer py-2 w-full text-left rounded-lg mt-5 flex gap-2 px-4 items-center transition-all
              ${
                pathname === "/Home"
                  ? "bg-zinc-800 text-white"
                  : "text-[#D1D1D1] hover:bg-zinc-800"
              }`}
          >
            <GiSlowBlob />
            Zenius AI
          </button>
        </Link>
        <Link href="/Explore">
          <button
            className={`cursor-pointer py-2 w-full text-left rounded-lg flex gap-2 px-4 items-center transition-all
              ${
                pathname === "/Explore"
                  ? "bg-zinc-800 text-white"
                  : "text-[#D1D1D1] hover:bg-zinc-800"
              }`}
          >
            <MdOutlineExplore />
            Explore
          </button>
        </Link>
        <Link href="/About">
          <button
            className={`cursor-pointer py-2 w-full text-left rounded-lg flex gap-2 px-4 items-center transition-all
              ${
                pathname === "/About"
                  ? "bg-zinc-800 text-white"
                  : "text-[#D1D1D1] hover:bg-zinc-800"
              }`}
          >
            <IoMdInformationCircleOutline />
            About
          </button>
        </Link>

        <p className="text-white text-[15px] font-semibold pl-5 mt-2">
          Products
        </p>
        <div className="px-2 mt-2">
          {filteredLinks.length > 0 ? (
            filteredLinks.map((item, index) => (
              <Link key={index} href={item.src} className="cursor-pointer">
                <button
                  className={`w-full flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all cursor-pointer
                    ${
                      pathname === item.src
                        ? "bg-zinc-800 text-white"
                        : "text-[#D1D1D1] hover:bg-zinc-800"
                    }`}
                >
                  {item.icon} {item.title}
                </button>
              </Link>
            ))
          ) : (
            <p className="text-sm text-gray-400 px-4 py-2">No results found.</p>
          )}
        </div>
        <Link href="/UpgradeToPro">
          <button className="absolute bottom-0 py-3 cursor-pointer w-full text-[#c3c2c2] text-left flex gap-2 px-4 items-center hover:bg-zinc-900/100">
            <GrUpgrade />
            Upgrade to Pro
          </button>
        </Link>
      </aside>
    </>
  );
};

export default Sidebar;
