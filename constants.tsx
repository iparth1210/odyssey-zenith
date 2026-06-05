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
        title: "The Velocity of Value",
        description: "Deconstructing the evolution from physical commodity to digital fiat-centralization.",
        missionStrategy: "Analyze the 'Double Coincidence of Wants' and the emergence of institutional clearing houses.",
        category: 'CORE',
        funnyTake: "Money is the most successful shared hallucination in human history.",
        subTopics: [
          {
            title: "The Equation of Exchange",
            streetExplanation: "If money moves too fast with fixed supply, prices explode. If it stops, the system seizes.",
            boardroomExplanation: "The fundamental identity of classical monetary theory relating money supply to price stability.",
            technicalBriefing: "$$MV = PY$$",
            explainerVideoId: "pY-x8M_6Acs",
            institutionalSecret: "Central banks target the 2% inflation rate not for stability, but to ensure perpetual debt-service viability.",
            imagePrompt: "Intricate architectural blueprints of a global central bank vault, obsidian glass and gold circuits.",
            vocabulary: [{ word: "Velocity", streetAnalogy: "How fast a dollar changes hands.", boardroomDefinition: "The frequency at which one unit of currency is used to purchase goods and services within a given time period." }]
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
    status: LevelStatus.AVAILABLE,
    icon: "📈",
    topics: [
      {
        id: "t1-1",
        title: "Intrinsic Value Architecture",
        description: "The mathematical core of asset pricing and capital allocation.",
        missionStrategy: "Identify market mispricing by calculating the Net Present Value of future liquidity streams.",
        category: 'EQUITIES',
        funnyTake: "A stock price is just a consensus opinion on a company's future stress levels.",
        subTopics: [
          {
            title: "Discounted Cash Flow (DCF)",
            streetExplanation: "How much would you pay today for a guaranteed stream of income tomorrow?",
            boardroomExplanation: "The definitive valuation methodology used to estimate investment value based on risk-adjusted future cash flows.",
            technicalBriefing: "$$PV = \\sum_{t=1}^{n} \\frac{CF_t}{(1+r)^t} + \\frac{TV}{(1+r)^n}$$",
            explainerVideoId: "fd_emLLzJnk",
            institutionalSecret: "Institutional desks focus on the Weighted Average Cost of Capital (WACC) to manipulate hurdle rates for strategic acquisitions.",
            imagePrompt: "A high-fidelity digital projection of future cash flows emerging from a platinum-coated server.",
            vocabulary: [{ word: "Discount Rate", streetAnalogy: "The price of waiting.", boardroomDefinition: "The interest rate used in DCF analysis to determine the present value of future cash flows." }]
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
    status: LevelStatus.AVAILABLE,
    icon: "🏛️",
    topics: [
      {
        id: "t2-1",
        title: "The Yield Curve Matrix",
        description: "Analyze yield curve inversions to predict economic cycles and credit liquidity shocks.",
        missionStrategy: "Understand short-term vs long-term interest rates to gauge market expectations.",
        category: 'DEBT',
        funnyTake: "Bonds are just loans to governments that promise to pay you back with money they print later.",
        subTopics: [
          {
            title: "Yield Curve Inversion",
            streetExplanation: "When short-term loans pay more than long-term ones, banks stop lending and the market panics.",
            boardroomExplanation: "An inversion of the term structure of interest rates signaling impending recessions.",
            technicalBriefing: "$$Spread = Yield_{10Y} - Yield_{2Y} < 0$$",
            explainerVideoId: "1J1c9vG86u0",
            institutionalSecret: "Smart money locks in long-duration yields right at the peak of the inversion before rate cuts start.",
            imagePrompt: "A glowing 3D graph representing yield curves curving downwards into a dark abyss.",
            vocabulary: [{ word: "Yield to Maturity", streetAnalogy: "Total return if you hold it forever.", boardroomDefinition: "The total return anticipated on a bond if it is held until it matures." }]
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
    status: LevelStatus.AVAILABLE,
    icon: "📊",
    topics: [
      {
        id: "t3-1",
        title: "Efficient Frontier Dynamics",
        description: "Optimize asset allocations along the efficient frontier to maximize risk-adjusted returns.",
        missionStrategy: "Learn to balance risk and reward via math-based portfolio diversification.",
        category: 'PORTFOLIO',
        funnyTake: "Diversification means having a lot of different investments go down at different times.",
        subTopics: [
          {
            title: "The Sharpe Ratio",
            streetExplanation: "Are you actually good at investing, or are you just taking crazy risks to get returns?",
            boardroomExplanation: "The standard measure of risk-adjusted return, calculated as excess return per unit of volatility.",
            technicalBriefing: "$$Sharpe = \\frac{R_p - R_f}{\\sigma_p}$$",
            explainerVideoId: "a5v_2BwQ3fM",
            institutionalSecret: "Desk managers manipulate the Sharpe ratio by buying low-volatility assets and multiplying returns using leverage.",
            imagePrompt: "A multi-dimensional mathematical graph with glowing vectors in platinum and gold.",
            vocabulary: [{ word: "Standard Deviation", streetAnalogy: "How wild the ride is.", boardroomDefinition: "A statistic that measures the dispersion of a dataset relative to its mean." }]
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
    status: LevelStatus.AVAILABLE,
    icon: "⚙️",
    topics: [
      {
        id: "t4-1",
        title: "Options Hedging Protocol",
        description: "Utilize call and put options to protect capital structures against market tail risk.",
        missionStrategy: "Trade options to manage volatility risk and protect your long-term wealth portfolio.",
        category: 'DERIVATIVES',
        funnyTake: "Options trading is like buying insurance on houses you don't own, hoping they catch fire.",
        subTopics: [
          {
            title: "Black-Scholes Delta Hedging",
            streetExplanation: "Buy options to lock in a price. Adjust your stock holdings so you break even no matter where the market moves.",
            boardroomExplanation: "A mathematical model to calculate the theoretical value of options using volatility, strike price, and time.",
            technicalBriefing: "$$C = S_0 N(d_1) - K e^{-rt} N(d_2)$$",
            explainerVideoId: "D34x9Jm1vL4",
            institutionalSecret: "Market makers rely on retail traders buying out-of-the-money options to collect easy premium via theta decay.",
            imagePrompt: "Complex mathematical equations transforming into glowing golden shields surrounding stock charts.",
            vocabulary: [{ word: "Delta", streetAnalogy: "How much your option copies the stock.", boardroomDefinition: "The ratio comparing the change in the price of an asset to the corresponding change in the price of its derivative." }]
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
    status: LevelStatus.AVAILABLE,
    icon: "🤝",
    topics: [
      {
        id: "t5-1",
        title: "Leveraged Buyout Mechanics",
        description: "Acquiring businesses using high debt ratios to maximize equity yield rates.",
        missionStrategy: "Analyze capital allocations, debt schedules, and exit multiples to structure secure deals.",
        category: 'CORPORATE',
        funnyTake: "LBO is buying a house, renting it out to pay the mortgage, and selling it for a profit without spending your own cash.",
        subTopics: [
          {
            title: "LBO Debt Scheduling & IRR",
            streetExplanation: "Borrow 80% of the money needed to buy a company. Use the company's own profits to pay off the debt, then sell it.",
            boardroomExplanation: "The structured leverage model that magnifies equity returns (IRR) by reducing the initial equity contribution.",
            technicalBriefing: "$$IRR = \\left(\\frac{Equity_{Exit}}{Equity_{Entry}}\\right)^{\\frac{1}{n}} - 1$$",
            explainerVideoId: "14aEip3n6oA",
            institutionalSecret: "Corporate acquirers hide underperforming assets in newly spun-off debt entities before triggering major buyouts.",
            imagePrompt: "Two skyscrapers connected by a glowing golden bridge of financial data pipelines.",
            vocabulary: [{ word: "Debt Service", streetAnalogy: "Making your mortgage payments.", boardroomDefinition: "The cash required to cover the repayment of interest and principal on a debt for a particular period." }]
          }
        ],
        resources: [
          { title: "Leveraged Buyout Overview", url: "https://www.investopedia.com/terms/l/lbo.asp", type: "article", provider: "Investopedia" }
        ],
        isQuizCompleted: false
      }
    ]
  },
  {
    id: 7,
    name: "PHASE 6: MACROECONOMICS & CENTRAL BANKING",
    tagline: "Sovereign Liquidity and Fiscal Policy Transmission.",
    status: LevelStatus.AVAILABLE,
    icon: "🌍",
    topics: [
      {
        id: "t6-1",
        title: "Federal Reserve Transmission",
        description: "How interest rate policies filter through credit markets to control inflation and growth.",
        missionStrategy: "Analyze Open Market Operations and quantitative easing effects on global bond markets.",
        category: 'MACRO',
        funnyTake: "Central banking is trying to drive a car by looking only in the rearview mirror and pressing the brakes too late.",
        subTopics: [
          {
            title: "The Taylor Rule",
            streetExplanation: "If inflation goes up, interest rates must go up. If unemployment goes up, rates must go down.",
            boardroomExplanation: "A forecasting model used to determine optimal central bank interest rate settings based on economic output and inflation gaps.",
            technicalBriefing: "$$i_t = r_t^* + \\pi_t + 0.5(\\pi_t - \\pi_t^*) + 0.5(y_t - y_t^*)$$",
            explainerVideoId: "6ZhnB2Y7Kms",
            institutionalSecret: "Central banks monitor the shadow policy rate because official rates don't capture the full scope of liquidity injections.",
            imagePrompt: "A giant gears system representing the Fed controlling global currencies through glowing gold lines.",
            vocabulary: [{ word: "Quantitative Easing", streetAnalogy: "Printing money to buy bonds.", boardroomDefinition: "A monetary policy whereby a central bank purchases at-scale government bonds to inject liquidity directly into the economy." }]
          }
        ],
        resources: [
          { title: "Federal Reserve Policies", url: "https://www.federalreserve.gov/monetarypolicy.htm", type: "article", provider: "Federal Reserve" }
        ],
        isQuizCompleted: false
      }
    ]
  },
  {
    id: 8,
    name: "PHASE 7: MARKET MICROSTRUCTURE & TRADING",
    tagline: "Order Books, Limit Orders, and Liquidity Provision.",
    status: LevelStatus.AVAILABLE,
    icon: "⚡",
    topics: [
      {
        id: "t7-1",
        title: "Order Book Matching Protocols",
        description: "Understanding the mechanics of bids, asks, bid-ask spreads, and market makers.",
        missionStrategy: "Learn how order execution queues shape price discovery and trading volume.",
        category: 'TRADING',
        funnyTake: "Trading is just a high-speed game of musical chairs played by supercomputers.",
        subTopics: [
          {
            title: "Bid-Ask Spreads & Slippage",
            streetExplanation: "The bid is what buyers pay, the ask is what sellers want. The gap between them is how middle-men get rich.",
            boardroomExplanation: "The pricing spread reflecting transaction costs and liquidity depth across automated clearing matching engines.",
            technicalBriefing: "$$Spread = P_{Ask} - P_{Bid}$$",
            explainerVideoId: "Y0jUqW5s8oE",
            institutionalSecret: "High-frequency desks front-run large institutional orders by exploiting microsecond delays in exchange order router circuits.",
            imagePrompt: "Fast-flowing streams of binary code matching bid/ask orders inside a golden digital gateway.",
            vocabulary: [{ word: "Slippage", streetAnalogy: "Paying more than you expected.", boardroomDefinition: "The difference between the expected price of a trade and the actual execution price." }]
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
    status: LevelStatus.AVAILABLE,
    icon: "💎",
    topics: [
      {
        id: "t8-1",
        title: "Private Credit Arbitrage",
        description: "Entering non-bank lending spaces to secure high yields from middle-market businesses.",
        missionStrategy: "Analyze capital loan covenants, seniority structures, and risk premiums.",
        category: 'ALTERNATIVES',
        funnyTake: "Alternative investing is like shopping at a private boutique instead of Walmart—higher risks, but fewer crowds.",
        subTopics: [
          {
            title: "Private Equity Hurdles & Carry",
            streetExplanation: "Managers take 20% of profits, but only after they pay back investors their principal plus a guaranteed 8% return.",
            boardroomExplanation: "The standard general partner profit allocation structured above a hurdle rate to align incentives.",
            technicalBriefing: "$$Carry = 0.20 \\times (Total\_Return - Preferred\_Return)$$",
            explainerVideoId: "F3f9lZ9a7Gk",
            institutionalSecret: "Desks bypass public underwriting by originating loans to sponsor-backed companies with strict covenants.",
            imagePrompt: "A vault containing digital representations of diamonds, gold, and private company contracts.",
            vocabulary: [{ word: "Hurdle Rate", streetAnalogy: "The minimum grade to pass.", boardroomDefinition: "The minimum rate of return on an investment required by a manager before performance fees are triggered." }]
          }
        ],
        resources: [
          { title: "Alternative Assets (BlackRock)", url: "https://www.blackrock.com/institutions/en-us/solutions/alternative-investments", type: "article", provider: "BlackRock" }
        ],
        isQuizCompleted: false
      }
    ]
  },
  {
    id: 10,
    name: "PHASE 9: CRYPTOECONOMICS & DEFI",
    tagline: "Smart Contracts, Automated Market Makers, and Trustless Capital.",
    status: LevelStatus.AVAILABLE,
    icon: "🪙",
    topics: [
      {
        id: "t9-1",
        title: "DeFi Liquidity Protocols",
        description: "Replacing traditional clearing banks with automated mathematical liquidity pools.",
        missionStrategy: "Learn how decentralization, constant-product formulas, and collateralization eliminate counterparty risk.",
        category: 'DEFI',
        funnyTake: "DeFi is like a bank run by robots where anyone can lend, borrow, and print their own currency.",
        subTopics: [
          {
            title: "Constant Product AMMs",
            streetExplanation: "If you buy token A from a pool, its price goes up. If you sell it, the price goes down. The math balances the pool.",
            boardroomExplanation: "The foundational pricing algorithm of decentralized exchanges ensuring continuous liquidity via programmatic asset ratios.",
            technicalBriefing: "$$x \\times y = k$$",
            explainerVideoId: "cizLhxSKrAc",
            institutionalSecret: "Yield farms utilize flash loans to execute arbitrage transactions in a single block without committing collateral.",
            imagePrompt: "Smart contract scripts in gold lettering scrolling over a digital ledger map.",
            vocabulary: [{ word: "Impermanent Loss", streetAnalogy: "Losing money relative to just holding.", boardroomDefinition: "The temporary loss of funds experienced by liquidity providers due to volatility in a liquidity pool." }]
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
    status: LevelStatus.AVAILABLE,
    icon: "🛡️",
    topics: [
      {
        id: "t10-1",
        title: "The 'Buy, Borrow, Die' Protocol",
        description: "Mastering the institutional loop for perpetual tax-free liquidity.",
        missionStrategy: "Leverage Securities-Based Lines of Credit (SBLOCs) to fund lifestyle while shielding the cost-basis.",
        category: 'SOVEREIGN',
        funnyTake: "The elite don't spend money; they spend the bank's money backed by their own.",
        subTopics: [
          {
            title: "Debt Shield Efficiency",
            streetExplanation: "Never sell your winners. Borrow against them. Pay the bank 4% so you don't pay the government 25%.",
            boardroomExplanation: "Optimizing the spread between the cost of institutional debt and the expected equity risk premium.",
            technicalBriefing: "$$\\Delta_{Alpha} = (CAGR \\times (1 - Tax_{Rate})) - (Borrow\\_Rate)$$",
            explainerVideoId: "mX4_X7A8K9A",
            institutionalSecret: "The key is combining SBLOCs with Private Placement Life Insurance (PPLI) for secondary layers of tax-deferred compounding.",
            imagePrompt: "A golden geometric shield protecting a crystal-encased stack of stock certificates from a digital grim reaper.",
            vocabulary: [{ word: "SBLOC", streetAnalogy: "A credit card for billionaires.", boardroomDefinition: "Securities-Based Line of Credit; a revolving credit facility secured by a portfolio of marketable securities." }]
          }
        ],
        resources: [
          { title: "Buy, Borrow, Die (WSJ)", url: "https://www.wsj.com/articles/buy-borrow-die-how-the-rich-live-off-their-stock-portfolios-11626159601", type: "article", provider: "WSJ" }
        ],
        isQuizCompleted: false
      },
      {
        id: "t10-2",
        title: "Jurisdictional Arbitrage",
        description: "Optimizing Legality and Mobility via Flag Theory.",
        missionStrategy: "Distribute legal, physical, and financial presence across global jurisdictions to minimize sovereign risk.",
        category: 'SOVEREIGN',
        funnyTake: "The world is a shopping mall for laws. Pick the ones that treat your wealth with respect.",
        subTopics: [
          {
            title: "The Jurisdictional Matrix",
            streetExplanation: "Don't just hide your money; place it where it is legally un-touchable.",
            boardroomExplanation: "Comparative analysis of global tax and trust frameworks for maximum asset protection.",
            jurisdictionalMatrix: [
              { nation: "Cook Islands", taxRate: "0%", assetProtection: "Ultimate", sovereignRisk: "Low", keyAdvantage: "Disregards all foreign civil judgments." },
              { nation: "Singapore", taxRate: "17%", assetProtection: "Institutional", sovereignRisk: "Low", keyAdvantage: "Stable banking and zero capital gains tax." },
              { nation: "Switzerland", taxRate: "Variable", assetProtection: "Tier-1 Legacy", sovereignRisk: "Low", keyAdvantage: "Deeply entrenched culture of financial privacy." }
            ],
            imagePrompt: "A high-tech terminal showing a world map with glowing nodes in gold and platinum representing sovereign jurisdictions.",
            vocabulary: [{ word: "Arbitrage", streetAnalogy: "Buying low here, selling high there.", boardroomDefinition: "The simultaneous purchase and sale of an asset to profit from an imbalance in the price or legal treatment." }]
          }
        ],
        resources: [
          { title: "Asset Protection Trusts", url: "https://www.investopedia.com/terms/a/asset-protection-trust.asp", type: "article", provider: "Investopedia" }
        ],
        isQuizCompleted: false
      }
    ]
  }
];
