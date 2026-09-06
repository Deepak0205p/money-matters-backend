/**
 * Strategy Registry — Maps interactive strategies to learning modules.
 * Each strategy is embedded inside a specific module and triggered via "Try It Now".
 * Each strategy also has its own dedicated full-page route at /strategy/[slug].
 *
 * STRICT MAPPING (8 strategies only):
 *   Module 2 (Tax Basics for Students)     → Paise Ka GPS, Budget Khel, Ghar Ka Budget, Mistake Market
 *   Module 3 (Saving Strategies)           → Kya Hota Agar, Chhupa Hua Chor, Power of Compounding
 *   Module 5 (Banking Basics)              → Debt Trap Ka Darwaza
 *
 * Removed from module integration (NOT embedded):
 *   - Financial Report Card
 *   - Rupaiya Dictionary
 *   - Ek Din Ka Kharcha (Daily Spending Simulator)
 */

export const STRATEGY_REGISTRY = [
// ── Module 2 (Tax Basics for Students) — 4 strategies ──
{
  id: 'paise-ka-gps',
  slug: 'paise-ka-gps',
  hook: 'Dekho tumhari financial car kidhar jaa rahi hai!',
  name: 'Paise Ka GPS',
  description: 'Financial health checkup — GPS style!',
  iconName: '🧭',
  accentColor: '#2563eb',
  rewardCoins: 20,
  moduleId: 2,
  triggerAfterCard: 1,
  onboardingSteps: [{
    title: 'Yeh Kya Hai?',
    icon: '🧭',
    content: 'Financial health checkup jo tumhari money habits ka GPS banke batata hai ki tumhare paise kidhar jaa rahe hain.'
  }, {
    title: 'Kya Sikhoge?',
    icon: '🎯',
    content: '✅ Income vs expense ratio samjhoge\n✅ Apna saving health score pao\n✅ Kahan sudhar zaroori hai pata chalega'
  }, {
    title: 'Kaise Khelna Hai?',
    icon: '🎮',
    content: '5 simple sawalon ke jawab do aur apna financial GPS score aur direction dekho.'
  }, {
    title: 'Ready?',
    icon: '🚀',
    content: 'Khel khatam hone par 20 gold coins milenge. LET\u2019S GO!'
  }]
}, {
  id: 'budget-khel',
  slug: 'budget-khel',
  hook: 'Swipe karke batao — Need hai ya Want?',
  name: 'Budget Khel',
  description: 'Tinder-style swipe — Need ya Want?',
  iconName: '💳',
  accentColor: '#F59E0B',
  rewardCoins: 20,
  moduleId: 2,
  triggerAfterCard: 3,
  onboardingSteps: [{
    title: 'Yeh Kya Hai?',
    icon: '💳',
    content: 'Tinder-style swipe khel jahan har expense card ko Need ya Want mein baantna hai.'
  }, {
    title: 'Kya Sikhoge?',
    icon: '🎯',
    content: '✅ Need vs Want ka farq seekho\n✅ Impulse buying pe control paao\n✅ Smart spending habits banao'
  }, {
    title: 'Kaise Khelna Hai?',
    icon: '🎮',
    content: 'Har card ko right (Need) ya left (Want) swipe karo. Soch samajh kar swiping karna!'
  }, {
    title: 'Ready?',
    icon: '🚀',
    content: 'Sahi jawab par 20 gold coins milenge. LET\u2019S GO!'
  }]
}, {
  id: 'ghar-ka-budget',
  slug: 'ghar-ka-budget',
  hook: 'Budget badlo, kamra badlega!',
  name: 'Ghar Ka Budget',
  description: 'Room visual mein budget allocate karo!',
  iconName: '🏠',
  accentColor: '#06B6D4',
  rewardCoins: 20,
  moduleId: 2,
  triggerAfterCard: 5,
  onboardingSteps: [{
    title: 'Yeh Kya Hai?',
    icon: '🏠',
    content: 'Ek virtual kamre mein apni income ke alag-alag buckets mein paisa allocate karne ka khel.'
  }, {
    title: 'Kya Sikhoge?',
    icon: '🎯',
    content: '✅ 50-30-20 rule seekho\n✅ Category-wise budgeting samjho\n✅ Real-life allocation practice karo'
  }, {
    title: 'Kaise Khelna Hai?',
    icon: '🎮',
    content: 'Kamre ke alag hisson (rent, food, savings, fun) mein paisa drag karke lagao.'
  }, {
    title: 'Ready?',
    icon: '🚀',
    content: 'Budget balance hone par 20 gold coins milenge. LET\u2019S GO!'
  }]
}, {
  id: 'mistake-market',
  slug: 'mistake-market',
  hook: 'Bazaar mein chalo, galtiyan pehchano!',
  name: 'Mistake Market',
  description: '7 financial mistakes ke stalls visit karo!',
  iconName: '🎪',
  accentColor: '#EF4444',
  rewardCoins: 20,
  moduleId: 2,
  triggerAfterCard: 7,
  onboardingSteps: [{
    title: 'Yeh Kya Hai?',
    icon: '🎪',
    content: 'Ek virtual bazaar jahan 7 financial mistakes ke stalls visit karke galtiyan pehchano.'
  }, {
    title: 'Kya Sikhoge?',
    icon: '🎯',
    content: '✅ Common money mistakes pehchano\n✅ Unse kaise bache seekho\n✅ Smart financial decisions lo'
  }, {
    title: 'Kaise Khelna Hai?',
    icon: '🎮',
    content: 'Har stall par jao, galti padho, aur sahi solution choose karo.'
  }, {
    title: 'Ready?',
    icon: '🚀',
    content: 'Saare stalls visit karne par 20 gold coins milenge. LET\u2019S GO!'
  }]
},
// ── Module 3 (Saving Strategies) — 3 strategies ──
{
  id: 'kya-hota-agar',
  slug: 'kya-hota-agar',
  hook: '10 saal baad tumhari zindagi kaisi dikhegi?',
  name: 'Kya Hota Agar...',
  description: 'Saving vs spending ka 10-year impact dekho!',
  iconName: '🤔',
  accentColor: '#A855F7',
  rewardCoins: 25,
  moduleId: 3,
  triggerAfterCard: 1,
  onboardingSteps: [{
    title: 'Yeh Kya Hai?',
    icon: '🤔',
    content: '10 saal ka simulator jo dikhata hai saving vs spending ka long-term impact tumhari zindagi par.'
  }, {
    title: 'Kya Sikhoge?',
    icon: '🎯',
    content: '✅ Long-term thinking develop karo\n✅ Choices ka compound effect samjho\n✅ Future financial vision banao'
  }, {
    title: 'Kaise Khelna Hai?',
    icon: '🎮',
    content: 'Alag-alag choices select karo aur 10 saal baad ki financial zindagi dekho.'
  }, {
    title: 'Ready?',
    icon: '🚀',
    content: 'Simulation complete karne par 25 gold coins milenge. LET\u2019S GO!'
  }]
}, {
  id: 'chhupa-hua-chor',
  slug: 'chhupa-hua-chor',
  hook: 'Dekho inflation tumhare paise kaise khata hai!',
  name: 'Chhupa Hua Chor',
  description: 'Inflation tumhare paise ko kaise khaata hai!',
  iconName: '👀',
  accentColor: '#EF4444',
  rewardCoins: 15,
  moduleId: 3,
  triggerAfterCard: 3,
  onboardingSteps: [{
    title: 'Yeh Kya Hai?',
    icon: '👀',
    content: 'Inflation ko chhupa hua chor samajhke dekho jo chupke se tumhare paise kaise khaata hai.'
  }, {
    title: 'Kya Sikhoge?',
    icon: '🎯',
    content: '✅ Inflation kya hai samjho\n✅ Real vs nominal value seekho\n✅ Inflation-beating investments pehchano'
  }, {
    title: 'Kaise Khelna Hai?',
    icon: '🎮',
    content: 'Time-slider ko aage badhao aur dekho inflation tumhare paise ko kaise kha raha hai.'
  }, {
    title: 'Ready?',
    icon: '🚀',
    content: 'Chor ko pakadne par 15 gold coins milenge. LET\u2019S GO!'
  }]
}, {
  id: 'compounding-tree',
  slug: 'compounding-tree',
  hook: 'Ek beej lagao, paiso ka ped ugao!',
  name: 'Power of Compounding',
  description: 'SIP se tree ugaao aur wealth dekho!',
  iconName: '🌳',
  accentColor: '#2563eb',
  rewardCoins: 25,
  moduleId: 3,
  triggerAfterCard: 5,
  onboardingSteps: [{
    title: 'Yeh Kya Hai?',
    icon: '🌳',
    content: 'Ek virtual tree ugaao jo SIP ki power se dikhata hai ki paiso ka ped kaise ugaata jaata hai.'
  }, {
    title: 'Kya Sikhoge?',
    icon: '🎯',
    content: '✅ Compounding ka magic dekho\n✅ SIP ka power samjho\n✅ Time = money concept seekho'
  }, {
    title: 'Kaise Khelna Hai?',
    icon: '🎮',
    content: 'Monthly amount aur duration set karo, phir \u201cGrow\u201d dabao aur tree ko bada hote dekho.'
  }, {
    title: 'Ready?',
    icon: '🚀',
    content: 'Tree fully grow hone par 25 gold coins milenge. LET\u2019S GO!'
  }]
},
// ── Module 5 (Banking Basics) — 1 strategy ──
{
  id: 'debt-trap-darwaza',
  slug: 'debt-trap-darwaza',
  hook: '7 darwaze kholo, karze ka sach jaano!',
  name: 'Debt Trap Ka Darwaza',
  description: '7 debt traps ke darwaze kholo aur bache!',
  iconName: '🚪',
  accentColor: '#EF4444',
  rewardCoins: 30,
  moduleId: 5,
  triggerAfterCard: 2,
  onboardingSteps: [{
    title: 'Yeh Kya Hai?',
    icon: '🚪',
    content: '7 darwaze kholo jo alag-alag debt traps ko represent karte hain \u2014 karze ka sach jaano.'
  }, {
    title: 'Kya Sikhoge?',
    icon: '🎯',
    content: '✅ Good debt vs bad debt ka farq\n✅ Interest rate traps pehchano\n✅ Debt se bachne ke tarike seekho'
  }, {
    title: 'Kaise Khelna Hai?',
    icon: '🎮',
    content: 'Har darwaza kholo, andar ka trap samjho, aur \u201cBach Ke Nikal\u201d choose karo.'
  }, {
    title: 'Ready?',
    icon: '🚀',
    content: 'Saare 7 darwaze paar karne par 30 gold coins milenge. LET\u2019S GO!'
  }]
}];

/** Get all strategies for a specific module */
export function getStrategiesForModule(moduleId) {
  return STRATEGY_REGISTRY.filter(s => s.moduleId === moduleId);
}

/** Get a strategy by ID */
export function getStrategyById(id) {
  return STRATEGY_REGISTRY.find(s => s.id === id);
}

/** Get a strategy by URL slug (used by /strategy/[slug] route) */
export function getStrategyBySlug(slug) {
  return STRATEGY_REGISTRY.find(s => s.slug === slug);
}