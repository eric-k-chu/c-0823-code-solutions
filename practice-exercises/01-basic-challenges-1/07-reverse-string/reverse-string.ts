export function reverseString(str: string): string {
  const reverse = [...str];
  let i = 0;
  let k = str.length - 1;
  while (i < k) {
    [reverse[i], reverse[k]] = [reverse[k], reverse[i]];
    i++;
    k--;
  }
  return reverse.join('');
}
