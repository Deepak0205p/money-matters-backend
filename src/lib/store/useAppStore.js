import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useEffect, useState } from 'react';
import { BADGES, getLevelInfo } from '@/lib/data/badges';
import {
  checkCoinBadges,
  checkModuleBadges,
  checkStreakBadges,
  checkSavingsBadges,
  generateActivityId,
} from './badgeHelpers';
import { scheduleSync, immediateSync, loadUserData } from '@/lib/userSync';


// Hook to detect when Zustand has finished hydrating from localStorage
export function useHydration() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    const alreadyHydrated = useAppStore.persist?.hasHydrated?.() ?? false;
    if (alreadyHydrated) {
      // Already hydrated synchronously — defer to avoid setState-in-effect warning
      const raf = requestAnimationFrame(() => setHydrated(true));
      const unsubscribe = useAppStore.persist?.onFinishHydration?.(() => setHydrated(true));
      return () => {
        cancelAnimationFrame(raf);
        unsubscribe?.();
      };
    }
    const unsubscribe = useAppStore.persist?.onFinishHydration?.(() => setHydrated(true));
    return () => unsubscribe?.();
  }, []);
  return hydrated;
}

// ── User profile (capital-mastery auth shape, local-only — no Firebase) ──

// Re-export ActivityEntry for downstream consumers

const initialState = {
  user: null,
  activeStrategy: 1,
  activeModule: null,
  completedModules: [],
  moduleProgress: {},
  quizScores: {},
  coins: 0,
  streak: 0,
  lastLoginDate: '',
  badges: [],
  earnedBadges: [],
  xp: 0,
  level: 1,
  activityLog: [],
  userName: '',
  swipeScore: 0,
  swipeTotal: 0,
  debtDoorLevel: 0,
  dailySimDay: 0,
  masteredTerms: [],
  dismissedTipDate: '',
  advisorMessages: [],
  advisorConversationId: null,
  advisorSessionCount: 0,
  goals: [],
  moduleContext: null,
  isAdvisorOpen: false,
  lastSpinTime: 0,
  totalSpins: 0,
  spinWinnings: 0,
  quizArenaHighScores: {},
  quizArenaBestStreak: 0,
  savingsChallenge: {
    isActive: false,
    startDate: '',
    dailyGoal: 0,
    days: [],
    totalSaved: 0,
    longestStreak: 0
  },
  expenses: [],
  monthlyBudget: 0,
  healthCheckup: null,
  memoryMatchBestTimes: {},
  wordScrambleHighScore: {},
  moduleCompletionDates: {},
  priorityCalculatorIncome: 0,
  financialAge: 0,
  financialAgeLastTaken: '',
  habitTracker: {},
  isAudioEnabled: true,
  isAuthenticated: false,
  hasCompletedOnboarding: false
};

export const useAppStore = create()(persist((set, get) => ({
  ...initialState,
  setUser: user => {
    set({ user, isAuthenticated: !!user });
    if (user?.uid) {
      get().loadFromCloud();
    }
  },
  loginUser: (user) => set({ user, isAuthenticated: true }),
  loginAsGuest: () => {
    const guestUser = {
      uid: 'guest_' + Date.now(),
      displayName: 'Guest Scholar',
      email: 'guest@moneymatters.app',
      isAnonymous: true
    };
    set({ user: guestUser, isAuthenticated: true });
    return guestUser;
  },
  loadFromCloud: async () => {
    const state = get();
    if (!state.user?.uid) return;
    const cloudData = await loadUserData(state.user.uid);
    if (cloudData) {
      set(cloudData);
    }
  },
  setHasCompletedOnboarding: value => set({ hasCompletedOnboarding: value }),
  logout: () => {
    localStorage.removeItem('rupaiya-101-storage');
    localStorage.removeItem('bookmarked_cards');
    localStorage.removeItem('bookmarked_cards_meta');
    set({
      user: null,
      isAuthenticated: false,
      activeStrategy: 1,
      activeModule: null,
      coins: 0,
      streak: 0,
      completedModules: [],
      moduleProgress: {},
      badges: [],
      earnedBadges: [],
    xp: 0,
    level: 1,
    activityLog: [],
    userName: ''
    });
  },
  setActiveStrategy: id => set({
    activeStrategy: id
  }),
  setActiveModule: id => set({
    activeModule: id
  }),
  completeModule: id => set(state => {
    const alreadyCompleted = state.completedModules.includes(id);
    const newCompletedModules = alreadyCompleted ? state.completedModules : [...state.completedModules, id];
    const newModuleCompletionDates = alreadyCompleted ? state.moduleCompletionDates : {
      ...state.moduleCompletionDates,
      [id]: new Date().toISOString().split('T')[0]
    };
    let newBadges = [...state.badges];
    if (!alreadyCompleted) {
      newBadges = checkModuleBadges(newCompletedModules.length, newBadges);
    }
    const newCoins = alreadyCompleted ? state.coins : state.coins + 50;
    newBadges = checkCoinBadges(newCoins, newBadges);
    return {
      completedModules: newCompletedModules,
      moduleProgress: {
        ...state.moduleProgress,
        [id]: 100
      },
      moduleCompletionDates: newModuleCompletionDates,
      coins: newCoins,
      badges: newBadges
    };
  }),
  updateModuleProgress: (id, progress) => set(state => ({
    moduleProgress: {
      ...state.moduleProgress,
      [id]: Math.min(100, Math.max(state.moduleProgress[id] || 0, progress))
    }
  })),
  addCoins: amount => set(state => {
    const newCoins = state.coins + amount;
    return {
      coins: newCoins,
      badges: checkCoinBadges(newCoins, state.badges)
    };
  }),
  spendCoins: amount => {
    const state = get();
    if (state.coins >= amount) {
      set({
        coins: state.coins - amount
      });
      return true;
    }
    return false;
  },
  incrementStreak: () => {
    const state = get();
    const today = new Date().toISOString().split('T')[0];
    if (state.lastLoginDate === today) return;
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    const newStreak = state.lastLoginDate === yesterday ? state.streak + 1 : 1;
    const newCoins = state.coins + newStreak * 5;
    let newBadges = checkStreakBadges(newStreak, state.badges);
    newBadges = checkCoinBadges(newCoins, newBadges);
    set({
      streak: newStreak,
      lastLoginDate: today,
      coins: newCoins,
      badges: newBadges
    });
  },
  addBadge: badgeId => set(state => {
    // Already earned — no-op
    if (state.badges.includes(badgeId)) return {};
    const badge = BADGES.find(b => b.id === badgeId);
    const updatedBadges = [...state.badges, badgeId];
    const reward = badge?.rewardCoins ?? 0;
    const xpGain = badge?.tier === 'diamond' ? 80 : badge?.tier === 'gold' ? 50 : badge?.tier === 'silver' ? 30 : 15;
    const newXp = state.xp + xpGain;
    const newLevel = getLevelInfo(newXp).level;
    const leveledUp = newLevel > state.level;
    const newActivity = {
      id: generateActivityId(),
      type: 'badge',
      description: `🏆 Nayi badge mili: ${badge?.name ?? badgeId}${badge ? ` (${badge.tier})` : ''}`,
      timestamp: Date.now(),
      coins: reward
    };
    const leveledUpActivity = leveledUp ? {
      id: generateActivityId('act-lvl'),
      type: 'level_up',
      description: `🚀 Level Up! Ab tum Level ${newLevel} pe ho — ${getLevelInfo(newXp).name} ${getLevelInfo(newXp).emoji}`,
      timestamp: Date.now(),
      coins: 0
    } : null;
    const newActivityLog = [...(leveledUpActivity ? [leveledUpActivity] : []), newActivity, ...state.activityLog].slice(0, 20);
    return {
      badges: updatedBadges,
      earnedBadges: updatedBadges,
      coins: state.coins + reward,
      xp: newXp,
      level: newLevel,
      activityLog: newActivityLog
    };
  }),
  hasBadge: badgeId => {
    const state = get();
    return state.badges.includes(badgeId) || state.earnedBadges.includes(badgeId);
  },
  addXP: amount => set(state => {
    if (amount === 0) return {};
    const newXp = Math.max(0, state.xp + amount);
    const newLevel = getLevelInfo(newXp).level;
    const leveledUp = newLevel > state.level;
    if (leveledUp) {
      const levelInfo = getLevelInfo(newXp);
      const newActivity = {
        id: generateActivityId('act-lvl'),
        type: 'level_up',
        description: `🚀 Level Up! Ab tum Level ${newLevel} — ${levelInfo.name} ${levelInfo.emoji}`,
        timestamp: Date.now(),
        coins: 0
      };
      return {
        xp: newXp,
        level: newLevel,
        activityLog: [newActivity, ...state.activityLog].slice(0, 20)
      };
    }
    return {
      xp: newXp,
      level: newLevel
    };
  }),
  logActivity: (type, description, coins) => set(state => {
    const entry = {
      id: generateActivityId(),
      type,
      description,
      timestamp: Date.now(),
      coins
    };
    return {
      activityLog: [entry, ...state.activityLog].slice(0, 20)
    };
  }),
  recordQuizScore: (quizId, score) => set(state => {
    let newBadges = [...state.badges];
    if (score === 100 && !newBadges.includes('perfect-quiz')) newBadges.push('perfect-quiz');
    const newCoins = state.coins + Math.floor(score / 10);
    newBadges = checkCoinBadges(newCoins, newBadges);
    return {
      quizScores: {
        ...state.quizScores,
        [quizId]: score
      },
      coins: newCoins,
      badges: newBadges
    };
  }),
  setUserName: name => set({
    userName: name
  }),
  setSwipeScore: (score, total) => set({
    swipeScore: score,
    swipeTotal: total
  }),
  setDebtDoorLevel: level => set({
    debtDoorLevel: level
  }),
  setDailySimDay: day => set({
    dailySimDay: day
  }),
  toggleTermMastered: termId => set(state => ({
    masteredTerms: state.masteredTerms.includes(termId) ? state.masteredTerms.filter(t => t !== termId) : [...state.masteredTerms, termId]
  })),
  setDismissedTipDate: date => set({
    dismissedTipDate: date
  }),
  addAdvisorMessage: message => set(state => ({
    advisorMessages: [...state.advisorMessages, message],
    advisorSessionCount: message.role === 'user' ? state.advisorSessionCount + 1 : state.advisorSessionCount
  })),
  clearAdvisorMessages: () => set({
    advisorMessages: [],
    advisorSessionCount: 0,
    advisorConversationId: null
  }),
  setAdvisorConversationId: (id) => set({
    advisorConversationId: id
  }),
  setModuleContext: context => set({
    moduleContext: context
  }),
  setAdvisorOpen: open => set({
    isAdvisorOpen: open
  }),
  openTutorChat: () => set({
    isAdvisorOpen: true
  }),
  addGoal: goal => set(state => ({
    goals: [...state.goals, goal]
  })),
  updateGoalRoadmap: (goalId, roadmap) => set(state => ({
    goals: state.goals.map(g => g.id === goalId ? { ...g, roadmap } : g)
  })),
  updateGoalMonthDetail: (goalId, monthGroupId, detail) => set(state => ({
    goals: state.goals.map(g => {
      if (g.id !== goalId) return g;
      const monthDetails = { ...(g.monthDetails || {}), [monthGroupId]: detail };
      return { ...g, monthDetails };
    })
  })),
  updateGoalEdited: (goalId, field, value) => set(state => ({
    goals: state.goals.map(g => g.id === goalId ? { ...g, [field]: value } : g)
  })),
  updateGoalSaved: (id, amount) => set(state => ({
    goals: state.goals.map(g => {
      if (g.id !== id) return g;
      const newSaved = Math.min(g.target, g.saved + amount);
      return {
        ...g,
        saved: newSaved
      };
    })
  })),
  deleteGoal: id => set(state => ({
    goals: state.goals.filter(g => g.id !== id)
  })),
  setLastSpinTime: time => set({
    lastSpinTime: time
  }),
  incrementTotalSpins: () => set(state => ({
    totalSpins: state.totalSpins + 1
  })),
  addSpinWinnings: amount => set(state => {
    const newCoins = state.coins + amount;
    return {
      spinWinnings: state.spinWinnings + amount,
      coins: newCoins,
      badges: checkCoinBadges(newCoins, state.badges)
    };
  }),
  setQuizArenaHighScore: (mode, score) => set(state => ({
    quizArenaHighScores: {
      ...state.quizArenaHighScores,
      [mode]: Math.max(state.quizArenaHighScores[mode] || 0, score)
    }
  })),
  setQuizArenaBestStreak: streak => set(state => ({
    quizArenaBestStreak: Math.max(state.quizArenaBestStreak, streak)
  })),
  startSavingsChallenge: dailyGoal => set(() => {
    const today = new Date().toISOString().split('T')[0];
    const days = Array.from({
      length: 30
    }, (_, i) => ({
      day: i + 1,
      saved: false,
      amount: 0,
      date: new Date(Date.now() + i * 86400000).toISOString().split('T')[0]
    }));
    return {
      savingsChallenge: {
        isActive: true,
        startDate: today,
        dailyGoal,
        days,
        totalSaved: 0,
        longestStreak: 0
      }
    };
  }),
  markSavingsDay: (day, amount) => set(state => {
    const days = state.savingsChallenge.days.map(d => d.day === day ? {
      ...d,
      saved: true,
      amount
    } : d);
    const totalSaved = days.reduce((acc, d) => acc + d.amount, 0);
    let longestStreak = 0;
    let currentStreak = 0;
    days.forEach(d => {
      if (d.saved) {
        currentStreak++;
        longestStreak = Math.max(longestStreak, currentStreak);
      } else {
        currentStreak = 0;
      }
    });
    const newBadges = checkSavingsBadges(longestStreak, state.badges);
    const newCoins = state.coins + 5;
    return {
      savingsChallenge: {
        ...state.savingsChallenge,
        days,
        totalSaved,
        longestStreak
      },
      badges: newBadges,
      coins: newCoins
    };
  }),
  resetSavingsChallenge: () => set(() => ({
    savingsChallenge: {
      isActive: false,
      startDate: '',
      dailyGoal: 0,
      days: [],
      totalSaved: 0,
      longestStreak: 0
    }
  })),
  addExpense: entry => set(state => ({
    expenses: [entry, ...state.expenses]
  })),
  deleteExpense: id => set(state => ({
    expenses: state.expenses.filter(e => e.id !== id)
  })),
  setMonthlyBudget: budget => set({
    monthlyBudget: budget
  }),
  setHealthCheckup: result => set(state => {
    let newBadges = [...state.badges];
    if (result.score >= 80 && !newBadges.includes('health-guru')) newBadges.push('health-guru');
    if (result.score >= 60 && !newBadges.includes('health-aware')) newBadges.push('health-aware');
    const newCoins = state.coins + 20;
    newBadges = checkCoinBadges(newCoins, newBadges);
    return {
      healthCheckup: result,
      badges: newBadges,
      coins: newCoins
    };
  }),
  setMemoryMatchBestTime: (mode, time) => set(state => ({
    memoryMatchBestTimes: {
      ...state.memoryMatchBestTimes,
      [mode]: Math.min(state.memoryMatchBestTimes[mode] ?? Infinity, time)
    }
  })),
  setWordScrambleHighScore: (mode, score) => set(state => ({
    wordScrambleHighScore: {
      ...state.wordScrambleHighScore,
      [mode]: Math.max(state.wordScrambleHighScore[mode] || 0, score)
    }
  })),
  setPriorityCalculatorIncome: income => set({
    priorityCalculatorIncome: income
  }),
  setFinancialAge: age => set({
    financialAge: age,
    financialAgeLastTaken: new Date().toISOString().split('T')[0]
  }),
  toggleHabit: (date, habitId) => set(state => {
    const currentHabits = state.habitTracker[date] || [];
    const isRemoving = currentHabits.includes(habitId);
    const newHabits = isRemoving ? currentHabits.filter(id => id !== habitId) : [...currentHabits, habitId];
    const newHabitTracker = {
      ...state.habitTracker,
      [date]: newHabits
    };
    // If removing or not all 6 habits done for today, just update
    if (isRemoving || newHabits.length < 6) {
      return {
        habitTracker: newHabitTracker
      };
    }
    // All 6 habits completed for this date - bonus coins
    const newCoins = state.coins + 10;
    return {
      habitTracker: newHabitTracker,
      coins: newCoins,
      badges: checkCoinBadges(newCoins, state.badges)
    };
  }),
  resetProgress: () => set(initialState),
  toggleAudio: () => set(state => ({
    isAudioEnabled: !state.isAudioEnabled
  }))
}), {
  name: 'rupaiya-101-storage',
  onRehydrateStorage: () => (state) => {
    if (state?.user?.uid && state?.isAuthenticated) {
      immediateSync(state.user.uid, state);
    }
  }
}));

// Auto-sync to Firestore on every state change (debounced)
useAppStore.subscribe((state, prevState) => {
  if (state.user?.uid && state.isAuthenticated) {
    scheduleSync(state.user.uid, state);
  }
});

// Sync before page unload
if (typeof window !== 'undefined') {
  window.addEventListener('beforeunload', () => {
    const state = useAppStore.getState();
    if (state.user?.uid && state.isAuthenticated) {
      immediateSync(state.user.uid, state);
    }
  });
}

