import React from 'react';
import { WEEK_LESSON, WEEK_LESSON_JOVEM, BADGES } from '../constants';
import type { GameState } from '../types';
import { Badge } from './Badge';

interface SidebarProps {
  gameState: GameState;
  currentDay: number;
  onSelectDay: (dayId: number) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ gameState, currentDay, onSelectDay }) => {
  const { lastCompletedDay, badgesEarned, lessonType } = gameState;
  const activeLesson = lessonType === 'jovem' ? WEEK_LESSON_JOVEM : WEEK_LESSON;
  const progress = lastCompletedDay > -1 ? Math.round(((lastCompletedDay + 1) / activeLesson.length) * 100) : 0;

  const earnedBadges = BADGES.filter(badge => badgesEarned.includes(badge.id));

  return (
    <aside className="w-full md:w-72 lg:w-80 p-4 space-y-6 text-white">
      {/* Days of the Week */}
      <div>
        <h3 className="font-bold text-lg mb-3">Dias da Semana</h3>
        <ul className="space-y-2">
          {activeLesson.map((day, index) => {
            const isCompleted = index <= lastCompletedDay;
            const isCurrent = index === currentDay;

            return (
              <li key={day.id}>
                <button
                  onClick={() => onSelectDay(day.id)}
                  className={`w-full text-left p-3 rounded-lg flex items-center justify-between transition-all duration-200 
                    ${isCurrent ? 'bg-cyan-500/40' : 'bg-white/10 hover:bg-white/20'}`}
                >
                  <span className="font-semibold">{day.dayName}</span>
                  {isCompleted && <span className="text-green-300">✓</span>}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Progress Bar */}
      <div>
        <h3 className="font-bold text-lg mb-2">Progresso da Semana</h3>
        <div className="w-full bg-white/20 rounded-full h-2.5">
          <div 
            className="bg-gradient-to-r from-emerald-400 to-cyan-400 h-2.5 rounded-full transition-all duration-500" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-right text-sm mt-1 text-white/80">{progress}% completo</p>
      </div>

      {/* Badges */}
      <div>
        <h3 className="font-bold text-lg mb-3">Insígnias</h3>
        {earnedBadges.length > 0 ? (
            <div className="grid grid-cols-4 gap-4">
                {earnedBadges.map(badge => <Badge key={badge.id} badge={badge} />)}
            </div>
        ) : (
            <p className="text-sm text-white/60 italic">Continue estudando para ganhar insígnias!</p>
        )}
      </div>
    </aside>
  );
};