import { NextResponse } from 'next/server';
import { validateNumericFields } from '@/lib/security';
import { callGemini } from '@/lib/gemini';

const FALLBACK_TIPS = [
  { tip: 'Pehle emergency fund banao — 6 mahine ka kharcha save karo', priority: 'high' },
  { tip: 'Health insurance zaroori hai — hospital bill maar sakti hai', priority: 'high' },
  { tip: 'SIP se shuru karo — ₹500 se bhi shuru ho sakta hai', priority: 'medium' },
  { tip: 'Credit card ka bill hamesha full pay karo', priority: 'medium' },
];

async function callLLM(income, expenses, savings) {
  try {
    const prompt = `You are a friendly Indian financial advisor speaking Hinglish. A user shared their financial info:
- Monthly income: ₹${income.toLocaleString('en-IN')}
- Monthly expenses: ₹${expenses.toLocaleString('en-IN')}
- Monthly savings: ₹${savings.toLocaleString('en-IN')}

Give 5 personalized financial priority tips as a JSON array. Each tip should have:
- "tip": A short Hinglish tip (1 sentence)
- "priority": "high", "medium", or "low"

Return ONLY the JSON array, no markdown. Example:
[{"tip":"Emergency fund banao","priority":"high"},{"tip":"SIP start karo","priority":"medium"}]`;

    const content = await callGemini({
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      temperature: 0.7,
      maxTokens: 400
    });

    if (!content) return null;
    const match = content.match(/\[[\s\S]*\]/);
    if (match) {
      const parsed = JSON.parse(match[0]);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
    return null;
  } catch {
    return null;
  }
}

export async function POST(request) {
  try {
    const { income, expenses, savings } = await request.json();

    const validation = validateNumericFields({ income, expenses, savings });
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error || "Invalid numeric fields" },
        { status: 400 }
      );
    }

    if (!income || income <= 0) {
      return NextResponse.json(
        { error: "Income must be greater than 0" },
        { status: 400 }
      );
    }

    const tips = await callLLM(income, expenses || 0, savings || 0) ?? FALLBACK_TIPS;
    return NextResponse.json({ tips });
  } catch {
    return NextResponse.json({ tips: FALLBACK_TIPS });
  }
}
