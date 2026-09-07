import { NextResponse } from "next/server";

export async function GET() {
  const geminiKey = !!(process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY);

  return NextResponse.json({
    status: "healthy",
    gemini: geminiKey,
    mode: "Next.js Route Handler",
    models: ["gemini-2.5-flash-lite", "gemini-2.0-flash-lite", "gemini-1.5-flash"],
    focus: "Financial Literacy & Education Only",
    timestamp: new Date().toISOString(),
    version: "2.5.0"
  });
}
