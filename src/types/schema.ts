// Type definitions for the LCM game data structures

// Props types
export interface GameProps {
  initialNumbers?: number[];
  showTutorial?: boolean;
  onScoreUpdate?: (score: number) => void;
  onLevelComplete?: (level: number) => void;
}

export interface QuizQuestionProps {
  question: QuizQuestion;
  onAnswer: (answer: number) => void;
  timeRemaining: number;
}

export interface VisualMultiplesProps {
  multiples1: number[];
  multiples2: number[];
  commonMultiples: number[];
  lcm: number;
  animationSpeed?: number;
}

export interface ScoreDisplayProps {
  currentScore: number;
  highScore: number;
  level: number;
  progress: number;
}

// Store types
export interface GameState {
  currentMode: 'learn' | 'quiz' | 'practice';
  difficulty: 'easy' | 'medium' | 'hard';
  score: number;
  highScore: number;
  currentLevel: number;
  soundEnabled: boolean;
  musicEnabled: boolean;
  achievements: Achievement[];
}

export interface Achievement {
  id: number;
  name: string;
  unlocked: boolean;
  description?: string;
  icon?: string;
}

// Query types
export interface QuizQuestion {
  id: number;
  num1: number;
  num2: number;
  correctAnswer: number;
  options: number[];
  difficulty: 'easy' | 'medium' | 'hard';
  userAnswer?: number | null;
  timeSpent?: number;
}

export interface QuizProgress {
  currentQuestionIndex: number;
  totalQuestions: number;
  correctAnswers: number;
  timeRemaining: number;
}

export interface ScoreRecord {
  date: string;
  score: number;
  questionsAnswered: number;
  difficulty?: string;
}

export interface VisualData {
  multiples1: number[];
  multiples2: number[];
  commonMultiples: number[];
  lcm: number;
}