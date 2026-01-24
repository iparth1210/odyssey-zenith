
import React, { useEffect, useState } from 'react';

const HudCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });

            const target = e.target as HTMLElement;
            if (!target) return;

            // Enhanced detection for interactive elements including Recharts components
            const hoverable = target.closest?.('button, a, input, [role="button"], .recharts-sector, .recharts-dot, .recharts-rectangle, [style*="cursor: pointer"]');
            setIsHovering(!!hoverable);
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    return (
        <div
            className="fixed inset-0 pointer-events-none z-[9999] mix-blend-difference"
            style={{ left: 0, top: 0 }}
        >
            {/* Main Reticle */}
            <div
                className="absolute transition-transform duration-75 ease-out"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%) scale(${isHovering ? 1.5 : 1})`,
                }}
            >
                {/* Outer Ring */}
                <div className={`w-10 h-10 border-2 rounded-full transition-all duration-500 flex items-center justify-center ${isClicking ? 'border-indigo-400 scale-75' : 'border-indigo-400/30 scale-100'}`}>
                    <div className={`w-8 h-8 border border-white/5 rounded-full animate-spin-slow ${isHovering ? 'opacity-100' : 'opacity-0'}`}></div>
                </div>

                {/* Targeting Lines */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-px h-3 bg-indigo-400/60 transition-opacity ${isHovering ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-3 bg-indigo-400/60 transition-opacity ${isHovering ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-3 h-px bg-indigo-400/60 transition-opacity ${isHovering ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`absolute right-0 top-1/2 -translate-y-1/2 w-3 h-px bg-indigo-400/60 transition-opacity ${isHovering ? 'opacity-100' : 'opacity-0'}`}></div>

                {/* Coordinate Readout */}
                <div className="absolute top-12 left-12 font-mono text-[8px] text-indigo-400/60 whitespace-nowrap space-y-0.5 pointer-events-none">
                    <div className="flex items-center space-x-2">
                        <span className="opacity-40">X:</span>
                        <span>{Math.floor(position.x)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <span className="opacity-40">Y:</span>
                        <span>{Math.floor(position.y)}</span>
                    </div>
                    {isHovering && (
                        <div className="pt-1 text-emerald-400 animate-pulse uppercase tracking-widest">Target Locked</div>
                    )}
                </div>

                {/* Center Point */}
                <div className={`absolute inset-0 m-auto w-1 h-1 bg-white rounded-full transition-transform duration-300 ${isClicking ? 'scale-[3]' : 'scale-100'}`}></div>
            </div>

            {/* Trailing Glory */}
            <div
                className="absolute transition-transform duration-500 ease-out opacity-20"
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) translate(-50%, -50%)`,
                }}
            >
                <div className="w-16 h-16 border border-indigo-500/10 rounded-full animate-ping"></div>
            </div>
        </div>
    );
};

export default HudCursor;
