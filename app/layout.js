import Head from "next/head";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./globals.css";
import ProgressBar from "./components/ProgressBar";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = {
  title: "ZeniusVerse – The Ultimate AI Universe",
  icons: { icon: "icon.png" },
  description:
    "Welcome to ZeniusVerse – An all-in-one AI universe powered by Zenius. Experience the smartest chatbot, text-to-image, text-to-video, quote generator, and image enhancer in one powerful app. Built by the visionary Pratik Jha.",
  keywords: [
    "AI chatbot",
    "ZeniusVerse",
    "AI tools",
    "text to image",
    "text to video",
    "quote generator",
    "image enhancer",
    "Zenius",
    "AI website",
    "Next.js AI app",
    "Pratik Jha",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>ZeniusVerse – The Ultimate AI Universe</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="description"
          content="Welcome to ZeniusVerse – An all-in-one AI universe powered by Zenius. Experience the smartest chatbot, text-to-image, text-to-video, quote generator, and image enhancer in one powerful app. Built by the visionary Pratik Jha."
        />
        <meta
          name="keywords"
          content="AI chatbot, ZeniusVerse, AI tools, text to image, text to video, quote generator, image enhancer, Zenius, AI website, Next.js AI app, Pratik Jha"
        />
        <meta name="author" content="Pratik Jha" />
        <meta
          property="og:title"
          content="ZeniusVerse – The Ultimate AI Universe"
        />
        <meta
          property="og:description"
          content="All-in-one AI platform built by Pratik Jha. Chatbot, text to image/video, quote maker, image enhancer – all powered by Zenius."
        />
        <meta property="og:image" content="/icon.png" />
        <meta
          property="og:url"
          content="https://artificial-intelligence-beta.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="ZeniusVerse – The Ultimate AI Universe"
        />
        <meta
          name="twitter:description"
          content="Explore ZeniusVerse – the smartest all-in-one AI experience. Created by Pratik Jha."
        />
        <meta name="twitter:image" content="/icon.png" />
        <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      </Head>
      <body suppressHydrationWarning className="bg-black overflow-x-hidden">
        <ProgressBar />
        <Topbar />
        <Sidebar />
        {children}
        <SpeedInsights/>
        <Navbar />
      </body>
    </html>
  );
}
