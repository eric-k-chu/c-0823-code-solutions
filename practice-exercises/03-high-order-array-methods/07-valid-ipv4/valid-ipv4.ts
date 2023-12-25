export function isValidIPv4(input: string): boolean {
  const octets = input.split('.');

  if (octets.length !== 4) return false;

  return octets.every((octet) => {
    if (/^\d+$/.test(octet) === false) return false;

    if (octet.length > 1 && octet[0] === '0') return false;

    if (+octet < 0 || +octet > 255) return false;

    return true;
  });
}
