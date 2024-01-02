export function arrayIntersection(arr1: unknown[], arr2: unknown[]): unknown[] {
  const set = new Set(arr1);
  const arr = [];
  for (const el of arr2) {
    if (set.has(el)) arr.push(el);
  }
  return arr;
}
