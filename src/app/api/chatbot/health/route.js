import { NextResponse } from "next/server";

export async function GET() {
  const checks = {
    status: "healthy",
    gemini: !!process.env.GEMINI_API_KEY,
    tavily: !!process.env.TAVILY_API_KEY,
    timestamp: new Date().toISOString(),
  };

  // Quick Gemini key validation
  if (!process.env.GEMINI_API_KEY) {
    checks.status = "degraded";
    checks.detail = "GEMINI_API_KEY not set — AI responses won't work";
  }

  return NextResponse.json(checks);
}
