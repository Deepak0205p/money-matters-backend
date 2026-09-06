export const module7Topics = [
  {
    id: "7-1",
    title: "Investment Basics — Paise Se Paisa Banao 📈",
    emoji: "📈",
    color: "#EC4899",
    description: "Saving se tum ameer nahi banoge, investing se banoge. Samjho inflation ko beat karne ka formula!",
    cards: [
      {
        id: "7-1-1",
        topicId: "7-1",
        topicTitle: "Investment Basics",
        cardIndex: 1,
        totalCardsInTopic: 6,
        title: "SIP: Wealth Building Machine 🚀",
        content: `SIP (Systematic Investment Plan) matlab har mahine chota amount automatically invest karna.

Iski sabse badi power hai **Consistency**. Market up ho ya down, tumhari 'Machine' chalti rehni chahiye.

Slide karke dekho \`₹1,000\` ki SIP 15-20 saal mein kya kama sakti hai:`,
        imagePrompt: "Money tree growing from a small pot, golden leaves, pink and purple background, magical financial growth concept, 3D style",
        color: "#EC4899",
        emoji: "🚀",
        interactiveType: 'calculator',
        calcData: {
          calcType: 'compounding',
          formula: 'none',
          inputs: [
            { label: 'Monthly SIP', min: 500, max: 20000, defaultValue: 2000, step: 500, unit: '₹' },
            { label: 'Expected Return (%)', min: 10, max: 20, defaultValue: 12, step: 0.5, unit: '%' },
            { label: 'Tenure (Years)', min: 5, max: 30, defaultValue: 15, step: 1, unit: 'Y' }
          ]
        }
      },
      {
        id: "7-1-2",
        topicId: "7-1",
        topicTitle: "Investment Basics",
        cardIndex: 2,
        totalCardsInTopic: 6,
        title: "Risk-Return Matrix: Kahan Invest Karein? 📊",
        content: `Har jagah alag risk aur alag reward hota hai. Apni choice choose karo:

**Risk vs Return Spectrum:**

| Investment | Risk Level | Expected Return | Time Horizon | Best For |
| :--- | :--- | :--- | :--- | :--- |
| **Savings Account** | Zero | 3-4% | Any time | Emergency fund |
| **FD/RD** | Very Low | 6.5-7% | 1-10 years | Short-term safety |
| **PPF** | Zero | 7.1% | 15 years | Tax saving + long-term |
| **Debt Mutual Fund** | Low | 6-8% | 1-3 years | Stable returns |
| **Hybrid Fund** | Medium | 8-10% | 3-5 years | Balanced approach |
| **Index Fund (SIP)** | Medium | 10-12% | 5+ years | Long-term wealth |
| **Equity Fund (SIP)** | Medium-High | 12-15% | 7+ years | Aggressive growth |
| **Individual Stocks** | High | 15-25% | 10+ years | Experienced investors |
| **Crypto** | Very High | -90% to +500% | Speculative | Only risk capital |

Note: Returns are historical averages/estimates, not guaranteed. Market risk applies to equity-based investments.

**Advice**: Beginners ke liye **Index Mutual Funds** best hain. Kam risk, market return!`,
        imagePrompt: "Four icons representing safety, growth, high risk, and speculation, clean comparison grid, pink and white colors",
        color: "#EC4899",
        emoji: "📊",
        interactiveType: 'none'
      },
      {
        id: "7-1-3",
        topicId: "7-1",
        topicTitle: "Investment Basics",
        cardIndex: 3,
        totalCardsInTopic: 6,
        title: "Chat: Stocks vs Mutual Funds 📱",
        content: `Priya aur Bhaiya discuss kar rahe hain market entry strategy.

**Priya**: Bhaiya, main direkt Tata ya Reliance ke shares kharid lun?

**Bhaiya**: Kharid toh sakti ho, par kya tumne unka balance sheet check kiya? Research kiya?

**Priya**: Nahi... itna time kahan hai?

**Bhaiya**: Toh Mutual Fund lo! Wahan expert fund manager tumhare liye research karta hai. Tum chill karo, woh paisa grow karenge.

**Why Mutual Funds > Individual Stocks for Beginners**:
1. **Diversification** — 50 companies ek saath. Ek company fail = no problem
2. **Professional management** — fund manager track karta hai
3. **Low cost** — expense ratio 0.1% vs brokerage + research cost
4. **No emotional decisions** — SIP auto chalta hai
5. **Historically consistent** — Nifty 50 long-term ~12%

**90% retail investors market ko beat nahi kar paate.** Index fund = market average, safer.`,
        imagePrompt: "Two people looking at a stock market graph on a large screen, speech bubbles with icons, pink and gold tones, modern flat illustration",
        color: "#EC4899",
        emoji: "💬",
        interactiveType: 'none'
      },
      {
        id: "7-1-4",
        topicId: "7-1",
        topicTitle: "Investment Basics",
        cardIndex: 4,
        totalCardsInTopic: 6,
        title: "Myth-Buster: Market Timing 🕵️‍♂️",
        content: `Log wait karte hain ki "Jab market niche jayega tab invest karunga."

**Myth**: Market timing sabse important hai. Sahi waqt ka wait karna chahiye.
**Sach**: Market ko koi predict nahi kar sakta! Sahi strategy hai 'SIP'. Jab market niche hai toh zyada units milenge, jab upar hai toh value badhegi. 'Time in market' hi wealth banata hai!

**Best Time to Start Investing**: Yesterday. Second best time: Today.

"Best time to invest was yesterday, second best is today."`,
        imagePrompt: "Person with a telescope looking at a fluctuating red and green line, pink background, conceptual financial illustration",
        color: "#EC4899",
        emoji: "🕵️‍♂️",
        interactiveType: 'myth_buster',
        quizData: {
          question: "MYTH: Market timing sabse important hai. Sahi waqt ka wait karna chahiye.",
          options: ["Haan, saste mein lenge", "Galat, Time in Market > Timing"],
          correctAnswerIndex: 1,
          explanation: "Market ko koi predict nahi kar sakta! Sahi strategy hai 'SIP'. Jab market niche hai toh zyada units milenge, jab upar hai toh value badhegi. 'Time in market' hi wealth banata hai!"
        }
      },
      {
        id: "7-1-5",
        topicId: "7-1",
        topicTitle: "Investment Basics",
        cardIndex: 5,
        totalCardsInTopic: 6,
        title: "Dilemma: Crypto FOMO 🎲",
        content: `Tumhara ek dost WhatsApp pe screenshot bhejta hai: *"Bhai, maine ₹5k ke ₹50k bana liye is meme coin mein! Tu bhi daal de."*

Kya karoge?`,
        imagePrompt: "Person looking at a glowing rocket icon on phone while standing near a stable bank vault, pink and red tones, decision making concept",
        color: "#EC4899",
        emoji: "🤔",
        interactiveType: 'choice_sim',
        choiceData: {
          scenario: "10x returns in 2 days? Luck ya Investment?",
          choices: [
            {
              text: "Chalo ₹5k daal dete hain!",
              isCorrect: false,
              consequence: "Risk! Crypto volatile hai. Agar woh zero ho gaya toh? Isse 'Speculation' kehte hain, 'Investing' nahi. Sirf utna hi daalo jo 100% loss afford kar sako."
            },
            {
              text: "Main apne Index Fund mein hi rahunga.",
              isCorrect: true,
              consequence: "Smart! FOMO (Fear Of Missing Out) se bacho. Wealth 'Get Rich Quick' schemes se nahi, slow and steady compounding se banti hai."
            }
          ]
        }
      },
      {
        id: "7-1-6",
        topicId: "7-1",
        topicTitle: "Investment Basics",
        cardIndex: 6,
        totalCardsInTopic: 6,
        title: "🚨 MISSION: Start Your KYC",
        content: `🚨 **TODAY'S MISSION**

Investing shuru karne ke liye 'KYC' (Know Your Customer) pehla step hai.

- [ ] Groww, Zerodha, ya IndMoney app download karo.
- [ ] Aadhaar aur PAN card ready rakho.
- [ ] KYC process shuru karo (usually 10 min lagte hain).
- [ ] Pehli \`₹100\` ki SIP test ke liye set up karo.

**5-Step Process**:
1. KYC complete karo (PAN + Aadhaar + selfie). Online 10 minute.
2. App download karo (Groww / Zerodha Kite / Paytm Money / ET Money — SEBI registered).
3. Account verify karo — 2-3 minute mein online.
4. Fund choose karo — beginners ke liye Nifty 50 Index Fund best hai.
5. Amount set karo — ₹100 minimum, ₹500-₹1,000 recommended.

**Beginner Funds (Illustrative)**:
1. Nifty 50 Index Fund — Lowest risk equity, market average return, expense ratio 0.1-0.2%
2. HDFC Index Fund - Nifty 50 Plan — Large AMC, reliable tracking
3. SBI Nifty Index Fund — Government bank backing, low fee

Always do your own research or consult SEBI-registered advisor before investing.`,
        imagePrompt: "Digital document with a green checkmark, smartphone with investment app logo, pink and gold theme, achievement vibe",
        color: "#EC4899",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "7-2",
    title: "SIP Complete Guide — Rupee Cost Averaging",
    emoji: "💎",
    color: "#8B5CF6",
    description: "SIP kya hai, kaise kaam karta hai. Rupee cost averaging, NAV, units, SIP myths busted.",
    cards: [
      {
        id: "7-2-1",
        topicId: "7-2",
        topicTitle: "SIP Complete Guide",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "Rupee Cost Averaging Magic",
        content: `**SIP ka magic "rupee cost averaging" mein hai** — market up ho ya down, tum har mahine same amount invest karte ho.

Jab market down hai, **zyada units milte hain** (sasta!). Jab market up hai, kam units milte hain (mehenga!). Average cost balanced rehta hai.

**Rupee Cost Averaging Example:**

| Month | NAV (₹) | Investment | Units Bought |
| :--- | :--- | :--- | :--- |
| 1 | ₹20 | ₹1,000 | 50.0 |
| 2 | ₹15 | ₹1,000 | 66.7 |
| 3 | ₹25 | ₹1,000 | 40.0 |
| 4 | ₹20 | ₹1,000 | 50.0 |
| **Total** | — | **₹4,000** | **206.7** |

Average NAV = ₹20. But average cost = ₹4,000 / 206.7 = **₹19.35**. Market fluctuation ke baad bhi tumhara cost ₹20 se kam! Yeh SIP ka power.

**NAV (Net Asset Value) Kya Hai:**
- Ek mutual fund unit ki price
- Jaise share ka price, waise mutual fund unit ka NAV
- ₹20 NAV = ₹20 mein 1 unit milta hai
- NAV daily change hota hai

**Units Kya Hai:**
- Mutual fund mein "shares" nahi hote, "units" hote hain
- ₹1,000 invest kiya, NAV ₹20 = 50 units mile
- NAV ₹25 hua = tumhara 50 units × ₹25 = ₹1,250 value`,
        imagePrompt: "Rupee cost averaging chart showing units bought at different NAVs, purple theme, financial concept illustration",
        color: "#8B5CF6",
        emoji: "💎"
      },
      {
        id: "7-2-2",
        topicId: "7-2",
        topicTitle: "SIP Complete Guide",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "SIP Compounding Table (₹100 to ₹10,000)",
        content: `**SIP Compounding Table at 12% Annual Return:**

| Monthly SIP | Duration | Total Invested | Total Value | Wealth Gained |
| :--- | :--- | :--- | :--- | :--- |
| **₹100** | 10 years | ₹12,000 | ₹23,000 | ₹11,000 |
| **₹500** | 10 years | ₹60,000 | ₹1,16,000 | ₹56,000 |
| **₹1,000** | 10 years | ₹1,20,000 | ₹2,32,000 | ₹1,12,000 |
| **₹1,000** | 15 years | ₹1,80,000 | ₹5,00,000 | ₹3,20,000 |
| **₹2,000** | 10 years | ₹2,40,000 | ₹4,64,000 | ₹2,24,000 |
| **₹2,000** | 20 years | ₹4,80,000 | ₹20,00,000 | ₹15,20,000 |
| **₹5,000** | 10 years | ₹6,00,000 | ₹11,60,000 | ₹56,000 |
| **₹5,000** | 15 years | ₹9,00,000 | ₹25,00,000 | ₹16,00,000 |
| **₹5,000** | 20 years | ₹12,00,000 | ₹50,00,000 | ₹38,00,000 |
| **₹10,000** | 25 years | ₹30,00,000 | ₹1,90,00,000 | ₹1,60,00,000 |

Note: Above values are approximate at 12% CAGR. Actual returns depend on market. Historical Nifty 50 long-term average ~12%.

**SIP Ke 7 Benefits:**
1. **Disciplined investing** — auto-debit, no emotional decisions
2. **Rupee cost averaging** — market up/down doesn't matter
3. **Power of compounding** — long-term mein exponential growth
4. **Flexibility** — amount change karo, pause karo, stop karo — anytime
5. **Low minimum** — ₹100 se start. Koi excuse nahi
6. **No timing needed** — "best time to invest was yesterday, second best is today"
7. **Tax efficient** — long-term capital gains ₹1.25 lakh tak tax-free (equity)

**SIP Ke 5 Myths Busted:**

⚠️ "SIP mein loss ho sakta hai" → Short-term mein yes, long-term (7+ years) mein historically Nifty 50 positive raha hai
⚠️ "Market crash mein SIP band karo" → Yeh EXACTLY woh time hai jab zyada units milte hain. Continue karo!
⚠️ "₹100 se kya hoga" → ₹100/m at 12% for 30 years = ₹3.5 lakh+. Hota hai
⚠️ "SIP lock-in hota hai" → Nahi! ELSS mein 3-year lock-in hai, baaki SIP mein koi lock-in nahi
⚠️ "SIP stocks se kam return deti hai" → Individual stocks risky hain. SIP index fund = average market return, safer`,
        imagePrompt: "SIP growth comparison chart showing ₹100 to ₹10000 monthly SIP, purple theme, motivational financial visualization",
        color: "#8B5CF6",
        emoji: "📊"
      },
      {
        id: "7-2-3",
        topicId: "7-2",
        topicTitle: "SIP Complete Guide",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "🚨 MISSION: Start ₹500 SIP Today",
        content: `🚨 **TODAY'S MISSION**

Bhai, ₹100 se SIP shuru karo — koi excuse nahi!

- [ ] Groww/Zerodha/Paytm Money app download karo
- [ ] KYC complete karo (10 min, online)
- [ ] Bank account link karo
- [ ] Nifty 50 Index Fund choose karo (low expense ratio)
- [ ] **₹500/month** auto-debit set karo (1st ya 5th of month)
- [ ] 5 years ke liye commit karo — no matter what market does

**Why ₹500/month?**
- ₹500 × 12 × 30 years = ₹1.8 lakh invested
- At 12% CAGR = **₹17.6 lakh** final corpus
- 9.7x return on investment!

**Best SIP Funds for Beginners (Illustrative, not advice):**
1. **Nifty 50 Index Fund** — Lowest risk equity, market average return, expense ratio 0.1-0.2%
2. **HDFC Index Fund - Nifty 50 Plan** — Large AMC, reliable tracking
3. **SBI Nifty Index Fund** — Government bank backing, low fee
4. **Nifty Next 50 Index Fund** — Slightly higher risk/reward, mid-cap exposure
5. **Motilal Oswal Nifty 50 Index Fund** — Direct plan, very low expense ratio

**Pro Tip**: DIRECT plan choose karo (not Regular). Expense ratio kam, returns zyada. ₹5,000/month SIP for 20 years:
- Regular plan (1.5% expense): Corpus = ₹43 lakh
- Direct plan (0.5% expense): Corpus = ₹50 lakh
- Farq = **₹7 lakh**! Sirf expense ratio ka.

**Always do your own research or consult SEBI-registered advisor before investing.**`,
        imagePrompt: "Person celebrating SIP start with smartphone and SIP amount, purple and gold theme, achievement vibe",
        color: "#8B5CF6",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "7-3",
    title: "Mutual Fund Complete Guide",
    emoji: "📊",
    color: "#F59E0B",
    description: "Mutual fund types, direct vs regular plan, expense ratio, NAV, AUM, ratings, top beginner funds.",
    cards: [
      {
        id: "7-3-1",
        topicId: "7-3",
        topicTitle: "Mutual Funds",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "Types of Mutual Funds",
        content: `**Mutual Fund Kya Hai?**
"Tumhara paisa + doosron ka paisa = professional fund manager sambhalta hai." Tum directly stocks nahi kharidte, fund manager kharidta hai. Tumhe units milte hain. Fund acha perform kare = tumhara NAV badhe = profit.

**Types Detailed:**

| Fund Type | Invests In | Risk | Return Range | Best For |
| :--- | :--- | :--- | :--- | :--- |
| **Equity Fund** | Stocks | High | 12-15% | Long-term growth (7+ years) |
| **Debt Fund** | Bonds/Govt securities | Low | 6-8% | Short-term (1-3 years) |
| **Hybrid Fund** | Equity + Debt mix | Medium | 8-10% | Balanced approach |
| **Index Fund** | Market index (Nifty 50) | Medium | 10-12% | Beginners — low fee |
| **ELSS** | Equity + tax saving | Medium-High | 12-15% | Tax saving under 80C, 3yr lock-in |
| **Liquid Fund** | Short-term debt | Very Low | 5-6.5% | Emergency fund parking |
| **Overnight Fund** | 1-day securities | Ultra Low | 4-5% | Very short-term parking |
| **Arbitrage Fund** | Equity arbitrage | Low | 6-8% | Tax-efficient, 1+ year |

**Direct vs Regular Plan — IMPORTANT!**

Direct plan mein expense ratio kam hoti hai (0.5-1% less), toh returns zyada milte hain. Long-term mein yeh farq bahut bada hota hai. **Always choose DIRECT plan.**

**Example**: ₹5,000/month SIP for 20 years:
- Regular plan (1.5% expense): Corpus = **₹43 lakh**
- Direct plan (0.5% expense): Corpus = **₹50 lakh**
- Farq = **₹7 lakh!** Sirf expense ratio ka.

**Key Terms:**

**Expense Ratio**: Fund manage karne ka fee. Kam hone chahiye. Index fund mein 0.1-0.3% hoti hai (lowest), active fund mein 1-2% (higher).

**NAV (Net Asset Value)**: Ek unit ki price. Daily change hota hai.

**AUM (Assets Under Management)**: Fund mein total kitna paisa hai. Zyada AUM = stable fund, lekin very high AUM = difficult to manage (especially mid/small cap).

**Rating**: CRISIL, Morningstar ratings dekho. 5-star = historically good, lekin past performance guarantee nahi.`,
        imagePrompt: "Mutual fund types diagram with risk-return spectrum, amber theme, financial education infographic",
        color: "#F59E0B",
        emoji: "📊"
      },
      {
        id: "7-3-2",
        topicId: "7-3",
        topicTitle: "Mutual Funds",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "Top 5 Beginner Funds + Mission",
        content: `**Student Ke Liye Top 5 Beginner-Friendly Funds (Illustrative):**

1. **Nifty 50 Index Fund** — lowest fee, market follow
2. **Nifty Next 50 Index Fund** — slightly more risk/reward
3. **HDFC Balanced Advantage Fund** — equity + debt auto-managed
4. **Axis ELSS Fund** — tax saving + growth, 3-year lock-in
5. **SBI Liquid Fund** — emergency fund ke liye

Yeh recommendations illustrative hain, koi financial advice nahi. Apna research karo.

**🚨 MISSION: Choose Your Fund**

- [ ] Risk appetite decide karo (Conservative/Moderate/Aggressive)
- [ ] Time horizon decide karo (Short/Medium/Long term)
- [ ] Fund category choose karo (Index/Equity/Hybrid/Debt)
- [ ] Direct plan select karo (not Regular)
- [ ] Expense ratio check karo (lowest is best)
- [ ] AUM check karo (not too low, not too high)
- [ ] CRISIL/Morningstar rating dekho
- [ ] Start with small amount (₹500-₹1,000), increase gradually

**Student Asset Allocation (Age 18-25):**

| Asset | Percentage | Where | Why |
| :--- | :--- | :--- | :--- |
| **Equity (Growth)** | 60% | SIP in Index Fund | Young age = high risk capacity, long time horizon |
| **Debt (Stability)** | 20% | FD/RD/Liquid Fund | Safe returns, emergency fund base |
| **Gold (Hedge)** | 10% | SGB/Digital Gold | Inflation hedge, diversification |
| **Cash (Emergency)** | 10% | Savings Account | Instant access for emergencies |

**Rebalancing**: Har 6-12 months mein check karo. Equity zyada badh gaya (70% ho gaya target 60% se)? Thoda equity se nikaal ke debt mein daalo. Yeh risk control karta hai.

**Rule**: Mutual funds long-term game hai. Short-term volatility normal hai. 7+ years hold karo for best returns.`,
        imagePrompt: "Student asset allocation pie chart with 4 buckets, amber and gold theme, financial planning illustration",
        color: "#F59E0B",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "7-4",
    title: "FD vs RD vs SIP vs PPF — Complete Comparison",
    emoji: "⚖️",
    color: "#06B6D4",
    description: "4 safe aur growth options ka complete comparison. Kaunsa kab choose karein.",
    cards: [
      {
        id: "7-4-1",
        topicId: "7-4",
        topicTitle: "Investment Comparison",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "4-Way Comparison Table",
        content: `**FD vs RD vs SIP vs PPF — Complete Comparison:**

| Feature | FD | RD | SIP | PPF |
| :--- | :--- | :--- | :--- | :--- |
| **Min Amount** | ₹1,000 | ₹100/month | ₹100/month | ₹500/year |
| **Max Amount** | No limit | No limit | No limit | ₹1.5L/year |
| **Expected Return** | 6.5-7% | 6.5-7% | 10-12% | 7.1% |
| **Risk Level** | Zero | Zero | Medium | Zero |
| **Lock-in** | Fixed tenure | Fixed tenure | None (ELSS: 3yr) | 15 years |
| **Tax Benefit** | 80C (5yr FD) | No | 80C (ELSS) | 80C + EEE |
| **Liquidity** | Premature possible | Premature possible | Anytime redeem | Limited withdrawal |
| **Where to Open** | Bank | Bank | App/Broker | Bank/Post Office |
| **Best For** | Short-term safety | Monthly habit | Long-term wealth | Tax saving + long-term |

**Example: ₹5,000/month for 5 years in each — Final Amount Comparison:**

| Investment | Total Invested | Final Amount | Wealth Gained |
| :--- | :--- | :--- | :--- |
| **FD (laddered)** | ₹3,00,000 | ₹3,58,000 | ₹58,000 |
| **RD** | ₹3,00,000 | ₹3,53,000 | ₹53,000 |
| **SIP (12% avg)** | ₹3,00,000 | ₹4,05,000 | ₹1,05,000 |
| **PPF** | ₹3,00,000* | ₹3,60,000+ | ₹60,000+ |

*PPF yearly deposit hota hai, monthly comparison approximation.

**Conclusion**:
- **Short-term (1-3 years)** = FD/RD
- **Long-term (5+ years)** = SIP
- **Tax saving** = PPF + ELSS

**Best Strategy: Mix All Four**
1. Emergency fund ka 50% — Savings Account (instant)
2. Emergency fund ka 30% — FD ladder (safety + slight growth)
3. Long-term wealth — SIP ₹2,000-5,000/month Nifty 50
4. Tax saving — PPF ₹500-1,500/month + ELSS`,
        imagePrompt: "Four-way comparison chart of FD, RD, SIP, PPF with bar graph, cyan theme, financial decision illustration",
        color: "#06B6D4",
        emoji: "⚖️"
      },
      {
        id: "7-4-2",
        topicId: "7-4",
        topicTitle: "Investment Comparison",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "PPF Detail + Mission",
        content: `**PPF (Public Provident Fund) Detail:**

PPF government scheme hai — 15 year lock-in, tax-free return, currently **7.1% interest** (Q1 FY 2025-26, unchanged for 5+ years).

- **Minimum**: ₹500/year
- **Maximum**: ₹1.5 lakh/year
- **EEE status** = Exempt-Exempt-Exempt
  - Investment pe tax deduction (80C)
  - Interest pe tax-free
  - Maturity pe tax-free
- **Kahan kholein**: Bank ya Post Office

**PPF Calculation Table:**

| Monthly Amount | Years | Total Invested | Maturity Amount |
| :--- | :--- | :--- | :--- |
| ₹500 | 15 | ₹90,000 | ₹1,62,000+ |
| ₹1,000 | 15 | ₹1,80,000 | ₹3,25,000+ |
| ₹2,000 | 15 | ₹3,60,000 | ₹6,50,000+ |
| ₹5,000 | 15 | ₹9,00,000 | ₹16,25,000+ |
| ₹12,500 | 15 | ₹22,50,000 | ₹40,68,000+ |

Calculated at 7.1% compounded annually. Actual may vary slightly.

**Premature Withdrawal Rules:**
After 5 years, specific conditions pe partial withdrawal allowed. Maximum 50% of balance. Education, medical emergency ke liye.

**Loan Against PPF:**
3rd to 6th year between loan allowed. 25% of balance. Interest 1% above PPF rate. Repayment 36 months mein.

**Student ke liye PPF**: Long-term tax-saving tool. 18 saal ki umr mein shuru karo, 33 pe maturity = ₹16 lakh+ (₹5,000/month). Agar 25 pe start kiya toh 40 pe = same amount. **Early start = magic.**

**🚨 MISSION: PPF Account Open**

- [ ] Bank ya Post Office mein PPF account kholo
- [ ] Minimum ₹500 deposit karo (account active rakhne ke liye)
- [ ] Auto-debit set karo ₹500-₹2,000/month
- [ ] 15 years ke liye commit karo
- [ ] Tax benefit (80C) claim karo ITR mein

**Rule**: PPF = guaranteed 7.1% + tax saving + zero risk. Long-term must have. 15-year lock-in = forced discipline.`,
        imagePrompt: "PPF growth chart with 7.1% interest, cyan and gold theme, government scheme illustration",
        color: "#06B6D4",
        emoji: "🏛️"
      }
    ]
  },
  {
    id: "7-5",
    title: "Stock Market, Gold, Crypto — Honest Guide",
    emoji: "📈",
    color: "#EF4444",
    description: "Stock market basics, gold investment options, crypto warnings — honest guide for students.",
    cards: [
      {
        id: "7-5-1",
        topicId: "7-5",
        topicTitle: "Stocks, Gold, Crypto",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "Stock Market Basics + Gold Options",
        content: `**Stock Market Kya Hai?**
Yeh ek marketplace hai jahan companies ke shares khareede-bike jaate hain. Share = company ka chhota ownership piece. Agar company achi karti hai, share price badhta hai — tum profit kamao.

**BSE (Bombay Stock Exchange)** aur **NSE (National Stock Exchange)** — India ke 2 main exchanges.
- **Sensex** = BSE ke top 30 companies ka index
- **Nifty 50** = NSE ke top 50 companies ka index

**Demat Account**: Shares digital form mein hold karne ka account.
- Kaise kholein: Zerodha, Groww, Upstox — online 10 minute
- Charges: Account opening free (usually), AMC ₹300/year, brokerage 0.03% or flat ₹20

**Beginner Ke Liye Safe Ya Nahi — Honest Answer:**
Direct stock picking risky hai beginner ke liye. Better option: **Index fund** — Nifty 50 index fund mein invest karo, market ka average return milega. Individual stock pick karna research aur experience chahta hai. **90% retail investors market ko beat nahi kar paate.**

**10 Golden Rules Agar Stock Market Mein Jaana Hai:**
1. Pehle emergency fund banao
2. Pehle SIP start karo index fund mein
3. Direct stocks ke liye alag capital rakho — "fun money" jo 100% loss afford kar sako
4. Kabhi borrowed money se stock mat kharido
5. 1 stock pe >10% capital mat lagao
6. Long-term invest karo — trading nahi
7. F&O (Futures & Options) bilkul mat karo beginner mein — 90% loss hota hai retail investors ko
8. Research bina investment mat karo — annual report, balance sheet padho
9. Loss afford kar sako toh hi invest karo
10. "Hot tip" pe paisa mat lagao — WhatsApp forward ≠ research

**Fundamental Analysis Basics:**
- **PE Ratio**: Price to Earnings. 15 = reasonable, 30 = expensive, <10 = cheap
- **Market Cap**: Large cap = safe, small cap = risky
- **Debt**: Kam debt = healthy
- **ROE**: 15%+ = good management

---

**Gold Investment — 4 Options:**

| Option | Form | Pros | Cons |
| :--- | :--- | :--- | :--- |
| **Physical Gold** | Jewellery/Coins | Tangible | Making charges 10-25% loss, storage risk |
| **Digital Gold** | App-based | Small amounts, no storage | Spread cost |
| **SGB (Sovereign Gold Bond)** | Govt bond | 2.5% extra interest, tax-free maturity | 8-year lock-in |
| **Gold ETF** | Stock exchange | Trade like stock, liquid | Brokerage + expense ratio |

**Student Recommendation**: **Sovereign Gold Bond (SGB) best hai** — government guaranteed + 2.5% extra interest + tax-free maturity. Lekin 8-year lock-in hai. Agar liquidity chahiye toh digital gold. Physical gold = making charges 10-25% loss.`,
        imagePrompt: "Stock market and gold investment options comparison, red and gold theme, comprehensive financial illustration",
        color: "#EF4444",
        emoji: "📈"
      },
      {
        id: "7-5-2",
        topicId: "7-5",
        topicTitle: "Stocks, Gold, Crypto",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "Crypto — 5 Honest Warnings + Mission",
        content: `**Crypto Kya Hai?**
Digital currency jo blockchain technology pe based hai. Bitcoin, Ethereum — sabse popular.

**Lekin student ke liye 5 strict warnings:**

⚠️ **1. 80% crypto projects fail** — long-term survival uncertain. 2017 ke 100 top coins mein se 80 ab zero hain.

⚠️ **2. India mein koi regulation nahi** — agar fraud hua toh koi protect nahi karega. Exchange band ho gayi = paisa gayab.

⚠️ **3. 30% tax on gains + 1% TDS** — returns ka almost third tax mein jaata hai. Plus 4% cess.

⚠️ **4. Extreme volatility** — ek hafte mein 50% up ya 50% down possible. ₹1 lakh → ₹50,000 in 3 days.

⚠️ **5. Scams bahut common** — fraud exchanges, rug pulls, fake coins. "Guaranteed 10x" = 100% scam.

**Recommendation for Students:**
Pehle basics strong karo — FD, SIP, PPF. **Crypto LATER**, agar kabhi, aur sirf utna jo 100% loss afford kar sako. Crypto ≠ investing, crypto = speculation. Difference samjho.

---

**🚨 MISSION: Asset Allocation Audit**

- [ ] Apni current investment portfolio list karo
- [ ] Asset allocation check karo (Equity/Debt/Gold/Cash)
- [ ] Risk profile decide karo (Aggressive/Moderate/Conservative)
- [ ] Rebalancing plan banao (6-12 months)
- [ ] Tax-saving investments check karo (80C limit ₹1.5L)
- [ ] Long-term goal set karo (FIRE/retirement/child education)

**Common Misconceptions (Module 7):**

⚠️ "Investing gambling hai" → Galat! Informed investing research-based hai, speculation gambling hai. SIP = disciplined investing
⚠️ "SIP mein loss ho sakta hai" → Short-term mein yes, long-term (7+ years) mein historically Nifty 50 positive
⚠️ "Stock market sirf ameer logon ke liye hai" → Galat! ₹100 se SIP shuru ho sakti hai
⚠️ "Tax sirf CA file kar sakta hai" → Galat! Simple ITR (ITR-1) easily file ho jaata hai online 15 minute mein. Free
⚠️ "Gold sirf jewellery hai" → Galat! SGB, ETF, digital gold investment options hain

**KEY TAKEAWAYS (Module 7):**
- ✅ Investing ≠ saving. Saving protect karti hai, investing grow karti hai. Inflation 6% > FD 6.5% = barely beating
- ✅ SIP ₹100 se start ho sakti hai — excuse nahi ki "paisa nahi hai". Auto-debit + discipline = wealth
- ✅ Index fund beginner ke liye best — market ka average return, lowest fee, diversification. Nifty 50 = safe start
- ✅ PPF = guaranteed 7.1% + tax saving + zero risk — long-term must have. 15-year lock-in = forced discipline
- ✅ Tax file karo even agar zero tax — ITR income proof hai. 80C, 80E se hazaron bachao

**Aage Ka Safar**: Investing ka base ready hai, ab Module 8 mein ultimate goal — Financial Independence! FIRE movement, passive income, compounding tables, retirement planning, aur real Indian examples jinhone financial freedom paaya. Wealth building se freedom building — aage badhte hain! 🎯`,
        imagePrompt: "Crypto warning with red caution signs, red theme, honest financial advice illustration",
        color: "#EF4444",
        emoji: "🎯"
      }
    ]
  }
];

export function getAllCards() {
  return module7Topics.flatMap(topic => topic.cards);
}

export function getTotalCardCount() {
  return getAllCards().length;
}

export function getTopicById(id) {
  return module7Topics.find(t => t.id === id);
}

export function getCardsByTopic(topicId) {
  const topic = getTopicById(topicId);
  return topic ? topic.cards : [];
}
