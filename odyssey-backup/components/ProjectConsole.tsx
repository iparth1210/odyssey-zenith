
import React, { useState, useEffect, useRef } from 'react';
import { ProjectTask } from '../types';
import { generateProjectTasks, generateProjectBlueprint } from '../services/geminiService';

interface ProjectConsoleProps {
  projectIdea: string;
  setProjectIdea: (idea: string) => void;
  tasks: ProjectTask[];
  setTasks: (tasks: ProjectTask[]) => void;
}

type BlueprintStyle = 'blueprint' | 'neon' | 'minimalist' | 'cyberpunk';

const ProjectConsole: React.FC<ProjectConsoleProps> = ({ projectIdea, setProjectIdea, tasks, setTasks }) => {
  const [loading, setLoading] = useState(false);
  const [regenerating, setRegenerating] = useState(false);
  const [newIdea, setNewIdea] = useState(projectIdea);
  const [blueprintUrl, setBlueprintUrl] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<BlueprintStyle>('blueprint');
  const [logs, setLogs] = useState<{ id: string; text: string; type: 'info' | 'warn' | 'success' }[]>([]);
  const logEndRef = useRef<HTMLDivElement>(null);

  const styles: { id: BlueprintStyle; label: string }[] = [
    { id: 'blueprint', label: 'Classic Blueprint' },
    { id: 'neon', label: 'Neon Hologram' },
    { id: 'minimalist', label: 'Zen Architecture' },
    { id: 'cyberpunk', label: 'Cyber Deck' },
  ];

  const handleGenerate = async () => {
    if (!newIdea) return;
    setLoading(true);
    addLog(`Initializing Project Matrix in ${selectedStyle.toUpperCase()} mode...`, "info");
    try {
      setProjectIdea(newIdea);
      addLog("Analyzing architectural constraints...", "info");
      
      const [generatedTasks, blueprint] = await Promise.all([
        generateProjectTasks(newIdea, 1),
        generateProjectBlueprint(newIdea, selectedStyle)
      ]);
      
      setTasks(generatedTasks);
      setBlueprintUrl(blueprint);
      addLog("Masterpiece Schema Generated.", "success");
      addLog("Visual Blueprint Synchronized.", "success");
    } catch (e) {
      addLog("System Crash during generation.", "warn");
    } finally {
      setLoading(false);
    }
  };

  const handleRegenerateBlueprint = async () => {
    if (!projectIdea) return;
    setRegenerating(true);
    addLog(`Recalibrating visual output using ${selectedStyle.toUpperCase()} parameters...`, "info");
    try {
      const blueprint = await generateProjectBlueprint(projectIdea, selectedStyle);
      setBlueprintUrl(blueprint);
      addLog("Visual Blueprint Refresh Complete.", "success");
    } catch (e) {
      addLog("Blueprint refresh failed.", "warn");
    } finally {
      setRegenerating(false);
    }
  };

  const addLog = (text: string, type: 'info' | 'warn' | 'success') => {
    setLogs(prev => [...prev.slice(-20), { id: Math.random().toString(), text, type }]);
  };

  useEffect(() => {
    if (logEndRef.current) logEndRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  useEffect(() => {
    if (projectIdea) {
      const interval = setInterval(() => {
        const phrases = [
          "Optimizing data ingestion layer...",
          "Checking architectural entropy...",
          "Securing ingress points...",
          "Validating schema relationships...",
          "Scaling visual primitives..."
        ];
        addLog(phrases[Math.floor(Math.random() * phrases.length)], 'info');
      }, 15000);
      return () => clearInterval(interval);
    }
  }, [projectIdea]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    addLog(`Task update: ${id.slice(0, 4)} state modified.`, 'success');
  };

  return (
    <div className="max-w-[1600px] mx-auto px-8 lg:px-16 py-12 flex flex-col min-h-full">
      <header className="mb-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 border-b border-white/5 pb-12">
        <div className="space-y-6">
          <div className="inline-flex items-center space-x-3 px-5 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black uppercase tracking-[0.4em]">
            <span className="w-2.5 h-2.5 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_12px_indigo]"></span>
            <span>Architectural Command Center</span>
          </div>
          <h2 className="text-6xl lg:text-7xl font-black text-white tracking-tighter leading-none">
            The Masterpiece<span className="text-indigo-500">_</span>
          </h2>
          <p className="text-slate-400 text-xl max-w-2xl font-medium leading-relaxed">
            Manifesting your vision into silicon reality. This is where theory meets raw execution.
          </p>
        </div>

        {projectIdea && tasks.length > 0 && (
          <div className="flex space-x-8 bg-slate-900/40 p-6 rounded-[32px] border border-white/10 backdrop-blur-3xl shadow-3xl">
            <div className="text-center">
              <span className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Status</span>
              <span className="text-2xl font-black text-emerald-400">ACTIVE</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="text-center">
              <span className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Backlog</span>
              <span className="text-2xl font-black text-white">{tasks.length}</span>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div className="text-center">
              <span className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1">Sync</span>
              <span className="text-2xl font-black text-indigo-400">{Math.round((tasks.filter(t => t.completed).length / tasks.length) * 100)}%</span>
            </div>
          </div>
        )}
      </header>

      {!projectIdea ? (
        <div className="flex-1 flex items-center justify-center p-12">
           <div className="max-w-4xl w-full bg-slate-950/50 border border-white/10 rounded-[64px] p-16 lg:p-24 space-y-12 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5"></div>
              <div className="relative z-10 space-y-10">
                 <div className="w-24 h-24 bg-white rounded-[40px] flex items-center justify-center text-slate-950 mx-auto shadow-4xl transform group-hover:rotate-12 transition-all duration-1000">
                    <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
                 </div>
                 <div className="space-y-4">
                    <h3 className="text-5xl font-black text-white tracking-tighter">Initialize System Intent</h3>
                    <p className="text-xl text-slate-400 font-medium leading-relaxed max-w-2xl mx-auto">What world-class platform are we building during this odyssey? Describe the core vision below.</p>
                 </div>
                 <div className="space-y-8">
                    <textarea
                      className="w-full bg-black/40 border-2 border-white/5 rounded-[40px] p-10 text-white text-2xl font-bold focus:ring-8 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all h-56 placeholder:text-slate-700 shadow-inner"
                      placeholder="e.g., A real-time collaborative IDE with integrated hardware simulations..."
                      value={newIdea}
                      onChange={(e) => setNewIdea(e.target.value)}
                    />
                    
                    <div className="space-y-4">
                       <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">Architectural Style Preset</h4>
                       <div className="flex flex-wrap justify-center gap-3">
                          {styles.map(s => (
                            <button
                              key={s.id}
                              onClick={() => setSelectedStyle(s.id)}
                              className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all border ${
                                selectedStyle === s.id 
                                ? 'bg-indigo-500 border-indigo-400 text-white shadow-lg' 
                                : 'bg-white/5 border-white/10 text-slate-500 hover:text-slate-300 hover:border-white/20'
                              }`}
                            >
                              {s.label}
                            </button>
                          ))}
                       </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6">
                      <button
                        onClick={handleGenerate}
                        disabled={loading || !newIdea.trim()}
                        className="flex-1 bg-white text-slate-950 font-black py-8 px-12 rounded-[32px] text-lg uppercase tracking-widest disabled:opacity-30 hover:bg-indigo-400 hover:text-white transition-all shadow-4xl hover:-translate-y-2 active:translate-y-0"
                      >
                        {loading ? 'CALCULATING ARCHITECTURE...' : 'GENERATE SYSTEM SCHEMA'}
                      </button>
                      
                      <button
                        onClick={() => setSelectedStyle(prev => {
                          const idx = styles.findIndex(s => s.id === prev);
                          return styles[(idx + 1) % styles.length].id;
                        })}
                        className="px-12 bg-white/5 border border-white/10 text-white font-black py-8 rounded-[32px] text-lg uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center"
                        title="Rotate Visual Style"
                      >
                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                      </button>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 flex-1 pb-32">
          {/* Main Workspace */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* AI Generated Blueprint */}
            <div className="bg-slate-900/30 border border-white/5 rounded-[60px] p-12 lg:p-16 space-y-12 shadow-4xl relative overflow-hidden group">
               <div className="flex items-center justify-between">
                  <div className="space-y-1">
                     <h4 className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em]">Visual Architectural Blueprint</h4>
                     <p className="text-2xl font-black text-white tracking-tight">System Conceptual Concept • {selectedStyle.toUpperCase()}</p>
                  </div>
                  <button 
                    onClick={handleRegenerateBlueprint}
                    disabled={regenerating}
                    className="flex items-center space-x-3 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full text-[9px] font-black text-white uppercase tracking-widest hover:bg-white/10 transition-all active:scale-95 disabled:opacity-50"
                  >
                    {regenerating ? (
                      <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    )}
                    <span>{regenerating ? 'RECALIBRATING...' : 'REGENERATE BLUEPRINT'}</span>
                  </button>
               </div>
               
               <div className="relative aspect-video rounded-[48px] overflow-hidden shadow-inner border border-white/5 bg-black/40 flex items-center justify-center">
                  {blueprintUrl ? (
                    <img key={blueprintUrl} src={blueprintUrl} className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-1000" alt="Project Blueprint" />
                  ) : (
                    <div className="text-center space-y-4">
                       <div className="w-10 h-10 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mx-auto"></div>
                       <p className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Rendering Blueprint...</p>
                    </div>
                  )}
                  {regenerating && (
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10 animate-in fade-in duration-300">
                       <div className="text-center space-y-4">
                          <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                          <p className="text-[11px] font-black text-white uppercase tracking-[0.5em]">Rerendering Vision...</p>
                       </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
               </div>
               
               {/* Style selector for regeneration */}
               <div className="pt-4 flex items-center space-x-6">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Switch Style:</span>
                  <div className="flex gap-2">
                     {styles.map(s => (
                       <button
                         key={s.id}
                         onClick={() => setSelectedStyle(s.id)}
                         className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase tracking-widest transition-all ${
                           selectedStyle === s.id 
                           ? 'bg-indigo-500 text-white shadow-md' 
                           : 'bg-white/5 text-slate-500 hover:text-slate-300'
                         }`}
                       >
                         {s.label}
                       </button>
                     ))}
                  </div>
               </div>
            </div>

            {/* Backlog Grid */}
            <div className="space-y-10">
              <header className="flex items-center justify-between px-4">
                 <h4 className="text-[11px] font-black text-slate-600 uppercase tracking-[0.5em]">Active Sprint Matrix</h4>
                 <div className="text-[9px] font-black text-slate-500 uppercase tracking-widest">Updated 2m ago</div>
              </header>
              <div className="grid grid-cols-1 gap-6">
                {tasks.map((task) => (
                  <button 
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`p-10 rounded-[48px] border-2 transition-all duration-500 text-left relative group overflow-hidden ${
                      task.completed 
                      ? 'bg-emerald-500/5 border-emerald-500/20 opacity-40 grayscale scale-[0.98]' 
                      : 'bg-slate-900/40 border-white/5 hover:border-indigo-500/40 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-start space-x-10 relative z-10">
                      <div className={`mt-2 w-12 h-12 rounded-[18px] border-2 flex items-center justify-center transition-all ${
                        task.completed ? 'bg-emerald-500 border-emerald-500 rotate-12' : 'border-slate-800 group-hover:border-indigo-500'
                      }`}>
                        {task.completed && <svg className="w-8 h-8 text-slate-950" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" /></svg>}
                      </div>
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center justify-between">
                           <h5 className={`text-2xl font-black tracking-tight ${task.completed ? 'text-slate-500 line-through' : 'text-white'}`}>{task.title}</h5>
                           <span className="text-[10px] font-black uppercase text-slate-500">{task.category}</span>
                        </div>
                        <p className="text-xl text-slate-400 font-medium leading-relaxed italic">"{task.description}"</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Terminal Sidebar */}
          <div className="lg:col-span-4 space-y-12">
            <div className="bg-slate-950/80 border border-white/10 rounded-[64px] p-12 h-[800px] flex flex-col shadow-4xl backdrop-blur-3xl relative overflow-hidden">
               <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-0 pointer-events-none bg-[length:100%_4px,3px_100%]"></div>
               
               <header className="flex items-center justify-between mb-10 relative z-10">
                  <div className="flex items-center space-x-4">
                     <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse"></div>
                     <h4 className="text-[11px] font-black text-indigo-400 uppercase tracking-[0.4em]">Live Kernel Log</h4>
                  </div>
                  <span className="text-[9px] font-mono text-slate-700">STABLE</span>
               </header>

               <div className="flex-1 font-mono text-xs space-y-4 overflow-y-auto scrollbar-hide relative z-10">
                  {logs.map((log) => (
                    <div key={log.id} className={`flex space-x-4 animate-in slide-in-from-bottom-2 duration-300 ${
                      log.type === 'success' ? 'text-emerald-400' : log.type === 'warn' ? 'text-rose-400' : 'text-slate-500'
                    }`}>
                      <span className="opacity-20">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                      <p className="flex-1 leading-relaxed">{log.text}</p>
                    </div>
                  ))}
                  <div ref={logEndRef} />
               </div>

               <div className="mt-10 pt-10 border-t border-white/5 space-y-10 relative z-10">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                       <span className="text-slate-600">Memory Integrity</span>
                       <span className="text-emerald-400">98.4%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                       <div className="h-full bg-indigo-500 shadow-[0_0_15px_indigo]" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  <button 
                    onClick={() => { setProjectIdea(''); setBlueprintUrl(null); }}
                    className="w-full py-5 border border-rose-500/20 text-rose-500/60 rounded-[28px] text-[10px] font-black uppercase tracking-[0.3em] hover:bg-rose-500 hover:text-white transition-all"
                  >
                    TERMINATE PROTOCOL
                  </button>
               </div>
            </div>

            <div className="p-12 bg-indigo-600 rounded-[60px] text-white shadow-3xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-gradient-to-br from-indigo-700 to-purple-800 opacity-60"></div>
               <div className="relative z-10 space-y-6">
                  <div className="flex items-center space-x-4 mb-2">
                     <div className="w-10 h-10 bg-white/10 rounded-2xl flex items-center justify-center">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                     </div>
                     <h5 className="text-xl font-black tracking-tight uppercase">AI ARCHITECT</h5>
                  </div>
                  <p className="text-lg text-white/90 font-medium leading-relaxed italic">
                    "Your vision suggests a decoupled architecture. We recommend prioritizing the REST interface and state management before scaling the visual layer."
                  </p>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectConsole;
