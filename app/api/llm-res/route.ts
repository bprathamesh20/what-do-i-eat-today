import { NextResponse, NextRequest } from "next/server";
import { getLLMResponse } from "@/utils/llm";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const prompt = searchParams.get('prompt');

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    // Now TypeScript knows prompt is a string, not null
    const response = await getLLMResponse(prompt);

    return NextResponse.json({ message: "Success", response }, { status: 200 });
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}