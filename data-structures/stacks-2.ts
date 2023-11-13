import { Stack } from './lib/stack';

export function countValues<T>(stack: Stack<T>): number {
  if (stack.pop() === undefined) return 0;
  return 1 + countValues(stack);
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
