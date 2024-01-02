export function permutations(str: string): string[] {
  const perms: string[] = [];

  if (str.length === 0) {
    perms.push('');
    return perms;
  }

  for (let i = 0; i < str.length; i++) {
    const first = str[i];
    const rest = str.slice(0, i) + str.slice(i + 1);

    const restPerms = permutations(rest);

    for (const perm of restPerms) {
      perms.push(first + perm);
    }
  }

  return perms;
}
