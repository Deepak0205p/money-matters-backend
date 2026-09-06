import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    service: "money-matters-backend",
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
}
