
import React from 'react';
import { PRAYER_OF_THE_DAY } from '../constants';
import { XMarkIcon } from './Icons';

interface PrayerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrayerModal: React.FC<PrayerModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
    >
      <div 
        className="bg-gray-800/80 border border-white/20 rounded-2xl shadow-xl w-full max-w-md p-6 text-white relative animate-fade-in"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white transition">
          <XMarkIcon className="w-6 h-6" />
        </button>

        <div className="text-center">
            <span className="text-4xl">🙏</span>
            <h2 className="text-2xl font-bold mt-2 text-cyan-300">{PRAYER_OF_THE_DAY.title}</h2>
        </div>

        <p className="mt-4 text-white/90 text-center">
          {PRAYER_OF_THE_DAY.text}
        </p>

        <blockquote className="mt-6 p-4 border-l-4 border-cyan-400 bg-black/20 rounded-r-lg">
          <p className="italic">"{PRAYER_OF_THE_DAY.verse.text}"</p>
          <cite className="block text-right mt-1 text-sm text-cyan-200 not-italic">— {PRAYER_OF_THE_DAY.verse.reference}</cite>
        </blockquote>

        <div className="mt-6 text-center">
            <button
            onClick={onClose}
            className="px-6 py-2 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
            Amém
            </button>
        </div>
      </div>
    </div>
  );
};
