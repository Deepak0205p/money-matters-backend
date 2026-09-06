import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

const SYNC_DEBOUNCE_MS = 2000;
let syncTimer = null;

const USER_DATA_FIELDS = [
  'completedModules', 'moduleProgress', 'quizScores', 'coins', 'streak',
  'lastLoginDate', 'badges', 'earnedBadges', 'xp', 'level', 'activityLog',
  'swipeScore', 'swipeTotal', 'debtDoorLevel', 'dailySimDay', 'masteredTerms',
  'goals', 'savingsChallenge', 'expenses', 'monthlyBudget', 'healthCheckup',
  'memoryMatchBestTimes', 'wordScrambleHighScore', 'moduleCompletionDates',
  'priorityCalculatorIncome', 'financialAge', 'financialAgeLastTaken',
  'habitTracker', 'quizArenaHighScores', 'quizArenaBestStreak',
  'totalSpins', 'spinWinnings', 'lastSpinTime', 'hasCompletedOnboarding',
  'isAudioEnabled', 'userName',
  'advisorMessages', 'advisorConversationId', 'advisorSessionCount'
];

function pickUserData(state) {
  const data = {};
  for (const key of USER_DATA_FIELDS) {
    if (state[key] !== undefined) {
      data[key] = state[key];
    }
  }
  data._lastSynced = new Date().toISOString();
  return data;
}

export async function saveUserData(userId, state) {
  if (!db || !userId) return;
  try {
    const data = pickUserData(state);
    await setDoc(doc(db, 'users', userId), data, { merge: true });
  } catch (err) {
    console.error('[userSync] Failed to save user data:', err);
  }
}

export async function loadUserData(userId) {
  if (!db || !userId) return null;
  try {
    const snap = await getDoc(doc(db, 'users', userId));
    if (!snap.exists()) return null;
    const data = snap.data();
    delete data._lastSynced;
    return data;
  } catch (err) {
    console.error('[userSync] Failed to load user data:', err);
    return null;
  }
}

export function scheduleSync(userId, state) {
  if (syncTimer) clearTimeout(syncTimer);
  syncTimer = setTimeout(() => {
    saveUserData(userId, state);
  }, SYNC_DEBOUNCE_MS);
}

export function immediateSync(userId, state) {
  if (syncTimer) clearTimeout(syncTimer);
  saveUserData(userId, state);
}
