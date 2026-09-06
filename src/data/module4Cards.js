export const module4Topics = [
  {
    id: "4-1",
    title: "Emergency Fund — Apka Financial Safety Net 🛡️",
    emoji: "🛡️",
    color: "#EF4444",
    description: "Life unpredictable hai, par apka bank balance nahi hona chahiye. Samjho emergency fund ka power!",
    cards: [
      {
        id: "4-1-1",
        topicId: "4-1",
        topicTitle: "Emergency Fund",
        cardIndex: 1,
        totalCardsInTopic: 6,
        title: "Dilemma: Emergency Hai Ya Nahi? 🚨",
        content: `Har kharcha 'Emergency' nahi hota, bhai!

Socho tumhare paas \`₹20,000\` ka emergency fund hai. Achanak yeh situation aati hai... Tum kya karoge?

**Emergency Fund Kyun Zaroori Hai — 5 Real Situations:**

1. **Medical emergency** — Hospital bill ₹50,000, emergency fund se pay kiya, no loan. Bina fund: personal loan at 18% = ₹72,000 total pay.
2. **Job loss** — 2 mahine tak comfortable raha, naya job dhundhne ka time mila. Bina fund: credit card pe survival = debt trap.
3. **Laptop death** — Coding student ka laptop kharab, exams close, emergency fund se naya khareeda. Bina fund: exam miss, semester back.
4. **Family crisis** — Ghar jaana pada urgently, travel + expenses cover kiye. Bina fund: parents se paisa maangna = guilt + stress.
5. **Sudden relocation** — PG se nikalna pada, deposit + rent naya jagah. Bina fund: broker ke paas jaana = high interest loan.`,
        imagePrompt: "Person looking confused at a broken laptop and a 'Flash Sale' ad on phone, red emergency theme, modern flat illustration, intense atmosphere",
        color: "#EF4444",
        emoji: "🤔",
        interactiveType: 'choice_sim',
        choiceData: {
          scenario: "iPhone 16 pe 50% discount mil raha hai, sirf aaj ke liye! Kya emergency fund use karoge?",
          choices: [
            {
              text: "Haan! Aisa mauka baar baar nahi aata.",
              isCorrect: false,
              consequence: "Khatra! Sale emergency nahi hoti. Agar kal asli medical emergency aa gayi toh kya karoge? Fund zero, stress hero!"
            },
            {
              text: "Nahi, fund ko hath nahi lagaunga.",
              isCorrect: true,
              consequence: "Sahi pakde ho! Emergency matlab: Hospital bill, Job loss, ya Urgent repair. Sale ke liye alag se 'Want' budget banao."
            }
          ]
        }
      },
      {
        id: "4-1-2",
        topicId: "4-1",
        topicTitle: "Emergency Fund",
        cardIndex: 2,
        totalCardsInTopic: 6,
        title: "3/6/9 Month Rule: Kitna Chahiye? 💰",
        content: `Sawaal hai: Kitna paisa kafi hai?

- **3 Months**: Safe (for students).
- **6 Months**: Strong (for freshers).
- **9 Months**: Super Safe (for freelancers).

**3/6/9 Months Rule — Detailed Table:**

| Monthly Expense | 3 Months Fund | 6 Months Fund | 9 Months Fund |
| :--- | :--- | :--- | :--- |
| ₹5,000 | ₹15,000 | ₹30,000 | ₹45,000 |
| ₹10,000 | ₹30,000 | ₹60,000 | ₹90,000 |
| ₹15,000 | ₹45,000 | ₹90,000 | ₹1,35,000 |
| ₹20,000 | ₹60,000 | ₹1,20,000 | ₹1,80,000 |
| ₹35,000 | ₹1,05,000 | ₹2,10,000 | ₹3,15,000 |

**Build Timeline:**
- ₹500/month se start: ₹15,000 target = 30 months (2.5 years)
- ₹1,000/month se: 15 months
- ₹2,000/month se: 7.5 months

Apne monthly kharche dalo aur dekho apka **Shield Amount** kitna hona chahiye:`,
        imagePrompt: "Shield made of gold coins protecting a small house, red and silver accents, heroic financial illustration, clean layout",
        color: "#EF4444",
        emoji: "🛡️",
        interactiveType: 'calculator',
        calcData: {
          calcType: 'budget',
          formula: 'none',
          inputs: [
            { label: 'Monthly Expenses', min: 2000, max: 50000, defaultValue: 10000, step: 500, unit: '₹' }
          ]
        }
      },
      {
        id: "4-1-3",
        topicId: "4-1",
        topicTitle: "Emergency Fund",
        cardIndex: 3,
        totalCardsInTopic: 6,
        title: "Chat: Fund Kahan Rakhein? 🏦",
        content: `Priya aur Bhaiya discuss kar rahe hain fund ki 'Location'.

**Priya**: Bhaiya, emergency fund ko Equity Mutual Fund mein daal dun? 15% return milega!

**Bhaiya**: Bilkul nahi! Agar market crash ho gaya aur tabhi paise chahiye hue toh?

**Priya**: Oh, toh kahan rakhun?

**Bhaiya**: Aisi jagah jahan se 2 minute mein nikle. Savings Account ya Liquid Fund. Safety > Returns.

**Fund Location Options:**

| Option | Return | Liquidity | Risk |
| :--- | :--- | :--- | :--- |
| Savings Account | 3-4% | Instant (UPI/ATM) | Zero |
| FD (premature) | 6.5-7% | 1-2 days | Zero |
| Liquid Mutual Fund | 5-6.5% | 1-day redemption | Very Low |

**Rule**: Safety > Returns. Emergency fund grow karne ke liye nahi, use karne ke liye hai.`,
        imagePrompt: "Mobile banking app icon next to a physical safe, digital and physical security theme, red and white colors, modern flat style",
        color: "#EF4444",
        emoji: "💬",
        interactiveType: 'none'
      },
      {
        id: "4-1-4",
        topicId: "4-1",
        topicTitle: "Emergency Fund",
        cardIndex: 4,
        totalCardsInTopic: 6,
        title: "Myth-Buster: Emergency Fund 🕵️‍♂️",
        content: `Kuch log sochte hain ki insurance hai toh fund ki kya zaroorat?

**Myth**: Mere paas Health Insurance hai, toh mujhe emergency fund ki zaroorat nahi.
**Sach**: Insurance hospital bill bharta hai, par ambulance, chote kharche, aur hospital ke bahar ke medicines ke liye CASH chahiye hota hai. Dono zaroori hain!`,
        imagePrompt: "Person juggling multiple balls labeled Insurance, Cash, and Credit, focus and balance theme, red background, modern illustration",
        color: "#EF4444",
        emoji: "🕵️‍♂️",
        interactiveType: 'myth_buster',
        quizData: {
          question: "MYTH: Mere paas Health Insurance hai, toh mujhe emergency fund ki zaroorat nahi.",
          options: ["Sahi hai, insurance sab cover karega", "Galat, cash phir bhi chahiye"],
          correctAnswerIndex: 1,
          explanation: "Insurance hospital bill bharta hai, par ambulance, chote kharche, aur hospital ke bahar ke medicines ke liye CASH chahiye hota hai. Dono zaroori hain!"
        }
      },
      {
        id: "4-1-5",
        topicId: "4-1",
        topicTitle: "Emergency Fund",
        cardIndex: 5,
        totalCardsInTopic: 6,
        title: "Emergency Fund vs Savings Account",
        content: `Dono mein farq samjho, varna hamesha confuse rahoge:

| Feature | Savings Account | Emergency Fund |
| :--- | :--- | :--- |
| **Purpose** | Daily kharche / Goals | SIRF unexpected crisis 🛡️ |
| **Accessibility** | UPI / Debit Card 💳 | Alag account (No UPI) 🔒 |
| **Withdrawal** | Kabhi bhi (Pizza 🍕) | Sirf 'Asli' Problem mein |
| **Source** | Monthly income | Auto-debit savings |
| **Mental Frame** | \"Mera paisa\" | \"Invisible shield\" |

**Rule**: Emergency fund ko 'Invisible' rakho taaki use karne ka lalach na ho. Alag bank account, no UPI link, no debit card.

**Allocation Strategy for ₹60,000 Fund:**
- ₹15,000 in savings account (instant medical, travel)
- ₹25,000 in FD (3-month ladder — ₹8,000 × 3 FDs maturing every month)
- ₹20,000 in liquid mutual fund (5-6% return, 1-day redemption)`,
        imagePrompt: "Two piggy banks side by side, one with a pizza icon and one with a first aid kit icon, clear comparison, red and blue colors",
        color: "#EF4444",
        emoji: "📊"
      },
      {
        id: "4-1-6",
        topicId: "4-1",
        topicTitle: "Emergency Fund",
        cardIndex: 6,
        totalCardsInTopic: 6,
        title: "🚨 MISSION: The Separate Bucket",
        content: `🚨 **TODAY'S MISSION**

Bhai, emergency fund ko apne main account se alag karo.

- [ ] Ek naya zero-balance account kholo (Kotak 811, Jupiter, etc).
- [ ] Is account ka UPI link mat karo (ya delete kar do).
- [ ] Isme \`₹500\` transfer karke shuruat karo.
- [ ] Is account ka naam rakho: **Safety Shield**.

**Auto-Debit Setup:**
- Apne main bank account se auto-debit set karo
- Date: Salary/pocket money aane ke 1 din baad
- Amount: ₹500 se shuru karo (gradually increase)
- Target: 3-6 months expenses ka fund

**Pro Tip**: Account invisible rakho. App delete kar do phone se. Sirf emergency pe login karo. \"Out of sight, out of mind\" actually kaam karta hai!`,
        imagePrompt: "Person holding a digital shield with a tick mark, mobile screen showing a success message, red and green accents, victory theme",
        color: "#EF4444",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "4-2",
    title: "Kaise Banayein — Step-by-Step Roadmap",
    emoji: "🛠️",
    color: "#F59E0B",
    description: "Emergency fund banane ka 6-step roadmap. Target set karo, monthly save karo, accelerate karo.",
    cards: [
      {
        id: "4-2-1",
        topicId: "4-2",
        topicTitle: "Build Emergency Fund",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "6-Step Roadmap to Build Fund",
        content: `**Step 1: Target amount calculate karo** (monthly expenses × 6)
Example: ₹10,000/month × 6 = ₹60,000 target.

**Step 2: Monthly saving fix karo** (₹500 minimum, zyada agar ho sake)
- ₹60,000 ÷ ₹1,000/month = 60 months (5 years)
- ₹60,000 ÷ ₹2,000/month = 30 months (2.5 years)
- ₹60,000 ÷ ₹3,000/month = 20 months (1.7 years)

**Step 3: Auto-debit setup karo** (saving account ya FD mein)
Salary aate hi ₹1,000 transfer. Bhool jaane ki problem solve.

**Step 4: Separate account rakho** — daily wale account mein mat rakho, spend ho jayega. Alag bank best hai.

**Step 5: Monthly review** — kitna bana, kitna aur chahiye. Progress track karo.

**Step 6: Accelerate** — bonus, gift money, side income ka extra emergency fund mein daalo. Diwali bonus ₹5,000 = fund 5 months early.

**Build Timeline Table:**

| Target | ₹500/m | ₹1,000/m | ₹2,000/m | ₹3,000/m |
| :--- | :--- | :--- | :--- | :--- |
| ₹15,000 | 30 months | 15 months | 8 months | 5 months |
| ₹30,000 | 60 months | 30 months | 15 months | 10 months |
| ₹60,000 | 120 months | 60 months | 30 months | 20 months |
| ₹90,000 | 180 months | 90 months | 45 months | 30 months |

**Pro Tip**: Slow hone se farq nahi padta — complete hone se farq padta hai. Start karo!`,
        imagePrompt: "Six-step roadmap illustration with shield at the end, amber theme, journey visualization",
        color: "#F59E0B",
        emoji: "🗺️"
      },
      {
        id: "4-2-2",
        topicId: "4-2",
        topicTitle: "Build Emergency Fund",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "Fund Allocation Strategy",
        content: `**Smart Allocation — Split Strategy for ₹60,000 Fund:**

| Bucket | Amount | Where | Why |
| :--- | :--- | :--- | :--- |
| **Instant Access** | ₹15,000 | Savings Account | Medical emergency, urgent travel — 2 min mein nikalna |
| **Short-Term** | ₹25,000 | FD Ladder (3-month) | 3 FDs of ₹8,000 each, har month ek matures — slightly higher return |
| **Liquid Growth** | ₹20,000 | Liquid Mutual Fund | 5-6% return, 1-day redemption — paisa grow bhi kare |

**Why Split?**
1. **Savings Account**: Instant access for true emergencies (₹0 to ₹15,000 in 2 min)
2. **FD Ladder**: Slightly higher return, but accessible within 1-2 days
3. **Liquid Fund**: Best return in safety category, 1-day redemption

**Student Example for ₹15,000 Fund:**
- ₹5,000 in savings account (instant)
- ₹10,000 in RD or FD (1-2 day access)

**Rule**: Emergency fund ko Equity Mutual Fund mein INVEST nahi karte. Market crash + emergency = double disaster. Safety > Returns.

**Why Not Equity?**
- 2020 March crash: Nifty fell 30% in 1 month
- Agar tumhara ₹60,000 emergency fund equity mein tha aur COVID+job loss ek saath aaya = ₹42,000 milta, ₹18,000 gone!

Liquid fund max. Equity bilkul nahi.`,
        imagePrompt: "Three-bucket allocation strategy diagram, amber theme, smart financial planning illustration",
        color: "#F59E0B",
        emoji: "🪣"
      },
      {
        id: "4-2-3",
        topicId: "4-2",
        topicTitle: "Build Emergency Fund",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "🚨 MISSION: Build Timeline Calculate",
        content: `🚨 **TODAY'S MISSION**

Bhai, apna emergency fund build timeline calculate karo:

- [ ] Apne monthly expenses calculate karo (rent + food + transport + bills).
- [ ] 6 months ka target set karo (monthly × 6).
- [ ] Kitna monthly save kar sakte ho, decide karo (₹500 minimum).
- [ ] Build timeline calculate karo (target ÷ monthly saving).
- [ ] Calendar mein target date mark karo!

**Example Calculation:**
- Monthly expenses: ₹8,000
- 6 months target: ₹48,000
- Monthly save: ₹1,500
- Timeline: 48,000 ÷ 1,500 = 32 months (~2.7 years)

**Accelerate Tips:**
- Diwali/Christmas bonus seedha fund mein
- Birthday gift money → fund
- Side hustle income ka 50% → fund
- Tax refund → fund
- Refund from cancelled subscription → fund

**Action**: Aaj se ₹500 auto-debit set karo. Calendar mein \"Emergency Fund Ready\" date mark karo!`,
        imagePrompt: "Person marking a date on calendar with target symbol, amber theme, planning atmosphere",
        color: "#F59E0B",
        emoji: "📅"
      }
    ]
  },
  {
    id: "4-3",
    title: "Kab Use Karein — Genuine vs Fake Emergency",
    emoji: "🚨",
    color: "#DC2626",
    description: "15 genuine emergencies aur 15 non-emergencies — clear list so confusion na ho.",
    cards: [
      {
        id: "4-3-1",
        topicId: "4-3",
        topicTitle: "When to Use",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "15 Genuine Emergencies ✅",
        content: `**15 GENUINE EMERGENCIES (Use Allowed):**

1. **Medical bill** — self ya family, hospital expenses
2. **Job loss / income completely stop ho jana**
3. **Urgent home repair** — roof leak, electrical fault, plumbing
4. **Legal issue requiring lawyer fee**
5. **Family emergency** — travel, support, critical situation
6. **Essential device breakdown** — laptop for work/study (not gaming)
7. **Car/bike repair** — agar daily commute dependent hai
8. **Natural disaster** — flood, earthquake damage
9. **Unexpected mandatory fees** — exam, course, visa
10. **Sudden relocation** — job change, safety issue
11. **Pet medical emergency**
12. **Theft/loss of wallet** — immediate survival ke liye
13. **Emergency travel** — death in family
14. **Academic emergency** — supplementary exam fee
15. **Dental emergency** — root canal, extraction

**Golden Rule**: Agar sochne ka time hai (\"shayad 2-3 din mein decide karunga\"), toh woh emergency nahi hai. Real emergency = instant decision chahiye, life disruption ho raha hai.`,
        imagePrompt: "Checklist of 15 genuine emergencies with green checkmarks, red and gold theme, organized safety infographic",
        color: "#DC2626",
        emoji: "✅"
      },
      {
        id: "4-3-2",
        topicId: "4-3",
        topicTitle: "When to Use",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "15 Non-Emergencies ❌",
        content: `**15 NON-EMERGENCIES (USE NOT ALLOWED):**

1. **Sale mein phone ka deal** — \"70% off!\" is not emergency
2. **Vacation plan** — planned expense hai, emergency nahi
3. **New gadget launch** — iPhone 16 aa gaya, laptop chahiye nahi
4. **Friend ki shaadi ka expensive gift** — gift budget alag se banao
5. **Restaurant pe dinner** — want hai, emergency nahi
6. **Branded clothes** — want hai emergency nahi
7. **Gaming console** — entertainment want hai
8. **Car/bike upgrade** — existing kaam kar raha hai toh upgrade nahi
9. **Home renovation (cosmetic)** — need nahi, want hai
10. **Investment opportunity** — emergency fund INVEST nahi karte!
11. **Diwali shopping** — planned festival expense
12. **Concert tickets** — entertainment
13. **New course (non-urgent)** — planned skill upgrade
14. **Gym membership** — health want, not emergency
15. **Birthday party expenses** — social want

**Decision Tree:**
\`\`\`
Kharcha aaya → Emergency hai?
    ↓ YES → Fund use karo (medical, job loss, urgent repair)
    ↓ NO → Want ya planned expense hai
              ↓ → Monthly budget se pay karo
              ↓ → Agar budget mein nahi → postpone ya save
\`\`\`

**⚠️ YAHAN PE LOG GALTI KARTE HAIN (Module 4):**

⚠️ Emergency fund ko regular saving se mix karna — Alag account mein rakho
⚠️ 3 months se kam fund rakhna — 6 months recommended hai for real safety
⚠️ Emergency fund ko invest karne ki koshish — Yeh SAFETY hai, GROWTH nahi
⚠️ Chhota expense ke liye emergency fund use karna — ₹500 repair pe mat use karo
⚠️ Fund use karne ke baad refill nahi karna — Wapas bharna equally important
⚠️ Emergency fund mein se SIP shuru karna — \"Fund mein ₹20,000 hai, thoda SIP mein daal deta hoon\" — NO!
⚠️ Parents ke fund pe depend rehna — Papa ka fund papa ke liye hai
⚠️ 1 month fund = enough sochna — Minimum 3 months, ideally 6`,
        imagePrompt: "Checklist of 15 non-emergencies with red X marks, red theme, clear financial safety infographic",
        color: "#DC2626",
        emoji: "❌"
      }
    ]
  },
  {
    id: "4-4",
    title: "Real-Life Stories — 7 Success + 5 Disaster",
    emoji: "📖",
    color: "#8B5CF6",
    description: "Real Indian stories jahan emergency fund ne logon ko bachaya ya bina fund ke log phase.",
    cards: [
      {
        id: "4-4-1",
        topicId: "4-4",
        topicTitle: "Real Stories",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "7 Success Stories 🎉",
        content: `**7 SUCCESS STORIES (Emergency Fund Thi, Bach Gaye):**

1. **Priya, 22, College Student**: Income ₹12,000/m, saved ₹5,000/month for 8 months = ₹40,000 fund. COVID mein job gayi — lekin 2 mahine comfortable rahi, naya job mila, koi loan nahi liya. **Key lesson**: Consistency = safety.

2. **Rohan, 26, Freelancer**: 6 months ka emergency fund banayi — ₹90,000. 3 mahine koi project nahi aaya, lekin emergency fund se rent, khana, bills sab pay kiye. Big project mila, wapas bhar liya fund. **Key lesson**: Buffer month system + emergency fund = freelancer survival.

3. **Sneha, 20, College Student**: ₹500/month save karke ₹15,000 fund banaya. Phone chori ho gaya. Emergency fund se ₹12,000 ka naya phone khareeda, studies continue, kisi se udhaar nahi liya. **Key lesson**: Chhota fund bhi kaam aata hai.

4. **Amit, 24, First Job**: ₹8,000/month save, 6 months mein ₹48,000. Bike accident — ₹25,000 hospital bill + ₹8,000 bike repair. Fund se cover kiya, zero debt. **Key lesson**: 6 months fund = real safety.

5. **Kunal, 23, Working Student**: ₹30,000 fund. Father ki tabiyat kharab, urgent ghar jaana pada. ₹8,000 travel + ₹5,000 medicines = fund se cover.

6. **Neha, 25, Fresher**: ₹60,000 fund. Company ne 3 months stipend delay kar diya. Fund se survive kiya, stipend aaya toh refill kiya. **Key lesson**: Income delay bhi emergency hai.

7. **Vikram, 21, Dropper**: ₹10,000 fund. Coaching institute band ho gaya, naya join karna pada — ₹8,000 deposit. Fund se cover, padhai continue. **Key lesson**: Even dropper students need emergency fund.

**Common Pattern**: Small consistent saving + alag account = real protection.`,
        imagePrompt: "Seven success story icons with happy faces, purple and gold theme, victory celebration illustration",
        color: "#8B5CF6",
        emoji: "🎉"
      },
      {
        id: "4-4-2",
        topicId: "4-4",
        topicTitle: "Real Stories",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "5 Disaster Stories ⚠️",
        content: `**5 DISASTER STORIES (Bina Emergency Fund Ke):**

1. **Amit (different), 24**: Bike accident — ₹30,000 hospital bill. Emergency fund nahi thi. Personal loan liya at 18% interest. 2 saal EMI bhari — total paid ₹42,000. Agar emergency fund hoti = ₹12,000 save hote. **Recovery time**: 2 saal debt.

2. **Priya (different), 23**: Dengue hua — ₹1,20,000 hospital bill (private hospital). Fund nahi, parents ke retirement savings todne pade. Guilt + financial loss. **Key lesson**: Health emergency = family savings destroy kar sakti hai.

3. **Rohan (different), 25**: Job loss. Zero savings. 2 mahine credit card pe survive kiya — ₹40,000 balance. Naya job mila lekin 2 saal EMI bhari. **Key lesson**: Job loss without fund = credit card debt trap.

4. **Sneha (different), 22**: Laptop kharab, exams 1 week away. Fund nahi, parents se ₹25,000 maange. Parents ne FD todi — penalty + loss of interest. **Key lesson**: Academic emergency = parents' savings pe burden.

5. **Kunal (different), 24**: Father ki surgery — ₹2,00,000. Fund nahi, gold bechna pada. Emotional + financial trauma. **Key lesson**: Family medical emergency = generational wealth destroy kar sakti hai bina fund ke.

**Disaster Common Pattern**: Bina fund ke har chhota emergency bada ban jaata hai — loan + interest + emotional stress.

**Calculation**: ₹50,000 medical bill without fund = personal loan at 18% for 2 years = ₹72,000+ total pay.
With fund = ₹50,000 only. **₹22,000 saved!**`,
        imagePrompt: "Five disaster story warning signs, purple and red theme, cautionary financial illustration",
        color: "#8B5CF6",
        emoji: "⚠️"
      },
      {
        id: "4-4-3",
        topicId: "4-4",
        topicTitle: "Real Stories",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "🚨 MISSION: Apni Story Likho",
        content: `🚨 **TODAY'S MISSION**

Apni financial story socho aur likho:

- [ ] Kya tum kabhi bina fund ke emergency mein phase? Yaad karo.
- [ ] Us waqt kya feel hua? Stress, guilt, panic?
- [ ] Agar tab emergency fund hoti, kya different hota?
- [ ] Aaj se ₹500/month emergency fund shuru karne ka commitment lo.
- [ ] 6 months baad dekho — kya alag feel hota hai?

**Story Visualization Exercise:**
- **Without fund**: Job loss → rent pending → credit card survival → debt trap → 2 years recovery
- **With fund**: Job loss → 6 months comfortable → calmly new job search → no debt → life continues

**Choice**: Kaunsi story apni chahiye? 🤔

**Rule**: Emergency fund sirf paise nahi, **mental peace** kharidta hai. ₹3 lakh emergency fund = 6 months ki FREEDOM. Yeh wealth nahi, freedom hai.`,
        imagePrompt: "Person writing their financial story in a journal, purple theme, reflection and planning atmosphere",
        color: "#8B5CF6",
        emoji: "✍️"
      }
    ]
  },
  {
    id: "4-5",
    title: "Emergency Fund Wapas Kaise Bharein — Refill Strategy",
    emoji: "🔄",
    color: "#06B6D4",
    description: "Fund use karne ke baad wapas bharna equally important hai. Refill strategy seekho.",
    cards: [
      {
        id: "4-5-1",
        topicId: "4-5",
        topicTitle: "Refill Strategy",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "3 Priority Refill Strategy",
        content: `Emergency fund use karne ke baad wapas bharna equally important hai. Refill strategy:

**Priority 1: Emergency Fund Refill — Top Priority**
Fund use kiya? Agle mahine se savings ka 100% emergency fund refill mein daalo. Wants completely cut karo temporarily.

**Priority 2: Monthly Top-Up Schedule**
Target amount ÷ 6 months = monthly refill.
₹30,000 fund use kiya? ₹5,000/month for 6 months = refill.

**Priority 3: Accelerated Refill with Side Income**
Freelancing, tutoring, gig work — jo extra aaye, seedha emergency fund mein. ₹5,000 extra income = 1 month early refill.

**Example Refill Plan (₹30,000 target, 6 months):**

| Month | Auto-Debit | Side Income | Extra | Total | Cumulative |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | ₹2,000 | ₹3,000 | ₹0 | ₹5,000 | ₹5,000 |
| 2 | ₹2,000 | ₹2,000 | ₹0 | ₹4,000 | ₹9,000 |
| 3 | ₹2,000 | ₹0 | ₹0 | ₹2,000 | ₹11,000 |
| 4 | ₹2,000 | ₹5,000 | ₹0 | ₹7,000 | ₹18,000 |
| 5 | ₹2,000 | ₹0 | ₹0 | ₹2,000 | ₹20,000 |
| 6 | ₹2,000 | ₹3,000 | ₹0 | ₹5,000 | ₹25,000 |

Target ₹30,000 — 6 months mein refill. Side income se fast track possible.`,
        imagePrompt: "Refill process illustration - bucket filling back up with coins, cyan theme, cycle visualization",
        color: "#06B6D4",
        emoji: "🔄"
      },
      {
        id: "4-5-2",
        topicId: "4-5",
        topicTitle: "Refill Strategy",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "🚨 MISSION: Module 4 Complete!",
        content: `🚨 **FINAL MISSION — MODULE 4 COMPLETE**

Bhai, agar tumne emergency fund samajh liya aur shuru kar diya, toh tum financial security ki pehli seedi pe ho!

- [ ] Auto-debit setup for emergency fund — ₹500/month minimum.
- [ ] Alag bank account kholo (no UPI, no debit card).
- [ ] Apna 3/6/9 month target calculate karo.
- [ ] Build timeline mark karo calendar mein.
- [ ] Refill strategy ready rakho (just in case).

---

**KEY TAKEAWAYS (Module 4):**
- ✅ Emergency fund = 3-6 months expenses, SIRF emergency ke liye — sale, vacation, gadget emergency nahi hain
- ✅ Savings account mein rakhna for instant access, baaki FD/liquid fund mein — split strategy best
- ✅ Genuine vs fake emergency ka farq samjho — sochne ka time hai = emergency nahi
- ✅ ₹500/mahine se bhi shuru karo — koi bhi start better than no start. 2.5 saal mein ₹15,000
- ✅ Use ke baad refill karo — emergency fund wapas bharna zaroori hai. Priority 1 refill

**COMMON MISCONCEPTIONS (Module 4):**

⚠️ \"Emergency fund aur saving ek hi hai\" → Nahi! Do alag buckets.
⚠️ \"Mujhe emergency nahi aayegi\" → Sabko aa sakti hai. 90% logon ki life mein koi na koi emergency aati hai.
⚠️ \"FD mein rakhunga toh access nahi hoga\" → Premature withdrawal possible hai, penalty chhoti hoti hai (0.5-1%)
⚠️ \"Emergency fund invest karna chahiye\" → BILKUL NAHI! Yeh safety net hai, growth tool nahi
⚠️ \"6 months fund impossible hai student ke liye\" → ₹500/month × 30 months = ₹15,000. Slow but possible

**Aage Ka Safar**: Ab jab safety net ready hai, toh Module 5 mein ek bahut important topic aata hai — Debt aur Credit. Credit card trap, EMI reality, debt se kaise nikle — yeh sab dangerous zone hai, dhyan se. Debt samajhna = financial survival! 💳`,
        imagePrompt: "Graduation cap with shield icon, cyan and gold theme, module completion celebration",
        color: "#06B6D4",
        emoji: "🏆"
      }
    ]
  }
];

export function getAllCards() {
  return module4Topics.flatMap(topic => topic.cards);
}

export function getTotalCardCount() {
  return getAllCards().length;
}

export function getTopicById(id) {
  return module4Topics.find(t => t.id === id);
}

export function getCardsByTopic(topicId) {
  const topic = getTopicById(topicId);
  return topic ? topic.cards : [];
}
