export function checkCoinBadges(newCoins, badges) {
  const updated = [...badges];
  if (newCoins >= 100 && !updated.includes('coins-100')) updated.push('coins-100');
  if (newCoins >= 500 && !updated.includes('coins-500')) updated.push('coins-500');
  return updated;
}

export function checkModuleBadges(completedCount, badges) {
  const updated = [...badges];
  if (completedCount === 1 && !updated.includes('first-module')) updated.push('first-module');
  if (completedCount >= 3 && !updated.includes('three-modules')) updated.push('three-modules');
  if (completedCount >= 6 && !updated.includes('six-modules')) updated.push('six-modules');
  if (completedCount >= 11 && !updated.includes('all-modules')) updated.push('all-modules');
  return updated;
}

export function checkStreakBadges(newStreak, badges) {
  const updated = [...badges];
  if (newStreak >= 3 && !updated.includes('streak-3')) updated.push('streak-3');
  if (newStreak >= 7 && !updated.includes('streak-7')) updated.push('streak-7');
  return updated;
}

export function checkSavingsBadges(longestStreak, badges) {
  const updated = [...badges];
  if (longestStreak >= 7 && !updated.includes('savings-streak-7')) updated.push('savings-streak-7');
  if (longestStreak >= 14 && !updated.includes('savings-streak-14')) updated.push('savings-streak-14');
  if (longestStreak >= 30 && !updated.includes('savings-streak-30')) updated.push('savings-streak-30');
  return updated;
}

export function generateActivityId(prefix = 'act') {
  return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
}
