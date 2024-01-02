/*
3 = Fizz
5 = Buzz
3,5 = FizzBuzz
*/

export function fizzBuzzArray(num: number): (string | number)[] {
  const arr: (string | number)[] = [];
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      arr.push('FizzBuzz');
    } else if (i % 3 === 0) {
      arr.push('Fizz');
    } else if (i % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(i);
    }
  }
  return arr;
}
