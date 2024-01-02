export function areAllCharactersUnique(str: string): boolean {
  const set = new Set(str);
  return set.size === str.length;
}
