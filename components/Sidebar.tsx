
import React from 'react';

type NavItem = 'roadmap' | 'project' | 'mentor' | 'stats';

interface SidebarProps {
  activeTab: NavItem;
  setActiveTab: (tab: NavItem) => void;
  onLaunchAntigravity: () => void;
  intensity: number;
  setIntensity: (value: number) => void;
  collapsed: boolean;
  deepWork: boolean;
  setDeepWork: (value: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  onLaunchAntigravity,
  intensity,
  setIntensity,
  collapsed,
  deepWork,
  setDeepWork
}) => {
  const [hoveredItem, setHoveredItem] = React.useState<NavItem | null>(null);
  const [isMounted, setIsMounted] = React.useState(false);
  const [activeMenu, setActiveMenu] = React.useState<string | null>(null);
  const sidebarRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  const items: { id: NavItem; label: string; icon: string }[] = [
    { id: 'roadmap', label: 'Roadmap', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { id: 'project', label: 'Masterpiece', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { id: 'mentor', label: 'AI Mentor', icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z' },
    { id: 'stats', label: 'Growth', icon: 'M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
  ];

  const activeIndex = items.findIndex(item => item.id === activeTab);
  const hoveredIndex = items.findIndex(item => item.id === hoveredItem);

  return (
    <div ref={sidebarRef} className={`fixed lg:sticky top-0 left-0 h-screen bg-slate-950/40 backdrop-blur-3xl border-r border-white/5 flex flex-col transition-all duration-500 overflow-hidden group z-[100] ${deepWork ? 'w-20' : (collapsed ? 'w-0 lg:w-0' : 'w-full lg:w-72')}`}>

      {/* SVG Definitions for Neural Links */}
      <svg className="absolute inset-0 pointer-events-none z-0" width="100%" height="100%">
        <defs>
          <linearGradient id="neural-link-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {hoveredItem && hoveredIndex !== -1 && activeIndex !== -1 && hoveredIndex !== activeIndex && (
          <path
            className="neural-link-path"
            d={`M 36 ${activeIndex * 68 + 180} Q 60 ${((activeIndex + hoveredIndex) / 2) * 68 + 180} 36 ${hoveredIndex * 68 + 180}`}
            fill="none"
          />
        )}
      </svg>

      <div className={`p-8 mb-8 flex items-center justify-between lg:block transition-all duration-500 ${deepWork ? 'opacity-0 h-0 p-0 mb-0 overflow-hidden' : 'opacity-100'}`}>
        <div className="w-12 h-12 bg-slate-900/60 premium-glass border border-white/10 rounded-2xl flex items-center justify-center shadow-2xl mb-0 lg:mb-6 group-hover:scale-110 transition-transform duration-500">
          <div id="aura-waveform-container" className="w-full h-full p-2"></div>
        </div>
        <div className="space-y-1">
          <h1 className="text-2xl font-black tracking-tighter premium-gradient-text uppercase lg:block">
            ODYSSEY.ZENITH
          </h1>
          <p className="text-[10px] font-black text-slate-400 tracking-[0.4em] uppercase lg:block">System Interface</p>
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-3 relative z-10">
        {/* Elite Glowing Indicator */}
        <div
          className="absolute left-4 right-4 h-[56px] bg-indigo-500/10 border border-indigo-500/20 rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] z-0"
          style={{
            top: `${activeIndex * 68}px`,
            opacity: activeTab ? 1 : 0,
            boxShadow: '0 0 30px rgba(99,102,241,0.1)'
          }}
        />

        {items.map((item) => (
          <div
            key={item.id}
            className="relative group/nav z-10"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <button
              id={item.id === 'roadmap' ? 'nav-roadmap' : item.id === 'mentor' ? 'mentor-trigger' : undefined}
              onClick={() => {
                const uiClick = new Audio('data:audio/mp3;base64,SUQzBAAAAAABAFRYWFgAAAASAAADbWFqb3JfYnJhbmQAZGFzaABUWFhYAAAAEgAAA21pbm9yX3ZlcnNpb24AMABUWFhYAAAAHAAAA2NvbXBhdGlibGVfYnJhbmRzAGlzbzZtcDQxAFRTU0UAAAAPAAADTGF2ZjYwLjMuMTAwAAAAAAAAAAAAAAD/+00AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYXBpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+00fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYXBpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+00fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYXBpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
                uiClick.volume = 0.05;
                uiClick.play().catch(() => { });
                setActiveTab(item.id);
              }}
              className={`w-full flex items-center justify-between px-5 py-4 rounded-2xl transition-all duration-300 relative group/btn ${activeTab === item.id
                ? 'text-white'
                : 'text-slate-300 hover:text-white'
                }`}
            >
              <div className="flex items-center">
                <div className={`transition-all duration-300 ${activeTab === item.id ? 'scale-110 text-indigo-400' : 'group-hover/nav:scale-110'}`}>
                  <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                {!deepWork && (
                  <span className="ml-4 font-black text-sm tracking-tight lg:block">{item.label}</span>
                )}
              </div>

              <div className="flex items-center space-x-2">
                {isMounted && activeTab === item.id && !deepWork && (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMenu(activeMenu === item.id ? null : item.id);
                    }}
                    className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 text-slate-500 hover:text-white transition-all opacity-0 group-hover/btn:opacity-100"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                  </button>
                )}
                {activeTab === item.id && (
                  <div className="w-1.5 h-8 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,1)]"></div>
                )}
              </div>
            </button>

            {/* Luxury Sub-Menu */}
            {isMounted && activeMenu === item.id && !deepWork && (
              <div className="absolute left-full ml-2 top-0 w-48 premium-glass rounded-xl p-2 z-[110] border border-white/10 animate-in fade-in zoom-in-95 duration-200">
                <button className="w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase text-slate-400 hover:bg-indigo-500 hover:text-white transition-all">Quick Sync</button>
                <button className="w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase text-slate-400 hover:bg-indigo-500 hover:text-white transition-all">Diagnostics</button>
                <button
                  className="w-full text-left px-3 py-2 rounded-lg text-[10px] font-black uppercase text-rose-400 hover:bg-rose-500 hover:text-white transition-all"
                  onClick={() => setActiveMenu(null)}
                >
                  Close Menu
                </button>
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="p-6 lg:p-8 space-y-6 relative z-10">
        <button
          onClick={onLaunchAntigravity}
          className={`w-full flex items-center justify-center space-x-3 p-5 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-[10px] font-black text-indigo-400 uppercase tracking-widest hover:bg-indigo-500 hover:text-white transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/40 group active:scale-95 ${deepWork ? 'opacity-0 h-0 overflow-hidden py-0' : 'opacity-100'}`}
        >
          <svg className="w-4 h-4 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
          <span className="hidden lg:block">Antigravity App</span>
        </button>

        <div className={`hidden lg:block premium-glass rounded-2xl p-6 overflow-hidden relative group/intensity transition-all duration-500 ${deepWork ? 'opacity-0 scale-90 h-0 p-0 m-0' : 'opacity-100'}`}>
          <div className="relative z-10 space-y-6">
            <div className="flex justify-between items-center">
              <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">Resonance Control</span>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(99,102,241,1)]"></div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  <span>Optic Distortion</span>
                  <span>{intensity}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={intensity}
                  onChange={(e) => setIntensity(Number(e.target.value))}
                  className="w-full h-1 bg-slate-800 rounded-full appearance-none cursor-pointer accent-indigo-500"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-[9px] font-bold text-slate-500 uppercase tracking-widest">
                  <span>Grid Frequency</span>
                  <span>{Math.floor(intensity / 2)}Hz</span>
                </div>
                <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all duration-500" style={{ width: `${intensity}%` }}></div>
                </div>
              </div>
            </div>

            <p className="text-[8px] font-bold text-slate-500 uppercase tracking-widest opacity-60">System Feedback Layer [ACTIVE]</p>
          </div>
        </div>

        <div className="hidden lg:block overflow-hidden relative transition-all duration-500">
          <button
            onClick={() => setDeepWork(!deepWork)}
            title={deepWork ? "Exit Deep Work" : "Enter Deep Work"}
            className={`w-full p-4 rounded-xl flex items-center justify-between transition-all duration-500 ${deepWork ? 'bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.4)]' : 'bg-white/5 hover:bg-white/10'}`}
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-lg ${deepWork ? 'bg-white/20' : 'bg-indigo-500/20'}`}>
                <svg className={`w-4 h-4 ${deepWork ? 'text-white' : 'text-indigo-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              </div>
              {!deepWork && <span className="text-[10px] font-black text-white uppercase tracking-widest">Deep Work</span>}
            </div>
            {!deepWork && (
              <div className="w-8 h-4 bg-slate-800 rounded-full relative p-1 transition-all">
                <div className="w-2 h-2 bg-slate-400 rounded-full"></div>
              </div>
            )}
          </button>
        </div>

        <div className={`hidden lg:block premium-glass rounded-2xl p-5 overflow-hidden relative cursor-help group/rank transition-all duration-500 ${deepWork ? 'opacity-0 h-0 p-0 m-0' : 'opacity-100'}`}>
          <div className="relative z-10">
            <div className="flex justify-between items-end mb-3">
              <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-[0.2em]">Rank: Scholar</span>
              <span className="text-xl font-black text-white tracking-tighter transition-transform group-hover/rank:scale-110">Lv. 4</span>
            </div>
            <div className="flex justify-between text-[9px] text-slate-500 font-bold mb-2">
              <span>PROGRESSION</span>
              <span>80%</span>
            </div>
            <div className="w-full bg-slate-950/60 rounded-full h-1.5 p-[2px] relative overflow-hidden">
              <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-full rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)] relative overflow-hidden" style={{ width: '80%' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
              </div>
            </div>
          </div>
          <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-indigo-500/10 rounded-full blur-2xl group-hover/rank:w-32 group-hover/rank:h-32 transition-all duration-700"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
