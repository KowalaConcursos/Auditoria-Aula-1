// FIX: Import React to make the `React.ElementType` type available.
import React from 'react';

export interface QuizOption {
  text: string;
}

export interface Quiz {
  question: string;
  options: QuizOption[];
  correctAnswerIndex: number;
}

export interface Question {
  text: string;
  suggestedAnswer: string;
}

export interface DayData {
  id: number;
  dayName: string;
  title: string;
  summary: string;
  readings: string[];
  questions: Question[];
  quiz: Quiz;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  shadowColor: string;
}

export interface GameState {
  xp: number;
  lastCompletedDay: number; // -1 for not started, 0 for Saturday completed, etc.
  quizAnswers: { [dayId: number]: { choice: number; isCorrect: boolean } | undefined };
  notes: { [dayId: number]: string };
  reflections: { [dayId: number]: { [questionIndex: number]: string } };
  badgesEarned: string[];
  hasStarted: boolean;
  theme: 'light' | 'dark';
  timer: {
    isActive: boolean;
    seconds: number;
  }
}