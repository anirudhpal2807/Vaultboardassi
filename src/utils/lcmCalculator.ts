// LCM calculation utilities

export const calculateGCD = (a: number, b: number): number => {
  if (b === 0) return a;
  return calculateGCD(b, a % b);
};

export const calculateLCM = (a: number, b: number): number => {
  return (a * b) / calculateGCD(a, b);
};

export const calculateLCMMultiple = (numbers: number[]): number => {
  if (numbers.length === 0) return 0;
  if (numbers.length === 1) return numbers[0];
  
  return numbers.reduce((acc, num) => calculateLCM(acc, num));
};

export const getMultiples = (num: number, count: number = 10): number[] => {
  return Array.from({ length: count }, (_, i) => num * (i + 1));
};

export const findCommonMultiples = (multiples1: number[], multiples2: number[]): number[] => {
  return multiples1.filter(m => multiples2.includes(m));
};

export const generateLCMSteps = (num1: number, num2: number): string[] => {
  const steps: string[] = [];
  steps.push(`Finding LCM of ${num1} and ${num2}`);
  
  const multiples1 = getMultiples(num1, 8);
  const multiples2 = getMultiples(num2, 8);
  
  steps.push(`Multiples of ${num1}: ${multiples1.join(', ')}`);
  steps.push(`Multiples of ${num2}: ${multiples2.join(', ')}`);
  
  const common = findCommonMultiples(multiples1, multiples2);
  steps.push(`Common multiples: ${common.join(', ')}`);
  
  const lcm = calculateLCM(num1, num2);
  steps.push(`The smallest common multiple (LCM) is: ${lcm}`);
  
  return steps;
};