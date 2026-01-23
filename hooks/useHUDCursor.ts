import { useState, useEffect, useCallback } from 'react';

interface CursorState {
    x: number;
    y: number;
    isHovering: boolean;
    isClicking: boolean;
    isLoading: boolean;
}

export const useHUDCursor = () => {
    const [cursor, setCursor] = useState<CursorState>({
        x: 0,
        y: 0,
        isHovering: false,
        isClicking: false,
        isLoading: false,
    });

    const [targetPos, setTargetPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setTargetPos({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = () => {
            setCursor(prev => ({ ...prev, isClicking: true }));
        };

        const handleMouseUp = () => {
            setCursor(prev => ({ ...prev, isClicking: false }));
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, []);

    // Smooth spring animation
    useEffect(() => {
        let animationFrame: number;
        const spring = 0.15;
        const friction = 0.85;
        let velocityX = 0;
        let velocityY = 0;
        let currentX = cursor.x;
        let currentY = cursor.y;

        const animate = () => {
            const dx = targetPos.x - currentX;
            const dy = targetPos.y - currentY;

            velocityX += dx * spring;
            velocityY += dy * spring;

            velocityX *= friction;
            velocityY *= friction;

            currentX += velocityX;
            currentY += velocityY;

            setCursor(prev => ({
                ...prev,
                x: currentX,
                y: currentY,
            }));

            animationFrame = requestAnimationFrame(animate);
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [targetPos]);

    const setHovering = useCallback((isHovering: boolean) => {
        setCursor(prev => ({ ...prev, isHovering }));
    }, []);

    const setLoading = useCallback((isLoading: boolean) => {
        setCursor(prev => ({ ...prev, isLoading }));
    }, []);

    return { cursor, setHovering, setLoading };
};

export default useHUDCursor;
