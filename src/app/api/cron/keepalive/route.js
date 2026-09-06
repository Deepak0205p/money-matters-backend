import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const backendUrl = process.env.RENDER_EXTERNAL_URL || process.env.NEXT_PUBLIC_API_URL;
  const frontendUrl = process.env.FRONTEND_URL;

  const results = {};

  if (backendUrl) {
    try {
      const res = await fetch(`${backendUrl}/api/health`, { cache: "no-store" });
      results.backend = res.ok ? "pinged_successfully" : `failed_with_status_${res.status}`;
    } catch (err) {
      results.backend = `error: ${err.message}`;
    }
  }

  if (frontendUrl) {
    try {
      const res = await fetch(frontendUrl, { cache: "no-store" });
      results.frontend = res.ok ? "pinged_successfully" : `failed_with_status_${res.status}`;
    } catch (err) {
      results.frontend = `error: ${err.message}`;
    }
  }

  return NextResponse.json({
    status: "keepalive_executed",
    timestamp: new Date().toISOString(),
    results,
  });
}
