import React from "react";
import Footer from "../components/Footer";
import Technologies from "../components/Technologies";
import Supportbutton from "../components/Supportbutton";
import SocialButtons from "../components/SocialButtons";

const page = () => {
  const data = [
    { title: "Next.js" },
    { title: "React.js" },
    { title: "Clerk.js" },
    { title: "Node.js" },
    { title: "Tailwind CSS" },
  ];

  const Apidata = [
    { title: "Picwish" },
    { title: "ZB-tech" },
    { title: "Deepseek-R1" },
    { title: "Zenquotes" },
    { title: "BG.remove" },
  ];

  const support = [
    { title: "Buy me a coffee" },
    { title: "Buy me a koffee" },
    { title: "Patreon" },
  ];

  const social = [
    { title: "Instagram", src: "" },
    { title: "Facebook", src: "" },
    { title: "Twitter(X)", src: "" },
    { title: "Linkedin", src: "" },
    { title: "Github", src: "" },
    { title: "Quora", src: "" },
  ];

  return (
    <div className="flex flex-col items-center h-full pt-10 md:pl-60 text-white text-center overflow-x-hidden px-4 sm:px-6">
      <h1 className="text-white/90 text-4xl md:text-6xl font-bold">About</h1>
      <div className="w-full flex flex-col">
        <div className="flex justify-center">
          <p className="w-full md:w-[70%] text-white/80 pt-5 text-center text-sm sm:text-base">
            Broke.ai is a revolutionary platform that harnesses the power of AI
            to Welcome to [YourWebsiteName].ai - where innovation meets
            simplicity. This isn't just another AI tool. It’s a digital
            companion, designed to understand, assist, and elevate your
            day-to-day creativity and productivity...
          </p>
        </div>

        {/* Tech Section */}
        <h1 className="text-white/90 text-4xl md:text-6xl font-bold mt-20 pb-10">
          Technologies used
        </h1>
        <div className="flex justify-center w-full">
          <ul className="flex flex-wrap justify-center gap-5 mt-5 w-full md:w-1/2">
            {data.map((items, index) => (
              <Technologies key={index} data={items} />
            ))}
          </ul>
        </div>

        {/* API Section */}
        <h1 className="text-white text-4xl md:text-6xl font-bold mt-20 pb-10">
          APIs used
        </h1>
        <div className="flex justify-center w-full">
          <ul className="flex flex-wrap justify-center gap-5 mt-5 w-full md:w-1/2">
            {Apidata.map((items, index) => (
              <Technologies key={index} data={items} />
            ))}
          </ul>
        </div>

        {/* Journey */}
        <div className="flex items-center flex-col gap-5">
          <h2 className="love text-2xl md:text-5xl w-full md:w-1/2 text-center font-bold mt-40 pb-10 leading-relaxed">
            Made with 🤍 by a 16 year old boy from India
          </h2>
          <div className="flex flex-col md:flex-row w-full justify-center gap-5 items-center">
            <h1 className="text-xl md:text-2xl">Read my journey - </h1>
            <button className="changed relative overflow-hidden text-xl md:text-2xl py-4 px-10 md:py-10 md:px-40 cursor-pointer hover:scale-[1.05] duration-300 ease-in-out bg-amber-50 text-black rounded-[100px]">
              <span className="absolute -translate-1/2 top-1/2 left-1/2 z-10 text-white mix-blend-difference">
                Blog post
              </span>
            </button>
          </div>
        </div>

        {/* Support */}
        <div className="flex flex-col items-center mt-40 gap-10">
          <h1 className="text-white font-semibold text-4xl md:text-5xl">
            Support
          </h1>
          <div className="flex flex-wrap justify-center w-full items-center gap-5">
            {support.map((items, index) => (
              <Supportbutton key={index} support={items} />
            ))}
          </div>
        </div>

        {/* Social */}
        <div className="flex flex-col items-center mt-40 w-full gap-4">
          {social.map((items, index) => (
            <SocialButtons key={index} social={items} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
