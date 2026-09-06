import { NextResponse } from 'next/server';

const OVERVIEW_PROMPT = `You are a financial goal planner for Indian youth (18-30).

## Step 1: Plan the Month Groups
Divide the goal into 3-6 month groups. Each group = a phase of the savings journey.

## Step 2: For EACH month group, plan:
- What is the financial milestone for this group
- Key actions to take
- What habit to build
- What to avoid
- Monthly savings target
- A one-line motivation for this phase

## Output Format — ONLY valid JSON:
{
  "title": "emoji + goal title",
  "tagline": "catchy Hinglish tagline",
  "summary": "2-3 sentence overview",
  "totalMonths": number,
  "monthlySavingsRequired": number,
  "dailyTarget": number,
  "savingsStrategy": "strategy name",
  "monthGroups": [
    {
      "id": 1,
      "monthRange": "Month 1-3",
      "title": "Group title",
      "emoji": "🏔️",
      "subtitle": "short subtitle",
      "overview": "2-3 line overview of this group in Hinglish",
      "targetSavings": number,
      "cumulativeTarget": number,
      "keyHabit": "the ONE habit to build this phase",
      "whatToAvoid": "the ONE thing to avoid",
      "motivation": "motivational line for this phase",
      "difficulty": "🌱 Starter" | "🔥 Hustler" | "💎 Crusher" | "🏆 Legend"
    }
  ],
  "warnings": [
    { "title": "short title", "detail": "Hinglish explanation", "emoji": "⚠️" }
  ],
  "proTips": ["tip1", "tip2", "tip3"],
  "motivation": "final motivational message in Hinglish",
  "weeklyCheckIn": "weekly review question"
}`;

const MONTH_DETAIL_PROMPT = `You are a financial goal planner. You already have an overview roadmap. Now create the DETAILED plan for ONE specific month group.

## Input:
You will receive:
1. The full overview roadmap (for context)
2. The specific month group to detail (monthRange, title, targetSavings, etc.)
3. User context (coins, modules, streak)

## Your Task:
Create an EXTREMELY detailed plan for this month group. Think step by step:

### Week-by-Week Breakdown:
Split the month group into weeks. For EACH week:
- Week number
- Title (catchy)
- 3-4 specific daily actions
- Savings target for the week
- Key milestone to hit
- Common pitfall to watch out for

### Daily Actions (for this month group):
Create 5-6 specific actions with:
- Exact action (not vague)
- Savings amount in ₹
- Difficulty: easy/medium/hard/extreme
- Best time to do it
- Why it works
- Streak tip
- What happens if you skip

### Weekly Check-in Questions (for this month group):
4 questions to ask yourself at the end of each week

### Monthly Milestone:
- What specific amount to have saved by end of this month group
- Celebration reward idea
- Key metric to track

### Emergency Plan:
- What to do if you can't meet the weekly target
- Backup plan

## Output — ONLY valid JSON:
{
  "monthGroup": "Month X-Y",
  "title": "Group title",
  "overview": "detailed 3-4 line overview",
  "weeklyPlan": [
    {
      "week": 1,
      "title": "Week title",
      "actions": ["action1", "action2", "action3"],
      "savingsTarget": number,
      "keyMilestone": "what to achieve",
      "pitfall": "what to avoid"
    }
  ],
  "dailyActions": [
    {
      "id": 1,
      "action": "specific action",
      "savings": "₹XXX",
      "difficulty": "easy|medium|hard|extreme",
      "bestTime": "morning|afternoon|evening|night",
      "whyItWorks": "reason",
      "streakTip": "consistency tip",
      "ifYouSkip": "consequence"
    }
  ],
  "weeklyCheckIn": ["q1", "q2", "q3", "q4"],
  "monthlyMilestone": {
    "targetSavings": number,
    "reward": "celebration idea",
    "metric": "what to track"
  },
  "emergencyPlan": {
    "ifShortfall": "what to do",
    "backupPlan": "alternative approach"
  },
  "keyHabitToTrack": "the ONE habit",
  "whatToAvoid": "the ONE thing to avoid",
  "motivation": "motivational line"
}`;

async function callTavily(query) {
  const apiKey = process.env.TAVILY_API_KEY;
  if (!apiKey) return null;
  try {
    const res = await fetch('https://api.tavily.com/search', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: apiKey, query, search_depth: "basic", include_answer: true, max_results: 3 }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.answer || data.results?.map(r => r.content).join('\n') || null;
  } catch { return null; }
}

async function callGemini(prompt, systemPrompt, maxTokens = 2000) {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) { console.warn("GEMINI_API_KEY not found!"); return null; }
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: { maxOutputTokens: maxTokens, temperature: 0.7 }
      }),
    });
    if (!res.ok) { console.error("Gemini Error:", await res.text()); return null; }
    const data = await res.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text ?? null;
  } catch (err) { console.error("Gemini exception:", err); return null; }
}

function buildFallbackOverview(goal) {
  const remaining = goal.target - (goal.saved || 0);
  const months = Math.max(3, Math.ceil(remaining / 5000));
  const monthly = Math.ceil(remaining / months);
  return {
    title: `🎯 ${goal.name} Ka Safar`,
    tagline: "Dheere dheere se ghar banega — har din thoda save karo!",
    summary: `Ye roadmap ${goal.name} ke liye ${months} mahine ka hai. Har mahine ₹${monthly.toLocaleString('en-IN')} save karna hai aur dream achieve karna hai!`,
    totalMonths: months,
    monthlySavingsRequired: monthly,
    dailyTarget: Math.ceil(monthly / 30),
    savingsStrategy: "50-30-20 Budget Rule",
    monthGroups: [
      { id: 1, monthRange: `Month 1-${Math.ceil(months * 0.25)}`, title: "Base Camp Setup", emoji: "🏕️", subtitle: "Foundation banao", overview: "Pehle apna budget samjho, expenses track karo, aur daily savings habit banao.", targetSavings: Math.floor(remaining * 0.25), cumulativeTarget: Math.floor(remaining * 0.25), keyHabit: "Har din ₹100+ save karna", whatToAvoid: "Impulse buying", motivation: "Chhote steps se bada safar shuru hota hai!", difficulty: "🌱 Starter" },
      { id: 2, monthRange: `Month ${Math.ceil(months * 0.25) + 1}-${Math.ceil(months * 0.5)}`, title: "Momentum Builder", emoji: "🔥", subtitle: "Speed pakdo", overview: "Ab habit ban gaya hai. Savings rate badhao aur side income explore karo.", targetSavings: Math.floor(remaining * 0.25), cumulativeTarget: Math.floor(remaining * 0.5), keyHabit: "Monthly review karna", whatToAvoid: "Lifestyle inflation", motivation: "Tum already 50% tak pahunch gaye ho!", difficulty: "🔥 Hustler" },
      { id: 3, monthRange: `Month ${Math.ceil(months * 0.5) + 1}-${Math.ceil(months * 0.75)}`, title: "Peak Performance", emoji: "💎", subtitle: "All-out mode", overview: "Maximum savings karo, investments optimize karo, aur final push ke liye tayyar ho jao.", targetSavings: Math.floor(remaining * 0.25), cumulativeTarget: Math.floor(remaining * 0.75), keyHabit: "60% savings rate", whatToAvoid: "Burnout se bachna", motivation: "Bas thoda aur — tum kar sakte ho!", difficulty: "💎 Crusher" },
      { id: 4, monthRange: `Month ${Math.ceil(months * 0.75) + 1}-${months}`, title: "Summit Push", emoji: "🏆", subtitle: "Final冲刺", overview: "Last stretch hai! Consistency rakho aur goal achieve karo. Discipline is everything.", targetSavings: Math.ceil(remaining * 0.25), cumulativeTarget: remaining, keyHabit: "Daily check-in", whatToAvoid: "Last moment give-up", motivation: "Goal poora! Apne aap ko proud feel karo!", difficulty: "🏆 Legend" }
    ],
    warnings: [
      { title: "Credit Card Trap", detail: "Credit card se paisa mat nikalo goal ke liye.", emoji: "💳" },
      { title: "EMI Overload", detail: "Bahut zyada EMI mat lo — 30% income limit.", emoji: "📱" },
      { title: "FOMO Spending", detail: "Dost ke naye phone dekhke mat khareedo.", emoji: "👀" },
      { title: "No Emergency Fund", detail: "Goal se pehle emergency fund banao.", emoji: "🚨" }
    ],
    proTips: ["Har salary ke din turant 30% savings mein daal do", "Glass jar method use karo", "No-spend challenge try karo", "Savings ko gamify karo"],
    motivation: `Bhai, ${goal.name} achieve karna mushkil nahi hai — bas daily ₹${Math.ceil(remaining / months / 30)} save karna hai! LET'S GO! 💪🔥`,
    weeklyCheckIn: "Is hafte maine kitna save kiya? Kya waste hua?"
  };
}

function buildFallbackMonthDetail(monthGroup, goal) {
  return {
    monthGroup: monthGroup.monthRange,
    title: monthGroup.title,
    overview: monthGroup.overview,
    weeklyPlan: [
      { week: 1, title: "Setup Week", actions: ["Budget banana shuru karo", "Expenses track karo", "Daily savings target set karo"], savingsTarget: Math.ceil(monthGroup.targetSavings / 4), keyMilestone: "Budget ready", pitfall: "Bahut strict rules mat banao" },
      { week: 2, title: "Habit Week", actions: ["Daily routine mein savings daalo", "Unnecessary expenses cut karo", "Side income explore karo"], savingsTarget: Math.ceil(monthGroup.targetSavings / 4), keyMilestone: "3-day streak", pitfall: "Perfectionism se bachna" },
      { week: 3, title: "Push Week", actions: ["Savings rate badhao", "Extra income kaam karo", "Weekly review karo"], savingsTarget: Math.ceil(monthGroup.targetSavings / 4), keyMilestone: "60% target hit", pitfall: "Burnout se bachna" },
      { week: 4, title: "Review Week", actions: ["Monthly review karo", "Next month plan banao", "Apne aap ko reward do"], savingsTarget: Math.ceil(monthGroup.targetSavings / 4), keyMilestone: "Monthly target complete", pitfall: "Reward mein over-spend mat karo" }
    ],
    dailyActions: [
      { id: 1, action: "Har din ₹100+ save karo", savings: "₹100+", difficulty: "easy", bestTime: "morning", whyItWorks: "Consistency is key", streakTip: "Same time every day", ifYouSkip: "Habit break hota hai" },
      { id: 2, action: "Bahar ka khana limit karo", savings: "₹300-500", difficulty: "medium", bestTime: "afternoon", whyItWorks: "Food #1 expense leak", streakTip: "Meal prep Sundays", ifYouSkip: "Budget bigadta hai" },
      { id: 3, action: "Extra income ka kaam karo", savings: "₹500-2000", difficulty: "hard", bestTime: "evening", whyItWorks: "Income doubles savings", streakTip: "1 hour daily dedicated", ifYouSkip: "Earning miss hoti hai" },
      { id: 4, action: "Cashback apps use karo", savings: "₹50-100", difficulty: "easy", bestTime: "night", whyItWorks: "Free money", streakTip: "Check offers before pay", ifYouSkip: "Small loss" },
      { id: 5, action: "Weekly review karo", savings: "N/A", difficulty: "easy", bestTime: "weekend", whyItWorks: "Awareness drives change", streakTip: "Every Sunday", ifYouSkip: "No accountability" }
    ],
    weeklyCheckIn: ["Kya daily savings target hit hua?", "Kya koi unnecessary purchase hua?", "Kya naya earning explore kiya?", "Motivation level kaisa hai?"],
    monthlyMilestone: { targetSavings: monthGroup.targetSavings, reward: "Apne liye chhota sa treat do", metric: "Total saved vs target" },
    emergencyPlan: { ifShortfall: "Savings rate temporarily 20% pe lao", backupPlan: "Side income intensity badhao" },
    keyHabitToTrack: monthGroup.keyHabit,
    whatToAvoid: monthGroup.whatToAvoid,
    motivation: monthGroup.motivation
  };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { goal, userContext, mode, monthGroupId } = body;

    if (!goal || !goal.name || !goal.target) {
      return NextResponse.json({ error: 'Goal name and target are required' }, { status: 400 });
    }

    const remaining = goal.target - (goal.saved || 0);

    if (mode === 'monthDetail') {
      // ── ROUND 2: Detailed month plan ──
      const monthGroup = body.monthGroup;
      if (!monthGroup) {
        return NextResponse.json({ error: 'Month group data required' }, { status: 400 });
      }

      const searchQuery = `how to save ${monthGroup.targetSavings} rupees in ${monthGroup.monthRange} India tips`;
      const tavilyResult = await callTavily(searchQuery);

      let contextStr = `\n\n## Goal Context:\n- Goal: ${goal.name}\n- Total Target: ₹${goal.target.toLocaleString('en-IN')}\n- Remaining: ₹${remaining.toLocaleString('en-IN')}\n- Overall Strategy: 50-30-20 Rule`;
      contextStr += `\n\n## Month Group to Detail:\n- Month Range: ${monthGroup.monthRange}\n- Phase Title: ${monthGroup.title}\n- Phase Target: ₹${monthGroup.targetSavings.toLocaleString('en-IN')}\n- Cumulative Target: ₹${monthGroup.cumulativeTarget.toLocaleString('en-IN')}\n- Key Habit: ${monthGroup.keyHabit}\n- What to Avoid: ${monthGroup.whatToAvoid}\n- Difficulty: ${monthGroup.difficulty}`;

      if (userContext) {
        contextStr += `\n\n## User: Coins=${userContext.coins || 0}, Modules=${userContext.completedModules?.length || 0}/11, Streak=${userContext.streak || 0}`;
      }
      if (tavilyResult) {
        contextStr += `\n\n## Research:\n${tavilyResult}`;
      }

      const prompt = `Create detailed plan for this month group:${contextStr}`;
      const reply = await callGemini(prompt, MONTH_DETAIL_PROMPT, 3000);

      if (reply) {
        try {
          const json = reply.match(/\{[\s\S]*\}/);
          if (json) return NextResponse.json({ monthDetail: JSON.parse(json[0]) });
        } catch {}
      }
      return NextResponse.json({ monthDetail: buildFallbackMonthDetail(monthGroup, goal) });

    } else {
      // ── ROUND 1: Overview with month groups ──
      const searchQuery = `best ways to save ${goal.target} rupees for ${goal.name} India young people 2025`;
      const tavilyResult = await callTavily(searchQuery);

      let contextStr = `\n\n## Goal Details:\n- Name: ${goal.name}\n- Target: ₹${goal.target.toLocaleString('en-IN')}\n- Saved: ₹${(goal.saved || 0).toLocaleString('en-IN')}\n- Remaining: ₹${remaining.toLocaleString('en-IN')}\n- Deadline: ${goal.deadline || 'Not set'}\n- Emoji: ${goal.emoji || '🎯'}`;

      if (userContext) {
        const lvl = userContext.completedModules?.length >= 7 ? 'Advanced' : userContext.completedModules?.length >= 4 ? 'Intermediate' : 'Beginner';
        contextStr += `\n\n## User: Coins=${userContext.coins || 0}, Modules=${userContext.completedModules?.length || 0}/11, Streak=${userContext.streak || 0}, Level=${lvl}`;
      }
      if (tavilyResult) {
        contextStr += `\n\n## Research:\n${tavilyResult}`;
      }

      const prompt = `Create a month-grouped financial roadmap:${contextStr}`;
      const reply = await callGemini(prompt, OVERVIEW_PROMPT, 3000);

      if (reply) {
        try {
          const json = reply.match(/\{[\s\S]*\}/);
          if (json) return NextResponse.json({ roadmap: JSON.parse(json[0]) });
        } catch {}
      }
      return NextResponse.json({ roadmap: buildFallbackOverview(goal) });
    }

  } catch (error) {
    console.error('Goal Roadmap API error:', error);
    return NextResponse.json({ error: 'Technical problem aa gayi! 🙏' }, { status: 500 });
  }
}
