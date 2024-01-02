export function sumOfEvenSquares(numbers: number[]): number {
  return numbers.reduce((acc, n) => (acc = acc + (n % 2 === 0 ? n * n : 0)), 0);
}
