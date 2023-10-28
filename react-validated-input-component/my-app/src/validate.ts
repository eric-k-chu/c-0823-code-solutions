export function containsAll(pw: string): boolean {
  const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).*$/;
  return regex.test(pw);
}

export function containsUpperCase(pw: string): boolean {
  const regex = /^(?=.*[A-Z]).*$/;
  return regex.test(pw);
}

export function containsDigit(pw: string) {
  const regex = /^(?=.*\d).*$/;
  return regex.test(pw);
}

export function containsSpecialChar(pw: string): boolean {
  const regex = /^(?=.*[!@#$%^&*()]).*$/;
  return regex.test(pw);
}
