import { Level, LevelStatus } from './types';

export const CURRICULUM: Level[] = [
  {
    id: 1,
    name: "PHASE 0: MONETARY GENESIS",
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
            vocabulary: [{ word: "Double Coincidence", streetAnalogy: "Finding a shoe seller who wants your apples.", boardroomDefinition: "The prerequisite condition of barter transaction necessitating matching reciprocal needs." }]
          },
          {
            title: "Sub-Phase 0.2: Fiat Currency and Fractional Reserves",
            streetExplanation: "Governments declared paper money has value. Banks then multiply this money by lending out 90% of what you deposit, creating new digital dollars out of thin air.",
            boardroomExplanation: "WHAT: Currency backed by sovereign decree, leveraged via fractional lending ratios.\nWHY: Magnifies credit capacity to stimulate commercial and economic expansion.\nWHO: Central banks, commercial banks, and global borrowers.\nWHEN: Fully implemented after the gold standard abrogation (1971).\nWHERE: Operating across all modern domestic and international banking sectors.\nHOW: 1. Deposit is made. 2. Bank keeps fraction (e.g., 10%). 3. Bank lends the rest. 4. New credit is spent, deposited, and lent again.",
            explainerVideoId: "PZg1ea_U4rM",
            technicalBriefing: "$$Money\\_Multiplier = \\frac{1}{Reserve\\_Requirement}$$",
            vocabulary: [{ word: "Multiplier", streetAnalogy: "How banks turn $10 into $100.", boardroomDefinition: "The expansion of broad money supply relative to the monetary base via fractional lending." }]
          },
          {
            title: "Sub-Phase 0.3: Central Bank Open Market Operations",
            streetExplanation: "Central banks control the flow of money by buying or selling government bonds. Buying bonds pumps new cash into the economy; selling bonds drains cash to cool things down.",
            boardroomExplanation: "WHAT: The purchase and sale of government securities in open debt markets to target policy rates.\nWHY: Aligns interbank borrowing costs with macroeconomic inflation and growth targets.\nWHO: The Federal Reserve (FOMC), primary dealers, and treasury desks.\nWHEN: Conducted daily to stabilize overnight interest rates.\nWHERE: Orchestrated from central bank trading desks (e.g., FRBNY).\nHOW: 1. Fed buys treasury bonds. 2. Cash flows to banks' reserve accounts. 3. Money supply increases, rates fall. 4. Opposite occurs for selling bonds.",
            explainerVideoId: "6ZhnB2Y7Kms",
            technicalBriefing: "$$MV = PY$$",
            vocabulary: [{ word: "Open Market Operations", streetAnalogy: "The Fed's cash faucet.", boardroomDefinition: "The principal tool used by central banks to manipulate commercial bank reserves and short-term interest rates." }]
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
    id: 2,
    name: "PHASE 1: CAPITAL VALUATION",
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
            vocabulary: [{ word: "Discounting", streetAnalogy: "Shaving off value for the wait.", boardroomDefinition: "The mathematical process of determining the present value of a future payment." }]
          },
          {
            title: "Sub-Phase 1.2: Discounted Cash Flow (DCF) Modeling",
            streetExplanation: "To find what a business is worth, add up all the cash it will make in the future, discount it to today's dollars, and add a final exit value.",
            boardroomExplanation: "WHAT: Intrinsic valuation model forecasting risk-adjusted free cash flows to determine equity value.\nWHY: Eliminates market sentiment bias to calculate true asset value.\nWHO: Investment banking analysts, equity researchers, and private equity managers.\nWHEN: Conducted during corporate acquisitions, public buyouts, and stock pricing.\nWHERE: The core methodology of Wall Street valuation desks.\nHOW: 1. Project Free Cash Flows (5-10 years). 2. Estimate Terminal Value. 3. Discount all flows using the cost of capital. 4. Subtract net debt to get Equity Value.",
            explainerVideoId: "fd_emLLzJnk",
            technicalBriefing: "$$DCF = \\sum_{t=1}^{n} \\frac{FCF_t}{(1+WACC)^t} + \\frac{Terminal\\_Value}{(1+WACC)^n}$$",
            vocabulary: [{ word: "Terminal Value", streetAnalogy: "The exit price of a business.", boardroomDefinition: "The estimated value of a business beyond the explicit forecast period in DCF modeling." }]
          },
          {
            title: "Sub-Phase 1.3: Weighted Average Cost of Capital (WACC)",
            streetExplanation: "WACC is the combined cost a company pays to borrow money and satisfy shareholders. It is the minimum rate a company must make to break even.",
            boardroomExplanation: "WHAT: The blended cost of debt and equity financing proportional to a firm's capital structure.\nWHY: Serves as the hurdle rate to determine if a project generates economic value.\nWHO: Chief Financial Officers, investment bankers, and capital structure strategists.\nWHEN: Calculated during capital budgeting, restructuring, and M&A pricing.\nWHERE: Leveraged across corporate finance treasury platforms globally.\nHOW: 1. Find Cost of Equity (using CAPM). 2. Find Cost of Debt (interest rate minus tax shield). 3. Weight by market value ratios. 4. Blend the rates.",
            explainerVideoId: "mQ_B-wYgYwU",
            technicalBriefing: "$$WACC = \\left(\\frac{E}{V}\\right)R_e + \\left(\\frac{D}{V}\\right)R_d(1 - T_c)$$",
            vocabulary: [{ word: "Tax Shield", streetAnalogy: "Tax discount on debt interest.", boardroomDefinition: "The reduction in taxable income for a corporation achieved by deducting interest payments on debt." }]
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
    id: 3,
    name: "PHASE 2: DEBT & LEVERAGE",
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
            vocabulary: [{ word: "Coupon Rate", streetAnalogy: "Fixed interest rate on a loan.", boardroomDefinition: "The annual interest rate paid by the bond issuer, based on the bond's face value." }]
          },
          {
            title: "Sub-Phase 2.2: The Term Structure of Interest Rates",
            streetExplanation: "Usually, long-term debt pays more interest. But when the short-term interest rates are higher than long-term rates, the yield curve inverts, signaling a recession.",
            boardroomExplanation: "WHAT: The relationship between interest rate yields and different maturity timelines for debt instruments.\nWHY: Acts as the primary macro-economic indicator for growth expectations and liquidity recessions.\nWHO: Central bankers, treasury bond traders, and macro fund managers.\nWHEN: Checked constantly during interest rate policy changes and macro shifts.\nWHERE: Domestic sovereign treasury bond curves (e.g., US Treasuries).\nHOW: 1. Plot yields of 3M, 2Y, 10Y bonds. 2. Analyze slope (normal vs inverted). 3. Adjust portfolio allocation based on recession signals.",
            explainerVideoId: "1J1c9vG86u0",
            technicalBriefing: "$$Spread = Yield_{10Y} - Yield_{2Y}$$",
            vocabulary: [{ word: "Inversion", streetAnalogy: "Short-term rates paying more than long-term.", boardroomDefinition: "An economic event where long-term debt instruments have lower yields than short-term instruments." }]
          },
          {
            title: "Sub-Phase 2.3: Leverage & Debt Covenants",
            streetExplanation: "Debt multiplies your gains but also your losses. Covenants are rules banks put in place to ensure you don't take too much risk and fail to pay them back.",
            boardroomExplanation: "WHAT: Financial leverage ratios and legal restrictions placed on borrowers by debt underwriters.\nWHY: Protects lenders from capital loss while helping companies leverage equity capital efficiently.\nWHO: Commercial banks, rating agencies (S&P, Moody's), and corporate management.\nWHEN: Evaluated during loan applications, restructuring, and quarterly compliance checks.\nWHERE: Commercial debt contracts and credit underwriting files.\nHOW: 1. Compute leverage ratios (Debt/Equity). 2. Verify interest coverage (EBITDA/Interest). 3. Set strict contract covenants (e.g., max leverage 4x).",
            explainerVideoId: "fd_emLLzJnk",
            technicalBriefing: "$$DSCR = \\frac{Net\\_Operating\\_Income}{Total\\_Debt\\_Service}$$",
            vocabulary: [{ word: "Covenants", streetAnalogy: "Rules you must follow to keep your loan.", boardroomDefinition: "Binding agreements in credit contracts that limit certain actions by the borrowing entity." }]
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
    id: 4,
    name: "PHASE 3: PORTFOLIO THEORY",
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
            vocabulary: [{ word: "Correlation", streetAnalogy: "How much two stocks mimic each other.", boardroomDefinition: "A statistic that measures the degree to which two securities move in relation to each other." }]
          },
          {
            title: "Sub-Phase 3.2: Modern Portfolio Theory & Efficient Frontier",
            streetExplanation: "The Efficient Frontier is a curve showing the absolute best portfolios—the ones that give the highest return for a specific level of risk.",
            boardroomExplanation: "WHAT: An asset optimization framework selecting portfolios with maximum return for a given level of risk.\nWHY: Eliminates inefficient portfolios that carry high risk for subpar return levels.\nWHO: Quantitative analysts, fund managers, and mathematical finance desks.\nWHEN: Leveraged during macro asset allocation adjustments and portfolio design.\nWHERE: Running on high-performance portfolio optimization servers worldwide.\nHOW: 1. Estimate expected returns for all assets. 2. Construct covariance matrix. 3. Calculate portfolio risk for various asset weights. 4. Plot the curve and select target weights.",
            explainerVideoId: "a5v_2BwQ3fM",
            technicalBriefing: "$$E(R_p) = \\sum_{i=1}^{n} w_i E(R_i)$$",
            vocabulary: [{ word: "Efficient Frontier", streetAnalogy: "The sweet spot of risk and reward.", boardroomDefinition: "The set of optimal portfolios that offer the highest expected return for a defined level of risk." }]
          },
          {
            title: "Sub-Phase 3.3: CAPM & Sharpe Ratio",
            streetExplanation: "CAPM calculates what return you should expect from a stock based on its risk (Beta). The Sharpe Ratio measures how much extra return you get for the risk you take.",
            boardroomExplanation: "WHAT: The Capital Asset Pricing Model and the standard measure of risk-adjusted excess return.\nWHY: Verifies if a portfolio manager is generating genuine alpha or just taking on excess leverage and beta risk.\nWHO: Mutual fund evaluators, institutional allocators, and risk officers.\nWHEN: Calculated during monthly performance reviews and manager evaluations.\nWHERE: The core performance metric on Bloomberg terminals and portfolio dashboards.\nHOW: 1. Calculate risk-free rate and portfolio return. 2. Find portfolio standard deviation (volatility). 3. Subtract risk-free rate from return. 4. Divide by volatility.",
            explainerVideoId: "3ZleA4P9B2U",
            technicalBriefing: "$$Sharpe = \\frac{R_p - R_f}{\\sigma_p}$$",
            vocabulary: [{ word: "Beta", streetAnalogy: "How sensitive a stock is to the market.", boardroomDefinition: "A measure of the volatility or systematic risk of a security or portfolio compared to the market as a whole." }]
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
    id: 5,
    name: "PHASE 4: DERIVATIVES & VOLATILITY",
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
            vocabulary: [{ word: "Strike Price", streetAnalogy: "The locked-in price.", boardroomDefinition: "The set price at which an option contract owner can buy or sell the underlying security." }]
          },
          {
            title: "Sub-Phase 4.2: Black-Scholes Pricing Model",
            streetExplanation: "Black-Scholes is a formula that calculates the fair price of an option by looking at stock price, strike price, time left, interest rates, and volatility.",
            boardroomExplanation: "WHAT: A mathematical differential equation modeling option prices based on continuous-time market parameters.\nWHY: Establishes market-neutral theoretical valuations for option premiums.\nWHO: Market makers, option market desks, and algorithmic traders.\nWHEN: Evaluated in real-time millions of times per second by pricing servers.\nWHERE: Embedded inside all options execution platforms.\nHOW: 1. Gather inputs (S, K, t, r, volatility). 2. Compute probability distributions (d1, d2). 3. Run Black-Scholes formula. 4. Output fair premium price.",
            explainerVideoId: "D34x9Jm1vL4",
            technicalBriefing: "$$C(S_t, t) = S_t N(d_1) - K e^{-r(T-t)} N(d_2)$$",
            vocabulary: [{ word: "Implied Volatility", streetAnalogy: "Expected swing speed of the stock.", boardroomDefinition: "The estimated volatility of a security's price, reflected in the pricing of its options." }]
          },
          {
            title: "Sub-Phase 4.3: Delta Hedging & Greek Ratios",
            streetExplanation: "Greeks are metrics like Delta (direction sensitivity) and Theta (time decay). Market makers hedge their Delta to stay neutral so they don't lose money on stock swings.",
            boardroomExplanation: "WHAT: Managing options risk profiles using sensitivity ratios (Greeks) and offsetting stock holdings.\nWHY: Ensures market makers remain insulated from market movements while pocketing premium spread revenues.\nWHO: Institutional market makers, hedge funds, and risk desks.\nWHEN: Adjusted continuously during live market trading sessions.\nWHERE: Active trading desks inside investment houses.\nHOW: 1. Calculate portfolio Delta. 2. Buy/sell matching amount of underlying shares. 3. Adjust position as Delta shifts (Gamma risk). 4. Remain delta-neutral.",
            explainerVideoId: "bOkyS_4v0uA",
            technicalBriefing: "$$\\Delta = \\frac{\\partial C}{\\partial S}$$",
            vocabulary: [{ word: "Theta", streetAnalogy: "Option price decay over time.", boardroomDefinition: "A measure of the rate of decline in the value of an option contract over time." }]
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
    id: 6,
    name: "PHASE 5: CORPORATE FINANCE & M&A",
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
            vocabulary: [{ word: "Leveraged Buyout", streetAnalogy: "Buying a house with a huge mortgage.", boardroomDefinition: "The acquisition of another company using a significant amount of borrowed money to meet the cost of acquisition." }]
          },
          {
            title: "Sub-Phase 5.2: Mergers & Acquisitions Synergy Analysis",
            streetExplanation: "When two companies merge, they cut duplicate costs (like office space) and cross-sell products. If 1 + 1 = 3, that extra value is synergy.",
            boardroomExplanation: "WHAT: Evaluating the post-merger cost savings and revenue expansion generated by combining business operations.\nWHY: Justifies paying acquisition premiums to target shareholders.\nWHO: Corporate development teams, advisory banks, and management consultants.\nWHEN: Conducted during the due diligence phase of deal structuring.\nWHERE: Corporate boardrooms and deal advisory databases.\nHOW: 1. Identify redundant functions. 2. Calculate cost-savings timelines. 3. Model revenue cross-sales. 4. Discount synergies and add to standalone values.",
            explainerVideoId: "14aEip3n6oA",
            technicalBriefing: "$$Value_{AB} = Value_A + Value_B + Synergies - Premium$$",
            vocabulary: [{ word: "Accretion", streetAnalogy: "Earnings per share going up after a merger.", boardroomDefinition: "An increase in the value of a portfolio or the earnings per share of an acquiring firm post-transaction." }]
          },
          {
            title: "Sub-Phase 5.3: Venture Capital & Cap Table Valuation",
            streetExplanation: "Venture capitalists fund early-stage startups. A Cap Table tracks who owns what percentage of the company, which changes every time the startup raises new cash.",
            boardroomExplanation: "WHAT: Venture-round pricing methods, share capitalization tables, and equity dilution mechanisms.\nWHY: Coordinates founder, employee, and VC ownership stakes during funding expansions.\nWHO: Startup founders, angel investors, and venture capital associates.\nWHEN: Evaluated before Seed, Series A, and subsequent funding rounds.\nWHERE: VC term sheets and capitalization ledger systems.\nHOW: 1. Determine pre-money valuation. 2. Add investment amount to get post-money valuation. 3. Issue new shares to investor. 4. Dilute existing owners proportionally.",
            explainerVideoId: "tV8pPZ5L_mY",
            technicalBriefing: "$$Post\\_Money\\_Valuation = Pre\\_Money\\_Valuation + Investment\\_Amount$$",
            vocabulary: [{ word: "Cap Table", streetAnalogy: "The pie chart of who owns what.", boardroomDefinition: "Capitalization Table; a spreadsheet or ledger database tracking the ownership stakes, dilution, and value of shares in a startup." }]
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
    id: 7,
    name: "PHASE 6: MACROECONOMICS & CENTRAL BANKING",
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
            vocabulary: [{ word: "Inflation Gap", streetAnalogy: "How far inflation is from the target.", boardroomDefinition: "The difference between the current inflation rate and the target inflation rate targeted by a central bank." }]
          },
          {
            title: "Sub-Phase 6.2: Quantitative Easing & Balance Sheets",
            streetExplanation: "When lowering interest rates isn't enough, central banks buy trillions in treasury bonds to inject cash directly into banks, expanding their own balance sheets.",
            boardroomExplanation: "WHAT: Central bank direct purchasing of assets to lower long-term yields and expand money supply.\nWHY: Restores credit flows when short-term interest rates are near zero (liquidity trap).\nWHO: Central banks, primary dealers, and bond trading desks.\nWHEN: Executed during severe liquidity crises and economic stagnation periods.\nWHERE: Global capital markets.\nHOW: 1. Fed creates electronic reserves. 2. Fed purchases bonds from commercial banks. 3. Commercial bank reserves expand. 4. Yields drop, banks expand credit.",
            explainerVideoId: "6ZhnB2Y7Kms",
            technicalBriefing: "$$Reserves\\_Created = Bonds\\_Purchased$$",
            vocabulary: [{ word: "Quantitative Easing", streetAnalogy: "Central banks printing digital money.", boardroomDefinition: "An unconventional monetary policy where a central bank purchases government securities to increase money supply and encourage lending." }]
          },
          {
            title: "Sub-Phase 6.3: Balance of Payments & Forex Transmission",
            streetExplanation: "The Balance of Payments tracks all money coming in and out of a country. Central bank rates influence exchange rates by attracting or repelling global capital.",
            boardroomExplanation: "WHAT: Ledger tracking a nation's transactions with the rest of the world, composed of the current and capital accounts.\nWHY: Dictates foreign exchange rates, import-export balances, and national capital flows.\nWHO: Treasury offices, central banks, and foreign exchange brokers.\nWHEN: Monitored constantly by sovereign rating firms and macroeconomic funds.\nWHERE: Global forex markets and international currency systems.\nHOW: 1. Net trade balance yields current account surplus/deficit. 2. Foreign asset purchases yield capital account flows. 3. Central bank hikes rates. 4. Foreign capital rushes in, strengthening currency.",
            explainerVideoId: "6ZhnB2Y7Kms",
            technicalBriefing: "$$Current\\_Account + Capital\\_Account + Financial\\_Account = 0$$",
            vocabulary: [{ word: "Forex", streetAnalogy: "The currency exchange market.", boardroomDefinition: "Foreign Exchange; the decentralized global market for the trading of currencies." }]
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
    id: 8,
    name: "PHASE 7: MARKET MICROSTRUCTURE & TRADING",
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
            vocabulary: [{ word: "Market Order", streetAnalogy: "Buy now at whatever price is next.", boardroomDefinition: "An order to buy or sell a security immediately at the best available current market price." }]
          },
          {
            title: "Sub-Phase 7.2: Bid-Ask Spreads & Market Making",
            streetExplanation: "Market makers make money by buying low and selling high. But if they trade with someone who knows secrets (informed traders), they lose. The spread is their hedge.",
            boardroomExplanation: "WHAT: The pricing gap between the bid and ask price, representing market maker compensation.\nWHY: Protects liquidity providers from adverse selection risk when trading with informed counterparties.\nWHO: Institutional market makers (Citadel, Virtu), brokers, and floor desks.\nWHEN: Computed instantly with every bid/ask change.\nWHERE: Active exchange matching databases.\nHOW: 1. Market maker quotes $100 Bid / $101 Ask. 2. Retail trades buy at $101 and sell at $100. 3. Market maker collects $1 spread. 4. Spread widens if volatility increases.",
            explainerVideoId: "Y0jUqW5s8oE",
            technicalBriefing: "$$Spread = P_{Ask} - P_{Bid}$$",
            vocabulary: [{ word: "Market Maker", streetAnalogy: "A merchant who always has stock.", boardroomDefinition: "A firm or individual that actively quotes two-sided markets in a security, providing liquidity." }]
          },
          {
            title: "Sub-Phase 7.3: HFT & Latency Arbitrage",
            streetExplanation: "High-frequency traders place their computers right next to the exchange's servers. By being microseconds faster, they front-run price changes across different exchanges.",
            boardroomExplanation: "WHAT: High-frequency trading exploiting microsecond differences in order routing execution.\nWHY: Arbitrages tiny price discrepancies across fragmented exchanges to capture risk-free gains.\nWHO: Algorithmic hedge funds and quantitative high-frequency trading desks.\nWHEN: Executed in fractions of a millisecond during live trading sessions.\nWHERE: Co-located server data centers adjacent to major exchange engines.\nHOW: 1. Price drops on NYSE. 2. HFT server catches drop. 3. Server sends order to NASDAQ before NASDAQ's pricing updates. 4. HFT captures arbitrage profit.",
            explainerVideoId: "Y0jUqW5s8oE",
            technicalBriefing: "$$Arbitrage\\_Window = Latency_{NASDAQ} - Latency_{HFT}$$",
            vocabulary: [{ word: "Co-location", streetAnalogy: "Renting server space inside the stock exchange.", boardroomDefinition: "Placing private server infrastructure inside an exchange's data center to minimize latency." }]
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
    id: 9,
    name: "PHASE 8: ALTERNATIVE INVESTMENTS",
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
            vocabulary: [{ word: "Shorting", streetAnalogy: "Betting a stock will crash.", boardroomDefinition: "The sale of a security that is not owned by the seller, with the intent of buying it back later at a lower price." }]
          },
          {
            title: "Sub-Phase 8.2: Private Equity Hurdle Rates & Carry",
            streetExplanation: "Private Equity general partners only get their 20% performance fee (carry) after they pay back investors their original investment plus a guaranteed return (hurdle rate).",
            boardroomExplanation: "WHAT: Allocation metrics governing profit distribution (carried interest) between fund managers and investors.\nWHY: Protects investor interests by ensuring general partners only profit from superior capital returns.\nWHO: Limited partners (institutional investors), general partners (fund managers).\nWHEN: Computed during asset liquidation events and fund exits.\nWHERE: Specified in private placement partnership agreements.\nHOW: 1. Realize buyout gains. 2. Distribute capital to investors up to preferred return (e.g., 8%). 3. GP catches up. 4. GP takes 20% of remaining profits (carry).",
            explainerVideoId: "F3f9lZ9a7Gk",
            technicalBriefing: "$$GP\\_Carry = 0.20 \\times (Total\\_Exit\\_Value - Preferred\\_Hurdle)$$",
            vocabulary: [{ word: "Carried Interest", streetAnalogy: "The manager's cut of the profits.", boardroomDefinition: "A share of the profits of an investment fund that is paid to the investment manager as performance compensation." }]
          },
          {
            title: "Sub-Phase 8.3: Venture Debt & Private Credit Structuring",
            streetExplanation: "Private credit is direct lending to private companies. Lenders secure their loans with covenants and options to buy company shares (warrants) to boost their return.",
            boardroomExplanation: "WHAT: Corporate debt origination by non-bank financial intermediaries, incorporating equity warrants.\nWHY: Bypasses traditional banking systems to provide flexible capital while securing high double-digit yield rates.\nWHO: Private credit lenders, venture lenders, and middle-market corporations.\nWHEN: Arranged during growth expansions, recapitalization, or cash runways.\nWHERE: Direct corporate financing markets.\nHOW: 1. Evaluate target credit risk. 2. Structure senior secured debt contract. 3. Attach warrant agreements (equity upsides). 4. Enforce strict debt covenants (interest cover).",
            explainerVideoId: "F3f9lZ9a7Gk",
            technicalBriefing: "$$Total\\_Yield = Interest\\_Rate + Warrant\\_Value\\_Normalized$$",
            vocabulary: [{ word: "Warrants", streetAnalogy: "Bonus coupons to buy stock cheap.", boardroomDefinition: "Derivatives issued by a company that give the holder the right to buy stock from the company at a specific price." }]
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
    id: 10,
    name: "PHASE 9: CRYPTOECONOMICS & DEFI",
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
            vocabulary: [{ word: "Consensus", streetAnalogy: "Everyone agreeing on who owns what.", boardroomDefinition: "The protocol mechanism by which validator nodes on a blockchain reach agreement on the state of the ledger." }]
          },
          {
            title: "Sub-Phase 9.2: Smart Contracts & Ethereum EVM",
            streetExplanation: "Smart contracts are programs stored on the blockchain that execute automatically when conditions are met. No lawyers, no middle-men.",
            boardroomExplanation: "WHAT: Self-executing programs hosted on decentralized virtual machines (e.g., EVM).\nWHY: Guarantees transaction execution without reliance on third-party legal enforcement.\nWHO: Solidity developers, decentralized application teams, and user wallets.\nWHEN: Triggered automatically when predefined conditions are met in a transaction.\nWHERE: The EVM runtime layer across node networks.\nHOW: 1. Program is compiled. 2. Program is deployed to blockchain address. 3. User sends transaction to address. 4. EVM runs code and updates contract state.",
            explainerVideoId: "cizLhxSKrAc",
            technicalBriefing: "$$State_{New} = EVM(State_{Old}, Transaction)$$",
            vocabulary: [{ word: "Smart Contract", streetAnalogy: "A digital vending machine.", boardroomDefinition: "A self-executing contract with the terms of the agreement directly written into lines of code." }]
          },
          {
            title: "Sub-Phase 9.3: Automated Market Makers (AMM)",
            streetExplanation: "Instead of order books, AMMs use mathematical pools of tokens. You swap token A for B directly with the pool, and the pool's math changes prices dynamically.",
            boardroomExplanation: "WHAT: Decentralized pricing algorithms utilizing constant product formulas to provide continuous asset liquidity.\nWHY: Replaces manual market makers and order matching engines with automated code pools.\nWHO: Liquidity providers (LPs), traders, and decentralized exchanges (Uniswap).\nWHEN: Triggered instantly with every token swap transaction.\nWHERE: Liquidity pool smart contracts.\nHOW: 1. LP deposits token A and B. 2. Constant product is set (x * y = k). 3. Trader swaps token A for B. 4. Pool increases price of A and drops price of B to maintain balance.",
            explainerVideoId: "cizLhxSKrAc",
            technicalBriefing: "$$x \\times y = k$$",
            vocabulary: [{ word: "Impermanent Loss", streetAnalogy: "Losing out compared to just holding.", boardroomDefinition: "The temporary loss of funds experienced by liquidity providers due to volatility in a liquidity pool." }]
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
    id: 11,
    name: "PHASE 10: SOVEREIGN LEGACY",
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
            vocabulary: [{ word: "SBLOC", streetAnalogy: "A giant credit card backed by your stocks.", boardroomDefinition: "Securities-Based Line of Credit; a revolving credit line secured by marketable securities." }]
          },
          {
            title: "Sub-Phase 10.2: Private Placement Life Insurance (PPLI)",
            streetExplanation: "Wrap your investments inside a private life insurance policy. All capital growth compounds tax-free, and your heirs receive the money tax-free when you die.",
            boardroomExplanation: "WHAT: An investment-oriented variable universal life insurance policy structured for accredited investors.\nWHY: Shields investment gains from capital gains and income taxes under life insurance tax codes.\nWHO: Wealth managers, insurance underwriters, and sovereign families.\nWHEN: Structured during long-term dynastic estate planning phases.\nWHERE: Special insurance carrier jurisdictions (Bermuda, Singapore).\nHOW: 1. Establish offshore PPLI policy. 2. Deposit investment capital into policy. 3. Invest within policy tax-free. 4. Pass tax-free death benefit to heirs.",
            explainerVideoId: "mX4_X7A8K9A",
            technicalBriefing: "$$Tax\\_Liability_{PPLI} = 0$$",
            vocabulary: [{ word: "PPLI", streetAnalogy: "A tax-free wrapper for large investments.", boardroomDefinition: "Private Placement Life Insurance; a specialized variable life insurance policy designed for high-net-worth investors." }]
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
            vocabulary: [{ word: "Flag Theory", streetAnalogy: "Not putting all your citizenships or banks in one country.", boardroomDefinition: "A strategy proposing the diversification of physical and financial flags globally to optimize tax and legal exposure." }]
          }
        ],
        resources: [
          { title: "Buy, Borrow, Die (WSJ)", url: "https://www.wsj.com/articles/buy-borrow-die-how-the-rich-live-off-their-stock-portfolios-11626159601", type: "article", provider: "WSJ" }
        ],
        isQuizCompleted: false
      }
    ]
  }
];
