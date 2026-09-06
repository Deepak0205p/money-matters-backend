export const scenarios = [{
  id: 'sip-vs-no-savings',
  title: 'Agar monthly ₹500 SIP start kiya',
  badPath: {
    year1: 'Kuch nahi bacha — "₹500 se kya hota hai" soch ke spend kar diya. Total savings: ₹0. Abhi bhi zero financial security.',
    year5: '5 saal beet gaye, abhi bhi month-end mein tension. Dosto ne SIP kiya tha — unke paas ₹40,000+ hai. Tumhare paas? ₹0. Har mahine ₹500 spend karne mein gaya jo yaad bhi nahi kahan gaya.',
    year10: '10 saal ho gaye — peers ke paans ₹1,00,000+ ki investments hain. Tum abhi bhi paycheck-to-paycheck jee rahe ho. Ek emergency mein udhar lena padega — debt shuru.',
    year20: '20 saal baad — retirement ke baare mein sochte ho aur panic hai. Koi corpus nahi, koi investment nahi. Jo kamate ho wahi kharch — aage koi rasta nahi.'
  },
  goodPath: {
    year1: '₹6,000 invest kiya SIP mein — chhota laga par habit ban gayi! Market ne up-down dikhaya par tumne continue kiya. Corpus: ~₹6,400 (@12%).',
    year5: '5 saal mein ₹30,000 invest kiya — corpus ~₹41,000 ban gaya! ₹11,000 sirf compounding se aaya. Ab ₹500 se ₹1,000 badhaane ka confidence hai!',
    year10: '10 saal mein ₹60,000 invest kiya — corpus ~₹1,15,000! Lagbhag double! Ab tum financially secure feel karte ho — emergency aaye toh cushion hai.',
    year20: '20 saal mein ₹1,20,000 invest kiya — corpus ~₹4,95,000! 4x return! Yeh hai compounding ka jaadu — chhote steps se bada safar.'
  },
  variables: [{
    id: 'monthly-amount',
    label: 'Monthly SIP Amount (₹)',
    min: 500,
    max: 10000,
    step: 500,
    defaultValue: 500,
    unit: '₹'
  }, {
    id: 'expected-return',
    label: 'Expected Annual Return (%)',
    min: 8,
    max: 15,
    step: 1,
    defaultValue: 12,
    unit: '%'
  }]
}, {
  id: 'credit-card-payment',
  title: 'Agar credit card ka full payment kiya',
  badPath: {
    year1: 'Har mahine minimum payment kar rahe ho — bill ₹10,000 ka hai, ₹500 pay kar rahe ho. Interest ₹9,500 pe 36% = ₹3,420/year sirf interest! Principal barely kam ho raha.',
    year5: '5 saal mein ₹10,000 ka outstanding ₹15,000 ho gaya — interest add hote gaya! Total interest paid: ~₹35,000. Original kharcha yaad bhi nahi kiska tha!',
    year10: 'Credit card debt ₹25,000+ ho chuka hai. CIBIL score gira — ab personal loan bhi 15% interest pe mil raha hai. Debt cycle mein phas gaye — har mahine sirf interest pay kar rahe ho.',
    year20: 'Total interest paid in 20 years: ₹1,50,000+ — ek original ₹10,000 ke purchase pe! Car loan rejected, home loan impossible. Financial life ruined by one habit.'
  },
  goodPath: {
    year1: 'Har mahine full payment — zero interest! 45-day free credit use kiya, reward points bhi kamaye. Credit card actually beneficial ban gaya — CIBIL score 750+ building.',
    year5: '5 saal consistent full payment — CIBIL score 780+! Home loan 8.5% pe mil gaya vs 10.5% (low score wale). Reward points se ₹15,000 worth benefits free mein!',
    year10: 'Excellent credit history — best interest rates har loan pe. Cashback aur rewards se ₹30,000+ saved. Credit card tumhara financial tool ban gaya, trap nahi!',
    year20: 'Total interest saved: ₹3,00,000+ (vs minimum payment). Better loan rates, premium cards free, aur financial freedom. Ek achhi habit ne life change kar di!'
  },
  variables: [{
    id: 'outstanding-amount',
    label: 'Monthly Credit Card Bill (₹)',
    min: 5000,
    max: 50000,
    step: 5000,
    defaultValue: 10000,
    unit: '₹'
  }, {
    id: 'interest-rate',
    label: 'Credit Card Interest Rate (% p.a.)',
    min: 24,
    max: 48,
    step: 2,
    defaultValue: 36,
    unit: '%'
  }]
}, {
  id: 'emergency-fund',
  title: 'Agar emergency fund banaya',
  badPath: {
    year1: 'No emergency fund — sudden medical bill ₹30,000 aayi. Credit card se pay kiya, ab interest pe interest chal raha hai. One emergency = debt spiral shuru.',
    year5: '3 emergencies aayi (medical, phone toota, laptop repair) — total ₹80,000. Sab credit card/personal loan se pay kiya. Outstanding debt: ₹80,000 + interest ₹25,000.',
    year10: 'Debt se nikal nahi pa rahe — har emergency aur debt badhati hai. Personal loan pe personal loan le rahe ho. Total interest paid: ₹2,00,000+. Savings zero.',
    year20: 'No safety net — hamesha financial stress mein. Job loss ka dar hamesha rehta hai. Medical emergency pe family ko bhi udhar lena padta hai. No dignity, no security.'
  },
  goodPath: {
    year1: '₹5,000/month savings se ₹60,000 emergency fund ban gaya! Ab medical emergency aaye toh credit card nahi, apna paisa use kiya. Zero debt, zero stress.',
    year5: '₹1,50,000 ka solid emergency fund (6 months expenses). Job loss bhi ho toh 6 mahine tension-free. Actually better job dhundh sakte ho — desperate nahi.',
    year10: 'Emergency fund fully funded — ab extra savings investments mein ja rahi hai. Dual benefit: protection + growth. Insurance claims ke beech mein bhi tension nahi.',
    year20: 'Emergency fund ne 4 emergencies handle ki — total ₹3,50,000 ka expense bina debt ke! Debt interest saved: ₹2,50,000+. Peace of mind = priceless.'
  },
  variables: [{
    id: 'monthly-savings',
    label: 'Monthly Savings for Fund (₹)',
    min: 2000,
    max: 15000,
    step: 1000,
    defaultValue: 5000,
    unit: '₹'
  }, {
    id: 'monthly-expense',
    label: 'Monthly Expenses (₹)',
    min: 10000,
    max: 50000,
    step: 5000,
    defaultValue: 20000,
    unit: '₹'
  }]
}, {
  id: 'early-investing',
  title: 'Agar 20 ki umar se invest shuru kiya',
  badPath: {
    year1: '20 ki umar mein investing start nahi ki — "abhi toh time hai" socha. Paisa clothes, parties, gadgets mein gaya. Kuch yaad nahi kahan gaya.',
    year5: '25 saal ke ho gaye — ab investing soch rahe ho lekin 5 saal ka compounding miss ho gaya. Agar ₹2,000/month SIP kiya hota toh ₹1,65,000 corpus hota!',
    year10: '30 saal — ab seriously sochte ho investing ke baare mein. Lekin 10 saal ka compounding gone forever. ₹2,000/month SIP at 20 = ₹6,60,000 at 30. Ab se start = sirf ₹2,40,000 at 30.',
    year20: '40 saal — peers jo 20 se invest kar rahe the unke paas ₹19,00,000+ hai. Tum abhi ₹5,00,000 se shuru kar rahe ho. Unke ₹2,000 = tumhare ₹8,000 needed for same result!'
  },
  goodPath: {
    year1: '20 ki umar se ₹2,000/month SIP shuru kiya! First year mein ₹24,000 invest kiya, corpus ~₹25,500. Chhota laga par seed planted hai — compounding ka tree ug raha hai!',
    year5: '5 saal mein ₹1,20,000 invest kiya — corpus ~₹1,65,000! ₹45,000 compounding se aaye. Ab SIP ₹3,000 badha diya — income badhi toh investment bhi badhi!',
    year10: '10 saal mein ₹3,60,000 invested (increased SIP over time) — corpus ~₹6,60,000! Nearly double from investment. Friends ab puchte hain "kaise kiya?"',
    year20: '20 saal mein total invested ~₹7,20,000 — corpus ~₹19,00,000+! 2.5x return! Yeh 20 ki umar se start karne ka power hai — har saal ki delay lakhs ka loss!'
  },
  variables: [{
    id: 'start-age',
    label: 'Age When You Start Investing',
    min: 18,
    max: 35,
    step: 1,
    defaultValue: 20,
    unit: 'years'
  }, {
    id: 'monthly-sip',
    label: 'Monthly SIP Amount (₹)',
    min: 1000,
    max: 10000,
    step: 500,
    defaultValue: 2000,
    unit: '₹'
  }, {
    id: 'return-rate',
    label: 'Expected Return (% CAGR)',
    min: 8,
    max: 15,
    step: 1,
    defaultValue: 12,
    unit: '%'
  }]
}, {
  id: 'aggressive-saving',
  title: 'Agar 30% income save kiya',
  badPath: {
    year1: '₹20,000 kama ke sab kharch kar diya — "abhi enjoy karna hai, baad mein bachaenge." Saal end mein savings: ₹0. Koi investment nahi, koi growth nahi.',
    year5: '5 saal mein total income ~₹12,00,000 (with increments) — par sab gaya expenses mein. Lifestyle inflation ne kha liya — zyada kamaate ho, zyada kharch karte ho!',
    year10: '10 saal kamaye — agar 30% bachate toh ₹15,00,000+ corpus hota. Lekin actual savings: negligible. Emergency aaye toh udhar lena padega.',
    year20: '20 saal beet gaye — zero investments, zero corpus. Retirement ka koi plan nahi. 45 saal ke ho aur financially wahi hain jahan 25 pe the. Scary reality!'
  },
  goodPath: {
    year1: '₹20,000 mein se ₹6,000 (30%) har mahine bachaya — ₹72,000 saal mein! ₹3,000 emergency fund, ₹3,000 SIP. Tight hai par manageable!',
    year5: '5 saal mein ₹3,60,000 saved — invest kiya toh ~₹4,50,000 corpus! Emergency fund fully funded. Ab 30% se 35% saving rate badha sakte ho — habit pakki ho gayi!',
    year10: '10 saal mein total invested ~₹9,00,000 — corpus ~₹15,00,000! Aggressive saving ne compound karke bada ban gaya. Financial freedom dikhai de raha hai!',
    year20: '20 saal mein ~₹25,00,000 invested — corpus ~₹60,00,000+! 30% saving rate ne life change kar di. Ab part-time bhi chal sakta hai — financial independence achieved!'
  },
  variables: [{
    id: 'monthly-income',
    label: 'Monthly Income (₹)',
    min: 10000,
    max: 100000,
    step: 5000,
    defaultValue: 20000,
    unit: '₹'
  }, {
    id: 'saving-rate',
    label: 'Saving Rate (%)',
    min: 10,
    max: 50,
    step: 5,
    defaultValue: 30,
    unit: '%'
  }, {
    id: 'investment-return',
    label: 'Investment Return (% CAGR)',
    min: 6,
    max: 15,
    step: 1,
    defaultValue: 10,
    unit: '%'
  }]
}];