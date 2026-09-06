import { NextResponse } from 'next/server';
import { validateNumericFields } from '@/lib/security';

const FALLBACK_TIPS = [
  (m, r, y, t, ret) => `₹${Number(m).toLocaleString('en-IN')} har mahine invest karke aap ₹${Number(t).toLocaleString('en-IN')} bana sakte ho! Bas consistency rakho, compounding sab kuch karega! 💪`,
  (m, r, y, t, ret) => `SIP mein sabse important hai discipline! Market upar ya neeche, aapka ₹${Number(m).toLocaleString('en-IN')} har mahine jaata rahe — ye hi wealth banane ka raaz hai!`,
  (m, r, y, t, ret) => `${y} saal mein aapke ₹${Number(m * 12).toLocaleString('en-IN')} se ₹${Number(ret).toLocaleString('en-IN')} sirf returns mein! Ye hai compounding ki asli taakat! 🚀`,
  (m, r, y, t, ret) => `Agar aap sirf 5 saal aur invest karte, toh amount aur bhi double ho jata! Zyada time = zyada compounding magic! ✨`,
  (m, r, y, t, ret) => `₹${Number(m).toLocaleString('en-IN')} mahine ka matlab sirf ₹${Math.round(m / 30)}/din — ek chai se kam! Aur ye chhota investment itna bada fund bana deta hai! ☕`,
];

async function callLLM(monthly, rate, yrs, total, returns) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return null;

  try {
    const prompt = `You are a friendly Indian financial advisor speaking Hinglish. A user is doing a SIP calculation:
- Monthly investment: ₹${monthly}
- Expected return: ${rate}% p.a.
- Time period: ${yrs} years
- Total invested: ₹${total.toLocaleString('en-IN')}
- Estimated returns: ₹${returns.toLocaleString('en-IN')}
- Total value: ₹${Number(total + returns).toLocaleString('en-IN')}

Give a SHORT (2-3 lines) personalized tip about their SIP projection. Use Hinglish, be encouraging, include one practical insight. End with a Pro Tip. Use emojis.`;

    const res = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [{ role: 'user', content: prompt }],
        max_tokens: 200,
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
    const { monthlyInvestment, returnRate, years, totalValue, totalInvested, estimatedReturns } = body;

    const validation = validateNumericFields({
      monthlyInvestment,
      returnRate,
      years,
      totalValue,
      totalInvested,
      estimatedReturns,
    });

    if (!validation.valid) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    if (!monthlyInvestment || !returnRate || !years) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const tip = await callLLM(monthlyInvestment, returnRate, years, totalValue, estimatedReturns)
      ?? FALLBACK_TIPS[(monthlyInvestment + returnRate + years) % FALLBACK_TIPS.length](
          monthlyInvestment, returnRate, years, totalValue, estimatedReturns
        );

    return NextResponse.json({
      tip,
      calculation: { monthlyInvestment, returnRate, years, totalInvested, estimatedReturns, totalValue },
    });
  } catch (error) {
    console.error('SIP calculation API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
