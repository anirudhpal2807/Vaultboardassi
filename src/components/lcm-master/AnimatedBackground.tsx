'use client';

import { useEffect, useState } from 'react';

interface AnimatedBackgroundProps {
  theme: string;
}

export default function AnimatedBackground({ theme }: AnimatedBackgroundProps) {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 20 + 10,
      delay: Math.random() * 5
    }));
    setParticles(newParticles);
  }, [theme]);

  const getThemeElements = () => {
    const themes: Record<string, string> = {
      space: '⭐',
      underwater: '🐠',
      jungle: '🌿',
      candy: '🍬',
      desert: '🌵',
      arctic: '❄️',
      volcano: '🔥',
      garden: '🌸',
      castle: '🏰',
      beach: '🏖️',
      default: '✨'
    };
    return themes[theme] || themes.default;
  };

  const getThemeGradient = () => {
    const gradients: Record<string, string> = {
      space: 'from-indigo-900 via-purple-900 to-pink-900',
      underwater: 'from-cyan-400 via-blue-500 to-blue-700',
      jungle: 'from-green-400 via-emerald-500 to-green-700',
      candy: 'from-pink-300 via-rose-400 to-pink-500',
      desert: 'from-yellow-300 via-orange-400 to-amber-500',
      arctic: 'from-blue-200 via-cyan-300 to-blue-400',
      volcano: 'from-red-500 via-orange-600 to-red-700',
      garden: 'from-lime-300 via-green-400 to-emerald-500',
      castle: 'from-purple-400 via-indigo-500 to-purple-600',
      beach: 'from-amber-200 via-yellow-300 to-orange-400',
      default: 'from-purple-100 via-pink-100 to-blue-100'
    };
    return gradients[theme] || gradients.default;
  };

  return (
    <div className={`fixed inset-0 bg-gradient-to-br ${getThemeGradient()} -z-10 overflow-hidden`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-float opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
            animationDelay: `${particle.delay}s`,
            animationDuration: '10s'
          }}
        >
          {getThemeElements()}
        </div>
      ))}
    </div>
  );
}