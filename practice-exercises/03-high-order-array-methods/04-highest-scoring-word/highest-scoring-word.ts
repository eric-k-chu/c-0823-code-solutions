export function highestScoringWord(str: string): string {
  const words = str.split(' ');
  let max = 0;
  let highestScoringWord = '';

  for (const word of words) {
    const score = word
      .split('')
      .reduce((acc, n) => acc + n.charCodeAt(0) - 'a'.charCodeAt(0), 0);
    if (max < score) {
      max = score;
      highestScoringWord = word;
    }
  }
  return highestScoringWord;
}
