'use client';

import { useEffect, useState } from 'react';

export type CharacterMood = 'happy' | 'excited' | 'thinking' | 'celebrating' | 'encouraging';

interface CharacterCompanionProps {
  mood: CharacterMood;
  message?: string;
  character?: 'buddy' | 'star' | 'robot' | 'wizard';
  position?: 'left' | 'right' | 'center';
  size?: 'small' | 'medium' | 'large';
}

export default function CharacterCompanion({
  mood,
  message,
  character = 'buddy',
  position = 'right',
  size = 'medium'
}: CharacterCompanionProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timer = setTimeout(() => setIsAnimating(false), 1000);
    return () => clearTimeout(timer);
  }, [mood]);

  const getCharacterEmoji = () => {
    const characters = {
      buddy: '🐻',
      star: '⭐',
      robot: '🤖',
      wizard: '🧙‍♂️'
    };
    return characters[character];
  };

  const getMoodAnimation = () => {
    const animations = {
      happy: 'animate-bounce',
      excited: 'animate-pulse',
      thinking: '',
      celebrating: 'animate-bounce',
      encouraging: 'animate-pulse'
    };
    return animations[mood];
  };

  const getSizeClass = () => {
    const sizes = {
      small: 'text-4xl',
      medium: 'text-6xl',
      large: 'text-8xl'
    };
    return sizes[size];
  };

  const getPositionClass = () => {
    const positions = {
      left: 'left-4',
      right: 'right-4',
      center: 'left-1/2 transform -translate-x-1/2'
    };
    return positions[position];
  };

  return (
    <div className={`fixed bottom-4 ${getPositionClass()} z-40 animate-fade-in`}>
      <div className="relative">
        {/* Character */}
        <div
          className={`${getSizeClass()} ${
            isAnimating ? getMoodAnimation() : ''
          } transition-all duration-300 cursor-pointer hover:scale-110`}
        >
          {getCharacterEmoji()}
        </div>

        {/* Speech bubble */}
        {message && (
          <div className="absolute bottom-full mb-4 left-1/2 transform -translate-x-1/2 animate-scale-in">
            <div className="bg-white rounded-2xl shadow-lg px-4 py-3 max-w-xs">
              <p className="text-sm font-semibold text-gray-800 text-center">{message}</p>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-2">
                <div className="w-4 h-4 bg-white transform rotate-45" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}