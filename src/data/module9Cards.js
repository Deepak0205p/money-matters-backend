export const module9Topics = [
  {
    id: "9-1",
    title: "Insurance Basics — Apka Risk Shield 🛡️",
    emoji: "🛡️",
    color: "#3B82F6",
    description: "Insurance boring nahi, life-saving tool hai. Samjho kaise chota premium apko bade bills se bacha sakta hai!",
    cards: [
      {
        id: "9-1-1",
        topicId: "9-1",
        topicTitle: "Insurance Basics",
        cardIndex: 1,
        totalCardsInTopic: 6,
        title: "Dilemma: Bill ya Premium? 🏥",
        content: `Socho ek medical emergency aati hai aur hospital ka bill \`₹2 Lakh\` banta hai.

Tumhare paas do raste hain. Tum kaunsa chunoge?

**Insurance Funda Clear Hai:**
Chhota regular loss (premium) accept karo taaki bada unexpected loss se bach sako. Yeh gambling nahi hai — yeh risk management hai.

**Real Indian Example**: Sneha, 22, college student, ne health insurance liya ₹6,000/year ka. 6 mahine baad dengue hua — hospital bill ₹1,20,000. Insurance ne ₹1,10,000 cover kiya (₹10,000 deductible). Sneha ke paas savings thi sirf ₹30,000 — bina insurance ke woh personal loan leti ya parents pe bojh aata. **Insurance ne usko debt se bachaya ₹6,000 ke premium ke badle.**`,
        imagePrompt: "Person standing between a giant hospital bill and a small shield labeled 'Insurance', blue theme, intense decision making atmosphere, modern illustration",
        color: "#3B82F6",
        emoji: "🤔",
        interactiveType: 'choice_sim',
        choiceData: {
          scenario: "Dengue ho gaya, hospital bill ₹2 Lakh! Kya taiyari hai?",
          choices: [
            {
              text: "Apni saari savings de dunga.",
              isCorrect: false,
              consequence: "Dukh! Tumhari 3 saal ki mehnat (savings) 3 din mein zero ho gayi. Ab Zero se shuru karna padega."
            },
            {
              text: "Insurance company bill bharegi!",
              isCorrect: true,
              consequence: "Smart! Tumne saal ka ₹6k premium diya tha, aur company ne ₹2 Lakh ka bill bhar diya. Tumhari savings bilkul safe hain!"
            }
          ]
        }
      },
      {
        id: "9-1-2",
        topicId: "9-1",
        topicTitle: "Insurance Basics",
        cardIndex: 2,
        totalCardsInTopic: 6,
        title: "Term vs Endowment: Asli Sach 💡",
        content: `Life Insurance do tarah ki hoti hai. Ek jo apko 'Dara' ke bechi jati hai, aur ek jo asli 'Protection' deti hai.

| Feature | Term Insurance | Endowment (LIC/Mix) |
| :--- | :--- | :--- |
| **Cover** | ₹1 Crore 🚀 | ₹5 - ₹10 Lakh 📉 |
| **Premium** | ₹500 - ₹800/m | ₹3,000 - ₹5,000/m |
| **Maturity** | Zero (Pure Safety) | Chota amount (5-6%) |
| **Returns** | N/A (protection) | 4-6% p.a. guaranteed |
| **Best For** | Income replacement | Forced savings (not recommended) |
| **Recommendation** | **BEST — buy this!** | **Avoid — returns low, cover low** |

**Rule**: Insurance ko investment ke saath mix mat karo. **Term Plan + SIP = Best Combo!**

**Comparison Example (25 years, ₹10,000/month budget):**

| Option | Cover | 20 Years Later |
| :--- | :--- | :--- |
| **Endowment** ₹10,000/m | ₹5 lakh | ~₹46 lakh + ₹5 lakh cover |
| **Term Plan ₹500/m + SIP ₹9,500/m** | ₹50 lakh | ~₹85 lakh SIP corpus + ₹50 lakh cover |

Option B mein **85% zyada wealth + 10x zyada protection**. Clear winner? Term + SIP.`,
        imagePrompt: "Two scales, one heavily weighted with a large shield, the other with a small bag of coins, clear comparison, blue and white colors",
        color: "#3B82F6",
        emoji: "📊",
        interactiveType: 'none'
      },
      {
        id: "9-1-3",
        topicId: "9-1",
        topicTitle: "Insurance Basics",
        cardIndex: 3,
        totalCardsInTopic: 6,
        title: "Chat: Health Insurance Ka Funda 📱",
        content: `Priya aur Bhaiya discuss kar rahe hain kyun 'Young' age mein insurance lena chahiye.

**Priya**: Bhaiya, main abhi 21 ki hoon, ekdum fit! Mujhe insurance ki kya zaroorat?

**Bhaiya**: Priya, accident ya viral infections age dekh ke nahi aate. Plus, abhi premium sasta milega!

**Priya**: Sasta matlab kitna?

**Bhaiya**: Abhi logi toh ₹5,000/year, 35 pe logi toh wahi ₹15,000 ka hoga. Jaldi lena matlab paisa aur tension dono ki bachat!

**Why Buy Insurance Early?**
1. **Premium kam** — 21 pe ₹5,000/year, 35 pe ₹15,000/year (same cover)
2. **Waiting period jaldi khatam** — Pre-existing diseases ka 2-4 saal wait
3. **Healthier** — Pre-existing conditions kam, easier approval
4. **Longer coverage** — Jaldi start = zyada years of protection
5. **Mental peace** — "Paisa nahi hai" ki tension nahi rehti`,
        imagePrompt: "Two people chatting, one looks healthy and active, the other holding an insurance card, blue and gold theme, modern flat style",
        color: "#3B82F6",
        emoji: "💬",
        interactiveType: 'none'
      },
      {
        id: "9-1-4",
        topicId: "9-1",
        topicTitle: "Insurance Basics",
        cardIndex: 4,
        totalCardsInTopic: 6,
        title: "Myth-Buster: Waste of Money? 🕵️‍♂️",
        content: `Log sochte hain ki agar claim nahi kiya toh insurance ka premium 'Waste' ho gaya.

**Myth**: Maine 5 saal se premium bhara, kuch nahi hua. Mere paise waste ho gaye!
**Sach**: Insurance ek 'Service' hai, investment nahi. Tumne 5 saal 'Peace of Mind' kharida ki agar kuch hua toh tum barbaad nahi hoge. Jaise car ki seatbelt — kya tum chaho ge ki accident ho taaki seatbelt ka 'Use' ho jaye? Nahi na!`,
        imagePrompt: "Person throwing a small coin into a fire, but the fire is actually a protective dome over a house, blue background, conceptual art",
        color: "#3B82F6",
        emoji: "🕵️‍♂️",
        interactiveType: 'myth_buster',
        quizData: {
          question: "MYTH: Maine 5 saal se premium bhara, kuch nahi hua. Mere paise waste ho gaye!",
          options: ["Haan, wapas milne chahiye!", "Galat, peace of mind mila!"],
          correctAnswerIndex: 1,
          explanation: "Insurance ek 'Service' hai, investment nahi. Tumne 5 saal 'Peace of Mind' kharida ki agar kuch hua toh tum barbaad nahi hoge. Jaise car ki seatbelt — kya tum chaho ge ki accident ho taaki seatbelt ka 'Use' ho jaye? Nahi na!"
        }
      },
      {
        id: "9-1-5",
        topicId: "9-1",
        topicTitle: "Insurance Basics",
        cardIndex: 5,
        totalCardsInTopic: 6,
        title: "Term Insurance Calculator 🧮",
        content: `Dekho kaise ek 'Pure Term Plan' apko aur apki family ko secure karta hai bina apka budget bigade.

Slide karke dekho \`₹1 Crore\` ka cover kitne mein milega:`,
        imagePrompt: "Shield with a giant '1 Crore' written on it, person standing confidently behind it, blue and silver theme, heroic finance concept",
        color: "#3B82F6",
        emoji: "🧮",
        interactiveType: 'calculator',
        calcData: {
          calcType: 'emi',
          formula: 'none',
          inputs: [
            { label: 'Target Cover (Lakhs)', min: 10, max: 200, defaultValue: 50, step: 10, unit: 'L' },
            { label: 'Your Age', min: 18, max: 40, defaultValue: 22, step: 1, unit: 'Y' }
          ]
        }
      },
      {
        id: "9-1-6",
        topicId: "9-1",
        topicTitle: "Insurance Basics",
        cardIndex: 6,
        totalCardsInTopic: 6,
        title: "🚨 MISSION: Policy Audit",
        content: `🚨 **TODAY'S MISSION**

Bhai, apne ghar walon ko financial shock se bachao!

- [ ] Apne parents se pucho ki kya apka 'Health Insurance' hai?
- [ ] Agar hai, toh dekho ki kya usme apka naam (dependent) included hai?
- [ ] Check karo ki total 'Sum Insured' kitna hai (Minimum ₹5 Lakh recommended).
- [ ] Agar insurance nahi hai, toh aaj hi PolicyBazaar pe options check karo.

**Quick Action Items:**
- Health insurance: ₹5L-₹10L cover for family
- Term plan (agar parents depend hain): ₹50L cover at age 22 = ₹400/month
- Vehicle insurance (agar bike/car hai): Comprehensive mandatory
- Compare on PolicyBazaar/Coverfox for best rates`,
        imagePrompt: "Person checking a paper document with parents in the background, warm and responsible atmosphere, blue accents, realistic style",
        color: "#3B82F6",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "9-2",
    title: "Health Insurance — Complete Guide for Students",
    emoji: "🏥",
    color: "#EF4444",
    description: "Health insurance sabse zaroori insurance hai. Student options, claim process, common rejection reasons.",
    cards: [
      {
        id: "9-2-1",
        topicId: "9-2",
        topicTitle: "Health Insurance",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "Student Health Insurance Options",
        content: `Health insurance sabse zaroori insurance hai kyunki medical costs India mein rocket ki tarah ud rahi hain.

**Hospital Costs Reality Check:**
- Private hospital mein ICU: ₹15,000-₹50,000 per day
- Normal delivery: ₹30,00,000-₹1,00,000
- Appendix surgery: ₹40,000-₹1,60,000
- Angioplasty: ₹2,00,000-₹5,00,000

Yeh amounts middle class family ke liye devastating ho sakti hain.

**Student Ke Liye Health Insurance Options:**

1. **Individual health plan** — ₹5 lakh cover, age 21-25, premium ₹5,000-₹8,000/year
   - Plans: Star Health Young Star, HDFC Ergo Optima Secure, SBI General Super Health

2. **Parents ke floater plan mein add** — Family floater mein already covered ho toh alag plan zaroori nahi. Lekin check karo sum insured kaafi hai ya nahi.

3. **Student-specific plans** — Some insurers offer campus-based plans, lower premiums, basic coverage. Check with college.

4. **Employer-provided** — Job lagne pe company deti hai. Lekin yeh temporary hai — job chhod = insurance khatam.

**Individual vs Floater Plan Comparison:**

| Feature | Individual Plan | Family Floater |
| :--- | :--- | :--- |
| **Cover utilization** | Full sum insured sirf aapke liye | Sab members share karte hain |
| **Premium (age 21-25)** | ₹5,000-₹8,000/year | ₹12,000-₹20,000/year (2+1) |
| **Best for** | Students away from home | Families staying together |
| **Risk covered** | Only your health | Agar ek member bada claim kare, dusre covered ka cover kam |
| **Flexibility** | Aapki marzi se customize | Family ke overall needs pe depend |

**5 Zaroori Cheezein Check Karo Before Buying:**

1. **Waiting period for pre-existing diseases** — 2-4 saal hoti hai. Agar koi condition hai (diabetes, thyroid, PCOD) toh yeh critical hai. Sab conditions declare karo, chhupane pe claim reject ho sakti hai.

2. **Room rent capping** — Bahut plans mein room rent 1-2% of sum insured tak limit hai. ₹5 lakh policy pe ₹5,000/night cap. Better rooms ke liye no-limit wala plan lo.

3. **Cashless network hospitals** — Aapke city/college area mein insurance company ke network hospitals hain ya nahi. Cashless = aapko paisa nahi dena, hospital directly company se bill bharega.

4. **Co-pay clause** — Kuch plans mein 10-20% aapko khud bharna padta hai. ₹5 lakh bill pe 20% co-pay = ₹1 lakh aapki jeb se. Co-pay avoid karo ya kam rakho.

5. **Restoration benefit** — Agar ek baar claim kar liya aur sum insured khatam ho gaya, toh renewal hota hai ya nahi? Restoration benefit wala plan lo — yeh critical hai.`,
        imagePrompt: "Health insurance comparison with hospital icons, red theme, medical financial illustration",
        color: "#EF4444",
        emoji: "🏥"
      },
      {
        id: "9-2-2",
        topicId: "9-2",
        topicTitle: "Health Insurance",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "Hospital Costs + Claim Process + Mission",
        content: `**Average Treatment Costs (Government vs Private):**

| Treatment | Government | Private |
| :--- | :--- | :--- |
| Dengue Treatment | ₹10,000-₹30,000 | ₹50,000-₹2,00,000 |
| Appendix Surgery | ₹15,000-₹40,000 | ₹40,000-₹1,60,000 |
| Cataract Surgery (per eye) | ₹8,000-₹30,000 | ₹30,000-₹1,40,000 |
| Normal Delivery | ₹5,000-₹15,000 | ₹30,000-₹1,00,000 |
| Angioplasty | ₹1,00,000-₹2,00,000 | ₹2,00,000-₹5,00,000 |
| ICU per day | ₹3,000-₹5,000 | ₹15,000-₹50,000 |
| Knee Replacement | ₹1,50,000-₹3,00,000 | ₹3,00,000-₹8,00,000 |

**Top Health Insurance Plans for Students (Verify current premiums):**

| Plan | Cover | Premium (Age 21-25) | Special |
| :--- | :--- | :--- | :--- |
| Star Young Star | ₹5 lakh | ₹5,500-₹7,000 | No co-pay, restoration |
| HDFC Ergo Optima Secure | ₹5 lakh | ₹6,000-₹8,000 | Secure restore benefit |
| Niva Bupa ReAssure | ₹5 lakh | ₹5,000-₹7,000 | Unlimited restore |
| ICICI Lombard Complete Health | ₹5 lakh | ₹4,500-₹6,500 | OPD cover included |

**Claim Process:**

**Cashless Claim**:
1. Hospital mein admit → TPA desk pe insurance card do
2. Pre-authorization → Treatment
3. Hospital directly company se lega
4. Tumhe ₹0 dena (except co-pay/deductible)

**Reimbursement Claim**:
1. Pehle aap pay karo
2. Discharge ke baad bills + reports submit karo
3. Company 15-30 days mein process
4. Amount bank mein aata hai

**Common Claim Rejection Reasons:**
1. Pre-existing disease chhupana
2. Waiting period mein claim
3. Non-network hospital (cashless nahi)
4. Policy lapse — time pe renew nahi kiya
5. Alcohol-related injury
6. Cosmetic surgery (non-medical)
7. Adventure sports injury (usually excluded)

**🚨 MISSION: Health Insurance Plan**

- [ ] Compare 3-4 plans on PolicyBazaar
- [ ] ₹5L-₹10L cover choose karo (₹10L recommended)
- [ ] Cashless network hospitals in your city check karo
- [ ] Co-pay avoid ya kam rakho
- [ ] Restoration benefit wala plan lo
- [ ] Pre-existing conditions declare karo (honestly!)
- [ ] Auto-renewal on karo (lapse prevention)

**Rule**: ₹5,000-8,000/year premium = ₹5-10 lakh protection. Best ROI for any insurance!`,
        imagePrompt: "Health insurance claim process flowchart with hospital icons, red theme, medical financial infographic",
        color: "#EF4444",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "9-3",
    title: "Life Insurance (Term Plan) + Vehicle Insurance",
    emoji: "🚗",
    color: "#F59E0B",
    description: "Term plan best for life insurance. Vehicle insurance legally mandatory. Complete guide.",
    cards: [
      {
        id: "9-3-1",
        topicId: "9-3",
        topicTitle: "Term + Vehicle Insurance",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "Term Plan + Premium Comparison",
        content: `**Life Insurance Ka Matlab:**
Agar policyholder ki death ho jaye toh family ko sum insured milta hai. Student ke liye yeh itna critical nahi hai agar koi dependents nahi hain, lekin agar parents aapke pe depend hain ya siblings ki education aap dekh rahe ho, toh term plan lena chahiye.

**Sabse Important Rule**: "Insurance aur investment ALAG rakhna" — yeh golden rule hai. Insurance ka kaam protection hai, investment ka kaam growth hai. Dono mix karo = bekar insurance + bekar investment.

**Term Plan vs Endowment vs ULIP:**

| Feature | Term Plan | Endowment | ULIP |
| :--- | :--- | :--- | :--- |
| **Premium (₹50L cover)** | ₹3,500-₹5,500/year | ₹30,000-₹60,000/year | ₹50,000+/year |
| **Death Benefit** | ₹50 lakh (full) | ₹5 lakh + bonus (very low) | Fund value ya sum assured |
| **Maturity Benefit** | None — pure protection | ₹5 lakh + bonus | Market-linked fund value |
| **Returns** | N/A (protection) | 4-6% p.a. guaranteed | Variable (market dependent) |
| **Best For** | Income replacement | Forced savings (not recommended) | Investment+insurance mix (avoid) |
| **Recommendation** | **BEST — buy this!** | **Avoid** — returns low, cover low | **Avoid** — high charges |

**₹50 Lakh Term Plan Premium (Age 22, Non-smoker):**

| Insurance Company | Monthly Premium |
| :--- | :--- |
| Tata AIA Sampoorna Raksha Supreme | ₹360-₹400/month |
| HDFC Life Click 2 Protect Super | ₹400-₹450/month |
| Max Life Smart Term Plan Plus | ₹380-₹420/month |
| ICICI Prudential iProtect Smart | ₹400-₹460/month |
| Bajaj Allianz eTouch Online Term | ₹350-₹400/month |

**₹350-₹450/mahine mein ₹50 lakh cover!** Yeh ₹12-₹15/day ka kharcha hai — ek chai se bhi kam.

**Term Plan + SIP Combination = Best Protection + Best Growth:**
- ₹400/month term plan (₹50L cover) + ₹4,600/month SIP = ₹5,000/month total
- Endowment ₹5,000/month = ₹5 lakh cover + 4-6% returns
- **20 saal baad**: Term+SIP = ₹50 lakh cover + ₹45 lakh SIP corpus. Endowment = ₹5 lakh cover + ₹18 lakh corpus. Clear winner? Term + SIP.

**7 Factors to Choose Term Plan:**
1. Claim settlement ratio > 95%
2. Sum insured = 10-15x annual income
3. Policy term = longest possible (till 60)
4. Riders — accidental death, critical illness (optional)
5. Premium payment term — regular vs limited
6. Online vs offline — online 20-30% cheaper
7. Company reputation — IRDAI registered, stable`,
        imagePrompt: "Term plan comparison chart with shield icon, amber theme, life insurance illustration",
        color: "#F59E0B",
        emoji: "🛡️"
      },
      {
        id: "9-3-2",
        topicId: "9-3",
        topicTitle: "Term + Vehicle Insurance",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "Vehicle Insurance + Mission",
        content: `**Vehicle Insurance — Legally Mandatory!**

India mein vehicle insurance **LEGALLY MANDATORY** hai — Motor Vehicles Act 1988 ke under. Bina insurance gaadi/bike chalane pe:
- ₹2,000 fine (first offence)
- ₹4,000 fine (repeat)
- 3 months jail tak ho sakta hai

Lekin fine se bada reason: accident mein aapko ya doosre ko nuksan hua toh insurance bina ke saara paisa aapko dena padega — yeh lakho mein ja sakta hai.

**Third-Party vs Comprehensive Insurance (Bike):**

| Engine | Third-Party Premium | Comprehensive Premium |
| :--- | :--- | :--- |
| Below 75cc | ₹538/year | ₹1,500-₹3,000/year |
| 75cc-150cc | ₹714/year | ₹2,000-₹4,500/year |
| 150cc-350cc | ₹1,366/year | ₹3,500-₹7,000/year |
| Above 350cc | ₹2,804/year | ₹6,000-₹15,000/year |

**Third-Party**: Sirf doosre ko hua nuksan cover hota hai — aapki bike ka nuksan aapko bharna padega.

**Comprehensive**: Doosre ka nuksan + aapki bike ka nuksan (accident, theft, fire, natural disaster) + add-ons (zero depreciation, engine protect).

**Student Recommendation**: Agar bike daily use hoti hai toh **comprehensive** lo — accident ka risk zyada hai new riders mein. Agar bike rare use hoti hai toh third-party bhi chalega, lekin own-damage risk aapka.

**What Happens Without Insurance:**
- Accident mein aapki galti = doosre ka ₹2 lakh bike + ₹5 lakh hospital. Total ₹7 lakh aapki jeb se.
- Police caught = ₹2,000 fine + court.
- Third-party injury = jail possible + compensation.

---

**🚨 MISSION: Term Plan + Vehicle Insurance**

- [ ] Agar parents aapke pe depend hain → Term Plan ₹50L at age 22-25 lo (₹350-450/month)
- [ ] Compare 5 companies on PolicyBazaar
- [ ] Claim settlement ratio 95%+ check karo
- [ ] Bike/car insurance comprehensive lo (daily use)
- [ ] Auto-renewal on karo (lapse prevention)
- [ ] Insurance documents phone pe save karo (emergency access)

**Rule**: Term plan = family protection. Vehicle insurance = legal + financial protection. Dono zaroori!`,
        imagePrompt: "Bike and car insurance icons with shield, amber theme, vehicle safety illustration",
        color: "#F59E0B",
        emoji: "🎯"
      }
    ]
  },
  {
    id: "9-4",
    title: "Insurance Se Investment MAT Karo + Common Mistakes",
    emoji: "⚠️",
    color: "#8B5CF6",
    description: "Insurance aur investment alag rakho — golden rule. 10 common insurance mistakes Indians make.",
    cards: [
      {
        id: "9-4-1",
        topicId: "9-4",
        topicTitle: "Insurance vs Investment",
        cardIndex: 1,
        totalCardsInTopic: 2,
        title: "Why ULIPs/Endowment Bad + Agent Tips",
        content: `**Insurance Se Investment MAT Karo — Golden Rule!**

Yeh sabse important lesson hai insurance section mein: "Insurance aur investment alag rakhna" — yeh financial literacy ka golden rule hai.

Endowment plans, money-back policies, ULIPs — yeh sab insurance + investment ka mix hain jo dono kaam bekar karte hain.

**Insurance Company Ka Model:**
Woh aapka paisa lete hain, thoda sa risk cover dete hain, baaki paisa low-return investments mein lagate hain, aur khud profit kamaate hain. Aap directly SIP mein invest karo (12-15% returns) + separately term plan lo (pure protection) — yeh combination mathematically superior hai har endowment/ULIP plan se.

**Real Calculation:**

25 saal ki umr, ₹10,000/month investment budget.
- **Option A**: Endowment plan ₹10,000/month = ₹5 lakh cover + ~6% returns. 20 saal baad: ~₹46 lakh + ₹5 lakh cover.
- **Option B**: Term plan ₹500/month + SIP ₹9,500/month = ₹50 lakh cover + ~12% returns. 20 saal baad: ~₹85 lakh SIP corpus + ₹50 lakh cover.

**Option B mein 85% zyada wealth + 10x zyada protection.** Clear winner? Term + SIP.

**Why ULIPs Are Bad for Young People:**
- **High charges**: Premium allocation charge 5-10%, fund management charge 1.5%, mortality charge, policy admin charge. Total = 8-15% charges.
- **Lock-in**: 5 years. SIP mein koi lock-in nahi (ELSS ke alawa).
- **Returns**: Market-linked lekin charges ke baad effectively 6-8%. SIP directly = 10-12%.
- **Complexity**: Samajhna mushkil. Term plan simple, SIP simple.

**Insurance Agent Se Kaise Deal Karein — 5 Tips:**

1. **Agent ki baat blindly mat maano** — woh commission kamata hai. Endowment pe 30-40% commission hota hai.

2. **Term plan maango** — agar agent mana kare, doosra agent dhundo.

3. **IRR (return) calculate karo** — endowment ka actual return 3-5% hota hai. Agent "6% guaranteed" bolega, lekin woh simple interest bol raha hoga.

4. **Online compare karo** — PolicyBazaar, Coverfox pe compare karo. Offline agent se 20-30% zyada milega.

5. **"Free" policy mat lo** — "Sirf aapka naam chahiye" = fraud. Koi free insurance nahi hoti.`,
        imagePrompt: "Split screen - insurance agent offering endowment vs direct term+SIP, purple theme, financial decision illustration",
        color: "#8B5CF6",
        emoji: "⚖️"
      },
      {
        id: "9-4-2",
        topicId: "9-4",
        topicTitle: "Insurance vs Investment",
        cardIndex: 2,
        totalCardsInTopic: 2,
        title: "10 Common Mistakes + Module 9 Summary",
        content: `**10 Common Insurance Mistakes Indians Make:**

1. **Insurance + investment mix karna** — Endowment/ULIP = bekar insurance + bekar investment. Term + SIP separately.

2. **Under-insuring** — ₹2-3 lakh health cover lena jab hospital bills ₹10-15 lakh easily cross karti hain metros mein. Minimum ₹5 lakh, recommended ₹10 lakh.

3. **Pre-existing diseases chhupana** — Claim reject ho jayegi, premium waste. Sab conditions declare karo. Honesty = claim approval.

4. **Sirf premium dekhna** — Cheapest plan mein room rent cap, co-pay, limited network ho sakta hai. Claim settlement ratio check karo (90%+ target).

5. **Claim settlement ratio ignore karna** — 80% CSR wali company se lena = 20% chance claim reject ho. 95%+ CSR wali company choose karo. IRDAI website pe data available.

6. **Fine print na padhna** — Waiting periods, sub-limits, exclusions sab important hain. Padhne mein 1 ghanta lagao, lakho bachao.

7. **Sirf employer pe depend karna** — Corporate health insurance job khatam = insurance khatam. Portability issues, low cover, no continuity benefits. Individual plan lo.

8. **Young age mein insurance na lena** — Jaldi lena = kam premium + waiting period jaldi khatam. 25 pe lena = 40 pe lene se 60% kam premium.

9. **Time pe renew na karna** — Lapsed policy = continuity benefits gone, waiting periods restart. Auto-renewal on karo. Credit card pe auto-debit link karo.

10. **Health insurance ke bina rehna** — "Mujhe kya hoga" soch ke nahi lena. Emergency kisi ko bhi kisi bhi waqt aa sakti hai. ₹400/month se start karo.

---

**KEY TAKEAWAYS (Module 9):**
- ✅ Insurance = risk transfer, investment = growth — DONO ALAG RAKHO. Mix = bekar results
- ✅ Term plan best hai life insurance ke liye — ₹50 lakh cover at ₹350-450/month. Endowment = 10x price, 1/10th cover
- ✅ Health insurance sabse zaroori hai — ₹5 lakh minimum, ₹10 lakh recommended. Cashless network check karo
- ✅ Vehicle insurance legally mandatory hai — bina insurance driving = fine + jail + financial disaster
- ✅ Buy insurance early = kam premium + better coverage. 25 pe lena = 40 pe lene se 60% kam premium

**COMMON MISCONCEPTIONS (Module 9):**

⚠️ "Insurance waste of money hai agar kuch nahi hota" → Nahi, yeh risk protection hai, jaise seatbelt — hope for the best, prepare for the worst

⚠️ "Endowment plan achha hai kyunki maturity pe paisa milta hai" → Milta hai lekin 4-6% return, SIP deti hai 12-15%. Term + SIP mathematically better

⚠️ "Employer ka insurance kaafi hai" → Nahi, corporate cover limited hai, job chhod = cover gone, portability difficult

⚠️ "Young hain toh insurance nahi chahiye" → Galat! Young age = kam premium. 25 pe lena = 40 pe lene se 60% kam premium

⚠️ "Term plan mein maturity pe kuch nahi milta toh bekar hai" → Nahi! Yeh pure protection hai. ₹50 lakh cover at ₹400/month = financial security for family

**Aage Ka Safar**: Insurance se aapka risk cover ho gaya. Lekin ek aur important topic baaki hai — TAX. Student ke liye tax samajhna zaroori hai kyunki job lagne ke baad salary se tax cut hota hai, aur smart tax planning se hazaron bach sakte hain. Module 10 mein tax basics cover karenge — income tax slabs, 80C, ITR filing, aur student-specific tax situations! 💸`,
        imagePrompt: "Module 9 complete badge with insurance shield, purple and gold theme, achievement illustration",
        color: "#8B5CF6",
        emoji: "🏆"
      }
    ]
  }
];

export function getAllCards() {
  return module9Topics.flatMap(topic => topic.cards);
}

export function getTotalCardCount() {
  return getAllCards().length;
}

export function getTopicById(id) {
  return module9Topics.find(t => t.id === id);
}

export function getCardsByTopic(topicId) {
  const topic = getTopicById(topicId);
  return topic ? topic.cards : [];
}
