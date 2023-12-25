/*
ASCII for A is 65 or a is 97
fromCharCode(65) = A or fromCharCode(97) = a
*/

export function findMissingLetter(arr: string[]): string | undefined {
  const charCodes = arr.map((char) => char.charCodeAt(0));

  for (let i = 0; i < charCodes.length; i++) {
    if (charCodes[i] !== charCodes[0] + i) {
      return String.fromCharCode(charCodes[0] + i);
    }
  }
  return undefined;
}
