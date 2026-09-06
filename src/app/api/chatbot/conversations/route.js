import { NextResponse } from "next/server";
import { getConversations } from "@/lib/chatStore";

export async function GET() {
  try {
    const data = await getConversations();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { createConversation } = await import("@/lib/chatStore");
    const { title } = await request.json().catch(() => ({ title: "New Conversation" }));
    const data = await createConversation(title || "New Conversation");
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
  }
}
