// Mock data for the LCM learning game

// Mock store data for game state
export const mockStore = {
  currentMode: 'learn' as const,
  difficulty: 'medium' as const,
  score: 850,
  highScore: 1250,
  currentLevel: 3,
  soundEnabled: true,
  musicEnabled: true,
  achievements: [
    { id: 1, name: 'First Steps', unlocked: true },
    { id: 2, name: 'Quick Learner', unlocked: true },
    { id: 3, name: 'Math Wizard', unlocked: false }
  ]
};

// Mock query data for quiz questions

export const mockQuery = {
  quizQuestions: [
    {
      id: 1,
      num1: 6,
      num2: 8,
      correctAnswer: 24,
      options: [12, 16, 24, 48],
      difficulty: 'easy' as const
    },
    {
      id: 2,
      num1: 12,
      num2: 15,
      correctAnswer: 60,
      options: [30, 45, 60, 180],
      difficulty: 'medium' as const
    },
    {
      id: 3,
      num1: 18,
      num2: 24,
      correctAnswer: 72,
      options: [36, 48, 72, 144],
      difficulty: 'medium' as const
    }
  ],
  recentScores: [
    { date: '2025-01-15', score: 850, questionsAnswered: 10 },
    { date: '2025-01-14', score: 720, questionsAnswered: 8 },
    { date: '2025-01-13', score: 650, questionsAnswered: 7 }
  ]
};


// Mock root props for the main game component

export const mockRootProps = {
  initialNumbers: [6, 8],
  showTutorial: false,
  currentQuestion: {
    id: 1,
    num1: 6,
    num2: 8,
    correctAnswer: 24,
    options: [12, 16, 24, 48],
    userAnswer: null,
    timeSpent: 0
  },
  quizProgress: {
    currentQuestionIndex: 0,
    totalQuestions: 10,
    correctAnswers: 0,
    timeRemaining: 300
  },
  visualData: {
    multiples1: [6, 12, 18, 24, 30, 36, 42, 48],
    multiples2: [8, 16, 24, 32, 40, 48, 56, 64],
    commonMultiples: [24, 48],
    lcm: 24
  }
};