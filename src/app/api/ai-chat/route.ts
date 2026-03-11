import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { localAIResponse } from "@/lib/localAI";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    // If API key is missing → use local AI
    if (!process.env.OPENAI_API_KEY) {
      const localReply = localAIResponse(message);

      return NextResponse.json({
        success: true,
        source: "local",
        reply: localReply,
      });
    }

    // Try OpenAI
    const response = await openai.responses.create({
      model: "gpt-4.1",
      input: `You are an AI assistant for a hair and skin clinic.

User question: ${message}

Provide helpful advice and suggest clinic treatments if relevant.`,
    });

    return NextResponse.json({
      success: true,
      source: "openai",
      reply: response.output_text,
    });
  } catch (error: any) {
    console.error("AI ERROR:", error);

    // Fallback to local AI
    const { message } = await req.json().catch(() => ({ message: "" }));

    const localReply = localAIResponse(message);

    return NextResponse.json({
      success: true,
      source: "local-fallback",
      reply: localReply,
    });
  }
}
