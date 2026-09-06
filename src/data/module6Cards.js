export const module6Topics = [
  {
    id: "6-1",
    title: "Banking Basics — Apka Paisa, Apka Bank 🏦",
    emoji: "🏦",
    color: "#06B6D4",
    description: "Bank account sirf paise rakhne ki jagah nahi, apka financial hub hai. Account types, FD, RD, hidden charges ke raaz!",
    cards: [
      {
        id: "6-1-1",
        topicId: "6-1",
        topicTitle: "Banking Basics",
        cardIndex: 1,
        totalCardsInTopic: 6,
        title: "Account Types: Kiske Liye Kya? 🏛️",
        content: `Bank account tumhari financial life ka base hai. Bina bank account ke — salary nahi aayegi, online payment nahi hoga, saving safe nahi rahegi.

**Account Types Comparison:**

| Account Type | Interest | Min Balance | Student Friendly? | Best For |
| :--- | :--- | :--- | :--- | :--- |
| **Savings** | 3-4% | ₹0-₹10,000 | ✅ YES — best | Daily banking, saving |
| **Current** | 0% | ₹5,000-₹25,000 | ❌ No — business | Business, frequent transactions |
| **Salary** | 3-4% | ₹0 (usually) | After getting job | Employed people |
| **Student** | 3-4% | ₹0 | ✅ YES — zero balance! | College students |
| **Joint** | 3-4% | Varies | With parents | Family shared banking |
| **NRI** | 3-4% | Varies | If going abroad | Non-resident Indians |

**Best Banks for Students:**

| Bank | Min Balance | Student Friendly | Special |
| :--- | :--- | :--- | :--- |
| **SBI** | ₹0 | Yes | Widest network, trusted |
| **HDFC** | ₹0 | Yes | Best app, good offers |
| **Kotak** | ₹0 | Yes | Digital first, 6% interest |
| **ICICI** | ₹0 | Yes | iMobile app, good UI |
| **IndusInd** | ₹0 | Yes | High interest ~4-6% |
| **Axis** | ₹0 | Yes | Buzz account for youth |

**Recommendation**: Zero-balance student savings account. Documents: Aadhaar card, PAN card, college ID, 2 photos. Online bhi khul jaata hai Aadhaar e-KYC se 10 minute mein.

**Best choice**: Kotak 811 ya Jupiter for digital-first experience. SBI for widest branch network. HDFC for best app.`,
        imagePrompt: "Three different bank building icons representing different account types, cyan and white theme, clean modern illustration, financial hub concept",
        color: "#06B6D4",
        emoji: "🏦",
        interactiveType: 'none'
      },
      {
        id: "6-1-2",
        topicId: "6-1",
        topicTitle: "Banking Basics",
        cardIndex: 2,
        totalCardsInTopic: 6,
        title: "FD vs RD: Guaranteed Return 📈",
        content: `Safe khelna pasand hai? Bank apko 'Guaranteed' return deta hai:

- **FD (Fixed Deposit)**: Ek saath bada amount (lump sum) rakho.
- **RD (Recurring Deposit)**: Har mahine thoda-thoda save karo.

**Current FD Rates 2025-26:**

| Bank | 1 Year | 2 Years | 3 Years | 5 Years | Special (444/555 days) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **SBI** | ~6.80% | ~6.75% | ~6.50% | ~6.50% | ~6.45% |
| **HDFC** | ~7.00% | ~7.00% | ~6.75% | ~6.50% | ~7.00% |
| **ICICI** | ~7.00% | ~7.00% | ~6.75% | ~6.50% | ~7.00% |
| **Kotak** | ~7.00% | ~7.00% | ~6.50% | ~6.00% | ~7.10% |
| **Axis** | ~7.00% | ~7.00% | ~6.75% | ~6.50% | ~7.00% |

RD calculator use karke dekho \`₹1,000\` mahine se kitna banega:`,
        imagePrompt: "Clock with coins piling up inside it, cyan and silver colors, stable growth concept, modern 3D illustration",
        color: "#06B6D4",
        emoji: "📈",
        interactiveType: 'calculator',
        calcData: {
          calcType: 'compounding',
          formula: 'none',
          inputs: [
            { label: 'Monthly Deposit (RD)', min: 100, max: 10000, defaultValue: 1000, step: 100, unit: '₹' },
            { label: 'Interest Rate (%)', min: 4, max: 9, defaultValue: 7, step: 0.1, unit: '%' },
            { label: 'Tenure (Years)', min: 1, max: 10, defaultValue: 3, step: 1, unit: 'Y' }
          ]
        }
      },
      {
        id: "6-1-3",
        topicId: "6-1",
        topicTitle: "Banking Basics",
        cardIndex: 3,
        totalCardsInTopic: 6,
        title: "Chat: Hidden Charges Se Bacho 🕵️",
        content: `Priya aur Bhaiya discuss kar rahe hain bank ke 'Chupe Kharche'.

**Priya**: Bhaiya, mere account se ₹177 kat gaye! Maine toh kuch kharidha hi nahi.

**Bhaiya**: Yeh 'Debit Card Annual Fee' ya 'SMS Charges' honge. Bank free nahi hota!

**Priya**: Toh kya karun?

**Bhaiya**: E-statement switch karo, digital cards use karo, aur faltu ke SMS alerts off karwao. Salana ₹500-₹1,000 bach jayenge!

**Common Hidden Charges**:
- SMS alert charge: ₹15-₹25/quarter
- Debit card annual fee: ₹150-₹750/year
- ATM transaction limit exceeded: ₹20-₹50/transaction
- NEFT/IMPS charges: ₹5-₹25/transaction
- Minimum balance non-maintenance: ₹200-₹600/quarter

**Solution**: Zero-balance account + e-statement + UPI for transfers (free!)`,
        imagePrompt: "Person looking at a bank statement with a magnifying glass, hidden fee icons like ghosts, cyan and grey colors, mystery theme",
        color: "#06B6D4",
        emoji: "💬",
        interactiveType: 'none'
      },
      {
        id: "6-1-4",
        topicId: "6-1",
        topicTitle: "Banking Basics",
        cardIndex: 4,
        totalCardsInTopic: 6,
        title: "Myth-Buster: Savings Interest 🕵️‍♂️",
        content: `Log sochte hain ki savings account mein paisa rakhna 'Investing' hai.

**Myth**: Savings account mein 3% interest mil raha hai, matlab mera paisa grow ho raha hai.
**Sach**: Agar inflation 6% hai aur bank sirf 3% de raha hai, toh real mein apke paise ki value har saal 3% kam ho rahi hai. Savings account sirf 'Liquidity' ke liye hai, wealth building ke liye nahi!

**Real Return Calculation:**
- FD 6.5% - inflation 6% = real return sirf **0.5%**
- PPF 7.1% - inflation 6% = real return 1.1%
- SIP 12% - inflation 6% = real return 6%

Yahi reason hai ki long-term wealth ke liye **SIP/equity** zaroori hai, sirf FD se inflation beat nahi hota.`,
        imagePrompt: "Money sitting idle in a bank vault, cobwebs around it, cyan background, conceptual illustration of stagnant wealth",
        color: "#06B6D4",
        emoji: "🕵️‍♂️",
        interactiveType: 'myth_buster',
        quizData: {
          question: "MYTH: Savings account mein 3% interest mil raha hai, matlab mera paisa grow ho raha hai.",
          options: ["Haan, badh toh raha hai!", "Galat, Inflation use kha raha hai!"],
          correctAnswerIndex: 1,
          explanation: "Agar inflation 6% hai aur bank sirf 3% de raha hai, toh real mein apke paise ki value har saal 3% kam ho rahi hai. Savings account sirf 'Liquidity' ke liye hai, wealth building ke liye nahi!"
        }
      },
      {
        id: "6-1-5",
        topicId: "6-1",
        topicTitle: "Banking Basics",
        cardIndex: 5,
        totalCardsInTopic: 6,
        title: "Dilemma: The 'KYC' Call 📞",
        content: `Tumhe ek call aata hai: *\"Sir, apka bank account block hone wala hai. KYC update karne ke liye apna OTP batayein.\"*

Kya karoge?`,
        imagePrompt: "Person holding a phone, a shadowy figure on the other side with a fishing rod, cyan and red warning tones, scam alert concept",
        color: "#06B6D4",
        emoji: "🤔",
        interactiveType: 'choice_sim',
        choiceData: {
          scenario: "OTP maangne wala banker? Asli ya Fake?",
          choices: [
            {
              text: "Urgently OTP bata do.",
              isCorrect: false,
              consequence: "Khatra! Account khali! Bank kabhi bhi phone pe OTP nahi maangta. Yeh ek 'Vishing' (Voice Phishing) scam hai."
            },
            {
              text: "Phone kato aur branch jao.",
              isCorrect: true,
              consequence: "Smart! Hamesha official app ya bank branch jaakar hi KYC update karo. Safe banking, happy life!"
            }
          ]
        }
      },
      {
        id: "6-1-6",
        topicId: "6-1",
        topicTitle: "Banking Basics",
        cardIndex: 6,
        totalCardsInTopic: 6,
        title: "🚨 MISSION: Check Your Charges",
        content: `🚨 **TODAY'S MISSION**

Bhai, apne bank ko ₹1 bhi faltu mat do!

- [ ] Apni bank app kholo aur last 3 months ka statement dekho.
- [ ] 'Charges' ya 'Fee' search karo.
- [ ] Dekho kitna SMS fee ya card fee kata hai.
- [ ] Agar charges zyada hain, toh customer care ko call karke 'Zero Balance' ya 'Digital Account' mein convert karne ko bolo.

**Quick Wins**:
- E-statement switch karo (free) — physical statement charge bachao
- SMS alert OFF karwao (email alerts free)
- Digital debit card use karo (annual fee kam)
- UPI for transfers (free) — NEFT/IMPS charges avoid karo
- ATM withdrawals 5/month limit mein rakho`,
        imagePrompt: "Person checking a digital document on a tablet, green checkmarks, cyan theme, organized and focused atmosphere",
        color: "#06B6D4",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "6-2",
    title: "FD — Guaranteed Returns with Calculations",
    emoji: "💎",
    color: "#2563eb",
    description: "FD mein bank guaranteed return deta hai. 5 real calculation examples, premature withdrawal rules, tax saving FD.",
    cards: [
      {
        id: "6-2-1",
        topicId: "6-2",
        topicTitle: "FD Detailed",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "5 Real FD Calculation Examples",
        content: `FD mein tum bank mein fixed period ke liye paisa deposit karte ho, aur bank guaranteed return deta hai.

**5 Real FD Calculation Examples:**

**1. ₹10,000 FD for 1 year at 6.8%:**
- Interest = ₹10,000 × 6.8% = ₹680
- Maturity = **₹10,680**

**2. ₹50,000 FD for 2 years at 6.8% (quarterly compounding):**
- A = 50,000 × (1 + 0.068/4)^(4×2) = 50,000 × 1.1437
- Maturity = **₹57,185**
- Interest = ₹7,185

**3. ₹1,00,000 FD for 5 years at 6.5% (annual compounding):**
- A = 1,00,000 × (1.065)^5 = 1,00,000 × 1.370
- Maturity = **₹1,37,000**
- Interest = ₹37,000

**4. FD Ladder Strategy:**
- Har mahine ₹5,000 ka 1-year FD
- 12 months mein 12 FDs
- Har mahine ek FD mature = ₹5,000 + interest liquid
- Best for regular income

**5. Tax-Saving FD ₹1,50,000 (5 years):**
- Principal = ₹1,50,000
- Interest 6.5% = ₹9,750/year
- 5 years = ₹48,750 interest
- Maturity = **₹1,98,750**
- Tax benefit 80C = ₹46,800 save (30% slab pe)
- Effective return = much higher

**Premature Withdrawal Rules:**
- Penalty 0.5-1% interest rate cut
- Example: 6.5% FD pe 1% penalty = 5.5% actual
- Agar 6 months mein toda 5-year FD ko, toh loss hoga
- Emergency mein hi todna chahiye`,
        imagePrompt: "Five FD calculation examples with growth charts, green theme, financial math illustration",
        color: "#2563eb",
        emoji: "💎"
      },
      {
        id: "6-2-2",
        topicId: "6-2",
        topicTitle: "FD Detailed",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "Tax on FD + Mission",
        content: `**Tax on FD Interest:**

- **Section 80TTA**: Savings account interest ₹10,000 tak tax-free. FD interest pe nahi lagta.
- **TDS**: FD interest pe 10% TDS cut hota hai agar interest ₹40,000+/year (₹50,000+ senior citizens).
- **Form 15G**: Agar total income taxable nahi hai, toh Form 15G submit karo — TDS nahi katega.

**Example**: ₹1,00,000 FD at 7%, interest = ₹7,000. TDS = ₹700 (10%). Maturity pe ₹6,300 milega.

Agar student ki total income taxable nahi (₹2.5L se kam), Form 15G submit karo → TDS zero!

**When FD is Best:**
✅ Short-term savings (1-3 years)
✅ Emergency fund parking (instant access via premature withdrawal)
✅ Senior citizens (better rates, regular income)
✅ Risk-averse investors

**When FD is NOT Best:**
❌ Long-term wealth building (inflation barely beat karta hai)
❌ Tax-saving (5-year lock-in, returns kam vs ELSS)
❌ Aggressive growth (equity historically 12-15%)

**🚨 MISSION: FD Strategy**
- [ ] Apna emergency fund FD ladder mein split karo (3 FDs of ₹8k each, har month mature)
- [ ] Short-term goal ke liye 1-year FD (laptop fund, trip fund)
- [ ] Agar student ho aur income taxable nahi — Form 15G submit karo
- [ ] Senior citizen parents ko FD suggest karo (regular income, safety)

**Rule**: FD = safety + guaranteed return. Long-term wealth ke liye SIP add karo.`,
        imagePrompt: "FD tax calculation diagram, green theme, financial planning illustration",
        color: "#2563eb",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "6-3",
    title: "RD — Recurring Deposit + Comparison",
    emoji: "🔄",
    color: "#06B6D4",
    description: "RD mein har mahine fixed amount deposit karte ho, maturity pe lump sum milta hai. Best for students — ₹100 se start!",
    cards: [
      {
        id: "6-3-1",
        topicId: "6-3",
        topicTitle: "RD Detailed",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "RD Calculation Tables",
        content: `RD mein har mahine fixed amount deposit karte ho, maturity pe lump sum milta hai. Best for students kyunki chhota amount monthly deposit kar sakte ho. **₹100 se start ho sakta hai!**

**How RD Works:**
1. Step 1: Decide amount (₹500/month) and tenure (5 years)
2. Step 2: Auto-debit setup — har mahine fixed date pe amount cut
3. Step 3: Maturity pe lump sum + interest milta hai

**Complete Calculation Tables:**

**₹500 RD for 5 years at 6.5% (quarterly compounding):**

| Year | Invested | Interest | Total |
| :--- | :--- | :--- | :--- |
| 1 | ₹6,000 | ₹195 | ₹6,195 |
| 2 | ₹12,000 | ₹780 | ₹12,780 |
| 3 | ₹18,000 | ₹1,755 | ₹19,755 |
| 4 | ₹24,000 | ₹3,120 | ₹27,120 |
| 5 | ₹30,000 | ₹4,875 | ₹34,875 |

Maturity ≈ **₹35,100** (compounding effect se thoda zyada).

**₹1,000 RD for 3 years at 6.5%:**

| Year | Invested | Interest | Total |
| :--- | :--- | :--- | :--- |
| 1 | ₹12,000 | ₹390 | ₹12,390 |
| 2 | ₹24,000 | ₹1,560 | ₹25,560 |
| 3 | ₹36,000 | ₹3,510 | ₹39,510 |

Maturity ≈ **₹39,800**.

**₹2,000 RD for 5 years at 6.5%:**

| Year | Invested | Interest | Total |
| :--- | :--- | :--- | :--- |
| 1 | ₹24,000 | ₹780 | ₹24,780 |
| 2 | ₹48,000 | ₹3,120 | ₹51,120 |
| 3 | ₹72,000 | ₹7,020 | ₹79,020 |
| 4 | ₹96,000 | ₹12,480 | ₹1,08,480 |
| 5 | ₹1,20,000 | ₹19,500 | ₹1,39,500 |

Maturity ≈ **₹1,40,300**.`,
        imagePrompt: "RD growth chart with monthly deposits, cyan theme, financial math illustration",
        color: "#06B6D4",
        emoji: "📊"
      },
      {
        id: "6-3-2",
        topicId: "6-3",
        topicTitle: "RD Detailed",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "RD vs FD vs SIP Comparison",
        content: `**RD vs FD vs SIP — Complete Comparison:**

| Feature | RD | FD | SIP |
| :--- | :--- | :--- | :--- |
| **Min Amount** | ₹100/month | ₹1,000 lump sum | ₹100/month |
| **Return** | 6.5-7% | 6.5-7% | 10-12% (market linked) |
| **Risk** | Zero | Zero | Medium |
| **Best For** | Habit building | Lump sum safe | Long-term growth |
| **Tax Benefit** | No | 80C (5yr FD) | 80C (ELSS) |
| **Liquidity** | Premature possible | Premature possible | Anytime redeem |
| **Where to Open** | Bank | Bank | App/Broker |

**When to Choose What:**

✅ **RD Choose Karo Agar:**
- Student ho aur monthly small amount save karna hai
- Habit build karna hai
- Goal 1-5 years ka hai
- Risk nahi le sakte

✅ **FD Choose Karo Agar:**
- Lump sum amount hai (bonus, gift)
- Short-term parking chahiye
- Guaranteed return chahiye
- Emergency fund ka ek portion

✅ **SIP Choose Karo Agar:**
- Long-term wealth banana hai (5+ years)
- Inflation beat karna hai
- Risk afford kar sakte ho
- Compounding ka full benefit chahiye

**Best Strategy for Student:**
1. Emergency fund ka 50% — Savings Account (instant access)
2. Emergency fund ka 30% — FD ladder (slightly higher return)
3. Emergency fund ka 20% — Liquid Fund (1-day redemption, 5-6% return)
4. Long-term wealth — SIP ₹500-₹2,000/month Nifty 50 Index Fund

**Rule**: Safety aur growth dono chahiye toh mix karo. Sirf FD se inflation beat nahi hota. Sirf SIP se safety nahi milti.`,
        imagePrompt: "Comparison triangle of RD, FD, and SIP with icons, cyan theme, financial decision illustration",
        color: "#06B6D4",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "6-4",
    title: "Digital Payments — UPI, NEFT, IMPS, RTGS",
    emoji: "📲",
    color: "#8B5CF6",
    description: "UPI, NEFT, IMPS, RTGS — kaunsa kab use karna hai? Speed, limit, charges comparison.",
    cards: [
      {
        id: "6-4-1",
        topicId: "6-4",
        topicTitle: "Digital Payments",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "4 Payment Methods Comparison",
        content: `**UPI (Unified Payments Interface):**
- Kya hai: NPCI ka system jo bank accounts ko link karta hai for instant transfer
- Kyun free hai: Government ne promote kiya hai digital India ke liye
- Daily limit: Usually ₹1 lakh/day (some banks ₹2 lakh)
- Best for: Daily payments, P2P transfer, merchant payment

**NEFT (National Electronic Funds Transfer):**
- Speed: 30 min - 2 hours
- Limit: No limit
- Charges: Free (most banks)
- Availability: 24/7
- Best for: Large transfers, non-urgent

**IMPS (Immediate Payment Service):**
- Speed: Instant
- Limit: ₹5 lakh
- Charges: ₹5-15
- Availability: 24/7
- Best for: Urgent transfer, any time

**RTGS (Real Time Gross Settlement):**
- Speed: Instant
- Limit: ₹2 lakh minimum
- Charges: ₹25-50
- Availability: 24/7 (now)
- Best for: Very large transfers

**Comparison Table:**

| Feature | UPI | NEFT | IMPS | RTGS |
| :--- | :--- | :--- | :--- | :--- |
| **Speed** | Instant | 30 min-2 hrs | Instant | Instant |
| **Limit** | ₹1L/day | No limit | ₹5L | ₹2L min |
| **Charges** | Free | Free | ₹5-15 | ₹25-50 |
| **Availability** | 24/7 | 24/7 | 24/7 | 24/7 |
| **Best For** | Daily | Large | Urgent | Very large |

**Best UPI Apps for Students:**
- **PhonePe**: Most accepted, good rewards, stable
- **Google Pay**: Clean UI, good rewards, Google ecosystem
- **Paytm**: Wallet + UPI + recharge + shopping. All-in-one
- **BHIM**: Government app, simple, no ads. Basic but reliable

**Recommendation**: Ek hi UPI app kaafi hai — multiple apps se confusion badhti hai. PhonePe ya Google Pay best.`,
        imagePrompt: "Four payment method icons with comparison table, purple theme, modern fintech infographic",
        color: "#8B5CF6",
        emoji: "📲"
      },
      {
        id: "6-4-2",
        topicId: "6-4",
        topicTitle: "Digital Payments",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "UPI Fraud Statistics + Safety Mission",
        content: `**UPI Fraud Statistics FY 2024-25:**
- 6.32 lakh UPI fraud cases reported
- ₹485 crore lost
- 67% increase YoY
- Students especially vulnerable

**Prevention Tips:**
1. OTP share nahi karna — kisi ko bhi, kisi bhi haal mein
2. Unknown payment requests reject karo immediately
3. QR scan to receive money = scam. QR scan = you pay
4. URL check karo before clicking — sbi.co.in (real) vs sbi-bank.co.in (fake)
5. Public WiFi pe banking mat karo

**🚨 MISSION: Digital Payments Setup**

- [ ] Ek hi UPI app choose karo (PhonePe ya Google Pay)
- [ ] UPI PIN strong rakho — 6 digits, easily guessable nahi (no DOB, no 1234)
- [ ] UPI PIN 3 months mein change karo
- [ ] Screen lock lagao phone pe
- [ ] SIM swap alert: Agar network suddenly gayab ho = call customer care immediately
- [ ] Bank ka official number save karo (card pe likha number)
- [ ] 1930 — Cyber Crime helpline number save kar lo

**Rule**: UPI = best for daily payments. Free, instant, 24/7. Lekin safety pe dhyan do!`,
        imagePrompt: "UPI safety checklist with shield icon, purple theme, cybersecurity illustration",
        color: "#8B5CF6",
        emoji: "🛡️"
      }
    ]
  },
  {
    id: "6-5",
    title: "Cards Explained — ATM vs Debit vs Credit vs Prepaid",
    emoji: "💳",
    color: "#F59E0B",
    description: "4 types of cards — kaunsa kab use karein? Student ke liye best card kaunsa hai?",
    cards: [
      {
        id: "6-5-1",
        topicId: "6-5",
        topicTitle: "Cards Explained",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "4 Cards Comparison",
        content: `**4 Types of Cards — Detailed Comparison:**

| Feature | ATM Card | Debit Card | Credit Card | Prepaid Card |
| :--- | :--- | :--- | :--- | :--- |
| **Money Source** | Your account | Your account | Bank's money | Pre-loaded |
| **Interest Charge** | No | No | Yes (36-48%) | No |
| **Credit Building** | No | No | Yes | No |
| **Risk Level** | Low | Low | High | Very Low |
| **Best For** | Only cash | Daily use | Credit building | Budget control |

**Detailed Explanation:**

**1. ATM Card** — Sirf cash withdrawal ATM se. Outdated. Debit card mein ATM feature included hai.

**2. Debit Card** — Tumhara apna paisa. Online + offline payment. ATM withdrawal. Daily use ke liye best. No debt risk. Must have for everyone.

**3. Credit Card** — Bank ka paisa. Borrowed money. 36-48% interest agar bill full pay nahi kiya. CIBIL build karta hai. Rewards, cashback. Sirf discipline ho tab use karo.

**4. Prepaid Card** — Gift card jaisa. Pehle load karo, phir use karo. Budget control ke liye achha. Wallet jaisa. No credit risk.

**Student Ke Liye Kaunsa Best Hai?**

✅ **Debit Card**: Daily use ke liye. Apna paisa, no debt risk. Must have.
✅ **Credit Card**: Sirf agar discipline hai. Secured card against FD best. CIBIL build karo.
✅ **Prepaid Card**: Gift card jaisa. Load karo, use karo. Budget control ke liye achha.
❌ **ATM Card**: Outdated. Debit card mein ATM feature included hai.

**Recommendation for Students:**
1. **Debit Card** (must have) — daily use, no debt
2. **Secured Credit Card against FD** (for CIBIL build) — discipline seekho
3. **Prepaid Card** (for budget control) — gift cards, allowances`,
        imagePrompt: "Four card types comparison with icons, amber theme, financial education infographic",
        color: "#F59E0B",
        emoji: "💳"
      },
      {
        id: "6-5-2",
        topicId: "6-5",
        topicTitle: "Cards Explained",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "Card Safety + Mission",
        content: `**Card Safety Tips:**

1. CVV kisi ko mat do (3-digit number card ke peeche)
2. Card details unknown websites pe save mat karo — \"Remember card\" mat karo. Data breach mein leak hoga
3. OTP kisi ko share mat karo (not even bank)
4. Card ka digital lock use karo (bank app mein hota hai)
5. International transactions OFF rakho (jab zaroorat ho tab on karo)
6. SMS alerts on rakho — har transaction ka alert aaye
7. Lost card turant block karo — bank app ya customer care

**If Card Lost/Stolen:**
1. Bank app mein turant block karo
2. Customer care call karo (24/7 helpline)
3. FIR file karo (cyber crime)
4. Replacement card request karo (₹200-500 fee)

**🚨 MISSION: Card Audit**

- [ ] Apne paas kaunse cards hain, list banao
- [ ] Unused cards close karo (annual fee bachao)
- [ ] Debit card daily limit set karo (₹10k-₹20k)
- [ ] Credit card limit 30% utilization target karo
- [ ] International transactions OFF rakho
- [ ] SMS alerts on confirm karo
- [ ] Card details save mat karo unknown sites pe

**Pro Tip**: Mobile wallet (PhonePe, Google Pay) use karo instead of card directly. Layer of security milti hai.`,
        imagePrompt: "Card safety checklist with lock icon, amber theme, financial security illustration",
        color: "#F59E0B",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "6-6",
    title: "Hidden Bank Charges — 20 Charges Jo Pata Nahi Chalte",
    emoji: "💸",
    color: "#EF4444",
    description: "20 hidden bank charges jo silently ₹2,000-₹5,000/year kha jaate hain. Inhe avoid karo!",
    cards: [
      {
        id: "6-6-1",
        topicId: "6-6",
        topicTitle: "Hidden Charges",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "20 Hidden Bank Charges",
        content: `**20 Hidden Bank Charges Jo Pata Nahi Chalte:**

| # | Charge | Amount | How to Avoid |
| :--- | :--- | :--- | :--- |
| 1 | Minimum balance non-maintenance | ₹200-₹600/quarter | Zero-balance account kholo |
| 2 | SMS alert charge | ₹15-₹25/quarter | Email alerts use karo (free) |
| 3 | Debit card annual fee | ₹150-₹750/year | Student account mein free hota hai |
| 4 | ATM transaction limit exceeded | ₹20-₹50/transaction | 5 free transactions per month (own bank) |
| 5 | NEFT/IMPS charges | ₹5-₹25/transaction | UPI use karo — free! |
| 6 | Cheque book charge | ₹2-₹5 per leaf | UPI/online transfer use karo |
| 7 | Account closure (within 1 year) | ₹500-₹1,000 | 1 saal ke baad close karo |
| 8 | EMI bounce charge | ₹500-₹1,500/bounce | Balance maintain karo, auto-debit date check karo |
| 9 | Card replacement fee | ₹200-₹500 | Card safe rakhna — digital lock use karo |
| 10 | Physical statement charge | ₹100-₹200 | E-statement free hai |
| 11 | Passbook printing | ₹10-₹25 per page | Online banking use karo |
| 12 | Inactivity charge | ₹100-₹200/quarter | Har 3 mahine mein ek transaction karo |
| 13 | Foreign currency markup | 3.5% + GST | International card use karo ya forex card |
| 14 | Balance enquiry (other bank ATM) | ₹5-₹10 | PhonePe se check karo free |
| 15 | PIN regeneration | ₹50-₹100 | PIN yaad rakho, secure app mein save karo |
| 16 | Standing instruction failure | ₹200-₹500 | Balance maintain karo auto-debit ke liye |
| 17 | Locker rent (small) | ₹1,500-₹3,000/year | Student ko locker nahi chahiye usually |
| 18 | Duplicate statement | ₹50-₹100 | Monthly e-statement download karo |
| 19 | Fund transfer through branch | ₹100-₹500 | Online transfer karo — free |
| 20 | Debit card annual fee (premium) | ₹500-₹2,000 | Free student card choose karo |

**Total Potential Hidden Charges: ₹2,000-₹5,000/year!**

Inhe avoid karo toh bada saving.`,
        imagePrompt: "Magnifying glass over bank statement revealing hidden charges, red theme, financial detective illustration",
        color: "#EF4444",
        emoji: "🔍"
      },
      {
        id: "6-6-2",
        topicId: "6-6",
        topicTitle: "Hidden Charges",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "Avoid Charges Strategy + Mission",
        content: `**Strategy to Avoid Hidden Charges:**

**1. Zero-Balance Account**: Student account kholo — no minimum balance penalty. Kotak 811, Jupiter, SBI Student.

**2. Digital-First Banking**: E-statement (free), email alerts (free), online transfer (UPI free).

**3. ATM Discipline**: 5 free transactions/month (own bank). Plan withdrawals accordingly.

**4. UPI > NEFT/IMPS**: Daily transfers ke liye sirf UPI. Free, instant, 24/7.

**5. Annual Fee Check**: Student account mein debit card free. Premium cards avoid karo.

**6. Auto-Debit Balance Maintain**: EMI/SI bounce hone se ₹500-1,500 charge. Date pe balance rakho.

**🚨 MISSION: Charges Audit**

- [ ] Last 3 months ka statement dekho
- [ ] \"Charges\" ya \"Fee\" search karo
- [ ] Total hidden charges calculate karo
- [ ] Customer care call karke unnecessary charges reversal mango
- [ ] Zero-balance account mein convert karo (agar abhi nahi hai)
- [ ] E-statement switch karo (physical chhod do)
- [ ] SMS alerts OFF karwao (email alerts on karo)

**Quick Math**: ₹3,000/year saved = ₹250/month = ₹2,500 SIP contribution. 30 years mein at 12% = **₹8.7 lakh**!

**Common Misconceptions (Module 6):**

⚠️ \"Bank sab safe hai\" → Galat! Online frauds common hain, awareness zaroori hai
⚠️ \"FD se zyada return kahin nahi\" → Galat! SIP historically 12-15% return diya hai
⚠️ \"Debit card aur credit card ek jaisa hai\" → Nahi! Debit = apna paisa, Credit = udhaar
⚠️ \"Online banking risky hai\" → Safe hai agar rules follow karo
⚠️ \"KYC ek baar ki formality hai\" → Nahi! Periodic KYC update zaroori hai every 2-3 years

**KEY TAKEAWAYS (Module 6):**
- ✅ Student zero-balance savings account best hai — no minimum balance tension
- ✅ FD aur RD safe options hain — guaranteed return with zero market risk
- ✅ UPI daily payments ke liye best — instant, free, 24/7. Limit ₹1 lakh/day
- ✅ Hidden charges se bachne ke liye e-statements check karo monthly — ₹2,000-₹5,000/year save
- ✅ OTP kisi ko share nahi karna — yeh golden rule hai banking safety ka

**Aage Ka Safar**: Banking samajh aa gayi, ab paisa grow kaise karein? Module 7 mein Investment Basics — SIP, Mutual Fund, PPF, Stock Market, Gold, aur Tax Basics. Yeh module tumhari wealth building journey start karega! 📈`,
        imagePrompt: "Person saving money by avoiding bank charges, red and green theme, financial victory illustration",
        color: "#EF4444",
        emoji: "🏆"
      }
    ]
  }
];

export function getAllCards() {
  return module6Topics.flatMap(topic => topic.cards);
}

export function getTotalCardCount() {
  return getAllCards().length;
}

export function getTopicById(id) {
  return module6Topics.find(t => t.id === id);
}

export function getCardsByTopic(topicId) {
  const topic = getTopicById(topicId);
  return topic ? topic.cards : [];
}
