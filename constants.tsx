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
    name: "PHASE 3: RISK ARBITRAGE",
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
    name: "PHASE 10: SOVEREIGN LEGACY",
    tagline: "Dynastic Wealth and Multi-Jurisdictional Arbitrage.",
    status: LevelStatus.AVAILABLE,
    icon: "🛡️",
    topics: [
      {
        id: "t5-1",
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
        id: "t5-2",
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
