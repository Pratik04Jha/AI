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

const Footer = () => {
  return (
    <footer className="container relative py-20 pb-16 flex flex-col bg-zinc-800/30 text-white text-center h-150 width-full pl-30 pr-10 gap-6 ">
      <div className="flex  justify-start gap-16">
        <div className="text-left">
          <h1 className="font-semibold text-white/90 text-[18px] pb-2 ">
            Website Links
          </h1>
          <ul className="text-[14px] text-white/80">
            <Link href="" className="hover:underline">
              <li className="">Home</li>
            </Link>
            <Link href="" className="hover:underline">
              <li>Explore</li>
            </Link>
            <Link href="" className="hover:underline">
              <li>About</li>
            </Link>
          </ul>
        </div>
        <div className="text-left">
          <h1 className="font-semibold text-white/90 text-[18px] pb-2 ">
            Products
          </h1>
          <ul className="text-[14px] text-white/80">
            <Link href="" className="hover:underline">
              <li>ChatBot</li>
            </Link>
            <Link href="" className="hover:underline">
              <li>Image generator</li>
            </Link>
            <Link href="" className="hover:underline">
              <li>Quote generator</li>
            </Link>
            <Link href="" className="hover:underline">
              <li>Image enhancer</li>
            </Link>
          </ul>
        </div>
        <div className="text-left">
          <h1 className="font-semibold text-white/90 text-[18px] pb-2 ">
            Other products
          </h1>
          <ul className="text-[14px] text-white/80">
            <Link href="" className="hover:underline">
              <li>Main Website</li>
            </Link>
            <Link href="" className="hover:underline">
              <li>Portfolio</li>
            </Link>
            <Link href="" className="hover:underline">
              <li>Arcade</li>
            </Link>
            <Link href="" className="hover:underline">
              <li>Artificial intelligence</li>
            </Link>
            <Link href="" className="hover:underline">
              <li>Blog, Artice, thoughts</li>
            </Link>
            <Link href="" className="hover:underline">
              <li>Productivity</li>
            </Link>
          </ul>
        </div>
        <div className="text-left">
          <h1 className="font-semibold text-white/90 text-[18px] pb-2 ">
            Follow me
          </h1>
          <ul className="text-[14px] text-white/80">
            <Link href="" className="hover:underline">
              <li>Instagram</li>
            </Link>
            <Link href="" className="hover:underline">
              <li>Twitter(X)</li>
            </Link>
            <Link href="" className="hover:underline">
              <li>Linkedin</li>
            </Link>
            <Link href="" className="hover:underline">
              <li>Github</li>
            </Link>
            <Link href="" className="hover:underline">
              <li>Facebook</li>
            </Link>
            <Link href="" className="hover:underline">
              <li>Quora</li>
            </Link>
          </ul>
        </div>
      </div>
      <div className=" mt-15">
        <div className="flex gap-3 justify-end">
          <Link href="https://www.instagram.com/">
            <FaInstagram
              className="text-white/80 hover:text-white/100"
              size={25}
            />
          </Link>
          <Link href="https://www.github.com/">
            <FaGithub
              className="text-white/80 hover:text-white/100"
              size={25}
            />
          </Link>
          <Link href="https://www.twitter.com/">
            <FaTwitter
              className="text-white/80 hover:text-white/100"
              size={25}
            />
          </Link>
          <Link href="https://www.facebook.com/">
            <FaFacebook
              className="text-white/80 hover:text-white/100"
              size={25}
            />
          </Link>
          <Link href="https://www.linkedin.com/">
            <FaLinkedin
              className="text-white/80 hover:text-white/100"
              size={25}
            />
          </Link>
          <Link href="https://www.quora.com/">
            <FaQuora className="text-white/80 hover:text-white/100" size={25} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
