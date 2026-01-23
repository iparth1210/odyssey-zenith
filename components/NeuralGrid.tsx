
import React, { useRef, useEffect } from 'react';

interface NeuralGridProps {
    mouseX: number;
    mouseY: number;
    intensity: number;
}

const NeuralGrid: React.FC<NeuralGridProps> = ({ mouseX, mouseY, intensity }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        const gridSize = 40;
        const points: { x: number; y: number; ox: number; oy: number }[] = [];

        for (let x = 0; x <= width + gridSize; x += gridSize) {
            for (let y = 0; y <= height + gridSize; y += gridSize) {
                points.push({ x, y, ox: x, oy: y });
            }
        }

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            const targetX = (mouseX + 1) * 0.5 * width;
            const targetY = (mouseY + 1) * 0.5 * height;

            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.05 * (intensity / 100)})`;
            ctx.lineWidth = 1;

            points.forEach(p => {
                const dx = targetX - p.ox;
                const dy = targetY - p.oy;
                const dist = Math.sqrt(dx * dx + dy * dy);
                const maxDist = 300;

                if (dist < maxDist) {
                    const force = (maxDist - dist) / maxDist;
                    p.x = p.ox - (dx / dist) * force * 20 * (intensity / 50);
                    p.y = p.oy - (dy / dist) * force * 20 * (intensity / 50);
                } else {
                    p.x = p.ox;
                    p.y = p.oy;
                }
            });

            // Draw Grid
            for (let i = 0; i < points.length; i++) {
                const p = points[i];
                // Vertical lines
                const nextV = points[i + 1];
                if (nextV && nextV.ox === p.ox) {
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(nextV.x, nextV.y);
                }

                // Horizontal lines
                const nextH = points.find(pt => pt.ox === p.ox + gridSize && pt.oy === p.oy);
                if (nextH) {
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(nextH.x, nextH.y);
                }
            }
            ctx.stroke();

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mouseX, mouseY, intensity]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.6 }}
        />
    );
};

export default NeuralGrid;
