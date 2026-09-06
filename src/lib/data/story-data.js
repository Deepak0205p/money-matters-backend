// ============================================================
// Money Matters — Story Data
// Financial literacy kahaniya for Indian youth in Hinglish
// Main character: Arjun — 22 saal ka ladka, pehli naukri
// ============================================================

export const moduleStories = [
// ============================================================
// MODULE 1: "Paise Ki Basic Samajh" (Foundation)
// Story: "Arjun Ki Pehli Tankha"
// ============================================================
{
  moduleId: 1,
  storyTitle: "Arjun Ki Pehli Tankha",
  storySubtitle: "Pehli salary ka euphoria aur sachhai",
  characterEmoji: "💸",
  settingDescription: "Arjun ke ghar mein celebration ka mahol hai — 22 saal ka ladka finally apni pehli salary le kar aaya hai. ₹20,000 — zindagi mein pehli baar itna paisa dekha hai.",
  chapters: [{
    id: "m1-ch1",
    chapterNumber: 1,
    title: "Salary Aa Gayi! 🎉",
    scene: "Friday shaam, Arjun ka phone buzz hota hai — 'Salary credited: ₹20,000'. Woh apni seat se uchhal kar khada ho jaata hai. Office ke sabko batata hai, ghar pe call karta hai, aur dimaag mein sirf ek cheez — party!",
    dialogue: "Yaar ₹20,000! Ab toh life set hai! Weekend pe shopping, naye sneakers, aur dost logon ko treat — sab ho ga! Pehle mahine ka toh full enjoy karna chahiye na?",
    speaker: "Arjun",
    lesson: "Pehli salary aane par excitement normal hai, lekin bina soche paisa spend karna sabse badi galti hai. Pehle plan banao, phir kharch karo.",
    emoji: "🤑",
    choice: {
      id: "m1-ch1-c1",
      text: "Full salary spend kar do — life mein pehli baar hai! 🛍️",
      isCorrect: false,
      feedback: "Ekdum galat! Pehli salary ka shock bahut meetha lagta hai, lekin mahine ke end tak kadwi sazaa milti hai. Pehle socho, phir kharcho."
    },
    xpReward: 10
  }, {
    id: "m1-ch2",
    chapterNumber: 2,
    title: "Priya Ki Samajhdari",
    scene: "Arjun apni school friend Priya se coffee pe milta hai. Priya already 2 saal se job kar rahi hai aur financially smart hai. Arjun excitedly apna plan batata hai — puri salary udane ka.",
    dialogue: "Arjun, ruk! Ek kaam kar — apni salary ko teen hisson mein baant. 50% needs (rent, bills, khana), 30% wants (shopping, fun), aur 20% savings. Yeh Income-Expense-Savings triangle hai — isse kabhi mat todna.",
    speaker: "Priya",
    lesson: "Income-Expense-Savings triangle: Har aaye ka 50% zaroori kharche, 30% man pasand cheezein, aur 20% bachat mein jaana chahiye. Yeh simple formula financial life bachaata hai.",
    emoji: "📐",
    xpReward: 15
  }, {
    id: "m1-ch3",
    chapterNumber: 3,
    title: "Shopping Ka Atyachaar",
    scene: "Mall mein Arjun sab kuch kharid raha hai — ₹4,000 ke sneakers, ₹2,500 ka jacket, ₹1,500 ke earbuds. Cart bhara hai par wallet sooni ho raha hai. Abhi mahine ke 15 din baaki hain aur paisa khatam.",
    dialogue: "Yeh sneakers zaroori thi ya bas dil maanga? Aur jacket — December mein toh pehenoge, par abhi July hai! Arjun, Needs aur Wants mein farak samajh. Needs woh jo bina ke na chale — rent, khana, bills. Wants woh jo life mein acchi lagti hain par zaroori nahi.",
    speaker: "Priya",
    lesson: "Needs vs Wants: Pehle zaroori cheezein kharido (rent, khana, bills), phir socho wants ke baare mein. Impulse shopping se mahine end mein kadwa sach milta hai.",
    emoji: "🛒",
    choice: {
      id: "m1-ch3-c1",
      text: "Ab se har cheez pe soch kar kharidunga — need ya want? 🤔",
      isCorrect: true,
      feedback: "Perfect! Har purchase pe 10 second ka rule lagao — kya yeh need hai ya want? Isse impulse buying se bach jaoge!"
    },
    xpReward: 15
  }, {
    id: "m1-ch4",
    chapterNumber: 4,
    title: "50-30-20 Ka Jaadu",
    scene: "Arjun apne kamre mein baith kar calculator pakad ke hai. ₹20,000 ki salary — Priya ki 50-30-20 rule lagana chahta hai. Pehli baar numbers se dosti ho rahi hai.",
    dialogue: "Chalo calculate karte hain: ₹20,000 mein 50% = ₹10,000 needs ke liye. 30% = ₹6,000 wants ke liye. 20% = ₹4,000 savings ke liye. Yeh rule simple hai par power deta hai — tum apne paisa control mein rakhte ho, paisa tumhe nahi.",
    speaker: "Priya",
    lesson: "50-30-20 Rule: 50% needs, 30% wants, 20% savings. Yeh formula har income level pe kaam karta hai — chahe ₹10,000 ho ya ₹1,00,000.",
    emoji: "📊",
    choice: {
      id: "m1-ch4-c1",
      text: "₹4,000 savings? Itna kya hoga itne se? 🤷",
      isCorrect: false,
      feedback: "Soch mat — shuru kar! ₹4,000 mahine ka = ₹48,000 saal bhar. Aur compounding ki power se yeh ₹5 lakh+ ban sakta hai kuch saalon mein. Chhota shuru karo, bada socho!"
    },
    xpReward: 20
  }, {
    id: "m1-ch5",
    chapterNumber: 5,
    title: "Pehla Financial Goal",
    scene: "Arjun apne phone pe notes app kholta hai. Pehli baar usne financial goals likhne hain. Short-term, medium-term, long-term — sab plan kar raha hai. Excitement aur determination dono hai.",
    dialogue: "Mera pehla goal — 3 mahine mein ₹15,000 ka emergency fund banana. Doosra — 6 mahine mein ek naya phone (bina EMI!). Aur teesra — saal end tak ₹50,000 invest karna. Ab sab likh ke rakh diya — no more bhoolna!",
    speaker: "Arjun",
    lesson: "Financial goals likh kar rakho — short term (3-6 mahine), medium term (1-3 saal), long term (5+ saal). Likhe hue goals 42% zyada achievable hote hain. SMART banao — Specific, Measurable, Achievable, Relevant, Time-bound.",
    emoji: "🎯",
    xpReward: 20
  }]
},
// ============================================================
// MODULE 2: "Budgeting In Real Life" (Practical)
// Story: "Mahine Ka Aakhri Din"
// ============================================================
{
  moduleId: 2,
  storyTitle: "Mahine Ka Aakhri Din",
  storySubtitle: "Jab ATM dikhata hai — Balance: ₹47",
  characterEmoji: "😰",
  settingDescription: "Mahine ka 28th din — Arjun ke paas sirf ₹47 bach hain. Last week mein Maggie bhi kharidna mushkil hai. Budget bana na zaroori ho gaya hai, warna har mahine yehi haal hoga.",
  chapters: [{
    id: "m2-ch1",
    chapterNumber: 1,
    title: "ATM Ka Shock",
    scene: "Arjun ATM ke saamne khada hai, screen pe blink kar raha hai — 'Available Balance: ₹47'. Uski aankhein phati ki phati reh jaati hain. 28 din pehle ₹20,000 the, aur ab... ₹47? Kahan gaya sab paisa?",
    dialogue: "Yeh kaise ho gaya? ₹47?! Yaar mujhe toh lagta tha sab theek chal raha tha. Ab 2 din kaise guzaaru? Maggi bhi ₹15 ki hai! Budget bana na zaroori hai — ab toh pakka!",
    speaker: "Arjun",
    lesson: "Bina budget ke jeevan ek aisi gaadi hai jiske paas GPS nahi — tum pata nahi kahan pahunchoge, par destination pe nahi pahunchoge. Budget banao, rasta clear hoga.",
    emoji: "🏧",
    xpReward: 10
  }, {
    id: "m2-ch2",
    chapterNumber: 2,
    title: "Paisa Ka GPS — Budget",
    scene: "Priya Arjun ke ghar aati hai. Table pe do chai ki cup, ek notebook, aur calculator. Aaj budget ka class hai — real life ka, textbook ka nahi. Priya Arjun ke pichle mahine ke kharche likhwa rahi hai.",
    dialogue: "Budget matlab paisa ka GPS hai — batata hai kahan se aana hai, kahan jaana hai. Bina GPS ke drive karna = bina budget ke rehna. Chalo pehle sab kharche likhte hain — rent, bills, groceries, entertainment, sab kuch.",
    speaker: "Priya",
    lesson: "Budget zindagi ki planning hai — yeh restrict nahi karta, direction deta hai. Har mahine ki shuruwat mein budget banao, taaki mahine ke end mein surprise na aaye.",
    emoji: "🗺️",
    xpReward: 15
  }, {
    id: "m2-ch3",
    chapterNumber: 3,
    title: "Chai Ka Kharcha Revealed",
    scene: "Priya aur Arjun pichle mahine ke har kharche ko track kar rahe hain. Jab entertainment aur food ka hisaab nikla, Arjun ka chehra laal ho gaya. Chai, samosa, Zomato orders — sab jama ho gaya.",
    dialogue: "Arjun, dekh — yeh Rs.2,400 sirf chai aur snack pe! Aur Zomato pe ₹4,800! Total food pe ₹9,200? Yeh toh salary ka 46% hai! Chai acchi hai par ₹2,400 mahine ka... dost, ghar pe bhi bana sakte ho na?",
    speaker: "Priya",
    lesson: "Chhote chhote kharche bade bade ho jaate hain. ₹80 roz ki chai = ₹2,400/mahine = ₹28,800/saal. Har kharcha track karo — small leaks sink big ships.",
    emoji: "☕",
    choice: {
      id: "m2-ch3-c1",
      text: "₹2,400 chai pe? Nahi pata tha itna ho raha hai! 😱",
      isCorrect: true,
      feedback: "Exactly! Yehi toh point hai — bina tracking ke pata hi nahi chalta paisa kahan ja raha hai. Expense tracking sabse pehla step hai budgeting ka."
    },
    xpReward: 15
  }, {
    id: "m2-ch4",
    chapterNumber: 4,
    title: "Zero-Based Budgeting",
    scene: "Priya whiteboard pe ek naya concept draw karti hai — Zero-Based Budgeting. Har rupaye ka kaam decide karna hai pehle se. Koi bhi rupaye 'bacha hua' nahi — sab allocated hai.",
    dialogue: "Zero-based budgeting ka matlab — Income minus sab expenses = Zero. Matlab har paisa ka kaam taya hai. Savings bhi ek expense hi hai — apne aap ko pay karo pehle. ₹20,000 aaya, ₹20,000 ka plan banao, zero ko chhod ke mat socho.",
    speaker: "Priya",
    lesson: "Zero-based budgeting: Income - Expenses = 0. Har rupaye ka kaam pehle se fixed ho. Jab tak paisa 'bacha hua' nahi hota, tab tak wastage nahi hota. Savings ko bhi ek expense maano.",
    emoji: "⚖️",
    choice: {
      id: "m2-ch4-c1",
      text: "Paisa bacha rehne do, baaki kharch ho jaayega 🤷‍♂️",
      isCorrect: false,
      feedback: "Bacha hua paisa hamesha kahin na kahin chala jaata hai. Zero-based budgeting mein har paisa ka purpose hota hai — savings bhi ek purpose hai!"
    },
    xpReward: 20
  }, {
    id: "m2-ch5",
    chapterNumber: 5,
    title: "Pehla Budget Win! 🏆",
    scene: "Ek mahine baad — Arjun phir ATM ke saamne hai. Is baar screen pe likha hai — 'Available Balance: ₹4,200'. ₹4,000 savings + ₹200 extra. Pehli baar mahine ka end aise aaya jahan paisa bacha hai!",
    dialogue: "Priya! ₹4,200 bach hain! Pehli baar mahine ke end mein panic nahi hai! Budget ne kaam kiya bhai — sach mein paisa ka GPS hai yeh! Ab toh har mahine banaungi budget, no excuses!",
    speaker: "Arjun",
    lesson: "Budget follow karna mushkil hai pehle 2-3 mahine, par phir aadat ban jaata hai. Pehla budget win confidence deta hai — aur confidence se consistency aati hai. Consistency se financial freedom.",
    emoji: "🏆",
    xpReward: 15
  }]
},
// ============================================================
// MODULE 3: "Savings Ka Jaadu" (Savings)
// Story: "Chhoti Bachat Badi Taakat"
// ============================================================
{
  moduleId: 3,
  storyTitle: "Chhoti Bachat Badi Taakat",
  storySubtitle: "Jab phone toota aur savings nahi thi",
  characterEmoji: "📱",
  settingDescription: "Arjun ka phone screen crack ho jaata hai — ₹8,000 ka repair. Savings = zero. Yeh emergency usse sikhati hai ki bina emergency fund ke zindagi ek thin ice pe chalna hai.",
  chapters: [{
    id: "m3-ch1",
    chapterNumber: 1,
    title: "Crack! 💔",
    scene: "Subah office jaate waqt Arjun ka phone haath se chhoot kar road pe gir jaata hai. Screen ekdum crack — touch kaam nahi kar raha. Dukaan pe puche — ₹8,000 repair. Arjun ke paas savings = ₹0. Panic mode ON.",
    dialogue: "₹8,000?! Mera phone abhi 6 mahine ka bhi nahi hua! Repair ke paise kahan se aayenge? Credit card se karoonga... nahi nahi, woh toh alag problem hai. Yaar, savings nahi thi isliye yeh haal hai.",
    speaker: "Arjun",
    lesson: "Bina emergency fund ke har bada kharcha ek crisis ban jaata hai. Phone tootna, medical bill, bike repair — yeh sab life mein aate rehte hain. Taiyaari zaroori hai.",
    emoji: "💔",
    choice: {
      id: "m3-ch1-c1",
      text: "Credit card se payment kar do, baad mein chukata lunga 💳",
      isCorrect: false,
      feedback: "Credit card se emergency payment = naya debt. Interest 36-40% tak jaata hai. Emergency fund hi sach mein emergency bachata hai, credit card nahi."
    },
    xpReward: 10
  }, {
    id: "m3-ch2",
    chapterNumber: 2,
    title: "Emergency Fund — Zindavi ka Shield",
    scene: "Priya Arjun ko café mein milti hai. Arjun apni dastaan sunata hai — phone toota, paise nahi, credit card ka jaal. Priya calmly usse emergency fund ke baare mein samjhati hai.",
    dialogue: "Arjun, emergency fund woh chhatri hai jo baarish se pehle khareedni chhoti hai. 3-6 mahine ka kharcha alag rakho — sirf emergencies ke liye. Phone tootna, hospital, job loss — yeh sab emergencies hain. Tumhara monthly kharcha ₹12,000 hai toh ₹36,000-₹72,000 ka fund chahiye.",
    speaker: "Priya",
    lesson: "Emergency fund = 3 se 6 mahine ka basic kharcha alag account mein. Yeh tumhe debt se bachata hai, job loss se bachata hai, aur peace of mind deta hai. Non-negotiable hai yeh!",
    emoji: "🛡️",
    xpReward: 15
  }, {
    id: "m3-ch3",
    chapterNumber: 3,
    title: "₹500 Ka SIP — Shuruwaat",
    scene: "Arjun apne bank app pe ₹500 ki SIP set karta hai. Dikhne mein bahut chhota lag raha hai — ₹500 se kya hoga? Par Priya ne bola shuru karo, toh shuru kiya. Har mahine auto-debit hoga.",
    dialogue: "₹500 mahine ka — haan, chhota hai. Par ek cheez samajh li — shuruwaat sabse zaroori hai. ₹500 bhi ₹0 se better hai. Aur jab salary badhegi, SIP bhi badhaaunga. Abhi consistency hi kaam aayega.",
    speaker: "Arjun",
    lesson: "Savings mein amount se zyada consistency zaroori hai. ₹500/mahine bhi shuru karo — habit ban jaaye toh amount baad mein badha sakte ho. 'Shuru karo' hi sabse mushkil step hai.",
    emoji: "🌱",
    choice: {
      id: "m3-ch3-c1",
      text: "₹500 se kya hoga? Kam hai, baad mein ₹5,000 se start karunga 📈",
      isCorrect: false,
      feedback: "Galat soch! 'Baad mein' kabhi nahi aata. ₹500/mahine = ₹6,000/saal. 10 saal mein compounding se ₹1,00,000+. Chhota shuru karo, par SHURU karo!"
    },
    xpReward: 15
  }, {
    id: "m3-ch4",
    chapterNumber: 4,
    title: "Compounding Ka Jaadu ✨",
    scene: "Priya apne laptop pe ek compounding calculator khol ke dikhata hai. Arjun ke ₹500/mahine ka future projection dekh ke uski aankhein phati ki phati reh jaati hain. Numbers ne sach bol diya.",
    dialogue: "Arjun dekh — ₹500/mahine, 12% return, 20 saal = ₹5,00,000+! Total invest kiya sirf ₹1,20,000, par milega ₹5 lakh! Yeh compounding ka jaadu hai — 8th wonder of the world. Jaldi shuru karoge, utna zyada milega. Time is money — literally!",
    speaker: "Priya",
    lesson: "Compound interest matlab interest pe interest. Jitna jaldi shuru, utna zyada fayda. 22 saal ki umar mein shuru kiya toh 42 tak monster fund ban jaata hai. 32 mein shuru kiya toh half milega.",
    emoji: "✨",
    xpReward: 20
  }, {
    id: "m3-ch5",
    chapterNumber: 5,
    title: "6 Mahine Baad — Emergency Fund Ne Bachaya!",
    scene: "Arjun ko achanak se 3 din hospital rehna pada — dengue. Bill aaya ₹15,000. Lekin is baar panic nahi hai — emergency fund hai. Paise nikale, bill diya, aur wapas aakar fund refill karne ka plan bana liya.",
    dialogue: "6 mahine pehle ₹47 pe khada tha, aaj hospital bill ₹15,000 di aur ek bhi tension nahi li. Emergency fund ne bacha liya bhai. Pehle credit card se darta tha, ab savings se confidence hai. Yehi asli financial strength hai!",
    speaker: "Arjun",
    lesson: "Emergency fund sirf paisa nahi — yeh peace of mind hai, dignity hai, aur debt se freedom hai. Jab emergency aati hai, savings wahi khadi hoti hain. Build it, maintain it, respect it.",
    emoji: "🤗",
    xpReward: 20
  }]
},
// ============================================================
// MODULE 4: "Credit & Debt Ke Jaal" (Debt)
// Story: "Credit Card Ka Phansa"
// ============================================================
{
  moduleId: 4,
  storyTitle: "Credit Card Ka Phansa",
  storySubtitle: "Free money nahi, expensive debt hai",
  characterEmoji: "💳",
  settingDescription: "Arjun ko ek shiny credit card milta hai — 'Free! No annual fee!'. Woh sochta hai yeh free paisa hai. Lekin yeh jaal hai — minimum payment ka chakravyuh jo 18 mahine tak nahi chhodega.",
  chapters: [{
    id: "m4-ch1",
    chapterNumber: 1,
    title: "Congratulations! Free Credit Card! 🎊",
    scene: "Monday ko office aate hain Arjun ke desk pe ek envelope hai — 'Congratulations! Your pre-approved credit card with ₹50,000 limit!' Coloured pamphlet, smiling faces, aur 'No annual fee' likha hai. Arjun ka dil khush ho gaya.",
    dialogue: "Arrey! ₹50,000 ka credit card — free mein! Yeh toh jackpot hai! Abhi toh naye sneakers, weekend trip, aur woh PS5 bhi le sakta hoon! Free mein toh hai, kya farak padta hai?",
    speaker: "Arjun",
    lesson: "Credit card free nahi hota — yeh debt ka invitation hai. Limit tumhara nahi, bank ka paisa hai jo interest ke saath wapas karna padta hai. Pre-approved ka matlab yeh nahi ki afford kar sakte ho.",
    emoji: "🎉",
    choice: {
      id: "m4-ch1-c1",
      text: "Limit ₹50,000 hai — toh ₹50,000 kharch kar sakte hain! 🛍️",
      isCorrect: false,
      feedback: "Limit ≠ Tumhara paisa! Credit limit bank ka paisa hai, tumhara nahi. Jo spend karoge, woh + 36-40% interest wapas karna padega. Credit card debt sabse mehnga debt hai."
    },
    xpReward: 10
  }, {
    id: "m4-ch2",
    chapterNumber: 2,
    title: "Shopping Spree 🛍️",
    scene: "Arjun ne credit card se shopping shuru ki — ₹8,000 ke sneakers, ₹6,000 ka dinner, ₹10,000 ka phone upgrade, ₹6,000 ke clothes. Total ₹30,000 — sab credit card pe. Cash toh nikla hi nahi tha.",
    dialogue: "Yaar yeh toh magic hai! Payment hua, paisa nikla hi nahi pocket se, aur sab mil gaya! Card swipe kiya, OTP daala, done! Abhi toh lagta hai free mein kuch bhi le sakte hain!",
    speaker: "Arjun",
    lesson: "Credit card se shopping mein dard nahi dikhta — sirf swipe aur OTP. Lekin bill aayegi, aur tab dard hoga. Cash se kharche kam hote hain kyunki physically paisa jaata dikhta hai. Card pe yeh feeling nahi aati.",
    emoji: "💅",
    xpReward: 15
  }, {
    id: "m4-ch3",
    chapterNumber: 3,
    title: "Bill Aayi — Minimum Payment Ka Jaal 🪤",
    scene: "Mahine ki 5th tareekh — credit card ka SMS aata hai. Total outstanding: ₹30,000. Minimum payment due: ₹1,500. Arjun sochta hai ₹1,500 toh bahut easy hai, kar deta hoon. Par usne fine print nahi padha.",
    dialogue: "₹1,500 only? Yeh toh kuch bhi nahi hai! Chalo minimum payment kar deta hoon, baaki agle mahine dekhenge. Bank itna accha hai — itna kam payment accept kar raha hai!",
    speaker: "Arjun",
    lesson: "Minimum payment = Maximum trap. ₹30,000 ka sirf ₹1,500 bhare toh baaki ₹28,500 pe 36-40% interest lagega. Har mahine interest badhta jaayega aur principal almost nahi utrega. Yeh jaal hai, boon nahi.",
    emoji: "🪤",
    choice: {
      id: "m4-ch3-c1",
      text: "Full ₹30,000 ek saath chuka dena chahiye 💪",
      isCorrect: true,
      feedback: "Bilkul sahi! Credit card bill hamesha full pay karo. Agar full afford nahi kar sakte, toh credit card se spend hi mat karo. Full payment = Zero interest = Smart move!"
    },
    xpReward: 15
  }, {
    id: "m4-ch4",
    chapterNumber: 4,
    title: "18 Mahine Ka Nightmare 😱",
    scene: "18 mahine baad — Arjun abhi bhi wahi credit card pay kar raha hai. Minimum payments kar raha tha, par interest ne balling kar diya. Total paid: ₹55,000 — aur abhi bhi ₹4,000 balance bacha hai. ₹30,000 ke liye ₹55,000 diye!",
    dialogue: "₹55,000 diya hai aur abhi bhi khatam nahi hua?! Yeh toh loot hai! Sirf ₹30,000 spend kiya tha, aur almost double de diya! Minimum payment ne mujhe barbaad kar diya. Kash pehle hi full payment ki hoti...",
    speaker: "Arjun",
    lesson: "Credit card pe minimum payment karne se ₹30,000 ka debt ₹55,000+ mein badal jaata hai. Interest compound hota hai — debt pe bhi! Har mahine interest lagta hai, aur tum aur zyada doob jaate ho.",
    emoji: "😱",
    xpReward: 20
  }, {
    id: "m4-ch5",
    chapterNumber: 5,
    title: "Debt Se Azaadi — Snowball Method ⛰️",
    scene: "Priya Arjun ko debt se nikalne ka raasta batati hai — Debt Snowball Method. Sabse chhota debt pehle khatam karo, phir agla. Psychological wins motivation dete hain. Arjun pehle credit card ka balance khatam karta hai.",
    dialogue: "Arjun, sabse chhote debt pehle attack karo — small wins momentum dete hain. Phir agla, phir agla. Extra income se sirf debt pay karo — abhi no shopping, no treat. Yeh temporary sacrifice hai, par freedom permanent hai!",
    speaker: "Priya",
    lesson: "Debt Snowball Method: Sabse chhota debt pehle khatam karo → psychological win → motivation → agla debt → repeat. Ya Debt Avalanche: Sabse zyada interest wala pehle — mathematically better. Dono mein se chuno, par shuru karo!",
    emoji: "⛷️",
    xpReward: 15
  }, {
    id: "m4-ch6",
    chapterNumber: 6,
    title: "Credit Card = Tool, Not Free Money 🔧",
    scene: "Arjun ka credit card debt ab zero hai. Usne card rakh liya hai par rules banaye hain — sirf woh kharcha jo next bill mein full pay ho sake. Auto-debit ON hai. Credit score badh raha hai. Lesson seekh liya.",
    dialogue: "Ab samajh aaya — credit card ek tool hai, jaal nahi. Jaise chaku — sabzi kaatne ke liye accha, haath kaatne ke liye bura. Rules simple hain: full payment har mahine, budget ke andar spend, aur kabhi bhi minimum payment mat karo. Yeh meri naye zindagi ki rule hai!",
    speaker: "Arjun",
    lesson: "Credit card smartly use karo: 1) Full payment har mahine, 2) Budget ke andar hi spend karo, 3) 30% se zyada limit use mat karo, 4) Reward points lo par interest ke liye mat rehna. Credit score build hota hai — future loans saste milte hain.",
    emoji: "✅",
    choice: {
      id: "m4-ch6-c1",
      text: "Credit card ko kaam hi karke rakhna hai — full payment always! 💳",
      isCorrect: true,
      feedback: "Smart move! Credit card disciplined use se credit score build hota hai, rewards milte hain, aur emergency mein kaam aata hai. Boss mode: ON!"
    },
    xpReward: 15
  }]
},
// ============================================================
// MODULE 5: "Investing Ki Shuruwat" (Investing Basics)
// Story: "Pehla Sikka"
// ============================================================
{
  moduleId: 5,
  storyTitle: "Pehla Sikka",
  storySubtitle: "Savings account se Investing tak ka safar",
  characterEmoji: "🪙",
  settingDescription: "Arjun ke savings account mein ₹10,000 hai. Bank 3.5% interest de raha hai. Arjun ko lagta hai paisa badh raha hai — lekin Priya ko pata hai asli sach. Inflation chupke se sab kha jaata hai.",
  chapters: [{
    id: "m5-ch1",
    chapterNumber: 1,
    title: "Bank Ki Passbook Ka Dhoka 🏦",
    scene: "Arjun apni bank passbook dekh raha hai — ₹10,000 deposit, interest ₹350/year. Woh khush hai — paisa badh raha hai! Par Priya ko jab bataya toh usne ek sawaal kiya jisse Arjun ka khushnasib chehra ud gaya.",
    dialogue: "Priya, dekh! ₹10,000 pe ₹350 interest mil raha hai! Paisa badh raha hai bank mein! Savings account toh safe bhi hai aur paisa bhi badhta hai — double benefit!",
    speaker: "Arjun",
    lesson: "Savings account ka 3.5% interest achha lagta hai, par yeh dhoka hai. Inflation 6% hai — matlab tumhara paisa actually kam ho raha hai, zyada nahi. Real return = Interest - Inflation = 3.5% - 6% = -2.5%. Haan, MINUS!",
    emoji: "🏦",
    xpReward: 10
  }, {
    id: "m5-ch2",
    chapterNumber: 2,
    title: "Inflation Chupi Chor Hai 🥷",
    scene: "Priya apna phone khol ke inflation calculator dikhata hai. ₹100 ki cheez 5 saal mein ₹134 ki ho jaayegi 6% inflation se. Arjun ka ₹10,000 actually ₹8,750 ki purchasing power rakhega ek saal mein. Silence.",
    dialogue: "Arjun, inflation ek chupi chor hai — tumhe mehsoos nahi hota par har saal tumhara paisa 6% kam hota hai. Bank deta hai 3.5%, chor le jaata hai 6%. Net loss = 2.5% har saal. Tum sochte ho paisa badh raha hai, par asal mein ghat raha hai!",
    speaker: "Priya",
    lesson: "Inflation = paisa ki purchasing power ka dushman. 6% inflation matlab ₹100 ki cheez agle saal ₹106 ki. Agar tumhara return 6% se kam hai, toh tum actually lose kar rahe ho. Savings account = losing account!",
    emoji: "🥷",
    choice: {
      id: "m5-ch2-c1",
      text: "Toh paisa bank mein rakhna hi bekaar hai? 😰",
      isCorrect: false,
      feedback: "Emergency fund ke liye savings account zaroori hai — instant access chahiye. Par extra paisa jo 3-5 saal nahi chahiye, woh invest karna padega inflation se bachne ke liye. Emergency fund ≠ Investment."
    },
    xpReward: 15
  }, {
    id: "m5-ch3",
    chapterNumber: 3,
    title: "Investment Ka Menu 📋",
    scene: "Priya Arjun ko ek 'investment menu' dikhati hai — FD (6-7%), PPF (7-8%), Mutual Funds (10-14%), Stocks (variable), Gold (8-10%). Har option ka risk aur return samjhaya. Arjun confused hai par curious bhi.",
    dialogue: "Dekho Arjun — FD safe hai par return low. PPF accha hai par 15 saal lock. Mutual Funds flexible hai, ₹500 se shuru. Stocks direct risky hai beginners ke liye. Tumhare liye best hai — Mutual Funds se start karo, SIP se. Simple, safe, smart.",
    speaker: "Priya",
    lesson: "Investment options: FD (safe, low return), PPF (safe, long lock-in), Mutual Funds (moderate risk, good returns), Stocks (high risk, high return), Gold (hedge). Beginners ke liye Mutual Fund SIP best hai — diversification + professional management + low entry.",
    emoji: "📋",
    xpReward: 15
  }, {
    id: "m5-ch4",
    chapterNumber: 4,
    title: "Pehla Investment — ₹5,000 Ka Adhyay 📖",
    scene: "Arjun apne phone pe mutual fund app kholta hai. ₹5,000 ek index fund mein invest kar raha hai. Finger hover kar raha hai 'Confirm' button pe — nervous hai, excited bhi. Pehli baar bank ke bahar paisa ja raha hai.",
    dialogue: "Yaar darr lag raha hai... ₹5,000 ja raha hai bank se bahar. Lekin Priya ne bola — risk nahi, smart move. Chalo, kiya jaaye! Pehla sikka daal diya market mein. Ab dekhte hain kya hota hai.",
    speaker: "Arjun",
    lesson: "Pehla investment hamesha darr lagta hai — yeh normal hai. Par risk zero nahi hota kabhi, sirf kam hota hai. Index fund se start karna sabse smart choice hai — diversified, low cost, historically 12%+ returns long term mein.",
    emoji: "📖",
    choice: {
      id: "m5-ch4-c1",
      text: "Market gir gaya toh? Sab paisa doob jaayega! 📉",
      isCorrect: false,
      feedback: "Short term mein market upar neeche hota hai — yeh normal hai! Par long term (5+ saal) mein equity hamesha upar jaati hai. SIP se market crash mein zyada units milte hain — saasta me kharidna! Patience = Profit."
    },
    xpReward: 20
  }, {
    id: "m5-ch5",
    chapterNumber: 5,
    title: "Ek Saal Baad — Pehla Return! 📈",
    scene: "12 mahine baad — Arjun apna portfolio kholta hai. ₹5,000 invest kiya tha, ab value hai ₹5,750. ₹750 ka profit! Chhota lag raha hai par percentage mein 15% return. Bank mein rehta toh sirf ₹175 milta. Difference clear hai.",
    dialogue: "₹750 profit! Chhota lag raha hai par 15% return! Bank mein ₹175 milta, yahan ₹750. Yeh toh 4 guna zyada hai! Ab samajh aaya — paisa kaam karna chahiye, sirf bank mein sone nahi dena chahiye. Investing hi asli growth ka raasta hai!",
    speaker: "Arjun",
    lesson: "₹5,000 ka 15% = ₹750 vs ₹5,000 ka 3.5% = ₹175. Difference = ₹575. Yeh ek saal ka hai — 10 saal mein yeh difference lakho mein ho jaata hai compounding se. Investing se inflation ko haraao aur wealth banaao.",
    emoji: "📈",
    xpReward: 20
  }]
},
// ============================================================
// MODULE 6: "Mutual Funds & SIP" (Mutual Funds)
// Story: "SIP Ki Kahani"
// ============================================================
{
  moduleId: 6,
  storyTitle: "SIP Ki Kahani",
  storySubtitle: "₹500 se shuru karke lakho tak ka safar",
  characterEmoji: "📈",
  settingDescription: "Arjun ko mutual funds ke baare mein suna hai par usse lagta hai yeh sirf ameer logon ke liye hai. Priya usse sikhati hai ki SIP se ₹500 mein bhi investing shuru ho sakti hai — aur yeh sabse smart tarika hai.",
  chapters: [{
    id: "m6-ch1",
    chapterNumber: 1,
    title: "Mutual Fund? Ameer Logon Ke Liye! 😤",
    scene: "Arjun TV pe mutual fund ka ad dekhta hai — 'Mutual funds are subject to market risk'. Usse lagta hai yeh big investors ke liye hai, chhote logon ke liye nahi. ₹500 mein kya hoga? Priya yeh sun kar hasti hai.",
    dialogue: "Priya, mutual fund ameer logon ke liye hai. Mere paas toh ₹1,000 hi bachta hai mahine mein. Yeh sab SIP-SIP kya hai? Chhote investors ko kya milega? Fund managers toh bade logon ka paisa manage karte honge!",
    speaker: "Arjun",
    lesson: "Mutual Funds sabke liye hain — ₹500 se shuru ho sakte hain! SIP (Systematic Investment Plan) chhote investors ke liye hi bana hai. Har mahine fixed amount invest karo — fund manager professionally manage karta hai. Equal opportunity hai sabke liye.",
    emoji: "😤",
    xpReward: 10
  }, {
    id: "m6-ch2",
    chapterNumber: 2,
    title: "NAV, Units Aur Compounding 🧮",
    scene: "Priya Arjun ko whiteboard pe samjhati hai — NAV (Net Asset Value), units kaise milte hain, aur compounding kaise kaam karta hai. Arjun ko lagta hai yeh complex hai, par Priya simple analogy se samjhati hai.",
    dialogue: "Arjun, NAV jaise khareedne ki keemat hai. ₹1,000 invest kiya, NAV ₹50 hai = 20 units mile. Agar NAV ₹60 ho gaya toh tumhare 20 units ki value ₹1,200! Aur compounding — pehle saal ka return doosre saal ke principal mein add hota hai. Snowball rolling downhill!",
    speaker: "Priya",
    lesson: "NAV = Mutual fund ki per unit keemat. Units = Tumhara hissa fund mein. Jab NAV badhta hai, tumhare units ki value badhti hai. SIP se har mahine naye units milte hain — market upar ho ya neeche, long term mein compounding ka jaadu kaam karta hai.",
    emoji: "🧮",
    choice: {
      id: "m6-ch2-c1",
      text: "Market neeche ho toh zyada units milenge — saaste mein kharidna! 🛒",
      isCorrect: true,
      feedback: "Genius! Yehi SIP ki power hai — market neeche jaaye toh zyada units milte hain (saaste mein kharid). Jab market upar aaye toh woh zyada units zyada value ke hote hain. Rupee cost averaging kehte hain isse!"
    },
    xpReward: 15
  }, {
    id: "m6-ch3",
    chapterNumber: 3,
    title: "₹1,000/Mahine Ka SIP Shuru 🚀",
    scene: "Arjun ne finally ek Nifty 50 index fund mein ₹1,000/month SIP start kiya. Auto-debit set kiya, KYC complete kiya, aur pehla installment deduct hua. Pehli baar usse feel hua ki woh investor ban gaya hai.",
    dialogue: "Done! ₹1,000/mahine Nifty 50 index fund mein. Auto-debit ON hai — harr mahine 5th date pe paisa jaayega. Mujhe kuch bhi karna nahi, bas dekhta jaao. Pehli baar lag raha hai — main bhi investor hoon!",
    speaker: "Arjun",
    lesson: "SIP start karna itna simple hai: 1) KYC complete karo (PAN + Aadhaar), 2) Fund chuno (Nifty 50 index fund best for beginners), 3) Amount set karo, 4) Auto-debit ON karo. Bas! Har mahine paisa invest hoga automatically.",
    emoji: "🚀",
    xpReward: 15
  }, {
    id: "m6-ch4",
    chapterNumber: 4,
    title: "Market Crash — Panic Mode! 📉",
    scene: "8 mahine baad — market crash! Arjun ka portfolio -18% mein hai. Uska ₹8,000 invested ab ₹6,560 hai. WhatsApp groups mein sab 'sell karo! market aur girega!' bol rahe hain. Arjun ka haath phone pe hai — stop SIP button dabaane wala hai.",
    dialogue: "Arjun, ruk! Market crash = SALE! Jab mall pe discount hota hai toh tum khareedte ho na? Toh market pe discount pe kyun bech rahe ho? SIP continue karo — abhi zyada units mil rahe hain saste mein. Jab market wapas aayega, tumhare paas zyada units honge = zyada profit. Patience is literally paying!",
    speaker: "Priya",
    lesson: "Market crash mein panic mat karo, SIP continue karo! Crash mein tum saste mein zyada units kharid rahe ho. Jab market recover hoga (hamesha hota hai), tumhara portfolio zyada fast grow karega. Historically, har crash ke baad market naya high banata hai.",
    emoji: "📉",
    choice: {
      id: "m6-ch4-c1",
      text: "SIP stop kar deta hoon, baad mein jab market theek ho tab wapas shuru 😰",
      isCorrect: false,
      feedback: "SIP stop karna = sabse badi galti! Market neeche = best time to invest. SIP ka fayda hi yeh hai ki crash mein automatic saaste mein kharidna hota hai. Jab market upar aaye tab toh mehnge mein kharidoge — ulta ho jaayega!"
    },
    xpReward: 20
  }, {
    id: "m6-ch5",
    chapterNumber: 5,
    title: "3 Saal Baad — SIP Jeeti! 🏆",
    scene: "3 saal baad — Arjun ka SIP portfolio kholta hai. Total invested: ₹36,000 (₹1,000 × 36 mahine). Current value: ₹49,200. Market crash bhi aaya, recovery bhi hua, aur Arjun ne SIP continue rakha. Result: ₹13,200 profit + compounding sikha di.",
    dialogue: "₹36,000 invest kiya, ₹49,200 mil raha hai! 3 saal mein ₹13,200 profit — aur yeh toh shuru hai! Crash aaya, panic hua, par SIP nahi roka. Yehi SIP ki asli power hai — discipline + patience = profit. Ab toh aur badhaana hai SIP!",
    speaker: "Arjun",
    lesson: "SIP ki 3 powers: 1) Rupee Cost Averaging (market up/down, average price balanced), 2) Compounding (long term mein exponential growth), 3) Discipline (auto-debit, emotion nahi). 3 saal mein ₹13,200 profit — 20 saal mein yeh ₹15 lakh+ ban sakta hai!",
    emoji: "🏆",
    xpReward: 20
  }]
},
// ============================================================
// MODULE 7: "Tax Ka Sach" (Tax)
// Story: "Salary Se Tax Tak"
// ============================================================
{
  moduleId: 7,
  storyTitle: "Salary Se Tax Tak",
  storySubtitle: "TDS ka shock aur tax saving ke raaste",
  characterEmoji: "🧾",
  settingDescription: "Arjun ne apni pehli payslip dekhi — salary ₹20,000 thi par ₹17,000 aaye. ₹3,000 'TDS' mein kaat gaye. Kya hai yeh TDS? Kahan gaya uska paisa? Tax ka sach jaanne ka waqt aaya hai.",
  chapters: [{
    id: "m7-ch1",
    chapterNumber: 1,
    title: "TDS Kya Hai?! Mere ₹3,000 Kahan Gaye? 😡",
    scene: "Payday — Arjun ne salary slip download ki. Expected: ₹20,000. Received: ₹17,000. Line item: 'TDS - ₹3,000'. Arjun ka chehra laal ho gaya — uska paisa kaun kaat raha hai aur kyun? HR ko call kiya — 'Yeh normal hai sir'. Normal?!",
    dialogue: "₹3,000 kaat gaye?! Yeh TDS kya hai? Mera paisa kyun kaat rahe hain bina pooche? Yeh toh chorii hai! HR bol raha hai normal hai — kya normal hai isme? Mujhe apna pura salary chahiye!",
    speaker: "Arjun",
    lesson: "TDS = Tax Deducted at Source. Salary se pehle hi tax kaat liya jaata hai — yeh law hai, chorii nahi. India mein income tax lagta hai agar income ₹2.5 lakh/year se zyada ho. Lekin tax bachaane ke legal tareeke bhi hain!",
    emoji: "😡",
    choice: {
      id: "m7-ch1-c1",
      text: "Tax dena hi nahi chahiye — mera paisa hai, meri marzi! 🚫",
      isCorrect: false,
      feedback: "Tax dena legal responsibility hai — nahi dena criminal offense! Lekin legal deductions use karke tax KAM kar sakte ho. Tax evasion (chhupana) aur tax avoidance (bachana) mein farak hai — avoidance legal hai!"
    },
    xpReward: 10
  }, {
    id: "m7-ch2",
    chapterNumber: 2,
    title: "Tax Slabs Aur Deductions 📊",
    scene: "Priya Arjun ko tax slab samjhati hai — ₹2.5 lakh tak no tax, ₹2.5-5 lakh pe 5%, ₹5-10 lakh pe 20%. Arjun ki annual salary ₹2,40,000 — actually no tax! Lekin TDS kaat gaya kyunki employer ko nahi pata deductions ke baare mein. Refund mil sakta hai!",
    dialogue: "Arjun, tumhari salary ₹2,40,000/year — yeh ₹2.5 lakh slab ke neeche hai! Tumhe tax hi nahi dena padna! Employer ne TDS kaata kyunki unhe nahi pata tum deductions declare karoge. ITR file karo — ₹3,000 ka refund milega!",
    speaker: "Priya",
    lesson: "Tax slabs: ₹0-2.5L = 0%, ₹2.5-5L = 5%, ₹5-10L = 20%, ₹10L+ = 30%. Agar tumhari salary slab ke neeche hai ya deductions se taxable income kam hoti hai, toh TDS refund milta hai ITR file karne pe!",
    emoji: "📊",
    xpReward: 15
  }, {
    id: "m7-ch3",
    chapterNumber: 3,
    title: "Section 80C — Tax Saving Ka Brahmastra 🎯",
    scene: "Priya Arjun ko Section 80C ke baare mein batati hai — ₹1.5 lakh tak ka investment/expense tax-free! PPF, ELSS, life insurance, home loan principal — sab 80C mein aate hain. Arjun ke liye yeh goldmine hai.",
    dialogue: "Section 80C se ₹1.5 lakh tak ka investment ya expense se tax bachao! PPF, ELSS mutual fund, life insurance premium, children's tuition fee — sab count hota hai. Agar tum ₹1.5 lakh ELSS mein invest karte ho, toh tax saving = ₹30,000+! Investment bhi, tax bachat bhi!",
    speaker: "Priya",
    lesson: "Section 80C = ₹1.5 lakh tak tax deduction. Best options: ELSS (3 saal lock-in, 12%+ returns), PPF (15 saal, tax-free returns), NPS (retirement focus). ELSS sabse best for young investors — kam lock-in, accha return, tax save.",
    emoji: "🎯",
    choice: {
      id: "m7-ch3-c1",
      text: "ELSS mein invest karunga — tax bhi bachega, return bhi milega! 💰",
      isCorrect: true,
      feedback: "Smart choice! ELSS = tax saving + wealth creation double benefit. ₹1.5 lakh invest kiya = ₹30,000+ tax saved + 12% long-term returns. Sabse smart tax-saving investment for young Indians!"
    },
    xpReward: 20
  }, {
    id: "m7-ch4",
    chapterNumber: 4,
    title: "Pehli ITR — Itni Aasan Thi?! 🤯",
    scene: "Arjun ITR file kar raha hai pehli baar. Income Tax portal pe login kiya, Form 16 upload kiya, deductions declare kiye, aur — done! 15 minute mein ho gaya. Itni aasan thi? Arjun ko lagta tha CA chahiye hoga.",
    dialogue: "Bas?! 15 minute mein ho gaya?! Form 16 se sab auto-fill ho gaya, Section 80C daala, bank details daali, aur verify! Yeh toh Instagram se bhi easy hai! Pehle itna darr lagta tha tax filing se — sab drama tha!",
    speaker: "Arjun",
    lesson: "ITR filing aasan hai — Form 16 se details aati hain, portal pe step-by-step guide hoti hai. Salary income wale log khud file kar sakte hain. Last date: July 31. Time pe file karo — late filing penalty ₹5,000 tak lag sakta hai.",
    emoji: "🤯",
    xpReward: 15
  }, {
    id: "m7-ch5",
    chapterNumber: 5,
    title: "₹18,000 Bach Gaye! 💸",
    scene: "2 mahine baad — Arjun ka bank account mein ₹18,000 credit ho gaya. Tax refund! Usne ELSS mein invest kiya tha Section 80C ke tehat, aur ITR file karke refund claim ki. Paisa wapas aaya — legally!",
    dialogue: "₹18,000 refund! Yeh toh bonus jaisa hai! Tax bacha ke invest kiya, aur ab refund bhi aa gaya. Pehle tax dene se darr lagta tha, ab tax planning se paisa bachta hai. Smart tax planning = extra income, bina overtime ke!",
    speaker: "Arjun",
    lesson: "Tax planning se ₹18,000+ bach sakte hain legally! Section 80C (₹1.5L), 80D (health insurance ₹25K), HRA exemption — sab use karo. ITR time pe file karo, refund claim karo. Tax saved = paisa earned!",
    emoji: "💸",
    xpReward: 15
  }]
},
// ============================================================
// MODULE 8: "Insurance Ka Kavach" (Insurance)
// Story: "Andhera Aur Umbrella"
// ============================================================
{
  moduleId: 8,
  storyTitle: "Andhera Aur Umbrella",
  storySubtitle: "Insurance — baarish se pehle ki chhatri",
  characterEmoji: "☂️",
  settingDescription: "Arjun ka dost Rohit bike accident mein ghayal ho gaya — hospital bill ₹2,50,000. Insurance nahi tha. Family ne udhaar kiya. Yeh incident Arjun ke liye bada lesson ban gaya — andhera aane se pehle umbrella khareedna zaroori hai.",
  chapters: [{
    id: "m8-ch1",
    chapterNumber: 1,
    title: "Hospital Bill — ₹2,50,000 💔",
    scene: "Arjun hospital jaata hai apne dost Rohit se milne. Rohit ke papa corridor mein baithe hain — aankhein surkhi, haath kaanpte. Bill aaya hai ₹2,50,000 — surgery, ICU, medicines. Insurance nahi hai. Relatives se udhaar maang rahe hain.",
    dialogue: "Rohit ka accident itna sudden tha — aur hospital bill itna bada. Unke paas insurance nahi tha, ab poore family par karz ka bojh hai. Yeh dekh ke darr lag raha hai... meri bhi koi insurance nahi hai. Agar mere saath kuch ho toh?",
    speaker: "Arjun",
    lesson: "Bina insurance ke ek medical emergency poore family ko financial ruin kar sakti hai. ₹2,50,000 ka bill average Indian family ke liye 1-2 saal ki savings kha jaata hai. Insurance nahi luxury hai — yeh zaroorat hai.",
    emoji: "🏥",
    choice: {
      id: "m8-ch1-c1",
      text: "Insurance toh ameer logon ke liye hai, mujhe nahi chahiye 🤷",
      isCorrect: false,
      feedback: "Galat! Insurance ameer ke liye nahi, middle class ke liye sabse zaroori hai. Ameer log bill de sakte hain, middle class nahi. Insurance sach mein un logon ke liye hai jo bill afford nahi kar sakte — jaise hum!"
    },
    xpReward: 10
  }, {
    id: "m8-ch2",
    chapterNumber: 2,
    title: "Umbrella Khareedo Baarish Se Pehle ☂️",
    scene: "Priya Arjun ko insurance ka simple analogy samjhati hai — umbrella. Baarish aane ke baad umbrella khareedne ka kya faida? Insurance bhi aise hi hai — bimaar hone ke baad khareedne ka kya matlab? Pehle se khareedo, jab zaroorat ho toh use karo.",
    dialogue: "Arjun, insurance jaise umbrella hai — baarish shuru hone se pehle khareedo. Jab tak need nahi aati tab tak lagta hai paisa barbaad ho raha hai. Par jab baarish aati hai, toh us umbrella ki value samajh aati hai. Premium = chhota kharcha, bada protection.",
    speaker: "Priya",
    lesson: "Insurance premium = chhota regular payment bade risk ke khilaf. ₹500-1,000/mahine ka premium ₹5-10 lakh ki cover deta hai. Yeh expense nahi, protection hai. Jab tak need nahi aati, lagta hai bekaar hai — par jab aati hai, life-saver hota hai.",
    emoji: "☂️",
    xpReward: 15
  }, {
    id: "m8-ch3",
    chapterNumber: 3,
    title: "Health Insurance vs Life Insurance 🤔",
    scene: "Arjun confused hai — health insurance bhi chahiye, life insurance bhi? Dono mein kya farak hai? Priya explain karti hai — health insurance hospital bills ke liye, life insurance family ke liye (agar kuch ho jaaye toh).",
    dialogue: "Simple — Health Insurance = tumhare ilaaj ke liye, Life Insurance = tumhare parivaar ke liye. Health se hospital bills cover hoti hain, Life se agar tum nahi raho toh family ko financial support milta hai. Dono alag hain, dono zaroori hain. Pehle health, phir life — yeh order follow karo.",
    speaker: "Priya",
    lesson: "Health Insurance: hospital bills, surgery, ICU covered. Premium ₹500-1,500/mahine, cover ₹5-10 lakh. Life Insurance: family ko financial support agar tum nahi raho. Term plan best hai — ₹500-1,000/mahine, cover ₹50 lakh-1 crore. Dono chahiye, uljhao nahi!",
    emoji: "🤔",
    choice: {
      id: "m8-ch3-c1",
      text: "Pehle health insurance, phir term life insurance — sahi order! ✅",
      isCorrect: true,
      feedback: "Bilkul correct! Health insurance pehle kyunki medical emergency zyada common hai young logon mein. Term life bhi zaroori hai agar dependents hain. Dono separate plans lo — combo plans expensive aur confusing hote hain."
    },
    xpReward: 15
  }, {
    id: "m8-ch4",
    chapterNumber: 4,
    title: "Pehla Health Insurance — ₹500/Mahine 🏥",
    scene: "Arjun ne apni pehli health insurance khareedi — ₹5 lakh cover, ₹500/mahine premium. Cashless treatment milega 5000+ hospitals mein. No room rent limit. Pre-existing diseases 4 saal baad covered. Relief feel ho raha hai.",
    dialogue: "₹500/mahine — yeh toh do chai ka kharcha hai! Aur iske badle ₹5 lakh ka protection? Yeh toh no-brainer hai! Ab agar kuch ho bhi jaaye toh hospital bill ki tension nahi hai. Cashless treatment milega — pehle paisa nahi, treatment!",
    speaker: "Arjun",
    lesson: "₹500/mahine ka health insurance = ₹5 lakh+ cover. Features dhundho: Cashless network, no room rent capping, restore benefit, no co-pay. Young age mein premium kam hota hai — jitna jaldi khareedo, utna sasta padta hai. Don't wait!",
    emoji: "🏥",
    xpReward: 15
  }, {
    id: "m8-ch5",
    chapterNumber: 5,
    title: "Peace Of Mind — Ab Tension Nahi! 😌",
    scene: "6 mahine baad — Arjun ko dengue ho gaya. Hospital mein 3 din — bill ₹35,000. Lekin Arjun ne cashless insurance use kiya. Zero payment from pocket. Treatment hua, recover hua, aur ek bhi rupee udhaar nahi kiya. Insurance ne bacha liya.",
    dialogue: "Rohit ke saath jo hua tha — ₹2,50,000 ka bill, udhaar, tension — mere saath nahi hua. Insurance ne bill pay kar diya, cashless! Ab samajh aaya — insurance premium nahi, peace of mind ka price hai. ₹500/mahine mein itni tension door — best deal ever!",
    speaker: "Arjun",
    lesson: "Insurance = Peace of mind. Medical emergency aani nahi dekhti — but preparation rakh sakte hain. Health + Life insurance dono zaroori hain. Young age mein khareedo = kam premium + zyada coverage. Yeh kharcha nahi, investment hai tumhari safety mein.",
    emoji: "😌",
    xpReward: 20
  }]
},
// ============================================================
// MODULE 9: "Digital Payments & UPI" (Digital Finance)
// Story: "Phone Se Payment"
// ============================================================
{
  moduleId: 9,
  storyTitle: "Phone Se Payment",
  storySubtitle: "UPI ki convenience aur safety ke rules",
  characterEmoji: "📱",
  settingDescription: "Arjun ne UPI se paisa galat number pe bhej diya — ₹2,000 gayab! Ab seekhna padega digital payments ke safety rules, warna har transaction mein risk hai. Convenience ke saath caution bhi zaroori hai.",
  chapters: [{
    id: "m9-ch1",
    chapterNumber: 1,
    title: "Galat UPI ID — ₹2,000 Gayab! 😱",
    scene: "Arjun ko friend ko ₹2,000 bhejne the. Jaldi mein UPI ID galat type kar di — ek letter miss ho gaya. Payment ho gaya — 'Success'! Lekin paise us friend ko nahi gaye, kisi unknown ko chale gaye. Ab wapas maangne mein takleef.",
    dialogue: "Nooo! ₹2,000 galat number pe chale gaye! Ek chhota sa typo aur itna bada loss! UPI itna fast hai ki ek click mein paisa gayab. Ab kya karu? Yeh toh nightmare hai! Digital payment easy hai par itna risky bhi!",
    speaker: "Arjun",
    lesson: "UPI payment instant aur irreversible hai — ek baar gaya toh wapas aana mushkil. Har transaction se pehle UPI ID ya number 2 baar check karo. ₹1 test payment bhejo pehle, phir bada amount. Speed ke saath caution zaroori hai.",
    emoji: "😱",
    choice: {
      id: "m9-ch1-c1",
      text: "UPI se payment safe nahi hai — cash use karunga! 💵",
      isCorrect: false,
      feedback: "UPI safe hai — galat usage risky hai! Cash bhi kho sakta hai, chori ho sakta hai. UPI ke safety rules follow karo: verify karo, test amount bhejo, then pay. Cash se zyada traceable hai UPI."
    },
    xpReward: 10
  }, {
    id: "m9-ch2",
    chapterNumber: 2,
    title: "UPI Safety Rules — Priya Ki Class 🛡️",
    scene: "Priya Arjun ko UPI safety ke golden rules samjhati hai. UPI PIN kisi ko mat batao. QR code scan se pehle verify karo. Unknown links pe click mat karo. Screen lock zaroori hai. Arjun sab notes le raha hai.",
    dialogue: "UPI ke 5 golden rules: 1) PIN kisi ko mat batao — NA MOM KO, 2) QR code scan se pehle amount check karo, 3) Unknown payment links mat open karo, 4) UPI app mein screen lock lagao, 5) Payment se pehle naam 2 baar verify karo. Simple rules, powerful protection!",
    speaker: "Priya",
    lesson: "UPI Safety: PIN secret rakho, QR verify karo, unknown links avoid karo, screen lock lagao, recipient verify karo. Yeh 5 rules follow karo toh UPI duniya ka sabse convenient aur safe payment method hai.",
    emoji: "🛡️",
    xpReward: 15
  }, {
    id: "m9-ch3",
    chapterNumber: 3,
    title: "Digital Ledger — Har Payment Ka Record 📒",
    scene: "Arjun apne phone pe UPI payment history dekh raha hai — har transaction ka record hai. Date, time, amount, recipient — sab details. Pehle cash se yeh tracking impossible tha. Ab digital se sab evidence hai.",
    dialogue: "Yaar yeh toh amazing hai! Pichle 3 mahine ka har payment record hai — ₹450 grocery, ₹200 chai, ₹1,500 rent. Cash se yeh kabhi possible nahi tha. Digital payment ka sabse bada fayda — automatic tracking! Budgeting itni easy ho gayi hai!",
    speaker: "Arjun",
    lesson: "Digital payments ka hidden benefit = automatic expense tracking. Har transaction recorded hai — date, amount, recipient. Cash mein koi receipt nahi milti. UPI se budgeting accurate aur easy hoti hai. Data driven decisions lo!",
    emoji: "📒",
    xpReward: 15
  }, {
    id: "m9-ch4",
    chapterNumber: 4,
    title: "OTP Ka Scam — 'Bank Se Hai!' 🚨",
    scene: "Arjun ko call aata hai — 'Hello, main Bank of India se bol raha hoon, aapka account suspend ho jayega, OTP batao verification ke liye.' Professional sound kar raha hai. Arjun almost bata deta tha — lekin Priya ki baat yaad aayi.",
    dialogue: "RUK! OTP kabhi kisi ko mat bata — NAHI TOH NAHI! Bank kabhi OTP nahi maangta — kabhi! Yeh scam hai. Agar call aaye toh cut karo, bank ko directly call karke verify karo. OTP = tumhara paisa, kisi ko mat dena!",
    speaker: "Priya",
    lesson: "Bank KABHI OTP, PIN, ya CVV nahi maangta phone pe. Agar koi maang raha hai = SCAM. OTP share karna = paisa gift karna. Report karo: 1930 (national helpline) ya cybercrime.gov.in. Yaad rakho: OTP = Only To Protect!",
    emoji: "🚨",
    choice: {
      id: "m9-ch4-c1",
      text: "OTP bata dunga — bank se hi call aa raha tha! 😰",
      isCorrect: false,
      feedback: "FATAL MISTAKE! Bank kabhi OTP nahi maangta phone pe. Agar call mein OTP maang raha hai = 100% scam. OTP diya = paisa gaya. Ruko, socho, verify karo — bank ko khud call karke check karo!"
    },
    xpReward: 20
  }, {
    id: "m9-ch5",
    chapterNumber: 5,
    title: "Digital Finance Smart Guy 🤓",
    scene: "3 mahine baad — Arjun apne office mein digital payments ka expert ban gaya hai. Colleagues usse puchte hain UPI se related sawaal. Usne apna bhai ko bhi sikhaya — safety rules, right way to use, aur scams se bachne ke tips.",
    dialogue: "Pehle main hi scam ka shikaar hota tha, ab main dusron ko bacha raha hoon! Digital finance powerful hai — use it right. OTP kabhi share nahi, recipient hamesha verify, aur har transaction ka screenshot rakhna. Smart digital citizen = smart financial life!",
    speaker: "Arjun",
    lesson: "Digital finance ka faida uthao, par safety ke saath. UPI convenient hai, FASTag easy hai, mobile banking time save karta hai. Lekin rules follow karo: verify, protect PIN, avoid unknown links, report scams. Digital smart = financially smart!",
    emoji: "🤓",
    xpReward: 15
  }]
},
// ============================================================
// MODULE 10: "Financial Scams Se Bachav" (Fraud Protection)
// Story: "Thag Ka Jaal"
// ============================================================
{
  moduleId: 10,
  storyTitle: "Thag Ka Jaal",
  storySubtitle: "Double your money? = Double SCAM!",
  characterEmoji: "🎭",
  settingDescription: "Arjun ko WhatsApp pe ek aadat aata hai — 'Invest ₹10,000, get ₹20,000 in 30 days!' Yeh almost usse phansa le jaata hai. Lekin Priya ki training aur uski jagrukta bacha leti hai. Scams pehchanna seekhna zaroori hai.",
  chapters: [{
    id: "m10-ch1",
    chapterNumber: 1,
    title: "WhatsApp Forward — '100% Guarantee!' 📱",
    scene: "Arjun ke WhatsApp pe school friend ka message aata hai — ek group join karne ka link. 'Invest ₹10,000, get ₹20,000 in 30 days! 100% guaranteed returns! Limited seats!' Screenshot bhi hai payment ke — logon ko paisa mil raha hai. FOMO kick in!",
    dialogue: "Yaar dekh! ₹10,000 se ₹20,000 ek mahine mein! School friend ne bhi join kiya hai, usko mil bhi gaya hai! Limited seats hain — abhi join karna chahiye ya nahi? FOMO ho raha hai... kya yeh sach mein kaam karta hai?",
    speaker: "Arjun",
    lesson: "Agar koi scheme 'guaranteed' double return de rahi hai — yeh SCAM hai. Stock market bhi guarantee nahi deta. FD bhi nahi. Kaun deta hai? Scammer! Guaranteed high returns = Guaranteed fraud. Period.",
    emoji: "📱",
    choice: {
      id: "m10-ch1-c1",
      text: "Friend ko paisa mil gaya — toh safe hai! Abhi join karo! 🏃‍♂️",
      isCorrect: false,
      feedback: "Ponzi schemes mein pehle logon ko paisa milta hai — yehi trap hai! Woh paisa naye logon ke investment se aata hai. Jab naye log band ho jaayenge, poora scheme collapse ho jaayega. Early returns = bait, not proof!"
    },
    xpReward: 10
  }, {
    id: "m10-ch2",
    chapterNumber: 2,
    title: "Priya Ne Roka — Waqt Pe! 🛑",
    scene: "Arjun almost link click kar hi raha tha — tabhi Priya ka call aaya. Usne Arjun ka WhatsApp status dekha tha jismein usne scheme share kiya tha. Priya ne strict warning di — 'RUK! Yeh SCAM hai!'",
    dialogue: "Arjun, RUK! Yeh Ponzi scheme hai! Pehle logon ko paisa dete hain trust banane ke liye, phir jab bahut log invest kar lein, sab paisa le kar bhaag jaate hain. Tera friend abhi return le raha hai kyunki scheme abhi chal rahi hai — collapse hone mein time hai. Save yourself!",
    speaker: "Priya",
    lesson: "Ponzi scheme: Naye investors ka paisa purane investors ko dete hain. Jab naye investors band ho jaate hain, scheme collapse. Early investors return le jaate hain = proof ki tarah dikhta hai. Lekin yeh trap hai, bharosa nahi.",
    emoji: "🛑",
    xpReward: 15
  }, {
    id: "m10-ch3",
    chapterNumber: 3,
    title: "Agar Itna Accha Hai, Sab Ameer Kyun Nahi? 🤨",
    scene: "Priya Arjun ko ek simple logical test sikhati hai — 'Agar koi scheme itna profitable hai, toh woh aam logon ko kyun bata raha hai? Bank waale, fund managers, financial advisors — sab experts hain. Agar 100% return possible hota toh woh khud invest karte, WhatsApp pe forward nahi karte!'",
    dialogue: "Arjun, ek simple test — agar koi investment 100% guaranteed return de rahi hai, toh woh WhatsApp pe kyun share kar raha hai? Khud hi ameer ho jaata na! Warren Buffett bhi 20-25% return karta hai saal bhar mein — aur yeh random aadmi 100% guarantee de raha hai? Think logically, not emotionally!",
    speaker: "Priya",
    lesson: "Logical test for scams: Agar scheme sach mein itni profitable hai, toh 1) Banks khud invest karte, 2) Financial experts jaante, 3) WhatsApp pe forward nahi karte. High return + Low risk = SCAM. Always. No exceptions.",
    emoji: "🤨",
    choice: {
      id: "m10-ch3-c1",
      text: "Sahi kaha — itna easy hota toh sab ameer ho jaate! Logic check ✅",
      isCorrect: true,
      feedback: "Bingo! Yehi sabse powerful scam-detector hai — common sense. Koi bhi 'easy money' scheme mein ek second socho: itna easy hota toh sab kar rahe hote. Agar too good to be true lag raha hai — SCAM hai!"
    },
    xpReward: 15
  }, {
    id: "m10-ch4",
    chapterNumber: 4,
    title: "Common Scams Ka Encyclopedia 📚",
    scene: "Priya Arjun ko India ke common financial scams ka list dikhata hai — Ponzi schemes, phishing emails, fake apps, job frauds, lottery scams, KYC frauds. Har scam ka modus operandi samjhaya. Arjun shocked hai — itne tareeke hain logon ko chhune ke!",
    dialogue: "Yeh dekh Arjun — Phishing: fake bank email se details churaana. Fake apps: Play Store pe duplicate banking apps. Job fraud: job ke naam pe registration fees. KYC fraud: 'Account band hoga, KYC update karo' message. Lottery: 'Aapne ₹10 lakh jeeta!' Sab scam hain — koi bhi unsolicited offer = DANGER!",
    speaker: "Priya",
    lesson: "Common scams: 1) Ponzi/chain schemes, 2) Phishing emails/SMS, 3) Fake banking apps, 4) Job fraud (fees maango), 5) KYC update fraud, 6) Lottery/prize scams, 7) Investment seminar fraud. Koi bhi 'free' ya 'guaranteed' offer = red flag!",
    emoji: "📚",
    xpReward: 20
  }, {
    id: "m10-ch5",
    chapterNumber: 5,
    title: "Golden Rules — Too Good To Be True = SCAM 🏆",
    scene: "Arjun apne friends circle mein scam awareness spread karta hai. Usne 5 golden rules final kar liye hain — jo usse hamesha safe rakhenge. Aur uska school friend jo scheme mein pada tha — uska paisa doob gaya. Scheme collapse ho gayi 2 mahine mein.",
    dialogue: "5 Golden Rules: 1) Too good to be true = SCAM, 2) Guaranteed high return = fraud, 3) WhatsApp/Telegram investment group = trap, 4) KYC update link = phishing, 5) Hurry/limited time = pressure tactic. Aur haan — apna friend jisne ₹50,000 daale the... sab doob gaya. Scheme band ho gayi. Main bach gaya Sirf Priya ki wajah se!",
    speaker: "Arjun",
    lesson: "5 Scam Protection Rules: 1) Agar too good to be true lag raha hai, woh SCAM hai, 2) Guaranteed returns nahi hote investing mein, 3) Unsolicited offers ignore karo, 4) Personal details kabhi share mat karo, 5) Verify karo — official website ya helpline se. Share these rules, save others!",
    emoji: "🏆",
    xpReward: 20
  }]
},
// ============================================================
// MODULE 11: "Financial Freedom Ka Raasta" (Financial Freedom)
// Story: "Azaadi Ka Sapna"
// ============================================================
{
  moduleId: 11,
  storyTitle: "Azaadi Ka Sapna",
  storySubtitle: "5 saal ka safar — ₹20,000 se financial freedom tak",
  characterEmoji: "🌅",
  settingDescription: "5 saal baad — Arjun 27 ka hai. ₹5 lakh invested, emergency fund ready, koi debt nahi, insurance hai, aur investments se passive income aa rahi hai. Yeh woh Arjun nahi jo ₹47 pe khada tha — yeh naya Arjun hai. Confident. Free. Ready to help others.",
  chapters: [{
    id: "m11-ch1",
    chapterNumber: 1,
    title: "Arjun At 27 — ₹5 Lakh Invested! 🏔️",
    scene: "Arjun apna portfolio dashboard dekh raha hai — Mutual Funds: ₹3,80,000, PPF: ₹1,20,000, Emergency Fund: ₹90,000, Insurance: Active. Total invested: ₹5,00,000+. Koi debt nahi. Koi EMI nahi. Yeh 5 saal pehle sochna bhi impossible tha.",
    dialogue: "₹5 lakh invested! Jab pehli salary ₹20,000 thi aur ₹47 pe khada tha ATM ke saamne, tab yeh sochna bhi impossible tha. Lekin ek ek ₹1,000 ka SIP, ek ek smart choice, aur 5 saal ki discipline — yeh sab mumkin kar diya. Power of starting early!",
    speaker: "Arjun",
    lesson: "5 saal consistent investing + discipline = significant wealth. ₹5 lakh invested at 27 means by 47, compounding can make it ₹50 lakh+ at 12%. The best time to start was 5 years ago, the second best time is NOW.",
    emoji: "🏔️",
    xpReward: 10
  }, {
    id: "m11-ch2",
    chapterNumber: 2,
    title: "Salary ₹45,000 — Par Lifestyle Nahi Badha 🧠",
    scene: "Arjun ki salary ab ₹45,000 hai — pehle se zyada double. Lekin uska lifestyle ₹20,000 wale se zyada badha nahi hai. Lifestyle inflation control kiya hai — zyada salary ka zyada paisa investing mein jaata hai, shopping mein nahi.",
    dialogue: "Salary ₹20,000 se ₹45,000 ho gayi, par mera monthly kharcha sirf ₹15,000 se ₹18,000 badha. Baaki sab extra paisa investing mein jaata hai. Lifestyle inflation sabse chupi dushman hai — salary badhti hai toh kharcha bhi badhana easy hai. Par maine control kiya. Smart, not show-off!",
    speaker: "Arjun",
    lesson: "Lifestyle inflation = salary badhne par kharcha bhi badhana. Yeh wealth killer hai! Smart rule: salary badhe toh 50% extra investing mein daalo, sirf 50% lifestyle mein allow karo. Rich people stay rich because they spend less than they earn — consistently.",
    emoji: "🧠",
    choice: {
      id: "m11-ch2-c1",
      text: "Salary badhi toh lifestyle upgrade karna toh natural hai! 🛋️",
      isCorrect: false,
      feedback: "Natural hai, par smart nahi! Lifestyle inflation wealth kha jaata hai. ₹10,000 salary badhi = ₹5,000 investing mein, ₹5,000 lifestyle mein. Yeh 50-50 rule wealth banata hai. Full lifestyle upgrade = wealth destruction."
    },
    xpReward: 15
  }, {
    id: "m11-ch3",
    chapterNumber: 3,
    title: "Passive Income — Paisa Khud Kaam Kar Raha Hai 💰",
    scene: "Arjun apne monthly statement dekh raha hai — Mutual Fund se ₹4,500 dividend/capital gain, PPF interest ₹9,000/year, FD interest se thoda. Total passive income: ₹5,000-6,000/month approximately. Yeh paisa bina kaam kiye aa raha hai!",
    dialogue: "₹5,000-6,000 mahine ka passive income — aur maine iske liye koi extra kaam nahi kiya! Bas paisa sahi jagah invest kiya aur time diya. Yeh compounding ka asli jaadu hai — tum so jaao, paisa kaam kare. Financial freedom ka matlab yeh hai!",
    speaker: "Arjun",
    lesson: "Passive income = paisa bina active work ke aana. Investments, dividends, interest, rental income — yeh sab passive income hain. Jab passive income = monthly expenses, tab financial freedom aa jaata hai. Target: ₹50,000/month passive income = early retirement possible!",
    emoji: "💰",
    xpReward: 15
  }, {
    id: "m11-ch4",
    chapterNumber: 4,
    title: "Chhote Bhai Ko Sikhaana 🎓",
    scene: "Arjun ka 18 saal ka chhota bhai Kabir college jaane wala hai. Arjun use sab sikhata hai — jo usne 5 saal mein seekha. Budgeting, savings, investing, insurance, scam se bachna — ek complete guide. Kabir impressed hai aur ready hai smart start karne ke liye.",
    dialogue: "Kabir, main 22 ki umar mein yeh sab nahi jaanta tha — mujhe lagta tha credit card free paisa hai, savings account best investment hai, aur ₹47 pe khada hona normal hai. Tujhe 18 mein hi yeh sab batata hoon — tu 22 tak aa kar mere se 4 saal aage hoga. Start early, win big!",
    speaker: "Arjun",
    lesson: "Jo seekha, woh share karo — financial literacy spread karo. Apne siblings, friends, family ko sikhaao. India mein financial literacy sirf 27% hai — yeh badhaane ki zaroorat hai. Ek insaan seekh ke 10 ko sikhaaye toh movement ban jaata hai.",
    emoji: "🎓",
    choice: {
      id: "m11-ch4-c1",
      text: "Financial literacy share karna — yeh sabse bada charity hai! ❤️",
      isCorrect: true,
      feedback: "Sahi bola! Financial literacy sabse impactful knowledge hai — yeh ek aadmi ki zindagi badal deta hai. Jo jaanta hai, woh share kare — yeh sabse bada seva hai. Money Matters ka mission bhi yehi hai!"
    },
    xpReward: 15
  }, {
    id: "m11-ch5",
    chapterNumber: 5,
    title: "Financial Freedom ≠ Stop Working 💼",
    scene: "Arjun ab bhi kaam kar raha hai — par ab choice se, majboori se nahi. Woh apna kaam enjoy karta hai kyunki financial pressure nahi hai. Emergency fund hai, investments hain, insurance hai — ab kaam passion ke liye hai, survival ke liye nahi.",
    dialogue: "Log sochte hain financial freedom matlab retirement — galat! Freedom matlab choice hai. Main abhi bhi kaam karta hoon kyunki mujhe mera kaam pasand hai. Par ab boss ka pressure nahi, EMIs ka darr nahi, emergency ki tension nahi. Yehi asli azaadi hai — kaam ki choice, majboori nahi!",
    speaker: "Arjun",
    lesson: "Financial freedom ≠ retirement. Freedom = choice. Jab financial cushion ho, toh tum job choose kar sakte ho, negotiate kar sakte ho, risk le sakte ho. Kaam karna band nahi — kaam ki CHOICE milna hi financial freedom hai.",
    emoji: "💼",
    xpReward: 15
  }, {
    id: "m11-ch6",
    chapterNumber: 6,
    title: "Tum Bhi Yahan Pahunch Sakte Ho — Bas Shuru Karo! 🚀",
    scene: "Arjun apne journey ka timeline dekh raha hai — 22 saal: ₹47 balance, no savings, no insurance. 27 saal: ₹5 lakh invested, emergency fund, no debt, insured, passive income. 5 saal ki journey jisse koi bhi kar sakta hai. Final message — shuru karo, abhi!",
    dialogue: "5 saal pehle main ₹47 ke saath ATM ke saamne ro raha tha. Aaj ₹5 lakh invested hain, passive income aa rahi hai, aur financial freedom ka raasta dikh raha hai. Yeh koi miracle nahi — yeh discipline hai, consistency hai, aur 'shuru karne' ki himmat hai. Tum bhi yahan pahunch sakte ho. Bas... SHURU KARO!",
    speaker: "Arjun",
    lesson: "Arjun ka journey tumhara bhi ho sakta hai. Start karo — chahe ₹500 se ho. Budget banao, SIP start karo, insurance lo, scams se bacho. Har bada safar chhota kadam se shuru hota hai. Aaj ka din = start ka din. ₹0 se ₹5 lakh possible hai in 5 years with discipline. Your journey starts NOW! 🚀",
    emoji: "🚀",
    xpReward: 25
  }]
}];