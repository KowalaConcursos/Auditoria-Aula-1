import React, { useState } from 'react';
import type { DayData } from '../types';
import { BibleVerseDisplay } from './BibleVerse';
import { Quiz } from './Quiz';
import { ChevronDownIcon } from './Icons';

interface DayViewProps {
  day: DayData;
  isUnlocked: boolean;
  onQuizComplete: (isCorrect: boolean) => void;
  initialNote: string;
  onSaveNote: (note: string) => void;
  initialReflections: { [questionIndex: number]: string };
  onSaveReflection: (questionIndex: number, reflection: string) => void;
}

const QuestionDisplay: React.FC<{ question: DayData['questions'][0], index: number, initialReflection: string, onSaveReflection: (reflection: string) => void }> = ({ question, index, initialReflection, onSaveReflection }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [reflection, setReflection] = useState(initialReflection);

    const handleSave = () => {
        onSaveReflection(reflection);
    };

    return (
        <div className="bg-black/10 rounded-lg p-4 mb-4 transition-all">
            <button onClick={() => setIsOpen(!isOpen)} className="w-full text-left flex justify-between items-start group cursor-pointer">
                <h4 className="font-semibold text-lg text-white group-hover:text-cyan-300 transition-colors pr-4">
                    <span className="mr-2">{index + 1}️⃣</span>
                    {question.text}
                </h4>
                <ChevronDownIcon className={`w-5 h-5 text-cyan-300 transition-transform flex-shrink-0 mt-1 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isOpen && (
                <div className="mt-3 text-white/80 italic pl-8">
                    <p>{question.suggestedAnswer}</p>
                </div>
            )}
            
            <div className="mt-4">
                <textarea
                    value={reflection}
                    onChange={(e) => setReflection(e.target.value)}
                    onBlur={handleSave}
                    placeholder="Anote sua reflexão pessoal aqui..."
                    className="w-full bg-black/20 text-white placeholder-white/50 rounded-md p-2 border border-white/20 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
                    rows={3}
                />
            </div>
        </div>
    );
};

const Notes: React.FC<{ initialNote: string, onSave: (note: string) => void }> = ({ initialNote, onSave }) => {
    const [note, setNote] = useState(initialNote);
    const [isSaved, setIsSaved] = useState(true);

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNote(e.target.value);
        setIsSaved(false);
    }

    const handleSave = () => {
        onSave(note);
        setIsSaved(true);
    };

    return (
        <div className="mt-6">
            <h3 className="text-xl font-bold text-white mb-2">Anotações Pessoais</h3>
            <textarea
                value={note}
                onChange={handleChange}
                placeholder="Suas anotações gerais para o dia..."
                className="w-full bg-black/20 text-white placeholder-white/50 rounded-md p-3 border border-white/20 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition"
                rows={5}
            />
            <div className="text-right mt-2">
                <button 
                    onClick={handleSave}
                    disabled={isSaved}
                    className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition disabled:bg-gray-500 disabled:cursor-not-allowed">
                    {isSaved ? 'Salvo ✓' : 'Salvar Anotações'}
                </button>
            </div>
        </div>
    );
};

export const DayView: React.FC<DayViewProps> = ({ day, isUnlocked, onQuizComplete, initialNote, onSaveNote, initialReflections, onSaveReflection }) => {
  // A lógica de bloqueio foi removida, mas mantemos a verificação para segurança.
  if (!isUnlocked) {
    return null; // Não deve mais acontecer, mas é uma boa prática.
  }

  return (
    <div className="p-4 md:p-8 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-300">{day.title}</h2>
      <p className="mt-2 text-white/90">{day.summary}</p>
      
      {day.imageUrl && (
        <div className="my-6">
          <img src={day.imageUrl} alt={day.title} className="rounded-lg shadow-lg w-full" />
        </div>
      )}

      <div className="my-6">
        {day.readings.map(ref => <BibleVerseDisplay key={ref} reference={ref} />)}
      </div>

      <h3 className="text-2xl font-bold text-white mt-8 mb-4 border-b-2 border-cyan-400/50 pb-2">Perguntas para Discussão</h3>
      {day.questions.map((q, i) => (
        <QuestionDisplay 
            key={i} 
            question={q} 
            index={i}
            initialReflection={initialReflections[i] || ''}
            onSaveReflection={(reflection) => onSaveReflection(i, reflection)}
        />
      ))}

      <Quiz dayId={day.id} quiz={day.quiz} onComplete={onQuizComplete} />
      <Notes initialNote={initialNote} onSave={onSaveNote} />
    </div>
  );
};