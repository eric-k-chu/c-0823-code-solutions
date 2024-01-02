export function numberRange(startNum: number, endNum: number): number[] {
  if (startNum === endNum) return [startNum];
  return [startNum, ...numberRange(startNum + 1, endNum)];
}
