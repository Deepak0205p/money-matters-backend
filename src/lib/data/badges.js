// ════════════════════════════════════════════════════════════════════════
// CAPITAL MASTERY — Comprehensive Badge System
// "Midnight Wealth + Blue Growth"
// 30+ badges across 5 categories: Learning, Streaks, Strategies, Special
// ════════════════════════════════════════════════════════════════════════

// Tier color map (for ring + glow effects)
export const TIER_COLORS = {
  bronze: {
    ring: "#CD7F32",
    glow: "rgba(205, 127, 50, 0.45)",
    label: "Bronze",
  },
  silver: {
    ring: "#C0C0C0",
    glow: "rgba(192, 192, 192, 0.45)",
    label: "Silver",
  },
  gold: { ring: "#F59E0B", glow: "rgba(245, 158, 11, 0.55)", label: "Gold" },
  diamond: {
    ring: "#A78BFA",
    glow: "rgba(167, 139, 250, 0.65)",
    label: "Diamond",
  },
};

export const CATEGORY_META = {
  learning: { label: "Learning", emoji: "📚", accent: "#2563eb" },
  streak: { label: "Streaks", emoji: "🔥", accent: "#EF4444" },
  strategy: { label: "Strategies", emoji: "🎮", accent: "#8B5CF6" },
  special: { label: "Special", emoji: "⭐", accent: "#F59E0B" },
};

// ────────────────────────────────────────────────────────────────────────
// LEARNING BADGES (11) — one per module
// ────────────────────────────────────────────────────────────────────────
const LEARNING_BADGES = [
  {
    id: "m1-pehli-seedi",
    name: "Pehli Seedi",
    description: "Paise ki basic samajh ka pehla step poora kiya!",
    category: "learning",
    emoji: "🪜",
    tier: "bronze",
    requirement: "Module 1 — Paise Ki Basic Samajh complete karo",
    rewardCoins: 50,
    rarity: 62,
  },
  {
    id: "m2-budget-boss",
    name: "Budget Boss",
    description: "Budgeting ke master ban gaye!",
    category: "learning",
    emoji: "💼",
    tier: "silver",
    requirement: "Module 2 — Budgeting In Real Life complete karo",
    rewardCoins: 60,
    rarity: 48,
  },
  {
    id: "m3-bachat-king",
    name: "Bachat King/Queen",
    description: "Saving strategies ke ustad!",
    category: "learning",
    emoji: "🐷",
    tier: "gold",
    requirement: "Module 3 — Saving Strategies complete karo",
    rewardCoins: 75,
    rarity: 38,
  },
  {
    id: "m4-shield-bearer",
    name: "Shield Bearer",
    description: "Emergency fund ka shield ban gaya!",
    category: "learning",
    emoji: "🛡️",
    tier: "silver",
    requirement: "Module 4 — Emergency Fund complete karo",
    rewardCoins: 70,
    rarity: 32,
  },
  {
    id: "m5-debt-slayer",
    name: "Debt Slayer",
    description: "Karze ke jaal ko kaat diya!",
    category: "learning",
    emoji: "⚔️",
    tier: "gold",
    requirement: "Module 5 — Debt Aur Credit complete karo",
    rewardCoins: 80,
    rarity: 28,
  },
  {
    id: "m6-bank-master",
    name: "Bank Master",
    description: "Banking ke saare raaz jaan liye!",
    category: "learning",
    emoji: "🏛️",
    tier: "silver",
    requirement: "Module 6 — Banking Basics complete karo",
    rewardCoins: 75,
    rarity: 25,
  },
  {
    id: "m7-niveshak",
    name: "Niveshak",
    description: "Investment ka foundation ban gaya!",
    category: "learning",
    emoji: "📈",
    tier: "gold",
    requirement: "Module 7 — Investment Basics complete karo",
    rewardCoins: 90,
    rarity: 22,
  },
  {
    id: "m8-freedom-fighter",
    name: "Freedom Fighter",
    description: "Financial freedom ki rah pe!",
    category: "learning",
    emoji: "🕊️",
    tier: "gold",
    requirement: "Module 8 — Financial Independence complete karo",
    rewardCoins: 100,
    rarity: 18,
  },
  {
    id: "m9-suraksha-kavach",
    name: "Suraksha Kavach",
    description: "Insurance ki suraksha kavach ban gayi!",
    category: "learning",
    emoji: "☂️",
    tier: "silver",
    requirement: "Module 9 — Insurance Basics complete karo",
    rewardCoins: 80,
    rarity: 15,
  },
  {
    id: "m10-tax-guru",
    name: "Tax Guru",
    description: "Tax saving ke sabhi tricks seekh liye!",
    category: "learning",
    emoji: "🧮",
    tier: "gold",
    requirement: "Module 10 — Tax Basics complete karo",
    rewardCoins: 90,
    rarity: 12,
  },
  {
    id: "m11-real-world-ready",
    name: "Real World Ready",
    description: "Asli duniya ke liye tayyar!",
    category: "learning",
    emoji: "🏆",
    tier: "diamond",
    requirement: "Module 11 — Real-World Scenarios complete karo",
    rewardCoins: 150,
    rarity: 8,
  },
];

// ────────────────────────────────────────────────────────────────────────
// STREAK BADGES (4) — login streak milestones
// ────────────────────────────────────────────────────────────────────────
const STREAK_BADGES = [
  {
    id: "streak-3-tiger",
    name: "3 Din Ka Tiger",
    description: "3 din lagataar seekhne wala tiger!",
    category: "streak",
    emoji: "🐯",
    tier: "bronze",
    requirement: "3 din ka streak banao (3 din lagataar login)",
    rewardCoins: 30,
    rarity: 45,
  },
  {
    id: "streak-7-warrior",
    name: "Weekly Warrior",
    description: "Poora ek week — warrior mode on!",
    category: "streak",
    emoji: "🔥",
    tier: "silver",
    requirement: "7 din ka streak banao",
    rewardCoins: 60,
    rarity: 28,
  },
  {
    id: "streak-30-monster",
    name: "Monthly Monster",
    description: "30 din ka monster streak!",
    category: "streak",
    emoji: "👹",
    tier: "gold",
    requirement: "30 din ka streak banao",
    rewardCoins: 200,
    rarity: 8,
  },
  {
    id: "streak-100-legend",
    name: "100 Din Legend",
    description: "100 din — tum legend ho!",
    category: "streak",
    emoji: "👑",
    tier: "diamond",
    requirement: "100 din ka streak banao",
    rewardCoins: 500,
    rarity: 1,
  },
];

// ────────────────────────────────────────────────────────────────────────
// STRATEGY BADGES (8) — one per interactive strategy
// ────────────────────────────────────────────────────────────────────────
const STRATEGY_BADGES = [
  {
    id: "strat-gps-navigator",
    name: "GPS Navigator",
    description: "Paise ka GPS complete kiya!",
    category: "strategy",
    emoji: "🧭",
    tier: "silver",
    requirement: "Paise Ka GPS strategy complete karo",
    rewardCoins: 40,
    rarity: 35,
  },
  {
    id: "strat-swipe-master",
    name: "Swipe Master",
    description: "Budget Khel mein swipe master!",
    category: "strategy",
    emoji: "💳",
    tier: "silver",
    requirement: "Budget Khel strategy complete karo",
    rewardCoins: 40,
    rarity: 32,
  },
  {
    id: "strat-interior-designer",
    name: "Interior Designer",
    description: "Ghar ka budget design kiya!",
    category: "strategy",
    emoji: "🏠",
    tier: "silver",
    requirement: "Ghar Ka Budget strategy complete karo",
    rewardCoins: 40,
    rarity: 25,
  },
  {
    id: "strat-market-expert",
    name: "Market Expert",
    description: "Mistake Market ka expert!",
    category: "strategy",
    emoji: "🛍️",
    tier: "silver",
    requirement: "Mistake Market strategy complete karo",
    rewardCoins: 40,
    rarity: 22,
  },
  {
    id: "strat-time-traveler",
    name: "Time Traveler",
    description: "Kya Hota Agar — future dekh liya!",
    category: "strategy",
    emoji: "⏳",
    tier: "gold",
    requirement: "Kya Hota Agar strategy complete karo",
    rewardCoins: 50,
    rarity: 18,
  },
  {
    id: "strat-inflation-hunter",
    name: "Inflation Hunter",
    description: "Chhupa hua chor ko pakda!",
    category: "strategy",
    emoji: "🕵️",
    tier: "gold",
    requirement: "Chhupa Hua Chor strategy complete karo",
    rewardCoins: 50,
    rarity: 15,
  },
  {
    id: "strat-tree-planter",
    name: "Tree Planter",
    description: "Compounding ka ped uga diya!",
    category: "strategy",
    emoji: "🌳",
    tier: "gold",
    requirement: "Compounding Tree strategy complete karo",
    rewardCoins: 50,
    rarity: 20,
  },
  {
    id: "strat-debt-trap-survivor",
    name: "Debt Trap Survivor",
    description: "Debt trap se bach gaye!",
    category: "strategy",
    emoji: "⛓️",
    tier: "gold",
    requirement: "Debt Trap Darwaza strategy complete karo",
    rewardCoins: 60,
    rarity: 12,
  },
];

// ────────────────────────────────────────────────────────────────────────
// SPECIAL ACHIEVEMENT BADGES (8)
// ────────────────────────────────────────────────────────────────────────
const SPECIAL_BADGES = [
  {
    id: "first-blood",
    name: "First Blood",
    description: "Pehla activity complete kiya!",
    category: "special",
    emoji: "🩸",
    tier: "bronze",
    requirement: "Koi bhi 1 activity complete karo",
    rewardCoins: 10,
    rarity: 70,
  },
  {
    id: "coin-collector-100",
    name: "Coin Collector 100",
    description: "100 coins ka collection!",
    category: "special",
    emoji: "🪙",
    tier: "bronze",
    requirement: "Kul 100 coins kam jama karo",
    rewardCoins: 20,
    rarity: 55,
  },
  {
    id: "coin-collector-500",
    name: "Coin Collector 500",
    description: "500 coins ka collection!",
    category: "special",
    emoji: "💰",
    tier: "silver",
    requirement: "Kul 500 coins jama karo",
    rewardCoins: 50,
    rarity: 28,
  },
  {
    id: "coin-collector-1000",
    name: "Coin Collector 1000",
    description: "1000 coins — ameer Insan!",
    category: "special",
    emoji: "💎",
    tier: "gold",
    requirement: "Kul 1000 coins jama karo",
    rewardCoins: 100,
    rarity: 10,
  },
  {
    id: "quiz-champion",
    name: "Quiz Champion",
    description: "Quiz mein 100% score kiya!",
    category: "special",
    emoji: "🏅",
    tier: "gold",
    requirement: "Kisi bhi quiz mein 100% score karo",
    rewardCoins: 75,
    rarity: 20,
  },
  {
    id: "dictionary-nerd",
    name: "Dictionary Nerd",
    description: "20+ financial terms explore kiye!",
    category: "special",
    emoji: "📖",
    tier: "silver",
    requirement: "Dictionary mein 20+ terms padho",
    rewardCoins: 40,
    rarity: 15,
  },
  {
    id: "all-rounder",
    name: "All Rounder",
    description: "Saare 11 modules complete!",
    category: "special",
    emoji: "🌈",
    tier: "diamond",
    requirement: "Saare 11 modules complete karo",
    rewardCoins: 300,
    rarity: 3,
  },
  {
    id: "social-star",
    name: "Social Star",
    description: "5 results share kiye!",
    category: "special",
    emoji: "⭐",
    tier: "silver",
    requirement: "5 results social media pe share karo",
    rewardCoins: 50,
    rarity: 12,
  },
];

// ────────────────────────────────────────────────────────────────────────
// MASTER BADGE LIST
// ────────────────────────────────────────────────────────────────────────
export const BADGES = [
  ...LEARNING_BADGES,
  ...STREAK_BADGES,
  ...STRATEGY_BADGES,
  ...SPECIAL_BADGES,
];

// Lookup helper
export function getBadgeById(id) {
  return BADGES.find((b) => b.id === id);
}

// Get badges by category
export function getBadgesByCategory(category) {
  if (category === "all") return BADGES;
  return BADGES.filter((b) => b.category === category);
}

// Rarest badges (rarity ≤ 12 — earned by <12% users)
export function getRarestBadges() {
  return BADGES.filter((b) => (b.rarity ?? 100) <= 12).sort(
    (a, b) => (a.rarity ?? 100) - (b.rarity ?? 100),
  );
}

// Total count
export const TOTAL_BADGES = BADGES.length;

// ────────────────────────────────────────────────────────────────────────
// LEVEL SYSTEM — XP thresholds & names
// ────────────────────────────────────────────────────────────────────────

// XP threshold per level: 0, 100, 250, 500, 1000, 2000, 4000, 8000, 16000, 32000
// (each level needs 2x previous beyond Level 2)
export const LEVEL_THRESHOLDS = [
  0, // L1
  100, // L2
  250, // L3
  500, // L4
  1000, // L5
  2000, // L6
  4000, // L7
  8000, // L8
  16000, // L9
  32000, // L10
];

export const LEVEL_NAMES = [
  { name: "Naya Shiksharthi", emoji: "🌱" }, // L1
  { name: "Budget Seeker", emoji: "📊" }, // L2
  { name: "Savings Starter", emoji: "💰" }, // L3
  { name: "Money Manager", emoji: "📋" }, // L4
  { name: "Finance Fighter", emoji: "💪" }, // L5
  { name: "Wealth Builder", emoji: "🏗️" }, // L6
  { name: "Investment Ninja", emoji: "🥷" }, // L7
  { name: "Tax Smart", emoji: "🧠" }, // L8
  { name: "Financial Expert", emoji: "🎯" }, // L9
  { name: "Rupaiya Master", emoji: "👑" }, // L10
];

export const MAX_LEVEL = LEVEL_NAMES.length;

/**
 * Compute level info from XP.
 */
export function getLevelInfo(xp) {
  let level = 1;
  for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) {
    if (xp >= LEVEL_THRESHOLDS[i]) level = i + 1;
    else break;
  }
  if (level > MAX_LEVEL) level = MAX_LEVEL;

  const minXp = LEVEL_THRESHOLDS[level - 1] ?? 0;
  const nextLevelXp =
    level >= MAX_LEVEL ? Infinity : (LEVEL_THRESHOLDS[level] ?? Infinity);

  return {
    level,
    name: LEVEL_NAMES[level - 1]?.name ?? "Rupaiya Master",
    emoji: LEVEL_NAMES[level - 1]?.emoji ?? "👑",
    minXp,
    nextLevelXp,
  };
}

/**
 * XP needed to go from current level → next level.
 * Returns progress percentage (0-100) within current level band.
 */
export function getLevelProgress(xp) {
  const info = getLevelInfo(xp);
  if (info.nextLevelXp === Infinity) {
    return { current: xp - info.minXp, needed: 0, percent: 100, toNext: 0 };
  }
  const bandTotal = info.nextLevelXp - info.minXp;
  const bandCurrent = xp - info.minXp;
  const percent =
    bandTotal > 0
      ? Math.min(100, Math.round((bandCurrent / bandTotal) * 100))
      : 100;
  return {
    current: bandCurrent,
    needed: bandTotal,
    percent,
    toNext: Math.max(0, info.nextLevelXp - xp),
  };
}

// ────────────────────────────────────────────────────────────────────────
// PRE-BUILT CARTOON AVATARS (emoji-based) — for Profile page
// ────────────────────────────────────────────────────────────────────────
export const PROFILE_AVATARS = [
  { id: "av1", emoji: "🦊", label: "Smart Fox" },
  { id: "av2", emoji: "🦁", label: "Lion Boss" },
  { id: "av3", emoji: "🐯", label: "Tiger Streak" },
  { id: "av4", emoji: "🐸", label: "Coin Frog" },
  { id: "av5", emoji: "🦉", label: "Wise Owl" },
  { id: "av6", emoji: "🐺", label: "Lone Wolf" },
  { id: "av7", emoji: "🐼", label: "Zen Panda" },
  { id: "av8", emoji: "🐧", label: "Penguin Pro" },
  { id: "av9", emoji: "🦄", label: "Unicorn" },
  { id: "av10", emoji: "🐲", label: "Dragon Wealth" },
];

// ────────────────────────────────────────────────────────────────────────
// ACTIVITY LOG TYPES
// ────────────────────────────────────────────────────────────────────────

// Activity emoji map
export const ACTIVITY_EMOJI = {
  login: "🔑",
  module_section: "📚",
  module_complete: "🎯",
  strategy: "🎮",
  quiz: "🧠",
  badge: "🏆",
  level_up: "🚀",
  spend: "💸",
  spin: "🎡",
  challenge: "⚡",
  general: "✨",
};
