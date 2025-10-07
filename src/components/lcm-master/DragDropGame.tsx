'use client';

import { useState, useRef } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

interface DragDropGameProps {
  num1: number;
  num2: number;
  correctAnswer: number;
  onComplete: (isCorrect: boolean) => void;
}

export default function DragDropGame({ num1, num2, correctAnswer, onComplete }: DragDropGameProps) {
  const [draggedNumber, setDraggedNumber] = useState<number | null>(null);
  const [droppedNumbers, setDroppedNumbers] = useState<number[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const multiples1 = Array.from({ length: 6 }, (_, i) => num1 * (i + 1));
  const multiples2 = Array.from({ length: 6 }, (_, i) => num2 * (i + 1));
  const allMultiples = [...new Set([...multiples1, ...multiples2])].sort((a, b) => a - b);

  const handleDragStart = (number: number) => {
    setDraggedNumber(number);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (draggedNumber && !droppedNumbers.includes(draggedNumber)) {
      const newDropped = [...droppedNumbers, draggedNumber];
      setDroppedNumbers(newDropped);
      setDraggedNumber(null);

      // Check if the answer is complete
      if (newDropped.length === 1) {
        const correct = newDropped[0] === correctAnswer;
        setIsCorrect(correct);
        setIsComplete(true);
        setTimeout(() => onComplete(correct), 1500);
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-purple-700 mb-2">Drag & Drop Challenge!</h3>
        <p className="text-gray-600">Drag the LCM of {num1} and {num2} to the box below</p>
      </div>

      {/* Draggable numbers */}
      <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
        {allMultiples.map((num) => (
          <div
            key={num}
            draggable={!droppedNumbers.includes(num) && !isComplete}
            onDragStart={() => handleDragStart(num)}
            className={`p-4 rounded-xl text-center font-bold text-white cursor-move transition-all transform hover:scale-110 ${
              droppedNumbers.includes(num)
                ? 'bg-gray-300 opacity-50 cursor-not-allowed'
                : 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-lg'
            }`}
          >
            {num}
          </div>
        ))}
      </div>

      {/* Drop zone */}
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`min-h-32 border-4 border-dashed rounded-2xl flex items-center justify-center transition-all ${
          isComplete
            ? isCorrect
              ? 'border-green-500 bg-green-50'
              : 'border-red-500 bg-red-50'
            : 'border-purple-300 bg-purple-50 hover:border-purple-500 hover:bg-purple-100'
        }`}
      >
        {droppedNumbers.length === 0 ? (
          <p className="text-gray-400 text-lg font-semibold">Drop the LCM here</p>
        ) : (
          <div className="text-center">
            <div className="text-5xl font-bold text-purple-700 mb-2">
              {droppedNumbers[0]}
            </div>
            {isComplete && (
              <div className="flex items-center justify-center gap-2">
                {isCorrect ? (
                  <>
                    <CheckCircleIcon className="w-6 h-6 text-green-600" />
                    <span className="text-green-700 font-bold">Correct!</span>
                  </>
                ) : (
                  <>
                    <CancelIcon className="w-6 h-6 text-red-600" />
                    <span className="text-red-700 font-bold">Try again!</span>
                  </>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}