export const module3Topics = [
  {
    id: "3-1",
    title: "Saving Strategies — Paisa Bachane Ki Ninja Technique 🥷",
    emoji: "🏦",
    color: "#8B5CF6",
    description: "Saving boring nahi, ek super-power hai. Dekho kaise chhote amounts bade wealth mein badalte hain!",
    cards: [
      {
        id: "3-1-1",
        topicId: "3-1",
        topicTitle: "Saving Strategies",
        cardIndex: 1,
        totalCardsInTopic: 6,
        title: "Compounding: Duniya Ka 8th Ajooba 🚀",
        content: `Albert Einstein ne kaha tha compounding duniya ka 8th ajooba hai. Kyun?

Kyunki yahan paisa sirf badhta nahi, **multiply** hota hai!

SIP (Systematic Investment Plan) shuru karke dekho tumhare \`₹500\` mahine ki value 20 saal baad kya hogi:`,
        imagePrompt: "Rocket ship made of coins taking off, stars in the background, neon purple and blue colors, futuristic financial illustration, compounding magic theme",
        color: "#8B5CF6",
        emoji: "🚀",
        interactiveType: 'calculator',
        calcData: {
          calcType: 'compounding',
          formula: 'none',
          inputs: [
            { label: 'Monthly SIP', min: 500, max: 20000, defaultValue: 1000, step: 500, unit: '₹' },
            { label: 'Expected Return (%)', min: 8, max: 18, defaultValue: 12, step: 0.5, unit: '%' },
            { label: 'Time Period (Years)', min: 1, max: 40, defaultValue: 15, step: 1, unit: 'Y' }
          ]
        }
      },
      {
        id: "3-1-2",
        topicId: "3-1",
        topicTitle: "Saving Strategies",
        cardIndex: 2,
        totalCardsInTopic: 6,
        title: "Chat: Jaldi Shuru Karne Ka Fayda ⏳",
        content: `Priya aur Bhaiya ki baatcheet se samjho 'Time' ki value.

**Priya**: Bhaiya, abhi toh main sirf 20 ki hoon. Job lagegi tab save karungi na?

**Bhaiya**: Arrey pagli! 20 pe start karne ka jo maza hai woh 30 pe nahi. 10 saal ka gap matlab crore ka nuksan!

**Priya**: Kya? 10 saal mein crore ka farq?

**Bhaiya**: Haan! Compounding ko 'Time' chahiye hota hai. Jitna lamba samay, utna bada paisa. ₹1,000/month 20 pe start kiya toh 60 tak ₹1.2 Cr ban sakta hai!

**Person A** (20-30, sirf 10 saal invest): ₹1.18 crore by 60.
**Person B** (30-60, 30 saal invest): ₹35 lakh by 60.

Person A ne sirf 10 saal invest kiya, Person B ne 30 saal. Lekin corpus almost same! Kyunki A ke paise ne 40 saal compound kiya, B ke sirf 30 saal. **10 saal ka early start = 30 saal ka investing!**`,
        imagePrompt: "Two people sitting on a giant hourglass filled with coins instead of sand, purple and gold tones, modern flat illustration, conceptual art",
        color: "#8B5CF6",
        emoji: "⏳",
        interactiveType: 'none'
      },
      {
        id: "3-1-3",
        topicId: "3-1",
        topicTitle: "Saving Strategies",
        cardIndex: 3,
        totalCardsInTopic: 6,
        title: "Myth-Buster: Savings 🏦",
        content: `Bahut log sochte hain ki saving sirf tabhi ho sakti hai jab income bohot zyada ho.

**Myth**: ₹500 bachane se kuch nahi hoga, wait karo jab tak ₹10,000 na bacha sako.
**Sach**: Saving ek muscle ki tarah hai. Agar tum ₹500 manage nahi kar sakte, toh ₹50,000 bhi nahi kar paoge. Start small, but START!

₹500/month at 12% for 30 years = **₹17.6 lakh+**! Bahut kuch hota hai.`,
        imagePrompt: "Person trying to catch floating currency notes, purple background, surreal financial illustration, modern graphic style",
        color: "#8B5CF6",
        emoji: "🕵️‍♂️",
        interactiveType: 'myth_buster',
        quizData: {
          question: "MYTH: ₹500 bachane se kuch nahi hoga, wait karo jab tak ₹10,000 na bacha sako.",
          options: ["Sahi hai, ₹500 chillar hai", "Galat, habit zaroori hai!"],
          correctAnswerIndex: 1,
          explanation: "Saving ek muscle ki tarah hai. Agar tum ₹500 manage nahi kar sakte, toh ₹50,000 bhi nahi kar paoge. Start small, but START!"
        }
      },
      {
        id: "3-1-4",
        topicId: "3-1",
        topicTitle: "Saving Strategies",
        cardIndex: 4,
        totalCardsInTopic: 6,
        title: "Inflation: Chupta Hua Chor 📉",
        content: `Tumne ₹1,000 cupboard mein chhupa diye. 10 saal baad nikale. Kya woh abhi bhi ₹1,000 hain?

Technicaly haan, par unki **aukad** (purchasing power) kam ho gayi hai.

| Year | Purchasing Power of ₹1,000 |
| :--- | :--- |
| **Today** | ₹1,000 (Poori Value) 💰 |
| **5 Years** | ₹747 (Ghis gaya) 📉 |
| **10 Years** | ₹558 (Adha reh gaya) 💸 |

**India Ka Average Inflation Rate (Historical Data):**

| Year | CPI Inflation |
| :--- | :--- |
| 2019 | 3.4% |
| 2020 | 6.6% |
| 2021 | 5.1% |
| 2022 | 6.7% |
| 2023 | 5.4% |
| 2024 | 4.8% |
| 2025 | 4.5% |
| 2026 (est.) | 5.0% |

**Real Return**: FD 6.5% - inflation 6% = real return sirf **0.5%**!

**Conclusion**: Paisa sirf bachao mat, use grow bhi karo (Invest)!`,
        imagePrompt: "Ice cube shaped like a rupee symbol melting into a puddle, warm background, conceptual illustration of inflation, purple accents",
        color: "#8B5CF6",
        emoji: "📉"
      },
      {
        id: "3-1-5",
        topicId: "3-1",
        topicTitle: "Saving Strategies",
        cardIndex: 5,
        totalCardsInTopic: 6,
        title: "Choose Your Style: Saving Hacks 🛠️",
        content: `Har kisi ka saving style alag hota hai. Tumhe kaunsa suit karega?`,
        imagePrompt: "Three different piggy banks - one digital, one glass, one traditional clay, diverse saving methods illustrated, purple and teal theme",
        color: "#8B5CF6",
        emoji: "🛠️",
        interactiveType: 'choice_sim',
        choiceData: {
          scenario: "Tumhe agle phone ke liye ₹20,000 bachane hain. Strategy kya hogi?",
          choices: [
            {
              text: "Envelope Method (Cash side rakho)",
              isCorrect: true,
              consequence: "Old school but gold! Cash dikhta hai toh kharch karne mein darr lagta hai. Disciplined!"
            },
            {
              text: "Auto-Debit (Directly save from bank)",
              isCorrect: true,
              consequence: "Best for lazy legends! Paisa account mein aane se pehle hi save ho gaya. Zero effort, Max result!"
            }
          ]
        }
      },
      {
        id: "3-1-6",
        topicId: "3-1",
        topicTitle: "Saving Strategies",
        cardIndex: 6,
        totalCardsInTopic: 6,
        title: "🚨 MISSION: No-Spend Day",
        content: `🚨 **TODAY'S MISSION**

Bhai, aaj ek 'No-Spend Day' challenge lete hain.

- [ ] Aaj ₹0 kharch karne ka try karo (apart from already paid mess/rent).
- [ ] Koi bahar ka khana nahi, koi shopping nahi, koi auto nahi.
- [ ] Shaam ko dekho kitna bacha aur kaisa feel hua.
- [ ] Agar successful rahe toh +50 Coins!

**Pro Tip**: Mahine mein 4 no-spend days = ₹200/day × 4 = ₹800/month = ₹9,600/year!`,
        imagePrompt: "Calendar with a big green checkmark on today's date, '₹0' written boldly, minimal and clean illustration, purple and green colors",
        color: "#8B5CF6",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "3-2",
    title: "Kitna Save Karna Chahiye — Rules, Targets, Calculations",
    emoji: "🎯",
    color: "#06B6D4",
    description: "Saving ka sawaal: kitna? Percentage rules, amount rules, age-based targets — sab is topic mein.",
    cards: [
      {
        id: "3-2-1",
        topicId: "3-2",
        topicTitle: "Kitna Save Karna Chahiye",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "Percentage Rules — 20% to 70%",
        content: `**Percentage Rules for Saving:**

- **Minimum 20% income save karo** (50/30/20 rule). Har income level pe applicable.
- **Aggressive savers 30-50% save karte hain**. Agar expenses kam hain (ghar pe rehte ho), toh 50% possible hai.
- **FIRE followers 50-70% bhi save karte hain**. Financial independence early chahiye toh yeh karna padta hai.

**Amount Rules:**
- Student ke liye **₹500/month minimum target** — yeh bahut kam lagta hai lekin yeh habit build karta hai.
- ₹500/month = ₹6,000/year = ₹30,000 in 5 years (without interest).
- Agar SIP mein invest karo at 12% toh ₹30,000 → ₹40,000+ ban jaate hain.

**Income-Based Calculator:**

| Monthly Income | Min Save (20%) | Aggressive (30%) | FIRE Target (50%) |
| :--- | :--- | :--- | :--- |
| ₹5,000 | ₹1,000 | ₹1,500 | ₹2,500 |
| ₹10,000 | ₹2,000 | ₹3,000 | ₹5,000 |
| ₹15,000 | ₹3,000 | ₹4,500 | ₹7,500 |
| ₹25,000 | ₹5,000 | ₹7,500 | ₹12,500 |
| ₹50,000 | ₹10,000 | ₹15,000 | ₹25,000 |

**Rule**: 20% minimum, 30% aggressive, 50% FIRE. Apni income aur goal pe depend karta hai.`,
        imagePrompt: "Percentage pie charts for different savings rates, cyan theme, clean financial infographic",
        color: "#06B6D4",
        emoji: "📊"
      },
      {
        id: "3-2-2",
        topicId: "3-2",
        topicTitle: "Kitna Save Karna Chahiye",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "Age-Based Saving Targets 🎯",
        content: `Har age pe alag saving target hota hai. Apna stage identify karo:

| Age | Focus Area | Target Monthly Saving | Why |
| :--- | :--- | :--- | :--- |
| **18-22 (College)** | Habit building | ₹500 - ₹2,000 | Time sabse zyada hai, compounding ka full benefit |
| **22-25 (First Job)** | Emergency fund | 20% of salary minimum | Job unstable hoti hai, safety net zaroori |
| **25-30** | Investing aggressive | 30% of salary | Income stable, risk capacity zyada |
| **30+** | Wealth building | 30-40% of salary | Family responsibilities aate hain, pehle se corpus chahiye |

**Calculation Example: 18 saal ka student**
- ₹500/month saving start kiya
- SIP in Nifty 50 Index Fund (12% expected)
- Continue till 60 (42 years)
- Total invested: ₹500 × 12 × 42 = ₹2,52,000
- Final corpus: **₹58 lakh+** 🤯

Sirf ₹500/month ne ₹58 lakh banaya! Yeh compounding ka power hai.

**Calculation Example: 25 saal ka fresher**
- ₹5,000/month saving (₹25k salary ka 20%)
- SIP + PPF + Emergency Fund mix
- Continue till 60 (35 years)
- Total invested: ₹5,000 × 12 × 35 = ₹21 lakh
- Final corpus: **₹2.5 crore+** 🚀`,
        imagePrompt: "Timeline of life stages with savings targets, cyan and gold theme, age progression illustration",
        color: "#06B6D4",
        emoji: "🎯",
        interactiveType: 'calculator',
        calcData: {
          calcType: 'compounding',
          formula: 'none',
          inputs: [
            { label: 'Monthly Saving', min: 500, max: 50000, defaultValue: 2000, step: 500, unit: '₹' },
            { label: 'Expected Return (%)', min: 8, max: 15, defaultValue: 12, step: 0.5, unit: '%' },
            { label: 'Years to Invest', min: 5, max: 40, defaultValue: 35, step: 1, unit: 'Y' }
          ]
        }
      },
      {
        id: "3-2-3",
        topicId: "3-2",
        topicTitle: "Kitna Save Karna Chahiye",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "🚨 MISSION: Apna Saving Target Set Karo",
        content: `🚨 **TODAY'S MISSION**

Bhai, bina target ke saving motivation nahi rehti. Aaj target set karo:

- [ ] Apni current income calculate karo.
- [ ] 20% saving target fix karo (minimum).
- [ ] Apni age pe based long-term goal likho (e.g., \"30 saal tak ₹5 lakh\").
- [ ] Calculator use karke dekho kitna monthly save karna padega.
- [ ] Auto-debit setup karo — taaki target miss na ho.

**Sample Targets:**
- College student (₹5k income): ₹500/month → ₹6k/year
- Working student (₹15k income): ₹3,000/month → ₹36k/year
- Fresher (₹25k salary): ₹5,000/month → ₹60k/year

**Rule**: Target realistic rakho, lekin challenging bhi ho. ₹0 saving = 0 progress. ₹500 bhi shuru karo!`,
        imagePrompt: "Person writing savings target on a goal chart, cyan theme, motivation and planning atmosphere",
        color: "#06B6D4",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "3-3",
    title: "Saving Ke Barriers Aur Solutions — 15 Reasons",
    emoji: "🚧",
    color: "#EF4444",
    description: "Log saving shuru karte hain, lekin 15 common barriers se ruk jaate hain. Solution bhi hai har barrier ka.",
    cards: [
      {
        id: "3-3-1",
        topicId: "3-3",
        topicTitle: "Saving Barriers",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "Top 8 Saving Barriers Aur Solutions",
        content: `**Saving Ke 15 Barriers — Pehle 8:**

| # | Barrier | Solution |
| :--- | :--- | :--- |
| 1 | \"Itna kam hai kya bachega\" | ₹500 bhi shuru karo — habit matters. ₹500/m × 5 yr = ₹30,000 minimum. SIP mein daalo toh ₹40,000+ |
| 2 | \"Friends spend karte hain, peer pressure\" | Apna budget apna hai, compare mat karo. Monthly outing budget fix karo — ₹500 max |
| 3 | \"Abhi toh young hain, baad mein karenge\" | 20 pe start vs 30 pe = 10 saal compounding miss! ₹1,000/m at 12%: 20 se start = ₹1.18 cr by 60. 30 se = ₹35 lakh. ₹83 lakh ka loss! |
| 4 | \"Emergency aa gayi toh save kya karenge\" | Emergency fund alag banao. ₹500/month se ₹15,000 in 30 months. Do buckets — emergency + savings |
| 5 | \"Pata nahi kaise shuru karein\" | Auto-debit setup karo, dimag mat lagao. Bank form bhari, har mahine auto-transfer |
| 6 | \"Kharcha zyada hai\" | Expense audit karo — wants cut karo. Chai ₹50/day = ₹1,500/month. Swiggy ₹200 × 15 = ₹3,000/month |
| 7 | \"Loan le lenge emergency mein\" | Loan ka total cost dikhao. ₹50,000 loan at 18% = ₹72,000+ total. EMI = ₹1,500/month for 5 years |
| 8 | \"Investment risky hai\" | FD/RD safe options se start karo. FD: 6.5-7% guaranteed return. Zero risk |`,
        imagePrompt: "Wall of barriers with arrows breaking through, red and gold theme, motivational financial illustration",
        color: "#EF4444",
        emoji: "🚧"
      },
      {
        id: "3-3-2",
        topicId: "3-3",
        topicTitle: "Saving Barriers",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "Barriers 9-15 + Solutions",
        content: `**Saving Ke Aage Ke 7 Barriers:**

| # | Barrier | Solution |
| :--- | :--- | :--- |
| 9 | \"Parents de dete hain\" | Financial independence kyun zaroori hai? Parents hamesha nahi rahenge. 21 ke baad self-reliance aim karo |
| 10 | \"Social media FOMO\" | Unfollow finance-harmful accounts. Apna journey apna hai |
| 11 | \"Lifestyle inflation\" | Income badha toh expense bhi badha diye. Salary ₹5k se ₹15k? Savings ₹1k se ₹3k karo, expenses ₹4k se ₹12k mat badhao |
| 12 | \"No financial goal\" | Goal-based saving — target set karo. \"6 mahine mein ₹15,000\" = phone fund. \"1 saal mein ₹40,000\" = laptop fund |
| 13 | \"Instant gratification\" | 48-hour rule apply karo. 90% cheezein baad mein yaad bhi nahi rehti |
| 14 | \"Social media FOMO\" | Instagram pe sab rich dikhte hain. Reality: woh bhi EMI pe hain. Apna journey apna hai |
| 15 | \"No accountability\" | Partner ya app se track karo. Friend se pact karo — dono ₹1,000/month save karo, har Sunday check karo |

**Rule**: Start small. ₹500/month is better than ₹0/month. Habit banao, baaki automatic.

**Common Misconceptions (Module 3):**

⚠️ **\"₹500 mahine mein kya bachega\"** → ₹500/m at 12% for 30 years = ₹17.6 lakh. Bahut bachega!

⚠️ **\"Inflation se koi farq nahi padta chhote amounts pe\"** → 6% inflation har cheez mehengi karti hai. Chai ₹10 se ₹16 ho gayi — yeh inflation hai.

⚠️ **\"Compounding sirf rich logon ke liye hai\"** → Galat! Compounding sabke liye hai, bas start karna padta hai. ₹100 se SIP shuru ho sakti hai.

⚠️ **\"No-spend day impossible hai\"** → Galat! Mess already paid, college jaana hai, ghar aana hai — ₹0 spend possible hai. 4 din/month = ₹9,600/year save.`,
        imagePrompt: "Checklist of barriers with green checkmarks next to solutions, red and gold theme, modern financial illustration",
        color: "#EF4444",
        emoji: "✅"
      }
    ]
  },
  {
    id: "3-4",
    title: "Saving Techniques — 7 Detailed Methods",
    emoji: "🛠️",
    color: "#2563eb",
    description: "7 proven saving techniques — Envelope, Auto-Debit, Separate Account, Digital Piggy, No-Spend, 52-Week, ₹1 Daily.",
    cards: [
      {
        id: "3-4-1",
        topicId: "3-4",
        topicTitle: "Saving Techniques",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "7 Saving Methods — Detailed",
        content: `**7 Detailed Saving Techniques:**

**1. Envelope Method** — Cash ko envelopes mein baanto: \"khana ₹2,000\", \"transport ₹500\", \"entertainment ₹500\". Jab envelope khaali, us category mein aur kharcha nahi. Physical limitation overspending rokta hai.

**2. Auto-Debit Method** — Salary/pocket money aate hi saving account mein auto-transfer. ₹1,000 auto-debit on 1st of every month. Tumhe yaad rakhne ki zaroorat nahi, system automatically save kar deta hai. Best banks: SBI, HDFC, ICICI.

**3. Separate Account Method** — Saving account alag bank mein rakho jisme debit card mat lelo. Access mushkil = spending mushkil. \"Out of sight, out of mind\" actually kaam karta hai. Kotak 811 ya Jupiter mein alag account kholo, UPI bhi mat link karo.

**4. Digital Piggy Bank** — Apps jaise CRED, Paytm round-up feature use karo. ₹47 ka payment kiya → ₹3 round-up se save. Chhota amount lekin monthly ₹200-₹500 easily bach jaata hai.

**5. No-Spend Challenge** — Hafte mein 2 days \"no-spend\" declare karo — sirf necessary expenses. ₹200/day save = ₹1,600/month. Yeh habit impulse spending control karta hai.

**6. 52-Week Challenge** — Week 1: ₹50, Week 2: ₹100, Week 3: ₹150... Week 52: ₹2,600. Total = **₹68,900** in a year! Formula: n(n+1)/2 × 50 where n=52.

**7. ₹1 Daily Challenge** — Day 1: ₹1, Day 2: ₹2... Day 365: ₹365. Total = **₹66,795**! Formula: n(n+1)/2 where n=365.`,
        imagePrompt: "Seven different saving method icons arranged in a grid, green theme, clean modern financial infographic",
        color: "#2563eb",
        emoji: "🛠️"
      },
      {
        id: "3-4-2",
        topicId: "3-4",
        topicTitle: "Saving Techniques",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "Daily Saving Calculation Table",
        content: `**Daily Saving Calculation — Chhota Amount, Bada Result:**

| Daily Amount | Monthly | Yearly | 5 Years (FD 6.5%) | 10 Years (SIP 12%) |
| :--- | :--- | :--- | :--- | :--- |
| **₹10** | ₹300 | ₹3,650 | ₹20,800 | ₹69,000 |
| **₹20** | ₹600 | ₹7,300 | ₹41,600 | ₹1,38,000 |
| **₹50** | ₹1,500 | ₹18,250 | ₹1,04,000 | ₹3,45,000 |
| **₹100** | ₹3,000 | ₹36,500 | ₹2,08,000 | ₹6,90,000 |

Dekho! Sirf ₹50/day = 10 saal mein ₹3.45 lakh. Yeh chhota amount bhi bada result deta hai.

**Comparison: ₹50 chai vs ₹50 saving**
- ₹50/day chai × 30 days = ₹1,500/month
- ₹1,500/month SIP at 12% for 10 years = **₹3.45 lakh**

Matlab: Ek chai ka daily sacrifice = 10 saal mein ₹3.45 lakh wealth! Choice tumhara.`,
        imagePrompt: "Comparison table showing daily savings growing into large amounts over time, green theme, motivational financial illustration",
        color: "#2563eb",
        emoji: "📈"
      },
      {
        id: "3-4-3",
        topicId: "3-4",
        topicTitle: "Saving Techniques",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "🚨 MISSION: Choose Your Technique",
        content: `🚨 **TODAY'S MISSION**

Bhai, 7 techniques mein se koi ek choose karo aur next 30 din follow karo:

- [ ] **Envelope Method** try karne ke liye: 5 envelopes banao — rent, food, transport, entertainment, savings.
- [ ] **Auto-Debit** try karne ke liye: Bank app mein jao, ₹500 monthly auto-transfer set karo.
- [ ] **52-Week Challenge** try karne ke liye: Week 1 se ₹50 shuru karo, har week badhate jao.
- [ ] **₹1 Daily Challenge** try karne ke liye: Day 1 ₹1 se shuru karo.
- [ ] **Digital Piggy Bank** try karne ke liye: CRED ya Paytm pe round-up feature enable karo.

**Pro Tip**: Ek hi technique try karo. Multiple techniques confuse kar deti hain. 30 din consistently follow karo, phir review karo.

**Goal**: Is mahine kam se kam ₹500 extra save karo kisi ek technique se!`,
        imagePrompt: "Person choosing from multiple saving method cards, green and gold theme, decision making illustration",
        color: "#2563eb",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "3-5",
    title: "Saving Goals — Short, Medium, Long Term",
    emoji: "🎯",
    color: "#F59E0B",
    description: "Goal clear hone se saving automatic ho jaati hai. 3 categories mein apne goals classify karo.",
    cards: [
      {
        id: "3-5-1",
        topicId: "3-5",
        topicTitle: "Saving Goals",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "Short-Term Goals (1 Year)",
        content: `**Short-Term Goals (0-1 year):** Quick wins, instant gratification control.

| Goal | Amount | Monthly Save | Time | Where |
| :--- | :--- | :--- | :--- | :--- |
| Phone repair | ₹5,000 | ₹500 | 10 months | Savings account |
| Weekend trip | ₹8,000 | ₹700 | 12 months | RD |
| Exam fees | ₹3,000 | ₹1,000 | 3 months | Savings account |
| Small emergency fund | ₹15,000 | ₹1,500 | 10 months | Savings + RD |
| Festival shopping | ₹10,000 | ₹850 | 12 months | RD |

**Why Short-Term Goals Matter:**
1. Quick motivation — goal achieve karne ka satisfaction
2. Habit building — chhota amount regular save karna seekho
3. Discipline — monthly consistency develop hoti hai

**Pro Tip**: Short-term goals ke liye savings account ya RD best — instant access chahiye, growth se zyada safety zaroori.`,
        imagePrompt: "Calendar icon with short-term goal items around it, amber theme, quick wins visualization",
        color: "#F59E0B",
        emoji: "📅"
      },
      {
        id: "3-5-2",
        topicId: "3-5",
        topicTitle: "Saving Goals",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "Medium aur Long-Term Goals",
        content: `**Medium-Term Goals (1-5 years):** Significant milestones.

| Goal | Amount | Monthly Save | Time | Where |
| :--- | :--- | :--- | :--- | :--- |
| Laptop | ₹40,000 | ₹3,500 | 12 months | RD at 6.5% |
| Bike (2nd hand) | ₹50,000 | ₹2,000 | 24 months | FD/SIP hybrid |
| Higher education fund | ₹1,00,000 | ₹3,000 | 36 months | SIP (debt/hybrid) |
| ₹1 lakh emergency fund | ₹1,00,000 | ₹3,000 | 36 months | FD + SIP |
| Certification courses | ₹2,00,000 | ₹5,000 | 40 months | SIP |

**Long-Term Goals (5+ years):** Wealth building, financial freedom.

| Goal | Amount | Monthly Save | Time | Where |
| :--- | :--- | :--- | :--- | :--- |
| House down payment | ₹10,00,000 | ₹10,000 | 15 years | SIP (equity) |
| Retirement corpus | ₹50,00,000 | ₹5,000 | 30 years | SIP + PPF + NPS |
| Financial freedom | ₹25,00,000 | ₹8,000 | 20 years | SIP (equity) |
| Child education (future) | ₹5,00,000 | ₹5,000 | 15 years | SIP + SSY |
| World tour fund | ₹5,00,000 | ₹3,000 | 15 years | SIP |

**Rule**: Long-term goals ke liye **equity SIP** best — inflation beat karta hai. Short-term ke liye **FD/RD/Savings** best — safety + liquidity.`,
        imagePrompt: "Timeline showing progression of short, medium, and long-term goals, amber and gold theme, roadmap illustration",
        color: "#F59E0B",
        emoji: "🛤️"
      },
      {
        id: "3-5-3",
        topicId: "3-5",
        topicTitle: "Saving Goals",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "🚨 MISSION: Apna Goal Define Karo",
        content: `🚨 **TODAY'S MISSION**

Bina goal ke saving motivation nahi rehti. Aaj 3 goals define karo:

- [ ] **Short-term (1 year)**: E.g., \"Phone repair fund ₹5,000\" ya \"Weekend trip ₹8,000\"
- [ ] **Medium-term (1-5 years)**: E.g., \"Laptop ₹40,000\" ya \"Bike ₹50,000\"
- [ ] **Long-term (5+ years)**: E.g., \"₹25 lakh financial freedom fund\" ya \"₹10 lakh house down payment\"

**For each goal, write down:**
1. Target amount
2. Time period
3. Monthly saving needed
4. Where to invest (FD/RD/SIP/Savings)
5. Auto-debit date

**Goal Setting Tips:**
- **SMART**: Specific, Measurable, Achievable, Relevant, Time-bound
- **Visualize**: Goal ka photo phone wallpaper pe lagao (e.g., laptop photo)
- **Track progress**: Monthly check karo kitna bana
- **Celebrate milestones**: 50% achieve pe small reward (but no overspending!)

**Rule**: \"Bas bachata hoon\" bina goal ke motivation nahi rehti. Goal = discipline.`,
        imagePrompt: "Person writing financial goals in a notebook with calculator, amber theme, planning and motivation atmosphere",
        color: "#F59E0B",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "3-6",
    title: "Power of Compounding — 8th Wonder of the World",
    emoji: "✨",
    color: "#EC4899",
    description: "Albert Einstein ne kaha tha compounding duniya ka 8th ajooba hai. Early start = max compounding.",
    cards: [
      {
        id: "3-6-1",
        topicId: "3-6",
        topicTitle: "Power of Compounding",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "Simple vs Compound Interest",
        content: `Albert Einstein ne kaha tha: \"Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn't, pays it.\"

Yeh quote context mein samjho — compounding dono taraf kaam karta hai. Investment pe compound return tumhe ameer bana sakta hai, aur debt pe compound interest tumhe gareeb bana sakta hai.

**Simple Interest vs Compound Interest:**

| Type | Calculation | 10 Years Result |
| :--- | :--- | :--- |
| **Simple Interest** | ₹1,000 pe 12% = ₹120/year | ₹1,200 interest. Total = ₹2,200 |
| **Compound Interest** | ₹1,000 pe 12% (compounded) | ₹2,106 interest! Total = ₹3,106 |

**Farq = ₹906 extra — bina extra mehnat ke!**

Compound interest mein interest pe bhi interest milta hai:
- Year 1: ₹120 interest
- Year 2: ₹134 (12% of ₹1,120)
- Year 3: ₹150
- ... aur aage badhta jaata hai!

**Rule of 72** — paisa double hone ka time:
72 ÷ return rate = double hone ke saal

| Return Rate | Years to Double |
| :--- | :--- |
| 6% (FD) | 12 years |
| 8% (PPF) | 9 years |
| 12% (SIP) | 6 years |
| 15% (Equity) | 4.8 years |

SIP at 12% = paisa 6 saal mein double!`,
        imagePrompt: "Two growth curves showing simple vs compound interest diverging over time, pink theme, mathematical illustration",
        color: "#EC4899",
        emoji: "✨"
      },
      {
        id: "3-6-2",
        topicId: "3-6",
        topicTitle: "Power of Compounding",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "SIP Compounding Magic Table 📊",
        content: `**₹1,000/Mahine at 12% Annual Return — SIP Compounding Table:**

| Years | Total Invested | Total Value | Wealth Gained | % Gain |
| :--- | :--- | :--- | :--- | :--- |
| **5 years** | ₹60,000 | ₹81,000 | ₹21,000 | 35% |
| **10 years** | ₹1,20,000 | ₹2,30,000 | ₹1,10,000 | 92% |
| **15 years** | ₹1,80,000 | ₹5,00,000 | ₹3,20,000 | 178% |
| **20 years** | ₹2,40,000 | ₹10,00,000 | ₹7,60,000 | 317% |
| **25 years** | ₹3,00,000 | ₹19,00,000 | ₹16,00,000 | 533% |
| **30 years** | ₹3,60,000 | ₹35,00,000 | ₹31,40,000 | 872% |
| **40 years** | ₹4,80,000 | ₹1,18,00,000 | ₹1,13,20,000 | 2,358% |

Dekho kya hota hai: 20 saal mein tumne ₹2.4 lakh lagaye aur **₹10 lakh** mila. 30 saal mein ₹3.6 lakh lagaye aur **₹35 lakh** mila!

Last 10 saal mein sirf ₹1.2 lakh extra invest kiya lekin **₹25 lakh extra return** aaya. Yeh compounding ka magic hai — shuru mein growth slow lagti hai, baad mein explosive ho jaati hai. **Isliye EARLY START sabse important!**

**Early Start Ka Fayda — ₹1,000/month at 12%:**

| Start Age | Years | Total Invested | Final Corpus by 60 | Loss vs 20 start |
| :--- | :--- | :--- | :--- | :--- |
| 20 | 40 years | ₹4,80,000 | ₹1,18,00,000 | — |
| 30 | 30 years | ₹3,60,000 | ₹35,00,000 | ₹83,00,000 |
| 40 | 20 years | ₹2,40,000 | ₹10,00,000 | ₹1,08,00,000 |

**10 saal late = ₹83 LAKH ka loss!** Yeh loss kabhi recover nahi hoga kyunki time gaya, time wapas nahi aata.`,
        imagePrompt: "Exponential growth chart showing SIP compounding over 40 years, pink and gold theme, motivational financial visualization",
        color: "#EC4899",
        emoji: "📊"
      },
      {
        id: "3-6-3",
        topicId: "3-6",
        topicTitle: "Power of Compounding",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "Compounding Ke 3 Golden Rules + Mission",
        content: `**Compounding Ke 3 Golden Rules:**

1. **Start Early** — jitna jaldi, utna behtar. 20 pe start = 30 pe 10x better.
2. **Be Consistent** — SIP band mat karo, market up ho ya down. Continue karo.
3. **Don't Withdraw** — compounding tabhi kaam karega jab paisa invested rahe.

**Compounding Dono Taraf Kaam Karta Hai:**
- **Investment pe**: ₹1,000/month at 12% for 30 years = ₹35 lakh ( paisa ne paisa kamaya)
- **Debt pe**: ₹10,000 credit card pe minimum payment = ₹18,500 total pay (debt ne debt paidaya)

**YAHAN PE LOG GALTI KARTE HAIN (Module 3):**

⚠️ Compounding ki power ko underestimate karna — 20 saal mein ₹2.4 lakh se ₹10 lakh banta hai!
⚠️ Inflation ko ignore karna — FD pe 7% + inflation 6% = real return sirf 1%
⚠️ Saving techniques try karke 3 din mein chhodna — Consistency key hai
⚠️ \"₹500 se kya hoga\" sochna — ₹500/m × 30 yr at 12% = ₹17.6 lakh!
⚠️ Saving aur investing mein farq na samajhna — Saving protect karti hai, investing grow karti hai
⚠️ Goal bina save karna — \"Bas bachata hoon\" bina goal ke motivation nahi rehti
⚠️ Emergency fund mein se savings karna — Emergency fund alag hai, savings alag
⚠️ Savings ko liquid rakhna — Savings account mein ₹50,000 rakhke inflation se ghis raha hai

**🚨 MISSION**: Aaj ek ₹500/month SIP start karo. Nifty 50 Index Fund mein. Auto-debit set karo. 30 saal baad dekho magic! 🚀`,
        imagePrompt: "Three golden rules of compounding with icons, pink theme, motivational financial infographic",
        color: "#EC4899",
        emoji: "🏆"
      }
    ]
  },
  {
    id: "3-7",
    title: "Student-Specific Saving Hacks — 25 Practical Tips",
    emoji: "🎓",
    color: "#06B6D4",
    description: "25 practical saving tips jo Indian students directly apply kar sakte hain. ₹2,000-5,000/month easily save ho sakte hain.",
    cards: [
      {
        id: "3-7-1",
        topicId: "3-7",
        topicTitle: "Student Hacks",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "Top 13 Student Hacks (1-13)",
        content: `**25 Practical Student Hacks — Pehle 13:**

1. **Student discount use karo** — Apple (education pricing ₹10,000+ off), Spotify (₹59/m student plan), Amazon Prime Student (₹500/year), GitHub Student Pack
2. **Used books kharido** — Seniors se, OLX pe, College library se, ya PDF versions online free. New book ₹500 = used ₹150. Semester mein 5 books = ₹1,750 save
3. **Mess tiffin vs outside** — Mess: ₹80-120/meal, Outside: ₹150-300/meal. Daily 2 meals outside = ₹300 extra × 30 = ₹9,000/month!
4. **Public transport > Auto/Cab** — Metro pass ₹500-800/month vs daily auto ₹100-200 = ₹3,000-6,000/month saving
5. **Group subscriptions share karo** — Netflix 4-screen ₹649 ÷ 4 = ₹162/person. 4 apps share karke ₹500/month save
6. **Phone recharge optimize** — ₹199 prepaid plan vs ₹499 postpaid. Prepaid mein data limit = controlled spending
7. **Second-hand items** — OLX, Facebook Marketplace pe furniture, books, electronics 40-60% cheaper. Microwave ₹8,000 new = ₹3,500 used
8. **Free learning resources** — Coursera (financial aid), NPTEL (IIT courses free), YouTube, Khan Academy, MIT OCW. ₹20,000 course free
9. **College ka free WiFi use karo** — Data pack ka ₹200-400/month save
10. **Cook at home** — ₹50/meal vs ₹150/meal outside. Monthly 20 meals home = ₹2,000 vs ₹3,000 = ₹1,000 save. Plus healthier
11. **Library se books borrow karo** — Novels, fiction, reference books — sab free. ₹500/month save
12. **Annual plans > Monthly** — Annual gym: ₹8,000 vs Monthly: ₹1,000 × 12 = ₹12,000. ₹4,000 save
13. **Cashback apps** — CRED, Paytm cashback use karo lekin IMPULSE purchase mat karo sirf cashback ke liye`,
        imagePrompt: "Student saving tips illustrated as numbered icons, cyan theme, clean educational infographic",
        color: "#06B6D4",
        emoji: "💡"
      },
      {
        id: "3-7-2",
        topicId: "3-7",
        topicTitle: "Student Hacks",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "Hacks 14-25 + Total Savings",
        content: `**25 Practical Student Hacks — Aage Ke 12:**

14. **College free health checkup** — Most colleges have free medical facilities. Basic checkup ₹500 outside = free in college
15. **Planned seasonal purchases** — Diwali sale mein planned items kharido, impulse nahi. 30-40% off mein annual needs stock karo
16. **UPI cashback/rewards** — Google Pay, PhonePe rewards collect karo. ₹50-100/month
17. **Referral bonuses** — Apps ke referral earn karo. Groww, Paytm, Google Pay — har referral ₹50-500. Friends circle mein share karo
18. **Semester start mein books kharido** — Early bird discounts 10-20% off. Last minute = full price + unavailable
19. **Carpooling** — Petrol share karo. ₹100/day petrol = 4 friends milke ₹25/day. Monthly ₹2,250 save
20. **Coupons aur promo codes** — Before checkout, couponsday pe search karo
21. **Dual SIM** — Work + personal, cheapest plan combo. Jio ₹199 + BSNL ₹108 = ₹307 vs single ₹499 postpaid. ₹192/month save
22. **Bulk buying** — Roommates se milke groceries. 5 kg atta alag = ₹250/kg, 25 kg together = ₹200/kg. 20% save
23. **Free software** — Student license (GitHub Student Pack mein Canva Pro, JetBrains, Azure free). Professional tools ₹10,000+ free
24. **Clothing swap** — Friends ke saath exchange. Tumhari jeans uski shirt. Fresh wardrobe, zero cost
25. **Monthly no-spend day** — 4 din mahine mein ₹0 expense. Sirf necessary — mess, college, ghar. ₹200/day × 4 = ₹800/month = ₹9,600/year

**Total Potential Monthly Savings (Agar sab hacks apply ho):**
- Subscription sharing: ₹500
- Transport optimization: ₹2,000
- Food (mess vs outside): ₹3,000
- Books (used): ₹500
- Phone recharge optimization: ₹300
- Cashback + referral: ₹200
- No-spend days: ₹800
- Others: ₹1,200

**TOTAL: ~₹8,500/month potential savings** for a student! 🤯`,
        imagePrompt: "Calendar grid with 25 saving tips, cyan theme, comprehensive financial hack visualization",
        color: "#06B6D4",
        emoji: "✅"
      },
      {
        id: "3-7-3",
        topicId: "3-7",
        topicTitle: "Student Hacks",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "🚨 MISSION: Apply 5 Hacks + Module Summary",
        content: `🚨 **TODAY'S MISSION**

25 hacks mein se aaj 5 hacks apply karo:

- [ ] **Subscription sharing**: Doston ke saath Netflix/Spotify share karo.
- [ ] **Used books**: Semester ke books OLX ya seniors se arrange karo.
- [ ] **Public transport**: Auto ki jagah bus/metro use karo.
- [ ] **Phone recharge**: ₹199 prepaid plan try karo, postpaid chhod do.
- [ ] **No-spend day**: Is hafte ek din ₹0 kharch karo.

**Track Progress**: 30 din baad dekho kitna bacha! Target: ₹2,000-5,000/month saving.

---

**KEY TAKEAWAYS (Module 3):**
- ✅ Minimum 20% income save karo — Pay Yourself First. Auto-debit best technique.
- ✅ Inflation real return khaata hai — nominal return pe mat raho. 6.5% FD - 6% inflation = 0.5% real.
- ✅ Compounding ka magic early start pe depend karta hai — JALDI SHURU KARO. 20 pe start = 30 pe 10x better.
- ✅ Student hacks se ₹2,000-5,000/mahine easily save ho sakte hain — mess, transport, books, subscriptions.
- ✅ Goal-based saving = automatic discipline — laptop fund, emergency fund, SIP — har goal ka alag bucket.

**Aage Ka Safar**: Saving toh kar li, lekin agar emergency aa gayi aur saved paisa nahi hai? Module 4 mein Emergency Fund ka complete guide — kya hai, kitna chahiye, kaise banayein, kahan rakhein, aur real stories jisme emergency fund ne bacha ya nahi. Safety net banana seekho! 🛡️`,
        imagePrompt: "Student celebrating savings success with piggy bank, cyan and gold theme, victory atmosphere",
        color: "#06B6D4",
        emoji: "🎯"
      }
    ]
  }
];

export function getAllCards() {
  return module3Topics.flatMap(topic => topic.cards);
}

export function getTotalCardCount() {
  return getAllCards().length;
}

export function getTopicById(id) {
  return module3Topics.find(t => t.id === id);
}

export function getCardsByTopic(topicId) {
  const topic = getTopicById(topicId);
  return topic ? topic.cards : [];
}
