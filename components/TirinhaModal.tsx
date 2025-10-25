import React from 'react';
import { XMarkIcon } from './Icons';

interface TirinhaModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TirinhaModal: React.FC<TirinhaModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
    >
      <div 
        className="bg-gray-800/80 border border-white/20 rounded-2xl shadow-xl w-full max-w-xl p-4 text-white relative animate-fade-in"
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-2 right-2 text-white/70 hover:text-white transition z-10 bg-gray-900/50 rounded-full p-1">
          <XMarkIcon className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-bold text-center mb-4 text-cyan-300">Tirinha da Semana</h2>
        <div className="w-full overflow-hidden rounded-lg">
            <img src="/images/tirinha_semana.png" alt="Tirinha da Semana" className="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
};