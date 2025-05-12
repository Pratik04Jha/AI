import React from "react";

const Navbar = () => {
  return (
    <nav className="
      fixed bottom-0 w-full text-white py-2
        flex items-center justify-end
      left-0 sm:left-60 sm:w-[calc(100%-15rem)] sm:pr-30 sm:ml-25
    ">
      <p className="text-white/80 text-[10px] sm:text-[12px] leading-snug w-full text-center sm:text-right">
        © All rights reserved - Pratik Jha
      </p>
    </nav>
  );
};

export default Navbar;
