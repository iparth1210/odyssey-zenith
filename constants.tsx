import { Level, LevelStatus } from './types';

export const CURRICULUM: Level[] = [
  {
    id: 1,
    name: "PHASE 0: PERSONAL FINANCE & BANKING",
    tagline: "Sovereign Budgeting, Compound Growth, and Tax Shelters.",
    status: LevelStatus.AVAILABLE,
    icon: "🏦",
    topics: [
      {
        id: "t0-0",
        title: "Personal Cash Management & Debt Strategy",
        description: "Master the foundational personal finance protocols to generate surplus cash flow, optimize credit, and shield early capital from tax leakages.",
        missionStrategy: "Learn budgeting compounding, secure a high FICO score, and establish tax-advantaged Roth/401(k) accounts.",
        category: 'CORE',
        funnyTake: "A budget tells your money where to go instead of wondering where it went.",
        isQuizCompleted: false,
        resources: [
          { title: "Personal Finance Essentials", url: "https://www.investopedia.com/guide-to-personal-finance-4842941", type: "article", provider: "Investopedia" }
        ],
        subTopics: [
          {
            title: "Sub-Phase 0.1: Budgeting & Compound Interest Foundations",
            streetExplanation: "Budgeting is simple: separate what you need (like rent and food) from what you want (like video games). Saving early is key because of compound interest—your saved money earns interest, and then that interest earns interest, compounding your cash over time.",
            boardroomExplanation: "WHAT: Capital budgeting and compounding interest calculation for early-stage capital preservation.\nWHY: Establishes a baseline surplus of capital to fund subsequent asset accumulation.\nWHO: Young savers, retail depositors, and family office planners.\nWHEN: Initiated in early youth (Std 1-5); maintained throughout the lifecycle.\nWHERE: Personal checking/savings accounts and automated savings ledgers.\nHOW: 1. List monthly income. 2. Categorize fixed costs (needs) vs variable costs (wants). 3. Automate a 20% savings rate. 4. Compound surplus in interest-bearing accounts.",
            explainerVideoId: "xguam0TKMw8",
            technicalBriefing: "$$A = P \\left(1 + \\frac{r}{n}\\right)^{nt}$$",
            vocabulary: [{ word: "Compound Interest", streetAnalogy: "Money making babies, and then those babies making babies of their own.", boardroomDefinition: "Interest calculated on the initial principal, which also includes all of the accumulated interest from previous periods." }],
            resources: [
              { title: "The Power of Compound Interest", url: "https://www.investopedia.com/terms/c/compoundinterest.asp", type: "article", provider: "Investopedia" },
              { title: "Budgeting 101 Guide", url: "https://www.corporatefinanceinstitute.com/resources/wealth-management/budgeting-101/", type: "article", provider: "CFI" }
            ],
            academicTier: "Tier 1: Elementary Foundation (Std 1-5) | Stanford Center on Longevity",
            executionBlueprint: {
              monetization: "Create a personal cash-surplus buffer that acts as the initial capital pool for your investment portfolio.",
              whatToBuy: "High-yield savings accounts (HYSA) or cash management accounts.",
              howToBuy: "Open a sweep-enabled savings account at a bank offering competitive yields.",
              whenToBuy: "Set up automatic recurring transfers from your paycheck to your savings account on the day you get paid.",
              beforeAndAfterChecklist: "Before: Audit your monthly bank statements for recurring subscriptions you don't use. After: Re-evaluate your budget if your fixed needs exceed 50% of your take-home pay.",
              platforms: ["YNAB (You Need A Budget)", "Ally Bank"],
              realWorldExample: "Saving $200 a month in a 4.5% HYSA, compounding to $13,000 in 5 years compared to only $12,000 in a zero-interest checking account."
            }
          },
          {
            title: "Sub-Phase 0.2: Credit Scores & Debt Management",
            streetExplanation: "Credit cards are convenient loans. If you pay the full balance every month, you build a good credit score (which helps you borrow cheap money later). But if you only pay the minimum, you fall into a high-interest debt trap (charging 20%+ interest) that drains your wealth.",
            boardroomExplanation: "WHAT: Leveraging unsecured revolving credit lines and optimization of credit scores (e.g. FICO).\nWHY: Lowers borrowing costs for large-scale purchases (real estate, corporate debt) in the future.\nWHO: Consumers, credit rating agencies, and commercial card issuers.\nWHEN: Evaluated constantly with every credit usage and monthly payment cycle.\nWHERE: Domestic credit bureaus and banking networks.\nHOW: 1. Open a starter credit card. 2. Keep utilization ratio below 30%. 3. Automate full balance payments monthly. 4. Check credit reports for errors annually.",
            explainerVideoId: "fd_emLLzJnk",
            technicalBriefing: "$$Credit\\_Utilization = \\frac{Revolving\\_Balance}{Total\\_Credit\\_Limit}$$",
            vocabulary: [{ word: "FICO Score", streetAnalogy: "Your financial trust grade card that tells banks how likely you are to pay them back.", boardroomDefinition: "A type of credit score created by the Fair Isaac Corporation used by lenders to assess credit risk." }],
            resources: [
              { title: "How to Build Credit Fast", url: "https://www.investopedia.com/articles/pf/10/credit-score-factors.asp", type: "article", provider: "Investopedia" },
              { title: "Understanding Debt Structures", url: "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/", type: "article", provider: "CFPB" }
            ],
            academicTier: "Tier 2: Secondary Education (High School) | Wharton Financial Literacy Center",
            executionBlueprint: {
              monetization: "Establish a credit score above 760 to secure lowest-interest mortgages and business loans, saving hundreds of thousands in interest.",
              whatToBuy: "A cash-back or travel rewards credit card with zero annual fee.",
              howToBuy: "Apply online via major card issuers (Chase, Amex) after verifying your pre-approval odds.",
              whenToBuy: "Apply for a credit card when you have a stable income and a clean credit history.",
              beforeAndAfterChecklist: "Before: Verify your credit score is in the 'good' range before applying. After: Pay off the statement balance in full before the due date.",
              platforms: ["Credit Karma", "AnnualCreditReport.com", "Chase Credit Journey"],
              realWorldExample: "Using a credit card to pay for monthly utilities, paying it off in full, building an 800 FICO score, and unlocking a 5.5% mortgage rate instead of a 7.5% rate, saving $100k over 30 years."
            }
          },
          {
            title: "Sub-Phase 0.3: Tax-Advantaged Shelters: 401(k), Roth & Traditional IRAs",
            streetExplanation: "Taxes are the biggest leak in your wealth bucket. The government offers special accounts to help you save for retirement: 401(k)s (where employers often match your money, which is free cash) and IRAs (Roth IRAs are tax-free when you take money out; Traditional IRAs give you a tax break today).",
            boardroomExplanation: "WHAT: Structured tax-advantaged retirement plans leveraging tax-deferred or tax-free compounding parameters.\nWHY: Optimizes after-tax wealth accumulation by utilizing government fiscal incentive codes.\nWHO: Employees, self-employed contractors, and IRS administrators.\nWHEN: Evaluated and funded annually based on IRS contribution limits.\nWHERE: Registered brokerage firms and employer-sponsored trust platforms.\nHOW: 1. Contribute to employer 401(k) up to match. 2. Max out a Roth IRA. 3. Invest in low-cost index funds within the accounts. 4. Let capital compound tax-free until age 59.5.",
            explainerVideoId: "mQ_B-wYgYwU",
            technicalBriefing: "$$Future\\_Value = P(1+r)^t - Tax\\_Liability$$",
            vocabulary: [{ word: "Roth IRA", streetAnalogy: "A tax shelter where you pay tax on the money you put in now, but all growth and withdrawals are completely tax-free later.", boardroomDefinition: "An air-gapped retirement account allowing individuals to set aside post-tax income up to a specified annual limit, with tax-free withdrawals." }],
            resources: [
              { title: "IRA Contribution Limits & Rules", url: "https://www.irs.gov/retirement-plans/individual-retirement-arrangements-iras", type: "article", provider: "IRS"},
              { title: "Choosing Roth vs Traditional", url: "https://www.investopedia.com/retirement/roth-vs-traditional-ira-which-is-better/", type: "article", provider: "Investopedia"}
            ],
            academicTier: "Tier 3: Undergraduate (Junior) | Berkeley Haas Wealth Management",
            executionBlueprint: {
              monetization: "Capture immediate 100% returns via employer matching programs and shield long-term investment growth from capital gains taxes.",
              whatToBuy: "Employer 401(k) matching assets and Roth IRA shares.",
              howToBuy: "Enroll in your employer's HR payroll portal for the 401(k), and open a Roth IRA at Fidelity or Vanguard.",
              whenToBuy: "Maximize contributions annually before the IRS tax filing deadline (typically April 15 of the following year).",
              beforeAndAfterChecklist: "Before: Check your company's vesting schedule and matching percentage. After: Select low-expense index funds (like VOO or VTSAX) inside the account so the cash doesn't sit idle.",
              platforms: ["Fidelity", "Vanguard", "Charles Schwab"],
              realWorldExample: "Contributing 6% of a $50k salary to a 401(k) with a 100% employer match, instantly doubling the contribution to $6,000 annually before any market growth."
            }
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: "PHASE 1: MONETARY GENESIS",
    tagline: "Architecture of Trust and Global Ledger Systems.",
    status: LevelStatus.AVAILABLE,
    icon: "📜",
    topics: [
      {
        id: "t0-1",
        title: "Monetary Systems & Credit Creation",
        description: "Explore the foundational architecture of money—from historical ledgers to fractional reserve fiat systems.",
        missionStrategy: "Analyze the mechanisms of money creation, currency velocity, and open market operations.",
        category: 'CORE',
        funnyTake: "Money is the most successful shared hallucination in human history.",
        subTopics: [
          {
            title: "Sub-Phase 0.1: The Double Coincidence of Wants",
            streetExplanation: "Before money, you could only trade if you had what someone else wanted, and they had what you wanted. Money solved this by acting as a universal middle-man for trades.",
            boardroomExplanation: "WHAT: A market condition where transaction execution requires mutual desire for commodities.\nWHY: Establishes the necessity of a medium of exchange to minimize transaction friction.\nWHO: Traders, merchants, and emerging clearing houses.\nWHEN: Triggered in primitive barter economies; resolved by commodity money.\nWHERE: The transition occurs globally in all expanding trade societies.\nHOW: 1. Barter limits trade. 2. A common commodity (gold/salt) is adopted. 3. Commodity becomes currency.",
            explainerVideoId: "xguam0TKMw8",
            technicalBriefing: "$$Liquidity\\_Index = \\frac{Volume\\_of\\_Trade}{Search\\_Time}$$",
            vocabulary: [{ word: "Double Coincidence", streetAnalogy: "Finding a shoe seller who wants your apples.", boardroomDefinition: "The prerequisite condition of barter transaction necessitating matching reciprocal needs." }],
            resources: [
              { title: "The Economics of Barter Systems", url: "https://www.investopedia.com/terms/b/barter.asp", type: "article", provider: "Investopedia" },
              { title: "Foundations of Monetary Exchange", url: "https://www.econlib.org/library/Columns/y2006/MonetaryHistory.html", type: "article", provider: "EconLib" }
            ],
            academicTier: "Tier 1: Elementary Foundation (Std 1-5) | London School of Economics",
            executionBlueprint: {
              monetization: "Facilitate direct asset swaps in private forums or trade networks, charging a convenience escrow matching fee.",
              whatToBuy: "Physical trade commodities or high-liquidity precious metals (gold sovereigns, silver coins).",
              howToBuy: "Acquire physical bullion from local coin dealers or reputable online vaults (e.g., APMEX, BullionVault).",
              whenToBuy: "Buy during high geopolitical instability, debt-ceiling crises, or central bank inflationary cycles.",
              beforeAndAfterChecklist: "Before: Check weight and assay verification certificates. After: Store in secure, climate-controlled safe deposit boxes or independent vaults.",
              platforms: ["APMEX", "BullionVault", "Local Vaulting Services"],
              realWorldExample: "Escrowing a collector trading a luxury watch for gold bullion, pocketing a 2% matching commission."
            }
          },
          {
            title: "Sub-Phase 0.2: Fiat Currency and Fractional Reserves",
            streetExplanation: "Governments declared paper money has value. Banks then multiply this money by lending out 90% of what you deposit, creating new digital dollars out of thin air.",
            boardroomExplanation: "WHAT: Currency backed by sovereign decree, leveraged via fractional lending ratios.\nWHY: Magnifies credit capacity to stimulate commercial and economic expansion.\nWHO: Central banks, commercial banks, and global borrowers.\nWHEN: Fully implemented after the gold standard abrogation (1971).\nWHERE: Operating across all modern domestic and international banking sectors.\nHOW: 1. Deposit is made. 2. Bank keeps fraction (e.g., 10%). 3. Bank lends the rest. 4. New credit is spent, deposited, and lent again.",
            explainerVideoId: "PZg1ea_U4rM",
            technicalBriefing: "$$Money\\_Multiplier = \\frac{1}{Reserve\\_Requirement}$$",
            vocabulary: [{ word: "Multiplier", streetAnalogy: "How banks turn $10 into $100.", boardroomDefinition: "The expansion of broad money supply relative to the monetary base via fractional lending." }],
            resources: [
              { title: "Fractional Reserve Banking Mechanics", url: "https://www.investopedia.com/terms/f/fractionalreservebanking.asp", type: "article", provider: "Investopedia" },
              { title: "Modern Money Mechanics (FRB)", url: "https://archive.org/details/ModernMoneyMechanics", type: "book", provider: "Federal Reserve" }
            ],
            academicTier: "Tier 2: Secondary Education (High School) | Wharton School Finance",
            executionBlueprint: {
              monetization: "Yield farming and interest-spread banking; deposit cash to capture interest while borrowing against assets to fund investments.",
              whatToBuy: "High-yield certificates of deposit (CDs), money market fund shares, or short-term treasury bills.",
              howToBuy: "Open a retail brokerage account (e.g., Fidelity) and purchase cash-equivalent mutual funds.",
              whenToBuy: "Buy when central banks execute interest rate hikes, elevating short-term money yields.",
              beforeAndAfterChecklist: "Before: Check annual percentage yield (APY) vs lock-up timelines. After: Reinvest yield dividends automatically to compound interest.",
              platforms: ["Fidelity", "Vanguard", "Marcus by Goldman Sachs"],
              realWorldExample: "Staking $10,000 in a high-yield CD at 5.2% APY, leveraging the deposit as collateral for a low-cost business loan."
            }
          },
          {
            title: "Sub-Phase 0.3: Central Bank Open Market Operations",
            streetExplanation: "Central banks control the flow of money by buying or selling government bonds. Buying bonds pumps new cash into the economy; selling bonds drains cash to cool things down.",
            boardroomExplanation: "WHAT: The purchase and sale of government securities in open debt markets to target policy rates.\nWHY: Aligns interbank borrowing costs with macroeconomic inflation and growth targets.\nWHO: The Federal Reserve (FOMC), primary dealers, and treasury desks.\nWHEN: Conducted daily to stabilize overnight interest rates.\nWHERE: Orchestrated from central bank trading desks (e.g., FRBNY).\nHOW: 1. Fed buys treasury bonds. 2. Cash flows to banks' reserve accounts. 3. Money supply increases, rates fall. 4. Opposite occurs for selling bonds.",
            explainerVideoId: "6ZhnB2Y7Kms",
            technicalBriefing: "$$MV = PY$$",
            vocabulary: [{ word: "Open Market Operations", streetAnalogy: "The Fed's cash faucet.", boardroomDefinition: "The principal tool used by central banks to manipulate commercial bank reserves and short-term interest rates." }],
            resources: [
              { title: "Open Market Operations Explained", url: "https://www.federalreserve.gov/monetarypolicy/openmarket.htm", type: "article", provider: "Federal Reserve" },
              { title: "Central Bank Balance Sheets", url: "https://www.imf.org/en/Publications/WP/Issues/2016/12/31/Central-Bank-Balance-Sheet-Policy-24209", type: "paper", provider: "IMF" }
            ],
            academicTier: "Tier 3: Undergraduate (Sophomore) | Harvard Department of Economics",
            executionBlueprint: {
              monetization: "Macro asset allocation shifts; trade index products ahead of interest rate cuts or balance sheet expansion announcements.",
              whatToBuy: "Liquid US Treasury Exchange Traded Funds (ETFs) or Treasury Bonds.",
              howToBuy: "Purchase Treasury ETFs (e.g., SHY, TLT) via standard retail brokerage apps (e.g., Interactive Brokers).",
              whenToBuy: "Buy long-term treasury assets (TLT) when central banks signal a pivot from interest rate hikes to cuts.",
              beforeAndAfterChecklist: "Before: Study FOMC policy statements and dot-plot projections. After: Monitor monthly CPI and employment reports for trend changes.",
              platforms: ["TradingView", "Interactive Brokers", "Federal Reserve News Feed"],
              realWorldExample: "Purchasing TLT calls prior to a Federal Reserve rate cut announcement, capturing capital appreciation as bond yields drop."
            }
          }
        ],
        resources: [
          { title: "Principles for Dealing with the Changing World Order", url: "https://www.youtube.com/watch?v=xguam0TKMw8", type: "video", provider: "Ray Dalio" }
        ],
        isQuizCompleted: false
      }
    ]
  },
  {
    id: 3,
    name: "PHASE 2: CAPITAL VALUATION",
    tagline: "Equity Risk Premiums and Intrinsic Logic.",
    status: LevelStatus.LOCKED,
    icon: "📈",
    topics: [
      {
        id: "t1-1",
        title: "Capital Pricing & Intrinsic Valuation",
        description: "Master the mathematical methods used by investment banks to price equity, evaluate projects, and calculate intrinsic value.",
        missionStrategy: "Learn the mechanics of discounting future cash flows and structuring Weighted Average Cost of Capital.",
        category: 'EQUITIES',
        funnyTake: "Valuation is just assigning a precise price tag to future business anxiety.",
        subTopics: [
          {
            title: "Sub-Phase 1.1: Time Value of Money & NPV",
            streetExplanation: "A dollar today is worth more than a dollar tomorrow because you can invest today's dollar and earn interest. Discounting is just compounding in reverse.",
            boardroomExplanation: "WHAT: Valuation logic stating cash value decays over time due to opportunity costs.\nWHY: Protects capital from yield dilution by establishing discount rates for future returns.\nWHO: Corporate finance directors, treasury analysts, and venture investors.\nWHEN: Executed before any capital deployment or investment approval.\nWHERE: Used globally across all corporate balance sheets and valuation models.\nHOW: 1. Forecast future cash flows. 2. Determine opportunity cost (discount rate). 3. Calculate present values. 4. Sum up values and subtract initial costs.",
            explainerVideoId: "fd_emLLzJnk",
            technicalBriefing: "$$NPV = \\sum_{t=1}^{n} \\frac{CF_t}{(1+r)^t} - Initial\\_Outlay$$",
            vocabulary: [{ word: "Discounting", streetAnalogy: "Shaving off value for the wait.", boardroomDefinition: "The mathematical process of determining the present value of a future payment." }],
            resources: [
              { title: "Net Present Value Guide", url: "https://www.investopedia.com/terms/n/npv.asp", type: "article", provider: "Investopedia" },
              { title: "Time Value of Money (TVM) Concepts", url: "https://www.corporatefinanceinstitute.com/resources/valuation/time-value-of-money/", type: "article", provider: "CFI" }
            ],
            academicTier: "Tier 3: Undergraduate (Junior) | MIT Sloan School of Management",
            executionBlueprint: {
              monetization: "Evaluate capital projects or commercial real estate acquisitions to isolate deals with a positive Net Present Value (NPV).",
              whatToBuy: "Undervalued corporate debt or cash-flowing real estate assets sold below replacement cost.",
              howToBuy: "Conduct direct private underwriting or invest through syndication platforms.",
              whenToBuy: "Buy when cash-flow metrics yield discount rates below current market capitalization rates.",
              beforeAndAfterChecklist: "Before: Run Excel discounting model using WACC as the hurdle rate. After: Enforce strict rent collections or operational cost controls.",
              platforms: ["Excel Modeling Templates", "RealtyShares", "CrowdStreet"],
              realWorldExample: "Acquiring a commercial warehouse for $2M that yields $220k annual cash flow, yielding a positive NPV under a 10% discount rate."
            }
          },
          {
            title: "Sub-Phase 1.2: Discounted Cash Flow (DCF) Modeling",
            streetExplanation: "To find what a business is worth, add up all the cash it will make in the future, discount it to today's dollars, and add a final exit value.",
            boardroomExplanation: "WHAT: Intrinsic valuation model forecasting risk-adjusted free cash flows to determine equity value.\nWHY: Eliminates market sentiment bias to calculate true asset value.\nWHO: Investment banking analysts, equity researchers, and private equity managers.\nWHEN: Conducted during corporate acquisitions, public buyouts, and stock pricing.\nWHERE: The core methodology of Wall Street valuation desks.\nHOW: 1. Project Free Cash Flows (5-10 years). 2. Estimate Terminal Value. 3. Discount all flows using the cost of capital. 4. Subtract net debt to get Equity Value.",
            explainerVideoId: "fd_emLLzJnk",
            technicalBriefing: "$$DCF = \\sum_{t=1}^{n} \\frac{FCF_t}{(1+WACC)^t} + \\frac{Terminal\\_Value}{(1+WACC)^n}$$",
            vocabulary: [{ word: "Terminal Value", streetAnalogy: "The exit price of a business.", boardroomDefinition: "The estimated value of a business beyond the explicit forecast period in DCF modeling." }],
            resources: [
              { title: "DCF Valuation Modeling", url: "https://www.investopedia.com/terms/d/dcf.asp", type: "article", provider: "Investopedia" },
              { title: "Damodaran Online Valuation Reference", url: "https://pages.stern.nyu.edu/~adamodar/", type: "article", provider: "NYU Stern" }
            ],
            academicTier: "Tier 4: Ivy League MBA | Wharton Valuation Laboratory",
            executionBlueprint: {
              monetization: "Long-term value investing; buy equity in high-moat businesses that generate sustainable cash flows beyond the 5-year forecast horizon.",
              whatToBuy: "Mature value stocks with robust free cash flows and low capital expenditures.",
              howToBuy: "Purchase shares on public exchanges (NYSE/NASDAQ) using a brokerage account.",
              whenToBuy: "Buy when public panic drops stock prices below their intrinsic DCF-calculated value.",
              beforeAndAfterChecklist: "Before: Compute terminal value using both Gordon Growth and Exit Multiple methods. After: Verify capital expenditures relative to revenue growth quarterly.",
              platforms: ["Bloomberg Terminal", "Fidelity", "Morningstar"],
              realWorldExample: "Buying shares of a utility giant during a market correction when the stock trades at a 30% discount to its long-term DCF value."
            }
          },
          {
            title: "Sub-Phase 1.3: Weighted Average Cost of Capital (WACC)",
            streetExplanation: "WACC is the combined cost a company pays to borrow money and satisfy shareholders. It is the minimum rate a company must make to break even.",
            boardroomExplanation: "WHAT: The blended cost of debt and equity financing proportional to a firm's capital structure.\nWHY: Serves as the hurdle rate to determine if a project generates economic value.\nWHO: Chief Financial Officers, investment bankers, and capital structure strategists.\nWHEN: Calculated during capital budgeting, restructuring, and M&A pricing.\nWHERE: Leveraged across corporate finance treasury platforms globally.\nHOW: 1. Find Cost of Equity (using CAPM). 2. Find Cost of Debt (interest rate minus tax shield). 3. Weight by market value ratios. 4. Blend the rates.",
            explainerVideoId: "mQ_B-wYgYwU",
            technicalBriefing: "$$WACC = \\left(\\frac{E}{V}\\right)R_e + \\left(\\frac{D}{V}\\right)R_d(1 - T_c)$$",
            vocabulary: [{ word: "Tax Shield", streetAnalogy: "Tax discount on debt interest.", boardroomDefinition: "The reduction in taxable income for a corporation achieved by deducting interest payments on debt." }],
            resources: [
              { title: "Weighted Average Cost of Capital (WACC)", url: "https://www.investopedia.com/terms/w/wacc.asp", type: "article", provider: "Investopedia" },
              { title: "Capital Structure Decisions", url: "https://www.cfainstitute.org/en/membership/professional-development/refresher-readings/capital-structure", type: "article", provider: "CFA Institute" }
            ],
            academicTier: "Tier 4: Ivy League MBA | Columbia Business School",
            executionBlueprint: {
              monetization: "Maximize corporate equity yields by utilizing interest expense write-offs to reduce taxable corporate net income.",
              whatToBuy: "Income-generating real estate or capital-intensive companies with high depreciation and interest expenses.",
              howToBuy: "Acquire real estate assets or shares in capital-intensive partnerships.",
              whenToBuy: "Invest before high tax-bracket calendar years to offset taxable income.",
              beforeAndAfterChecklist: "Before: Analyze the debt-to-equity ratio and tax rate changes. After: File corporate tax returns detailing the depreciation and interest deductions.",
              platforms: ["TurboTax Business", "CPA Tax Ledgers", "IRS Codes"],
              realWorldExample: "Utilizing $50,000 of mortgage interest and asset depreciation to zero-out the tax liability of a rental property portfolio."
            }
          }
        ],
        resources: [
          { title: "Valuation Foundations (Vanguard)", url: "https://institutional.vanguard.com/insights-and-education.html", type: "paper", provider: "Vanguard" }
        ],
        isQuizCompleted: false
      }
    ]
  },
  {
    id: 4,
    name: "PHASE 3: DEBT & LEVERAGE",
    tagline: "Fixed Income and Capital Structure Optimization.",
    status: LevelStatus.LOCKED,
    icon: "🏛️",
    topics: [
      {
        id: "t2-1",
        title: "Debt Markets & Capital Structure",
        description: "Deconstruct how governments and corporations borrow capital through bond issuance and optimize leverage ratios.",
        missionStrategy: "Analyze interest rates, bond yields, curve inversions, and debt default risk covenants.",
        category: 'FIXED_INCOME',
        funnyTake: "Debt is a time machine that lets you buy tomorrow's things with yesterday's work.",
        subTopics: [
          {
            title: "Sub-Phase 2.1: Bond Pricing & Yield to Maturity (YTM)",
            streetExplanation: "A bond is a loan where the borrower pays you regular interest (coupons) and returns the face value at the end. The yield is your total return rate.",
            boardroomExplanation: "WHAT: Valuation of fixed-income instruments and calculation of internal rate of return if held to maturity.\nWHY: Establishes borrowing costs and helps investors compare debt instruments of different maturities.\nWHO: Fixed-income fund managers, sovereign debt desks, and corporate treasuries.\nWHEN: Executed during new corporate debt underwriting and daily market trading.\nWHERE: The global bond market, which is significantly larger than the stock market.\nHOW: 1. Identify future coupon payments. 2. Discount coupons by the current market rate. 3. Add discounted principal value. 4. Solve for YTM.",
            explainerVideoId: "1J1c9vG86u0",
            technicalBriefing: "$$Bond\\_Price = \\sum_{t=1}^{n} \\frac{C}{(1+YTM)^t} + \\frac{FV}{(1+YTM)^n}$$",
            vocabulary: [{ word: "Coupon Rate", streetAnalogy: "Fixed interest rate on a loan.", boardroomDefinition: "The annual interest rate paid by the bond issuer, based on the bond's face value." }],
            resources: [
              { title: "Bond Valuation and Yields", url: "https://www.investopedia.com/terms/y/ytm.asp", type: "article", provider: "Investopedia" },
              { title: "Fixed Income Analysis Handbook", url: "https://www.cfainstitute.org/en/programs/cfa/curriculum", type: "book", provider: "CFA Institute" }
            ],
            academicTier: "Tier 2: Secondary Education (High School) | London Business School",
            executionBlueprint: {
              monetization: "Generate predictable cash flows by constructing a bond ladder composed of fixed-coupon sovereign or corporate debt.",
              whatToBuy: "High-grade corporate bonds or municipal bonds that offer tax-free interest payments.",
              howToBuy: "Buy bonds directly through treasury desks or retail brokerage platforms.",
              whenToBuy: "Lock in high coupon rates when inflation peaks and rates are expected to decline.",
              beforeAndAfterChecklist: "Before: Check the issuer credit rating (AAA to BBB-) and maturity date. After: Deposit coupon payments into high-yield sweep accounts to compound interest.",
              platforms: ["TreasuryDirect", "Fidelity Bond Desk", "S&P Ratings Network"],
              realWorldExample: "Buying a municipal bond paying a 5.5% tax-free annual coupon, generating $5,500 passive income on a $100,000 deployment."
            }
          },
          {
            title: "Sub-Phase 2.2: The Term Structure of Interest Rates",
            streetExplanation: "Usually, long-term debt pays more interest. But when the short-term interest rates are higher than long-term rates, the yield curve inverts, signaling a recession.",
            boardroomExplanation: "WHAT: The relationship between interest rate yields and different maturity timelines for debt instruments.\nWHY: Acts as the primary macro-economic indicator for growth expectations and liquidity recessions.\nWHO: Central bankers, treasury bond traders, and macro fund managers.\nWHEN: Checked constantly during interest rate policy changes and macro shifts.\nWHERE: Domestic sovereign treasury bond curves (e.g., US Treasuries).\nHOW: 1. Plot yields of 3M, 2Y, 10Y bonds. 2. Analyze slope (normal vs inverted). 3. Adjust portfolio allocation based on recession signals.",
            explainerVideoId: "1J1c9vG86u0",
            technicalBriefing: "$$Spread = Yield_{10Y} - Yield_{2Y}$$",
            vocabulary: [{ word: "Inversion", streetAnalogy: "Short-term rates paying more than long-term.", boardroomDefinition: "An economic event where long-term debt instruments have lower yields than short-term instruments." }],
            resources: [
              { title: "The Term Structure of Interest Rates", url: "https://www.investopedia.com/terms/y/yieldcurve.asp", type: "article", provider: "Investopedia" },
              { title: "Yield Curve Inversion Mechanics", url: "https://www.newyorkfed.org/research/capital_markets/ycandrecession.html", type: "article", provider: "NY Fed" }
            ],
            academicTier: "Tier 3: Undergraduate (Sophomore) | Yale Department of Economics",
            executionBlueprint: {
              monetization: "Recession hedging; rotate capital from cyclical equities into defensive sectors (utilities, staples) or cash equivalents during yield inversions.",
              whatToBuy: "Defensive sector ETFs (e.g., XLU) or short-term treasury bills.",
              howToBuy: "Buy defensive stock ETFs or treasury assets via standard trading platforms.",
              whenToBuy: "Buy defensive assets when the 10Y-2Y yield spread drops below zero (inverts).",
              beforeAndAfterChecklist: "Before: Check yield spread data daily on economic databases. After: Re-evaluate equity positions if the curve remains inverted for more than three months.",
              platforms: ["FRED (Federal Reserve Economic Data)", "TradingView", "Fidelity"],
              realWorldExample: "Rotating 50% of an equity portfolio into Treasury Bills when the 10Y-2Y spread hits -0.50%, shielding capital from the subsequent bear market."
            }
          },
          {
            title: "Sub-Phase 2.3: Leverage & Debt Covenants",
            streetExplanation: "Debt multiplies your gains but also your losses. Covenants are rules banks put in place to ensure you don't take too much risk and fail to pay them back.",
            boardroomExplanation: "WHAT: Financial leverage ratios and legal restrictions placed on borrowers by debt underwriters.\nWHY: Protects lenders from capital loss while helping companies leverage equity capital efficiently.\nWHO: Commercial banks, rating agencies (S&P, Moody's), and corporate management.\nWHEN: Evaluated during loan applications, restructuring, and quarterly compliance checks.\nWHERE: Commercial debt contracts and credit underwriting files.\nHOW: 1. Compute leverage ratios (Debt/Equity). 2. Verify interest coverage (EBITDA/Interest). 3. Set strict contract covenants (e.g., max leverage 4x).",
            explainerVideoId: "fd_emLLzJnk",
            technicalBriefing: "$$DSCR = \\frac{Net\\_Operating\\_Income}{Total\\_Debt\\_Service}$$",
            vocabulary: [{ word: "Covenants", streetAnalogy: "Rules you must follow to keep your loan.", boardroomDefinition: "Binding agreements in credit contracts that limit certain actions by the borrowing entity." }],
            resources: [
              { title: "Leverage and Capital Optimization", url: "https://www.investopedia.com/terms/f/financialleverage.asp", type: "article", provider: "Investopedia" },
              { title: "Debt Covenants and Credit Risk", url: "https://www.corporatefinanceinstitute.com/resources/commercial-lending/debt-covenants/", type: "article", provider: "CFI" }
            ],
            academicTier: "Tier 4: Ivy League MBA | NYU Stern School of Business",
            executionBlueprint: {
              monetization: "Mitigate lending risk by underwriting senior secured loans with strict financial performance constraints for the borrowing company.",
              whatToBuy: "Syndicated corporate loans or high-yield private credit notes.",
              howToBuy: "Participate in private lending syndicates or accredited investor credit platforms.",
              whenToBuy: "Invest when credit spreads are wide, indicating that lenders are demanding higher premiums for risk.",
              beforeAndAfterChecklist: "Before: Review loan agreement covenants (e.g., max Leverage Ratio of 3.5x). After: Monitor quarterly debt service coverage reports from the borrower.",
              platforms: ["Percent", "Yieldstreet", "Bloomberg Terminal"],
              realWorldExample: "Extending a $150,000 growth loan to a tech startup, secured by IP and conditional on the company maintaining a minimum cash balance of $250,000."
            }
          }
        ],
        resources: [
          { title: "Understanding the Yield Curve", url: "https://www.investopedia.com/terms/y/yieldcurve.asp", type: "article", provider: "Investopedia" }
        ],
        isQuizCompleted: false
      }
    ]
  },
  {
    id: 5,
    name: "PHASE 4: PORTFOLIO THEORY",
    tagline: "Modern Portfolio Theory and Sharpe Ratio Dynamics.",
    status: LevelStatus.LOCKED,
    icon: "📊",
    topics: [
      {
        id: "t3-1",
        title: "Asset Allocation & Risk Arbitrage",
        description: "Study the mathematics of risk diversification, portfolio variance, asset correlation, and risk-adjusted returns.",
        missionStrategy: "Learn how to optimize asset weights along the Efficient Frontier using covariance and Sharpe ratios.",
        category: 'PORTFOLIO',
        funnyTake: "Diversification is the only free lunch in economics—it means not putting all your eggs in one basket.",
        subTopics: [
          {
            title: "Sub-Phase 3.1: Diversification & Portfolio Variance",
            streetExplanation: "If you buy two stocks that move in opposite directions, you cut your risk in half. Portfolio math calculates how stocks move together.",
            boardroomExplanation: "WHAT: Reducing unsystematic risk by holding assets that are not perfectly correlated.\nWHY: Maximizes return potential while minimizing the volatility of the aggregate portfolio.\nWHO: Wealth managers, asset allocators, and individual portfolio managers.\nWHEN: Executed during portfolio construction, rebalancing, and strategic planning.\nWHERE: Used across global pension funds, mutual funds, and wealth accounts.\nHOW: 1. Find asset variances and weights. 2. Calculate correlation coefficients. 3. Compute joint portfolio variance. 4. Minimize variance by balancing weights.",
            explainerVideoId: "a5v_2BwQ3fM",
            technicalBriefing: "$$\\sigma_p^2 = w_1^2 \\sigma_1^2 + w_2^2 \\sigma_2^2 + 2 w_1 w_2 \\rho_{1,2} \\sigma_1 \\sigma_2$$",
            vocabulary: [{ word: "Correlation", streetAnalogy: "How much two stocks mimic each other.", boardroomDefinition: "A statistic that measures the degree to which two securities move in relation to each other." }],
            resources: [
              { title: "Portfolio Variance Mathematics", url: "https://www.investopedia.com/terms/p/portfolio-variance.asp", type: "article", provider: "Investopedia" },
              { title: "The Math of Diversification", url: "https://www.sec.gov/investor/pubs/introtodivers.htm", type: "article", provider: "SEC" }
            ],
            academicTier: "Tier 1: Elementary Foundation (Std 1-5) | Stanford Quantitative Finance",
            executionBlueprint: {
              monetization: "Portfolio risk reduction; pair negatively correlated assets (e.g., gold and tech stocks) to reduce aggregate portfolio volatility.",
              whatToBuy: "Gold ETFs (GLD) and broad equity market index ETFs (SPY).",
              howToBuy: "Buy standard shares via Robinhood, Vanguard, or Schwab.",
              whenToBuy: "Build a diversified core portfolio during bull markets to prepare for macro shocks.",
              beforeAndAfterChecklist: "Before: Compute correlation matrix in Excel or using online tools. After: Rebalance the asset weights annually to maintain the target risk profile.",
              platforms: ["Portfolio Visualizer", "Excel", "Vanguard"],
              realWorldExample: "Allocating 80% to SPY and 20% to GLD, reducing the portfolio drop during a stock market correction because gold prices rose concurrently."
            }
          },
          {
            title: "Sub-Phase 3.2: Modern Portfolio Theory & Efficient Frontier",
            streetExplanation: "The Efficient Frontier is a curve showing the absolute best portfolios—the ones that give the highest return for a specific level of risk.",
            boardroomExplanation: "WHAT: An asset optimization framework selecting portfolios with maximum return for a given level of risk.\nWHY: Eliminates inefficient portfolios that carry high risk for subpar return levels.\nWHO: Quantitative analysts, fund managers, and mathematical finance desks.\nWHEN: Leveraged during macro asset allocation adjustments and portfolio design.\nWHERE: Running on high-performance portfolio optimization servers worldwide.\nHOW: 1. Estimate expected returns for all assets. 2. Construct covariance matrix. 3. Calculate portfolio risk for various asset weights. 4. Plot the curve and select target weights.",
            explainerVideoId: "a5v_2BwQ3fM",
            technicalBriefing: "$$E(R_p) = \\sum_{i=1}^{n} w_i E(R_i)$$",
            vocabulary: [{ word: "Efficient Frontier", streetAnalogy: "The sweet spot of risk and reward.", boardroomDefinition: "The set of optimal portfolios that offer the highest expected return for a defined level of risk." }],
            resources: [
              { title: "Modern Portfolio Theory Principles", url: "https://www.investopedia.com/terms/m/modernportfoliotheory.asp", type: "article", provider: "Investopedia" },
              { title: "Efficient Frontier Optimization", url: "https://www.corporatefinanceinstitute.com/resources/wealth-management/efficient-frontier/", type: "article", provider: "CFI" }
            ],
            academicTier: "Tier 3: Undergraduate (Senior) | Princeton Bendheim Center for Finance",
            executionBlueprint: {
              monetization: "Optimize asset allocations mathematically to secure the highest expected return for your selected risk threshold.",
              whatToBuy: "A diversified mix of international stocks, domestic bonds, commodities, and real estate ETFs.",
              howToBuy: "Purchase target asset index funds through retail or robo-advisory accounts.",
              whenToBuy: "Apply portfolio optimization models during annual portfolio reviews and rebalancing phases.",
              beforeAndAfterChecklist: "Before: Input asset return variances and covariance metrics into optimization software. After: Rebalance assets when allocations drift by more than 5% from targets.",
              platforms: ["Portfolio Visualizer", "Wealthfront", "Betterment"],
              realWorldExample: "Using Markowitz optimization to adjust a portfolio from 100% S&P 500 to a balanced global mix, increasing long-term Sharpe ratio from 0.85 to 1.15."
            }
          },
          {
            title: "Sub-Phase 3.3: CAPM & Sharpe Ratio",
            streetExplanation: "CAPM calculates what return you should expect from a stock based on its risk (Beta). The Sharpe Ratio measures how much extra return you get for the risk you take.",
            boardroomExplanation: "WHAT: The Capital Asset Pricing Model and the standard measure of risk-adjusted excess return.\nWHY: Verifies if a portfolio manager is generating genuine alpha or just taking on excess leverage and beta risk.\nWHO: Mutual fund evaluators, institutional allocators, and risk officers.\nWHEN: Calculated during monthly performance reviews and manager evaluations.\nWHERE: The core performance metric on Bloomberg terminals and portfolio dashboards.\nHOW: 1. Calculate risk-free rate and portfolio return. 2. Find portfolio standard deviation (volatility). 3. Subtract risk-free rate from return. 4. Divide by volatility.",
            explainerVideoId: "3ZleA4P9B2U",
            technicalBriefing: "$$Sharpe = \\frac{R_p - R_f}{\\sigma_p}$$",
            vocabulary: [{ word: "Beta", streetAnalogy: "How sensitive a stock is to the market.", boardroomDefinition: "A measure of the volatility or systematic risk of a security or portfolio compared to the market as a whole." }],
            resources: [
              { title: "Capital Asset Pricing Model (CAPM)", url: "https://www.investopedia.com/terms/c/capm.asp", type: "article", provider: "Investopedia" },
              { title: "Measuring Risk-Adjusted Returns (Sharpe)", url: "https://www.cfainstitute.org/en/research/financial-analysts-journal", type: "article", provider: "CFA Institute" }
            ],
            academicTier: "Tier 2: Secondary Education (High School) | Chicago Booth School of Business",
            executionBlueprint: {
              monetization: "Leverage trading; buy high-beta stocks during early-stage economic expansions to capture outsized gains, and switch to low-beta utilities during declines.",
              whatToBuy: "High-beta technology ETFs (QQQ) or low-beta consumer staples ETFs (XLP).",
              howToBuy: "Buy ETF shares using retail brokerage accounts.",
              whenToBuy: "Shift to high-beta assets when macroeconomic indicators signal positive growth expansions.",
              beforeAndAfterChecklist: "Before: Check the historical beta metric of the target asset on finance sites. After: Apply trailing stops to high-beta assets to protect capital from sharp reversals.",
              platforms: ["Yahoo Finance", "TradingView", "Fidelity"],
              realWorldExample: "Purchasing Nvidia shares (Beta of 1.7) during a tech rally, capturing returns that significantly outperformed the S&P 500 (Beta of 1.0)."
            }
          }
        ],
        resources: [
          { title: "Modern Portfolio Theory Foundations", url: "https://www.investopedia.com/terms/m/modernportfoliotheory.asp", type: "article", provider: "Investopedia" }
        ],
        isQuizCompleted: false
      }
    ]
  },
  {
    id: 6,
    name: "PHASE 5: DERIVATIVES & VOLATILITY",
    tagline: "Options, Futures, and Systematic Hedging Matrix.",
    status: LevelStatus.LOCKED,
    icon: "⚙️",
    topics: [
      {
        id: "t4-1",
        title: "Options Pricing & Systematic Hedging",
        description: "Deconstruct the pricing mechanics of derivatives using Black-Scholes and explore options hedging strategies.",
        missionStrategy: "Understand calls, puts, delta-hedging, and Greek metrics to manage volatile portfolios.",
        category: 'DERIVATIVES',
        funnyTake: "Options are financial contracts that let you bet on what price a stock will be next Tuesday.",
        subTopics: [
          {
            title: "Sub-Phase 4.1: Option Contract Mechanics",
            streetExplanation: "A call option gives you the right to buy a stock at a set price. A put option gives you the right to sell. You pay a premium (fee) to buy these options.",
            boardroomExplanation: "WHAT: Financial derivative contracts granting the buyer the right, but not the obligation, to execute a trade.\nWHY: Leverages capital exposure and enables risk isolation from market price drops.\nWHO: Derivatives traders, arbitrageurs, and corporate risk hedgers.\nWHEN: Traded actively across global options exchanges (e.g., CBOE).\nWHERE: Listed derivative markets globally.\nHOW: 1. Select underlying asset. 2. Pick strike price and expiration date. 3. Pay premium to buy contract. 4. Exercise option if price moves favorably.",
            explainerVideoId: "D34x9Jm1vL4",
            technicalBriefing: "$$Intrinsic\\_Value_{Call} = Max(S_t - K, 0)$$",
            vocabulary: [{ word: "Strike Price", streetAnalogy: "The locked-in price.", boardroomDefinition: "The set price at which an option contract owner can buy or sell the underlying security." }],
            resources: [
              { title: "Options Contract Basics", url: "https://www.investopedia.com/terms/o/option.asp", type: "article", provider: "Investopedia" },
              { title: "CBOE Options Trading Guide", url: "https://www.cboe.com/education/", type: "article", provider: "CBOE" }
            ],
            academicTier: "Tier 2: Secondary Education (High School) | Oxford Said Business School",
            executionBlueprint: {
              monetization: "Income generation; sell covered call options at strike prices above the current market price of your stock holdings to collect premiums.",
              whatToBuy: "100 shares of a stable dividend stock (e.g., Apple, Microsoft) and call options.",
              howToBuy: "Enable options trading on your brokerage account and execute a 'Covered Call' trade.",
              whenToBuy: "Sell covered calls when the stock price spikes and implied volatility is high.",
              beforeAndAfterChecklist: "Before: Verify stock average purchase price is below option strike price. After: If stock crosses the strike price at expiration, prepare for shares to be sold at strike.",
              platforms: ["Thinkorswim by Charles Schwab", "Robinhood Options", "Webull"],
              realWorldExample: "Buying Apple stock at $180, selling a $190 covered call for a $3 premium, yielding $300 immediate cash income."
            }
          },
          {
            title: "Sub-Phase 4.2: Black-Scholes Pricing Model",
            streetExplanation: "Black-Scholes is a formula that calculates the fair price of an option by looking at stock price, strike price, time left, interest rates, and volatility.",
            boardroomExplanation: "WHAT: A mathematical differential equation modeling option prices based on continuous-time market parameters.\nWHY: Establishes market-neutral theoretical valuations for option premiums.\nWHO: Market makers, option market desks, and algorithmic traders.\nWHEN: Evaluated in real-time millions of times per second by pricing servers.\nWHERE: Embedded inside all options execution platforms.\nHOW: 1. Gather inputs (S, K, t, r, volatility). 2. Compute probability distributions (d1, d2). 3. Run Black-Scholes formula. 4. Output fair premium price.",
            explainerVideoId: "D34x9Jm1vL4",
            technicalBriefing: "$$C(S_t, t) = S_t N(d_1) - K e^{-r(T-t)} N(d_2)$$",
            vocabulary: [{ word: "Implied Volatility", streetAnalogy: "Expected swing speed of the stock.", boardroomDefinition: "The estimated volatility of a security's price, reflected in the pricing of its options." }],
            resources: [
              { title: "Black-Scholes Model Formulation", url: "https://www.investopedia.com/terms/b/blackscholes.asp", type: "article", provider: "Investopedia" },
              { title: "Option Pricing Differential Equations", url: "https://ocw.mit.edu/courses/18-s096-topics-in-mathematics-with-applications-in-finance-fall-2013/", type: "paper", provider: "MIT OCW" }
            ],
            academicTier: "Tier 4: Ivy League MBA | MIT Sloan Quantitative Finance",
            executionBlueprint: {
              monetization: "Volatility arbitrage; sell options when implied volatility (IV) is high relative to historical volatility, pocketing rich premiums.",
              whatToBuy: "Option credit spreads (Iron Condors, Vertical Spreads) on major market indices (SPX).",
              howToBuy: "Execute option spread trades on professional broker platforms.",
              whenToBuy: "Sell credit spreads during corporate earnings season or market panics when IV is elevated.",
              beforeAndAfterChecklist: "Before: Verify current IV Rank (IVR) is above 50%. After: Close positions when 50% of maximum profit is captured to reduce duration risk.",
              platforms: ["tastytrade", "Thinkorswim", "CBOE Volatility Index (VIX) Feed"],
              realWorldExample: "Selling an SPX Iron Condor when VIX hits 30, capturing rapid premium decay as the market calms down and VIX drops back to 15."
            }
          },
          {
            title: "Sub-Phase 4.3: Delta Hedging & Greek Ratios",
            streetExplanation: "Greeks are metrics like Delta (direction sensitivity) and Theta (time decay). Market makers hedge their Delta to stay neutral so they don't lose money on stock swings.",
            boardroomExplanation: "WHAT: Managing options risk profiles using sensitivity ratios (Greeks) and offsetting stock holdings.\nWHY: Ensures market makers remain insulated from market movements while pocketing premium spread revenues.\nWHO: Institutional market makers, hedge funds, and risk desks.\nWHEN: Adjusted continuously during live market trading sessions.\nWHERE: Active trading desks inside investment houses.\nHOW: 1. Calculate portfolio Delta. 2. Buy/sell matching amount of underlying shares. 3. Adjust position as Delta shifts (Gamma risk). 4. Remain delta-neutral.",
            explainerVideoId: "bOkyS_4v0uA",
            technicalBriefing: "$$\\Delta = \\frac{\\partial C}{\\partial S}$$",
            vocabulary: [{ word: "Theta", streetAnalogy: "Option price decay over time.", boardroomDefinition: "A measure of the rate of decline in the value of an option contract over time." }],
            resources: [
              { title: "Delta Hedging Strategies", url: "https://www.investopedia.com/terms/d/deltahedging.asp", type: "article", provider: "Investopedia" },
              { title: "Understanding Option Greeks", url: "https://www.corporatefinanceinstitute.com/resources/derivatives/option-greeks/", type: "article", provider: "CFI" }
            ],
            academicTier: "Tier 3: Undergraduate (Junior) | Berkeley Haas School of Business",
            executionBlueprint: {
              monetization: "Premium decay collection; write short-duration options contracts (30-45 days to expiration) to exploit the accelerating curve of time decay.",
              whatToBuy: "Out-of-the-money put option contracts on liquid ETFs (SPY, QQQ).",
              howToBuy: "Sell naked puts or put credit spreads via options brokerage platforms.",
              whenToBuy: "Sell contracts between 30 and 45 days before expiration, as Theta decay accelerates rapidly during this window.",
              beforeAndAfterChecklist: "Before: Check underlying asset support levels and macro factors. After: Manage or roll the position at 21 days to expiration if tested.",
              platforms: ["tastytrade", "Thinkorswim", "OptionStrat"],
              realWorldExample: "Selling a 30-day out-of-the-money SPY put option for $4.00, collecting $400 in premium as the option value decays to zero over the month."
            }
          }
        ],
        resources: [
          { title: "Options Trading Basics", url: "https://www.investopedia.com/terms/o/option.asp", type: "article", provider: "Investopedia" }
        ],
        isQuizCompleted: false
      }
    ]
  },
  {
    id: 7,
    name: "PHASE 6: CORPORATE FINANCE & M&A",
    tagline: "Valuing Acquisitions and Structuring Leveraged Buyouts.",
    status: LevelStatus.LOCKED,
    icon: "🤝",
    topics: [
      {
        id: "t5-1",
        title: "Corporate Restructuring & Acquisition Structure",
        description: "Master the valuation and execution protocols for corporate mergers, acquisitions, leveraged buyouts, and venture financing.",
        missionStrategy: "Analyze capital loan structures, debt service covenants, and cash flows to structure M&A transactions.",
        category: 'CORPORATE',
        funnyTake: "M&A is like corporate dating—it looks great on paper until you have to move in together.",
        subTopics: [
          {
            title: "Sub-Phase 5.1: Leveraged Buyout Mechanics",
            streetExplanation: "An LBO is buying a company using mostly borrowed money, using the target company's cash to pay off the debt, and keeping the profits when you sell.",
            boardroomExplanation: "WHAT: Acquisition strategy using debt financing to buy a business, secured by the target firm's assets.\nWHY: Magnifies equity return rates (IRR) by minimizing the initial sponsor cash contribution.\nWHO: Private equity general partners, leveraged finance banks, and target companies.\nWHEN: Executed during corporate carve-outs, private buyouts, and management buyouts.\nWHERE: Executed via private capital markets and investment banks.\nHOW: 1. Acquire company with 70% debt and 30% equity. 2. Use company operations to pay down debt. 3. Expand company operations. 4. Sell company with zero remaining debt.",
            explainerVideoId: "14aEip3n6oA",
            technicalBriefing: "$$IRR = \\left(\\frac{Equity_{Exit}}{Equity_{Entry}}\\right)^{\\frac{1}{n}} - 1$$",
            vocabulary: [{ word: "Leveraged Buyout", streetAnalogy: "Buying a house with a huge mortgage.", boardroomDefinition: "The acquisition of another company using a significant amount of borrowed money to meet the cost of acquisition." }],
            resources: [
              { title: "Leveraged Buyout (LBO) Modeling", url: "https://www.investopedia.com/terms/l/lbo.asp", type: "article", provider: "Investopedia" },
              { title: "Private Equity Buyout Analysis", url: "https://www.corporatefinanceinstitute.com/resources/valuation/lbo-model-leveraged-buyout/", type: "article", provider: "CFI" }
            ],
            academicTier: "Tier 4: Ivy League MBA | Harvard Business School M&A Lab",
            executionBlueprint: {
              monetization: "Acquire brick-and-mortar cash-flowing businesses using partner debt, optimizing operations to pay off debt and exit at a higher multiple.",
              whatToBuy: "Small-to-medium enterprises (SMEs) with clean books, stable cash flow, and zero debt.",
              howToBuy: "Arrange acquisition financing with local banks, SBA loans, or private investors.",
              whenToBuy: "Acquire businesses during transition phases (e.g., retirement of founder-owners).",
              beforeAndAfterChecklist: "Before: Conduct exhaustive financial audit and verify debt capacity (e.g., Debt-to-EBITDA of 3x). After: Implement strict corporate cash controls and repay debt.",
              platforms: ["BizBuySell", "Broker Networks", "SBA Loan Portals"],
              realWorldExample: "Acquiring a local HVAC service business for $1.5M using $1.2M in bank debt and $300k equity, paying off debt from business cash flow over 5 years."
            }
          },
          {
            title: "Sub-Phase 5.2: Mergers & Acquisitions Synergy Analysis",
            streetExplanation: "When two companies merge, they cut duplicate costs (like office space) and cross-sell products. If 1 + 1 = 3, that extra value is synergy.",
            boardroomExplanation: "WHAT: Evaluating the post-merger cost savings and revenue expansion generated by combining business operations.\nWHY: Justifies paying acquisition premiums to target shareholders.\nWHO: Corporate development teams, advisory banks, and management consultants.\nWHEN: Conducted during the due diligence phase of deal structuring.\nWHERE: Corporate boardrooms and deal advisory databases.\nHOW: 1. Identify redundant functions. 2. Calculate cost-savings timelines. 3. Model revenue cross-sales. 4. Discount synergies and add to standalone values.",
            explainerVideoId: "14aEip3n6oA",
            technicalBriefing: "$$Value_{AB} = Value_A + Value_B + Synergies - Premium$$",
            vocabulary: [{ word: "Accretion", streetAnalogy: "Earnings per share going up after a merger.", boardroomDefinition: "An increase in the value of a portfolio or the earnings per share of an acquiring firm post-transaction." }],
            resources: [
              { title: "M&A Deal Structuring and Valuation", url: "https://www.investopedia.com/terms/m/mergersandacquisitions.asp", type: "article", provider: "Investopedia" },
              { title: "Synergy Estimation in Mergers", url: "https://pages.stern.nyu.edu/~adamodar/pdfiles/papers/synergy.pdf", type: "paper", provider: "NYU Stern" }
            ],
            academicTier: "Tier 4: Ivy League MBA | Wharton M&A Laboratory",
            executionBlueprint: {
              monetization: "Consolidation arbitrage; execute roll-up acquisitions of smaller competitors using high-multiple equity, driving up consolidated earnings per share.",
              whatToBuy: "Accretive competitor acquisitions with lower P/E ratios than the acquiring firm.",
              howToBuy: "Execute corporate stock mergers or direct asset purchases.",
              whenToBuy: "Acquire when market consolidation generates significant cost synergies (reductions in duplicate overhead).",
              beforeAndAfterChecklist: "Before: Model accretive/dilutive spreadsheet showing combined EPS metrics. After: Integrate IT, back-office, and sales networks within 180 days.",
              platforms: ["Bloomberg Terminal", "PitchBook", "Excel M&A Models"],
              realWorldExample: "A public company trading at 25x earnings buys a competitor trading at 8x earnings, increasing the acquirer's EPS by 12% post-merger."
            }
          },
          {
            title: "Sub-Phase 5.3: Venture Capital & Cap Table Valuation",
            streetExplanation: "Venture capitalists fund early-stage startups. A Cap Table tracks who owns what percentage of the company, which changes every time the startup raises new cash.",
            boardroomExplanation: "WHAT: Venture-round pricing methods, share capitalization tables, and equity dilution mechanisms.\nWHY: Coordinates founder, employee, and VC ownership stakes during funding expansions.\nWHO: Startup founders, angel investors, and venture capital associates.\nWHEN: Evaluated before Seed, Series A, and subsequent funding rounds.\nWHERE: VC term sheets and capitalization ledger systems.\nHOW: 1. Determine pre-money valuation. 2. Add investment amount to get post-money valuation. 3. Issue new shares to investor. 4. Dilute existing owners proportionally.",
            explainerVideoId: "tV8pPZ5L_mY",
            technicalBriefing: "$$Post\\_Money\\_Valuation = Pre\\_Money\\_Valuation + Investment\\_Amount$$",
            vocabulary: [{ word: "Cap Table", streetAnalogy: "The pie chart of who owns what.", boardroomDefinition: "Capitalization Table; a spreadsheet or ledger database tracking the ownership stakes, dilution, and value of shares in a startup." }],
            resources: [
              { title: "Startup Capitalization Tables", url: "https://www.investopedia.com/terms/c/capitalization-table.asp", type: "article", provider: "Investopedia" },
              { title: "Venture Capital Term Sheets", url: "https://www.nvca.org/model-legal-documents/", type: "whitepaper", provider: "NVCA" }
            ],
            academicTier: "Tier 3: Undergraduate (Senior) | Stanford Venture Capital Lab",
            executionBlueprint: {
              monetization: "Early-stage startup investing; capture equity stakes in promising startups and negotiate dilution protection clauses.",
              whatToBuy: "Convertible notes or SAFE notes in early-stage seed startups.",
              howToBuy: "Invest through angel syndicates, venture funds, or direct placement.",
              whenToBuy: "Invest during pre-seed or seed stages when valuations are lowest.",
              beforeAndAfterChecklist: "Before: Verify cap table ownership, option pools, and liquidation preferences. After: Maintain active advisory touchpoints with startup founders.",
              platforms: ["Carta", "AngelList", "Republic"],
              realWorldExample: "Investing $25,000 via a SAFE note at a $5M valuation cap, converting into 0.5% equity ownership during the startup's Series A round."
            }
          }
        ],
        resources: [
          { title: "Corporate Finance Overview", url: "https://www.investopedia.com/terms/c/corporatefinance.asp", type: "article", provider: "Investopedia" }
        ],
        isQuizCompleted: false
      }
    ]
  },
  {
    id: 8,
    name: "PHASE 7: MACROECONOMICS & CENTRAL BANKING",
    tagline: "Sovereign Liquidity and Fiscal Policy Transmission.",
    status: LevelStatus.LOCKED,
    icon: "🌍",
    topics: [
      {
        id: "t6-1",
        title: "Monetary Policy & Fiscal Transmission Channels",
        description: "Deconstruct how central banks and treasury departments control interest rates, inflation, bank reserves, and exchange rates.",
        missionStrategy: "Analyze the Taylor Rule, quantitative easing, balance sheet expansion, and current/capital account balances.",
        category: 'MACRO',
        funnyTake: "Macroeconomics is the art of explaining why you were wrong about the economy yesterday.",
        subTopics: [
          {
            title: "Sub-Phase 6.1: Inflation & The Taylor Rule",
            streetExplanation: "Inflation is the decay of purchasing power. Central banks use the Taylor Rule as a mathematical guide to decide whether to hike or cut interest rates.",
            boardroomExplanation: "WHAT: Inflation gap targeting and policy interest rate adjustments based on economic outputs.\nWHY: Mitigates price volatility and stabilizes output growth.\nWHO: Central bank governors (Fed, ECB), policy committees, and economic researchers.\nWHEN: Evaluated during quarterly policy meetings (e.g., FOMC).\nWHERE: Sovereign central banking institutions.\nHOW: 1. Compute current inflation. 2. Find inflation deviation from target (e.g., 2%). 3. Calculate GDP output deviation. 4. Calculate target interest rate using the Taylor formula.",
            explainerVideoId: "6ZhnB2Y7Kms",
            technicalBriefing: "$$i_t = r_t^* + \\pi_t + 0.5(\\pi_t - \\pi_t^*) + 0.5(y_t - y_t^*)$$",
            vocabulary: [{ word: "Inflation Gap", streetAnalogy: "How far inflation is from the target.", boardroomDefinition: "The difference between the current inflation rate and the target inflation rate targeted by a central bank." }],
            resources: [
              { title: "The Taylor Rule and Rate Settings", url: "https://www.investopedia.com/terms/t/taylorrule.asp", type: "article", provider: "Investopedia" },
              { title: "Discretion versus Policy Rules in Practice", url: "https://web.stanford.edu/~johntayl/Papers/DiscretionVersusPolicyRulesInPractice.pdf", type: "paper", provider: "Stanford" }
            ],
            academicTier: "Tier 3: Undergraduate (Junior) | MIT Department of Economics",
            executionBlueprint: {
              monetization: "Macro commodities trading; go long on hard assets (oil, gold, real estate) during rising inflation gaps when central bank rates lag CPI.",
              whatToBuy: "Commodity ETFs (DBC) or physical gold/real estate assets.",
              howToBuy: "Buy commodity contracts or ETFs via standard brokerage accounts.",
              whenToBuy: "Buy commodities when CPI inflation print rises faster than the central bank's target rate.",
              beforeAndAfterChecklist: "Before: Check the Taylor Rule output vs current Fed Funds rate. After: Exit long positions when central banks initiate aggressive rate hikes.",
              platforms: ["FRED Economic Database", "TradingView", "Bloomberg"],
              realWorldExample: "Purchasing crude oil futures when CPI hit 6% while interest rates sat at 0.25%, capturing the commodity spike before the Fed hiked rates."
            }
          },
          {
            title: "Sub-Phase 6.2: Quantitative Easing & Balance Sheets",
            streetExplanation: "When lowering interest rates isn't enough, central banks buy trillions in treasury bonds to inject cash directly into banks, expanding their own balance sheets.",
            boardroomExplanation: "WHAT: Central bank direct purchasing of assets to lower long-term yields and expand money supply.\nWHY: Restores credit flows when short-term interest rates are near zero (liquidity trap).\nWHO: Central banks, primary dealers, and bond trading desks.\nWHEN: Executed during severe liquidity crises and economic stagnation periods.\nWHERE: Global capital markets.\nHOW: 1. Fed creates electronic reserves. 2. Fed purchases bonds from commercial banks. 3. Commercial bank reserves expand. 4. Yields drop, banks expand credit.",
            explainerVideoId: "6ZhnB2Y7Kms",
            technicalBriefing: "$$Reserves\\_Created = Bonds\\_Purchased$$",
            vocabulary: [{ word: "Quantitative Easing", streetAnalogy: "Central banks printing digital money.", boardroomDefinition: "An unconventional monetary policy where a central bank purchases government securities to increase money supply and encourage lending." }],
            resources: [
              { title: "Quantitative Easing Policies", url: "https://www.investopedia.com/terms/q/quantitative-easing.asp", type: "article", provider: "Investopedia" },
              { title: "Federal Reserve Balance Sheet Disclosures", url: "https://www.federalreserve.gov/monetarypolicy/bst_recenttrends.htm", type: "article", provider: "Fed" }
            ],
            academicTier: "Tier 3: Undergraduate (Senior) | LSE Monetary Economics",
            executionBlueprint: {
              monetization: "Asset price inflation play; buy growth equities and crypto assets when central banks announce balance sheet expansions (QE).",
              whatToBuy: "Technology growth stock index funds (QQQ) or Bitcoin (BTC).",
              howToBuy: "Acquire assets via public stock accounts or regulated digital asset exchanges.",
              whenToBuy: "Buy growth assets immediately upon central bank QE announcements.",
              beforeAndAfterChecklist: "Before: Monitor Fed balance sheet updates (H.4.1 release). After: Rotate to cash or short-term bills when central banks announce quantitative tightening (QT).",
              platforms: ["Federal Reserve H.4.1 Release", "TradingView", "Coinbase"],
              realWorldExample: "Allocating 20% capital to BTC and tech growth stocks in March 2020 as the Federal Reserve initiated $3T in emergency QE, riding the liquidity wave."
            }
          },
          {
            title: "Sub-Phase 6.3: Balance of Payments & Forex Transmission",
            streetExplanation: "The Balance of Payments tracks all money coming in and out of a country. Central bank rates influence exchange rates by attracting or repelling global capital.",
            boardroomExplanation: "WHAT: Ledger tracking a nation's transactions with the rest of the world, composed of the current and capital accounts.\nWHY: Dictates foreign exchange rates, import-export balances, and national capital flows.\nWHO: Treasury offices, central banks, and foreign exchange brokers.\nWHEN: Monitored constantly by sovereign rating firms and macroeconomic funds.\nWHERE: Global forex markets and international currency systems.\nHOW: 1. Net trade balance yields current account surplus/deficit. 2. Foreign asset purchases yield capital account flows. 3. Central bank hikes rates. 4. Foreign capital rushes in, strengthening currency.",
            explainerVideoId: "6ZhnB2Y7Kms",
            technicalBriefing: "$$Current\\_Account + Capital\\_Account + Financial\\_Account = 0$$",
            vocabulary: [{ word: "Forex", streetAnalogy: "The currency exchange market.", boardroomDefinition: "Foreign Exchange; the decentralized global market for the trading of currencies." }],
            resources: [
              { title: "Balance of Payments Theory", url: "https://www.investopedia.com/terms/b/balanceofpayments.asp", type: "article", provider: "Investopedia" },
              { title: "Forex Market Structure", url: "https://www.bis.org/publ/rpfx22.htm", type: "whitepaper", provider: "BIS" }
            ],
            academicTier: "Tier 3: Undergraduate (Junior) | Cambridge Faculty of Economics",
            executionBlueprint: {
              monetization: "Carry trade; borrow in low-interest currencies (e.g., Japanese Yen) and invest in high-yield currencies (e.g., US Dollar) to capture interest rate spreads.",
              whatToBuy: "USD/JPY currency pairs or interest-yielding foreign sovereign debt.",
              howToBuy: "Execute currency exchange and leverage positions on global forex platforms.",
              whenToBuy: "Buy carry pairs when yield spreads are widening and currency volatility is low.",
              beforeAndAfterChecklist: "Before: Verify interest rate policies of the respective central banks (BOJ vs Fed). After: Set tight stop losses to protect against sudden currency devaluations.",
              platforms: ["OANDA", "Interactive Brokers Forex Desk", "DailyFX"],
              realWorldExample: "Borrowing Japanese Yen at 0.1% interest, converting to USD, and purchasing US Treasuries yield 5.25%, netting a clean interest spread."
            }
          }
        ],
        resources: [
          { title: "Federal Reserve Policy Systems", url: "https://www.federalreserve.gov/monetarypolicy.htm", type: "article", provider: "Federal Reserve" }
        ],
        isQuizCompleted: false
      }
    ]
  },
  {
    id: 9,
    name: "PHASE 8: MARKET MICROSTRUCTURE & TRADING",
    tagline: "Order Books, Limit Orders, and Liquidity Provision.",
    status: LevelStatus.LOCKED,
    icon: "⚡",
    topics: [
      {
        id: "t7-1",
        title: "Trading Architecture & Price Discovery Mechanics",
        description: "Analyze the mechanics of limit order books, bid-ask spreads, liquidity provisioning, slippage, and high-frequency execution.",
        missionStrategy: "Learn how order matching systems operate and how high-frequency trading firms capture market spreads.",
        category: 'TRADING',
        funnyTake: "Trading is like a game of speed chess played by computers that can think a million times faster than you.",
        subTopics: [
          {
            title: "Sub-Phase 7.1: The Limit Order Book (LOB)",
            streetExplanation: "The LOB is a list of all buy and sell orders. Limit orders sit in the book waiting for a price, while market orders execute instantly against the best available price.",
            boardroomExplanation: "WHAT: The matching engine ledger tracking outstanding limit orders at various price levels.\nWHY: Serves as the foundation for price discovery and immediate market execution.\nWHO: Exchange engineers, market matching systems, and database programmers.\nWHEN: Evaluated continuously throughout trading hours.\nWHERE: Server engines inside stock exchanges (e.g., NASDAQ, NYSE).\nHOW: 1. Limit order is sent. 2. Queue priority is established (price/time). 3. Market order arrives. 4. Matching engine fills order from top of queue.",
            explainerVideoId: "Y0jUqW5s8oE",
            technicalBriefing: "$$Queue\\_Priority = F(Price, Time)$$",
            vocabulary: [{ word: "Market Order", streetAnalogy: "Buy now at whatever price is next.", boardroomDefinition: "An order to buy or sell a security immediately at the best available current market price." }],
            resources: [
              { title: "Limit Order Book Mechanics", url: "https://www.investopedia.com/terms/l/limitorderbook.asp", type: "article", provider: "Investopedia" },
              { title: "Order Matching Algorithms", url: "https://math.nyu.edu/~avellane/microstructure.pdf", type: "paper", provider: "NYU Courant" }
            ],
            academicTier: "Tier 1: Elementary Foundation (Std 1-5) | MIT Computer Science Lab",
            executionBlueprint: {
              monetization: "Arbitrage slippage reduction; use limit orders to buy at target support zones, avoiding the high slippage costs of market orders during volatile news.",
              whatToBuy: "Highly liquid index ETFs (SPY, QQQ) or large cap stocks.",
              howToBuy: "Set a 'Limit Order' on your broker platform instead of choosing a 'Market Order'.",
              whenToBuy: "Place limit orders below current price action during market consolidations.",
              beforeAndAfterChecklist: "Before: Check bid-ask depth and average daily volume. After: Review execution fill price to verify zero slippage costs occurred.",
              platforms: ["Thinkorswim", "Interactive Brokers L2 Desk", "TradingView"],
              realWorldExample: "Avoiding a $500 execution slippage loss during a stock earnings release by placing a strict limit order at $150.00 instead of a market buy."
            }
          },
          {
            title: "Sub-Phase 7.2: Bid-Ask Spreads & Market Making",
            streetExplanation: "Market makers make money by buying low and selling high. But if they trade with someone who knows secrets (informed traders), they lose. The spread is their hedge.",
            boardroomExplanation: "WHAT: The pricing gap between the bid and ask price, representing market maker compensation.\nWHY: Protects liquidity providers from adverse selection risk when trading with informed counterparties.\nWHO: Institutional market makers (Citadel, Virtu), brokers, and floor desks.\nWHEN: Computed instantly with every bid/ask change.\nWHERE: Active exchange matching databases.\nHOW: 1. Market maker quotes $100 Bid / $101 Ask. 2. Retail trades buy at $101 and sell at $100. 3. Market maker collects $1 spread. 4. Spread widens if volatility increases.",
            explainerVideoId: "Y0jUqW5s8oE",
            technicalBriefing: "$$Spread = P_{Ask} - P_{Bid}$$",
            vocabulary: [{ word: "Market Maker", streetAnalogy: "A merchant who always has stock.", boardroomDefinition: "A firm or individual that actively quotes two-sided markets in a security, providing liquidity." }],
            resources: [
              { title: "Bid-Ask Spread Determinants", url: "https://www.investopedia.com/terms/b/bid-askspread.asp", type: "article", provider: "Investopedia" },
              { title: "Market Making and Inventory Risk", url: "https://pages.stern.nyu.edu/~adamodar/pdfiles/cf2ev.pdf", type: "paper", provider: "NYU Stern" }
            ],
            academicTier: "Tier 4: Ivy League MBA | Princeton Quantitative Finance Lab",
            executionBlueprint: {
              monetization: "Liquidity provisioning; run market-making algorithms or provide liquidity to decentralized pools to capture bid-ask spreads.",
              whatToBuy: "Two-sided asset pairs (e.g., USDC and ETH) for liquidity pools.",
              howToBuy: "Deploy assets to Uniswap V3 concentrated liquidity positions or configure institutional API keys.",
              whenToBuy: "Provide liquidity during high-volume, sideways-moving markets to maximize fee capture.",
              beforeAndAfterChecklist: "Before: Calculate expected volatility and impermanent loss bounds. After: Rebalance inventory when asset prices trend strongly.",
              platforms: ["Uniswap Info", "Hummingbot (AMM Algo)", "Interactive Brokers API"],
              realWorldExample: "Deploying $20,000 into a Uniswap V3 USDC/ETH pool with a tight price range, collecting 0.3% transaction fees on all trade volume."
            }
          },
          {
            title: "Sub-Phase 7.3: HFT & Latency Arbitrage",
            streetExplanation: "High-frequency traders place their computers right next to the exchange's servers. By being microseconds faster, they front-run price changes across different exchanges.",
            boardroomExplanation: "WHAT: High-frequency trading exploiting microsecond differences in order routing execution.\nWHY: Arbitrages tiny price discrepancies across fragmented exchanges to capture risk-free gains.\nWHO: Algorithmic hedge funds and quantitative high-frequency trading desks.\nWHEN: Executed in fractions of a millisecond during live trading sessions.\nWHERE: Co-located server data centers adjacent to major exchange engines.\nHOW: 1. Price drops on NYSE. 2. HFT server catches drop. 3. Server sends order to NASDAQ before NASDAQ's pricing updates. 4. HFT captures arbitrage profit.",
            explainerVideoId: "Y0jUqW5s8oE",
            technicalBriefing: "$$Arbitrage\\_Window = Latency_{NASDAQ} - Latency_{HFT}$$",
            vocabulary: [{ word: "Co-location", streetAnalogy: "Renting server space inside the stock exchange.", boardroomDefinition: "Placing private server infrastructure inside an exchange's data center to minimize latency." }],
            resources: [
              { title: "High-Frequency Trading Overview", url: "https://www.investopedia.com/terms/h/high-frequency-trading.asp", type: "article", provider: "Investopedia" },
              { title: "Latency Arbitrage and Market Fragmentation", url: "https://www.sec.gov/marketstructure/research/hft_lit_review.pdf", type: "whitepaper", provider: "SEC" }
            ],
            academicTier: "Tier 4: Ivy League MBA | MIT High-Frequency Systems Lab",
            executionBlueprint: {
              monetization: "Execute algorithmic delta-neutral strategies that rely on speed advantages to trade across fragmented exchanges.",
              whatToBuy: "Liquid derivative instruments and exchange server rack leases.",
              howToBuy: "Purchase server hosting slots directly from exchange data centers (e.g., Carteret, NJ).",
              whenToBuy: "Deploy algorithms when high market fragmentation increases arbitrage spreads.",
              beforeAndAfterChecklist: "Before: Test network latency (sub-millisecond pings). After: Continuously audit algorithmic logic to prevent runaway trading loops.",
              platforms: ["Equinix Data Centers", "CME Group Co-Location", "FPGA Hardware compilers"],
              realWorldExample: "Deploying an arbitrage script on a server leased inside the Equinix NY4 data center, shaving latency to capture price spreads on NYSE vs NASDAQ."
            }
          }
        ],
        resources: [
          { title: "Market Microstructure Primer", url: "https://www.investopedia.com/terms/m/marketmicrostructure.asp", type: "article", provider: "Investopedia" }
        ],
        isQuizCompleted: false
      }
    ]
  },
  {
    id: 10,
    name: "PHASE 9: ALTERNATIVE INVESTMENTS",
    tagline: "Hedge Funds, Private Equity, and Venture Capital.",
    status: LevelStatus.LOCKED,
    icon: "💎",
    topics: [
      {
        id: "t8-1",
        title: "Alternative Assets & Private Yield Structure",
        description: "Study how institutional capital flows into non-public assets, direct credit lending, hedge funds, and private equity contracts.",
        missionStrategy: "Analyze private credit origination, loan seniority structures, preferred hurdle rates, and performance carry distributions.",
        category: 'ALTERNATIVES',
        funnyTake: "Alternative assets are investments you can't buy on Robinhood and require a massive net worth to enter.",
        subTopics: [
          {
            title: "Sub-Phase 8.1: Hedge Fund Strategy Arbitrage",
            streetExplanation: "Hedge funds don't just buy stocks. They short stocks, execute global macro bets, and arbitrage corporate mergers to make money whether the market goes up or down.",
            boardroomExplanation: "WHAT: Actively managed private investment funds deploying complex, market-neutral, and leveraged strategies.\nWHY: Generates absolute alpha returns uncorrelated with standard equity index benchmark markets.\nWHO: Accredited investors, portfolio managers, and prime broker desks.\nWHEN: Managed continuously to protect capital during market downturns.\nWHERE: Executed across global currency, equity, commodity, and debt markets.\nHOW: 1. Raise investor capital. 2. Deploy leverage (borrow capital). 3. Execute long/short or merger arbitrage strategies. 4. Pocket fee structures (2 and 20).",
            explainerVideoId: "F3f9lZ9a7Gk",
            technicalBriefing: "$$Alpha = R_p - [R_f + \\beta_p(R_m - R_f)]$$",
            vocabulary: [{ word: "Shorting", streetAnalogy: "Betting a stock will crash.", boardroomDefinition: "The sale of a security that is not owned by the seller, with the intent of buying it back later at a lower price." }],
            resources: [
              { title: "Hedge Fund Arbitrage Strategies", url: "https://www.investopedia.com/terms/h/hedgefund.asp", type: "article", provider: "Investopedia" },
              { title: "Absolute Return and Risk Parity", url: "https://www.bridgewater.com/research-and-insights/the-all-weather-story", type: "whitepaper", provider: "Bridgewater" }
            ],
            academicTier: "Tier 2: Secondary Education (High School) | Harvard Business School Hedge Fund Lab",
            executionBlueprint: {
              monetization: "Short overvalued companies that exhibit deteriorating fundamentals, aggressive accounting, or structural industry decay.",
              whatToBuy: "Short positions on equity shares or put options on weak companies.",
              howToBuy: "Execute a 'Sell Short' order on your broker platform, borrowing shares to sell immediately.",
              whenToBuy: "Short assets when earnings growth slows and the stock breaks below major technical support levels (e.g., 200-day moving average).",
              beforeAndAfterChecklist: "Before: Check hard-to-borrow fees and short interest ratio. After: Enforce strict trailing stop losses to protect against short squeezes.",
              platforms: ["Interactive Brokers", "TradeStation", "Ortex Short Interest Feed"],
              realWorldExample: "Shorting a failing retail chain's stock at $50, buying back shares at $10 to close the trade, capturing a 400% return on capital."
            }
          },
          {
            title: "Sub-Phase 8.2: Private Equity Hurdle Rates & Carry",
            streetExplanation: "Private Equity general partners only get their 20% performance fee (carry) after they pay back investors their original investment plus a guaranteed return (hurdle rate).",
            boardroomExplanation: "WHAT: Allocation metrics governing profit distribution (carried interest) between fund managers and investors.\nWHY: Protects investor interests by ensuring general partners only profit from superior capital returns.\nWHO: Limited partners (institutional investors), general partners (fund managers).\nWHEN: Computed during asset liquidation events and fund exits.\nWHERE: Specified in private placement partnership agreements.\nHOW: 1. Realize buyout gains. 2. Distribute capital to investors up to preferred return (e.g., 8%). 3. GP catches up. 4. GP takes 20% of remaining profits (carry).",
            explainerVideoId: "F3f9lZ9a7Gk",
            technicalBriefing: "$$GP\\_Carry = 0.20 \\times (Total\\_Exit\\_Value - Preferred\\_Hurdle)$$",
            vocabulary: [{ word: "Carried Interest", streetAnalogy: "The manager's cut of the profits.", boardroomDefinition: "A share of the profits of an investment fund that is paid to the investment manager as performance compensation." }],
            resources: [
              { title: "Private Equity Profit Allocations", url: "https://www.investopedia.com/terms/c/carriedinterest.asp", type: "article", provider: "Investopedia" },
              { title: "Hurdle Rates and Waterfall Distributions", url: "https://www.corporatefinanceinstitute.com/resources/wealth-management/distribution-waterfall/", type: "article", provider: "CFI" }
            ],
            academicTier: "Tier 4: Ivy League MBA | Wharton Private Equity Research",
            executionBlueprint: {
              monetization: "Private Equity general partnership; raise and manage a fund to acquire underperforming companies, taking a 20% cut of net profits (carry) upon exits.",
              whatToBuy: "Private companies with operational inefficiencies, stable cash flows, or consolidation potential.",
              howToBuy: "Form a General Partnership (GP) entity, write a Private Placement Memorandum, and raise capital from Limited Partners (LPs).",
              whenToBuy: "Deploy capital during economic downturns when acquisition multiples are depressed.",
              beforeAndAfterChecklist: "Before: Underwrite the transaction to target a minimum 20% Net IRR. After: Execute structural reorganization to streamline acquired operations.",
              platforms: ["Carta Fund Admin", "PitchBook", "Preqin Private Capital"],
              realWorldExample: "Exiting an acquired manufacturing plant for a $10M profit, distributing the principal and 8% hurdle to LPs, and pocketing $2M in carried interest."
            }
          },
          {
            title: "Sub-Phase 8.3: Venture Debt & Private Credit Structuring",
            streetExplanation: "Private credit is direct lending to private companies. Lenders secure their loans with covenants and options to buy company shares (warrants) to boost their return.",
            boardroomExplanation: "WHAT: Corporate debt origination by non-bank financial intermediaries, incorporating equity warrants.\nWHY: Bypasses traditional banking systems to provide flexible capital while securing high double-digit yield rates.\nWHO: Private credit lenders, venture lenders, and middle-market corporations.\nWHEN: Arranged during growth expansions, recapitalization, or cash runways.\nWHERE: Direct corporate financing markets.\nHOW: 1. Evaluate target credit risk. 2. Structure senior secured debt contract. 3. Attach warrant agreements (equity upsides). 4. Enforce strict debt covenants (interest cover).",
            explainerVideoId: "F3f9lZ9a7Gk",
            technicalBriefing: "$$Total\\_Yield = Interest\\_Rate + Warrant\\_Value\\_Normalized$$",
            vocabulary: [{ word: "Warrants", streetAnalogy: "Bonus coupons to buy stock cheap.", boardroomDefinition: "Derivatives issued by a company that give the holder the right to buy stock from the company at a specific price." }],
            resources: [
              { title: "Venture Debt and Warrants", url: "https://www.investopedia.com/terms/v/venture-debt.asp", type: "article", provider: "Investopedia" },
              { title: "Private Credit Market Growth", url: "https://www.imf.org/en/Publications/GFSR/Issues/2024/04/16/global-financial-stability-report-april-2024", type: "whitepaper", provider: "IMF" }
            ],
            academicTier: "Tier 3: Undergraduate (Senior) | Oxford Finance Laboratory",
            executionBlueprint: {
              monetization: "Venture debt financing; extend growth loans to private companies while securing warrants to capture equity upsides.",
              whatToBuy: "Senior secured debt notes with attached stock purchase warrants.",
              howToBuy: "Underwrite direct credit placements via private investment structures.",
              whenToBuy: "Lend to late-stage startups that need non-dilutive capital to bridge to an IPO or acquisition.",
              beforeAndAfterChecklist: "Before: Secure first-priority lien on all company assets and intellectual property. After: Monitor monthly burn rate and runway metrics of the company.",
              platforms: ["Carta", "PitchBook", "Private Credit Advisory Services"],
              realWorldExample: "Lending $1M to a SaaS startup at 12% interest, securing warrants to buy 1% of company stock for $1, which exits at $500,000 during a buyout."
            }
          }
        ],
        resources: [
          { title: "Alternative Investments (BlackRock)", url: "https://www.blackrock.com/institutions/en-us/solutions/alternative-investments", type: "article", provider: "BlackRock" }
        ],
        isQuizCompleted: false
      }
    ]
  },
  {
    id: 11,
    name: "PHASE 10: CRYPTOECONOMICS & DEFI",
    tagline: "Smart Contracts, Automated Market Makers, and Trustless Capital.",
    status: LevelStatus.LOCKED,
    icon: "🪙",
    topics: [
      {
        id: "t9-1",
        title: "Decentralized Finance & Smart Contract Protocols",
        description: "Explore the mechanics of decentralized ledgers, self-executing smart contracts, automated market makers (AMMs), and yield-generating liquidity pools.",
        missionStrategy: "Analyze trustless peer-to-peer banking networks, collateralization, and constant product market-making mathematics.",
        category: 'DEFI',
        funnyTake: "DeFi is like a bank run by software code where anyone can borrow, lend, or print their own tokens.",
        subTopics: [
          {
            title: "Sub-Phase 9.1: Trustless Ledgers & Blockchain Consensus",
            streetExplanation: "A blockchain is a shared public ledger. Consensus rules (like Proof of Work) ensure everyone agrees on the ledger without needing a central bank.",
            boardroomExplanation: "WHAT: Distributed database architectures maintaining state ledger consistency via algorithmic consensus protocols.\nWHY: Eliminates clearing houses, central database admins, and transaction counterparty risks.\nWHO: Miner nodes, validator systems, and decentralized platform participants.\nWHEN: Computed block-by-block continuously on decentralized networks.\nWHERE: Global peer-to-peer node networks.\nHOW: 1. User broadcasts transaction. 2. Validator nodes compile transactions into blocks. 3. Nodes solve cryptographic puzzle (Proof of Work). 4. Validated block is linked to ledger.",
            explainerVideoId: "cizLhxSKrAc",
            technicalBriefing: "$$Block\\_Hash = SHA256(Block\\_Data + Nonce) < Target$$",
            vocabulary: [{ word: "Consensus", streetAnalogy: "Everyone agreeing on who owns what.", boardroomDefinition: "The protocol mechanism by which validator nodes on a blockchain reach agreement on the state of the ledger." }],
            resources: [
              { title: "Blockchain Technology Principles", url: "https://www.investopedia.com/terms/b/blockchain.asp", type: "article", provider: "Investopedia" },
              { title: "Bitcoin: A Peer-to-Peer Electronic Cash System", url: "https://bitcoin.org/bitcoin.pdf", type: "whitepaper", provider: "Satoshi Nakamoto" }
            ],
            academicTier: "Tier 1: Elementary Foundation (Std 1-5) | Stanford Blockchain Research Centre",
            executionBlueprint: {
              monetization: "Secure blockchain ledger databases and earn validation rewards by running node infrastructure (staking).",
              whatToBuy: "Cryptographic assets required for staking consensus (e.g., Ethereum).",
              howToBuy: "Acquire ETH via regulated platforms, and stake directly or via validator pools.",
              whenToBuy: "Acquire staking assets during market bottoms or protocol upgrades.",
              beforeAndAfterChecklist: "Before: Check node uptime history and validator commission rates. After: Monitor validator metrics to avoid slashing penalties.",
              platforms: ["Lido Finance", "Rocket Pool", "Allnodes (Validator Hosting)"],
              realWorldExample: "Staking 32 ETH to run an independent validator node, generating a consistent 4% annual reward paid in native blockchain tokens."
            }
          },
          {
            title: "Sub-Phase 9.2: Smart Contracts & Ethereum EVM",
            streetExplanation: "Smart contracts are programs stored on the blockchain that execute automatically when conditions are met. No lawyers, no middle-men.",
            boardroomExplanation: "WHAT: Self-executing programs hosted on decentralized virtual machines (e.g., EVM).\nWHY: Guarantees transaction execution without reliance on third-party legal enforcement.\nWHO: Solidity developers, decentralized application teams, and user wallets.\nWHEN: Triggered automatically when predefined conditions are met in a transaction.\nWHERE: The EVM runtime layer across node networks.\nHOW: 1. Program is compiled. 2. Program is deployed to blockchain address. 3. User sends transaction to address. 4. EVM runs code and updates contract state.",
            explainerVideoId: "cizLhxSKrAc",
            technicalBriefing: "$$State_{New} = EVM(State_{Old}, Transaction)$$",
            vocabulary: [{ word: "Smart Contract", streetAnalogy: "A digital vending machine.", boardroomDefinition: "A self-executing contract with the terms of the agreement directly written into lines of code." }],
            resources: [
              { title: "Smart Contract Specifications", url: "https://www.investopedia.com/terms/s/smart-contracts.asp", type: "article", provider: "Investopedia" },
              { title: "Ethereum Whitepaper", url: "https://ethereum.org/en/whitepaper/", type: "whitepaper", provider: "Vitalik Buterin" }
            ],
            academicTier: "Tier 3: Undergraduate (Junior) | MIT Digital Currency Initiative",
            executionBlueprint: {
              monetization: "Build and deploy trustless financial software (dApps) to automate lending or trading, collecting protocol fee cuts.",
              whatToBuy: "Smart contract development tools, gas optimization tokens, and auditor reviews.",
              howToBuy: "Write code in Solidity/Rust, test on testnets, and deploy directly to mainnet.",
              whenToBuy: "Deploy smart contracts during periods of high developer activity and stable network fees.",
              beforeAndAfterChecklist: "Before: Obtain a comprehensive third-party smart contract audit. After: Monitor real-time transaction telemetry for protocol exploit attempts.",
              platforms: ["OpenZeppelin Library", "Hardhat Development Environment", "CertiK Auditor Network"],
              realWorldExample: "Deploying a decentralized lending smart contract that handles $5M in collateral, generating $50,000 in transaction fee revenue for the creator."
            }
          },
          {
            title: "Sub-Phase 9.3: Automated Market Makers (AMM)",
            streetExplanation: "Instead of order books, AMMs use mathematical pools of tokens. You swap token A for B directly with the pool, and the pool's math changes prices dynamically.",
            boardroomExplanation: "WHAT: Decentralized pricing algorithms utilizing constant product formulas to provide continuous asset liquidity.\nWHY: Replaces manual market makers and order matching engines with automated code pools.\nWHO: Liquidity providers (LPs), traders, and decentralized exchanges (Uniswap).\nWHEN: Triggered instantly with every token swap transaction.\nWHERE: Liquidity pool smart contracts.\nHOW: 1. LP deposits token A and B. 2. Constant product is set (x * y = k). 3. Trader swaps token A for B. 4. Pool increases price of A and drops price of B to maintain balance.",
            explainerVideoId: "cizLhxSKrAc",
            technicalBriefing: "$$x \\times y = k$$",
            vocabulary: [{ word: "Impermanent Loss", streetAnalogy: "Losing out compared to just holding.", boardroomDefinition: "The temporary loss of funds experienced by liquidity providers due to volatility in a liquidity pool." }],
            resources: [
              { title: "Automated Market Maker (AMM) Algorithms", url: "https://www.investopedia.com/terms/a/automated-market-maker-amm.asp", type: "article", provider: "Investopedia" },
              { title: "Constant Product Market Maker Math", url: "https://github.com/runtimeverification/uniswap-semantics/blob/master/uniswap.pdf", type: "paper", provider: "Runtime Verification" }
            ],
            academicTier: "Tier 3: Undergraduate (Senior) | Cambridge Centre for Alternative Finance",
            executionBlueprint: {
              monetization: "Hedging AMM positions; hedge long liquidity provider (LP) assets on decentralized exchanges by shorting asset swings on futures markets.",
              whatToBuy: "LP tokens from AMM pools and matching short options/futures.",
              howToBuy: "Deposit pairs to Uniswap V3, and open equal short hedges on dYdX or Binance Futures.",
              whenToBuy: "Enter hedged LP positions when trading volumes are high but asset prices remain range-bound.",
              beforeAndAfterChecklist: "Before: Calculate expected transaction fees vs impermanent loss formulas. After: Close LP positions if asset price drifts beyond the hedged range.",
              platforms: ["Uniswap Info", "dYdX (Perpetual Futures)", "IL Calculators"],
              realWorldExample: "LPing ETH/USDC while shorting ETH futures, collecting 30% yield from trading fees while neutralizing price fluctuation risks."
            }
          }
        ],
        resources: [
          { title: "DeFi Basics (Coinbase)", url: "https://www.coinbase.com/learn/crypto-basics/what-is-defi", type: "article", provider: "Coinbase" }
        ],
        isQuizCompleted: false
      }
    ]
  },
  {
    id: 12,
    name: "PHASE 11: SOVEREIGN LEGACY",
    tagline: "Dynastic Wealth and Multi-Jurisdictional Arbitrage.",
    status: LevelStatus.LOCKED,
    icon: "🛡️",
    topics: [
      {
        id: "t10-1",
        title: "The 'Buy, Borrow, Die' Protocol & Offshore Trusts",
        description: "Master the advanced wealth preservation strategies utilized by the global elite to shield assets and transfer wealth tax-free.",
        missionStrategy: "Leverage securities-based lines of credit, private placement life insurance, and global trust structures.",
        category: 'SOVEREIGN',
        funnyTake: "The elite don't own assets; they control assets through trust structures that legally outlive them.",
        subTopics: [
          {
            title: "Sub-Phase 10.1: Securities-Based Lending (SBLOC)",
            streetExplanation: "Never sell your stock portfolio to buy things. Borrow against it. Pay the bank 4% interest instead of paying the government 25% in capital gains tax.",
            boardroomExplanation: "WHAT: Accessing cash liquidity by collateralizing equity portfolios with institutional debt lines.\nWHY: Bypasses tax-triggering sell events while preserving capital exposure to asset compounding.\nWHO: Ultra-high-net-worth individuals, private bankers, and credit committees.\nWHEN: Utilized whenever lifestyle liquidity or investment capital is required.\nWHERE: Private banking desks and wealth offices.\nHOW: 1. Deposit equity portfolio. 2. Open line of credit (e.g., 50% LTV). 3. Draw low-interest cash loan. 4. Repay interest; never trigger capital gains tax.",
            explainerVideoId: "mX4_X7A8K9A",
            technicalBriefing: "$$\\Delta_{Alpha} = (CAGR \\times (1 - Tax_{Rate})) - (Borrow\\_Rate)$$",
            vocabulary: [{ word: "SBLOC", streetAnalogy: "A giant credit card backed by your stocks.", boardroomDefinition: "Securities-Based Line of Credit; a revolving credit line secured by marketable securities." }],
            resources: [
              { title: "Securities-Based Lending Overview", url: "https://www.investopedia.com/terms/s/securitiesbased-line-of-credit.asp", type: "article", provider: "Investopedia" },
              { title: "Leveraged Portfolio Debt Strategies", url: "https://www.sec.gov/oiea/investor-alerts-bulletins/ib_sbloc", type: "article", provider: "SEC" }
            ],
            academicTier: "Tier 3: Undergraduate (Junior) | Harvard Private Wealth Center",
            executionBlueprint: {
              monetization: "Access tax-free cash liquidity to fund asset acquisitions by borrowing against a public stock portfolio.",
              whatToBuy: "Blue-chip equity ETFs (SPY, VOO) and a Securities-Based Line of Credit (SBLOC).",
              howToBuy: "Build a portfolio with an asset broker, then apply for an SBLOC line of credit.",
              whenToBuy: "Draw cash when assets have appreciated and interest rates are low.",
              beforeAndAfterChecklist: "Before: Verify Loan-To-Value (LTV) ratio is below 30% to prevent margin calls. After: Use drawn cash to acquire cash-flowing real estate to pay off loan interest.",
              platforms: ["Interactive Brokers SBLOC Desk", "Charles Schwab Bank", "Fidelity Wealth"],
              realWorldExample: "Borrowing $150,000 against a $600,000 SPY portfolio at 5% interest to buy a rental property, avoiding $30,000 in immediate capital gains taxes."
            }
          },
          {
            title: "Sub-Phase 10.2: Private Placement Life Insurance (PPLI)",
            streetExplanation: "Wrap your investments inside a private life insurance policy. All capital growth compounds tax-free, and your heirs receive the money tax-free when you die.",
            boardroomExplanation: "WHAT: An investment-oriented variable universal life insurance policy structured for accredited investors.\nWHY: Shields investment gains from capital gains and income taxes under life insurance tax codes.\nWHO: Wealth managers, insurance underwriters, and sovereign families.\nWHEN: Structured during long-term dynastic estate planning phases.\nWHERE: Special insurance carrier jurisdictions (Bermuda, Singapore).\nHOW: 1. Establish offshore PPLI policy. 2. Deposit investment capital into policy. 3. Invest within policy tax-free. 4. Pass tax-free death benefit to heirs.",
            explainerVideoId: "mX4_X7A8K9A",
            technicalBriefing: "$$Tax\\_Liability_{PPLI} = 0$$",
            vocabulary: [{ word: "PPLI", streetAnalogy: "A tax-free wrapper for large investments.", boardroomDefinition: "Private Placement Life Insurance; a specialized variable life insurance policy designed for high-net-worth investors." }],
            resources: [
              { title: "Private Placement Life Insurance (PPLI)", url: "https://www.investopedia.com/terms/p/private-placement-life-insurance.asp", type: "article", provider: "Investopedia" },
              { title: "Asset Shielding via Variable Insurance wrappers", url: "https://www.irs.gov/retirement-plans/irc-section-7702-life-insurance-contracts", type: "article", provider: "IRS" }
            ],
            academicTier: "Tier 4: Ivy League MBA | Wharton Wealth Management",
            executionBlueprint: {
              monetization: "Shield multi-million dollar investment portfolios from income and capital gains tax by wrapping them in life insurance policies.",
              whatToBuy: "Private Placement Life Insurance (PPLI) policies and underlying hedge fund allocations.",
              howToBuy: "Structure a custom PPLI policy with a specialized offshore insurance broker.",
              whenToBuy: "Establish structures when net worth crosses $5M to justify structure administration costs.",
              beforeAndAfterChecklist: "Before: Verify policy complies with investor control and diversification tax codes. After: Fund the policy with cash/securities; pass assets tax-free to beneficiaries.",
              platforms: ["Lombard Odier PPLI", "Swiss Life International", "Offshore Legal Counsels"],
              realWorldExample: "Wrapping a $10M hedge fund allocation inside a Swiss PPLI wrapper, compounding annual gains tax-free and passing the full sum to heirs tax-free."
            }
          },
          {
            title: "Sub-Phase 10.3: Jurisdictional Flag Theory & Asset Trusts",
            streetExplanation: "Flag theory is placing your assets, citizenship, business, and banking in different countries to minimize taxes, legally shield wealth, and avoid government risk.",
            boardroomExplanation: "WHAT: Strategic geographical distribution of residency, corporate registry, banking, and trusts to minimize sovereign risk.\nWHY: Legally insulates family wealth from foreign civil judgments, local tax structures, and currency debasement.\nWHO: Trustees, asset protection lawyers, and global sovereign citizens.\nWHEN: Structured before capital reaches high exposure thresholds.\nWHERE: Cook Islands, Singapore, Switzerland, Cayman Islands.",
            jurisdictionalMatrix: [
              { nation: "Cook Islands", taxRate: "0%", assetProtection: "Ultimate", sovereignRisk: "Low", keyAdvantage: "Ignores all foreign civil judgments and mandates local lawsuits." },
              { nation: "Singapore", taxRate: "17%", assetProtection: "Institutional", sovereignRisk: "Low", keyAdvantage: "Stable banking system and zero capital gains tax." },
              { nation: "Switzerland", taxRate: "Variable", assetProtection: "Legacy", sovereignRisk: "Low", keyAdvantage: "Long-standing culture of financial privacy and wealth custody." }
            ],
            vocabulary: [{ word: "Flag Theory", streetAnalogy: "Not putting all your citizenships or banks in one country.", boardroomDefinition: "A strategy proposing the diversification of physical and financial flags globally to optimize tax and legal exposure." }],
            resources: [
              { title: "Jurisdictional Flag Theory Principles", url: "https://en.wikipedia.org/wiki/Flag_theory", type: "article", provider: "Wikipedia" },
              { title: "Offshore Wealth Trusts and Custody Law", url: "https://www.taxjustice.net/wp-content/uploads/2013/02/TJN_1302_Trusts_Brochure_Web.pdf", type: "whitepaper", provider: "Tax Justice Network" }
            ],
            academicTier: "Tier 4: Ivy League MBA | Cook Islands Trust Advisory",
            executionBlueprint: {
              monetization: "Legally insulate capital from domestic litigation and sovereign tax claims by placing assets in international trust vehicles.",
              whatToBuy: "Offshore trust structures, secondary residencies, and foreign banking nodes.",
              howToBuy: "Hire specialized international trust attorneys to draft trust deeds in asset-protective jurisdictions.",
              whenToBuy: "Establish trust structures before any civil litigation or tax audit is initiated.",
              beforeAndAfterChecklist: "Before: Complete full background KYC and verify clean source of wealth. After: Transfer ownership of major assets (shares, cash) to the offshore trustee.",
              platforms: ["Southpac Trust (Cook Islands)", "Asiaciti Trust (Singapore)", "Offshore Trust Attorney Desk"],
              realWorldExample: "Setting up a Cook Islands Asset Protection Trust holding a brokerage account, rendering the capital legally immune to foreign civil judgments."
            }
          }
        ],
        resources: [
          { title: "Buy, Borrow, Die (WSJ)", url: "https://www.wsj.com/articles/buy-borrow-die-how-the-rich-live-off-their-stock-portfolios-11626159601", type: "article", provider: "WSJ" }
        ],
        isQuizCompleted: false
      }
    ]
  },
  {
    id: 13,
    name: "PHASE 12: INVESTMENT MATRIX & TECHNICAL ANALYSIS",
    tagline: "Market Intelligence, Price Action, and Execution.",
    status: LevelStatus.LOCKED,
    icon: "🕯️",
    topics: [
      {
        id: "t11-1",
        title: "Market Analysis & Technical Execution",
        description: "Master the tools and platforms needed to analyze global markets, read price action candlesticks, and execute investments.",
        missionStrategy: "Learn how to conduct macro market screening on Bloomberg and TradingView, read candle patterns, and build long-term multi-asset portfolios.",
        category: 'PORTFOLIO',
        funnyTake: "Technical analysis is the art of drawing lines on historical charts to justify losing money tomorrow.",
        isQuizCompleted: false,
        resources: [
          { title: "Technical Analysis of the Financial Markets", url: "https://archive.org/details/technicalanalysi0000murp", type: "book", provider: "John J. Murphy" }
        ],
        subTopics: [
          {
            title: "Sub-Phase 11.1: Macro Market Analysis & Platform Infrastructure",
            streetExplanation: "To invest like a pro, you need to look at what's happening in the entire market. Professional investors use platforms like Bloomberg Terminals to monitor global news and interest rates, and TradingView to chart price movements. You analyze macroeconomic trends first, then zoom in on the sector, and finally pick the asset.",
            boardroomExplanation: "WHAT: Systemic market analysis leveraging professional terminals to isolate global liquidity and macroeconomic trends.\nWHY: Aligns portfolio asset allocation with dominant macro cycles rather than minor price noise.\nWHO: Macro strategists, asset allocators, and retail fund managers.\nWHEN: Evaluated daily pre-market open and during quarterly portfolio reviews.\nWHERE: Global Bloomberg terminal feeds, TradingView platforms, and FRED databases.\nHOW: 1. Monitor central bank interest rate projections. 2. Track sector performance indices. 3. Screen for assets exhibiting positive relative strength. 4. Verify liquidity spreads before entering positions.",
            explainerVideoId: "6ZhnB2Y7Kms",
            technicalBriefing: "$$Expected\\_Market\\_Return = R_f + \\beta (R_m - R_f)$$",
            vocabulary: [{ word: "Market Screening", streetAnalogy: "Using a sieve to find the biggest chunks of gold.", boardroomDefinition: "The systematic filtering of a financial asset universe using quantitative or qualitative parameters." }],
            resources: [
              { title: "TradingView Platform Tutorials", url: "https://www.tradingview.com/support/", type: "article", provider: "TradingView" },
              { title: "Bloomberg Professional Services", url: "https://www.bloomberg.com/professional/solution/bloomberg-terminal/", type: "article", provider: "Bloomberg" }
            ],
            academicTier: "Tier 3: Undergraduate (Sophomore) | Wharton Market Research Lab",
            executionBlueprint: {
              monetization: "Perform institutional screening or build systematic sector rotating models, charging clients or funds based on allocation outperformance.",
              whatToBuy: "Sector-specific index ETFs (e.g., XLK for Tech, XLF for Financials) displaying relative strength.",
              howToBuy: "Log into your broker (Interactive Brokers/Schwab), enter ticker, choose Limit Order, and set the entry at key moving average supports.",
              whenToBuy: "Buy when the sector ETF bounces off its 50-day moving average during a macro expansion phase.",
              beforeAndAfterChecklist: "Before: Check Bloomberg economic calendar for upcoming FOMC or CPI releases. After: Set trailing stop-losses at 8% below entry price.",
              platforms: ["TradingView", "Bloomberg Terminal", "FRED (Economic Data)"],
              realWorldExample: "Analyzing the technology sector index (XLK) on TradingView, finding it has bounced off the 50-day EMA while Bloomberg shows positive earnings trends, resulting in a buy execution that nets 12% in 3 weeks."
            }
          },
          {
            title: "Sub-Phase 11.2: Candlestick Charting & Price Action Mechanics",
            streetExplanation: "A candlestick is a simple box that shows what happened to an asset's price in a set timeframe (like 1 day). The solid box (body) shows the opening and closing prices, while the lines sticking out (wicks) show the highest and lowest prices. Analyzing these wicks and bodies tells you if buyers or sellers are winning the battle.",
            boardroomExplanation: "WHAT: Micro-level price action charting tracking opening, high, low, and closing prices (OHLC) over discrete intervals.\nWHY: Reveals market participant psychology and order flow imbalances in real-time.\nWHO: Day traders, swing traders, and technical execution desks.\nWHEN: Analyzed constantly across multiple timeframes (1H, 4H, 1D) before executing transactions.\nWHERE: Active charting software and exchange trading screens.\nHOW: 1. Identify body size (momentum). 2. Analyze wick lengths (price rejection). 3. Identify pattern formation (e.g. Bullish Engulfing, Hammer). 4. Confirm pattern with trade volume surges.",
            explainerVideoId: "Y0jUqW5s8oE",
            technicalBriefing: "$$Range = Price_{High} - Price_{Low}$$",
            vocabulary: [{ word: "OHLC", streetAnalogy: "A snapshot of the daily price war showing open, peak, valley, and close.", boardroomDefinition: "An acronym for Open, High, Low, and Close, representing the key price points of a financial instrument in a specific period." }],
            resources: [
              { title: "Introduction to Candlestick Charting", url: "https://www.investopedia.com/trading/candlestick-charting-what-is-it/", type: "article", provider: "Investopedia" },
              { title: "Japanese Candlestick Charting Techniques", url: "https://archive.org/details/japanese-candlestick-charting-techniques", type: "book", provider: "Steve Nison" }
            ],
            academicTier: "Tier 2: Secondary Education (High School) | Chicago Booth Trading Desk",
            executionBlueprint: {
              monetization: "Execute short-term swing trading strategies exploiting candlestick reversal patterns, compounding trading capital.",
              whatToBuy: "Highly liquid large-cap stocks (AAPL, MSFT) or index ETFs (SPY).",
              howToBuy: "Place a limit buy order slightly above the high of a confirmed bullish hammer candlestick pattern.",
              whenToBuy: "Buy when a bullish hammer candlestick forms at a key historical support level on high trading volume.",
              beforeAndAfterChecklist: "Before: Verify the candlestick body is at the bottom of a downtrend and check the average daily range. After: Place a stop-loss immediately below the low of the candlestick wick.",
              platforms: ["TradingView", "Thinkorswim", "Webull"],
              realWorldExample: "Spotting a Hammer candlestick pattern on Tesla's daily chart at its $180 support, entering long at $182, and placing a stop at $178, capturing a rally to $195."
            }
          },
          {
            title: "Sub-Phase 11.3: Multi-Asset Class Investing & Execution Protocols",
            streetExplanation: "Investing isn't just about stocks. It's about spreading your cash across real estate, commodities, debt, and equities. You check index funds for broad markets, real-world platforms to buy physical assets, and use structured plans to buy consistently over time (Dollar-Cost Averaging) to build dynastic wealth.",
            boardroomExplanation: "WHAT: Multi-asset portfolio implementation combining physical and paper investments to generate compounding yield.\nWHY: Insulates dynastic capital from systemic failures of single asset classes.\nWHO: Private wealth advisors, family offices, and retail investors.\nWHEN: Executed continuously using automated dollar-cost averaging (DCA) and asset rebalancing.\nWHERE: Global multi-asset custody accounts and investment platforms.\nHOW: 1. Decide target asset weights (e.g. 60% equities, 20% real estate, 20% bonds). 2. Automate monthly deposits. 3. Deploy cash into index products. 4. Rebalance portfolio when weights drift.",
            explainerVideoId: "PZg1ea_U4rM",
            technicalBriefing: "$$DCA\\_Cost = \\frac{Total\\_Capital}{\\sum \\frac{Capital_i}{Price_i}}$$",
            vocabulary: [{ word: "Dollar-Cost Averaging", streetAnalogy: "Buying $100 of a stock every month, regardless of whether the price goes up or down.", boardroomDefinition: "An investment strategy in which an investor divides the total amount to be invested into periodic purchases of a target asset." }],
            resources: [
              { title: "Asset Allocation Guide", url: "https://www.investopedia.com/terms/a/assetallocation.asp", type: "article", provider: "Investopedia" },
              { title: "The Intelligent Investor", url: "https://archive.org/details/the-intelligent-investor-benjamin-graham", type: "book", provider: "Benjamin Graham" }
            ],
            academicTier: "Tier 1: Elementary Foundation (Std 1-5) | Vanguard Asset Management School",
            executionBlueprint: {
              monetization: "Construct and manage a long-term retirement portfolio that consistently outperforms cash inflation, securing financial freedom.",
              whatToBuy: "Broad market index fund ETFs (e.g., VTI for Total US Stock, VNQ for Real Estate, BND for Bonds).",
              howToBuy: "Set up automatic monthly deposits and recurring buys on a major retail investment app.",
              whenToBuy: "Invest a fixed amount of cash on a recurring basis (e.g., the 1st of every month) regardless of current price.",
              beforeAndAfterChecklist: "Before: Calculate your risk tolerance score and time horizon. After: Review allocations quarterly and reinvest all dividends.",
              platforms: ["Vanguard", "Fidelity", "Interactive Brokers"],
              realWorldExample: "Setting up a recurring monthly $500 investment split between VTI (80%) and BND (20%), compounding at an average 8% annual return over 15 years."
            }
          }
        ]
      }
    ]
  }
];
