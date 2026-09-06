export const module5Topics = [
  {
    id: "5-1",
    title: "Good Debt vs Bad Debt — Farq Samjho",
    emoji: "💳",
    color: "#F59E0B",
    description: "Sab debt bure nahi hote. Kuch debt tumhe aage le jaate hain, kuch peeche kheenchte hain.",
    cards: [
      {
        id: "5-1-1",
        topicId: "5-1",
        topicTitle: "Good Debt vs Bad Debt",
        cardIndex: 1,
        totalCardsInTopic: 6,
        title: "Good Debt vs Bad Debt: Farq Samjho 🧐",
        content: `Har udhaar bura nahi hota. Kuch udhaar tumhe ameer banate hain!

**10 Good Debts (Asset Build Hota Hai):**

| # | Debt Type | Why Good |
| :--- | :--- | :--- |
| 1 | Education Loan | Skills + earning power badhti hai. ₹5L loan, salary ₹6L→₹12L |
| 2 | Home Loan | Property appreciate karti hai. ₹50L flat, 10 saal baad ₹80L |
| 3 | Business Loan | Income generate karega. ₹2L loan, business ₹50k/month profit |
| 4 | Medical Loan (genuine) | Health is wealth. Life save kar raha hai |
| 5 | Skill Development Loan | Earning potential badhega. Coding bootcamp → salary jump |
| 6 | Solar Panel Loan | Electricity bill savings. ₹1L loan, ₹3k→₹500/month bill |
| 7 | Vehicle Loan (income) | Delivery/commercial use. Bike ₹80k, Swiggy se ₹15k/month |
| 8 | Loan against FD | Low interest (FD rate + 1-2%), safe |
| 9 | Student Laptop Loan | Study tool = future income |
| 10 | Home improvement loan | Property value badhati hai |

**10 Bad Debts (Sirf Consumption):**

| # | Debt Type | Why Bad |
| :--- | :--- | :--- |
| 1 | Credit Card pe Shopping | Value khatam, interest zyada. ₹10k clothes → ₹3k worth in 1 year |
| 2 | EMI pe Phone | Depreciation fast. ₹15k phone → ₹8k worth in 1 year |
| 3 | Personal Loan for Wedding | Consumption, no asset |
| 4 | Payday Loan | Predatory rates 36-60% |
| 5 | EMI pe Branded Clothes | Zero residual value |
| 6 | Loan for Vacation | Memory hai, asset nahi |
| 7 | Crypto Investment on Loan | Double risk — loan + volatile asset |
| 8 | Gambling Debt | Worst kind, pure loss |
| 9 | Car EMI (luxury) | Depreciation + interest + maintenance |
| 10 | Personal Loan for Friend | Your risk, their benefit |

**Simple Rule**: \"Agar loan se asset ban raha hai = good debt, agar consumption hai = bad debt.\"`,
        imagePrompt: "Split screen illustration, left side a rocket taking off with 'Education' label, right side a person trapped in a net with 'Shopping' label, amber and white colors",
        color: "#F59E0B",
        emoji: "🧐",
        interactiveType: 'none'
      },
      {
        id: "5-1-2",
        topicId: "5-1",
        topicTitle: "Good Debt vs Bad Debt",
        cardIndex: 2,
        totalCardsInTopic: 6,
        title: "Boundary Cases — Nuances",
        content: `Not every debt is clearly Good or Bad. Context matters!

**Boundary Cases:**

**1. Home loan hamesha good hai?**
- ❌ Agar EMI 60% income hai → stress = bad
- ❌ Agar location mein appreciation nahi hai → average
- ✅ Good tab hai jab affordable ho (EMI ≤ 30% income)

**2. Education loan hamesha good hai?**
- ❌ Agar course useless hai (fake university) → ₹5 lakh loan = bad debt
- ❌ Placement 0% → ROI negative
- ✅ Good agar reputed college hai, placement achha, earning potential badhe

**3. Credit Card — Always Bad?**
- ✅ Agar bill full pay karte ho → free credit period, CIBIL build, rewards
- ❌ Agar minimum pay karte ho → 36-48% interest trap
- Card neutral hai — tumhara use good ya bad banata hai

**4. Car Loan — Good or Bad?**
- ✅ Agar daily commute ke liye zaroori (job ka part) → productive
- ❌ Luxury car for status → depreciation + high EMI = bad

**5. Business Loan — Good or Bad?**
- ✅ Agar business plan solid, ROI positive → good
- ❌ Agar business untested, no research → bad

**Rule**: Har loan pe ROI calculate karo. Loan ki cost < Asset ki value/benefit = Good. Warna bad.`,
        imagePrompt: "Scale balancing good vs bad debt with nuanced examples, amber theme, decision making illustration",
        color: "#F59E0B",
        emoji: "⚖️"
      },
      {
        id: "5-1-3",
        topicId: "5-1",
        topicTitle: "Good Debt vs Bad Debt",
        cardIndex: 3,
        totalCardsInTopic: 6,
        title: "EMI Trap: Asli Keemat Kya Hai? 📱",
        content: `\`₹50,000\` ka laptop EMI pe le rahe ho? \"No-Cost EMI\" sunne mein accha lagta hai, par hidden charges ka kya?

Processing fees + GST + Interest... Slide karke dekho total extra kitna pay karoge:`,
        imagePrompt: "Laptop with a price tag that grows bigger as a slider moves, amber background, 3D finance icons, clean infographic style",
        color: "#F59E0B",
        emoji: "💸",
        interactiveType: 'calculator',
        calcData: {
          calcType: 'emi',
          formula: 'none',
          inputs: [
            { label: 'Product Price', min: 10000, max: 200000, defaultValue: 50000, step: 5000, unit: '₹' },
            { label: 'Interest Rate (%)', min: 0, max: 24, defaultValue: 14, step: 1, unit: '%' },
            { label: 'Tenure (Months)', min: 3, max: 36, defaultValue: 12, step: 3, unit: 'M' }
          ]
        }
      },
      {
        id: "5-1-4",
        topicId: "5-1",
        topicTitle: "Good Debt vs Bad Debt",
        cardIndex: 4,
        totalCardsInTopic: 6,
        title: "Chat: Credit Card Ka Jadoo 🪄",
        content: `Priya aur Bhaiya discuss kar rahe hain pehla Credit Card.

**Priya**: Bhaiya, bank wale free mein credit card de rahe hain! Le lun?

**Bhaiya**: Card free hai, par uski 'Aadat' mehengi pad sakti hai. Bill full pay kar paogi?

**Priya**: Minimum payment kar dungi na, ₹500 hi toh hai!

**Bhaiya**: Wahi toh trap hai! Minimum pay kiya toh baki pe 40% interest lagega. Card tabhi lo jab discipline ho!

**Reality Check**: ₹10,000 ka bill, minimum payment ₹500 (5%):
- Remaining ₹9,500 pe interest @3.5%/month = ₹332
- Agle mahine ka bill = ₹9,500 + ₹332 + new purchases
- Agar sirf minimum pay karte rahe, toh ₹10,000 ka bill **6-7 saal** mein clear hoga aur total paid = **₹18,000-₹20,000**! Almost double!`,
        imagePrompt: "Credit card glowing like a magic wand, sparkles around it, amber and gold theme, modern flat illustration",
        color: "#F59E0B",
        emoji: "💬",
        interactiveType: 'none'
      },
      {
        id: "5-1-5",
        topicId: "5-1",
        topicTitle: "Good Debt vs Bad Debt",
        cardIndex: 5,
        totalCardsInTopic: 6,
        title: "Dilemma: Friend's Request 🤝",
        content: `Tumhare best friend ko naya phone chahiye, par uska CIBIL kharab hai. Woh bol raha hai: *\"Bhai, apne naam pe EMI karwa de, paise main de dunga!\"*

Kya karoge?`,
        imagePrompt: "Two friends talking, one holding a phone, a contract document between them with warning signs, amber and red tones, expressive character illustration",
        color: "#F59E0B",
        emoji: "🤔",
        interactiveType: 'choice_sim',
        choiceData: {
          scenario: "Dost ke liye apne naam pe EMI? Risk ya Dosti?",
          choices: [
            {
              text: "Haan, dosti pehle aati hai!",
              isCorrect: false,
              consequence: "Risk! Agar dost ne ek bhi EMI miss ki, toh CIBIL tumhara kharab hoga. Loan record mein tumhara naam hai, uska nahi. Rishta aur Paisa dono khatre mein!"
            },
            {
              text: "Nahi, saaf mana kar do.",
              isCorrect: true,
              consequence: "Smart! Finance mein boundary zaroori hai. Use samjhao ki credit score kitna imp hai aur use khud build karne mein help karo (like secured card)."
            }
          ]
        }
      },
      {
        id: "5-1-6",
        topicId: "5-1",
        topicTitle: "Good Debt vs Bad Debt",
        cardIndex: 6,
        totalCardsInTopic: 6,
        title: "🚨 MISSION: Check Your Score",
        content: `🚨 **TODAY'S MISSION**

Bhai, apna credit health check karne ka time aa gaya hai.

- [ ] OneScore ya Paisabazaar app download karo.
- [ ] Apna Free CIBIL/Experian score check karo.
- [ ] Dekho koi purana 'Error' toh nahi hai history mein.
- [ ] Agar score nahi hai, toh 'Secured Credit Card' (against FD) ke baare mein socho.

**Secured Credit Card (Against FD)**: Best for students!
- FD ₹10,000-₹20,000 rakho bank mein
- Card limit = 80-90% of FD amount
- Use card normally, pay bill full every month
- CIBIL build hota hai, risk minimal

**Why CIBIL Matters**:
- Loan approval — 750+ = 90% approval chance
- Interest rate — 750+ pe 8% interest, 600 pe 14% interest
- Credit card limit — score zyada = limit zyada
- Rental approval — landlords CIBIL check karte hain
- Job background check — kuch finance companies CIBIL dekhte hain`,
        imagePrompt: "Person looking happy at their smartphone screen showing a high credit score, green checkmarks, amber and gold theme, victory vibe",
        color: "#F59E0B",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "5-2",
    title: "Credit Card — Complete Guide",
    emoji: "💳",
    color: "#DC2626",
    description: "Credit card ek tool hai — aache haathon mein useful, galat haathon mein destructive. Billing cycle, minimum payment trap, golden rules.",
    cards: [
      {
        id: "5-2-1",
        topicId: "5-2",
        topicTitle: "Credit Card Guide",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "Billing Cycle Explained",
        content: `Credit card kaise kaam karta hai:

1. Bank tumhe credit limit deta hai (jaise ₹50,000).
2. Tum khareedate ho — bank pehle pay karta hai.
3. Billing cycle end pe bill aati hai.
4. Due date tak FULL payment karo = zero interest.
5. Minimum payment karo = **36-48% APR interest** lagta hai!

**Billing Cycle Components:**
- **Statement Date**: Har mahine fixed date (jaise 5th). Isse pehle ke transactions is bill mein aate hain.
- **Due Date**: Statement date ke 15-20 din baad (jaise 25th). Yeh last date hai payment ki.
- **Grace Period**: Statement date se due date tak — interest-free period.

**Example:**
- Statement Date: 5th of every month
- Due Date: 25th of every month
- Purchase on Jan 6 → Goes to Feb 5 statement → Pay by Feb 25 (50+ days interest-free!)
- Purchase on Feb 4 → Goes to Feb 5 statement → Pay by Feb 25 (21 days interest-free)

**Smart Use**: Big purchase just after statement date se karo → max interest-free period milta hai!`,
        imagePrompt: "Calendar showing billing cycle with statement and due dates, red and gold theme, financial education infographic",
        color: "#DC2626",
        emoji: "📅"
      },
      {
        id: "5-2-2",
        topicId: "5-2",
        topicTitle: "Credit Card Guide",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "Minimum Payment TRAP — Detailed Calculation",
        content: `**Minimum Payment Trap — Mathematically Kabra:**

\`₹10,000\` ka bill hai. Minimum payment = ₹500 (5%).
Tumne sirf ₹500 pay kiya.
- Remaining ₹9,500 pe interest @3.5% per month = ₹332
- Toh agle mahine ka bill = ₹9,500 + ₹332 + new purchases
- Agar sirf minimum pay karte rahe, toh ₹10,000 ka bill approximately **6-7 saal** mein clear hoga!
- Total paid = **₹18,000-₹20,000**! Almost double!

**3 Real Credit Card Scenarios:**

| Scenario | Calculation | Total |
| :--- | :--- | :--- |
| **₹10k minimum only** | Month 1: ₹500 paid, ₹9,500+₹332 interest. Month 2: ₹492 min, ₹9,340+₹327. 72 months total paid | ₹18,500 (Farq = ₹8,500 extra!) |
| **₹5k 3-month revolving** | Min ₹250, balance ₹4,750+₹166 = ₹4,916. Month 2: Min ₹246, bal ₹4,670+₹163. Month 3: Min ₹242, bal ₹4,591+₹161. Total paid in 3 months | ₹738 + still owe ₹4,752 |
| **₹20k min vs full** | Full payment = ₹20,000. Minimum for 12 months | ₹24,000+ total (Farq = ₹4,000+ = 20% extra) |

**Cash Withdrawal Warning**: 
₹5,000 nikala credit card se. Instant charges: 2.5% cash advance fee = ₹125. Interest from day 1 @3.5% = ₹175/month. 1 month mein total = ₹5,300. **No grace period!** NEVER do this.

**International Transaction**: ₹10,000 purchase. Currency conversion markup 3.5% = ₹350. GST 18% on markup = ₹63. Total extra = ₹413. Plus forex fluctuation risk.`,
        imagePrompt: "Trap visualization - credit card bill growing with interest, red theme, warning financial illustration",
        color: "#DC2626",
        emoji: "⚠️"
      },
      {
        id: "5-2-3",
        topicId: "5-2",
        topicTitle: "Credit Card Guide",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "7 Golden Rules + Student Recommendation",
        content: `**7 Golden Rules for Safe Credit Card Use:**

1. **Bill ALWAYS full pay karo** — never minimum.
2. **30% se zyada credit limit use mat karo** (credit score ke liye). ₹50,000 limit = ₹15,000 max use.
3. **Due date yaad rakho** — late payment fee + interest + credit score drop.
4. **Auto-debit setup karo** full payment ke liye.
5. **Annual fee wale card mat lo** — free cards available hain (SBI SimplyCLICK Student, ICICI Platinum).
6. **Cash withdrawal mat karo** credit card se — instant interest lagta hai, no grace period.
7. **Reward points ke liye overspend mat karo** — ₹100 cashback ke liye ₹5,000 spend karna = loss.

**Reward Points Truth**: Actual value ₹0.25-₹0.50 per ₹100 spent. ₹10,000 spend = ₹25-₹50 worth rewards. Lekin overspend mat karo rewards ke liye. ₹100 cashback ke liye ₹5,000 spend karna = ₹4,900 loss.

**Student Ko Credit Card Chahiye Ya Nahi — Honest Answer:**

✅ **Chahiye agar:**
- Discipline hai full payment ki
- CIBIL build karna hai
- Emergency backup chahiye

❌ **Nahi chahiye agar:**
- Impulse spender ho
- Income unstable hai
- \"Free money\" soch ke use karoge

**Recommendation**: Student secured credit card against FD lo (₹10,000-₹20,000 FD). Limit kam, risk kam, CIBIL build hota hai.`,
        imagePrompt: "Seven golden rules of credit card with icons, red and gold theme, financial discipline infographic",
        color: "#DC2626",
        emoji: "🏆"
      }
    ]
  },
  {
    id: "5-3",
    title: "EMI — The Full Picture",
    emoji: "📱",
    color: "#EF4444",
    description: "EMI = Equated Monthly Installment. Simple lagta hai, lekin hidden costs hain. No-cost EMI reality check.",
    cards: [
      {
        id: "5-3-1",
        topicId: "5-3",
        topicTitle: "EMI Full Picture",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "No-Cost EMI Reality Check",
        content: `**No-Cost EMI Reality:**

\"No-cost EMI\" mein bhi hidden costs hote hain. Sometimes product price EMI pe zyada hoti hai vs upfront.

**Example**: ₹15,000 phone on \"no-cost EMI\" 12 months:
- Processing fee: ₹300
- GST: ₹54
- **Total = ₹15,354** — Free nahi hai!

**3 Real Product EMI Breakdowns:**

| Product | Price | EMI Plan | Monthly EMI | Total Paid | Extra Cost | Extra % |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Phone** | ₹15,000 | 12 months @ 15% | ₹1,354 | ₹16,248 | ₹1,248 | 8.3% |
| **Laptop** | ₹50,000 | 18 months @ 14% | ₹3,174 | ₹57,132 | ₹7,132 | 14.3% |
| **Bike** | ₹80,000 | 36 months @ 14% | ₹2,657 | ₹95,652 | ₹15,652 | 19.6% |

**EMI Safe Limit**: Total EMI ≤ 30% of monthly income.
₹15,000 income hai toh max EMI = ₹4,500. Isse zyada EMI = dangerous territory.

**Multiple EMIs mat lo** — ek khatam karo phir dusra.

**EMI Calculator Formula:**

\`\`\`
EMI = [P × R × (1+R)^N] / [(1+R)^N - 1]
\`\`\`

Where:
- P = Principal
- R = monthly interest rate
- N = number of months

**Example**: ₹50,000 laptop, 18 months, 14% yearly.
- R = 14%/12 = 1.166% = 0.01166
- EMI = [50,000 × 0.01166 × (1.01166)^18] / [(1.01166)^18 - 1]
- EMI = **₹3,174/month**

**Down Payment & Foreclosure:**
- **Down Payment**: EMI pe bhi 10-20% down payment dena padta hai. Kam down payment = zyada EMI.
- **Foreclosure Charges**: EMI pehle band karna? 2-5% penalty lagti hai. Read fine print.`,
        imagePrompt: "EMI breakdown visualization with calculator, red and gold theme, financial math illustration",
        color: "#EF4444",
        emoji: "🧮"
      },
      {
        id: "5-3-2",
        topicId: "5-3",
        topicTitle: "EMI Full Picture",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "Student EMIs — Kitna Safe Hai?",
        content: `**Student EMIs — Kitna Safe Hai?**

**Recommendation**: Student life mein EMI avoid karo. Agar zaroori hai (laptop for coding), toh:
1. **Maximum 6-month EMI** lo
2. **Total EMI 20% income se kam** rakho
3. **No-cost EMI bhi actual cost** check karo

**EMI Danger Signs (15 Warning Signs):**

1. Salary se zyada EMI hai
2. Credit card bill full pay nahi kar paate
3. New loan purana loan bharni ke liye le rahe ho
4. Savings zero ho gayi
5. Borrowing from friends/family regularly
6. Minimum payment kar rahe ho regularly
7. More than 2 credit cards with outstanding
8. Late payment fees har mahine
9. EMI bounce ho gaya
10. Taking cash advance on credit card
11. Hiding purchases from family
12. Stress/anxiety about money
13. Can't sleep thinking about debt
14. Selling assets to pay EMIs
15. Considering payday loan

**Agar 5+ signs hain**, tum debt trap mein ho! Help lo — Module 5 ke last topic mein strategies hain.

**Student Example: ₹20k phone ka EMI impact**
- Income: ₹15,000/month
- EMI: ₹1,800/month for 12 months
- Total cost: ₹21,600 (vs ₹20,000 upfront)
- Problem: EMI = 12% of income, manageable
- Trap: Next month bike ka EMI bhi le liya → ₹3,500 = 23% of income. Phir credit card ka ₹5,000 outstanding. Slowly debt trap!`,
        imagePrompt: "Warning signs of debt trap with red caution icons, red theme, alert financial illustration",
        color: "#EF4444",
        emoji: "⚠️"
      },
      {
        id: "5-3-3",
        topicId: "5-3",
        topicTitle: "EMI Full Picture",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "🚨 MISSION: EMI Audit",
        content: `🚨 **TODAY'S MISSION**

Bhai, agar tumhare paas koi EMI hai, toh audit karo:

- [ ] Total monthly EMI amount calculate karo.
- [ ] Total monthly income calculate karo.
- [ ] EMI / Income ratio calculate karo — agar >30% toh DANGER!
- [ ] Har EMI ka total cost (principal + interest) calculate karo.
- [ ] Koi EMI pre-mature close kar sakte ho? — Foreclosure penalty check karo.

**Action Plan**:
- Agar EMI > 30% income → Side income dhundo, extra repayment karo
- Agar multiple EMIs → Highest interest wala pehle close karo (Avalanche method)
- Agar new EMI soch rahe ho → 30% rule check karo
- \"No-cost EMI\" ke hidden costs verify karo

**Pro Tip**: EMI lete waqt 6-month ya 12-month tenure choose karo. 24+ months mein total interest bahut zyada lagta hai.

**Rule**: Cash payment best hai. EMI sirf asset purchase ke liye (laptop for income). Consumption (clothes, phone, vacation) ke liye EMI = trap.`,
        imagePrompt: "Person doing EMI audit on calculator, red and gold theme, financial planning atmosphere",
        color: "#EF4444",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "5-4",
    title: "Student Loans / Education Loans — Complete Guide",
    emoji: "🎓",
    color: "#06B6D4",
    description: "Education loan basics — kya hai, kaise kaam karta hai. Interest rates, moratorium, CSIS subsidy, girl concession.",
    cards: [
      {
        id: "5-4-1",
        topicId: "5-4",
        topicTitle: "Education Loan",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "Education Loan Basics + Interest Rates 2025-26",
        content: `**Education Loan Basics:**

Bank tumhari education ke liye paisa deta hai. Course ke dauran (moratorium period) EMI nahi bharni. Course complete + 6-12 months baad EMI shuru. Interest government subsidize karti hai agar income ₹4.5 lakh se kam hai (CSIS scheme).

**Interest Rates 2025-26:**

| Lender | Rate | Collateral | Special Features |
| :--- | :--- | :--- | :--- |
| **SBI Student Loan** (up to ₹7.5L) | 8.90-9.90% | Without collateral | CSIS eligible |
| **SBI Scholar Loan** (Premier) | 8.15%+ | Varies | IIT/IIM/NIT ke liye |
| **Bank of Baroda** | 7.10-12.50% | Varies | Flexible repayment |
| **HDFC Credila** | 9.95-11.25% | Varies | Fast processing |
| **Axis Bank** | 8.50-11.00% | Varies | Doorstep service |

**Moratorium Period**: Course duration + 6-12 months. Is dauran EMI nahi, lekin interest accrue hota hai (except CSIS).

**Example**: 4-year B.Tech + 1 year = 5 years moratorium.

**Interest Subsidy — CSIS (Central Sector Interest Subsidy)**:
- Parental income ≤ ₹4.5 lakh/year = 100% interest subsidy during moratorium
- Matlab course ke dauran koi interest nahi!
- Form fill karna padta hai har saal

**Girl Student Concession**: 0.50% interest rate concession. 8.90% se 8.40% ho jaata hai. Gender equality initiative.

**Average Education Loan**:
- Domestic: ₹7-9 lakh
- Abroad: ₹20-40 lakh
- EMI after graduation example: ₹8 lakh loan at 9.5% for 10 years = ₹10,400/month EMI`,
        imagePrompt: "Student with graduation cap and education loan document, cyan theme, education funding illustration",
        color: "#06B6D4",
        emoji: "🎓"
      },
      {
        id: "5-4-2",
        topicId: "5-4",
        topicTitle: "Education Loan",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "Education Loan — Good or Bad? ROI Analysis",
        content: `**Education Loan — Good or Bad?**

✅ **Good agar:**
1. Reputed college hai (IIT/NIT/IIM/Tier-1)
2. Placement record achha hai
3. Course earning potential badhata hai
4. ROI (Return on Investment) positive

❌ **Bad agar:**
1. Fake university
2. No placement record
3. Course outdated
4. ₹20 lakh loan for Tier-3 college = bad decision

**ROI Check Example:**

| Scenario | Loan | Starting Salary | EMI | ROI |
| :--- | :--- | :--- | :--- | :--- |
| IIT B.Tech (₹8L loan) | ₹8 lakh | ₹12 lakh/year | ₹10k/month | ✅ Excellent |
| Tier-2 MBA (₹15L loan) | ₹15 lakh | ₹8 lakh/year | ₹18k/month | ✅ Good |
| Tier-3 B.Tech (₹10L loan) | ₹10 lakh | ₹3 lakh/year | ₹12k/month | ❌ Bad — 40% of salary EMI |
| Foreign MS (₹30L loan) | ₹30 lakh | ₹15 lakh/year (India) | ₹35k/month | ⚠️ Risky — currency risk |

**ROI Calculation Formula:**
- (Starting Salary × Years to Repay) vs (Loan + Interest)
- Agar salary > 2x EMI → Safe
- Agar salary < 1.5x EMI → Risky
- Agar salary < EMI → Trap

**Pre-Education Loan Tips:**
1. **Scholarship pehle try karo** — free money!
2. **College compare karo** — ROI basis
3. **Loan amount minimum rakho** — sirf tuition + essential
4. **Moratorium use karo** — grace period mein interest minimization
5. **Part-time job during college** — loan pre-payment`,
        imagePrompt: "ROI analysis chart for education loans, cyan and gold theme, comparison infographic",
        color: "#06B6D4",
        emoji: "📊"
      },
      {
        id: "5-4-3",
        topicId: "5-4",
        topicTitle: "Education Loan",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "🚨 MISSION: Education Loan Decision",
        content: `🚨 **TODAY'S MISSION**

Agar tum education loan consider kar rahe ho, yeh checklist follow karo:

- [ ] College ka placement record check karo (last 3 years)
- [ ] Average starting salary pata karo
- [ ] Loan amount vs salary ratio calculate karo
- [ ] CSIS subsidy eligible ho? (parental income ≤ ₹4.5L)
- [ ] Girl student ho? 0.50% concession ke liye apply karo
- [ ] Interest rate from multiple banks compare karo
- [ ] Moratorium period understand karo
- [ ] Pre-payment penalty check karo

**Section 80E Tax Benefit**:
- Education loan ke interest pe **full deduction** — koi limit nahi!
- 8 saal tak claim kar sakte hain
- Jab EMI start ho, interest portion ka deduction lo
- Example: ₹8 lakh loan at 9%, first year interest = ₹72,000. 80E se full ₹72,000 deductible. Taxable income directly ₹72,000 kam!

**Action**: Education loan decision life-changing hota hai. ROI calculate karo, future plan banao, phir sign karo.

**Pro Tip**: Part-time job/internship during college se loan ka principal reduce karo. ₹5,000/month pre-payment = 2-3 years early loan closure!`,
        imagePrompt: "Person signing education loan document with calculator and college brochure, cyan theme, decision making illustration",
        color: "#06B6D4",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "5-5",
    title: "Credit Score / CIBIL Score — Complete Guide",
    emoji: "📊",
    color: "#8B5CF6",
    description: "Credit score 300-900 number hai jo batata hai kitne reliable borrower ho. 750+ target karo.",
    cards: [
      {
        id: "5-5-1",
        topicId: "5-5",
        topicTitle: "CIBIL Score",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "Myth-Buster: CIBIL Score 📊",
        content: `Log sochte hain ki loan nahi liya toh CIBIL score 'Best' hoga.

**Myth**: Maine kabhi loan nahi liya, mera CIBIL score 900 hoga!
**Sach**: Agar kabhi loan ya credit card use nahi kiya, toh CIBIL ko pata hi nahi ki tum kaise borrower ho. Score 'NH' (No History) dikhayega. Score build karne ke liye chota udhaar lena aur time pe lautana zaroori hai!`,
        imagePrompt: "Speedometer showing credit score from 300 to 900, needle in the green zone, amber and green accents, professional financial graphic",
        color: "#8B5CF6",
        emoji: "🕵️‍♂️",
        interactiveType: 'myth_buster',
        quizData: {
          question: "MYTH: Maine kabhi loan nahi liya, mera CIBIL score 900 hoga!",
          options: ["Sahi hai, no udhaar is best!", "Galat, score hi nahi hoga!"],
          correctAnswerIndex: 1,
          explanation: "Agar kabhi loan ya credit card use nahi kiya, toh CIBIL ko pata hi nahi ki tum kaise borrower ho. Score 'NH' (No History) dikhayega. Score build karne ke liye chota udhaar lena aur time pe lautana zaroori hai!"
        }
      },
      {
        id: "5-5-2",
        topicId: "5-5",
        topicTitle: "CIBIL Score",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "CIBIL Score Ranges + Build Karein (7 Steps)",
        content: `**CIBIL Score Ranges (300-900):**

| Range | Rating | Meaning | Loan Approval |
| :--- | :--- | :--- | :--- |
| **300-550** | Very Poor | Defaults, limited history | Very difficult |
| **551-620** | Poor | High risk, missed payments | Difficult, high interest |
| **621-649** | Fair | Moderate risk, some issues | Possible, higher rates |
| **650-749** | Good | Responsible borrower | Easy, standard rates |
| **750-900** | Excellent | Best borrower | Easy, best rates, high limit |

**Kyun Matter Karta Hai:**
- Loan approval — 750+ = 90% approval chance
- Interest rate — 750+ pe 8% interest, 600 pe 14% interest
- Credit card limit — score zyada = limit zyada
- Rental approval — landlords CIBIL check karte hain
- Job background check — kuch companies (especially finance) CIBIL dekhte hain

**Kaise Build Karein as Student — 7 Steps:**

1. **Student credit card against FD** — ₹10,000-₹20,000 FD. Secure card, low risk, CIBIL build hota hai.
2. **Authorized user on parent's card** — Parent ka card pe authorized user bano. Unki history tumhari history banegi.
3. **Pay bills on time EVERY TIME** — Phone, WiFi, electricity — sab on time. Late payment = CIBIL hit.
4. **Credit utilization below 30%** — ₹50,000 limit = ₹15,000 max use. 10% utilization = excellent.
5. **Start small** — ₹5,000 limit se shuru karo. Bade limit ka temptation nahi hoga.
6. **Avoid multiple applications** — Ek saath 5 credit cards apply karo = \"credit hungry\" tag. 6 months gap rakho.
7. **Check score annually** — Free on Paisabazaar, BankBazaar, CIBIL website (1 free report/year).

**7 Tips to Improve Score:**
1. Always pay full credit card bill
2. Old credit accounts close mat karo — history length matters
3. Mix of credit types (card + loan) achha hota hai
4. Settle disputes immediately — even ₹100 ka dispute CIBIL pe rehta hai
5. Don't be guarantor for others — unka default = tumhara CIBIL kharab
6. Limit credit inquiries — har inquiry 5-10 point drop
7. Consistent income proof — ITR, salary slip = stable borrower image`,
        imagePrompt: "Credit score scale from 300 to 900 with color-coded ranges, purple theme, financial education infographic",
        color: "#8B5CF6",
        emoji: "📊"
      },
      {
        id: "5-5-3",
        topicId: "5-5",
        topicTitle: "CIBIL Score",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "5 Common CIBIL Myths Busted + Mission",
        content: `**5 Common CIBIL Myths Busted:**

⚠️ **Myth 1**: \"CIBIL check karna score kharab karta hai\"
→ **Sach**: Soft inquiry (self check) se koi effect nahi. Hard inquiry (bank check) se thoda effect.

⚠️ **Myth 2**: \"No loan = good CIBIL\"
→ **Sach**: Nahi! No credit history = no CIBIL score. \"No score\" bhi problem hai.

⚠️ **Myth 3**: \"Score ek baar badha toh fixed hai\"
→ **Sach**: Nahi! Har month update hota hai. Default = instant drop.

⚠️ **Myth 4**: \"CIBIL sirf loan ke liye hai\"
→ **Sach**: Nahi! Rental, job, insurance premium sab pe asar padta hai.

⚠️ **Myth 5**: \"CIBIL sudharne mein 5 saal lagte hain\"
→ **Sach**: Nahi! 6-12 months mein significant improvement possible hai.

**🚨 MISSION: CIBIL Score Check**

- [ ] OneScore ya Paisabazaar app download karo.
- [ ] Apna Free CIBIL/Experian score check karo.
- [ ] Agar score nahi hai → Secured Credit Card against FD apply karo.
- [ ] Agar score 650-749 → Improve karo: full payment + low utilization.
- [ ] Agar score 750+ → Maintain karo, don't apply for unnecessary credit.
- [ ] Annual check karo — har saal ek free report CIBIL se.

**Rule**: 750+ score = financial discipline ka certificate. Build karo, maintain karo!`,
        imagePrompt: "Five myths busted about CIBIL score with cross marks, purple theme, financial clarity illustration",
        color: "#8B5CF6",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "5-6",
    title: "Debt Trap Journey + 6 Proven Strategies to Get Out",
    emoji: "🚪",
    color: "#EF4444",
    description: "Debt trap kaise banta hai — month-by-month journey. 6 proven strategies to get out: Avalanche, Snowball, Balance Transfer, Negotiation, Consolidation, Side Income.",
    cards: [
      {
        id: "5-6-1",
        topicId: "5-6",
        topicTitle: "Debt Trap + Strategies",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "Debt Trap Ka Month-by-Month Journey",
        content: `**Debt Trap Kaise Banta Hai — Ek Student Ka Journey:**

| Month | Action | Credit Card 1 | Credit Card 2 | Personal Loan | Total Debt |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | Credit card liya | ₹0 | — | — | ₹0 (₹5k limit) |
| 2 | Phone khareeda | ₹4,500 | — | — | ₹4,500 |
| 3 | Minimum pay ₹225, interest ₹150 | ₹4,425 | — | — | ₹4,425 |
| 4 | Naya card apply | ₹4,800 | ₹0 | — | ₹4,800 |
| 5 | Card 2 pe shopping | ₹4,800 | ₹3,000 | — | ₹7,800 |
| 6 | Personal loan at 18% | ₹4,800 | ₹3,000 | ₹10,000 | ₹17,800 |
| 7 | EMI + min payments | ₹4,500 | ₹2,800 | ₹9,100 | ₹16,400 |
| 8 | Card 1 pe aur kharch | ₹6,500 | ₹2,800 | ₹8,200 | ₹17,500 |
| 9 | Friend se ₹5k liya | ₹6,500 | ₹2,800 | ₹8,200 | ₹17,500 + friend |
| 10 | Balance transfer card | ₹6,500 | ₹2,800 | ₹8,200 | ₹17,500 |
| 11 | All cards maxed | ₹6,500 | ₹5,000 | ₹8,200 | ₹19,700 |
| 12 | EMIs bouncing | — | — | — | **₹50,000+ debt mein phasa!** |

**₹5,000 se shuru, ₹50,000+ debt mein phasa!** Yeh trap silently banta hai.

**15 Warning Signs Ki Tum Debt Trap Mein Ja Rahe Ho:**

1. Salary se zyada EMI hai
2. Credit card bill full pay nahi kar paate
3. New loan purana loan bharni ke liye le rahe ho
4. Savings zero ho gayi
5. Borrowing from friends/family regularly
6. Minimum payment kar rahe ho regularly
7. More than 2 credit cards with outstanding
8. Late payment fees har mahine
9. EMI bounce ho gaya
10. Taking cash advance on credit card
11. Hiding purchases from family
12. Stress/anxiety about money
13. Can't sleep thinking about debt
14. Selling assets to pay EMIs
15. Considering payday loan

**Agar 5+ signs hain, urgent help lo!**`,
        imagePrompt: "Downward spiral showing debt trap month by month, red theme, warning financial illustration",
        color: "#EF4444",
        emoji: "⚠️"
      },
      {
        id: "5-6-2",
        topicId: "5-6",
        topicTitle: "Debt Trap + Strategies",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "6 Proven Strategies to Get Out of Debt",
        content: `**6 Debt Se Nikalne Ki Strategies:**

**1. Avalanche Method** — Mathematically Best
Highest interest rate wale debt ko pehle bharo. Total interest sabse kam lagti hai.
- Example: Credit card 36% > Personal loan 18% > Education loan 9%
- Strategy: Minimum sab mein pay karo, extra ₹2,000 credit card pe lagao
- Credit card clear hone ke baad personal loan pe ₹2,000 extra
- ₹50,000 clear in 24 months vs 48 months (minimum payment method)

**2. Snowball Method** — Psychologically Best
Smallest amount wale debt ko pehle bharo. Quick wins motivation dete hain.
- Example: ₹5,000 CC1 → ₹8,000 CC2 → ₹20,000 PL → ₹50,000 Edu Loan
- Strategy: ₹5,000 wala pehle clear karo (1 month). Celebration!
- Phir ₹8,000 wala (2 months). Momentum build hota hai.

**3. Balance Transfer**
Lower interest card pe shift karo. 0% balance transfer cards available hain (6 months).
- ₹20,000 36% se 0% pe shift = ₹3,600 interest save in 6 months

**4. Negotiation**
Bank se baat karo, interest rate reduce karne ko kaho. Financial hardship explain karo — restructuring possible hai.
- 36% se 24% ho jaaye toh bhi bada relief

**5. Debt Consolidation**
Saare debts ek mein combine karo at lower interest.
- Personal loan at 12% leke credit card at 36% clear karo
- Example: ₹30,000 total debt at average 30% → consolidate at 12% = ₹15,000 interest save

**6. Side Income — Aggressive Repayment**
Extra paisa kamake directly debt bharna. Freelancing, tutoring, gig work.
- ₹10,000 extra income = 6 months early debt free

**Avalanche vs Snowball Comparison:**

| Method | Total Interest | Time to Debt Free | Psychological |
| :--- | :--- | :--- | :--- |
| **Avalanche** | Lowest (math best) | Fastest | Slower motivation |
| **Snowball** | Slightly more | Slightly longer | Quick wins = motivation |
| **Best for** | Disciplined, math-focused | Emotional, needs motivation |

**Recommendation**: Avalanche agar discipline ho, Snowball agar motivation zaroori.`,
        imagePrompt: "Six debt strategies illustrated with icons, red and green theme, escape from debt illustration",
        color: "#EF4444",
        emoji: "🚪"
      },
      {
        id: "5-6-3",
        topicId: "5-6",
        topicTitle: "Debt Trap + Strategies",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "₹50k Repayment Schedule + Module 5 Summary",
        content: `**₹50,000 Debt Ka 12-Month Repayment Schedule (Avalanche Method):**

| Month | Income | Expenses | Min CC1 | Extra to CC1 | PL | Total Debt |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| 0 | — | — | — | — | ₹20,000 | ₹30,000 | ₹50,000 |
| 1 | ₹15k | ₹10k | ₹1,500 | ₹3,500 | ₹16,500 | ₹28,950 | ₹45,450 |
| 6 | ₹15k | ₹10k | ₹1,200 | ₹3,800 | ₹0 | ₹22,700 | ₹22,700 |
| 12 | ₹15k | ₹10k | ₹1,200 | ₹3,800 | ₹0 | ₹10,250 | ₹10,250 |

**12 months mein ₹50,000 se ₹10,250 remaining.** Bina extra payment ke = ₹45,000+ remaining. Extra payment = debt free fast.

---

**KEY TAKEAWAYS (Module 5):**
- ✅ Good debt asset banata hai, bad debt consumption — farq samjho. Education/home = good, credit card shopping = bad
- ✅ Credit card bill ALWAYS full pay karo — minimum payment trap hai. 36-48% APR = wealth destroyer
- ✅ EMI total income ka 30% se zyada nahi hona chahiye — usse zyada = dangerous territory
- ✅ Credit score 750+ target karo — better loan terms, rental approval, job prospects. Start with secured card
- ✅ Debt mein phas gaye toh avalanche ya snowball method use karo — ruko mat, action lo. Side income se accelerate karo

**COMMON MISCONCEPTIONS (Module 5):**

⚠️ \"Sab debt bura hai\" → Nahi! Education loan, home loan good debt hain. Asset building + income generation = good
⚠️ \"Credit card free money hai\" → Galat! Borrowed money hai jisse 36-48% interest lagta hai
⚠️ \"No-cost EMI really free hai\" → Galat! Processing fee + GST hidden costs hain
⚠️ \"Loan leke invest karna smart hai\" → Usually nahi! 12% loan pe 12% return = break even, risk free nahi
⚠️ \"CIBIL score check karna score kharab karta hai\" → Soft inquiry se koi effect nahi. Self-check karo freely

**Aage Ka Safar**: Ab Module 6 mein bank ke andar ki duniya samjhte hain — accounts, FD, RD, digital payments, hidden charges, aur safety tips. Banking basics se aage badhte hain. Debt se bachne ke liye banking knowledge bhi zaroori hai! 🏦`,
        imagePrompt: "Module 5 complete badge with debt-free certificate, red and gold theme, achievement illustration",
        color: "#EF4444",
        emoji: "🏆"
      }
    ]
  }
];

export function getAllCards() {
  return module5Topics.flatMap(topic => topic.cards);
}

export function getTotalCardCount() {
  return getAllCards().length;
}

export function getTopicById(id) {
  return module5Topics.find(t => t.id === id);
}

export function getCardsByTopic(topicId) {
  const topic = getTopicById(topicId);
  return topic ? topic.cards : [];
}
