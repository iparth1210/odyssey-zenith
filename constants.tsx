import { RoadmapModule, ModuleStatus, DailyTask, QuizQuestion } from './types';

const generateMonthDays = (month: number, theme: string): DailyTask[] => {
  return Array.from({ length: 30 }, (_, i) => ({
    day: i + 1,
    title: `Sequence ${month}.${(i + 1).toString().padStart(2, '0')}: ${theme}`,
    objective: `Mastering advanced ${theme.toLowerCase()} primitives.`,
    conceptualWhy: `Elite architecture requires mastery of the unit. Sequence ${i + 1} bridges the gap between theory and production.`,
    funnyStory: `The developer who thought they could out-smart the ${theme} layer... their terminal is still screaming today.`,
    storyImageUrl: `https://images.unsplash.com/photo-${[
      '1451187580459-43490279c0fa',
      '1550751827-4bd374c3f58b',
      '1518770660439-4636190af475',
      '1517077304055-6e89abbf09b0',
      '1504384308090-c894fdcc538d'
    ][Math.floor(Math.random() * 5)]}?auto=format&fit=crop&q=80&w=800`,
    practicalUsage: `Building high-performance ${theme.toLowerCase()} systems at scale.`,
    detailedTheory: [{
      title: `${theme} Nexus Point ${i + 1}`,
      description: `Optimizing the ${theme.toLowerCase()} synchronization matrix for sub-millisecond latency.`,
      imageUrl: "https://images.unsplash.com/photo-1518433278988-78ef99ea0524?auto=format&fit=crop&q=80&w=800"
    }],
    resources: [
      {
        type: 'video',
        label: `Explore: ${theme} Concepts`,
        url: `https://www.youtube.com/results?search_query=mastering+${theme.replace(' ', '+')}+programming+tutorial`,
        difficulty: 'Intermediate',
        duration: 'Multiple',
        provider: 'YouTube Search'
      },
      {
        type: 'article',
        label: `${theme} Documentation`,
        url: `https://duckduckgo.com/?q=${theme.replace(' ', '+')}+documentation+best+practices`,
        difficulty: 'Advanced',
        duration: 'Read',
        provider: 'Web Search'
      }
    ],
    quiz: {
      question: `Critical Thinking: How does ${theme} impact system scalability?`,
      options: [
        `It reduces latency by optimizing ${theme} calls`,
        "It increases caloric intake of the developer",
        "It requires a quantum computer",
        "It has no impact on performance"
      ],
      correctIndex: 0,
      explanation: `Optimizing the ${theme} layer is critical for reducing overhead and ensuring the system can handle increased load without linear resource scaling.`
    }
  }));
};

const generatePlaceholderDays = (month: number, startDay: number, count: number): DailyTask[] => {
  return Array.from({ length: count }, (_, i) => ({
    day: startDay + i,
    title: `Sequence ${month}.${startDay + i}: Tech Horizon`,
    objective: "Preparing for the next stage of development mastery.",
    conceptualWhy: "Technology is a stack. You must master the foundation to build the future.",
    funnyStory: "Dave the Accountant tried to build a database in Excel. He currently has 4 million rows and his laptop is actually hovering off the desk from the fan heat.",
    storyImageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    practicalUsage: "Building high-performance data systems.",
    detailedTheory: [{
      title: "Data Sequence Alpha",
      description: "Unit decoding in progress...",
      imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800"
    }],
    resources: [
      {
        type: 'video',
        label: 'Concept Deep Dive',
        url: `https://www.youtube.com/results?search_query=advanced+computer+science+concepts+part+${startDay + i}`,
        difficulty: 'Advanced',
        duration: 'Self-Paced',
        provider: 'Deep Web'
      }
    ]
  }));
};

const generateMonth0Days = (): DailyTask[] => {
  return [
    {
      day: 1,
      title: "The Transistor: Silicon's First Breath",
      objective: "Understand the physical switch that acts as the 'atom' of computing.",
      conceptualWhy: "Everything starts with a physical 'Yes' or 'No'. Without the transistor, we are just smashing rocks together.",
      funnyStory: "Meet Silicon Sam, the bouncer at 'Club Electricity'. He only lets the party start if he gets a tiny high-five on his middle leg (The Base). Your phone has billions of Sams, and they never sleep.",
      storyImageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
      practicalUsage: "Understanding thermal throttling and physical CPU constraints. Every line of code eventually generates heat here.",
      detailedTheory: [
        {
          title: "The P-N Junction",
          description: "At its core, a transistor is a sandwich of doped silicon. By adding impurities (boron or phosphorus), we create regions with 'holes' (P-type) or extra electrons (N-type). The interface between these layers creates a depletion zone—a wall that blocks electricity until we apply a specific voltage to the gate.",
          imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "Field-Effect Dynamics (MOSFET)",
          description: "Modern computing relies on the MOSFET (Metal-Oxide-Semiconductor Field-Effect Transistor). When you apply voltage to the Gate terminal, it creates an electric field that attracts charge carriers to a narrow channel beneath it. This turns the 'insulator' into a 'conductor' instantly, allowing bits to flow.",
          imageUrl: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800"
        }
      ],
      resources: [
        {
          type: 'video', label: 'How Transistors Work', url: 'https://www.youtube.com/watch?v=IcrBqCFLHIY', embedId: 'IcrBqCFLHIY', provider: 'Veritasium', difficulty: 'Beginner', duration: '8:15', thumbnail: 'https://img.youtube.com/vi/IcrBqCFLHIY/maxresdefault.jpg'
        }
      ],
      quiz: {
        question: "What is the primary role of the 'Base' or 'Gate' terminal in a transistor?",
        options: ["To store electricity permanently", "To act as the handle controlling current flow", "To convert heat into light", "To protect the chip from water"],
        correctIndex: 1,
        explanation: "The Gate terminal acts like a tap or handle. A small voltage at the Gate controls a much larger flow between the Source and Drain, acting as the fundamental switch."
      }
    },
    ...generatePlaceholderDays(0, 2, 29)
  ];
};

const generateMonth1Days = (): DailyTask[] => {
  return [
    {
      day: 1,
      title: "The Kernel Core: Guardian of the Gate",
      objective: "Understand the Kernel's role as the intermediary between software and hardware.",
      conceptualWhy: "If hardware is the stage and software is the play, the Kernel is the director, stage manager, and security guard all in one.",
      funnyStory: "Kernel Ken is the grumpiest waiter in the world. You want to talk to the CPU? You talk to Ken. You want 100MB of RAM? Ken decides if you're worthy. He never sleeps, and he has a zero-tolerance policy for 'Bad Pointers'.",
      storyImageUrl: "https://images.unsplash.com/photo-1518433278988-78ef99ea0524?auto=format&fit=crop&q=80&w=800",
      practicalUsage: "Optimizing system calls and understanding process scheduling for high-scale backends.",
      detailedTheory: [
        {
          title: "The Monolithic vs. Microkernel Debate",
          description: "A monolithic kernel, like Linux, runs all core services in a single address space for maximum performance. A microkernel, like Minix or L4, moves services to 'user space' for better security and stability. One is a solid block of granite; the other is a carefully assembled gearbox.",
          imageUrl: "https://images.unsplash.com/photo-1558494949-ef0109556754?auto=format&fit=crop&q=80&w=800"
        },
        {
          title: "System Calls: The Secret Handshake",
          description: "Apps don't touch hardware directly. They perform a 'syscall'. The CPU switches from 'User Mode' (restricted) to 'Kernel Mode' (unrestricted). This 'Context Switch' is the most expensive operation in your code—understand it, and you'll write faster apps.",
          imageUrl: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?auto=format&fit=crop&q=80&w=800"
        }
      ],
      resources: [
        {
          type: 'video', label: 'How an OS Kernel Works', url: 'https://www.youtube.com/watch?v=26QPDBe-NB8', embedId: '26QPDBe-NB8', provider: 'Powerup Cloud', difficulty: 'Intermediate', duration: '10:30'
        }
      ],
      quiz: {
        question: "What is a 'Context Switch' in the context of an Operating System?",
        options: ["Changing the UI theme", "The cost of moving a process from User Mode to Kernel Mode", "Switching between two different monitors", "Replacing the RAM stick while the PC is on"],
        correctIndex: 1,
        explanation: "A context switch is the process of storing the state of a process so it can be resumed later, and it's particularly important when transitioning between user-level code and kernel-level code."
      }
    },
    ...generatePlaceholderDays(1, 2, 29)
  ];
};

export const INITIAL_ROADMAP: RoadmapModule[] = [
  {
    id: 'm0',
    month: 0,
    title: 'Silicon Foundations',
    description: 'Deconstruct the physical reality of computing.',
    conceptualWhy: 'Hardware is the stage; software is the play.',
    funnyStory: 'The Post-it Note Database.',
    practicalUsage: 'System performance.',
    topics: ['Transistors', 'Logic Gates', 'Binary'],
    skills: ['Architecture', 'Logic'],
    status: ModuleStatus.COMPLETED,
    previewImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1200',
    dailySchedule: generateMonth0Days(),
    masteryProject: { title: 'Logic Lab', description: 'Build an 8-bit adder.' },
    resources: [],
    progress: 100
  },
  {
    id: 'm1',
    month: 1,
    title: 'The Kernel Authority',
    description: 'Master the operating systems and kernel interfaces.',
    conceptualWhy: 'The OS is the traffic controller.',
    funnyStory: 'The Waiter and the Burger.',
    practicalUsage: 'High-concurrency systems.',
    topics: ['Kernels', 'Syscalls', 'Memory Management'],
    skills: ['OS', 'Performance'],
    status: ModuleStatus.CURRENT,
    previewImage: 'https://images.unsplash.com/photo-1518433278988-78ef99ea0524?auto=format&fit=crop&q=80&w=1200',
    dailySchedule: generateMonth1Days(),
    masteryProject: { title: 'Kernel Bridge', description: 'Implement a basic shell.' },
    resources: [],
    progress: 3
  },
  {
    id: 'm2',
    month: 2,
    title: 'The Network Nexus',
    description: 'Navigate the invisible highways of the internet.',
    conceptualWhy: 'Understanding the layers of data travel.',
    funnyStory: 'Bob the Packet.',
    practicalUsage: 'API design.',
    topics: ['TCP/IP', 'HTTP/3', 'WebSockets'],
    skills: ['Networking', 'Protocols'],
    status: ModuleStatus.CURRENT,
    previewImage: 'https://images.unsplash.com/photo-1558494949-ef0109556754?auto=format&fit=crop&q=80&w=1200',
    dailySchedule: generateMonthDays(2, "Network Protocol"),
    masteryProject: { title: 'Protocol Pioneer', description: 'Build a TCP chat application.' },
    resources: [],
    progress: 0
  },
  {
    id: 'm3',
    month: 3,
    title: 'The Data Forge',
    description: 'Master persistent storage and data modeling.',
    conceptualWhy: 'Refining information into intelligence.',
    funnyStory: 'Sally and the 4 million rows.',
    practicalUsage: 'Scalable data systems.',
    topics: ['SQL', 'NoSQL', 'Indexing'],
    skills: ['Database', 'Optimization'],
    status: ModuleStatus.CURRENT,
    previewImage: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=1200',
    dailySchedule: generateMonthDays(3, "Data Management"),
    masteryProject: { title: 'Data Architect', description: 'Design an e-commerce schema.' },
    resources: [],
    progress: 0
  },
  {
    id: 'm4',
    month: 4,
    title: 'The Frontend Frontier',
    description: 'Craft pixel-perfect interfaces.',
    conceptualWhy: 'The UI is the face of your application.',
    funnyStory: 'Centering a div for 3 hours.',
    practicalUsage: 'Responsive web engineering.',
    topics: ['HTML5', 'CSS Grid', 'Animation'],
    skills: ['Frontend', 'UI/UX'],
    status: ModuleStatus.CURRENT,
    previewImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?auto=format&fit=crop&q=80&w=1200',
    dailySchedule: generateMonthDays(4, "UI Engineering"),
    masteryProject: { title: 'Pixel Perfect', description: 'Clone a professional landing page.' },
    resources: [],
    progress: 0
  },
  {
    id: 'm5',
    month: 5,
    title: 'The JavaScript Engine',
    description: 'Master the language that powers the web.',
    conceptualWhy: 'The lingua franca of the internet.',
    funnyStory: 'Why 0.1 + 0.2 isn\'t 0.3.',
    practicalUsage: 'Interactive applications.',
    topics: ['ES6+', 'Async/Await', 'Closures'],
    skills: ['JavaScript', 'Logic'],
    status: ModuleStatus.CURRENT,
    previewImage: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?auto=format&fit=crop&q=80&w=1200',
    dailySchedule: generateMonthDays(5, "JS Engine"),
    masteryProject: { title: 'JS Mastery', description: 'Build a custom Promise.' },
    resources: [],
    progress: 0
  },
  {
    id: 'm6',
    month: 6,
    title: 'The React Revolution',
    description: 'Build declarative component systems.',
    conceptualWhy: 'Components are the LEGO blocks of UI.',
    funnyStory: 'The re-render that broke the world.',
    practicalUsage: 'Modern SPA development.',
    topics: ['Hooks', 'State', 'Context'],
    skills: ['React', 'Architecture'],
    status: ModuleStatus.CURRENT,
    previewImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1200',
    dailySchedule: generateMonthDays(6, "React Framework"),
    masteryProject: { title: 'React Architect', description: 'Build a Kanban board.' },
    resources: [],
    progress: 0
  },
  {
    id: 'm7',
    month: 7,
    title: 'The Node Nexus',
    description: 'Extend JavaScript to the server.',
    conceptualWhy: 'Enabling fullstack JavaScript development.',
    funnyStory: 'The infinite event loop.',
    practicalUsage: 'REST APIs & Microservices.',
    topics: ['Express', 'Middleware', 'Auth'],
    skills: ['Node.js', 'Backend'],
    status: ModuleStatus.CURRENT,
    previewImage: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=1200',
    dailySchedule: generateMonthDays(7, "Backend Logic"),
    masteryProject: { title: 'API Architect', description: 'Build an Auth system.' },
    resources: [],
    progress: 0
  },
  {
    id: 'm8',
    month: 8,
    title: 'TypeScript Transformation',
    description: 'Add static typing for enterprise quality.',
    conceptualWhy: 'Catching bugs before they reach production.',
    funnyStory: 'The "any" that hid a disaster.',
    practicalUsage: 'Scalable software engineering.',
    topics: ['Types', 'Interfaces', 'Generics'],
    skills: ['TypeScript', 'Safety'],
    status: ModuleStatus.CURRENT,
    previewImage: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=1200',
    dailySchedule: generateMonthDays(8, "Type Systems"),
    masteryProject: { title: 'Type Master', description: 'Migrate a JS app to TS.' },
    resources: [],
    progress: 0
  },
  {
    id: 'm9',
    month: 9,
    title: 'The Testing Temple',
    description: 'Master automated quality assurance.',
    conceptualWhy: 'Untested code is just broken code waiting.',
    funnyStory: 'It works on my machine...',
    practicalUsage: 'Reliable deployment.',
    topics: ['Unit', 'E2E', 'TDD'],
    skills: ['QA', 'Reliability'],
    status: ModuleStatus.CURRENT,
    previewImage: 'https://images.unsplash.com/photo-1576444356170-66073046b1bc?auto=format&fit=crop&q=80&w=1200',
    dailySchedule: generateMonthDays(9, "Software Testing"),
    masteryProject: { title: 'Test Champion', description: 'Achieve 95% coverage.' },
    resources: [],
    progress: 0
  },
  {
    id: 'm10',
    month: 10,
    title: 'The DevOps Domain',
    description: 'Automate deployment pipelines.',
    conceptualWhy: 'Shipping fast and reliably with CI/CD.',
    funnyStory: 'Friday 5 PM Code Deploy.',
    practicalUsage: 'Continuous integration.',
    topics: ['Docker', 'AWS', 'Actions'],
    skills: ['Cloud', 'DevOps'],
    status: ModuleStatus.CURRENT,
    previewImage: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1200',
    dailySchedule: generateMonthDays(10, "DevOps Mastery"),
    masteryProject: { title: 'DevOps Engineer', description: 'Build a full pipeline.' },
    resources: [],
    progress: 0
  },
  {
    id: 'm11',
    month: 11,
    title: 'The Scale Summit',
    description: 'Design systems for global mastery.',
    conceptualWhy: 'Handling millions of concurrent signals.',
    funnyStory: 'The database that went to space.',
    practicalUsage: 'Elite platform engineering.',
    topics: ['Caching', 'Microservices', 'Load Sync'],
    skills: ['Architecture', 'Scale'],
    status: ModuleStatus.CURRENT,
    previewImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200',
    dailySchedule: generateMonthDays(11, "Global Systems"),
    masteryProject: { title: 'Scale Architect', description: 'Deploy global infrastructure.' },
    resources: [],
    progress: 0
  }
];
