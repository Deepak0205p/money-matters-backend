export const mistakeCategories = [{
  id: 'emi-trap',
  title: 'EMI Trap Shop',
  icon: 'ShoppingCart',
  color: '#ef4444',
  mistakes: [{
    id: 'emi-phone',
    title: 'Phone Ka EMI — Chhota Lekin Khatarnak',
    costCalculation: '₹79,900 phone + 24-month EMI = ₹95,976 total. Processing fee ₹1,500 + GST ₹270. Extra paid: ₹17,846! Agar yeh ₹3,999/month SIP mein jaata toh 5 saal mein ₹3,30,000+ corpus!',
    explanation: 'EMI pe phone khareedna aasan lagta hai — "sirf ₹3,999/mahine!" Lekin total cost calculate karo toh pata chalta hai ki ₹17,846 extra de rahe ho. Aur sabse bada loss: yeh paisa agar SIP mein jaata toh compounding se aur grow hota. Opportunity cost = ₹2,50,000+ over 10 saal!',
    solution: 'Phone khareedne ke liye 3 mahine pehle se ₹8,000/month bachao — 10 mahine mein paisa ready! Bina EMI, bina interest, bina stress. Ya refurbished phone lo ₹45,000 mein — same features, half price!',
    relatedModule: 5
  }, {
    id: 'emi-laptop',
    title: 'Laptop EMI — Study Tool Ya Status Symbol?',
    costCalculation: '₹90,000 laptop on 12-month EMI = ₹8,500/month, total ₹1,02,000. Extra: ₹12,000! Coding ke liye ₹50,000 ka laptop kaafi hai — ₹40,000 over-spec pe waste.',
    explanation: 'College ya coding ke liye ₹50,000 ka laptop sufficient hai, but FOMO se ₹90,000 ka khareed liya. EMI ke chakkar mein ₹12,000 extra interest + opportunity cost. Agar coding hi karna hai toh processor RAM matter karta hai, RGB lighting nahi!',
    solution: 'Requirement list banao — coding, browsing, ya gaming? Coding = ₹40-50K laptop. Gaming = console sasta padega. EMI se bacho — 2 mahine pehle se saving shuru karo, cash mein khareedo!',
    relatedModule: 5
  }, {
    id: 'emi-furniture',
    title: 'Furniture EMI — Ghar Sajane Ka Chakkar',
    costCalculation: '₹1,50,000 furniture on 18-month EMI = ₹9,500/month, total ₹1,71,000. Extra: ₹21,000! Second-hand se same furniture ₹50,000 mein mil jaata — ₹1,21,000 bachaat!',
    explanation: 'Naye ghar pe excitement mein sab kuch naya khareed liya — sofa, bed, dining table, TV unit — sab EMI pe! Lekin yaad rakho: furniture depreciation asset hai — 3 saal mein value 50% ghat jaati hai. EMI interest + depreciation = double loss!',
    solution: 'Start minimal — bed, basic kitchen items. OLX/Quikr se second-hand furniture lo (50-70% off!). Gradually upgrade jab savings ho. Rent pe furniture bhi option hai (Cityfurnish, Rentomojo) — ₹2,000/month!',
    relatedModule: 11
  }]
}, {
  id: 'credit-card-candy',
  title: 'Credit Card Candy Store',
  icon: 'CreditCard',
  color: '#f97316',
  mistakes: [{
    id: 'cc-min-payment',
    title: 'Minimum Payment Ka Jaal',
    costCalculation: '₹50,000 outstanding, minimum 5% = ₹2,500/month. Interest 36% on remaining ₹47,500 = ₹1,425/month interest. Sirf interest pay kar rahe ho! Full clear hone mein 5+ SAAL aur ₹60,000+ extra interest!',
    explanation: 'Minimum payment lagataar karna = financial suicide. Tum sirf interest cover kar rahe ho, principal barely kam ho raha. ₹50,000 ke purchase pe total ₹1,10,000+ pay kar doge — double! Credit card company isiliye minimum option deti hai — unka profit tumhara loss.',
    solution: 'Hamesha FULL payment karo — jo statement pe hai wahi pay karo. Agar afford nahi ho raha toh credit card use karna hi band karo! Emergency ke liye personal loan (12-15%) better hai credit card (36%) se.',
    relatedModule: 5
  }, {
    id: 'cc-reward-trap',
    title: 'Reward Points Ke Liye Overspend Karna',
    costCalculation: '₹10,000 extra kharcha rewards ke liye — mile 500 points = ₹250 value. Net loss: ₹9,750! Reward return rate sirf 2-5% — spending se zyada loss hota hai reward se fayda.',
    explanation: 'Credit card company bolti hai "5x reward points on shopping!" — tum ₹10,000 extra kharch karte ho toh 500 points milte hain jiski value ₹250 hai. Matlab tumne ₹9,750 loss kiya ₹250 ke liye! Rewards are designed to make you spend MORE, not save.',
    solution: 'Rewards sirf natural spending pe lo — zyada kharche ke liye nahi! Jo kharcha karna hi hai (bills, groceries) uspe rewards milenge. Extra spending se better cashback apps use karo.',
    relatedModule: 5
  }, {
    id: 'cc-cash-withdrawal',
    title: 'Credit Card Se Cash Nikalna',
    costCalculation: '₹10,000 cash withdrawal se Day 1 pe interest start (no 45-day free period!) @ 36% + withdrawal fee 2.5% = ₹250. One month mein interest ₹300. Total ₹10,550 for ₹10,000!',
    explanation: 'Credit card se cash nikalna sabse bada mistake hai — instant interest lagta hai (no grace period!), withdrawal fee 2.5-3%, aur interest 36-40%! Yeh loan se bhi expensive hai. ATM debit card se free withdrawal karo ya personal loan lo emergency mein.',
    solution: 'KABHI credit card se cash mat nikalo — yeh sabse expensive form of debt hai. Emergency mein savings use karo ya family se maango. Regular cash withdrawal ke liye debit card use karo — free ATM transactions milte hain!',
    relatedModule: 5
  }]
}, {
  id: 'subscription-sink',
  title: 'Subscription Sinkhole',
  icon: 'Repeat',
  color: '#a855f7',
  mistakes: [{
    id: 'sub-multiple-streaming',
    title: '5 Streaming Services — Par Time Sirf Ek Ke Liye',
    costCalculation: 'Netflix ₹649 + Amazon Prime ₹1,499/year + Disney+ ₹299 + Spotify ₹119 + YouTube Premium ₹149 = ₹1,615/month = ₹19,380/year! Agar sirf 2 rakho toh ₹8,000/year bachaat!',
    explanation: 'Sab subscriptions active hain par actually sirf 1-2 use hote hain! "Maybe dekh lunga" soch ke rakha hai. Har service auto-renew karti hai — notification miss kar diya aur paisa kaat gaya. ₹19,000/year mein 2 saal = ₹38,000 — yeh ek FD ka interest hai!',
    solution: 'Rotating subscriptions karo — ek mahine Netflix, agla Amazon. Cancel aur re-subscribe jaise zaroorat ho. Family plan share karo dost ke saath. Free alternatives check karo — YouTube, MX Player, free podcasts.',
    relatedModule: 2
  }, {
    id: 'sub-gym-unused',
    title: 'Gym Membership Jo Kabhi Use Nahi Hui',
    costCalculation: '₹3,000/month × 12 = ₹36,000/year. Actual visits: 8 times = ₹4,500 per visit! Ghar pe exercise = free. Park mein running = free. ₹36,000 saved!',
    explanation: 'January mein "naya saal, naya resolution" ke chakkar mein gym join kiya — February tak motivation gone! Lekin membership active hai, auto-renewal ON hai. ₹3,000/month silently kaat raha hai. Actually 8 baar gaye = ₹4,500 per visit — most expensive workout ever!',
    solution: 'Pehle 2 mahine ghar pe workout karo (free YouTube videos) — habit bane toh gym join karo. Pay-per-session model use karo (₹100-200/session) ya community center join karo (₹500/month). No long-term commitment without proof of consistency!',
    relatedModule: 2
  }, {
    id: 'sub-app-trials',
    title: 'Free Trials Jo Paid Ban Gaye',
    costCalculation: '5 app trials = ₹999 + ₹499 + ₹299 + ₹149 + ₹199 = ₹2,145/month × 6 mahine before you notice = ₹12,870 wasted! Notification off tha toh pata hi nahi chala.',
    explanation: 'Free trial sign up kiya — 7-day free, phir auto-charge. Calendar mein note nahi kiya, notification miss kar diya, aur 6 mahine baad pata chala ₹12,870 kat chuka hai! Yeh bahut common hai — companies isi pe count karti hain.',
    solution: 'Free trial lena hai toh SAME DAY pe calendar reminder set karo — cancel date 1 din pehle. Virtual debit card use karo (Rs.1 balance) — auto-charge fail ho jayega! Trial ke baad IMMEDIATELY cancel karo — access trial period end tak rehta hai!',
    relatedModule: 2
  }]
}, {
  id: 'lifestyle-inflation',
  title: 'Lifestyle Inflation Lane',
  icon: 'TrendingUp',
  color: '#f59e0b',
  mistakes: [{
    id: 'lifestyle-salary-hike',
    title: 'Salary Badhi Toh Kharcha Bhi Badh Gaya',
    costCalculation: 'Salary ₹20K → ₹30K (+₹10K). Par kharcha bhi ₹20K → ₹28K badh gaya! Actual savings increase: sirf ₹2,000. ₹8,000 lifestyle inflation mein gaya — better clothes, better restaurant, better area rent.',
    explanation: 'Salary badhne pe sabse common mistake: kharcha bhi badha dena! "Ab afford kar sakte hain" soch ke lifestyle upgrade kar liya. Lekin agar kharcha same rehta toh ₹8,000 extra monthly savings = ₹96,000/year! Salary hike ka fayda tabhi hai jab spending control mein hai.',
    solution: 'Salary hike ke baad PEHLE 50% extra income savings mein daalo — baaki 50% se lifestyle upgrade karo. Example: ₹10K extra = ₹5K savings + ₹5K lifestyle. Yeh rule follow karo toh wealth build hogi silently!',
    relatedModule: 2
  }, {
    id: 'lifestyle-brand-upgrade',
    title: 'Local Se Branded Ka Safar — Bank Balance Ka Crash',
    costCalculation: 'Local t-shirt ₹500 → Branded ₹2,500 (5x). Local shoes ₹1,500 → Branded ₹8,000 (5x). Mess food ₹80 → Restaurant ₹500 (6x). Monthly extra: ₹5,000+ = ₹60,000/year gone on labels!',
    explanation: 'Pehle local se kaam chalta tha — ab "status" ke liye branded chahiye. Problem: quality difference 5x nahi hai, price 5x hai! Brand tax = premium for logo. Same quality ka generic option half price mein mil sakta hai.',
    solution: 'Value-based spending karo — quality ke liye pay karo, label ke liye nahi. Comparison shopping karo. "Is this 5x better?" poochho khud se. Some items worth premium (shoes for running), most nahi (t-shirt mehngi sirf logo ke liye).',
    relatedModule: 1
  }, {
    id: 'lifestyle-house-upgrade',
    title: 'Chhota Flat Se Bada Flat — Rent Double!',
    costCalculation: '1RK ₹8,000 → 1BHK ₹15,000 = ₹7,000/month extra = ₹84,000/year! Plus deposit difference ₹30,000 + shifting cost ₹20,000. Total year 1 extra: ₹1,34,000! Yeh SIP mein jaata toh ₹1,75,000+ corpus ban jaata!',
    explanation: 'Single ya couple ke liye 1RK sufficient hai — lekin "dikhawa" ke liye 1BHK shift ho gaye. Extra room guest ke liye jo aate nahi! ₹7,000/month extra rent = ₹84,000/year = lagbhag 4.5 saal mein equity SIP se ₹5,00,000+ ho sakta tha!',
    solution: 'Space requirement ACTUALLY calculate karo — kitne log rehte hain? Kitni cheezein hain? Minimalism try karo — kam cheezein, kam space, zyada savings. Jab actual need ho (shaadi, family) tab upgrade karo — not for show!',
    relatedModule: 11
  }]
}, {
  id: 'no-insurance',
  title: 'No Insurance Trap',
  icon: 'ShieldOff',
  color: '#6366f1',
  mistakes: [{
    id: 'no-health-insurance',
    title: 'Bina Health Insurance Ka Darr',
    costCalculation: 'Dengue treatment: ₹1,50,000. Accident surgery: ₹3,00,000. ICU 5 days: ₹2,50,000. Bina insurance = saari savings khatam + debt. Insurance premium: ₹5,000-7,000/year — 1% of potential bill!',
    explanation: '"Mujhe toh kuch nahi hoga" — yeh overconfidence expensive hai. India mein 70% healthcare out-of-pocket hai. Ek medical emergency saari savings kha jaati hai. Young hone se disease nahi rukti — dengue, accident, appendix kisi ko bhi ho sakta hai!',
    solution: 'TODAY health insurance le lo — Rs.5,00,000 cover at age 25 = ₹5,000-7,000/year. Corporate insurance pe depend mat karo — job change pe zero coverage! Personal insurance = personal protection.',
    relatedModule: 9
  }, {
    id: 'no-term-insurance',
    title: 'Term Insurance "Waste" Samajhna',
    costCalculation: 'Agar kuch ho jaaye toh family ko ₹1,00,00,000 milega (₹10,000/year premium). Bina insurance: family debt mein ₹20,00,000+ (home loan, expenses). Difference: ₹1.2 Crore vs ₹-20 Lakh = ₹1.4 Crore swing!',
    explanation: '"Agar safe raha toh paisa waste" — yeh soch galat hai. Term insurance PROTECTION hai, investment nahi. Agar dependents hain (parents, spouse) toh UNKE liye zaroori hai. ₹10,000/year = ₹833/month = less than one restaurant meal! Family ki security itne mein?',
    solution: 'Agar koi depend hai tumpe — term insurance zaroor lo! ₹1 Crore cover = ₹8,000-12,000/year. Online term plans saste hain (HDFC Life, ICICI Pru). Early age = low premium locked for life! No dependents? Abhi nahi, baad mein lena.',
    relatedModule: 9
  }, {
    id: 'wrong-insurance-ulip',
    title: 'ULIP / Endowment Leke "Sab Cover" Samajhna',
    costCalculation: '₹50,000/year ULIP × 20 saal = ₹10,00,000 invested. Expected return: ₹14,00,000 (6-7% CAGR). Same amount Term (₹10K) + SIP (₹40K): Term cover ₹1Cr + SIP corpus ₹32,00,000+ (12% CAGR). Loss: ₹18,00,000+!',
    explanation: 'Agent ne bola "insurance + investment = double benefit!" — lekin actually double loss hai. ULIP mein high charges (5-10%) aur low returns (6-7%). Separate term insurance + SIP se better coverage + better returns + more flexibility. Insurance aur investing DONO alag karo!',
    solution: 'Insurance = Term plan (cheap, pure protection). Investment = SIP/Mutual Funds (better returns, flexible). Kabhi mix mat karo! ULIP, endowment, money-back — sab avoid karo. Agent ki commission tumhara loss hai!',
    relatedModule: 9
  }]
}];