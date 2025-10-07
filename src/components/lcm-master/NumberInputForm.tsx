'use client';

import { useState } from 'react';

interface NumberInputFormProps {
  onCalculate: (num1: number, num2: number) => void;
  disabled?: boolean;
}

export default function NumberInputForm({ onCalculate, disabled = false }: NumberInputFormProps) {
  const [num1, setNum1] = useState<string>('');
  const [num2, setNum2] = useState<string>('');
  const [errors, setErrors] = useState<{ num1?: string; num2?: string }>({});

  const validateInput = (value: string): boolean => {
    const num = parseInt(value);
    return !isNaN(num) && num > 0 && num <= 100;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: { num1?: string; num2?: string } = {};
    
    if (!validateInput(num1)) {
      newErrors.num1 = 'Enter a number between 1 and 100';
    }
    
    if (!validateInput(num2)) {
      newErrors.num2 = 'Enter a number between 1 and 100';
    }
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      onCalculate(parseInt(num1), parseInt(num2));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
      <h3 className="text-xl font-bold text-purple-700 mb-4">Enter Two Numbers</h3>
      
      <div className="space-y-4">
        <div>
          <label htmlFor="num1" className="block text-sm font-semibold text-gray-700 mb-2">
            First Number
          </label>
          <input
            type="number"
            id="num1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            disabled={disabled}
            className={`w-full px-4 py-3 text-lg rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-purple-400 ${
              errors.num1 ? 'border-red-400' : 'border-purple-200'
            } ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
            placeholder="e.g., 6"
            min="1"
            max="100"
          />
          {errors.num1 && <p className="text-red-500 text-sm mt-1">{errors.num1}</p>}
        </div>

        <div>
          <label htmlFor="num2" className="block text-sm font-semibold text-gray-700 mb-2">
            Second Number
          </label>
          <input
            type="number"
            id="num2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            disabled={disabled}
            className={`w-full px-4 py-3 text-lg rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:ring-purple-400 ${
              errors.num2 ? 'border-red-400' : 'border-purple-200'
            } ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'}`}
            placeholder="e.g., 8"
            min="1"
            max="100"
          />
          {errors.num2 && <p className="text-red-500 text-sm mt-1">{errors.num2}</p>}
        </div>
      </div>

      <button
        type="submit"
        disabled={disabled || !num1 || !num2}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-6 rounded-xl hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
      >
        Find LCM
      </button>
    </form>
  );
}