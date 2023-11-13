import { Queue } from './lib/queue';

export function takeValueAtIndex<T>(
  queue: Queue<T>,
  index: number
): T | undefined {
  if (queue.peek() === undefined) return undefined;

  let count = 0;
  while (count++ !== index) {
    const item = queue.dequeue();
    if (item !== undefined) {
      queue.enqueue(item);
    }
  }
  return queue.dequeue();
}

export function takeSmaller(queue: Queue<number>): number | undefined {
  const first = queue.dequeue();
  const second = queue.dequeue();
  if (first === undefined || second === undefined) return first;

  if (first <= second) {
    queue.enqueue(second);
    return first;
  } else {
    queue.enqueue(first);
    return second;
  }
}

export function takeNextSmallest(
  numberQueue: Queue<number>
): number | undefined {
  let first = numberQueue.dequeue();
  let successor = numberQueue.peek();
  if (first === undefined || successor === undefined) return first;

  while (first > successor) {
    numberQueue.enqueue(first);
    first = numberQueue.dequeue() ?? 0;
    successor = numberQueue.peek() ?? 0;
  }

  return first;
}
