import { NextResponse } from 'next/server';
import { callGemini } from '@/lib/gemini';
import { createConversation, addMessage } from '@/lib/chatStore';
import { sanitizeString } from '@/lib/security';

const MAX_MESSAGES_PER_SESSION = 20;

const SYSTEM_PROMPT = `You are "Paisa Guru" — a friendly finance teacher for Indian youth. You ONLY discuss personal finance topics. Speak in Hinglish.

## STRICT RULES:
- ONLY answer finance/money questions
- If non-finance, politely redirect to finance topics
- NEVER give stock buy/sell tips
- NEVER promise guaranteed returns
- ALWAYS add disclaimer for detailed answers
- Use Indian examples: ₹, chai, Zomato, metro, UPI
- Keep responses concise and practical

## TOPICS YOU TEACH:
Budgeting, saving, investing (SIP, mutual funds), banking, UPI, credit cards, loans, taxes, insurance, retirement planning, financial goals, salary management, emergency funds, PPF, NPS, ELSS, and all Indian financial instruments.`;

async function callTavily(query) {
  const apiKey = process.env.TAVILY_API_KEY;
  if (!apiKey) return null;
  try {
    const res = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        query: `India personal finance ${query}`,
        search_depth: "basic",
        include_answer: true,
        max_results: 3,
        topic: "finance"
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

export async function POST(request) {
  try {
    const body = await request.json();
    const { message, context, conversationId } = body;

    const validation = sanitizeString(message);
    if (!validation) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const sessionCount = context?.sessionCount || 0;
    if (sessionCount >= MAX_MESSAGES_PER_SESSION) {
      return NextResponse.json({
        reply: `Arre bhai, bahut baat kar li! 😅 Session limit ho gayi hai. Thoda break lo!\n\n💡 Ye educational advice hai.`,
        rateLimited: true,
      });
    }

    // Build context
    let contextStr = '';

    if (context?.moduleContext) {
      const mc = context.moduleContext;
      contextStr += `\n\n## Module Context:\nModule: ${mc.moduleTitle}\nTopic: ${mc.cardTopic || mc.cardTitle}\nContent: ${mc.cardContent}\n`;
    }

    const parts = [];
    if (context?.userName) parts.push(`User ka naam: ${context.userName}`);
    if (context?.coins !== undefined) parts.push(`Coins earned: ${context.coins}`);
    if (context?.completedModules?.length) parts.push(`Modules completed: ${context.completedModules.length}/11`);
    if (parts.length > 0) contextStr += `\n\n## User Stats:\n${parts.join('\n')}`;

    // Tavily search
    const tavilyResult = await callTavily(validation);
    if (tavilyResult) {
      contextStr += `\n\n## Real-time Finance Context:\n${tavilyResult}\n`;
    }

    const fullSystemPrompt = SYSTEM_PROMPT + contextStr;

    // Conversation management
    let activeConversationId = conversationId;
    let history = context?.recentMessages || [];

    if (!activeConversationId) {
      const conv = await createConversation(validation.substring(0, 50));
      if (conv) activeConversationId = conv.id;
    }

    if (activeConversationId) {
      await addMessage(activeConversationId, "user", validation);
    }

    const llmMessages = [
      ...history.map(m => ({ role: m.role, content: m.content })),
      { role: 'user', content: validation }
    ];

    const llmReply = await callGemini({
      systemInstruction: fullSystemPrompt,
      contents: llmMessages.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      })),
      temperature: 0.7,
      maxTokens: 800
    });

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
