export function flattenArray(arr: unknown[]): unknown[] {
  if (arr.length === 1 && !Array.isArray(arr[0])) {
    return [arr[0]];
  }

  if (arr.length === 1 && Array.isArray(arr[0])) {
    return [...flattenArray(arr[0])];
  }

  if (Array.isArray(arr[0])) {
    return [...flattenArray(arr[0]), ...flattenArray(arr.slice(1))];
  }
  return [arr[0], ...flattenArray(arr.slice(1))];
}
