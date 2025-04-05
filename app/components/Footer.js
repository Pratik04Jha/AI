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
    <footer className="w-full bg-zinc-800/30 text-white pt-14 pb-20 px-5 ">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 text-center lg:text-left sm:px-60">
          <div>
            <h1 className="font-semibold text-white/90 text-lg pb-2">
              Website Links
            </h1>
            <ul className="text-sm text-white/80 space-y-1">
              <li>
                <Link href="" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  About
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
                <Link href="" className="hover:underline">
                  ChatBot
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  Image generator
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  Quote generator
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  Image enhancer
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
                <Link href="" className="hover:underline">
                  Main Website
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  Arcade
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  Artificial Intelligence
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  Blog, Article, Thoughts
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  Productivity
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
                <Link href="" className="hover:underline">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  Twitter (X)
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="" className="hover:underline">
                  Quora
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end gap-4">
          <Link href="https://www.instagram.com/">
            <FaInstagram className="text-white/80 hover:text-white" size={24} />
          </Link>
          <Link href="https://www.github.com/">
            <FaGithub className="text-white/80 hover:text-white" size={24} />
          </Link>
          <Link href="https://www.twitter.com/">
            <FaTwitter className="text-white/80 hover:text-white" size={24} />
          </Link>
          <Link href="https://www.facebook.com/">
            <FaFacebook className="text-white/80 hover:text-white" size={24} />
          </Link>
          <Link href="https://www.linkedin.com/">
            <FaLinkedin className="text-white/80 hover:text-white" size={24} />
          </Link>
          <Link href="https://www.quora.com/">
            <FaQuora className="text-white/80 hover:text-white" size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
