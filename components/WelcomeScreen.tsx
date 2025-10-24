import React from 'react';
import logoAbrace from '../assets/logo-abrace.png';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-gradient-to-br from-emerald-500 via-cyan-500 to-violet-500 text-white text-center">
      <div className="bg-black/20 backdrop-blur-xl p-8 md:p-12 rounded-2xl border border-white/10 max-w-2xl shadow-2xl animate-fade-in">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <img src={logoAbrace} alt="Abrace Logo" className="w-24 h-24 md:w-28 md:h-28" />
          <div>
            <h1 className="text-3xl md:text-5xl font-bold">Bem-vindo ao</h1>
            <h2 className="text-4xl md:text-6xl font-extrabold text-cyan-200 mt-2">Abraçando a Lição</h2>
          </div>
        </div>
        <p className="mt-6 text-lg md:text-xl text-white/90">
          Aqui você vai viver uma jornada de fé, reflexão e descoberta diária.
        </p>
        <button
          onClick={onStart}
          className="mt-8 px-8 py-3 bg-white text-emerald-600 font-bold text-lg rounded-full hover:bg-cyan-100 hover:scale-105 transform transition-all duration-300 shadow-lg"
        >
          Começar agora
        </button>
      </div>
    </div>
  );
};