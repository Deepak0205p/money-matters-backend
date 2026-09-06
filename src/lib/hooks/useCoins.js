'use client';
import { useAppStore } from '@/lib/store/useAppStore';

export function useCoins() {
  const { coins, addCoins, spendCoins } = useAppStore();

  const earnQuizReward = (score) => {
    const reward = Math.floor(score / 10) * 5;
    addCoins(reward);
    return reward;
  };

  const earnModuleReward = () => {
    addCoins(50);
    return 50;
  };

  const earnStreakReward = (streak) => {
    const reward = streak * 5;
    addCoins(reward);
    return reward;
  };

  return {
    coins,
    addCoins,
    spendCoins,
    earnQuizReward,
    earnModuleReward,
    earnStreakReward,
  };
}
