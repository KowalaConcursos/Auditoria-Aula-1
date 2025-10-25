import React, { useState, useCallback } from 'react';
import { useLessonState } from './hooks/useLessonState';
import { WEEK_LESSON, WEEK_LESSON_JOVEM } from './constants';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { DayView } from './components/DayView';
import { WelcomeScreen } from './components/WelcomeScreen';
import { Toast } from './components/Toast';
import { PrayerModal } from './components/PrayerModal';
import { TirinhaModal } from './components/TirinhaModal';

export default function App() {
    const lessonState = useLessonState();
    const [currentDayId, setCurrentDayId] = useState(0);
    const [isPrayerModalOpen, setIsPrayerModalOpen] = useState(false);
    const [isTirinhaModalOpen, setIsTirinhaModalOpen] = useState(false);

    const activeLesson = lessonState.lessonType === 'jovem' ? WEEK_LESSON_JOVEM : WEEK_LESSON;

    const handleQuizComplete = (isCorrect: boolean) => {
        lessonState.answerQuiz(currentDayId, 0, isCorrect); // The choice index is not used here, just correctness
    };

    const handleExportNotes = useCallback(() => {
        const day = activeLesson[currentDayId];
        const note = lessonState.notes[currentDayId] || 'Nenhuma anotação geral.';
        const reflections = day.questions.map((q, i) => {
            const reflectionText = lessonState.reflections[currentDayId]?.[i] || 'Nenhuma reflexão.';
            return `Reflexão sobre "${q.text}":\n${reflectionText}\n`;
        }).join('\n');

        const content = `Abraçando a Lição - ${day.dayName}\n`
            + `Título: ${day.title}\n\n`
            + `==============================\n\n`
            + `REFLEXÕES PESSOAIS\n\n`
            + `${reflections}\n`
            + `==============================\n\n`
            + `ANOTAÇÕES GERAIS\n\n`
            + `${note}`;

        const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `licao_${day.dayName.toLowerCase()}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, [currentDayId, lessonState.notes, lessonState.reflections, activeLesson]);

    if (!lessonState.hasStarted) {
        return <WelcomeScreen onStart={lessonState.startGame} />;
    }
    
    const weekCompleted = lessonState.lastCompletedDay >= activeLesson.length - 1;

    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-900 via-cyan-900 to-violet-900 dark:from-emerald-900/90 dark:via-gray-900 dark:to-violet-900/90 transition-colors duration-500">
            <Header 
                gameState={lessonState} 
                onToggleTheme={lessonState.toggleTheme} 
                onReset={lessonState.resetProgress}
                onExport={handleExportNotes}
                onPrayerClick={() => setIsPrayerModalOpen(true)}
                onTirinhaClick={() => setIsTirinhaModalOpen(true)}
                onTimerToggle={lessonState.setTimerActive}
                onTimerTick={lessonState.setTimerSeconds}
            />
            <main className="container mx-auto flex flex-col md:flex-row">
                <Sidebar gameState={lessonState} currentDay={currentDayId} onSelectDay={setCurrentDayId} />
                <div className="flex-1 m-4 bg-black/10 backdrop-blur-md border border-white/10 rounded-2xl min-h-[75vh] overflow-y-auto">
                    {weekCompleted && currentDayId === activeLesson.length - 1 && (
                         <div className="p-8 text-center text-white bg-gradient-to-br from-yellow-500/30 to-amber-500/30 rounded-t-2xl">
                            <h2 className="text-3xl font-bold">🎉 Parabéns!</h2>
                            <p className="mt-2 text-lg">Você concluiu a lição desta semana. Continue abraçando a Palavra e compartilhando amor!</p>
                        </div>
                    )}
                    <DayView
                        day={activeLesson[currentDayId]}
                        isUnlocked={currentDayId <= lessonState.lastCompletedDay + 1}
                        onQuizComplete={handleQuizComplete}
                        initialNote={lessonState.notes[currentDayId] || ''}
                        onSaveNote={(note) => lessonState.saveNote(currentDayId, note)}
                        initialReflections={lessonState.reflections[currentDayId] || {}}
                        onSaveReflection={(qIndex, reflection) => lessonState.saveReflection(currentDayId, qIndex, reflection)}
                    />
                </div>
            </main>
            <Toast message={lessonState.showToast} />
            <PrayerModal isOpen={isPrayerModalOpen} onClose={() => setIsPrayerModalOpen(false)} />
            <TirinhaModal isOpen={isTirinhaModalOpen} onClose={() => setIsTirinhaModalOpen(false)} />
        </div>
    );
}