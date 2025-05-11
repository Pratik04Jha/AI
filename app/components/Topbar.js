"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { AiOutlineProduct } from "react-icons/ai";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { motion } from 'framer-motion';

const Topbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);

  const dropdownRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
        setMobileMenuOpen(false);
      }
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowFeedbackModal(false);
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
    <>
      <div className="flex h-15 w-full fixed z-[9999999] top-0 left-0 px-6 justify-between items-center bg-black text-white sm:pl-65 pl-20">
        <button
          className="text-white py-1 px-6 rounded-2xl border-1 border-white/50 cursor-pointer"
          onClick={() => setShowFeedbackModal(true)}
        >
          Feedback
        </button>

        <div className="hidden sm:flex gap-5 items-center justify-end w-full" ref={dropdownRef}>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-white rounded-lg font-extralight cursor-pointer"
          >
            {/* <FiSun size={25} /> */}
          </button>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-white rounded-lg font-bold cursor-pointer"
          >
            <AiOutlineProduct size={25} />
          </button>
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="text-white rounded-lg font-extralight cursor-pointer"
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

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-[99999999] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            ref={modalRef}
            className="bg-[#1c1c1f] text-white rounded-xl w-full max-w-md p-6 relative shadow-lg border border-zinc-800"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <button
              className="absolute top-3 right-3 text-zinc-400 cursor-pointer"
              onClick={() => setShowFeedbackModal(false)}
            >
              <FaTimes size={18} />
            </button>
            <h2 className="text-xl font-semibold mb-4">Send Feedback</h2>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thanks for your feedback! 🙏');
                setShowFeedbackModal(false);
              }}
              className="space-y-4"
            >
              <div className="">
                <label className="block mb-1 text-sm">Your Email</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 rounded-md bg-black/30 border border-white/20 focus:outline-none "
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Feedback</label>
                <textarea
                  required
                  className="w-full px-4 py-2 resize-none rounded-md bg-black/30 border border-white/20 focus:outline-none "
                  placeholder="Share your thoughts or issues..."
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4  cursor-pointer bg-white transition rounded-lg font-semibold text-black"
              >
                Submit Feedback
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Topbar;
