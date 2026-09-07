import { NextResponse } from "next/server";
import { callGemini } from "@/lib/gemini";
import { createConversation, getRecentMessages, addMessage } from "@/lib/chatStore";
import { sanitizeString } from "@/lib/security";

const SYSTEM_PROMPT = `You are "Paisa Guru" — a friendly, knowledgeable finance teacher for Indian youth (ages 18-30). You speak in Hinglish (Hindi + English mix) to make financial concepts relatable and easy to understand.

## YOUR CORE PURPOSE:
You exist ONLY to teach personal finance. Every response must be about money, investing, saving, budgeting, taxes, insurance, or financial planning for Indian users.

## YOUR PERSONALITY:
- Warm, encouraging, and non-judgmental
- Use casual Hinglish: "Bhai", "Yaar", "Dekho", "Samjho", "Simple hai"
- Crack light financial jokes occasionally
- Always supportive — never make users feel dumb about money
- Act like a knowledgeable elder brother/sister who's good with money

## WHAT YOU TEACH (ONLY these topics):
- Budgeting and saving strategies
- Emergency funds and financial safety nets
- Debt management (credit cards, loans, EMIs)
- Banking basics (savings accounts, FDs, RDs)
- Investing basics (SIP, mutual funds, stocks, bonds)
- Tax planning (old vs new regime, 80C, 80D)
- Insurance (health, life, vehicle)
- Financial independence and retirement planning
- UPI, digital payments, and fintech tools
- Indian financial instruments: PPF, NPS, ELSS, NPS, SCSS
- Salary management and negotiation tips
- Side income and freelance finance
- Goal-based financial planning
- Behavioral finance and money psychology

## HOW YOU TEACH:
- Use Indian rupee (₹) amounts and relatable examples (chai ₹40, Zomato ₹300, metro ₹50, Netflix ₹199)
- Break complex topics into simple 3-4 steps
- Give practical, actionable advice — not theory
- Mention real Indian tools: UPI, SIP, PPF, NPS, Groww, Zerodha, Kuvera
- Use bullet points, numbered lists, and short paragraphs
- Include a "Pro Tip" at the end of detailed answers
- Use real-life Indian scenarios (monthly salary, rent in tier-1/tier-2 cities, festival expenses)

## STRICT RULES:
- NEVER give specific stock buy/sell recommendations
- NEVER promise guaranteed returns
- NEVER discuss crypto in detail (redirect to mutual funds)
- NEVER answer non-finance questions — politely redirect to finance
- ALWAYS add disclaimer: "Ye educational advice hai, professional financial advice nahi"
- Keep responses concise: 2-4 paragraphs for simple, 4-6 for complex
- If you don't know something specific, say so honestly
- Always encourage learning, not gambling with money

## IF USER ASKS NON-FINANCE:
Gently redirect: "Bhai, main sirf finance ke baare mein baat kar sakta hoon! Paise se related kuch poocho — budgeting, saving, investing, tax, kuch bhi! 💰"`;

const FINANCE_KEYWORDS = [
  'invest', 'saving', 'budget', 'tax', 'mutual fund', 'sip', 'stock', 'nifty', 'sensex',
  'ppf', 'nps', 'fd', 'rd', 'insurance', 'emi', 'loan', 'credit', 'debit', 'upi',
  'wallet', 'bank', 'interest', 'compound', 'inflation', 'salary', 'income', 'expense',
  'debt', 'wealth', 'retire', 'pension', 'gold', 'real estate', 'fund', 'portfolio',
  'dividend', 'equity', 'debt', 'bond', 'gilt', 'index', 'return', 'risk', 'profit',
  'loss', 'trading', 'broker', 'demat', 'ipo', 'mutual', 'elss', 'ssc', 'hra',
  'deduction', 'refund', 'itr', 'form 16', 'pan', 'aadhaar', 'kyc', 'credit score',
  'cibil', 'budget', 'expense tracker', 'financial', 'finance', 'paisa', 'paise',
  'rupee', 'rupya', 'investment', 'plan', 'goal', 'emergency fund', 'corpus', 'swp',
  'stp', 'lumpsum', 'flexicap', 'midcap', 'smallcap', 'largecap', 'index fund',
  'etf', 'reit', 'invit', 'diversif', 'asset allocation', 'rebalanc', 'term insurance',
  'health insurance', 'car insurance', 'bike insurance', 'claim', 'premium', 'cover',
  'nip', 'annual report', 'quarterly result', 'profit margin', 'pe ratio', 'pb ratio',
  'roe', 'roce', 'ebitda', 'market cap', 'sector', 'alloy', 'gold', 'silver',
  'commodity', 'forex', 'dollar', 'rupee depreciation', 'current account deficit',
  'rbi', 'repo rate', 'inflation', 'gdp', 'fiscal deficit', 'monetary policy',
  'budget 2024', 'budget 2025', 'tax slab', 'old regime', 'new regime', 'standard deduction',
  'freelanc', 'gst', 'business', 'startup', 'side hustle', 'passive income',
  'real estate', 'rent', 'lease', 'stamp duty', 'registration', 'property',
  'wedding', 'education', 'child plan', 'sukanya', 'pension', 'annuity',
  'financial freedom', 'fire', 'lean fire', 'fat fire', 'coast fire'
];

function isFinanceRelated(message) {
  const lower = message.toLowerCase();
  return FINANCE_KEYWORDS.some(kw => lower.includes(kw));
}

async function callTavily(query) {
  const apiKey = process.env.TAVILY_API_KEY;
  if (!apiKey) return null;

  const financeQuery = `India personal finance ${query}`;

  try {
    const res = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        query: financeQuery,
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
    let { message, conversationId } = body;

    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const sanitized = sanitizeString(message);
    if (!sanitized) {
      return NextResponse.json({ error: "Invalid message" }, { status: 400 });
    }

    // Content filter: check if finance-related
    if (!isFinanceRelated(sanitized)) {
      const redirectMsg = `Bhai, main sirf **personal finance** ke baare mein baat kar sakta hoon! 😊\n\nPaise se related kuch poocho:\n- 💰 Budgeting & Saving\n- 📈 Investing (SIP, Mutual Funds)\n- 🏦 Banking & UPI\n- 💳 Credit Cards & Loans\n- 📋 Tax Planning\n- 🛡️ Insurance\n- 🎯 Financial Goals\n\n*"Paisa hai toh main hoon!"* 💸`;

      return new Response(
        createSSEStream(redirectMsg, 'AI', []),
        {
          headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Conversation-Id": conversationId || ""
          }
        }
      );
    }

    // Create conversation if needed
    if (!conversationId) {
      const conv = await createConversation(sanitized.substring(0, 50));
      if (conv) conversationId = conv.id;
    }

    // Load history
    let history = [];
    if (conversationId) {
      history = await getRecentMessages(conversationId, 10);
    }

    // Save user message
    if (conversationId) {
      await addMessage(conversationId, "user", sanitized);
    }

    // Search for real-time finance context
    const tavilyResult = await callTavily(sanitized);

    // Build context
    let contextStr = '';
    if (tavilyResult) {
      contextStr = `\n\n## Real-time Finance Context (from web):\n${tavilyResult}\n\nUse this data to give current, accurate advice. If the data is about market numbers, mention them. If it's about schemes/policies, reference them.`;
    }

    const fullSystemPrompt = SYSTEM_PROMPT + contextStr;

    // Format messages for LLM
    const llmMessages = [
      ...history.map(m => ({ role: m.role, content: m.content })),
      { role: 'user', content: sanitized }
    ];

    // Call Gemini
    const startTime = Date.now();
    const reply = await callGemini({
      systemInstruction: fullSystemPrompt,
      contents: llmMessages.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      })),
      temperature: 0.7,
      maxTokens: 800
    });
    const latencyMs = Date.now() - startTime;

    if (reply) {
      // Save assistant message
      if (conversationId) {
        await addMessage(conversationId, "assistant", reply, {
          latency_ms: latencyMs,
        });
      }

      // Determine route based on Tavily usage
      const route = tavilyResult ? 'ONLINE' : 'AI';

      // Return as SSE stream
      return new Response(
        createSSEStream(reply, route, []),
        {
          headers: {
            "Content-Type": "text/event-stream",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "X-Conversation-Id": conversationId || ""
          }
        }
      );
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

function createSSEStream(content, route, sources) {
  const stream = new ReadableStream({
    start(controller) {
      const encoder = new TextEncoder();
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'metadata', route, sources })}\n\n`));
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'chunk', content })}\n\n`));
      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: 'done' })}\n\n`));
      controller.close();
    }
  });
  return stream;
}
