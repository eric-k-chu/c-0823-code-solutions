export function formatPhoneNumber(numbers: number[]): string {
  const areaCode = numbers.slice(0, 3).join('');
  const middle = numbers.slice(3, 6).join('');
  const end = numbers.slice(6).join('');
  return `(${areaCode}) ${middle}-${end}`;
}
