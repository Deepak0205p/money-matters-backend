export const bubbleDictionaryTerms = [{
  id: "sip",
  term: "SIP",
  category: "Basic",
  emoji: "💸",
  seedhiBaat: "Systematic Investment Plan — har mahine fixed amount mutual fund mein lagana. Paise thoda-thoda lagte hain, market upar-niche chalega but average cost kam hoga.",
  realLife: "Ramesh har mahine 5th ko ₹5,000 SIP lagata hai 10 saal tak. 12% return se ₹11.6 lakh ka fund ban jaata hai — total ₹6 lakh lagaya tha, baaki sab compound ka jaadu!",
  quiz: {
    q: "SIP ka sabse bada faayda kya hai?",
    options: ["Guaranteed double return", "Rupee cost averaging + discipline", "Tax free 100%"],
    answer: 1
  }
}, {
  id: "emi",
  term: "EMI",
  category: "Basic",
  emoji: "📅",
  seedhiBaat: "Equated Monthly Installment — loan ko har mahine equal hisson mein chukana. Principal + interest dono mix hota hai.",
  realLife: "₹5 lakh ka 5 saal ka personal loan @ 14% — EMI ₹11,634 aati hai. Total payment ₹6.98 lakh, matlab ₹1.98 lakh sirf interest!",
  quiz: {
    q: "EMI mein shuru mein zyada kya hota hai?",
    options: ["Principal", "Interest", "Dono barabar"],
    answer: 1
  }
}, {
  id: "inflation",
  term: "Inflation",
  category: "Basic",
  emoji: "📈",
  seedhiBaat: "Cheezon ki keemat badhna — same ₹100 se kam samaan milta hai. India mein avg inflation ~6% hai.",
  realLife: "20 saal pehle 1 litre doodh ₹18 tha, aaj ₹60 hai. Agar tumhare paise FD mein 5% aa raha hai aur inflation 6% hai, toh actually tum poora ho rahe ho!",
  quiz: {
    q: "Real return kya hota hai?",
    options: ["FD rate", "FD rate - inflation", "Inflation - FD rate"],
    answer: 1
  }
}, {
  id: "cibil",
  term: "CIBIL",
  category: "Intermediate",
  emoji: "📊",
  seedhiBaat: "Credit score agency — 300 se 900 ke beech score deti hai. 750+ achha maana jaata hai loan ke liye.",
  realLife: "Priya ka CIBIL 810 hai — usse home loan 8.4% mila. Same loan Rohan ko 9.6% mila kyunki uska score 680 tha. 30 saal mein ₹14 lakh ka farq!",
  quiz: {
    q: "Achha CIBIL score konsa hai?",
    options: ["300-500", "550-700", "750+"],
    answer: 2
  }
}, {
  id: "ppf",
  term: "PPF",
  category: "Intermediate",
  emoji: "🏦",
  seedhiBaat: "Public Provident Fund — 15 saal ka government scheme, 7.1% tax-free return. Max ₹1.5 lakh/year, 80C tax benefit bhi.",
  realLife: "Ankit 25 saal ki age se ₹1.5L/year PPF bharta hai. 15 saal mein total ₹22.5L lagaye, but maturity pe ~₹40L milte hain — sab tax-free!",
  quiz: {
    q: "PPF ka lock-in period kya hai?",
    options: ["5 saal", "15 saal", "Koi nahi"],
    answer: 1
  }
}, {
  id: "nps",
  term: "NPS",
  category: "Intermediate",
  emoji: "👴",
  seedhiBaat: "National Pension System — retirement ke liye long-term invest. 60 saal tak lock, baad mein 60% lumpsum + 40% annuity.",
  realLife: "Meena 30 saal se ₹50K/year NPS karti hai. 60 saal tak ~₹1.3 crore ka corpus ban jaata hai. Plus 80CCD(1B) mein extra ₹50K tax save!",
  quiz: {
    q: "NPS mein extra tax benefit kitna milta hai?",
    options: ["₹50,000 (80CCD 1B)", "₹1,50,000", "Kuch nahi"],
    answer: 0
  }
}, {
  id: "mf",
  term: "Mutual Fund",
  category: "Basic",
  emoji: "🧺",
  seedhiBaat: "Logo ka paisa ek fund mein collect karke professional manager stock/bond mein lagata hai. Diversification aur expert dono milta hai.",
  realLife: "₹500 mahine se bhi Nifty 50 Index Fund le sakte ho. 50 top companies ka ownership chhote hisse mein — Reliance, HDFC, TCS sab ek saath!",
  quiz: {
    q: "Mutual Fund ka sabse bada faayda?",
    options: ["Guaranteed return", "Diversification + professional management", "Tax free"],
    answer: 1
  }
}, {
  id: "fd",
  term: "FD",
  category: "Basic",
  emoji: "🔒",
  seedhiBaat: "Fixed Deposit — bank ko paisa fixed time ke liye dena, higher interest milta hai savings se. 7-7.5% typical.",
  realLife: "SBI mein ₹1L ka 5 saal FD @ 7% = ₹1.4L milega. But inflation 6% ho toh real value sirf ₹1.05L ki hai — barely beating inflation!",
  quiz: {
    q: "FD ka sabse bada nuksan kya hai?",
    options: ["Risk hai", "Inflation se nahi harpaata", "Liquidity nahi"],
    answer: 1
  }
}, {
  id: "rd",
  term: "RD",
  category: "Basic",
  emoji: "🔁",
  seedhiBaat: "Recurring Deposit — har mahine fixed amount deposit karna, fixed tenure ke baad maturity amount milta hai.",
  realLife: "₹5,000/month ka 3 saal RD @ 6.5% = total ₹1.8L lagaya, ₹1.97L milta. Chhote goals ke liye perfect — phone, vacation etc.",
  quiz: {
    q: "RD aur SIP mein kya difference hai?",
    options: ["RD fixed return, SIP market-linked", "Kuch nahi", "SIP safe hai"],
    answer: 0
  }
}, {
  id: "epf",
  term: "EPF",
  category: "Intermediate",
  emoji: "💼",
  seedhiBaat: "Employee Provident Fund — salary se 12% employee + 12% employer (private job). 8.25% interest, retirement tak lock.",
  realLife: "₹30,000 basic salary pe ₹3,600 + ₹3,600 = ₹7,200/month EPF. 30 saal kaam karke ~₹1.3 crore ka retirement fund banta hai!",
  quiz: {
    q: "EPF mein employer kitna % daalta hai?",
    options: ["12%", "8%", "Kuch nahi"],
    answer: 0
  }
}, {
  id: "ulip",
  term: "ULIP",
  category: "Advanced",
  emoji: "🛡️",
  seedhiBaat: "Unit Linked Insurance Plan — insurance + investment mix. Premium ka part insurance, baaki market mein lagta hai. Generally costly + complex.",
  realLife: "₹50K ULIP premium mein ₹5K insurance mortality charge, ₹5K fund management, ₹40K invest. Same thing term plan + mutual fund alag le toh ₹47K actual mein lagta!",
  quiz: {
    q: "ULIP ka sabse bada nuksan?",
    options: ["High charges", "Low return", "No insurance"],
    answer: 0
  }
}, {
  id: "term",
  term: "Term Plan",
  category: "Intermediate",
  emoji: "🪪",
  seedhiBaat: "Pure life insurance — agar policyholder mar jaaye toh family ko lumpsum milta hai. Bahut sasta, no return if you survive.",
  realLife: "30 saal ki age pe ₹1 crore term plan ka premium sirf ₹12,000/year! Same cover ULIP mein ₹50,000+ dena padta. Bachat = ₹38K/year invest karo!",
  quiz: {
    q: "Term plan mein maturity pe kya milta hai?",
    options: ["Paisa wapas", "Kuch nahi", "Double"],
    answer: 1
  }
}, {
  id: "elss",
  term: "ELSS",
  category: "Intermediate",
  emoji: "📉",
  seedhiBaat: "Equity Linked Saving Scheme — tax-saving mutual fund, 80C mein ₹1.5L tak exempt. 3 saal lock-in (shortest in 80C).",
  realLife: "₹1.5L ELSS invest karke ₹46,800 tax bachao (30% slab). 3 saal baad withdraw bhi kar sakte ho. 12% return se ₹1.5L → ₹2.1L in 3 years!",
  quiz: {
    q: "ELSS ka lock-in kya hai?",
    options: ["3 saal", "5 saal", "15 saal"],
    answer: 0
  }
}, {
  id: "capgain",
  term: "Capital Gains",
  category: "Advanced",
  emoji: "💰",
  seedhiBaat: "Asset (stocks, MF, property) bechne pe profit = capital gain. Short-term (12 months se kam) aur long-term mein tax alag.",
  realLife: "Stocks mein 1 saal se zyada hold kiya toh LTCG 12.5% (₹1.25L exemption). Short-term 20%. ₹5L profit pe long-term = ₹0 tax (exemption ke baad)!",
  quiz: {
    q: "Equity LTCG ka exemption limit kya hai?",
    options: ["₹1.25 lakh/year", "₹50,000", "Koi nahi"],
    answer: 0
  }
}, {
  id: "diversification",
  term: "Diversification",
  category: "Intermediate",
  emoji: "🌈",
  seedhiBaat: "Paise ko alag-alag assets mein phailana — equity, debt, gold, real estate. Ek girse doosra sambhal le.",
  realLife: "Sirus portfolio: 60% equity, 25% debt, 10% gold, 5% cash. 2008 crash mein sirf -22% vs -55% pure equity. Apna risk kam!",
  quiz: {
    q: "Diversification ka matlab?",
    options: ["Ek hi stock mein saara paisa", "Alag assets mein paise phailana", "Sirf FD"],
    answer: 1
  }
}, {
  id: "compound",
  term: "Compounding",
  category: "Basic",
  emoji: "✨",
  seedhiBaat: "Interest pe interest — paise ka paisa, aur uspe dobara interest. 8th wonder of the world!",
  realLife: "₹1L @ 12% for 30 years = ₹29.96L (30x!). Same 10 saal ke liye = ₹3.10L. Time compounding ka sabse bada dost hai!",
  quiz: {
    q: "Compounding ka sabse bada helper?",
    options: ["Time", "Luck", "High fees"],
    answer: 0
  }
}, {
  id: "asset",
  term: "Asset Allocation",
  category: "Advanced",
  emoji: "⚖️",
  seedhiBaat: "Equity, debt, gold, cash ke beech paise kaise baante — age aur risk ke hisaab se. 100 minus age = equity % (basic rule).",
  realLife: "30 saal ki age → 70% equity, 25% debt, 5% gold. 50 saal ki age → 50% equity, 40% debt, 10% gold. Risk kam hota jaata hai age ke saath.",
  quiz: {
    q: "Older age pe asset allocation mein kya kam hona chahiye?",
    options: ["Debt", "Equity", "Gold"],
    answer: 1
  }
}, {
  id: "reit",
  term: "REIT",
  category: "Advanced",
  emoji: "🏢",
  seedhiBaat: "Real Estate Investment Trust — chhote investors ko commercial property mein invest karne deta hai. Dividend + appreciation.",
  realLife: "Embassy Office REIT ₹380 pe. ₹1L invest kiya = 263 units. ₹14/unit dividend = ₹3,682/year passive income + property value growth!",
  quiz: {
    q: "REIT kis mein invest karta hai?",
    options: ["Stocks", "Commercial real estate", "Gold"],
    answer: 1
  }
}, {
  id: "ipo",
  term: "IPO",
  category: "Intermediate",
  emoji: "🚀",
  seedhiBaat: "Initial Public Offering — pehli baar company public ko shares bechti hai. Listing ke baad stock exchange pe trade hota hai.",
  realLife: "Zomato IPO ₹76 pe list hua, opening day +66% = ₹125! But not all IPOs are winners — PayTm ₹2,150 pe list, ₹1,500 tak gir gaya. Risk hai bhai.",
  quiz: {
    q: "IPO ka full form?",
    options: ["Initial Public Offering", "Indian Private Order", "Internal Profit Option"],
    answer: 0
  }
}, {
  id: "demat",
  term: "Demat",
  category: "Basic",
  emoji: "📱",
  seedhiBaat: "Dematerialized account — shares electronic form mein hold karne ka account. Zerodha, Groww, Upstox etc. se kholo.",
  realLife: "Demat + trading account ₹0 mein khulta hai (most brokers). AMC ~₹300-500/year. Stocks + MFs + bonds sab ek hi jagah!",
  quiz: {
    q: "Demat account kya hold karta hai?",
    options: ["Cash only", "Shares electronically", "Gold"],
    answer: 1
  }
}, {
  id: "gst",
  term: "GST",
  category: "Intermediate",
  emoji: "🧾",
  seedhiBaat: "Goods and Services Tax — 5%, 12%, 18%, 28% slabs. Most goods/services pe lagta hai. Indirect tax hai.",
  realLife: "Restaurant bill ₹1,000 + 5% GST = ₹50 extra. Mobile phone pe 18% GST. Car pe 28% + cess. Har kharch mein GST chhupa hai!",
  quiz: {
    q: "GST ka highest slab kya hai?",
    options: ["18%", "28%", "40%"],
    answer: 1
  }
}, {
  id: "liquid",
  term: "Liquid Fund",
  category: "Intermediate",
  emoji: "💧",
  seedhiBaat: "Debt fund jo short-term (1-3 months) treasury instruments mein lagta. Savings account se thoda zyada return, almost same liquidity.",
  realLife: "Emergency fund ₹3L liquid fund mein @ 6.5% = ₹19,500/year. Savings account mein 3.5% = ₹10,500. Extra ₹9K/year, bina risk!",
  quiz: {
    q: "Liquid fund kiske liye best hai?",
    options: ["10 saal ka goal", "Emergency fund", "Retirement"],
    answer: 1
  }
}, {
  id: "index",
  term: "Index Fund",
  category: "Basic",
  emoji: "📊",
  seedhiBaat: "Mutual fund jo stock index (Nifty 50, Sensex) ko copy karta hai. Low fees (~0.2%), aur 80% active funds ise beat nahi kar paate long-term mein.",
  realLife: "₹10K/month Nifty 50 Index Fund 20 saal @ 12% = ₹99 lakh! Expense ratio 0.2% vs active fund 1.5% — 20 saal mein ₹15L ka farq!",
  quiz: {
    q: "Index fund ka sabse bada faayda?",
    options: ["High return guarantee", "Low fees + market return", "No tax"],
    answer: 1
  }
}, {
  id: "emergency",
  term: "Emergency Fund",
  category: "Basic",
  emoji: "🆘",
  seedhiBaat: "3-6 months ke kharche jitna alag rakho — job loss, medical, accident ke liye. Liquid fund ya savings mein rakho.",
  realLife: "₹40,000/month kharcha hai toh ₹1.2-2.4L emergency fund chahiye. Bina iskeMutual fund tod ke bechna padta hai market low pe — double loss!",
  quiz: {
    q: "Emergency fund kitne months ka hona chahiye?",
    options: ["1 month", "3-6 months", "10 years"],
    answer: 1
  }
}, {
  id: "lifestyle",
  term: "Lifestyle Inflation",
  category: "Intermediate",
  emoji: "🛍️",
  seedhiBaat: "Income badhne par kharcha bhi utna hi badhana — new car, expensive phone, bada ghar. Savings percentage same reh jaata hai.",
  realLife: "Salary ₹30K → ₹1L hui. Earlier ₹5K bachata, ab bhi ₹10K hi bachata (₹10K extra kharch phone EMI + Zomato + Uber). Real wealth nahi banti!",
  quiz: {
    q: "Lifestyle inflation se bachne ka tareeka?",
    options: ["Salary badhte dar se zyada kharcha na badhao", "Aur loan lo", "Phone har saal badlo"],
    answer: 0
  }
}, {
  id: "dca",
  term: "Rupee Cost Averaging",
  category: "Advanced",
  emoji: "🎯",
  seedhiBaat: "SIP mein har mahine fixed amount — market upar ho toh kam units, niche ho toh zyada units. Average purchase cost kam hota hai.",
  realLife: "₹10K SIP — market high pe 100 units, low pe 200 units. Average cost automatically kam. 5 saal mein tumhara cost < market avg 7/10 times!",
  quiz: {
    q: "Market niche jaane pe SIP mein kya hota hai?",
    options: ["Loss guaranteed", "Zyada units milte hain", "Kuch nahi"],
    answer: 1
  }
}, {
  id: "riders",
  term: "Insurance Riders",
  category: "Advanced",
  emoji: "➕",
  seedhiBaat: "Base policy pe extra add-ons — critical illness, accident cover, waiver of premium. Sasta protection badhata hai.",
  realLife: "Term plan ₹1Cr pe ₹12K premium. Critical illness rider ₹50L add karke +₹3,500 = total ₹15.5K. Cancer diagnosis pe ₹50L lumpsum — savings bach jaati!",
  quiz: {
    q: "Rider kya hota hai?",
    options: ["Extra coverage add-on", "Loan", "Discount"],
    answer: 0
  }
}, {
  id: "stepup",
  term: "Step-up SIP",
  category: "Intermediate",
  emoji: "⬆️",
  seedhiBaat: "Har saal SIP amount 10% badhana (salary badhne ke saath). Same time pe corpus 40-60% zyada banta hai.",
  realLife: "₹10K SIP 20 saal @ 12% = ₹99L. Same 10% step-up = ₹1.7 crore! Sirf ₹1K extra first year, salary ke saath grow karta hai.",
  quiz: {
    q: "Step-up SIP mein amount kya hota hai?",
    options: ["Fixed rehta", "Har saal badhta", "Kam hota"],
    answer: 1
  }
}];
