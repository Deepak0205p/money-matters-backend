import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Format Indian currency: 50000 -> '50,000' or 'Rs.50,000'
export function formatCurrency(amount, showSymbol = true) {
  const formatted = amount.toLocaleString("en-IN");
  return showSymbol ? `Rs.${formatted}` : formatted;
}

// Calculate SIP future value
// Formula: P * [((1 + r)^n - 1) / r] * (1 + r)
export function calculateSIP(monthly, annualReturn, years) {
  const p = Math.max(0, Number(monthly) || 0);
  const ret = Math.max(0, Number(annualReturn) || 0);
  const y = Math.max(0, Number(years) || 0);
  const r = ret / 12 / 100;
  const n = y * 12;
  if (n === 0 || p === 0) return 0;
  if (r === 0) return p * n;
  const result = p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  return isNaN(result) ? 0 : Math.round(result);
}

// Calculate inflation-adjusted value
// Formula: amount / (1 + inflationRate/100) ^ years
export function calculateInflation(amount, inflationRate, years) {
  const a = Math.max(0, Number(amount) || 0);
  const ir = Math.max(0, Number(inflationRate) || 0);
  const y = Math.max(0, Number(years) || 0);
  if (a === 0 || y === 0) return a;
  const result = a / Math.pow(1 + ir / 100, y);
  return isNaN(result) ? 0 : Math.round(result);
}

// Calculate EMI
// Formula: P * r * (1+r)^n / [(1+r)^n - 1]
export function calculateEMI(principal, annualRate, months) {
  const p = Math.max(0, Number(principal) || 0);
  const ar = Math.max(0, Number(annualRate) || 0);
  const m = Math.max(1, Number(months) || 1);
  const r = ar / 12 / 100;
  if (p === 0) return 0;
  if (r === 0) return Math.round(p / m);
  const power = Math.pow(1 + r, m);
  const emi = (p * r * power) / (power - 1);
  return isNaN(emi) ? 0 : Math.round(emi);
}

// Calculate compound interest
export function calculateCompound(principal, rate, years, freq = 1) {
  const p = Math.max(0, Number(principal) || 0);
  const r = Math.max(0, Number(rate) || 0);
  const y = Math.max(0, Number(years) || 0);
  const f = Math.max(1, Number(freq) || 1);
  if (p === 0 || y === 0) return p;
  const res = p * Math.pow(1 + r / 100 / f, f * y);
  return isNaN(res) ? 0 : Math.round(res);
}

// Rule of 72: years to double
export function yearsToDouble(rate) {
  const r = Number(rate) || 0;
  if (r <= 0) return 0;
  return Number((72 / r).toFixed(1));
}

// Get grade from percentage
export function getGrade(percentage) {
  if (percentage >= 90) return "A+";
  if (percentage >= 80) return "A";
  if (percentage >= 70) return "B";
  if (percentage >= 60) return "C";
  return "D";
}

// Format large Indian numbers: 100000 -> '1 lakh', 10000000 -> '1 crore'
export function formatIndianNumber(num) {
  if (num >= 10000000) return `${(num / 10000000).toFixed(1)} crore`;
  if (num >= 100000) return `${(num / 100000).toFixed(1)} lakh`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)} thousand`;
  return num.toString();
}

// Calculate total savings from a daily saving habit
export function calculateDailySavingHabit(dailyAmount, annualReturn, years) {
  const monthly = dailyAmount * 30;
  return calculateSIP(monthly, annualReturn, years);
}

// Get financial health score based on module progress
export function getFinancialHealthScore(completedModules, quizScores) {
  const moduleScore = (completedModules.length / 11) * 50;
  const quizValues = Object.values(quizScores);
  const avgQuiz =
    quizValues.length > 0
      ? quizValues.reduce((a, b) => a + b, 0) / quizValues.length
      : 0;
  const quizScore = (avgQuiz / 100) * 50;
  return Math.round(moduleScore + quizScore);
}
