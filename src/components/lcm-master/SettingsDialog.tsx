'use client';

import { useState } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import VolumeUpOutlinedIcon from '@mui/icons-material/VolumeUpOutlined';
import VolumeMuteOutlinedIcon from '@mui/icons-material/VolumeMuteOutlined';

interface SettingsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  soundEnabled: boolean;
  musicEnabled: boolean;
  difficulty: 'easy' | 'medium' | 'hard';
  onSoundToggle: () => void;
  onMusicToggle: () => void;
  onDifficultyChange: (difficulty: 'easy' | 'medium' | 'hard') => void;
}

export default function SettingsDialog({
  isOpen,
  onClose,
  soundEnabled,
  musicEnabled,
  difficulty,
  onSoundToggle,
  onMusicToggle,
  onDifficultyChange
}: SettingsDialogProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md mx-4 animate-scale-in">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-purple-700">Settings</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <CloseOutlinedIcon className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Sound Settings */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Audio</h3>
            
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                {soundEnabled ? (
                  <VolumeUpOutlinedIcon className="w-6 h-6 text-purple-600" />
                ) : (
                  <VolumeMuteOutlinedIcon className="w-6 h-6 text-gray-400" />
                )}
                <span className="font-medium">Sound Effects</span>
              </div>
              <button
                onClick={onSoundToggle}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  soundEnabled ? 'bg-purple-500' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    soundEnabled ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex items-center gap-3">
                {musicEnabled ? (
                  <VolumeUpOutlinedIcon className="w-6 h-6 text-purple-600" />
                ) : (
                  <VolumeMuteOutlinedIcon className="w-6 h-6 text-gray-400" />
                )}
                <span className="font-medium">Background Music</span>
              </div>
              <button
                onClick={onMusicToggle}
                className={`relative w-14 h-8 rounded-full transition-colors ${
                  musicEnabled ? 'bg-purple-500' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform ${
                    musicEnabled ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Difficulty Settings */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-700">Difficulty</h3>
            
            <div className="grid grid-cols-3 gap-3">
              {(['easy', 'medium', 'hard'] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => onDifficultyChange(level)}
                  className={`py-3 px-4 rounded-xl font-semibold transition-all transform hover:scale-105 ${
                    difficulty === level
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all shadow-lg"
        >
          Done
        </button>
      </div>
    </div>
  );
}