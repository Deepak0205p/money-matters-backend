export const module2Topics = [
  {
    id: "2-1",
    title: "Budgeting In Real Life — Paisa Kahan Gaya?",
    emoji: "📋",
    color: "#2563eb",
    description: "Budgeting matlab kanjoosi nahi, balki apne paison ka boss banna hai. Samjho har rupye ka address!",
    cards: [
      {
        id: "2-1-1",
        topicId: "2-1",
        topicTitle: "Budgeting In Real Life",
        cardIndex: 1,
        totalCardsInTopic: 5,
        title: "50/30/20 Rule: Magic Formula ✨",
        content: `Bhai, agar tumhe samajh nahi aa raha ki savings shuru kahan se karein, toh yeh simple rule pakad lo:

- **50% Needs**: Rent, food, bills (Jo zaroori hai).
- **30% Wants**: Netflix, outing, shopping (Jo dil chahta hai).
- **20% Savings**: SIP, emergency fund (Jo future banayega).

Calculator use karke dekho tumhari income kaise divide honi chahiye:`,
        imagePrompt: "Pie chart illustration of 50-30-20 budget rule, vibrant green and blue colors, modern 3D icons for needs, wants and savings, clean financial infographic",
        color: "#2563eb",
        emoji: "📐",
        interactiveType: 'calculator',
        calcData: {
          calcType: 'budget',
          formula: 'none',
          inputs: [
            { label: 'Monthly Income', min: 1000, max: 100000, defaultValue: 10000, step: 500, unit: '₹' }
          ]
        }
      },
      {
        id: "2-1-2",
        topicId: "2-1",
        topicTitle: "Budgeting In Real Life",
        cardIndex: 2,
        totalCardsInTopic: 5,
        title: "Myth-Buster: Budgeting 🕵️‍♂️",
        content: `Log sochte hain budget banana matlab apni 'Aish' khatam karna. Par kya yeh sach hai?

**Myth**: Budgeting sirf unke liye hai jo bohot kam kamate hain.
**Sach**: Elon Musk ho ya ek student, budget sabko chahiye! Budgeting ka matlab hai apne paison ko batana ki kahan jaana hai, bajaye yeh poochne ke ki 'woh kahan gaye?'`,
        imagePrompt: "Person looking through magnifying glass at coins, detective theme, mystery vibe, green and teal colors, modern flat illustration",
        color: "#2563eb",
        emoji: "🕵️‍♂️",
        interactiveType: 'myth_buster',
        quizData: {
          question: "MYTH: Budgeting sirf unke liye hai jo bohot kam kamate hain.",
          options: ["Sahi baat!", "Galat, sabke liye hai!"],
          correctAnswerIndex: 1,
          explanation: "Elon Musk ho ya ek student, budget sabko chahiye! Budgeting ka matlab hai apne paison ko batana ki kahan jaana hai, bajaye yeh poochne ke ki 'woh kahan gaye?'"
        }
      },
      {
        id: "2-1-3",
        topicId: "2-1",
        topicTitle: "Budgeting In Real Life",
        cardIndex: 3,
        totalCardsInTopic: 5,
        title: "Needs vs Wants: The Dilemma 🍔",
        content: `Tumhare paas ₹500 bache hain. Sunday hai. Dost bula rahe hain party ke liye, par kal phone ka recharge bhi khatam hone wala hai.

Kya karoge?`,
        imagePrompt: "Student standing between a burger and a mobile recharge icon, decision making concept, vibrant green background, expressive character illustration",
        color: "#2563eb",
        emoji: "🤔",
        interactiveType: 'choice_sim',
        choiceData: {
          scenario: "Sunday party ya Phone recharge? Budget tight hai!",
          choices: [
            {
              text: "Party! Kal ka kal dekhenge.",
              isCorrect: false,
              consequence: "Trap! Kal phone recharge nahi hua toh classes aur assignments miss ho jayenge. 'Want' ne 'Need' ka gala ghot diya!"
            },
            {
              text: "Recharge pehle, party skip.",
              isCorrect: true,
              consequence: "Smart! Basic Needs (communication) pehle aati hain. Doston ko ghar bula lo, chai pe charcha kar lo — paise bhi bachenge aur maze bhi honge!"
            }
          ]
        }
      },
      {
        id: "2-1-4",
        topicId: "2-1",
        topicTitle: "Budgeting In Real Life",
        cardIndex: 4,
        totalCardsInTopic: 5,
        title: "Student Budget Templates 📋",
        content: `Har student ki life alag hoti hai. Dekho tum kis category mein fit hote ho:

| Category | Amount (₹) | Strategy |
| :--- | :--- | :--- |
| **Survival** | ₹3,000 | 70% Food/Rent, 10% Savings |
| **Comfort** | ₹10,000 | 50% Needs, 20% Skills, 30% Savings |
| **Working Student**| ₹20,000 | 40% Living, 40% Invest, 20% Fun |

**Pro Tip**: Pay yourself first! Pehle savings ka paisa side rakho, phir kharch karo.

**Zero-Based Budgeting**: Har rupye ka kaam fix ho — income = expenses + savings, no loose money. ₹15,000 income — ₹3,000 savings (expense category), ₹4,000 rent, ₹2,500 food, ₹1,500 transport, ₹1,000 education, ₹1,500 entertainment, ₹1,200 phone/WiFi, ₹300 others = ₹15,000. ZERO!`,
        imagePrompt: "Three different budget icons - a shield for survival, a sofa for comfort, and a rocket for working student, clean comparison table, green theme",
        color: "#2563eb",
        emoji: "📊"
      },
      {
        id: "2-1-5",
        topicId: "2-1",
        topicTitle: "Budgeting In Real Life",
        cardIndex: 5,
        totalCardsInTopic: 5,
        title: "🚨 MISSION: Subscription Audit",
        content: `🚨 **TODAY'S MISSION**

Bhai, woh unused subscriptions tumhare bank account mein 'leak' ki tarah hain.

- [ ] Play Store / App Store kholo.
- [ ] 'Subscriptions' section check karo.
- [ ] Jo app 1 mahine se use nahi ki, uska auto-renewal OFF karo.
- [ ] Dekho kitne ₹ bache! (Average student ₹500/month bacha leta hai yahan).

**Math Check**: ₹249 × 4 apps = ₹1,000/month = ₹12,000/year! Netflix, Spotify, Amazon Prime, Hotstar — sab chahiye? Audit karo!`,
        imagePrompt: "Magnifying glass over a list of mobile apps with 'Cancel' buttons highlighted, red and green accents, tech style illustration",
        color: "#2563eb",
        emoji: "🚫"
      }
    ]
  },
  {
    id: "2-2",
    title: "Expense Tracking — Khoofiya Detective 🕵️",
    emoji: "🔍",
    color: "#1d4ed8",
    description: "\"Jo measure nahi hota, woh manage nahi hota.\" Samjho paisa kahan chhip raha hai.",
    cards: [
      {
        id: "2-2-1",
        topicId: "2-2",
        topicTitle: "Expense Tracking",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "Chat: Tracking Ka Funda 📱",
        content: `Priya aur Bhaiya ki baatcheet se samjho kyun tracking zaroori hai.

**Priya**: Bhaiya, mahine ke end mein balance zero ho jata hai, pata hi nahi chalta kahan gaya!

**Bhaiya**: Bhai, tum 'Invisible Leaks' ka shikaar ho. Woh ₹20 ki chai aur ₹50 ka auto ka hisaab rakhti ho?

**Priya**: Nahi... itne chhote kharche kaun likhta hai?

**Bhaiya**: Wahi toh! ₹50/day = ₹1,500/month. Tracking app dalo aur dekho magic!

**3 Cheezein Jo Tracking Se Milti Hain**:
1. Pattern samajh aata hai — "arey, mahine mein ₹1,500 sirf chai pe!"
2. Unnecessary spending identify hoti hai
3. Better budget bana sakte ho agle mahine ke liye`,
        imagePrompt: "Two people chatting on smartphones, speech bubbles with currency symbols and graphs, modern clean illustration, blue-600 green theme",
        color: "#1d4ed8",
        emoji: "💬",
        interactiveType: 'none'
      },
      {
        id: "2-2-2",
        topicId: "2-2",
        topicTitle: "Expense Tracking",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "Tracking Methods: Choose Your Style",
        content: `Har kisi ka style alag hota hai. Tumhe kya pasand hai?

| Method | Effort | Accuracy |
| :--- | :--- | :--- |
| **Notebook** | High ✍️ | High (Manual) |
| **Apps (Walnut/IndMoney)** | Low 📱 | Very High (Auto) |
| **Excel/Sheets** | Medium 💻 | Professional |
| **UPI Statement Analysis** | Medium | Most Accurate |

**Best Free Apps for Indians:**
- **Walnut** — Auto-reads SMS, automatic categorization, UPI tracking. Best for lazy people.
- **ETMONEY** — Mutual fund tracking + expense tracking. Good for investors.
- **Goodbudget** — Envelope method digital version. Shared budgets possible.
- **Google Sheets** — Customizable, free, formulas lagao. Best for control freaks.

**UPI Statement Analysis**: Google Pay/PhonePe se statement download karo, Excel mein analyze karo. 90% students ka kharcha digital hai — yeh method most accurate.

**Advice**: Digital payments (UPI) zyada karte ho toh apps use karo, auto-track ho jayega!`,
        imagePrompt: "Comparison of notebook, mobile app, and laptop screen with spreadsheet, clean icons, organized layout, green and white colors",
        color: "#1d4ed8",
        emoji: "🛠️"
      },
      {
        id: "2-2-3",
        topicId: "2-2",
        topicTitle: "Expense Tracking",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "🚨 MISSION: Last 3 Days",
        content: `🚨 **TODAY'S MISSION**

Gyaan bahut ho gaya, ab real data dekhte hain!

- [ ] Apna GPay / PhonePe / Paytm history kholo.
- [ ] Pichle 3 din ke saare transactions ek paper pe likho.
- [ ] Total karo.
- [ ] Kya koi aisa kharcha tha jo avoid ho sakta tha? (Be honest!)

**Daily vs Weekly vs Monthly Tracking:**
- **Daily**: Best for impulse control. Roz shaam ko 2 minute mein likh do. Tedious ho sakta hai.
- **Weekly**: Best balance. Har Sunday review — 15 minute. Pattern pakadte hain.
- **Monthly**: Good for overview. Lekin agar month end mein pata chala ki ₹2,000 zyada ho gaya, toh ab kuch nahi kar sakte.

**Recommendation**: Weekly tracking + monthly analysis. Roz ke small expenses note karo (chai, snacks), Sunday ko consolidate karo.`,
        imagePrompt: "Smartphone screen showing payment history with a person writing notes in a diary, realistic and focused, warm green lighting",
        color: "#1d4ed8",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "2-3",
    title: "Needs vs Wants Deep Dive — 30 Real Scenarios",
    emoji: "🤔",
    color: "#0EA5E9",
    description: "Needs aur wants mein farq karna seekhna budgeting ka foundation hai. 30 real student scenarios se clear karo.",
    cards: [
      {
        id: "2-3-1",
        topicId: "2-3",
        topicTitle: "Needs vs Wants",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "30 Real Student Scenarios",
        content: `Needs aur wants mein farq karna seekhna bahut important hai. Yeh 30 real student scenarios se clear hoga:

| Item | Need/Want | Reasoning |
| :--- | :--- | :--- |
| College tuition fees | **NEED** | Education basic right |
| Branded backpack | **WANT** | Normal bag kaam chala sakta hai |
| Internet recharge | **NEED** | Study, communication zaroori |
| Netflix subscription | **WANT** | YouTube free hai |
| Doctor visit (illness) | **NEED** | Health non-negotiable |
| Branded shoes (3rd pair) | **WANT** | Ek pair kaafi hai |
| Laptop for coding | **NEED** | CS student ke liye essential |
| Gaming laptop | **WANT** | Normal laptop coding ke liye kaafi |
| Basic medicines | **NEED** | Health first |
| Expensive gym membership | **WANT** | Free exercises, college gym option |
| Textbooks | **NEED** | Used bhi chal sakta hai |
| iPhone 15 | **WANT** | ₹15,000 phone bhi kaam chala sakta hai |
| Mess food | **NEED** | Basic nutrition zaroori |
| Daily Starbucks coffee | **WANT** | ₹300/day = ₹9,000/month! |
| Public transport pass | **NEED** | Commute zaroori |
| Ola/Uber daily | **WANT** | Bus/metro cheaper |
| Notebook/pen | **NEED** | Basic stationery |
| iPad for notes | **WANT** | Pen-paper kaafi hai |
| Health insurance | **NEED** | Medical emergency protection |
| Expensive birthday gift | **WANT** | Thoughtful > expensive |
| PG rent | **NEED** | Shelter basic need |
| Single room (vs sharing) | **WANT** | Sharing uncomfortable lekin affordable |
| Basic clothes | **NEED** | Decent appearance zaroori |
| Branded clothes | **WANT** | ₹500 shirt bhi kaam chala sakta hai |
| Dental checkup | **NEED** | Health maintenance |
| Hair spa/salon | **WANT** | Basic trim need, spa luxury |
| Course books | **NEED** | Academic requirement |
| Novels/fiction | **WANT** | Library se free mein milte hain |
| Bus to hometown | **NEED** | Family connection |
| Flight to hometown (vs train) | **WANT** | Train cheaper, time save nahi need`,
        imagePrompt: "Long comparison table of needs vs wants with checkmarks and cross marks, sky blue and green theme, clean infographic",
        color: "#0EA5E9",
        emoji: "📋"
      },
      {
        id: "2-3-2",
        topicId: "2-3",
        topicTitle: "Needs vs Wants",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "Gray Areas — Context Matters",
        content: `Not every expense is clearly NEED or WANT. Context matters!

**5 Gray Areas Where Context Matters:**

1. **Laptop**: CS student ke liye **NEED**, English literature student ke liye **WANT** (college lab sufficient).
2. **Gym**: Medical condition (doctor recommended) = **NEED**, six-pack abs = **WANT**.
3. **Phone**: Basic smartphone **NEED**, iPhone 16 **WANT**. Lekin agar photography student ho toh good camera **NEED**.
4. **Internet**: 1 GB/day **NEED**, unlimited 5G **WANT** (unless online gamer/streamer).
5. **Clothes**: Interview ke liye formal shirt **NEED**, 5th pair of jeans **WANT**.

**3-Question Test (Recap):**
1. Kya bina iske reh sakte hain?
2. Kya cheaper option hai?
3. Kya abhi zaroori hai ya baad mein chalega?

Agar 3 mein se 2 jawab \"haan\" hain, toh **WANT** hai.`,
        imagePrompt: "Brain with question marks around different expense items, sky blue theme, decision making concept, modern flat illustration",
        color: "#0EA5E9",
        emoji: "🧠"
      },
      {
        id: "2-3-3",
        topicId: "2-3",
        topicTitle: "Needs vs Wants",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "Decision Tree: 48-Hour Rule",
        content: `**Decision Tree for Every Expense:**

{{visual: { "type": "decisiontree", "data": { "nodes": [ { "label": "Expense Aaya", "x": 140, "y": 20, "width": 120, "height": 40 }, { "label": "Can live without it?", "x": 140, "y": 100, "width": 140, "height": 40 }, { "label": "NEED", "x": 60, "y": 180, "width": 80, "height": 40 }, { "label": "WANT", "x": 260, "y": 180, "width": 80, "height": 40 }, { "label": "Cheaper Option?", "x": 60, "y": 260, "width": 120, "height": 40 }, { "label": "Wait 48 Hrs", "x": 260, "y": 260, "width": 100, "height": 40 } ], "edges": [ { "path": "M 200 60 L 200 100" }, { "path": "M 140 120 L 100 120 L 100 180", "label": "No" }, { "path": "M 280 120 L 300 120 L 300 180", "label": "Yes" }, { "path": "M 100 220 L 100 260" }, { "path": "M 300 220 L 300 260" } ] } }}}

**48-Hour Rule**: Kuch bhi kharidne se pehle 48 ghante socho. 90% cheezein baad mein yaad bhi nahi rehti! "Sale mein 70% off" soch ke impulse mat karo.

⚠️ **Myth**: "₹3,000 mein budget nahi banta"
**Sach**: ₹3,000 mein bhi budget banta hai. ₹300 savings bhi budget hai.

⚠️ **Myth**: "Budget rigid hona chahiye"
**Sach**: Budget flexible hona chahiye. Life unpredictable hai.`,
        imagePrompt: "Decision flowchart with arrows showing the 48-hour rule, sky blue and green theme, clean infographic",
        color: "#0EA5E9",
        emoji: "🌳"
      }
    ]
  },
  {
    id: "2-4",
    title: "Common Budget Mistakes — 15 Detailed Solutions",
    emoji: "⚠️",
    color: "#EF4444",
    description: "Budget banaate waqt students 15 common mistakes karte hain. Har mistake ka solution bhi hai.",
    cards: [
      {
        id: "2-4-1",
        topicId: "2-4",
        topicTitle: "Budget Mistakes",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "Top 8 Budget Mistakes (1-8)",
        content: `Budget banaate waqt students 15 common mistakes karte hain. Pehle 8 dekho:

| # | Mistake | Solution |
| :--- | :--- | :--- |
| 1 | \"Pehle spend phir dekha kitna bacha\" | Pay yourself first — auto-debit saving account mein. Salary aate hi ₹1,000 transfer ho jaaye |
| 2 | Small expenses ignore karna | ₹50 chai × 30 din = ₹1,500/mahine sirf chai pe! Roz ke chhote kharche track karo |
| 3 | EMI pe cheezein lena | ₹15,000 phone ka total EMI cost = ₹17,000+ |
| 4 | Friends ke saath overspend | Har weekend ₹500 ka outing = ₹2,000/month. Monthly limit fix karo — ₹1,000 max. Real friends samjhenge |
| 5 | Sale mein unnecessary shopping | \"70% off\" = ₹0 savings agar tumhe woh cheez nahi chahiye thi. 48-hour rule apply karo |
| 6 | Credit card free money samajhna | 36-48% interest! ₹10,000 bill pe minimum ₹500 pay kiya = ₹332 interest agle mahine |
| 7 | Budget banaake follow na karna | Banaana 20% kaam, follow karna 80%. Weekly review — har Sunday 15 min check |
| 8 | Irregular income ko regular assume karna | Freelancer ka ₹50,000 mahine nahi hota. Average calculate karo, buffer system banao |`,
        imagePrompt: "Warning signs around common budget mistakes with red X marks, clean modern infographic",
        color: "#EF4444",
        emoji: "⚠️"
      },
      {
        id: "2-4-2",
        topicId: "2-4",
        topicTitle: "Budget Mistakes",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "Mistakes 9-15 Aur Solutions",
        content: `Aage ke 7 mistakes jo students karte hain:

| # | Mistake | Solution |
| :--- | :--- | :--- |
| 9 | Emergency fund skip karna | Pehle 3 months expenses save karo, phir investing shuru. ₹500/month se start — 2 saal mein ₹12,000+ |
| 10 | Subscription audit nahi karna | ₹249 × 4 apps = ₹1,000/month = ₹12,000/year. Har 3 mahine audit karo. Jo use nahi karte, cancel karo |
| 11 | Investing ko delay karna | \"Pehle savings complete karo\" — lekin time nikal jaata hai. SIP ₹500 se shuru karo, emergency fund ke saath saath. Parallel chalao |
| 12 | Rent/PG mein zyada dena | Single room ₹8,000 vs shared ₹3,000. ₹5,000/month = ₹60,000/year extra! Sharing explore karo |
| 13 | Insurance skip karna | Ek emergency = saara saving zero. Dengue ka ₹1.5 lakh bill. Health insurance ₹5,000-₹8,000/year = ₹500-₹700/month |
| 14 | Tax planning nahi karna | 80C se hazaron bachao. ₹1.5 lakh ELSS mein daalo, taxable income kam karo. ITR file karo, 80C deductions claim karo |
| 15 | UPI pe har chhota kharcha ignore | ₹30, ₹40 ka count nahi karte, mahine end mein ₹2,000+ ka total hota hai. Track karo |

⚠️ **YAHAN PE LOG GALTI KARTE HAIN**:
1. Budget banaake follow na karna
2. Emergency fund skip karna
3. UPI pe har chhota kharcha ignore karna
4. Friends ke spending pattern ki copy karna
5. Budget mein savings ko last priority rakhna`,
        imagePrompt: "Checklist of 7 more budget mistakes with solutions, red and green theme, organized financial infographic",
        color: "#EF4444",
        emoji: "📝"
      },
      {
        id: "2-4-3",
        topicId: "2-4",
        topicTitle: "Budget Mistakes",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "🚨 MISSION: Mistake Audit",
        content: `🚨 **TODAY'S MISSION**

Bhai, mistakes sab karte hain, lekin unko identify karna zaroori hai. Aaj audit karo:

- [ ] Apna pichla mahina yaad karo. Kaunsi galti ki?
- [ ] Small expenses (chai, snacks, auto) ka total calculate karo.
- [ ] Subscriptions check karo — koi unused toh nahi?
- [ ] Friends pe impulse spending hua kya?
- [ ] Saving kiya tha ya \"jo bacha woh save\" approach thi?

**Common Misconceptions (Module 2):**

⚠️ **\"Budget sirf kanjoos logon ke liye hai\"** → Galat! Budget aware logon ke liye hai. Kanjoosi = needs pe bhi paise nahi lagana. Budget = smart allocation.

⚠️ **\"₹3,000 mein budget nahi banta\"** → Galat! ₹3,000 mein bhi budget banta hai. ₹300 savings bhi budget hai.

⚠️ **\"App se tracking hoti hai, manually nahi karna\"** → App tool hai, habit tumhari banana padegi.

⚠️ **\"Freelancer ka budget nahi banta\"** → Galat! Buffer system se bahut acha budget ban sakta hai.

⚠️ **\"Budget rigid hona chahiye\"** → Galat! Budget flexible hona chahiye. Life unpredictable hai.

**KEY TAKEAWAYS**:
- ✅ Zero-based budget banao — har rupye ka kaam fixed ho
- ✅ Pay Yourself First — savings pehle
- ✅ Expense tracking weekly karo — Sunday 15 min review
- ✅ Irregular income ke liye buffer month system
- ✅ Needs vs Wants ka farq samjho — 48-hour rule wants ke liye`,
        imagePrompt: "Person reviewing their budget with red pen marking mistakes, red and green theme, focused audit atmosphere",
        color: "#EF4444",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "2-5",
    title: "Ready-Made Budget Templates — 5 Complete Plans",
    emoji: "📋",
    color: "#8B5CF6",
    description: "5 ready-made templates har income level ke liye — ₹3,000 se ₹35,000 tak.",
    cards: [
      {
        id: "2-5-1",
        topicId: "2-5",
        topicTitle: "Budget Templates",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "Templates 1-2: Tight aur Survival",
        content: `**Template 1: ₹3,000 Income (Dropper Student — Tightest Budget)**

| Category | Amount (₹) | Notes |
| :--- | :--- | :--- |
| Savings | ₹300 | 10% minimum — habit building |
| Rent (share) | ₹1,000 | 3-way sharing |
| Food | ₹1,000 | Mess only |
| Transport | ₹200 | Bus/walk |
| Study Material | ₹300 | Used books |
| Phone | ₹149 | Basic plan |
| Emergency Buffer | ₹51 | Har mahine add karo |
| **TOTAL** | **₹3,000** | Tight budget, possible hai |

**Template 2: ₹5,000 Income (College Student — Survival Budget)**

| Category | Amount (₹) | % of Income |
| :--- | :--- | :--- |
| Savings (Pay Yourself) | ₹1,000 | 20% Auto-debit |
| Rent/Hostel (shared) | ₹1,500 | 30% Double sharing PG |
| Mess/Tiffin | ₹1,200 | 24% Basic meals — 2 time |
| Transport | ₹300 | 6% Bus pass |
| Phone Recharge | ₹199 | 4% Prepaid |
| Study Material | ₹200 | 4% Used books |
| Personal/Entertainment | ₹401 | 8% Controlled |
| Emergency Buffer | ₹200 | 4% Build up |
| **TOTAL** | **₹5,000** | **100%** |

**Pro Tip**: Har rupye ka kaam hai. ₹401 personal mein — chai, snacks, outing strictly.`,
        imagePrompt: "Two budget templates side by side for tight and survival budgets, purple and green theme, clean financial infographic",
        color: "#8B5CF6",
        emoji: "📊"
      },
      {
        id: "2-5-2",
        topicId: "2-5",
        topicTitle: "Budget Templates",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "Templates 3-4: Comfortable aur Working",
        content: `**Template 3: ₹10,000 Income (Freelance/Side Income)**

| Category | Amount (₹) | Notes |
| :--- | :--- | :--- |
| Savings | ₹2,000 | ₹1,000 SIP + ₹1,000 emergency |
| Rent (PG share) | ₹3,000 | Double sharing |
| Food | ₹2,500 | Mess + occasional cooking |
| Transport | ₹500 | Bus/metro |
| Phone + WiFi | ₹500 | Shared WiFi + prepaid |
| Study/Skill | ₹500 | Online courses |
| Entertainment | ₹700 | Outing, snacks |
| Emergency Buffer | ₹300 | Build karte raho |
| **TOTAL** | **₹10,000** | Comfortable student budget |

**Template 4: ₹20,000 Income (Working Student)**

| Category | Amount (₹) | Notes |
| :--- | :--- | :--- |
| Savings | ₹4,000 | ₹2,000 SIP + ₹1,500 emergency + ₹500 PPF |
| Rent | ₹5,000 | 1RK ya flat share |
| Food | ₹4,000 | Grocery + occasional outside |
| Transport | ₹1,500 | Metro + petrol |
| Phone + WiFi | ₹800 | Postpaid + broadband |
| Education/Skill | ₹1,500 | Certifications, courses |
| Insurance | ₹500 | Health + term (basic) |
| Entertainment | ₹1,700 | Movies, shopping, social |
| Emergency Buffer | ₹1,000 | 6-month target: ₹60,000 |
| **TOTAL** | **₹20,000** | Zero-based budget |`,
        imagePrompt: "Two budget templates for comfortable and working student, purple theme, clean modern infographic",
        color: "#8B5CF6",
        emoji: "💼"
      },
      {
        id: "2-5-3",
        topicId: "2-5",
        topicTitle: "Budget Templates",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "Template 5: ₹35,000 Fresher Salary",
        content: `**Template 5: ₹35,000 Income (Fresher with Salary)**

| Category | Amount (₹) | Notes |
| :--- | :--- | :--- |
| Savings | ₹7,000 | ₹4,000 SIP + ₹2,000 emergency + ₹1,000 PPF |
| Rent | ₹7,000 | 1BHK ya flat share |
| Food | ₹5,000 | Grocery + outside mix |
| Transport | ₹2,000 | Metro + cab occasionally |
| Phone + WiFi | ₹1,000 | Postpaid + broadband |
| Education/Skill | ₹2,000 | Upskilling |
| Insurance | ₹1,000 | Health ₹5L + Term ₹50L |
| Entertainment | ₹3,000 | Movies, travel, shopping |
| Emergency Buffer | ₹2,000 | Target ₹1,05,000 (6 months) |
| Parents/Family | ₹5,000 | Agar support karte ho |
| **TOTAL** | **₹35,000** | 100% allocated |

**3 Complete Budget Templates Summary:**

| Income Level | Savings % | Needs % | Wants % |
| :--- | :--- | :--- | :--- |
| ₹3,000 (Dropper) | 10% | 80% | 5% |
| ₹10,000 (Freelance) | 20% | 65% | 15% |
| ₹20,000 (Working) | 20% | 60% | 20% |
| ₹35,000 (Fresher) | 20% | 50% | 25% |

**5-Step Budget Process Recap:**
1. Income calculate karo (minimum guaranteed lo)
2. Fixed expenses list karo
3. Variable expenses estimate karo
4. Savings fix karo (Pay Yourself First) — minimum ₹500
5. Review & Adjust — har Sunday 15 minute`,
        imagePrompt: "Complete budget template with pie chart for fresher salary, purple and gold theme, professional financial illustration",
        color: "#8B5CF6",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "2-6",
    title: "Irregular Income Budgeting — Freelancer Ka Strategy",
    emoji: "🎯",
    color: "#F59E0B",
    description: "Freelancer ya part-timer ka income har mahine different hota hai. 'Buffer Month System' use karo.",
    cards: [
      {
        id: "2-6-1",
        topicId: "2-6",
        topicTitle: "Irregular Income",
        cardIndex: 1,
        totalCardsInTopic: 3,
        title: "Buffer Month System Ka Funda",
        content: `Freelancer ya part-timer ka income har mahine different hota hai. Kabhi ₹30,000, kabhi ₹5,000, kabhi ₹0. Aise mein budget kaise banaoge?

**Solution: \"Buffer Month System\"**

Apna budget minimum reliable income pe banao (jaise ₹8,000/mahine). Acche mahine ka extra (jaise ₹30,000 aaye toh ₹22,000 extra) — isko **\"buffer account\"** mein daalo.

Jab kharab mahine aaye (₹5,000 ya ₹0), buffer account se chalao.

**Freelancer ke 3 Golden Rules:**

1. **2-3 income streams maintain karo** — ek band ho toh dusra hai. Coding + content writing + tutoring. Total income stable rahega.

2. **Acche mahine ka 50% extra save karo** — \"acha mahina hai\" pe overspend mat karo. ₹30,000 aaya? ₹15,000 buffer mein daalo. ₹15,000 hi kharch karo.

3. **SIP pause karo temporarily** (but mat redeem karo) jab ₹0 income mahina aaye.

**Month mein ₹0 Aane Pe Kaise Survive Karein:**
- Buffer account se ₹8,000 nikaalo (fixed expenses ke liye)
- Wants completely cut karo — zero entertainment
- Side gig dhundo — data entry, delivery, anything
- SIP pause karo temporarily (but mat redeem karo)
- Emergency fund use karo — yahi uske liye hai`,
        imagePrompt: "Buffer system concept - piggy bank filling up in good months, draining in bad months, amber theme, cycle illustration",
        color: "#F59E0B",
        emoji: "💪"
      },
      {
        id: "2-6-2",
        topicId: "2-6",
        topicTitle: "Irregular Income",
        cardIndex: 2,
        totalCardsInTopic: 3,
        title: "Freelancer 6-Month Income Story 📊",
        content: `**Real Example: Freelancer Ki 6-Month Income Story**

| Month | Income | Fixed Spent | Variable | Buffer Add | Buffer Used | Buffer Balance |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| Jan | ₹35,000 | ₹10,000 | ₹5,000 | ₹15,000 | ₹0 | ₹15,000 |
| Feb | ₹8,000 | ₹10,000 | ₹2,000 | ₹2,000 | ₹4,000 | ₹11,000 |
| Mar | ₹12,000 | ₹10,000 | ₹4,000 | ₹3,000 | ₹0 | ₹6,000 |
| Apr | ₹0 | ₹10,000 | ₹0 | ₹0 | ₹10,000 | -₹4,000 |
| May | ₹25,000 | ₹10,000 | ₹4,000 | ₹5,000 | ₹0 | ₹2,000 |
| Jun | ₹40,000 | ₹10,000 | ₹5,000 | ₹20,000 | ₹0 | ₹22,000 |

Dekho, **April mein ₹0 income** tha lekin buffer se survive kiya. Buffer system bina, April = disaster! 💥

**Joint Family Mein Budget Handling:**

Indian family dynamics mein budget alag challenge hai. Agar ghar pe rehte ho toh rent nahi, lekin parents ko contribution dena padta hai.

**Best approach**: Income ka **20-30% parents ko do** (ghar ka kharcha), baaki apna budget banao.

Transparent raho — **\"Mummy, meri salary ₹25,000 hai, ₹5,000 aapko, ₹5,000 savings, ₹15,000 mera kharcha\"**. Yeh respect bhi dikhata hai aur financial independence bhi.`,
        imagePrompt: "Bar chart showing freelancer's fluctuating income over 6 months, amber and gold theme, financial visualization",
        color: "#F59E0B",
        emoji: "📈"
      },
      {
        id: "2-6-3",
        topicId: "2-6",
        topicTitle: "Irregular Income",
        cardIndex: 3,
        totalCardsInTopic: 3,
        title: "🚨 MISSION: Buffer Setup",
        content: `🚨 **TODAY'S MISSION**

Agar tum freelancer ho ya irregular income wale ho, aaj buffer setup karo:

- [ ] Apni last 6 mahine ki income list karo.
- [ ] Minimum reliable income calculate karo (jo har mahine pakka aata hai).
- [ ] Apna budget minimum income pe based banao.
- [ ] Acche mahine ka extra — 50% buffer account mein, 30% savings, 20% reward yourself.
- [ ] Alag bank account kholo buffer ke liye (zero balance digital account).

**KEY TAKEAWAYS (Module 2):**
- ✅ Zero-based budget banao — har rupye ka kaam fixed ho
- ✅ Pay Yourself First — savings pehle, baaki sab baad mein
- ✅ Expense tracking weekly karo — Sunday 15 minute review
- ✅ Irregular income ke liye buffer month system use karo — acche mahine ka 50% extra save karo
- ✅ Needs vs Wants ka farq samjho — 48-hour rule wants ke liye

**Aage Ka Safar**: Budget bana liya, ab saving kaise karein? Module 3 mein saving strategies, techniques, challenges, aur student-specific hacks — sab detail mein dekhte hain! 🚀`,
        imagePrompt: "Person setting up buffer account on banking app, amber theme, financial planning atmosphere",
        color: "#F59E0B",
        emoji: "🎯"
      }
    ]
  }
];

export function getAllCards() {
  return module2Topics.flatMap(topic => topic.cards);
}

export function getTotalCardCount() {
  return getAllCards().length;
}

export function getTopicById(id) {
  return module2Topics.find(t => t.id === id);
}

export function getCardsByTopic(topicId) {
  const topic = getTopicById(topicId);
  return topic ? topic.cards : [];
}
