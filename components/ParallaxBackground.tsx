import React, { useState, useEffect } from 'react';

interface ParallaxBackgroundProps {
    intensity?: number;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ intensity = 1 }) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 2;
            const y = (e.clientY / window.innerHeight - 0.5) * 2;
            setMousePos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
            {/* Deep background layer */}
            <div
                className="absolute inset-0 opacity-30"
                style={{
                    transform: `translate(${mousePos.x * 10 * intensity}px, ${mousePos.y * 10 * intensity}px)`,
                    transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
            >
                <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-600/20 rounded-full blur-[200px]" />
                <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-purple-600/15 rounded-full blur-[250px]" />
            </div>

            {/* Mid layer - floating orbs */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    transform: `translate(${mousePos.x * 25 * intensity}px, ${mousePos.y * 25 * intensity}px)`,
                    transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
            >
                <div className="absolute top-[10%] right-[20%] w-32 h-32 bg-cyan-500/30 rounded-full blur-[80px] animate-pulse" />
                <div className="absolute bottom-[30%] left-[15%] w-24 h-24 bg-indigo-500/25 rounded-full blur-[60px] animate-pulse [animation-delay:1s]" />
                <div className="absolute top-[50%] right-[40%] w-20 h-20 bg-violet-500/20 rounded-full blur-[50px] animate-pulse [animation-delay:2s]" />
            </div>

            {/* Near layer - subtle particles */}
            <div
                className="absolute inset-0 opacity-50"
                style={{
                    transform: `translate(${mousePos.x * 40 * intensity}px, ${mousePos.y * 40 * intensity}px)`,
                    transition: 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
            >
                <div className="absolute top-[25%] left-[30%] w-2 h-2 bg-indigo-400 rounded-full shadow-[0_0_20px_rgba(99,102,241,0.8)]" />
                <div className="absolute top-[60%] right-[25%] w-1.5 h-1.5 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                <div className="absolute bottom-[20%] left-[50%] w-1 h-1 bg-purple-400 rounded-full shadow-[0_0_12px_rgba(192,132,252,0.8)]" />
                <div className="absolute top-[40%] left-[70%] w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.6)]" />
                <div className="absolute bottom-[40%] right-[60%] w-1 h-1 bg-indigo-300 rounded-full shadow-[0_0_8px_rgba(165,180,252,0.8)]" />
            </div>

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
                    backgroundSize: '100px 100px',
                    transform: `translate(${mousePos.x * 5 * intensity}px, ${mousePos.y * 5 * intensity}px)`,
                    transition: 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
            />

            {/* Vignette */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.4)_70%,rgba(2,6,23,0.8)_100%)]" />
        </div>
    );
};

export default ParallaxBackground;
