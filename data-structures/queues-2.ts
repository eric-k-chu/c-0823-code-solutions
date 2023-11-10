/* eslint-disable @typescript-eslint/no-empty-function */
import { Queue } from './lib/queue';

export function postpone<T>(queue: Queue<T>): void {
  const item = queue.dequeue();
  if (item !== undefined) {
    queue.enqueue(item);
  }
}

export function take2nd<T>(queue: Queue<T>): T | undefined {
  postpone(queue);
  return queue.dequeue();
}
