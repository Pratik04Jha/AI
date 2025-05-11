"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { AiOutlineProduct } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlineFeedback } from "react-icons/md";
import { FiSun, FiMoon } from "react-icons/fi";


const Topbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownItems = [
    { title: "Chat with AI", href: "/" },
    { title: "Generate Images", href: "/ImageGenerator" },
    { title: "Enhance Images", href: "/ImageEnhancer" },
    { title: "Remove BG", href: "/" },
    { title: "Generate Quotes", href: "/QuoteGenerator" },
  ];

  return (
    <div className="flex h-15 w-full fixed z-[9999999] top-0 left-0 px-6 justify-between items-center bg-black text-white sm:pl-65 pl-20 ">
      <button className="text-white py-1 px-6 rounded-2xl border-1 border-white/50 cursor-pointer">Feedback</button>
      <div className="hidden sm:flex gap-5 items-center justify-end w-full " ref={dropdownRef}>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className=" text-white rounded-lg  font-extralight cursor-pointer"
        >
          <FiSun size={25} />
        </button>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className=" text-white rounded-lg  font-bold cursor-pointer"
        >
          <AiOutlineProduct size={25} />
        </button>
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className=" text-white rounded-lg  font-extralight cursor-pointer"
        >
          <FaRegCircleUser size={23} />
        </button>

        <div
          className={`absolute right-6 top-16 w-48 bg-[#1c1c1f] border border-zinc-800 rounded-lg overflow-hidden transition-all duration-300 z-50
          ${
            showDropdown
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-2 scale-95 pointer-events-none"
          }`}
        >
          {dropdownItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setShowDropdown(false)}
              className="block text-white text-sm px-4 py-2 hover:bg-zinc-700 transition-all duration-200"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>

      <div className="sm:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="bg-white text-black rounded-lg py-1 px-4 font-semibold cursor-pointer"
        >
          {mobileMenuOpen ? <FaTimes /> : "Products"}
        </button>
      </div>

      <div
        className={`sm:hidden absolute top-16 left-0 w-full bg-[#1c1c1f] border-t border-zinc-800 shadow-lg transition-all duration-300 z-40
        ${mobileMenuOpen ? "block" : "hidden"}`}
      >
        {dropdownItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className="block text-white text-sm px-6 py-4 hover:bg-zinc-700 transition-all duration-200"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
