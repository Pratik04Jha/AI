import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaFacebook,
  FaLinkedin,
  FaQuora,
} from "react-icons/fa";
import SocialIcons from "./UserInterface/SocialIcons";

const Footer = () => {
  const data = [
    {
      icon: <FaInstagram className="text-white" size={30} />,
      src: "/",
      title: "Instagram",
    },
    {
      icon: <FaGithub className="text-white" size={30} />,
      src: "/",
      title: "Github",
    },
    {
      icon: <FaTwitter className="text-white" size={30} />,
      src: "/",
      title: "Twitter",
    },
    {
      icon: <FaFacebook className="text-white" size={30} />,
      src: "/",
      title: "Facebook",
    },
    {
      icon: <FaLinkedin className="text-white" size={30} />,
      src: "/",
      title: "LinkedIn",
    },
    {
      icon: <FaQuora className="text-white" size={30} />,
      src: "/",
      title: "Quora",
    },
  ];

  return (
    <footer className="w-full bg-zinc-800/30 text-white pt-14 pb-0 px-5 relative">
      <div className="absolute h-[2px] animate-rainbow-stripe bg-[length:200%_100%] w-full top-0 -inset-100 z-10 bg-[linear-gradient(to_left,red,orange,yellow,green,cyan,blue,violet,red)] opacity-100  pointer-events-none left-0 " />
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 text-center lg:text-left sm:px-60">
          <div>
            <h1 className="font-semibold text-white/90 text-lg pb-2">
              Website Links
            </h1>
            <ul className="text-sm text-white/80 space-y-1">
              <li>
                <Link
                  href="/Home"
                  className="hover:text-white ease-in-out duration-100"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/Explore"
                  className="hover:text-white ease-in-out duration-100"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className="hover:text-white ease-in-out duration-100"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/About"
                  className="hover:text-white ease-in-out duration-100"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold text-white/90 text-lg pb-2">
              Products
            </h1>
            <ul className="text-sm text-white/80 space-y-1">
              <li>
                <Link
                  href="/"
                  className="hover:text-white ease-in-out duration-100"
                >
                  Chatbot
                </Link>
              </li>
              <li>
                <Link
                  href="/ImageGenerator"
                  className="hover:text-white ease-in-out duration-100"
                >
                  Image Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/QuoteGenerator"
                  className="hover:text-white ease-in-out duration-100"
                >
                  Quote Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/ImageEnhancer"
                  className="hover:text-white ease-in-out duration-100"
                >
                  Image Enhancer
                </Link>
              </li>
              <li>
                <Link
                  href="/VideoGenerator"
                  className="hover:text-white ease-in-out duration-100"
                >
                  Video Generator
                </Link>
              </li>
              <li>
                <Link
                  href="/BackgroundRemover"
                  className="hover:text-white ease-in-out duration-100"
                >
                  Background Remover
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h1 className="font-semibold text-white/90 text-lg pb-2">
              Other Products
            </h1>
            <ul className="text-sm text-white/80 space-y-1">
              <li>
                <Link
                  href=""
                  className="hover:text-white ease-in-out duration-100"
                  target="_blank"
                >
                  Main Website
                </Link>
              </li>
              <li>
                <Link
                  href="https://pratik-the-legend.vercel.app/"
                  className="hover:text-white ease-in-out duration-100"
                  target="_blank"
                >
                  Portfolio Website
                </Link>
              </li>
              <li>
                <Link
                  href="https://arcade-zeta.vercel.app/"
                  className="hover:text-white ease-in-out duration-100"
                  target="_blank"
                >
                  Game Arcade
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-white ease-in-out duration-100"
                  target="_blank"
                >
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-white ease-in-out duration-100"
                  target="_blank"
                >
                  Blog | Article | Thoughts
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-white ease-in-out duration-100"
                  target="_blank"
                >
                  Productivity App
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="hover:text-white ease-in-out duration-100"
                  target="_blank"
                >
                  Automation App
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h1 className="font-semibold text-white/90 text-lg pb-2">
              Follow Me
            </h1>
            <ul className="text-sm text-white/80 space-y-1">
              <li>
                <Link
                  href="https://www.instagram.com/poptale_artz/"
                  target="_blank"
                  className="hover:text-white ease-in-out duration-100"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="https://x.com/pratik04jha"
                  target="_blank"
                  className="hover:text-white ease-in-out duration-100"
                >
                  Twitter (X)
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/pratik-jha-380037301/"
                  target="_blank"
                  className="hover:text-white ease-in-out duration-100"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Pratik04Jha"
                  target="_blank"
                  className="hover:text-white ease-in-out duration-100"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.facebook.com/profile.php?id=61574732885384"
                  target="_blank"
                  className="hover:text-white ease-in-out duration-100"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.quora.com/profile/Pratik-1703"
                  target="_blank"
                  className="hover:text-white ease-in-out duration-100"
                >
                  Quora
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center lg:justify-cennter">
          <div className="flex justify-center lg:justify-end gap-6 my-10">
            {data.map((items, index) => (
              <SocialIcons key={index} data={items} />
            ))}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <p className="text-center absolute bottom-0 my-5">
            © All rights reserved - Pratik Jha
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
