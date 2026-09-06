import { NextResponse } from 'next/server';
import { validateMessagesArray, sanitizeString } from '@/lib/security';

const MAX_MESSAGES = 30;

function buildSystemPrompt(moduleContext, userName) {
  const nameLine = userName ? `Tumhara learner ka naam hai ${userName}.` : '';
  const basePrompt = `You are "Rupaiya Guru" — a warm, patient AI Tutor inside the Money Matters financial literacy app. ${nameLine}

## Your Role
You help Indian youth (16-25) understand financial concepts they are currently learning. You speak in friendly Hinglish (Hindi + English mix) — casual, relatable, never condescending. Use words like "Bhai", "Yaar", "Dekho", "Simple hai", "Samjho".

## How You Teach
- Break complex ideas into small, digestible steps
- Use real Indian examples (chai, Zomato, metro, UPI, SIP, ₹ amounts)
- Use bullet points, bold text, and emojis for readability
- Always give a "Pro Tip" at the end of detailed answers
- If the user's doubt is unclear, ask a clarifying question
- Keep answers concise: 2-3 short paragraphs for simple doubts, 4-5 for complex ones
- Encourage curiosity — celebrate good questions with "Sahi sawaal hai! 👏"

## Strict Rules
- Answer STRICTLY based on the module content provided in the context below
- If a question is outside the module's scope, gently redirect: "Yeh topic is module se thoda bahar hai, par main briefly bata deta hoon..." then give a short answer and suggest exploring the relevant module
- NEVER give specific stock recommendations or guaranteed return promises
- NEVER provide professional financial advice — always add a brief disclaimer for investment topics
- Be encouraging — never make the user feel dumb for asking`;

  if (!moduleContext || !moduleContext.moduleTitle) {
    return basePrompt + `\n\n## Current Context\nNo specific module is open right now. If the user asks a question, give a general helpful answer in Hinglish and encourage them to open a learning module for more detailed guidance.`;
  }

  const contextBlock = `## Current Learning Context (ANSWER STRICTLY BASED ON THIS)

**Module:** ${sanitizeString(moduleContext.moduleTitle)}
**Module Description:** ${sanitizeString(moduleContext.moduleDescription)}

**Current Card Topic:** ${sanitizeString(moduleContext.cardTopic)}
**Current Card Title:** ${sanitizeString(moduleContext.cardTitle)}

**Current Card Content:**
---
${sanitizeString(moduleContext.cardContent)}
---

## Important
The user is reading the above content right now. When they ask a doubt:
1. Reference the specific part of the content they're confused about
2. Explain it in simpler Hinglish words with a relatable example
3. If they ask "what does X mean?" and X appears in the content, explain X using the content's context
4. If their question is about something NOT in the content, say so honestly and give a brief helpful answer
5. Connect the concept to real-life Indian scenarios (salary, expenses, family money discussions)`;

  return basePrompt + '\n\n' + contextBlock;
}

const FALLBACK = `Bhai, abhi thodi technical problem hai AI service mein. 🙏

Lekin dekho — jo content tum padh rahe ho, usme key points hain:
- **Main idea** ko dhyan se padho
- **Examples** ko real life se connect karo
- Agar koi specific term samajh nahi aayi, toh woh note karke baad mein pucho

Thoda der baad try karo, main pakka help karunga! 💪`;

async function callLLM(messages, systemPrompt) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  try {
    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages,
        ],
        max_tokens: 800,
        temperature: 0.7,
      }),
    });

    if (!res.ok) return null;
    const data = await res.json();
    return data.choices?.[0]?.message?.content ?? null;
  } catch {
    return null;
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { messages, moduleContext, userName } = body;

    const validation = validateMessagesArray(messages);
    if (!validation.valid) {
      return NextResponse.json(
        { error: validation.error },
        { status: 400 }
      );
    }

    if (validation.sanitized.length > MAX_MESSAGES) {
      return NextResponse.json({
        reply: `Bhai, bahut zyada messages ho gaye hain! 😅 Ek break lo, jo seekha hai usko digest karo, aur phir aao.`,
        rateLimited: true,
      });
    }

    const systemPrompt = buildSystemPrompt(moduleContext || null, sanitizeString(userName || ''));

    const llmReply = await callLLM(validation.sanitized, systemPrompt);

    if (llmReply) {
      return NextResponse.json({
        reply: llmReply,
        hasContext: !!(moduleContext && moduleContext.moduleTitle),
      });
    }

    return NextResponse.json({
      reply: FALLBACK,
      hasContext: !!(moduleContext && moduleContext.moduleTitle),
    });
  } catch (error) {
    console.error('[/api/chat] Error:', error);
    return NextResponse.json(
      { error: 'Arre yaar, kuch technical problem aa gayi! 🙏 Thoda der baad try karo.' },
      { status: 500 }
    );
  }
}
