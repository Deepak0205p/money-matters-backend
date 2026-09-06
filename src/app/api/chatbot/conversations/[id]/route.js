import { NextResponse } from "next/server";
import { getMessages, deleteConversation } from "@/lib/chatStore";

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const data = await getMessages(id);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params;
    await deleteConversation(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
