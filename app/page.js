"use client";
import { useState, useRef, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import { GiSlowBlob } from "react-icons/gi";
import ReactMarkdown from "react-markdown";

function splitMessageContent(content) {
  const thinkRegex = /<think>([\s\S]*?)<\/think>/gi;
  const thoughts = [];
  let lastIndex = 0;
  let match;
  let visibleContent = "";

  while ((match = thinkRegex.exec(content))) {
    visibleContent += content.slice(lastIndex, match.index);
    lastIndex = thinkRegex.lastIndex;
    const thought = match[1].trim();
    if (thought) thoughts.push(thought);
  }

  visibleContent += content.slice(lastIndex);
  visibleContent = visibleContent.replace(/<\/?think>/gi, "").trim();
  visibleContent = visibleContent.replace(/\n{2,}/g, "\n").trim();
  visibleContent = visibleContent.replace(/^\s*[\r\n]/gm, "").trim();
  return { visibleContent, thoughts };
}

export default function Home() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const [showThoughtsFor, setShowThoughtsFor] = useState({});

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const assistantMessage = { role: "assistant", content: "" };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      if (!res.body) throw new Error("No response body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunk = decoder.decode(value || new Uint8Array(), {
          stream: !doneReading,
        });

        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1].content += chunk;
          return updated;
        });
      }
    } catch (error) {
      console.error("Streaming error:", error);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1].content = "⚠️ Something went wrong!";
        return updated;
      });
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col items-center justify-center h-screen md:pl-60 pt-15">
      <div className="w-full h-full bg-zinc-900 p-4 text-white">
        <div className="h-[76%] overflow-y-auto mb-4 px-4 md:px-60">
          {messages.length === 0 && (
            <div className="flex flex-col gap-4 justify-center items-center h-full text-gray-400">
              <GiSlowBlob color="white" size={50} />
              <h1 className="font-bold text-4xl text-white text-center">
                How can I assist you today?
              </h1>
              <p className="text-center text-white/90">
                Hello there! 🤖 I'm your smart and friendly AI assistant, ready
                to chat, assist, and make your experience effortless. Ask me
                anything, and let's create something amazing together! 🚀
              </p>
            </div>
          )}

          {messages.map((msg, index) => {
            const isAssistant = msg.role === "assistant";
            const { visibleContent, thoughts } = isAssistant
              ? splitMessageContent(msg.content)
              : { visibleContent: msg.content, thoughts: [] };

            return (
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
                  {isAssistant && thoughts.length > 0 && (
                    <div className="mb-2">
                      <button
                        onClick={() =>
                          setShowThoughtsFor((prev) => ({
                            ...prev,
                            [index]: !prev[index],
                          }))
                        }
                        className="text-[14px] text-white/60 bg-zinc-800 py-2 w-40 cursor-pointer rounded-lg"
                      >
                        {showThoughtsFor[index]
                          ? "Hide thoughts - "
                          : "Show thoughts + "}
                      </button>
                    </div>
                  )}

                  {isAssistant &&
                    showThoughtsFor[index] &&
                    thoughts.length > 0 && (
                      <div className="mt-2 text-sm text-gray-300 ml-1 p-3 border-l-2 border-l-zinc-700">
                        {thoughts.map((thought, i) => (
                          <ReactMarkdown key={i}>{thought}</ReactMarkdown>
                        ))}
                      </div>
                    )}
                  <ReactMarkdown>{visibleContent}</ReactMarkdown>
                </div>
              </div>
            );
          })}

          {loading && (
            <div className="flex justify-start mb-4 text-white px-4">
              <span className="animate-pulse">Typing...</span>
            </div>
          )}

          <div ref={bottomRef}></div>
        </div>

        {/* Input Box */}
        {/* Input Box */}
        <div className="w-full px-4 sm:px-8 md:px-20 lg:px-60">
          <div className="flex relative w-full max-w-[1000px] mx-auto">
            <textarea
              className="flex-1 h-25 px-6 py-3 pb-10 pr-14 outline-none rounded-[30px] resize-none bg-zinc-800 w-full"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
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
    </div>
  );
}
