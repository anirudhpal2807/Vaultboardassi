// String formatting functions for the LCM game

export const formatScore = (score: number): string => {
  return score.toString().padStart(4, '0');
};

export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const formatQuestionNumber = (current: number, total: number): string => {
  return `${current} of ${total}`;
};

export const formatMultiples = (num: number, count: number): string => {
  const multiples = Array.from({ length: count }, (_, i) => num * (i + 1));
  return multiples.join(', ');
};

export const formatLCMExplanation = (num1: number, num2: number, lcm: number): string => {
  return `The LCM of ${num1} and ${num2} is ${lcm}`;
};

export const formatDifficulty = (difficulty: string): string => {
  return difficulty.charAt(0).toUpperCase() + difficulty.slice(1);
};