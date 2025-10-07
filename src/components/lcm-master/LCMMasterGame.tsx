'use client';

import { useState, useEffect } from 'react';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SyncOutlinedIcon from '@mui/icons-material/SyncOutlined';
import NumberInputForm from './NumberInputForm';
import VisualMultiplesDisplay from './VisualMultiplesDisplay';
import QuizMode from './QuizMode';
import ScoreDisplay from './ScoreDisplay';
import SettingsDialog from './SettingsDialog';
import ConfettiEffect from './ConfettiEffect';
import { calculateLCM, getMultiples, findCommonMultiples } from '@/utils/lcmCalculator';
import type { QuizQuestion } from '@/types/schema';

type GameMode = 'menu' | 'learn' | 'quiz';

export default function LCMMasterGame() {
  const [gameMode, setGameMode] = useState<GameMode>('menu');
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [lcm, setLcm] = useState<number>(0);
  const [multiples1, setMultiples1] = useState<number[]>([]);
  const [multiples2, setMultiples2] = useState<number[]>([]);
  const [commonMultiples, setCommonMultiples] = useState<number[]>([]);
  
  // Quiz state
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(1250);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(300);
  const [level, setLevel] = useState(1);
  
  // Settings state
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('medium');
  
  // Animation state
  const [showConfetti, setShowConfetti] = useState(false);

  // Generate quiz questions
  const generateQuizQuestions = (count: number = 10): QuizQuestion[] => {
    const questions: QuizQuestion[] = [];
    const ranges = {
      easy: { min: 2, max: 10 },
      medium: { min: 6, max: 20 },
      hard: { min: 12, max: 30 }
    };
    
    const range = ranges[difficulty];
    
    for (let i = 0; i < count; i++) {
      const n1 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      const n2 = Math.floor(Math.random() * (range.max - range.min + 1)) + range.min;
      const correctAnswer = calculateLCM(n1, n2);
      
      // Generate wrong options
      const options = [correctAnswer];
      while (options.length < 4) {
        const wrongAnswer = correctAnswer + Math.floor(Math.random() * 20) - 10;
        if (wrongAnswer > 0 && !options.includes(wrongAnswer)) {
          options.push(wrongAnswer);
        }
      }
      
      // Shuffle options
      options.sort(() => Math.random() - 0.5);
      
      questions.push({
        id: i + 1,
        num1: n1,
        num2: n2,
        correctAnswer,
        options,
        difficulty
      });
    }
    
    return questions;
  };

  // Timer effect for quiz mode
  useEffect(() => {
    if (gameMode === 'quiz' && timeRemaining > 0) {
      const timer = setTimeout(() => {
        setTimeRemaining(prev => prev - 1);
      }, 1000);
      
      return () => clearTimeout(timer);
    } else if (timeRemaining === 0 && gameMode === 'quiz') {
      handleQuizComplete();
    }
  }, [gameMode, timeRemaining]);

  const handleCalculate = (n1: number, n2: number) => {
    setNum1(n1);
    setNum2(n2);
    
    const calculatedLCM = calculateLCM(n1, n2);
    setLcm(calculatedLCM);
    
    const m1 = getMultiples(n1, 8);
    const m2 = getMultiples(n2, 8);
    const common = findCommonMultiples(m1, m2);
    
    setMultiples1(m1);
    setMultiples2(m2);
    setCommonMultiples(common);
  };

  const startQuiz = () => {
    const questions = generateQuizQuestions(10);
    setQuizQuestions(questions);
    setCurrentQuestionIndex(0);
    setScore(0);
    setCorrectAnswers(0);
    setTimeRemaining(300);
    setGameMode('quiz');
  };

  const handleQuizAnswer = (answer: number) => {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      const points = difficulty === 'easy' ? 50 : difficulty === 'medium' ? 100 : 150;
      setScore(prev => prev + points);
      setCorrectAnswers(prev => prev + 1);
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      handleQuizComplete();
    }
  };

  const handleQuizComplete = () => {
    if (score > highScore) {
      setHighScore(score);
    }
    setGameMode('menu');
  };

  const resetGame = () => {
    setGameMode('menu');
    setNum1(0);
    setNum2(0);
    setLcm(0);
    setMultiples1([]);
    setMultiples2([]);
    setCommonMultiples([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-blue-100 p-4 md:p-8">
      <ConfettiEffect active={showConfetti} />
      
      {/* Header */}
      <header className="max-w-7xl mx-auto mb-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <button
              onClick={resetGame}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <HomeOutlinedIcon className="w-6 h-6 text-purple-600" />
            </button>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                LCM Master
              </h1>
              <p className="text-sm text-gray-600">Learn & Play with Numbers!</p>
            </div>
          </div>
          
          <button
            onClick={() => setSettingsOpen(true)}
            className="p-3 hover:bg-purple-100 rounded-full transition-colors"
          >
            <SettingsOutlinedIcon className="w-6 h-6 text-purple-600" />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto">
        {gameMode === 'menu' && (
          <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
                Welcome to LCM Master!
              </h2>
              <p className="text-xl text-gray-600">
                Choose your adventure
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
              <button
                onClick={() => setGameMode('learn')}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transform hover:scale-105 transition-all group"
              >
                <div className="text-6xl mb-4">📚</div>
                <h3 className="text-2xl font-bold text-purple-700 mb-2">Learn Mode</h3>
                <p className="text-gray-600">
                  Discover how LCM works with visual examples
                </p>
              </button>
              
              <button
                onClick={startQuiz}
                className="bg-gradient-to-br from-purple-500 to-pink-500 text-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transform hover:scale-105 transition-all group"
              >
                <PlayCircleFilledOutlinedIcon className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Quiz Mode</h3>
                <p className="opacity-90">
                  Test your skills and earn points!
                </p>
              </button>
            </div>
          </div>
        )}

        {gameMode === 'learn' && (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <NumberInputForm onCalculate={handleCalculate} />
              
              {lcm > 0 && (
                <button
                  onClick={() => {
                    setNum1(0);
                    setNum2(0);
                    setLcm(0);
                    setMultiples1([]);
                    setMultiples2([]);
                    setCommonMultiples([]);
                  }}
                  className="w-full mt-4 bg-white text-purple-600 font-bold py-3 px-6 rounded-xl hover:bg-purple-50 transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <SyncOutlinedIcon />
                  Try Another
                </button>
              )}
            </div>
            
            <div className="lg:col-span-2">
              {lcm > 0 ? (
                <VisualMultiplesDisplay
                  num1={num1}
                  num2={num2}
                  multiples1={multiples1}
                  multiples2={multiples2}
                  commonMultiples={commonMultiples}
                  lcm={lcm}
                  showAnimation={true}
                />
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-12 flex items-center justify-center min-h-[400px]">
                  <div className="text-center text-gray-400">
                    <div className="text-6xl mb-4">🎯</div>
                    <p className="text-xl">Enter two numbers to see the magic!</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {gameMode === 'quiz' && quizQuestions.length > 0 && (
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <ScoreDisplay
                currentScore={score}
                highScore={highScore}
                level={level}
                correctAnswers={correctAnswers}
                totalQuestions={quizQuestions.length}
              />
            </div>
            
            <div className="lg:col-span-2">
              <QuizMode
                question={quizQuestions[currentQuestionIndex]}
                questionNumber={currentQuestionIndex + 1}
                totalQuestions={quizQuestions.length}
                onAnswer={handleQuizAnswer}
                onNext={handleNextQuestion}
                timeRemaining={timeRemaining}
              />
            </div>
          </div>
        )}
      </main>

      {/* Settings Dialog */}
      <SettingsDialog
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        soundEnabled={soundEnabled}
        musicEnabled={musicEnabled}
        difficulty={difficulty}
        onSoundToggle={() => setSoundEnabled(!soundEnabled)}
        onMusicToggle={() => setMusicEnabled(!musicEnabled)}
        onDifficultyChange={setDifficulty}
      />
    </div>
  );
}