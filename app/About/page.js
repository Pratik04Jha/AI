import React from "react";
import Footer from "../components/Footer";
import Technologies from "../components/Technologies";
import Supportbutton from "../components/Supportbutton";
import SocialButtons from "../components/SocialButtons";

const page = () => {
  const data = [
    {
      title: "Next.js",
    },
    {
      title: "React.js",
    },
    {
      title: "Clerk.js",
    },
    {
      title: "Node.js",
    },
    {
      title: "Tailwind CSS",
    },
  ];

  const Apidata = [
    {
      title: "Picwish",
    },
    {
      title: "ZB-tech",
    },
    {
      title: "Deepseek-R1",
    },
    {
      title: "Zenquotes",
    },
    {
      title: "BG.remove",
    },
  ];

  const support = [
    {
      title: "Buy me a coffee",
    },
    {
      title: "Buy me a koffee",
    },
    {
      title: "Patreon",
    },
  ];

  const social = [
    {
      title: "Instagram",
      src: "",
    },
    {
      title: "Facebook",
      src: "",
    },
    {
      title: "Twitter(X)",
      src: "",
    },
    {
      title: "Linkedin",
      src: "",
    },
    {
      title: "Github",
      src: "",
    },
    {
      title: "Quora",
      src: "",
    },
  ];
  return (
    <div className="flex flex-col items-center h-full pl-60 pt-25 text-white text-center overflow-x-hidden">
      <h1 className="text-white text-7xl font-bold ">About</h1>
      <div className="h-full w-full flex flex-col">
        <div className="w-full flex justify-center">
          <p className="w-[70%]  text-white/90 pt-5 text-center">
            Broke.ai is a revolutionary platform that harnesses the power of AI
            to Welcome to [YourWebsiteName].ai - where innovation meets
            simplicity. This isn't just another AI tool. It’s a digital
            companion, designed to understand, assist, and elevate your
            day-to-day creativity and productivity. We’re building the future -
            one click at a time. With blazing speed, a minimalist UI, and
            intelligence that adapts to you, our goal is simple: Make powerful
            AI accessible to everyone. Whether you’re a student trying to
            brainstorm ideas, a developer debugging late at night, or just
            someone curious about what’s possible with tech - we’re here for it.
            This is not the end. This is just the start of something
            extraordinary. And you? You're already part of the revolution.
          </p>
        </div>
        <h1 className="text-white text-7xl font-bold mt-20 pb-10">
          Technologies used
        </h1>
        <div className="flex w-full justify-center">
          <ul className="flex flex-wrap justify-center gap-5 mt-5 w-1/2">
            {data.map((items, index) => (
              <Technologies key={index} data={items} />
            ))}
          </ul>
        </div>

        <h1 className="text-white text-7xl font-bold mt-20 pb-10">APIs used</h1>
        <div className="flex w-full justify-center">
          <ul className="flex flex-wrap justify-center gap-5 mt-5 w-1/2">
            {Apidata.map((items, index) => (
              <Technologies key={index} data={items} />
            ))}
          </ul>
        </div>
        <div className="flex items-center flex-col gap-5">
          <h2 className="love text-5xl w-1/2 text-center text-bold mt-60 pb-10 leading-14">
            Made with 🤍 by a 16 year old boy from India
          </h2>
          <div className="flex w-full justify-center gap-5 items-center">
            <h1 className="text-2xl">Read my journey - </h1>
            <button className="changed relative overflow-hidden text-2xl py-10 px-40 cursor-pointer hover:scale-[1.05] duration-300 ease-in-out bg-amber-50 text-black rounded-[200px]">
              <span className="absolute -translate-1/2 top-1/2 left-1/2 z-10000 text-white mix-blend-difference ">
                Blog post
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center mt-60 gap-10">
          <h1 className="text-white font-semibold text-5xl">Support</h1>
          <div className=" flex justify-between w-full items-center gap-10">
            {support.map((items, index) => (
              <Supportbutton key={index} support={items} />
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center mt-60 w-full">
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
