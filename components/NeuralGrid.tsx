
import React, { useRef, useEffect } from 'react';

interface NeuralGridProps {
    mouseX: number;
    mouseY: number;
    intensity: number;
}

interface Ripple {
    x: number;
    y: number;
    radius: number;
    maxRadius: number;
    amplitude: number;
    life: number; // 0 to 1
}

const NeuralGrid: React.FC<NeuralGridProps> = ({ mouseX, mouseY, intensity }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: mouseX, y: mouseY });
    const ripplesRef = useRef<Ripple[]>([]);

    // Sync mouse coordinates WITHOUT triggering effect re-runs
    useEffect(() => {
        mouseRef.current = { x: mouseX, y: mouseY };
    }, [mouseX, mouseY]);

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
            initGrid();
        };

        const handleClick = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            ripplesRef.current.push({
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                radius: 0,
                maxRadius: 600,
                amplitude: 40 * (intensity / 50),
                life: 1
            });
        };

        const gridSize = 40;
        let columns: number;
        let rows: number;
        let points: { x: number; y: number; ox: number; oy: number }[][] = [];

        const initGrid = () => {
            columns = Math.ceil(width / gridSize) + 1;
            rows = Math.ceil(height / gridSize) + 1;
            points = [];
            for (let i = 0; i < columns; i++) {
                points[i] = [];
                for (let j = 0; j < rows; j++) {
                    const x = i * gridSize;
                    const y = j * gridSize;
                    points[i][j] = { x, y, ox: x, oy: y };
                }
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousedown', handleClick);
        handleResize();

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            const mX = mouseRef.current.x;
            const mY = mouseRef.current.y;
            const targetX = (mX + 1) * 0.5 * width;
            const targetY = (mY + 1) * 0.5 * height;

            // Update ripples
            ripplesRef.current = ripplesRef.current.filter(r => r.life > 0.01);
            ripplesRef.current.forEach(r => {
                r.radius += 10;
                r.life *= 0.98;
            });

            ctx.beginPath();
            ctx.strokeStyle = `rgba(99, 102, 241, ${0.1 * (intensity / 100)})`;
            ctx.lineWidth = 1;

            for (let i = 0; i < columns; i++) {
                for (let j = 0; j < rows; j++) {
                    const p = points[i][j];

                    // Mouse interaction
                    const mouseDx = targetX - p.ox;
                    const mouseDy = targetY - p.oy;
                    const mouseDistSq = mouseDx * mouseDx + mouseDy * mouseDy;
                    const maxMouseDist = 300;
                    const maxMouseDistSq = maxMouseDist * maxMouseDist;

                    let totalDx = 0;
                    let totalDy = 0;

                    if (mouseDistSq < maxMouseDistSq) {
                        const dist = Math.sqrt(mouseDistSq);
                        const force = (maxMouseDist - dist) / maxMouseDist;
                        totalDx -= (mouseDx / dist) * force * 20 * (intensity / 50);
                        totalDy -= (mouseDy / dist) * force * 20 * (intensity / 50);
                    }

                    // Ripple interaction
                    ripplesRef.current.forEach(r => {
                        const rdx = p.ox - r.x;
                        const rdy = p.oy - r.y;
                        const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
                        const distToRipple = Math.abs(rdist - r.radius);

                        if (distToRipple < 100) {
                            const rippleForce = (100 - distToRipple) / 100 * r.life * r.amplitude;
                            const angle = Math.atan2(rdy, rdx);
                            totalDx += Math.cos(angle) * rippleForce;
                            totalDy += Math.sin(angle) * rippleForce;
                        }
                    });

                    p.x = p.ox + totalDx;
                    p.y = p.oy + totalDy;

                    if (i < columns - 1) {
                        const nextH = points[i + 1][j];
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(nextH.x, nextH.y);
                    }
                    if (j < rows - 1) {
                        const nextV = points[i][j + 1];
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(nextV.x, nextV.y);
                    }
                }
            }
            ctx.stroke();
            animationFrameId = requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousedown', handleClick);
            cancelAnimationFrame(animationFrameId);
        };
    }, [intensity]); // Re-run ONLY when intensity changes

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.6 }}
        />
    );
};

export default NeuralGrid;

