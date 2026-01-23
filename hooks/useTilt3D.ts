import { useState, useCallback, useRef } from 'react';

interface Tilt3DState {
    rotateX: number;
    rotateY: number;
    scale: number;
    isHovered: boolean;
}

interface UseTilt3DOptions {
    maxTilt?: number;
    scale?: number;
    perspective?: number;
    speed?: number;
}

export const useTilt3D = (options: UseTilt3DOptions = {}) => {
    const {
        maxTilt = 15,
        scale = 1.02,
        perspective = 1000,
        speed = 400
    } = options;

    const [tilt, setTilt] = useState<Tilt3DState>({
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        isHovered: false,
    });

    const elementRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!elementRef.current) return;

        const rect = elementRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;

        const rotateY = (mouseX / (rect.width / 2)) * maxTilt;
        const rotateX = -(mouseY / (rect.height / 2)) * maxTilt;

        setTilt({
            rotateX,
            rotateY,
            scale,
            isHovered: true,
        });
    }, [maxTilt, scale]);

    const handleMouseEnter = useCallback(() => {
        setTilt(prev => ({ ...prev, isHovered: true, scale }));
    }, [scale]);

    const handleMouseLeave = useCallback(() => {
        setTilt({
            rotateX: 0,
            rotateY: 0,
            scale: 1,
            isHovered: false,
        });
    }, []);

    const tiltStyle: React.CSSProperties = {
        transform: `perspective(${perspective}px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) scale(${tilt.scale})`,
        transition: tilt.isHovered
            ? `transform ${speed * 0.5}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`
            : `transform ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
        transformStyle: 'preserve-3d' as const,
    };

    const glareStyle: React.CSSProperties = {
        position: 'absolute' as const,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        borderRadius: 'inherit',
        background: tilt.isHovered
            ? `linear-gradient(
          ${135 + tilt.rotateY * 2}deg,
          rgba(255, 255, 255, 0.1) 0%,
          rgba(255, 255, 255, 0.05) 40%,
          transparent 60%
        )`
            : 'transparent',
        pointerEvents: 'none' as const,
        transition: `opacity ${speed}ms ease`,
        opacity: tilt.isHovered ? 1 : 0,
    };

    const shadowStyle: React.CSSProperties = {
        boxShadow: tilt.isHovered
            ? `${tilt.rotateY * 1.5}px ${-tilt.rotateX * 1.5}px 40px rgba(0, 0, 0, 0.3),
         ${tilt.rotateY * 0.5}px ${-tilt.rotateX * 0.5}px 15px rgba(99, 102, 241, 0.15)`
            : '0 10px 30px rgba(0, 0, 0, 0.2)',
        transition: `box-shadow ${speed}ms cubic-bezier(0.03, 0.98, 0.52, 0.99)`,
    };

    return {
        elementRef,
        tiltStyle,
        glareStyle,
        shadowStyle,
        handlers: {
            onMouseMove: handleMouseMove,
            onMouseEnter: handleMouseEnter,
            onMouseLeave: handleMouseLeave,
        },
        isHovered: tilt.isHovered,
    };
};

export default useTilt3D;
