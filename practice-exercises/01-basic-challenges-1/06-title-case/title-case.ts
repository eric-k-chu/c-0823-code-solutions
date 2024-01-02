export function titleCase(str: string): string {
  return str
    .split(' ')
    .map((word) => word[0].toLocaleUpperCase() + word.slice(1))
    .join(' ');
}
