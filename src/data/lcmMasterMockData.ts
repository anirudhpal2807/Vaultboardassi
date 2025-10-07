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
    { 
      id: 'first_steps',
      name: 'First Steps',
      title: 'First Correct Answer',
      unlocked: true,
      description: 'You got your first answer correct!',
      icon: '🎯',
      reward: { coins: 50 }
    },
    { 
      id: 'quick_learner',
      name: 'Quick Learner',
      title: '5 Correct Answers',
      unlocked: true,
      description: 'You answered 5 questions correctly!',
      icon: '⚡',
      reward: { coins: 100, gems: 1 }
    },
    { 
      id: 'math_wizard',
      name: 'Math Wizard',
      title: 'Complete 10 Levels',
      unlocked: false,
      description: 'Complete all 10 levels with 3 stars!',
      icon: '🧙‍♂️',
      reward: { coins: 500, gems: 5 }
    }
  ],
  playerProgress: {
    currentLevel: 3,
    coins: 250,
    gems: 8,
    streak: 5,
    totalStars: 12,
    unlockedCharacters: ['buddy', 'star'],
    selectedCharacter: 'buddy'
  }
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
    difficulty: 'easy' as const,
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
  },
  levels: [
    { id: 1, name: 'Space Explorer', theme: 'space', emoji: '🚀', unlocked: true, completed: true, stars: 3, maxStars: 3, difficulty: 'easy' as const, questionsCount: 5 },
    { id: 2, name: 'Ocean Adventure', theme: 'underwater', emoji: '🌊', unlocked: true, completed: true, stars: 2, maxStars: 3, difficulty: 'easy' as const, questionsCount: 5 },
    { id: 3, name: 'Jungle Quest', theme: 'jungle', emoji: '🦁', unlocked: true, completed: false, stars: 0, maxStars: 3, difficulty: 'medium' as const, questionsCount: 7 }
  ]
};