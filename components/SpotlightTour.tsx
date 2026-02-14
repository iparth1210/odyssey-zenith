
import React, { useState, useEffect } from 'react';

interface TourStep {
    target: string;
    title: string;
    description: string;
    position: 'top' | 'bottom' | 'left' | 'right';
}

interface SpotlightTourProps {
    steps: TourStep[];
    onComplete: () => void;
    active: boolean;
}

const SpotlightTour: React.FC<SpotlightTourProps> = ({ steps, onComplete, active }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [spotlightStyle, setSpotlightStyle] = useState<React.CSSProperties>({});

    useEffect(() => {
        if (!active) return;

        const step = steps[currentStep];
        const element = document.querySelector(step.target);

        if (element) {
            const rect = element.getBoundingClientRect();
            const padding = 12;

            setSpotlightStyle({
                top: rect.top - padding,
                left: rect.left - padding,
                width: rect.width + padding * 2,
                height: rect.height + padding * 2,
                borderRadius: '24px',
                boxShadow: '0 0 0 9999px rgba(2, 6, 23, 0.95), 0 0 40px rgba(99, 102, 241, 0.4)',
            });

            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [currentStep, active, steps]);

    if (!active) return null;

    const step = steps[currentStep];

    return (
        <div className="fixed inset-0 z-[1000] pointer-events-none">
            {/* Target Mask Hole */}
            <div
                className="fixed z-[1001] transition-all duration-500 ease-in-out border-2 border-indigo-500/50"
                style={spotlightStyle}
            />

            {/* Tooltip */}
            <div
                className="fixed z-[1002] pointer-events-auto transition-all duration-500 bg-slate-900 border border-white/10 rounded-[40px] p-10 shadow-4xl w-[400px]"
                style={{
                    top: spotlightStyle.top ? (Number(spotlightStyle.top) + Number(spotlightStyle.height) + 24) : '50%',
                    left: spotlightStyle.left ? (Number(spotlightStyle.left) + Number(spotlightStyle.width) / 2 - 200) : '50%',
                    transform: !spotlightStyle.top ? 'translate(-50%, -50%)' : 'none',
                }}
            >
                <div className="space-y-6">
                    <header className="flex items-center justify-between">
                        <span className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.4em]">Tutorial Mode</span>
                        <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{currentStep + 1} / {steps.length}</span>
                    </header>

                    <div className="space-y-3">
                        <h3 className="text-3xl font-black text-white tracking-tighter uppercase">{step.title}</h3>
                        <p className="text-slate-400 text-lg font-medium leading-relaxed italic opacity-80">{step.description}</p>
                    </div>

                    <div className="flex justify-between pt-4">
                        <button
                            onClick={onComplete}
                            className="text-[10px] font-black text-slate-500 uppercase tracking-widest hover:text-white transition-all"
                        >
                            Skip Odyssey
                        </button>
                        <button
                            onClick={() => {
                                if (currentStep < steps.length - 1) {
                                    setCurrentStep(prev => prev + 1);
                                } else {
                                    onComplete();
                                }
                            }}
                            className="px-8 py-3 bg-indigo-500 rounded-full text-white text-[11px] font-black uppercase tracking-widest shadow-xl shadow-indigo-500/30 hover:scale-105 active:scale-95 transition-all"
                        >
                            {currentStep === steps.length - 1 ? 'Begin Your Journey' : 'System Sync Next'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpotlightTour;
