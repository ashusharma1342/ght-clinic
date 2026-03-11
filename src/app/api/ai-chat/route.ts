import { NextRequest } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { localAIResponse } from "@/lib/localAI";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = genAI.getGenerativeModel({
  model: "gemini-3-flash-preview",
});

export async function POST(req: NextRequest) {
  const { message } = await req.json();

  try {
    const result = await model.generateContentStream({
      contents: [
        {
          role: "user",
          parts: [{ text: message }],
        },
      ],
    });

    const encoder = new TextEncoder();

    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of result.stream) {
          const text = chunk.text();

          controller.enqueue(encoder.encode(text));
        }

        controller.close();
      },
    });

    return new Response(stream);
  } catch (error: any) {
    console.error("Gemini error:", error);

    // Fallback to local AI
    const reply = localAIResponse(message);

    return new Response(reply);
  }
}
