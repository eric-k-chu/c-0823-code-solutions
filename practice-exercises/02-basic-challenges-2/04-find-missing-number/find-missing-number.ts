export function findMissingNumber(arr: number[]): number | undefined {
  const set = new Set(arr);

  for (let i = 1; i <= arr.length; i++) {
    if (!set.has(i)) return i;
  }
  return undefined;
}
