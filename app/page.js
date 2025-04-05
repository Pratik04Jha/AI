"use client";
import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { GiSlowBlob } from "react-icons/gi";
import ReactMarkdown from "react-markdown";

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false); // Track loading state

  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");
    setLoading(true); // Start loading animation when sending message

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages([...newMessages, { role: "assistant", content: data.reply }]);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false); // Stop loading animation once the message is received
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault(); // Prevents default newline behavior
      sendMessage();
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen pl-60 pb-15 pt-15">
        <div className="w-full h-full bg-zinc-900 p-4 text-white">
          <div className="h-[76%] overflow-y-auto mb-4 px-60">
            {messages.length === 0 && (
              <div className="flex flex-col gap-4 justify-center items-center h-full text-gray-400">
                <GiSlowBlob color="white" size={50} />
                <h1 className="font-bold text-4xl text-white">
                  How can I assist you today?
                </h1>
                <p className="text-center text-white/90">
                  Hello there! 🤖 I'm your smart and friendly AI assistant,
                  ready to chat, assist, and make your experience effortless.
                  Ask me anything, and let's create something amazing together!
                  🚀
                </p>
              </div>
            )}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-7 flex ${
                  msg.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-[20px] max-w-[75%] whitespace-pre-line ${
                    msg.role === "user"
                      ? "bg-zinc-800 text-white text-left"
                      : "text-white text-left"
                  }`}
                >
                  <ReactMarkdown>{msg.content}</ReactMarkdown>
                </div>
              </div>
            ))}

            {/* Loading Animation */}
            {loading && (
              <div className="flex justify-start mb-4">
                <span className="dot-animation">.</span>
                <span className="dot-animation">.</span>
                <span className="dot-animation">.</span>
              </div>
            )}
          </div>

          {/* Input Box */}
          <div className="flex fixed bottom-10 left-[50%] -translate-x-1/2">
            <textarea
              className="flex-1 h-25 px-6 py-3 pb-10 pr-15 outline-none rounded-[30px] resize-none w-200 bg-zinc-800 ml-60 relative"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown} // Enter-to-send functionality added
              placeholder="Ask anything"
            />
            <button
              onClick={sendMessage}
              className="bg-white text-black p-2 outline-none flex items-center justify-center rounded-full absolute bottom-3 right-3 cursor-pointer"
            >
              <IoSend />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}