import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('returns the even numbers', () => {
    const numbers = [1, 4, 5, 10, 0]; // Arrange
    const result = evenNumbers(numbers); // Act
    expect(result).toEqual([4, 10, 0]); // Assert
  });

  it('returns empty', () => {
    const numbers = [1, 3, 5, 7, 9];
    const result = evenNumbers(numbers);
    expect(result).toEqual([]);
  });
});

describe('toDollars', () => {
  it('returns integer converted to dollars', () => {
    const number = 84;
    const result = toDollars(number);
    expect(result).toEqual('$84.00');
  });

  it('returns float round-up converted to dollars', () => {
    const number = 34.99954;
    const result = toDollars(number);
    expect(result).toEqual('$35.00');
  });

  it('returns float round-down converted to dollars', () => {
    const number = 46.23178;
    const result = toDollars(number);
    expect(result).toEqual('$46.23');
  });

  it('returns float one decimal converted to dollars', () => {
    const number = 67.1;
    const result = toDollars(number);
    expect(result).toEqual('$67.10');
  });
});

describe('divideBy', () => {
  it('returns array of nums where each num is divided by the divisor', () => {
    const numbers = [3, 6, 9, 12, 15];
    const divisor = 3;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('returns empty', () => {
    const numbers: number[] = [];
    const divisor = 5;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([]);
  });

  it('returns a new array', () => {
    const numbers: number[] = [];
    const copy = numbers.map((n) => n);
    const divisor = 5;
    const result = divideBy(numbers, divisor);
    expect(result).toEqual([]);
    expect(numbers).toEqual(copy);
  });
});

describe('multiplyBy', () => {
  it('object is modified, where values are multiplied by multiplier', () => {
    const obj = { a: 5, b: 1, c: 3 };
    multiplyBy(obj, 3);
    expect(obj).toEqual({ a: 15, b: 3, c: 9 });
  });

  it('empty object, nothing is changed', () => {
    const obj = {};
    multiplyBy(obj, 3);
    expect(obj).toEqual({});
  });

  it('obj values not numbers, nothing is changed', () => {
    const obj = { a: 'a', b: 'b', c: 'c' };
    multiplyBy(obj, 6);
    expect(obj).toEqual({ a: 'a', b: 'b', c: 'c' });
  });
});
