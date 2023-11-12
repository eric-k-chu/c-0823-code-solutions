/* eslint-disable @typescript-eslint/no-empty-function */
import { LinkedList } from './lib/linked-list';

export function getLength<T>(list: LinkedList<T>): number {
  if (!list) return 0;

  if (!list.next) return 1;

  return 1 + getLength(list.next);
}

export function append<T>(list: LinkedList<T>, value: T): void {
  const newNode = new LinkedList(value);
  let current = list;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
}

export function getTail<T>(list: LinkedList<T>): T | null {
  let current = list;
  while (current.next) {
    current = current.next;
  }
  return current.data;
}

export function includes<T>(list: LinkedList<T>, value: T): boolean {
  let current = list;
  while (current) {
    if (current.data === value) return true;
    current = current.next as LinkedList<T>;
  }
  return false;
}
