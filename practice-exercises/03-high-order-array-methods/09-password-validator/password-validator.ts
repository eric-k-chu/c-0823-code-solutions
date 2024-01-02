export function validatePassword(password: string): boolean {
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasDigit = /\d/.test(password);
  return password.length >= 8 && hasUpperCase && hasLowerCase && hasDigit;
}
