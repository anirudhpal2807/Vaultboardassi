'use client';

import { useState, useEffect } from 'react';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import type { QuizQuestion } from '@/types/schema';
import { formatTime, formatQuestionNumber } from '@/utils/formatters';

interface QuizModeProps {
  question: QuizQuestion;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (answer: number) => void;
  onNext: () => void;
  timeRemaining: number;
}

export default function QuizMode({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
  onNext,
  timeRemaining
}: QuizModeProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
    setIsCorrect(false);
  }, [question.id]);

  const handleAnswerSelect = (answer: number) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    const correct = answer === question.correctAnswer;
    setIsCorrect(correct);
    onAnswer(answer);
  };

  const getOptionClass = (option: number) => {
    if (!isAnswered) {
      return selectedAnswer === option
        ? 'border-purple-500 bg-purple-50'
        : 'border-gray-300 hover:border-purple-300 hover:bg-purple-50';
    }

    if (option === question.correctAnswer) {
      return 'border-green-500 bg-green-50';
    }

    if (selectedAnswer === option && !isCorrect) {
      return 'border-red-500 bg-red-50';
    }

    return 'border-gray-300 opacity-50';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="text-sm font-semibold text-purple-600">
          Question {formatQuestionNumber(questionNumber, totalQuestions)}
        </div>
        <div className="flex items-center gap-2 text-orange-600">
          <TimerOutlinedIcon className="w-5 h-5" />
          <span className="font-bold">{formatTime(timeRemaining)}</span>
        </div>
      </div>

      {/* Question */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl p-6">
        <h3 className="text-2xl font-bold text-gray-800 text-center">
          What is the LCM of {question.num1} and {question.num2}?
        </h3>
      </div>

      {/* Options */}
      <div className="grid grid-cols-2 gap-4">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => handleAnswerSelect(option)}
            disabled={isAnswered}
            className={`relative p-6 rounded-xl border-2 transition-all transform hover:scale-105 disabled:transform-none ${getOptionClass(
              option
            )}`}
          >
            <span className="text-3xl font-bold text-gray-800">{option}</span>
            
            {isAnswered && option === question.correctAnswer && (
              <CheckCircleOutlinedIcon className="absolute top-2 right-2 w-6 h-6 text-green-600" />
            )}
            
            {isAnswered && selectedAnswer === option && !isCorrect && (
              <CloseOutlinedIcon className="absolute top-2 right-2 w-6 h-6 text-red-600" />
            )}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {isAnswered && (
        <div
          className={`p-4 rounded-xl animate-fade-in ${
            isCorrect ? 'bg-green-100 border-2 border-green-400' : 'bg-red-100 border-2 border-red-400'
          }`}
        >
          <p className={`text-center font-bold text-lg ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {isCorrect ? '🎉 Awesome! That\'s correct!' : '❌ Oops! Try the next one!'}
          </p>
          {!isCorrect && (
            <p className="text-center text-gray-700 mt-2">
              The correct answer is <span className="font-bold">{question.correctAnswer}</span>
            </p>
          )}
        </div>
      )}

      {/* Next Button */}
      {isAnswered && (
        <button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all shadow-lg"
        >
          Next Question
        </button>
      )}
    </div>
  );
}