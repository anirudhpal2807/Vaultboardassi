'use client';

import { useState } from 'react';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CloseIcon from '@mui/icons-material/Close';

interface HintSystemProps {
  num1: number;
  num2: number;
  onUseHint: () => void;
  hintsRemaining: number;
  hintCost: number;
}

export default function HintSystem({ num1, num2, onUseHint, hintsRemaining, hintCost }: HintSystemProps) {
  const [showHint, setShowHint] = useState(false);
  const [hintLevel, setHintLevel] = useState(0);

  const hints = [
    `Start by listing the multiples of ${num1} and ${num2}`,
    `Look for the smallest number that appears in both lists`,
    `The multiples of ${num1} are: ${num1}, ${num1 * 2}, ${num1 * 3}, ${num1 * 4}...`,
    `The multiples of ${num2} are: ${num2}, ${num2 * 2}, ${num2 * 3}, ${num2 * 4}...`
  ];

  const handleUseHint = () => {
    if (hintsRemaining > 0) {
      setShowHint(true);
      setHintLevel((prev) => Math.min(prev + 1, hints.length - 1));
      onUseHint();
    }
  };

  return (
    <div className="space-y-3">
      <button
        onClick={handleUseHint}
        disabled={hintsRemaining === 0}
        className={`w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all ${
          hintsRemaining > 0
            ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:from-yellow-500 hover:to-orange-600 transform hover:scale-105 shadow-lg'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        <LightbulbIcon className="w-5 h-5" />
        <span>Get Hint ({hintCost} 🪙)</span>
        <span className="ml-auto bg-white/20 px-2 py-1 rounded-full text-xs">
          {hintsRemaining} left
        </span>
      </button>

      {showHint && (
        <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4 animate-scale-in">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <LightbulbIcon className="w-5 h-5 text-yellow-600" />
              <span className="font-bold text-yellow-800">Hint</span>
            </div>
            <button
              onClick={() => setShowHint(false)}
              className="p-1 hover:bg-yellow-200 rounded-full transition-colors"
            >
              <CloseIcon className="w-4 h-4 text-yellow-600" />
            </button>
          </div>
          <p className="text-sm text-yellow-900">{hints[hintLevel]}</p>
        </div>
      )}
    </div>
  );
}