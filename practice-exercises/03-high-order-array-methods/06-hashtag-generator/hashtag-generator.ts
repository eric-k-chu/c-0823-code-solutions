export function generateHashtag(str: string): string | undefined {
  if (str.length < 1 || str.length > 140) return undefined;

  const pascalStr = str
    .split(' ')
    .filter((n) => n.length > 1)
    .map((n) => n[0].toUpperCase() + n.slice(1))
    .join('');

  return `#${pascalStr}`;
}
