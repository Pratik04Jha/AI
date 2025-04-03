export async function POST(req) {
    const { prompt } = await req.json();
    
    if (!prompt) {
        return Response.json({ error: "Prompt is required!" }, { status: 400 });
    }

    const API_URL = "https://api-inference.huggingface.co/models/ZB-Tech/Text-to-Image";
    const API_KEY = process.env.HUGGINGFACE_API_KEY;

    try {
        const response = await fetch(API_URL, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ inputs: prompt }),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch image");
        }

        const blob = await response.blob();
        return new Response(blob, {
            headers: { "Content-Type": "image/png" }, // Assuming PNG output
        });

    } catch (error) {
        return Response.json({ error: error.message }, { status: 500 });
    }
}
