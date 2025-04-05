import Head from "next/head";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import "./globals.css";
import ProgressBar from "./components/ProgressBar";

export const metadata = {
  title: "AI chatbot",
  icons: { icon: "icon.png" },
  description:
    "This is the best ai chat bot, this has chatbot, text to image, text to video, image enhancer and quote generator. This AI app is all in one place for all your need",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <link rel="shortcut icon" href="icon.png" type="image/x-icon" />
      </Head>
      <body suppressHydrationWarning className="bg-zinc-900 overflow-x-hidden">
        <ProgressBar /> {/* 👈 Add this line */}
        <Topbar />
        <Sidebar />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
