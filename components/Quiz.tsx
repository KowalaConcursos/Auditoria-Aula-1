
import React, { useState } from 'react';
import type { Quiz as QuizType } from '../types';
import { Confetti } from './Confetti';

interface QuizProps {
  dayId: number;
  quiz: QuizType;
  onComplete: (isCorrect: boolean) => void;
}

export const Quiz: React.FC<QuizProps> = ({ dayId, quiz, onComplete }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [fireConfetti, setFireConfetti] = useState(false);

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    setSubmitted(true);
    const isCorrect = selectedAnswer === quiz.correctAnswerIndex;
    if (isCorrect) {
        setFireConfetti(false); // Reset to allow re-triggering
        setTimeout(() => setFireConfetti(true), 0);
    }
    onComplete(isCorrect);
  };

  const getButtonClass = (index: number) => {
    if (!submitted) {
      return `bg-black/20 hover:bg-cyan-500/30 ${selectedAnswer === index ? 'ring-2 ring-cyan-300' : ''}`;
    }
    if (index === quiz.correctAnswerIndex) {
      return 'bg-green-500/80 text-white';
    }
    if (index === selectedAnswer && index !== quiz.correctAnswerIndex) {
      return 'bg-red-500/80 text-white';
    }
    return 'bg-black/20 opacity-60';
  };

  return (
    <div className="mt-8 p-4 md:p-6 bg-black/20 backdrop-blur-sm border border-white/10 rounded-xl relative overflow-hidden">
      <Confetti fire={fireConfetti} />
      <h3 className="text-xl font-bold text-white mb-4">Quiz do Dia</h3>
      <p className="font-semibold text-lg mb-4 text-white/90">{quiz.question}</p>
      <div className="space-y-3">
        {quiz.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !submitted && setSelectedAnswer(index)}
            disabled={submitted}
            className={`w-full text-left p-3 rounded-lg transition-all duration-300 ${getButtonClass(index)}`}
          >
            {option.text}
          </button>
        ))}
      </div>
      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={selectedAnswer === null}
          className="w-full mt-4 px-4 py-2 bg-emerald-500 text-white font-bold rounded-lg hover:bg-emerald-600 transition disabled:bg-gray-500 disabled:cursor-not-allowed"
        >
          Confirmar Resposta
        </button>
      )}
      {submitted && (
        <div className="mt-4 text-center font-bold p-3 rounded-lg bg-black/30">
            {selectedAnswer === quiz.correctAnswerIndex ? (
                <p className="text-green-300">🎉 Resposta Correta! O próximo dia foi desbloqueado.</p>
            ) : (
                <p className="text-red-300">Resposta Incorreta. Tente novamente ou reveja a lição.</p>
            )}
        </div>
      )}
    </div>
  );
};
