'use client';

import { useEffect, useState } from 'react';

interface VisualMultiplesDisplayProps {
  num1: number;
  num2: number;
  multiples1: number[];
  multiples2: number[];
  commonMultiples: number[];
  lcm: number;
  showAnimation?: boolean;
}

export default function VisualMultiplesDisplay({
  num1,
  num2,
  multiples1,
  multiples2,
  commonMultiples,
  lcm,
  showAnimation = true
}: VisualMultiplesDisplayProps) {
  const [visibleMultiples1, setVisibleMultiples1] = useState<number[]>([]);
  const [visibleMultiples2, setVisibleMultiples2] = useState<number[]>([]);
  const [showLCM, setShowLCM] = useState(false);

  useEffect(() => {
    if (showAnimation) {
      setVisibleMultiples1([]);
      setVisibleMultiples2([]);
      setShowLCM(false);

      multiples1.forEach((_, index) => {
        setTimeout(() => {
          setVisibleMultiples1(prev => [...prev, multiples1[index]]);
        }, index * 200);
      });

      multiples2.forEach((_, index) => {
        setTimeout(() => {
          setVisibleMultiples2(prev => [...prev, multiples2[index]]);
        }, index * 200);
      });

      setTimeout(() => {
        setShowLCM(true);
      }, Math.max(multiples1.length, multiples2.length) * 200 + 500);
    } else {
      setVisibleMultiples1(multiples1);
      setVisibleMultiples2(multiples2);
      setShowLCM(true);
    }
  }, [multiples1, multiples2, showAnimation]);

  const isCommon = (num: number) => commonMultiples.includes(num);
  const isLCM = (num: number) => num === lcm;

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
      <h3 className="text-2xl font-bold text-center text-purple-700 mb-6">Visual Multiples</h3>

      {/* Multiples of first number */}
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-blue-600">Multiples of {num1}:</h4>
        <div className="flex flex-wrap gap-3">
          {visibleMultiples1.map((multiple, index) => (
            <div
              key={index}
              className={`w-16 h-16 flex items-center justify-center rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-110 ${
                isLCM(multiple)
                  ? 'bg-gradient-to-br from-yellow-400 to-orange-500 ring-4 ring-yellow-300 animate-pulse'
                  : isCommon(multiple)
                  ? 'bg-gradient-to-br from-green-400 to-teal-500'
                  : 'bg-gradient-to-br from-blue-400 to-blue-600'
              }`}
              style={{
                animation: showAnimation ? `bounce-in 0.5s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              {multiple}
            </div>
          ))}
        </div>
      </div>

      {/* Multiples of second number */}
      <div className="space-y-3">
        <h4 className="text-lg font-semibold text-pink-600">Multiples of {num2}:</h4>
        <div className="flex flex-wrap gap-3">
          {visibleMultiples2.map((multiple, index) => (
            <div
              key={index}
              className={`w-16 h-16 flex items-center justify-center rounded-xl font-bold text-white transition-all duration-300 transform hover:scale-110 ${
                isLCM(multiple)
                  ? 'bg-gradient-to-br from-yellow-400 to-orange-500 ring-4 ring-yellow-300 animate-pulse'
                  : isCommon(multiple)
                  ? 'bg-gradient-to-br from-green-400 to-teal-500'
                  : 'bg-gradient-to-br from-pink-400 to-pink-600'
              }`}
              style={{
                animation: showAnimation ? `bounce-in 0.5s ease-out ${index * 0.1}s both` : 'none'
              }}
            >
              {multiple}
            </div>
          ))}
        </div>
      </div>

      {/* LCM Result */}
      {showLCM && (
        <div className="mt-6 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border-2 border-purple-300 animate-fade-in">
          <div className="text-center">
            <p className="text-lg font-semibold text-gray-700 mb-2">The LCM is:</p>
            <p className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              {lcm}
            </p>
            <p className="text-sm text-gray-600 mt-3">
              Common multiples are highlighted in green, and the LCM is highlighted in yellow!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}