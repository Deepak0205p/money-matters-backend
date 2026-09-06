import { NextResponse } from "next/server";
import { createConversation, getRecentMessages, addMessage } from "@/lib/chatStore";

const SYSTEM_PROMPT = `You are "Money Mentor" — a friendly, knowledgeable financial advisor for Indian youth (ages 18-30). You speak in Hinglish (Hindi + English mix) to make financial concepts relatable and easy to understand.

## Your Personality:
- Warm, encouraging, and non-judgmental
- Use casual Hinglish like "Bhai", "Yaar", "Dekho", "Samjho", "Simple hai"
- Crack light financial jokes occasionally
- Always supportive — never make users feel dumb about money

## How You Give Advice:
- Use Indian rupee (₹) amounts and relatable examples (chai, zomato, metro, etc.)
- Break complex topics into simple steps
- Give practical, actionable advice — not theory
- Mention real Indian financial tools (UPI, SIP, PPF, NPS, mutual funds, etc.)
- Always include a "Pro Tip" at the end of detailed answers

## Important Rules:
- NEVER give specific stock recommendations or guaranteed return promises
- ALWAYS add a disclaimer that this is educational advice, not professional financial advice
- Keep responses concise (2-4 paragraphs max for simple questions, 4-6 for complex ones)
- Use bullet points and emojis for readability
- If user asks something non-financial, gently redirect to finance topics`;

async function callTavily(query) {
  const apiKey = process.env.TAVILY_API_KEY;
  if (!apiKey) return null;
  try {
    const res = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        query,
        search_depth: "basic",
        include_answer: true,
        max_results: 3
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.answer || data.results?.map(r => r.content).join('\n') || null;
  } catch (err) {
    console.error("Tavily error:", err);
    return null;
  }
}

async function callGemini(messages, systemPrompt) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("GEMINI_API_KEY not found!");
    return null;
  }
  try {
    const contents = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents,
        generationConfig: {
          maxOutputTokens: 800,
          temperature: 0.7,
        }
      }),
    });

    if (!res.ok) {
      console.error("Gemini Error:", await res.text());
      return null;
    }
    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text ?? null;
  } catch (err) {
    console.error("Gemini exception:", err);
    return null;
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    let { message, conversationId } = body;

    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    // Create conversation if needed
    if (!conversationId) {
      const conv = await createConversation(message.substring(0, 50));
      if (conv) conversationId = conv.id;
    }

    // Load history
    let history = [];
    if (conversationId) {
      history = await getRecentMessages(conversationId, 10);
    }

    // Save user message
    if (conversationId) {
      await addMessage(conversationId, "user", message);
    }

    // Search for real-time context
    const tavilyResult = await callTavily(message);

    // Build context
    let contextStr = '';
    if (tavilyResult) {
      contextStr = `\n\n## Internet Search Context:\n${tavilyResult}\nUse this if it helps answer the query.`;
    }

    const fullSystemPrompt = SYSTEM_PROMPT + contextStr;

    // Format messages for LLM
    const llmMessages = [
      ...history.map(m => ({ role: m.role, content: m.content })),
      { role: 'user', content: message }
    ];

    // Call Gemini
    const startTime = Date.now();
    const reply = await callGemini(llmMessages, fullSystemPrompt);
    const latencyMs = Date.now() - startTime;

    if (reply) {
      // Save assistant message
      if (conversationId) {
        await addMessage(conversationId, "assistant", reply, {
          latency_ms: latencyMs,
        });
      }

      // Return as SSE stream for frontend compatibility
      const stream = new ReadableStream({
        start(controller) {
          const encoder = new TextEncoder();

          // Send metadata
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'metadata', route: 'AI', sources: [] })}\n\n`));

          // Send content as chunk
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'chunk', content: reply })}\n\n`));

          // Send done
          controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'done', latency_ms: latencyMs })}\n\n`));

          controller.close();
        }
      });

      return new Response(stream, {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive",
          "X-Conversation-Id": conversationId || ""
        }
      });
    }

    return NextResponse.json(
      { error: "AI model se response nahi aa paya. API key check karo!" },
      { status: 500 }
    );

  } catch (error) {
    console.error("Chatbot API error:", error);
    return NextResponse.json(
      { error: "Oops, something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
