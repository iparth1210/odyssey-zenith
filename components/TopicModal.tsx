
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Topic, SubTopic, JurisdictionalNode } from '../types';
import OracleChat from './OracleChat';
import MediaRenderer from './MediaRenderer';

const MatrixRow: React.FC<{ node: JurisdictionalNode }> = ({ node }) => (
  <div className="grid grid-cols-5 gap-4 lg:gap-6 p-6 lg:p-8 border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-all">
    <div className="text-base lg:text-lg font-bold text-white uppercase tracking-tighter truncate">{node.nation}</div>
    <div className="text-lg lg:text-xl font-mono text-accent font-bold">{node.taxRate}</div>
    <div className="text-xs lg:text-sm text-slate-400 font-light italic truncate">{node.assetProtection}</div>
    <div className={`text-[10px] lg:text-[11px] font-black uppercase tracking-widest ${node.sovereignRisk === 'Low' ? 'text-green-500' : 'text-yellow-500'}`}>
      {node.sovereignRisk} RISK
    </div>
    <div className="text-[10px] lg:text-[11px] text-slate-500 font-mono tracking-tighter truncate">{node.keyAdvantage}</div>
  </div>
);

const SubTopicModule: React.FC<{ sub: SubTopic }> = ({ sub }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const win = window as any;
    if (win.renderMathInElement && containerRef.current) {
        try {
          win.renderMathInElement(containerRef.current, {
              delimiters: [
                  {left: '$$', right: '$$', display: true},
                  {left: '$', right: '$', display: false}
              ],
              throwOnError: false
          });
        } catch (e) {
          console.warn("KaTeX error:", e);
        }
    }
  }, [sub.technicalBriefing]);

  return (
    <div ref={containerRef} className="p-8 lg:p-14 glass-terminal rounded-[40px] lg:rounded-[48px] border-white/10 space-y-10 lg:space-y-12 relative overflow-hidden group">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
        <h3 className="text-3xl lg:text-5xl font-black text-white tracking-tighter uppercase font-display">{sub.title}</h3>
        {sub.academicTier && (
          <div className="self-start sm:self-center px-4 py-1.5 bg-accent/10 border border-accent/30 rounded-full text-[10px] font-black text-accent uppercase tracking-widest select-none">
            {sub.academicTier}
          </div>
        )}
      </div>

      {sub.jurisdictionalMatrix ? (
        <div className="border border-white/10 rounded-[24px] overflow-hidden bg-black/50 shadow-inner overflow-x-auto custom-scrollbar">
           <div className="min-w-[600px]">
             <div className="grid grid-cols-5 gap-4 lg:gap-6 p-4 bg-white/5 text-[9px] font-black text-slate-500 uppercase tracking-widest border-b border-white/5">
                <span>Jurisdiction</span><span>Rate</span><span>Protection</span><span>Risk</span><span>Advantage</span>
             </div>
             {sub.jurisdictionalMatrix.map((node, i) => <MatrixRow key={i} node={node} />)}
           </div>
        </div>
      ) : (
        <MediaRenderer title={sub.title} imagePrompt={sub.imagePrompt} videoId={sub.explainerVideoId} />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
        <div className="space-y-3">
          <span className="text-[9px] font-black text-white/30 uppercase tracking-[0.5em] block">Sovereign Intuition</span>
          <p className="text-lg lg:text-xl text-slate-400 font-light italic leading-relaxed tracking-tight border-l-2 border-accent/20 pl-6 lg:pl-8 whitespace-pre-wrap">{sub.streetExplanation}</p>
        </div>
        <div className="space-y-3">
          <span className="text-[9px] font-black text-accent uppercase tracking-[0.5em] block">Institutional Architecture</span>
          <p className="text-lg lg:text-xl text-white font-medium leading-relaxed tracking-tight whitespace-pre-wrap">{sub.boardroomExplanation}</p>
        </div>
      </div>

      {sub.technicalBriefing && (
        <div className="p-8 rounded-[32px] bg-black/70 border border-accent/20 font-mono text-center shadow-xl relative z-10 overflow-x-auto custom-scrollbar">
          <span className="text-[9px] font-black text-accent uppercase tracking-[0.6em] block mb-4">Quantitative Proof</span>
          <div className="math-container text-lg lg:text-2xl whitespace-nowrap">{sub.technicalBriefing}</div>
        </div>
      )}

      {sub.vocabulary && sub.vocabulary.length > 0 && (
        <div className="space-y-4 relative z-10 border-t border-white/5 pt-8">
          <span className="text-[9px] font-black text-accent uppercase tracking-[0.5em] block">Sovereign Glossary</span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sub.vocabulary.map((vocab, i) => (
              <div key={i} className="p-6 rounded-[28px] bg-white/[0.02] border border-white/5 space-y-3 hover:border-accent/30 transition-all duration-300">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-base font-bold text-white font-mono">{vocab.word}</span>
                  <span className="text-[8px] font-black uppercase text-accent/50 tracking-widest bg-accent/5 px-2 py-0.5 rounded-full border border-accent/10">Term</span>
                </div>
                <div className="text-xs text-slate-400 italic font-light">
                  <strong className="text-[10px] text-white/40 uppercase tracking-wider not-italic mr-1">Analogy:</strong>
                  {vocab.streetAnalogy}
                </div>
                <div className="text-xs text-slate-300 font-light">
                  <strong className="text-[10px] text-accent/60 uppercase tracking-wider mr-1">Institutional:</strong>
                  {vocab.boardroomDefinition}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {sub.resources && sub.resources.length > 0 && (
        <div className="space-y-4 relative z-10 border-t border-white/5 pt-8">
          <span className="text-[9px] font-black text-accent uppercase tracking-[0.5em] block">Sovereign Reference Nodes</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {sub.resources.map((res, i) => (
              <a 
                key={i} 
                href={res.url} 
                target="_blank" 
                rel="noreferrer" 
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/5 flex items-center justify-between text-xs text-slate-300 hover:text-white transition-all group animate-fade-in"
              >
                <div className="flex flex-col min-w-0">
                  <span className="font-bold truncate pr-4 text-white group-hover:text-accent transition-colors">{res.title}</span>
                  <span className="text-[9px] text-slate-500 uppercase mt-1">{res.type}</span>
                </div>
                <span className="text-[8px] font-black uppercase text-accent/50 group-hover:text-accent shrink-0 border border-accent/20 px-3 py-1 rounded bg-accent/5">{res.provider || 'LINK'}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      {sub.executionBlueprint && (
        <div className="space-y-6 relative z-10 border-t border-white/5 pt-8">
          <span className="text-[9px] font-black text-accent uppercase tracking-[0.5em] block">Sovereign Execution Directive</span>
          <div className="p-6 lg:p-10 rounded-[32px] bg-white/[0.01] border border-white/10 space-y-8 shadow-inner">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="text-[10px] font-black text-accent/60 uppercase tracking-widest block font-mono">1. Monetization Pathway (How to Earn)</span>
                <p className="text-sm text-slate-300 font-light leading-relaxed whitespace-pre-wrap">{sub.executionBlueprint.monetization}</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black text-accent/60 uppercase tracking-widest block font-mono">2. Strategic Target & Selection (What to Buy)</span>
                <p className="text-sm text-slate-300 font-light leading-relaxed whitespace-pre-wrap">{sub.executionBlueprint.whatToBuy}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 pt-6">
              <div className="space-y-2">
                <span className="text-[10px] font-black text-accent/60 uppercase tracking-widest block font-mono">3. Tactical Routing (How to Buy)</span>
                <p className="text-sm text-slate-300 font-light leading-relaxed whitespace-pre-wrap">{sub.executionBlueprint.howToBuy}</p>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black text-accent/60 uppercase tracking-widest block font-mono">4. Entry/Exit Timing Matrix (When to Buy)</span>
                <p className="text-sm text-slate-300 font-light leading-relaxed whitespace-pre-wrap">{sub.executionBlueprint.whenToBuy}</p>
              </div>
            </div>

            <div className="space-y-3 border-t border-white/5 pt-6">
              <span className="text-[10px] font-black text-accent/60 uppercase tracking-widest block font-mono">5. Operative Checklist (Before & After Protocols)</span>
              <p className="text-sm text-slate-300 font-light leading-relaxed whitespace-pre-wrap">{sub.executionBlueprint.beforeAndAfterChecklist}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 pt-6">
              <div className="space-y-3">
                <span className="text-[10px] font-black text-accent/60 uppercase tracking-widest block font-mono">6. Approved Intelligence Platforms</span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {sub.executionBlueprint.platforms.map((platform, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] text-white font-mono uppercase tracking-wider">{platform}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <span className="text-[10px] font-black text-accent/60 uppercase tracking-widest block font-mono">7. Live Real-World Case Brief</span>
                <p className="text-sm text-slate-300 font-light leading-relaxed whitespace-pre-wrap">{sub.executionBlueprint.realWorldExample}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const TopicModal: React.FC<{ topic: Topic, onClose: () => void, onComplete: () => void, isCompleted: boolean, gpa: number }> = ({ topic, onClose, onComplete, isCompleted }) => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[1000] bg-[#050A10]/95 backdrop-blur-3xl flex items-center justify-center p-4 lg:p-8">
      <motion.div initial={{ scale: 0.97, y: 40, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} transition={{ type: 'spring', damping: 25, stiffness: 150 }} className="w-full h-full glass-terminal rounded-[40px] lg:rounded-[56px] flex flex-col overflow-hidden border-[#D4AF37]/25">
        <header className="px-6 lg:px-14 py-6 lg:py-8 border-b border-white/5 flex items-center justify-between shrink-0 bg-[#0A0F15]/80 z-20 backdrop-blur-md">
          <div className="flex items-center gap-6 min-w-0 flex-1">
            <span className="text-3xl lg:text-5xl shrink-0">{topic.category === 'SOVEREIGN' ? '💎' : '📊'}</span>
            <div className="min-w-0">
              <span className="text-[8px] lg:text-[9px] font-black text-accent uppercase tracking-[0.6em] block mb-1">Terminal Node</span>
              <h2 className="text-2xl lg:text-4xl font-black text-white tracking-tighter uppercase leading-tight font-display truncate">{topic.title}</h2>
            </div>
          </div>
          <button onClick={onClose} className="w-10 h-10 lg:w-14 lg:h-14 rounded-xl bg-white/5 hover:bg-white/15 flex items-center justify-center text-2xl text-white/40 transition-all border border-white/10 shrink-0">\u2715</button>
        </header>

        <div className="flex-1 flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden">
          <main className="flex-1 lg:overflow-y-auto p-6 lg:p-14 custom-scrollbar space-y-12 bg-gradient-to-b from-transparent to-[#050A10]/30">
            <div className="max-w-5xl mx-auto space-y-12">
                <section className="p-8 rounded-[40px] bg-white/[0.02] border border-white/5 space-y-6 relative overflow-hidden">
                  <span className="text-[10px] font-black text-accent uppercase tracking-[0.7em] block">Mission Directive</span>
                  <p className="text-3xl lg:text-5xl text-white font-light tracking-tighter italic font-display">"{topic.missionStrategy}"</p>
                  <p className="text-base lg:text-lg text-slate-400 font-light leading-relaxed">{topic.description}</p>
                </section>
                <div className="space-y-12 pb-16">
                  {topic.subTopics.map((sub, i) => <SubTopicModule key={i} sub={sub} />)}
                </div>
            </div>
          </main>
          <aside className="w-full lg:w-[30rem] border-t lg:border-t-0 lg:border-l border-white/10 bg-[#0A0F15]/60 flex flex-col p-6 lg:p-10 gap-8 lg:shrink-0 lg:overflow-y-auto custom-scrollbar">
            <div className="flex-1 glass-terminal rounded-[24px] border-white/5 p-6 shadow-inner relative flex flex-col min-h-[350px]">
              <OracleChat currentTopic={topic.title} />
            </div>
            <div className="space-y-6 mt-auto">
                <div className="p-6 glass-terminal rounded-[24px] border-white/5 space-y-4">
                  <span className="text-[9px] font-black text-accent uppercase tracking-[0.45em] block">Data Sync Resources</span>
                  <div className="space-y-3">
                    {topic.resources.map((res, i) => (
                      <a key={i} href={res.url} target="_blank" rel="noreferrer" className="flex items-center justify-between text-xs text-slate-400 hover:text-white transition-all hover:translate-x-1 group">
                        <span className="font-semibold truncate pr-4">{res.title}</span>
                        <span className="text-[8px] font-black uppercase text-accent/50 group-hover:text-accent shrink-0">{res.provider || 'LINK'}</span>
                      </a>
                    ))}
                  </div>
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }} 
                  onClick={() => { onComplete(); onClose(); }} 
                  className={`w-full py-6 rounded-[24px] font-black text-lg uppercase tracking-[0.5em] transition-all shadow-xl ${isCompleted ? 'bg-white/5 text-white/30 cursor-default' : 'bg-accent text-[#050A10] shadow-[0_20px_40px_rgba(212,175,55,0.2)]'}`}
                  disabled={isCompleted}
                >
                  {isCompleted ? 'NODE VERIFIED' : 'SYNCHRONIZE'}
                </motion.button>
            </div>
          </aside>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TopicModal;
