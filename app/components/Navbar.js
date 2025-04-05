import React from "react";

const Navbar = () => {
  return (
    <nav className="
      fixed bottom-0 w-full text-white backdrop-blur-3xl py-2
      bg-zinc-900/50 px-5 flex items-center justify-center
      left-0 sm:left-60 sm:w-[calc(100%-15rem)] sm:pr-65 sm:ml-25
    ">
      <p className="text-white/70 text-[14px] sm:text-[12px] leading-snug text-center w-full">
        © All rights reserved - Pratik Jha
      </p>
    </nav>
  );
};

export default Navbar;
