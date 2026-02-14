
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { RoadmapModule, ModuleStatus, Resource, DailyTask } from '../types';
import { getVoiceBriefing } from '../services/geminiService';
import { useTilt3D } from '../hooks/useTilt3D';

interface RoadmapProps {
  modules: RoadmapModule[];
  setRoadmap: (roadmap: RoadmapModule[]) => void;
  selectedModuleId: string | null;
  setSelectedModuleId: (id: string | null) => void;
  selectedDayNumber: number;
  setSelectedDayNumber: (day: number) => void;
  completedDays: Record<string, number[]>;
  setCompletedDays: React.Dispatch<React.SetStateAction<Record<string, number[]>>>;
  onComplete?: (xp: number) => void;
}

const TiltResourceCard: React.FC<{ res: Resource, onClick: () => void }> = ({ res, onClick }) => {
  const { elementRef, tiltStyle, glareStyle, shadowStyle, handlers } = useTilt3D({
    maxTilt: 10,
    perspective: 1000,
    scale: 1.05
  });

  return (
    <div ref={elementRef} {...handlers} style={{ ...tiltStyle, ...shadowStyle }} className="group relative">
      <button
        onClick={onClick}
        className="w-full group p-5 rounded-[32px] premium-glass border-white/5 hover:border-indigo-500/50 hover:bg-white/[0.05] transition-all duration-500 text-left shadow-lg relative overflow-hidden active:scale-95"
      >
        <div style={glareStyle} />
        {res.thumbnail && (
          <div className="relative aspect-video rounded-2xl overflow-hidden mb-5 shadow-xl bg-black border border-white/5 pointer-events-none">
            <img src={res.thumbnail} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2000ms] opacity-60 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-slate-950 shadow-[0_0_30px_rgba(255,255,255,0.5)] scale-90 group-hover:scale-100 transition-transform duration-500">
                <svg className="w-6 h-6 ml-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.333-5.89a1.5 1.5 0 000-2.538L6.3 2.841z" /></svg>
              </div>
            </div>
          </div>
        )}
        <div className="flex items-center justify-between mb-3 px-1 pointer-events-none">
          <span className="text-[9px] font-black text-indigo-400 uppercase tracking-widest">{res.type} <span className="text-slate-700 mx-1">/</span> {res.difficulty}</span>
          <div className="flex items-center space-x-1.5">
            <svg className="w-3 h-3 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <span className="text-[10px] font-mono text-slate-500 font-bold">{res.duration || '--'}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 px-1 pointer-events-none">
          <h5 className="text-lg font-black text-white group-hover:text-indigo-400 transition-colors leading-tight tracking-tight truncate flex-1">{res.label}</h5>
        </div>
      </button>
    </div>
  );
};

const Roadmap: React.FC<RoadmapProps> = ({
  modules,
  setRoadmap,
  selectedModuleId,
  setSelectedModuleId,
  selectedDayNumber,
  setSelectedDayNumber,
  completedDays,
  setCompletedDays,
  onComplete
}) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [activeMode, setActiveMode] = useState<'theory' | 'story' | 'usage' | 'quiz'>('theory');
  const [quizAnswer, setQuizAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isAudioLoading, setIsAudioLoading] = useState(false);
  const [shakeQuiz, setShakeQuiz] = useState(false);
  const [completing, setCompleting] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const getModuleProgress = (moduleId: string) => {
    const mod = modules.find(m => m.id === moduleId);
    if (!mod || !mod.dailySchedule) return 0;
    const completedCount = completedDays[moduleId]?.length || 0;
    return Math.round((completedCount / mod.dailySchedule.length) * 100);
  };

  const activeModule = useMemo(() =>
    modules.find(m => m.id === selectedModuleId) || modules[0],
    [selectedModuleId, modules]);

  const activeDay = useMemo(() => {
    if (!activeModule || !activeModule.dailySchedule || activeModule.dailySchedule.length === 0) {
      return null;
    }
    return activeModule.dailySchedule.find(d => d.day === selectedDayNumber) || activeModule.dailySchedule[0];
  }, [activeModule, selectedDayNumber]);

  const handleResourceClick = (res: Resource) => {
    if (res.type === 'video' && res.embedId) {
      setActiveVideo(res.embedId);
    } else {
      window.open(res.url, '_blank');
    }
  };

  const handleQuizSubmit = (idx: number) => {
    setQuizAnswer(idx);
    setShowExplanation(true);
    if (idx === activeDay?.quiz?.correctIndex) {
      if (onComplete) onComplete(500);
      if (selectedModuleId) {
        setCompletedDays(prev => ({
          ...prev,
          [selectedModuleId]: Array.from(new Set([...(prev[selectedModuleId] || []), selectedDayNumber]))
        }));
      }
    } else {
      setShakeQuiz(true);
      setTimeout(() => setShakeQuiz(false), 500);
    }
  };

  if (!activeModule) return null;

  return (
    <div className="flex h-full bg-slate-950/20 backdrop-blur-md font-['Outfit'] relative overflow-hidden">

      {/* THE PATH OF MASTERY (3D PERSPECTIVE) */}
      <div className={`flex-1 flex overflow-hidden bg-transparent transition-all duration-700 ${isNavOpen ? 'xl:pl-[280px] 2xl:pl-[320px]' : 'pl-0'}`}>
        <div className="path-container scrollbar-hide">
          <div className="path-3d-track">
            {modules.map((mod) => (
              <div
                key={mod.id}
                onClick={() => setSelectedModuleId(mod.id)}
                className={`mastery-card ${selectedModuleId === mod.id ? 'active' : ''} ${getModuleProgress(mod.id) === 100 ? 'completed' : ''}`}
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-black text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full uppercase tracking-widest">
                    Module {mod.month.toString().padStart(2, '0')}
                  </span>
                  <div className="text-[10px] font-mono text-slate-500">{getModuleProgress(mod.id)}% PROG</div>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">{mod.title}</h3>
                <p className="text-slate-400 text-sm mb-8 line-clamp-2">{mod.description}</p>

                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400" style={{ width: `${getModuleProgress(mod.id)}%` }}></div>
                </div>

                {selectedModuleId === mod.id && (
                  <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                    <button onClick={() => setIsNavOpen(true)} className="btn-neural text-xs py-2 px-6">ENTER_STREAM</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT ENGINE BLOCK (Shown when nav open) */}
      {isNavOpen && activeDay && (
        <div className="fixed inset-0 z-[60] bg-[#020617]/95 backdrop-blur-3xl p-16 overflow-y-auto scrollbar-hide animate-in fade-in zoom-in-95 duration-500">
          <button onClick={() => setIsNavOpen(false)} className="absolute top-12 right-12 text-white/40 hover:text-white p-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
          <div className="max-w-4xl mx-auto">
            <header className="mb-20">
              <span className="text-indigo-400 font-black tracking-widest text-[10px] uppercase">Stream {activeModule.month}.{selectedDayNumber}</span>
              <h1 className="text-6xl font-black text-white mt-4">{activeDay.title}</h1>
            </header>

            <div className="flex gap-4 mb-20">
              {['theory', 'story', 'usage', 'quiz'].map(mode => (
                <button
                  key={mode}
                  onClick={() => setActiveMode(mode as any)}
                  className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeMode === mode ? 'bg-indigo-500 text-white shadow-2xl' : 'text-slate-500 hover:text-white'}`}
                >
                  {mode}
                </button>
              ))}
            </div>

            <div className="min-h-[400px]">
              {activeMode === 'theory' && <p className="text-xl text-slate-300 leading-relaxed">{activeDay.conceptualWhy}</p>}
              {activeMode === 'quiz' && activeDay.quiz && (
                <div className="space-y-8">
                  <h3 className="text-3xl font-bold text-white">{activeDay.quiz.question}</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {activeDay.quiz.options.map((opt, i) => (
                      <button
                        key={opt}
                        onClick={() => handleQuizSubmit(i)}
                        className="p-6 rounded-3xl premium-glass border-white/10 text-left hover:bg-white/5 transition-all"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-32 p-12 bento-card-react border-white/5">
              <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-6">Neural Assets</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {activeDay.resources.map((res, i) => (
                  <TiltResourceCard key={i} res={res} onClick={() => handleResourceClick(res)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Roadmap;
