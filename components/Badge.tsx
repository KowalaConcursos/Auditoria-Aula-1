import React from 'react';
import type { Badge as BadgeType } from '../types';

interface BadgeProps {
  badge: BadgeType;
}

export const Badge: React.FC<BadgeProps> = ({ badge }) => {
  const Icon = badge.icon;
  return (
    <div className="group relative flex flex-col items-center text-center">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm border transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg ${badge.styleClasses}`}>
        <Icon className="w-7 h-7" />
      </div>
      <span className="text-xs mt-1 font-medium text-white/80">{badge.name}</span>
      <div className="absolute bottom-full mb-2 w-48 p-2 text-sm text-white bg-gray-800/80 backdrop-blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
        {badge.description}
        <svg className="absolute text-gray-800/80 h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
      </div>
    </div>
  );
};