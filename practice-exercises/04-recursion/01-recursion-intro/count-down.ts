export function countDown(num: number): void {
  if (num <= 0) {
    console.log('All done!');
  } else {
    console.log(num);
    countDown(--num);
  }
}
