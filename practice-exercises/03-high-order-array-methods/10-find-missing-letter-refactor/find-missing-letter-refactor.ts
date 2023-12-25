export function findMissingLetter(arr: string[]): string {
  const missing =
    arr
      .map((char) => char.charCodeAt(0))
      .filter((charCode, i, arr) => charCode !== arr[0] + i)[0] - 1;
  return String.fromCharCode(missing);
}
