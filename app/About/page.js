"use client";
import React from "react";
import Footer from "../components/Footer";
import Technologies from "../components/Technologies";
import Supportbutton from "../components/Supportbutton";
import SocialButtons from "../components/SocialButtons";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const fadeUpContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const page = () => {
  const data = [
    { title: "Next.js" },
    { title: "React.js" },
    { title: "Vercel" },
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
    {
      title: "Buy me a coffee",
      src: "https://buymeacoffee.com/poptale?status=1",
    },
    { title: "Ko-Fi", src: "https://ko-fi.com/pratikjha#payment-widget" },
    { title: "Patreon", src: "https://www.patreon.com/c/Poptale" },
  ];

  const social = [
    { title: "Instagram", src: "https://www.instagram.com/poptale_artz" },
    {
      title: "Facebook",
      src: "https://www.facebook.com/profile.php?id=61574732885384",
    },
    { title: "Twitter(X)", src: "https://x.com/pratik04jha" },
    {
      title: "Linkedin",
      src: "https://www.linkedin.com/in/pratik-jha-380037301",
    },
    { title: "Github", src: "https://github.com/Pratik04Jha" },
    { title: "Quora", src: "https://www.quora.com/profile/Pratik-1703" },
  ];

  return (
    <div className="flex flex-col items-center h-full md:pl-60 text-white text-center overflow-x-hidden px-4 sm:px-6 pt-25 ">
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-white/90 text-4xl md:text-6xl font-bold"
      >
        About
      </motion.h1>

      <div className="w-full flex flex-col">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <p className="w-full md:w-[70%] text-white/80 pt-5 text-center text-sm sm:text-base">
            Uncover the journey behind this AI-powered world — crafted by a
            16-year-old driven by pure passion, boundless curiosity, and a love
            for turning dreams into code. Explore how I brought this vision to
            life, with every tool, tech, and API listed for fellow creators. I’m
            proud of what I’ve built — and if it inspires you, you can show love
            and support through my social media handles.
          </p>
        </motion.div>

        {/* Technologies */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white/90 text-4xl md:text-6xl font-bold mt-20 pb-10"
        >
          Technologies used
        </motion.h1>
        <div className="flex justify-center w-full">
          <ul className="flex flex-wrap justify-center gap-5 mt-5 sm:w-[60%] w-full">
            {data.map((items, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Technologies data={items} />
              </motion.div>
            ))}
          </ul>
        </div>

        {/* APIs */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-white text-4xl md:text-6xl font-bold mt-20 pb-10"
        >
          APIs used
        </motion.h1>
        <div className="flex justify-center w-full">
          <ul className="flex flex-wrap justify-center gap-5 mt-5 w-full sm:w-[60%]">
            {Apidata.map((items, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Technologies data={items} />
              </motion.div>
            ))}
          </ul>
        </div>

        {/* Journey */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center flex-col gap-5"
        >
          <h2 className="love text-2xl md:text-5xl w-full md:w-1/2 text-center font-bold mt-40 pb-10 leading-relaxed">
            Made with 🤍 by a 16 year old boy from India
          </h2>
          <div className="flex flex-col md:flex-row w-full justify-center gap-5 items-center pb-40 ">
            <h1 className="text-lg sm:text-xl md:text-2xl text-center md:text-left">
              Read my journey –
            </h1>
            <Link href="/coming.png" target="_blank">
              <button className="changed relative overflow-hidden text-base sm:text-lg md:text-2xl py-5 px-18 sm:py-4 sm:px-40 md:py-10 md:px-32 cursor-pointer hover:scale-[1.05] transition-all duration-300 ease-in-out bg-amber-50 text-black rounded-[100px] flex items-center justify-center">
                <span className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 text-white mix-blend-difference whitespace-nowrap">
                  Blog post
                </span>
              </button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center mt-40 gap-10"
        >
          <h1 className="text-white font-semibold text-4xl md:text-5xl">
            Support
          </h1>
          <div className="flex flex-wrap justify-center w-full items-center gap-5">
            {support.map((items, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Supportbutton support={items} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center mt-40 w-full gap-4"
        >
          {social.map((items, index) => (
            <SocialButtons key={index} social={items} variants={fadeUp} />
          ))}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default page;
