import React, { useEffect, useState } from 'react';

interface ConfettiProps {
    fire: boolean;
}

export const Confetti: React.FC<ConfettiProps> = ({ fire }) => {
    // FIX: Replaced JSX.Element with React.ReactElement to fix 'Cannot find namespace JSX' error.
    const [pieces, setPieces] = useState<React.ReactElement[]>([]);

    useEffect(() => {
        if (fire) {
            const newPieces = Array.from({ length: 50 }).map((_, i) => {
                const style = {
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    backgroundColor: `hsl(${Math.random() * 360}, 70%, 50%)`,
                };
                return <div key={i} className="confetti" style={style}></div>;
            });
            setPieces(newPieces);
            const timer = setTimeout(() => setPieces([]), 2000); // Clear after animation
            return () => clearTimeout(timer);
        }
    }, [fire]);

    return <div className="absolute inset-0 pointer-events-none overflow-hidden z-50">{pieces}</div>;
};