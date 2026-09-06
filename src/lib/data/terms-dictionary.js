export const termsDictionary = [
// ---- BASICS (new) ----
{
  id: 'income',
  term: 'Income',
  definition: 'Income matlab wo paisa jo tum kamate ho — salary, business profit, rent, ya koi bhi earning. Income 2 types ki hoti hai: Active income (kaam karo toh milti hai) aur Passive income (bina kaam ke bhi aati hai).',
  example: 'Salary Rs.25,000/month = Active income. Rental property se Rs.8,000/month = Passive income. Goal: passive income itni ho jaaye ki kaam karna optional ho!',
  category: 'basics',
  relatedModule: 1,
  mastered: false
}, {
  id: 'expense',
  term: 'Expense',
  definition: 'Expense matlab wo paisa jo tum kharch karte ho. Fixed expenses (rent, EMI — hamesha same) aur Variable expenses (food, entertainment — badte ghate rehte hain). Expenses ko track karna zaruri hai!',
  example: 'Fixed: Rent Rs.8,000 + EMI Rs.3,000 = Rs.11,000 (change nahi hota). Variable: Groceries Rs.4,000, entertainment Rs.2,000 (hata sakte ho). Variable expenses mein hi bachat milti hai!',
  category: 'basics',
  relatedModule: 2,
  mastered: false
}, {
  id: 'savings',
  term: 'Savings',
  definition: 'Savings = Income minus Expenses. Jo paisa bachta hai woh savings hai. Rule: "Pay yourself first" — pehle save karo, phir baaki kharch karo. Golden rule: Income ka kam se kam 20% save karo!',
  example: 'Income Rs.30,000 — agar pehle Rs.6,000 save kiya (20%) aur Rs.24,000 mein guzara kiya = savings first approach. Baad mein bachane ki koshish karo toh zyadaatar kuch nahi bachta!',
  category: 'basics',
  relatedModule: 1,
  mastered: false
}, {
  id: 'investment',
  term: 'Investment',
  definition: 'Investment matlab apna paisa kisi jagah lagana taki wo paisa aur zyada paisa kamaye. Savings mein paisa safe rehta hai, investment mein paisa grow karta hai. Fark: savings ka real value inflation se ghatta hai!',
  example: 'Rs.1,00,000 savings account mein @4% = 10 saal baad Rs.1,48,000. Same amount equity mutual fund mein @12% = Rs.3,10,000. Investment ne double se zyada diya!',
  category: 'basics',
  relatedModule: 7,
  mastered: false
}, {
  id: 'budget',
  term: 'Budget (50-30-20 Rule)',
  definition: '50-30-20 Rule: Income ka 50% Needs (rent, food, bills), 30% Wants (entertainment, shopping), 20% Savings/Investment. Yeh simplest budgeting framework hai — shuruaat ke liye perfect!',
  example: 'Rs.40,000 salary: Rs.20,000 Needs (rent+groceries+bills), Rs.12,000 Wants (eating out+subscriptions), Rs.8,000 Savings (SIP+emergency fund). Simple, clear, effective!',
  category: 'basics',
  relatedModule: 2,
  mastered: false
}, {
  id: 'debt',
  term: 'Debt (Karz)',
  definition: 'Debt matlab kisi se paisa borrow karna — loan, credit card, ya EMI ke form mein. Debt bad nahi hota agar productive use ho (education loan, home loan). Bad debt = luxury items pe loan lena!',
  example: 'Good debt: Education loan — Rs.3,00,000 invest kiya, Rs.12,00,000/year salary mili = worth it! Bad debt: Rs.80,000 phone EMI pe liya = extra Rs.16,000 interest pay kiya bina kisi return ke.',
  category: 'basics',
  relatedModule: 5,
  mastered: false
}, {
  id: 'interest',
  term: 'Interest (Byaj)',
  definition: 'Interest wo cost hai jo tum kisi ka paisa use karne ke liye pay karte ho — ya jo tum paisa dene par earn karte ho. Interest rate typically % per year mein hota hai. Low interest = less cost; High interest = more profit.',
  example: 'Bank ko Rs.1,00,000 FD mein diya @7% = tum Rs.7,000/year earn karte ho. Bank se same amount loan liya @10% = tum Rs.10,000/year pay karte ho. Banker always wins!',
  category: 'basics',
  relatedModule: 1,
  mastered: false
}, {
  id: 'principal',
  term: 'Principal',
  definition: 'Principal matlab wo original amount jo tumne invest kiya ya loan liya — interest alag hota hai. EMI mein principal portion aur interest portion dono hote hain. Starting mein interest zyada hota hai, time ke saath principal zyada!',
  example: 'Rs.5,00,000 home loan 20 saal ke liye — pehle EMI mein mostly interest, last saalon mein mostly principal. Total paid ~Rs.10-11 lakh = Rs.5-6 lakh sirf interest!',
  category: 'basics',
  relatedModule: 5,
  mastered: false
},
// ---- IMPORTANT (new) ----
{
  id: 'power-of-compounding',
  term: 'Power of Compounding',
  definition: 'Compounding matlab interest pe bhi interest milna — Einstein ne ise 8th wonder of the world kaha! Jitna jaldi shuru karo, utna zyada milega. 10 saal ki delay = 3x-4x kam corpus at retirement!',
  example: 'Age 20 pe Rs.1,000/month shuru kiya @12% = age 60 pe Rs.3.5 crore. Age 30 pe same amount = sirf Rs.1.1 crore. 10 saal ki delay = Rs.2.4 crore ka nuksaan!',
  category: 'important',
  relatedModule: 7,
  mastered: false
}, {
  id: 'time-value-of-money',
  term: 'Time Value of Money',
  definition: 'Aaj ka Rs.100 kal ke Rs.100 se zyada valuable hai — kyunki aaj ka paisa invest kar sakte ho aur kal wo zyada ban jayega. Paisa jitna jaldi haath mein aaye, utna better!',
  example: 'Court case jeet kar Rs.1,00,000 milega — 5 saal baad. Aaj invest karo toh Rs.1,76,000 (at 12%). 5 saal baad same Rs.1,00,000 mil raha hai = actually Rs.76,000 ka nuksaan!',
  category: 'important',
  relatedModule: 1,
  mastered: false
}, {
  id: 'rule-of-72',
  term: 'Rule of 72',
  definition: 'Rule of 72: 72 ko interest rate se divide karo — itne saalo mein paisa double ho jayega! Quick mental math formula. Zyada return = jaldi double. Yeh compounding ka power samajhne ka shortcut!',
  example: '72 ÷ 6% (FD) = 12 saal mein double. 72 ÷ 12% (equity) = 6 saal mein double. 72 ÷ 36% (credit card debt) = 2 saal mein DEBT double! Credit card mein minimum pay karna kitna dangerous hai!',
  category: 'important',
  relatedModule: 7,
  mastered: false
}, {
  id: 'liquidity',
  term: 'Liquidity (Naqdaari)',
  definition: 'Liquidity matlab kitni aasaani se asset ko cash mein convert kar sakte ho bina value lose kiye. Cash = highest liquidity. Property = low liquidity (beche mein time lagta hai). Emergency mein liquid assets chahiye!',
  example: 'Emergency mein Rs.50,000 chahiye: Savings account (high liquidity) = kal milega. FD (medium) = 24 hours, thodi penalty. Real estate (low) = months lag sakte hain. Emergency fund always liquid raho!',
  category: 'important',
  relatedModule: 4,
  mastered: false
}, {
  id: 'risk-return',
  term: 'Risk vs Return',
  definition: 'Higher risk = Higher potential return. Lower risk = Lower return. Yeh finance ka golden rule hai. Risk tolerate karna padta hai returns ke liye — no risk, no reward! Par risk = volatility, loss of capital nahi!',
  example: 'FD @7% = low risk, guaranteed. Equity mutual fund @12-15% average = high volatility lekin better long-term. Gold @8-10% = medium risk. Apni risk tolerance samjho pehle!',
  category: 'important',
  relatedModule: 7,
  mastered: false
}, {
  id: 'inflation-enemy',
  term: 'Inflation — Paisa Ka Dushman',
  definition: 'Inflation tumhare paisa ki purchasing power ghata deta hai silently. India mein average 6% inflation = 12 saal mein paisa HALF ho jaata hai real terms mein. Sirf save mat karo — invest bhi karo!',
  example: 'Rs.10,000 savings account mein rakhe @4% interest. Inflation 6%. Real return = 4% - 6% = -2%. Matlab tumhara paisa actually ghaat raha hai! Equity invest karo to beat inflation.',
  category: 'important',
  relatedModule: 1,
  mastered: false
}, {
  id: 'financial-freedom',
  term: 'Financial Freedom',
  definition: 'Financial freedom = Jab tumhari passive income tumhare expenses se zyada ho! Tab kaam optional ho jaata hai. FIRE movement: Financial Independence, Retire Early. Formula: 25x annual expenses = financial freedom corpus!',
  example: 'Annual expenses Rs.3,60,000 (Rs.30,000/month). FIRE corpus = 25 × 3,60,000 = Rs.90,00,000 (90 lakhs). Is corpus se 4% withdrawal = Rs.3,60,000/year income. Goal clear hai!',
  category: 'important',
  relatedModule: 8,
  mastered: false
}, {
  id: 'net-worth-track',
  term: 'Net Worth Track Karo',
  definition: 'Net Worth = Total Assets – Total Liabilities. Yeh tumhara financial health ka real indicator hai, income nahi! High income + high debt = low net worth. Medium income + low debt + investments = high net worth!',
  example: 'Ravi: Rs.80,000 salary, Rs.10L car loan, Rs.2L savings = Net Worth ~(-8L). Priya: Rs.35,000 salary, zero loan, Rs.5L mutual funds = Net Worth +5L. Priya financially better off hai!',
  category: 'important',
  relatedModule: 1,
  mastered: false
},
// ---- INVESTING ----
{
  id: 'sip',
  term: 'SIP (Systematic Investment Plan)',
  definition: 'SIP ek method hai jismein tum har mahine fixed amount invest karte ho mutual fund mein, chahe market up ho ya down. Yeh discipline laata hai investing mein aur rupee cost averaging ka fayda deta hai.',
  example: 'Rs.2,000 har mahine Nifty 50 Index Fund mein invest kiya — 15 saal mein total invested Rs.3,60,000, lekin corpus ~Rs.12,00,000 ban gaya @12% CAGR!',
  category: 'investing',
  relatedModule: 7,
  mastered: false
}, {
  id: 'mutual-fund',
  term: 'Mutual Fund',
  definition: 'Mutual fund mein bahut logon ka paisa ek saath collect hota hai, aur professional fund manager use stock ya bond mein invest karta hai. Tum chhote amount se bhi diversify kar sakte ho.',
  example: 'Rs.500 se bhi mutual fund mein invest kar sakte ho — independently ek stock khareedne ke liye Rs.500 mein koi achha stock nahi milega, par mutual fund mein 50+ companies ka benefit milta hai!',
  category: 'investing',
  relatedModule: 7,
  mastered: false
}, {
  id: 'elss',
  term: 'ELSS (Equity Linked Savings Scheme)',
  definition: 'ELSS ek special mutual fund hai jo Section 80C ke under Rs.1,50,000 tak tax deduction deta hai. Iska lock-in 3 saal hai — sabse chhota tax-saving option mein!',
  example: 'Rs.1,50,000 ELSS mein invest kiya = Rs.46,800 tax saved (30% slab) + 12-15% expected return. FD mein same amount = Rs.46,800 saved par sirf 6% return!',
  category: 'investing',
  relatedModule: 10,
  mastered: false
}, {
  id: 'cagr',
  term: 'CAGR (Compound Annual Growth Rate)',
  definition: 'CAGR batata hai ki tumhara investment har saal average kitna grow hua hai — over a period of time. Yeh smooth return dikhata hai, volatility hide ho jaati hai.',
  example: 'Rs.1,00,000 invested, 5 saal baad Rs.2,00,000 ban gaya. CAGR = ~14.9% — matlab har saal average 14.9% grow hua, chahe kuch saal 30% up ho ya -10% down!',
  category: 'investing',
  relatedModule: 7,
  mastered: false
}, {
  id: 'index-fund',
  term: 'Index Fund',
  definition: 'Index fund ek market index (jaise Nifty 50) ko copy karta hai — jaise index chalta hai, waise fund chalta hai. Low cost, simple, aur long-term mein most active funds se better perform karta hai!',
  example: 'Nifty 50 Index Fund mein Rs.5,000/month SIP — 10 saal mein ~Rs.11,50,000 (invested Rs.6,00,000). Expense ratio sirf 0.2% vs active funds ka 1.5-2%!',
  category: 'investing',
  relatedModule: 7,
  mastered: false
}, {
  id: 'etf',
  term: 'ETF (Exchange Traded Fund)',
  definition: 'ETF bhi index fund jaisa hai, par stock exchange pe list hota hai — jaise stock khareedte ho waise ETF khareedte ho. Low cost aur real-time trading possible hai.',
  example: 'Nifty BeES ETF khareedne ke liye Demat account chahiye. 1 unit ~Rs.220 — Rs.220 mein 50 companies ka benefit! Low expense ratio 0.05-0.1%.',
  category: 'investing',
  relatedModule: 7,
  mastered: false
}, {
  id: 'dividend',
  term: 'Dividend',
  definition: 'Jab company profit kamati hai, toh shareholders ko paisa distribute karti hai — isko dividend kehte hain. Yeh passive income ka ek source hai.',
  example: 'ITC ke 1000 shares hain, dividend Rs.6.75/share — total dividend income = Rs.6,750! Yeh har saal aata hai bina kuch beche.',
  category: 'investing',
  relatedModule: 8,
  mastered: false
}, {
  id: 'capital-gain',
  term: 'Capital Gain',
  definition: 'Jab tum koi asset (stock, property) zyada price pe bechte ho jismein khareeda tha, toh profit ko capital gain kehte hain. Short-term (1 saal se kam) aur long-term (1 saal se zyada) gain ka tax alag hota hai.',
  example: 'Rs.1,000 mein share khareeda, 2 saal baad Rs.1,800 mein becha — Rs.800 long-term capital gain. Equity LTCG > Rs.1,00,000 pe 10% tax = Rs.0 (kyunki Rs.80,000 < Rs.1,00,000)!',
  category: 'investing',
  relatedModule: 7,
  mastered: false
}, {
  id: 'asset-allocation',
  term: 'Asset Allocation',
  definition: 'Apna paisa different asset classes mein divide karna — equity, debt, gold, real estate. Ek mein sab mat lagao! Allocation tumhari age aur risk capacity pe depend karta hai.',
  example: '25 saal ka ho toh 80% equity + 20% debt. 45 saal ka ho toh 60% equity + 30% debt + 10% gold. Rule of 100: 100 – Age = Equity %.',
  category: 'investing',
  relatedModule: 7,
  mastered: false
}, {
  id: 'diversification',
  term: 'Diversification',
  definition: 'Apna paisa alag-alag jagah lagana taki ek jagah loss ho toh doosri se cover ho jaaye. "Sab ande ek tokri mein mat rakhna" — yehi diversification hai!',
  example: 'Sirf IT stocks mein invest kiya — IT sector gira toh saara paisa doob! Better: IT + Banking + Pharma + FMCG = diversification. Mutual fund automatically diversify karta hai.',
  category: 'investing',
  relatedModule: 7,
  mastered: false
}, {
  id: 'nps',
  term: 'NPS (National Pension System)',
  definition: 'NPS government ka retirement savings scheme hai — har saal contribute karo, retirement pe pension milega. Section 80CCD(1B) se extra Rs.50,000 tax deduction bhi milta hai!',
  example: 'Rs.5,000/month NPS mein contribute kiya — 35 saal tak = Rs.1,05,00,000 corpus (assuming 10% return). 60% withdraw tax-free, 40% se pension milegi!',
  category: 'investing',
  relatedModule: 8,
  mastered: false
}, {
  id: 'demat',
  term: 'Demat Account',
  definition: 'Demat account mein tumhare shares aur securities electronic form mein store hote hain — jaise bank mein paisa. Bina Demat ke stock ya ETF khareed nahi sakte.',
  example: 'Zerodha mein Demat account khola (free opening) — ab stocks, ETFs, aur mutual funds sab ek app mein. Annual maintenance Rs.300-500.',
  category: 'investing',
  relatedModule: 7,
  mastered: false
},
// ---- BANKING ----
{
  id: 'fd',
  term: 'FD (Fixed Deposit)',
  definition: 'FD mein tum ek lumpsum amount bank mein fixed period ke liye deposit karte ho — 6 mahine se 10 saal tak. Interest 6-7% milta hai aur guaranteed return hai. Premature withdrawal pe penalty hoti hai.',
  example: 'Rs.1,00,000 ka 5-year FD @7% = Rs.1,40,255 maturity pe. Lekin 3 saal baad withdraw kiya toh 1% penalty = effective 6% interest.',
  category: 'banking',
  relatedModule: 6,
  mastered: false
}, {
  id: 'rd',
  term: 'RD (Recurring Deposit)',
  definition: 'RD mein har mahine fixed amount deposit karte ho — chhote savings ko grow karne ka best tariqa. FD jaisa interest milta hai (6-7%) par monthly deposit karna padta hai.',
  example: 'Rs.2,000/month ka 5-year RD @7% = total deposit Rs.1,20,000, maturity amount ~Rs.1,43,000 — Rs.23,000 interest mila!',
  category: 'banking',
  relatedModule: 6,
  mastered: false
}, {
  id: 'upi',
  term: 'UPI (Unified Payments Interface)',
  definition: 'UPI India ka instant payment system hai — 24x7, free, aur seconds mein transfer. PhonePe, Google Pay, Paytm sab UPI pe chalte hain. Daily limit Rs.1,00,000 hai.',
  example: 'Dost ko Rs.500 bhejne hain — UPI app kholo, QR scan ya number daalo, PIN daalo — done! 10 seconds mein transfer, zero fees. NEFT se fast aur free!',
  category: 'banking',
  relatedModule: 6,
  mastered: false
}, {
  id: 'neft',
  term: 'NEFT (National Electronic Funds Transfer)',
  definition: 'NEFT bank-to-bank electronic transfer hai — ab 24x7 available hai. Free for savings account holders. Settlement batch-wise hota hai (har half hour), toh instant nahi hota.',
  example: 'Rent Rs.15,000 transfer karna — NEFT se free transfer, lekin 30 minute tak settlement wait karna pad sakta hai. Urgent hai toh IMPS use karo.',
  category: 'banking',
  relatedModule: 6,
  mastered: false
}, {
  id: 'imps',
  term: 'IMPS (Immediate Payment Service)',
  definition: 'IMPS instant bank transfer hai — 24x7, real-time settlement. Limit Rs.5,00,000 tak. Chhota fee lagta hai (Rs.5-15) par paisa seconds mein pahunch jaata hai.',
  example: 'Emergency mein Rs.50,000 bhejna hai — IMPS se 30 seconds mein done! Rs.15 fee lagagi, par urgency justify karti hai.',
  category: 'banking',
  relatedModule: 6,
  mastered: false
}, {
  id: 'rtgs',
  term: 'RTGS (Real Time Gross Settlement)',
  definition: 'RTGS bade amount (Rs.2,00,000+) ke liye hai — instant settlement, real-time. High-value transactions jaise property payment ke liye use hota hai.',
  example: 'Flat ki booking amount Rs.5,00,000 bhejni hai — RTGS se instant transfer. Bank se bank direct, no delay.',
  category: 'banking',
  relatedModule: 6,
  mastered: false
}, {
  id: 'credit-card',
  term: 'Credit Card',
  definition: 'Credit card bank ka loan hai — pehle kharch karo, baad mein pay karo. 45-day interest-free period milti hai. Full payment karo toh free loan! Minimum payment = debt trap start.',
  example: 'Rs.20,000 ka bill — full payment kiya = zero interest. Minimum Rs.1,000 pay kiya = baaki Rs.19,000 pe 36-40% annual interest = Rs.684/month sirf interest!',
  category: 'debt',
  relatedModule: 5,
  mastered: false
}, {
  id: 'debit-card',
  term: 'Debit Card',
  definition: 'Debit card tumhare bank account se directly paisa kaat ti hai — jitna balance hai utna hi kharch kar sakte ho. Credit card ki tarah debt nahi banta, par rewards bhi kam milte hain.',
  example: 'Account mein Rs.5,000 hai aur Rs.8,000 ki cheez khareedni hai — debit card se nahi ho payega (insufficient balance), credit card se ho jayega par debt banega!',
  category: 'banking',
  relatedModule: 6,
  mastered: false
},
// ---- DEBT ----
{
  id: 'emi',
  term: 'EMI (Equated Monthly Installment)',
  definition: 'EMI matlab har mahine fixed amount loan repay karna — principal + interest dono include hote hain. Loan lene se pehle total EMI cost calculate karo, sirh monthly amount mat dekho!',
  example: 'Phone Rs.79,900 pe 24-month EMI Rs.3,999/month — total paid Rs.95,976! Rs.16,076 extra interest + fees. Bina EMI ke khareedte toh Rs.16,000 bach jaate!',
  category: 'debt',
  relatedModule: 5,
  mastered: false
}, {
  id: 'cibil-score',
  term: 'CIBIL Score',
  definition: 'CIBIL score tumhari credit ki "report card" hai — 300-900 range mein. 750+ = excellent, 650-749 = good, below 650 = risky. Loan approval aur interest rate ispe depend karta hai!',
  example: 'CIBIL score 780 hai = home loan 8.5% interest pe mil gaya. Dost ka score 620 = same loan 10.5% pe! Rs.30,00,000 loan pe 2% difference = Rs.14,00,000+ extra interest 20 saal mein!',
  category: 'debt',
  relatedModule: 5,
  mastered: false
}, {
  id: 'compound-interest',
  term: 'Compound Interest',
  definition: 'Compound interest mein interest pe bhi interest milta hai — tumhara paisa exponentially grow karta hai. Yeh investing ka sabse powerful tool hai — "8th wonder of the world"!',
  example: 'Rs.1,00,000 @12% compound interest: 10 saal = Rs.3,10,000, 20 saal = Rs.9,64,000, 30 saal = Rs.29,96,000! Same amount simple interest pe: 30 saal = sirf Rs.4,60,000.',
  category: 'investing',
  relatedModule: 7,
  mastered: false
}, {
  id: 'simple-interest',
  term: 'Simple Interest',
  definition: 'Simple interest sirf original amount (principal) pe calculate hota hai — interest pe interest nahi milta. FD aur RD simple interest ke principles pe based hote hain (quarterly compounding ke saath).',
  example: 'Rs.1,00,000 @12% simple interest for 5 saal = Rs.1,60,000. Same compound interest pe = Rs.1,76,234. Rs.16,234 ka farq — compounding ka jaadu!',
  category: 'investing',
  relatedModule: 7,
  mastered: false
},
// ---- TAX ----
{
  id: 'section-80c',
  term: 'Section 80C',
  definition: 'Section 80C Income Tax Act ka sabse popular deduction hai — Rs.1,50,000 tak investment se tax bach jaata hai! PPF, ELSS, NPS, LIC premium — sab 80C mein aate hain.',
  example: 'Rs.8,00,000 salary, 30% tax slab. Rs.1,50,000 ELSS invest kiya 80C mein = Rs.46,800 tax saved! Plus ELSS mein 12-15% return bhi milega — double benefit!',
  category: 'tax',
  relatedModule: 10,
  mastered: false
}, {
  id: 'hra',
  term: 'HRA (House Rent Allowance)',
  definition: 'Agar tum rent pe rehte ho aur salary mein HRA component hai, toh rent ka portion tax-free ho sakta hai! Calculation: minimum of actual HRA, 50% basic (metro), ya rent minus 10% basic.',
  example: 'Basic salary Rs.40,000, HRA Rs.16,000, monthly rent Rs.18,000. HRA exemption ~Rs.12,000/month = Rs.1,44,000/year tax-free! 30% slab mein = Rs.43,200 tax saved!',
  category: 'tax',
  relatedModule: 10,
  mastered: false
}, {
  id: 'lta',
  term: 'LTA (Leave Travel Allowance)',
  definition: 'LTA se travel expenses tax-free ho jaate hain — India ke andar ka travel. 2 saal ki block mein 2 trips claim kar sakte ho. Air/rail fare exempt hota hai, hotel nahi.',
  example: 'Delhi se Goa flight Rs.8,000 rountrip — LTA se claim kiya = Rs.2,400 tax saved (30% slab). Har 2 saal mein ek free trip ka tax benefit!',
  category: 'tax',
  relatedModule: 10,
  mastered: false
}, {
  id: 'itr',
  term: 'ITR (Income Tax Return)',
  definition: 'ITR tumhari annual income ka government ko report hai — kitna kamaye, kitna tax pay kiya, kitna bachaya. Chahe tax zero bhi ho, file karna important hai!',
  example: 'ITR-1 (Sahaj) form 15 minute mein online file hota hai at incometax.gov.in. Agar Rs.10,000 refund hai aur file nahi kiya = Rs.10,000 waste!',
  category: 'tax',
  relatedModule: 10,
  mastered: false
}, {
  id: 'pan',
  term: 'PAN (Permanent Account Number)',
  definition: 'PAN 10-digit unique number hai jo Income Tax Department deta hai — har financial transaction ka tracking isse hota hai. FD, property, mutual fund — sab ke liye PAN zaroori hai.',
  example: 'Bina PAN ke Rs.50,000+ ka FD nahi kar sakte. Cash deposit Rs.50,000+ pe PAN chahiye. PAN nahi toh TDS 20% kaatega instead of 10%!',
  category: 'tax',
  relatedModule: 10,
  mastered: false
}, {
  id: 'aadhaar',
  term: 'Aadhaar',
  definition: 'Aadhaar UIDAI ka 12-digit unique identity number hai — identity aur address proof dono ke liye kaam aata hai. Bank account, SIM, ITR — sab jagah link zaroori hai.',
  example: 'Aadhaar se instant e-KYC — bank account 10 minute mein khul jaata hai. Aadhaar-PAN linked nahi toh ITR file nahi ho paayega aur PAN inoperative ho jaayega!',
  category: 'tax',
  relatedModule: 6,
  mastered: false
}, {
  id: 'gst',
  term: 'GST (Goods and Services Tax)',
  definition: 'GST India ka unified tax hai — pehle bahut taxes the (VAT, service tax, excise), ab sab ek mein. 5%, 12%, 18%, 28% — different items pe different rate. Har purchase mein GST included hai.',
  example: 'Restaurant bill Rs.500 — isme 5% GST = Rs.25 extra. Smartphone Rs.15,000 — isme 18% GST = Rs.2,700 tax! Yeh tumhara paisa hai jo government ja raha hai.',
  category: 'tax',
  relatedModule: 10,
  mastered: false
}, {
  id: 'tds',
  term: 'TDS (Tax Deducted at Source)',
  definition: 'TDS matlab payment karne waale paise se pehle tax kaat ke government ko de dena. Salary, FD interest, rent — sab mein TDS kaat jaata hai. ITR mein claim kar sakte ho agar zyada kaat gaya!',
  example: 'FD pe Rs.50,000 interest aaya — bank ne 10% TDS kaat diya = Rs.5,000. Lekin tumhara total tax sirf Rs.2,000 hai — ITR file karke Rs.3,000 refund lo!',
  category: 'tax',
  relatedModule: 10,
  mastered: false
}, {
  id: 'tax-saving',
  term: 'Tax Saving',
  definition: 'Legal methods se tax kam karna — 80C, 80D, HRA, NPS sab tax saving tools hain. Tax saving aur tax evasion mein farq hai — saving legal hai, evasion criminal!',
  example: 'Rs.10,00,000 salary pe smart tax planning: 80C Rs.1,50,000 + 80D Rs.25,000 + HRA Rs.1,20,000 + NPS Rs.50,000 = Rs.3,45,000 deduction. Tax saved ~Rs.1,03,000!',
  category: 'tax',
  relatedModule: 10,
  mastered: false
},
// ---- INSURANCE ----
{
  id: 'term-insurance',
  term: 'Term Insurance',
  definition: 'Term insurance sabse sasta aur purest insurance hai — agar policyholder death ho jaata hai toh dependents ko sum assured milta hai. Agar survive kiya toh kuch nahi milta — par yehi actual insurance hai!',
  example: '25 saal ki umar mein Rs.1,00,00,000 term cover = sirf Rs.8,000-12,000/year! Same cover ka endowment plan = Rs.80,000-1,00,000/year — 10 guna zyada!',
  category: 'insurance',
  relatedModule: 9,
  mastered: false
}, {
  id: 'health-insurance',
  term: 'Health Insurance',
  definition: 'Health insurance hospital bills cover karta hai — surgery, ICU, medicines, room rent sab included. India mein medical inflation 12-15% hai — bina insurance ke emergency savings khatam!',
  example: 'Rs.5,00,000 health cover at age 25 = Rs.5,000-7,000/year premium. Ek ICU stay = Rs.50,000/day! Dengue treatment = Rs.80,000-2,00,000. Insurance ne pay kiya = savings safe!',
  category: 'insurance',
  relatedModule: 9,
  mastered: false
}, {
  id: 'ulip',
  term: 'ULIP (Unit Linked Insurance Plan)',
  definition: 'ULIP insurance + investment ka mix hai — premium ka part insurance ke liye, part market mein invest hota hai. Lekin high charges (5-10%) aur average returns se yeh generally avoid karna chahiye.',
  example: 'Rs.50,000/year ULIP mein 10 saal = total Rs.5,00,000 invested. Returns ~6-8% = ~Rs.6,50,000. Same ELSS mein = ~8,50,000-9,50,000 (12-15% returns) + better tax benefit!',
  category: 'insurance',
  relatedModule: 9,
  mastered: false
},
// ---- SAVING ----
{
  id: 'ppf',
  term: 'PPF (Public Provident Fund)',
  definition: 'PPF government ka savings scheme hai — 7.1% interest, 15 saal ka lock-in, aur EEE tax benefit (invest tax-free, interest tax-free, maturity tax-free). Long-term safe investing ke liye best!',
  example: 'Rs.1,50,000/year PPF mein 15 saal = total Rs.22,50,000 invested, maturity ~Rs.45,00,000! Pura tax-free! Section 80C deduction bhi mila har saal.',
  category: 'saving',
  relatedModule: 3,
  mastered: false
}, {
  id: 'inflation',
  term: 'Inflation',
  definition: 'Inflation matlab cheezon ki price badhna — tumhara paisa saal dar saal kam value wala ho jaata hai. India mein average inflation ~6% hai — matlab Rs.100 aaj ki buying power 10 saal baad sirf Rs.55 ki hogi!',
  example: '10 saal pehle Rs.30 ki chai aaj Rs.50 hai — yeh inflation hai! Agar tumne Rs.1,00,000 savings account mein rakha (4% interest) aur inflation 6% hai, toh real return = -2% — paisa ghat raha hai!',
  category: 'saving',
  relatedModule: 1,
  mastered: false
}, {
  id: 'emergency-fund',
  term: 'Emergency Fund',
  definition: 'Emergency fund 3-6 mahine ka kharcha jo alag se bana ke rakha jaata hai — unexpected expenses ke liye. Job loss, medical emergency, urgent repair — bina debt mein jaaye tackle kar sakte ho.',
  example: 'Mahine ka kharcha Rs.20,000 hai — 6-month emergency fund = Rs.1,20,000. Yeh Savings Account ya Liquid Fund mein rakho, kabhi normal spending ke liye mat use karo!',
  category: 'saving',
  relatedModule: 4,
  mastered: false
}, {
  id: 'budgeting',
  term: 'Budgeting',
  definition: 'Budgeting apne paise ka plan banana hai — pehle decide karo paisa kahan jayega, phir spend karo. Bina budget ke tumhari income decide karti hai kahan paisa jayega, tum nahi!',
  example: 'Rs.20,000 salary — bina budget: random spend, end mein "paisa kahan gaya?" Budget ke saath: Rs.10,000 needs, Rs.6,000 wants, Rs.4,000 savings — clear aur controlled!',
  category: 'saving',
  relatedModule: 2,
  mastered: false
}, {
  id: 'net-worth',
  term: 'Net Worth',
  definition: 'Net worth = Tumhari total assets (savings, investments, property) minus total liabilities (loans, credit card debt). Yeh tumhari true financial health ka measure hai — income se nahi, net worth se!',
  example: 'Savings Rs.2,00,000 + Mutual Funds Rs.1,50,000 – Education Loan Rs.3,00,000 = Net Worth Rs.50,000. Positive hona chahiye — negative matlab tum debt mein ho!',
  category: 'saving',
  relatedModule: 1,
  mastered: false
}];