export function validateEmail(email: string): boolean {
  /*
  ^: beginning of string

  [^\s@]+: username

  +@: @ symbol

  [^\s@]+: domain

  +\.: period symbol

  [^\s@]+: tld

  +$: rest of string
  */
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
