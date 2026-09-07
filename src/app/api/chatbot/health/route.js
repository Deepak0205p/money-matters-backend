import { NextResponse } from "next/server";

export async function GET() {
  const geminiKey = !!process.env.GEMINI_API_KEY;
  const tavilyKey = !!process.env.TAVILY_API_KEY;

  const checks = {
    status: geminiKey ? "healthy" : "degraded",
    gemini: geminiKey,
    tavily: tavilyKey,
    timestamp: new Date().toISOString(),
    version: "2.0.0",
  };

  if (!geminiKey) {
    checks.status = "degraded";
    checks.detail = "GEMINI_API_KEY not set — AI responses won't work";
  }

  if (!tavilyKey) {
    checks.warnings = ["TAVILY_API_KEY not set — real-time search disabled"];
  }

  return NextResponse.json(checks);
}
