"use client";
import { useState, useRef, useEffect } from "react";
import { IoSend } from "react-icons/io5";
import { GiSlowBlob } from "react-icons/gi";
import ReactMarkdown from "react-markdown";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegCircleUser } from "react-icons/fa6";

function extractThinkingParts(content) {
  const thinkRegex = /<think>([\s\S]*?)<\/think>/gi;
  const thoughts = [];
  let visibleContent = content;
  
  // Extract and remove thinking parts
  visibleContent = visibleContent.replace(thinkRegex, (match, thought) => {
    thoughts.push(thought.trim());
    return "";
  });

  // Clean up the visible content
  visibleContent = visibleContent
    .replace(/\n{2,}/g, "\n")
    .trim();

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
    const assistantMessage = { 
      role: "assistant", 
      content: "",
      visibleContent: "",
      thoughts: [],
      isProcessing: true,
      isStreaming: false
    };

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
      let fullContent = "";

      // First, collect all content
      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunk = decoder.decode(value || new Uint8Array(), {
          stream: !doneReading,
        });
        fullContent += chunk;
      }

      // Process the full content
      const { visibleContent, thoughts } = extractThinkingParts(fullContent);
      
      // Update message with all data (but don't show yet)
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          content: fullContent,
          visibleContent,
          thoughts,
          isProcessing: false,
          isStreaming: true // Start streaming the visible content
        };
        return updated;
      });

      // Now stream the visible content
      let displayedLength = 0;
      const streamingInterval = setInterval(() => {
        setMessages((prev) => {
          const updated = [...prev];
          const currentMessage = updated[updated.length - 1];
          
          if (displayedLength >= currentMessage.visibleContent.length) {
            clearInterval(streamingInterval);
            currentMessage.isStreaming = false;
          } else {
            displayedLength += 1;
            currentMessage.displayedContent = 
              currentMessage.visibleContent.substring(0, displayedLength);
          }
          
          return updated;
        });
      }, 20); // Adjust typing speed here

    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          visibleContent: "⚠️ Something went wrong!",
          isProcessing: false,
          isStreaming: false
        };
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

  const inputVariants = {
    centered: {
      position: "absolute",
      top: "60%",
      left: "58%",
      x: "-50%",
      y: "-50%",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
    bottom: {
      position: "fixed",
      top: "77%",
      left: "58%",
      x: "-50%",
      y: "0%",
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20,
      },
    },
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen md:pl-60 pt-15 relative">
      <div className="w-full h-full bg-black p-4 text-white pb-28">
        <div className="h-[90%] overflow-y-auto mb-4 px-4 md:px-60">
        <AnimatePresence>
            {messages.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="flex flex-col gap-8 justify-center items-center h-full w-full"
              >
                <h1 className="font-bold text-[45px] leading-1 text-white text-center">
                  What can I help you with?
                </h1>
              </motion.div>
            )}
          </AnimatePresence>
          {messages.map((msg, index) => {
            const isAssistant = msg.role === "assistant";
            const showThinkingProcess = showThoughtsFor[index] && msg.thoughts?.length > 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
                className="mb-12 flex justify-start gap-0 flex-col"
              >
                <h1 className="font-bold pb-0">
                  {msg.role === "user" ? (
                    <div className="relative">
                      <FaRegCircleUser size={20} className="absolute top-1 -left-8"/> You
                    </div>
                  ) : (
                    <div className="relative">
                      <GiSlowBlob size={20} className="absolute top-1 -left-8"/> Zenius
                    </div>
                  )}
                </h1>

                <div className={`max-w-[75%] whitespace-pre-line text-white text-left`}>
                  {isAssistant && msg.isProcessing ? (
                    <div>Thinking...</div>
                  ) : isAssistant ? (
                    <>
                        {/* Final message with streaming effect */}
                        
                        {/* Thinking process toggle */}
                      {!msg.isStreaming && msg.thoughts?.length > 0 && (
                        <div className="my-2 ">
                          <button
                            onClick={() => setShowThoughtsFor(prev => ({
                              ...prev,
                              [index]: !prev[index]
                            }))}
                            className="text-zinc-300 hover:text-white cursor-pointer "
                          >
                            {showThinkingProcess ? "Thinking process" : "Thinking process"}
                          </button>
                        </div>
                        )}
                         {/* Thinking content (hidden by default) */}
                      <AnimatePresence>
                        {showThinkingProcess && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ type: "spring", stiffness: 120, damping: 18 }}
                            className="mt-2 text-sm text-gray-300 ml-1 p-3 border-l-2 border-l-zinc-700"
                          >
                            {msg.thoughts.map((thought, i) => (
                              <ReactMarkdown key={i}>{thought}</ReactMarkdown>
                            ))}
                          </motion.div>
                        )}
                        </AnimatePresence>
                      <div>
                        <ReactMarkdown>
                          {msg.isStreaming ? msg.displayedContent : msg.visibleContent}
                        </ReactMarkdown>
                        {msg.isStreaming && <span className="animate-pulse">|</span>}
                      </div>

                      

                     
                        
                    </>
                  ) : (
                    // User message
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  )}
                </div>
              </motion.div>
            );
          })}

          <div ref={bottomRef} />
        </div>
      </div>

      <motion.div
        variants={inputVariants}
        initial="centered"
        animate={messages.length > 0 ? "bottom" : "centered"}
        className="w-full px-4 md:px-60 max-w-[1300px] z-10 "
      >
        <div className="flex relative w-full">
          <textarea
            className={`flex-1 h-30 min-w-full px-5 py-3 pb-10 pr-14 outline-none rounded-[10px] resize-none bg-[#050505] border-1 border-zinc-700 text-white placeholder:text-white/50 ${
              loading ? "opacity-50" : ""
            }`}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything"
            disabled={loading}
          />
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={sendMessage}
            disabled={loading}
            className={`bg-white text-black p-2 outline-none flex items-center justify-center rounded-[10px] absolute bottom-3 right-3 ${
              loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <IoSend />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}