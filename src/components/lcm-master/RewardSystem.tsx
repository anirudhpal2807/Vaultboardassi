'use client';

import { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';

interface RewardSystemProps {
  coins: number;
  gems: number;
  streak: number;
  badges: string[];
}

export default function RewardSystem({ coins, gems, streak, badges }: RewardSystemProps) {
  const [showCoinAnimation, setShowCoinAnimation] = useState(false);

  useEffect(() => {
    if (coins > 0) {
      setShowCoinAnimation(true);
      const timer = setTimeout(() => setShowCoinAnimation(false), 500);
      return () => clearTimeout(timer);
    }
  }, [coins]);

  return (
    <div className="bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl shadow-lg p-4 text-white">
      <div className="grid grid-cols-3 gap-3">
        {/* Coins */}
        <div className="bg-white/20 rounded-xl p-3 text-center backdrop-blur-sm">
          <div className={`text-2xl mb-1 ${showCoinAnimation ? 'animate-bounce' : ''}`}>
            🪙
          </div>
          <div className="font-bold text-lg">{coins}</div>
          <div className="text-xs opacity-90">Coins</div>
        </div>

        {/* Gems */}
        <div className="bg-white/20 rounded-xl p-3 text-center backdrop-blur-sm">
          <div className="text-2xl mb-1">💎</div>
          <div className="font-bold text-lg">{gems}</div>
          <div className="text-xs opacity-90">Gems</div>
        </div>

        {/* Streak */}
        <div className="bg-white/20 rounded-xl p-3 text-center backdrop-blur-sm">
          <LocalFireDepartmentIcon className="w-6 h-6 mx-auto mb-1 text-orange-300" />
          <div className="font-bold text-lg">{streak}</div>
          <div className="text-xs opacity-90">Day Streak</div>
        </div>
      </div>

      {/* Badges */}
      {badges.length > 0 && (
        <div className="mt-3 pt-3 border-t border-white/30">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold opacity-90">Recent Badges</span>
            <EmojiEventsIcon className="w-4 h-4" />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {badges.slice(0, 5).map((badge, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white/30 rounded-lg px-3 py-1 text-xs font-semibold backdrop-blur-sm"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}