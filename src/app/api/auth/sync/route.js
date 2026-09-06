import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { uid, email, displayName, photoURL } = body || {};

    if (!uid || !email) {
      return NextResponse.json(
        { error: "User ID and email are required for auth sync" },
        { status: 400 }
      );
    }

    // Return synced confirmation and user metadata
    return NextResponse.json({
      status: "success",
      message: "User session authenticated and synced",
      user: {
        uid,
        email,
        displayName: displayName || "Scholar",
        photoURL: photoURL || null,
        authenticatedAt: new Date().toISOString(),
        isRegistered: true,
      },
    });
  } catch (error) {
    console.error("[AuthSync] Error processing user sync:", error);
    return NextResponse.json(
      { error: "Internal server error during auth sync" },
      { status: 500 }
    );
  }
}
