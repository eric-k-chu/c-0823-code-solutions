/* eslint-disable @typescript-eslint/no-empty-function */
import { Stack } from './lib/stack';

export function get2ndFromTop<T>(stack: Stack<T>): T | undefined {
  if (stack.peek()) {
    const first = stack.pop() as T;
    if (stack.peek() === undefined) {
      stack.push(first);
    } else {
      const second = stack.pop() as T;
      stack.push(second);
      stack.push(first);
      return second;
    }
  }
  return undefined;
}

export function insertUnderTop<T>(stack: Stack<T>, value: T): void {
  if (stack.peek() !== undefined) {
    const top = stack.pop() as T;
    stack.push(value);
    console.log(stack);
    stack.push(top);
  }
}
