export const module1Topics = [
  {
    id: "1-1",
    title: "Money Kya Hai — Real Meaning Beyond Notes aur Coins",
    emoji: "💵",
    color: "#3B82F6",
    description: "Paisa sirf paper ya metal nahi — yeh ek concept hai, ek medium hai jiske through value exchange hoti hai.",
    cards: [
      {
        id: "1-1-1",
        topicId: "1-1",
        topicTitle: "Money Kya Hai",
        cardIndex: 1,
        totalCardsInTopic: 6,
        title: "Barter Dilemma: Kya Exchange Karoge?",
        content: `Socho, agar paisa na hota toh kya hota? Agar tumhe ek chai chahiye aur tumhare paas sirf ek kitab hai...

Kya tum chaiwale ko kitab dekar chai le paoge?

**Problem**: "Double Coincidence of Wants" — Matlab tumhe woh milna chahiye jo doosre ke paas hai, AUR doosre ko woh chahiye jo tumhare paas hai.

Mushkil hai na? Isi problem ko solve karne ke liye **Money** bana!

{{visual: { "type": "flowchart", "data": { "nodes": [ { "label": "Barter", "x": 20, "y": 50, "width": 80, "height": 40 }, { "label": "Gold", "x": 150, "y": 50, "width": 80, "height": 40 }, { "label": "Paper", "x": 280, "y": 50, "width": 80, "height": 40 }, { "label": "UPI", "x": 150, "y": 150, "width": 80, "height": 40 }, { "label": "Crypto", "x": 280, "y": 150, "width": 80, "height": 40 } ], "edges": [ { "path": "M 100 70 L 150 70" }, { "path": "M 230 70 L 280 70" }, { "path": "M 320 90 L 320 120 L 190 120 L 190 150" }, { "path": "M 230 170 L 280 170" } ] } }}}

Maqsad wahi raha — **Value Exchange**.`,
        imagePrompt: "Ancient barter system in Indian village, people exchanging goods like grain for clothes, warm earthy tones, educational illustration style",
        color: "#3B82F6",
        emoji: "🔄",
        interactiveType: 'choice_sim',
        choiceData: {
          scenario: "Tumhe chai chahiye, par tumhare paas sirf ek purani Engineering Book hai. Chaiwala kya bolega?",
          choices: [
            {
              text: "Kitab de do, chai le lo!",
              isCorrect: false,
              consequence: "Chaiwala bola: 'Bhai, main chai bechta hoon, exams nahi deta! Mujhe chawal chahiye, kitab nahi.'"
            },
            {
              text: "Book bech kar paisa lao!",
              isCorrect: true,
              consequence: "Bilkul! Paisa 'Medium of Exchange' hai. Yeh sab accept karte hain, chahe unhe kitab chahiye ho ya nahi."
            }
          ]
        }
      },
      {
        id: "1-1-2",
        topicId: "1-1",
        topicTitle: "Money Kya Hai",
        cardIndex: 2,
        totalCardsInTopic: 6,
        title: "Paisa Aaya Kahan Se? Fiat Currency Ka Funda",
        content: `Priya aur Bhaiya ki baatcheet se samjho paise ka safar.

**Priya**: Bhaiya, yeh notes ki value kyun hai? Yeh toh sirf paper hain na?

**Bhaiya**: Sahi pakde ho! Inhe 'Fiat Currency' kehte hain. Inki value isliye hai kyunki Govt ne promise kiya hai — bina kisi gold backing ke.

**Priya**: Matlab pehle gold coins hote the tabhi asli value thi?

**Bhaiya**: Pehle Gold tha, phir paper jo gold se back hota tha. Aaj sirf 'Trust' aur 'Legal Tender' pe duniya chalti hai!

{{visual: { "type": "stathighlight", "data": { "value": "21.63 B", "label": "UPI Transactions", "subtext": "December 2025 mein India mein UPI transactions worth ₹27.97 lakh crore hue!" } }}}`,
        imagePrompt: "Evolution of money timeline from barter to gold coins to paper currency, Indian historical context, educational infographic style, warm golden tones",
        color: "#3B82F6",
        emoji: "📜",
        interactiveType: 'none'
      },
      {
        id: "1-1-3",
        topicId: "1-1",
        topicTitle: "Money Kya Hai",
        cardIndex: 3,
        totalCardsInTopic: 6,
        title: "UPI Revolution — India Ka Power!",
        content: `India ne duniya ko dikha diya ki digital money kya hota hai. UPI sirf ek app nahi, ek **Financial Revolution** hai.

UPI ke 4 sabse bade faayde:
- **Instant** — 2 second mein transfer
- **24/7** — Sunday, holiday, raat 2 AM, kabhi bhi
- **Free** — koi transaction charge nahi
- **Universal** — chaiwala se le kar mall tak, sab jagah

{{visual: { "type": "barchart", "data": { "maxValue": 150, "bars": [ { "label": "2020", "value": 18, "valueLabel": "18B" }, { "label": "2022", "value": 74, "valueLabel": "74B" }, { "label": "2024", "value": 131, "valueLabel": "131B" } ] } }}}

Neobanks jaise **Jupiter, Fi, aur Niyo** bhi aa gaye hain jo completely digital banking offer karte hain.

Slide karke dekho India mein UPI ka power:`,
        imagePrompt: "Digital payment revolution in India, UPI QR code scanning on smartphone, modern fintech illustration, vibrant blue and green gradient, tech style",
        color: "#3B82F6",
        emoji: "📱",
        interactiveType: 'calculator',
        calcData: {
          calcType: 'compounding',
          formula: 'none',
          inputs: [
            { label: 'Yearly Transactions (Billions)', min: 1, max: 200, defaultValue: 131, step: 1, unit: 'B' }
          ],
        }
      },
      {
        id: "1-1-4",
        topicId: "1-1",
        topicTitle: "Money Kya Hai",
        cardIndex: 4,
        totalCardsInTopic: 6,
        title: "Money Ke 5 Main Functions",
        content: `Paisa sirf kharch karne ke liye nahi hota. Iske 5 super-powers hain:

{{visual: { "type": "timeline", "data": { "events": [ { "year": "1. Medium of Exchange", "title": "Buy stuff", "description": "Chai ke liye ₹20 dena ☕" }, { "year": "2. Unit of Account", "title": "Measure value", "description": "Phone ₹15,000 ka hai 📱" }, { "year": "3. Store of Value", "title": "Save it", "description": "Bank mein ₹5k rakhna 🏦" }, { "year": "4. Deferred Payment", "title": "Pay later", "description": "₹1k ki monthly EMI 💸" }, { "year": "5. Transfer of Value", "title": "Send anywhere", "description": "GPay to Friend 📲" } ] } }}}

**Most Liquid Asset** — Delhi se Mumbai 2 second mein pahunch jaata hai. Real estate ya gold mein yeh flexibility nahi hai.`,
        imagePrompt: "Five functions of money illustrated as icons, medium of exchange, unit of account, store of value, deferred payment, transfer of value, clean modern infographic, blue theme",
        color: "#3B82F6",
        emoji: "⚡"
      },
      {
        id: "1-1-5",
        topicId: "1-1",
        topicTitle: "Money Kya Hai",
        cardIndex: 5,
        totalCardsInTopic: 6,
        title: "Inflation: Chupta Hua Chor 📉",
        content: `Aaj ke \`₹100\` ki value 5 saal baad \`₹100\` nahi rahegi. Isse kehte hain **Inflation** (Mehangai).

{{visual: { "type": "barchart", "data": { "maxValue": 100, "bars": [ { "label": "Today", "value": 100, "valueLabel": "₹100" }, { "label": "1 yr", "value": 94, "valueLabel": "₹94" }, { "label": "3 yr", "value": 84, "valueLabel": "₹84" }, { "label": "5 yr", "value": 75, "valueLabel": "₹75" }, { "label": "10 yr", "value": 56, "valueLabel": "₹56" } ] } }}}

**Real Example**: Rahul ne ₹5,000 ka breakdown kiya — ₹2,500 rent, ₹1,500 khana, ₹500 transport, ₹500 recharge. Phir samajh aaya ki ₹5,000 mein kitni purchasing power hai. Paisa sirf ek number nahi, yeh **purchasing power ka representation** hai.

Calculater use karke dekho ki mehangai tumhare paise ko kaise khati hai:`,
        imagePrompt: "Purchasing power comparison concept, Indian rupee notes shrinking over time, inflation visualization, warm orange and red warning tones, educational illustration",
        color: "#3B82F6",
        emoji: "📉",
        interactiveType: 'calculator',
        calcData: {
          calcType: 'inflation',
          formula: 'none',
          inputs: [
            { label: 'Current Amount', min: 100, max: 100000, defaultValue: 1000, step: 100, unit: '₹' },
            { label: 'Inflation Rate (%)', min: 1, max: 15, defaultValue: 6, step: 0.5, unit: '%' },
            { label: 'Years', min: 1, max: 30, defaultValue: 10, step: 1, unit: 'Y' }
          ]
        }
      },
      {
        id: "1-1-6",
        topicId: "1-1",
        topicTitle: "Money Kya Hai",
        cardIndex: 6,
        totalCardsInTopic: 6,
        title: "🚨 MISSION: Wallet Audit",
        content: `🚨 **TODAY'S MISSION**

Bhai, gyaan toh le liya, ab action ki baari hai!

- [ ] Apne UPI apps (GPay/PhonePe) kholo.
- [ ] Last 5 transactions check karo.
- [ ] Dekho ki kitna 'Need' tha aur kitna 'Want'.
- [ ] Ek notebook ya app mein aaj ka kharcha likho.

**Pro Tip**: Paisa sirf ek number nahi — yeh tumhari purchasing power hai. Har ₹100 ki value samjho aur protect karo!`,
        imagePrompt: "Young Indian student Rahul calculating expenses on paper in a small city room, realistic slice of life illustration, warm domestic lighting, emotional storytelling style",
        color: "#3B82F6",
        emoji: "🧑"
      }
    ]
  },
  {
    id: "1-2",
    title: "Income Kya Hai — Har Rupye Ka Source",
    emoji: "💰",
    color: "#2563eb",
    description: "Income ka simple matlab hai — tumhare paas aane wala paisa. Jo bhi source se paisa aata hai, woh income hai.",
    cards: [
      {
        id: "1-2-1",
        topicId: "1-2",
        topicTitle: "Income Kya Hai",
        cardIndex: 1,
        totalCardsInTopic: 5,
        title: "Active vs Passive Income",
        content: `**Active Income**: Kaam karo toh paisa aayega. (Job, Tuition)
**Passive Income**: Ek baar mehnat, baar baar paisa. (YouTube, SIP, Rent)

Student aur Bhaiya ki baatcheet se samjho:

**Student**: Bhaiya, main part-time job karun ya YouTube?

**Bhaiya**: Active income (job) turant paisa degi, par Passive (YouTube) long term wealth degi.

**Student**: Toh dono kar sakte hain?

**Bhaiya**: Best strategy! Active se bills bharo, Passive build karke financial freedom paao.

{{visual: { "type": "comparison", "data": { "left": { "title": "Active Income", "items": ["Requires your time", "Stops when you stop", "Cafe job, Tuitions"] }, "right": { "title": "Passive Income", "items": ["Works while you sleep", "Builds long-term wealth", "YouTube, Dividends"] } } }}}`,
        imagePrompt: "Split comparison of active vs passive income, left side person working hard at desk, right side person relaxing while money flows in, modern illustration, green and gold tones",
        color: "#2563eb",
        emoji: "⚡",
        interactiveType: 'none'
      },
      {
        id: "1-2-2",
        topicId: "1-2",
        topicTitle: "Income Kya Hai",
        cardIndex: 2,
        totalCardsInTopic: 5,
        title: "Myth-Buster: Side Hustle 🤑",
        content: `Log bolte hain student life mein sirf padhai karni chahiye... Par kya yeh sach hai?

**Myth**: Students ko sirf padhai karni chahiye, paise kamana distraction hai.

**Sach**: Aaj ki duniya mein financial independence jaldi shuru karna ek 'Life Skill' hai. Freelancing ya part-time job se tum real world problems solve karna seekhte ho.

**Best Strategy**: 2-3 income streams maintain karo — ek stable (stipend/pocket money), ek variable (freelancing/gig), aur ek passive build karo (YouTube/blogging/SIP).`,
        imagePrompt: "Indian student working multiple gigs - laptop freelancing, tutoring, food delivery, diverse income sources, modern illustration style, green money theme",
        color: "#2563eb",
        emoji: "📋",
        interactiveType: 'myth_buster',
        quizData: {
          question: "MYTH: Students ko sirf padhai karni chahiye, paise kamana distraction hai.",
          options: ["Sahi baat hai!", "Galat, skill milti hai!"],
          correctAnswerIndex: 1,
          explanation: "Aaj ki duniya mein financial independence jaldi shuru karna ek 'Life Skill' hai. Freelancing ya part-time job se tum real world problems solve karna seekhte ho."
        }
      },
      {
        id: "1-2-3",
        topicId: "1-2",
        topicTitle: "Income Kya Hai",
        cardIndex: 3,
        totalCardsInTopic: 5,
        title: "15 Real Income Sources for Students",
        content: `Paisa kamane ke bahut tareeqe hain yaar:

| Source | Monthly Income | Type |
| :--- | :--- | :--- |
| **Pocket Money** | ₹500 - ₹5,000 | Stable |
| **Part-time Tuition** | ₹2,000 - ₹8,000 | Active |
| **Cafe Job** | ₹4,000 - ₹8,000 | Active |
| **Delivery Gig** | ₹6,000 - ₹15,000 | Active |
| **Freelance Coding** | ₹5,000 - ₹50,000 | Active |
| **Freelance Design** | ₹3,000 - ₹30,000 | Active |
| **Freelance Writing** | ₹2,000 - ₹20,000 | Active |
| **Scholarship** | ₹1,000 - ₹25,000 | Stable |
| **Research Stipend** | ₹8,000 - ₹25,000 | Stable |
| **YouTube Ad** | ₹500 - ₹50,000 | Passive |
| **Affiliate Marketing** | ₹500 - ₹20,000 | Passive |
| **Internship Stipend** | ₹5,000 - ₹25,000 | Active |
| **Event Photography** | ₹3,000 - ₹15,000 | Active |
| **Data Entry / Freelance** | ₹3,000 - ₹10,000 | Active |
| **Campus Ambassador** | ₹2,000 - ₹8,000 | Active |

**Regular vs Irregular Income**: Freelancer ka income har mahine different hota hai — kabhi ₹30,000, kabhi ₹5,000, kabhi ₹0. Aise mein "buffer month system" chahiye (Module 2 mein detail).`,
        imagePrompt: "Multiple income streams flowing into a student's wallet, coins and notes from different sources, fresh green color scheme, modern flat illustration",
        color: "#2563eb",
        emoji: "💵"
      },
      {
        id: "1-2-4",
        topicId: "1-2",
        topicTitle: "Income Kya Hai",
        cardIndex: 4,
        totalCardsInTopic: 5,
        title: "🚨 MISSION: Income Hunt",
        content: `🚨 **TODAY'S MISSION**

Apne skills ki list banao aur dekho tum kahan se \`₹1,000\` extra kama sakte ho.

- [ ] Canva / Design tools seekho.
- [ ] Upwork ya Fiverr pe profile dekho.
- [ ] Apne neighborhood mein tuition ki demand check karo.
- [ ] Purani books ya gadgets becho (OLX/Cashify).
- [ ] YouTube channel idea pe kaam shuru karo (passive income build karo).

**Goal**: Is mahine kam se kam \`₹1,000\` extra kamao — phir use seedha savings mein daalo!`,
        imagePrompt: "Student juggling three income streams - stable job, freelance laptop, passive investment growing, balanced lifestyle, modern illustration, vibrant green and gold",
        color: "#2563eb",
        emoji: "🎯"
      },
      {
        id: "1-2-5",
        topicId: "1-2",
        topicTitle: "Income Kya Hai",
        cardIndex: 5,
        totalCardsInTopic: 5,
        title: "⚠️ Income Ke Baare Mein Common Galtiyan",
        content: `⚠️ **YAHAN PE LOG GALTI KARTE HAIN**

1. **Income sirf salary samajhna** — Scholarship, freelance, passive income bhi income hain. Total income calculate karo.
2. **Side hustle ko distraction samajhna** — Skill + paisa dono milta hai.
3. **Single income pe depend karna** — 1 income source = 1 point of failure. 2-3 streams banao.
4. **Passive income ignore karna** — "Abhi se kya zaroorat" soch ke miss kar dete hain. YouTube, SIP, digital products — early start = max compounding.
5. **Income badhe toh expenses bhi badha dena** — "Lifestyle inflation" trap. Salary ₹5,000 se ₹15,000 hui? Savings ₹1,000 se ₹3,000 karo, expenses ₹4,000 se ₹12,000 mat badhao.

**Rule**: Active + Passive = Financial Freedom ka formula.`,
        imagePrompt: "Warning sign next to a stack of coins, red caution theme with green accents, modern flat illustration",
        color: "#2563eb",
        emoji: "⚠️"
      }
    ]
  },
  {
    id: "1-3",
    title: "Expense Kya Hai — Paisa Kahan Ja Raha Hai",
    emoji: "💸",
    color: "#EF4444",
    description: "Paisa nikalna expense hai. Fixed, variable, needs, wants — sab expenses ek jaise nahi hote.",
    cards: [
      {
        id: "1-3-1",
        topicId: "1-3",
        topicTitle: "Expense Kya Hai",
        cardIndex: 1,
        totalCardsInTopic: 4,
        title: "Fixed Expenses — Har Mahine Same",
        content: `Fixed expenses woh hain jo har mahine same rehte hain. Inhe control karna mushkil hai, lekin predict karna aasan.

**Common Fixed Expenses (Student):**

| Category | Amount (₹) | Notes |
| :--- | :--- | :--- |
| Hostel/PG Rent | ₹3,000 - ₹8,000 | Single ya double sharing pe depend |
| Mess/Food Tiffin | ₹2,500 - ₹4,000 | Mess join kiya toh fixed |
| College Fees (EMI) | ₹2,000 - ₹10,000 | Education loan EMI ya installment |
| Phone Recharge | ₹199 - ₹599 | Prepaid plan — data + calls |
| Transport Pass | ₹500 - ₹2,000 | Bus/Metro monthly pass |
| Insurance Premium | ₹400 - ₹1,500 | Health ya term insurance |
| WiFi/Broadband | ₹500 - ₹1,000 | Shared ya individual |
| Subscription (Netflix etc.) | ₹149 - ₹649 | Monthly auto-debit wale plans |

**Rule**: Fixed expenses pehle budget mein fix karo — yeh "non-discretionary" hain, bina pay kiye reh nahi sakte.`,
        imagePrompt: "Calendar with recurring expense icons, fixed monthly bills illustrated, red and white theme, clean financial infographic",
        color: "#EF4444",
        emoji: "📌"
      },
      {
        id: "1-3-2",
        topicId: "1-3",
        topicTitle: "Expense Kya Hai",
        cardIndex: 2,
        totalCardsInTopic: 4,
        title: "Variable Expenses — Mahine Pe Depend",
        content: `Variable expenses mahine pe depend karte hain. Yahan control possible hai!

**Common Variable Expenses:**

| Category | Amount (₹) | Notes |
| :--- | :--- | :--- |
| Outside Food/Swiggy | ₹1,000 - ₹5,000 | Mess ke alawa jo khaya |
| Shopping/Clothes | ₹500 - ₹3,000 | Seasonal ya impulse |
| Entertainment/Movies | ₹200 - ₹2,000 | Weekend outings |
| Medical/Pharmacy | ₹0 - ₹2,000 | Unexpected illness |
| Books/Stationery | ₹200 - ₹1,000 | Semester start mein zyada |
| Travel/Trips | ₹0 - ₹5,000 | Long weekends |
| Gym/Sports | ₹500 - ₹2,000 | Monthly membership |
| Gifts/Events | ₹0 - ₹2,000 | Friends' birthdays |
| **Chai/Coffee Daily** | ₹300 - ₹1,500 | ₹20/chai × 30 din = ₹600 minimum! |
| Personal Care | ₹200 - ₹1,000 | Grooming, cosmetics |

⚠️ **Yahan log galti karte hain**: ₹50/day chai × 30 din = ₹1,500/mahine sirf chai pe! Yeh "invisible leak" hai.`,
        imagePrompt: "Variable expense icons scattered around a wallet, fluctuating amounts, red and orange tones, modern flat illustration",
        color: "#EF4444",
        emoji: "🎯"
      },
      {
        id: "1-3-3",
        topicId: "1-3",
        topicTitle: "Expense Kya Hai",
        cardIndex: 3,
        totalCardsInTopic: 4,
        title: "Needs vs Wants — 3-Question Test",
        content: `Har expense pe yeh **3 sawal pucho**:

1. **Kya bina iske reh sakte hain?**
2. **Kya cheaper option hai?**
3. **Kya abhi zaroori hai ya baad mein chalega?**

Agar 3 mein se 2 jawab "haan" hain, toh woh **WANT** hai, **NEED** nahi.

**Sample Scenarios:**

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
| Daily Starbucks coffee | **WANT** | ₹300/day = ₹9,000/month! |
| Public transport pass | **NEED** | Commute zaroori hai |
| iPhone 16 | **WANT** | ₹15,000 phone bhi kaam chala sakta hai |

**Gray Area**: Laptop CS student ke liye **NEED**, English literature student ke liye **WANT**. Gym medical condition pe **NEED**, six-pack abs ke liye **WANT**. Context matters!`,
        imagePrompt: "Decision tree flowchart with need vs want branches, red and green theme, clean modern infographic",
        color: "#EF4444",
        emoji: "🤔",
        interactiveType: 'choice_sim',
        choiceData: {
          scenario: "Tumhare paas ₹2,000 bache hain. iPhone 16 launch hua hai. Kya karoge?",
          choices: [
            {
              text: "EMI pe le leta hoon!",
              isCorrect: false,
              consequence: "Trap! ₹2,000 EMI + interest = future mein ₹2,500/month jaayega. Aur 6 mahine baad value aadhi ho jayegi."
            },
            {
              text: "Pehle saving mein daalu, phone baad mein.",
              isCorrect: true,
              consequence: "Smart! Existing phone kaam chala raha hai. ₹2,000 SIP mein daalo — 5 saal mein ₹2 lakh+ banega. Want ko postpone karo."
            }
          ]
        }
      },
      {
        id: "1-3-4",
        topicId: "1-3",
        topicTitle: "Expense Kya Hai",
        cardIndex: 4,
        totalCardsInTopic: 4,
        title: "Discretionary vs Non-Discretionary",
        content: `**Non-Discretionary** (bina pay kiye reh nahi sakte): Rent, fees, food, transport. Budget mein pehle inhe cover karo.

**Discretionary** (postpone kar sakte ho): Shopping, movies, expensive gadgets. Yeh baad mein socho.

**3-Question Test Practice:**
Tumhare paas ₹500 bache hain. Sunday hai. Dost party bula rahe hain, par kal phone ka recharge bhi khatam hone wala hai.

**Decision Tree:**
\`\`\`
Expense aaya → Kya bina iske reh sakte hain?
    ↓ NO → NEED → Cheaper option hai?
              ↓ YES → Woh lo
              ↓ NO → Abhi kharido
    ↓ YES → WANT → Kya abhi zaroori hai?
              ↓ NO → 48-hour rule → Baad mein socho
              ↓ YES → Budget mein hai?
                        ↓ YES → Kharido
                        ↓ NO → Postpone
\`\`\`

**Rule**: 48-hour rule lagao wants pe. Kuch bhi kharidne se pehle 48 ghante socho — 90% cheezein baad mein yaad bhi nahi rehti!`,
        imagePrompt: "Flowchart showing decision tree for expenses, red and green color coding, clean educational infographic",
        color: "#EF4444",
        emoji: "🌳"
      }
    ]
  },
  {
    id: "1-4",
    title: "Saving Kya Hai — Future Ke Liye Aaj Ka Tyag",
    emoji: "🏦",
    color: "#8B5CF6",
    description: "Saving matlab aaj kam kharcha karo, kal ke liye paise rakhna. 'Pay Yourself First' approach kaam karti hai!",
    cards: [
      {
        id: "1-4-1",
        topicId: "1-4",
        topicTitle: "Saving Kya Hai",
        cardIndex: 1,
        totalCardsInTopic: 4,
        title: "Pay Yourself First — Magic Approach",
        content: `Saving ka simple rule: **"Pehle Save Phir Spend"**, na ki "Spend Phir Save".

**"Jo Bacha Woh Save" approach fail kyun hoti hai?**
Kyunki usually kuch nahi bachta! Paisa nikalte rehta hai "invisible leaks" se.

**"Pay Yourself First" Approach:**
1. Income aaya → Pehle saving account mein transfer karo
2. Baaki se expenses chalao
3. Auto-debit setup karo — salary aate hi ₹1,000 auto-transfer

**Implementation Steps:**
- Step 1: Alag savings account kholo (same bank ya different)
- Step 2: Auto-debit instruction do
- Step 3: Date set karo (salary ke 1 din baad)
- Step 4: Bhool jao — System apne aap save karega

Yeh automate karne se "bhool jaane" ki problem solve ho jaati hai.`,
        imagePrompt: "Person paying themselves first, coins going into savings before expenses, purple and gold tones, modern financial illustration",
        color: "#8B5CF6",
        emoji: "✨"
      },
      {
        id: "1-4-2",
        topicId: "1-4",
        topicTitle: "Saving Kya Hai",
        cardIndex: 2,
        totalCardsInTopic: 4,
        title: "5 Saal Ka Mathematical Result 📊",
        content: `Dono approaches ka 5 saal ka comparison dekho — same income, alag result!

| Approach | Monthly Save | 5 Years Total | FD @ 6.5% |
| :--- | :--- | :--- | :--- |
| **A: Pay Yourself First** (Priya) | ₹2,000 | ₹1,20,000 | ~₹1,40,000 |
| **B: Spend Phir Save** (Amit) | ₹500 (avg) | ₹30,000 | ~₹35,000 |

Dono ki income same thi, lekin **₹1,05,000 ka farq** aa gaya! Sirf ₹1,500/month ka difference — ek pizza aur movie ka kharcha roko, aur ₹1 lakh bachao.

**10 Reasons Why Saving Zaroori Hai:**
1. Emergency kabhi bhi aa sakti hai (medical, job loss, device breakdown)
2. Financial stress reduce hota hai — "Paisa nahi hai" ki tension nahi rehti
3. Future goals achieve (bike, laptop, higher education)
4. Debt se bach sakte ho (₹50,000 loan @ 18% = ₹72,000+ total pay)
5. Independence milti hai — kisi ke aage haath nahi failana
6. Investment ke liye capital (SIP ₹100 se shuru)
7. Compounding ka faayda (jaldi start = zyada growth)
8. Habit banta hai (₹500 aaj → ₹5,000 kal)
9. Life choices open rehti hain (job chhodna, course change, city shift)
10. Peace of mind = mental health

**Rule**: Saving ≠ Kanjoosi. Saving = future ki planning. Kanjoosi = needs pe bhi paise nahi lagana.`,
        imagePrompt: "Comparison of two piggy banks growing at different rates over 5 years, purple theme, mathematical growth visualization",
        color: "#8B5CF6",
        emoji: "📊"
      },
      {
        id: "1-4-3",
        topicId: "1-4",
        topicTitle: "Saving Kya Hai",
        cardIndex: 3,
        totalCardsInTopic: 4,
        title: "Saving Ke 10 Barriers Aur Solutions",
        content: `Log saving shuru karte hain, lekin 10 common barriers se ruk jaate hain:

| Barrier | Solution |
| :--- | :--- |
| "Itna kam hai kya bachega" | ₹500 bhi shuru karo — ₹500/m × 5 yr = ₹30,000 minimum |
| "Friends spend karte hain, peer pressure" | Apna budget apna hai. ₹500/month outing limit fix karo |
| "Abhi toh young hain, baad mein karenge" | 20 pe start vs 30 pe = 10 saal compounding miss! ₹83 lakh ka loss |
| "Emergency aa gayi toh save kya karenge" | Emergency fund alag banao. Do buckets — emergency + savings |
| "Pata nahi kaise shuru karein" | Auto-debit setup karo. Bank form bharo, ₹1,000 auto-transfer |
| "Kharcha zyada hai" | Expense audit karo. Chai ₹50/day = ₹1,500/month! |
| "Loan le lenge emergency mein" | ₹50,000 loan @ 18% = ₹72,000+ total. Savings hoti toh bach jaata |
| "Investment risky hai, saving safe hai" | FD/RD safe options se start karo. SIP thoda baad mein |
| "Lifestyle inflation" | Salary ₹5k se ₹15k? Savings ₹1k se ₹3k karo, expenses ₹4k se ₹12k mat badhao |
| "Social media FOMO" | Instagram pe sab rich dikhte hain — reality: woh bhi EMI pe hain |

**Rule**: Start small. ₹500/month is better than ₹0/month. Habit banao, baaki automatic.`,
        imagePrompt: "Wall of obstacles with arrows breaking through, each barrier labeled, purple and gold theme, motivational illustration",
        color: "#8B5CF6",
        emoji: "🚧"
      },
      {
        id: "1-4-4",
        topicId: "1-4",
        topicTitle: "Saving Kya Hai",
        cardIndex: 4,
        totalCardsInTopic: 4,
        title: "🚨 MISSION: Auto-Debit Setup",
        content: `🚨 **TODAY'S MISSION**

Bhai, theory kaam nahi aayegi bina action ke. Aaj auto-debit setup karo!

- [ ] Apni bank app kholo (SBI/HDFC/Kotak/Jupiter).
- [ ] "Auto-Debit" ya "Standing Instruction" section dhundo.
- [ ] Ek date fix karo (salary/pocket money aane ke 1 din baad).
- [ ] Amount ₹500 se shuru karo (chhota lekin consistent).
- [ ] Savings account mein transfer set karo.

**Pro Tip**: Alag bank ka account kholo (Kotak 811 ya Jupiter — digital, zero balance). UPI mat link karo. "Out of sight, out of mind" actually kaam karta hai!

**Action**: ₹500 × 12 months = ₹6,000/year. 5 years = ₹30,000+ bina mehnat ke!`,
        imagePrompt: "Smartphone screen showing auto-debit setup confirmation, purple and green checkmarks, modern banking app illustration",
        color: "#8B5CF6",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "1-5",
    title: "Budget Kya Hai — Tumhari Financial Life Ka Roadmap",
    emoji: "📋",
    color: "#2563eb",
    description: "Budget banaana boring lagta hai, lekin yeh tumhari financial freedom ki pehli seedi hai.",
    cards: [
      {
        id: "1-5-1",
        topicId: "1-5",
        topicTitle: "Budget Kya Hai",
        cardIndex: 1,
        totalCardsInTopic: 4,
        title: "5 Real Budget Scenarios",
        content: `Budget sirf ameer logon ka kaam nahi. Dekho 5 alag logon ka budget:

| Person | Income | Issue |
| :--- | :--- | :--- |
| **Rohan** (no budget) | ₹15,000 | 15th tak paisa khatam. Friends se ₹5,000 udhaar. Month end = debt 😫 |
| **Priya** (with budget) | ₹10,000 | ₹2,000 savings, ₹5,000 needs, ₹3,000 wants. Month end = ₹2,000 bank mein 😊 |
| **Amit** (overspending) | ₹20,000 | ₹12,000 rent (alone), ₹5,000 food. Month end = zero savings |
| **Sneha** (smart budget) | ₹8,000 | ₹1,500 savings, ₹3,000 rent (shared), ₹2,000 food, ₹1,500 others. 1 saal mein laptop fund! |
| **Vikram** (no tracking) | varies | ₹500/month kahan jaata hai pata nahi. 1 saal mein ₹6,000 "kahan gaya pata nahi" |

**50/30/20 Rule — Magic Formula:**

| Income | Needs (50%) | Wants (30%) | Savings (20%) |
| :--- | :--- | :--- | :--- |
| ₹5,000 | ₹2,500 | ₹1,500 | ₹1,000 |
| ₹15,000 | ₹7,500 | ₹4,500 | ₹3,000 |
| ₹30,000 | ₹15,000 | ₹9,000 | ₹6,000 |

Calculator use karke dekho tumhari income kaise divide honi chahiye:`,
        imagePrompt: "Five different budget scenarios illustrated with characters, comparison table format, green theme, modern flat illustration",
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
        id: "1-5-2",
        topicId: "1-5",
        topicTitle: "Budget Kya Hai",
        cardIndex: 2,
        totalCardsInTopic: 4,
        title: "Zero-Based Budgeting — Har Rupye Ka Kaam",
        content: `**Zero-Based Budgeting** mein har rupye ka assignment hota hai — income minus expenses = **ZERO**.

Iska matlab yeh nahi ki sab spend karo, balki **savings bhi ek "expense" category hai**. Har rupye ko kaam diya jata hai — koi paisa adhoora nahi rehta.

**Example: ₹15,000 income ka Zero-Based Budget:**

{{visual: { "type": "piechart", "data": { "totalValue": 100, "centerText": "₹15,000", "centerSubtext": "Total Budget", "segments": [ { "label": "Rent", "value": 27, "color": "#EF4444" }, { "label": "Savings", "value": 20, "color": "#2563eb" }, { "label": "Food", "value": 17, "color": "#F59E0B" }, { "label": "Transport", "value": 10, "color": "#3B82F6" }, { "label": "Entertainment", "value": 10, "color": "#8B5CF6" }, { "label": "Others", "value": 16, "color": "#6B7280" } ] } }}}

**Budget Banaake 5 Faayde:**
1. Overspending control — pata chalta hai kahan zyada ho raha hai
2. Financial goals clear — laptop chahiye? ₹2,000/month savings category banao
3. Stress reduce — pata hai paisa kahan ja raha hai
4. Saving habit banti hai — auto-debit se discipline automatic
5. Future planning — 1 saal baad kitna hoga, calculate kar sakte ho`,
        imagePrompt: "Zero-based budget pie chart with every rupee allocated, green and gold tones, clean modern financial illustration",
        color: "#2563eb",
        emoji: "🎯"
      },
      {
        id: "1-5-3",
        topicId: "1-5",
        topicTitle: "Budget Kya Hai",
        cardIndex: 3,
        totalCardsInTopic: 4,
        title: "₹5,000 Income Breakdown Detail",
        content: `Dekho ₹5,000 mahine ka income detailed breakdown:

**Needs (₹2,500) — 50%:**
- ₹1,500 rent (shared PG)
- ₹800 mess food
- ₹200 transport (bus pass)

**Wants (₹1,500) — 30%:**
- ₹500 phone recharge
- ₹500 outing (limited)
- ₹500 personal care

**Savings (₹1,000) — 20%:**
- Auto-debit to RD
- ₹1,000 × 12 = ₹12,000/year
- SIP mein daalo toh ₹15,000+ ban jaata

⚠️ **Myth**: "Budget sirf kanjoos logon ke liye hai"
**Sach**: Budget aware logon ke liye hai. Kanjoosi = needs pe bhi paise nahi lagana. Budget = smart allocation.

⚠️ **Myth**: "₹3,000 mein budget nahi banta"
**Sach**: ₹3,000 mein bhi budget banta hai. ₹300 savings bhi budget hai.`,
        imagePrompt: "Detailed pie chart of 5000 rupee budget, green and blue color coding, clean infographic style",
        color: "#2563eb",
        emoji: "💡"
      },
      {
        id: "1-5-4",
        topicId: "1-5",
        topicTitle: "Budget Kya Hai",
        cardIndex: 4,
        totalCardsInTopic: 4,
        title: "🚨 MISSION: Budget Banao Aaj",
        content: `🚨 **TODAY'S MISSION**

Bhai, bina budget ke andhere mein chal rahe ho. Aaj ek simple budget banao:

- [ ] Apni monthly income likho (pocket money + part-time + freelance).
- [ ] Fixed expenses list karo (rent, mess, recharge — jo har mahine same).
- [ ] Variable expenses estimate karo (food, outing, shopping).
- [ ] 50/30/20 rule apply karo — Needs/Wants/Savings.
- [ ] Auto-debit setup karo savings ke liye.

**Pro Tip**: Budget rigid nahi, flexible hona chahiye. Life unpredictable hai. Har Sunday 15 minute budget review karo — kahan zyada ho gaya? Next month adjust karo.

**Action**: Budget living document hai. Banao, follow karo, adjust karo. Perfect banne ka wait mat karo — start today!`,
        imagePrompt: "Person creating a budget on a notebook with calculator, green and gold theme, focused and productive atmosphere",
        color: "#2563eb",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "1-6",
    title: "Financial Awareness — Kyun India Mein Missing Hai",
    emoji: "🧠",
    color: "#F59E0B",
    description: "India ki financial literacy rate sirf ~27% hai (NCFE survey), jabki world average ~52% hai. Yeh gap seekhna padta hai.",
    cards: [
      {
        id: "1-6-1",
        topicId: "1-6",
        topicTitle: "Financial Awareness",
        cardIndex: 1,
        totalCardsInTopic: 4,
        title: "Schools Mein Paise Ki Baat Kyun Nahi?",
        content: `India mein **76% Indian adults** basic financial concepts nahi samajhte (S&P Global Financial Literacy Survey). Shocking!

**Indian Schools Mein Paise Ki Baat Kyun Nahi Hoti — 5 Reasons:**

1. **Curriculum gap**: CBSE, ICSE, State boards mein financial literacy as a dedicated subject nahi hai. Economics padhte hain lekin personal finance nahi.
2. **Teacher training nahi**: Teachers khud financially literate nahi hain. Woh compound interest nahi samjha paayenge agar khud nahi samajhte.
3. **Exam focus**: Sirf marks-oriented education hai. "Yeh exam mein nahi aata" — isliye skip.
4. **Cultural taboo**: Paise ki baat karna "gair-maruazi" maana jaata hai. Teachers bhi uncomfortable hote hain.
5. **No practical application**: Theory padhate hain lekin budget banane, tax file karne, SIP shuru karne jaise practical skills nahi sikhate.

**Parents Se Paise Ki Baat Kyun Sharmaate Hain?**
Indian culture mein "paisa personal hai" maana jaata hai. Bachpan se sikhaya jaata hai ki "paise ki baat mat karo". Lekin jab tak baat nahi karoge, tab tak seekh nahi paayenge.

Start small — puchho **"Papa, humara monthly budget kaise chalta hai?"** Ya **"Mummy, yeh FD kaise kaam karti hai?"**`,
        imagePrompt: "Empty classroom with financial topics missing from blackboard, warm amber and brown tones, conceptual illustration",
        color: "#F59E0B",
        emoji: "🏫"
      },
      {
        id: "1-6-2",
        topicId: "1-6",
        topicTitle: "Financial Awareness",
        cardIndex: 2,
        totalCardsInTopic: 4,
        title: "Middle Class Mindset Myths — Todna Hai",
        content: `Indian middle class ke 5 myth jo todne hain:

| Myth | Sach |
| :--- | :--- |
| "Job safe hai, business risky" | Job bhi risky — 2023-24 mein tech sector mein 50,000+ layoffs hue. Stability illusion hai |
| "Investing gambling hai" | Informed investing research-based hai. SIP Nifty 50 = systematic wealth building, not gambling |
| "Paisa sirf kaam se aata hai" | Paisa paisa se bhi aata hai — compounding aur investing se. Warren Buffett ka 90% wealth 65+ ki umr mein aaya |
| "Loan lena paap hai" | Good debt wealth create karta hai — education loan, home loan. Bad debt (credit card shopping) paap hai |
| "Tax sirf ameer dete hain" | Salary pe TDS cut hota hai. ₹25,000/month salary pe bhi ITR file karna padta hai |

**Financial Awareness Build Karne Ke 10 Practical Steps:**
1. Roz 15 minute financial news padho (Economic Times, Moneycontrol)
2. YouTube pe Indian educators follow karo — CA Rachana Ranade, Ankur Warikoo, Pranjal Kamra
3. Har mahine apna bank statement analyze karo
4. Parents se ghar ka budget samjho
5. "Psychology of Money" by Morgan Housel padho (simplest)
6. "Paisa Vaisa with Anupam Gupta" podcast suno
7. Free NSE certification karo — "Financial Markets" course
8. College mein finance club join karo
9. Har naye investment pe research karo — blind mat karo
10. Apne peers se financial discussions karo — normalize karo topic`,
        imagePrompt: "Hammer breaking myths like stone tablets, amber and gold theme, motivational financial illustration",
        color: "#F59E0B",
        emoji: "🔨"
      },
      {
        id: "1-6-3",
        topicId: "1-6",
        topicTitle: "Financial Awareness",
        cardIndex: 3,
        totalCardsInTopic: 4,
        title: "Common Misconceptions — Module 1 Summary",
        content: `**COMMON MISCONCEPTIONS (Module 1)**

⚠️ **"Budget sirf ameer logon ke liye hai"**
→ Galat! Budget sabke liye hai, especially kam income walon ke liye. ₹3,000 pe bhi budget banta hai.

⚠️ **"Saving matlab kanjoosi hai"**
→ Galat! Saving matlab future ki planning. Kanjoosi = needs pe bhi paise nahi lagana. Saving = wants postpone karna.

⚠️ **"Inflation se koi farq nahi padta chhote amounts pe"**
→ Galat! 6% inflation pe tumhari purchasing power har saal ghatati hai, chahe ₹100 ho ya ₹1 lakh.

⚠️ **"Paise ki baat karne se log judge karenge"**
→ Galat! Financial awareness strength hai, weakness nahi. Jo log judge karte hain, woh khud financially illiterate hain.

⚠️ **"Student ko investing nahi karni chahiye"**
→ Galat! Jaldi start = zyada compounding. SIP ₹100 se shuru ho sakti hai. Age 20 se start = age 30 se 10x better.

**KEY TAKEAWAYS:**
- ✅ Paisa purchasing power hai, sirf paper nahi — value samjho aur protect karo
- ✅ Pay Yourself First — income aaya, pehle save, baaki se chalao
- ✅ 50/30/20 rule follow karo — needs, wants, savings ka balance
- ✅ Needs vs Wants ka farq samjho — yeh budgeting ka foundation hai
- ✅ Financial literacy seekhna zaroori hai — 15 min/day shuru karo`,
        imagePrompt: "Checkmark and cross icons over various financial myths, amber and red theme, clean infographic",
        color: "#F59E0B",
        emoji: "🔍"
      },
      {
        id: "1-6-4",
        topicId: "1-6",
        topicTitle: "Financial Awareness",
        cardIndex: 4,
        totalCardsInTopic: 4,
        title: "🚨 MISSION: Financial Literacy Journey",
        content: `🚨 **TODAY'S MISSION — Financial Literacy Journey Shuru**

Bhai, financial literacy ek din ka kaam nahi, ek journey hai. Aaj se shuru karo:

- [ ] YouTube pe ek Indian financial educator subscribe karo (CA Rachana Ranade, Ankur Warikoo, ya Pranjal Kamra).
- [ ] "Psychology of Money" by Morgan Housel book order karo ya library se borrow karo.
- [ ] Parents se ek financial sawal pucho — "Papa, humara FD/RD kaise kaam karta hai?"
- [ ] Economic Times ya Moneycontrol app download karo, roz 15 min padho.
- [ ] Apne 2 doston ke saath financial discussion karo — topic normalize karo.

**Bonus**: Apni financial literacy journey ek notebook mein likho. Har week ek naya concept seekho aur apply karo.

**Aage Ka Safar**: Ab jab paise ki basic samajh aa gayi, toh chaliye Module 2 mein budgeting ko real life mein lagate hain — student budget templates, expense tracking, aur practical tips ke saath! 🚀`,
        imagePrompt: "Student reading financial books with a notebook, warm amber lighting, growth and learning theme, modern illustration",
        color: "#F59E0B",
        emoji: "📚"
      }
    ]
  }
];

// Get all cards in flat array
export function getAllCards() {
  return module1Topics.flatMap(topic => topic.cards);
}

// Get total card count
export function getTotalCardCount() {
  return getAllCards().length;
}

// Get topic by id
export function getTopicById(id) {
  return module1Topics.find(t => t.id === id);
}

// Get cards by topic
export function getCardsByTopic(topicId) {
  const topic = getTopicById(topicId);
  return topic ? topic.cards : [];
}
