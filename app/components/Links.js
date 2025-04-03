import Link from "next/link";
import React from "react";

const Links = ({ LinksData }) => {
  return (
    <div className="text-[#ececec] text-[15px] w-full py-3 px-2 rounded-lg hover:bg-zinc-800 cursor-pointer">
      <Link href={LinksData.src} className="w-full flex gap-2 items-center ">
        {LinksData.icon}
        {LinksData.title}
      </Link>
    </div>
  );
};

export default Links;
