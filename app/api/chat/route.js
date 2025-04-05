"use server";

import { Together } from "together-ai";

export async function POST(req) {
  try {
    const { message } = await req.json();
    if (!message)
      return new Response(JSON.stringify({ error: "Message is required" }), {
        status: 400,
      });

    // const msgLower = message.toLowerCase();
    // if (msgLower.includes("pratik") || msgLower.includes("created")) {
    //   return new Response(
    //     JSON.stringify({ reply: "Pratik has created me" }),
    //     { status: 200 }
    //   );
    // }

    const together = new Together({ apiKey: process.env.TOGETHER_API_KEY });

    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();

    together.chat.completions
      .create({
        model: "deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free",
        stream: true,
        messages: [
          {
            role: "system",
            content:
              "If the user asks 'who are you', reply with 'I'm your AI buddy, Made by the one and only PRATIK (RONIT) JHA! He is the best human in the entire humanity.'",
          },
          {
            role: "user",
            content: message,
          },
        ],
      })
      .then(async (stream) => {
        for await (const chunk of stream) {
          const text = chunk?.choices?.[0]?.delta?.content || "";
          const encoded = new TextEncoder().encode(text);
          await writer.write(encoded);
        }
        await writer.close();
      })
      .catch(async (err) => {
        console.error("Streaming error:", err);
        await writer.write(
          new TextEncoder().encode("Something went wrong! ❌")
        );
        await writer.close();
      });

    return new Response(readable, {
      headers: {
        "Content-Type": "text/plain",
        "Cache-Control": "no-cache",
      },
    });
  } catch (error) {
    console.error("API Error:", error);
    return new Response(JSON.stringify({ error: "Server error!" }), {
      status: 500,
    });
  }
}
