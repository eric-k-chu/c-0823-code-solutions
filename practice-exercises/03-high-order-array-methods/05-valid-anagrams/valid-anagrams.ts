/**
 * Checks if two strings are valid anagrams of each other.
 */
export function validAnagrams(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  const chars1 = str1.split('').sort();
  const chars2 = str2.split('').sort();

  for (let i = 0; i < chars1.length; i++) {
    if (chars1[i] !== chars2[i]) return false;
  }
  return true;
}
