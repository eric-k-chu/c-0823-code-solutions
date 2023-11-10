/* eslint-disable @typescript-eslint/no-empty-function */
import { LinkedList } from './lib/linked-list';

export function removeTail<T>(list: LinkedList<T>): void {
  if (list.next) {
    let current = list;
    let prev: LinkedList<T> | null = null;

    while (current.next) {
      prev = current;
      current = current.next;
    }
    if (prev !== null) {
      prev.next = null;
    }
  }
}

export function updateNext<T>(list: LinkedList<T>, value: T): void {
  if (list.next) list.next.data = value;
}

export function insertNext<T>(list: LinkedList<T>, value: T): void {
  const newNode = new LinkedList(value);

  if (list.next === null) list.next = newNode;

  const oldSecondNode = list.next;
  list.next = newNode;
  newNode.next = oldSecondNode;
}

export function removeNext<T>(list: LinkedList<T>): void {
  // current node points to second node next
  if (list.next) list.next = list.next.next;
}

export function swapFront<T>(list: LinkedList<T>): LinkedList<T> | null {
  if (list.next === null) return list;

  const newCurrent = list.next;
  const oldCurrentNext = list.next.next;

  newCurrent.next = list;
  list.next = oldCurrentNext;

  return newCurrent;
}
