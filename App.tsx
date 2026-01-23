
import React, { useState, useEffect, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Roadmap from './components/Roadmap';
import ProjectConsole from './components/ProjectConsole';
import MentorChat from './components/MentorChat';
import Stats from './components/Stats';
import AntigravityPortal from './components/AntigravityPortal';
import CommandPalette from './components/CommandPalette';
import HUDCursor from './components/HUDCursor';
import ParallaxBackground from './components/ParallaxBackground';
import NeuralGrid from './components/NeuralGrid';
import { INITIAL_ROADMAP } from './constants';
import { ProjectTask } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'roadmap' | 'project' | 'mentor' | 'stats'>(() => (localStorage.getItem('odyssey_active_tab') as any) || 'roadmap');
  const [lastTab, setLastTab] = useState(activeTab);

  const [onboarding, setOnboarding] = useState(() => !localStorage.getItem('odyssey_initialized'));
  const [onboardingStage, setOnboardingStage] = useState(0);
  const [synapticActive, setSynapticActive] = useState(true);

  // Persistence Layer
  const [projectIdea, setProjectIdea] = useState<string>(() => localStorage.getItem('odyssey_project_idea') || '');
  const [projectTasks, setProjectTasks] = useState<ProjectTask[]>(() => {
    const saved = localStorage.getItem('odyssey_project_tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [roadmap, setRoadmap] = useState(() => {
    const saved = localStorage.getItem('odyssey_roadmap');
    return saved ? JSON.parse(saved) : INITIAL_ROADMAP;
  });
  const [xp, setXp] = useState(() => Number(localStorage.getItem('odyssey_xp')) || 45200);
  const [projectNotes, setProjectNotes] = useState<string>(() => localStorage.getItem('odyssey_project_notes') || '');
  const [systemLogs, setSystemLogs] = useState<{ id: string; text: string; type: 'info' | 'warn' | 'success'; timestamp: string }[]>(() => {
    const saved = localStorage.getItem('odyssey_system_logs');
    return saved ? JSON.parse(saved) : [{ id: 'init', text: 'SYSTEM_INITIALIZED: ARCHITECT_LINK_ESTABLISHED', type: 'success', timestamp: new Date().toLocaleTimeString() }];
  });
  const [completedDays, setCompletedDays] = useState<Record<string, number[]>>(() => {
    const saved = localStorage.getItem('odyssey_completed_days');
    return saved ? JSON.parse(saved) : { 'm0': [1] };
  });

  const [showXpAlert, setShowXpAlert] = useState(false);
  const [isAntigravity, setIsAntigravity] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [neuralIntensity, setNeuralIntensity] = useState(() => Number(localStorage.getItem('odyssey_neural_intensity')) || 50);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [isSurge, setIsSurge] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => localStorage.getItem('odyssey_sidebar_collapsed') === 'true');
  const [deepWork, setDeepWork] = useState(() => localStorage.getItem('odyssey_deep_work') === 'true');

  // Navigation Deep-Linking
  const [selectedModuleId, setSelectedModuleId] = useState<string | null>(() => localStorage.getItem('odyssey_selected_module') || null);
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(() => Number(localStorage.getItem('odyssey_selected_day')) || 1);

  // Singularity Pass: Ambient Audio Ref
  const ambientRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (!onboarding) {
      if (!ambientRef.current) {
        ambientRef.current = new Audio('data:audio/mp3;base64,SUQzBAAAAAABAFRYWFgAAAASAAADbWFqb3JfYnJhbmQAZGFzaABUWFhYAAAAEgAAA21pbm9yX3ZlcnNpb24AMABUWFhYAAAAHAAAA2NvbXBhdGlibGVfYnJhbmRzAGlzbzZtcDQxAFRTU0UAAAAPAAADTGF2ZjYwLjMuMTAwAAAAAAAAAAAAAAD/+00AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYXBpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+00fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYXBpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+00fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYXBpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
        ambientRef.current.loop = true;
        ambientRef.current.volume = 0.03;
      }
      ambientRef.current.play().catch(() => { });
    }
  }, [onboarding]);

  // Sync state to LocalStorage
  useEffect(() => {
    localStorage.setItem('odyssey_active_tab', activeTab);
    localStorage.setItem('odyssey_project_idea', projectIdea);
    localStorage.setItem('odyssey_project_tasks', JSON.stringify(projectTasks));
    localStorage.setItem('odyssey_roadmap', JSON.stringify(roadmap));
    localStorage.setItem('odyssey_xp', xp.toString());
    localStorage.setItem('odyssey_neural_intensity', neuralIntensity.toString());
    localStorage.setItem('odyssey_project_notes', projectNotes);
    localStorage.setItem('odyssey_system_logs', JSON.stringify(systemLogs.slice(-50)));
    localStorage.setItem('odyssey_completed_days', JSON.stringify(completedDays));
    if (selectedModuleId) localStorage.setItem('odyssey_selected_module', selectedModuleId);
    localStorage.setItem('odyssey_selected_day', selectedDayNumber.toString());
    localStorage.setItem('odyssey_sidebar_collapsed', sidebarCollapsed.toString());
  }, [projectIdea, projectTasks, roadmap, xp, neuralIntensity, projectNotes, systemLogs, completedDays, activeTab, selectedModuleId, selectedDayNumber, sidebarCollapsed]);

  const addSystemLog = (text: string, type: 'info' | 'warn' | 'success' = 'info') => {
    setSystemLogs(prev => [...prev.slice(-49), {
      id: `log-${Date.now()}-${Math.random()}`,
      text,
      type,
      timestamp: new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
    }]);
  };

  useEffect(() => {
    if (activeTab !== lastTab) {
      const click = new Audio('data:audio/mp3;base64,SUQzBAAAAAABAFRYWFgAAAASAAADbWFqb3JfYnJhbmQAZGFzaABUWFhYAAAAEgAAA21pbm9yX3ZlcnNpb24AMABUWFhYAAAAHAAAA2NvbXBhdGlibGVfYnJhbmRzAGlzbzZtcDQxAFRTU0UAAAAPAAADTGF2ZjYwLjMuMTAwAAAAAAAAAAAAAAD/+00AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYXBpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+00fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYXBpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+00fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYXBpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
      click.volume = 0.05;
      click.play().catch(() => { });
      addSystemLog(`INTERFACE_SHIFT: NAVIGATED_TO_${activeTab.toUpperCase()}`, 'info');

      // Trigger Neural Shiver Haptic
      setIsSurge(true);
      setTimeout(() => setIsSurge(false), 300);

      setLastTab(activeTab);
    }
  }, [activeTab, lastTab]);

  useEffect(() => {
    if (onboarding) {
      const stages = [
        { delay: 1000, stage: 1 },
        { delay: 2500, stage: 2 },
        { delay: 4000, stage: 3 },
        { delay: 5500, stage: 4 },
      ];
      stages.forEach(({ delay, stage }) => {
        setTimeout(() => setOnboardingStage(stage), delay);
      });
      setTimeout(() => {
        setSynapticActive(false);
        setOnboarding(false);
        localStorage.setItem('odyssey_initialized', 'true');
      }, 6000);
    } else {
      setSynapticActive(false);
    }
  }, [onboarding]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setCommandPaletteOpen(prev => !prev);
      }
      if (e.key === 'Escape') setCommandPaletteOpen(false);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setParallax({ x, y });
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const addXp = (amount: number) => {
    setXp(prev => prev + amount);
    setShowXpAlert(true);

    // Trigger Neural Surge Haptic
    setIsSurge(true);
    setTimeout(() => setIsSurge(false), 800);

    // Play Singularity Surge Sound
    const surge = new Audio('data:audio/mp3;base64,SUQzBAAAAAABAFRYWFgAAAASAAADbWFqb3JfYnJhbmQAZGFzaABUWFhYAAAAEgAAA21pbm9yX3ZlcnNpb24AMABUWFhYAAAAHAAAA2NvbXBhdGlibGVfYnJhbmRzAGlzbzZtcDQxAFRTU0UAAAAPAAADTGF2ZjYwLjMuMTAwAAAAAAAAAAAAAAD/+00AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYXBpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+00fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYXBpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+00fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYXBpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    surge.volume = 0.15;
    surge.play().catch(() => { });

    // Play Success Chime
    const chime = new Audio('data:audio/mp3;base64,SUQzBAAAAAABAFRYWFgAAAASAAADbWFqb3JfYnJhbmQAZGFzaABUWFhYAAAAEgAAA21pbm9yX3ZlcnNpb24AMABUWFhYAAAAHAAAA2NvbXBhdGlibGVfYnJhbmRzAGlzbzZtcDQxAFRTU0UAAAAPAAADTGF2ZjYwLjMuMTAwAAAAAAAAAAAAAAD/+00AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYXBpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+00fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYXBpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/+00fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYXBpbmcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    chime.volume = 0.2;
    chime.play().catch(e => console.log("Audio blocked"));

    setTimeout(() => setShowXpAlert(false), 3000);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'roadmap':
        return <Roadmap
          modules={roadmap}
          setRoadmap={setRoadmap}
          selectedModuleId={selectedModuleId || roadmap[1]?.id || roadmap[0]?.id}
          setSelectedModuleId={setSelectedModuleId}
          selectedDayNumber={selectedDayNumber}
          setSelectedDayNumber={setSelectedDayNumber}
          completedDays={completedDays}
          setCompletedDays={setCompletedDays}
          onComplete={(amount) => {
            addXp(amount);
            addSystemLog(`MILESTONE_REACHED: EARNED_${amount}_XP`, 'success');
            setRoadmap(prev => {
              const next = [...prev];
              const currentModule = next.find(m => m.status === 'CURRENT');
              if (currentModule) {
                currentModule.progress = Math.min(currentModule.progress + 15, 100);
                if (currentModule.progress === 100) {
                  currentModule.status = 'COMPLETED' as any;
                  addSystemLog(`KNOWLEDGE_STREAM_SECURED: ${currentModule.title.toUpperCase()}`, 'success');
                }
              }
              return next;
            });
          }}
        />;
      case 'project':
        return <ProjectConsole
          projectIdea={projectIdea}
          setProjectIdea={setProjectIdea}
          tasks={projectTasks}
          setTasks={setProjectTasks}
          notes={projectNotes}
          setNotes={setProjectNotes}
          logs={systemLogs}
          addLog={addSystemLog}
        />;
      case 'mentor':
        return <MentorChat context={`Active Module: ${roadmap.find(m => m.status === 'CURRENT')?.title || 'None'}. Project: ${projectIdea}`} />;
      case 'stats':
        return <Stats xp={xp} tasks={projectTasks} roadmap={roadmap} logs={systemLogs} />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`flex min-h-screen bg-[#020617] text-slate-100 overflow-hidden relative font-['Outfit'] transition-all duration-300 ${deepWork ? 'deep-work-active' : ''} ${isSurge ? 'surge-active' : ''}`}
      style={{ filter: isSurge ? 'url(#pulse-displacement) url(#neural-lens)' : 'url(#neural-lens)' }}
    >
      {/* Singularity Pulse Effect */}
      {isSurge && <div className="singularity-pulse"></div>}

      {/* Elite Parallax Background */}
      <ParallaxBackground mouseX={parallax.x} mouseY={parallax.y} />
      <NeuralGrid mouseX={parallax.x} mouseY={parallax.y} intensity={neuralIntensity} />
      <div className={`absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full blur-[250px] animate-nebula [animation-delay:4s] transition-colors duration-[2000ms] ${activeTab === 'roadmap' ? 'bg-purple-600/20' :
        activeTab === 'project' ? 'bg-indigo-600/20' :
          activeTab === 'mentor' ? 'bg-emerald-600/20' : 'bg-cyan-600/20'
        }`}></div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>

      {
        isAntigravity && (
          <AntigravityPortal
            onExit={() => setIsAntigravity(false)}
            xp={xp}
            activeModule={roadmap.find(m => m.status === 'CURRENT') || roadmap[0]}
            tasks={projectTasks}
            projectIdea={projectIdea}
          />
        )
      }

      {/* Floating Sidebar Toggle Button - Hide on mobile if menu open */}
      {!mobileMenuOpen && (
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className={`fixed top-1/2 -translate-y-1/2 z-[101] w-12 h-24 bg-slate-900/95 backdrop-blur-xl border border-white/20 hidden lg:flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-600/80 hover:border-indigo-500/50 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/30 ${sidebarCollapsed ? 'left-0 rounded-r-2xl border-l-0' : 'left-[288px] rounded-r-2xl border-l-0'}`}
          title={sidebarCollapsed ? 'Expand Sidebar' : 'Collapse Sidebar'}
        >
          <svg className={`w-6 h-6 transition-transform duration-300 ${sidebarCollapsed ? 'rotate-0' : 'rotate-180'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Sidebar Mobile & Desktop with unified state */}
      <div className={`fixed inset-y-0 left-0 z-[100] transform transition-transform duration-500 ease-in-out lg:translate-x-0 ${mobileMenuOpen ? 'translate-x-0 w-full lg:w-72' : '-translate-x-full lg:translate-x-0'} ${sidebarCollapsed && !mobileMenuOpen ? 'lg:-translate-x-full' : ''} ${deepWork && !mobileMenuOpen ? 'lg:w-20' : ''}`}>
        <Sidebar
          activeTab={activeTab}
          setActiveTab={(tab) => { setActiveTab(tab); setMobileMenuOpen(false); }}
          onLaunchAntigravity={() => { setIsAntigravity(true); setMobileMenuOpen(false); }}
          intensity={neuralIntensity}
          setIntensity={setNeuralIntensity}
          collapsed={sidebarCollapsed}
          deepWork={deepWork}
          setDeepWork={(v) => {
            setDeepWork(v);
            localStorage.setItem('odyssey_deep_work', v.toString());
          }}
        />
      </div>

      {
        mobileMenuOpen && (
          <div
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-[90] lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        )
      }

      {/* Tab Glitch Flash Overlay */}
      {isSurge && (
        <div className="fixed inset-0 z-[150] bg-white opacity-[0.03] pointer-events-none mix-blend-overlay animate-flicker"></div>
      )}

      <main className={`flex-1 min-w-0 relative h-screen flex flex-col overflow-hidden transition-all duration-500 ${sidebarCollapsed ? 'ml-0' : (deepWork ? 'lg:ml-20' : 'lg:ml-72')} ${isSurge ? 'animate-haptic' : ''}`}>
        {/* Cinematic Mastery Notification */}
        {showXpAlert && (
          <div className="fixed top-12 left-1/2 -translate-x-1/2 z-[110] px-10 py-5 bg-indigo-600/30 backdrop-blur-3xl rounded-[32px] shadow-[0_20px_60px_rgba(79,70,229,0.4)] border border-white/20 animate-in fade-in slide-in-from-top-full duration-700 ease-out">
            <div className="flex items-center space-x-4 text-white">
              <div className="w-10 h-10 bg-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/50">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-300">Sync Success</p>
                <p className="text-sm font-black tracking-widest">+500 MASTERY XP ACCUMULATED</p>
              </div>
            </div>
          </div>
        )}

        <header className={`h-24 shrink-0 border-b border-white/5 flex items-center justify-between px-6 lg:px-12 bg-slate-950/40 backdrop-blur-3xl z-50 transition-all duration-700 ${deepWork ? 'opacity-0 h-0 overflow-hidden pointer-events-none' : 'opacity-100'}`}>
          <div className="flex items-center space-x-4 lg:space-x-6">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-white premium-glass rounded-xl"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
            </button>
            <div className="flex items-baseline space-x-2 lg:space-x-3">
              <span className="premium-gradient-text text-[10px] lg:text-sm tracking-[0.2em] transform-gpu hover:scale-105 transition-transform">ODYSSEY_PLATFORM</span>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest opacity-40">v2.5.0</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-white/10"></div>
            <h4 className="hidden lg:block text-white text-[10px] font-black uppercase tracking-[0.4em] opacity-80">{activeTab}</h4>
          </div>

          <div className="flex items-center space-x-4 lg:space-x-12">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest opacity-60">Global Ranking</span>
              <span className="text-sm font-black text-indigo-400 tracking-tighter">SCHOLAR TIER [IV]</span>
            </div>
            <div className="px-4 lg:px-6 py-2.5 lg:py-3 premium-glass rounded-[24px] lg:rounded-[28px] flex items-center space-x-4 lg:space-x-6 shadow-2xl backdrop-blur-xl group cursor-pointer hover:border-indigo-500/30 transition-all duration-300">
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest leading-none mb-1">Total Progress</span>
                <span className="text-lg lg:text-xl font-black text-white tracking-tighter transition-transform group-hover:scale-105">{xp.toLocaleString()} <span className="text-[10px] lg:text-xs text-indigo-400 ml-1">XP</span></span>
              </div>
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl bg-indigo-500 flex items-center justify-center text-white shadow-[0_0_20px_rgba(99,102,241,0.5)] group-hover:shadow-[0_0_30px_rgba(99,102,241,0.8)] transition-all">
                <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
            </div>
          </div>
        </header>

        <div key={activeTab} className={`flex-1 min-h-0 relative overflow-hidden animate-in fade-in slide-in-from-right-4 duration-700 ease-out managed-container ${deepWork ? 'max-w-none' : ''}`}>
          {renderContent()}
        </div>
      </main>

      {/* Neural Handshake Splash Screen */}
      {
        onboarding && (
          <div className="fixed inset-0 z-[200] bg-slate-950 flex flex-col items-center justify-center p-12 overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="relative z-10 space-y-12 text-center max-w-4xl">
              <div className={`w-32 h-32 bg-indigo-500 rounded-[40px] flex items-center justify-center text-white shadow-[0_0_80px_rgba(99,102,241,0.6)] mx-auto transition-all duration-1000 ${onboardingStage >= 1 ? 'scale-100 rotate-0' : 'scale-0 rotate-180'}`}>
                <svg className="w-16 h-16 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>

              <div className="space-y-6">
                <h2 className="text-5xl lg:text-7xl font-black text-white tracking-tighter uppercase italic overflow-hidden">
                  <span className={`block transition-all duration-700 ${onboardingStage >= 1 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>NEURAL_HANDSHAKE</span>
                </h2>
                <div className="flex flex-col items-center space-y-4">
                  <div className={`h-1 bg-indigo-500/20 rounded-full w-64 lg:w-96 transition-all duration-[3000ms] ease-out ${onboardingStage >= 1 ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="h-full bg-indigo-500 rounded-full transition-all duration-[5000ms]" style={{ width: onboardingStage === 1 ? '30%' : onboardingStage === 2 ? '70%' : onboardingStage >= 3 ? '100%' : '0%' }}></div>
                  </div>
                  <div className="font-mono text-[10px] text-indigo-400/60 uppercase tracking-[0.4em] font-black h-4 overflow-hidden">
                    <span className={`block transition-all duration-300 ${onboardingStage === 1 ? 'translate-y-0' : '-translate-y-full'}`}>Establishing secure uplink...</span>
                    <span className={`block transition-all duration-300 ${onboardingStage === 2 ? 'translate-y-0' : '-translate-y-full'}`}>Synchronizing cognitive layers...</span>
                    <span className={`block transition-all duration-300 ${onboardingStage === 3 ? 'translate-y-0' : '-translate-y-full'}`}>Connection stabilized. Welcome, Architect.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 to-transparent pointer-events-none"></div>
          </div>
        )
      }

      {/* Neural Interface SVG Filters */}
      <svg className="hidden">
        <filter id="neural-lens">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={neuralIntensity / 10} />
        </filter>
        <filter id="pulse-displacement">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="1" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={isSurge ? "15" : "0"} />
        </filter>
      </svg>

      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        modules={roadmap}
        tasks={projectTasks}
        onSelectAction={(id, type, metadata) => {
          if (type === 'navigation') {
            if (id === 'antigravity') setIsAntigravity(true);
            else setActiveTab(id as any);
          } else if (type === 'roadmap') {
            setActiveTab('roadmap');
            if (metadata?.moduleId) setSelectedModuleId(metadata.moduleId);
            if (metadata?.day) setSelectedDayNumber(metadata.day);
          }
        }}
      />

      <HUDCursor />

      {/* Synaptic Overlay Protocol */}
      {synapticActive && (
        <div className="fixed inset-0 z-[300] pointer-events-none bg-indigo-500/5 backdrop-blur-[2px] animate-pulse">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-px bg-indigo-500/30 scale-x-0 animate-in slide-in-from-left duration-1000"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
