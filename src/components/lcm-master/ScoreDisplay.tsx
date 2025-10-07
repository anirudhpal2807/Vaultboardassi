'use client';

import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import { formatScore } from '@/utils/formatters';

interface ScoreDisplayProps {
  currentScore: number;
  highScore: number;
  level: number;
  correctAnswers: number;
  totalQuestions: number;
}

export default function ScoreDisplay({
  currentScore,
  highScore,
  level,
  correctAnswers,
  totalQuestions
}: ScoreDisplayProps) {
  const progress = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;

  return (
    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg p-6 text-white">
      <div className="space-y-4">
        {/* Score Section */}
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm opacity-90">Score</p>
            <p className="text-3xl font-bold">{formatScore(currentScore)}</p>
          </div>
          <div className="text-right">
            <p className="text-sm opacity-90">High Score</p>
            <div className="flex items-center gap-2">
              <EmojiEventsOutlinedIcon className="w-6 h-6" />
              <p className="text-2xl font-bold">{formatScore(highScore)}</p>
            </div>
          </div>
        </div>

        {/* Level Section */}
        <div className="bg-white/20 rounded-xl p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <StarOutlinedIcon className="w-5 h-5" />
              <span className="font-semibold">Level {level}</span>
            </div>
            <span className="text-sm">
              {correctAnswers}/{totalQuestions}
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-white/30 rounded-full h-3 overflow-hidden">
            <div
              className="bg-white h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="bg-white/20 rounded-lg p-3">
            <p className="text-2xl font-bold">{correctAnswers}</p>
            <p className="text-xs opacity-90">Correct</p>
          </div>
          <div className="bg-white/20 rounded-lg p-3">
            <p className="text-2xl font-bold">{totalQuestions - correctAnswers}</p>
            <p className="text-xs opacity-90">Remaining</p>
          </div>
        </div>
      </div>
    </div>
  );
}