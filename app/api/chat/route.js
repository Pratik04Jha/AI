"use server";

import { Together } from "together-ai";

export async function POST(req) {
  try {
    const { message } = await req.json();
    if (!message)
      return Response.json({ error: "Message is required" }, { status: 400 });

    if (message.toLowerCase().includes("pratik")) {
      return Response.json({ reply: "Pratik has created me" });
    } else if (message.toLowerCase().includes("created")) {
      return Response.json({ reply: "Pratik has created me" });
    }

    const together = new Together({ apiKey: process.env.TOGETHER_API_KEY });

    const response = await together.chat.completions.create({
      model: "deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free",
      messages: [
        {
          role: "system",
          content:
            "If the user asks 'who are you', reply with 'I'm your AI buddy, here to help!'",
        },
        { role: "user", content: message },
      ],
    });

    console.log("AI Response:", response);

    return Response.json({ reply: response.choices[0].message.content });
  } catch (error) {
    console.error("API Error:", error);
    return Response.json({ error: "Something went wrong!" }, { status: 500 });
  }
}
