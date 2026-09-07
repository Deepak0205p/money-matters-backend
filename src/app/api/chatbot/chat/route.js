import { NextResponse } from "next/server";
import { callGemini } from "@/lib/gemini";
import { createConversation, getRecentMessages, addMessage } from "@/lib/chatStore";

const SYSTEM_PROMPT = `You are "Paisa Guru" — an interactive, friendly, and expert financial education mentor designed specifically to help young learners master personal finance.

## STRICT OBJECTIVE & SCOPE:
1. EDUCATIONAL PURPOSES ONLY: You are here to TEACH personal finance concepts (Budgeting, Compounding, Inflation, Emergency Fund, Debt Management, Credit Scores, Banking Basics, Insurance Fundamentals, Saving Habits, 50/30/20 Rule, Basic Tax Concepts).
2. ABSOLUTELY NO INVESTMENT IDEAS / STOCK TIPS: Never recommend specific stocks to buy, crypto tokens, trading calls, speculative investments, or guaranteed return schemes.
3. If a user asks for stock picks, investment ideas, or price predictions, politely decline: explain that you only teach financial principles and risk management, and explain the core concept (e.g. index funds, diversification, risk-reward trade-off) instead.
4. NON-FINANCE QUESTIONS: If asked about non-financial topics (movies, sports, politics, general coding, etc.), politely guide the user back to learning personal finance.

## STYLE & LANGUAGE:
- Speak in warm, conversational, easy-to-understand Hinglish (Hindi + English mix).
- Use real-world Indian examples (₹ amounts, chai, Zomato, salary, UPI, PPF, FD, SIP).
- Keep explanations structured: clear steps, bullet points, and practical takeaways.
- Include a short "💡 Learning Takeaway / Pro Tip" at the end of each educational explanation.`;

const NON_FINANCE_PATTERNS = [
  /who won/i, /cricket/i, /football/i, /movie/i, /actor/i, /weather/i,
  /recipe/i, /cook/i, /song/i, /lyrics/i, /joke/i, /coding/i, /javascript/i,
  /python code/i, /html css/i, /president/i, /politics/i, /election/i
];

function isOffTopic(text) {
  const t = text.toLowerCase().trim();
  if (t.length < 2) return false;
  return NON_FINANCE_PATTERNS.some(p => p.test(t));
}

async function callTavily(query) {
  const apiKey = process.env.TAVILY_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiKey,
        query: `India financial literacy concept ${query}`,
        search_depth: "basic",
        include_answer: true,
        max_results: 2,
        topic: "finance"
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.answer || data.results?.map(r => r.content).join('\n') || null;
  } catch (err) {
    console.warn("Tavily lookup note:", err.message);
    return null;
  }
}

// Educational Fallback Engine (when Gemini API key is offline / not yet configured)
function getEducationalFallback(query) {
  const q = query.toLowerCase();

  if (q.includes('stock') && (q.includes('buy') || q.includes('tip') || q.includes('best') || q.includes('recommend'))) {
    return `**Bhai, main stock tips ya specific investment ideas nahi deta hoon! 🚫📈**\n\nMain aapko **Financial Literacy** seekhane ke liye bana hoon taaki aap khud smart financial decisions le sako.\n\n### 📚 Core Concept: Stock Picking vs Index Investing\n1. **Individual Stocks:** High risk hota hai aur deep company research chahiye hoti hai.\n2. **Index Funds / Broad Diversification:** Nifty 50 jaise index funds mein top 50 Indian companies ka basket milta hai jisse single-stock risk khatam hota hai.\n3. **Golden Rule:** Kabhi bhi tips par paisa mat lagao. Pehle Emergency Fund banao, phir long-term SIP start karo.\n\n💡 *Pro Tip: Financial learning par dhyan do, quick money schemes se bacho!*`;
  }

  if (q.includes('budget') || q.includes('50/30/20') || q.includes('salary') || q.includes('kharcha')) {
    return `### 📊 50/30/20 Budgeting Rule — Simple & Powerful!\n\nAap apni monthly income ko 3 parts mein divide karo:\n\n1. **50% Needs (Zarooratein):** Rent, grocery, electricity bill, transit, basic insurance.\n2. **30% Wants (Shauk):** Dining out, Netflix, shopping, weekend trips.\n3. **20% Savings & Debt Repayment (Future Wealth):** Emergency fund, SIPs, retirement.\n\n### 🚀 Action Step:\n- Salary aate hi pehle **20% save/invest** karo ("Pay Yourself First"), baaki 80% se mahine ka kharcha chalao!\n\n💡 *Pro Tip: Wants ko credit card par stretch mat karo, UPI expense track karo.*`;
  }

  if (q.includes('sip') || q.includes('mutual fund') || q.includes('compound') || q.includes('invest')) {
    return `### 💡 SIP & The Power of Compounding (Chakravriddhi Byaj)\n\n**SIP (Systematic Investment Plan)** ka matlab hai har mahine ek fixed amount (e.g. ₹500 ya ₹2,000) regular invest karna.\n\n### 🌟 Kyun zaroori hai:\n1. **Rupee Cost Averaging:** Market girne par zyada units milti hain, badhne par portfolio grow hota hai.\n2. **Discipline:** Har mahine automatic investment hoti hai.\n3. **Power of Time (Compounding):**\n   - ₹2,000/month @ 12% for 15 years = **₹10 Lakhs** (Investment: ₹3.6L | Wealth Gain: ₹6.4L!)\n\n💡 *Pro Tip: Market timing karne ki zaroorat nahi hoti, bas early start karo aur consistent raho.*`;
  }

  if (q.includes('emergency fund') || q.includes('emergency')) {
    return `### 🛡️ Emergency Fund — Aapka Financial Lifejacket!\n\nEmergency fund wo paisa hai jo medical emergency, sudden job loss, ya unexpected expenses ke liye safe rakha jata hai.\n\n### 📌 Golden Rules:\n1. **Kitna hona chahiye?** Aapke monthly mandatory expenses ka **3 to 6 months** ka amount.\n2. **Kahan rakhein?** High Liquidity options mein — jaise High Interest Savings Account ya Liquid Mutual Funds (Stock market mein nahi!).\n3. **Rule:** Isse shopping ya vacation ke liye touch nahi karna hai!\n\n💡 *Pro Tip: Pehle Emergency fund complete karo, uske baad hi long-term riskier investments karo.*`;
  }

  return `### 🎓 Financial Education Guide\n\nMain aapko finance ke concepts seekhane mein madad karne ke liye yahan hoon!\n\nAap in topics par seekh sakte hain:\n- 💰 **Budgeting & Expense Tracking** (50/30/20 rule)\n- 🛡️ **Emergency Fund & Insurance Basics**\n- 📈 **Power of Compounding & SIP Mechanics**\n- 💳 **Credit Card Discipline & Debt Traps**\n- 🏦 **Savings Accounts vs FDs vs Liquid Funds**\n- 📋 **Basics of Indian Taxes (Old vs New Regime)**\n\n*Aap kis concept ke baare mein detail mein seekhna chahte hain?*`;
}

export async function POST(request) {
  try {
    const body = await request.json();
    let { message, conversationId } = body || {};

    if (!message || !message.trim()) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const trimmed = message.trim();

    // 1. Off-topic filter check
    if (isOffTopic(trimmed)) {
      const redirectMsg = `Bhai, main sirf **personal finance seekhane** ke liye hoon! 🎓💰\n\nMain non-finance questions answer nahi karta. Paise se related concepts poocho jaise:\n- 📊 Budgeting kaise karein?\n- 🛡️ Emergency Fund kyun zaroori hai?\n- 💡 Compounding aur SIP kaise kaam karta hai?\n- 💳 Credit cards ke debt trap se kaise bachein?\n\n*Aapka finance se related kya sawal hai?*`;

      return new Response(createSSEStream(redirectMsg, 'AI', []), {
        headers: {
          "Content-Type": "text/event-stream",
          "Cache-Control": "no-cache",
          "Connection": "keep-alive",
          "X-Conversation-Id": conversationId || ""
        }
      });
    }

    // 2. Manage Conversation & History
    if (!conversationId) {
      const conv = await createConversation(trimmed.substring(0, 45));
      if (conv) conversationId = conv.id;
    }

    let history = [];
    if (conversationId) {
      history = await getRecentMessages(conversationId, 6);
      await addMessage(conversationId, "user", trimmed);
    }

    // 3. Search web context via Tavily if needed
    const tavilyInfo = await callTavily(trimmed);
    let extraContext = '';
    if (tavilyInfo) {
      extraContext = `\n\n## Verified Concept Context:\n${tavilyInfo}\nUse this purely for accurate educational explanations.`;
    }

    // 4. Prepare Prompt Messages
    const llmMessages = [
      ...history.map(m => ({ role: m.role, content: m.content })),
      { role: 'user', content: trimmed }
    ];

    // 5. Call Gemini LLM
    const startTime = Date.now();
    let reply = await callGemini({
      systemInstruction: SYSTEM_PROMPT + extraContext,
      contents: llmMessages.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      })),
      temperature: 0.6,
      maxTokens: 900
    });

    const latencyMs = Date.now() - startTime;

    // 6. Fallback to rich educational response if API key is not set or network fails
    if (!reply) {
      reply = getEducationalFallback(trimmed);
    }

    if (conversationId && reply) {
      await addMessage(conversationId, "assistant", reply, {
        latency_ms: latencyMs,
      });
    }

    const route = tavilyInfo ? 'ONLINE' : 'AI';

    return new Response(createSSEStream(reply, route, []), {
      headers: {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive",
        "X-Conversation-Id": conversationId || ""
      }
    });

  } catch (error) {
    console.error("[Chatbot API] Error processing chat:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
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
