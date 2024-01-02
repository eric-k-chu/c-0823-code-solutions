export function isPalindrome(str: string): boolean {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLocaleLowerCase();
  let i = 0;
  let k = cleanStr.length - 1;
  while (i < k) {
    if (cleanStr[i] !== cleanStr[k]) {
      return false;
    }
    i++;
    k--;
  }
  return true;
}
