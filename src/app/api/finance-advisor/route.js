import { NextResponse } from 'next/server';
import { validateMessage } from '@/lib/security';
import { createConversation, addMessage } from '@/lib/chatStore';

const MAX_MESSAGES_PER_SESSION = 20;

const SYSTEM_PROMPT = `You are "Money Matters Advisor" — a friendly, knowledgeable financial advisor for Indian youth (ages 18-30). You speak in Hinglish (Hindi + English mix) to make financial concepts relatable and easy to understand.

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
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: apiKey,
        query: query,
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
    // Convert generic roles to Gemini roles ('user' -> 'user', 'assistant' -> 'model')
    const contents = messages.map(msg => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }]
    }));

    // Use Gemini 3.1 Flash Lite
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        system_instruction: {
           parts: [{ text: systemPrompt }]
        },
        contents: contents,
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
    const { message, context, conversationId } = body;

    const validation = validateMessage(message);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    const sessionCount = context?.sessionCount || 0;
    if (sessionCount >= MAX_MESSAGES_PER_SESSION) {
      return NextResponse.json({
        reply: `Arre bhai, bahut baat kar li! 😅 Session limit ho gayi hai. Thoda break lo! 💡\n\n⚠️ Ye educational advice hai.`,
        rateLimited: true,
      });
    }

    // Prepare context strings
    let contextStr = '';
    
    // Check if learning module context is available
    if (context?.moduleContext) {
        const mc = context.moduleContext;
        contextStr += `\n\n## Module Context (The user is currently learning this):\n`;
        contextStr += `Module: ${mc.moduleTitle}\n`;
        contextStr += `Topic: ${mc.cardTopic || mc.cardTitle}\n`;
        contextStr += `Content:\n${mc.cardContent}\n`;
        contextStr += `\nPlease answer their query related to this context if applicable.\n`;
    }

    // Check user state context
    const parts = [];
    if (context?.userName) parts.push(`User ka naam: ${context.userName}`);
    if (context?.coins !== undefined) parts.push(`Coins earned: ${context.coins}`);
    if (context?.completedModules?.length) parts.push(`Modules completed: ${context.completedModules.length}/11`);
    if (parts.length > 0) {
      contextStr += `\n\n## User Stats:\n${parts.join('\n')}`;
    }

    // Call Tavily Search for real-time info
    const tavilyResult = await callTavily(validation.sanitized);
    if (tavilyResult) {
        contextStr += `\n\n## Internet Search Context (Tavily):\n${tavilyResult}\nUse this if it helps answer the query.\n`;
    }

    // Construct prompt
    const fullSystemPrompt = SYSTEM_PROMPT + contextStr;

    // Firestore Memory Check
    let activeConversationId = conversationId;
    let history = context?.recentMessages || [];

    if (!activeConversationId) {
        // Create new conversation
        const conv = await createConversation(message.substring(0, 50));
        if (conv) activeConversationId = conv.id;
    }

    if (activeConversationId) {
        await addMessage(activeConversationId, "user", validation.sanitized);
    }

    // Format messages for LLM
    const llmMessages = [
        ...history.map(m => ({ role: m.role, content: m.content })),
        { role: 'user', content: validation.sanitized }
    ];

    const llmReply = await callGemini(llmMessages, fullSystemPrompt);

    if (llmReply) {
      if (activeConversationId) {
          await addMessage(activeConversationId, "assistant", llmReply);
      }
      return NextResponse.json({ reply: llmReply, conversationId: activeConversationId });
    }

    return NextResponse.json(
      { error: "Arre yaar, AI model connect nahi ho pa raha. Check API Keys!" },
      { status: 500 }
    );
  } catch (error) {
    console.error('Finance Advisor API error:', error);
    return NextResponse.json(
      { error: 'Arre yaar, kuch technical problem aa gayi! 🙏 Thoda der baad try karo.' },
      { status: 500 }
    );
  }
}
