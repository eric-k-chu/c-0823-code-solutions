import { Stack } from './lib/stack';

export function countValues<T>(stack: Stack<T>): number {
  let count = 0;
  while (stack.pop() !== undefined) count++;
  return count;
}

export function maxValue(stack: Stack<number>): number {
  let max = stack.pop();
  if (max === undefined) return -Infinity;

  while (stack.peek() !== undefined) {
    const num = stack.pop() ?? 0;
    if (num > max) {
      max = num;
    }
  }
  return max;
}
