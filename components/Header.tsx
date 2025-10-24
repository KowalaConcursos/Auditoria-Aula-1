import React, { useEffect } from 'react';
import { TIMER_DURATION } from '../constants';
import type { GameState } from '../types';
import { SunIcon, MoonIcon, PlayIcon, PauseIcon, ArrowDownTrayIcon, ShareIcon, ArrowPathIcon } from './Icons';

interface HeaderProps {
  gameState: GameState;
  onToggleTheme: () => void;
  onReset: () => void;
  onExport: () => void;
  onPrayerClick: () => void;
  onTimerToggle: (isActive: boolean) => void;
  onTimerTick: (seconds: number) => void;
}

const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
};

export const Header: React.FC<HeaderProps> = ({ gameState, onToggleTheme, onReset, onExport, onPrayerClick, onTimerToggle, onTimerTick }) => {
    const { xp, lastCompletedDay, theme, timer } = gameState;
    const progress = lastCompletedDay > -1 ? Math.round(((lastCompletedDay + 1) / 7) * 100) : 0;
    
    useEffect(() => {
        let interval: number | undefined;
        if (timer.isActive && timer.seconds > 0) {
            interval = window.setInterval(() => {
                onTimerTick(timer.seconds - 1);
            }, 1000);
        } else if (timer.isActive && timer.seconds === 0) {
            onTimerToggle(false); // Stop timer when it reaches 0
        }
        return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [timer.isActive, timer.seconds]);

    const handleTimerClick = () => {
        if (timer.seconds === 0) {
            onTimerTick(TIMER_DURATION);
            onTimerToggle(true);
        } else {
            onTimerToggle(!timer.isActive);
        }
    }
    
    const handleShare = async () => {
        const shareData = {
            title: 'Abraçando a Lição',
            text: 'Estou estudando a Lição da Escola Sabatina com o app Abraçando a Lição da IASD Abrace Aracaju. Junte-se a mim!',
            url: window.location.href,
        };
        try {
            if (navigator.share) {
                await navigator.share(shareData);
            } else {
                alert('A função de compartilhar não é suportada neste navegador.');
            }
        } catch (err) {
            console.error('Erro ao compartilhar:', err);
        }
    };

    return (
        <header className="sticky top-0 z-30 p-3 bg-black/20 backdrop-blur-lg border-b border-white/10 text-white shadow-lg">
            <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                    <img src="/logo-abrace.png" alt="Abrace Aracaju Logo" className="h-10 w-10 md:h-12 md:w-12 rounded-full"/>
                    <div>
                        <h1 className="text-lg md:text-xl font-bold whitespace-nowrap">Abraçando a Lição</h1>
                        <p className="text-xs text-white/70">IASD Abrace Aracaju</p>
                    </div>
                </div>

                <div className="flex items-center gap-2 md:gap-4 order-3 md:order-2 w-full md:w-auto justify-center mt-2 md:mt-0">
                    <div className="flex items-center gap-1 text-sm font-semibold bg-yellow-500/20 text-yellow-300 px-3 py-1 rounded-full">
                        <span className="text-lg">⭐</span> {xp} XP
                    </div>
                    <div className="flex items-center gap-1 text-sm font-semibold bg-green-500/20 text-green-300 px-3 py-1 rounded-full">
                        <span className="text-lg">📊</span> {progress}%
                    </div>
                     <div className="flex items-center gap-1 text-sm font-semibold bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full">
                        <span className="text-lg">⏳</span> {formatTime(timer.seconds)}
                    </div>
                </div>

                <div className="flex items-center gap-1 md:gap-2 order-2 md:order-3">
                    <button onClick={handleTimerClick} className="p-2 rounded-full hover:bg-white/20 transition-colors" title={timer.isActive ? "Pausar Aula" : "Iniciar Aula"}>
                        {timer.isActive ? <PauseIcon className="w-5 h-5"/> : <PlayIcon className="w-5 h-5"/>}
                    </button>
                    <button onClick={onExport} className="p-2 rounded-full hover:bg-white/20 transition-colors" title="Exportar Notas">
                        <ArrowDownTrayIcon className="w-5 h-5"/>
                    </button>
                     <button onClick={handleShare} className="p-2 rounded-full hover:bg-white/20 transition-colors" title="Compartilhar">
                        <ShareIcon className="w-5 h-5"/>
                    </button>
                     <button onClick={onPrayerClick} className="p-2 rounded-full hover:bg-white/20 transition-colors hidden sm:block" title="Oração do Dia">
                        🙏
                    </button>
                    <button onClick={onToggleTheme} className="p-2 rounded-full hover:bg-white/20 transition-colors" title="Mudar Tema">
                        {theme === 'dark' ? <SunIcon className="w-5 h-5"/> : <MoonIcon className="w-5 h-5"/>}
                    </button>
                    <button onClick={onReset} className="p-2 rounded-full hover:bg-red-500/50 transition-colors" title="Resetar Progresso">
                        <ArrowPathIcon className="w-5 h-5"/>
                    </button>
                </div>
            </div>
        </header>
    );
};