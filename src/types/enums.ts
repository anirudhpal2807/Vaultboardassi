// Enums for the LCM learning game

export enum GameMode {
  LEARN = 'learn',
  QUIZ = 'quiz',
  PRACTICE = 'practice'
}

export enum DifficultyLevel {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export enum QuizStatus {
  NOT_STARTED = 'not_started',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
  PAUSED = 'paused'
}

export enum AnswerStatus {
  CORRECT = 'correct',
  INCORRECT = 'incorrect',
  UNANSWERED = 'unanswered'
}

export enum AnimationType {
  CONFETTI = 'confetti',
  SPARKLE = 'sparkle',
  BOUNCE = 'bounce',
  FADE = 'fade',
  SLIDE = 'slide'
}

export enum SoundEffect {
  CORRECT = 'correct',
  INCORRECT = 'incorrect',
  CLICK = 'click',
  SUCCESS = 'success',
  LEVEL_UP = 'level_up',
  GAME_OVER = 'game_over'
}