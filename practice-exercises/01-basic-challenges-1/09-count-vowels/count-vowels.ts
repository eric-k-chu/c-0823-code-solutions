export function countVowels(str: string): number {
  const vowels = str.match(/[aeiouAEIOU]/g);
  return vowels?.length ?? 0;
}
