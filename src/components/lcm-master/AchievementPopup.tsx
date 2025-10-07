'use client';

import { useEffect, useState } from 'react';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import CloseIcon from '@mui/icons-material/Close';

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  reward: {
    coins?: number;
    gems?: number;
  };
}

interface AchievementPopupProps {
  achievement: Achievement | null;
  onClose: () => void;
}

export default function AchievementPopup({ achievement, onClose }: AchievementPopupProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (achievement) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        handleClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [achievement]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  if (!achievement) return null;

  return (
    <div
      className={`fixed top-4 right-4 z-50 transition-all duration-300 ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-2xl p-6 max-w-sm text-white animate-bounce-in">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-3 backdrop-blur-sm">
              <EmojiEventsIcon className="w-8 h-8" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Achievement Unlocked!</h3>
              <p className="text-sm opacity-90">{achievement.title}</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-white/20 rounded-full transition-colors"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm mb-3">
          <div className="text-4xl text-center mb-2">{achievement.icon}</div>
          <p className="text-sm text-center">{achievement.description}</p>
        </div>

        {/* Rewards */}
        <div className="flex justify-center gap-4">
          {achievement.reward.coins && (
            <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="text-xl">🪙</span>
                <span className="font-bold">+{achievement.reward.coins}</span>
              </div>
            </div>
          )}
          {achievement.reward.gems && (
            <div className="bg-white/20 rounded-lg px-4 py-2 backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="text-xl">💎</span>
                <span className="font-bold">+{achievement.reward.gems}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}