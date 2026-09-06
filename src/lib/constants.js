// App colors
export const COLORS = {
  background: "#0a0a0f",
  surface: "#12121a",
  secondarySurface: "#1a1a2e",
  primary: "#f59e0b", // Rupaiya Gold
  primaryHover: "#fbbf24",
  primaryDark: "#d97706",
  success: "#22c55e",
  danger: "#ef4444",
  warning: "#f59e0b",
  info: "#3b82f6",
  textPrimary: "#e8e8ed",
  textMuted: "#8888a0",
  border: "rgba(255,255,255,0.08)",
  indiaSaffron: "#ff9933",
  indiaGreen: "#138808",
};

// App metadata
export const APP_NAME = "Money Matters";
export const APP_TAGLINE = "Hinglish mein seekho, finance ko samjho";
export const APP_DESCRIPTION =
  "Financial literacy app for Indian youth aged 16-25";

// Financial constants
export const INFLATION_RATE = 6; // % average in India
export const DEFAULT_SIP_RETURN = 12; // % average equity return
export const EMERGENCY_FUND_MONTHS = 6;
export const RULE_OF_72 = 72;

// Budget percentages (50/30/20 rule)
export const BUDGET_RULE = {
  needs: 50,
  wants: 30,
  savings: 20,
};

// Milestone definitions for Financial GPS
export const MILESTONES = [
  {
    id: 1,
    label: "First ₹1,000 saved",
    description: "Pehla hazar - shuruwat ka sabse important step!",
    percentage: 10,
  },
  {
    id: 2,
    label: "Emergency fund started",
    description: "Emergency fund shuru - ab unexpected expenses se safe",
    percentage: 25,
  },
  {
    id: 3,
    label: "First SIP started",
    description: "Pehla SIP - compounding ka magic shuru!",
    percentage: 40,
  },
  {
    id: 4,
    label: "Credit score 750+",
    description: "Accha credit score - loan milne mein aasaani",
    percentage: 60,
  },
  {
    id: 5,
    label: "6-month emergency fund",
    description: "6 mahine ka safety net - tension free life!",
    percentage: 80,
  },
  {
    id: 6,
    label: "Financial Freedom",
    description: "Arthik swatantrata - sapna pura hua!",
    percentage: 100,
  },
];

// Debt trap door definitions
export const DEBT_DOORS = [
  {
    id: 1,
    title: "Credit card liya!",
    subtitle: "Free money lagta hai...",
    color: "#fbbf24",
  },
  {
    id: 2,
    title: "EMI pe phone liya",
    subtitle: "Chhota EMI, bada loss",
    color: "#f97316",
  },
  {
    id: 3,
    title: "Aur cards add kiye",
    subtitle: "Debt badhta gaya",
    color: "#ef4444",
  },
  {
    id: 4,
    title: "Minimum payment trap",
    subtitle: "Principal nahi utarta",
    color: "#dc2626",
  },
  {
    id: 5,
    title: "Personal loan liya",
    subtitle: "Debt se debt pay karna",
    color: "#b91c1c",
  },
  {
    id: 6,
    title: "CIBIL score gir gaya",
    subtitle: "Ab loan nahi milega",
    color: "#991b1b",
  },
  {
    id: 7,
    title: "Debt Trap!",
    subtitle: "Bahut late ho gaya...",
    color: "#7f1d1d",
  },
];
