import React from 'react';

interface WelcomeScreenProps {
  onStart: (lessonType: 'adult' | 'jovem') => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-emerald-500 via-cyan-500 to-violet-500 text-white text-center">
      <div className="bg-black/20 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/10 max-w-2xl shadow-2xl animate-fade-in">
        <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold">Bem-vindo ao</h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-cyan-200 mt-1">Abraçando a Lição 💛</h2>
        </div>
        <p className="mt-6 text-lg md:text-xl text-white/90">
          Escolha sua jornada de fé, reflexão e descoberta diária.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <button
            onClick={() => onStart('adult')}
            className="px-8 py-3 bg-white text-emerald-600 font-bold text-lg rounded-full hover:bg-cyan-100 hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
            Lição de Adultos
            </button>
            <button
            onClick={() => onStart('jovem')}
            className="px-8 py-3 bg-cyan-400 text-white font-bold text-lg rounded-full hover:bg-cyan-500 hover:scale-105 transform transition-all duration-300 shadow-lg"
            >
            Lição Jovem
            </button>
        </div>
      </div>
    </div>
  );
};