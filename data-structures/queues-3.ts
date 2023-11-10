import { Queue } from './lib/queue';

export function takeValueAtIndex<T>(
  queue: Queue<T>,
  index: number
): T | undefined {
  if (queue.peek() === undefined) return undefined;

  let count = 0;
  while (count++ < index) {
    const item = queue.dequeue();
    if (item !== undefined) {
      queue.enqueue(item);
    }
  }
}

export function takeSmaller(queue: Queue<number>): number | undefined {
  return undefined;
}

export function takeNextSmallest(
  numberQueue: Queue<number>
): number | undefined {
  return undefined;
}
