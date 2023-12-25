export function findFirstNonRepeatingCharacter(
  str: string
): string | undefined {
  const counts: Record<string, number> = {};
  for (let i = 0; i < str.length; i++) {
    counts[str[i]] = (counts[str[i]] || 0) + 1;
  }

  for (const char in counts) {
    if (counts[char] === 1) return char;
  }

  return undefined;
}
