'use client';

import { useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LockIcon from '@mui/icons-material/Lock';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export interface Level {
  id: number;
  name: string;
  theme: string;
  emoji: string;
  unlocked: boolean;
  completed: boolean;
  stars: number;
  maxStars: number;
  difficulty: 'easy' | 'medium' | 'hard';
  questionsCount: number;
}

interface LevelMapProps {
  levels: Level[];
  onLevelSelect: (level: Level) => void;
  currentLevel: number;
}

export default function LevelMap({ levels, onLevelSelect, currentLevel }: LevelMapProps) {
  const [hoveredLevel, setHoveredLevel] = useState<number | null>(null);

  const getLevelColor = (theme: string) => {
    const colors: Record<string, string> = {
      space: 'from-indigo-500 to-purple-600',
      underwater: 'from-cyan-500 to-blue-600',
      jungle: 'from-green-500 to-emerald-600',
      candy: 'from-pink-500 to-rose-600',
      desert: 'from-yellow-500 to-orange-600',
      arctic: 'from-blue-400 to-cyan-500',
      volcano: 'from-red-500 to-orange-600',
      garden: 'from-lime-500 to-green-600',
      castle: 'from-purple-500 to-indigo-600',
      beach: 'from-amber-400 to-yellow-500'
    };
    return colors[theme] || 'from-purple-500 to-pink-600';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          Choose Your Level
        </h2>
        <p className="text-gray-600 mt-2">Complete levels to unlock new adventures!</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {levels.map((level) => (
          <button
            key={level.id}
            onClick={() => level.unlocked && onLevelSelect(level)}
            onMouseEnter={() => setHoveredLevel(level.id)}
            onMouseLeave={() => setHoveredLevel(null)}
            disabled={!level.unlocked}
            className={`relative p-4 rounded-2xl transition-all transform ${
              level.unlocked
                ? 'hover:scale-110 hover:shadow-2xl cursor-pointer'
                : 'opacity-50 cursor-not-allowed'
            } ${
              currentLevel === level.id
                ? 'ring-4 ring-yellow-400 shadow-xl scale-105'
                : ''
            }`}
            style={{
              background: level.unlocked
                ? `linear-gradient(135deg, var(--tw-gradient-stops))`
                : '#e5e7eb'
            }}
          >
            {/* Lock icon for locked levels */}
            {!level.unlocked && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/20 rounded-2xl">
                <LockIcon className="w-12 h-12 text-gray-600" />
              </div>
            )}

            {/* Level content */}
            <div className={`text-center ${level.unlocked ? 'text-white' : 'text-gray-500'}`}>
              <div className="text-4xl mb-2">{level.emoji}</div>
              <div className="font-bold text-lg mb-1">Level {level.id}</div>
              <div className="text-xs opacity-90 mb-2">{level.name}</div>

              {/* Stars */}
              {level.unlocked && (
                <div className="flex justify-center gap-1 mb-2">
                  {Array.from({ length: level.maxStars }).map((_, i) => (
                    i < level.stars ? (
                      <StarIcon key={i} className="w-4 h-4 text-yellow-300" />
                    ) : (
                      <StarBorderIcon key={i} className="w-4 h-4 text-white/50" />
                    )
                  ))}
                </div>
              )}

              {/* Completed badge */}
              {level.completed && (
                <div className="absolute top-2 right-2">
                  <CheckCircleIcon className="w-6 h-6 text-green-400" />
                </div>
              )}
            </div>

            {/* Hover tooltip */}
            {hoveredLevel === level.id && level.unlocked && (
              <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap z-10 animate-fade-in">
                {level.questionsCount} questions • {level.difficulty}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-gray-900" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}