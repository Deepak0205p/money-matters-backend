'use client';

import { useAppStore } from '@/lib/store/useAppStore';
export function useProgress() {
  const {
    completedModules,
    moduleProgress,
    quizScores
  } = useAppStore();
  const totalProgress = Object.values(moduleProgress).reduce((sum, p) => sum + p, 0) / 11;
  const modulesCompleted = completedModules.length;
  const completionPercentage = Math.round(modulesCompleted / 11 * 100);
  const getModuleProgress = moduleId => moduleProgress[moduleId] || 0;
  const isModuleCompleted = moduleId => completedModules.includes(moduleId);
  const getQuizAverage = () => {
    const scores = Object.values(quizScores);
    if (scores.length === 0) return 0;
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  };
  return {
    totalProgress,
    modulesCompleted,
    completionPercentage,
    getModuleProgress,
    isModuleCompleted,
    getQuizAverage
  };
}