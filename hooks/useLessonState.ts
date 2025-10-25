import { useState, useEffect, useCallback } from 'react';
import type { GameState } from '../types';
import { BADGES, WEEK_LESSON } from '../constants';

const LOCAL_STORAGE_KEY = 'abrace_licao_v1';

const getInitialState = (): GameState => {
    const savedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedState) {
        try {
            const parsed = JSON.parse(savedState);
            // Ensure timer state is reset on load
            parsed.timer = { isActive: false, seconds: 55 * 60 };
            // Set default lesson type if not present
            if (!parsed.lessonType) {
                parsed.lessonType = 'adult';
            }
            return parsed;
        } catch (e) {
            console.error("Failed to parse saved state:", e);
        }
    }
    return {
        xp: 0,
        lastCompletedDay: -1,
        quizAnswers: {},
        notes: {},
        reflections: {},
        badgesEarned: ['primeiro-passo'],
        hasStarted: false,
        theme: 'dark',
        lessonType: 'adult',
        timer: { isActive: false, seconds: 55 * 60 },
    };
};


export const useLessonState = () => {
    const [state, setState] = useState<GameState>(getInitialState);
    const [showToast, setShowToast] = useState<string | null>(null);

    useEffect(() => {
        try {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
        } catch (e) {
            console.error("Failed to save state:", e);
        }
    }, [state]);

    useEffect(() => {
        const root = window.document.documentElement;
        if (state.theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [state.theme]);

    const triggerToast = (message: string) => {
        setShowToast(message);
        setTimeout(() => setShowToast(null), 3000);
    };

    const checkAndAwardBadges = useCallback((newState: GameState) => {
        const newBadges: string[] = [];

        // Leitor Fiel: 3 dias completos
        if (newState.lastCompletedDay >= 2 && !newState.badgesEarned.includes('leitor-fiel')) {
            newBadges.push('leitor-fiel');
        }

        // Anotador: 3 anotações
        const notesCount = Object.values(newState.notes).filter(note => note && note.trim().length > 0).length;
        const reflectionsCount = Object.values(newState.reflections).flatMap(dayReflections => Object.values(dayReflections)).filter(reflection => reflection && reflection.trim().length > 0).length;
        if (notesCount + reflectionsCount >= 3 && !newState.badgesEarned.includes('anotador')) {
            newBadges.push('anotador');
        }

        // Estrategista: Todos os quizzes corretos
        const allQuizzesAnswered = WEEK_LESSON.length === Object.keys(newState.quizAnswers).length;
        const allCorrect = Object.values(newState.quizAnswers).every(ans => ans?.isCorrect);
        if (allQuizzesAnswered && allCorrect && !newState.badgesEarned.includes('estrategista')) {
            newBadges.push('estrategista');
        }
        
        // Semana Concluída: Último dia completo
        if (newState.lastCompletedDay >= WEEK_LESSON.length - 1 && !newState.badgesEarned.includes('semana-concluida')) {
            newBadges.push('semana-concluida');
        }

        if (newBadges.length > 0) {
            const badgeDetails = BADGES.find(b => b.id === newBadges[0]);
            if (badgeDetails) {
                 triggerToast(`Nova Insígnia: ${badgeDetails.name}!`);
            }
            return { ...newState, badgesEarned: [...newState.badgesEarned, ...newBadges] };
        }
        return newState;

    }, []);

    const updateState = (updater: (prevState: GameState) => GameState) => {
        setState(prevState => {
            const newState = updater(prevState);
            return checkAndAwardBadges(newState);
        });
    };

    const answerQuiz = (dayId: number, choice: number, isCorrect: boolean) => {
        updateState(prev => {
            const newAnswers = { ...prev.quizAnswers, [dayId]: { choice, isCorrect } };
            let newXp = prev.xp;
            let newLastCompletedDay = prev.lastCompletedDay;
            if (isCorrect && !prev.quizAnswers[dayId]?.isCorrect) {
                newXp += 10;
                if (dayId > newLastCompletedDay) {
                    newLastCompletedDay = dayId;
                }
            }
            return { ...prev, xp: newXp, quizAnswers: newAnswers, lastCompletedDay: newLastCompletedDay };
        });
    };

    const saveNote = (dayId: number, note: string) => {
        updateState(prev => ({
            ...prev,
            notes: { ...prev.notes, [dayId]: note },
        }));
    };
    
    const saveReflection = (dayId: number, questionIndex: number, reflection: string) => {
        updateState(prev => ({
            ...prev,
            reflections: {
                ...prev.reflections,
                [dayId]: {
                    ...prev.reflections[dayId],
                    [questionIndex]: reflection,
                },
            },
        }));
    };

    const startGame = (lessonType: 'adult' | 'jovem') => updateState(prev => ({ ...prev, hasStarted: true, lessonType }));
    const toggleTheme = () => updateState(prev => ({ ...prev, theme: prev.theme === 'light' ? 'dark' : 'light' }));

    const resetProgress = () => {
        if (window.confirm("Você tem certeza que deseja apagar todo o seu progresso? Esta ação não pode ser desfeita.")) {
            const theme = state.theme; // Keep theme preference
            const lessonType = state.lessonType; // Keep lesson type
            localStorage.removeItem(LOCAL_STORAGE_KEY);
            setState({
                 xp: 0,
                lastCompletedDay: -1,
                quizAnswers: {},
                notes: {},
                reflections: {},
                badgesEarned: ['primeiro-passo'],
                hasStarted: true,
                theme: theme,
                lessonType: lessonType,
                timer: { isActive: false, seconds: 55 * 60 },
            });
        }
    };

    const setTimerActive = (isActive: boolean) => {
         updateState(prev => ({ ...prev, timer: { ...prev.timer, isActive } }));
    };

    const setTimerSeconds = (seconds: number) => {
        updateState(prev => ({ ...prev, timer: { ...prev.timer, seconds } }));
    };


    return { ...state, startGame, answerQuiz, saveNote, saveReflection, toggleTheme, resetProgress, showToast, setTimerActive, setTimerSeconds };
};